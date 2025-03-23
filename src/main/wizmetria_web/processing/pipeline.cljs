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

;; Define the effect handler function for explicit export
(defn process-text-pipeline-fx
  [{:keys [text on-state-change on-complete]}]
  (let [processing-delay (get-in config/processing-config [:processing-delay-ms])
        start-time (js/Date.now())]
    
    ;; Report initial state
    (when on-state-change
      (on-state-change {:state :processing-text
                        :progress 0
                        :elapsed-ms 0}))
    
    ;; Start text processing
    (js/setTimeout
     (fn []
       ;; Process text in chunks
       (when on-state-change
         (on-state-change {:state :processing-text
                           :progress 50
                           :elapsed-ms (- (js/Date.now) start-time)}))
       
       (js/setTimeout
        (fn []
          ;; Extract words
          (when on-state-change
            (on-state-change {:state :extracting-words
                              :progress 75
                              :elapsed-ms (- (js/Date.now) start-time)}))
          
          (let [text-result (text-proc/process-text text)]
            
            ;; Update with word count
            (when on-state-change
              (on-state-change {:state :finding-symmetry
                                :progress 80
                                :word-count (:word-count text-result)
                                :elapsed-ms (- (js/Date.now) start-time)}))
            
            ;; Start symmetry processing
            (js/setTimeout
             (fn []
               (when on-state-change
                 (on-state-change {:state :mirror-symmetry
                                   :progress 85
                                   :elapsed-ms (- (js/Date.now) start-time)}))
               
               (js/setTimeout
                (fn []
                  (when on-state-change
                    (on-state-change {:state :rotational-symmetry
                                      :progress 90
                                      :elapsed-ms (- (js/Date.now) start-time)}))
                  
                  (js/setTimeout
                   (fn []
                     (when on-state-change
                       (on-state-change {:state :calculating-stats
                                         :progress 95
                                         :elapsed-ms (- (js/Date.now) start-time)}))
                     
                     ;; Final processing step
                     (let [stats (sym-proc/process-symmetry (:unique-words text-result))]
                       
                       ;; Mark as done
                       (when on-state-change
                         (on-state-change {:state :done
                                           :progress 100
                                           :elapsed-ms (- (js/Date.now) start-time)}))
                       
                       ;; Complete with results
                       (when on-complete
                         (on-complete (merge text-result {:stats stats})))))
                   processing-delay))
                 processing-delay))
              processing-delay)))
        processing-delay))
     processing-delay)))

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