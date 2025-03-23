goog.provide('wizmetria_web.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-file","process-file",335835811),(function (p__12841,p__12842){
var map__12843 = p__12841;
var map__12843__$1 = cljs.core.__destructure_map(map__12843);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12843__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12844 = p__12842;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12844,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12844,(1),null);
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file.name,new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987),file,new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-file-async","read-file-async",1499619517),file], null)], null)], null);
}catch (e12847){if((e12847 instanceof Error)){
var e = e12847;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Could not process file",new cljs.core.Keyword(null,"details","details",1956795411),e.message,new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987),file], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-error","log-error",-535826833),e], null)], null)], null);
} else {
throw e12847;

}
}}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"read-file-async","read-file-async",1499619517),(function (file){
var reader = (new FileReader());
var file_size = file.size;
var start_time = Date.now(cljs.core.List.EMPTY);
var simulate_progress_QMARK_ = (file_size < ((1024) * (1024)));
var progress_interval = ((simulate_progress_QMARK_)?setInterval((function (){
var elapsed = (Date.now() - start_time);
var artificial_progress = (function (){var x__5090__auto__ = (90);
var y__5091__auto__ = ((elapsed * (100)) / (2000));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"progress","progress",244323547),artificial_progress], null)], null));
}),(100)):null);
(reader.onerror = (function (e){
if(simulate_progress_QMARK_){
clearInterval(progress_interval);
} else {
}

console.error("Error reading file:",e);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Could not read file",new cljs.core.Keyword(null,"details","details",1956795411),["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message)].join('')], null)], null));
}));

(reader.onload = (function (e){
if(simulate_progress_QMARK_){
clearInterval(progress_interval);
} else {
}

var content = e.target.result;
if((((content == null)) || (cljs.core.empty_QMARK_(content)))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-message","error-message",1756021561),"Empty file",new cljs.core.Keyword(null,"details","details",1956795411),"The file appears to be empty"], null)], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"progress","progress",244323547),(100)], null)], null));

return setTimeout((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepare-text-processing","prepare-text-processing",945491699),content], null));
}),(200));
}
}));

(reader.onprogress = (function (e){
if(cljs.core.truth_((function (){var and__5000__auto__ = e.lengthComputable;
if(cljs.core.truth_(and__5000__auto__)){
return (!(simulate_progress_QMARK_));
} else {
return and__5000__auto__;
}
})())){
var progress = (e.loaded / e.total);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"progress","progress",244323547),((100) * progress)], null)], null));
} else {
return null;
}
}));

try{return reader.readAsText(file);
}catch (e12850){if((e12850 instanceof Error)){
var err = e12850;
console.error("Exception reading file:",err);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-message","error-message",1756021561),"File reading failed",new cljs.core.Keyword(null,"details","details",1956795411),err.message], null)], null));
} else {
throw e12850;

}
}}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"log-error","log-error",-535826833),(function (error){
return console.error("Error in file processing:",error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),(function (db,p__12851){
var vec__12852 = p__12851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12852,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),cljs.core.merge,state);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prepare-text-processing","prepare-text-processing",945491699),(function (p__12855,p__12856){
var map__12857 = p__12855;
var map__12857__$1 = cljs.core.__destructure_map(map__12857);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12858 = p__12856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12858,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12858,(1),null);
console.log("Starting text processing with text length:",cljs.core.count(text));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"processing","processing",-1576405467),new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987),new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987).cljs$core$IFn$_invoke$arity$1(db)], null)),new cljs.core.Keyword(null,"process-text-pipeline","process-text-pipeline",-397332149),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"on-state-change","on-state-change",619811967),(function (state_data){
console.log("Processing state change:",cljs.core.clj__GT_js(state_data));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_data,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(state_data))], null));
}),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (result){
console.log("Processing complete, result:",cljs.core.clj__GT_js(result));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-wordlist-stats","set-wordlist-stats",-19846062),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(result)], null));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (error_info){
console.error("Processing error:",cljs.core.clj__GT_js(error_info));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-processing-error","handle-processing-error",-1837097249),error_info], null));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"execute-text-processing","execute-text-processing",-413449444),(function (p__12867,p__12868){
var map__12869 = p__12867;
var map__12869__$1 = cljs.core.__destructure_map(map__12869);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12869__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12870 = p__12868;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12870,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12870,(1),null);
console.log("Starting chunked text processing with text length:",cljs.core.count(text));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"processing","processing",-1576405467),new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987),new cljs.core.Keyword(null,"file-obj","file-obj",-1013340987).cljs$core$IFn$_invoke$arity$1(db)], null)),new cljs.core.Keyword(null,"process-text-chunks","process-text-chunks",-2022260275),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"on-progress","on-progress",1196110410),(function (progress_data){
console.log("Chunk processing progress:",cljs.core.clj__GT_js(progress_data));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(progress_data,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(progress_data))], null));
}),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (result){
console.log("Chunked processing complete, result:",cljs.core.clj__GT_js(result));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-wordlist-stats","set-wordlist-stats",-19846062),new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(result)], null));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-wordlist-stats","set-wordlist-stats",-19846062),(function (p__12873,p__12874){
var map__12876 = p__12873;
var map__12876__$1 = cljs.core.__destructure_map(map__12876);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12876__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12878 = p__12874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12878,(0),null);
var stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12878,(1),null);
console.log("Setting wordlist stats:",cljs.core.clj__GT_js(stats));

