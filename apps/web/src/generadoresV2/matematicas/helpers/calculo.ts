export function generarPuntos(
  fn: (x: number) => number,
  xMin: number,
  xMax: number,
  muestras = 100
): { x: number; y: number }[] {
  const puntos: { x: number; y: number }[] = [];
  const paso = (xMax - xMin) / (muestras - 1);
  for (let i = 0; i < muestras; i++) {
    const x = xMin + i * paso;
    puntos.push({ x, y: fn(x) });
  }
  return puntos;
}

export function derivadaNumerica(fn: (x: number) => number, x: number): number {
  const h = 1e-7;
  return (fn(x + h) - fn(x - h)) / (2 * h);
}

export function evaluarLimite(fn: (x: number) => number, punto: number, lado?: "izquierda" | "derecha"): number {
  const h = 1e-10;
  if (lado === "izquierda") return fn(punto - h);
  if (lado === "derecha") return fn(punto + h);
  const left = fn(punto - h);
  const right = fn(punto + h);
  if (Math.abs(left - right) < 1e-6) return (left + right) / 2;
  return NaN;
}
