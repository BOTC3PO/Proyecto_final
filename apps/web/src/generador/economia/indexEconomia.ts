import type { GeneratorFn } from "./generico";

import { genContabClasificacionCuentas } from "./contab_01_clasificacionCuentas";
import { genContabNaturalezaCuentas } from "./contab_02_naturalezaCuentas";
import { genContabSaldoNormal } from "./contab_03_saldoNormal";
import { genContabUbicacionEstados } from "./contab_04_ubicacionEstados";
import { genContabHechosPatrimonio } from "./contab_05_hechosPatrimonio";
import { genContabBienesDerechosObligaciones } from "./contab_06_bienesDerechosObligaciones";
import { genContabAportesContribuciones } from "./contab_07_aportesContribuciones";
import { genContabVariacionesPatrimoniales } from "./contab_08_variacionesPatrimoniales";

import { genFinanzasPresupuestoFamiliar } from "./finanzas_09_presupuestoFamiliar";
import { genFinanzasGastosFijosEsenciales } from "./finanzas_10_gastosFijosEsenciales";
import { genFinanzasGastosEsencialesNoEsenciales } from "./finanzas_11_gastosEsencialesNoEsenciales";
import { genFinanzasAhorroVsConsumoResponsable } from "./finanzas_12_ahorroVsConsumoResponsable";
import { genFinanzasDeudaBuenaMala } from "./finanzas_13_deudaBuenaMala";
import { genFinanzasCftVsInteres } from "./finanzas_14_cftVsInteres";
import { genFinanzasInteresSimple } from "./finanzas_15_interesSimple";
import { genFinanzasInteresCompuesto } from "./finanzas_16_interesCompuesto";
import { genFinanzasLiquidezPersonal } from "./finanzas_17_liquidezPersonal";
import { genFinanzasIngresosActivosPasivos } from "./finanzas_18_ingresosActivosPasivos";
import { genFinanzasPublicidadEnganosa } from "./finanzas_19_publicidadEnganosa";
import { genFinanzasComparacionInversiones } from "./finanzas_20_comparacionInversiones";
import { genFinanzasSegurosFamilia } from "./finanzas_21_segurosFamilia";

import { genARReciboBasico } from "./economia_ar_21_reciboBasico";
import { genARDescuentosObligatorios } from "./economia_ar_22_descuentosObligatorios";
import { genARAportes17 } from "./economia_ar_23_aportes17";
import { genARNetoDesdeBruto } from "./economia_ar_24_netoDesdeBruto";
import { genARIVA } from "./economia_ar_25_iva";
import { genARIVACalculo } from "./economia_ar_26_ivaCalculo";
import { genARJurisdiccionImpuestos } from "./economia_ar_27_jurisdiccionImpuestos";
import { genARFormalInformal } from "./economia_ar_28_formalInformal";
import { genARMonotributo } from "./economia_ar_29_monotributo";
import { genARTasaDesempleo } from "./economia_ar_30_tasaDesempleo";

import { genPoliticaFiscalMonetaria } from "./economia_31_politicaFiscalMonetaria";
import { genGananciaPerdida } from "./economia_32_gananciaPerdida";
import { genResultadoBruto } from "./economia_33_resultadoBruto";
import { genResultadoNeto } from "./economia_34_resultadoNeto";
import { genMargenBruto } from "./economia_35_margenBruto";
import { genMargenNeto } from "./economia_36_margenNeto";
import { genCapitalTrabajo } from "./economia_37_capitalTrabajo";
import { genPuntoEquilibrio } from "./economia_38_puntoEquilibrio";
import { genProductividadEscolar } from "./economia_39_productividad";
import { genPorcentajesSimples } from "./economia_40_porcentajesSimples";
import { genClasificacionBienes } from "./economia_41_clasificacionBienes";
import { genAgentesEconomicos } from "./economia_42_agentesEconomicos";
import { genEstructurasMercado } from "./economia_43_estructurasMercado";
import { genGastosFijosVariables } from "./economia_44_gastosFijosVariables";
import { genInteresSimpleVsCompuestoConcepto } from "./economia_45_simpleVsCompuesto";
import { genCFTMayorInteres } from "./economia_46_cftMayorInteres";
import { genGananciaVsEquilibrio } from "./economia_47_gananciaVsEquilibrio";
import { genQuizAportesContribuciones } from "./economia_48_aportesContribuciones_quiz";
import { genQuizDeudaBuenaMala } from "./economia_49_deudaBuenaMala_quiz";
import { genQuizPublicidadEnganosa } from "./economia_50_publicidadEnganosa_quiz";
import { genQuizGastosEsenciales } from "./economia_51_gastosEsenciales_quiz";
import { genQuizLiquidezConcepto } from "./economia_52_liquidezConcepto_quiz";
import { genQuizInteresSimpleCompuesto } from "./economia_53_interesSimpleCompuesto_quiz";
import { genQuizCFTMayorInteres } from "./economia_54_cftMayorInteres_quiz";
import { genQuizGananciaVsEquilibrio } from "./economia_55_gananciaVsEquilibrio_quiz";

