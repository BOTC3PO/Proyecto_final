export type Termino = { coef: number; exp: number };

export function formatTermino(coef: number, exp: number): string {
  if (exp === 0) return `${coef}`;
  const varPart = exp === 1 ? "x" : `x^${exp}`;
  if (coef === 1) return varPart;
  if (coef === -1) return `-${varPart}`;
  return `${coef}${varPart}`;
}

export function polinomioToString(terminos: Termino[]): string {
  if (terminos.length === 0) return "0";
  const sorted = [...terminos].sort((a, b) => b.exp - a.exp);
  let result = "";
  for (let i = 0; i < sorted.length; i++) {
    const { coef, exp } = sorted[i];
    if (coef === 0) continue;
    if (i === 0) {
      result += formatTermino(coef, exp);
    } else {
      if (coef > 0) {
        result += ` + ${formatTermino(coef, exp)}`;
      } else {
        result += ` - ${formatTermino(Math.abs(coef), exp)}`;
      }
    }
  }
  return result || "0";
}

export function derivarPolinomio(terminos: Termino[]): Termino[] {
  return terminos
    .filter(({ exp }) => exp > 0)
    .map(({ coef, exp }) => ({ coef: coef * exp, exp: exp - 1 }));
}

export function evaluarPolinomio(terminos: Termino[], x: number): number {
  return terminos.reduce((sum, { coef, exp }) => sum + coef * Math.pow(x, exp), 0);
}

export function formatFraccion(num: number, den: number): string {
  if (den === 0) return "indefinido";
  if (num % den === 0) return `${num / den}`;
  return `${num}/${den}`;
}
