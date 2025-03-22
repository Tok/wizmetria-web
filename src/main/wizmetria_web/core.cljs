(ns wizmetria-web.core
  (:require [reagent.dom :as rdom]
            [reagent.dom.client :as rdomc]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [wizmetria-web.sym :as sym]
            [wizmetria-web.grid :as grid]
            [wizmetria-web.util :as util]
            [wizmetria-web.i18n :as i18n :refer [t]]
            [clojure.string :as str]))

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

;; -- Events --
(rf/reg-event-db
 :initialize
 (fn [_ _]
   ;; First create a basic app DB
   (let [initial-db {:word "WIZARD"
                     :symmetry-results (sym/evaluate [(sym/clean "WIZARD")])
                     :wordlist-stats nil
                     :processing-state nil}]
     
     ;; Initialize language separately
     (js/setTimeout 
      #(do
         (rf/dispatch [:init-language])
         ;; Initialize the click outside handler for language dropdown after DOM is ready
         (js/setTimeout i18n/init-click-outside 100))
      100)
     
     ;; Return the initial database
     initial-db)))

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

(rf/reg-event-fx
 :process-file
 (fn [{:keys [db]} [_ file]]
   {:db (assoc db :processing-state {:status :reading 
                                     :file-name (.-name file)
                                     :progress 0})
    :fx [[:read-file-async file]]}))

(rf/reg-fx
 :read-file-async
 (fn [file]
   (let [reader (js/FileReader.)]
     (set! (.-onload reader)
           (fn [e]
             (let [content (.. e -target -result)]
               (rf/dispatch [:prepare-text-processing content]))))
     (set! (.-onprogress reader)
           (fn [e]
             (when (.-lengthComputable e)
               (let [progress (/ (.-loaded e) (.-total e))]
                 (rf/dispatch [:update-processing-progress
                              {:status :reading
                               :progress (* 100 progress)}])))))
     (.readAsText reader file))))

(rf/reg-event-db
 :update-processing-progress
 (fn [db [_ state]]
   (update db :processing-state merge state)))

(rf/reg-event-fx
 :prepare-text-processing
 (fn [{:keys [db]} [_ text]]
   (let [chunks (partition-all 5000 text)
         total-chunks (count chunks)]
     {:db (assoc db :processing-state 
                {:status :processing
                 :total-chunks total-chunks
                 :processed-chunks 0
                 :progress 0})
      :fx [[:process-chunk {:text text
                           :db db
                           :chunk-index 0
                           :chunk-size 5000
                           :total-length (count text)}]]})))

(rf/reg-fx
 :process-chunk
 (fn [{:keys [text db chunk-index chunk-size total-length]}]
   (let [start-idx (* chunk-index chunk-size)
         end-idx (min (+ start-idx chunk-size) total-length)
         finished? (>= end-idx total-length)
         progress (/ end-idx total-length)]
     
     (if finished?
       ;; If finished, process the entire text at once
       (let [words (-> text
                      (str/replace #"[^a-zA-Z\s]" " ")
                      (str/replace #"\s+" " ")
                      (str/trim)
                      (str/upper-case)
                      (str/split #"\s+"))
             unique-words (into #{} (filter #(>= (count %) 3) words))
             
             ;; Update UI that we're finding symmetry
             _ (rf/dispatch [:update-processing-progress 
                            {:status :finding-symmetry
                             :progress 100
                             :word-count (count unique-words)}])
             
             ;; Find words with symmetry (time-consuming part)
             _ (js/setTimeout 
                #(do
                   ;; Find mirror symmetry words
                   (rf/dispatch [:update-processing-progress 
                                {:status :mirror-symmetry
                                 :progress 0}])
                   
                   (let [mirror-sym-words (filter sym/symmetric-word? unique-words)
                         mirror-by-axis (group-by sym/axis-id-for-word mirror-sym-words)
                         
                         _ (rf/dispatch [:update-processing-progress 
                                        {:status :rotational-symmetry
                                         :progress 50}])
                         
                         ;; Find rotational symmetry words
                         rotation-sym-words (filter (fn [word] 
                                                   (and (sym/rotation-symmetric-word? word)
                                                        (not (sym/symmetric-word? word))))
                                                 unique-words)
                         
                         ;; Prepare stats
                         total-words (count unique-words)
                         mirror-count (count mirror-sym-words)
                         rotation-count (count rotation-sym-words)
                         
                         ;; Sort by length for each axis
                         mirror-by-axis-sorted (into {} 
                                                  (map (fn [[axis words]]
                                                         [axis (sort-by (comp - count) words)])
                                                       mirror-by-axis))
                         rotation-sorted (sort-by (comp - count) rotation-sym-words)
                         
                         stats {:total-words total-words
                                :mirror {:count mirror-count
                                         :by-axis mirror-by-axis-sorted
                                         :top-10 (take 10 (sort-by (comp - count) mirror-sym-words))}
                                :rotation {:count rotation-count
                                          :words rotation-sorted
                                          :top-10 (take 10 rotation-sorted)}}]
                     
                     (rf/dispatch [:update-processing-progress 
                                  {:status :done
                                   :progress 100}])
                     (rf/dispatch [:set-wordlist-stats stats])))
                30) ;; Short delay for UI to update
             ]
         nil) ;; No immediate return, async processing
       
       ;; Process the next chunk
       (do
         (rf/dispatch [:update-processing-progress 
                      {:status :processing
                       :processed-chunks (inc chunk-index)
                       :progress (* 100 progress)}])
         (js/setTimeout 
          #(rf/dispatch-sync [:process-next-chunk 
                             {:text text
                              :chunk-index (inc chunk-index)
                              :chunk-size chunk-size
                              :total-length total-length}])
          10)))) ;; Small delay to keep UI responsive
   nil))

(rf/reg-event-fx
 :process-next-chunk
 (fn [{:keys [db]} [_ params]]
   {:fx [[:process-chunk (assoc params :db db)]]}))

(rf/reg-event-db
 :set-wordlist-stats
 (fn [db [_ stats]]
   (assoc db 
          :wordlist-stats stats
          :processing-state {:status :complete})))

;; -- Views --
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
       {:on-click #(rf/dispatch [:update-word "REFERS"])} "REFERS"]]]]])

;; -- File analysis component --
(defn text-analysis []
  (let [processing-state @(rf/subscribe [:processing-state])
        stats @(rf/subscribe [:wordlist-stats])]
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
       [:label.bg-purple-700.text-white.px-4.py-2.rounded-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium.cursor-pointer.text-sm
        [:input.hidden
         {:type "file"
          :accept ".txt"
          :on-change (fn [e]
                      (when-let [file (-> e .-target .-files (aget 0))]
                        (rf/dispatch [:process-file file])))}]
        (t :upload-button)]]]
     
     [:p.text-sm.text-gray-300.mt-2.mb-4 (t :text-analysis-description)]
     
     ;; Progress indicator
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
          
          :complete
          (when stats
            [:div.text-sm.text-green-400.mb-1 
             (str (t :completed-status) ": " 
                  (+ (get-in stats [:mirror :count]) 
                     (get-in stats [:rotation :count])) 
                  " " (t :stats-symmetric-words))])
          
          nil)])]))

