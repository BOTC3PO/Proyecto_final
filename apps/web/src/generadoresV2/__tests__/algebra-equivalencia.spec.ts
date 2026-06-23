/**
 * WO-11 — Contrato de equivalencia generador↔plantilla (porting simbólico).
 *
 * Espejo de `porting-equivalencia.spec.ts` (WO-7/7b) para el eje
 * simbólico. La diferencia clave: la respuesta es un STRING
 * (expresión algebraica, no número), y la comparación es por
 * EQUIVALENCIA SIMBÓLICA (no por igualdad de string ni tolerancia
 * numérica). Ver `docs/vblang/wo-11-eje-simbolico.md`.
 *
 * Cobertura:
 *  1. `terminos_semejantes` basico — `2*x+1` ≡ `1+2*x` (suma de monomios).
 *  2. `multiplicacion_monomios` basico — distributiva, forma expandida.
 *  3. `factorizacion_basica` basico — `factor*(ax+b)` ≡ `factor*ax+factor*b`
 *     (factor común: la forma factorizada se acepta como equivalente a
 *     la expandida).
 *
 * Patrón de oráculo compartido (igual que WO-7b):
 *   - `oracle(inputs) → expected (string)`: la fórmula matemática del
 *     subtipo, encarnada UNA sola vez en el test.
 *   - `inputsFromGenerator(enunciado)`: extrae los inputs del enunciado
 *     del generador nativo. `null` para variantes no portadas.
 *   - `inputsFromTemplate(result.variables)`: lee los inputs sorteados
 *     por la plantilla.
 *
 * La comparación se hace con `sonEquivalentes` (no tolerancia ni
 * string equality). El TEST DE ORÁCULO se aplica a ambas mitades:
 * generador real ≡ oráculo ≡ plantilla.
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
    // ¿Es término con x? El formato del generador es:
    //   "5x" (coef positivo, sin `*`)
    //   "-x" o "x" (coef ±1)
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
 * Helper: dado un enunciado del generador nativo, extrae los
 * inputs como un objeto `Record<string, number>`. Devuelve `null`
 * para variantes no portadas (que se saltean en el test).
 */
