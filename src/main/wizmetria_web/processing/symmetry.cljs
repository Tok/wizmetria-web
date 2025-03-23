(ns wizmetria-web.processing.symmetry
  (:require [wizmetria-web.sym :as sym]
            [wizmetria-web.config :as config]))

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