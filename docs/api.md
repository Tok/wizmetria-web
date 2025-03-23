# Wizmetria API Documentation

This document outlines the main components and functions available in the Wizmetria codebase, organized by namespace.

## Core Namespaces

### `wizmetria-web.core`

Core application namespace responsible for initializing and mounting the application.

#### Functions

| Function | Description |
|----------|-------------|
| `mount-root` | Mounts the main Reagent component to the DOM |
| `init` | Initializes the application |
| `main-panel` | Renders the main application panel |

#### Subscriptions

| Subscription | Description |
|--------------|-------------|
| `:word` | Current word being analyzed |
| `:symmetry-results` | Results of symmetry analysis |
| `:wordlist-stats` | Statistics of analyzed word lists |
| `:processing-state` | Current state of text processing |
| `:shiny-effects-enabled` | Whether visual effects are enabled |

### `wizmetria-web.sym`

Core library for symmetry detection and word analysis.

#### Functions

| Function | Description |
|----------|-------------|
| `clean` | `(clean word)` - Cleans a word (uppercase, remove non-alpha) |
| `evaluate` | `(evaluate words)` - Evaluates symmetry for a list of words |
| `find-sym` | `(find-sym axis words)` - Finds words with symmetry on given axis |
| `char-ord` | `(char-ord c)` - Gets ordinal value of character (A=0, Z=25) |
| `symmetric-word?` | `(symmetric-word? word)` - Checks if word has any symmetry |
| `get-axis` | `(get-axis word)` - Gets the axis of symmetry for a word |

#### Data Structures

| Structure | Description |
|-----------|-------------|
| `symmetry-result` | `{:axis int :type (:mirror/:rotational) :words [string]}` |

## Processing Namespaces

### `wizmetria-web.processing.pipeline`

Text processing pipeline for analyzing large text files.

#### Functions

| Function | Description |
|----------|-------------|
| `process-text-pipeline-fx` | Processes text in chunks with progress reports |
| `process-file` | Reads and processes a file asynchronously |
| `calculate-statistics` | Calculates statistics for processed words |

### `wizmetria-web.processing.text`

Text manipulation and word extraction utilities.

#### Functions

| Function | Description |
|----------|-------------|
| `extract-words` | `(extract-words text min-length)` - Extracts words from text |
| `create-chunks` | `(create-chunks text)` - Splits text into processable chunks |
| `clean-text` | `(clean-text text)` - Normalizes text for processing |

### `wizmetria-web.processing.worker`

Web Worker implementation for parallel word processing.

#### Functions

| Function | Description |
|----------|-------------|
| `process-words-in-batches` | Processes words in parallel using Web Workers |
| `create-worker` | Creates a new Web Worker instance |
| `terminate-workers` | Terminates active worker instances |

### `wizmetria-web.processing.symmetry`

Higher-level symmetry processing functions.

#### Functions

| Function | Description |
|----------|-------------|
| `process-symmetry` | Processes symmetry for a list of words |
| `process-symmetry-with-worker` | Processes symmetry using workers if available |
| `calculate-statistics` | Calculates statistics for symmetrical words |

## View Namespaces

### `wizmetria-web.views.layout`

Main application layout components.

#### Components

| Component | Description |
|-----------|-------------|
| `main-layout` | Main application layout with header and content |
| `header` | Application header with title and navigation |
| `footer` | Application footer with links and info |

### `wizmetria-web.views.symmetry`

Symmetry visualization components.

#### Components

| Component | Description |
|-----------|-------------|
| `symmetry-display` | Displays symmetry results for a word |
| `word-input` | Input component for entering words to analyze |
| `symmetry-info` | Information about detected symmetry |

### `wizmetria-web.views.stats`

Statistical visualization components.

#### Components

| Component | Description |
|-----------|-------------|
| `stats-display` | Displays statistics for processed word lists |
| `top-words` | Shows top symmetrical words |
| `distribution-chart` | Chart showing distribution of symmetry types |

### `wizmetria-web.views.analysis`

Text analysis components.

#### Components

| Component | Description |
|-----------|-------------|
| `file-upload` | Component for uploading text files |
| `processing-progress` | Shows progress during file processing |
| `results-display` | Displays results of text analysis |

## Utility Namespaces

### `wizmetria-web.processing.grid`

Grid and visualization utilities.

#### Functions

| Function | Description |
|----------|-------------|
| `symmetry-view` | Renders circular visualization of a word |
| `create-alphabet-circle` | Creates a circular alphabet visualization |
| `draw-word-path` | Draws a path connecting letters in a word |

### `wizmetria-web.processing.i18n`

Internationalization support.

#### Functions

| Function | Description |
|----------|-------------|
| `t` | `(t key)` - Translates a key to current language |
| `set-language` | `(set-language lang)` - Sets the current language |
| `available-languages` | List of available languages |

### `wizmetria-web.processing.config`

Application configuration.

#### Data

| Config | Description |
|--------|-------------|
| `processing-config` | Configuration for text processing |
| `worker-config` | Configuration for Web Workers |
| `ui-config` | UI configuration settings |

## Events

### Re-frame Events

| Event | Description |
|-------|-------------|
| `:initialize` | Initializes the application |
| `:update-word` | Updates the current word |
| `:check-symmetry` | Checks symmetry of current word |
| `:process-file` | Processes a text file |
| `:update-processing-progress` | Updates processing progress |
| `:set-wordlist-stats` | Sets statistics for processed words |
| `:handle-processing-error` | Handles processing errors |
| `:init-language` | Initializes language settings |
| `:set-language` | Sets the current language |
| `:toggle-shiny-effects` | Toggles visual effects |

## Effects

### Re-frame Effects

| Effect | Description |
|--------|-------------|
| `:read-file-async` | Reads a file asynchronously |
| `:process-text-pipeline` | Processes text using the pipeline |

## Integration Points

### How to extend the application

1. **Add new symmetry detection algorithm**:
   - Add new function to `wizmetria-web.sym` namespace
   - Register detection in the `evaluate` function

2. **Add new visualization**:
   - Create new component in appropriate view namespace
   - Add subscription to required data
   - Register component in layout

3. **Add new language**:
   - Add translation map to `i18n.cljs`
   - Register in available languages

4. **Add new processing capability**:
   - Extend pipeline in `processing/pipeline.cljs`
   - Add appropriate events and subscriptions
   - Create UI components for interaction

## Example Usage

```clojure
;; Check symmetry of a word
(defn check-word-symmetry [word]
  (let [cleaned (sym/clean word)
        results (sym/evaluate [cleaned])
        has-symmetry (sym/symmetric-word? cleaned)]
    {:word cleaned
     :has-symmetry has-symmetry
     :results results
     :axis (when has-symmetry (sym/get-axis cleaned))}))

;; Process a list of words
(defn process-word-list [words]
  (let [cleaned-words (map sym/clean words)
        unique-words (set cleaned-words)
        results (sym/evaluate unique-words)]
    {:total (count unique-words)
     :symmetric (count (filter sym/symmetric-word? unique-words))
     :results results}))

;; Dispatch events to analyze a file
(defn analyze-file [file]
  (rf/dispatch [:process-file file]))

;; Subscribe to results
(defn display-results []
  (let [stats @(rf/subscribe [:wordlist-stats])]
    (when stats
      [:div
       [:h2 "Analysis Results"]
       [:p (str "Total words: " (:total stats))]
       [:p (str "Symmetric words: " (:symmetric stats))]
       [:p (str "Percentage: " 
                (.toFixed (* 100 (/ (:symmetric stats) (:total stats))) 2)
                "%")]]))) 