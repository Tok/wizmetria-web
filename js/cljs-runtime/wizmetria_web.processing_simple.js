goog.provide('wizmetria_web.processing_simple');
/**
 * Extract words from text, filtering by minimum length
 */
wizmetria_web.processing_simple.extract_words = (function wizmetria_web$processing_simple$extract_words(text,min_length){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12675_SHARP_){
return (cljs.core.count(p1__12675_SHARP_) >= min_length);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/[^a-zA-Z\s]/," "),/\s+/," "))),/\s+/)));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"process-chunk-simple","process-chunk-simple",1523709127),(function (p__12677){
var map__12678 = p__12677;
var map__12678__$1 = cljs.core.__destructure_map(map__12678);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var chunk_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,new cljs.core.Keyword(null,"chunk-index","chunk-index",1346018959));
var chunk_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374));
var total_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,new cljs.core.Keyword(null,"total-length","total-length",1013948744));
var start_idx_12695 = (chunk_index * chunk_size);
var end_idx_12696 = (function (){var x__5090__auto__ = (start_idx_12695 + chunk_size);
var y__5091__auto__ = total_length;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var finished_QMARK__12697 = (end_idx_12696 >= total_length);
var progress_12698 = (end_idx_12696 / total_length);
console.log("Processing chunk",chunk_index,"of",Math.ceil((total_length / chunk_size)));

if(finished_QMARK__12697){
var words_12699 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/[^a-zA-Z\s]/," "),/\s+/," "))),/\s+/);
var unique_words_12700 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12676_SHARP_){
return (cljs.core.count(p1__12676_SHARP_) >= (3));
}),words_12699));
var __12701 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076),new cljs.core.Keyword(null,"progress","progress",244323547),(100),new cljs.core.Keyword(null,"word-count","word-count",-108883606),cljs.core.count(unique_words_12700)], null)], null));
var __12702__$1 = setTimeout((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979),new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null)], null));

var mirror_sym_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(wizmetria_web.sym.symmetric_word_QMARK_,unique_words_12700);
var mirror_by_axis = cljs.core.group_by(wizmetria_web.sym.axis_id_for_word,mirror_sym_words);
var __12702__$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"rotational-symmetry","rotational-symmetry",-613153841),new cljs.core.Keyword(null,"progress","progress",244323547),(50)], null)], null));
var rotation_sym_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (word){
return ((wizmetria_web.sym.rotation_symmetric_word_QMARK_(word)) && (cljs.core.not(wizmetria_web.sym.symmetric_word_QMARK_(word))));
}),unique_words_12700);
var total_words = cljs.core.count(unique_words_12700);
var mirror_count = cljs.core.count(mirror_sym_words);
var rotation_count = cljs.core.count(rotation_sym_words);
var mirror_by_axis_sorted = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12679){
var vec__12680 = p__12679;
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12680,(0),null);
var words__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12680,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),words__$1)], null);
}),mirror_by_axis));
var rotation_sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),rotation_sym_words);
var stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-words","total-words",-2062349296),total_words,new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),mirror_count,new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),mirror_by_axis_sorted,new cljs.core.Keyword(null,"top-n","top-n",1854609254),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),mirror_sym_words))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),rotation_count,new cljs.core.Keyword(null,"words","words",1924933001),rotation_sorted,new cljs.core.Keyword(null,"top-n","top-n",1854609254),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),rotation_sorted)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"progress","progress",244323547),(100)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-wordlist-stats","set-wordlist-stats",-19846062),stats], null));
}),(30));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"processing","processing",-1576405467),new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610),(chunk_index + (1)),new cljs.core.Keyword(null,"progress","progress",244323547),((100) * progress_12698)], null)], null));

setTimeout((function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-next-chunk-simple","process-next-chunk-simple",1904190215),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"chunk-index","chunk-index",1346018959),(chunk_index + (1)),new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374),chunk_size,new cljs.core.Keyword(null,"total-length","total-length",1013948744),total_length], null)], null));
}),(30));
}

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-next-chunk-simple","process-next-chunk-simple",1904190215),(function (p__12683,p__12684){
var map__12685 = p__12683;
var map__12685__$1 = cljs.core.__destructure_map(map__12685);
var __ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12685__$1,new cljs.core.Keyword(null,"__","__",-223697812));
var vec__12686 = p__12684;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12686,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-chunk-simple","process-chunk-simple",1523709127),params], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prepare-text-processing-simple","prepare-text-processing-simple",-1890000013),(function (p__12689,p__12690){
var map__12691 = p__12689;
var map__12691__$1 = cljs.core.__destructure_map(map__12691);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12691__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12692 = p__12690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12692,(1),null);
var chunks = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((5000),text);
var total_chunks = cljs.core.count(chunks);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"processing","processing",-1576405467),new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573),total_chunks,new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610),(0),new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-chunk-simple","process-chunk-simple",1523709127),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"chunk-index","chunk-index",1346018959),(0),new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374),(5000),new cljs.core.Keyword(null,"total-length","total-length",1013948744),cljs.core.count(text)], null)], null)], null)], null);
}));

//# sourceMappingURL=wizmetria_web.processing_simple.js.map
