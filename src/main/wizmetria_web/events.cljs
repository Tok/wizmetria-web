(ns wizmetria-web.events
  (:require [re-frame.core :as rf]
            [wizmetria-web.config :as config]
            [wizmetria-web.processing :as processing]
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
   (let [reader (js/FileReader.)]
     (set! (.-onload reader)
           (fn [e]
             (let [content (.. e -target -result)]
               (rf/dispatch [:prepare-text-processing content]))))
     (set! (.-onprogress reader)
           (fn [e]
             (when (.-lengthComputable e)
               (let [progress (/ (.-loaded e) (.-total e))]
                 (rf/dispatch [:update-processing-progress
                              {:status :reading
                               :progress (* 100 progress)}])))))
     (.readAsText reader file))))

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
   {:db (assoc db :processing-state 
              {:status :processing
               :progress 0})
    :process-text-chunks 
    {:text text
     :on-chunk-processed 
     (fn [progress-data]
       (rf/dispatch [:update-processing-progress
                    (assoc progress-data :status :processing)]))
     :on-complete
     (fn [result]
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
                        :progress 0}])
          
          ;; Short delay then process symmetry
          (js/setTimeout
           (fn []
             (let [calculation-delay (get-in config/processing-config [:symmetry-calculation-delay-ms])]
               ;; This is where the heavy calculation happens
               (js/setTimeout
                (fn []
                  (let [stats ((:process-symmetry result))]
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