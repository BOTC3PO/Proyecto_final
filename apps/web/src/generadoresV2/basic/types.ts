// ── Preguntas ────────────────────────────────────────────────────
export interface MCQuestion {
  id: string;
  type: "mc";
  prompt: string;
  options: {
    text: string;
    correct: boolean;
    because: string;
  }[];
  explanation: string;
  tags: string[];
  // Imagen de contexto opcional (usa StaticImageSpec de core)
  imageSrc?: string;
}
export interface TFQuestion {
  id: string;
  type: "tf";
  prompt: string;
  answer: boolean;
  becauseTrue: string;
  becauseFalse: string;
  tags: string[];
  imageSrc?: string;
}
export interface MatchQuestion {
  id: string;
  type: "match";
  prompt: string;
  pairs: {
    left: string;
    right: string;
  }[];
  explanation: string;
  tags?: string[];
  imageSrc?: string;
}
export interface FillBlankQuestion {
  id: string;
  type: "fill-blank";
  prompt: string;
  // Template con marcadores: "La capital de {{pais}} es {{capital}}"
  template: string;
  blanks: {
    id: string;
    // Respuestas aceptadas (normalizadas: sin tildes, minúsculas)
    correctAnswers: string[];
    hint?: string;
  }[];
  explanation?: string;
  tags?: string[];
  imageSrc?: string;
}
// map-select descartado — usar FillBlankQuestion + imageSrc con mapa SVG
export type Question = MCQuestion | TFQuestion | MatchQuestion | FillBlankQuestion;
// ── Configuración ────────────────────────────────────────────────
export interface SelectionConfig {
  mode: "random" | "fixed" | "byTags";
  seeded?: boolean;
  ids?: string[];
  tags?: string[];
}
export interface QuizTemplate {
  schema: string;
  metadata: {
    id: string;
    materia: string;
    titulo: string;
    idioma: string;
    tags: string[];
  };
  settings: {
    poolSize: number;
    displayCount: number;
    displayCountDefault: number;
    feedbackPolicyDefault: string;
    selectionDefault: SelectionConfig;
  };
  pool: Question[];
}
// ── Output ───────────────────────────────────────────────────────
export interface GeneratedOption {
  optionId: string;
  text: string;
}
export interface GeneratedQuestion {
  id: string;
  type: "mc" | "tf" | "match" | "fill-blank";
  prompt: string;
  imageSrc?: string;
  // mc
  options?: GeneratedOption[];
  // match
  leftItems?: { itemId: string; text: string }[];
  rightItems?: { itemId: string; text: string }[];
  // fill-blank
  template?: string;
  blanks?: { id: string; hint?: string }[];
}
export interface QuizInstance {
  seed: string;
  metadata: QuizTemplate["metadata"];
  questions: GeneratedQuestion[];
  settings: {
    displayCount: number;
    feedbackPolicy: string;
  };
  generatorId?: string;
  generatorVersion?: number;
}
export type QuizAnswers = Record<string, string | boolean | Record<string, string>>;
