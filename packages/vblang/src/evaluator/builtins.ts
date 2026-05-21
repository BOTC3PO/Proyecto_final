import type { PRNG } from "../runtime/prng.js";
import { EvalError } from "./errors.js";
import type { IsolatedMath } from "./math-setup.js";

export type BuiltinFn = (...args: unknown[]) => unknown;

function compareValues(a: unknown, b: unknown): number {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b));
}

export function createBuiltins(
  prng: PRNG,
  math: IsolatedMath,
): Record<string, BuiltinFn> {
  return {
    // ---- Aleatoriedad
    random: (min, max) => prng.int(min as number, max as number),
    random_float: (min, max, dec) =>
      prng.float(
        min as number,
        max as number,
        dec as number | undefined,
      ),
    uno_de: (arr) => {
      if (!Array.isArray(arr)) {
        throw new EvalError(`uno_de espera un array`);
      }
      if (arr.length === 0) {
        throw new EvalError(`uno_de: array vacío`);
      }
      return prng.pick(arr as unknown[]);
    },
    n_de: (arr, n) => {
      if (!Array.isArray(arr)) {
        throw new EvalError(`n_de espera un array`);
      }
      return prng.sample(arr as unknown[], n as number);
    },
    mezclar: (arr) => {
      if (!Array.isArray(arr)) {
        throw new EvalError(`mezclar espera un array`);
      }
      return prng.shuffle(arr as unknown[]);
    },

    // ---- Strings
    capitalizar: (s) => {
      const str = String(s);
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    mayusculas: (s) => String(s).toUpperCase(),
    minusculas: (s) => String(s).toLowerCase(),
    concatenar: (...args) => args.map((a) => String(a)).join(""),
    longitud: (s) => {
      if (typeof s === "string" || Array.isArray(s)) return s.length;
      throw new EvalError(
        `longitud() requiere string o array, recibió ${typeof s}`,
      );
    },

    // ---- Aritméticas (override sqrt para detectar NaN)
    sqrt: (x) => {
      const v = Math.sqrt(x as number);
      if (Number.isNaN(v)) {
        throw new EvalError(`sqrt(${x}) no es real`);
      }
      return v;
    },
    raiz: (x, n) => {
      const xn = x as number;
      const nn = n as number;
      if (nn === 0) throw new EvalError(`raiz: índice 0 no es válido`);
      const v = Math.pow(xn, 1 / nn);
      if (Number.isNaN(v)) {
        throw new EvalError(`raiz(${xn}, ${nn}) no es real`);
      }
      return v;
    },
    redondear: (x, n) => {
      const factor = Math.pow(10, (n as number | undefined) ?? 0);
      return Math.round((x as number) * factor) / factor;
    },
    signo: (x) => Math.sign(x as number),

    // ---- Arrays
    largo: (arr) => (arr as unknown[]).length,
    primero: (arr) => (arr as unknown[])[0],
    ultimo: (arr) => {
      const a = arr as unknown[];
      return a[a.length - 1];
    },
    sumar: (arr) => (arr as number[]).reduce((a, b) => a + b, 0),
    promedio: (arr) => {
      const a = arr as number[];
      if (a.length === 0) {
        throw new EvalError(`promedio: array vacío`);
      }
      return a.reduce((x, y) => x + y, 0) / a.length;
    },
    ordenar: (arr) => [...(arr as unknown[])].sort(compareValues),
    ordenar_por: (arr, campo) => {
      const a = arr as Record<string, unknown>[];
      const c = campo as string;
      return [...a].sort((x, y) => compareValues(x[c], y[c]));
    },
    unico: (arr) => [...new Set(arr as unknown[])],

    // ---- Predicados
    es_numero: (x) => typeof x === "number" && isFinite(x),
    es_positivo: (x) => typeof x === "number" && x > 0,
    es_entero: (x) => typeof x === "number" && Number.isInteger(x),

    // ---- Trigonometría en grados (las versiones en radianes vienen de math.js)
    sin_deg: (x) => Math.sin(((x as number) * Math.PI) / 180),
    cos_deg: (x) => Math.cos(((x as number) * Math.PI) / 180),
    tan_deg: (x) => Math.tan(((x as number) * Math.PI) / 180),
    asin_deg: (x) => (Math.asin(x as number) * 180) / Math.PI,
    acos_deg: (x) => (Math.acos(x as number) * 180) / Math.PI,
    atan_deg: (x) => (Math.atan(x as number) * 180) / Math.PI,

    // ---- Unidades — delega a math.js
    unidad: (s) => math.unit(s as string),

    // ---- Error invocable desde el DSL
    error: (msg) => {
      throw new EvalError(String(msg));
    },
  };
}

export function builtinNames(builtins: Record<string, BuiltinFn>): string[] {
  return Object.keys(builtins);
}
