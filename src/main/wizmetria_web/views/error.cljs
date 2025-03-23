(ns wizmetria-web.views.error
  (:require [re-frame.core :as rf]))

(defn error-message 
  "Display an error message with recovery options"
  [{:keys [error-message details retry-fn dismiss-fn]}]
  [:div.bg-red-900.border-l-4.border-red-500.text-white.p-4.mb-6.rounded-lg.shadow-lg
   {:role "alert"}
   [:div.flex.items-center
    [:div.flex-shrink-0.mr-2
     [:svg.h-5.w-5.fill-current.text-red-300
      {:viewBox "0 0 20 20"}
      [:path {:fill-rule "evenodd"
              :d "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              :clip-rule "evenodd"}]]]
    [:div
     [:p.font-bold.text-lg "Error"]
     [:p.text-red-200 error-message]
     (when details
       [:p.text-red-300.text-sm.mt-1 details])]]
   [:div.mt-3.flex.justify-end.space-x-2
    (when retry-fn
      [:button.bg-red-600.hover:bg-red-700.text-white.font-bold.py-1.px-3.rounded.text-sm
       {:on-click retry-fn}
       "Try Again"])
    (when dismiss-fn
      [:button.bg-gray-700.hover:bg-gray-800.text-white.font-bold.py-1.px-3.rounded.text-sm
       {:on-click dismiss-fn}
       "Dismiss"])]])

(defn processing-error
  "Error component specifically for processing errors with retry capability"
  []
  (let [processing-state @(rf/subscribe [:processing-state])]
    (when (= :error (:status processing-state))
      [error-message
       {:error-message (or (:error-message processing-state) "An unknown error occurred during processing")
        :details (:details processing-state)
        :retry-fn #(when-let [file (:file-obj processing-state)]
                    (rf/dispatch [:process-file file]))
        :dismiss-fn #(rf/dispatch [:clear-processing-error])}])))

(defn inline-error
  "A smaller inline error display for form fields"
  [message]
  [:div.text-red-500.text-sm.mt-1
   message]) 