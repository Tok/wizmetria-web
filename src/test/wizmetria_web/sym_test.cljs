(ns wizmetria-web.sym-test
  (:require
   [wizmetria-web.sym :as sym]
   [clojure.test :refer [deftest testing is are]]))

(deftest wizard-test 
  (testing "WIZARD has A-Z symmetry"
    (is (sym/az-symmetric? "WIZARD"))))

(deftest axis-name-test
  (testing "Even ID axis names"
    (let [m {0 "A-N" 
             2 "B-O" 
             4 "C-P" 
             6 "D-Q" 
             14 "H-U" 
             24 "M-Z"}]
      (doseq [[id name] m] 
        (is (= (sym/id->axis-name id) name)))
      (is (= (sym/id->axis-name 26) (sym/id->axis-name 0)))))
  
  (testing "Odd ID axis names"
    (let [m {1 "AB-NO" 
             3 "BC-OP" 
             5 "CD-PQ" 
             25 "MN-ZA"}]
      (doseq [[id name] m] 
        (is (= (sym/id->axis-name id) name)))
      (is (= (sym/id->axis-name 27) (sym/id->axis-name 1))))))

(deftest conversion-test
  (testing "Sum to ID conversion"
    (doseq [[sum id] {28 0, 3 1, 29 1, 4 2, 30 2, 5 3, 31 3, 6 4, 7 5, 16 14, 42 14}]
      (is (= (sym/sum->id sum) id))))
  
  (testing "Ordinal to ID conversion"
    (doseq [[ord id] {1 0, 2 2, 3 4, 4 6, 5 8, 13 24, 14 0}]
      (is (= (sym/ord->id ord) id)))))

(deftest on-axis-test
  (testing "Letters on an axis"
    (doseq [[c sum] {"A" 28, "N" 28, "H" 16, "U" 16}]
      (is (sym/on-axis? c sum)))
    (is (sym/on-axis? "H" 42))
    (is (sym/on-axis? "U" 42))))

(deftest symmetry-az-pair-test
  (testing "A-Z symmetry pairs"
    (doseq [s ["AZ" "ZA" "BY" "YB" "CX" "XC" "NM" "MN"]]
      (is (sym/symmetric? s 27))
      (is (sym/az-symmetric? s)))))

(deftest symmetry-not-az-pair-test
  (testing "Non A-Z symmetry cases"
    (doseq [s ["A" "B" "C"]]
      (is (sym/not-symmetric? s 27))
      (is (not (sym/az-symmetric? s))))))

(deftest symmetric-words-test
  (testing "Words with symmetry"
    (doseq [word ["UNSEWING" "VOTING" "TICKET" "JAGUAR" "PHOBIA"
                 "ANGLER" "BATHMATS" "CROTCHET" "EDUCTS" "MAGMA"
                 "FOGMEN" "CATHAY" "NATHAN" "PHELIA" "SOPHIE"
                 "FLUENT" "LUMEN" "METAPH"]]
      (is (sym/symmetric-word? word)))))

(deftest symmetry-test
  (testing "Specific symmetry cases with sum=28"
    (let [sum 28]
      (is (sym/not-symmetric? "XADA" sum))
      (is (sym/not-symmetric? "AADXA" sum))
      
      (doseq [word ["XAD" "DAX" "AXDA" "ADXA"]]
        (is (sym/symmetric? word sum)))
      
      (doseq [word ["AXAD" "ADXAA" "XDA" "DXA" "ADX" "AXD"]]
        (is (sym/not-symmetric? word sum))))))

(deftest zelda-test
  (testing "Zelda-related words with symmetry sum=23"
    (doseq [word ["Hero" "Link" "Ping" "Navi"]]
      (is (sym/symmetric? word 23)))))

(deftest hyrule-test
  (testing "HYRULE has symmetry"
    (is (sym/symmetric-word? "HYRULE")))) 