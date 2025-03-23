(ns wizmetria-web.config)

;; File processing configuration
(def processing-config
  {:chunk-size 5000                            ;; Number of characters to process in each chunk
   :min-word-length 3                          ;; Minimum length for a word to be considered
   :processing-delay-ms 30                     ;; Delay between processing chunks for UI responsiveness
   :symmetry-calculation-delay-ms 50           ;; Delay before starting symmetry calculations
   :default-word "WIZARD"                      ;; Default word to analyze on startup
   :worker-batch-size 5000                     ;; Number of words to process in each worker batch
   :worker-enabled false                        ;; Whether to use web workers for symmetry calculations
   :parallel-batches 4})                       ;; Maximum number of parallel worker batches

;; UI configuration
(def ui-config
  {:animation-duration-ms 500                  ;; Duration for UI animations
   :toggle-effects-delay-ms 10                 ;; Delay for effects toggle to take effect
   :top-words-to-show 10})                     ;; Number of top words to display in lists

;; Visualization configuration
(def visualization-config
  {:circle-radius 150                          ;; Radius of the main visualization circle
   :center-x 180                               ;; X-coordinate of the circle center
   :center-y 180                               ;; Y-coordinate of the circle center
   :letter-radius 160})                        ;; Radius for letter positioning 