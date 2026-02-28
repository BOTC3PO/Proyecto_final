// languageTypes.ts — tipos para el tipo de pregunta "fill-blank"
// Reutilizable para cualquier materia que requiera completar espacios en blanco.

/** Define un único espacio en blanco dentro de un template. */
export interface BlankDef {
  /** Identificador único del blank, ej: "blank_1". Debe coincidir con {{blank_1}} en el template. */
  id: string;
  /** Todas las respuestas aceptadas (se comparan sin distinción de mayúsculas ni tildes). */
  correctAnswers: string[];
  /** Texto de ayuda opcional que se muestra al estudiante, ej: "(presente indicativo)". */
  hint?: string;
}

/**
 * Pregunta de completar espacios en blanco.
 * El template usa marcadores {{blank_1}}, {{blank_2}}, etc.
 * Ejemplo: "El verbo 'correr' en presente es: yo {{blank_1}}."
 */
export interface FillBlankQuestion {
  id: string;
  type: "fill-blank";
  /** Instrucción para el estudiante. */
  prompt: string;
  /** Oración o texto con marcadores {{blank_N}} donde el estudiante escribe. */
  template: string;
  /** Definición de cada blank con sus respuestas correctas. */
  blanks: BlankDef[];
  explanation: string;
  tags: string[];
}

/** Respuesta del alumno para una pregunta fill-blank: blankId → texto ingresado. */
export type FillBlankAnswer = Record<string, string>;
