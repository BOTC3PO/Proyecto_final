/**
 * WO-11d — Contrato de equivalencia generador↔plantilla (porting
 * masivo de Cálculo).
 *
 * Espejo de `algebra-equivalencia.spec.ts` (WO-11/WO-11b) para el
 * eje Cálculo. La respuesta puede ser un STRING (expresión
 * algebraica o fracción) o un NÚMERO. La comparación es por
 * EQUIVALENCIA SIMBÓLICA (`sonEquivalentes`) para los simbólicos
 * y por tolerancia numérica para los numéricos. Ver
 * `docs/vblang/wo-11-eje-simbolico.md` y
 * `docs/vblang/porting-generadores.md`.
 *
 * Cobertura (10 subtipos, todos basico, ver `matematicas-calculo-oficiales.ts`):
 *  - numéricos (7): `limites_funciones`, `derivada_definicion`,
 *    `integral_definida`, `probabilidad_avanzada`, `variables_aleatorias`,
 *    `distribuciones`.
 *  - simbólicos (4): `derivadas_basicas`, `reglas_derivacion`,
 *    `integral_indefinida`, `aplicaciones_integrales`.
 *
 * Subtipos NO portados (5) — gaps documentados en el doc de la
 * plantilla. No se incluyen casos en el test.
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
import { MATEMATICAS_CALCULO_OFICIALES } from "@vb/vblang";
import { CalculoGenerator } from "../matematicas/Calculo";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

/**
 * Normaliza notación Unicode-math (², ³, ·, −, √) → ASCII math.
 * El generador nativo usa Unicode en sus respuestas mostradas
 * (ej. "x² - 4") pero math.js no parsea esos caracteres. Sin
 * esta normalización previa al CAS, la comparación falla.
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
    .replace(/¾/g, "3/4");
}

/** Quita el sufijo " + C" de una integral indefinida. */
function stripConstante(s: string): string {
  return s.replace(/\s*\+\s*C\s*$/, "").replace(/^\((.+)\)$/, "$1");
}

type Inputs = Record<string, number>;

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  dificultad: Dificultad;
  kind: "symbolic" | "numeric";
  oracleSymbolic?: (inp: Inputs) => string;
  oracleNumeric?: (inp: Inputs) => number;
  tol?: number;
  /** Extrae inputs del enunciado del generador. `null` = variante no portada. */
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  /** Lee los inputs de `result.variables` de la plantilla. */
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  /** Transforma la respuesta cruda del generador (opcional). */
  transformGenerator?: (ans: string) => string;
}

