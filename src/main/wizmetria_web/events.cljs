(ns wizmetria-web.events
  (:require [re-frame.core :as rf]
            [wizmetria-web.sym :as sym]))

;; -- Events for file processing --

(rf/reg-event-fx
 :process-file
 (fn [{:keys [db]} [_ file]]
   (try
     {:db (assoc db :processing-state {:status :reading 
                                       :file-name (.-name file)
                                       :file-obj file  ;; Store file object for possible retry
                                       :progress 0})
      :fx [[:read-file-async file]]}
     (catch js/Error e
       {:db (assoc db :processing-state {:status :error 
                                         :error-message "Could not process file"
                                         :details (.-message e)
                                         :file-obj file}) ;; Store file even on error
        :fx [[:log-error e]]}))))

(rf/reg-fx
 :read-file-async
 (fn [file]
   (let [reader (js/FileReader.)
         file-size (.-size file)
         start-time (js/Date.now())
         ;; For small files, we'll simulate progress
         simulate-progress? (< file-size (* 1024 1024))
         progress-interval (when simulate-progress?
                             (js/setInterval
                              (fn []
                                ;; Calculate artificial progress based on elapsed time
                                ;; Assuming small files take about 2 seconds max
                                (let [elapsed (- (js/Date.now) start-time)
                                      artificial-progress (min 90 (/ (* elapsed 100) 2000))]
                                  (rf/dispatch [:update-processing-progress
                                               {:status :reading
                                                :progress artificial-progress}])))
                              100))]
     
     ;; Error handling for file reading
     (set! (.-onerror reader)
           (fn [e]
             (when simulate-progress?
               (js/clearInterval progress-interval))
             (js/console.error "Error reading file:", e)
             (rf/dispatch [:update-processing-progress
                          {:status :error
                           :error-message "Could not read file"
                           :details (str "Error: " (.-message e))}])))
     
     (set! (.-onload reader)
           (fn [e]
             ;; Clear the interval when the file is fully loaded
             (when simulate-progress?
               (js/clearInterval progress-interval))
             
             ;; Defensive check for null content
             (let [content (.. e -target -result)]
               (if (or (nil? content) (empty? content))
                 ;; Handle empty file
                 (rf/dispatch [:update-processing-progress
                              {:status :error
                               :error-message "Empty file"
                               :details "The file appears to be empty"}])
                 
                 (do
                   ;; Set progress to 100% explicitly
                   (rf/dispatch [:update-processing-progress
                                {:status :reading
                                 :progress 100}])
                   
                   ;; Small delay to show 100% before switching to processing
                   (js/setTimeout
                    (fn []
                      (rf/dispatch [:prepare-text-processing content]))
                    200))))))
     
     (set! (.-onprogress reader)
           (fn [e]
             ;; For larger files, we still use the real progress
             (when (and (.-lengthComputable e) (not simulate-progress?))
               (let [progress (/ (.-loaded e) (.-total e))]
                 (rf/dispatch [:update-processing-progress
                              {:status :reading
                               :progress (* 100 progress)}])))))
     
     ;; Start reading the file
     (try
       (.readAsText reader file)
       (catch js/Error err
         (js/console.error "Exception reading file:", err)
         (rf/dispatch [:update-processing-progress
                      {:status :error
                       :error-message "File reading failed"
                       :details (.-message err)}]))))))

(rf/reg-fx
 :log-error
 (fn [error]
   (.error js/console "Error in file processing:" error)))

(rf/reg-event-db
 :update-processing-progress
 (fn [db [_ state]]
   (update db :processing-state merge state)))

(rf/reg-event-fx
 :prepare-text-processing
 (fn [{:keys [db]} [_ text]]
   (js/console.log "Starting text processing with text length:" (count text))
   {:db (assoc db :processing-state {:status :processing
                                    :file-obj (:file-obj db)})
    :process-text-pipeline
    {:text text
     :on-state-change
     (fn [state-data]
       (js/console.log "Processing state change:", (clj->js state-data))
       (rf/dispatch [:update-processing-progress
                    (assoc state-data :status (:state state-data))]))
     :on-complete
     (fn [result]
       (js/console.log "Processing complete, result:", (clj->js result))
       (rf/dispatch [:set-wordlist-stats (:stats result)]))
     :on-error
     (fn [error-info]
       (js/console.error "Processing error:", (clj->js error-info))
       (rf/dispatch [:handle-processing-error error-info]))}}))

