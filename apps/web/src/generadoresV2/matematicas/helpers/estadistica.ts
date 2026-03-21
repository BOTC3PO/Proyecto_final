export function media(datos: number[]): number {
  return datos.reduce((s, v) => s + v, 0) / datos.length;
}

export function mediana(datos: number[]): number {
  const sorted = [...datos].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function moda(datos: number[]): number | null {
  const freq: Record<number, number> = {};
  for (const v of datos) freq[v] = (freq[v] ?? 0) + 1;
  const max = Math.max(...Object.values(freq));
  const modas = Object.keys(freq).filter((k) => freq[Number(k)] === max);
  if (modas.length === datos.length) return null;
  return Number(modas[0]);
}

export function varianza(datos: number[]): number {
  const m = media(datos);
  return datos.reduce((s, v) => s + (v - m) ** 2, 0) / datos.length;
}

export function desviacionEstandar(datos: number[]): number {
  return Math.sqrt(varianza(datos));
}

export function mcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

export function mcm(a: number, b: number): number {
  return Math.abs(a * b) / mcd(a, b);
}

const _factorialCache: Map<number, number> = new Map();

export function factorial(n: number): number {
  if (n < 0) throw new Error("factorial no definido para negativos");
  if (n === 0 || n === 1) return 1;
  const cached = _factorialCache.get(n);
  if (cached !== undefined) return cached;
  const result = n * factorial(n - 1);
  _factorialCache.set(n, result);
  return result;
}

export function combinatoria(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  return factorial(n) / (factorial(k) * factorial(n - k));
}

export function permutacion(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  return factorial(n) / factorial(n - k);
}

export function correlacionPearson(xs: number[], ys: number[]): number {
  const n = xs.length;
  const mx = media(xs);
  const my = media(ys);
  let num = 0, sx = 0, sy = 0;
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - mx;
    const dy = ys[i] - my;
    num += dx * dy;
    sx += dx * dx;
    sy += dy * dy;
  }
  const denom = Math.sqrt(sx * sy);
  return denom === 0 ? 0 : num / denom;
}
