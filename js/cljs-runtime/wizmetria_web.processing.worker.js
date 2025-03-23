goog.provide('wizmetria_web.processing.worker');
wizmetria_web.processing.worker.worker_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
wizmetria_web.processing.worker.message_callbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
wizmetria_web.processing.worker.batch_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
/**
 * Get or create a web worker instance
 */
wizmetria_web.processing.worker.get_worker = (function wizmetria_web$processing$worker$get_worker(){
var temp__5802__auto__ = cljs.core.deref(wizmetria_web.processing.worker.worker_instance);
if(cljs.core.truth_(temp__5802__auto__)){
var worker = temp__5802__auto__;
return worker;
} else {
var new_worker = (new Worker("js/symmetry-worker.js"));
cljs.core.reset_BANG_(wizmetria_web.processing.worker.worker_instance,new_worker);

(new_worker.onmessage = (function (event){
var data = event.data;
var batch_id = (data["batchId"]);
var status = (data["status"]);
console.log("Worker message received:",cljs.core.clj__GT_js(data));

var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(wizmetria_web.processing.worker.message_callbacks),batch_id);
if(cljs.core.truth_(temp__5804__auto__)){
var callback = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,"error")){
console.error("Worker error for batch",batch_id,":",(data["error"]));

var G__13457_13562 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),(data["error"]),new cljs.core.Keyword(null,"stack","stack",-793405930),(data["stack"])], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13457_13562) : callback.call(null, G__13457_13562));
} else {
var result_13563 = (data["result"]);
console.log("Worker success for batch",batch_id);

if(cljs.core.truth_(result_13563)){
console.log("Result structure:",Object.keys(result_13563));

var temp__5804__auto___13564__$1 = (result_13563["mirror"]);
if(cljs.core.truth_(temp__5804__auto___13564__$1)){
var mirror_13565 = temp__5804__auto___13564__$1;
console.log("Mirror words:",(mirror_13565["words"]).length);

console.log("Mirror by-axis keys:",Object.keys((function (){var or__5002__auto__ = (mirror_13565["by-axis"]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (mirror_13565["byAxis"]);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})()));
} else {
}

var G__13458_13566 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),(data["result"]),new cljs.core.Keyword(null,"batch-type","batch-type",798096550),(data["batchType"])], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__13458_13566) : callback.call(null, G__13458_13566));
} else {
console.error("Received null result from worker");
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(wizmetria_web.processing.worker.message_callbacks,cljs.core.dissoc,batch_id);
} else {
return null;
}
}));

(new_worker.onerror = (function (error){
console.error("Worker error:",error);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-processing-error","handle-processing-error",-1837097249),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Web Worker error",new cljs.core.Keyword(null,"details","details",1956795411),error.message], null)], null));
}));

return new_worker;
}
});
/**
 * Terminate the worker if it exists
 */
