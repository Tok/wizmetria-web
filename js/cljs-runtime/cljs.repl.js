goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18633){
var map__18634 = p__18633;
var map__18634__$1 = cljs.core.__destructure_map(map__18634);
var m = map__18634__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18634__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18634__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18641_19129 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18642_19130 = null;
var count__18643_19131 = (0);
var i__18644_19132 = (0);
while(true){
if((i__18644_19132 < count__18643_19131)){
var f_19133 = chunk__18642_19130.cljs$core$IIndexed$_nth$arity$2(null, i__18644_19132);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19133], 0));


var G__19134 = seq__18641_19129;
var G__19135 = chunk__18642_19130;
var G__19136 = count__18643_19131;
var G__19137 = (i__18644_19132 + (1));
seq__18641_19129 = G__19134;
chunk__18642_19130 = G__19135;
count__18643_19131 = G__19136;
i__18644_19132 = G__19137;
continue;
} else {
var temp__5804__auto___19139 = cljs.core.seq(seq__18641_19129);
if(temp__5804__auto___19139){
var seq__18641_19140__$1 = temp__5804__auto___19139;
if(cljs.core.chunked_seq_QMARK_(seq__18641_19140__$1)){
var c__5525__auto___19141 = cljs.core.chunk_first(seq__18641_19140__$1);
var G__19142 = cljs.core.chunk_rest(seq__18641_19140__$1);
var G__19143 = c__5525__auto___19141;
var G__19144 = cljs.core.count(c__5525__auto___19141);
var G__19145 = (0);
seq__18641_19129 = G__19142;
chunk__18642_19130 = G__19143;
count__18643_19131 = G__19144;
i__18644_19132 = G__19145;
continue;
} else {
var f_19146 = cljs.core.first(seq__18641_19140__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19146], 0));


var G__19147 = cljs.core.next(seq__18641_19140__$1);
var G__19148 = null;
var G__19149 = (0);
var G__19150 = (0);
seq__18641_19129 = G__19147;
chunk__18642_19130 = G__19148;
count__18643_19131 = G__19149;
i__18644_19132 = G__19150;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19151 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19151], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19151)))?cljs.core.second(arglists_19151):arglists_19151)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18718_19168 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18719_19169 = null;
var count__18720_19170 = (0);
var i__18721_19171 = (0);
while(true){
if((i__18721_19171 < count__18720_19170)){
var vec__18750_19173 = chunk__18719_19169.cljs$core$IIndexed$_nth$arity$2(null, i__18721_19171);
var name_19174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18750_19173,(0),null);
var map__18753_19175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18750_19173,(1),null);
var map__18753_19176__$1 = cljs.core.__destructure_map(map__18753_19175);
var doc_19177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753_19176__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18753_19176__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19174], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19178], 0));

if(cljs.core.truth_(doc_19177)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19177], 0));
} else {
}


var G__19195 = seq__18718_19168;
var G__19196 = chunk__18719_19169;
var G__19197 = count__18720_19170;
var G__19198 = (i__18721_19171 + (1));
seq__18718_19168 = G__19195;
chunk__18719_19169 = G__19196;
count__18720_19170 = G__19197;
i__18721_19171 = G__19198;
continue;
} else {
var temp__5804__auto___19205 = cljs.core.seq(seq__18718_19168);
if(temp__5804__auto___19205){
var seq__18718_19209__$1 = temp__5804__auto___19205;
if(cljs.core.chunked_seq_QMARK_(seq__18718_19209__$1)){
var c__5525__auto___19213 = cljs.core.chunk_first(seq__18718_19209__$1);
var G__19215 = cljs.core.chunk_rest(seq__18718_19209__$1);
var G__19216 = c__5525__auto___19213;
var G__19217 = cljs.core.count(c__5525__auto___19213);
var G__19218 = (0);
seq__18718_19168 = G__19215;
chunk__18719_19169 = G__19216;
count__18720_19170 = G__19217;
i__18721_19171 = G__19218;
continue;
} else {
var vec__18765_19219 = cljs.core.first(seq__18718_19209__$1);
var name_19220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18765_19219,(0),null);
var map__18768_19221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18765_19219,(1),null);
var map__18768_19222__$1 = cljs.core.__destructure_map(map__18768_19221);
var doc_19223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18768_19222__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18768_19222__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19220], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19224], 0));

if(cljs.core.truth_(doc_19223)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19223], 0));
} else {
}


var G__19227 = cljs.core.next(seq__18718_19209__$1);
var G__19228 = null;
var G__19229 = (0);
var G__19230 = (0);
seq__18718_19168 = G__19227;
chunk__18719_19169 = G__19228;
count__18720_19170 = G__19229;
i__18721_19171 = G__19230;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18774 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18775 = null;
var count__18776 = (0);
var i__18777 = (0);
while(true){
if((i__18777 < count__18776)){
var role = chunk__18775.cljs$core$IIndexed$_nth$arity$2(null, i__18777);
var temp__5804__auto___19231__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19231__$1)){
var spec_19232 = temp__5804__auto___19231__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19232)], 0));
} else {
}


