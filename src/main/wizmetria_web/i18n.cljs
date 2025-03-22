(ns wizmetria-web.i18n
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]))

;; Define supported languages
(def supported-languages
  {:en {:label "English"
        :dir "ltr"
        :native "English"}
   :ru {:label "Russian"
        :dir "ltr"
        :native "Русский"}
   :zh {:label "Chinese"
        :dir "ltr"
        :native "中文"}
   :ar {:label "Arabic"
        :dir "rtl"
        :native "العربية"}
   :he {:label "Hebrew"
        :dir "rtl"
        :native "עברית"}})

;; Default language
(def default-language :en)

;; Translation dictionaries for each language
(def translations
  {:en
   {:app-title "Wizmetria"
    :app-subtitle "Alphabetical Circular Symmetry Detection"
    :explanation-title "What is Wizmetria?"
    :explanation-text "Wizmetria is a tool that analyzes words for circular alphabetical symmetry. Words are mapped onto a circle with the 26 letters of the English alphabet, and the app detects if they have mirror or rotational symmetry along any of the 26 possible axes."
    :explanation-types "There are two types of symmetry:"
    :explanation-mirror "1. Mirror Symmetry: When letter pairs reflect across an axis."
    :explanation-rotation "2. Rotational Symmetry: When letter pairs are exactly opposite each other."
    :examples "examples"
    :input-label "Enter a word:"
    :analyze-button "Analyze"
    :mirror-symmetry "Mirror Symmetry"
    :rotation-symmetry "Rotational Symmetry"
    :no-symmetry "No symmetry detected"
    :axis "Axis"
    :text-analysis-title "Text Analysis"
    :text-analysis-description "Upload a text file to find words with circular symmetry."
    :upload-button "Upload File"
    :processing-status "Processing"
    :reading-status "Reading file"
    :processing-text-status "Processing text"
    :finding-symmetry "Finding symmetry"
    :completed-status "Completed"
    :stats-title "Statistics"
    :stats-total-words "Total Words"
    :stats-unique-words "Unique Words"
    :stats-symmetric-words "Words with Symmetry"
    :stats-mirror-words "With Mirror Symmetry"
    :stats-rotation-words "With Rotational Symmetry"
    :footer-text "© 2025 Arcanum Wizmetrics Unlimited • Illuminating Patterns Through Circular Symmetry"
    :language-selector "Language"
    :letter "Letter"
    :connection "Connection"
    :marker "Marker"
    :symmetry-axis "Symmetry axis"
    :dot "Dot"
    :from "from"
    :to "to"
    :for "for"
    :and "and"
    :mirror "Mirror"
    :rotation "Rotation"
    :mirror-pair "Mirror pair"
    :rotation-pair "Rotation pair"
    :symmetry-axis-title "Symmetry Axis Visualization"
    :visualization-showing-symmetry-axis "Visualization showing symmetry axis"
    :across-the-alphabet-circle "across the alphabet circle"
    :symmetry-visualization-for "Symmetry visualization for"
    :visualization-showing-word "A visualization showing the word"
    :with "with"
    :along-axis "along axis"
    :letters-arranged-description "Letters are arranged in a circle with connections between consecutive letters"
    :mirror-pairs-description "Mirror pairs are connected with dashed purple lines"
    :rotation-pairs-description "Rotation pairs are connected with dashed pink lines"
    :word-connections-for "Word connections for"
    :mirror-symmetry-connections "Mirror symmetry connections"
    :rotation-symmetry-connections "Rotation symmetry connections"
    :symmetry-results "Symmetry Results"
    :by "by"
    :around-axis "around axis"}

   :ru
   {:app-title "Визметрия"
    :app-subtitle "Обнаружение алфавитной круговой симметрии"
    :explanation-title "Что такое Визметрия?"
    :explanation-text "Визметрия - это инструмент, который анализирует слова на наличие круговой алфавитной симметрии. Слова отображаются на круге с 26 буквами английского алфавита, и приложение определяет, имеют ли они зеркальную или вращательную симметрию по любой из 26 возможных осей."
    :explanation-types "Существует два типа симметрии:"
    :explanation-mirror "1. Зеркальная симметрия: когда пары букв отражаются поперек оси."
    :explanation-rotation "2. Вращательная симметрия: когда пары букв находятся точно напротив друг друга."
    :examples "примеры"
    :input-label "Введите слово:"
    :analyze-button "Анализировать"
    :mirror-symmetry "Зеркальная симметрия"
    :rotation-symmetry "Вращательная симметрия"
    :no-symmetry "Симметрия не обнаружена"
    :axis "Ось"
    :text-analysis-title "Анализ текста"
    :text-analysis-description "Загрузите текстовый файл, чтобы найти слова с круговой симметрией."
    :upload-button "Загрузить файл"
    :processing-status "Обработка"
    :reading-status "Чтение файла"
    :processing-text-status "Обработка текста"
    :finding-symmetry "Поиск симметрии"
    :completed-status "Завершено"
    :stats-title "Статистика"
    :stats-total-words "Всего слов"
    :stats-unique-words "Уникальных слов"
    :stats-symmetric-words "Слов с симметрией"
    :stats-mirror-words "С зеркальной симметрией"
    :stats-rotation-words "С вращательной симметрией"
    :footer-text "© 2025 Arcanum Wizmetrics Unlimited • Просветление узоров через круговую симметрию"
    :language-selector "Язык"
    :letter "Буква"
    :connection "Соединение"
    :marker "Маркер"
    :symmetry-axis "Ось симметрии"
    :dot "Точка"
    :from "от"
    :to "к"
    :for "для"
    :and "и"
    :mirror "Зеркальная"
    :rotation "Вращательная"
    :mirror-pair "Зеркальная пара"
    :rotation-pair "Вращательная пара"
    :symmetry-axis-title "Визуализация оси симметрии"
    :visualization-showing-symmetry-axis "Визуализация, показывающая ось симметрии"
    :across-the-alphabet-circle "по алфавитному кругу"
    :symmetry-visualization-for "Визуализация симметрии для"
    :visualization-showing-word "Визуализация, показывающая слово"
    :with "с"
    :along-axis "вдоль оси"
    :letters-arranged-description "Буквы расположены по кругу с соединениями между последовательными буквами"
    :mirror-pairs-description "Зеркальные пары соединены пунктирными фиолетовыми линиями"
    :rotation-pairs-description "Вращательные пары соединены пунктирными розовыми линиями"
    :word-connections-for "Соединения слова для"
    :mirror-symmetry-connections "Соединения зеркальной симметрии"
    :rotation-symmetry-connections "Соединения вращательной симметрии"
    :symmetry-results "Результаты симметрии"
    :by "по"
    :around-axis "вокруг оси"}

   :zh
   {:app-title "符文度量"
    :app-subtitle "字母圆形对称检测"
    :explanation-title "什么是符文度量?"
    :explanation-text "符文度量是一种分析单词圆形字母对称性的工具。单词被映射到包含26个英语字母的圆上，应用程序会检测它们是否沿任何26个可能轴具有镜像或旋转对称性。"
    :explanation-types "有两种类型的对称性："
    :explanation-mirror "1. 镜像对称：当字母对沿轴反射时。"
    :explanation-rotation "2. 旋转对称：当字母对恰好彼此相对时。"
    :examples "示例"
    :input-label "输入单词："
    :analyze-button "分析"
    :mirror-symmetry "镜像对称"
    :rotation-symmetry "旋转对称"
    :no-symmetry "未检测到对称性"
    :axis "轴"
    :text-analysis-title "文本分析"
    :text-analysis-description "上传文本文件以查找具有圆形对称性的单词。"
    :upload-button "上传文件"
    :processing-status "处理中"
    :reading-status "正在读取文件"
    :processing-text-status "处理文本"
    :finding-symmetry "寻找对称性"
    :completed-status "已完成"
    :stats-title "统计"
    :stats-total-words "总词数"
    :stats-unique-words "独特词数"
    :stats-symmetric-words "具有对称性的词数"
    :stats-mirror-words "具有镜像对称性的词数"
    :stats-rotation-words "具有旋转对称性的词数"
    :footer-text "© 2025 奥秘符文度量无限公司 • 通过圆形对称揭示模式"
    :language-selector "语言"
    :letter "字母"
    :connection "连接"
    :marker "标记"
    :symmetry-axis "对称轴"
    :dot "点"
    :from "从"
    :to "到"
    :for "为"
    :and "和"
    :mirror "镜像"
    :rotation "旋转"
    :mirror-pair "镜像对"
    :rotation-pair "旋转对"
    :symmetry-axis-title "对称轴可视化"
    :visualization-showing-symmetry-axis "显示对称轴的可视化"
    :across-the-alphabet-circle "在字母圆周上"
    :symmetry-visualization-for "对于以下单词的对称可视化"
    :visualization-showing-word "显示单词的可视化"
    :with "具有"
    :along-axis "沿轴"
    :letters-arranged-description "字母在圆圈中排列，相邻字母之间有连接"
    :mirror-pairs-description "镜像对通过虚线紫色线条连接"
    :rotation-pairs-description "旋转对通过虚线粉色线条连接"
    :word-connections-for "单词连接为"
    :mirror-symmetry-connections "镜像对称连接"
    :rotation-symmetry-connections "旋转对称连接"
    :symmetry-results "对称结果"
    :by "按"
    :around-axis "围绕轴"}

   :ar
   {:app-title "ويزمتريا"
    :app-subtitle "اكتشاف التماثل الدائري الأبجدي"
    :explanation-title "ما هي ويزمتريا؟"
    :explanation-text "ويزمتريا هي أداة تحلل الكلمات بحثًا عن التماثل الأبجدي الدائري. يتم رسم الكلمات على دائرة بأحرف الأبجدية الإنجليزية الـ26، ويكتشف التطبيق ما إذا كانت تحتوي على تماثل انعكاسي أو دوراني على أي من المحاور الـ26 المحتملة."
    :explanation-types "هناك نوعان من التماثل:"
    :explanation-mirror "1. التماثل الانعكاسي: عندما تنعكس أزواج الحروف عبر محور."
    :explanation-rotation "2. التماثل الدوراني: عندما تكون أزواج الحروف متقابلة تمامًا."
    :examples "أمثلة"
    :input-label "أدخل كلمة:"
    :analyze-button "تحليل"
    :mirror-symmetry "تماثل انعكاسي"
    :rotation-symmetry "تماثل دوراني"
    :no-symmetry "لم يتم اكتشاف تماثل"
    :axis "محور"
    :text-analysis-title "تحليل النص"
    :text-analysis-description "قم بتحميل ملف نصي للعثور على كلمات ذات تماثل دائري."
    :upload-button "تحميل ملف"
    :processing-status "جاري المعالجة"
    :reading-status "قراءة الملف"
    :processing-text-status "معالجة النص"
    :finding-symmetry "البحث عن التماثل"
    :completed-status "اكتمل"
    :stats-title "إحصائيات"
    :stats-total-words "إجمالي الكلمات"
    :stats-unique-words "الكلمات الفريدة"
    :stats-symmetric-words "الكلمات ذات التماثل"
    :stats-mirror-words "ذات التماثل الانعكاسي"
    :stats-rotation-words "ذات التماثل الدوراني"
    :footer-text "© 2025 آركانوم ويزمتريكس غير محدود • إنارة الأنماط من خلال التماثل الدائري"
    :language-selector "اللغة"
    :letter "حرف"
    :connection "اتصال"
    :marker "علامة"
    :symmetry-axis "محور التماثل"
    :dot "نقطة"
    :from "من"
    :to "إلى"
    :for "لـ"
    :and "و"
    :mirror "انعكاسي"
    :rotation "دوراني"
    :mirror-pair "زوج انعكاسي"
    :rotation-pair "زوج دوراني"
    :symmetry-axis-title "تصور محور التماثل"
    :visualization-showing-symmetry-axis "تصور يعرض محور التماثل"
    :across-the-alphabet-circle "عبر دائرة الأبجدية"
    :symmetry-visualization-for "تصور التماثل للكلمة"
    :visualization-showing-word "تصور يعرض الكلمة"
    :with "مع"
    :along-axis "على طول محور"
    :letters-arranged-description "الحروف مرتبة في دائرة مع وصلات بين الحروف المتتالية"
    :mirror-pairs-description "الأزواج الانعكاسية متصلة بخطوط أرجوانية متقطعة"
    :rotation-pairs-description "الأزواج الدورانية متصلة بخطوط وردية متقطعة"
    :word-connections-for "وصلات الكلمة لـ"
    :mirror-symmetry-connections "وصلات التماثل الانعكاسي"
    :rotation-symmetry-connections "وصلات التماثل الدوراني"
    :symmetry-results "نتائج التماثل"
    :by "حسب"
    :around-axis "حول محور"}

   :he
   {:app-title "ויזמטריה"
    :app-subtitle "זיהוי סימטריה מעגלית אלפביתית"
    :explanation-title "מהי ויזמטריה?"
    :explanation-text "ויזמטריה היא כלי המנתח מילים לסימטריה אלפביתית מעגלית. המילים ממופות על מעגל עם 26 האותיות של האלפבית האנגלי, והאפליקציה מזהה אם יש להן סימטריה מראה או סיבובית לאורך כל אחד מ-26 הצירים האפשריים."
    :explanation-types "יש שני סוגי סימטריה:"
    :explanation-mirror "1. סימטריית מראה: כאשר זוגות אותיות משתקפים לאורך ציר."
    :explanation-rotation "2. סימטריה סיבובית: כאשר זוגות אותיות נמצאים בדיוק אחד מול השני."
    :examples "דוגמאות"
    :input-label "הכנס מילה:"
    :analyze-button "נתח"
    :mirror-symmetry "סימטריית מראה"
    :rotation-symmetry "סימטריה סיבובית"
    :no-symmetry "לא זוהתה סימטריה"
    :axis "ציר"
    :text-analysis-title "ניתוח טקסט"
    :text-analysis-description "העלה קובץ טקסט כדי למצוא מילים עם סימטריה מעגלית."
    :upload-button "העלה קובץ"
    :processing-status "מעבד"
    :reading-status "קורא קובץ"
    :processing-text-status "מעבד טקסט"
    :finding-symmetry "מחפש סימטריה"
    :completed-status "הושלם"
    :stats-title "סטטיסטיקה"
    :stats-total-words "סך המילים"
    :stats-unique-words "מילים ייחודיות"
    :stats-symmetric-words "מילים עם סימטריה"
    :stats-mirror-words "עם סימטריית מראה"
    :stats-rotation-words "עם סימטריה סיבובית"
    :footer-text "© 2025 ארקנום ויזמטריקס אנלימיטד • הארת דפוסים דרך סימטריה מעגלית"
    :language-selector "שפה"
    :letter "אות"
    :connection "חיבור"
    :marker "סמן"
    :symmetry-axis "ציר סימטריה"
    :dot "נקודה"
    :from "מ"
    :to "אל"
    :for "עבור"
    :and "ו"
    :mirror "מראה"
    :rotation "סיבובית"
    :mirror-pair "זוג מראה"
    :rotation-pair "זוג סיבובי"
    :symmetry-axis-title "חיזוי ציר סימטריה"
    :visualization-showing-symmetry-axis "ויזואליזציה המציגה ציר סימטריה"
    :across-the-alphabet-circle "לאורך מעגל האלפבית"
    :symmetry-visualization-for "ויזואליזציית סימטריה עבור"
    :visualization-showing-word "ויזואליזציה המציגה את המילה"
    :with "עם"
    :along-axis "לאורך ציר"
    :letters-arranged-description "האותיות מסודרות במעגל עם חיבורים בין אותיות עוקבות"
    :mirror-pairs-description "זוגות מראה מחוברים בקווים סגולים מקווקווים"
    :rotation-pairs-description "זוגות סיבוביים מחוברים בקווים ורודים מקווקווים"
    :word-connections-for "חיבורי המילה עבור"
    :mirror-symmetry-connections "חיבורי סימטריית מראה"
    :rotation-symmetry-connections "חיבורי סימטריה סיבובית"
    :symmetry-results "תוצאות סימטריה"
    :by "לפי"
    :around-axis "סביב ציר"}})

