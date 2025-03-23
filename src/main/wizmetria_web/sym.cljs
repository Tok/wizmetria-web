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
    (->> (if (even? id) (str c0 \- c13) (str c0 c1 \- c13 c14))
         (replace {\[ \A \@ \Z}) (apply str))))

(defn on-axis? [c total] 
  (= (sum->id total) (-> c ordinal ord->id)))

(defn axis-ordinal [c total] 
  (= (sum->id total) (-> c ordinal)))

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

(defn- rotation-sym? 
  "Check if word has rotation symmetry (characters like HYRULE with consecutive letter pairs)"
  [word]
  (let [w (util/clean word)
        chars (vec (seq w))
        offsets (map #(- (ordinal (chars (inc %))) 
                         (ordinal (chars %)))
                    (range 0 (dec (count chars))))]
    (and (> (count chars) 2)
         (every? #(and (> % 0) (<= % 2)) offsets))))

(defn symmetric? [word sum]
  (->> [sum (+ sum 26) (+ sum 52)]
       (filter #(sym? word %))
       seq))

(defn not-symmetric? [word sum] 
  (not (symmetric? word sum)))

(defn az-symmetric? [s] 
  (sym? s 27))

(defn symmetric-word? [word] ;mirror-symmetry
  (let [cleaned (util/clean word)
        mirror-sym (some (fn [sum] (sym? cleaned sum)) (range 1 53))]
    (or mirror-sym (rotation-sym? cleaned))))

;(defn rotation-symmetric-word? [word] (symmetric? word (reduce + (map ordinal word))))

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

(defn clean [s]
  (util/clean s))

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

(defn rotation-symmetry-axis-id-for-word [word]
  ;; For rotation symmetry, letters pair with others 13 positions away
  ;; The axis of symmetry is perpendicular to these pairings
  ;; We can derive it from the first letter's ordinal position
  (let [w (util/clean word)
        first-char (first w)
        first-ord (ordinal first-char)
        ;; For rotation symmetry, the axis is perpendicular to letter pairs
        ;; If a letter pairs with another 13 positions away,
        ;; the perpendicular axis is at +6.5 positions (half of 13)
        ;; Since we need integer IDs, we use a specific offset
        ;; For example, with first letter H (ord 8), we want axis ID 11 (FG-ST)
        ;; So the formula is (ord + 3) % 26
        axis-id (mod (+ first-ord 3) 26)]
    axis-id))

(defn- filter-sym [id coll] 
  (filter #(symmetric? % (+ id 2)) coll))

(defn- find-sym [id coll] 
  [id (->> coll (filter-sym id) (sort-by count) vec)])

(defn- filter-results [results] 
  (filter (comp not-empty second) results))

(defn evaluate [words] 
  (->> 26 range (map #(find-sym % words)) filter-results))