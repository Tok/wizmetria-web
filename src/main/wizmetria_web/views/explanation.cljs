(ns wizmetria-web.views.explanation
  (:require [re-frame.core :as rf]
            [wizmetria-web.i18n :refer [t]]))

(defn explanation []
  [:div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200
   [:h2.text-xl.mb-2.text-purple-300.font-semibold (t :explanation-title)]
   [:p.mb-2.text-sm (t :explanation-text)]
   
   [:p.mb-2.text-sm (t :explanation-types)]
   [:p.mb-2.text-sm (t :explanation-mirror)]
   [:p.mb-2.text-sm (t :explanation-rotation)]
   
   [:div.flex.flex-col.md:flex-row.gap-4.text-sm
    [:div.flex-1
     [:p.mb-1 [:span.text-indigo-300.font-medium (t :mirror-symmetry)] " " (t :examples) ":"]
     [:p 
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "WIZARD"])} "WIZARD"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "JAGUAR"])} "JAGUAR"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "METAPH"])} "METAPH"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "UNSEWING"])} "UNSEWING"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "VOTING"])} "VOTING"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "BATHMATS"])} "BATHMATS"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "TICKET"])} "TICKET"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "NETFUL"])} "NETFUL"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "FLUENT"])} "FLUENT"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "CROTCHET"])} "CROTCHET"]]]
    
    [:div.flex-1
     [:p.mb-1 [:span.text-indigo-300.font-medium (t :rotation-symmetry)] " " (t :examples) ":"]
     [:p
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "HYRULE"])} "HYRULE"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "NEAR"])} "NEAR"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "NEARLY"])} "NEARLY"] ", "
      [:span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline
       {:on-click #(rf/dispatch [:update-word "REFERS"])} "REFERS"]]]]) 