wizmetria_web.processing.worker.terminate_worker = (function wizmetria_web$processing$worker$terminate_worker(){
var temp__5804__auto__ = cljs.core.deref(wizmetria_web.processing.worker.worker_instance);
if(cljs.core.truth_(temp__5804__auto__)){
var worker = temp__5804__auto__;
worker.terminate();

cljs.core.reset_BANG_(wizmetria_web.processing.worker.worker_instance,null);

cljs.core.reset_BANG_(wizmetria_web.processing.worker.message_callbacks,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_(wizmetria_web.processing.worker.batch_counter,(0));
} else {
return null;
}
});
/**
 * Process a batch of words in the web worker
 */
wizmetria_web.processing.worker.process_batch_in_worker = (function wizmetria_web$processing$worker$process_batch_in_worker(words,batch_type,callback){
var worker = wizmetria_web.processing.worker.get_worker();
var batch_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(wizmetria_web.processing.worker.batch_counter,cljs.core.inc);
console.log("Starting batch",batch_id,"with",cljs.core.count(words),"words");

if(cljs.core.seq(words)){
console.log("Sample words in batch:",cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),words)));

console.log("Word types:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.type,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),words)));
} else {
}

if(cljs.core.truth_(cljs.core.some(cljs.core.empty_QMARK_,words))){
console.warn("Empty words detected in batch");
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wizmetria_web.processing.worker.message_callbacks,cljs.core.assoc,batch_id,callback);

return worker.postMessage(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),"process",new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(words),new cljs.core.Keyword(null,"batchType","batchType",-375551894),batch_type,new cljs.core.Keyword(null,"batchId","batchId",-1840877095),batch_id], null)));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"worker-process-batch","worker-process-batch",-1375233772),(function (p__13462){
var map__13463 = p__13462;
var map__13463__$1 = cljs.core.__destructure_map(map__13463);
var words = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13463__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var batch_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13463__$1,new cljs.core.Keyword(null,"batch-type","batch-type",798096550));
var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13463__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13463__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
try{return wizmetria_web.processing.worker.process_batch_in_worker(words,batch_type,(function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
if(cljs.core.truth_(on_error)){
var G__13466 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Error in worker processing",new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13466) : on_error.call(null, G__13466));
} else {
return null;
}
} else {
if(cljs.core.truth_(on_complete)){
var G__13467 = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result);
return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__13467) : on_complete.call(null, G__13467));
} else {
return null;
}
}
}));
}catch (e13464){if((e13464 instanceof Error)){
var err = e13464;
console.error("Error setting up worker batch:",err);

if(cljs.core.truth_(on_error)){
var G__13465 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Failed to start worker processing",new cljs.core.Keyword(null,"details","details",1956795411),err.message], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13465) : on_error.call(null, G__13465));
} else {
return null;
}
} else {
throw e13464;

}
}}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"worker-terminate","worker-terminate",-183294825),(function (_){
return wizmetria_web.processing.worker.terminate_worker();
}));
/**
 * Split words into multiple batches for parallel processing
 */
wizmetria_web.processing.worker.create_word_batches = (function wizmetria_web$processing$worker$create_word_batches(words){
var batch_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(wizmetria_web.config.processing_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"worker-batch-size","worker-batch-size",-476502884)], null),(5000));
var total_count = cljs.core.count(words);
var batch_count = Math.ceil((total_count / batch_size));
var batches = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(batch_size,words);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"batches","batches",-1828406858),cljs.core.vec(batches),new cljs.core.Keyword(null,"batch-count","batch-count",109908715),batch_count,new cljs.core.Keyword(null,"total-words","total-words",-2062349296),total_count], null);
});
/**
 * Process word symmetry in batches using web workers
 */
wizmetria_web.processing.worker.process_words_in_batches = (function wizmetria_web$processing$worker$process_words_in_batches(words,on_progress,on_complete,on_error){
var map__13474 = wizmetria_web.processing.worker.create_word_batches(words);
var map__13474__$1 = cljs.core.__destructure_map(map__13474);
var batches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13474__$1,new cljs.core.Keyword(null,"batches","batches",-1828406858));
var batch_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13474__$1,new cljs.core.Keyword(null,"batch-count","batch-count",109908715));
var mirror_results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),cljs.core.PersistentArrayMap.EMPTY], null));
var rotation_results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sorted","sorted",-896746253),cljs.core.PersistentVector.EMPTY], null));
var completed_batches = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
console.log("Starting batch processing with",batch_count,"batches");

console.log("Sample words:",cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),words));

var seq__13475 = cljs.core.seq(batches);
var chunk__13476 = null;
var count__13477 = (0);
var i__13478 = (0);
while(true){
if((i__13478 < count__13477)){
var batch = chunk__13476.cljs$core$IIndexed$_nth$arity$2(null, i__13478);
wizmetria_web.processing.worker.process_batch_in_worker(batch,null,((function (seq__13475,chunk__13476,count__13477,i__13478,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
console.error("Batch processing error:",cljs.core.clj__GT_js(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)));

if(cljs.core.truth_(on_error)){
var G__13529 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Error processing word batch",new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13529) : on_error.call(null, G__13529));
} else {
return null;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed_batches,cljs.core.inc);

console.log("Batch completed:",cljs.core.deref(completed_batches),"/",batch_count);

var mirror_batch_13577 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"mirror","mirror",1914600218)], null));
var rotation_batch_13578 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null));
console.log("Mirror batch result:",cljs.core.clj__GT_js(mirror_batch_13577));

