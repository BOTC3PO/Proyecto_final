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
  | "identificar_palabras"
  | "abierta";

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
  /**
   * Peso de la pregunta en el puntaje del quiz. Default 1. Es composición a
   * nivel quiz (no es parte del DSL de la plantilla): el adaptador solo lo
   * propaga si el caller lo pasa en `AdapterOptions`.
   */
  points?: number;
  /** Subcategoría dentro del tema (ej. "fisica/cinematica/MRU"). */
  focus?: string | null;
  /** Contexto visual textual (no es el VisualSpec). */
  visualContext?: string;
  /** Tolerancia siempre RELATIVA (ratio). El adaptador la calcula. */
  toleranciaRelativa?: number;
  /**
   * F2-04: tolerancia absoluta. Número crudo en la misma unidad que la
   * respuesta. Si está presente, se usa `max(|e|·tol_rel, tol_abs)` como
   * umbral de aceptación. Default ausente = 0 (comportamiento previo).
   */
  toleranciaAbsoluta?: number;
  /** Mapa de unidades. Convención: `{ resultado: "<unidad>" }`. */
  unidades?: Record<string, string>;
  /** Variables crudas que el reproductor puede mostrar/usar. */
  datos?: Record<string, unknown>;
  /** Pasos de resolución (uno por línea). */
  pasos?: string[];
  /**
   * F2-02: pistas escalonadas ya interpoladas, en orden. El alumno las pide de
   * a una a cambio de puntos. El costo/visibilidad es composición de quiz (no
   * vive en el DSL, igual que `points`): el adaptador sólo propaga el texto.
   */
  pistas?: string[];
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
  /** WO-5: marcar_mapa + provincias: código ISO del país (2 letras) para cargar
   *  el TopoJSON de provincias. No revela la respuesta (sólo el país). */
  paisIso?: string;
  /** analisis_sintactico / identificar_palabras: texto completo a presentar. */
  textoAnalizar?: string;
  /** analisis_sintactico: pares (palabra, etiqueta correcta) — incluye la respuesta. */
  etiquetasPedidas?: Array<{ palabra: string; etiqueta: string }>;

  /* ----- WO07 — pregunta abierta ----- */
  /**
   * abierta: modo de corrección. `ninguna` no puntúa (se excluye del maxScore);
   * `manual` la corrige el profe (queda pendiente de corrección al enviar).
   */
  correccion?: "ninguna" | "manual";
  /**
   * abierta + `manual`: marca que el ítem necesita corrección humana. El
   * reproductor no la auto-corrige y la deja "pendiente".
   */
  manualGrading?: boolean;
}

export interface AdapterOptions {
  /** ID de la pregunta. Si no se pasa, se genera con seed + counter. */
  id?: string;
  /** Explicación opcional. Si no se pasa, se construye desde `pasos` si existen. */
  explanation?: string;
  /** Peso de la pregunta en el puntaje del quiz (default 1 en el reproductor). */
  points?: number;
  /** Focus (subcategoría) opcional, ej. "fisica/cinematica/MRU". */
  focus?: string | null;
  /** Visual spec ya armado por el caller. El paquete no construye visuales. */
  visualSpec?: VisualSpec;
}
