(ns wizmetria-web.processing.symmetry
  (:require [wizmetria-web.sym :as sym]
            [wizmetria-web.config :as config]
            [wizmetria-web.processing.worker :as worker]))

;; -- Pure symmetry processing functions --

(defn find-symmetric-words
  "Find words with mirror symmetry and group them by axis"
  [words]
  (let [mirror-sym-words (filter sym/symmetric-word? words)
        mirror-by-axis (group-by sym/axis-id-for-word mirror-sym-words)
        mirror-by-axis-sorted (into {} 
                                (map (fn [[axis words]]
                                       [axis (sort-by (comp - count) words)])
                                     mirror-by-axis))]
    {:words mirror-sym-words
     :by-axis mirror-by-axis-sorted}))

(defn find-rotation-words
  "Find words with rotational symmetry (that don't have mirror symmetry)"
  [words]
  (let [rotation-sym-words (filter (fn [word] 
                                     (and (sym/rotation-symmetric-word? word)
                                          (not (sym/symmetric-word? word))))
                                   words)
        rotation-sorted (sort-by (comp - count) rotation-sym-words)]
    {:words rotation-sym-words
     :sorted rotation-sorted}))

(defn calculate-statistics
  "Calculate statistics for symmetry analysis results"
  [unique-words mirror-results rotation-results]
  (let [total-words (count unique-words)
        mirror-count (count (:words mirror-results))
        rotation-count (count (:words rotation-results))
        top-words-count (get-in config/ui-config [:top-words-to-show])]
    {:total-words total-words
     :mirror {:count mirror-count
              :by-axis (:by-axis mirror-results)
              :top-n (take top-words-count (sort-by (comp - count) (:words mirror-results)))}
     :rotation {:count rotation-count
                :words (:sorted rotation-results)
                :top-n (take top-words-count (:sorted rotation-results))}}))

(defn process-symmetry
  "Complete symmetry processing pipeline"
  [unique-words]
  (let [mirror-results (find-symmetric-words unique-words)
        rotation-results (find-rotation-words unique-words)
        stats (calculate-statistics unique-words 
                                  mirror-results 
                                  rotation-results)]
    stats))

;; -- Enhanced worker-based processing --

(defn worker-enabled?
  "Check if worker-based processing is enabled"
  []
  (get-in config/processing-config [:worker-enabled] false))

(defn process-symmetry-with-worker
  "Process symmetry using web workers for better performance"
  [unique-words on-progress on-complete on-error]
  (js/console.log "Starting symmetry processing with" (count unique-words) "unique words")
  (js/console.log "Worker enabled:" (worker-enabled?))
  
  (if (worker-enabled?)
    ;; Use worker-based processing
    (do
      (js/console.log "Using worker-based processing")
      (worker/process-words-in-batches 
       unique-words
       (fn [progress-data]
         (js/console.log "Worker progress:" (clj->js progress-data))
         (on-progress {:state :processing-symmetry
                       :progress (+ 80 (* 0.15 (:progress progress-data)))
                       :batch-progress progress-data}))
       (fn [results]
         ;; Create full statistics
         (js/console.log "Worker processing complete, results:" (clj->js results))
         (let [mirror-results (:mirror results)
               rotation-results (:rotation results)
               _ (js/console.log "Mirror results:" (clj->js mirror-results))
               _ (js/console.log "Rotation results:" (clj->js rotation-results))
               stats (calculate-statistics unique-words 
                                          mirror-results 
                                          rotation-results)]
           (js/console.log "Calculated stats:" (clj->js stats))
           (on-complete stats)))
       (fn [error]
         (js/console.error "Worker processing error:" (clj->js error))
         (on-error error))))
    
    ;; Use traditional single-threaded processing
    (try
      (js/console.log "Using single-threaded processing")
      (let [stats (process-symmetry unique-words)]
        (js/console.log "Single-threaded processing complete, stats:" (clj->js stats))
        (on-complete stats))
      (catch js/Error err
        (js/console.error "Error in single-threaded processing:" err)
        (when on-error
          (on-error {:error-message "Error processing symmetry"
                     :details (.-message err)})))))) 