(ns wizmetria-web.processing.pipeline
  (:require [re-frame.core :as rf]
            [wizmetria-web.config :as config]
            [wizmetria-web.processing.text :as text-proc]
            [wizmetria-web.processing.symmetry :as sym-proc]))

;; -- Processing state machine --

(def processing-states
  {:idle {:next :reading}
   :reading {:next :processing-text}
   :processing-text {:next :extracting-words}
   :extracting-words {:next :finding-symmetry}
   :finding-symmetry {:next :mirror-symmetry}
   :mirror-symmetry {:next :rotational-symmetry}
   :rotational-symmetry {:next :calculating-stats}
   :calculating-stats {:next :done}
   :done {:next nil}
   :error {:next nil}})

(defn next-state 
  "Get the next state in the pipeline"
  [current-state]
  (get-in processing-states [current-state :next]))

;; -- Event effects for processing pipeline --

;; Define the function for explicit export
(defn process-text-pipeline-fx
  "Process text and find symmetric words using workers when available"
  [{:keys [text on-state-change on-complete on-error]}]
  (try
    (js/console.log "Starting text processing pipeline with text length:" (count text))
    
    ;; Process text first
    (on-state-change {:state :processing-text
                      :progress 0})
    
    (let [text-result (text-proc/process-text text)
          unique-words (:unique-words text-result)
          word-count (:word-count text-result)]
      
      (js/console.log "Text processed, found" word-count "unique words")
      (on-state-change {:state :extracting-words
                        :progress 75
                        :word-count word-count})
      
      ;; Process symmetry with or without workers
      (js/setTimeout
       (fn []
         (on-state-change {:state :finding-symmetry
                           :progress 80})
         
         ;; Use worker-based processing for symmetry
         (sym-proc/process-symmetry-with-worker 
          unique-words
          
          ;; Progress callback
          (fn [progress-info]
            (js/console.log "Symmetry progress:" (clj->js progress-info))
            (on-state-change (merge progress-info
                                    {:state :finding-symmetry})))
          
          ;; Completion callback  
          (fn [stats]
            (js/console.log "Symmetry processing complete, stats:" (clj->js stats))
            
            ;; Verify stats structure
            (if (and stats 
                     (map? stats)
                     (:mirror stats)
                     (:rotation stats))
              (do
                (js/console.log "Stats structure looks valid:")
                (js/console.log "- Mirror count:" (get-in stats [:mirror :count]))
                (js/console.log "- Rotation count:" (get-in stats [:rotation :count]))
                
                ;; Report completion  
                (on-state-change {:state :done
                                  :progress 100})
                
                ;; Complete with full results
                (on-complete (merge text-result {:stats stats})))
              
              ;; Handle invalid stats structure
              (do
                (js/console.error "Invalid stats structure returned:" (clj->js stats))
                (on-error {:error-message "Invalid symmetry results"
                           :details "The worker returned an incomplete or invalid result structure"}))))
          
          ;; Error callback
          (fn [error-info]
            (js/console.error "Symmetry processing error:" (clj->js error-info))
            (on-error error-info))))
       500))
    (catch js/Error err
      (js/console.error "Error in text processing:" err)
      (when on-error
        (on-error {:error err
                   :error-message "Error processing text"
                   :details (.-message err)})))))

;; Register the effect for use in the current namespace
(rf/reg-fx
 :process-text-pipeline
 process-text-pipeline-fx)

;; -- Chunk-based processing alternative --

;; Define the effect handler function for explicit export
(defn process-text-chunks-fx
  [{:keys [text on-progress on-complete]}]
  ;; Extract chunking information
  (let [chunk-info (text-proc/create-chunks text)
        processing-delay (get-in config/processing-config [:processing-delay-ms])
        processed-text (atom "")
        processed-chunks (atom 0)]
    
    ;; Early progress report
    (when on-progress
      (on-progress {:state :processing-text
                    :progress 0
                    :total-chunks (:total-chunks chunk-info)
                    :processed-chunks 0}))
    
    ;; Define the processing function
    (letfn [(process-next-chunk []
              (let [current-chunk @processed-chunks
                    chunks (:chunks chunk-info)
                    total-chunks (:total-chunks chunk-info)]
                
                (if (>= current-chunk total-chunks)
                  ;; All chunks processed - complete the pipeline
                  (let [final-text @processed-text
                        text-result (text-proc/process-text final-text)]
                    
                    ;; Report extracting words
                    (when on-progress
                      (on-progress {:state :extracting-words
                                    :progress 80
                                    :word-count (:word-count text-result)}))
                    
                    ;; Process symmetry after a delay
                    (js/setTimeout
                     (fn []
                       (when on-progress
                         (on-progress {:state :finding-symmetry
                                       :progress 90}))
                       
                       ;; Calculate symmetry
                       (let [stats (sym-proc/process-symmetry (:unique-words text-result))]
                         
                         ;; Mark as done
                         (when on-progress
                           (on-progress {:state :done
                                         :progress 100}))
                         
                         ;; Complete with results
                         (when on-complete
                           (on-complete (merge text-result {:stats stats})))))
                     processing-delay))
                  
                  ;; Process this chunk
                  (try
                    (let [chunk (nth chunks current-chunk)
                          chunk-text (apply str chunk)]
                      
                      ;; Add to processed text
                      (swap! processed-text str chunk-text)
                      (swap! processed-chunks inc)
                      
                      ;; Calculate progress
                      (let [next-chunk (inc current-chunk)
                            progress-pct (* (/ next-chunk total-chunks) 70)]
                        
                        ;; Report progress
                        (when on-progress
                          (on-progress {:state :processing-text
                                        :progress progress-pct
                                        :processed-chunks next-chunk
                                        :total-chunks total-chunks}))
                        
                        ;; Schedule next chunk
                        (js/setTimeout process-next-chunk processing-delay)))
                    (catch js/Error err
                      (js/console.error "Error processing chunk:" err)
                      (when on-progress
                        (on-progress {:state :error
                                      :error-message "Error processing text chunk"
                                      :details (.-message err)})))))))]
      
      ;; Start processing
      (if (empty? text)
        ;; Handle empty text
        (when on-complete
          (on-complete (text-proc/process-text "")))
        
        ;; Start processing for normal text
        (js/setTimeout process-next-chunk 10)))))

;; Register the effect for use in the current namespace
(rf/reg-fx
 :process-text-chunks
 process-text-chunks-fx) 