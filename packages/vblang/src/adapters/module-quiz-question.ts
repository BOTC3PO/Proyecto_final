/**
 * Shape canónico que consume el reproductor de quizzes (apps/web QuizAttempt.tsx).
 *
 * IMPORTANTE: este tipo se define LOCALMENTE en el paquete @vb/vblang para
 * mantener el paquete autocontenido (no importa nada de apps/web). La
 * compatibilidad estructural con apps/web/src/domain/module/module.types.ts
 * se verifica con un test en apps/web/src/vblang/__tests__/compat.test.ts.
 */
import type { VisualSpec } from "../types/visual.js";
export type ModuleQuizQuestionType =
  | "mc"
  | "vf"
  | "input"
  | "completar"
  | "match"
  | "fill-blank"
  | "ordenar"
  | "marcar_mapa"
  | "analisis_sintactico"
  | "identificar_palabras";

export interface ModuleQuizQuestion {
  /** ID estable de la pregunta. */
  id: string;
  /** Enunciado ya renderizado (interpolaciones resueltas). */
  prompt: string;
  /** Tipo de pregunta para el reproductor. */
  questionType?: ModuleQuizQuestionType;
  /**
   * Para mc/vf: textos planos de cada opción. La marca de "correcta" NO va
   * dentro; se identifica por igualdad string contra `answerKey`.
   */
  options?: string[];
  /**
   * Para mc/input/vf/completar: respuesta correcta (única) o lista de
   * respuestas aceptables (caso `respuestas_validas`).
   */
  answerKey?: string | string[];
  /** Texto explicativo opcional. Si no se pasa, se construye desde `pasos`. */
  explanation?: string;
  /** Subcategoría dentro del tema (ej. "fisica/cinematica/MRU"). */
  focus?: string | null;
  /** Contexto visual textual (no es el VisualSpec). */
  visualContext?: string;
  /** Tolerancia siempre RELATIVA (ratio). El adaptador la calcula. */
  toleranciaRelativa?: number;
  /** Mapa de unidades. Convención: `{ resultado: "<unidad>" }`. */
  unidades?: Record<string, string>;
  /** Variables crudas que el reproductor puede mostrar/usar. */
  datos?: Record<string, unknown>;
  /** Pasos de resolución (uno por línea). */
  pasos?: string[];
  /**
   * Visual armado por el caller (el paquete no construye visuales).
   */
  visualSpec?: VisualSpec;

  /* ----- Sprint 9A — tipos especiales ----- */
  /** ordenar: items presentados al alumno (mezclados o no). */
  items?: string[];
  /** marcar_mapa: identificador del mapa a cargar. */
  mapaId?: string;
  /** marcar_mapa: ISO correcto (también copiado a `answerKey` por conveniencia). */
  respuestaIsoCorrecta?: string;
  /** analisis_sintactico / identificar_palabras: texto completo a presentar. */
  textoAnalizar?: string;
  /** analisis_sintactico: pares (palabra, etiqueta correcta) — incluye la respuesta. */
  etiquetasPedidas?: Array<{ palabra: string; etiqueta: string }>;
}

export interface AdapterOptions {
  /** ID de la pregunta. Si no se pasa, se genera con seed + counter. */
  id?: string;
  /** Explicación opcional. Si no se pasa, se construye desde `pasos` si existen. */
  explanation?: string;
  /** Focus (subcategoría) opcional, ej. "fisica/cinematica/MRU". */
  focus?: string | null;
  /** Visual spec ya armado por el caller. El paquete no construye visuales. */
  visualSpec?: VisualSpec;
}
