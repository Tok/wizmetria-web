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
   ;; Log start of processing to debug
   (js/console.log "Starting text processing with" (count text) "characters")
   
   (let [chunk-size (get-in config/processing-config [:chunk-size])
         processing-delay (get-in config/processing-config [:processing-delay-ms])
         total-length (count text)
         
         ;; Use smaller chunks for more frequent progress updates
         adjusted-chunk-size (max 250 (min chunk-size (Math/ceil (/ total-length 50))))
         
         ;; Create vector of chunks for direct indexing access
         chunks (vec (partition-all adjusted-chunk-size text))
         total-chunks (count chunks)
         
         ;; Log chunks info for debugging
         _ (js/console.log "Created" total-chunks "chunks of size" adjusted-chunk-size)
         
         start-time (js/Date.now())
         
         ;; Create an atom to store processed text
         processed-text (atom "")
         processed-chunks (atom 0)
         
         ;; Send immediate progress update to show activity
         _ (when on-chunk-processed
             (on-chunk-processed {:processed-chunks 0
                                  :total-chunks total-chunks
                                  :bytes-processed 0
                                  :total-bytes total-length
                                  :elapsed-ms 0
                                  :processing-speed 0
                                  :progress 0.5})) ;; Start with small visible progress
         
         ;; Direct processing function without recursion to avoid potential stack issues
         process-chunks (fn []
                          (let [chunk-processor 
                                (fn process-next-chunk []
                                  (let [current-chunk @processed-chunks]
                                    (js/console.log "Processing chunk" current-chunk "of" total-chunks)
                                    
                                    (if (>= current-chunk total-chunks)
                                      ;; All chunks processed - finalize
                                      (do
                                        ;; Final 100% progress update
                                        (when on-chunk-processed
                                          (on-chunk-processed {:processed-chunks total-chunks
                                                              :total-chunks total-chunks
                                                              :bytes-processed total-length
                                                              :total-bytes total-length
                                                              :elapsed-ms (- (js/Date.now) start-time)
                                                              :processing-speed 0
                                                              :progress 100}))
                                        
                                        ;; Complete processing after small delay to ensure UI updates
                                        (js/setTimeout
                                         (fn []
                                           (js/console.log "Processing complete, calling on-complete")
                                           (when on-complete
                                             (let [final-text @processed-text
                                                   result (process-text final-text)]
                                               (on-complete result))))
                                         100))
                                      
                                      ;; Process this chunk then schedule next
                                        (try
                                          ;; Get the chunk and process it
                                          (let [chunk (nth chunks current-chunk)
                                                chunk-text (apply str chunk)]
                                            
                                            ;; Add to processed text
                                            (swap! processed-text str chunk-text)
                                            
                                            ;; Update processed count
                                            (swap! processed-chunks inc)
                                            
                                            ;; Calculate progress
                                            (let [next-chunk (inc current-chunk)
                                                  elapsed (- (js/Date.now) start-time)
                                                  progress-pct (* (/ next-chunk total-chunks) 100)
                                                  processed-count (* next-chunk adjusted-chunk-size)
                                                  processing-speed (if (> elapsed 0)
                                                                    (/ processed-count elapsed)
                                                                    0)]
                                              
                                              ;; Report progress - ensure it's never 0 after start
                                              (when on-chunk-processed
                                                (on-chunk-processed {:processed-chunks next-chunk
                                                                    :total-chunks total-chunks
                                                                    :bytes-processed (min total-length processed-count)
                                                                    :total-bytes total-length
                                                                    :elapsed-ms elapsed
                                                                    :processing-speed processing-speed
                                                                    :progress (max 0.5 (min 99 progress-pct))}))
                                              
                                              ;; Schedule next chunk with delay
                                              (js/setTimeout process-next-chunk processing-delay)))
                                          (catch js/Error err
                                            (js/console.error "Error processing chunk" current-chunk ":", err)
                                            ;; Try to continue with next chunk despite error
                                            (swap! processed-chunks inc)
                                            (js/setTimeout process-next-chunk processing-delay))))))]
                            
                            ;; Start the processing chain
                            (js/setTimeout chunk-processor 50)))]
     
     ;; Handle empty text or edge cases
     (if (or (nil? text) (empty? text) (= 0 total-chunks))
       ;; Complete immediately for empty text
       (do
         (js/console.log "Empty text, completing immediately")
         (when on-complete
           (on-complete (process-text ""))))
       
       ;; Start the processing chain for normal text
       (process-chunks)))))