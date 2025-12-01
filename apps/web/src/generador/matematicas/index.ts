// src/generators/math/index.ts
import type { GeneratorFn } from "./generic";

// =======================
// IMPORTS TEMAS 1–10
// =======================

import generarOperacionesBasicas from "./tema01_operaciones_basicas";
import generarOperacionesCombinadas from "./tema02_operaciones_combinadas";
import generarNumerosPrimos from "./tema03_numeros_primos";
import generarDivisibilidadMcdMcm from "./tema04_divisibilidad_mcd_mcm";
import generarMultiplosYDivisores from "./tema05_multiplos_divisores";
import generarFracciones from "./tema06_fracciones";
import generarDecimales from "./tema07_decimales";
import generarPotencias from "./tema08_potencias";
import generarRaices from "./tema09_raices";
import generarPorcentajes from "./tema10_porcentaje";

// =======================
// IMPORTS TEMAS 11–15
// =======================
import generarReglaTresSimple from "./tema11_regla_tres_simple";
import generarProporcionalidad from "./tema12_proporcionalidad";
import generarEstadisticaBasica from "./tema13_estadistica_basica";
import generarProbabilidadSimple from "./tema14_probabilidad_simple";
import generarUnidadesMedida from "./tema15_unidades_medida";

// =======================
// IMPORTS TEMAS 16–20
// =======================
import generarPerimetroArea from "./tema16_perimetro_area";
import generarAngulos from "./tema17_angulos";
import generarCoordenadasPlano from "./tema18_coordenadas_plano";
import generarSucesionesNumericas from "./tema19_sucesiones_numericas";
import generarSeriesSimples from "./tema20_series_simples";

// =======================
// IMPORTS TEMAS 21–26 (ÁLGEBRA INICIAL)
// =======================
import generarLenguajeAlgebraico from "./tema21_lenguaje_algebraico";
import generarTerminosSemejantes from "./tema22_terminos_semejantes";
import generarEvaluacionExpresiones from "./tema23_evaluacion_expresiones";
import generarSumaRestaPolinomios from "./tema24_suma_resta_polinomios";
import generarMultiplicacionMonomiosPolinomios from "./tema25_multiplicacion_monomios_polinomios";
import generarGradoCoeficientes from "./tema26_grado_coeficientes";

// =======================
// IMPORTS TEMAS 27–32
// =======================
import generarFactorizacionBasica from "./tema27_factorizacion_basica";
import generarProductosNotables from "./tema28_productos_notables";
import generarEcuacionesLinealesSimples from "./tema29_ecuaciones_lineales";
import generarEcuacionesConParametros from "./tema30_ecuaciones_parametros";
import generarInecuacionesSimples from "./tema31_inecuaciones_simples";
import generarSistemas2x2 from "./tema32_sistemas_2x2";

// =======================
// IMPORTS TEMAS 33–40 (ÁLGEBRA INTERMEDIA)
// =======================
import generarEcuacionesCuadraticas from "./tema33_ecuaciones_cuadraticas";
import generarSistemas3x3 from "./tema34_sistemas_3x3";
import generarRacionalesSimples from "./tema35_racionales_simples";
import generarSimplificacionAlgebraica from "./tema36_simplificacion_algebraica";
import generarEcuacionesFraccionesAlgebraicas from "./tema37_ecuaciones_fracciones";
import generarFuncionesLineales from "./tema38_funciones_lineales";
import generarProblemasFuncionAfin from "./tema39_problemas_funcion_afín";
import generarEcuacionRecta from "./tema40_ecuacion_recta";

// =======================
// IMPORTS TEMAS 41–46
// =======================
import generarMultiplicacionPolinomiosAvanzada from "./tema41_multiplicacion_polinomios_avanzada";
import generarDivisionPolinomios from "./tema42_division_polinomios";
import generarIdentidadEcuacionInecuacion from "./tema43_identidad_ecuacion_inecuacion";
import generarIntervalosSoluciones from "./tema44_intervalos_soluciones";
import generarValorAbsolutoEcuaciones from "./tema45_valor_absoluto_ecuaciones";
import generarValorAbsolutoDistancia from "./tema46_valor_absoluto_distancia";

// =======================
// IMPORTS TEMAS 47–51 (Lógicos 51–55)
// =======================
import generarPotenciasExponentes from "./tema47_potencias_exponentes";
import generarRadicalesSimplificacion from "./tema48_radicales_simplificacion";
import generarEcuacionesPotenciasRadicales from "./tema49_ecuaciones_potencias_radicales";
import generarNotacionCientifica from "./tema50_notacion_cientifica";
import generarInteresSimpleCompuesto from "./tema51_interes_simple_compuesto";

// =======================================================
// MAPA GLOBAL: idTema → GeneratorFn
// =======================================================

export const GENERATORS_BY_TEMA: Record<number, GeneratorFn> = {
  // ---- 1–10 ----
  1: generarOperacionesBasicas,
  2: generarOperacionesCombinadas,
  3: generarNumerosPrimos,
  4: generarDivisibilidadMcdMcm,
  5: generarMultiplosYDivisores,
  6: generarFracciones,
  7: generarDecimales,
  8: generarPotencias,
  9: generarRaices,
  10: generarPorcentajes,

  // ---- 11–15 ----
  11: generarReglaTresSimple,
  12: generarProporcionalidad,
  13: generarEstadisticaBasica,
  14: generarProbabilidadSimple,
  15: generarUnidadesMedida,

  // ---- 16–20 ----
  16: generarPerimetroArea,
  17: generarAngulos,
  18: generarCoordenadasPlano,
  19: generarSucesionesNumericas,
  20: generarSeriesSimples,

  // ---- 21–26 (Álgebra inicial) ----
  21: generarLenguajeAlgebraico,
  22: generarTerminosSemejantes,
  23: generarEvaluacionExpresiones,
  24: generarSumaRestaPolinomios,
  25: generarMultiplicacionMonomiosPolinomios,
  26: generarGradoCoeficientes,

  // ---- 27–32 ----
  27: generarFactorizacionBasica,
  28: generarProductosNotables,
  29: generarEcuacionesLinealesSimples,
  30: generarEcuacionesConParametros,
  31: generarInecuacionesSimples,
  32: generarSistemas2x2,

  // ---- 33–40 ----
  33: generarEcuacionesCuadraticas,
  34: generarSistemas3x3,
  35: generarRacionalesSimples,
  36: generarSimplificacionAlgebraica,
  37: generarEcuacionesFraccionesAlgebraicas,
  38: generarFuncionesLineales,
  39: generarProblemasFuncionAfin,
  40: generarEcuacionRecta,

  // ---- 41–46 ----
  41: generarMultiplicacionPolinomiosAvanzada,
  42: generarDivisionPolinomios,
  43: generarIdentidadEcuacionInecuacion,
  44: generarIntervalosSoluciones,
  45: generarValorAbsolutoEcuaciones,
  46: generarValorAbsolutoDistancia,

  // ---- 47–51 (Potencias, radicales, notación científica, interés) ----
  47: generarPotenciasExponentes,
  48: generarRadicalesSimplificacion,
  49: generarEcuacionesPotenciasRadicales,
  50: generarNotacionCientifica,
  51: generarInteresSimpleCompuesto,
};

// Helper opcional para obtener un generador de forma segura
export function getGeneratorPorTema(idTema: number): GeneratorFn | undefined {
  return GENERATORS_BY_TEMA[idTema];
}
