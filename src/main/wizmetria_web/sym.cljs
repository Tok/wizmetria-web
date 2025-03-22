(ns wizmetria-web.sym
  (:require [wizmetria-web.util :as util]))

(defn- ordinal 
  "A=1, B=2, C=3 .. Z=26" 
  [c] 
  (- (.charCodeAt c 0) (.charCodeAt "@" 0)))

(defn sum->id [ordinal-sum] 
  (-> ordinal-sum (- 2) (mod 26)))

(defn ord->id [ordinal] 
  (-> ordinal (- 1) (* 2) (mod 26)))

(defn id->axis-name [id]
  (let [v (-> id (mod 26) (/ 2) (+ (.charCodeAt "A" 0)))
        c0 (char v) 
        c1 (char (+ v 1))
        c13 (char (+ v 13)) 
        c14 (char (+ v 14))]
    (->> (if (even? id) 
           (str c0 \- c13) 
           (str c0 c1 \- c13 c14))
         (replace {\[ \A \@ \Z}) 
         (apply str))))

(defn on-axis? [c total] 
  (= (sum->id total) (-> c ordinal ord->id)))

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

(defn symmetric? [word sum]
  (->> [sum (+ sum 26) (+ sum 52)]
       (filter #(sym? word %))
       empty? not))

(defn not-symmetric? [word sum] 
  (not (symmetric? word sum)))

(defn az-symmetric? [s] 
  (sym? s 27))

(defn symmetric-word? [word]
  (some true? (map #(symmetric? word %) (range 0 27))))

(defn clean [s]
  (util/clean s))

(defn- filter-sym [id coll] 
  (filter #(symmetric? % (+ id 2)) coll))

(defn- find-sym [id coll] 
  [id (->> coll (filter-sym id) (sort-by count) vec)])

(defn- filter-results [results] 
  (filter (comp not-empty second) results))

(defn evaluate [words] 
  (->> 26 range (map #(find-sym % words)) filter-results)) 