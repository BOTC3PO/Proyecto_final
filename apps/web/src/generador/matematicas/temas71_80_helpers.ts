export type PolyTerm = { coef: number; exp: number };

const abs = Math.abs;

export const formatFraction = (num: number, den: number): string => {
  if (den === 0) return "0";
  const sign = den < 0 ? -1 : 1;
  const n = num * sign;
  const d = abs(den);
  if (n === 0) return "0";
  if (n % d === 0) return String(n / d);
  return `${n}/${d}`;
};

export const formatPolyTerm = (coef: number, exp: number): string => {
  if (coef === 0) return "0";
  if (exp === 0) return String(coef);

  const absCoef = abs(coef);
  const coefText = absCoef === 1 ? "" : String(absCoef);
  const variable = exp === 1 ? "x" : `x^${exp}`;
  const body = `${coefText}${variable}`;
  return coef < 0 ? `-${body}` : body;
};

export const polyToString = (terms: PolyTerm[]): string => {
  const clean = terms.filter((term) => term.coef !== 0).sort((a, b) => b.exp - a.exp);
  if (clean.length === 0) return "0";
  return clean
    .map((term, index) => {
      const formatted = formatPolyTerm(term.coef, term.exp);
      if (index === 0) return formatted;
      return formatted.startsWith("-") ? `- ${formatted.slice(1)}` : `+ ${formatted}`;
    })
    .join(" ");
};

export const derivePoly = (terms: PolyTerm[]): PolyTerm[] =>
  terms
    .filter((term) => term.exp > 0 && term.coef !== 0)
    .map((term) => ({ coef: term.coef * term.exp, exp: term.exp - 1 }));

export const integratePoly = (terms: PolyTerm[]): Array<PolyTerm & { den: number }> =>
  terms
    .filter((term) => term.coef !== 0)
    .map((term) => {
      const den = term.exp + 1;
      return { coef: term.coef, exp: den, den };
    });

export const integratedPolyToString = (terms: PolyTerm[]): string => {
  const integrated = integratePoly(terms).sort((a, b) => b.exp - a.exp);
  if (integrated.length === 0) return "0";

  return integrated
    .map((term, index) => {
      const value = formatFraction(term.coef, term.den);
      const coef = Number(value);
      const isInt = Number.isFinite(coef) && !value.includes("/");

      let core = "";
      if (term.exp === 0) {
        core = value;
      } else if (term.exp === 1) {
        if (isInt) {
          if (coef === 1) core = "x";
          else if (coef === -1) core = "-x";
          else core = `${value}x`;
        } else {
          core = `${value}x`;
        }
      } else if (isInt) {
        if (coef === 1) core = `x^${term.exp}`;
        else if (coef === -1) core = `-x^${term.exp}`;
        else core = `${value}x^${term.exp}`;
      } else {
        core = `${value}x^${term.exp}`;
      }

      if (index === 0) return core;
      return core.startsWith("-") ? `- ${core.slice(1)}` : `+ ${core}`;
    })
    .join(" ");
};

export const evalPoly = (terms: PolyTerm[], x: number): number =>
  terms.reduce((acc, term) => acc + term.coef * (x ** term.exp), 0);
