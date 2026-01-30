// src/generators/math/generic.ts

import type { Dificultad as DificultadCore } from "../core/types";
import type { PRNG } from "../core/prng";

export type DificultadBasica = "facil" | "media" | "dificil";
export type Dificultad = DificultadCore | DificultadBasica;

export type ModoRespuesta = "quiz" | "completar";

export interface GeneradorConfig {
  modo?: ModoRespuesta;
}

export interface BaseExercise {
  id: string;
  idTema: number;
  tituloTema: string;
  dificultad: Dificultad;
  generatorId?: string;
  generatorVersion?: number;
  tipo: "quiz"; // de momento solo quiz, luego podés ampliar
}

export interface QuizExercise extends BaseExercise {
  tipo: "quiz";
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
}

export interface CompletarExercise extends BaseExercise {
  tipo: "completar";
  enunciado: string;
  respuestaCorrecta: string;
  explicacion?: string;
}

export type Exercise = QuizExercise | CompletarExercise;

// Firma genérica de un generador
export type GeneratorFn = (
  dificultad?: Dificultad,
  config?: GeneradorConfig,
  prng?: PRNG
) => Exercise;

// -------- Helpers genéricos --------

let ACTIVE_PRNG: PRNG | null = null;
let QUESTION_INDEX = 0;

export function setPrng(prng: PRNG): void {
  ACTIVE_PRNG = prng;
  QUESTION_INDEX = 0;
}

function requirePrng(): PRNG {
  if (!ACTIVE_PRNG) {
    throw new Error("PRNG no inicializado para generadores de matemáticas.");
  }
  return ACTIVE_PRNG;
}

export function generarId(): string {
  const prng = requirePrng();
  const index = QUESTION_INDEX++;
  const random = Math.floor(prng.next() * 0xffffff)
    .toString(36)
    .padStart(6, "0");
  return `ej-${index.toString(36).padStart(4, "0")}-${random}`;
}

export function randomInt(min: number, max: number): number {
  // ambos inclusive
  return requirePrng().int(min, max);
}

// generic.ts
export function pickRandom<T>(arr: readonly T[]): T {
  const idx = requirePrng().int(0, arr.length - 1);
  return arr[idx];
}

export function shuffleArray<T>(arr: T[]): T[] {
  return requirePrng().shuffle(arr);
}

export function randomFloat(): number {
  return requirePrng().next();
}

export function randomBool(probability = 0.5): boolean {
  return requirePrng().next() < probability;
}

export function normalizarDificultadCore(
  dificultad: Dificultad
): DificultadCore {
  switch (dificultad) {
    case "facil":
      return "basico";
    case "media":
      return "intermedio";
    case "dificil":
      return "avanzado";
    default:
      return dificultad;
  }
}

export function normalizarDificultadBasica(
  dificultad: Dificultad
): DificultadBasica {
  switch (dificultad) {
    case "basico":
      return "facil";
    case "intermedio":
      return "media";
    case "avanzado":
    case "Legendario":
    case "Divino":
      return "dificil";
    default:
      return dificultad;
  }
}

export function rangoPorDificultad(
  dificultad: Dificultad,
  overrides?: {
    facil?: [number, number];
    media?: [number, number];
    dificil?: [number, number];
  }
): [number, number] {
  const defaults: Record<DificultadBasica, [number, number]> = {
    facil: [1, 20],
    media: [1, 100],
    dificil: [1, 999],
  };
  const base = {
    ...defaults,
    ...overrides,
  } as Record<DificultadBasica, [number, number]>;
  return base[normalizarDificultadBasica(dificultad)];
}

export function rangoPorDificultadCore(
  dificultad: Dificultad,
  overrides: {
    basico: [number, number];
    intermedio: [number, number];
    avanzado: [number, number];
    Legendario?: [number, number];
    Divino?: [number, number];
  }
): [number, number] {
  const normalizada = normalizarDificultadCore(dificultad);
  const base: Record<DificultadCore, [number, number]> = {
    basico: overrides.basico,
    intermedio: overrides.intermedio,
    avanzado: overrides.avanzado,
    Legendario: overrides.Legendario ?? overrides.avanzado,
    Divino: overrides.Divino ?? overrides.avanzado,
  };
  return base[normalizada];
}

// Para crear un Quiz rápido
export function crearQuizBase(params: {
  idTema: number;
  tituloTema: string;
  dificultad: Dificultad;
  enunciado: string;
  opciones: (string | number)[];
  indiceCorrecto: number; // índice respecto del array *sin mezclar*
  explicacion?: string;
}): QuizExercise {
  const opcionesStr = params.opciones.map(String);
  const opcionesMezcladas = shuffleArray(opcionesStr);

  const respuestaCorrecta = String(params.opciones[params.indiceCorrecto]);
  const indiceCorrectoMezclado = opcionesMezcladas.indexOf(respuestaCorrecta);

  return {
    id: generarId(),
    idTema: params.idTema,
    tituloTema: params.tituloTema,
    dificultad: params.dificultad,
    tipo: "quiz",
    enunciado: params.enunciado,
    opciones: opcionesMezcladas,
    indiceCorrecto: indiceCorrectoMezclado,
    explicacion: params.explicacion,
  };
}

export function convertirQuizACompletar(
  ejercicio: Exercise,
  enunciadoCompletar?: string
): Exercise {
  if (ejercicio.tipo !== "quiz") {
    return ejercicio;
  }

  const respuestaCorrecta = ejercicio.opciones[ejercicio.indiceCorrecto];
  const enunciado =
    enunciadoCompletar ??
    `${ejercicio.enunciado}\n\nCompleta con el resultado: ____`;

  return {
    id: ejercicio.id,
    idTema: ejercicio.idTema,
    tituloTema: ejercicio.tituloTema,
    dificultad: ejercicio.dificultad,
    tipo: "completar",
    enunciado,
    respuestaCorrecta,
    explicacion: ejercicio.explicacion,
  };
}

export function wrapConModo(generator: GeneratorFn): GeneratorFn {
  return (dificultad?: Dificultad, config?: GeneradorConfig, prng?: PRNG) => {
    if (!prng) {
      throw new Error("Se requiere un PRNG inicializado para generar ejercicios.");
    }
    setPrng(prng);
    const ejercicio = generator(dificultad, config, prng);
    if (config?.modo === "completar") {
      return convertirQuizACompletar(ejercicio);
    }
    return ejercicio;
  };
}

// -------- Helpers matemáticos reutilizables --------

export function esPrimo(n: number): boolean {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

export function generarPrimoEnRango(
  min: number,
  max: number
): number {
  let intento = 0;
  while (intento < 1000) {
    const n = randomInt(min, max);
    if (esPrimo(n)) return n;
    intento++;
  }
  // fallback bruto
  return 2;
}

export function mcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function mcm(a: number, b: number): number {
  return Math.abs(a * b) / mcd(a, b);
}

export function obtenerDivisores(n: number): number[] {
  const res: number[] = [];
  for (let i = 1; i <= Math.abs(n); i++) {
    if (n % i === 0) res.push(i);
  }
  return res;
}