console.log("Mirror stats:",cljs.core.clj__GT_js(new cljs.core.Keyword(null,"mirror","mirror",1914600218).cljs$core$IFn$_invoke$arity$1(stats)));

console.log("Rotation stats:",cljs.core.clj__GT_js(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(stats)));

if(cljs.core.truth_(stats)){
console.log("Total words:",cljs.core.get.cljs$core$IFn$_invoke$arity$3(stats,new cljs.core.Keyword(null,"total-words","total-words",-2062349296),(0)));

console.log("Mirror count:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"count","count",2139924085)], null),(0)));

console.log("Rotation count:",cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"count","count",2139924085)], null),(0)));

console.log("Mirror top-n count:",cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"top-n","top-n",1854609254)], null),cljs.core.PersistentVector.EMPTY)));

console.log("Rotation top-n count:",cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"top-n","top-n",1854609254)], null),cljs.core.PersistentVector.EMPTY)));
} else {
}

var updated_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320),stats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"complete","complete",-500388775)], null)], 0));
setTimeout((function (){
console.log("Terminating worker after displaying results");

return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"terminate-worker","terminate-worker",1619673308)], null));
}),(5000));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),updated_db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-word","update-word",705364375),(function (db,p__12886){
var vec__12887 = p__12886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12887,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12887,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word","word",-420123725),word);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-symmetry","check-symmetry",508011107),(function (db,_){
var word = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db);
var results = (cljs.core.truth_(cljs.core.not_empty(word))?wizmetria_web.sym.evaluate(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.sym.clean(word)], null)):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317),results);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-shiny-effects","toggle-shiny-effects",-1644107336),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-processing-error","clear-processing-error",263502218),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),cljs.core.dissoc,new cljs.core.Keyword(null,"error-message","error-message",1756021561),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"status","status",-1997798413));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"log-error","log-error",-535826833),(function (_,p__12891){
var vec__12892 = p__12891;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,(1),null);
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892,(2),null);
console.error("Application error:",error,"Context:",cljs.core.clj__GT_js(context));

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handle-processing-error","handle-processing-error",-1837097249),(function (p__12897,p__12898){
var map__12902 = p__12897;
var map__12902__$1 = cljs.core.__destructure_map(map__12902);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12902__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12903 = p__12898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12903,(0),null);
var error_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12903,(1),null);
var current_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),cljs.core.PersistentArrayMap.EMPTY);
var merged_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error-message","error-message",1756021561),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"error-message","error-message",1756021561).cljs$core$IFn$_invoke$arity$1(error_info);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "An error occurred during processing";
}
})(),new cljs.core.Keyword(null,"details","details",1956795411),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(error_info);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error_info);
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
return err.message;
} else {
return null;
}
}
})()], null)], 0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),merged_state),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-error","log-error",-535826833),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(error_info),merged_state], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"terminate-worker","terminate-worker",1619673308),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker-terminate","worker-terminate",-183294825),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shutdown","shutdown",-1876565378),(function (p__12907,_){
var map__12908 = p__12907;
var map__12908__$1 = cljs.core.__destructure_map(map__12908);
var _db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12908__$1,new cljs.core.Keyword(null,"_db","_db",1668840064));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"worker-terminate","worker-terminate",-183294825),null], null);
}));

//# sourceMappingURL=wizmetria_web.events.js.map
