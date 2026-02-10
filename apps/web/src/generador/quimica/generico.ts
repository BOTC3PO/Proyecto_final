// src/generators/quimica/generico.ts

import type { VisualSpec } from "../../visualizadores/types";
import type { PRNG } from "../core/prng";

export type Dificultad = "facil" | "media" | "dificil";

export const ENUNCIADOS_QUIMICA: Record<string, string> = {
  "quimica:1": "Balancear ecuaciones químicas respetando conservación de masa y coeficientes enteros mínimos.",
  "quimica:20": "Resolver diluciones relacionando concentración y volumen antes/después del proceso.",
  "quimica:34": "Calcular pH/pOH e identificar acidez/basicidad de soluciones.",
  "quimica:63": "Aplicar elevación ebulloscópica para estimar cambio de punto de ebullición.",
  "quimica:84": "Seleccionar método de separación de mezclas según propiedades físicas relevantes.",
  "quimica:90": "Reconocer y analizar reacciones de neutralización ácido-base con productos esperados.",
  "quimica:95": "Elegir EPP adecuado según riesgo químico del escenario planteado."
};

export const getQuimicaPromptHint = (targetId: string): string =>
  ENUNCIADOS_QUIMICA[targetId] ??
  `Resolver ejercicio de ${targetId} explicando concepto principal y resultado esperado.`;


export interface BaseExercise {
  idTema: number;            // 1 a 95
  tituloTema: string;
  dificultad: Dificultad;
  generatorId?: string;
  generatorVersion?: number;
  visualSpec?: VisualSpec;
}

// Ejercicio numérico (con cuentas)
export interface NumericExercise extends BaseExercise {
  tipo: "numeric";
  enunciado: string;
  datos: Record<string, number>;
  unidades?: Record<string, string>;
  // Puede ser un número, un vector (ej. coeficientes) o un objeto
  resultado: number | number[] | Record<string, number> | string;
  toleranciaRelativa?: number; // 0.05 = ±5%
  pasos?: string[];
}

// Ejercicio tipo quiz (sin matemáticas)
export interface QuizExercise extends BaseExercise {
  idTema: number;
  tituloTema: string;
  dificultad: Dificultad;
  tipo: "quiz";
  enunciado: string;
  opciones: string[];          // máx 10
  indiceCorrecto: number;      // índice en opciones
  explicacion?: string;
}

export type Exercise = NumericExercise | QuizExercise;

export type GeneratorFn = (dificultad?: Dificultad, prng?: PRNG) => Exercise;

let ACTIVE_PRNG: PRNG | null = null;

export function setPrng(prng: PRNG): void {
  ACTIVE_PRNG = prng;
}

function requirePrng(): PRNG {
  if (!ACTIVE_PRNG) {
    throw new Error("PRNG no inicializado para generadores de química.");
  }
  return ACTIVE_PRNG;
}

// Helpers generales
export function randInt(min: number, max: number): number {
  return requirePrng().int(min, max);
}

export function randFloat(min: number, max: number, decimales = 2): number {
  const value = requirePrng().next() * (max - min) + min;
  return parseFloat(value.toFixed(decimales));
}

export function choice<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

export function shuffle<T>(arr: T[]): T[] {
  return requirePrng().shuffle(arr);
}

export function randomBool(probability = 0.5): boolean {
  return requirePrng().next() < probability;
}

// Placeholders para temas aún no implementados

export function createPlaceholderNumeric(
  idTema: number,
  tituloTema: string
): GeneratorFn {
  return (dificultad: Dificultad = "media", prng?: PRNG) => {
    if (!prng) {
      throw new Error("Se requiere un PRNG inicializado para generar ejercicios.");
    }
    setPrng(prng);
    return {
      idTema,
      tituloTema,
      dificultad,
      tipo: "numeric",
      enunciado: `Ejercicio numérico aún no implementado para el tema: ${tituloTema}`,
      datos: {},
      resultado: 0,
    };
  };
}

export function createPlaceholderQuiz(
  idTema: number,
  tituloTema: string
): GeneratorFn {
  return (dificultad: Dificultad = "media", prng?: PRNG) => {
    if (!prng) {
      throw new Error("Se requiere un PRNG inicializado para generar ejercicios.");
    }
    setPrng(prng);
    return {
      idTema,
      tituloTema,
      dificultad,
      tipo: "quiz",
      enunciado: `Ejercicio tipo quiz aún no implementado para el tema: ${tituloTema}`,
      opciones: [],
      indiceCorrecto: 0,
    };
  };
}
