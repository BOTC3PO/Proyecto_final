/**
 * Composición de un quiz a NIVEL QUIZ (no del DSL de una plantilla).
 *
 * Encapsula la "política de pool configurable por el profe" (Decisión 1):
 *  - `tomar`: cuántas preguntas del grupo se presentan — todas (N) o un
 *    subconjunto K.
 *  - `seleccion`: cómo se eligen esas K — orden fijo, al azar por intento, o
 *    el alumno elige cuál responder (solo esa puntúa).
 *  - `variantes`: consignas alternativas de las que la serie elige por seed.
 *  - pesos por ítem (`points`) para el puntaje ponderado.
 *
 * Todo acá es lógica pura y determinística (seed → resultado), para que tanto
 * el editor como el reproductor compartan exactamente el mismo contrato y sea
 * testeable sin red ni UI. Se serializa dentro de `QuizVersion.settings`.
 */

import { DeterministicPrng } from "../../generadoresV2/core/prng";

export type QuizSelectionMode = "fijo" | "azar" | "elige_alumno";

export interface QuizComposition {
  /** Cuántas preguntas presentar: "todas" o un número K. */
  tomar: "todas" | number;
  /** Cómo se eligen las K cuando tomar !== "todas". */
  seleccion: QuizSelectionMode;
  /** Consignas alternativas; la serie elige una por seed. Vacío = sin variantes. */
  variantes?: string[];
  /** Peso por defecto de cada pregunta si no trae `points` propio. */
  pesoPorDefecto?: number;
}

export const DEFAULT_COMPOSITION: QuizComposition = {
  tomar: "todas",
  seleccion: "fijo",
  pesoPorDefecto: 1,
};

/** Normaliza/parsea una composición desde un objeto arbitrario (settings JSON). */
export function parseComposition(raw: unknown): QuizComposition {
  if (!raw || typeof raw !== "object") return { ...DEFAULT_COMPOSITION };
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

/**
 * Cuántas preguntas se RESPONDEN/puntúan (K). Para `elige_alumno`, es cuántas
 * puede elegir el alumno del grupo presentado.
 */
export function tomarCount(comp: QuizComposition, total: number): number {
  if (comp.tomar === "todas") return total;
  return Math.max(1, Math.min(comp.tomar, total));
}

/**
 * Índices (sobre el pool de `total` preguntas) que el reproductor debe
 * PRESENTAR, en orden, dado el seed del intento.
 *
 * - `fijo`: las primeras K en su orden original.
 * - `azar`: K elegidas al azar (determinístico por seed).
 * - `elige_alumno`: se presentan TODAS las del grupo (hasta K si se acotó) y el
 *   alumno elige cuál responder; el reproductor marca cuál puntúa. Acá
 *   devolvemos las candidatas (mismas reglas que azar para acotar el grupo).
 */
export function selectPoolIndices(
  total: number,
  comp: QuizComposition,
  seed: string | number,
): number[] {
  if (total <= 0) return [];
  const all = Array.from({ length: total }, (_, i) => i);
  // elige_alumno presenta TODO el grupo; el alumno elige cuáles responder.
  if (comp.seleccion === "elige_alumno") return all;

  const k = tomarCount(comp, total);
  if (k >= total) return all;
  if (comp.seleccion === "fijo") return all.slice(0, k);
  // azar: subconjunto determinístico por seed.
  const prng = new DeterministicPrng(seed);
  const picked = prng.shuffle(all).slice(0, k);
  // Orden ascendente estable para presentación coherente.
  return picked.sort((a, b) => a - b);
}

/** Cuántas preguntas puede/ debe responder el alumno (las que puntúan). */
export function answerCount(comp: QuizComposition, total: number): number {
  return tomarCount(comp, total);
}

/**
 * Elige una variante de consigna determinística por seed (y opcionalmente por
 * índice de pregunta, para que distintas preguntas de la serie no usen siempre
 * la misma). Devuelve undefined si no hay variantes.
 */
export function pickVariante(
  variantes: string[] | undefined,
  seed: string | number,
  index = 0,
): string | undefined {
  if (!variantes || variantes.length === 0) return undefined;
  const prng = new DeterministicPrng(`${seed}::variante::${index}`);
  return variantes[prng.int(0, variantes.length - 1)];
}

/** Peso de una pregunta: su `points` propio, o el default de la composición. */
export function pointsFor(
  question: { points?: number },
  comp: QuizComposition,
): number {
  if (typeof question.points === "number" && question.points > 0) return question.points;
  return comp.pesoPorDefecto && comp.pesoPorDefecto > 0 ? comp.pesoPorDefecto : 1;
}

/**
 * Puntaje ponderado: suma de `points` de los ítems correctos sobre la suma de
 * `points` de todos los presentados.
 */
export function weightedScore(
  items: Array<{ correct: boolean; points: number }>,
): { score: number; maxScore: number } {
  let score = 0;
  let maxScore = 0;
  for (const it of items) {
    const w = it.points > 0 ? it.points : 1;
    maxScore += w;
    if (it.correct) score += w;
  }
  return { score, maxScore };
}
