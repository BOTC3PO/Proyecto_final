/**
 * WO-11 / WO-11b — Contrato de equivalencia generador↔plantilla
 * (porting simbólico + numérico del eje Álgebra).
 *
 * Espejo de `porting-equivalencia.spec.ts` (WO-7/7b) para el eje
 * algebra. La diferencia: la respuesta puede ser un STRING
 * (expresión algebraica) o un NÚMERO. La comparación es por
 * EQUIVALENCIA SIMBÓLICA (`sonEquivalentes`) para los simbólicos
 * y por tolerancia numérica para los numéricos. Ver
 * `docs/vblang/wo-11-eje-simbolico.md` y `docs/vblang/porting-generadores.md`.
 *
 * NOTA DE TIPOS (WO-LIMPIEZA-TIPOS, lote #29): este archivo queda con
 * errores de tipo preexistentes (~50) por el framework `Inputs`
 * mal tipado: cada `PortCase` declara `inputsFromTemplate` que
 * devuelve objetos con keys arbitrarias (string | number | number[]),
 * pero el tipo `Inputs = Record<string, number>` exige solo number.
 * El refactor correcto requiere cambiar el framework (alcance mayor,
 * fuera de la limpieza de tipos). No se introdujeron errores nuevos
 * en este PR; los errores son idénticos al HEAD previo.
 *
 * Cobertura:
 *  - WO-11 (3 simbólicos, basico): `terminos_semejantes`,
 *    `multiplicacion_monomios`, `factorizacion_basica`.
 *  - WO-11b (7 simbólicos + 2 numéricos, basico):
 *    `suma_resta_polinomios`, `multiplicacion_polinomios`,
 *    `productos_notables` (solo cuadrado de la suma), `lenguaje_algebraico`,
 *    `racionales_simples`, `division_polinomios` (sin resto),
 *    `simplificacion_algebraica` (solo producto),
 *    `evaluacion_expresiones` (numérico),
 *    `grado_coeficientes` (numérico).
 *  - WO-11c (5 numéricos + 1 simbólico, basico):
 *    `ecuaciones_lineales`, `ecuaciones_parametros`,
 *    `ecuaciones_fracciones`, `funciones_lineales`, `funcion_afin`
 *    (todos numéricos), `ecuacion_recta` (simbólico).
 *    GAP: `inecuaciones_simples` (respuesta string desigualdad) y
 *    `ecuaciones_cuadraticas` (respuesta string conjunto solución)
 *    no portados — `sonEquivalentes` no valida esos formatos.
 *
 * Patrón de oráculo compartido (igual que WO-7b):
 *   - `oracleSymbolic(inputs) → expected (string)` o
 *     `oracleNumeric(inputs) → expected (number)`: la fórmula del
 *     subtipo, encarnada UNA sola vez en el test.
 *   - `inputsFromGenerator(enunciado)`: extrae los inputs del
 *     enunciado. `null` para variantes no portadas.
 *   - `inputsFromTemplate(result.variables)`: lee los inputs
 *     sorteados por la plantilla.
 */
import { describe, expect, it } from "vitest";
import {
  compile,
  generate,
  parse,
  sonEquivalentes,
  type CompiledPlantilla,
} from "@vb/vblang";
import { MATEMATICAS_ALGEBRA_OFICIALES } from "@vb/vblang";
import { AlgebraGenerator } from "../matematicas/Algebra";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

/**
 * MCD entero (Euclides) — usado por el oráculo de `racionales_simples`
 * para producir la forma simplificada.
 */
function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/**
 * Normaliza notación Unicode-math (²³·−√) → ASCII math (^2, ^3, *, -, sqrt).
 * El generador nativo usa Unicode en sus respuestas mostradas al alumno
 * (ej. "x² + 2bx + b²") pero math.js no parsea esos caracteres. Sin
 * esta normalización previa al CAS, la comparación falla por sintaxis.
 */
function normalizarMatematica(s: string): string {
  return s
    .replace(/⁰/g, "^0")
    .replace(/¹/g, "^1")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/⁴/g, "^4")
    .replace(/⁵/g, "^5")
    .replace(/⁶/g, "^6")
    .replace(/⁷/g, "^7")
    .replace(/⁸/g, "^8")
    .replace(/⁹/g, "^9")
    .replace(/·/g, "*")
    .replace(/−/g, "-")
    .replace(/√/g, "sqrt")
    .replace(/½/g, "1/2")
    .replace(/¼/g, "1/4")
    .replace(/¾/g, "3/4")
    .replace(/\s+/g, "");
}

