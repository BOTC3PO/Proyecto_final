/**
 * F6-03 — Registro del banco estático de Biología.
 *
 * Inscribe el banco `biologia_clasificacion_seres_vivos` (1 banco, 30
 * preguntas = 10 filas × 3 dificultades) en el `TEMPLATE_REGISTRY`
 * del framework `basic/`. El .ts original (`Biologia.ts`) NO se
 * modifica en F6-03 — sigue vivo hasta F6-06.
 *
 * Particularidad: 30 preguntas se generan expandiendo 10 filas en 3
 * variants (basico=reino, intermedio=tipo celular, avanzado=tipo
 * de nutrición), siguiendo el patrón de `seguridad.ts` de F6-03.
 *
 * Uso:
 *   import { registerBancosBiologia } from "./index";
 *   registerBancosBiologia();
 */

import {
  buildQuizTemplate,
  registerBancoTemplate,
  type BancoMetadata,
} from "../../basic/banco";
import type { MCQuestion, QuizTemplate } from "../../basic/types";
import { BANCOS_BIOLOGIA } from "./biologia";

export type BancoEntry = {
  id: string;
  questions: MCQuestion[];
};

const ALL_BANCO_ENTRIES: ReadonlyArray<BancoEntry> = BANCOS_BIOLOGIA.map(([id, questions]) => ({
  id,
  questions: [...questions],
}));

const TITULOS: Record<string, string> = {
  biologia_clasificacion_seres_vivos: "Clasificación de seres vivos",
};

function tituloFor(id: string): string {
  return TITULOS[id] ?? id;
}

function buildTemplate(entry: BancoEntry): QuizTemplate {
  const meta: BancoMetadata = {
    id: entry.id,
    materia: "biologia",
    titulo: tituloFor(entry.id),
    idioma: "es",
    tags: ["biologia", "banco-estatico", "f6-03"],
  };
  return buildQuizTemplate(entry.questions, meta);
}

export function getAllBancosBiologia(): BancoEntry[] {
  return ALL_BANCO_ENTRIES.map((e) => ({ ...e, questions: [...e.questions] }));
}

export function getQuizTemplatesBiologia(): QuizTemplate[] {
  return ALL_BANCO_ENTRIES.map(buildTemplate);
}

export function registerBancosBiologia(): QuizTemplate[] {
  const tpls = ALL_BANCO_ENTRIES.map(buildTemplate);
  for (const t of tpls) registerBancoTemplate(t);
  return tpls;
}

// Re-export del barrel (para tests e inventario).
export { BANCOS_BIOLOGIA } from "./biologia";
