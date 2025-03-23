goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___23215 = arguments.length;
var i__5727__auto___23216 = (0);
while(true){
if((i__5727__auto___23216 < len__5726__auto___23215)){
args__5732__auto__.push((arguments[i__5727__auto___23216]));

var G__23217 = (i__5727__auto___23216 + (1));
i__5727__auto___23216 = G__23217;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22848){
var G__22849 = cljs.core.first(seq22848);
var seq22848__$1 = cljs.core.next(seq22848);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22849,seq22848__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22862 = cljs.core.seq(sources);
var chunk__22863 = null;
var count__22864 = (0);
var i__22865 = (0);
while(true){
if((i__22865 < count__22864)){
var map__22880 = chunk__22863.cljs$core$IIndexed$_nth$arity$2(null, i__22865);
var map__22880__$1 = cljs.core.__destructure_map(map__22880);
var src = map__22880__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22880__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22881){var e_23218 = e22881;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23218);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23218.message)].join('')));
}

var G__23219 = seq__22862;
var G__23220 = chunk__22863;
var G__23221 = count__22864;
var G__23222 = (i__22865 + (1));
seq__22862 = G__23219;
chunk__22863 = G__23220;
count__22864 = G__23221;
i__22865 = G__23222;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22862);
if(temp__5804__auto__){
var seq__22862__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22862__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22862__$1);
var G__23223 = cljs.core.chunk_rest(seq__22862__$1);
var G__23224 = c__5525__auto__;
var G__23225 = cljs.core.count(c__5525__auto__);
var G__23226 = (0);
seq__22862 = G__23223;
chunk__22863 = G__23224;
count__22864 = G__23225;
i__22865 = G__23226;
continue;
} else {
var map__22887 = cljs.core.first(seq__22862__$1);
var map__22887__$1 = cljs.core.__destructure_map(map__22887);
var src = map__22887__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22887__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22888){var e_23227 = e22888;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23227);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23227.message)].join('')));
}

var G__23228 = cljs.core.next(seq__22862__$1);
var G__23229 = null;
var G__23230 = (0);
var G__23231 = (0);
seq__22862 = G__23228;
chunk__22863 = G__23229;
count__22864 = G__23230;
i__22865 = G__23231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22894 = cljs.core.seq(js_requires);
var chunk__22895 = null;
var count__22896 = (0);
var i__22897 = (0);
while(true){
if((i__22897 < count__22896)){
var js_ns = chunk__22895.cljs$core$IIndexed$_nth$arity$2(null, i__22897);
var require_str_23232 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23232);


var G__23233 = seq__22894;
var G__23234 = chunk__22895;
var G__23235 = count__22896;
var G__23236 = (i__22897 + (1));
seq__22894 = G__23233;
chunk__22895 = G__23234;
count__22896 = G__23235;
i__22897 = G__23236;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22894);
if(temp__5804__auto__){
var seq__22894__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22894__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22894__$1);
var G__23237 = cljs.core.chunk_rest(seq__22894__$1);
var G__23238 = c__5525__auto__;
var G__23239 = cljs.core.count(c__5525__auto__);
var G__23240 = (0);
seq__22894 = G__23237;
chunk__22895 = G__23238;
count__22896 = G__23239;
i__22897 = G__23240;
continue;
} else {
var js_ns = cljs.core.first(seq__22894__$1);
var require_str_23241 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23241);