/**
 * Helper: convierte los tokens `(+|-) (termino)` de un enunciado de
 * terminos_semejantes a los inputs (cx1, cx2, c01, c02). Los 2
 * primeros coefs de x son cx1, cx2 (orden no importa porque la
 * suma es conmutativa); los 2 últimos constantes son c01, c02.
 */
function parseTerminosSemejantesTokens(
  tokens: RegExpMatchArray,
): Inputs | null {
  const xCoefs: number[] = [];
  const consts: number[] = [];
  for (const tok of tokens) {
    const m = tok.match(/^([+-])\s*(.+)$/);
    if (!m) continue;
    const sign = m[1] === "-" ? -1 : 1;
    const body = m[2].trim();
    if (body.endsWith("x")) {
      let coefStr = body.replace(/x$/, "").trim();
      if (coefStr === "" || coefStr === "+") coefStr = "1";
      if (coefStr === "-") coefStr = "-1";
      const coef = parseInt(coefStr, 10) * sign;
      if (Number.isNaN(coef)) return null;
      xCoefs.push(coef);
    } else {
      const c = parseInt(body, 10);
      if (Number.isNaN(c)) return null;
      consts.push(c * sign);
    }
  }
  if (xCoefs.length !== 2 || consts.length !== 2) return null;
  return {
    cx1: xCoefs[0],
    cx2: xCoefs[1],
    c01: consts[0],
    c02: consts[1],
  };
}

/**
 * Helper: parsea el polinomio lineal "{c1}x + {c0}" (o variantes con
 * signos, con coeficientes implícitos ±1) en sus coeficientes.
 * Acepta formato del `formatTermino` del generador: SIN `*` (ej.
 * "5x - 3", "-4x + 1", "x + 3", "-x - 5").
 */
function parseLinear(
  s: string,
): { c1: number; c0: number } | null {
  // Normalizamos "x" → "1x" y "-x" → "-1x" para que el regex matche.
  const norm = s.replace(/^x/, "1x").replace(/^-x/, "-1x");
  const m = norm.match(/^(-?\d+)x\s*([+-])\s*(-?\d+)$/);
  if (!m) return null;
  return {
    c1: parseInt(m[1], 10),
    c0: parseInt(m[3], 10) * (m[2] === "-" ? -1 : 1),
  };
}

/**
 * Helper: parsea el polinomio de grado 2 "qa*x^2 + b2*x + c" (o
 * variantes con signos) en sus coeficientes. Acepta formato del
 * `formatTermino`: SIN `*` (ej. "5x^2 - 3x + 2", "-4x^2 + x - 1").
 * Acepta polinomios SIN término constante (devuelve c=0).
 */
function parseCuadratico(
  s: string,
): { qa: number; b2: number; c: number } | null {
  // Parseamos término a término. El polinomio puede tener 1, 2 o 3
  // términos. Aceptamos formato flexible.
  const norm = s.replace(/\s-\s/g, " + -");
  const parts = norm.split(/\s\+\s/);
  let qa = 0, b2 = 0, c = 0;
  for (const part of parts) {
    if (!part) continue;
    let m = part.match(/^(-?\d+)\*?x\^2$/);
    if (m) {
      qa += parseInt(m[1], 10);
      continue;
    }
    m = part.match(/^(-?\d+)\*?x$/);
    if (m) {
      b2 += parseInt(m[1], 10);
      continue;
    }
    m = part.match(/^(-?\d+)$/);
    if (m) {
      c += parseInt(m[1], 10);
      continue;
    }
    return null;
  }
  return { qa, b2, c };
}

/**
 * Helper: parsea un polinomio genérico (hasta grado 2) y devuelve
 * { coefX2, coefX, coef0, grado }. Usado por grado_coeficientes.
 * Acepta formato del `formatTermino` (sin `*`).
 */
