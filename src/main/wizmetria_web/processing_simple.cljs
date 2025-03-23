(ns wizmetria-web.processing-simple
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            [wizmetria-web.sym :as sym]))

;; -- Simple processing functions --

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

;; -- Simplified process-chunk function --
(rf/reg-fx
 :process-chunk-simple
 (fn [{:keys [text chunk-index chunk-size total-length]}]
   (let [start-idx (* chunk-index chunk-size)
         end-idx (min (+ start-idx chunk-size) total-length)
         finished? (>= end-idx total-length)
         progress (/ end-idx total-length)]
     
     (js/console.log "Processing chunk" chunk-index "of" (Math/ceil (/ total-length chunk-size)))
     
     (if finished?
       ;; If finished, process the entire text at once
       (let [words (-> text
                      (str/replace #"[^a-zA-Z\s]" " ")
                      (str/replace #"\s+" " ")
                      (str/trim)
                      (str/upper-case)
                      (str/split #"\s+"))
             unique-words (into #{} (filter #(>= (count %) 3) words))
             
             ;; Update UI that we're finding symmetry
             _ (rf/dispatch [:update-processing-progress 
                            {:status :finding-symmetry
                             :progress 100
                             :word-count (count unique-words)}])
             
             ;; Find words with symmetry (time-consuming part)
             _ (js/setTimeout 
                #(do
                   ;; Find mirror symmetry words
                   (rf/dispatch [:update-processing-progress 
                                {:status :mirror-symmetry
                                 :progress 0}])
                   
                   (let [mirror-sym-words (filter sym/symmetric-word? unique-words)
                         mirror-by-axis (group-by sym/axis-id-for-word mirror-sym-words)
                         
                         _ (rf/dispatch [:update-processing-progress 
                                        {:status :rotational-symmetry
                                         :progress 50}])
                         
                         ;; Find rotational symmetry words
                         rotation-sym-words (filter (fn [word] 
                                                   (and (sym/rotation-symmetric-word? word)
                                                        (not (sym/symmetric-word? word))))
                                                 unique-words)
                         
                         ;; Prepare stats
                         total-words (count unique-words)
                         mirror-count (count mirror-sym-words)
                         rotation-count (count rotation-sym-words)
                         
                         ;; Sort by length for each axis
                         mirror-by-axis-sorted (into {} 
                                                  (map (fn [[axis words]]
                                                         [axis (sort-by (comp - count) words)])
                                                       mirror-by-axis))
                         rotation-sorted (sort-by (comp - count) rotation-sym-words)
                         
                         stats {:total-words total-words
                                :mirror {:count mirror-count
                                         :by-axis mirror-by-axis-sorted
                                         :top-n (take 10 (sort-by (comp - count) mirror-sym-words))}
                                :rotation {:count rotation-count
                                          :words rotation-sorted
                                          :top-n (take 10 rotation-sorted)}}]
                     
                     (rf/dispatch [:update-processing-progress 
                                  {:status :done
                                   :progress 100}])
                     (rf/dispatch [:set-wordlist-stats stats])))
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
          #(rf/dispatch-sync [:process-next-chunk-simple 
                             {:text text
                              :chunk-index (inc chunk-index)
                              :chunk-size chunk-size
                              :total-length total-length}])
          30)))) ;; Slightly longer delay to keep UI responsive
   nil))

;; -- New event for simplified processing --
(rf/reg-event-fx
 :process-next-chunk-simple
 (fn [{:keys [__]} [_ params]]
   {:fx [[:process-chunk-simple params]]}))

;; -- New event to prepare text using simplified method --
(rf/reg-event-fx
 :prepare-text-processing-simple
 (fn [{:keys [db]} [_ text]]
   (let [chunks (partition-all 5000 text)
         total-chunks (count chunks)]
     {:db (assoc db :processing-state 
                {:status :processing
                 :total-chunks total-chunks
                 :processed-chunks 0
                 :progress 0})
      :fx [[:process-chunk-simple {:text text
                                  :chunk-index 0
                                  :chunk-size 5000
                                  :total-length (count text)}]]}))) 