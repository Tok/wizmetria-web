(ns wizmetria-web.util
  (:require [clojure.string :as str]))

(defn clean [s]
  (str/replace (str/upper-case s) #"[^A-Z]" "")) 