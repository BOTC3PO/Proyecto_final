export { QuizGenerator } from "./basicGenerador";
export type {
  QuizTemplate, QuizInstance, QuizAnswers,
  Question, MCQuestion, TFQuestion, MatchQuestion, FillBlankQuestion,
  GeneratedQuestion, SelectionConfig,
} from "./types";

// WO08 — banco hand-authored como fuente del pool.
export {
  buildQuizTemplate,
  mapBancoQuestion,
  runBanco,
  registerBancoTemplate,
  clearBancoTemplates,
  listBancoTemplates,
  getDescriptoresBasic,
  VF_TRUE,
  VF_FALSE,
} from "./banco";
export type { BancoMetadata, RunBancoOptions } from "./banco";
