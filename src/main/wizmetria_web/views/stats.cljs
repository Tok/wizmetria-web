(ns wizmetria-web.views.stats
  (:require [re-frame.core :as rf]
            [wizmetria-web.i18n :refer [t]]
            [wizmetria-web.sym :as sym]))

;; -- Stats card component --
(defn symmetry-stats-card [label count]
  [:div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center
   [:span.text-2xl.font-bold.text-indigo-300 count]
   [:span.text-xs.text-gray-300 label]])

;; -- Symmetric word list component --
(defn symmetric-word-list [title words]
  [:div.mb-4
   [:h3.text-lg.mb-2.text-indigo-300.font-medium title]
   [:div.flex.flex-wrap.gap-2
    (for [word words]
      ^{:key word}
      [:span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm
       {:on-click #(rf/dispatch [:update-word word])}
       word])]])

;; -- Symmetry axis section component --
(defn symmetry-axis-section [axis-id words]
  [:div.bg-gray-700.rounded-lg.p-3
   [:h4.text-indigo-200.font-medium.mb-1.text-sm
    (str (sym/id->axis-name axis-id) " " (t :axis) " (" (count words) " " (t :for) ")")]
   [:div.flex.flex-wrap.gap-1
    (for [word (take 5 words)]
      ^{:key word}
      [:span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100
       {:on-click #(rf/dispatch [:update-word word])}
       word])]])

;; -- Wordlist stats component --
(defn wordlist-stats []
  (let [stats @(rf/subscribe [:wordlist-stats])]
    (when stats
      [:div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200
       [:h2.text-xl.mb-3.text-purple-300.font-semibold (t :stats-title)]
       
       [:div.grid.grid-cols-1.md:grid-cols-3.gap-3.mb-4
        [symmetry-stats-card (t :stats-unique-words) (:total-words stats)]
        [symmetry-stats-card (t :stats-mirror-words) (get-in stats [:mirror :count])]
        [symmetry-stats-card (t :stats-rotation-words) (get-in stats [:rotation :count])]]
       
       ;; Top 10 longest mirror symmetry words
       [symmetric-word-list 
        (str "Top 10 " (t :mirror-symmetry) " " (t :for)) 
        (get-in stats [:mirror :top-n])]
       
       ;; Top 10 longest rotational symmetry words
       [symmetric-word-list 
        (str "Top 10 " (t :rotation-symmetry) " " (t :for)) 
        (get-in stats [:rotation :top-n])]
       
       ;; Mirror symmetry by axis
       [:div
        [:h3.text-lg.mb-2.text-indigo-300.font-medium (str (t :for) " " (t :by) " " (t :symmetry-axis))]
        [:div.grid.grid-cols-1.md:grid-cols-2.gap-3
         (for [[axis-id words] (get-in stats [:mirror :by-axis])
               :when (seq words)]
           ^{:key axis-id}
           [symmetry-axis-section axis-id words])]]])) 