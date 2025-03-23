(ns wizmetria-web.views.analysis
  (:require [re-frame.core :as rf]
            [wizmetria-web.i18n :refer [t]]))

;; -- File upload button component --
(defn file-upload-button []
  [:label.bg-purple-700.text-white.px-4.py-2.rounded-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium.cursor-pointer.text-sm
   [:input.hidden
    {:type "file"
     :accept ".txt"
     :on-change (fn [e]
                  (when-let [file (-> e .-target .-files (aget 0))]
                    (rf/dispatch [:process-file file])))}]
   (t :upload-button)])

;; -- Processing progress indicator component --
(defn processing-progress-indicator [processing-state]
  (when processing-state
    [:div.mt-3
     (case (:status processing-state)
       :reading
       [:div
        [:div.text-sm.text-gray-400.mb-1 
         (str (t :reading-status) (when-let [name (:file-name processing-state)] (str ": " name)))]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-500.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :processing
       [:div
        [:div.text-sm.text-gray-400.mb-1 
         (str (t :processing-text-status) ": " 
              (:processed-chunks processing-state) 
              "/" 
              (:total-chunks processing-state) 
              " chunks")]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-500.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :finding-symmetry
       [:div
        [:div.text-sm.text-gray-400.mb-1 
         (str (t :finding-symmetry) " " (:word-count processing-state) " words")]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-500.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :mirror-symmetry
       [:div
        [:div.text-sm.text-gray-400.mb-1 (str (t :finding-symmetry) " " (t :mirror-symmetry))]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-500.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :rotational-symmetry
       [:div
        [:div.text-sm.text-gray-400.mb-1 (str (t :finding-symmetry) " " (t :rotation-symmetry))]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-500.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :done
       [:div.text-sm.text-gray-400.mb-1 (str (t :processing-status) "...")]
       
       :error
       [:div.text-sm.text-red-400.mb-1 
        (str (:error-message processing-state) ": " (:details processing-state))]
       
       :complete
       (let [stats @(rf/subscribe [:wordlist-stats])]
         (when stats
           [:div.text-sm.text-green-400.mb-1 
            (str (t :completed-status) ": " 
                 (+ (get-in stats [:mirror :count]) 
                    (get-in stats [:rotation :count])) 
                 " " (t :stats-symmetric-words))]))
       
       nil)]))

;; -- Text analysis component --
(defn text-analysis []
  (let [processing-state @(rf/subscribe [:processing-state])]
    [:div.bg-gray-800.p-4.rounded-lg.shadow-lg.border.border-purple-700.text-gray-200.mt-8
     [:div.flex.justify-between.items-center
      [:h3.text-xl.text-purple-300.font-semibold (t :text-analysis-title)]
      [:div.flex.items-center
       (when-not (or (nil? processing-state) (= (:status processing-state) :complete))
         [:div.flex.items-center.mr-3
          [:svg.animate-spin.-ml-1.mr-2.h-4.w-4.text-purple-500 
           {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24"}
           [:circle.opacity-25 {:cx "12" :cy "12" :r "10" :stroke "currentColor" :stroke-width "4"}]
           [:path.opacity-75 {:fill "currentColor" 
                           :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]])
       [file-upload-button]]]
     
     [:p.text-sm.text-gray-300.mt-2.mb-4 (t :text-analysis-description)]
     
     ;; Progress indicator
     [processing-progress-indicator processing-state]])) 