var G__19234 = seq__18774;
var G__19235 = chunk__18775;
var G__19236 = count__18776;
var G__19237 = (i__18777 + (1));
seq__18774 = G__19234;
chunk__18775 = G__19235;
count__18776 = G__19236;
i__18777 = G__19237;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18774);
if(temp__5804__auto____$1){
var seq__18774__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18774__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18774__$1);
var G__19238 = cljs.core.chunk_rest(seq__18774__$1);
var G__19239 = c__5525__auto__;
var G__19240 = cljs.core.count(c__5525__auto__);
var G__19241 = (0);
seq__18774 = G__19238;
chunk__18775 = G__19239;
count__18776 = G__19240;
i__18777 = G__19241;
continue;
} else {
var role = cljs.core.first(seq__18774__$1);
var temp__5804__auto___19243__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19243__$2)){
var spec_19244 = temp__5804__auto___19243__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19244)], 0));
} else {
}


var G__19246 = cljs.core.next(seq__18774__$1);
var G__19247 = null;
var G__19248 = (0);
var G__19249 = (0);
seq__18774 = G__19246;
chunk__18775 = G__19247;
count__18776 = G__19248;
i__18777 = G__19249;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18867 = datafied_throwable;
var map__18867__$1 = cljs.core.__destructure_map(map__18867);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18867__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18867__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18867__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18872 = cljs.core.last(via);
var map__18872__$1 = cljs.core.__destructure_map(map__18872);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18872__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18873 = data;
var map__18873__$1 = cljs.core.__destructure_map(map__18873);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18873__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18873__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18873__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18874 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18874__$1 = cljs.core.__destructure_map(map__18874);
var top_data = map__18874__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18874__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18900 = phase;
var G__18900__$1 = (((G__18900 instanceof cljs.core.Keyword))?G__18900.fqn:null);
switch (G__18900__$1) {
case "read-source":
var map__18910 = data;
var map__18910__$1 = cljs.core.__destructure_map(map__18910);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18910__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18910__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18912 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18912__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18912,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18912);
var G__18912__$2 = (cljs.core.truth_((function (){var fexpr__18919 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18919.cljs$core$IFn$_invoke$arity$1 ? fexpr__18919.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18919.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18912__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18912__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18912__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18912__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18921 = top_data;
var G__18921__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18921,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18921);
var G__18921__$2 = (cljs.core.truth_((function (){var fexpr__18923 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18923.cljs$core$IFn$_invoke$arity$1 ? fexpr__18923.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18923.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18921__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18921__$1);
var G__18921__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18921__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18921__$2);
var G__18921__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18921__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18921__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18921__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18921__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18931 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18931,(3),null);
var G__18941 = top_data;
var G__18941__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18941,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18941);
var G__18941__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18941__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18941__$1);
var G__18941__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18941__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18941__$2);
var G__18941__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18941__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18941__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18941__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18941__$4;
}

break;
case "execution":
var vec__18946 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18946,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18857_SHARP_){
var or__5002__auto__ = (p1__18857_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18953.cljs$core$IFn$_invoke$arity$1 ? fexpr__18953.cljs$core$IFn$_invoke$arity$1(p1__18857_SHARP_) : fexpr__18953.call(null, p1__18857_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18957 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18957__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18957,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18957);
var G__18957__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18957__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18957__$1);
var G__18957__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18957__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18957__$2);
var G__18957__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18957__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18957__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18957__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18957__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18900__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18991){
var map__18992 = p__18991;
var map__18992__$1 = cljs.core.__destructure_map(map__18992);
var triage_data = map__18992__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19016 = phase;
var G__19016__$1 = (((G__19016 instanceof cljs.core.Keyword))?G__19016.fqn:null);
switch (G__19016__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19018 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19019 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19020 = loc;
var G__19021 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19024_19308 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19025_19309 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19026_19310 = true;
var _STAR_print_fn_STAR__temp_val__19027_19311 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19026_19310);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19027_19311);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18969_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18969_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19025_19309);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19024_19308);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19018,G__19019,G__19020,G__19021) : format.call(null, G__19018,G__19019,G__19020,G__19021));

break;
case "macroexpansion":
var G__19043 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19044 = cause_type;
var G__19045 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19046 = loc;
var G__19047 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19043,G__19044,G__19045,G__19046,G__19047) : format.call(null, G__19043,G__19044,G__19045,G__19046,G__19047));

break;
case "compile-syntax-check":
var G__19049 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19050 = cause_type;
var G__19051 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19052 = loc;
var G__19053 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19049,G__19050,G__19051,G__19052,G__19053) : format.call(null, G__19049,G__19050,G__19051,G__19052,G__19053));

break;
case "compilation":
var G__19061 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19062 = cause_type;
var G__19063 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19064 = loc;
var G__19065 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19061,G__19062,G__19063,G__19064,G__19065) : format.call(null, G__19061,G__19062,G__19063,G__19064,G__19065));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19068 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19069 = symbol;
var G__19070 = loc;
var G__19071 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19073_19318 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19074_19319 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19075_19320 = true;
var _STAR_print_fn_STAR__temp_val__19076_19321 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19075_19320);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19076_19321);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18985_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18985_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19074_19319);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19073_19318);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19068,G__19069,G__19070,G__19071) : format.call(null, G__19068,G__19069,G__19070,G__19071));
} else {
var G__19094 = "Execution error%s at %s(%s).\n%s\n";
var G__19095 = cause_type;
var G__19096 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19097 = loc;
var G__19098 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19094,G__19095,G__19096,G__19097,G__19098) : format.call(null, G__19094,G__19095,G__19096,G__19097,G__19098));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19016__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
