/**
 * F6-03 — Registro del banco estático de Matemáticas.
 *
 * Inscribe el banco `matematicas_algebra_lenguaje_algebraico` (1 banco,
 * 17 preguntas = 7 basico + 5 intermedio + 5 avanzado) en el
 * `TEMPLATE_REGISTRY` del framework `basic/`. El .ts original
 * (`Algebra.ts`) NO se modifica en F6-03 — sigue vivo hasta F6-06.
 *
 * Uso:
 *   import { registerBancosMatematicas } from "./index";
 *   registerBancosMatematicas();
 */

import {
  buildQuizTemplate,
  registerBancoTemplate,
  type BancoMetadata,
} from "../../basic/banco";
import type { MCQuestion, QuizTemplate } from "../../basic/types";
import { BANCOS_MATEMATICAS } from "./algebra";

export type BancoEntry = {
  id: string;
  questions: MCQuestion[];
};

const ALL_BANCO_ENTRIES: ReadonlyArray<BancoEntry> = BANCOS_MATEMATICAS.map(([id, questions]) => ({
  id,
  questions: [...questions],
}));

const TITULOS: Record<string, string> = {
  matematicas_algebra_lenguaje_algebraico: "Lenguaje algebraico (verbal → simbólico)",
};

function tituloFor(id: string): string {
  return TITULOS[id] ?? id;
}

function buildTemplate(entry: BancoEntry): QuizTemplate {
  const meta: BancoMetadata = {
    id: entry.id,
    materia: "matematicas",
    titulo: tituloFor(entry.id),
    idioma: "es",
    tags: ["matematicas", "banco-estatico", "f6-03"],
  };
  return buildQuizTemplate(entry.questions, meta);
}

export function getAllBancosMatematicas(): BancoEntry[] {
  return ALL_BANCO_ENTRIES.map((e) => ({ ...e, questions: [...e.questions] }));
}

export function getQuizTemplatesMatematicas(): QuizTemplate[] {
  return ALL_BANCO_ENTRIES.map(buildTemplate);
}

export function registerBancosMatematicas(): QuizTemplate[] {
  const tpls = ALL_BANCO_ENTRIES.map(buildTemplate);
  for (const t of tpls) registerBancoTemplate(t);
  return tpls;
}

// Re-export del barrel (para tests e inventario).
export { BANCOS_MATEMATICAS } from "./algebra";
