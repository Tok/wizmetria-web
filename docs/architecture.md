# Wizmetria Architecture Documentation

## Overview

Wizmetria is a web application for detecting and visualizing alphabetical circular symmetry in words. The application is built using ClojureScript with Reagent (React wrapper) and Re-frame for state management. This document provides an architectural overview and explains key components and algorithms.

## Architecture

The application follows a clean, modular architecture based on the Re-frame pattern:

```
                  ┌─────────────────┐
                  │                 │
                  │   User Interface│
                  │  (Reagent Views)│
                  │                 │
                  └────────┬────────┘
                           │
                           │ Events
                           ▼
┌─────────────┐    ┌─────────────────┐    ┌─────────────────┐
│             │    │                 │    │                 │
│  Subscriptions◄───┤   Application  │    │   Event Handlers│◄── Effects
│             │    │     State       │───►│                 │
│             │    │    (Re-frame DB)│    │                 │───► Side Effects
│             │    │                 │    │                 │
└─────────────┘    └─────────────────┘    └────────┬────────┘
                                                   │
                                                   │
                                          ┌────────▼────────┐
                                          │                 │
                                          │  Processing Logic│
                                          │                 │
                                          └─────────────────┘
```

### Key Components

1. **UI Layer (Views)**
   - `views/layout.cljs`: Main layout components (header, footer)
   - `views/symmetry.cljs`: Word input and symmetry visualization
   - `views/analysis.cljs`: Text file analysis components
   - `views/stats.cljs`: Statistics display for analyzed text
   - `views/explanation.cljs`: Educational content about symmetry
   - `views/error.cljs`: Error handling and display

2. **Application State**
   - Managed through Re-frame's global app-db
   - Key state slices:
     - `:word` - Current input word
     - `:symmetry-results` - Calculated symmetry information
     - `:wordlist-stats` - Statistics from text analysis
     - `:processing-state` - State of text analysis process

3. **Event Handling**
   - `events.cljs`: Defines event handlers for user interactions
   - Key events:
     - File upload and processing events
     - Word input and symmetry checking
     - UI state management

4. **Processing Logic**
   - `sym.cljs`: Core symmetry detection algorithms
   - `processing/`: Processing pipeline for larger text analysis
     - `text.cljs`: Text parsing and word extraction
     - `symmetry.cljs`: Symmetry detection for multiple words
     - `pipeline.cljs`: Asynchronous processing management
     - `worker.cljs`: Web worker integration for performance

5. **Utilities**
   - `config.cljs`: Application configuration
   - `i18n.cljs`: Internationalization support
   - `grid.cljs`: Circular alphabet visualization
   - `util.cljs`: Common utility functions

## Data Flow

1. **User Input**
   - User enters a word or uploads a text file
   - UI dispatches an event (e.g., `:update-word` or `:process-file`)

2. **Event Processing**
   - Event handlers update application state
   - For symmetry checking:
     - Word is passed to symmetry detection algorithm
     - Results are stored in app-db
   - For file analysis:
     - File is read in chunks
     - Words are extracted and processed asynchronously
     - Progress updates are sent back to UI

3. **UI Update**
   - Subscriptions detect state changes
   - UI components re-render with new data
   - Visualizations reflect symmetry results

## Key Algorithms

### Symmetry Detection

The core algorithm for detecting alphabetical circular symmetry:

1. **Mirror Symmetry Detection**:
   - For each letter pair across a potential axis, check if their ordinal values sum to a constant
   - If all pairs satisfy this property, the word has mirror symmetry
   - Located in `sym/symmetric-word?` function

2. **Rotational Symmetry Detection**:
   - Check if each letter has a corresponding partner at position (ordinal + 13) % 26
   - Located in `sym/rotation-symmetric-word?` function

3. **Axis Identification**:
   - Determine which of the 26 possible axes the symmetry occurs on
   - Located in `sym/axis-id-for-word` function

### Text Processing Pipeline

The asynchronous processing pipeline for large text files:

1. **Chunking**: Divide large files into manageable chunks
2. **Word Extraction**: Parse text to extract words meeting minimum length criteria 
3. **Symmetry Analysis**: Process each word through symmetry detection algorithms
4. **Statistics Calculation**: Compile results and calculate statistics

This pipeline uses timeouts between processing steps to keep the UI responsive. 