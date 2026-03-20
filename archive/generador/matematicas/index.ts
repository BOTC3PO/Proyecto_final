// src/generators/math/index.ts
import { wrapConModo } from "./generic";
import type { Dificultad, Exercise, GeneratorFn } from "./generic";
import type { GeneratorDescriptor } from "../core/types";

// =======================================================
// LAZY CACHE: idTema → GeneratorFn (wrapped)
// =======================================================

const GENERATOR_CACHE = new Map<number, GeneratorFn>();

const MATEMATICAS_GENERATOR_VERSION = 1;

export const MATEMATICAS_TEMA_MAX = 85;

export async function getGeneratorPorTema(idTema: number): Promise<GeneratorFn | undefined> {
  if (GENERATOR_CACHE.has(idTema)) return GENERATOR_CACHE.get(idTema)!;

  let fn: GeneratorFn | undefined;
  switch (idTema) {
    // ---- 1–10 ----
    case 1: fn = (await import("./tema01_operaciones_basicas")).default; break;
    case 2: fn = (await import("./tema02_operaciones_combinadas")).default; break;
    case 3: fn = (await import("./tema03_numeros_primos")).default; break;
    case 4: fn = (await import("./tema04_divisibilidad_mcd_mcm")).default; break;
    case 5: fn = (await import("./tema05_multiplos_divisores")).default; break;
    case 6: fn = (await import("./tema06_fracciones")).default; break;
    case 7: fn = (await import("./tema07_decimales")).default; break;
    case 8: fn = (await import("./tema08_potencias")).default; break;
    case 9: fn = (await import("./tema09_raices")).default; break;
    case 10: fn = (await import("./tema10_porcentaje")).default; break;

    // ---- 11–15 ----
    case 11: fn = (await import("./tema11_regla_tres_simple")).default; break;
    case 12: fn = (await import("./tema12_proporcionalidad")).default; break;
    case 13: fn = (await import("./tema13_estadistica_basica")).default; break;
    case 14: fn = (await import("./tema14_probabilidad_simple")).default; break;
    case 15: fn = (await import("./tema15_unidades_medida")).default; break;

    // ---- 16–20 ----
    case 16: fn = (await import("./tema16_perimetro_area")).default; break;
    case 17: fn = (await import("./tema17_angulos")).default; break;
    case 18: fn = (await import("./tema18_coordenadas_plano")).default; break;
    case 19: fn = (await import("./tema19_sucesiones_numericas")).default; break;
    case 20: fn = (await import("./tema20_series_simples")).default; break;

    // ---- 21–26 (Álgebra inicial) ----
    case 21: fn = (await import("./tema21_lenguaje_algebraico")).default; break;
    case 22: fn = (await import("./tema22_terminos_semejantes")).default; break;
    case 23: fn = (await import("./tema23_evaluacion_expresiones")).default; break;
    case 24: fn = (await import("./tema24_suma_resta_polinomios")).default; break;
    case 25: fn = (await import("./tema25_multiplicacion_monomios_polinomios")).default; break;
    case 26: fn = (await import("./tema26_grado_coeficientes")).default; break;

    // ---- 27–32 ----
    case 27: fn = (await import("./tema27_factorizacion_basica")).default; break;
    case 28: fn = (await import("./tema28_productos_notables")).default; break;
    case 29: fn = (await import("./tema29_ecuaciones_lineales")).default; break;
    case 30: fn = (await import("./tema30_ecuaciones_parametros")).default; break;
    case 31: fn = (await import("./tema31_inecuaciones_simples")).default; break;
    case 32: fn = (await import("./tema32_sistemas_2x2")).default; break;

    // ---- 33–40 ----
    case 33: fn = (await import("./tema33_ecuaciones_cuadraticas")).default; break;
    case 34: fn = (await import("./tema34_sistemas_3x3")).default; break;
    case 35: fn = (await import("./tema35_racionales_simples")).default; break;
    case 36: fn = (await import("./tema36_simplificacion_algebraica")).default; break;
    case 37: fn = (await import("./tema37_ecuaciones_fracciones")).default; break;
    case 38: fn = (await import("./tema38_funciones_lineales")).default; break;
    case 39: fn = (await import("./tema39_problemas_funcion_afín")).default; break;
    case 40: fn = (await import("./tema40_ecuacion_recta")).default; break;

    // ---- 41–46 ----
    case 41: fn = (await import("./tema41_multiplicacion_polinomios_avanzada")).default; break;
    case 42: fn = (await import("./tema42_division_polinomios")).default; break;
    case 43: fn = (await import("./tema43_identidad_ecuacion_inecuacion")).default; break;
    case 44: fn = (await import("./tema44_intervalos_soluciones")).default; break;
    case 45: fn = (await import("./tema45_valor_absoluto_ecuaciones")).default; break;
    case 46: fn = (await import("./tema46_valor_absoluto_distancia")).default; break;

    // ---- 47–55 ----
    case 47: fn = (await import("./tema47_potencias_exponentes")).default; break;
    case 48: fn = (await import("./tema48_radicales_simplificacion")).default; break;
    case 49: fn = (await import("./tema49_ecuaciones_potencias_radicales")).default; break;
    case 50: fn = (await import("./tema50_notacion_cientifica")).default; break;
    case 51: fn = (await import("./tema51_interes_simple_compuesto")).default; break;
    case 52: fn = (await import("./tema52_representacion_datos")).default; break;
    case 53: fn = (await import("./tema53_tendencias_descriptiva")).default; break;
    case 54: fn = (await import("./tema54_probabilidad_visual")).default; break;
    case 55: fn = (await import("./tema55_inferencia_estadistica")).default; break;

    // ---- 56–65 ----
    case 56: fn = (await import("./tema56_trigonometria_basica")).default; break;
    case 57: fn = (await import("./tema57_trigonometria_aplicada")).default; break;
    case 58: fn = (await import("./tema58_identidades_trigonometricas")).default; break;
    case 59: fn = (await import("./tema59_ecuaciones_trigonometricas")).default; break;
    case 60: fn = (await import("./tema60_funciones_exponenciales")).default; break;
    case 61: fn = (await import("./tema61_funciones_logaritmicas")).default; break;
    case 62: fn = (await import("./tema62_ecuaciones_exponenciales")).default; break;
    case 63: fn = (await import("./tema63_ecuaciones_logaritmicas")).default; break;
    case 64: fn = (await import("./tema64_numeros_complejos")).default; break;
    case 65: fn = (await import("./tema65_operaciones_complejos")).default; break;

    // ---- 66–70 ----
    case 66: fn = (await import("./tema66_matrices_basico")).default; break;
    case 67: fn = (await import("./tema67_determinantes_basico")).default; break;
    case 68: fn = (await import("./tema68_sistemas_por_matrices")).default; break;
    case 69: fn = (await import("./tema69_vectores_basico")).default; break;
    case 70: fn = (await import("./tema70_geometria_espacial")).default; break;

    // ---- 71–80 ----
    case 71: fn = (await import("./tema71_limites_funciones")).default; break;
    case 72: fn = (await import("./tema72_continuidad")).default; break;
    case 73: fn = (await import("./tema73_derivada_definicion")).default; break;
    case 74: fn = (await import("./tema74_derivadas_basicas")).default; break;
    case 75: fn = (await import("./tema75_reglas_derivacion")).default; break;
    case 76: fn = (await import("./tema76_aplicaciones_derivadas")).default; break;
    case 77: fn = (await import("./tema77_integral_indefinida")).default; break;
    case 78: fn = (await import("./tema78_integral_definida")).default; break;
    case 79: fn = (await import("./tema79_aplicaciones_integrales")).default; break;
    case 80: fn = (await import("./tema80_ecuaciones_diferenciales_basico")).default; break;

    // ---- 81–85 ----
    case 81: fn = (await import("./tema81_probabilidad_avanzada")).default; break;
    case 82: fn = (await import("./tema82_variables_aleatorias")).default; break;
    case 83: fn = (await import("./tema83_distribuciones")).default; break;
    case 84: fn = (await import("./tema84_estadistica_inferencial")).default; break;
    case 85: fn = (await import("./tema85_regresion_correlacion")).default; break;

    default: return undefined;
  }

  if (fn) {
    const wrapped = wrapConModo(fn);
    GENERATOR_CACHE.set(idTema, wrapped);
    return wrapped;
  }
  return undefined;
}

export async function getDescriptorPorTema(
  idTema: number
): Promise<GeneratorDescriptor<Exercise, Parameters<GeneratorFn>> | undefined> {
  const fn = await getGeneratorPorTema(idTema);
  if (!fn) return undefined;
  const generatorId = `matematicas:${idTema}`;
  return {
    id: generatorId,
    version: MATEMATICAS_GENERATOR_VERSION,
    generate: (...args) => ({
      ...fn(...args),
      generatorId,
      generatorVersion: MATEMATICAS_GENERATOR_VERSION,
    }),
  };
}

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
