(ns wizmetria-web.grid
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [wizmetria-web.util :as util]
            [wizmetria-web.sym :as sym]))

(def ^:private abc (seq "ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
(def ^:private radius 150)
(def ^:private center-x 180)
(def ^:private center-y 180)
(def ^:private letter-radius 160)

;; Helper function to get ordinal value of a letter (A=1, B=2, etc.)
(defn- ordinal [c]
  (- (.charCodeAt c 0) (.charCodeAt "@" 0)))

;; Converts polar coordinates to cartesian
(defn- polar->cartesian [angle radius]
  [(+ center-x (* radius (Math/cos angle)))
   (+ center-y (* radius (Math/sin angle)))])

;; Calculate intersection point between a line from center to the point
(defn- line-circle-intersection [point]
  (let [;; Line from center to the point
        dx (- (:x point) center-x)
        dy (- (:y point) center-y)
        ;; Normalize to get a unit vector
        length (Math/sqrt (+ (* dx dx) (* dy dy)))
        unit-dx (/ dx length)
        unit-dy (/ dy length)
        ;; Scale to radius to get the intersection point
        x (+ center-x (* radius unit-dx))
        y (+ center-y (* radius unit-dy))]
    {:x x :y y}))

;; Calculate positions for letters in the circle
(defn- letter-position [index]
  (let [angle-per-letter (/ (* 2 Math/PI) 26)
        half-angle (/ angle-per-letter 2)
        ;; Adding half-angle (π/26) so that Z-A midpoint is exactly at the top
        offset (+ Math/PI (/ Math/PI 2) half-angle) 
        angle (mod (+ offset (* angle-per-letter index)) (* 2 Math/PI))
        [x y] (polar->cartesian angle letter-radius)]
    {:x x :y y :letter (nth abc index)}))

(defn- letter-positions []
  (mapv letter-position (range 26)))

;; Draw the letter circle and lines connecting the letters in the word
(defn circle-view [word]
  (let [positions (letter-positions)
        letter-map (into {} (map (fn [pos] [(:letter pos) pos]) positions))
        cleaned-word (util/clean word)]
    
    [:svg {:width 360 :height 360 :viewBox "0 0 360 360"}
     ;; Draw outer circle
     [:circle {:cx center-x :cy center-y :r radius 
               :fill "none" :stroke "#6b7280" :stroke-width 1}]
     
     ;; Draw letters around the circle
     (for [{:keys [x y letter]} positions]
       ^{:key letter}
       [:g
        [:text {:x x :y y 
                :text-anchor "middle" 
                :dominant-baseline "middle"
                :font-size 16
                :font-weight "bold"
                :fill "#d1d5db"} letter]])
     
     ;; Draw lines between consecutive letters in the word
     (when (seq cleaned-word)
       (let [word-letters (seq cleaned-word)
             pairs (map vector word-letters (rest word-letters))]
         [:g
          ;; Lines between consecutive letters
          (for [[from-letter to-letter] pairs
                :let [from-pos (get letter-map from-letter)
                      to-pos (get letter-map to-letter)
                      ;; Calculate intersections with the circle
                      from-intersection (line-circle-intersection from-pos)
                      to-intersection (line-circle-intersection to-pos)]
                :when (and from-pos to-pos)]
            ^{:key (str from-letter to-letter)}
            [:line {:x1 (:x from-intersection) :y1 (:y from-intersection)
                    :x2 (:x to-intersection) :y2 (:y to-intersection)
                    :stroke "#8b5cf6" :stroke-width 2.5}])
          
          ;; Circles at letter positions
          (for [letter word-letters
                :let [pos (get letter-map letter)
                      ;; Calculate intersection with the circle edge
                      intersection (line-circle-intersection pos)]
                :when pos]
            ^{:key (str "dot-" letter)}
            [:circle {:cx (:x intersection) :cy (:y intersection) :r 4
                      :fill "#a855f7"}])]))]))

;; Draw a symmetry axis on the circle
(defn axis-view [axis-id]
  (let [angle (* (/ Math/PI 13) (/ axis-id 2))
        [x1 y1] (polar->cartesian angle radius)
        [x2 y2] (polar->cartesian (+ angle Math/PI) radius)]
    [:svg {:width 360 :height 360 :viewBox "0 0 360 360"}
     ;; Draw outer circle
     [:circle {:cx center-x :cy center-y :r radius 
               :fill "none" :stroke "#6b7280" :stroke-width 1}]
     
     ;; Draw symmetry axis
     [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2
             :stroke "#c026d3" :stroke-width 2 :stroke-dasharray "5,5"}]
     
     ;; Draw letters around the circle
     (for [{:keys [x y letter]} (letter-positions)]
       ^{:key letter}
       [:g
        [:text {:x x :y y 
                :text-anchor "middle" 
                :dominant-baseline "middle"
                :font-size 16
                :font-weight "bold"
                :fill "#d1d5db"} letter]])]))

;; Combined view showing both the word connections and its symmetry axis
(defn symmetry-view [word axis-id has-symmetry]
  (let [positions (letter-positions)
        letter-map (into {} (map (fn [pos] [(:letter pos) pos]) positions))
        cleaned-word (util/clean word)
        angle-per-letter (/ (* 2 Math/PI) 26)
        half-angle (/ angle-per-letter 2)
        axis-base-angle (* (/ Math/PI 13) (/ axis-id 2))
        axis-angle (+ axis-base-angle (/ Math/PI 2) half-angle)
        [x1 y1] (polar->cartesian axis-angle radius)
        [x2 y2] (polar->cartesian (+ axis-angle Math/PI) radius)
        is-rotation-axis (and (seq cleaned-word)
                             (sym/rotation-symmetric-word? cleaned-word)
                             (= axis-id (sym/rotation-symmetry-axis-id-for-word cleaned-word)))
        ;; For rotation symmetry, find letter pairs that are 13 positions apart
        rotation-pairs (when is-rotation-axis
                         (let [chars (vec (seq cleaned-word))
                               char-set (set chars)]
                           (for [c chars
                                 :let [ord (ordinal c)
                                       pair-ord (mod (+ ord 13) 26)
                                       pair-char (char (+ pair-ord (.charCodeAt "@" 0)))]
                                 :when (contains? char-set pair-char)]
                             [c pair-char])))
        ;; For mirror symmetry, find letter pairs that reflect across the axis
        mirror-pairs (when (and has-symmetry (not is-rotation-axis) axis-id (seq cleaned-word))
                      (let [chars (vec (seq cleaned-word))
                            pairs (for [i (range (count chars))
                                       j (range (inc i) (count chars))
                                       :let [c1 (chars i)
                                             c2 (chars j)
                                             ord1 (ordinal c1)
                                             ord2 (ordinal c2)]
                                       :when (= (mod (+ ord1 ord2) 26) (mod (+ axis-id 2) 26))]
                                   [c1 c2])]
                        (filter (fn [[c1 c2]] 
                                  ;; Filter out adjacent letters that are just part of the word sequence
                                  (let [idx1 (.indexOf cleaned-word c1)
                                        idx2 (.indexOf cleaned-word c2)]
                                    (not= (Math/abs (- idx1 idx2)) 1)))
                                pairs)))]
    
    [:svg {:width 360 :height 360 :viewBox "0 0 360 360"}
     ;; Draw outer circle
     [:circle {:cx center-x :cy center-y :r radius 
               :fill "none" :stroke "#6b7280" :stroke-width 1}]
     
     ;; Draw letters around the circle
     (for [{:keys [x y letter]} positions]
       ^{:key letter}
       [:g
        [:text {:x x :y y 
                :text-anchor "middle" 
                :dominant-baseline "middle"
                :font-size 16
                :font-weight "bold"
                :fill "#d1d5db"} letter]])
     
     ;; Draw word connections and highlighting
     (when (seq cleaned-word)
       (let [word-letters (seq cleaned-word)
             pairs (map vector word-letters (rest word-letters))]
         [:g
          ;; Draw mirror pair connections (if applicable)
          (when (and (not is-rotation-axis) has-symmetry (seq mirror-pairs))
            [:g 
             (for [[c1 c2] mirror-pairs
                   :let [pos1 (get letter-map c1)
                         pos2 (get letter-map c2)
                         intersection1 (line-circle-intersection pos1)
                         intersection2 (line-circle-intersection pos2)]
                   :when (and pos1 pos2)]
               ^{:key (str "mirror-" c1 c2)}
               [:g
                ;; Thin background line
                [:line {:x1 (:x intersection1) :y1 (:y intersection1)
                        :x2 (:x intersection2) :y2 (:y intersection2)
                        :stroke "#c026d3" :stroke-width 1.5
                        :stroke-opacity 0.1}]
                ;; Main dashed line
                [:line {:x1 (:x intersection1) :y1 (:y intersection1)
                        :x2 (:x intersection2) :y2 (:y intersection2)
                        :stroke "#c026d3" :stroke-width 1
                        :stroke-dasharray "2,4"}]
                ;; Smaller highlight circles for paired letters
                [:circle {:cx (:x intersection1) :cy (:y intersection1) 
                         :r 3 :fill "#c026d3" :fill-opacity 0.15}]
                [:circle {:cx (:x intersection2) :cy (:y intersection2) 
                         :r 3 :fill "#c026d3" :fill-opacity 0.15}]])]) 
          
          ;; Draw rotation pair connections (if applicable)
          (when (and is-rotation-axis has-symmetry)
            [:g 
             (for [[c1 c2] rotation-pairs
                   :let [pos1 (get letter-map c1)
                         pos2 (get letter-map c2)
                         intersection1 (line-circle-intersection pos1)
                         intersection2 (line-circle-intersection pos2)]
                   :when (and pos1 pos2)]
               ^{:key (str "rotation-" c1 c2)}
               [:g
                ;; Thinner background line
                [:line {:x1 (:x intersection1) :y1 (:y intersection1)
                        :x2 (:x intersection2) :y2 (:y intersection2)
                        :stroke "#f472b6" :stroke-width 1.5
                        :stroke-opacity 0.1}]
                ;; Thinner main dashed line
                [:line {:x1 (:x intersection1) :y1 (:y intersection1)
                        :x2 (:x intersection2) :y2 (:y intersection2)
                        :stroke "#f472b6" :stroke-width 1
                        :stroke-dasharray "2,4"}]
                ;; Smaller highlight circles
                [:circle {:cx (:x intersection1) :cy (:y intersection1) 
                         :r 3 :fill "#f472b6" :fill-opacity 0.15}]
                [:circle {:cx (:x intersection2) :cy (:y intersection2) 
                         :r 3 :fill "#f472b6" :fill-opacity 0.15}]])]) 
          
          ;; Draw symmetry axis
          (when has-symmetry
            [:g
             ;; Thinner semi-transparent background
             [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2
                     :stroke (if is-rotation-axis "#f472b6" "#c026d3") 
                     :stroke-width 6
                     :stroke-opacity 0.2}]
             ;; Main axis line
             [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2
                     :stroke (if is-rotation-axis "#f472b6" "#c026d3")
                     :stroke-width 2 
                     :stroke-dasharray (if is-rotation-axis "10,5" "5,5")}]
             ;; Smaller endpoint markers
             [:circle {:cx x1 :cy y1 :r 4
                      :fill (if is-rotation-axis "#f472b6" "#c026d3")}]
             [:circle {:cx x2 :cy y2 :r 4
                      :fill (if is-rotation-axis "#f472b6" "#c026d3")}]])
          
          ;; Regular word connection lines
          (for [[from-letter to-letter] pairs
                :let [from-pos (get letter-map from-letter)
                      to-pos (get letter-map to-letter)
                      from-intersection (line-circle-intersection from-pos)
                      to-intersection (line-circle-intersection to-pos)]
                :when (and from-pos to-pos)]
            ^{:key (str from-letter to-letter)}
            [:line {:x1 (:x from-intersection) :y1 (:y from-intersection)
                    :x2 (:x to-intersection) :y2 (:y to-intersection)
                    :stroke "#8b5cf6" :stroke-width 2.5}])
          
          ;; Dots at letter positions
          (for [letter word-letters
                :let [pos (get letter-map letter)
                      intersection (line-circle-intersection pos)]
                :when pos]
            ^{:key (str "dot-" letter)}
            [:circle {:cx (:x intersection) :cy (:y intersection) :r 4
                     :fill "#a855f7"}])]))]))