export type EconomiaCategoria =
  | "contabilidad"
  | "finanzas"
  | "economia_ar"
  | "economia";

export const GENERADORES_CONTABILIDAD: Record<number, GeneratorFn> = {
  1: genContabClasificacionCuentas,
  2: genContabNaturalezaCuentas,
  3: genContabSaldoNormal,
  4: genContabUbicacionEstados,
  5: genContabHechosPatrimonio,
  6: genContabBienesDerechosObligaciones,
  7: genContabAportesContribuciones,
  8: genContabVariacionesPatrimoniales,
};

export const GENERADORES_FINANZAS: Record<number, GeneratorFn> = {
  9: genFinanzasPresupuestoFamiliar,
  10: genFinanzasGastosFijosEsenciales,
  11: genFinanzasGastosEsencialesNoEsenciales,
  12: genFinanzasAhorroVsConsumoResponsable,
  13: genFinanzasDeudaBuenaMala,
  14: genFinanzasCftVsInteres,
  15: genFinanzasInteresSimple,
  16: genFinanzasInteresCompuesto,
  17: genFinanzasLiquidezPersonal,
  18: genFinanzasIngresosActivosPasivos,
  19: genFinanzasPublicidadEnganosa,
  20: genFinanzasComparacionInversiones,
  21: genFinanzasSegurosFamilia,
};

export const GENERADORES_ECONOMIA_AR: Record<number, GeneratorFn> = {
  21: genARReciboBasico,
  22: genARDescuentosObligatorios,
  23: genARAportes17,
  24: genARNetoDesdeBruto,
  25: genARIVA,
  26: genARIVACalculo,
  27: genARJurisdiccionImpuestos,
  28: genARFormalInformal,
  29: genARMonotributo,
  30: genARTasaDesempleo,
};

export const GENERADORES_ECONOMIA: Record<number, GeneratorFn> = {
  31: genPoliticaFiscalMonetaria,
  32: genGananciaPerdida,
  33: genResultadoBruto,
  34: genResultadoNeto,
  35: genMargenBruto,
  36: genMargenNeto,
  37: genCapitalTrabajo,
  38: genPuntoEquilibrio,
  39: genProductividadEscolar,
  40: genPorcentajesSimples,
  41: genClasificacionBienes,
  42: genAgentesEconomicos,
  43: genEstructurasMercado,
  44: genGastosFijosVariables,
  45: genInteresSimpleVsCompuestoConcepto,
  46: genCFTMayorInteres,
  47: genGananciaVsEquilibrio,
  48: genQuizAportesContribuciones,
  49: genQuizDeudaBuenaMala,
  50: genQuizPublicidadEnganosa,
  51: genQuizGastosEsenciales,
  52: genQuizLiquidezConcepto,
  53: genQuizInteresSimpleCompuesto,
  54: genQuizCFTMayorInteres,
  55: genQuizGananciaVsEquilibrio,
};

export const GENERADORES_ECONOMIA_POR_CATEGORIA: Record<
  EconomiaCategoria,
  Record<number, GeneratorFn>
> = {
  contabilidad: GENERADORES_CONTABILIDAD,
  finanzas: GENERADORES_FINANZAS,
  economia_ar: GENERADORES_ECONOMIA_AR,
  economia: GENERADORES_ECONOMIA,
};

export const GENERADORES_ECONOMIA_POR_CLAVE: Record<string, GeneratorFn> = {
  ...Object.fromEntries(
    Object.entries(GENERADORES_CONTABILIDAD).map(([id, generador]) => [
      `contabilidad/${id}`,
      generador,
    ])
  ),
  ...Object.fromEntries(
    Object.entries(GENERADORES_FINANZAS).map(([id, generador]) => [
      `finanzas/${id}`,
      generador,
    ])
  ),
  ...Object.fromEntries(
    Object.entries(GENERADORES_ECONOMIA_AR).map(([id, generador]) => [
      `economia_ar/${id}`,
      generador,
    ])
  ),
  ...Object.fromEntries(
    Object.entries(GENERADORES_ECONOMIA).map(([id, generador]) => [
      `economia/${id}`,
      generador,
    ])
  ),
};

export function getGeneradorEconomia(
  categoria: EconomiaCategoria,
  idTema: number
): GeneratorFn | undefined {
  return GENERADORES_ECONOMIA_POR_CATEGORIA[categoria]?.[idTema];
}

export function getGeneradorEconomiaPorClave(
  clave: string
): GeneratorFn | undefined {
  return GENERADORES_ECONOMIA_POR_CLAVE[clave];
}
