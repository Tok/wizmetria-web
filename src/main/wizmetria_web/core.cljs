(ns wizmetria-web.core
  (:require [reagent.dom.client :as rdomc]
            [re-frame.core :as rf]
            [wizmetria-web.config :as config]
            [wizmetria-web.events]
            [wizmetria-web.processing-simple]
            [wizmetria-web.views.layout :as layout]
            [wizmetria-web.views.symmetry :as symmetry]
            [wizmetria-web.views.analysis :as analysis]
            [wizmetria-web.views.stats :as stats]
            [wizmetria-web.views.explanation :as explanation]))

;; -- Subscriptions --
(rf/reg-sub
 :word
 (fn [db]
   (:word db)))

(rf/reg-sub
 :symmetry-results
 (fn [db]
   (:symmetry-results db)))

(rf/reg-sub
 :wordlist-stats
 (fn [db]
   (:wordlist-stats db)))

(rf/reg-sub
 :processing-state
 (fn [db]
   (:processing-state db)))

(rf/reg-sub
 :shiny-effects-enabled
 (fn [db]
   (get db :shiny-effects-enabled false)))

;; -- Initialize app --
(rf/reg-event-db
 :initialize
 (fn [_ _]
   ;; First create a basic app DB
   (let [default-word (get-in config/processing-config [:default-word])
         initial-db {:word default-word
                     :symmetry-results {}
                     :wordlist-stats nil
                     :processing-state nil
                     :shiny-effects-enabled false}]
     
     ;; Initialize language separately
     (js/setTimeout 
      #(do
         (rf/dispatch [:init-language])
         (rf/dispatch [:update-word default-word])
         (rf/dispatch [:check-symmetry]))
      10)
     
     initial-db)))

;; -- Main panel view --
(defn main-panel []
  (let [text-direction @(rf/subscribe [:text-direction])
        shiny-enabled? @(rf/subscribe [:shiny-effects-enabled])]
    [:div.min-h-screen.bg-gray-900.text-purple-100.flex.flex-col
     {:dir text-direction
      :class (when shiny-enabled? "shiny-enabled")}
     [:div.flex-grow.px-4.py-6.flex.flex-col.items-center
      [layout/header]
      [:div.w-full.max-w-5xl
       [explanation/explanation]
       [symmetry/input-field]
       [symmetry/symmetry-display]
       [analysis/text-analysis]
       [stats/wordlist-stats]]]
     [layout/footer]]))

(defn mount-root []
  (rf/dispatch-sync [:initialize])
  
  ;; Apply initial shiny effects to body ONLY if enabled in app state
  (let [shiny-enabled? @(rf/subscribe [:shiny-effects-enabled])
        body (.-body js/document)]
    (when (and body shiny-enabled?)
      (.add (.-classList body) "shiny-enabled")))
  
  (let [root (rdomc/create-root (.getElementById js/document "app"))]
    (rdomc/render root [main-panel])))

(defn init []
  (mount-root)) 