function parsePolinomio(
  s: string,
): { coefX2: number; coefX: number; coef0: number; grado: number } | null {
  const norm = s.replace(/\s-\s/g, " + -");
  const parts = norm.split(/\s\+\s*/);
  let coefX2 = 0, coefX = 0, coef0 = 0;
  for (const part of parts) {
    if (!part) continue;
    let m = part.match(/^(-?\d+)\*?x\^2$/);
    if (m) {
      coefX2 += parseInt(m[1], 10);
      continue;
    }
    m = part.match(/^(-?\d+)\*?x$/);
    if (m) {
      coefX += parseInt(m[1], 10);
      continue;
    }
    m = part.match(/^(-?\d+)$/);
    if (m) {
      coef0 += parseInt(m[1], 10);
      continue;
    }
    return null;
  }
  const grado = coefX2 !== 0 ? 2 : coefX !== 0 ? 1 : 0;
  return { coefX2, coefX, coef0, grado };
}

/**
 * Helper: parsea el divisor "x - r" o "x + {-r}" en su raíz r.
 */
function parseDivisor(s: string): number | null {
  const m1 = s.match(/^x\s*-\s*(\d+)$/);
  if (m1) return parseInt(m1[1], 10);
  const m2 = s.match(/^x\s*\+\s*(\d+)$/);
  if (m2) return -parseInt(m2[1], 10);
  return null;
}

