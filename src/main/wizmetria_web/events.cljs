(ns wizmetria-web.events
  (:require [re-frame.core :as rf]
            [wizmetria-web.config :as config]
            [wizmetria-web.sym :as sym]))

;; -- Events for file processing --

(rf/reg-event-fx
 :process-file
 (fn [{:keys [db]} [_ file]]
   (try
     {:db (assoc db :processing-state {:status :reading 
                                       :file-name (.-name file)
                                       :progress 0})
      :fx [[:read-file-async file]]}
     (catch js/Error e
       {:db (assoc db :processing-state {:status :error 
                                         :error-message "Could not process file"
                                         :details (.-message e)})
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
   ;; Use the simplified processing approach that was working before
   (js/console.log "Using simple processing method")
   (rf/dispatch [:prepare-text-processing-simple text])
   {:db db}))

(rf/reg-event-fx
 :execute-text-processing
 (fn [{:keys [_db]} [_ text]]
   (js/console.log "Starting execute-text-processing with text length:" (count text))
   {:process-text-chunks 
    {:text text
     :on-chunk-processed 
     (fn [progress-data]
       (js/console.log "Chunk processed:", (clj->js progress-data))
       (rf/dispatch [:update-processing-progress
                    (assoc progress-data :status :processing)]))
     :on-complete
     (fn [result]
       (js/console.log "Text processing complete, result:" (clj->js result))
       ;; First update to show we're finding symmetry
       (rf/dispatch [:update-processing-progress 
                    {:status :finding-symmetry
                     :progress 0
                     :word-count (:word-count result)}])
       
       ;; Small delay for UI update before heavy processing
       (js/setTimeout 
        (fn []
          ;; Update to show mirror symmetry processing
          (rf/dispatch [:update-processing-progress 
                       {:status :mirror-symmetry
                        :progress 50}])
          
          ;; Short delay then process symmetry
          (js/setTimeout
           (fn []
             (let [calculation-delay (get-in config/processing-config [:symmetry-calculation-delay-ms])]
               ;; This is where the heavy calculation happens
               (js/setTimeout
                (fn []
                  (js/console.log "Starting symmetry calculation")
                  (let [stats ((:process-symmetry result))]
                    (js/console.log "Symmetry calculation complete, found stats:" (clj->js stats))
                    (rf/dispatch [:update-processing-progress 
                                 {:status :done
                                  :progress 100}])
                    (rf/dispatch [:set-wordlist-stats stats])))
                calculation-delay)))
           10))
        10))}}))

(rf/reg-event-db
 :set-wordlist-stats
 (fn [db [_ stats]]
   (assoc db 
          :wordlist-stats stats
          :processing-state {:status :complete})))

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