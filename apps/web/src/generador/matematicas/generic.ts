// src/generators/math/generic.ts

// ⬇️ Si ya tenés estos tipos en core/types.ts, BORRÁ estas definiciones
// y cambiá por imports desde ahí.
export type Dificultad = "facil" | "media" | "dificil";

export interface BaseExercise {
  id: string;
  idTema: number;
  tituloTema: string;
  dificultad: Dificultad;
  tipo: "quiz"; // de momento solo quiz, luego podés ampliar
}

export interface QuizExercise extends BaseExercise {
  tipo: "quiz";
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
}

export type Exercise = QuizExercise;

// Firma genérica de un generador
export type GeneratorFn = (dificultad?: Dificultad) => Exercise;

// -------- Helpers genéricos --------

let GLOBAL_ID_COUNTER = 1;

export function generarId(): string {
  return `ej-${GLOBAL_ID_COUNTER++}`;
}

export function randomInt(min: number, max: number): number {
  // ambos inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generic.ts
export function pickRandom<T>(arr: readonly T[]): T {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}


export function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function rangoPorDificultad(
  dificultad: Dificultad,
  overrides?: {
    facil?: [number, number];
    media?: [number, number];
    dificil?: [number, number];
  }
): [number, number] {
  const defaults: Record<Dificultad, [number, number]> = {
    facil: [1, 20],
    media: [1, 100],
    dificil: [1, 999],
  };
  const base = { ...defaults, ...overrides } as Record<Dificultad, [number, number]>;
  return base[dificultad];
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

export function generarPrimoEnRango(min: number, max: number): number {
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