(rf/reg-event-fx
 :execute-text-processing
 (fn [{:keys [db]} [_ text]]
   (js/console.log "Starting chunked text processing with text length:" (count text))
   {:db (assoc db :processing-state {:status :processing
                                    :file-obj (:file-obj db)})
    :process-text-chunks
    {:text text
     :on-progress
     (fn [progress-data]
       (js/console.log "Chunk processing progress:", (clj->js progress-data))
       (rf/dispatch [:update-processing-progress
                    (assoc progress-data :status (:state progress-data))]))
     :on-complete
     (fn [result]
       (js/console.log "Chunked processing complete, result:", (clj->js result))
       (rf/dispatch [:set-wordlist-stats (:stats result)]))}}))

(rf/reg-event-fx
 :set-wordlist-stats
 (fn [{:keys [db]} [_ stats]]
   (js/console.log "Setting wordlist stats:" (clj->js stats))
   (js/console.log "Mirror stats:" (clj->js (:mirror stats)))
   (js/console.log "Rotation stats:" (clj->js (:rotation stats)))
   
   ;; Debug total counts
   (when stats
     (js/console.log "Total words:" (get stats :total-words 0))
     (js/console.log "Mirror count:" (get-in stats [:mirror :count] 0))
     (js/console.log "Rotation count:" (get-in stats [:rotation :count] 0))
     
     ;; Check if we have any words in the top-n lists
     (js/console.log "Mirror top-n count:" (count (get-in stats [:mirror :top-n] [])))
     (js/console.log "Rotation top-n count:" (count (get-in stats [:rotation :top-n] []))))
   
   ;; First update the UI with the stats
   (let [updated-db (assoc db 
                           :wordlist-stats stats
                           :processing-state {:status :complete})]
     
     ;; Then terminate the worker after a delay
     (js/setTimeout 
      (fn [] 
        (js/console.log "Terminating worker after displaying results")
        (rf/dispatch-sync [:terminate-worker]))
      5000)  ;; 5-second delay
     
     ;; Return updated db
     {:db updated-db})))

;; -- Events for word symmetry --

(rf/reg-event-db
 :update-word
 (fn [db [_ word]]
   (assoc db :word word)))

(rf/reg-event-db
 :check-symmetry
 (fn [db _]
   (let [word (:word db)
         results (when (not-empty word)
                   (sym/evaluate [(sym/clean word)]))]
     (assoc db :symmetry-results results))))

;; -- UI-related events --

(rf/reg-event-db
 :toggle-shiny-effects
 (fn [db _]
   (update db :shiny-effects-enabled not)))

;; -- Error handling events --

(rf/reg-event-db
 :clear-processing-error
 (fn [db _]
   (update db :processing-state dissoc :error-message :details :status)))

(rf/reg-event-fx
 :log-error
 (fn [_ [_ error context]]
   (js/console.error "Application error:", error, "Context:", (clj->js context))
   nil))

(rf/reg-event-fx
 :handle-processing-error
 (fn [{:keys [db]} [_ error-info]]
   (let [current-state (get db :processing-state {})
         merged-state (merge
                       current-state
                       {:status :error
                        :error-message (or (:error-message error-info) 
                                          "An error occurred during processing")
                        :details (or (:details error-info) 
                                    (when-let [err (:error error-info)]
                                      (.-message err)))})]
     {:db (assoc db :processing-state merged-state)
      :fx [[:log-error [(:error error-info) merged-state]]]})))

;; -- Worker cleanup events --

(rf/reg-event-fx
 :terminate-worker
 (fn [_ _]
   {:worker-terminate nil}))

;; Handle application shutdown
(rf/reg-event-fx
 :shutdown
 (fn [{:keys [_db]} _]
   {:worker-terminate nil})) 