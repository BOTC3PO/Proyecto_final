/**
 * Composición de pool server-side — port EXACTO (byte a byte) de la lógica del
 * reproductor del alumno para poder DERIVAR en el servidor qué subconjunto de
 * preguntas se presentó, en vez de creerle al cliente (`payload.presentedIds`).
 *
 * Fuentes replicadas:
 *  - `apps/web/src/generadoresV2/core/prng.ts`  → DeterministicPrng (LCG + hash)
 *  - `apps/web/src/domain/quiz/composition.ts`  → parseComposition / tomarCount /
 *    selectPoolIndices
 *
 * Cualquier cambio en esos archivos del cliente DEBE reflejarse acá o las notas
 * se desincronizan. La lógica es pura y determinística (seed → resultado), así
 * que el servidor reproduce exactamente la presentación del alumno.
 */

export type QuizSelectionMode = "fijo" | "azar" | "elige_alumno";

export interface QuizComposition {
  tomar: "todas" | number;
  seleccion: QuizSelectionMode;
  variantes?: string[];
  pesoPorDefecto?: number;
}

/**
 * PRNG determinístico — port EXACTO de DeterministicPrng del cliente
 * (LCG numérico + hash de string `(h << 5) - h + c`). NO es el PRNG de
 * @vb/vblang (mulberry32): este gobierna la SELECCIÓN de pool, no la generación.
 */
export class DeterministicPrng {
  private state: number;

  constructor(seed: string | number) {
    this.state = this.hashSeed(seed);
  }

  private hashSeed(seed: string | number): number {
    if (typeof seed === "number") {
      return seed >>> 0;
    }
    let hash = 0;
    for (let i = 0; i < seed.length; i += 1) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }
    return hash >>> 0;
  }

  next(): number {
    this.state = (this.state * 1664525 + 1013904223) >>> 0;
    return this.state / 0x100000000;
  }

  int(min: number, max: number): number {
    const from = Math.ceil(min);
    const to = Math.floor(max);
    return Math.floor(this.next() * (to - from + 1)) + from;
  }

  shuffle<T>(array: readonly T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = this.int(0, i);
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}

/** Normaliza/parsea una composición desde el objeto crudo de settings JSON. */
export function parseComposition(raw: unknown): QuizComposition {
  const DEFAULT: QuizComposition = { tomar: "todas", seleccion: "fijo", pesoPorDefecto: 1 };
  if (!raw || typeof raw !== "object") return { ...DEFAULT };
  const r = raw as Record<string, unknown>;

  let tomar: "todas" | number = "todas";
  if (typeof r.tomar === "number" && Number.isFinite(r.tomar) && r.tomar > 0) {
    tomar = Math.floor(r.tomar);
  } else if (r.tomar === "todas") {
    tomar = "todas";
  }

  const seleccion: QuizSelectionMode =
    r.seleccion === "azar" || r.seleccion === "elige_alumno" ? r.seleccion : "fijo";

  const variantes = Array.isArray(r.variantes)
    ? r.variantes.filter((v): v is string => typeof v === "string" && v.trim().length > 0)
    : undefined;

  const pesoPorDefecto =
    typeof r.pesoPorDefecto === "number" && Number.isFinite(r.pesoPorDefecto) && r.pesoPorDefecto > 0
      ? r.pesoPorDefecto
      : 1;

  return {
    tomar,
    seleccion,
    ...(variantes && variantes.length > 0 ? { variantes } : {}),
    pesoPorDefecto,
  };
}

/** Cuántas preguntas se RESPONDEN/puntúan (K). */
export function tomarCount(comp: QuizComposition, total: number): number {
  if (comp.tomar === "todas") return total;
  return Math.max(1, Math.min(comp.tomar, total));
}

/**
 * Índices (sobre un pool de `total` preguntas) que el reproductor PRESENTA, en
 * orden, dado el seed del intento — port EXACTO de `selectPoolIndices`.
 *
 * - `fijo`: las primeras K en su orden original.
 * - `azar`: K determinísticas por seed (shuffle + slice + orden ascendente).
 * - `elige_alumno`: TODAS (el alumno elige cuál responder; eso no es derivable
 *   por seed, lo decide el alumno en runtime).
 */
export function selectPoolIndices(
  total: number,
  comp: QuizComposition,
  seed: string | number,
): number[] {
  if (total <= 0) return [];
  const all = Array.from({ length: total }, (_, i) => i);
  if (comp.seleccion === "elige_alumno") return all;

  const k = tomarCount(comp, total);
  if (k >= total) return all;
  if (comp.seleccion === "fijo") return all.slice(0, k);
  // azar: subconjunto determinístico por seed.
  const prng = new DeterministicPrng(seed);
  const picked = prng.shuffle(all).slice(0, k);
  return picked.sort((a, b) => a - b);
}
