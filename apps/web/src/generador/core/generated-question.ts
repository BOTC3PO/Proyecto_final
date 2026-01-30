import type { VisualSpec } from "../../visualizadores/types";
import type { Materia } from "./types";

export type QuestionType = "mc" | "vf" | "input" | "match" | "interactive";

export interface RenderableOption {
  id: string;
  text: string;
}

export interface GeneratedQuestionMetadata {
  generatorId?: string;
  generatorVersion?: number;
  materia?: Materia | string;
  categoria?: string;
  temaId?: number;
  temaTitulo?: string;
  dificultad?: string;
  tags?: string[];
}

export interface GeneratedQuestionDTO {
  id: string;
  prompt: string;
  questionType: QuestionType;
  options?: RenderableOption[];
  leftItems?: RenderableOption[];
  rightItems?: RenderableOption[];
  metadata?: GeneratedQuestionMetadata;
  data?: Record<string, unknown>;
  visual?: VisualSpec;
}

export type AnswerKey =
  | string
  | string[]
  | number
  | boolean
  | Record<string, string>
  | Record<string, number>;

export interface QuestionCorrection {
  id: string;
  answerKey: AnswerKey;
  explanation?: string;
  details?: Record<string, unknown>;
}

export interface GeneratedQuestionPayload {
  question: GeneratedQuestionDTO;
  correction: QuestionCorrection;
}
