// src/generators/math/index.ts
import { normalizarDificultadBasica, wrapConModo } from "./generic";
import type { Dificultad, Exercise, GeneratorFn } from "./generic";
import type { GeneratorDescriptor } from "../core/types";

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
// IMPORTS TEMAS 47–53 (Lógicos 51–55)
// =======================
import generarPotenciasExponentes from "./tema47_potencias_exponentes";
import generarRadicalesSimplificacion from "./tema48_radicales_simplificacion";
import generarEcuacionesPotenciasRadicales from "./tema49_ecuaciones_potencias_radicales";
import generarNotacionCientifica from "./tema50_notacion_cientifica";
import generarInteresSimpleCompuesto from "./tema51_interes_simple_compuesto";
import generarRepresentacionDatos from "./tema52_representacion_datos";
import generarTendenciasDescriptiva from "./tema53_tendencias_descriptiva";
import generarProbabilidadVisual from "./tema54_probabilidad_visual";
import generarInferenciaEstadistica from "./tema55_inferencia_estadistica";
import generarTema56TrigonometriaBasica from "./tema56_trigonometria_basica";
import generarTema57TrigonometriaAplicada from "./tema57_trigonometria_aplicada";
import generarTema58IdentidadesTrigonometricas from "./tema58_identidades_trigonometricas";
import generarTema59EcuacionesTrigonometricas from "./tema59_ecuaciones_trigonometricas";
import generarTema60FuncionesExponenciales from "./tema60_funciones_exponenciales";
import generarTema61FuncionesLogaritmicas from "./tema61_funciones_logaritmicas";
import generarTema62EcuacionesExponenciales from "./tema62_ecuaciones_exponenciales";
import generarTema63EcuacionesLogaritmicas from "./tema63_ecuaciones_logaritmicas";
import generarTema64NumerosComplejos from "./tema64_numeros_complejos";
import generarTema65OperacionesComplejos from "./tema65_operaciones_complejos";
import generarTema66MatricesBasico from "./tema66_matrices_basico";
import generarTema67DeterminantesBasico from "./tema67_determinantes_basico";
import generarTema68SistemasPorMatrices from "./tema68_sistemas_por_matrices";
import generarTema69VectoresBasico from "./tema69_vectores_basico";
import generarTema70GeometriaEspacial from "./tema70_geometria_espacial";
import generarTema71LimitesFunciones from "./tema71_limites_funciones";
import generarTema72Continuidad from "./tema72_continuidad";
import generarTema73DerivadaDefinicion from "./tema73_derivada_definicion";
import generarTema74DerivadasBasicas from "./tema74_derivadas_basicas";
import generarTema75ReglasDerivacion from "./tema75_reglas_derivacion";
import generarTema76AplicacionesDerivadas from "./tema76_aplicaciones_derivadas";
import generarTema77IntegralIndefinida from "./tema77_integral_indefinida";
import generarTema78IntegralDefinida from "./tema78_integral_definida";
import generarTema79AplicacionesIntegrales from "./tema79_aplicaciones_integrales";
import generarTema80EcuacionesDiferencialesBasico from "./tema80_ecuaciones_diferenciales_basico";
import generarTema81ProbabilidadAvanzada from "./tema81_probabilidad_avanzada";
import generarTema82VariablesAleatorias from "./tema82_variables_aleatorias";
import generarTema83Distribuciones from "./tema83_distribuciones";
import generarTema84EstadisticaInferencial from "./tema84_estadistica_inferencial";
import generarTema85RegresionCorrelacion from "./tema85_regresion_correlacion";

// =======================================================
// MAPA GLOBAL: idTema → GeneratorFn
// =======================================================

const TEMAS_CON_DIFICULTAD_CORE = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
]);

const wrapConDificultadBasica =
  (generator: GeneratorFn): GeneratorFn =>
  (dificultad, config, prng) =>
    generator(
      dificultad ? normalizarDificultadBasica(dificultad) : dificultad,
      config,
      prng
    );

const GENERATORS_BY_TEMA_BASE: Record<number, GeneratorFn> = {
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
  52: generarRepresentacionDatos,
  53: generarTendenciasDescriptiva,
  54: generarProbabilidadVisual,
  55: generarInferenciaEstadistica,
  56: generarTema56TrigonometriaBasica,
  57: generarTema57TrigonometriaAplicada,
  58: generarTema58IdentidadesTrigonometricas,
  59: generarTema59EcuacionesTrigonometricas,
  60: generarTema60FuncionesExponenciales,
  61: generarTema61FuncionesLogaritmicas,
  62: generarTema62EcuacionesExponenciales,
  63: generarTema63EcuacionesLogaritmicas,
  64: generarTema64NumerosComplejos,
  65: generarTema65OperacionesComplejos,
  66: generarTema66MatricesBasico,
  67: generarTema67DeterminantesBasico,
  68: generarTema68SistemasPorMatrices,
  69: generarTema69VectoresBasico,
  70: generarTema70GeometriaEspacial,
  71: generarTema71LimitesFunciones,
  72: generarTema72Continuidad,
  73: generarTema73DerivadaDefinicion,
  74: generarTema74DerivadasBasicas,
  75: generarTema75ReglasDerivacion,
  76: generarTema76AplicacionesDerivadas,
  77: generarTema77IntegralIndefinida,
  78: generarTema78IntegralDefinida,
  79: generarTema79AplicacionesIntegrales,
  80: generarTema80EcuacionesDiferencialesBasico,
  81: generarTema81ProbabilidadAvanzada,
  82: generarTema82VariablesAleatorias,
  83: generarTema83Distribuciones,
  84: generarTema84EstadisticaInferencial,
  85: generarTema85RegresionCorrelacion,
};

