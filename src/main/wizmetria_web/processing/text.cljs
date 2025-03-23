(ns wizmetria-web.processing.text
  (:require [clojure.string :as str]
            [wizmetria-web.config :as config]))

;; -- Pure text processing functions --

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