const CASES: PortCase[] = [
  // ── 1. terminos_semejantes (basico) ──────────────────────────────────
  // El generador sortea 2 grupos de exponentes {0, 1} con 2 coefs cada
  // uno en [-5, 5] (≠ 0). Sortea exps únicos y arma un polinomio con
  // 2*2 = 4 términos. La respuesta es la reducción: coef_x*x + coef_0.
  //
  // El formato del enunciado es: "Reduce los términos semejantes: T1 + T2 - T3 + T4"
  // donde cada T es un monomio: "5x", "-x", "x", "5" o "-5".
  // La parte del enunciado relevante (después del prefijo) se parte
  // en tokens, identificando cuáles son de x y cuáles constantes.
  {
    subtipoOriginal: "terminos_semejantes",
    generatorSubtipo: "terminos_semejantes",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const cx = i.cx1 + i.cx2;
      const c0 = i.c01 + i.c02;
      return `${cx}*x+${c0}`;
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Reduce los términos semejantes:\s*(.+)$/);
      if (!m) return null;
      const expr = m[1].trim();
      const tokens = expr.match(/([+-])\s*([^-+]+)/g);
      if (!tokens || tokens.length < 2) {
        const t = expr.match(/^([^-+]+)([+-]\s*[^-+]+)*$/);
        if (!t) return null;
        const fixed = "+" + expr;
        const tokens2 = fixed.match(/([+-])\s*([^-+]+)/g);
        if (!tokens2) return null;
        return parseTerminosSemejantesTokens(tokens2);
      }
      return parseTerminosSemejantesTokens(tokens);
    },
    inputsFromTemplate: (v) => ({
      cx1: Number(v.c_x1),
      cx2: Number(v.c_x2),
      c01: Number(v.c_0_1),
      c02: Number(v.c_0_2),
    }),
  },

  // ── 2. multiplicacion_monomios (basico) ─────────────────────────────
  {
    subtipoOriginal: "multiplicacion_monomios",
    generatorSubtipo: "multiplicacion_monomios",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const prod0 = i.m * i.c0;
      const prod1 = i.m * i.c1;
      return `${prod0}+${prod1}*x`;
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Calcula:\s*(\d+)\s*·\s*\(([^)]+)\)/);
      if (!m) return null;
      const monomio = parseInt(m[1], 10);
      const pol = m[2].trim();
      const polNorm = pol.replace(/(^|[+-])\s*x\b/g, "$1 1x");
      const mb = polNorm.match(/^(-?\d+)x\s*([+-])\s*(\d+)$/);
      if (mb) {
        const c1 = parseInt(mb[1], 10);
        const c0 = parseInt(mb[3], 10) * (mb[2] === "-" ? -1 : 1);
        return { m: monomio, c0, c1 };
      }
      return null;
    },
    inputsFromTemplate: (v) => ({
      m: Number(v.m),
      c0: Number(v.c0),
      // c1 está en la plantilla como `c1` (positivo) y `s1` (signo).
      // El coeficiente efectivo es `c1 * s1`.
      c1: Number(v.c1) * Number(v.s1),
    }),
  },

  // ── 3. factorizacion_basica (basico) ────────────────────────────────
  {
    subtipoOriginal: "factorizacion_basica",
    generatorSubtipo: "factorizacion_basica",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `${i.factor}*(${i.a}*x + ${i.b})`,
    inputsFromGenerator: (e) => {
      const m = e.match(
        /Factoriza extrayendo el factor común:\s*(\d+)x\s*\+\s*(\d+)/,
      );
      if (!m) return null;
      const coef_x = parseInt(m[1], 10);
      const coef_0 = parseInt(m[2], 10);
      const g = (a: number, b: number): number =>
        b === 0 ? a : g(b, a % b);
      const factor = g(coef_x, coef_0);
      return {
        factor,
        a: coef_x / factor,
        b: coef_0 / factor,
      };
    },
    inputsFromTemplate: (v) => ({
      factor: Number(v.factor),
      a: Number(v.a),
      b: Number(v.b),
    }),
  },

  // ── 4. suma_resta_polinomios (basico) ───────────────────────────────
  // genSumaRestaPolinomios basico: p1 = c0 + c1*x, p2 = d0 + d1*x con
  // coefs en [-5, 5] \ {0}. Sortea 50/50 suma/resta. Resultado:
  // (c0 ± d0) + (c1 ± d1)*x.
  // Enunciado: "Calcula: ({p1Str}) ± ({p2Str})".
  // p1Str y p2Str son polinomios lineales en formato polinomioToString
  // (coefs sin `*`, separados por " + " o " - ").
  {
    subtipoOriginal: "suma_resta_polinomios",
    generatorSubtipo: "suma_resta_polinomios",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const s = i.esResta === 1 ? -1 : 1;
      const cx = i.c1 + s * i.d1;
      const c0 = i.c0 + s * i.d0;
      return `${cx}*x+${c0}`;
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Calcula:\s*\((.+)\)\s*([+−])\s*\((.+)\)\s*$/);
      if (!m) return null;
      const p1 = parseLinear(m[1].trim());
      const p2 = parseLinear(m[3].trim());
      if (!p1 || !p2) return null;
      return {
        c0: p1.c0,
        c1: p1.c1,
        d0: p2.c0,
        d1: p2.c1,
        esResta: m[2] === "−" ? 1 : 0,
      };
    },
    inputsFromTemplate: (v) => ({
      c0: Number(v.c0),
      c1: Number(v.c1),
      d0: Number(v.d0),
      d1: Number(v.d1),
      esResta: Number(v.esResta),
    }),
  },

  // ── 5. multiplicacion_polinomios (basico) ──────────────────────────
  // genMultiplicacionPolinomios basico: dos polinomios lineales con
  // coefs en [-4, 4] \ {0}. Producto: c0*d0 + (c0*d1+c1*d0)*x + c1*d1*x^2.
  // Enunciado: "Calcula el producto: ({p1}) · ({p2})".
  {
    subtipoOriginal: "multiplicacion_polinomios",
    generatorSubtipo: "multiplicacion_polinomios",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const xx = i.c1 * i.d1;
      const x = i.c0 * i.d1 + i.c1 * i.d0;
      const c0 = i.c0 * i.d0;
      return `${xx}*x^2+${x}*x+${c0}`;
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Calcula el producto:\s*\((.+)\)\s*·\s*\((.+)\)\s*$/);
      if (!m) return null;
      const p1 = parseLinear(m[1].trim());
      const p2 = parseLinear(m[2].trim());
      if (!p1 || !p2) return null;
      return { c0: p1.c0, c1: p1.c1, d0: p2.c0, d1: p2.c1 };
    },
    inputsFromTemplate: (v) => ({
      c0: Number(v.c0),
      c1: Number(v.c1),
      d0: Number(v.d0),
      d1: Number(v.d1),
    }),
  },

  // ── 6. productos_notables (basico, solo cuadrado de la suma) ───────
  // genProductosNotables basico sortea b ∈ [2, 8] y `expandir = true`
  // (en basico siempre expande). El enunciado es "Expande: (x + b)²".
  // La respuesta esperada es "x² + 2bx + b²" (en formato humano con
  // superíndices — el CAS necesita normalización previa).
  // NOTA: la plantilla sólo cubre el caso `cuadrado_suma`. Los otros 2
  // (cuadrado_resta, dif_cuadrados) se saltean en el test.
  {
    subtipoOriginal: "productos_notables",
    generatorSubtipo: "productos_notables",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `x^2+${2 * i.b}*x+${i.b * i.b}`,
    inputsFromGenerator: (e) => {
      const m = e.match(/Expande:\s*\(x\s*\+\s*(\d+)\)²/);
      if (!m) return null;
      return { b: parseInt(m[1], 10) };
    },
    inputsFromTemplate: (v) => ({ b: Number(v.b) }),
  },

  // ── 7. lenguaje_algebraico (basico) ────────────────────────────────
  // genLenguajeAlgebraico basico sortea 1 frase de un pool de 7 y arma
  // 4 opciones. La respuesta correcta es la traducción algebraica.
  // El pool (basicaPools) es:
  //   "el doble de x"      → "2x"
  //   "la mitad de x"      → "x/2"
  //   "cinco más x"        → "x + 5"
  //   "x menos tres"       → "x - 3"
  //   "el triple de x"     → "3x"
  //   "x más diez"         → "x + 10"
  //   "el cuádruplo de x"  → "4x"
  // La forma "2x" (sin *) ≡ "2*x" (con *) en math.js.
  {
    subtipoOriginal: "lenguaje_algebraico",
    generatorSubtipo: "lenguaje_algebraico",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const map: Record<string, string> = {
        "el doble de x": "2*x",
        "la mitad de x": "x/2",
        "cinco más x": "x+5",
        "x menos tres": "x-3",
        "el triple de x": "3*x",
        "x más diez": "x+10",
        "el cuádruplo de x": "4*x",
      };
      return map[i.verbal] ?? "";
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Traduce la expresión verbal al lenguaje algebraico: "([^"]+)"/);
      if (!m) return null;
      return { verbal: m[1] };
    },
    inputsFromTemplate: (v) => ({ verbal: String(v.caso.verbal) }),
  },

  // ── 8. racionales_simples (basico, solo factor común) ──────────────
  // genRacionalesSimples basico: k ∈ [2,5], a ∈ [1,5], b ∈ [2,5].
  // Enunciado: "Simplifica la fracción algebraica: {k*a}x / {k*b}".
  // Respuesta: "{a/g}x / {b/g}" donde g = mcd(a,b) (forma simplificada).
  // La plantilla produce la forma NO simplificada "{a}x / {b}" — la
  // equivalencia simbólica la acepta igual.
  {
    subtipoOriginal: "racionales_simples",
    generatorSubtipo: "racionales_simples",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const g = gcd(i.a, i.b);
      const as = i.a / g;
      const bs = i.b / g;
      return bs === 1 ? `${as}*x` : `${as}*x/${bs}`;
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Simplifica la fracción algebraica:\s*(\d+)x\s*\/\s*(\d+)/);
      if (!m) return null;
      // El generador sortea k ∈ [2,5], a ∈ [1,5], b ∈ [2,5] con num=k*a, den=k*b.
      // Recuperamos (a, b) como (num/g, den/g) donde g = gcd(num, den).
      const num = parseInt(m[1], 10);
      const den = parseInt(m[2], 10);
      const g = gcd(num, den);
      return { a: num / g, b: den / g };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      b: Number(v.b),
    }),
  },

  // ── 9. division_polinomios (basico, sin resto) ────────────────────
  // genDivisionPolinomios basico: r ∈ [-4, 4] \ {0}, qa ∈ [1, 4],
  // qb ∈ [-5, 5], rem = 0. Construye dividendo (x - r)(qa*x + qb).
  // Cociente esperado: qa*x + qb.
  // Enunciado: "Divide: ({dividendo}) ÷ ({divisor}). ¿Cuál es el cociente?"
  {
    subtipoOriginal: "division_polinomios",
    generatorSubtipo: "division_polinomios",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `${i.qa}*x+${i.qb}`,
    inputsFromGenerator: (e) => {
      const m = e.match(/Divide:\s*\((.+)\)\s*÷\s*\((.+)\)\. ¿Cuál es el cociente\?/);
      if (!m) return null;
      const cuad = parseCuadratico(m[1].trim());
      const r = parseDivisor(m[2].trim());
      if (!cuad || r === null) return null;
      // cuad = { qa, b2, c }. De b2 = qb - qa*r → qb = b2 + qa*r.
      const qb = cuad.b2 + cuad.qa * r;
      return { r, qa: cuad.qa, qb };
    },
    inputsFromTemplate: (v) => ({
      r: Number(v.r),
      qa: Number(v.qa),
      qb: Number(v.qb),
    }),
  },

  // ── 10. simplificacion_algebraica (basico, solo producto) ──────────
  // genSimplificacionAlgebraica sortea entre 4 tipos. La plantilla
  // sólo cubre "producto" (x^m · x^n = x^(m+n)). Los otros 3
  // (cociente, potencia, raíz) se saltean.
  // Enunciado: "Simplifica: x^m · x^n".
  {
    subtipoOriginal: "simplificacion_algebraica",
    generatorSubtipo: "simplificacion_algebraica",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `x^${i.m + i.n}`,
    inputsFromGenerator: (e) => {
      const m = e.match(/Simplifica:\s*x\^(\d+)\s*·\s*x\^(\d+)/);
      if (!m) return null;
      return { m: parseInt(m[1], 10), n: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      m: Number(v.m),
      n: Number(v.n),
    }),
  },

  // ── 11. evaluacion_expresiones (basico) — NUMÉRICO ─────────────────
  // genEvaluacionExpresiones basico: 2 términos con exps únicos {0,1},
  // coefs en [-4,4] \ {0}, x ∈ [-3,3] \ {0}. Respuesta: c0 + c1*x.
  // Enunciado: "Evalúa la expresión {polStr} cuando x = {x}".
  {
    subtipoOriginal: "evaluacion_expresiones",
    generatorSubtipo: "evaluacion_expresiones",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.c0 + i.c1 * i.x,
    tol: 0,
    inputsFromGenerator: (e) => {
      // "Evalúa la expresión {c1x + c0} cuando x = {x}"
      // polStr en formato polinomioToString (grado 1).
      const m = e.match(/Evalúa la expresión\s+(.+?)\s+cuando x\s*=\s*(-?\d+)/);
      if (!m) return null;
      const pol = parseLinear(m[1].trim());
      if (!pol) return null;
      return { c0: pol.c0, c1: pol.c1, x: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      c0: Number(v.c0),
      c1: Number(v.c1),
      x: Number(v.x),
    }),
  },

  // ── 12. grado_coeficientes (basico) — NUMÉRICO ─────────────────────
  // genGradoCoeficientes basico: 2 términos con exps únicos {0,1,2},
  // coefs en [-8,8] \ {0}. Sortear 1 de 3 aspectos (grado, coef_princ,
  // término_ind). Respuesta: el valor numérico pedido.
  // Enunciado: "Para el polinomio {polStr}: ¿cuál es {aspecto}?".
  // La plantilla cubre sólo el caso lineal (exps 0 y 1). Si el
  // generador produce polinomio cuadrático (con x^2), el test lo
  // matchea pero el oracle usa el polinomio real.
  {
    subtipoOriginal: "grado_coeficientes",
    generatorSubtipo: "grado_coeficientes",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => {
      if (i.aspecto_idx === 0) return i.grado;
      if (i.aspecto_idx === 1) return i.coef_principal;
      return i.termino_ind;
    },
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(
        /Para el polinomio\s+(.+?):\s*¿cuál es\s+(?:el\s+)?([^?]+?)\??$/i,
      );
      if (!m) return null;
      const pol = m[1].trim();
      const aspectoStr = m[2].trim();
      const parsed = parsePolinomio(pol);
      if (!parsed) return null;
      let aspecto_idx: number;
      if (aspectoStr.startsWith("grado")) aspecto_idx = 0;
      else if (aspectoStr.startsWith("coeficiente principal")) aspecto_idx = 1;
      else if (aspectoStr.startsWith("término independiente")) aspecto_idx = 2;
      else return null;
      const coef_principal = parsed.coefX2 !== 0
        ? parsed.coefX2
        : parsed.coefX;
      return {
        grado: parsed.grado,
        coef_principal,
        termino_ind: parsed.coef0,
        aspecto_idx,
      };
    },
    inputsFromTemplate: (v) => ({
      grado: 1,
      coef_principal: Number(v.c1),
      termino_ind: Number(v.c0),
      aspecto_idx: Number(v.aspecto_idx),
    }),
  },

  // ── WO-11c: ecuaciones, funciones, recta ─────────────────────────────

  // ── 13. ecuaciones_lineales (basico) — NUMÉRICO ──────────────────────
  // ax + b = c → x = (c - b) / a. Coefs positivos en basico.
  {
    subtipoOriginal: "ecuaciones_lineales",
    generatorSubtipo: "ecuaciones_lineales",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => (i.c - i.b) / i.a,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/Resuelve:\s*(-?\d+)x\s*\+\s*(-?\d+)\s*=\s*(-?\d+)/);
      if (!m) return null;
      return {
        a: parseInt(m[1], 10),
        b: parseInt(m[2], 10),
        c: parseInt(m[3], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      b: Number(v.b),
      c: Number(v.c),
    }),
  },

  // ── 14. ecuaciones_parametros (basico) — NUMÉRICO ────────────────────
  // kx = c, solución dada → k = c / solucion.
  {
    subtipoOriginal: "ecuaciones_parametros",
    generatorSubtipo: "ecuaciones_parametros",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.c / i.solucion,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(
        /¿Qué valor de k hace que kx\s*=\s*(-?\d+)\s+tenga solución x\s*=\s*(-?\d+)\?/,
      );
      if (!m) return null;
      return {
        c: parseInt(m[1], 10),
        solucion: parseInt(m[2], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      c: Number(v.c),
      solucion: Number(v.solucion),
    }),
  },

  // ── 15. ecuaciones_fracciones (basico) — NUMÉRICO ────────────────────
  // a/x + b = c → x = a / (c - b).
  {
    subtipoOriginal: "ecuaciones_fracciones",
    generatorSubtipo: "ecuaciones_fracciones",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.a / (i.c - i.b),
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(
        /Resuelve:\s*(-?\d+)\/x\s*\+\s*(-?\d+)\s*=\s*(-?\d+)/,
      );
      if (!m) return null;
      return {
        a: parseInt(m[1], 10),
        b: parseInt(m[2], 10),
        c: parseInt(m[3], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      b: Number(v.b),
      c: Number(v.c),
    }),
  },

  // ── 16. funciones_lineales (basico) — NUMÉRICO ───────────────────────
  // f(x) = mx + b, pregunta por la ordenada al origen = b.
  {
    subtipoOriginal: "funciones_lineales",
    generatorSubtipo: "funciones_lineales",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.b,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(
        /Para f\(x\)\s*=\s*(-?\d+)x\s*([+-])\s*(\d+),\s*¿cuál es la ordenada al origen\?/,
      );
      if (!m) return null;
      const slope = parseInt(m[1], 10);
      const b = parseInt(m[3], 10) * (m[2] === "-" ? -1 : 1);
      return { m: slope, b };
    },
    inputsFromTemplate: (v) => ({
      m: Number(v.m),
      b: Number(v.b),
    }),
  },

  // ── 17. funcion_afin (basico) — NUMÉRICO ─────────────────────────────
  // f(x) = m*x + b, evaluar en xPred. Respuesta: m*xPred + b.
  // Solo matcheamos la variante "taxi" (pendiente positiva).
  {
    subtipoOriginal: "funcion_afin",
    generatorSubtipo: "funcion_afin",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.m * i.xPred + i.b,
    tol: 0,
    inputsFromGenerator: (e) => {
      // Generator: "Un taxi cobra una tarifa fija de $B más $M por kilómetro.
      //   Si el modelo es f(x) = Mx + B, ¿cuánto cuesta un viaje de X km?"
      const m = e.match(
        /f\(x\)\s*=\s*(-?\d+)x\s*\+\s*(-?\d+).*?viaje de (\d+) km/,
      );
      if (!m) return null;
      return {
        m: parseInt(m[1], 10),
        b: parseInt(m[2], 10),
        xPred: parseInt(m[3], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      m: Number(v.m),
      b: Number(v.b),
      xPred: Number(v.xPred),
    }),
  },

  // ── 18. ecuacion_recta (basico) — SIMBÓLICO ──────────────────────────
  // Dado m y b, escribir m*x + b (el RHS de y = mx + b).
  {
    subtipoOriginal: "ecuacion_recta",
    generatorSubtipo: "ecuacion_recta",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `${i.m}*x+${i.b}`,
    inputsFromGenerator: (e) => {
      const m = e.match(
        /pendiente\s+(?:m\s*=\s*)?(-?\d+)\s+y\s+ordenada al origen\s+(?:b\s*=\s*)?(-?\d+)/,
      );
      if (!m) return null;
      return {
        m: parseInt(m[1], 10),
        b: parseInt(m[2], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      m: Number(v.m),
      b: Number(v.b),
    }),
  },
];

const SEEDS = Array.from({ length: 50 }, (_v, i) => `wo11-algebra-${i}`);

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = MATEMATICAS_ALGEBRA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: string;
} {
  const gen = new AlgebraGenerator(new DeterministicPrng(seed));
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  return {
    enunciado: ej.enunciado,
    answer: String(ej.opciones[ej.indiceCorrecto]),
  };
}