export const GENERATORS_BY_TEMA: Record<number, GeneratorFn> = Object.fromEntries(
  Object.entries(GENERATORS_BY_TEMA_BASE).map(([id, generador]) => {
    const idTema = Number(id);
    const generadorAdaptado = TEMAS_CON_DIFICULTAD_CORE.has(idTema)
      ? generador
      : wrapConDificultadBasica(generador);
    return [idTema, wrapConModo(generadorAdaptado)];
  })
) as Record<number, GeneratorFn>;

const MATEMATICAS_GENERATOR_VERSION = 1;

export const GENERADORES_MATEMATICAS_POR_TEMA: Record<
  number,
  GeneratorDescriptor<Exercise, Parameters<GeneratorFn>>
> = Object.fromEntries(
  Object.entries(GENERATORS_BY_TEMA).map(([id, generador]) => {
    const idTema = Number(id);
    const generatorId = `matematicas:${idTema}`;
    return [
      idTema,
      {
        id: generatorId,
        version: MATEMATICAS_GENERATOR_VERSION,
        generate: (...args) => ({
          ...generador(...args),
          generatorId,
          generatorVersion: MATEMATICAS_GENERATOR_VERSION,
        }),
      },
    ];
  })
) as Record<number, GeneratorDescriptor<Exercise, Parameters<GeneratorFn>>>;

export const TEMAS_MATEMATICAS_INFO: Record<
  number,
  { titulo: string; dificultad: Dificultad }
> = {
  52: {
    titulo: "Representación de datos (tablas y gráficos)",
    dificultad: "basico",
  },
  53: {
    titulo: "Tendencias y análisis descriptivo",
    dificultad: "basico",
  },
  54: {
    titulo: "Probabilidad compuesta y distribuciones",
    dificultad: "basico",
  },
  55: {
    titulo: "Inferencia estadística: intervalos y contrastes",
    dificultad: "basico",
  },
  56: { titulo: "Trigonometría básica", dificultad: "basico" },
  57: { titulo: "Trigonometría aplicada", dificultad: "intermedio" },
  58: { titulo: "Identidades trigonométricas", dificultad: "intermedio" },
  59: { titulo: "Ecuaciones trigonométricas", dificultad: "avanzado" },
  60: { titulo: "Funciones exponenciales", dificultad: "basico" },
  61: { titulo: "Funciones logarítmicas", dificultad: "basico" },
  62: { titulo: "Ecuaciones exponenciales", dificultad: "intermedio" },
  63: { titulo: "Ecuaciones logarítmicas", dificultad: "intermedio" },
  64: { titulo: "Números complejos", dificultad: "basico" },
  65: { titulo: "Operaciones con complejos", dificultad: "intermedio" },
  66: { titulo: "Matrices básico", dificultad: "basico" },
  67: { titulo: "Determinantes básico", dificultad: "intermedio" },
  68: { titulo: "Sistemas por matrices", dificultad: "intermedio" },
  69: { titulo: "Vectores básico", dificultad: "basico" },
  70: { titulo: "Geometría espacial", dificultad: "intermedio" },
  71: { titulo: "Límites de funciones", dificultad: "intermedio" },
  72: { titulo: "Continuidad", dificultad: "intermedio" },
  73: { titulo: "Derivada por definición", dificultad: "intermedio" },
  74: { titulo: "Derivadas básicas", dificultad: "basico" },
  75: { titulo: "Reglas de derivación", dificultad: "intermedio" },
  76: { titulo: "Aplicaciones de derivadas", dificultad: "avanzado" },
  77: { titulo: "Integral indefinida", dificultad: "intermedio" },
  78: { titulo: "Integral definida", dificultad: "intermedio" },
  79: { titulo: "Aplicaciones de integrales", dificultad: "avanzado" },
  80: { titulo: "Ecuaciones diferenciales básico", dificultad: "avanzado" },
  81: { titulo: "Probabilidad avanzada", dificultad: "avanzado" },
  82: { titulo: "Variables aleatorias", dificultad: "intermedio" },
  83: { titulo: "Distribuciones", dificultad: "intermedio" },
  84: { titulo: "Estadística inferencial", dificultad: "avanzado" },
  85: { titulo: "Regresión y correlación", dificultad: "avanzado" },
};

// Helper opcional para obtener un generador de forma segura
export function getGeneratorPorTema(idTema: number): GeneratorFn | undefined {
  return GENERATORS_BY_TEMA[idTema];
}
