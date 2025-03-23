goog.provide('wizmetria_web.processing.symmetry');
/**
 * Find words with mirror symmetry and group them by axis
 */
wizmetria_web.processing.symmetry.find_symmetric_words = (function wizmetria_web$processing$symmetry$find_symmetric_words(words){
var mirror_sym_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(wizmetria_web.sym.symmetric_word_QMARK_,words);
var mirror_by_axis = cljs.core.group_by(wizmetria_web.sym.axis_id_for_word,mirror_sym_words);
var mirror_by_axis_sorted = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13579){
var vec__13580 = p__13579;
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13580,(0),null);
var words__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13580,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),words__$1)], null);
}),mirror_by_axis));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),mirror_sym_words,new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),mirror_by_axis_sorted], null);
});
/**
 * Find words with rotational symmetry (that don't have mirror symmetry)
 */
wizmetria_web.processing.symmetry.find_rotation_words = (function wizmetria_web$processing$symmetry$find_rotation_words(words){
var rotation_sym_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (word){
return ((wizmetria_web.sym.rotation_symmetric_word_QMARK_(word)) && (cljs.core.not(wizmetria_web.sym.symmetric_word_QMARK_(word))));
}),words);
var rotation_sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),rotation_sym_words);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),rotation_sym_words,new cljs.core.Keyword(null,"sorted","sorted",-896746253),rotation_sorted], null);
});
/**
 * Calculate statistics for symmetry analysis results
 */
wizmetria_web.processing.symmetry.calculate_statistics = (function wizmetria_web$processing$symmetry$calculate_statistics(unique_words,mirror_results,rotation_results){
var total_words = cljs.core.count(unique_words);
var mirror_count = cljs.core.count(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(mirror_results));
var rotation_count = cljs.core.count(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(rotation_results));
var top_words_count = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.ui_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-words-to-show","top-words-to-show",232054860)], null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-words","total-words",-2062349296),total_words,new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),mirror_count,new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),new cljs.core.Keyword(null,"by-axis","by-axis",1460307363).cljs$core$IFn$_invoke$arity$1(mirror_results),new cljs.core.Keyword(null,"top-n","top-n",1854609254),cljs.core.take.cljs$core$IFn$_invoke$arity$2(top_words_count,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(mirror_results)))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),rotation_count,new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"sorted","sorted",-896746253).cljs$core$IFn$_invoke$arity$1(rotation_results),new cljs.core.Keyword(null,"top-n","top-n",1854609254),cljs.core.take.cljs$core$IFn$_invoke$arity$2(top_words_count,new cljs.core.Keyword(null,"sorted","sorted",-896746253).cljs$core$IFn$_invoke$arity$1(rotation_results))], null)], null);
});
/**
 * Complete symmetry processing pipeline
 */
wizmetria_web.processing.symmetry.process_symmetry = (function wizmetria_web$processing$symmetry$process_symmetry(unique_words){
var mirror_results = wizmetria_web.processing.symmetry.find_symmetric_words(unique_words);
var rotation_results = wizmetria_web.processing.symmetry.find_rotation_words(unique_words);
var stats = wizmetria_web.processing.symmetry.calculate_statistics(unique_words,mirror_results,rotation_results);
return stats;
});
/**
 * Check if worker-based processing is enabled
 */
wizmetria_web.processing.symmetry.worker_enabled_QMARK_ = (function wizmetria_web$processing$symmetry$worker_enabled_QMARK_(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(wizmetria_web.config.processing_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worker-enabled","worker-enabled",-864198205)], null),false);
});
/**
 * Process symmetry using web workers for better performance
 */
wizmetria_web.processing.symmetry.process_symmetry_with_worker = (function wizmetria_web$processing$symmetry$process_symmetry_with_worker(unique_words,on_progress,on_complete,on_error){
console.log("Starting symmetry processing with",cljs.core.count(unique_words),"unique words");

console.log("Worker enabled:",wizmetria_web.processing.symmetry.worker_enabled_QMARK_());

if(cljs.core.truth_(wizmetria_web.processing.symmetry.worker_enabled_QMARK_())){
console.log("Using worker-based processing");

return wizmetria_web.processing.worker.process_words_in_batches(unique_words,(function (progress_data){
console.log("Worker progress:",cljs.core.clj__GT_js(progress_data));

var G__13607 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"processing-symmetry","processing-symmetry",326875361),new cljs.core.Keyword(null,"progress","progress",244323547),((80) + (0.15 * new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(progress_data))),new cljs.core.Keyword(null,"batch-progress","batch-progress",-52838064),progress_data], null);
return (on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13607) : on_progress.call(null, G__13607));
}),(function (results){
console.log("Worker processing complete, results:",cljs.core.clj__GT_js(results));

var mirror_results = new cljs.core.Keyword(null,"mirror","mirror",1914600218).cljs$core$IFn$_invoke$arity$1(results);
var rotation_results = new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(results);
var _ = console.log("Mirror results:",cljs.core.clj__GT_js(mirror_results));
var ___$1 = console.log("Rotation results:",cljs.core.clj__GT_js(rotation_results));
var stats = wizmetria_web.processing.symmetry.calculate_statistics(unique_words,mirror_results,rotation_results);
console.log("Calculated stats:",cljs.core.clj__GT_js(stats));

return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(stats) : on_complete.call(null, stats));
}),(function (error){
console.error("Worker processing error:",cljs.core.clj__GT_js(error));

return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(error) : on_error.call(null, error));
}));
} else {
try{console.log("Using single-threaded processing");

var stats = wizmetria_web.processing.symmetry.process_symmetry(unique_words);
console.log("Single-threaded processing complete, stats:",cljs.core.clj__GT_js(stats));

return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(stats) : on_complete.call(null, stats));
}catch (e13608){if((e13608 instanceof Error)){
var err = e13608;
console.error("Error in single-threaded processing:",err);

if(cljs.core.truth_(on_error)){
var G__13609 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Error processing symmetry",new cljs.core.Keyword(null,"details","details",1956795411),err.message], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13609) : on_error.call(null, G__13609));
} else {
return null;
}
} else {
throw e13608;

}
}}
});

//# sourceMappingURL=wizmetria_web.processing.symmetry.js.map
