(ns wizmetria-web.views.analysis
  (:require [re-frame.core :as rf]
            [wizmetria-web.i18n :refer [t]]
            [wizmetria-web.views.error :as error]))

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
         (str (t :reading-status) 
              (when-let [name (:file-name processing-state)] (str ": " name))
              (when (> (:progress processing-state) 0)
                (str " (" (.toFixed (:progress processing-state) 1) "%)")))
         ;; Add a small spinner for better visual feedback
         [:span.ml-2.inline-block
          [:svg.animate-spin.h-3.w-3.text-indigo-500 
           {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24"}
           [:circle.opacity-25 {:cx "12" :cy "12" :r "10" :stroke "currentColor" :stroke-width "4"}]
           [:path.opacity-75 {:fill "currentColor" 
                           :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-300.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :processing
       [:div
        [:div.text-sm.text-gray-400.mb-1.flex.justify-between
         [:span
          (str (t :processing-text-status) ": " 
               (or (:processed-chunks processing-state) "0") 
               "/" 
               ;; Handle case where total-chunks might be a string like "calculating..."
               (let [total (:total-chunks processing-state)]
                 (if (string? total) 
                   total 
                   (or total "?")))
               " chunks")]
         [:span
          ;; Add percentage display with fallback and ensure it's visible
          (let [progress (or (:progress processing-state) 0.5)]
            (str (.toFixed (max 0.5 progress) 1) "%"))]]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden.relative
         ;; Add subtle animation for active progress
         [:div.absolute.inset-0.opacity-30.bg-indigo-800
          {:class (when (< (or (:progress processing-state) 0) 100) "animate-pulse")}]
         [:div.bg-indigo-500.h-2.transition-all.duration-300.ease-out.relative
          {:style {:width (str (max 0.5 (or (:progress processing-state) 0.5)) "%")}}]]]
       
       :finding-symmetry
       [:div
        [:div.text-sm.text-gray-400.mb-1.flex.justify-between
         [:span (str (t :finding-symmetry) " " (:word-count processing-state) " words")]
         ;; Add a small spinner for better visual feedback
         [:span.ml-2.inline-block
          [:svg.animate-spin.h-3.w-3.text-indigo-500 
           {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24"}
           [:circle.opacity-25 {:cx "12" :cy "12" :r "10" :stroke "currentColor" :stroke-width "4"}]
           [:path.opacity-75 {:fill "currentColor" 
                           :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-300.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :mirror-symmetry
       [:div
        [:div.text-sm.text-gray-400.mb-1.flex.justify-between
         [:span (str (t :finding-symmetry) " " (t :mirror-symmetry))]
         [:span.ml-2.inline-block
          [:svg.animate-spin.h-3.w-3.text-indigo-500 
           {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24"}
           [:circle.opacity-25 {:cx "12" :cy "12" :r "10" :stroke "currentColor" :stroke-width "4"}]
           [:path.opacity-75 {:fill "currentColor" 
                           :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-300.ease-out
          {:style {:width (str (:progress processing-state) "%")}}]]]
       
       :rotational-symmetry
       [:div
        [:div.text-sm.text-gray-400.mb-1.flex.justify-between
         [:span (str (t :finding-symmetry) " " (t :rotation-symmetry))]
         [:span.ml-2.inline-block
          [:svg.animate-spin.h-3.w-3.text-indigo-500 
           {:xmlns "http://www.w3.org/2000/svg" :fill "none" :viewBox "0 0 24 24"}
           [:circle.opacity-25 {:cx "12" :cy "12" :r "10" :stroke "currentColor" :stroke-width "4"}]
           [:path.opacity-75 {:fill "currentColor" 
                           :d "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}]]]]
        [:div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden
         [:div.bg-indigo-500.h-2.transition-all.duration-300.ease-out
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
  (let [processing-state @(rf/subscribe [:processing-state])
        wordlist-stats @(rf/subscribe [:wordlist-stats])]
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
     
     ;; Show error component if there's an error
     [error/processing-error]
     
     ;; Progress indicator
     (cond
       ;; Currently processing - show progress
       (#{:reading :processing :finding-symmetry 
          :mirror-symmetry :rotational-symmetry :calculating-stats}
        (:status processing-state))
       [processing-progress-indicator processing-state]
       
       ;; Processing complete with stats - show message
       (and (= :complete (:status processing-state)) wordlist-stats)
       [:div.text-purple-300.text-lg.mt-4
        (str "Analyzed " (:total-words wordlist-stats) " words from your file")]
       
       ;; Done with processing - show message
       (= :done (:status processing-state))
       [:div.text-green-300.text-lg.mt-4
        "Processing complete! Results displayed below."]
       
       ;; No processing state - don't show anything extra
       :else nil)])) 