console.log("Rotation batch result:",cljs.core.clj__GT_js(rotation_batch_13578));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mirror_results,((function (seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13577,rotation_batch_13578,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (current){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(mirror_batch_13577)),new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"by-axis","by-axis",1460307363).cljs$core$IFn$_invoke$arity$1(current),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"by-axis","by-axis",1460307363).cljs$core$IFn$_invoke$arity$1(mirror_batch_13577);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"byAxis","byAxis",2123057737).cljs$core$IFn$_invoke$arity$1(mirror_batch_13577);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})()], 0))], null);
});})(seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13577,rotation_batch_13578,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rotation_results,((function (seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13577,rotation_batch_13578,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (current){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(rotation_batch_13578)),new cljs.core.Keyword(null,"sorted","sorted",-896746253),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sorted","sorted",-896746253).cljs$core$IFn$_invoke$arity$1(current),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"sorted","sorted",-896746253).cljs$core$IFn$_invoke$arity$1(rotation_batch_13578);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);
});})(seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13577,rotation_batch_13578,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);

if(cljs.core.truth_(on_progress)){
var progress_pct_13583 = ((cljs.core.deref(completed_batches) / batch_count) * (100));
var G__13533_13584 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"progress","progress",244323547),progress_pct_13583,new cljs.core.Keyword(null,"completed-batches","completed-batches",-2136035818),cljs.core.deref(completed_batches),new cljs.core.Keyword(null,"total-batches","total-batches",-556263227),batch_count], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13533_13584) : on_progress.call(null, G__13533_13584));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed_batches),batch_count)){
var sorted_mirror_results = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(mirror_results),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-axis","by-axis",1460307363)], null),((function (seq__13475,chunk__13476,count__13477,i__13478,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (p1__13472_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__13475,chunk__13476,count__13477,i__13478,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (p__13534){
var vec__13535 = p__13534;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13535,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),v)], null);
});})(seq__13475,chunk__13476,count__13477,i__13478,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
,p1__13472_SHARP_));
});})(seq__13475,chunk__13476,count__13477,i__13478,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);
var sorted_rotation_results = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(rotation_results),new cljs.core.Keyword(null,"sorted","sorted",-896746253),((function (seq__13475,chunk__13476,count__13477,i__13478,sorted_mirror_results,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (p1__13473_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),p1__13473_SHARP_);
});})(seq__13475,chunk__13476,count__13477,i__13478,sorted_mirror_results,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);
console.log("All batches completed. Final results:");

console.log("Mirror words:",cljs.core.count(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mirror_results))));

console.log("Rotation words:",cljs.core.count(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rotation_results))));

if(cljs.core.truth_(on_complete)){
var G__13544 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),sorted_mirror_results,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),sorted_rotation_results], null);
return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__13544) : on_complete.call(null, G__13544));
} else {
return null;
}
} else {
return null;
}
}
});})(seq__13475,chunk__13476,count__13477,i__13478,batch,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);


var G__13585 = seq__13475;
var G__13586 = chunk__13476;
var G__13587 = count__13477;
var G__13588 = (i__13478 + (1));
seq__13475 = G__13585;
chunk__13476 = G__13586;
count__13477 = G__13587;
i__13478 = G__13588;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13475);
if(temp__5804__auto__){
var seq__13475__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13475__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13475__$1);
var G__13589 = cljs.core.chunk_rest(seq__13475__$1);
var G__13590 = c__5525__auto__;
var G__13591 = cljs.core.count(c__5525__auto__);
var G__13592 = (0);
seq__13475 = G__13589;
chunk__13476 = G__13590;
count__13477 = G__13591;
i__13478 = G__13592;
continue;
} else {
var batch = cljs.core.first(seq__13475__$1);
wizmetria_web.processing.worker.process_batch_in_worker(batch,null,((function (seq__13475,chunk__13476,count__13477,i__13478,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
console.error("Batch processing error:",cljs.core.clj__GT_js(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)));

if(cljs.core.truth_(on_error)){
var G__13549 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Error processing word batch",new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result)], null);
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__13549) : on_error.call(null, G__13549));
} else {
return null;
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(completed_batches,cljs.core.inc);

console.log("Batch completed:",cljs.core.deref(completed_batches),"/",batch_count);

var mirror_batch_13593 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"mirror","mirror",1914600218)], null));
var rotation_batch_13594 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null));
console.log("Mirror batch result:",cljs.core.clj__GT_js(mirror_batch_13593));

