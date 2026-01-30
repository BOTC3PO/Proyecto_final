// src/generators/economia/generico.ts

// Importás la dificultad “global” que ya tenés en types.ts
import type { Dificultad as DificultadGlobal } from "../core/types";
import type { PRNG } from "../core/prng";

// Re-export para usarla en los generadores de economía
export type Dificultad = DificultadGlobal;

// Base común para todos los ejercicios de economía/contabilidad
export interface BaseExercise {
  idTema: number;       // 1, 2, 3... según tu tabla de temas
  tituloTema: string;
  dificultad: Dificultad;
}

// Ejercicio tipo quiz (multiple choice)
export interface QuizExercise extends BaseExercise {
  tipo: "quiz";
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;     // índice de la opción correcta
  explicacion?: string;
}

// Más adelante podés agregar NumericExercise, TablaExercise, etc.
export type Exercise = QuizExercise;

// Firma estándar de un generador de ejercicios
export type GeneratorFn = (dificultad?: Dificultad, prng?: PRNG) => Exercise;

let ACTIVE_PRNG: PRNG | null = null;

export function setPrng(prng: PRNG): void {
  ACTIVE_PRNG = prng;
}

function requirePrng(): PRNG {
  if (!ACTIVE_PRNG) {
    throw new Error("PRNG no inicializado para generadores de economía.");
  }
  return ACTIVE_PRNG;
}

export const DIFICULTAD_ORDEN: Dificultad[] = [
  "basico",
  "intermedio",
  "avanzado",
  "Legendario",
  "Divino",
];

export const DIFICULTAD_RANK: Record<Dificultad, number> = {
  basico: 0,
  intermedio: 1,
  avanzado: 2,
  Legendario: 3,
  Divino: 4,
};

export function dificultadFactor(dificultad: Dificultad): number {
  switch (dificultad) {
    case "basico":
      return 0.8;
    case "intermedio":
      return 1;
    case "avanzado":
      return 1.2;
    case "Legendario":
      return 1.4;
    case "Divino":
      return 1.6;
    default:
      return 1;
  }
}

export function ajustarRango(
  min: number,
  max: number,
  dificultad: Dificultad,
  minFloor = 1
): [number, number] {
  const factor = dificultadFactor(dificultad);
  const minEscalado = Math.max(minFloor, Math.round(min * factor));
  const maxEscalado = Math.max(minEscalado, Math.round(max * factor));
  return [minEscalado, maxEscalado];
}

export function esDificultadMinima(
  dificultadActual: Dificultad,
  minima: Dificultad
): boolean {
  return DIFICULTAD_RANK[dificultadActual] >= DIFICULTAD_RANK[minima];
}

/**
 * Devuelve un elemento aleatorio de un array.
 */
export function pickOne<T>(items: T[]): T {
  return items[requirePrng().int(0, items.length - 1)];
}

export function randInt(min: number, max: number): number {
  return requirePrng().int(min, max);
}

export function randomBool(probability = 0.5): boolean {
  return requirePrng().next() < probability;
}

/**
 * Mezcla opciones y actualiza el índice correcto.
 */
function shuffleWithCorrectIndex(
  opciones: string[],
  indiceCorrecto: number
): { opciones: string[]; indiceCorrecto: number } {
  const items = opciones.map((text, index) => ({ text, index }));

  for (let i = items.length - 1; i > 0; i--) {
    const j = requirePrng().int(0, i);
    [items[i], items[j]] = [items[j], items[i]];
  }

  const nuevasOpciones = items.map((i) => i.text);
  const nuevoIndiceCorrecto = items.findIndex(
    (i) => i.index === indiceCorrecto
  );

  return { opciones: nuevasOpciones, indiceCorrecto: nuevoIndiceCorrecto };
}

/**
 * Crea un QuizExercise completo a partir de datos base.
 */
export function crearQuizExercise(params: {
  idTema: number;
  tituloTema: string;
  dificultad: Dificultad;
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
}): QuizExercise {
  const { opciones, indiceCorrecto } = shuffleWithCorrectIndex(
    params.opciones,
    params.indiceCorrecto
  );

  return {
    idTema: params.idTema,
    tituloTema: params.tituloTema,
    dificultad: params.dificultad,
    tipo: "quiz",
    enunciado: params.enunciado,
    opciones,
    indiceCorrecto,
    explicacion: params.explicacion,
  };
}

/**
 * Crea un GeneratorFn de tipo quiz a partir de plantillas.
 *
 * Cada plantilla recibe la dificultad y devuelve:
 *   - enunciado
 *   - opciones
 *   - indiceCorrecto
 *   - explicacion (opcional)
 */
export function makeQuizGenerator(
  idTema: number,
  tituloTema: string,
  plantillas: Array<
    (dificultad: Dificultad) => {
      enunciado: string;
      opciones: string[];
      indiceCorrecto: number;
      explicacion?: string;
    }
  >
): GeneratorFn {
  return (dificultad?: Dificultad, prng?: PRNG) => {
    if (!prng) {
      throw new Error("Se requiere un PRNG inicializado para generar ejercicios.");
    }
    setPrng(prng);
    const dif = (dificultad ?? ("intermedio" as Dificultad)) as Dificultad;

    // ahora plantillas es un array de funciones, esto compila bien
    const idx = requirePrng().int(0, plantillas.length - 1);
    const template = plantillas[idx];
    const base = template(dif);

    return crearQuizExercise({
      idTema,
      tituloTema,
      dificultad: dif,
      ...base,
    });
  };
}
/**
 * Generador placeholder para temas que todavía no implementaste.
 */
export function createPlaceholderQuiz(
  idTema: number,
  tituloTema: string
): GeneratorFn {
  return (dificultad: Dificultad = "intermedio" as Dificultad, prng?: PRNG) => {
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