var G__23242 = cljs.core.next(seq__22894__$1);
var G__23243 = null;
var G__23244 = (0);
var G__23245 = (0);
seq__22894 = G__23242;
chunk__22895 = G__23243;
count__22896 = G__23244;
i__22897 = G__23245;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22911){
var map__22912 = p__22911;
var map__22912__$1 = cljs.core.__destructure_map(map__22912);
var msg = map__22912__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22912__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22912__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22913(s__22914){
return (new cljs.core.LazySeq(null,(function (){
var s__22914__$1 = s__22914;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22914__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22919 = cljs.core.first(xs__6360__auto__);
var map__22919__$1 = cljs.core.__destructure_map(map__22919);
var src = map__22919__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22919__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22914__$1,map__22919,map__22919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22912,map__22912__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22913_$_iter__22915(s__22916){
return (new cljs.core.LazySeq(null,((function (s__22914__$1,map__22919,map__22919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22912,map__22912__$1,msg,info,reload_info){
return (function (){
var s__22916__$1 = s__22916;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22916__$1);
if(temp__5804__auto____$1){
var s__22916__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22916__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22916__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22918 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22917 = (0);
while(true){
if((i__22917 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22917);
cljs.core.chunk_append(b__22918,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23246 = (i__22917 + (1));
i__22917 = G__23246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22918),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22913_$_iter__22915(cljs.core.chunk_rest(s__22916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22918),null);
}
} else {
var warning = cljs.core.first(s__22916__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22913_$_iter__22915(cljs.core.rest(s__22916__$2)));
}
} else {
return null;
}
break;
}
});})(s__22914__$1,map__22919,map__22919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22912,map__22912__$1,msg,info,reload_info))
,null,null));
});})(s__22914__$1,map__22919,map__22919__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22912,map__22912__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22913(cljs.core.rest(s__22914__$1)));
} else {
var G__23247 = cljs.core.rest(s__22914__$1);
s__22914__$1 = G__23247;
continue;
}
} else {
var G__23248 = cljs.core.rest(s__22914__$1);
s__22914__$1 = G__23248;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22920_23249 = cljs.core.seq(warnings);
var chunk__22921_23250 = null;
var count__22922_23251 = (0);
var i__22923_23252 = (0);
while(true){
if((i__22923_23252 < count__22922_23251)){
var map__22926_23253 = chunk__22921_23250.cljs$core$IIndexed$_nth$arity$2(null, i__22923_23252);
var map__22926_23254__$1 = cljs.core.__destructure_map(map__22926_23253);
var w_23255 = map__22926_23254__$1;
var msg_23256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22926_23254__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22926_23254__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22926_23254__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22926_23254__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23259)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23257),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23258),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23256__$1)].join(''));


var G__23260 = seq__22920_23249;
var G__23261 = chunk__22921_23250;
var G__23262 = count__22922_23251;
var G__23263 = (i__22923_23252 + (1));
seq__22920_23249 = G__23260;
chunk__22921_23250 = G__23261;
count__22922_23251 = G__23262;
i__22923_23252 = G__23263;
continue;
} else {
var temp__5804__auto___23264 = cljs.core.seq(seq__22920_23249);
if(temp__5804__auto___23264){
var seq__22920_23265__$1 = temp__5804__auto___23264;
if(cljs.core.chunked_seq_QMARK_(seq__22920_23265__$1)){
var c__5525__auto___23266 = cljs.core.chunk_first(seq__22920_23265__$1);
var G__23267 = cljs.core.chunk_rest(seq__22920_23265__$1);
var G__23268 = c__5525__auto___23266;
var G__23269 = cljs.core.count(c__5525__auto___23266);
var G__23270 = (0);
seq__22920_23249 = G__23267;
chunk__22921_23250 = G__23268;
count__22922_23251 = G__23269;
i__22923_23252 = G__23270;
continue;
} else {
var map__22927_23271 = cljs.core.first(seq__22920_23265__$1);
var map__22927_23272__$1 = cljs.core.__destructure_map(map__22927_23271);
var w_23273 = map__22927_23272__$1;
var msg_23274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927_23272__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927_23272__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927_23272__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22927_23272__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23277)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23275),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23276),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23274__$1)].join(''));


var G__23278 = cljs.core.next(seq__22920_23265__$1);
var G__23279 = null;
var G__23280 = (0);
var G__23281 = (0);
seq__22920_23249 = G__23278;
chunk__22921_23250 = G__23279;
count__22922_23251 = G__23280;
i__22923_23252 = G__23281;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22910_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22910_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__22930 = node_uri;
G__22930.setQuery(null);

G__22930.setPath(new$);

