goog.provide('wizmetria_web.processing.pipeline');
wizmetria_web.processing.pipeline.processing_states = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"calculating-stats","calculating-stats",1892388076),new cljs.core.Keyword(null,"processing-text","processing-text",1130087087),new cljs.core.Keyword(null,"rotational-symmetry","rotational-symmetry",-613153841),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"extracting-words","extracting-words",988949086)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"reading","reading",-409289668)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"rotational-symmetry","rotational-symmetry",-613153841)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"done","done",-889844188)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"extracting-words","extracting-words",988949086)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"calculating-stats","calculating-stats",1892388076)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"processing-text","processing-text",1130087087)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next","next",-117701485),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076)], null)]);
/**
 * Get the next state in the pipeline
 */
wizmetria_web.processing.pipeline.next_state = (function wizmetria_web$processing$pipeline$next_state(current_state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.processing.pipeline.processing_states,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state,new cljs.core.Keyword(null,"next","next",-117701485)], null));
});
/**
 * Process text and find symmetric words using workers when available
 */
wizmetria_web.processing.pipeline.process_text_pipeline_fx = (function wizmetria_web$processing$pipeline$process_text_pipeline_fx(p__13618){
var map__13619 = p__13618;
var map__13619__$1 = cljs.core.__destructure_map(map__13619);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13619__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_state_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13619__$1,new cljs.core.Keyword(null,"on-state-change","on-state-change",619811967));
var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13619__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13619__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{console.log("Starting text processing pipeline with text length:",cljs.core.count(text));

var G__13622_13683 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"processing-text","processing-text",1130087087),new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null);
(on_state_change.cljs$core$IFn$_invoke$arity$1 ? on_state_change.cljs$core$IFn$_invoke$arity$1(G__13622_13683) : on_state_change.call(null, G__13622_13683));

var text_result = wizmetria_web.processing.text.process_text(text);
var unique_words = new cljs.core.Keyword(null,"unique-words","unique-words",2083333005).cljs$core$IFn$_invoke$arity$1(text_result);
var word_count = new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(text_result);
console.log("Text processed, found",word_count,"unique words");

var G__13627_13684 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"extracting-words","extracting-words",988949086),new cljs.core.Keyword(null,"progress","progress",244323547),(75),new cljs.core.Keyword(null,"word-count","word-count",-108883606),word_count], null);
(on_state_change.cljs$core$IFn$_invoke$arity$1 ? on_state_change.cljs$core$IFn$_invoke$arity$1(G__13627_13684) : on_state_change.call(null, G__13627_13684));

return setTimeout((function (){
var G__13628_13685 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076),new cljs.core.Keyword(null,"progress","progress",244323547),(80)], null);
(on_state_change.cljs$core$IFn$_invoke$arity$1 ? on_state_change.cljs$core$IFn$_invoke$arity$1(G__13628_13685) : on_state_change.call(null, G__13628_13685));

return wizmetria_web.processing.symmetry.process_symmetry_with_worker(unique_words,(function (progress_info){
console.log("Symmetry progress:",cljs.core.clj__GT_js(progress_info));

var G__13629 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([progress_info,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076)], null)], 0));
return (on_state_change.cljs$core$IFn$_invoke$arity$1 ? on_state_change.cljs$core$IFn$_invoke$arity$1(G__13629) : on_state_change.call(null, G__13629));
}),(function (stats){
console.log("Symmetry processing complete, stats:",cljs.core.clj__GT_js(stats));

if(cljs.core.truth_((function (){var and__5000__auto__ = stats;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.map_QMARK_(stats);
if(and__5000__auto____$1){
var and__5000__auto____$2 = new cljs.core.Keyword(null,"mirror","mirror",1914600218).cljs$core$IFn$_invoke$arity$1(stats);
if(cljs.core.truth_(and__5000__auto____$2)){
return new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(stats);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
console.log("Stats structure looks valid:");

console.log("- Mirror count:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"count","count",2139924085)], null)));

console.log("- Rotation count:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"count","count",2139924085)], null)));

var G__13631_13690 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"progress","progress",244323547),(100)], null);
(on_state_change.cljs$core$IFn$_invoke$arity$1 ? on_state_change.cljs$core$IFn$_invoke$arity$1(G__13631_13690) : on_state_change.call(null, G__13631_13690));

var G__13633 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stats","stats",-85643011),stats], null)], 0));
return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__13633) : on_complete.call(null, G__13633));
} else {
console.error("Invalid stats structure returned:",cljs.core.clj__GT_js(stats));

var G__13634 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Invalid symmetry results",new cljs.core.Keyword(null,"details","details",1956795411),"The worker returned an incomplete or invalid result structure"], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13634) : on_error.call(null, G__13634));
}
}),(function (error_info){
console.error("Symmetry processing error:",cljs.core.clj__GT_js(error_info));

return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(error_info) : on_error.call(null, error_info));
}));
}),(500));
}catch (e13620){if((e13620 instanceof Error)){
var err = e13620;
console.error("Error in text processing:",err);

if(cljs.core.truth_(on_error)){
var G__13621 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),err,new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Error processing text",new cljs.core.Keyword(null,"details","details",1956795411),err.message], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13621) : on_error.call(null, G__13621));
} else {
return null;
}
} else {
throw e13620;

}
}});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"process-text-pipeline","process-text-pipeline",-397332149),wizmetria_web.processing.pipeline.process_text_pipeline_fx);
wizmetria_web.processing.pipeline.process_text_chunks_fx = (function wizmetria_web$processing$pipeline$process_text_chunks_fx(p__13643){
var map__13644 = p__13643;
var map__13644__$1 = cljs.core.__destructure_map(map__13644);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13644__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13644__$1,new cljs.core.Keyword(null,"on-progress","on-progress",1196110410));
var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13644__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var chunk_info = wizmetria_web.processing.text.create_chunks(text);
var processing_delay = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.processing_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processing-delay-ms","processing-delay-ms",497149003)], null));
var processed_text = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
var processed_chunks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
if(cljs.core.truth_(on_progress)){
var G__13645_13694 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"processing-text","processing-text",1130087087),new cljs.core.Keyword(null,"progress","progress",244323547),(0),new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573),new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573).cljs$core$IFn$_invoke$arity$1(chunk_info),new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610),(0)], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13645_13694) : on_progress.call(null, G__13645_13694));
} else {
}

