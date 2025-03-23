goog.provide('wizmetria_web.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"word","word",-420123725),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"processing-state","processing-state",-162524375).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),false);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
var initial_db = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"word","word",-420123725),"WIZARD",new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317),wizmetria_web.sym.evaluate(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.sym.clean("WIZARD")], null)),new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320),null,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),null,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),false], null);
setTimeout((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-language","init-language",311526816)], null));

return setTimeout(wizmetria_web.i18n.init_click_outside,(100));
}),(100));

return initial_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-word","update-word",705364375),(function (db,p__18017){
var vec__18018 = p__18017;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018,(0),null);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"word","word",-420123725),word);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-symmetry","check-symmetry",508011107),(function (db,_){
var word = new cljs.core.Keyword(null,"word","word",-420123725).cljs$core$IFn$_invoke$arity$1(db);
var results = (cljs.core.truth_(cljs.core.not_empty(word))?wizmetria_web.sym.evaluate(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.sym.clean(word)], null)):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317),results);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-file","process-file",335835811),(function (p__18021,p__18022){
var map__18023 = p__18021;
var map__18023__$1 = cljs.core.__destructure_map(map__18023);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18023__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18024 = p__18022;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18024,(0),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18024,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file.name,new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read-file-async","read-file-async",1499619517),file], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"read-file-async","read-file-async",1499619517),(function (file){
var reader = (new FileReader());
(reader.onload = (function (e){
var content = e.target.result;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prepare-text-processing","prepare-text-processing",945491699),content], null));
}));

(reader.onprogress = (function (e){
if(cljs.core.truth_(e.lengthComputable)){
var progress = (e.loaded / e.total);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"reading","reading",-409289668),new cljs.core.Keyword(null,"progress","progress",244323547),((100) * progress)], null)], null));
} else {
return null;
}
}));

return reader.readAsText(file);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),(function (db,p__18027){
var vec__18028 = p__18027;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),cljs.core.merge,state);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prepare-text-processing","prepare-text-processing",945491699),(function (p__18031,p__18032){
var map__18033 = p__18031;
var map__18033__$1 = cljs.core.__destructure_map(map__18033);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18033__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18034 = p__18032;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034,(1),null);
var chunks = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((5000),text);
var total_chunks = cljs.core.count(chunks);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"processing","processing",-1576405467),new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573),total_chunks,new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610),(0),new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-chunk","process-chunk",-1062365800),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"chunk-index","chunk-index",1346018959),(0),new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374),(5000),new cljs.core.Keyword(null,"total-length","total-length",1013948744),cljs.core.count(text)], null)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"process-chunk","process-chunk",-1062365800),(function (p__18038){
var map__18039 = p__18038;
var map__18039__$1 = cljs.core.__destructure_map(map__18039);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var chunk_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039__$1,new cljs.core.Keyword(null,"chunk-index","chunk-index",1346018959));
var chunk_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039__$1,new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374));
var total_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18039__$1,new cljs.core.Keyword(null,"total-length","total-length",1013948744));
var start_idx_18082 = (chunk_index * chunk_size);
var end_idx_18083 = (function (){var x__5090__auto__ = (start_idx_18082 + chunk_size);
var y__5091__auto__ = total_length;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var finished_QMARK__18084 = (end_idx_18083 >= total_length);
var progress_18085 = (end_idx_18083 / total_length);
if(finished_QMARK__18084){
var words_18086 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/[^a-zA-Z\s]/," "),/\s+/," "))),/\s+/);
var unique_words_18087 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18037_SHARP_){
return (cljs.core.count(p1__18037_SHARP_) >= (3));
}),words_18086));
var __18088 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076),new cljs.core.Keyword(null,"progress","progress",244323547),(100),new cljs.core.Keyword(null,"word-count","word-count",-108883606),cljs.core.count(unique_words_18087)], null)], null));
var __18089__$1 = setTimeout((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979),new cljs.core.Keyword(null,"progress","progress",244323547),(0)], null)], null));