type Inputs = Record<string, number>;

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  dificultad: Dificultad;
  /** Fórmula del subtipo: oráculo. Devuelve la respuesta simbólica canónica. */
  oracle: (inp: Inputs) => string;
  /** Extrae inputs del enunciado del generador. `null` = variante no portada. */
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  /** Lee los inputs de `result.variables` de la plantilla. */
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
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
    oracle: (i) => {
      const cx = i.cx1 + i.cx2;
      const c0 = i.c01 + i.c02;
      return `${cx}*x+${c0}`;
    },
    inputsFromGenerator: (e) => {
      // Cortamos el prefijo.
      const m = e.match(/Reduce los términos semejantes:\s*(.+)$/);
      if (!m) return null;
      const expr = m[1].trim();
      // Partimos por ` + ` y ` - ` (con espacios). El primer token
      // puede no tener signo (asumimos positivo).
      // Capturamos el signo y el término en una sola regex.
      const tokens = expr.match(/([+-])\s*([^-+]+)/g);
      if (!tokens || tokens.length < 2) {
        // Fallback: el primer token puede no tener signo.
        const t = expr.match(/^([^-+]+)([+-]\s*[^-+]+)*$/);
        if (!t) return null;
        // Re-armamos con signo + al primer token.
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
  // genMultiplicacionMonomios basico: monomio `m ∈ [2,5]`, mExp=0 (basico
  // fija mExp=0). Polinomio: `c0 + c1*x` con c0, c1 ∈ [1,4], 30% prob
  // c1 negativo. Resultado: `m*c0 + m*c1*x`.
  //
  // El generador ordena el polinomio por grado descendente, así que
  // el string puede ser:
  //   "c0 + c1*x" (si c1 ≥ 0)
  //   "c1*x + c0" (si c1 < 0 — el signo `-` se aplica al monomio, y
  //                  luego se concatena el término constante con `+ c0`)
  //   "c1*x - c0" (variante; menos común pero posible según los randoms)
  // Cubrimos los 2 casos principales.
  //
  // IMPORTANTE: la plantilla sortea `c1` SIEMPRE positivo (1..4) y
  // luego sortea `s1 ∈ {-1, 1}` con `uno_de`. El coeficiente efectivo
  // es `c1 * s1`. La ORACLE tiene que recibir el COEFICIENTE YA CON
  // SIGNO para que las dos mitades se puedan comparar.
  {
    subtipoOriginal: "multiplicacion_monomios",
    generatorSubtipo: "multiplicacion_monomios",
    dificultad: "basico",
    oracle: (i) => {
      const prod0 = i.m * i.c0;
      const prod1 = i.m * i.c1;
      return `${prod0}+${prod1}*x`;
    },
    inputsFromGenerator: (e) => {
      // "Calcula: m · (polinomio)"
      const m = e.match(/Calcula:\s*(\d+)\s*·\s*\(([^)]+)\)/);
      if (!m) return null;
      const monomio = parseInt(m[1], 10);
      const pol = m[2].trim();
      // El polinomio es `polinomioToString` que ordena por grado
      // descendente y NO usa `*` (formato del `formatTermino` del
      // generador). Casos:
      //   "c1x + c0"   (c1 > 0)
      //   "-c1x + c0"  (c1 < 0)
      //   "x + c0"     (c1 = 1, sin coeficiente explícito)
      //   "-x + c0"    (c1 = -1)
      // Normalizamos "x" y "-x" a "1x" y "-1x" para simplificar.
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
  // genFactorizacionBasica basico: factor ∈ [2, 6], a ∈ [1, 5], b ∈ [1, 5].
  // Enunciado: "{factor*a}x + {factor*b}". Respuesta: "factor*(a*x + b)".
  {
    subtipoOriginal: "factorizacion_basica",
    generatorSubtipo: "factorizacion_basica",
    dificultad: "basico",
    oracle: (i) => `${i.factor}*(${i.a}*x + ${i.b})`,
    inputsFromGenerator: (e) => {
      // "Factoriza extrayendo el factor común: {coef_x}x + {coef_0}"
      // El generador usa `formatTermino` que NO emite `*`, sólo
      // concatenación con el espacio: ej. "6x + 12".
      const m = e.match(
        /Factoriza extrayendo el factor común:\s*(\d+)x\s*\+\s*(\d+)/,
      );
      if (!m) return null;
      const coef_x = parseInt(m[1], 10);
      const coef_0 = parseInt(m[2], 10);
      // factor = gcd(coef_x, coef_0). El generador sortea factor
      // ∈ [2,6] y a,b ∈ [1,5] tales que `factor*a*x + factor*b`
      // es el enunciado. Como el generador ya fija factor, gcd de
      // coef_x y coef_0 lo recupera.
      const gcd = (a: number, b: number): number =>
        b === 0 ? a : gcd(b, a % b);
      const factor = gcd(coef_x, coef_0);
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

describe("WO-11 — equivalencia generador↔plantilla simbólica (oráculo compartido)", () => {
  it("las 3 plantillas oficiales existen con subtipoOriginal correcto", () => {
    const subtipos = MATEMATICAS_ALGEBRA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "factorizacion_basica",
      "multiplicacion_monomios",
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
          const expected = c.oracle(inp);
          // Equivalencia simbólica (no string equality).
          const eq = sonEquivalentes(answer, expected).eq;
          expect(
            eq,
            `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected="${expected}"`,
          ).toBe(true);
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
          const expected = c.oracle(inp);
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
        }
      });
    });
  }

  it("factorizacion_basica: la forma FACTORIZADA ≡ forma EXPANDIDA (sanity check del CAS)", () => {
    // Este test valida explícitamente el caso interesante de
    // factorización: la respuesta esperada es `factor*(a*x + b)`,
    // pero la forma expandida `factor*a*x + factor*b` también debe
    // contar como correcta. Es la garantía de que el CAS hace
    // equivalencia simbólica, no igualdad de string.
    expect(sonEquivalentes("6*(x+2)", "6*x+12").eq).toBe(true);
    expect(sonEquivalentes("6*(x+2)", "6*x+13").eq).toBe(false);
    expect(sonEquivalentes("3*(2*x+5)", "6*x+15").eq).toBe(true);
  });
});
