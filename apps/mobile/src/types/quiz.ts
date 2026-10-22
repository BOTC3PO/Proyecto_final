/**
 * PLAN-R Parte 3 — copiado de `apps/web/src/pages/quizzes/QuizAttempt.tsx`
 * (tipo `ModuleQuizQuestion` de `domain/module/module.types.ts`) y del
 * schema `api/src/schema/quiz-attempt.ts`. Sólo los campos que la app
 * nativa consume — no el módulo entero de tipos de quiz de la web.
 */
export type QuestionType =
  | "mc" | "vf" | "input" | "ordenar" | "marcar_mapa"
  | "completar" | "match" | "fill-blank"
  | "analisis_sintactico" | "analisis_spans" | "identificar_palabras"
  | "abierta" | "expresion";

/** Los 5 tipos que el plan pide nativos (Parte 3 §1) — todo lo demás va por WebView. */
export const NATIVE_QUESTION_TYPES: ReadonlySet<QuestionType> = new Set([
  "mc", "vf", "input", "ordenar",
]);

export type AttemptAnswerValue = string | string[];

export type QuizQuestion = {
  id: string;
  prompt: string;
  questionType?: QuestionType;
  options?: string[];
  answerKey?: string | string[];
  multiple?: boolean;
  items?: string[]; // ordenar
  points?: number;
  pasos?: string[];
};

export type QuizAttemptCreateResponse = {
  id: string;
  attemptId: string;
  timerSegundos: number | null;
  deadline: string | null;
  maxIntentos: number | null;
  intentosRestantes: number | null;
};

export type QuizAttemptDetail = {
  id: string;
  attemptId: string;
  quizId: string;
  moduleId?: string;
  quizTitle?: string;
  status: "in_progress" | "submitted" | "pending_review" | "aborted";
  questions: QuizQuestion[];
  answers: Record<string, AttemptAnswerValue>;
  score?: number;
  maxScore?: number;
  timerSegundos?: number | null;
  deadline?: string | null;
  /** Si es `true`, el alumno ve solo la nota: no el puntaje ni los porcentajes (F4-03 en la web). */
  ocultarPuntos?: boolean;
};

export type QuizSubmitResult = {
  status: string;
  score?: number;
  maxScore?: number;
  porcentaje?: number;
  aprobado?: boolean;
  umbral?: number;
  message?: string;
};

/** `GET /api/quiz-attempts/:id/repaso` — en qué falló el alumno y qué temas repasar (ver `api/src/routes/quiz-repaso.ts`). */
export type GrupoRepaso = {
  tipo: "tema" | "seccion";
  id: string;
  titulo: string;
  moduloId: string | null;
  correctas: number;
  total: number;
  porcentaje: number;
};
export type PreguntaRepaso = { id: string; prompt: string; correcta: boolean; pendiente: boolean; explicacion: string | null; grupo: string };
export type Repaso = {
  disponible: boolean;
  porcentaje: number | null;
  umbral: number;
  aprobado: boolean | null;
  porGrupo: GrupoRepaso[];
  recomendados: GrupoRepaso[];
  preguntas: PreguntaRepaso[];
};
