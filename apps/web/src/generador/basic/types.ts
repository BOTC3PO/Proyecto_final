// types.ts
// ============================================================
// TIPOS (Plantilla / Selección / Preguntas / Instancia generada)
// ============================================================

export type {
  MapSpec,
  MapLayerDef,
  MapHighlight,
  MapHighlightKind,
  MapSelectQuestion,
} from "./mapTypes";
import type { MapSpec, MapSelectQuestion } from "./mapTypes";

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

export type Question = MCQuestion | TFQuestion | MatchQuestion | MapSelectQuestion;

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
  /** Mapa de contexto/teoría opcional (se muestra junto a la pregunta) */
  map?: MapSpec;
}

export interface TFQuestion {
  id: string;
  type: "tf";
  prompt: string;
  answer: boolean;
  becauseTrue: string;
  becauseFalse: string;
  tags: string[];
  /** Mapa de contexto/teoría opcional */
  map?: MapSpec;
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
  /** Mapa de contexto/teoría opcional */
  map?: MapSpec;
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

export type GeneratedQuestion = {
  id: string;
  type: "mc" | "tf" | "match" | "map-select";
  prompt: string;
  // mc
  options?: Array<{ optionId: string; text: string }>;
  // match
  leftItems?: Array<{ itemId: string; text: string }>;
  rightItems?: Array<{ itemId: string; text: string }>;
  // contexto visual (mc / tf / match con mapa)
  map?: MapSpec;
  // map-select
  selectKind?: string;
  selectOptions?: Array<{ id: string; label: string }>;
};