;; Re-frame subscriptions
(rf/reg-sub
 :current-language
 (fn [db]
   (get db :language default-language)))

(rf/reg-sub
 :translation
 (fn [db [_ key]]
   (let [language (get db :language default-language)
         lang-map (get translations language)
         fallback (get-in translations [default-language key])]
     (get lang-map key fallback))))

(rf/reg-sub
 :text-direction
 (fn [db]
   (let [language (get db :language default-language)]
     (get-in supported-languages [language :dir] "ltr"))))

;; Events
(rf/reg-event-db
 :set-language
 (fn [db [_ language]]
   (js/console.log "Setting language to:" (name language))
   (try
     (js/localStorage.setItem "wizmetria-language" (name language))
     (catch js/Error e
       (js/console.error "Error saving language to localStorage:", e)))
   (assoc db :language language)))

;; Initialize language from localStorage if available
(rf/reg-event-fx
 :init-language
 (fn [{:keys [db]} _]
   (let [stored-lang-str (try
                           (js/localStorage.getItem "wizmetria-language")
                           (catch js/Error e
                             (js/console.error "Error reading language from localStorage:", e)
                             nil))
         _ (js/console.log "Stored language from localStorage:", stored-lang-str)
         stored-lang (when stored-lang-str (keyword stored-lang-str))
         language (if (and stored-lang (contains? supported-languages stored-lang))
                    stored-lang
                    default-language)]
     (js/console.log "Initializing language to:", (name language))
     {:db (assoc db :language language)})))

