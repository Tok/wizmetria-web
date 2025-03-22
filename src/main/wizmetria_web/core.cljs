(ns wizmetria-web.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [wizmetria-web.sym :as sym]
            [wizmetria-web.grid :as grid]))

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
     [:label.text-xl.mb-2 "Enter a word:"]
     [:div.flex.w-full.max-w-md
      [:input.w-full.px-4.py-2.border.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-blue-500
       {:type "text"
        :value word
        :placeholder "e.g. WIZARD"
        :on-change #(rf/dispatch [:update-word (-> % .-target .-value)])}]
      [:button.bg-blue-500.text-white.px-4.py-2.rounded-r-lg.hover:bg-blue-600.focus:outline-none.focus:ring-2.focus:ring-blue-500
       {:on-click #(rf/dispatch [:check-symmetry])}
       "Check"]]]))

(defn symmetry-display []
  (let [results @(rf/subscribe [:symmetry-results])
        word @(rf/subscribe [:word])]
    (when (and results (seq results))
      [:div.mt-8
       [:h2.text-2xl.mb-4 "Symmetry Results"]
       [:div.grid.grid-cols-1.md:grid-cols-2.gap-8
        (for [[axis-id symmetric-words] results
              :when (seq symmetric-words)]
          ^{:key axis-id}
          [:div.bg-white.p-4.rounded-lg.shadow
           [:h3.text-xl.mb-2 (str "Axis: " (sym/id->axis-name axis-id))]
           [:div.alphabet-circle.flex.items-center.justify-center
            [grid/symmetry-view word axis-id]]])]])))

(defn explanation []
  [:div.bg-white.p-6.rounded-lg.shadow.mb-8
   [:h2.text-2xl.mb-4 "About Wizmetria"]
   [:p.mb-4 "Wizmetria detects alphabetical circular symmetry in words. It arranges the alphabet in a circle and checks if a word has symmetry when its letters are connected in sequence."]
   [:p.mb-4 "There are 13 possible axes of symmetry. An axis always goes through the center of the circle, but can be between two letters (A-N) or between the space of two letters (AB-NO)."]
   [:p "Famous examples with symmetry include WIZARD, JAGUAR, and METAPH."]])

(defn main-panel []
  [:div.container.mx-auto.px-4.py-8
   [:h1.text-4xl.text-center.mb-8 "Wizmetria"]
   [:h2.text-2xl.text-center.mb-8 "Alphabetical Circular Symmetry Detection"]
   [explanation]
   [input-field]
   [symmetry-display]])

(defn mount-root []
  (rf/dispatch-sync [:initialize])
  (rdom/render [main-panel] (.getElementById js/document "app")))

(defn init []
  (mount-root)) 