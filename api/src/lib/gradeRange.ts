/**
 * F5-04 — Cálculo del RANGO honesto de la nota cuando hay pendientes
 * de corrección manual.
 *
 * El alumno que acaba de enviar un intento con ítems `manual` no tiene
 * una nota única: las preguntas abiertas todavía no fueron corregidas
 * por el docente. La política de F5-04 (plan K2-a) es INFORMAR sin
 * CASTIGAR: el alumno ve "tu nota está entre X e Y" donde:
 *
 *   - X (mínimo): la nota que tendría SI las pendientes valen 0.
 *   - Y (máximo): la nota que tendría SI las pendientes valen su peso
 *                 pleno.
 *
 * Esto es HONESTO porque ningún escenario posible lo contradice. La
 * nota única sólo aparece cuando TODAS las manuales están corregidas
 * (status `graded`).
 *
 * El sistema NO usa el rango para nada (ni progreso, ni aprobación).
 * Es puramente informativo. La transición a `graded` sigue siendo
 * gateada por `allGraded` (ver WO07 + WO14 en quiz-attempts.ts).
 *
 * PRIVACIDAD: este helper opera sobre los puntos de las preguntas,
 * no sobre qué respondió el alumno. No introduce ningún canal de
 * vigilancia nuevo.
 */

import { gradeFromConfig, type ScoringConfig } from "@vb/vblang";

export type GradeRange = {
  /** Score mínimo posible (si TODAS las pendientes valen 0). */
  minScore: number;
  /** Score máximo posible (si TODAS las pendientes valen su peso pleno). */
  maxScore: number;
  /** Cantidad de ítems pendientes. */
  pendingCount: number;
  /** Display de la nota mínima (escala del sistema). `null` si no aplica. */
  minDisplay: string | null;
  /** Equivalente 1..10 de la nota mínima. `null` si no aplica. */
  minCanonical10: number | null;
  /** Display de la nota máxima. `null` si no aplica. */
  maxDisplay: string | null;
  /** Equivalente 1..10 de la nota máxima. `null` si no aplica. */
  maxCanonical10: number | null;
};

/**
 * Calcula el rango de nota provisoria.
 *
 * @param autoScore        Puntaje actual (preguntas auto-corregidas).
 * @param maxScore         Peso total (incluye pendientes).
 * @param pendingPoints    Array con los pesos de CADA ítem manual pendiente.
 * @param scoringConfig    Config del sistema de notación (módulo o fallback).
 *
 * Casos especiales:
 *  - Sin pendientes (`pendingPoints.length === 0`): devuelve pendingCount=0
 *    y minScore === maxScore === autoScore. El caller debe NO renderizar
 *    el rango en este caso.
 *  - `maxScore === 0`: ratios nulos, displays nulos. El cliente mostrará
 *    "—" en lugar de un número.
 */
export function computeGradeRange(
  autoScore: number,
  maxScore: number,
  pendingPoints: readonly number[],
  scoringConfig: ScoringConfig
): GradeRange {
  const pendingCount = pendingPoints.length;
  const pendingFull = pendingPoints.reduce((acc, p) => acc + (p > 0 ? p : 0), 0);
  const minScore = autoScore;
  const maxScoreWithFull = autoScore + pendingFull;

  const minRatio = maxScore > 0 ? minScore / maxScore : null;
  const maxRatio = maxScore > 0 ? maxScoreWithFull / maxScore : null;

  const minNota = minRatio !== null ? gradeFromConfig(minRatio, scoringConfig) : null;
  const maxNota = maxRatio !== null ? gradeFromConfig(maxRatio, scoringConfig) : null;

  return {
    minScore,
    maxScore: maxScoreWithFull,
    pendingCount,
    minDisplay: minNota?.display ?? null,
    minCanonical10: minNota?.canonical10 ?? null,
    maxDisplay: maxNota?.display ?? null,
    maxCanonical10: maxNota?.canonical10 ?? null
  };
}

/**
 * Etiqueta humana del rango. Neutra, sin acusar.
 * @example formatGradeRangeLabel("5", "8", 2) → "Tu nota está entre 5 y 8. 2 pendiente(s) de corrección."
 */
export function formatGradeRangeLabel(
  minDisplay: string | null,
  maxDisplay: string | null,
  pendingCount: number
): string {
  const base =
    minDisplay && maxDisplay
      ? `Tu nota está entre ${minDisplay} y ${maxDisplay}.`
      : minDisplay
        ? `Tu nota (mín.) es ${minDisplay}.`
        : maxDisplay
          ? `Tu nota (máx.) es ${maxDisplay}.`
          : "Tu nota está pendiente de cálculo.";
  const tail =
    pendingCount === 1
      ? "1 pregunta pendiente de corrección por el profesor."
      : `${pendingCount} preguntas pendientes de corrección por el profesor.`;
  return `${base} ${tail}`;
}