;; -- Wordlist stats component --
(defn wordlist-stats []
  (let [stats @(rf/subscribe [:wordlist-stats])]
    (when stats
      [:div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200
       [:h2.text-xl.mb-3.text-purple-300.font-semibold (t :stats-title)]
       
       [:div.grid.grid-cols-1.md:grid-cols-3.gap-3.mb-4
        [:div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center
         [:span.text-2xl.font-bold.text-indigo-300 (:total-words stats)]
         [:span.text-xs.text-gray-300 (t :stats-unique-words)]]
        
        [:div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center
         [:span.text-2xl.font-bold.text-indigo-300 (get-in stats [:mirror :count])]
         [:span.text-xs.text-gray-300 (t :stats-mirror-words)]]
        
        [:div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center
         [:span.text-2xl.font-bold.text-indigo-300 (get-in stats [:rotation :count])]
         [:span.text-xs.text-gray-300 (t :stats-rotation-words)]]]
       
       ;; Top 10 longest mirror symmetry words
       [:div.mb-4
        [:h3.text-lg.mb-2.text-indigo-300.font-medium (str "Top 10 " (t :mirror-symmetry) " " (t :for))]
        [:div.flex.flex-wrap.gap-2
         (for [word (get-in stats [:mirror :top-10])]
           ^{:key word}
           [:span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm
            {:on-click #(rf/dispatch [:update-word word])}
            word])]]
       
       ;; Top 10 longest rotational symmetry words
       [:div.mb-4
        [:h3.text-lg.mb-2.text-indigo-300.font-medium (str "Top 10 " (t :rotation-symmetry) " " (t :for))]
        [:div.flex.flex-wrap.gap-2
         (for [word (get-in stats [:rotation :top-10])]
           ^{:key word}
           [:span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm
            {:on-click #(rf/dispatch [:update-word word])}
            word])]]
       
       ;; Mirror symmetry by axis
       [:div
        [:h3.text-lg.mb-2.text-indigo-300.font-medium (str (t :for) " " (t :by) " " (t :symmetry-axis))]
        [:div.grid.grid-cols-1.md:grid-cols-2.gap-3
         (for [[axis-id words] (get-in stats [:mirror :by-axis])
               :when (seq words)
               :let [axis-name (sym/id->axis-name axis-id)
                     top-words (take 5 words)]]
           ^{:key axis-id}
           [:div.bg-gray-700.rounded-lg.p-3
            [:h4.text-indigo-200.font-medium.mb-1.text-sm
             (str axis-name " " (t :axis) " (" (count words) " " (t :for) ")")]
            [:div.flex.flex-wrap.gap-1
             (for [word top-words]
               ^{:key word}
               [:span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100
                {:on-click #(rf/dispatch [:update-word word])}
                word])]])]]])))

;; -- Footer component --
(defn footer []
  [:div.w-full.text-center.py-3.text-gray-400.text-xs.border-t.border-gray-800
   [:p (t :footer-text)]])

(defn main-panel []
  (let [text-direction @(rf/subscribe [:text-direction])]
    [:div.min-h-screen.bg-gray-900.text-purple-100.flex.flex-col
     {:dir text-direction}
     [:div.flex-grow.px-4.py-8.flex.flex-col.items-center
      [:div.flex.items-center.justify-between.w-full.max-w-5xl
       [:div
        [:h1.text-5xl.text-center.mb-4.text-purple-300.font-bold.tracking-wider (t :app-title)]
        [:h2.text-2xl.text-center.mb-8.text-indigo-300.font-light (t :app-subtitle)]]
       [i18n/language-selector]]
      [:div.w-full.max-w-5xl
       [explanation]
       [input-field]
       [symmetry-display]
       [text-analysis]
       [wordlist-stats]]]
     [footer]]))

(defn mount-root []
  (rf/dispatch-sync [:initialize])
  (let [root (rdomc/create-root (.getElementById js/document "app"))]
    (rdomc/render root [main-panel])))

(defn init []
  (mount-root)) 