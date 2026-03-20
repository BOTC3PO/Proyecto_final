export const factorialMemo = (() => {
  const memo = new Map<number, number>([[0, 1], [1, 1]]);
  return (n: number): number => {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error(`factorial inválido: ${n}`);
    }
    if (memo.has(n)) {
      return memo.get(n) as number;
    }
    const value = n * factorialMemo(n - 1);
    memo.set(n, value);
    return value;
  };
})();

export const combinatoria = (n: number, k: number): number => {
  if (!Number.isInteger(n) || !Number.isInteger(k) || k < 0 || n < 0 || k > n) {
    return 0;
  }
  const kk = Math.min(k, n - k);
  if (kk === 0) return 1;
  let numerador = 1;
  let denominador = 1;
  for (let i = 1; i <= kk; i += 1) {
    numerador *= n - kk + i;
    denominador *= i;
  }
  return Math.round(numerador / denominador);
};

export const media = (datos: readonly number[]): number =>
  datos.reduce((acc, n) => acc + n, 0) / datos.length;

export const varianzaPoblacional = (datos: readonly number[]): number => {
  const mu = media(datos);
  return datos.reduce((acc, n) => acc + (n - mu) ** 2, 0) / datos.length;
};

export const desviacionEstandarPoblacional = (datos: readonly number[]): number =>
  Math.sqrt(varianzaPoblacional(datos));

export const covarianzaPoblacional = (x: readonly number[], y: readonly number[]): number => {
  if (x.length !== y.length || x.length === 0) {
    throw new Error("Series inválidas para covarianza");
  }
  const mx = media(x);
  const my = media(y);
  let suma = 0;
  for (let i = 0; i < x.length; i += 1) {
    suma += (x[i] - mx) * (y[i] - my);
  }
  return suma / x.length;
};

export const correlacionPearson = (x: readonly number[], y: readonly number[]): number => {
  const cov = covarianzaPoblacional(x, y);
  const sx = desviacionEstandarPoblacional(x);
  const sy = desviacionEstandarPoblacional(y);
  if (sx === 0 || sy === 0) return 0;
  return cov / (sx * sy);
};

export const mcd = (a: number, b: number): number => {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const r = x % y;
    x = y;
    y = r;
  }
  return x || 1;
};

export const fraccionReducida = (numerador: number, denominador: number): string => {
  if (denominador === 0) return "indefinida";
  const signo = denominador < 0 ? -1 : 1;
  const n = numerador * signo;
  const d = denominador * signo;
  const g = mcd(n, d);
  return `${n / g}/${d / g}`;
};
