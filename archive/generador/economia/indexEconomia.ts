import type { Exercise, GeneratorFn } from "./generico";
import type { GeneratorDescriptor } from "../core/types";

export type EconomiaCategoria =
  | "contabilidad"
  | "finanzas"
  | "economia_ar"
  | "economia";

// =======================================================
// CLAVES VÁLIDAS para verificación de existencia
// =======================================================

export const ECONOMIA_CLAVES_VALIDAS: ReadonlySet<string> = new Set<string>([
  // Contabilidad (1–8)
  ...Array.from({ length: 8 }, (_, i) => `contabilidad/${i + 1}`),
  // Finanzas (9–21)
  ...Array.from({ length: 13 }, (_, i) => `finanzas/${i + 9}`),
  // Economía Argentina (21–30)
  ...Array.from({ length: 10 }, (_, i) => `economia_ar/${i + 21}`),
  // Economía general (31–55)
  ...Array.from({ length: 25 }, (_, i) => `economia/${i + 31}`),
]);

// =======================================================
// LAZY CACHE: clave → GeneratorFn
// =======================================================

const ECONOMIA_CACHE = new Map<string, GeneratorFn>();

const ECONOMIA_GENERATOR_VERSION = 1;

export async function getGeneradorEconomiaPorClave(
  clave: string
): Promise<GeneratorFn | undefined> {
  if (ECONOMIA_CACHE.has(clave)) return ECONOMIA_CACHE.get(clave)!;

  let fn: GeneratorFn | undefined;
  switch (clave) {
    /* Contabilidad */
    case "contabilidad/1": { const { genContabClasificacionCuentas } = await import("./contab_01_clasificacionCuentas"); fn = genContabClasificacionCuentas; break; }
    case "contabilidad/2": { const { genContabNaturalezaCuentas } = await import("./contab_02_naturalezaCuentas"); fn = genContabNaturalezaCuentas; break; }
    case "contabilidad/3": { const { genContabSaldoNormal } = await import("./contab_03_saldoNormal"); fn = genContabSaldoNormal; break; }
    case "contabilidad/4": { const { genContabUbicacionEstados } = await import("./contab_04_ubicacionEstados"); fn = genContabUbicacionEstados; break; }
    case "contabilidad/5": { const { genContabHechosPatrimonio } = await import("./contab_05_hechosPatrimonio"); fn = genContabHechosPatrimonio; break; }
    case "contabilidad/6": { const { genContabBienesDerechosObligaciones } = await import("./contab_06_bienesDerechosObligaciones"); fn = genContabBienesDerechosObligaciones; break; }
    case "contabilidad/7": { const { genContabAportesContribuciones } = await import("./contab_07_aportesContribuciones"); fn = genContabAportesContribuciones; break; }
    case "contabilidad/8": { const { genContabVariacionesPatrimoniales } = await import("./contab_08_variacionesPatrimoniales"); fn = genContabVariacionesPatrimoniales; break; }

    /* Finanzas */
    case "finanzas/9": { const { genFinanzasPresupuestoFamiliar } = await import("./finanzas_09_presupuestoFamiliar"); fn = genFinanzasPresupuestoFamiliar; break; }
    case "finanzas/10": { const { genFinanzasGastosFijosEsenciales } = await import("./finanzas_10_gastosFijosEsenciales"); fn = genFinanzasGastosFijosEsenciales; break; }
    case "finanzas/11": { const { genFinanzasGastosEsencialesNoEsenciales } = await import("./finanzas_11_gastosEsencialesNoEsenciales"); fn = genFinanzasGastosEsencialesNoEsenciales; break; }
    case "finanzas/12": { const { genFinanzasAhorroVsConsumoResponsable } = await import("./finanzas_12_ahorroVsConsumoResponsable"); fn = genFinanzasAhorroVsConsumoResponsable; break; }
    case "finanzas/13": { const { genFinanzasDeudaBuenaMala } = await import("./finanzas_13_deudaBuenaMala"); fn = genFinanzasDeudaBuenaMala; break; }
    case "finanzas/14": { const { genFinanzasCftVsInteres } = await import("./finanzas_14_cftVsInteres"); fn = genFinanzasCftVsInteres; break; }
    case "finanzas/15": { const { genFinanzasInteresSimple } = await import("./finanzas_15_interesSimple"); fn = genFinanzasInteresSimple; break; }
    case "finanzas/16": { const { genFinanzasInteresCompuesto } = await import("./finanzas_16_interesCompuesto"); fn = genFinanzasInteresCompuesto; break; }
    case "finanzas/17": { const { genFinanzasLiquidezPersonal } = await import("./finanzas_17_liquidezPersonal"); fn = genFinanzasLiquidezPersonal; break; }
    case "finanzas/18": { const { genFinanzasIngresosActivosPasivos } = await import("./finanzas_18_ingresosActivosPasivos"); fn = genFinanzasIngresosActivosPasivos; break; }
    case "finanzas/19": { const { genFinanzasPublicidadEnganosa } = await import("./finanzas_19_publicidadEnganosa"); fn = genFinanzasPublicidadEnganosa; break; }
    case "finanzas/20": { const { genFinanzasComparacionInversiones } = await import("./finanzas_20_comparacionInversiones"); fn = genFinanzasComparacionInversiones; break; }
    case "finanzas/21": { const { genFinanzasSegurosFamilia } = await import("./finanzas_21_segurosFamilia"); fn = genFinanzasSegurosFamilia; break; }

    /* Economía Argentina */
    case "economia_ar/21": { const { genARReciboBasico } = await import("./economia_ar_21_reciboBasico"); fn = genARReciboBasico; break; }
    case "economia_ar/22": { const { genARDescuentosObligatorios } = await import("./economia_ar_22_descuentosObligatorios"); fn = genARDescuentosObligatorios; break; }
    case "economia_ar/23": { const { genARAportes17 } = await import("./economia_ar_23_aportes17"); fn = genARAportes17; break; }
    case "economia_ar/24": { const { genARNetoDesdeBruto } = await import("./economia_ar_24_netoDesdeBruto"); fn = genARNetoDesdeBruto; break; }
    case "economia_ar/25": { const { genARIVA } = await import("./economia_ar_25_iva"); fn = genARIVA; break; }
    case "economia_ar/26": { const { genARIVACalculo } = await import("./economia_ar_26_ivaCalculo"); fn = genARIVACalculo; break; }
    case "economia_ar/27": { const { genARJurisdiccionImpuestos } = await import("./economia_ar_27_jurisdiccionImpuestos"); fn = genARJurisdiccionImpuestos; break; }
    case "economia_ar/28": { const { genARFormalInformal } = await import("./economia_ar_28_formalInformal"); fn = genARFormalInformal; break; }
    case "economia_ar/29": { const { genARMonotributo } = await import("./economia_ar_29_monotributo"); fn = genARMonotributo; break; }
    case "economia_ar/30": { const { genARTasaDesempleo } = await import("./economia_ar_30_tasaDesempleo"); fn = genARTasaDesempleo; break; }

    /* Economía general */
    case "economia/31": { const { genPoliticaFiscalMonetaria } = await import("./economia_31_politicaFiscalMonetaria"); fn = genPoliticaFiscalMonetaria; break; }
    case "economia/32": { const { genGananciaPerdida } = await import("./economia_32_gananciaPerdida"); fn = genGananciaPerdida; break; }
    case "economia/33": { const { genResultadoBruto } = await import("./economia_33_resultadoBruto"); fn = genResultadoBruto; break; }
    case "economia/34": { const { genResultadoNeto } = await import("./economia_34_resultadoNeto"); fn = genResultadoNeto; break; }
    case "economia/35": { const { genMargenBruto } = await import("./economia_35_margenBruto"); fn = genMargenBruto; break; }
    case "economia/36": { const { genMargenNeto } = await import("./economia_36_margenNeto"); fn = genMargenNeto; break; }
    case "economia/37": { const { genCapitalTrabajo } = await import("./economia_37_capitalTrabajo"); fn = genCapitalTrabajo; break; }
    case "economia/38": { const { genPuntoEquilibrio } = await import("./economia_38_puntoEquilibrio"); fn = genPuntoEquilibrio; break; }
    case "economia/39": { const { genProductividadEscolar } = await import("./economia_39_productividad"); fn = genProductividadEscolar; break; }
    case "economia/40": { const { genPorcentajesSimples } = await import("./economia_40_porcentajesSimples"); fn = genPorcentajesSimples; break; }
    case "economia/41": { const { genClasificacionBienes } = await import("./economia_41_clasificacionBienes"); fn = genClasificacionBienes; break; }
    case "economia/42": { const { genAgentesEconomicos } = await import("./economia_42_agentesEconomicos"); fn = genAgentesEconomicos; break; }
    case "economia/43": { const { genEstructurasMercado } = await import("./economia_43_estructurasMercado"); fn = genEstructurasMercado; break; }
    case "economia/44": { const { genGastosFijosVariables } = await import("./economia_44_gastosFijosVariables"); fn = genGastosFijosVariables; break; }
    case "economia/45": { const { genInteresSimpleVsCompuestoConcepto } = await import("./economia_45_simpleVsCompuesto"); fn = genInteresSimpleVsCompuestoConcepto; break; }
    case "economia/46": { const { genCFTMayorInteres } = await import("./economia_46_cftMayorInteres"); fn = genCFTMayorInteres; break; }
    case "economia/47": { const { genGananciaVsEquilibrio } = await import("./economia_47_gananciaVsEquilibrio"); fn = genGananciaVsEquilibrio; break; }
    case "economia/48": { const { genQuizAportesContribuciones } = await import("./economia_48_aportesContribuciones_quiz"); fn = genQuizAportesContribuciones; break; }
    case "economia/49": { const { genQuizDeudaBuenaMala } = await import("./economia_49_deudaBuenaMala_quiz"); fn = genQuizDeudaBuenaMala; break; }
    case "economia/50": { const { genQuizPublicidadEnganosa } = await import("./economia_50_publicidadEnganosa_quiz"); fn = genQuizPublicidadEnganosa; break; }
    case "economia/51": { const { genQuizGastosEsenciales } = await import("./economia_51_gastosEsenciales_quiz"); fn = genQuizGastosEsenciales; break; }
    case "economia/52": { const { genQuizLiquidezConcepto } = await import("./economia_52_liquidezConcepto_quiz"); fn = genQuizLiquidezConcepto; break; }
    case "economia/53": { const { genQuizInteresSimpleCompuesto } = await import("./economia_53_interesSimpleCompuesto_quiz"); fn = genQuizInteresSimpleCompuesto; break; }
    case "economia/54": { const { genQuizCFTMayorInteres } = await import("./economia_54_cftMayorInteres_quiz"); fn = genQuizCFTMayorInteres; break; }
    case "economia/55": { const { genQuizGananciaVsEquilibrio } = await import("./economia_55_gananciaVsEquilibrio_quiz"); fn = genQuizGananciaVsEquilibrio; break; }

    default: return undefined;
  }

  if (fn) ECONOMIA_CACHE.set(clave, fn);
  return fn;
}

export async function getDescriptorEconomiaPorClave(
  clave: string
): Promise<GeneratorDescriptor<Exercise, Parameters<GeneratorFn>> | undefined> {
  const generator = await getGeneradorEconomiaPorClave(clave);
  if (!generator) return undefined;
  const generatorId = `economia:${clave}`;
  return {
    id: generatorId,
    version: ECONOMIA_GENERATOR_VERSION,
    generate: (...args) => ({
      ...generator(...args),
      generatorId,
      generatorVersion: ECONOMIA_GENERATOR_VERSION,
    }),
  };
}

export async function getGeneradorEconomia(
  categoria: EconomiaCategoria,
  idTema: number
): Promise<GeneratorFn | undefined> {
  return getGeneradorEconomiaPorClave(`${categoria}/${idTema}`);
}