console.log("Rotation batch result:",cljs.core.clj__GT_js(rotation_batch_13594));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mirror_results,((function (seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13593,rotation_batch_13594,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (current){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(mirror_batch_13593)),new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"by-axis","by-axis",1460307363).cljs$core$IFn$_invoke$arity$1(current),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"by-axis","by-axis",1460307363).cljs$core$IFn$_invoke$arity$1(mirror_batch_13593);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"byAxis","byAxis",2123057737).cljs$core$IFn$_invoke$arity$1(mirror_batch_13593);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})()], 0))], null);
});})(seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13593,rotation_batch_13594,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(rotation_results,((function (seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13593,rotation_batch_13594,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (current){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"words","words",1924933001),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(rotation_batch_13594)),new cljs.core.Keyword(null,"sorted","sorted",-896746253),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sorted","sorted",-896746253).cljs$core$IFn$_invoke$arity$1(current),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"sorted","sorted",-896746253).cljs$core$IFn$_invoke$arity$1(rotation_batch_13594);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())], null);
});})(seq__13475,chunk__13476,count__13477,i__13478,mirror_batch_13593,rotation_batch_13594,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);

if(cljs.core.truth_(on_progress)){
var progress_pct_13601 = ((cljs.core.deref(completed_batches) / batch_count) * (100));
var G__13550_13602 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"progress","progress",244323547),progress_pct_13601,new cljs.core.Keyword(null,"completed-batches","completed-batches",-2136035818),cljs.core.deref(completed_batches),new cljs.core.Keyword(null,"total-batches","total-batches",-556263227),batch_count], null);
(on_progress.cljs$core$IFn$_invoke$arity$1 ? on_progress.cljs$core$IFn$_invoke$arity$1(G__13550_13602) : on_progress.call(null, G__13550_13602));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(completed_batches),batch_count)){
var sorted_mirror_results = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(mirror_results),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"by-axis","by-axis",1460307363)], null),((function (seq__13475,chunk__13476,count__13477,i__13478,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (p1__13472_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seq__13475,chunk__13476,count__13477,i__13478,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (p__13555){
var vec__13556 = p__13555;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13556,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13556,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),v)], null);
});})(seq__13475,chunk__13476,count__13477,i__13478,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
,p1__13472_SHARP_));
});})(seq__13475,chunk__13476,count__13477,i__13478,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);
var sorted_rotation_results = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(rotation_results),new cljs.core.Keyword(null,"sorted","sorted",-896746253),((function (seq__13475,chunk__13476,count__13477,i__13478,sorted_mirror_results,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches){
return (function (p1__13473_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),p1__13473_SHARP_);
});})(seq__13475,chunk__13476,count__13477,i__13478,sorted_mirror_results,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);
console.log("All batches completed. Final results:");

console.log("Mirror words:",cljs.core.count(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(mirror_results))));

console.log("Rotation words:",cljs.core.count(new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rotation_results))));

if(cljs.core.truth_(on_complete)){
var G__13560 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),sorted_mirror_results,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),sorted_rotation_results], null);
return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(G__13560) : on_complete.call(null, G__13560));
} else {
return null;
}
} else {
return null;
}
}
});})(seq__13475,chunk__13476,count__13477,i__13478,batch,seq__13475__$1,temp__5804__auto__,map__13474,map__13474__$1,batches,batch_count,mirror_results,rotation_results,completed_batches))
);


var G__13603 = cljs.core.next(seq__13475__$1);
var G__13604 = null;
var G__13605 = (0);
var G__13606 = (0);
seq__13475 = G__13603;
chunk__13476 = G__13604;
count__13477 = G__13605;
i__13478 = G__13606;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=wizmetria_web.processing.worker.js.map