describe("WO-11 / WO-11b — equivalencia generador↔plantilla (oráculo compartido)", () => {
  it("las 18 plantillas oficiales existen con subtipoOriginal correcto", () => {
    const subtipos = MATEMATICAS_ALGEBRA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "division_polinomios",
      "ecuacion_recta",
      "ecuaciones_fracciones",
      "ecuaciones_lineales",
      "ecuaciones_parametros",
      "evaluacion_expresiones",
      "factorizacion_basica",
      "funcion_afin",
      "funciones_lineales",
      "grado_coeficientes",
      "lenguaje_algebraico",
      "multiplicacion_monomios",
      "multiplicacion_polinomios",
      "productos_notables",
      "racionales_simples",
      "simplificacion_algebraica",
      "suma_resta_polinomios",
      "terminos_semejantes",
    ]);
  });

  for (const c of CASES) {
    describe(c.subtipoOriginal, () => {
      it("GENERADOR real ≡ oráculo (sobre sus inputs sorteados)", () => {
        let matched = 0;
        for (const seed of SEEDS) {
          const { enunciado, answer } = generatorAnswer(
            c.generatorSubtipo,
            c.dificultad,
            seed,
          );
          const inp = c.inputsFromGenerator(enunciado);
          if (inp === null) continue; // variante no portada → saltear
          matched += 1;
          if (c.kind === "symbolic") {
            const expected = c.oracleSymbolic!(inp);
            // El generador nativo usa notación Unicode (², ³, ·, −, √)
            // en sus respuestas mostradas. Normalizamos antes del CAS.
            const normalizedAnswer = normalizarMatematica(answer);
            const eq = sonEquivalentes(normalizedAnswer, expected).eq;
            expect(
              eq,
              `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected="${expected}"`,
            ).toBe(true);
          } else {
            const expected = c.oracleNumeric!(inp);
            // Para numéricos, el answer es un número (o número con
            // unidad, ej "−12"). Extraemos el número puro.
            const numAnswer = Number(
              answer.replace(/[^\d.\-eE+]/g, ""),
            );
            expect(
              Math.abs(numAnswer - expected) <= (c.tol ?? 0),
              `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected=${expected}`,
            ).toBe(true);
          }
        }
        // Mínimo de matches (no debe pasar en vacío).
        expect(
          matched,
          `ejercicios del generador que matchearon ${c.subtipoOriginal}`,
        ).toBeGreaterThan(5);
      });

      it("PLANTILLA real ≡ oráculo (sobre sus inputs sorteados)", () => {
        const compiled = compiledFor(c.subtipoOriginal);
        for (const seed of SEEDS) {
          const result = generate(compiled, { seed });
          const inp = c.inputsFromTemplate(result.variables);
          if (c.kind === "symbolic") {
            const expected = c.oracleSymbolic!(inp);
            const respuesta = result.respuestaExpr;
            if (typeof respuesta !== "string") {
              throw new Error(
                `tipo expresion esperaba respuestaExpr string, recibió ${typeof respuesta}`,
              );
            }
            const eq = sonEquivalentes(respuesta, expected).eq;
            expect(
              eq,
              `seed ${seed}: respuestaExpr="${respuesta}" expected="${expected}" inputs=${JSON.stringify(inp)}`,
            ).toBe(true);
          } else {
            const expected = c.oracleNumeric!(inp);
            const respuesta = result.respuesta as number;
            if (typeof respuesta !== "number") {
              throw new Error(
                `tipo input esperaba respuesta number, recibió ${typeof respuesta}`,
              );
            }
            expect(
              Math.abs(respuesta - expected) <= (c.tol ?? 0),
              `seed ${seed}: respuesta=${respuesta} expected=${expected} inputs=${JSON.stringify(inp)}`,
            ).toBe(true);
          }
        }
      });
    });
  }

  it("factorizacion_basica: la forma FACTORIZADA ≡ forma EXPANDIDA (sanity check del CAS)", () => {
    expect(sonEquivalentes("6*(x+2)", "6*x+12").eq).toBe(true);
    expect(sonEquivalentes("6*(x+2)", "6*x+13").eq).toBe(false);
    expect(sonEquivalentes("3*(2*x+5)", "6*x+15").eq).toBe(true);
  });

  it("sonEquivalentes: identidad trivial (sanity check)", () => {
    expect(sonEquivalentes("x+1", "x+1").eq).toBe(true);
    expect(sonEquivalentes("x+1", "x+2").eq).toBe(false);
  });
});
