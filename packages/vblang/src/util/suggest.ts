import { levenshtein } from "../lexer/suggestions.js";

/**
 * Devuelve la opción más cercana en distancia Levenshtein.
 * null si la distancia mínima supera `maxDist` (default 2).
 */
export function suggestFromList(
  input: string,
  options: readonly string[],
  maxDist = 2,
): string | null {
  let best: string | null = null;
  let bestDist = Infinity;
  for (const opt of options) {
    const d = levenshtein(input, opt);
    if (d < bestDist) {
      bestDist = d;
      best = opt;
    }
  }
  return bestDist <= maxDist ? best : null;
}
