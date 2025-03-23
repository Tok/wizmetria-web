goog.provide('wizmetria_web.processing');
wizmetria_web.processing.extract_words = wizmetria_web.processing.text.extract_words;
wizmetria_web.processing.process_text = wizmetria_web.processing.text.process_text;
wizmetria_web.processing.create_chunks = wizmetria_web.processing.text.create_chunks;
wizmetria_web.processing.find_symmetric_words = wizmetria_web.processing.symmetry.find_symmetric_words;
wizmetria_web.processing.find_rotation_words = wizmetria_web.processing.symmetry.find_rotation_words;
wizmetria_web.processing.calculate_statistics = wizmetria_web.processing.symmetry.calculate_statistics;
wizmetria_web.processing.process_symmetry = wizmetria_web.processing.symmetry.process_symmetry;
wizmetria_web.processing.processing_states = wizmetria_web.processing.pipeline.processing_states;
wizmetria_web.processing.next_state = wizmetria_web.processing.pipeline.next_state;
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"process-text-pipeline","process-text-pipeline",-397332149)))){
} else {
console.log("Registering :process-text-pipeline effect");

re_frame.core.reg_fx(new cljs.core.Keyword(null,"process-text-pipeline","process-text-pipeline",-397332149),wizmetria_web.processing.pipeline.process_text_pipeline_fx);
}
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"process-text-chunks","process-text-chunks",-2022260275)))){
} else {
console.log("Registering :process-text-chunks effect");

re_frame.core.reg_fx(new cljs.core.Keyword(null,"process-text-chunks","process-text-chunks",-2022260275),wizmetria_web.processing.pipeline.process_text_chunks_fx);
}

//# sourceMappingURL=wizmetria_web.processing.js.map