return G__22930;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22931){
var map__22932 = p__22931;
var map__22932__$1 = cljs.core.__destructure_map(map__22932);
var msg = map__22932__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22932__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22932__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22933 = cljs.core.seq(updates);
var chunk__22935 = null;
var count__22936 = (0);
var i__22937 = (0);
while(true){
if((i__22937 < count__22936)){
var path = chunk__22935.cljs$core$IIndexed$_nth$arity$2(null, i__22937);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23089_23282 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23093_23283 = null;
var count__23094_23284 = (0);
var i__23095_23285 = (0);
while(true){
if((i__23095_23285 < count__23094_23284)){
var node_23286 = chunk__23093_23283.cljs$core$IIndexed$_nth$arity$2(null, i__23095_23285);
if(cljs.core.not(node_23286.shadow$old)){
var path_match_23287 = shadow.cljs.devtools.client.browser.match_paths(node_23286.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23287)){
var new_link_23288 = (function (){var G__23121 = node_23286.cloneNode(true);
G__23121.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23287),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23121;
})();
(node_23286.shadow$old = true);

(new_link_23288.onload = ((function (seq__23089_23282,chunk__23093_23283,count__23094_23284,i__23095_23285,seq__22933,chunk__22935,count__22936,i__22937,new_link_23288,path_match_23287,node_23286,path,map__22932,map__22932__$1,msg,updates,reload_info){
return (function (e){
var seq__23122_23289 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23124_23290 = null;
var count__23125_23291 = (0);
var i__23126_23292 = (0);
while(true){
if((i__23126_23292 < count__23125_23291)){
var map__23130_23293 = chunk__23124_23290.cljs$core$IIndexed$_nth$arity$2(null, i__23126_23292);
var map__23130_23294__$1 = cljs.core.__destructure_map(map__23130_23293);
var task_23295 = map__23130_23294__$1;
var fn_str_23296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23130_23294__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23130_23294__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23298 = goog.getObjectByName(fn_str_23296,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23297)].join(''));

(fn_obj_23298.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23298.cljs$core$IFn$_invoke$arity$2(path,new_link_23288) : fn_obj_23298.call(null, path,new_link_23288));


var G__23299 = seq__23122_23289;
var G__23300 = chunk__23124_23290;
var G__23301 = count__23125_23291;
var G__23302 = (i__23126_23292 + (1));
seq__23122_23289 = G__23299;
chunk__23124_23290 = G__23300;
count__23125_23291 = G__23301;
i__23126_23292 = G__23302;
continue;
} else {
var temp__5804__auto___23303 = cljs.core.seq(seq__23122_23289);
if(temp__5804__auto___23303){
var seq__23122_23304__$1 = temp__5804__auto___23303;
if(cljs.core.chunked_seq_QMARK_(seq__23122_23304__$1)){
var c__5525__auto___23305 = cljs.core.chunk_first(seq__23122_23304__$1);
var G__23306 = cljs.core.chunk_rest(seq__23122_23304__$1);
var G__23307 = c__5525__auto___23305;
var G__23308 = cljs.core.count(c__5525__auto___23305);
var G__23309 = (0);
seq__23122_23289 = G__23306;
chunk__23124_23290 = G__23307;
count__23125_23291 = G__23308;
i__23126_23292 = G__23309;
continue;
} else {
var map__23131_23310 = cljs.core.first(seq__23122_23304__$1);
var map__23131_23311__$1 = cljs.core.__destructure_map(map__23131_23310);
var task_23312 = map__23131_23311__$1;
var fn_str_23313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23131_23311__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23131_23311__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23315 = goog.getObjectByName(fn_str_23313,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23314)].join(''));

(fn_obj_23315.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23315.cljs$core$IFn$_invoke$arity$2(path,new_link_23288) : fn_obj_23315.call(null, path,new_link_23288));


var G__23316 = cljs.core.next(seq__23122_23304__$1);
var G__23317 = null;
var G__23318 = (0);
var G__23319 = (0);
seq__23122_23289 = G__23316;
chunk__23124_23290 = G__23317;
count__23125_23291 = G__23318;
i__23126_23292 = G__23319;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23286);
});})(seq__23089_23282,chunk__23093_23283,count__23094_23284,i__23095_23285,seq__22933,chunk__22935,count__22936,i__22937,new_link_23288,path_match_23287,node_23286,path,map__22932,map__22932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23287], 0));

goog.dom.insertSiblingAfter(new_link_23288,node_23286);


var G__23320 = seq__23089_23282;
var G__23321 = chunk__23093_23283;
var G__23322 = count__23094_23284;
var G__23323 = (i__23095_23285 + (1));
seq__23089_23282 = G__23320;
chunk__23093_23283 = G__23321;
count__23094_23284 = G__23322;
i__23095_23285 = G__23323;
continue;
} else {
var G__23324 = seq__23089_23282;
var G__23325 = chunk__23093_23283;
var G__23326 = count__23094_23284;
var G__23327 = (i__23095_23285 + (1));
seq__23089_23282 = G__23324;
chunk__23093_23283 = G__23325;
count__23094_23284 = G__23326;
i__23095_23285 = G__23327;
continue;
}
} else {
var G__23328 = seq__23089_23282;
var G__23329 = chunk__23093_23283;
var G__23330 = count__23094_23284;
var G__23331 = (i__23095_23285 + (1));
seq__23089_23282 = G__23328;
chunk__23093_23283 = G__23329;
count__23094_23284 = G__23330;
i__23095_23285 = G__23331;
continue;
}
} else {
var temp__5804__auto___23332 = cljs.core.seq(seq__23089_23282);
if(temp__5804__auto___23332){
var seq__23089_23333__$1 = temp__5804__auto___23332;
if(cljs.core.chunked_seq_QMARK_(seq__23089_23333__$1)){
var c__5525__auto___23334 = cljs.core.chunk_first(seq__23089_23333__$1);
var G__23335 = cljs.core.chunk_rest(seq__23089_23333__$1);
var G__23336 = c__5525__auto___23334;
var G__23337 = cljs.core.count(c__5525__auto___23334);
var G__23338 = (0);
seq__23089_23282 = G__23335;
chunk__23093_23283 = G__23336;
count__23094_23284 = G__23337;
i__23095_23285 = G__23338;
continue;
} else {
var node_23339 = cljs.core.first(seq__23089_23333__$1);
if(cljs.core.not(node_23339.shadow$old)){
var path_match_23340 = shadow.cljs.devtools.client.browser.match_paths(node_23339.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23340)){
var new_link_23341 = (function (){var G__23132 = node_23339.cloneNode(true);
G__23132.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23340),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23132;
})();
(node_23339.shadow$old = true);

(new_link_23341.onload = ((function (seq__23089_23282,chunk__23093_23283,count__23094_23284,i__23095_23285,seq__22933,chunk__22935,count__22936,i__22937,new_link_23341,path_match_23340,node_23339,seq__23089_23333__$1,temp__5804__auto___23332,path,map__22932,map__22932__$1,msg,updates,reload_info){
return (function (e){
var seq__23133_23342 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23135_23343 = null;
var count__23136_23344 = (0);
var i__23137_23345 = (0);
while(true){
if((i__23137_23345 < count__23136_23344)){
var map__23141_23346 = chunk__23135_23343.cljs$core$IIndexed$_nth$arity$2(null, i__23137_23345);
var map__23141_23347__$1 = cljs.core.__destructure_map(map__23141_23346);
var task_23348 = map__23141_23347__$1;
var fn_str_23349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141_23347__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141_23347__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23351 = goog.getObjectByName(fn_str_23349,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23350)].join(''));

(fn_obj_23351.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23351.cljs$core$IFn$_invoke$arity$2(path,new_link_23341) : fn_obj_23351.call(null, path,new_link_23341));


var G__23352 = seq__23133_23342;
var G__23353 = chunk__23135_23343;
var G__23354 = count__23136_23344;
var G__23355 = (i__23137_23345 + (1));
seq__23133_23342 = G__23352;
chunk__23135_23343 = G__23353;
count__23136_23344 = G__23354;
i__23137_23345 = G__23355;
continue;
} else {
var temp__5804__auto___23356__$1 = cljs.core.seq(seq__23133_23342);
if(temp__5804__auto___23356__$1){
var seq__23133_23357__$1 = temp__5804__auto___23356__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23133_23357__$1)){
var c__5525__auto___23358 = cljs.core.chunk_first(seq__23133_23357__$1);
var G__23359 = cljs.core.chunk_rest(seq__23133_23357__$1);
var G__23360 = c__5525__auto___23358;
var G__23361 = cljs.core.count(c__5525__auto___23358);
var G__23362 = (0);
seq__23133_23342 = G__23359;
chunk__23135_23343 = G__23360;
count__23136_23344 = G__23361;
i__23137_23345 = G__23362;
continue;
} else {
var map__23142_23363 = cljs.core.first(seq__23133_23357__$1);
var map__23142_23364__$1 = cljs.core.__destructure_map(map__23142_23363);
var task_23365 = map__23142_23364__$1;
var fn_str_23366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23142_23364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23142_23364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23368 = goog.getObjectByName(fn_str_23366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23367)].join(''));

(fn_obj_23368.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23368.cljs$core$IFn$_invoke$arity$2(path,new_link_23341) : fn_obj_23368.call(null, path,new_link_23341));


var G__23369 = cljs.core.next(seq__23133_23357__$1);
var G__23370 = null;
var G__23371 = (0);
var G__23372 = (0);
seq__23133_23342 = G__23369;
chunk__23135_23343 = G__23370;
count__23136_23344 = G__23371;
i__23137_23345 = G__23372;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23339);
});})(seq__23089_23282,chunk__23093_23283,count__23094_23284,i__23095_23285,seq__22933,chunk__22935,count__22936,i__22937,new_link_23341,path_match_23340,node_23339,seq__23089_23333__$1,temp__5804__auto___23332,path,map__22932,map__22932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23340], 0));

goog.dom.insertSiblingAfter(new_link_23341,node_23339);


var G__23373 = cljs.core.next(seq__23089_23333__$1);
var G__23374 = null;
var G__23375 = (0);
var G__23376 = (0);
seq__23089_23282 = G__23373;
chunk__23093_23283 = G__23374;
count__23094_23284 = G__23375;
i__23095_23285 = G__23376;
continue;
} else {
var G__23377 = cljs.core.next(seq__23089_23333__$1);
var G__23378 = null;
var G__23379 = (0);
var G__23380 = (0);
seq__23089_23282 = G__23377;
chunk__23093_23283 = G__23378;
count__23094_23284 = G__23379;
i__23095_23285 = G__23380;
continue;
}
} else {
var G__23381 = cljs.core.next(seq__23089_23333__$1);
var G__23382 = null;
var G__23383 = (0);
var G__23384 = (0);
seq__23089_23282 = G__23381;
chunk__23093_23283 = G__23382;
count__23094_23284 = G__23383;
i__23095_23285 = G__23384;
continue;
}
}
} else {
}
}
break;
}