var mirror_sym_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(wizmetria_web.sym.symmetric_word_QMARK_,unique_words_18087);
var mirror_by_axis = cljs.core.group_by(wizmetria_web.sym.axis_id_for_word,mirror_sym_words);
var __18089__$1 = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"rotational-symmetry","rotational-symmetry",-613153841),new cljs.core.Keyword(null,"progress","progress",244323547),(50)], null)], null));
var rotation_sym_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (word){
return ((wizmetria_web.sym.rotation_symmetric_word_QMARK_(word)) && (cljs.core.not(wizmetria_web.sym.symmetric_word_QMARK_(word))));
}),unique_words_18087);
var total_words = cljs.core.count(unique_words_18087);
var mirror_count = cljs.core.count(mirror_sym_words);
var rotation_count = cljs.core.count(rotation_sym_words);
var mirror_by_axis_sorted = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18040){
var vec__18041 = p__18040;
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18041,(0),null);
var words__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18041,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),words__$1)], null);
}),mirror_by_axis));
var rotation_sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),rotation_sym_words);
var stats = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"total-words","total-words",-2062349296),total_words,new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),mirror_count,new cljs.core.Keyword(null,"by-axis","by-axis",1460307363),mirror_by_axis_sorted,new cljs.core.Keyword(null,"top-10","top-10",-1843125027),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core._,cljs.core.count),mirror_sym_words))], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),rotation_count,new cljs.core.Keyword(null,"words","words",1924933001),rotation_sorted,new cljs.core.Keyword(null,"top-10","top-10",-1843125027),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),rotation_sorted)], null)], null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"progress","progress",244323547),(100)], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-wordlist-stats","set-wordlist-stats",-19846062),stats], null));
}),(30));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-processing-progress","update-processing-progress",965668732),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"processing","processing",-1576405467),new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610),(chunk_index + (1)),new cljs.core.Keyword(null,"progress","progress",244323547),((100) * progress_18085)], null)], null));

