// src/generators/quimica/generico.ts

import type { VisualSpec } from "../../../archive/visualizadores/types";
import type { PRNG } from "../core/prng";
import { setPrng } from "../core/shared";

// Lo que viene de shared — re-exportar para compatibilidad
export { setPrng, randInt, randFloat, pickOne as choice, shuffle, randomBool, createPlaceholderQuiz } from "../core/shared";

export type Dificultad = "facil" | "media" | "dificil";

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
  resultado: number | number[] | Record<string, number | string> | string;
  toleranciaRelativa?: number; // 0.05 = ±5%
  pasos?: string[];
  catalogRef?: Record<string, unknown>;
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

// Placeholder específico de química (numérico)
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
