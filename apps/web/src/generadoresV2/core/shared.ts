import type { PRNG } from "./prng";
import type { Dificultad, EjercicioCompletar, EjercicioQuiz, Materia } from "./types";

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

/**
 * Substitutes {key}, {key|unit}, {key|N}, {key.sub} tokens in a template
 * using values from datos. Keys not found in datos are left as-is.
 */
export function applyEnunciadoTemplate(
  template: string,
  datos: Record<string, unknown>
): string {
  return template.replace(/\{([^}]+)\}/g, (match, expr: string) => {
    const parts = expr.split("|");
    const keyPath = parts[0].trim();
    const modifier = parts[1]?.trim();
    const value = keyPath.split(".").reduce<unknown>((obj, key) => {
      if (obj !== null && typeof obj === "object") {
        return (obj as Record<string, unknown>)[key];
      }
      return undefined;
    }, datos as unknown) ?? datos[keyPath];
    if (value === undefined || value === null) return match;
    const str = String(value);
    if (!modifier) return str;
    if (isNaN(Number(modifier))) return `${str} ${modifier}`;
    const n = parseInt(modifier, 10);
    const num = parseFloat(str);
    if (!isNaN(num)) return num.toFixed(n);
    return str;
  });
}

/**
 * Like applyEnunciadoTemplate but receives the full enriched context (datos + ejercicio fields).
 */
export function applyEnunciadoTemplateExt(
  template: string,
  ctx: Record<string, unknown>
): string {
  return template.replace(/\{([^}]+)\}/g, (match, expr: string) => {
    const parts = expr.split("|");
    const keyPath = parts[0].trim();
    const modifier = parts[1]?.trim();
    const value = keyPath.split(".").reduce<unknown>((obj, key) => {
      if (obj !== null && typeof obj === "object") {
        return (obj as Record<string, unknown>)[key];
      }
      return undefined;
    }, ctx as unknown) ?? ctx[keyPath];
    if (value === undefined || value === null) return match;
    const str = String(value);
    if (!modifier) return str;
    if (isNaN(Number(modifier))) return `${str} ${modifier}`;
    const n = parseInt(modifier, 10);
    const num = parseFloat(str);
    if (!isNaN(num)) return num.toFixed(n);
    return str;
  });
}

// ── Placeholder para subtipos no implementados ─────────────────────
export function placeholder(
  subtipo: string,
  materia: Materia,
  dificultad: Dificultad
): EjercicioCompletar {
  return {
    id: `placeholder-${materia}-${subtipo}-${dificultad}`,
    tipo: "completar",
    materia,
    subtipo,
    dificultad,
    enunciado: `[Próximamente] Ejercicio de tipo "${subtipo}"`,
    respuestaCorrecta: "—",
  };
}