setTimeout((function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-next-chunk","process-next-chunk",-1383698974),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"chunk-index","chunk-index",1346018959),(chunk_index + (1)),new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374),chunk_size,new cljs.core.Keyword(null,"total-length","total-length",1013948744),total_length], null)], null));
}),(10));
}

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-next-chunk","process-next-chunk",-1383698974),(function (p__18044,p__18045){
var map__18046 = p__18044;
var map__18046__$1 = cljs.core.__destructure_map(map__18046);
var __ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18046__$1,new cljs.core.Keyword(null,"__","__",-223697812));
var vec__18047 = p__18045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-chunk","process-chunk",-1062365800),params], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-wordlist-stats","set-wordlist-stats",-19846062),(function (db,p__18050){
var vec__18051 = p__18050;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051,(0),null);
var stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18051,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320),stats,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"processing-state","processing-state",-162524375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"complete","complete",-500388775)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-shiny-effects","toggle-shiny-effects",-1644107336),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223),cljs.core.not);
}));
wizmetria_web.core.input_field = (function wizmetria_web$core$input_field(){
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.mb-4","div.flex.flex-col.items-center.mb-4",-975996923),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.text-lg.mb-1.text-purple-200","label.text-lg.mb-1.text-purple-200",367141769),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"input-label","input-label",139046498))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.w-full.max-w-md.shadow-lg","div.flex.w-full.max-w-md.shadow-lg",-755489767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.w-full.px-4.py-2.bg-gray-800.border-2.border-purple-700.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-indigo-500.text-gray-100.placeholder-gray-500","input.w-full.px-4.py-2.bg-gray-800.border-2.border-purple-700.rounded-l-lg.focus:outline-none.focus:ring-2.focus:ring-indigo-500.text-gray-100.placeholder-gray-500",2128386662),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),word,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. WIZARD",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18054_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),p1__18054_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-purple-700.text-white.px-5.py-2.rounded-r-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium","button.bg-purple-700.text-white.px-5.py-2.rounded-r-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium",616991360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-symmetry","check-symmetry",508011107)], null));
})], null),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"analyze-button","analyze-button",2084395347))], null)], null)], null);
});
wizmetria_web.core.check_word = (function wizmetria_web$core$check_word(){
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
var cleaned_word = wizmetria_web.util.clean(word);
var axis_id = ((cljs.core.seq(cleaned_word))?wizmetria_web.sym.axis_id_for_word(cleaned_word):null);
var rotation_axis_id = ((cljs.core.seq(cleaned_word))?wizmetria_web.sym.rotation_symmetry_axis_id_for_word(cleaned_word):null);
var has_mirror_symmetry = (function (){var and__5000__auto__ = cljs.core.seq(cleaned_word);
if(and__5000__auto__){
return wizmetria_web.sym.symmetric_word_QMARK_(cleaned_word);
} else {
return and__5000__auto__;
}
})();
var has_rotation_symmetry = ((cljs.core.seq(cleaned_word)) && (((cljs.core.not(has_mirror_symmetry)) && (wizmetria_web.sym.rotation_symmetric_word_QMARK_(cleaned_word)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.text-center","div.mt-4.text-center",443254909),((cljs.core.empty_QMARK_(cleaned_word))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-gray-400","p.text-gray-400",-85453884),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"input-label","input-label",139046498)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"symmetry-axis","symmetry-axis",1569891606)))].join('')], null):(cljs.core.truth_(has_mirror_symmetry)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-green-400","p.text-green-400",-246314548),["\"",cleaned_word,"\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"with","with",-1536296876)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"around-axis","around-axis",103851693)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(axis_id)?wizmetria_web.sym.id__GT_axis_name(axis_id):null))].join('')], null):((has_rotation_symmetry)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-green-400","p.text-green-400",-246314548),["\"",cleaned_word,"\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"with","with",-1536296876)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"around-axis","around-axis",103851693)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(rotation_axis_id)?wizmetria_web.sym.id__GT_axis_name(rotation_axis_id):null))].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-400","p.text-red-400",934700533),["\"",cleaned_word,"\" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"no-symmetry","no-symmetry",-969868718)))].join('')], null)
)))], null);
});
wizmetria_web.core.symmetry_display = (function wizmetria_web$core$symmetry_display(){
var results = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317)], null)));
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
var cleaned_word = wizmetria_web.util.clean(word);
var word_axis_id = (cljs.core.truth_(cljs.core.not_empty(cleaned_word))?wizmetria_web.sym.axis_id_for_word(cleaned_word):null);
var rotation_axis_id = (cljs.core.truth_(cljs.core.not_empty(cleaned_word))?wizmetria_web.sym.rotation_symmetry_axis_id_for_word(cleaned_word):null);
var has_mirror_symmetry = (function (){var and__5000__auto__ = (!((word_axis_id == null)));
if(and__5000__auto__){
return wizmetria_web.sym.symmetric_word_QMARK_(cleaned_word);
} else {
return and__5000__auto__;
}
})();
var has_rotation_symmetry = ((cljs.core.not(has_mirror_symmetry)) && (((cljs.core.seq(cleaned_word)) && (wizmetria_web.sym.rotation_symmetric_word_QMARK_(cleaned_word)))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_((function (){var and__5000__auto__ = results;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(results);
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-4.w-full.flex.flex-col.items-center","div.mt-4.w-full.flex.flex-col.items-center",270726641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.mb-3.text-center.text-purple-300.font-semibold","h2.text-xl.mb-3.text-center.text-purple-300.font-semibold",-1900533154),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"symmetry-results","symmetry-results",-430563317))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.check_word], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.justify-center.gap-6.w-full.mt-4","div.flex.flex-wrap.justify-center.gap-6.w-full.mt-4",335939809),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.p-4.rounded-lg.shadow-lg.flex.flex-col.items-center.w-80.border.border-indigo-700.transform.transition-all.duration-300.hover:scale-105","div.bg-gray-800.p-4.rounded-lg.shadow-lg.flex.flex-col.items-center.w-80.border.border-indigo-700.transform.transition-all.duration-300.hover:scale-105",1296333517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((((cljs.core.not(has_mirror_symmetry)) && ((!(has_rotation_symmetry)))))?"no-symmetry-container":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-center.text-indigo-300.font-medium","h3.text-lg.mb-2.text-center.text-indigo-300.font-medium",-1082222183),(cljs.core.truth_(has_mirror_symmetry)?wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)):((has_rotation_symmetry)?wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)):wizmetria_web.i18n.t(new cljs.core.Keyword(null,"no-symmetry","no-symmetry",-969868718))
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alphabet-circle.flex.items-center.justify-center.bg-gray-900.rounded-full.p-1","div.alphabet-circle.flex.items-center.justify-center.bg-gray-900.rounded-full.p-1",264756903),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.grid.symmetry_view,word,(cljs.core.truth_(has_mirror_symmetry)?word_axis_id:((has_rotation_symmetry)?rotation_axis_id:null
)),(function (){var or__5002__auto__ = has_mirror_symmetry;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return has_rotation_symmetry;
}
})()], null)], null)], null)], null)], null):null)], null);
});
wizmetria_web.core.explanation = (function wizmetria_web$core$explanation(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200","div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200",-1531848105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.mb-2.text-purple-300.font-semibold","h2.text-xl.mb-2.text-purple-300.font-semibold",687425448),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"explanation-title","explanation-title",857107507))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2.text-sm","p.mb-2.text-sm",1484101588),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"explanation-text","explanation-text",-1950094927))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2.text-sm","p.mb-2.text-sm",1484101588),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"explanation-types","explanation-types",-1777684313))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2.text-sm","p.mb-2.text-sm",1484101588),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"explanation-mirror","explanation-mirror",2124253051))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2.text-sm","p.mb-2.text-sm",1484101588),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"explanation-rotation","explanation-rotation",-1751616915))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.md:flex-row.gap-4.text-sm","div.flex.flex-col.md:flex-row.gap-4.text-sm",-1138834544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-1","p.mb-1",-713197412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium","span.text-indigo-300.font-medium",1181687615),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979))], null)," ",wizmetria_web.i18n.t(new cljs.core.Keyword(null,"examples","examples",-473712556)),":"], null),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"WIZARD"], null));
})], null),"WIZARD"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"JAGUAR"], null));
})], null),"JAGUAR"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"METAPH"], null));
})], null),"METAPH"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"UNSEWING"], null));
})], null),"UNSEWING"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"VOTING"], null));
})], null),"VOTING"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"BATHMATS"], null));
})], null),"BATHMATS"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"TICKET"], null));
})], null),"TICKET"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"NETFUL"], null));
})], null),"NETFUL"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"FLUENT"], null));
})], null),"FLUENT"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"CROTCHET"], null));
})], null),"CROTCHET"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1","div.flex-1",2004402050),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-1","p.mb-1",-713197412),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium","span.text-indigo-300.font-medium",1181687615),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018))], null)," ",wizmetria_web.i18n.t(new cljs.core.Keyword(null,"examples","examples",-473712556)),":"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"HYRULE"], null));
})], null),"HYRULE"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"NEAR"], null));
})], null),"NEAR"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"NEARLY"], null));
})], null),"NEARLY"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline","span.text-indigo-300.font-medium.cursor-pointer.hover:text-indigo-200.transition-colors.underline",910782659),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),"REFERS"], null));
})], null),"REFERS"], null)], null)], null)], null)], null);
});
wizmetria_web.core.toggle_switch = (function wizmetria_web$core$toggle_switch(){
var enabled_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.inline-block","div.relative.inline-block",1049742815),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.shiny-toggle-button.flex.items-center.text-sm.bg-indigo-900.hover:bg-indigo-800.transition-colors.px-3.py-2.rounded-md.text-purple-200","button.shiny-toggle-button.flex.items-center.text-sm.bg-indigo-900.hover:bg-indigo-800.transition-colors.px-3.py-2.rounded-md.text-purple-200",1431426439),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-shiny-effects","toggle-shiny-effects",-1644107336)], null));

return setTimeout((function (){
var body = document.body;
var currently_enabled_QMARK_ = cljs.core.not(enabled_QMARK_);
if(cljs.core.truth_(body)){
body.classList.remove("shiny-enabled");

if(currently_enabled_QMARK_){
return body.classList.add("shiny-enabled");
} else {
return null;
}
} else {
return null;
}
}),(10));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-2","span.mr-2",1488641310),wizmetria_web.i18n.t((cljs.core.truth_(enabled_QMARK_)?new cljs.core.Keyword(null,"effects-on","effects-on",-1104057635):new cljs.core.Keyword(null,"effects-off","effects-off",-1189085079)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.inline-flex.items-center.h-5.w-9.rounded-full.transition-colors.duration-200.ease-in-out","div.relative.inline-flex.items-center.h-5.w-9.rounded-full.transition-colors.duration-200.ease-in-out",-812093317),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(enabled_QMARK_)?"bg-purple-600":"bg-gray-600")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.absolute.inline-block.h-3.w-3.rounded-full.bg-white.transform.transition-transform.duration-300.shadow-md","span.absolute.inline-block.h-3.w-3.rounded-full.bg-white.transform.transition-transform.duration-300.shadow-md",1356904182),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(enabled_QMARK_)?"translate-x-5":"translate-x-1")], null)], null)], null)], null)], null);
});
wizmetria_web.core.text_analysis = (function wizmetria_web$core$text_analysis(){
var processing_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processing-state","processing-state",-162524375)], null)));
var stats = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.p-4.rounded-lg.shadow-lg.border.border-purple-700.text-gray-200.mt-8","div.bg-gray-800.p-4.rounded-lg.shadow-lg.border.border-purple-700.text-gray-200.mt-8",1374868422),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-between.items-center","div.flex.justify-between.items-center",-1855308582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-xl.text-purple-300.font-semibold","h3.text-xl.text-purple-300.font-semibold",1916670995),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"text-analysis-title","text-analysis-title",184698196))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),(((((processing_state == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(processing_state),new cljs.core.Keyword(null,"complete","complete",-500388775)))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.mr-3","div.flex.items-center.mr-3",-2073606395),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.animate-spin.-ml-1.mr-2.h-4.w-4.text-purple-500","svg.animate-spin.-ml-1.mr-2.h-4.w-4.text-purple-500",247964034),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.opacity-25","circle.opacity-25",-2135642308),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cx","cx",1272694324),"12",new cljs.core.Keyword(null,"cy","cy",755331060),"12",new cljs.core.Keyword(null,"r","r",-471384190),"10",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path.opacity-75","path.opacity-75",1184631242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor",new cljs.core.Keyword(null,"d","d",1972142424),"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"], null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.bg-purple-700.text-white.px-4.py-2.rounded-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium.cursor-pointer.text-sm","label.bg-purple-700.text-white.px-4.py-2.rounded-lg.hover:bg-purple-600.focus:outline-none.focus:ring-2.focus:ring-purple-500.transition-colors.duration-200.font-medium.cursor-pointer.text-sm",-1627136493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.hidden","input.hidden",798529811),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".txt",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var temp__5804__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-file","process-file",335835811),file], null));
} else {
return null;
}
})], null)], null),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"upload-button","upload-button",-68421306))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.text-gray-300.mt-2.mb-4","p.text-sm.text-gray-300.mt-2.mb-4",-2109350685),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"text-analysis-description","text-analysis-description",1986960027))], null),(cljs.core.truth_(processing_state)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-3","div.mt-3",-681976597),(function (){var G__18055 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(processing_state);
var G__18055__$1 = (((G__18055 instanceof cljs.core.Keyword))?G__18055.fqn:null);
switch (G__18055__$1) {
case "reading":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-400.mb-1","div.text-sm.text-gray-400.mb-1",1733940567),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"reading-status","reading-status",-2056386230))),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(processing_state);
if(cljs.core.truth_(temp__5804__auto__)){
var name = temp__5804__auto__;
return [": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return null;
}
})()].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden","div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden",1140705122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-indigo-500.h-2.transition-all.duration-500.ease-out","div.bg-indigo-500.h-2.transition-all.duration-500.ease-out",1919777979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(processing_state)),"%"].join('')], null)], null)], null)], null)], null);

