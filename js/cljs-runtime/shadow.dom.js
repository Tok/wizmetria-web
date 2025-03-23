goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15846 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15846(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15847 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15847(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13960 = coll;
var G__13961 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13960,G__13961) : shadow.dom.lazy_native_coll_seq.call(null, G__13960,G__13961));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14020 = arguments.length;
switch (G__14020) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14033 = arguments.length;
switch (G__14033) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14036 = arguments.length;
switch (G__14036) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14050 = arguments.length;
switch (G__14050) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14080 = arguments.length;
switch (G__14080) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14109 = arguments.length;
switch (G__14109) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e14141){if((e14141 instanceof Object)){
var e = e14141;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14141;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14162 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14163 = null;
var count__14164 = (0);
var i__14165 = (0);
while(true){
if((i__14165 < count__14164)){
var el = chunk__14163.cljs$core$IIndexed$_nth$arity$2(null, i__14165);
var handler_15884__$1 = ((function (seq__14162,chunk__14163,count__14164,i__14165,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14162,chunk__14163,count__14164,i__14165,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15884__$1);


var G__15887 = seq__14162;
var G__15888 = chunk__14163;
var G__15889 = count__14164;
var G__15890 = (i__14165 + (1));
seq__14162 = G__15887;
chunk__14163 = G__15888;
count__14164 = G__15889;
i__14165 = G__15890;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14162);
if(temp__5804__auto__){
var seq__14162__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14162__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14162__$1);
var G__15892 = cljs.core.chunk_rest(seq__14162__$1);
var G__15893 = c__5525__auto__;
var G__15894 = cljs.core.count(c__5525__auto__);
var G__15895 = (0);
seq__14162 = G__15892;
chunk__14163 = G__15893;
count__14164 = G__15894;
i__14165 = G__15895;
continue;
} else {
var el = cljs.core.first(seq__14162__$1);
var handler_15896__$1 = ((function (seq__14162,chunk__14163,count__14164,i__14165,el,seq__14162__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__14162,chunk__14163,count__14164,i__14165,el,seq__14162__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15896__$1);


var G__15897 = cljs.core.next(seq__14162__$1);
var G__15898 = null;
var G__15899 = (0);
var G__15900 = (0);
seq__14162 = G__15897;
chunk__14163 = G__15898;
count__14164 = G__15899;
i__14165 = G__15900;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14235 = arguments.length;
switch (G__14235) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14257 = cljs.core.seq(events);
var chunk__14258 = null;
var count__14259 = (0);
var i__14260 = (0);
while(true){
if((i__14260 < count__14259)){
var vec__14276 = chunk__14258.cljs$core$IIndexed$_nth$arity$2(null, i__14260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14276,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15915 = seq__14257;
var G__15916 = chunk__14258;
var G__15917 = count__14259;
var G__15918 = (i__14260 + (1));
seq__14257 = G__15915;
chunk__14258 = G__15916;
count__14259 = G__15917;
i__14260 = G__15918;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14257);
if(temp__5804__auto__){
var seq__14257__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14257__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14257__$1);
var G__15922 = cljs.core.chunk_rest(seq__14257__$1);
var G__15923 = c__5525__auto__;
var G__15924 = cljs.core.count(c__5525__auto__);
var G__15925 = (0);
seq__14257 = G__15922;
chunk__14258 = G__15923;
count__14259 = G__15924;
i__14260 = G__15925;
continue;
} else {
var vec__14288 = cljs.core.first(seq__14257__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14288,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15929 = cljs.core.next(seq__14257__$1);
var G__15930 = null;
var G__15931 = (0);
var G__15932 = (0);
seq__14257 = G__15929;
chunk__14258 = G__15930;
count__14259 = G__15931;
i__14260 = G__15932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14302 = cljs.core.seq(styles);
var chunk__14303 = null;
var count__14304 = (0);
var i__14305 = (0);
while(true){
if((i__14305 < count__14304)){
var vec__14348 = chunk__14303.cljs$core$IIndexed$_nth$arity$2(null, i__14305);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14348,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15946 = seq__14302;
var G__15947 = chunk__14303;
var G__15949 = count__14304;
var G__15950 = (i__14305 + (1));
seq__14302 = G__15946;
chunk__14303 = G__15947;
count__14304 = G__15949;
i__14305 = G__15950;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14302);
if(temp__5804__auto__){
var seq__14302__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14302__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14302__$1);
var G__15958 = cljs.core.chunk_rest(seq__14302__$1);
var G__15959 = c__5525__auto__;
var G__15960 = cljs.core.count(c__5525__auto__);
var G__15961 = (0);
seq__14302 = G__15958;
chunk__14303 = G__15959;
count__14304 = G__15960;
i__14305 = G__15961;
continue;
} else {
var vec__14359 = cljs.core.first(seq__14302__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14359,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15971 = cljs.core.next(seq__14302__$1);
var G__15972 = null;
var G__15973 = (0);
var G__15974 = (0);
seq__14302 = G__15971;
chunk__14303 = G__15972;
count__14304 = G__15973;
i__14305 = G__15974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14367_15975 = key;
var G__14367_15976__$1 = (((G__14367_15975 instanceof cljs.core.Keyword))?G__14367_15975.fqn:null);
switch (G__14367_15976__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15980 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15980,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15980,"aria-");
}
})())){
el.setAttribute(ks_15980,value);
} else {
(el[ks_15980] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14517){
var map__14519 = p__14517;
var map__14519__$1 = cljs.core.__destructure_map(map__14519);
var props = map__14519__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14519__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14527 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14527,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14541 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14541,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14541;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14546 = arguments.length;
switch (G__14546) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14558){
var vec__14559 = p__14558;
var seq__14560 = cljs.core.seq(vec__14559);
var first__14561 = cljs.core.first(seq__14560);
var seq__14560__$1 = cljs.core.next(seq__14560);
var nn = first__14561;
var first__14561__$1 = cljs.core.first(seq__14560__$1);
var seq__14560__$2 = cljs.core.next(seq__14560__$1);
var np = first__14561__$1;
var nc = seq__14560__$2;
var node = vec__14559;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14566 = nn;
var G__14567 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14566,G__14567) : create_fn.call(null, G__14566,G__14567));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14568 = nn;
var G__14569 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14568,G__14569) : create_fn.call(null, G__14568,G__14569));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14575 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14575,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14575,(1),null);
var seq__14578_16011 = cljs.core.seq(node_children);
var chunk__14579_16012 = null;
var count__14580_16013 = (0);
var i__14581_16014 = (0);
while(true){
if((i__14581_16014 < count__14580_16013)){
var child_struct_16015 = chunk__14579_16012.cljs$core$IIndexed$_nth$arity$2(null, i__14581_16014);
var children_16016 = shadow.dom.dom_node(child_struct_16015);
if(cljs.core.seq_QMARK_(children_16016)){
var seq__14637_16017 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16016));
var chunk__14639_16018 = null;
var count__14640_16019 = (0);
var i__14641_16020 = (0);
while(true){
if((i__14641_16020 < count__14640_16019)){
var child_16022 = chunk__14639_16018.cljs$core$IIndexed$_nth$arity$2(null, i__14641_16020);
if(cljs.core.truth_(child_16022)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16022);


var G__16023 = seq__14637_16017;
var G__16024 = chunk__14639_16018;
var G__16025 = count__14640_16019;
var G__16026 = (i__14641_16020 + (1));
seq__14637_16017 = G__16023;
chunk__14639_16018 = G__16024;
count__14640_16019 = G__16025;
i__14641_16020 = G__16026;
continue;
} else {
var G__16028 = seq__14637_16017;
var G__16029 = chunk__14639_16018;
var G__16030 = count__14640_16019;
var G__16031 = (i__14641_16020 + (1));
seq__14637_16017 = G__16028;
chunk__14639_16018 = G__16029;
count__14640_16019 = G__16030;
i__14641_16020 = G__16031;
continue;
}
} else {
var temp__5804__auto___16033 = cljs.core.seq(seq__14637_16017);
if(temp__5804__auto___16033){
var seq__14637_16035__$1 = temp__5804__auto___16033;
if(cljs.core.chunked_seq_QMARK_(seq__14637_16035__$1)){
var c__5525__auto___16036 = cljs.core.chunk_first(seq__14637_16035__$1);
var G__16038 = cljs.core.chunk_rest(seq__14637_16035__$1);
var G__16039 = c__5525__auto___16036;
var G__16040 = cljs.core.count(c__5525__auto___16036);
var G__16041 = (0);
seq__14637_16017 = G__16038;
chunk__14639_16018 = G__16039;
count__14640_16019 = G__16040;
i__14641_16020 = G__16041;
continue;
} else {
var child_16043 = cljs.core.first(seq__14637_16035__$1);
if(cljs.core.truth_(child_16043)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16043);


var G__16044 = cljs.core.next(seq__14637_16035__$1);
var G__16045 = null;
var G__16046 = (0);
var G__16047 = (0);
seq__14637_16017 = G__16044;
chunk__14639_16018 = G__16045;
count__14640_16019 = G__16046;
i__14641_16020 = G__16047;
continue;
} else {
var G__16048 = cljs.core.next(seq__14637_16035__$1);
var G__16049 = null;
var G__16050 = (0);
var G__16051 = (0);
seq__14637_16017 = G__16048;
chunk__14639_16018 = G__16049;
count__14640_16019 = G__16050;
i__14641_16020 = G__16051;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16016);
}


var G__16053 = seq__14578_16011;
var G__16054 = chunk__14579_16012;
var G__16055 = count__14580_16013;
var G__16056 = (i__14581_16014 + (1));
seq__14578_16011 = G__16053;
chunk__14579_16012 = G__16054;
count__14580_16013 = G__16055;
i__14581_16014 = G__16056;
continue;
} else {
var temp__5804__auto___16057 = cljs.core.seq(seq__14578_16011);
if(temp__5804__auto___16057){
var seq__14578_16058__$1 = temp__5804__auto___16057;
if(cljs.core.chunked_seq_QMARK_(seq__14578_16058__$1)){
var c__5525__auto___16059 = cljs.core.chunk_first(seq__14578_16058__$1);
var G__16061 = cljs.core.chunk_rest(seq__14578_16058__$1);
var G__16062 = c__5525__auto___16059;
var G__16063 = cljs.core.count(c__5525__auto___16059);
var G__16064 = (0);
seq__14578_16011 = G__16061;
chunk__14579_16012 = G__16062;
count__14580_16013 = G__16063;
i__14581_16014 = G__16064;
continue;
} else {
var child_struct_16065 = cljs.core.first(seq__14578_16058__$1);
var children_16067 = shadow.dom.dom_node(child_struct_16065);
if(cljs.core.seq_QMARK_(children_16067)){
var seq__14667_16068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16067));
var chunk__14669_16069 = null;
var count__14670_16070 = (0);
var i__14671_16071 = (0);
while(true){
if((i__14671_16071 < count__14670_16070)){
var child_16072 = chunk__14669_16069.cljs$core$IIndexed$_nth$arity$2(null, i__14671_16071);
if(cljs.core.truth_(child_16072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16072);


var G__16075 = seq__14667_16068;
var G__16076 = chunk__14669_16069;
var G__16077 = count__14670_16070;
var G__16078 = (i__14671_16071 + (1));
seq__14667_16068 = G__16075;
chunk__14669_16069 = G__16076;
count__14670_16070 = G__16077;
i__14671_16071 = G__16078;
continue;
} else {
var G__16082 = seq__14667_16068;
var G__16083 = chunk__14669_16069;
var G__16084 = count__14670_16070;
var G__16085 = (i__14671_16071 + (1));
seq__14667_16068 = G__16082;
chunk__14669_16069 = G__16083;
count__14670_16070 = G__16084;
i__14671_16071 = G__16085;
continue;
}
} else {
var temp__5804__auto___16086__$1 = cljs.core.seq(seq__14667_16068);
if(temp__5804__auto___16086__$1){
var seq__14667_16088__$1 = temp__5804__auto___16086__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14667_16088__$1)){
var c__5525__auto___16090 = cljs.core.chunk_first(seq__14667_16088__$1);
var G__16091 = cljs.core.chunk_rest(seq__14667_16088__$1);
var G__16092 = c__5525__auto___16090;
var G__16093 = cljs.core.count(c__5525__auto___16090);
var G__16094 = (0);
seq__14667_16068 = G__16091;
chunk__14669_16069 = G__16092;
count__14670_16070 = G__16093;
i__14671_16071 = G__16094;
continue;
} else {
var child_16095 = cljs.core.first(seq__14667_16088__$1);
if(cljs.core.truth_(child_16095)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16095);


var G__16097 = cljs.core.next(seq__14667_16088__$1);
var G__16098 = null;
var G__16099 = (0);
var G__16100 = (0);
seq__14667_16068 = G__16097;
chunk__14669_16069 = G__16098;
count__14670_16070 = G__16099;
i__14671_16071 = G__16100;
continue;
} else {
var G__16101 = cljs.core.next(seq__14667_16088__$1);
var G__16102 = null;
var G__16103 = (0);
var G__16104 = (0);
seq__14667_16068 = G__16101;
chunk__14669_16069 = G__16102;
count__14670_16070 = G__16103;
i__14671_16071 = G__16104;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16067);
}


var G__16105 = cljs.core.next(seq__14578_16058__$1);
var G__16106 = null;
var G__16107 = (0);
var G__16108 = (0);
seq__14578_16011 = G__16105;
chunk__14579_16012 = G__16106;
count__14580_16013 = G__16107;
i__14581_16014 = G__16108;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14720 = cljs.core.seq(node);
var chunk__14722 = null;
var count__14723 = (0);
var i__14724 = (0);
while(true){
if((i__14724 < count__14723)){
var n = chunk__14722.cljs$core$IIndexed$_nth$arity$2(null, i__14724);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16114 = seq__14720;
var G__16115 = chunk__14722;
var G__16116 = count__14723;
var G__16117 = (i__14724 + (1));
seq__14720 = G__16114;
chunk__14722 = G__16115;
count__14723 = G__16116;
i__14724 = G__16117;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14720);
if(temp__5804__auto__){
var seq__14720__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14720__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14720__$1);
var G__16119 = cljs.core.chunk_rest(seq__14720__$1);
var G__16120 = c__5525__auto__;
var G__16121 = cljs.core.count(c__5525__auto__);
var G__16122 = (0);
seq__14720 = G__16119;
chunk__14722 = G__16120;
count__14723 = G__16121;
i__14724 = G__16122;
continue;
} else {
var n = cljs.core.first(seq__14720__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16124 = cljs.core.next(seq__14720__$1);
var G__16125 = null;
var G__16126 = (0);
var G__16127 = (0);
seq__14720 = G__16124;
chunk__14722 = G__16125;
count__14723 = G__16126;
i__14724 = G__16127;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14755 = arguments.length;
switch (G__14755) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14767 = arguments.length;
switch (G__14767) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14788 = arguments.length;
switch (G__14788) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16148 = arguments.length;
var i__5727__auto___16149 = (0);
while(true){
if((i__5727__auto___16149 < len__5726__auto___16148)){
args__5732__auto__.push((arguments[i__5727__auto___16149]));

var G__16150 = (i__5727__auto___16149 + (1));
i__5727__auto___16149 = G__16150;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14869_16165 = cljs.core.seq(nodes);
var chunk__14870_16166 = null;
var count__14871_16167 = (0);
var i__14872_16168 = (0);
while(true){
if((i__14872_16168 < count__14871_16167)){
var node_16170 = chunk__14870_16166.cljs$core$IIndexed$_nth$arity$2(null, i__14872_16168);
fragment.appendChild(shadow.dom._to_dom(node_16170));


var G__16171 = seq__14869_16165;
var G__16172 = chunk__14870_16166;
var G__16173 = count__14871_16167;
var G__16174 = (i__14872_16168 + (1));
seq__14869_16165 = G__16171;
chunk__14870_16166 = G__16172;
count__14871_16167 = G__16173;
i__14872_16168 = G__16174;
continue;
} else {
var temp__5804__auto___16175 = cljs.core.seq(seq__14869_16165);
if(temp__5804__auto___16175){
var seq__14869_16176__$1 = temp__5804__auto___16175;
if(cljs.core.chunked_seq_QMARK_(seq__14869_16176__$1)){
var c__5525__auto___16183 = cljs.core.chunk_first(seq__14869_16176__$1);
var G__16184 = cljs.core.chunk_rest(seq__14869_16176__$1);
var G__16185 = c__5525__auto___16183;
var G__16186 = cljs.core.count(c__5525__auto___16183);
var G__16187 = (0);
seq__14869_16165 = G__16184;
chunk__14870_16166 = G__16185;
count__14871_16167 = G__16186;
i__14872_16168 = G__16187;
continue;
} else {
var node_16188 = cljs.core.first(seq__14869_16176__$1);
fragment.appendChild(shadow.dom._to_dom(node_16188));


var G__16189 = cljs.core.next(seq__14869_16176__$1);
var G__16190 = null;
var G__16191 = (0);
var G__16192 = (0);
seq__14869_16165 = G__16189;
chunk__14870_16166 = G__16190;
count__14871_16167 = G__16191;
i__14872_16168 = G__16192;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14850){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14850));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14942_16195 = cljs.core.seq(scripts);
var chunk__14943_16196 = null;
var count__14944_16197 = (0);
var i__14945_16198 = (0);
while(true){
if((i__14945_16198 < count__14944_16197)){
var vec__14981_16199 = chunk__14943_16196.cljs$core$IIndexed$_nth$arity$2(null, i__14945_16198);
var script_tag_16200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981_16199,(0),null);
var script_body_16202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981_16199,(1),null);
eval(script_body_16202);


var G__16203 = seq__14942_16195;
var G__16204 = chunk__14943_16196;
var G__16205 = count__14944_16197;
var G__16206 = (i__14945_16198 + (1));
seq__14942_16195 = G__16203;
chunk__14943_16196 = G__16204;
count__14944_16197 = G__16205;
i__14945_16198 = G__16206;
continue;
} else {
var temp__5804__auto___16207 = cljs.core.seq(seq__14942_16195);
if(temp__5804__auto___16207){
var seq__14942_16212__$1 = temp__5804__auto___16207;
if(cljs.core.chunked_seq_QMARK_(seq__14942_16212__$1)){
var c__5525__auto___16213 = cljs.core.chunk_first(seq__14942_16212__$1);
var G__16217 = cljs.core.chunk_rest(seq__14942_16212__$1);
var G__16218 = c__5525__auto___16213;
var G__16219 = cljs.core.count(c__5525__auto___16213);
var G__16220 = (0);
seq__14942_16195 = G__16217;
chunk__14943_16196 = G__16218;
count__14944_16197 = G__16219;
i__14945_16198 = G__16220;
continue;
} else {
var vec__14990_16221 = cljs.core.first(seq__14942_16212__$1);
var script_tag_16222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14990_16221,(0),null);
var script_body_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14990_16221,(1),null);
eval(script_body_16223);


var G__16224 = cljs.core.next(seq__14942_16212__$1);
var G__16225 = null;
var G__16226 = (0);
var G__16227 = (0);
seq__14942_16195 = G__16224;
chunk__14943_16196 = G__16225;
count__14944_16197 = G__16226;
i__14945_16198 = G__16227;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15002){
var vec__15005 = p__15002;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15049 = arguments.length;
switch (G__15049) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15095 = cljs.core.seq(style_keys);
var chunk__15096 = null;
var count__15097 = (0);
var i__15098 = (0);
while(true){
if((i__15098 < count__15097)){
var it = chunk__15096.cljs$core$IIndexed$_nth$arity$2(null, i__15098);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16239 = seq__15095;
var G__16240 = chunk__15096;
var G__16241 = count__15097;
var G__16242 = (i__15098 + (1));
seq__15095 = G__16239;
chunk__15096 = G__16240;
count__15097 = G__16241;
i__15098 = G__16242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15095);
if(temp__5804__auto__){
var seq__15095__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15095__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15095__$1);
var G__16245 = cljs.core.chunk_rest(seq__15095__$1);
var G__16246 = c__5525__auto__;
var G__16247 = cljs.core.count(c__5525__auto__);
var G__16248 = (0);
seq__15095 = G__16245;
chunk__15096 = G__16246;
count__15097 = G__16247;
i__15098 = G__16248;
continue;
} else {
var it = cljs.core.first(seq__15095__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16249 = cljs.core.next(seq__15095__$1);
var G__16250 = null;
var G__16251 = (0);
var G__16252 = (0);
seq__15095 = G__16249;
chunk__15096 = G__16250;
count__15097 = G__16251;
i__15098 = G__16252;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15123,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15143 = k15123;
var G__15143__$1 = (((G__15143 instanceof cljs.core.Keyword))?G__15143.fqn:null);
switch (G__15143__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15123,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15151){
var vec__15153 = p__15151;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15153,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15122){
var self__ = this;
var G__15122__$1 = this;
return (new cljs.core.RecordIter((0),G__15122__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15124,other15125){
var self__ = this;
var this15124__$1 = this;
return (((!((other15125 == null)))) && ((((this15124__$1.constructor === other15125.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15124__$1.x,other15125.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15124__$1.y,other15125.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15124__$1.__extmap,other15125.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15123){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15219 = k15123;
var G__15219__$1 = (((G__15219 instanceof cljs.core.Keyword))?G__15219.fqn:null);
switch (G__15219__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15123);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15122){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15228 = cljs.core.keyword_identical_QMARK_;
var expr__15229 = k__5309__auto__;
if(cljs.core.truth_((pred__15228.cljs$core$IFn$_invoke$arity$2 ? pred__15228.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15229) : pred__15228.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__15229)))){
return (new shadow.dom.Coordinate(G__15122,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15228.cljs$core$IFn$_invoke$arity$2 ? pred__15228.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15229) : pred__15228.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__15229)))){
return (new shadow.dom.Coordinate(self__.x,G__15122,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15122),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15122){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15122,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15130){
var extmap__5342__auto__ = (function (){var G__15273 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15130,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15130)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15273);
} else {
return G__15273;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15130),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15130),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15307,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15324 = k15307;
var G__15324__$1 = (((G__15324 instanceof cljs.core.Keyword))?G__15324.fqn:null);
switch (G__15324__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15307,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__15326){
var vec__15328 = p__15326;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15306){
var self__ = this;
var G__15306__$1 = this;
return (new cljs.core.RecordIter((0),G__15306__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15308,other15309){
var self__ = this;
var this15308__$1 = this;
return (((!((other15309 == null)))) && ((((this15308__$1.constructor === other15309.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15308__$1.w,other15309.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15308__$1.h,other15309.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15308__$1.__extmap,other15309.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15307){
var self__ = this;
var this__5307__auto____$1 = this;
var G__15380 = k15307;
var G__15380__$1 = (((G__15380 instanceof cljs.core.Keyword))?G__15380.fqn:null);
switch (G__15380__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15307);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15306){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__15386 = cljs.core.keyword_identical_QMARK_;
var expr__15387 = k__5309__auto__;
if(cljs.core.truth_((pred__15386.cljs$core$IFn$_invoke$arity$2 ? pred__15386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15387) : pred__15386.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__15387)))){
return (new shadow.dom.Size(G__15306,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15386.cljs$core$IFn$_invoke$arity$2 ? pred__15386.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15387) : pred__15386.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__15387)))){
return (new shadow.dom.Size(self__.w,G__15306,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15306),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15306){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15306,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15312){
var extmap__5342__auto__ = (function (){var G__15393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15312,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15312)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15393);
} else {
return G__15393;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15312),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15312),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16337 = (i + (1));
var G__16338 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16337;
ret = G__16338;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15424){
var vec__15425 = p__15424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15425,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15436 = arguments.length;
switch (G__15436) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16352 = ps;
var G__16353 = (i + (1));
el__$1 = G__16352;
i = G__16353;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15520 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15520,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15520,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15520,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15523_16358 = cljs.core.seq(props);
var chunk__15524_16359 = null;
var count__15525_16360 = (0);
var i__15526_16361 = (0);
while(true){
if((i__15526_16361 < count__15525_16360)){
var vec__15553_16363 = chunk__15524_16359.cljs$core$IIndexed$_nth$arity$2(null, i__15526_16361);
var k_16364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553_16363,(0),null);
var v_16365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15553_16363,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16364);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16364),v_16365);


var G__16368 = seq__15523_16358;
var G__16369 = chunk__15524_16359;
var G__16370 = count__15525_16360;
var G__16371 = (i__15526_16361 + (1));
seq__15523_16358 = G__16368;
chunk__15524_16359 = G__16369;
count__15525_16360 = G__16370;
i__15526_16361 = G__16371;
continue;
} else {
var temp__5804__auto___16372 = cljs.core.seq(seq__15523_16358);
if(temp__5804__auto___16372){
var seq__15523_16373__$1 = temp__5804__auto___16372;
if(cljs.core.chunked_seq_QMARK_(seq__15523_16373__$1)){
var c__5525__auto___16374 = cljs.core.chunk_first(seq__15523_16373__$1);
var G__16375 = cljs.core.chunk_rest(seq__15523_16373__$1);
var G__16376 = c__5525__auto___16374;
var G__16377 = cljs.core.count(c__5525__auto___16374);
var G__16378 = (0);
seq__15523_16358 = G__16375;
chunk__15524_16359 = G__16376;
count__15525_16360 = G__16377;
i__15526_16361 = G__16378;
continue;
} else {
var vec__15569_16380 = cljs.core.first(seq__15523_16373__$1);
var k_16381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569_16380,(0),null);
var v_16382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15569_16380,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16381);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16381),v_16382);


var G__16385 = cljs.core.next(seq__15523_16373__$1);
var G__16386 = null;
var G__16387 = (0);
var G__16388 = (0);
seq__15523_16358 = G__16385;
chunk__15524_16359 = G__16386;
count__15525_16360 = G__16387;
i__15526_16361 = G__16388;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15587 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(1),null);
var seq__15593_16390 = cljs.core.seq(node_children);
var chunk__15595_16391 = null;
var count__15596_16392 = (0);
var i__15597_16393 = (0);
while(true){
if((i__15597_16393 < count__15596_16392)){
var child_struct_16394 = chunk__15595_16391.cljs$core$IIndexed$_nth$arity$2(null, i__15597_16393);
if((!((child_struct_16394 == null)))){
if(typeof child_struct_16394 === 'string'){
var text_16396 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16396),child_struct_16394].join(''));
} else {
var children_16397 = shadow.dom.svg_node(child_struct_16394);
if(cljs.core.seq_QMARK_(children_16397)){
var seq__15701_16399 = cljs.core.seq(children_16397);
var chunk__15703_16400 = null;
var count__15704_16401 = (0);
var i__15705_16402 = (0);
while(true){
if((i__15705_16402 < count__15704_16401)){
var child_16407 = chunk__15703_16400.cljs$core$IIndexed$_nth$arity$2(null, i__15705_16402);
if(cljs.core.truth_(child_16407)){
node.appendChild(child_16407);


var G__16410 = seq__15701_16399;
var G__16411 = chunk__15703_16400;
var G__16412 = count__15704_16401;
var G__16413 = (i__15705_16402 + (1));
seq__15701_16399 = G__16410;
chunk__15703_16400 = G__16411;
count__15704_16401 = G__16412;
i__15705_16402 = G__16413;
continue;
} else {
var G__16414 = seq__15701_16399;
var G__16415 = chunk__15703_16400;
var G__16416 = count__15704_16401;
var G__16417 = (i__15705_16402 + (1));
seq__15701_16399 = G__16414;
chunk__15703_16400 = G__16415;
count__15704_16401 = G__16416;
i__15705_16402 = G__16417;
continue;
}
} else {
var temp__5804__auto___16420 = cljs.core.seq(seq__15701_16399);
if(temp__5804__auto___16420){
var seq__15701_16421__$1 = temp__5804__auto___16420;
if(cljs.core.chunked_seq_QMARK_(seq__15701_16421__$1)){
var c__5525__auto___16425 = cljs.core.chunk_first(seq__15701_16421__$1);
var G__16426 = cljs.core.chunk_rest(seq__15701_16421__$1);
var G__16427 = c__5525__auto___16425;
var G__16428 = cljs.core.count(c__5525__auto___16425);
var G__16430 = (0);
seq__15701_16399 = G__16426;
chunk__15703_16400 = G__16427;
count__15704_16401 = G__16428;
i__15705_16402 = G__16430;
continue;
} else {
var child_16432 = cljs.core.first(seq__15701_16421__$1);
if(cljs.core.truth_(child_16432)){
node.appendChild(child_16432);


var G__16434 = cljs.core.next(seq__15701_16421__$1);
var G__16435 = null;
var G__16436 = (0);
var G__16437 = (0);
seq__15701_16399 = G__16434;
chunk__15703_16400 = G__16435;
count__15704_16401 = G__16436;
i__15705_16402 = G__16437;
continue;
} else {
var G__16439 = cljs.core.next(seq__15701_16421__$1);
var G__16440 = null;
var G__16441 = (0);
var G__16442 = (0);
seq__15701_16399 = G__16439;
chunk__15703_16400 = G__16440;
count__15704_16401 = G__16441;
i__15705_16402 = G__16442;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16397);
}
}


var G__16444 = seq__15593_16390;
var G__16445 = chunk__15595_16391;
var G__16446 = count__15596_16392;
var G__16447 = (i__15597_16393 + (1));
seq__15593_16390 = G__16444;
chunk__15595_16391 = G__16445;
count__15596_16392 = G__16446;
i__15597_16393 = G__16447;
continue;
} else {
var G__16450 = seq__15593_16390;
var G__16451 = chunk__15595_16391;
var G__16452 = count__15596_16392;
var G__16453 = (i__15597_16393 + (1));
seq__15593_16390 = G__16450;
chunk__15595_16391 = G__16451;
count__15596_16392 = G__16452;
i__15597_16393 = G__16453;
continue;
}
} else {
var temp__5804__auto___16459 = cljs.core.seq(seq__15593_16390);
if(temp__5804__auto___16459){
var seq__15593_16464__$1 = temp__5804__auto___16459;
if(cljs.core.chunked_seq_QMARK_(seq__15593_16464__$1)){
var c__5525__auto___16471 = cljs.core.chunk_first(seq__15593_16464__$1);
var G__16472 = cljs.core.chunk_rest(seq__15593_16464__$1);
var G__16473 = c__5525__auto___16471;
var G__16474 = cljs.core.count(c__5525__auto___16471);
var G__16475 = (0);
seq__15593_16390 = G__16472;
chunk__15595_16391 = G__16473;
count__15596_16392 = G__16474;
i__15597_16393 = G__16475;
continue;
} else {
var child_struct_16478 = cljs.core.first(seq__15593_16464__$1);
if((!((child_struct_16478 == null)))){
if(typeof child_struct_16478 === 'string'){
var text_16480 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16480),child_struct_16478].join(''));
} else {
var children_16481 = shadow.dom.svg_node(child_struct_16478);
if(cljs.core.seq_QMARK_(children_16481)){
var seq__15757_16483 = cljs.core.seq(children_16481);
var chunk__15759_16484 = null;
var count__15760_16485 = (0);
var i__15761_16486 = (0);
while(true){
if((i__15761_16486 < count__15760_16485)){
var child_16487 = chunk__15759_16484.cljs$core$IIndexed$_nth$arity$2(null, i__15761_16486);
if(cljs.core.truth_(child_16487)){
node.appendChild(child_16487);


var G__16488 = seq__15757_16483;
var G__16489 = chunk__15759_16484;
var G__16490 = count__15760_16485;
var G__16491 = (i__15761_16486 + (1));
seq__15757_16483 = G__16488;
chunk__15759_16484 = G__16489;
count__15760_16485 = G__16490;
i__15761_16486 = G__16491;
continue;
} else {
var G__16493 = seq__15757_16483;
var G__16494 = chunk__15759_16484;
var G__16495 = count__15760_16485;
var G__16496 = (i__15761_16486 + (1));
seq__15757_16483 = G__16493;
chunk__15759_16484 = G__16494;
count__15760_16485 = G__16495;
i__15761_16486 = G__16496;
continue;
}
} else {
var temp__5804__auto___16497__$1 = cljs.core.seq(seq__15757_16483);
if(temp__5804__auto___16497__$1){
var seq__15757_16498__$1 = temp__5804__auto___16497__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15757_16498__$1)){
var c__5525__auto___16499 = cljs.core.chunk_first(seq__15757_16498__$1);
var G__16500 = cljs.core.chunk_rest(seq__15757_16498__$1);
var G__16501 = c__5525__auto___16499;
var G__16502 = cljs.core.count(c__5525__auto___16499);
var G__16503 = (0);
seq__15757_16483 = G__16500;
chunk__15759_16484 = G__16501;
count__15760_16485 = G__16502;
i__15761_16486 = G__16503;
continue;
} else {
var child_16504 = cljs.core.first(seq__15757_16498__$1);
if(cljs.core.truth_(child_16504)){
node.appendChild(child_16504);


var G__16505 = cljs.core.next(seq__15757_16498__$1);
var G__16506 = null;
var G__16507 = (0);
var G__16508 = (0);
seq__15757_16483 = G__16505;
chunk__15759_16484 = G__16506;
count__15760_16485 = G__16507;
i__15761_16486 = G__16508;
continue;
} else {
var G__16509 = cljs.core.next(seq__15757_16498__$1);
var G__16510 = null;
var G__16511 = (0);
var G__16512 = (0);
seq__15757_16483 = G__16509;
chunk__15759_16484 = G__16510;
count__15760_16485 = G__16511;
i__15761_16486 = G__16512;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16481);
}
}


var G__16513 = cljs.core.next(seq__15593_16464__$1);
var G__16514 = null;
var G__16515 = (0);
var G__16516 = (0);
seq__15593_16390 = G__16513;
chunk__15595_16391 = G__16514;
count__15596_16392 = G__16515;
i__15597_16393 = G__16516;
continue;
} else {
var G__16517 = cljs.core.next(seq__15593_16464__$1);
var G__16518 = null;
var G__16519 = (0);
var G__16520 = (0);
seq__15593_16390 = G__16517;
chunk__15595_16391 = G__16518;
count__15596_16392 = G__16519;
i__15597_16393 = G__16520;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16526 = arguments.length;
var i__5727__auto___16527 = (0);
while(true){
if((i__5727__auto___16527 < len__5726__auto___16526)){
args__5732__auto__.push((arguments[i__5727__auto___16527]));

var G__16528 = (i__5727__auto___16527 + (1));
i__5727__auto___16527 = G__16528;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15800){
var G__15801 = cljs.core.first(seq15800);
var seq15800__$1 = cljs.core.next(seq15800);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15801,seq15800__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
