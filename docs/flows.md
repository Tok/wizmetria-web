# Wizmetria Application Flows

This document describes the main flows and processes in the Wizmetria application.

## 1. Application Initialization Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  App Launches   │────►│  Initialize DB  │────►│   Load Default  │
│                 │     │                 │     │      Word       │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Render UI      │◄────│  Check Word     │◄────│ Init Language   │
│  Components     │     │  Symmetry       │     │                 │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Description:

1. **App Launch**: The application starts by mounting the root component
2. **Initialize DB**: The `:initialize` event creates the initial application state
3. **Initialize Language**: Set up internationalization support
4. **Load Default Word**: The default word "WIZARD" is loaded from configuration
5. **Check Symmetry**: The symmetry of the default word is calculated
6. **Render UI Components**: The main interface is rendered with the initial state

### Key Code:

```clojure
;; In core.cljs
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

(defn mount-root []
  (rf/dispatch-sync [:initialize])
  (let [root (rdomc/create-root (.getElementById js/document "app"))]
    (rdomc/render root [main-panel])))
```

## 2. Word Analysis Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  User Inputs    │────►│  Update Word    │────►│  Clean Word     │
│  Word           │     │  Event          │     │                 │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Update UI      │◄────│  Store Results  │◄────│ Check Symmetry  │
│  Visualization  │     │  in DB          │     │ Algorithm       │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Description:

1. **User Input**: User types a word in the input field
2. **Update Word Event**: `:update-word` event is dispatched with the new word
3. **Clean Word**: The word is cleaned (uppercase, remove non-alphabetic chars)
4. **Check Symmetry**: The symmetry detection algorithm analyzes the word
5. **Store Results**: Symmetry results are stored in the application state
6. **Update UI**: The visualization is updated to show the word and any symmetry

### Key Code:

```clojure
;; In events.cljs
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

;; In sym.cljs
(defn evaluate [words]
  (->> 26 range 
       (map #(find-sym % words)) 
       filter-results))
```

## 3. Text File Analysis Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  User Uploads   │────►│ Process File    │────►│  Read File      │
│  Text File      │     │ Event           │     │  Asynchronously │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Update Progress│◄────│ Process Text    │◄────│ Prepare Text    │
│  UI             │     │ in Chunks       │     │ Processing      │
│                 │     │                 │     │                 │
└────────┬────────┘     └────────┬────────┘     └─────────────────┘
         │                       │
         │                       │
         ▼                       ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Display        │◄────│ Calculate       │◄────│ Find Symmetrical│
│  Results        │     │ Statistics      │     │ Words           │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Description:

1. **File Upload**: User selects a text file to analyze
2. **Process File Event**: The `:process-file` event is triggered
3. **Read File**: The file is read asynchronously with progress updates
4. **Prepare Processing**: The text content is prepared for chunked processing
5. **Process in Chunks**: Text is processed in small chunks with timeouts
6. **Update Progress UI**: Progress indicators are updated during processing
7. **Find Symmetrical Words**: Each word is checked for symmetry
8. **Calculate Statistics**: Statistics about symmetrical words are compiled
9. **Display Results**: Results are shown in the UI with word lists and stats

### Key Code:

```clojure
;; In events.cljs
(rf/reg-event-fx
 :process-file
 (fn [{:keys [db]} [_ file]]
   {:db (assoc db :processing-state {:status :reading 
                                     :file-name (.-name file)
                                     :progress 0})
    :fx [[:read-file-async file]]}))

(rf/reg-event-fx
 :prepare-text-processing
 (fn [{:keys [db]} [_ text]]
   {:db (assoc db :processing-state {:status :processing})
    :process-text-pipeline
    {:text text
     :on-state-change #(rf/dispatch [:update-processing-progress %])
     :on-complete #(rf/dispatch [:set-wordlist-stats (:stats %)])
     :on-error #(rf/dispatch [:handle-processing-error %])}}))

;; In processing/pipeline.cljs
(defn process-text-pipeline-fx [{:keys [text on-state-change on-complete on-error]}]
  ;; Create a processing pipeline that handles text in chunks
  (let [chunk-info (text-proc/create-chunks text)
        processing-delay (get-in config/processing-config [:processing-delay-ms])]
    
    ;; Report initial state
    (when on-state-change
      (on-state-change {:state :processing
                        :progress 0}))
    
    ;; Process text chunks
    ;; ... (chunked processing implementation)
    ))
```

