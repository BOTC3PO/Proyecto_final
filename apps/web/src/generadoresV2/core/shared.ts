import type { PRNG } from "./prng";
import type { Dificultad, EjercicioQuiz, Materia } from "./types";

// ── Aritmética ────────────────────────────────────────────────────
export function redondear(v: number, decimals = 2): number {
  const factor = Math.pow(10, decimals);
  return Math.round(v * factor) / factor;
}

// ── PRNG helpers ──────────────────────────────────────────────────
export function randInt(prng: PRNG, min: number, max: number): number {
  return prng.int(min, max);
}

export function randFloat(prng: PRNG, min: number, max: number, decimals = 2): number {
  const value = min + prng.next() * (max - min);
  return redondear(value, decimals);
}

export function pickOne<T>(prng: PRNG, items: T[]): T {
  return items[prng.int(0, items.length - 1)];
}

export function shuffle<T>(prng: PRNG, arr: T[]): T[] {
  return prng.shuffle(arr);
}

// ── Opciones de quiz ──────────────────────────────────────────────
export function generarOpcionesIncorrectas(
  prng: PRNG,
  correcta: number,
  cantidad = 3,
  variacion = 0.3
): number[] {
  const opciones: number[] = [];
  let intentos = 0;
  while (opciones.length < cantidad && intentos < 100) {
    intentos++;
    const offset = (prng.next() * 2 - 1) * variacion;
    const valor = redondear(correcta * (1 + offset));
    if (valor !== correcta && !opciones.includes(valor)) {
      opciones.push(valor);
    }
  }
  return opciones;
}

export interface QuizParams {
  id: string;
  materia: Materia;
  subtipo: string;
  dificultad: Dificultad;
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion?: string;
  datos?: Record<string, unknown>;
  pasos?: string[];
}

export function crearQuiz(prng: PRNG, params: QuizParams): EjercicioQuiz {
  const { opciones, indiceCorrecto, ...rest } = params;
  const correctaTexto = opciones[indiceCorrecto];
  const shuffled = prng.shuffle(opciones);
  const nuevoIndice = shuffled.indexOf(correctaTexto);
  return {
    ...rest,
    tipo: "quiz",
    opciones: shuffled,
    indiceCorrecto: nuevoIndice,
  };
}

// ── Plantillas ────────────────────────────────────────────────────
export function renderTemplate(template: string, data: Record<string, unknown>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => String(data[key] ?? ""));
}
