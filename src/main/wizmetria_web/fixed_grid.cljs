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

;; Calculate positions for letters in the circle
(defn- letter-position [index]
  (let [angle (* (/ (* 2 Math/PI) 26) index)
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
                      to-pos (get letter-map to-letter)]
                :when (and from-pos to-pos)]
            ^{:key (str from-letter to-letter)}
            [:line {:x1 (:x from-pos) :y1 (:y from-pos)
                    :x2 (:x to-pos) :y2 (:y to-pos)
                    :stroke "#3b82f6" :stroke-width 2.5}])
          
          ;; Draw small circles at each letter position in the word
          (for [letter word-letters
                :let [pos (get letter-map letter)]
                :when pos]
            ^{:key (str "dot-" letter)}
            [:circle {:cx (:x pos) :cy (:y pos) :r 4
                      :fill "#3b82f6"}])]))]))

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
        angle (* (/ Math/PI 13) (/ axis-id 2))
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
                      to-pos (get letter-map to-letter)]
                :when (and from-pos to-pos)]
            ^{:key (str from-letter to-letter)}
            [:line {:x1 (:x from-pos) :y1 (:y from-pos)
                    :x2 (:x to-pos) :y2 (:y to-pos)
                    :stroke "#3b82f6" :stroke-width 2.5}])
          
          ;; Circles at letter positions
          (for [letter word-letters
                :let [pos (get letter-map letter)]
                :when pos]
            ^{:key (str "dot-" letter)}
            [:circle {:cx (:x pos) :cy (:y pos) :r 4
                      :fill "#3b82f6"}])]))]))