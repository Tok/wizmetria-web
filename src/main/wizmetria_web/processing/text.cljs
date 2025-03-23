(ns wizmetria-web.processing.text
  (:require [clojure.string :as str]
            [wizmetria-web.config :as config]))

;; -- Pure text processing functions --

(defn extract-words 
  "Extract words from text, filtering by minimum length"
  [text min-length]
  (js/console.log "Extracting words from text of length:" (count text))
  (js/console.log "Min word length:" min-length)
  (js/console.log "Sample text:" (if (> (count text) 100) (.substring text 0 100) text))
  
  (let [cleaned (-> text
                   (str/replace #"[^a-zA-Z\s]" " ")
                   (str/replace #"\s+" " ")
                   (str/trim)
                   (str/upper-case))
        words (str/split cleaned #"\s+")
        filtered-words (filter #(>= (count %) min-length) words)
        unique-words (into #{} filtered-words)]
    
    (js/console.log "Total words found:" (count words))
    (js/console.log "Filtered words (length ≥" min-length "):" (count filtered-words))
    (js/console.log "Unique words:" (count unique-words))
    (when (seq unique-words)
      (js/console.log "Sample unique words:" (take 10 unique-words)))
    
    unique-words))

(defn process-text
  "Process the full text and extract unique words"
  [text]
  (let [min-word-length (get-in config/processing-config [:min-word-length])
        unique-words (extract-words text min-word-length)]
    {:unique-words unique-words
     :word-count (count unique-words)}))

;; -- Chunked processing functions --

(defn create-chunks
  "Divide text into chunks of specified size for progressive processing"
  [text]
  (let [chunk-size (get-in config/processing-config [:chunk-size])
        total-length (count text)
        ;; Use smaller chunks for more frequent progress updates
        adjusted-chunk-size (max 250 (min chunk-size (Math/ceil (/ total-length 50))))
        ;; Create vector of chunks for direct indexing access
        chunks (vec (partition-all adjusted-chunk-size text))]
    {:chunks chunks
     :total-chunks (count chunks)
     :chunk-size adjusted-chunk-size
     :total-length total-length})) 