## 4. Web Worker Processing Flow (Optional)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│ Worker-enabled  │────►│ Create Worker   │────►│ Split Words     │
│ Check           │     │ Instances       │     │ into Batches    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Merge Results  │◄────│ Process Batches │◄────│ Send Batches    │
│  from Workers   │     │ in Parallel     │     │ to Workers      │
│                 │     │                 │     │                 │
└────────┬────────┘     └─────────────────┘     └─────────────────┘
         │
         │
         ▼
┌─────────────────┐
│                 │
│  Return Final   │
│  Results        │
│                 │
└─────────────────┘
```

### Description:

1. **Worker Enabled Check**: Check if Web Worker processing is enabled in config
2. **Create Worker Instances**: Create Web Worker instances for parallel processing
3. **Split Words**: Divide words into batches for processing
4. **Send Batches**: Send batches to workers for processing
5. **Process Batches**: Workers process batches in parallel
6. **Merge Results**: Combine results from all workers
7. **Return Results**: Provide final results back to the main application flow

### Key Code:

```clojure
;; In processing/symmetry.cljs
(defn process-symmetry-with-worker [unique-words on-progress on-complete on-error]
  (if (worker-enabled?)
    ;; Use worker-based processing
    (worker/process-words-in-batches 
     unique-words
     #(on-progress {:state :processing-symmetry
                    :progress (+ 80 (* 0.15 (:progress %)))})
     #(let [stats (calculate-statistics unique-words % %)]
        (on-complete stats))
     on-error)
    
    ;; Use traditional single-threaded processing
    (try
      (let [stats (process-symmetry unique-words)]
        (on-complete stats))
      (catch js/Error err
        (when on-error
          (on-error {:error-message "Error processing symmetry"
                    :details (.-message err)}))))))
```

## 5. UI Update Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  State Change   │────►│  Re-frame       │────►│  Subscriptions  │
│  Event          │     │  Event Handler  │     │  Notify         │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Component      │◄────│  React Virtual  │◄────│  Reagent        │
│  Updates in DOM │     │  DOM Updates    │     │  Components     │
│                 │     │                 │     │  Re-render      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Description:

1. **State Change Event**: An event that changes application state is dispatched
2. **Event Handler**: Re-frame event handler processes the event and updates DB
3. **Subscriptions Notify**: Subscriptions that depend on changed data notify subscribers
4. **Components Re-render**: Reagent components that use changed data re-render
5. **Virtual DOM Updates**: React calculates the minimal DOM updates needed
6. **DOM Updates**: The actual DOM is updated efficiently

### Key Code:

```clojure
;; In core.cljs - Subscriptions
(rf/reg-sub
 :word
 (fn [db]
   (:word db)))

(rf/reg-sub
 :wordlist-stats
 (fn [db]
   (:wordlist-stats db)))

;; In views/symmetry.cljs - Component using subscriptions
(defn symmetry-display []
  (let [results @(rf/subscribe [:symmetry-results])
        word @(rf/subscribe [:word])
        cleaned-word (util/clean word)
        has-symmetry (sym/symmetric-word? cleaned-word)]
    [:div
     (when (and results (seq results))
       [:div.mt-4
        [:h2.text-xl.mb-3 (t :symmetry-results)]
        [:div.flex.flex-wrap.justify-center.gap-6
         [:div.bg-gray-800.p-4.rounded-lg
          [grid/symmetry-view word word-axis-id has-symmetry]]]])]))
```

These flows work together to create a responsive and intuitive user experience in the Wizmetria application. 