var process_next_chunk = (function wizmetria_web$processing$pipeline$process_text_chunks_fx_$_process_next_chunk(){
var current_chunk = cljs.core.deref(processed_chunks);
var chunks = new cljs.core.Keyword(null,"chunks","chunks",83720431).cljs$core$IFn$_invoke$arity$1(chunk_info);
var total_chunks = new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573).cljs$core$IFn$_invoke$arity$1(chunk_info);
if((current_chunk >= total_chunks)){
var final_text = cljs.core.deref(processed_text);
var text_result = wizmetria_web.processing.text.process_text(final_text);
if(cljs.core.truth_(on_progress)){
var G__13663_13695 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"extracting-words","extracting-words",988949086),new cljs.core.Keyword(null,"progress","progress",244323547),(80),new cljs.core.Keyword(null,"word-count","word-count",-108883606),new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(text_result)], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13663_13695) : on_progress.call(null, G__13663_13695));
} else {
}

return setTimeout((function (){
if(cljs.core.truth_(on_progress)){
var G__13664_13699 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076),new cljs.core.Keyword(null,"progress","progress",244323547),(90)], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13664_13699) : on_progress.call(null, G__13664_13699));
} else {
}

var stats = wizmetria_web.processing.symmetry.process_symmetry(new cljs.core.Keyword(null,"unique-words","unique-words",2083333005).cljs$core$IFn$_invoke$arity$1(text_result));
if(cljs.core.truth_(on_progress)){
var G__13665_13700 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"progress","progress",244323547),(100)], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13665_13700) : on_progress.call(null, G__13665_13700));
} else {
}

if(cljs.core.truth_(on_complete)){
var G__13666 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text_result,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stats","stats",-85643011),stats], null)], 0));
return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__13666) : on_complete.call(null, G__13666));
} else {
return null;
}
}),processing_delay);
} else {
try{var chunk = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(chunks,current_chunk);
var chunk_text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,chunk);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(processed_text,cljs.core.str,chunk_text);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(processed_chunks,cljs.core.inc);

var next_chunk = (current_chunk + (1));
var progress_pct = ((next_chunk / total_chunks) * (70));
if(cljs.core.truth_(on_progress)){
var G__13675_13701 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"processing-text","processing-text",1130087087),new cljs.core.Keyword(null,"progress","progress",244323547),progress_pct,new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610),next_chunk,new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573),total_chunks], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13675_13701) : on_progress.call(null, G__13675_13701));
} else {
}

return setTimeout(wizmetria_web$processing$pipeline$process_text_chunks_fx_$_process_next_chunk,processing_delay);
}catch (e13673){if((e13673 instanceof Error)){
var err = e13673;
console.error("Error processing chunk:",err);

if(cljs.core.truth_(on_progress)){
var G__13674 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Error processing text chunk",new cljs.core.Keyword(null,"details","details",1956795411),err.message], null);
return (on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13674) : on_progress.call(null, G__13674));
} else {
return null;
}
} else {
throw e13673;

}
}}
});
if(cljs.core.empty_QMARK_(text)){
if(cljs.core.truth_(on_complete)){
var G__13676 = wizmetria_web.processing.text.process_text("");
return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__13676) : on_complete.call(null, G__13676));
} else {
return null;
}
} else {
return setTimeout(process_next_chunk,(10));
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"process-text-chunks","process-text-chunks",-2022260275),wizmetria_web.processing.pipeline.process_text_chunks_fx);

//# sourceMappingURL=wizmetria_web.processing.pipeline.js.map
