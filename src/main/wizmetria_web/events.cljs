(ns wizmetria-web.events
  (:require [re-frame.core :as rf]
            [wizmetria-web.config :as config]
            [wizmetria-web.processing :refer [extract-words process-text]]
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
   (let [chunk-size (get-in config/processing-config [:chunk-size])
         total-length (count text)
         chunks (partition-all chunk-size text)
         total-chunks (count chunks)]
     {:db (assoc db :processing-state 
                {:status :processing
                 :total-chunks total-chunks
                 :processed-chunks 0
                 :progress 0})
      :fx [[:process-chunk {:text text
                           :chunk-index 0
                           :chunk-size chunk-size
                           :total-length total-length}]]})))

(rf/reg-fx
 :process-chunk
 (fn [{:keys [text chunk-index chunk-size total-length]}]
   (let [start-idx (* chunk-index chunk-size)
         end-idx (min (+ start-idx chunk-size) total-length)
         finished? (>= end-idx total-length)
         progress (/ end-idx total-length)]
     
     (if finished?
       ;; If finished, process the entire text at once
       (let [min-word-length (get-in config/processing-config [:min-word-length])
             unique-words (extract-words text min-word-length)
             
             ;; Update UI that we're finding symmetry
             _ (rf/dispatch [:update-processing-progress 
                            {:status :finding-symmetry
                             :progress 0
                             :word-count (count unique-words)}])
             
             ;; Find symmetry (time-consuming part) with short delay for UI
             _ (js/setTimeout 
                #(do
                   ;; First stage - mirror symmetry
                   (rf/dispatch [:update-processing-progress 
                                {:status :mirror-symmetry
                                 :progress 50}])
                   
                   ;; Short delay for UI, then process symmetry
                   (js/setTimeout
                    (fn []
                      (let [calculation-delay (get-in config/processing-config [:symmetry-calculation-delay-ms])]
                        ;; This is where the heavy calculation happens
                        (js/setTimeout
                         (fn []
                           (let [result (process-text text)
                                 stats ((:process-symmetry result))]
                             (rf/dispatch [:update-processing-progress 
                                          {:status :done
                                           :progress 100}])
                             (rf/dispatch [:set-wordlist-stats stats])))
                         calculation-delay)))
                    10))
                30) ;; Short delay for UI to update
             ]
         nil) ;; No immediate return, async processing
       
       ;; Process the next chunk
       (do
         (rf/dispatch [:update-processing-progress 
                      {:status :processing
                       :processed-chunks (inc chunk-index)
                       :progress (* 100 progress)}])
         (js/setTimeout 
          #(rf/dispatch-sync [:process-next-chunk 
                             {:text text
                              :chunk-index (inc chunk-index)
                              :chunk-size chunk-size
                              :total-length total-length}])
          10)))) ;; Small delay to keep UI responsive
   nil))

(rf/reg-event-fx
 :process-next-chunk
 (fn [{:keys [_]} [_ params]]
   {:fx [[:process-chunk params]]}))

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