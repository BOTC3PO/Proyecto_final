import type { PRNG } from "./prng";

// ── Estado global PRNG ────────────────────────────────────────────
let ACTIVE_PRNG: PRNG | null = null;

export function setPrng(prng: PRNG): void {
  ACTIVE_PRNG = prng;
}

export function requirePrng(): PRNG {
  if (!ACTIVE_PRNG) throw new Error("PRNG no inicializado.");
  return ACTIVE_PRNG;
}

// ── Helpers ───────────────────────────────────────────────────────
export function randInt(min: number, max: number): number {
  return requirePrng().int(min, max);
}

export function randFloat(min: number, max: number, decimales = 2): number {
  const value = requirePrng().next() * (max - min) + min;
  return parseFloat(value.toFixed(decimales));
}

export function pickOne<T>(items: T[]): T {
  return items[randInt(0, items.length - 1)];
}

export const pickRandom = pickOne;

export function shuffle<T>(arr: T[]): T[] {
  return requirePrng().shuffle(arr);
}

export function randomBool(probability = 0.5): boolean {
  return requirePrng().next() < probability;
}

// ── Tipos base compartidos ────────────────────────────────────────
export interface SharedBaseExercise {
  idTema: number;
  tituloTema: string;
  dificultad: string;
  generatorId?: string;
  generatorVersion?: number;
}

export interface SharedQuizExercise extends SharedBaseExercise {
  tipo: "quiz";
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
}

export interface SharedNumericExercise extends SharedBaseExercise {
  tipo: "numeric";
  enunciado: string;
  datos: Record<string, number>;
  unidades?: Record<string, string>;
  resultado: number | number[] | Record<string, number | string> | string;
  toleranciaRelativa?: number;
  pasos?: string[];
}

// ── Factory con shuffle automático ───────────────────────────────
export function crearQuizExercise<T extends SharedBaseExercise>(params: {
  base: Omit<T, "tipo" | "enunciado" | "opciones" | "indiceCorrecto" | "explicacion">;
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
}): SharedQuizExercise & Omit<T, keyof SharedQuizExercise> {
  const prng = requirePrng();
  const items = params.opciones.map((text, i) => ({ text, original: i }));
  const shuffled = prng.shuffle(items);
  const nuevoIndice = shuffled.findIndex((item) => item.original === params.indiceCorrecto);
  return {
    ...params.base,
    tipo: "quiz",
    enunciado: params.enunciado,
    opciones: shuffled.map((item) => item.text),
    indiceCorrecto: nuevoIndice,
    explicacion: params.explicacion,
  } as SharedQuizExercise & Omit<T, keyof SharedQuizExercise>;
}

export function createPlaceholderQuiz(idTema: number, tituloTema: string) {
  return (dificultad = "intermedio", prng?: PRNG) => {
    if (prng) setPrng(prng);
    return {
      idTema,
      tituloTema,
      dificultad,
      tipo: "quiz" as const,
      enunciado: `Ejercicio no implementado: ${tituloTema}`,
      opciones: [],
      indiceCorrecto: 0,
    };
  };
}
