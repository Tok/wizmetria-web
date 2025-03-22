(ns wizmetria-web.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [wizmetria-web.sym :as sym]
            [wizmetria-web.grid :as grid]
            [wizmetria-web.util :as util]))

;; -- Subscriptions --
(rf/reg-sub
 :word
 (fn [db]
   (:word db)))

(rf/reg-sub
 :symmetry-results
 (fn [db]
   (:symmetry-results db)))

;; -- Events --
(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:word "WIZARD"
    :symmetry-results (sym/evaluate [(sym/clean "WIZARD")])}))

(rf/reg-event-db
 :update-word
 (fn [db [_ word]]
   (assoc db :word word)))

(rf/reg-event-db
 :check-symmetry
 (fn [db _]
   (let [word (:word db)
         results (when (not-empty word)
                   (sym/evaluate [(sym/clean word)]))]
     (assoc db :symmetry-results results))))

;; -- Views --
(defn input-field []
  (let [word @(rf/subscribe [:word])]
    [:div.flex.flex-col.items-center.mb-8
     [:label.text-xl.mb-2.text-purple-200 "Enter a word:"]
     [:div.flex.w-full.max-w-md.shadow-lg
      [:input.w-full.px-4.py-3.bg-gray-800.border-2.border-purple-700.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-indigo-500.text-gray-100.placeholder-gray-500
       {:type "text"
        :value word
        :placeholder "e.g. WIZARD"
        :on-change #(rf/dispatch [:update-word (-> % .-target .-value)])}]
      [:button.bg-purple-700.text-white.px-6.py-3.rounded-r-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium
       {:on-click #(rf/dispatch [:check-symmetry])}
       "Check"]]]))

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
       [:p.text-gray-400 "Enter a word to check for symmetry"]
       (cond
         has-mirror-symmetry
         [:p.text-green-400 
          (str "\"" cleaned-word "\" has mirror symmetry around axis " 
               (when axis-id (sym/id->axis-name axis-id)))]
         
         has-rotation-symmetry
         [:p.text-green-400 
          (str "\"" cleaned-word "\" has rotational symmetry around axis " 
               (when rotation-axis-id (sym/id->axis-name rotation-axis-id)))]
         
         :else
         [:p.text-red-400 
          (str "\"" cleaned-word "\" does not have circular symmetry")]))]))

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
       [:div.mt-8.w-full.flex.flex-col.items-center
        [:h2.text-2xl.mb-6.text-center.text-purple-300.font-semibold "Symmetry Results"]
        [check-word]
        [:div.flex.flex-wrap.justify-center.gap-8.w-full.mt-6
         ;; Show a single visualization with correct symmetry information
         [:div.bg-gray-800.p-5.rounded-lg.shadow-lg.flex.flex-col.items-center.w-80.border.border-indigo-700.transform.transition-all.duration-300.hover:scale-105
          [:h3.text-xl.mb-3.text-center.text-indigo-300.font-medium 
           (cond
             has-mirror-symmetry "Mirror Symmetry"
             has-rotation-symmetry "Rotation Symmetry"
             :else "No Symmetry")]
          [:div.alphabet-circle.flex.items-center.justify-center.bg-gray-900.rounded-full.p-1
           [grid/symmetry-view word
            (cond 
              has-mirror-symmetry word-axis-id
              has-rotation-symmetry rotation-axis-id
              :else nil)
            (or has-mirror-symmetry has-rotation-symmetry)]]]]])]))

(defn explanation []
  [:div.bg-gray-800.p-6.rounded-lg.shadow-lg.mb-8.border.border-purple-700.text-gray-200
   [:h2.text-2xl.mb-4.text-purple-300.font-semibold "About Wizmetria"]
   [:p.mb-4 "Wizmetria detects alphabetical circular symmetry in words. It arranges the alphabet in a circle and checks if a word has symmetry when its letters are connected in sequence."]
   [:p.mb-4 "There are 13 possible axes of symmetry. An axis always goes through the center of the circle, but can be between two letters (A-N) or between the space of two letters (AB-NO)."]
   [:p "Famous examples with symmetry include "
    [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
     {:on-click #(do (rf/dispatch [:update-word "WIZARD"])
                    (rf/dispatch [:check-symmetry]))}
     "WIZARD"]", "
    [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
     {:on-click #(do (rf/dispatch [:update-word "JAGUAR"])
                    (rf/dispatch [:check-symmetry]))}
     "JAGUAR"]", and "
    [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
     {:on-click #(do (rf/dispatch [:update-word "METAPH"])
                    (rf/dispatch [:check-symmetry]))}
     "METAPH"]"."]])

(defn main-panel []
  [:div.min-h-screen.bg-gray-900.text-purple-100.px-4.py-8.flex.flex-col.items-center
   [:h1.text-5xl.text-center.mb-4.text-purple-300.font-bold.tracking-wider "Wizmetria"]
   [:h2.text-2xl.text-center.mb-8.text-indigo-300.font-light "Alphabetical Circular Symmetry Detection"]
   [:div.w-full.max-w-5xl
    [explanation]
    [input-field]
    [symmetry-display]]])

(defn mount-root []
  (rf/dispatch-sync [:initialize])
  (rdom/render [main-panel] (.getElementById js/document "app")))

(defn init []
  (mount-root)) 