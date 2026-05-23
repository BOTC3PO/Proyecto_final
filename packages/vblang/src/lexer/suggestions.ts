import { BLOCK_KEYWORDS } from "./tokens.js";

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  const prev = new Array<number>(n + 1);
  const curr = new Array<number>(n + 1);

  for (let j = 0; j <= n; j++) prev[j] = j;

  for (let i = 1; i <= m; i++) {
    curr[0] = i;
    const ca = a.charCodeAt(i - 1);
    for (let j = 1; j <= n; j++) {
      const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
      const del = prev[j] + 1;
      const ins = curr[j - 1] + 1;
      const sub = prev[j - 1] + cost;
      curr[j] = del < ins ? (del < sub ? del : sub) : (ins < sub ? ins : sub);
    }
    for (let j = 0; j <= n; j++) prev[j] = curr[j];
  }
  return prev[n];
}

export function suggestKeyword(input: string): string | null {
  let best: string | null = null;
  let bestDist = Infinity;
  for (const kw of Object.keys(BLOCK_KEYWORDS)) {
    const d = levenshtein(input, kw);
    if (d < bestDist) {
      bestDist = d;
      best = kw;
    }
  }
  return bestDist <= 2 ? best : null;
}

export { levenshtein };
