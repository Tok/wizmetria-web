(ns wizmetria-web.processing.worker
  (:require [re-frame.core :as rf]
            [wizmetria-web.config :as config]))

;; -- Worker Management --

(def worker-instance (atom nil))
(def message-callbacks (atom {}))
(def batch-counter (atom 0))

(defn get-worker
  "Get or create a web worker instance"
  []
  (if-let [worker @worker-instance]
    worker
    (let [new-worker (js/Worker. "js/symmetry-worker.js")]
      (reset! worker-instance new-worker)
      
      ;; Set up message handler
      (set! (.-onmessage new-worker)
            (fn [event]
              (let [data (.-data event)
                    batch-id (aget data "batchId")
                    status (aget data "status")]
                (js/console.log "Worker message received:" (clj->js data))
                (when-let [callback (get @message-callbacks batch-id)]
                  (if (= status "error")
                    (do
                      (js/console.error "Worker error for batch" batch-id ":" (aget data "error"))
                      (callback {:error (aget data "error")
                                 :stack (aget data "stack")}))
                    (let [result (aget data "result")]
                      (js/console.log "Worker success for batch" batch-id)
                      (if result
                        (do
                          (js/console.log "Result structure:" (js/Object.keys result))
                          (when-let [mirror (aget result "mirror")]
                            (js/console.log "Mirror words:" (.-length (aget mirror "words")))
                            (js/console.log "Mirror by-axis keys:" (js/Object.keys (or (aget mirror "by-axis") (aget mirror "byAxis") {}))))
                          
                          (callback {:result (aget data "result")
                                     :batch-type (aget data "batchType")}))
                        (js/console.error "Received null result from worker"))))
                  ;; Remove the callback after it's used
                  (swap! message-callbacks dissoc batch-id)))))
      
      ;; Set up error handler
      (set! (.-onerror new-worker)
            (fn [error]
              (js/console.error "Worker error:", error)
              (rf/dispatch [:handle-processing-error 
                            {:error-message "Web Worker error"
                             :details (.-message error)}])))
      
      new-worker)))

(defn terminate-worker
  "Terminate the worker if it exists"
  []
  (when-let [worker @worker-instance]
    (.terminate worker)
    (reset! worker-instance nil)
    (reset! message-callbacks {})
    (reset! batch-counter 0)))

(defn process-batch-in-worker
  "Process a batch of words in the web worker"
  [words batch-type callback]
  (let [worker (get-worker)
        batch-id (swap! batch-counter inc)]
    
    (js/console.log "Starting batch" batch-id "with" (count words) "words")
    
    ;; Print sample words for debugging
    (when (seq words)
      (js/console.log "Sample words in batch:" (vec (take 5 words)))
      (js/console.log "Word types:" (map type (take 5 words))))
    
    ;; Check if we have any empty words
    (when (some empty? words)
      (js/console.warn "Empty words detected in batch"))
    
    ;; Store callback for this batch
    (swap! message-callbacks assoc batch-id callback)
    
    ;; Send the command to the worker
    (.postMessage worker 
                  (clj->js {:command "process"
                            :words (into-array words)
                            :batchType batch-type
                            :batchId batch-id}))))

;; -- Re-frame Effects --

(rf/reg-fx
 :worker-process-batch
 (fn [{:keys [words batch-type on-complete on-error]}]
   (try
     (process-batch-in-worker
      words
      batch-type
      (fn [result]
        (if (:error result)
          (when on-error
            (on-error {:error-message "Error in worker processing"
                       :details (:error result)}))
          (when on-complete
            (on-complete (:result result))))))
     (catch js/Error err
       (js/console.error "Error setting up worker batch:", err)
       (when on-error
         (on-error {:error-message "Failed to start worker processing"
                    :details (.-message err)}))))))

(rf/reg-fx
 :worker-terminate
 (fn [_]
   (terminate-worker)))

;; -- Batched processing functions --

(defn create-word-batches
  "Split words into multiple batches for parallel processing"
  [words]
  (let [batch-size (get-in config/processing-config [:worker-batch-size] 5000)
        total-count (count words)
        batch-count (Math/ceil (/ total-count batch-size))
        batches (partition-all batch-size words)]
    {:batches (vec batches)
     :batch-count batch-count
     :total-words total-count}))

(defn process-words-in-batches
  "Process word symmetry in batches using web workers"
  [words on-progress on-complete on-error]
  (let [{:keys [batches batch-count]} (create-word-batches words)
        mirror-results (atom {:words [] :by-axis {}})
        rotation-results (atom {:words [] :sorted []})
        completed-batches (atom 0)]
    
    (js/console.log "Starting batch processing with" batch-count "batches")
    (js/console.log "Sample words:" (take 5 words))
    
    ;; Process each batch
    (doseq [batch batches]
      (process-batch-in-worker
       batch
       nil  ;; Calculate both mirror and rotation
       (fn [result]
         (if (:error result)
           ;; Handle error
           (do
             (js/console.error "Batch processing error:" (clj->js (:error result)))
             (when on-error
               (on-error {:error-message "Error processing word batch"
                          :details (:error result)})))
           
           ;; Process successful result
           (do
             ;; Update completed count
             (swap! completed-batches inc)
             (js/console.log "Batch completed:" @completed-batches "/" batch-count)
             
             ;; Update results
             (let [mirror-batch (get-in result [:result :mirror])
                   rotation-batch (get-in result [:result :rotation])]
               
               (js/console.log "Mirror batch result:" (clj->js mirror-batch))
               (js/console.log "Rotation batch result:" (clj->js rotation-batch))
               
               ;; Update mirror words
               (swap! mirror-results
                      (fn [current]
                        {:words (into (:words current) (:words mirror-batch))
                         :by-axis (merge-with into 
                                              (:by-axis current) 
                                              (or (:by-axis mirror-batch) 
                                                  (:byAxis mirror-batch) 
                                                  {}))}))
               
               ;; Update rotation words
               (swap! rotation-results
                      (fn [current]
                        {:words (into (:words current) (:words rotation-batch))
                         :sorted (into (:sorted current) 
                                       (or (:sorted rotation-batch) []))})))
             
             ;; Update progress
             (when on-progress
               (let [progress-pct (* (/ @completed-batches batch-count) 100)]
                 (on-progress {:progress progress-pct
                               :completed-batches @completed-batches
                               :total-batches batch-count})))
             
             ;; Check if all batches are done
             (when (= @completed-batches batch-count)
               ;; Sort the combined results
               (let [sorted-mirror-results
                     (update-in @mirror-results [:by-axis] 
                                #(into {} (map (fn [[k v]] 
                                                 [k (sort-by (comp - count) v)]) 
                                               %)))
                     sorted-rotation-results
                     (update @rotation-results :sorted #(sort-by (comp - count) %))]
                 
                 (js/console.log "All batches completed. Final results:")
                 (js/console.log "Mirror words:" (count (:words @mirror-results)))
                 (js/console.log "Rotation words:" (count (:words @rotation-results)))
                 
                 ;; Call the completion callback
                 (when on-complete
                   (on-complete {:mirror sorted-mirror-results
                                 :rotation sorted-rotation-results}))))))))))) 