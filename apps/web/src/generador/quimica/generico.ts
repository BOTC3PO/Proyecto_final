// src/generators/quimica/generico.ts

export type Dificultad = "facil" | "media" | "dificil";

export interface BaseExercise {
  idTema: number;            // 1 a 95
  tituloTema: string;
  dificultad: Dificultad;
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

export type GeneratorFn = (dificultad?: Dificultad) => Exercise;

// Helpers generales
export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randFloat(min: number, max: number, decimales = 2): number {
  const value = Math.random() * (max - min) + min;
  return parseFloat(value.toFixed(decimales));
}

export function choice<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Placeholders para temas aún no implementados

export function createPlaceholderNumeric(
  idTema: number,
  tituloTema: string
): GeneratorFn {
  return (dificultad: Dificultad = "media") => ({
    idTema,
    tituloTema,
    dificultad,
    tipo: "numeric",
    enunciado: `Ejercicio numérico aún no implementado para el tema: ${tituloTema}`,
    datos: {},
    resultado: 0,
  });
}

export function createPlaceholderQuiz(
  idTema: number,
  tituloTema: string
): GeneratorFn {
  return (dificultad: Dificultad = "media") => ({
    idTema,
    tituloTema,
    dificultad,
    tipo: "quiz",
    enunciado: `Ejercicio tipo quiz aún no implementado para el tema: ${tituloTema}`,
    opciones: [],
    indiceCorrecto: 0,
  });
}
