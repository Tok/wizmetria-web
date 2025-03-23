(ns wizmetria-web.processing
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            [wizmetria-web.config :as config]
            [wizmetria-web.sym :as sym]))

;; -- Pure data processing functions --

(defn extract-words 
  "Extract words from text, filtering by minimum length"
  [text min-length]
  (-> text
      (str/replace #"[^a-zA-Z\s]" " ")
      (str/replace #"\s+" " ")
      (str/trim)
      (str/upper-case)
      (str/split #"\s+")
      (->> (filter #(>= (count %) min-length))
           (into #{}))))

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
  [unique-words mirror-results rotation-results top-n]
  (let [total-words (count unique-words)
        mirror-count (count (:words mirror-results))
        rotation-count (count (:words rotation-results))]
    {:total-words total-words
     :mirror {:count mirror-count
              :by-axis (:by-axis mirror-results)
              :top-n (take top-n (sort-by (comp - count) (:words mirror-results)))}
     :rotation {:count rotation-count
                :words (:sorted rotation-results)
                :top-n (take top-n (:sorted rotation-results))}}))

;; -- Processing pipeline --

(defn process-text
  "Process the full text and find all symmetric words"
  [text]
  (let [min-word-length (get-in config/processing-config [:min-word-length])
        top-words-count (get-in config/ui-config [:top-words-to-show])
        unique-words (extract-words text min-word-length)]
    
    ;; Return values and function for progressive processing
    {:unique-words unique-words
     :word-count (count unique-words)
     :process-symmetry 
     (fn []
       (let [mirror-results (find-symmetric-words unique-words)
             rotation-results (find-rotation-words unique-words)
             stats (calculate-statistics unique-words 
                                        mirror-results 
                                        rotation-results 
                                        top-words-count)]
         stats))}))

;; -- Re-frame effects for chunked processing --

(rf/reg-fx
 :process-text-chunks
 (fn [{:keys [text on-chunk-processed on-complete]}]
   (let [chunk-size (get-in config/processing-config [:chunk-size])
         processing-delay (get-in config/processing-config [:processing-delay-ms])
         chunks (partition-all chunk-size text)
         total-chunks (count chunks)
         process-chunk (fn process-chunk [chunk-index]
                         (let [start-idx (* chunk-index chunk-size)
                               end-idx (min (+ start-idx chunk-size) (count text))
                               progress (/ end-idx (count text))
                               finished? (>= end-idx (count text))]
                           
                           ;; Report progress
                           (when on-chunk-processed
                             (on-chunk-processed {:processed-chunks (inc chunk-index)
                                                  :total-chunks total-chunks
                                                  :progress (* 100 progress)}))
                           
                           (if finished?
                             ;; If we're done, process the full text
                             (when on-complete
                               (let [result (process-text text)]
                                 (on-complete result)))
                             
                             ;; Otherwise schedule the next chunk
                             (js/setTimeout 
                              #(process-chunk (inc chunk-index))
                              processing-delay))))]
     
     ;; Start processing with the first chunk
     (process-chunk 0)))) 