break;
case "processing":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-400.mb-1","div.text-sm.text-gray-400.mb-1",1733940567),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"processing-text-status","processing-text-status",-1622474989))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"processed-chunks","processed-chunks",-729466610).cljs$core$IFn$_invoke$arity$1(processing_state)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573).cljs$core$IFn$_invoke$arity$1(processing_state))," chunks"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden","div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden",1140705122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-indigo-500.h-2.transition-all.duration-500.ease-out","div.bg-indigo-500.h-2.transition-all.duration-500.ease-out",1919777979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(processing_state)),"%"].join('')], null)], null)], null)], null)], null);

break;
case "finding-symmetry":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-400.mb-1","div.text-sm.text-gray-400.mb-1",1733940567),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"word-count","word-count",-108883606).cljs$core$IFn$_invoke$arity$1(processing_state))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden","div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden",1140705122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-indigo-500.h-2.transition-all.duration-500.ease-out","div.bg-indigo-500.h-2.transition-all.duration-500.ease-out",1919777979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(processing_state)),"%"].join('')], null)], null)], null)], null)], null);

break;
case "mirror-symmetry":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-400.mb-1","div.text-sm.text-gray-400.mb-1",1733940567),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden","div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden",1140705122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-indigo-500.h-2.transition-all.duration-500.ease-out","div.bg-indigo-500.h-2.transition-all.duration-500.ease-out",1919777979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(processing_state)),"%"].join('')], null)], null)], null)], null)], null);

