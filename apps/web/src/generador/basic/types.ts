// types.ts
// ============================================================
// TIPOS (Plantilla / Selección / Preguntas / Instancia generada)
// ============================================================

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

export interface SelectionConfig {
  mode: "random" | "fixed" | "byTags";
  seeded: boolean;
  ids?: string[];
  tags?: string[];
}

export type Question = MCQuestion | TFQuestion | MatchQuestion;

export interface MCQuestion {
  id: string;
  type: "mc";
  prompt: string;
  options: Array<{
    text: string;
    correct: boolean;
    because: string;
  }>;
  explanation: string;
  tags: string[];
}

export interface TFQuestion {
  id: string;
  type: "tf";
  prompt: string;
  answer: boolean;
  becauseTrue: string;
  becauseFalse: string;
  tags: string[];
}

export interface MatchQuestion {
  id: string;
  type: "match";
  prompt: string;
  pairs: Array<{
    left: string;
    right: string;
  }>;
  explanation: string;
  tags?: string[];
}

export interface QuizInstance {
  seed: string;
  metadata: QuizTemplate["metadata"];
  questions: GeneratedQuestion[];
  settings: {
    displayCount: number;
    feedbackPolicy: string;
  };
}

export type GeneratedQuestion = GeneratedMC | GeneratedTF | GeneratedMatch;

export interface GeneratedMC {
  id: string;
  type: "mc";
  prompt: string;
  options: Array<{
    optionId: string;
    text: string;
  }>;
}

export interface GeneratedTF {
  id: string;
  type: "tf";
  prompt: string;
}

export interface GeneratedMatch {
  id: string;
  type: "match";
  prompt: string;
  leftItems: Array<{ itemId: string; text: string }>;
  rightItems: Array<{ itemId: string; text: string }>;
}
