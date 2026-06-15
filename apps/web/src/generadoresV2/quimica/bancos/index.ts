/**
 * F6-03 — Registro de los 23 bancos estáticos de química.
 *
 * Agrupa los 4 archivos por fuente (uno por generador) y los inscribe
 * en el registro del framework `basic/`. Idempotente: se puede llamar
 * varias veces (la última gana, igual que el `registerBancoTemplate`
 * original).
 *
 * El .ts original de cada generador (`AtomosEnlaces.ts`, `Seguridad.ts`,
 * `AcidoBase.ts`, `Equilibrio.ts`) NO se modifica en F6-03 — sigue vivo
 * hasta F6-06, que lo borra tras migrar a bancos.
 *
 * Bancos por archivo (23 totales):
 *   - atomosEnlaces.ts:  18 bancos (1 row → 1 question, salvo enlace_ionico 4×2)
 *   - seguridad.ts:       3 bancos (cada row → 3 questions × 3 difficulties)
 *   - acidoBase.ts:       1 banco  (1 row → 1 question)
 *   - equilibrio.ts:      1 banco  (anodo_catodo, 25 pairs enumerados)
 *
 * Total de preguntas: 18 banks con 1-16 preguntas c/u = ~80 + 3 banks
 * con 9-12 preguntas c/u = ~51 + 1 banco con 25 = 25 = ~156 preguntas.
 */

import {
  buildQuizTemplate,
  registerBancoTemplate,
  type BancoMetadata,
} from "../../basic/banco";
import type { MCQuestion, QuizTemplate } from "../../basic/types";
import { BANCOS_ATOMOS_ENLACES } from "./atomosEnlaces";
import { BANCOS_EQUILIBRIO } from "./equilibrio";
import { BANCOS_ACIDO_BASE } from "./acidoBase";
import { BANCOS_SEGURIDAD } from "./seguridad";

export type BancoEntry = {
  id: string;
  questions: MCQuestion[];
};

const ALL_BANCO_ENTRIES: ReadonlyArray<BancoEntry> = [
  ...BANCOS_ATOMOS_ENLACES,
  ...BANCOS_SEGURIDAD,
  ...BANCOS_ACIDO_BASE,
  ...BANCOS_EQUILIBRIO,
].map(([id, questions]) => ({ id, questions: [...questions] }));

const TITULOS: Record<string, string> = {
  // AtomosEnlaces
  quimica_atomos_enlaces_tabla_periodica_clasificacion: "Clasificación en la tabla periódica",
  quimica_atomos_enlaces_tendencias_periodicas: "Tendencias periódicas",
  quimica_atomos_enlaces_iones_cationes_aniones: "Iones: cationes y aniones",
  quimica_atomos_enlaces_niveles_subniveles: "Niveles y subniveles de energía",
  quimica_atomos_enlaces_orbitales_spdf: "Orbitales s, p, d, f",
  quimica_atomos_enlaces_enlace_ionico: "Enlace iónico",
  quimica_atomos_enlaces_enlace_covalente: "Enlace covalente",
  quimica_atomos_enlaces_enlace_metalico: "Enlace metálico",
  quimica_atomos_enlaces_polaridad_enlaces: "Polaridad de enlaces y moléculas",
  quimica_atomos_enlaces_geometria_molecular: "Geometría molecular (VSEPR)",
  quimica_atomos_enlaces_sustancia_pura_mezcla: "Sustancias puras y mezclas",
  quimica_atomos_enlaces_mezcla_homogenea_heterogenea: "Mezclas homogéneas y heterogéneas",
  quimica_atomos_enlaces_metodos_separacion: "Métodos de separación",
  quimica_atomos_enlaces_propiedades_fisicas_quimicas: "Propiedades físicas y químicas",
  quimica_atomos_enlaces_sintesis: "Reacción de síntesis",
  quimica_atomos_enlaces_descomposicion: "Reacción de descomposición",
  quimica_atomos_enlaces_desplazamiento: "Reacción de desplazamiento",
  quimica_atomos_enlaces_combustion: "Reacción de combustión",
  quimica_atomos_enlaces_neutralizacion_tipo: "Reacción de neutralización",
  // Seguridad
  quimica_seguridad_pictogramas_ghs: "Pictogramas GHS/SGA",
  quimica_seguridad_materiales_inflamables: "Materiales inflamables",
  quimica_seguridad_riesgos_toxicos: "Riesgos tóxicos (sustancias peligrosas)",
  // AcidoBase
  quimica_acido_base_fuerza_acidos_bases: "Fuerza de ácidos y bases",
  // Equilibrio
  quimica_equilibrio_anodo_catodo: "Ánodo y cátodo en celda galvánica",
};

function tituloFor(id: string): string {
  return TITULOS[id] ?? id;
}

function buildTemplate(entry: BancoEntry): QuizTemplate {
  const meta: BancoMetadata = {
    id: entry.id,
    materia: "quimica",
    titulo: tituloFor(entry.id),
    idioma: "es",
    tags: ["quimica", "banco-estatico", "f6-03"],
  };
  return buildQuizTemplate(entry.questions, meta);
}

/** Lista plana de los 23 bancos (id + pool). Útil para tests e inventario. */
export function getAllBancosQuimica(): BancoEntry[] {
  return ALL_BANCO_ENTRIES.map((e) => ({ ...e, questions: [...e.questions] }));
}

/** Construye los QuizTemplate sin registrarlos (útil para tests aislados). */
export function getQuizTemplatesQuimica(): QuizTemplate[] {
  return ALL_BANCO_ENTRIES.map(buildTemplate);
}

/** Inscribe los 23 bancos en el `TEMPLATE_REGISTRY` del framework `basic/`. */
export function registerBancosQuimica(): QuizTemplate[] {
  const tpls = ALL_BANCO_ENTRIES.map(buildTemplate);
  for (const t of tpls) registerBancoTemplate(t);
  return tpls;
}

// Re-exports de los barrels por archivo fuente (para tests e
// consumidores que quieran importar las preguntas crudas).
export { BANCOS_ATOMOS_ENLACES } from "./atomosEnlaces";
export { BANCOS_SEGURIDAD } from "./seguridad";
export { BANCOS_ACIDO_BASE } from "./acidoBase";
export { BANCOS_EQUILIBRIO } from "./equilibrio";
