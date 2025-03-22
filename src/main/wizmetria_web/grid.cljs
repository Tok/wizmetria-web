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
               :fill "none" :stroke "#ccc" :stroke-width 1}]
     
     ;; Draw letters around the circle
     (for [{:keys [x y letter]} positions]
       ^{:key letter}
       [:g
        [:text {:x x :y y 
                :text-anchor "middle" 
                :dominant-baseline "middle"
                :font-size 16
                :font-weight "bold"} letter]])
     
     ;; Draw lines between consecutive letters in the word
     (when (seq cleaned-word)
       (let [word-letters (seq cleaned-word)
             pairs (map vector word-letters (rest word-letters))]
         [:g
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
                    :stroke "#3b82f6" :stroke-width 2.5}])
          
          ;; Draw small circles at each letter position in the word
          (for [letter word-letters
                :let [pos (get letter-map letter)]
                :when pos]
            ^{:key (str "dot-" letter)}
            [:circle {:cx (:x pos) :cy (:y pos) :r 4
                      :fill "#3b82f6"}])])]))

;; Draw a symmetry axis on the circle
(defn axis-view [axis-id]
  (let [angle (* (/ Math/PI 13) (/ axis-id 2))
        [x1 y1] (polar->cartesian angle radius)
        [x2 y2] (polar->cartesian (+ angle Math/PI) radius)]
    [:svg {:width 360 :height 360 :viewBox "0 0 360 360"}
     ;; Draw outer circle
     [:circle {:cx center-x :cy center-y :r radius 
               :fill "none" :stroke "#ccc" :stroke-width 1}]
     
     ;; Draw symmetry axis
     [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2
             :stroke "#f59e0b" :stroke-width 2 :stroke-dasharray "5,5"}]
     
     ;; Draw letters around the circle
     (for [{:keys [x y letter]} (letter-positions)]
       ^{:key letter}
       [:g
        [:text {:x x :y y 
                :text-anchor "middle" 
                :dominant-baseline "middle"
                :font-size 16
                :font-weight "bold"} letter]])]))

;; Combined view showing both the word connections and its symmetry axis
(defn symmetry-view [word axis-id]
  (let [positions (letter-positions)
        letter-map (into {} (map (fn [pos] [(:letter pos) pos]) positions))
        cleaned-word (util/clean word)
        ;; Adjust axis angle to match the circle rotation (Z-A at top)
        angle-per-letter (/ (* 2 Math/PI) 26)
        half-angle (/ angle-per-letter 2)
        ;; The original calculation was (* (/ Math/PI 13) (/ axis-id 2))
        ;; We need to rotate by PI/2 + half-angle to match our circle rotation
        axis-base-angle (* (/ Math/PI 13) (/ axis-id 2))
        axis-angle (+ axis-base-angle (/ Math/PI 2) half-angle)
        [x1 y1] (polar->cartesian axis-angle radius)
        [x2 y2] (polar->cartesian (+ axis-angle Math/PI) radius)]
    
    [:svg {:width 360 :height 360 :viewBox "0 0 360 360"}
     ;; Draw outer circle
     [:circle {:cx center-x :cy center-y :r radius 
               :fill "none" :stroke "#ccc" :stroke-width 1}]
     
     ;; Draw symmetry axis
     [:line {:x1 x1 :y1 y1 :x2 x2 :y2 y2
             :stroke "#f59e0b" :stroke-width 2 :stroke-dasharray "5,5"}]
     
     ;; Draw letters around the circle
     (for [{:keys [x y letter]} positions]
       ^{:key letter}
       [:g
        [:text {:x x :y y 
                :text-anchor "middle" 
                :dominant-baseline "middle"
                :font-size 16
                :font-weight "bold"} letter]])
     
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
                    :stroke "#3b82f6" :stroke-width 2.5}])
          
          ;; Circles at letter positions
          (for [letter word-letters
                :let [pos (get letter-map letter)]
                :when pos]
            ^{:key (str "dot-" letter)}
            [:circle {:cx (:x pos) :cy (:y pos) :r 4
                      :fill "#3b82f6"}])])])))