break;
case "rotational-symmetry":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-400.mb-1","div.text-sm.text-gray-400.mb-1",1733940567),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"finding-symmetry","finding-symmetry",-1874652076)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden","div.w-full.bg-gray-700.rounded-full.h-2.overflow-hidden",1140705122),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-indigo-500.h-2.transition-all.duration-500.ease-out","div.bg-indigo-500.h-2.transition-all.duration-500.ease-out",1919777979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(processing_state)),"%"].join('')], null)], null)], null)], null)], null);

break;
case "done":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-gray-400.mb-1","div.text-sm.text-gray-400.mb-1",1733940567),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"processing-status","processing-status",-954722557))),"..."].join('')], null);

break;
case "complete":
if(cljs.core.truth_(stats)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm.text-green-400.mb-1","div.text-sm.text-green-400.mb-1",-117725419),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"completed-status","completed-status",409115845))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"count","count",2139924085)], null)) + cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"count","count",2139924085)], null))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-symmetric-words","stats-symmetric-words",429170986)))].join('')], null);
} else {
return null;
}

break;
default:
return null;

}
})()], null):null)], null);
});
wizmetria_web.core.wordlist_stats = (function wizmetria_web$core$wordlist_stats(){
var stats = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wordlist-stats","wordlist-stats",-1375753320)], null)));
if(cljs.core.truth_(stats)){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200","div.bg-gray-800.p-4.rounded-lg.shadow-lg.mb-4.border.border-purple-700.text-gray-200",-1531848105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.mb-3.text-purple-300.font-semibold","h2.text-xl.mb-3.text-purple-300.font-semibold",1714944561),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-title","stats-title",945280418))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-3.gap-3.mb-4","div.grid.grid-cols-1.md:grid-cols-3.gap-3.mb-4",1938660865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center","div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center",1339936344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-2xl.font-bold.text-indigo-300","span.text-2xl.font-bold.text-indigo-300",-1063022623),new cljs.core.Keyword(null,"total-words","total-words",-2062349296).cljs$core$IFn$_invoke$arity$1(stats)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-300","span.text-xs.text-gray-300",-287440621),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-unique-words","stats-unique-words",574203879))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center","div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center",1339936344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-2xl.font-bold.text-indigo-300","span.text-2xl.font-bold.text-indigo-300",-1063022623),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"count","count",2139924085)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-300","span.text-xs.text-gray-300",-287440621),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-mirror-words","stats-mirror-words",-1453942045))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center","div.bg-gray-700.rounded-lg.p-3.flex.flex-col.items-center.justify-center",1339936344),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-2xl.font-bold.text-indigo-300","span.text-2xl.font-bold.text-indigo-300",-1063022623),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"count","count",2139924085)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-xs.text-gray-300","span.text-xs.text-gray-300",-287440621),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"stats-rotation-words","stats-rotation-words",1621442299))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-indigo-300.font-medium","h3.text-lg.mb-2.text-indigo-300.font-medium",2119703403),["Top 10 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"mirror-symmetry","mirror-symmetry",2143234979)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-2","div.flex.flex-wrap.gap-2",-1252302895),(function (){var iter__5480__auto__ = (function wizmetria_web$core$wordlist_stats_$_iter__18056(s__18057){
return (new cljs.core.LazySeq(null,(function (){
var s__18057__$1 = s__18057;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18057__$1);
if(temp__5804__auto__){
var s__18057__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18057__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18057__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18059 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18058 = (0);
while(true){
if((i__18058 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__18058);
cljs.core.chunk_append(b__18059,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm","span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm",-204006898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18058,word,c__5478__auto__,size__5479__auto__,b__18059,s__18057__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__18058,word,c__5478__auto__,size__5479__auto__,b__18059,s__18057__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__18091 = (i__18058 + (1));
i__18058 = G__18091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18059),wizmetria_web$core$wordlist_stats_$_iter__18056(cljs.core.chunk_rest(s__18057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18059),null);
}
} else {
var word = cljs.core.first(s__18057__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm","span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm",-204006898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,s__18057__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(word,s__18057__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wizmetria_web$core$wordlist_stats_$_iter__18056(cljs.core.rest(s__18057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"top-10","top-10",-1843125027)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-4","div.mb-4",-1002350692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-indigo-300.font-medium","h3.text-lg.mb-2.text-indigo-300.font-medium",2119703403),["Top 10 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"rotation-symmetry","rotation-symmetry",-1324263018)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-2","div.flex.flex-wrap.gap-2",-1252302895),(function (){var iter__5480__auto__ = (function wizmetria_web$core$wordlist_stats_$_iter__18060(s__18061){
return (new cljs.core.LazySeq(null,(function (){
var s__18061__$1 = s__18061;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18061__$1);
if(temp__5804__auto__){
var s__18061__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18061__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18061__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18063 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18062 = (0);
while(true){
if((i__18062 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__18062);
cljs.core.chunk_append(b__18063,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm","span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm",-204006898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18062,word,c__5478__auto__,size__5479__auto__,b__18063,s__18061__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__18062,word,c__5478__auto__,size__5479__auto__,b__18063,s__18061__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__18092 = (i__18062 + (1));
i__18062 = G__18092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18063),wizmetria_web$core$wordlist_stats_$_iter__18060(cljs.core.chunk_rest(s__18061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18063),null);
}
} else {
var word = cljs.core.first(s__18061__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm","span.bg-gray-700.px-3.py-1.rounded-md.cursor-pointer.hover:bg-gray-600.transition-colors.text-indigo-200.text-sm",-204006898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (word,s__18061__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(word,s__18061__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wizmetria_web$core$wordlist_stats_$_iter__18060(cljs.core.rest(s__18061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"top-10","top-10",-1843125027)], null)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg.mb-2.text-indigo-300.font-medium","h3.text-lg.mb-2.text-indigo-300.font-medium",2119703403),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"by","by",30600856)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"symmetry-axis","symmetry-axis",1569891606)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.grid-cols-1.md:grid-cols-2.gap-3","div.grid.grid-cols-1.md:grid-cols-2.gap-3",-1883427666),(function (){var iter__5480__auto__ = (function wizmetria_web$core$wordlist_stats_$_iter__18064(s__18065){
return (new cljs.core.LazySeq(null,(function (){
var s__18065__$1 = s__18065;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18065__$1);
if(temp__5804__auto__){
var s__18065__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18065__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18065__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18067 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18066 = (0);
while(true){
if((i__18066 < size__5479__auto__)){
var vec__18068 = cljs.core._nth(c__5478__auto__,i__18066);
var axis_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18068,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18068,(1),null);
if(cljs.core.seq(words)){
var axis_name = wizmetria_web.sym.id__GT_axis_name(axis_id);
var top_words = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),words);
cljs.core.chunk_append(b__18067,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3","div.bg-gray-700.rounded-lg.p-3",-268768400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-indigo-200.font-medium.mb-1.text-sm","h4.text-indigo-200.font-medium.mb-1.text-sm",1683388601),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"axis","axis",-1215390822)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(words))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319))),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-1","div.flex.flex-wrap.gap-1",1063862912),(function (){var iter__5480__auto__ = ((function (i__18066,s__18065__$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats){
return (function wizmetria_web$core$wordlist_stats_$_iter__18064_$_iter__18071(s__18072){
return (new cljs.core.LazySeq(null,((function (i__18066,s__18065__$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats){
return (function (){
var s__18072__$1 = s__18072;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18072__$1);
if(temp__5804__auto____$1){
var s__18072__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18072__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__18072__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__18074 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__18073 = (0);
while(true){
if((i__18073 < size__5479__auto____$1)){
var word = cljs.core._nth(c__5478__auto____$1,i__18073);
cljs.core.chunk_append(b__18074,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100","span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100",-1247288065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18073,i__18066,s__18065__$1,word,c__5478__auto____$1,size__5479__auto____$1,b__18074,s__18072__$2,temp__5804__auto____$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__18073,i__18066,s__18065__$1,word,c__5478__auto____$1,size__5479__auto____$1,b__18074,s__18072__$2,temp__5804__auto____$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__18093 = (i__18073 + (1));
i__18073 = G__18093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18074),wizmetria_web$core$wordlist_stats_$_iter__18064_$_iter__18071(cljs.core.chunk_rest(s__18072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18074),null);
}
} else {
var word = cljs.core.first(s__18072__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100","span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100",-1247288065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18066,s__18065__$1,word,s__18072__$2,temp__5804__auto____$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__18066,s__18065__$1,word,s__18072__$2,temp__5804__auto____$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wizmetria_web$core$wordlist_stats_$_iter__18064_$_iter__18071(cljs.core.rest(s__18072__$2)));
}
} else {
return null;
}
break;
}
});})(i__18066,s__18065__$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats))
,null,null));
});})(i__18066,s__18065__$1,axis_name,top_words,vec__18068,axis_id,words,c__5478__auto__,size__5479__auto__,b__18067,s__18065__$2,temp__5804__auto__,stats))
;
return iter__5480__auto__(top_words);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),axis_id], null)));

var G__18094 = (i__18066 + (1));
i__18066 = G__18094;
continue;
} else {
var G__18095 = (i__18066 + (1));
i__18066 = G__18095;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18067),wizmetria_web$core$wordlist_stats_$_iter__18064(cljs.core.chunk_rest(s__18065__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18067),null);
}
} else {
var vec__18075 = cljs.core.first(s__18065__$2);
var axis_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(0),null);
var words = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18075,(1),null);
if(cljs.core.seq(words)){
var axis_name = wizmetria_web.sym.id__GT_axis_name(axis_id);
var top_words = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),words);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-700.rounded-lg.p-3","div.bg-gray-700.rounded-lg.p-3",-268768400),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.text-indigo-200.font-medium.mb-1.text-sm","h4.text-indigo-200.font-medium.mb-1.text-sm",1683388601),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(axis_name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"axis","axis",-1215390822)))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(words))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wizmetria_web.i18n.t(new cljs.core.Keyword(null,"for","for",-1323786319))),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap.gap-1","div.flex.flex-wrap.gap-1",1063862912),(function (){var iter__5480__auto__ = ((function (s__18065__$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats){
return (function wizmetria_web$core$wordlist_stats_$_iter__18064_$_iter__18078(s__18079){
return (new cljs.core.LazySeq(null,((function (s__18065__$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats){
return (function (){
var s__18079__$1 = s__18079;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18079__$1);
if(temp__5804__auto____$1){
var s__18079__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18079__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18079__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18081 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18080 = (0);
while(true){
if((i__18080 < size__5479__auto__)){
var word = cljs.core._nth(c__5478__auto__,i__18080);
cljs.core.chunk_append(b__18081,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100","span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100",-1247288065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18080,s__18065__$1,word,c__5478__auto__,size__5479__auto__,b__18081,s__18079__$2,temp__5804__auto____$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(i__18080,s__18065__$1,word,c__5478__auto__,size__5479__auto__,b__18081,s__18079__$2,temp__5804__auto____$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)));

var G__18096 = (i__18080 + (1));
i__18080 = G__18096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18081),wizmetria_web$core$wordlist_stats_$_iter__18064_$_iter__18078(cljs.core.chunk_rest(s__18079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18081),null);
}
} else {
var word = cljs.core.first(s__18079__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100","span.bg-gray-600.px-2.py-0.5.rounded-md.text-xs.cursor-pointer.hover:bg-gray-500.transition-colors.text-indigo-100",-1247288065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__18065__$1,word,s__18079__$2,temp__5804__auto____$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-word","update-word",705364375),word], null));
});})(s__18065__$1,word,s__18079__$2,temp__5804__auto____$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats))
], null),word], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),word], null)),wizmetria_web$core$wordlist_stats_$_iter__18064_$_iter__18078(cljs.core.rest(s__18079__$2)));
}
} else {
return null;
}
break;
}
});})(s__18065__$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats))
,null,null));
});})(s__18065__$1,axis_name,top_words,vec__18075,axis_id,words,s__18065__$2,temp__5804__auto__,stats))
;
return iter__5480__auto__(top_words);
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),axis_id], null)),wizmetria_web$core$wordlist_stats_$_iter__18064(cljs.core.rest(s__18065__$2)));
} else {
var G__18097 = cljs.core.rest(s__18065__$2);
s__18065__$1 = G__18097;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stats,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mirror","mirror",1914600218),new cljs.core.Keyword(null,"by-axis","by-axis",1460307363)], null)));
})()], null)], null)], null);
} else {
return null;
}
});
wizmetria_web.core.footer = (function wizmetria_web$core$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.text-center.py-4.text-gray-400.text-xs.border-t.border-gray-800","div.w-full.text-center.py-4.text-gray-400.text-xs.border-t.border-gray-800",-301913833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.items-center.justify-center","div.flex.flex-col.items-center.justify-center",1294306726),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb-2","p.mb-2",-1476899286),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"footer-text","footer-text",782346468))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.github-link.text-indigo-400.hover:text-indigo-300.transition-colors.flex.items-center","a.github-link.text-indigo-400.hover:text-indigo-300.transition-colors.flex.items-center",1243081555),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Tok/wizmetria-web",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mr-1","span.mr-1",127520086),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"github-link","github-link",1167314559))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.w-4.h-4","svg.w-4.h-4",-658157969),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], null)], null)], null)], null)], null)], null);
});
wizmetria_web.core.main_panel = (function wizmetria_web$core$main_panel(){
var text_direction = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-direction","text-direction",590275785)], null)));
var shiny_enabled_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223)], null)));
var rtl_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text_direction,"rtl");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.bg-gray-900.text-purple-100.flex.flex-col","div.min-h-screen.bg-gray-900.text-purple-100.flex.flex-col",-1664456384),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dir","dir",1734754661),text_direction,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(shiny_enabled_QMARK_)?"shiny-enabled":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow.px-4.py-6.flex.flex-col.items-center","div.flex-grow.px-4.py-6.flex.flex-col.items-center",494484617),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-between.w-full.max-w-5xl.px-2.py-2","div.flex.items-center.justify-between.w-full.max-w-5xl.px-2.py-2",35685128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-5xl.text-purple-300.font-bold.tracking-wider.mr-4.app-title","h1.text-5xl.text-purple-300.font-bold.tracking-wider.mr-4.app-title",1659845926),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Courier New', monospace"], null),(cljs.core.truth_(shiny_enabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0 0 12px rgba(139, 92, 246, 0.5), 0 0 24px rgba(139, 92, 246, 0.3)"], null):null)], 0))], null),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"app-title","app-title",1908483663))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.text-xl.text-indigo-300.font-light.hidden.sm:block","h2.text-xl.text-indigo-300.font-light.hidden.sm:block",605338041),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Courier New', monospace"], null),(cljs.core.truth_(shiny_enabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"0 0 5px rgba(99, 102, 241, 0.3)"], null):null)], 0))], null),wizmetria_web.i18n.t(new cljs.core.Keyword(null,"app-subtitle","app-subtitle",-2008703317))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls-container.flex.items-center.space-x-2","div.controls-container.flex.items-center.space-x-2",-1146642675),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((rtl_QMARK_)?"rtl space-x-reverse":null)], null),((rtl_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.i18n.language_selector], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.toggle_switch], null)),((rtl_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.toggle_switch], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.i18n.language_selector], null))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.max-w-5xl","div.w-full.max-w-5xl",-800976454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.explanation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.input_field], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.symmetry_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.text_analysis], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.wordlist_stats], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.footer], null)], null);
});
wizmetria_web.core.mount_root = (function wizmetria_web$core$mount_root(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

var shiny_enabled_QMARK__18098 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shiny-effects-enabled","shiny-effects-enabled",-227811223)], null)));
var body_18099 = document.body;
if(cljs.core.truth_((function (){var and__5000__auto__ = body_18099;
if(cljs.core.truth_(and__5000__auto__)){
return shiny_enabled_QMARK__18098;
} else {
return and__5000__auto__;
}
})())){
body_18099.classList.add("shiny-enabled");
} else {
}

var root = reagent.dom.client.create_root(document.getElementById("app"));
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wizmetria_web.core.main_panel], null));
});
wizmetria_web.core.init = (function wizmetria_web$core$init(){
return wizmetria_web.core.mount_root();
});

//# sourceMappingURL=wizmetria_web.core.js.map
