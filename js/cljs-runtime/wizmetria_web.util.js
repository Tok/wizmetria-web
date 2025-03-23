goog.provide('wizmetria_web.util');
wizmetria_web.util.clean = (function wizmetria_web$util$clean(s){
return clojure.string.replace(clojure.string.upper_case(s),/[^A-Z]/,"");
});

//# sourceMappingURL=wizmetria_web.util.js.map
