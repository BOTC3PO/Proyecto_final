/**
 * F3-03 (a) — Puntaje por proporción cruda.
 *
 * El puntaje de un intento se calcula POR POSICIÓN: cada posición vale
 * `posicion.puntaje`, compartido por todas sus variantes (regla del plan,
 * F3-01). Por eso dos alumnos con variantes distintas rinden por el MISMO total
 * (equidad). El resultado es una proporción cruda `ratio = score / maxScore`
 * que NO es una nota: la nota la produce `gradeFromConfig(ratio, scoringConfig)`
 * de `@vb/vblang` (escala del profesor, WO14) — acá NO se inventa ningún sistema
 * de notas, sólo se alimenta el ratio.
 *
 * Lógica pura y SIN imports, port byte a byte de
 * `api/src/lib/quiz-puntaje.ts`. Cualquier cambio acá DEBE reflejarse allá o los
 * tipos compartidos se desincronizan.
 */

/** Lo mínimo que se necesita de una posición para puntuar: número y puntaje. */
export interface PosicionPuntuable {
  numero: number;
  /** Puntaje de la posición (≥ 0). 0 = no puntúa (no entra en el maxScore). */
  puntaje: number;
}

export interface ResultadoPuntaje {
  /** Suma de puntajes de las posiciones acertadas. */
  score: number;
  /** Suma de puntajes de TODAS las posiciones puntuables. */
  maxScore: number;
  /** Proporción cruda score/maxScore ∈ [0,1], o null si maxScore = 0 (N/A). */
  ratio: number | null;
}

/**
 * Calcula el puntaje de un intento a partir de las posiciones (con su puntaje a
 * nivel posición) y el conjunto de posiciones acertadas (por `numero`).
 *
 * - `maxScore`: suma de `puntaje` de todas las posiciones (las de puntaje 0 no
 *   suman, quedando efectivamente excluidas).
 * - `score`: suma de `puntaje` de las posiciones cuyo `numero` está en
 *   `acertadas`.
 * - `ratio`: `score/maxScore`, o `null` cuando `maxScore = 0` (mismo contrato
 *   `rawRatio = null` que espera `gradeFromConfig`).
 */
export function puntajePorPosiciones(
  posiciones: readonly PosicionPuntuable[],
  acertadas: ReadonlySet<number>,
): ResultadoPuntaje {
  let score = 0;
  let maxScore = 0;
  for (const pos of posiciones) {
    const w = pos.puntaje > 0 ? pos.puntaje : 0;
    maxScore += w;
    if (w > 0 && acertadas.has(pos.numero)) score += w;
  }
  const ratio = maxScore > 0 ? score / maxScore : null;
  return { score, maxScore, ratio };
}

/**
 * `maxScore` de un cuestionario: el total contra el que rinden TODOS los alumnos,
 * independiente de qué variante le tocó a cada uno (verificación de equidad).
 */
export function maxScoreCuestionario(posiciones: readonly PosicionPuntuable[]): number {
  let maxScore = 0;
  for (const pos of posiciones) maxScore += pos.puntaje > 0 ? pos.puntaje : 0;
  return maxScore;
}
