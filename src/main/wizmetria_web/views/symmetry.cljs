(ns wizmetria-web.views.symmetry
  (:require [re-frame.core :as rf]
            [wizmetria-web.grid :as grid]
            [wizmetria-web.util :as util]
            [wizmetria-web.sym :as sym]
            [wizmetria-web.i18n :refer [t]]))

;; -- Input field component --
(defn input-field []
  (let [word @(rf/subscribe [:word])]
    [:div.flex.flex-col.items-center.mb-4
     [:label.text-lg.mb-1.text-purple-200 (t :input-label)]
     [:div.flex.w-full.max-w-md.shadow-lg
      [:input.w-full.px-4.py-2.bg-gray-800.border-2.border-purple-700.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-indigo-500.text-gray-100.placeholder-gray-500
       {:type "text"
        :value word
        :placeholder "e.g. WIZARD"
        :on-change #(rf/dispatch [:update-word (-> % .-target .-value)])}]
      [:button.bg-purple-700.text-white.px-5.py-2.rounded-r-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium
       {:on-click #(rf/dispatch [:check-symmetry])}
       (t :analyze-button)]]]))

;; -- Symmetry result display component --
(defn check-word []
  (let [word @(rf/subscribe [:word])
        cleaned-word (util/clean word)
        axis-id (when (seq cleaned-word) (sym/axis-id-for-word cleaned-word))
        rotation-axis-id (when (seq cleaned-word) (sym/rotation-symmetry-axis-id-for-word cleaned-word))
        has-mirror-symmetry (and (seq cleaned-word) (sym/symmetric-word? cleaned-word))
        has-rotation-symmetry (and (seq cleaned-word)
                                  (not has-mirror-symmetry)
                                  (sym/rotation-symmetric-word? cleaned-word))]
    [:div.mt-4.text-center
     (if (empty? cleaned-word)
       [:p.text-gray-400 (str (t :input-label) " " (t :for) " " (t :symmetry-axis))]
       (cond
         has-mirror-symmetry
         [:p.text-green-400 
          (str "\"" cleaned-word "\" " (t :with) " " (t :mirror-symmetry) " " (t :around-axis) " " 
               (when axis-id (sym/id->axis-name axis-id)))]
         
         has-rotation-symmetry
         [:p.text-green-400 
          (str "\"" cleaned-word "\" " (t :with) " " (t :rotation-symmetry) " " (t :around-axis) " " 
               (when rotation-axis-id (sym/id->axis-name rotation-axis-id)))]
         
         :else
         [:p.text-red-400 
          (str "\"" cleaned-word "\" " (t :no-symmetry))]))]))

;; -- Symmetry visualization component --
(defn symmetry-display []
  (let [results @(rf/subscribe [:symmetry-results])
        word @(rf/subscribe [:word])
        cleaned-word (util/clean word)
        word-axis-id (when (not-empty cleaned-word) (sym/axis-id-for-word cleaned-word))
        rotation-axis-id (when (not-empty cleaned-word) (sym/rotation-symmetry-axis-id-for-word cleaned-word))
        has-mirror-symmetry (and (some? word-axis-id) (sym/symmetric-word? cleaned-word))
        has-rotation-symmetry (and (not has-mirror-symmetry)
                                 (seq cleaned-word)
                                 (sym/rotation-symmetric-word? cleaned-word))]
    [:div
     (when (and results (seq results))
       [:div.mt-4.w-full.flex.flex-col.items-center
        [:h2.text-xl.mb-3.text-center.text-purple-300.font-semibold (t :symmetry-results)]
        [check-word]
        [:div.flex.flex-wrap.justify-center.gap-6.w-full.mt-4
         ;; Show a single visualization with correct symmetry information
         [:div.bg-gray-800.p-4.rounded-lg.shadow-lg.flex.flex-col.items-center.w-80.border.border-indigo-700.transform.transition-all.duration-300.hover:scale-105
          {:class (when (and (not has-mirror-symmetry) (not has-rotation-symmetry)) "no-symmetry-container")}
          [:h3.text-lg.mb-2.text-center.text-indigo-300.font-medium 
           (cond
             has-mirror-symmetry (t :mirror-symmetry)
             has-rotation-symmetry (t :rotation-symmetry)
             :else (t :no-symmetry))]
          [:div.alphabet-circle.flex.items-center.justify-center.bg-gray-900.rounded-full.p-1
           [grid/symmetry-view word
            (cond 
              has-mirror-symmetry word-axis-id
              has-rotation-symmetry rotation-axis-id
              :else nil)
            (or has-mirror-symmetry has-rotation-symmetry)]]]]])])) 