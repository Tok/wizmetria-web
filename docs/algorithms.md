# Wizmetria Algorithms Documentation

This document provides detailed explanations of the key algorithms used in the Wizmetria application.

## Symmetry Detection Algorithms

### 1. Ordinal Value Mapping

Letters are mapped to numerical values (A=1, B=2, ..., Z=26):

```clojure
(defn- ordinal 
  "A=1, B=2, C=3 .. Z=26" 
  [c] 
  (- (.charCodeAt c 0) (.charCodeAt "@" 0)))
```

### 2. Mirror Symmetry Detection

The core algorithm for detecting mirror symmetry checks if the letters of a word, when mapped to a circular alphabet, are symmetric across an axis.

**How it works:**
1. For each letter pair from opposite ends of the word, calculate if their ordinal values sum to a constant
2. For odd-length words, the middle letter must lie on the axis of symmetry
3. If all pairs satisfy this property, the word has mirror symmetry

```clojure
(defn- sym? [word total]
  (let [w (util/clean word)]
    (letfn [(on? [] (-> w first (on-axis? total)))
            (accept? [a b] (if (= a b) (on?) (= (+ a b) total)))]
      (case (count w)
        0 true 
        1 (on-axis? (first w) total)
        (let [a (-> w first ordinal) 
              b (-> w last ordinal)
              next (apply str (-> w (subs 1) drop-last))]
          (and (accept? a b) (recur next total)))))))

(defn symmetric-word? [word]
  (let [cleaned (util/clean word)
        mirror-sym (some (fn [sum] (sym? cleaned sum)) (range 1 53))]
    (or mirror-sym (rotation-sym? cleaned))))
```

### 3. Rotational Symmetry Detection

Rotational symmetry occurs when a word's letters, when mapped to a circle, form a pattern that can be rotated to match itself.

**How it works:**
1. For each letter, check if there's a corresponding letter at position (ordinal + 13) % 26
2. Check the frequency of each letter to ensure it matches its rotational partner
3. If all letters satisfy this property, the word has rotational symmetry

```clojure
(defn rotation-symmetric-word? [word]
  (let [cleaned (util/clean word)
        chars (vec (seq cleaned))
        char-freqs (frequencies chars)]
    (and (> (count chars) 2)
         (every? (fn [[c freq]]
                   (let [ord (ordinal c)
                         pair-ord (mod (+ ord 13) 26)
                         pair-char (char (+ pair-ord (.charCodeAt "@" 0)))]
                     (= freq (get char-freqs pair-char 0))))
                 char-freqs))))
```

### 4. Axis Identification

There are 26 possible axes of symmetry in the circular alphabet. The algorithm determines which axis a symmetric word aligns with.

**How it works:**
1. For single-letter words, use the letter's ordinal position
2. For A-Z symmetry (like WIZARD), use the MN-ZA axis (ID 25)
3. For general cases, find the first symmetry sum that works

```clojure
(defn axis-id-for-word [word]
  (let [w (util/clean word)]
    (cond
      ;; Single letter case - return the letter's ordinal-to-axis mapping
      (= (count w) 1)
      (ord->id (ordinal (first w)))
      
      ;; A-Z symmetry case (like WIZARD)
      (az-symmetric? w)
      25 ;; MN-ZA axis for A-Z symmetry
      
      ;; General case - try to find a symmetry sum
      :else
      (first
        (for [sum (range 1 53)
              :when (sym? w sum)]
          (sum->id sum))))))
```

## Text Processing Pipeline

### 1. Text Chunking

Large files are broken into manageable chunks to prevent UI freezing:

```clojure
(defn create-chunks [text]
  (let [chunk-size (get-in config/processing-config [:chunk-size])
        total-length (count text)
        adjusted-chunk-size (max 250 (min chunk-size (Math/ceil (/ total-length 50))))
        chunks (vec (partition-all adjusted-chunk-size text))]
    {:chunks chunks
     :total-chunks (count chunks)
     :chunk-size adjusted-chunk-size
     :total-length total-length}))
```

### 2. Word Extraction

Text is processed to extract valid words meeting minimum length criteria:

```clojure
(defn extract-words [text min-length]
  (let [cleaned (-> text
                   (str/replace #"[^a-zA-Z\s]" " ")
                   (str/replace #"\s+" " ")
                   (str/trim)
                   (str/upper-case))
        words (str/split cleaned #"\s+")
        filtered-words (filter #(>= (count %) min-length) words)
        unique-words (into #{} filtered-words)]
    unique-words))
```

### 3. Asynchronous Processing

The processing pipeline uses timeouts to keep the UI responsive:

