/**
 * F7-01 — Referencia condensada del DSL VBLang, derivada del código real.
 *
 * Combina:
 *  - bloques (`./blocks.ts`, derivado de `BLOCK_KEYWORDS`)
 *  - funciones/builtins (`./builtins.ts`, derivado de `BUILTIN_SIGNATURES` +
 *    `MATHJS_SIGNATURES`)
 *  - constantes globales (`evaluator/constants.ts`)
 *  - un ejemplo por tipo de pregunta (`schema/question-schemas.ts`,
 *    `sampleDsl` — ya validado por `tests/schema/concordance.test.ts`)
 *
 * Es la base para el generador de prompts (F7-02). El test de drift
 * (`tests/reference/drift.test.ts`) garantiza que nunca quede desactualizada
 * respecto del parser/evaluador/schemas reales.
 */
import { CONSTANTES_GLOBALES } from "../evaluator/constants.js";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
} from "../schema/question-schemas.js";
import { listaBloques } from "./blocks.js";
import { listaBuiltins } from "./builtins.js";

export {
  BLOCK_NAMES,
  RESUMENES_BLOQUES,
  diffBloques,
  listaBloques,
} from "./blocks.js";
export type { BloqueReferencia } from "./blocks.js";
export {
  diffBuiltins,
  listaBuiltins,
  nombresBuiltinsDisponibles,
  nombresBuiltinsRuntime,
} from "./builtins.js";
export type { BuiltinReferencia } from "./builtins.js";

export interface EjemploTipoPregunta {
  tipo: string;
  dsl: string;
}

/** Nombres de las constantes globales precargadas, ordenados. */
export function listaConstantesGlobales(): string[] {
  return Object.keys(CONSTANTES_GLOBALES).sort();
}

/**
 * Un ejemplo mínimo por tipo de pregunta, tomado de
 * `QUESTION_TYPE_SCHEMAS[tipo].sampleDsl` — la misma fuente que
 * `tests/schema/concordance.test.ts` verifica que parsea e infiere `tipo`.
 */
export function listaEjemplos(): EjemploTipoPregunta[] {
  return ALL_QUESTION_TYPES.map((tipo) => ({
    tipo,
    dsl: QUESTION_TYPE_SCHEMAS[tipo].sampleDsl.trim(),
  }));
}

/** Renderiza la referencia completa como Markdown. */
export function generarReferenciaDsl(): string {
  const lines: string[] = [];

  lines.push("# Referencia DSL VBLang");
  lines.push("");

  lines.push("## Bloques");
  for (const { nombre, resumen } of listaBloques()) {
    lines.push(`- \`${nombre}\`: ${resumen}`);
  }
  lines.push("");

  lines.push("## Funciones");
  for (const { nombre, firma } of listaBuiltins()) {
    lines.push(`- \`${nombre}${firma}\``);
  }
  lines.push("");

  lines.push("## Constantes globales");
  lines.push(listaConstantesGlobales().map((c) => `\`${c}\``).join(", "));
  lines.push("");

  lines.push("## Ejemplos por tipo de pregunta");
  for (const { tipo, dsl } of listaEjemplos()) {
    lines.push("");
    lines.push(`### ${tipo}`);
    lines.push("```");
    lines.push(dsl);
    lines.push("```");
  }

  return lines.join("\n");
}
