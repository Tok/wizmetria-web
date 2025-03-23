(ns wizmetria-web.views.layout
  (:require [re-frame.core :as rf]
            [wizmetria-web.i18n :as i18n :refer [t]]
            [wizmetria-web.config :as config]))

;; -- Toggle effects button component --
(defn toggle-switch []
  (let [enabled? @(rf/subscribe [:shiny-effects-enabled])
        toggle-delay (get-in config/ui-config [:toggle-effects-delay-ms])]
    [:div.shiny-toggle-button.bg-gray-900.rounded-lg.px-2.h-10.flex.items-center.shadow-md.border.border-purple-700
     [:button.flex.items-center.focus:outline-none.text-sm.text-white
      {:on-click (fn [_]
                   (rf/dispatch [:toggle-shiny-effects])
                   ;; Brief timeout to allow state to update before modifying DOM
                   (js/setTimeout 
                    (fn [] 
                     (let [body (.-body js/document)
                           currently-enabled? (not enabled?)] ;; Toggle happens after click
                       (when body
                         ;; First remove existing class to ensure clean state
                         (.remove (.-classList body) "shiny-enabled")
                         ;; Then add if it should be enabled
                         (when currently-enabled?
                           (.add (.-classList body) "shiny-enabled"))))) 
                   toggle-delay))}
      [:span.mr-2 (t (if enabled? :effects-on :effects-off))]
      [:div.relative.inline-flex.items-center.h-5.w-9.rounded-full.transition-colors.duration-200.ease-in-out
       {:class (if enabled? "bg-purple-600" "bg-gray-600")}
       [:span.absolute.inline-block.h-3.w-3.rounded-full.bg-white.transform.transition-transform.duration-300.shadow-md
        {:class (if enabled? "translate-x-5" "translate-x-1")}]]]]))

;; -- Footer component --
(defn footer []
  [:div.w-full.text-center.py-4.text-gray-400.text-xs.border-t.border-gray-800
   [:div.flex.flex-col.items-center.justify-center
    [:p.mb-2 (t :footer-text)]
    [:a.github-link.text-indigo-400.hover:text-indigo-300.transition-colors.flex.items-center
     {:href "https://github.com/Tok/wizmetria-web"
      :target "_blank"
      :rel "noopener noreferrer"}
     [:span.mr-1 (t :github-link)]
     ;; GitHub SVG icon
     [:svg.w-4.h-4 
      {:xmlns "http://www.w3.org/2000/svg" 
       :viewBox "0 0 24 24" 
       :fill "currentColor"}
      [:path 
       {:d "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}]]]]])

;; -- App header component --
(defn header []
  (let [text-direction @(rf/subscribe [:text-direction])
        shiny-enabled? @(rf/subscribe [:shiny-effects-enabled])
        rtl? (= text-direction "rtl")]
    [:div.flex.items-center.justify-between.w-full.max-w-5xl.px-2.py-2
     [:div.flex.items-center
      [:h1.text-5xl.text-purple-300.font-bold.tracking-wider.mr-4.app-title
       {:style (merge
                {:font-family "'Courier New', monospace"}
                (when shiny-enabled? 
                  {:text-shadow "0 0 12px rgba(139, 92, 246, 0.5), 0 0 24px rgba(139, 92, 246, 0.3)"}))} 
       (t :app-title)]
      [:h2.text-xl.text-indigo-300.font-light.hidden.sm:block
       {:style (merge
                {:font-family "'Courier New', monospace"}
                (when shiny-enabled? 
                  {:text-shadow "0 0 5px rgba(99, 102, 241, 0.3)"}))}
       (t :app-subtitle)]]
     [:div.controls-container.flex.items-center.space-x-2
      {:class (when rtl? "rtl space-x-reverse")}
      (if rtl?
        [i18n/language-selector]
        [toggle-switch])
      (if rtl?
        [toggle-switch]
        [i18n/language-selector])]])) 