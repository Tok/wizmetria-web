(ns wizmetria-web.processing
  (:require [re-frame.core :as rf]
            [re-frame.registrar :as registrar]
            [wizmetria-web.processing.text :as text]
            [wizmetria-web.processing.symmetry :as symmetry]
            [wizmetria-web.processing.pipeline :as pipeline]))

;; Re-export pure functions from modules
(def extract-words text/extract-words)
(def process-text text/process-text)
(def create-chunks text/create-chunks)

(def find-symmetric-words symmetry/find-symmetric-words)
(def find-rotation-words symmetry/find-rotation-words)
(def calculate-statistics symmetry/calculate-statistics)
(def process-symmetry symmetry/process-symmetry)

;; Re-export state machine functions
(def processing-states pipeline/processing-states)
(def next-state pipeline/next-state)

;; Ensure effects are registered by explicitly registering them here
;; This ensures they are available when this namespace is loaded

;; Check if our effect handlers are registered, and register if not
(when-not (registrar/get-handler :fx :process-text-pipeline)
  (js/console.log "Registering :process-text-pipeline effect")
  (rf/reg-fx
   :process-text-pipeline
   pipeline/process-text-pipeline-fx))

(when-not (registrar/get-handler :fx :process-text-chunks)
  (js/console.log "Registering :process-text-chunks effect")
  (rf/reg-fx
   :process-text-chunks
   pipeline/process-text-chunks-fx))