var G__23385 = seq__22933;
var G__23386 = chunk__22935;
var G__23387 = count__22936;
var G__23388 = (i__22937 + (1));
seq__22933 = G__23385;
chunk__22935 = G__23386;
count__22936 = G__23387;
i__22937 = G__23388;
continue;
} else {
var G__23389 = seq__22933;
var G__23390 = chunk__22935;
var G__23391 = count__22936;
var G__23392 = (i__22937 + (1));
seq__22933 = G__23389;
chunk__22935 = G__23390;
count__22936 = G__23391;
i__22937 = G__23392;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22933);
if(temp__5804__auto__){
var seq__22933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22933__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22933__$1);
var G__23393 = cljs.core.chunk_rest(seq__22933__$1);
var G__23394 = c__5525__auto__;
var G__23395 = cljs.core.count(c__5525__auto__);
var G__23396 = (0);
seq__22933 = G__23393;
chunk__22935 = G__23394;
count__22936 = G__23395;
i__22937 = G__23396;
continue;
} else {
var path = cljs.core.first(seq__22933__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23143_23397 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23147_23398 = null;
var count__23148_23399 = (0);
var i__23149_23400 = (0);
while(true){
if((i__23149_23400 < count__23148_23399)){
var node_23401 = chunk__23147_23398.cljs$core$IIndexed$_nth$arity$2(null, i__23149_23400);
if(cljs.core.not(node_23401.shadow$old)){
var path_match_23402 = shadow.cljs.devtools.client.browser.match_paths(node_23401.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23402)){
var new_link_23403 = (function (){var G__23175 = node_23401.cloneNode(true);
G__23175.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23402),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23175;
})();
(node_23401.shadow$old = true);

(new_link_23403.onload = ((function (seq__23143_23397,chunk__23147_23398,count__23148_23399,i__23149_23400,seq__22933,chunk__22935,count__22936,i__22937,new_link_23403,path_match_23402,node_23401,path,seq__22933__$1,temp__5804__auto__,map__22932,map__22932__$1,msg,updates,reload_info){
return (function (e){
var seq__23176_23404 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23178_23405 = null;
var count__23179_23406 = (0);
var i__23180_23407 = (0);
while(true){
if((i__23180_23407 < count__23179_23406)){
var map__23184_23408 = chunk__23178_23405.cljs$core$IIndexed$_nth$arity$2(null, i__23180_23407);
var map__23184_23409__$1 = cljs.core.__destructure_map(map__23184_23408);
var task_23410 = map__23184_23409__$1;
var fn_str_23411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23184_23409__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23184_23409__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23413 = goog.getObjectByName(fn_str_23411,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23412)].join(''));

(fn_obj_23413.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23413.cljs$core$IFn$_invoke$arity$2(path,new_link_23403) : fn_obj_23413.call(null, path,new_link_23403));


var G__23414 = seq__23176_23404;
var G__23415 = chunk__23178_23405;
var G__23416 = count__23179_23406;
var G__23417 = (i__23180_23407 + (1));
seq__23176_23404 = G__23414;
chunk__23178_23405 = G__23415;
count__23179_23406 = G__23416;
i__23180_23407 = G__23417;
continue;
} else {
var temp__5804__auto___23418__$1 = cljs.core.seq(seq__23176_23404);
if(temp__5804__auto___23418__$1){
var seq__23176_23419__$1 = temp__5804__auto___23418__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23176_23419__$1)){
var c__5525__auto___23420 = cljs.core.chunk_first(seq__23176_23419__$1);
var G__23421 = cljs.core.chunk_rest(seq__23176_23419__$1);
var G__23422 = c__5525__auto___23420;
var G__23423 = cljs.core.count(c__5525__auto___23420);
var G__23424 = (0);
seq__23176_23404 = G__23421;
chunk__23178_23405 = G__23422;
count__23179_23406 = G__23423;
i__23180_23407 = G__23424;
continue;
} else {
var map__23185_23425 = cljs.core.first(seq__23176_23419__$1);
var map__23185_23426__$1 = cljs.core.__destructure_map(map__23185_23425);
var task_23427 = map__23185_23426__$1;
var fn_str_23428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185_23426__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185_23426__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23430 = goog.getObjectByName(fn_str_23428,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23429)].join(''));

(fn_obj_23430.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23430.cljs$core$IFn$_invoke$arity$2(path,new_link_23403) : fn_obj_23430.call(null, path,new_link_23403));


var G__23431 = cljs.core.next(seq__23176_23419__$1);
var G__23432 = null;
var G__23433 = (0);
var G__23434 = (0);
seq__23176_23404 = G__23431;
chunk__23178_23405 = G__23432;
count__23179_23406 = G__23433;
i__23180_23407 = G__23434;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23401);
});})(seq__23143_23397,chunk__23147_23398,count__23148_23399,i__23149_23400,seq__22933,chunk__22935,count__22936,i__22937,new_link_23403,path_match_23402,node_23401,path,seq__22933__$1,temp__5804__auto__,map__22932,map__22932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23402], 0));

goog.dom.insertSiblingAfter(new_link_23403,node_23401);


var G__23435 = seq__23143_23397;
var G__23436 = chunk__23147_23398;
var G__23437 = count__23148_23399;
var G__23438 = (i__23149_23400 + (1));
seq__23143_23397 = G__23435;
chunk__23147_23398 = G__23436;
count__23148_23399 = G__23437;
i__23149_23400 = G__23438;
continue;
} else {
var G__23439 = seq__23143_23397;
var G__23440 = chunk__23147_23398;
var G__23441 = count__23148_23399;
var G__23442 = (i__23149_23400 + (1));
seq__23143_23397 = G__23439;
chunk__23147_23398 = G__23440;
count__23148_23399 = G__23441;
i__23149_23400 = G__23442;
continue;
}
} else {
var G__23443 = seq__23143_23397;
var G__23444 = chunk__23147_23398;
var G__23445 = count__23148_23399;
var G__23446 = (i__23149_23400 + (1));
seq__23143_23397 = G__23443;
chunk__23147_23398 = G__23444;
count__23148_23399 = G__23445;
i__23149_23400 = G__23446;
continue;
}
} else {
var temp__5804__auto___23447__$1 = cljs.core.seq(seq__23143_23397);
if(temp__5804__auto___23447__$1){
var seq__23143_23448__$1 = temp__5804__auto___23447__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23143_23448__$1)){
var c__5525__auto___23449 = cljs.core.chunk_first(seq__23143_23448__$1);
var G__23450 = cljs.core.chunk_rest(seq__23143_23448__$1);
var G__23451 = c__5525__auto___23449;
var G__23452 = cljs.core.count(c__5525__auto___23449);
var G__23453 = (0);
seq__23143_23397 = G__23450;
chunk__23147_23398 = G__23451;
count__23148_23399 = G__23452;
i__23149_23400 = G__23453;
continue;
} else {
var node_23454 = cljs.core.first(seq__23143_23448__$1);
if(cljs.core.not(node_23454.shadow$old)){
var path_match_23455 = shadow.cljs.devtools.client.browser.match_paths(node_23454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23455)){
var new_link_23456 = (function (){var G__23186 = node_23454.cloneNode(true);
G__23186.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__23186;
})();
(node_23454.shadow$old = true);

(new_link_23456.onload = ((function (seq__23143_23397,chunk__23147_23398,count__23148_23399,i__23149_23400,seq__22933,chunk__22935,count__22936,i__22937,new_link_23456,path_match_23455,node_23454,seq__23143_23448__$1,temp__5804__auto___23447__$1,path,seq__22933__$1,temp__5804__auto__,map__22932,map__22932__$1,msg,updates,reload_info){
return (function (e){
var seq__23187_23457 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23189_23458 = null;
var count__23190_23459 = (0);
var i__23191_23460 = (0);
while(true){
if((i__23191_23460 < count__23190_23459)){
var map__23195_23461 = chunk__23189_23458.cljs$core$IIndexed$_nth$arity$2(null, i__23191_23460);
var map__23195_23462__$1 = cljs.core.__destructure_map(map__23195_23461);
var task_23463 = map__23195_23462__$1;
var fn_str_23464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23195_23462__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23195_23462__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23466 = goog.getObjectByName(fn_str_23464,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23465)].join(''));

(fn_obj_23466.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23466.cljs$core$IFn$_invoke$arity$2(path,new_link_23456) : fn_obj_23466.call(null, path,new_link_23456));


var G__23467 = seq__23187_23457;
var G__23468 = chunk__23189_23458;
var G__23469 = count__23190_23459;
var G__23470 = (i__23191_23460 + (1));
seq__23187_23457 = G__23467;
chunk__23189_23458 = G__23468;
count__23190_23459 = G__23469;
i__23191_23460 = G__23470;
continue;
} else {
var temp__5804__auto___23471__$2 = cljs.core.seq(seq__23187_23457);
if(temp__5804__auto___23471__$2){
var seq__23187_23472__$1 = temp__5804__auto___23471__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23187_23472__$1)){
var c__5525__auto___23473 = cljs.core.chunk_first(seq__23187_23472__$1);
var G__23474 = cljs.core.chunk_rest(seq__23187_23472__$1);
var G__23475 = c__5525__auto___23473;
var G__23476 = cljs.core.count(c__5525__auto___23473);
var G__23477 = (0);
seq__23187_23457 = G__23474;
chunk__23189_23458 = G__23475;
count__23190_23459 = G__23476;
i__23191_23460 = G__23477;
continue;
} else {
var map__23196_23478 = cljs.core.first(seq__23187_23472__$1);
var map__23196_23479__$1 = cljs.core.__destructure_map(map__23196_23478);
var task_23480 = map__23196_23479__$1;
var fn_str_23481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23196_23479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23196_23479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23483 = goog.getObjectByName(fn_str_23481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23482)].join(''));

(fn_obj_23483.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23483.cljs$core$IFn$_invoke$arity$2(path,new_link_23456) : fn_obj_23483.call(null, path,new_link_23456));


var G__23484 = cljs.core.next(seq__23187_23472__$1);
var G__23485 = null;
var G__23486 = (0);
var G__23487 = (0);
seq__23187_23457 = G__23484;
chunk__23189_23458 = G__23485;
count__23190_23459 = G__23486;
i__23191_23460 = G__23487;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23454);
});})(seq__23143_23397,chunk__23147_23398,count__23148_23399,i__23149_23400,seq__22933,chunk__22935,count__22936,i__22937,new_link_23456,path_match_23455,node_23454,seq__23143_23448__$1,temp__5804__auto___23447__$1,path,seq__22933__$1,temp__5804__auto__,map__22932,map__22932__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23455], 0));