```clojure
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
                   ;; Calculate symmetry
                   (let [stats (sym-proc/process-symmetry (:unique-words text-result))]
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
                  
                  ;; Schedule next chunk
                  (js/setTimeout process-next-chunk processing-delay))
                (catch js/Error err
                  (js/console.error "Error processing chunk:" err))))))]
  
  ;; Start processing
  (js/setTimeout process-next-chunk 10))
```

### 4. Statistics Calculation

After processing, statistics are calculated for all found symmetrical words:

```clojure
(defn calculate-statistics [unique-words mirror-results rotation-results]
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
```

## Visualization Algorithm

### Alphabet Circle Visualization

The alphabet is arranged in a circle with letters positioned based on their ordinal values:

```clojure
(defn letter-positions []
  (let [radius visualization-radius
        center-x visualization-center-x
        center-y visualization-center-y
        letter-radius (+ radius 10)
        angle-per-letter (/ (* 2 Math/PI) 26)]
    (for [i (range 26)
          :let [letter (char (+ (.charCodeAt "A" 0) i))
                angle (- (* i angle-per-letter) (/ Math/PI 2))
                x (+ center-x (* letter-radius (Math/cos angle)))
                y (+ center-y (* letter-radius (Math/sin angle)))]]
      {:letter letter
       :x x
       :y y
       :angle angle
       :ordinal (inc i)})))
```

### Word Path Rendering

The path connecting the letters of a word is rendered with SVG:

```clojure
(defn word-path [word letter-map]
  (let [cleaned (util/clean word)
        letters (seq cleaned)]
    (when (seq letters)
      (let [positions (map #(get letter-map %) letters)
            path-str (str "M " (-> positions first :x) " " (-> positions first :y) " "
                          (clojure.string/join " " (map #(str "L " (:x %) " " (:y %)) (rest positions))))]
        [:path {:d path-str
                :stroke "#8B5CF6"
                :stroke-width 2
                :fill "none"}]))))
```

### Symmetry Axis Visualization

For words with symmetry, the axis is highlighted:

```clojure
(defn symmetry-axis [axis-id]
  (let [angle-per-letter (/ (* 2 Math/PI) 26)
        half-angle (/ angle-per-letter 2)
        axis-base-angle (* (/ Math/PI 13) (/ axis-id 2))
        axis-angle (+ axis-base-angle (/ Math/PI 2) half-angle)
        [x1 y1] (polar->cartesian axis-angle radius)
        [x2 y2] (polar->cartesian (+ axis-angle Math/PI) radius)]
    [:line {:x1 (+ center-x x1)
            :y1 (+ center-y y1)
            :x2 (+ center-x x2)
            :y2 (+ center-y y2)
            :stroke "#FF5555"
            :stroke-width 2
            :stroke-dasharray "5,3"}]))
```

## Web Worker Implementation

For improved performance on large text files, the application can optionally use Web Workers:

```clojure
(defn process-words-in-batches [words on-progress on-complete on-error]
  (let [worker-batch-size (get-in config/processing-config [:worker-batch-size])
        parallel-batches (get-in config/processing-config [:parallel-batches])
        total-words (count words)
        batches (partition-all worker-batch-size words)
        total-batches (count batches)
        results-atom (atom {:mirror {:words #{} :by-axis {}}
                            :rotation {:words #{} :sorted []}})
        completed-atom (atom 0)
        active-workers (atom 0)
        worker-queue (atom (vec batches))]
    
    (letfn [(process-batch [batch]
              (let [worker (js/Worker. "js/symmetry-worker.js")]
                (swap! active-workers inc)
                
                (set! (.-onmessage worker)
                      (fn [e]
                        (let [msg-data (.-data e)
                              msg-type (.-type msg-data)
                              result (js->clj (.-result msg-data) :keywordize-keys true)]
                          
                          (case msg-type
                            "complete"
                            (do
                              ;; Merge results
                              (swap! results-atom merge-results result)
                              
                              ;; Update completion
                              (swap! completed-atom inc)
                              (swap! active-workers dec)
                              
                              ;; Report progress
                              (when on-progress
                                (on-progress
                                 {:processed (count batch)
                                  :total total-words
                                  :progress (* 100 (/ @completed-atom total-batches))}))
                              
                              ;; Process next batch or finish
                              (if-let [next-batch (process-next-batch)]
                                (process-batch next-batch)
                                (when (and (= @active-workers 0) (= @completed-atom total-batches))
                                  (on-complete @results-atom))))))))
                
                ;; Start the worker
                (.postMessage worker (clj->js {:type "process" :words (vec batch)}))))]
      
      ;; Start initial workers
      (dotimes [_ (min parallel-batches (count @worker-queue))]
        (when-let [batch (process-next-batch)]
          (process-batch batch))))))
```

These algorithms work together to create a responsive and efficient application for detecting and visualizing alphabetical circular symmetry. 