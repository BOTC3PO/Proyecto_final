/**
 * F6-02 — Registro de los 29 bancos estáticos de economía.
 *
 * Agrupa los 4 archivos por tema (uno por generador) y los inscribe en
 * el registro del framework `basic/` (`TEMPLATE_REGISTRY`) para que el
 * provider / catálogo los expongan. Idempotente: se puede llamar varias
 * veces (la última gana, igual que el `registerBancoTemplate` original).
 *
 * El .ts original de cada generador (`EconomiaGeneral.ts`, `Finanzas.ts`,
 * `EconomiaAR.ts`, `Contabilidad.ts`) NO se modifica en F6-02 — sigue
 * vivo hasta F6-06, que lo borra tras migrar a bancos.
 *
 * Uso:
 *   import { registerBancosEconomia } from "./data";
 *   registerBancosEconomia();
 *   // o bien, en un test:
 *   const tpls = getAllBancosEconomia();
 */

import {
  buildQuizTemplate,
  registerBancoTemplate,
  type BancoMetadata,
} from "../../basic/banco";
import type { MCQuestion, QuizTemplate } from "../../basic/types";
import { BANCOS_CONTABILIDAD } from "./contabilidad";
import { BANCOS_ECONOMIA_AR } from "./economiaAR";
import { BANCOS_ECONOMIA_GENERAL } from "./economiaGeneral";
import { BANCOS_FINANZAS } from "./finanzas";

export type BancoEntry = {
  id: string;
  questions: MCQuestion[];
};

const ALL_BANCO_ENTRIES: ReadonlyArray<BancoEntry> = [
  ...BANCOS_ECONOMIA_GENERAL,
  ...BANCOS_ECONOMIA_AR,
  ...BANCOS_FINANZAS,
  ...BANCOS_CONTABILIDAD,
].map(([id, questions]) => ({ id, questions: [...questions] }));

const TITULOS: Record<string, string> = {
  economia_general_politica_fiscal_monetaria: "Política fiscal y monetaria",
  economia_general_clasificacion_bienes: "Clasificación de bienes",
  economia_general_agentes_economicos: "Agentes económicos",
  economia_general_estructuras_mercado: "Estructuras de mercado",
  economia_general_gastos_fijos_variables: "Gastos fijos vs variables (empresa)",
  economia_general_quiz_ganancia_equilibrio: "Ganancia y punto de equilibrio",
  economia_general_quiz_interes_simple_compuesto: "Interés simple vs compuesto",

  economia_ar_recibo_basico: "Recibo de sueldo (conceptos)",
  economia_ar_descuentos_obligatorios: "Descuentos obligatorios (jubilación, OS, PAMI)",
  economia_ar_jurisdiccion_impuestos: "Jurisdicción de impuestos",
  economia_ar_formal_informal: "Trabajo formal vs informal",
  economia_ar_monotributo: "Monotributo",

  finanzas_presupuesto_familiar: "Presupuesto familiar",
  finanzas_gastos_fijos_esenciales: "Gastos fijos, variables y no esenciales",
  finanzas_gastos_esenciales_no_esenciales: "Gastos esenciales vs no esenciales",
  finanzas_ahorro_consumo: "Ahorro y consumo responsable",
  finanzas_deuda_buena_mala: "Deuda buena vs deuda mala",
  finanzas_cft_vs_interes: "Interés vs CFT",
  finanzas_liquidez_personal: "Liquidez personal",
  finanzas_ingresos_activos_pasivos: "Ingresos activos y pasivos",
  finanzas_publicidad_enganosa: "Publicidad engañosa",
  finanzas_seguros_familia: "Seguros para la familia",

  contabilidad_clasificacion_cuentas: "Clasificación de cuentas",
  contabilidad_naturaleza_cuentas: "Naturaleza de las cuentas",
  contabilidad_ubicacion_estados: "Ubicación en los estados contables",
  contabilidad_hechos_patrimonio: "Hechos sobre el patrimonio",
  contabilidad_bienes_derechos_obligaciones: "Bienes, derechos y obligaciones",
  contabilidad_aportes_contribuciones: "Aportes y contribuciones",
  contabilidad_variaciones_patrimoniales: "Variaciones patrimoniales",
};

function tituloFor(id: string): string {
  return TITULOS[id] ?? id;
}

function buildTemplate(entry: BancoEntry): QuizTemplate {
  const meta: BancoMetadata = {
    id: entry.id,
    materia: "economia",
    titulo: tituloFor(entry.id),
    idioma: "es",
    tags: ["economia", "banco-estatico", "f6-02"],
  };
  return buildQuizTemplate(entry.questions, meta);
}

/** Lista plana de los 29 bancos (id + pool). Útil para tests e inventario. */
export function getAllBancosEconomia(): BancoEntry[] {
  return ALL_BANCO_ENTRIES.map((e) => ({ ...e, questions: [...e.questions] }));
}

/** Construye los QuizTemplate sin registrarlos (útil para tests aislados). */
export function getQuizTemplatesEconomia(): QuizTemplate[] {
  return ALL_BANCO_ENTRIES.map(buildTemplate);
}

/** Inscribe los 29 bancos en el `TEMPLATE_REGISTRY` del framework `basic/`. */
export function registerBancosEconomia(): QuizTemplate[] {
  const tpls = ALL_BANCO_ENTRIES.map(buildTemplate);
  for (const t of tpls) registerBancoTemplate(t);
  return tpls;
}