;; Helper function to get translation for a key
(defn t [key]
  @(rf/subscribe [:translation key]))

;; Language selector component
(defn language-selector []
  (let [current-lang @(rf/subscribe [:current-language])]
    [:div.relative.inline-block.text-left
     [:div.p-2.mt-4.rounded-md.bg-indigo-900.hover:bg-indigo-800.transition-colors
      [:button.language-selector-button.flex.items-center.text-sm.text-purple-200.focus:outline-none
       {:on-click #(do 
                     (js/console.log "Language button clicked")
                     (rf/dispatch [:toggle-language-dropdown]))}
       [:span (t :language-selector) ": " (get-in supported-languages [current-lang :native])]
       [:svg.w-4.h-4.ml-2.text-purple-300 {:xmlns "http://www.w3.org/2000/svg" :viewBox "0 0 20 20" :fill "currentColor"}
        [:path {:fill-rule "evenodd" :d "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" :clip-rule "evenodd"}]]]]
     
     ;; Language dropdown
     [:div#language-dropdown.absolute.right-0.mt-2.w-48.rounded-md.shadow-lg.bg-gray-800.ring-1.ring-black.ring-opacity-5.focus:outline-none.z-10
      {:class (if @(rf/subscribe [:language-dropdown-open]) "block" "hidden")}
      [:div.py-1
       (for [[lang-key lang-data] supported-languages]
         ^{:key lang-key}
         [:button.block.w-full.text-left.px-4.py-2.text-sm.text-purple-200.hover:bg-indigo-700.transition-colors
          {:on-click #(do
                        (js/console.log "Selected language:" (name lang-key))
                        (rf/dispatch [:set-language lang-key])
                        (rf/dispatch [:toggle-language-dropdown false]))}
          [:span.mr-2 (:native lang-data)]
          [:span.text-xs.text-gray-400 (:label lang-data)]])]]]))

;; Event for toggling language dropdown
(rf/reg-event-db
 :toggle-language-dropdown
 (fn [db [_ value]]
   (if (nil? value)
     (update db :language-dropdown-open not)
     (assoc db :language-dropdown-open value))))

;; Subscription for language dropdown state
(rf/reg-sub
 :language-dropdown-open
 (fn [db]
   (get db :language-dropdown-open false)))

;; Click outside handler to close dropdown
(defn init-click-outside []
  (let [handle-click (fn [e]
                      (let [dropdown (js/document.getElementById "language-dropdown")
                            target (.-target e)]
                        (when (and dropdown
                                   (not (.contains dropdown target))
                                   (not (.contains 
                                         (js/document.querySelector ".language-selector-button") 
                                         target)))
                          (js/console.log "Closing language dropdown from outside click")
                          (rf/dispatch [:toggle-language-dropdown false]))))]
    
    ;; Remove any existing handler to prevent duplicates
    (js/document.removeEventListener "click" handle-click)
    
    ;; Add the new handler
    (js/document.addEventListener "click" handle-click))) 