goog.dom.insertSiblingAfter(new_link_23456,node_23454);


var G__23488 = cljs.core.next(seq__23143_23448__$1);
var G__23489 = null;
var G__23490 = (0);
var G__23491 = (0);
seq__23143_23397 = G__23488;
chunk__23147_23398 = G__23489;
count__23148_23399 = G__23490;
i__23149_23400 = G__23491;
continue;
} else {
var G__23492 = cljs.core.next(seq__23143_23448__$1);
var G__23493 = null;
var G__23494 = (0);
var G__23495 = (0);
seq__23143_23397 = G__23492;
chunk__23147_23398 = G__23493;
count__23148_23399 = G__23494;
i__23149_23400 = G__23495;
continue;
}
} else {
var G__23496 = cljs.core.next(seq__23143_23448__$1);
var G__23497 = null;
var G__23498 = (0);
var G__23499 = (0);
seq__23143_23397 = G__23496;
chunk__23147_23398 = G__23497;
count__23148_23399 = G__23498;
i__23149_23400 = G__23499;
continue;
}
}
} else {
}
}
break;
}


var G__23500 = cljs.core.next(seq__22933__$1);
var G__23501 = null;
var G__23502 = (0);
var G__23503 = (0);
seq__22933 = G__23500;
chunk__22935 = G__23501;
count__22936 = G__23502;
i__22937 = G__23503;
continue;
} else {
var G__23504 = cljs.core.next(seq__22933__$1);
var G__23505 = null;
var G__23506 = (0);
var G__23507 = (0);
seq__22933 = G__23504;
chunk__22935 = G__23505;
count__22936 = G__23506;
i__22937 = G__23507;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__23197){
var map__23198 = p__23197;
var map__23198__$1 = cljs.core.__destructure_map(map__23198);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23199,done,error){
var map__23200 = p__23199;
var map__23200__$1 = cljs.core.__destructure_map(map__23200);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23200__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23201,done,error){
var map__23202 = p__23201;
var map__23202__$1 = cljs.core.__destructure_map(map__23202);
var msg = map__23202__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23203){
var map__23204 = p__23203;
var map__23204__$1 = cljs.core.__destructure_map(map__23204);
var src = map__23204__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23204__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23205 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23205) : done.call(null, G__23205));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23206){
var map__23207 = p__23206;
var map__23207__$1 = cljs.core.__destructure_map(map__23207);
var msg__$1 = map__23207__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23207__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e23208){var ex = e23208;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23209){
var map__23210 = p__23209;
var map__23210__$1 = cljs.core.__destructure_map(map__23210);
var env = map__23210__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23211){
var map__23212 = p__23211;
var map__23212__$1 = cljs.core.__destructure_map(map__23212);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23212__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23213){
var map__23214 = p__23213;
var map__23214__$1 = cljs.core.__destructure_map(map__23214);
var svc = map__23214__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23214__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
