/**
 * PRNG determinístico propio basado en mulberry32 + hash FNV-1a para seeds string.
 * Independiente de cualquier PRNG de la app web (apps/web/generadoresV2).
 * Decisión documentada: el paquete @vb/vblang es autocontenido.
 */

export interface PRNG {
  /** Devuelve un float en [0, 1). */
  next(): number;
  /** Entero en [min, max] inclusive. */
  int(min: number, max: number): number;
  /** Float en [min, max); con `decimals` redondea. */
  float(min: number, max: number, decimals?: number): number;
  /** Elige un elemento del array. Lanza si el array está vacío. */
  pick<T>(arr: readonly T[]): T;
  /** Muestreo sin reemplazo. Lanza si n > arr.length. */
  sample<T>(arr: readonly T[], n: number): T[];
  /** Devuelve un array nuevo con Fisher-Yates. */
  shuffle<T>(arr: readonly T[]): T[];
}

export function fnv1a(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createPrng(seed: string | number): PRNG {
  const numSeed = typeof seed === "string" ? fnv1a(seed) : seed >>> 0;
  const next = mulberry32(numSeed);

  const prng: PRNG = {
    next,
    int(min, max) {
      if (max < min) throw new Error(`int: max (${max}) < min (${min})`);
      return min + Math.floor(next() * (max - min + 1));
    },
    float(min, max, decimals) {
      const v = min + next() * (max - min);
      if (typeof decimals === "number") {
        const f = Math.pow(10, decimals);
        return Math.round(v * f) / f;
      }
      return v;
    },
    pick(arr) {
      if (arr.length === 0) throw new Error("pick: array vacío");
      return arr[Math.floor(next() * arr.length)];
    },
    sample(arr, n) {
      if (n < 0) throw new Error(`sample: n negativo (${n})`);
      if (n > arr.length) {
        throw new Error(`sample: pidió ${n} de ${arr.length}`);
      }
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy.slice(0, n);
    },
    shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    },
  };
  return prng;
}
