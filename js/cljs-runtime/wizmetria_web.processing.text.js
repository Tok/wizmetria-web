goog.provide('wizmetria_web.processing.text');
/**
 * Extract words from text, filtering by minimum length
 */
wizmetria_web.processing.text.extract_words = (function wizmetria_web$processing$text$extract_words(text,min_length){
console.log("Extracting words from text of length:",cljs.core.count(text));

console.log("Min word length:",min_length);

console.log("Sample text:",(((cljs.core.count(text) > (100)))?text.substring((0),(100)):text));

var cleaned = clojure.string.upper_case(clojure.string.trim(clojure.string.replace(clojure.string.replace(text,/[^a-zA-Z\s]/," "),/\s+/," ")));
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cleaned,/\s+/);
var filtered_words = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13456_SHARP_){
return (cljs.core.count(p1__13456_SHARP_) >= min_length);
}),words);
var unique_words = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,filtered_words);
console.log("Total words found:",cljs.core.count(words));

console.log("Filtered words (length \u2265",min_length,"):",cljs.core.count(filtered_words));

console.log("Unique words:",cljs.core.count(unique_words));

if(cljs.core.seq(unique_words)){
console.log("Sample unique words:",cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),unique_words));
} else {
}

return unique_words;
});
/**
 * Process the full text and extract unique words
 */
wizmetria_web.processing.text.process_text = (function wizmetria_web$processing$text$process_text(text){
var min_word_length = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.processing_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-word-length","min-word-length",21470720)], null));
var unique_words = wizmetria_web.processing.text.extract_words(text,min_word_length);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unique-words","unique-words",2083333005),unique_words,new cljs.core.Keyword(null,"word-count","word-count",-108883606),cljs.core.count(unique_words)], null);
});
/**
 * Divide text into chunks of specified size for progressive processing
 */
wizmetria_web.processing.text.create_chunks = (function wizmetria_web$processing$text$create_chunks(text){
var chunk_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(wizmetria_web.config.processing_config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374)], null));
var total_length = cljs.core.count(text);
var adjusted_chunk_size = (function (){var x__5087__auto__ = (250);
var y__5088__auto__ = (function (){var x__5090__auto__ = chunk_size;
var y__5091__auto__ = Math.ceil((total_length / (50)));
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var chunks = cljs.core.vec(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(adjusted_chunk_size,text));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chunks","chunks",83720431),chunks,new cljs.core.Keyword(null,"total-chunks","total-chunks",1541029573),cljs.core.count(chunks),new cljs.core.Keyword(null,"chunk-size","chunk-size",-205934374),adjusted_chunk_size,new cljs.core.Keyword(null,"total-length","total-length",1013948744),total_length], null);
});

//# sourceMappingURL=wizmetria_web.processing.text.js.map