const CASES: PortCase[] = [
  // ── 1. limites_funciones (basico) ──────────────────────────────────
  // genLimitesFunciones basico: a ∈ [-3, 3], coef ∈ [1, 5], c ∈ [-5, 5].
  // Polinomio: coef·x² + c. Límite: coef·a² + c.
  {
    subtipoOriginal: "limites_funciones",
    generatorSubtipo: "limites_funciones",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.coef * i.a * i.a + i.c,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/lim\(x→(-?\d+)\)\s*\[(.+?)\]/);
      if (!m) return null;
      const a = parseInt(m[1], 10);
      const pol = m[2].trim();
      // pol = "{coef}x^2 + {c}" o "{coef}x^2 - {abs_c}"
      const polNorm = pol.replace(/\s-\s/g, " + -");
      const mp = polNorm.match(/^(\d+)\*?x\^2\s*\+\s*(-?\d+)$/);
      if (!mp) return null;
      return {
        a,
        coef: parseInt(mp[1], 10),
        c: parseInt(mp[2], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      coef: Number(v.coef),
      c: Number(v.c),
    }),
  },

  // ── 2. derivada_definicion (basico) ──────────────────────────────
  // genDerivadaDefinicion basico: a ∈ [1, 4], c ∈ [1, 5], x0 ∈ [1, 3].
  // f(x) = a·x² + c. f'(x0) = 2·a·x0.
  {
    subtipoOriginal: "derivada_definicion",
    generatorSubtipo: "derivada_definicion",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => 2 * i.a * i.x0,
    tol: 0,
    inputsFromGenerator: (e) => {
      // "Usando f'(x) = ..., calcula f'({x0}) si f(x) = {a}x² + {c}."
      const m = e.match(
        /calcula f'\(([^)]+)\)\s+si f\(x\)\s*=\s*(\d+)x²\s*\+\s*(\d+)/,
      );
      if (!m) return null;
      return {
        x0: parseInt(m[1], 10),
        a: parseInt(m[2], 10),
        c: parseInt(m[3], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      c: Number(v.c),
      x0: Number(v.x0),
    }),
  },

  // ── 3. derivadas_basicas (basico) ───────────────────────────────
  // genDerivadasBasicas basico: polinomio grado 2 con 2 términos,
  // coefs ∈ [1, 5]. x0 ∈ [1, 3]. Pregunta por f'(x) y f'(x0).
  // El generador produce: "f'(x) = {derivStr}; f'({x0}) = {valorDeriv}".
  // La plantilla produce SOLO la fórmula (sin eval). Comparamos
  // sólo el polinomio (extraído de la respuesta del generador).
  {
    subtipoOriginal: "derivadas_basicas",
    generatorSubtipo: "derivadas_basicas",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `${2 * i.coef_x2}*x+${i.coef_x}`,
    inputsFromGenerator: (e) => {
      // "Cuál es la derivada de f(x) = {coef_x2}x^2 + {coef_x}x? Evalúa f'({x0})"
      const m = e.match(
        /f\(x\)\s*=\s*(\d+)x\^2\s*\+\s*(\d+)x\?\s*Eval[úu]a f'\((-?\d+)\)/,
      );
      if (!m) return null;
      return {
        coef_x2: parseInt(m[1], 10),
        coef_x: parseInt(m[2], 10),
        x0: parseInt(m[3], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      coef_x2: Number(v.coef_x2),
      coef_x: Number(v.coef_x),
      x0: Number(v.x0),
    }),
    // Normaliza la respuesta del generador: extrae sólo la fórmula
    // de la derivada (antes del "; f'({x0}) = ...").
    transformGenerator: (ans) => ans.split(";")[0].replace(/^f'\(x\)\s*=\s*/, "").trim(),
  },

  // ── 4. reglas_derivacion (basico, producto) ─────────────────────
  // genReglasDerivacion basico: a, c ∈ [1, 4], b, d ∈ [1, 5].
  // f(x) = (ax+b)(cx+d). f'(x) = 2acx + (ad+bc).
  {
    subtipoOriginal: "reglas_derivacion",
    generatorSubtipo: "reglas_derivacion",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) =>
      `${2 * i.a * i.c}*x+${i.a * i.d + i.b * i.c}`,
    inputsFromGenerator: (e) => {
      // "Deriva usando la regla del producto: f(x) = ({a}x + {b})({c}x + {d})"
      const m = e.match(
        /f\(x\)\s*=\s*\((\d+)x\s*\+\s*(\d+)\)\s*\((\d+)x\s*\+\s*(\d+)\)/,
      );
      if (!m) return null;
      return {
        a: parseInt(m[1], 10),
        b: parseInt(m[2], 10),
        c: parseInt(m[3], 10),
        d: parseInt(m[4], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      b: Number(v.b),
      c: Number(v.c),
      d: Number(v.d),
    }),
  },

  // ── 5. integral_indefinida (basico) ─────────────────────────────
  // genIntegralIndefinida basico: n ∈ [1, 3], coef ∈ [1, 5].
  // ∫ coef·x^n dx = (coef/(n+1))·x^(n+1) + C.
  // Comparamos sólo el polinomio (sin "+C").
  {
    subtipoOriginal: "integral_indefinida",
    generatorSubtipo: "integral_indefinida",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `(${i.coef}/${i.n + 1})*x^${i.n + 1}`,
    inputsFromGenerator: (e) => {
      // "Calcula la antiderivada: ∫ {coef}x^{n} dx"
      const m = e.match(/∫\s*(\d+)x\^(\d+)\s*dx/);
      if (!m) return null;
      return {
        coef: parseInt(m[1], 10),
        n: parseInt(m[2], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      coef: Number(v.coef),
      n: Number(v.n),
    }),
    transformGenerator: (ans) => stripConstante(ans),
  },

  // ── 6. integral_definida (basico) ───────────────────────────────
  // genIntegralDefinida basico: n=1, b ∈ [2, 5]. ∫[0, b] x dx = b²/2.
  {
    subtipoOriginal: "integral_definida",
    generatorSubtipo: "integral_definida",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => (i.b * i.b) / 2,
    tol: 0.01,
    inputsFromGenerator: (e) => {
      // "Calcula: ∫[0,{b}] x^1 dx"
      const m = e.match(/∫\[0,(\d+)\]\s*x\^1\s*dx/);
      if (!m) return null;
      return { b: parseInt(m[1], 10) };
    },
    inputsFromTemplate: (v) => ({ b: Number(v.b) }),
  },

  // ── 7. aplicaciones_integrales (basico) ─────────────────────────
  // genAplicacionesIntegrales basico: siempre "1/6" (área entre
  // y=x e y=x² en [0,1]).
  {
    subtipoOriginal: "aplicaciones_integrales",
    generatorSubtipo: "aplicaciones_integrales",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: () => "1/6",
    inputsFromGenerator: (e) => {
      if (
        e.includes("entre f(x) = x y g(x) = x²") &&
        e.includes("intervalo [0, 1]")
      ) {
        return {}; // inputs vacíos — siempre el mismo caso
      }
      return null;
    },
    inputsFromTemplate: () => ({}),
  },

  // ── 8. probabilidad_avanzada (basico) ──────────────────────────
  // genProbabilidadAvanzada basico: pa, pb ∈ {0.25, 0.5, 0.75}.
  // P(A∩B) = pa·pb.
  {
    subtipoOriginal: "probabilidad_avanzada",
    generatorSubtipo: "probabilidad_avanzada",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.pa * i.pb,
    tol: 0.01,
    inputsFromGenerator: (e) => {
      // "Si P(A) = {pa} y P(B) = {pb}, ..."
      const m = e.match(/P\(A\)\s*=\s*([\d.]+)\s*y\s*P\(B\)\s*=\s*([\d.]+)/);
      if (!m) return null;
      return { pa: parseFloat(m[1]), pb: parseFloat(m[2]) };
    },
    inputsFromTemplate: (v) => ({
      pa: Number(v.pa),
      pb: Number(v.pb),
    }),
  },

  // ── 9. variables_aleatorias (basico) ───────────────────────────
  // genVariablesAleatorias basico: v1 ∈ [1, 3], v2 ∈ [4, 6], v3 ∈ [7, 9].
  // E(X) = 0.3·v1 + 0.5·v2 + 0.2·v3.
  {
    subtipoOriginal: "variables_aleatorias",
    generatorSubtipo: "variables_aleatorias",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => 0.3 * i.v1 + 0.5 * i.v2 + 0.2 * i.v3,
    tol: 0.01,
    inputsFromGenerator: (e) => {
      // "X tiene distribución: P(X={v1})=0.3, P(X={v2})=0.5, P(X={v3})=0.2. ..."
      const m = e.match(
        /P\(X=(\d+)\)=0\.3.*?P\(X=(\d+)\)=0\.5.*?P\(X=(\d+)\)=0\.2/,
      );
      if (!m) return null;
      return {
        v1: parseInt(m[1], 10),
        v2: parseInt(m[2], 10),
        v3: parseInt(m[3], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      v1: Number(v.v1),
      v2: Number(v.v2),
      v3: Number(v.v3),
    }),
  },

  // ── 10. distribuciones (basico, binomial) ────────────────────────
  // genDistribuciones basico: n ∈ [3, 6], p = 0.5, k ∈ [0, n].
  // P(X=k) = C(n,k)·(0.5)^n.
  {
    subtipoOriginal: "distribuciones",
    generatorSubtipo: "distribuciones",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => {
      // C(n, k) precomputada para n ∈ [3, 6]
      const combs: number[][] = [
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1],
        [1, 5, 10, 10, 5, 1],
        [1, 6, 15, 20, 15, 6, 1],
      ];
      const coef = combs[i.n - 3][i.k];
      return coef / Math.pow(2, i.n);
    },
    tol: 0.01,
    inputsFromGenerator: (e) => {
      // "X ~ B({n}, 0.5). Calcula P(X = {k})"
      const m = e.match(/X\s*~\s*B\((\d+),\s*0\.5\)\.\s*Calcula P\(X\s*=\s*(\d+)\)/);
      if (!m) return null;
      return { n: parseInt(m[1], 10), k: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      n: Number(v.n),
      k: Number(v.k),
    }),
  },
];

// Helper: agrega `transformGenerator` opcional al interface.
interface PortCaseInternal extends PortCase {
  transformGenerator?: (ans: string) => string;
}

const SEEDS = Array.from({ length: 50 }, (_v, i) => `wo11d-calculo-${i}`);

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = MATEMATICAS_CALCULO_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(
  subtipo: string,
  dificultad: Dificultad,
  seed: string,
): { enunciado: string; answer: string } {
  const gen = new CalculoGenerator(new DeterministicPrng(seed));
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  return {
    enunciado: ej.enunciado,
    answer: String(ej.opciones[ej.indiceCorrecto]),
  };
}

describe("WO-11d — equivalencia generador↔plantilla (Cálculo)", () => {
  it("las 10 plantillas oficiales existen con subtipoOriginal correcto", () => {
    const subtipos = MATEMATICAS_CALCULO_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "aplicaciones_integrales",
      "derivada_definicion",
      "derivadas_basicas",
      "distribuciones",
      "integral_definida",
      "integral_indefinida",
      "limites_funciones",
      "probabilidad_avanzada",
      "reglas_derivacion",
      "variables_aleatorias",
    ]);
  });

  for (const c of CASES as PortCaseInternal[]) {
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
          if (inp === null) continue;
          matched += 1;
          if (c.kind === "symbolic") {
            const expected = c.oracleSymbolic!(inp);
            // Normalización: Unicode → ASCII, y transformación
            // específica del caso (ej. strip "+C", extraer fórmula).
            const normalized = normalizarMatematica(
              c.transformGenerator ? c.transformGenerator(answer) : answer,
            );
            const eq = sonEquivalentes(normalized, expected).eq;
            expect(
              eq,
              `seed ${seed}: enunciado="${enunciado}" answer="${answer}" (norm="${normalized}") expected="${expected}"`,
            ).toBe(true);
          } else {
            const expected = c.oracleNumeric!(inp);
            const numAnswer = Number(answer.replace(/[^\d.\-eE+]/g, ""));
            expect(
              Math.abs(numAnswer - expected) <= (c.tol ?? 0),
              `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected=${expected}`,
            ).toBe(true);
          }
        }
        // Guard anti-vacío: debe haber al menos 5 matches.
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
});
