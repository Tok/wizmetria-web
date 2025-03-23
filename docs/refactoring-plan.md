# Wizmetria Code Refactoring Plan

This document outlines a plan to reduce code complexity and improve maintainability of the Wizmetria web application.

## 1. Break Down Large Components

### Current Issues:
- `text-analysis` and `wordlist-stats` components in core.cljs are too large
- Components handle multiple concerns (UI, state management, event handling)

### Solution:
- Split components into smaller, focused components
- Create separate components for:
  - File upload button
  - Progress indicator
  - Stats display
  - Word lists by symmetry type

Example structure:
```clojure
;; New component structure
(defn file-upload-button [])
(defn processing-progress-indicator [processing-state])
(defn symmetric-word-list [title words on-click])
(defn symmetry-stats-card [label count])
(defn symmetry-axis-section [axis-id words])

;; Main components using the smaller ones
(defn text-analysis [])
(defn wordlist-stats [])
```

## 2. Refactor File Processing Logic

### Current Issues:
- Complex nested callbacks in the file processing code
- Multiple timeouts and manual progress tracking
- Mixed concerns between UI updates and data processing

### Solution:
- Use a state machine approach for file processing
- Extract pure data processing functions
- Move complex logic to separate namespaces
- Replace timeouts with proper async processing

```clojure
;; Extract to a new namespace: wizmetria-web.processing
(ns wizmetria-web.processing)

;; Pure functions for text processing
(defn extract-words [text])
(defn find-symmetric-words [words])
(defn calculate-statistics [mirror-words rotation-words])

;; State machine for processing steps
(defn processing-pipeline [text]
  (-> text
      extract-words
      find-symmetric-words
      calculate-statistics))
```

## 3. Remove Magic Numbers and Constants

### Current Issues:
- Hardcoded chunk sizes, timeouts, and other constants
- Difficult to adjust or tune performance

### Solution:
- Create a configuration namespace with documented constants
- Group related constants
- Provide meaningful names for all constants

```clojure
;; New namespace: wizmetria-web.config
(ns wizmetria-web.config)

(def processing-config
  {:chunk-size 5000
   :min-word-length 3
   :debounce-ms 30
   :top-words-count 10})

(def ui-config
  {:animation-duration-ms 500
   :transition-delay-ms 10})
```

## 4. Improve Error Handling

### Current Issues:
- Limited error handling in file processing
- No user feedback for failures

### Solution:
- Add proper error handling in file processing
- Create error state and UI components
- Add recovery options for users

```clojure
;; Add error handling in events
(rf/reg-event-fx
 :process-file
 (fn [{:keys [db]} [_ file]]
   (try
     {:db (assoc db :processing-state {:status :reading 
                                       :file-name (.-name file)
                                       :progress 0})
      :fx [[:read-file-async file]]}
     (catch js/Error e
       {:db (assoc db :processing-state {:status :error 
                                         :error-message "Could not process file"
                                         :details (.-message e)})
        :fx [[:log-error e]]}))))

;; Add error UI component
(defn error-message [error-state])
```

## 5. Enhance Performance

### Current Issues:
- Processing large files blocks the UI
- Sequential processing of word symmetry

### Solution:
- Implement true worker-based processing for large files
- Use Web Workers for CPU-intensive operations
- Batch processing with prioritization

```clojure
;; Define a worker interface
(defn create-symmetry-worker []
  (let [worker (js/Worker. "js/symmetry-worker.js")]
    (set! (.-onmessage worker) handle-worker-message)
    worker))

;; Move CPU-intensive work to worker
(defn process-in-worker [words]
  (.postMessage worker (clj->js {:words words})))
```

## 6. Standardize Code Organization

### Current Issues:
- Inconsistent function organization
- Mixed component styles and concerns

### Solution:
- Group code by feature rather than type
- Establish consistent component structure
- Document code organization standards

```
src/main/wizmetria_web/
  ├── core.cljs        # Application entry point and main panel
  ├── config.cljs      # Configuration and constants
  ├── events/          # Re-frame events by feature
  │   ├── processing.cljs
  │   └── ui.cljs
  ├── views/           # UI components
  │   ├── analysis.cljs
  │   ├── symmetry.cljs
  │   └── stats.cljs
  ├── processing/      # Data processing logic
  │   ├── text.cljs
  │   └── symmetry.cljs
  ├── utils/           # Utility functions
  │   └── common.cljs
  └── i18n.cljs        # Translations
```

## Implementation Strategy

1. Start with small, non-disruptive changes:
   - Extract constants and configuration
   - Document existing code

2. Refactor file processing logic:
   - Create pure functions
   - Improve error handling

3. Break down UI components:
   - Extract smaller components
   - Establish consistent patterns

4. Enhance performance:
   - Implement worker-based processing
   - Optimize rendering

5. Document code and architecture:
   - Create architectural overview
   - Document key algorithms and flows 