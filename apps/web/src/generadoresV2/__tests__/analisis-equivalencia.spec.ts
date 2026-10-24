/**
 * WO-11e — Contrato de equivalencia generador↔plantilla (porting
 * masivo de Análisis y Avanzado).
 *
 * NOTA DE TIPOS (WO-LIMPIEZA-TIPOS, lote #29): este archivo queda con
 * errores de tipo preexistentes (~7) por el framework `Inputs` mal
 * tipado. Ver bloque análogo en `algebra-equivalencia.spec.ts` y
 * `porting-equivalencia.spec.ts`. El refactor correcto requiere
 * cambiar el framework (fuera del scope). No se introdujeron errores
 * nuevos en este PR.
 *
 * Espejo de `calculo-equivalencia.spec.ts` (WO-11d). Cierre del
 * eje 2: 16 subtipos de `AnalisisYAvanzado.ts` portados (todos
 * basico). La respuesta puede ser un STRING (simbólico o
 * conceptual fijo) o un NÚMERO. Comparación por equivalencia
 * simbólica o tolerancia numérica.
 *
 * Cobertura (16 subtipos):
 *  - simbólicos (6): `trigonometria_basica`, `identidades_trigonometricas`,
 *    `ecuaciones_trigonometricas`, `operaciones_complejos`,
 *    `matrices_basico`, `conicas`.
 *  - numéricos (10): `trigonometria_aplicada`, `funciones_exponenciales`,
 *    `funciones_logaritmicas`, `ecuaciones_exponenciales`,
 *    `ecuaciones_logaritmicas`, `numeros_complejos`, `determinantes_basico`,
 *    `sistemas_matrices`, `vectores_basico`, `geometria_espacial`.
 */
import { describe, expect, it } from "vitest";
import {
  compile,
  generate,
  parse,
  sonEquivalentes,
  type CompiledPlantilla,
} from "@vb/vblang";
import { MATEMATICAS_ANALISIS_OFICIALES } from "@vb/vblang";
import { AnalisisYAvanzadoGenerator } from "../matematicas/AnalisisYAvanzado";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

/**
 * Normaliza notación Unicode-math (², ³, ·, −, √) → ASCII math.
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
    // √N → sqrt(N) (cierra el paréntesis antes de / o + o -)
    .replace(/√/g, "sqrt")
    .replace(/sqrt(\d+)/g, "sqrt($1)")
    .replace(/½/g, "1/2")
    .replace(/¼/g, "1/4")
    .replace(/¾/g, "3/4")
    // El generador usa × (U+00D7) para dimensiones de matrices;
    // el DSL usa "x" ASCII. Estandarizamos a ASCII.
    .replace(/×/g, "x");
}

type Inputs = Record<string, any>; // C3 (PLAN-CORRECCIONES): valores mixtos number/string (variante/direccion) — ver nota de tipos arriba.

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  dificultad: Dificultad;
  kind: "symbolic" | "numeric";
  oracleSymbolic?: (inp: Inputs) => string;
  oracleNumeric?: (inp: Inputs) => number;
  tol?: number;
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  transformGenerator?: (ans: string) => string;
}

const CASES: PortCase[] = [
  // ── 1. trigonometria_basica (basico) ─────────────────────────────────
  // Pool: sen/cos de {0, 30, 45, 60, 90}. Para cada par
  // (angulo, funcion), el valor es una constante exacta.
  {
    subtipoOriginal: "trigonometria_basica",
    generatorSubtipo: "trigonometria_basica",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const map: Record<string, string> = {
        "0:seno": "0", "30:seno": "1/2", "45:seno": "sqrt(2)/2",
        "60:seno": "sqrt(3)/2", "90:seno": "1",
        "0:coseno": "1", "30:coseno": "sqrt(3)/2", "45:coseno": "sqrt(2)/2",
        "60:coseno": "1/2", "90:coseno": "0",
      };
      return map[`${i.angulo}:${i.funcion}`] ?? "";
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/¿Cuál es el (seno|coseno) de (\d+)°\?/);
      if (!m) return null;
      return { angulo: parseInt(m[2], 10), funcion: m[1] };
    },
    inputsFromTemplate: (v) => ({
      angulo: Number((v.caso as { angulo: number }).angulo),
      funcion: String((v.caso as { funcion: string }).funcion),
    }),
  },

  // ── 2. trigonometria_aplicada (basico) ─────────────────────────────
  // cateto opuesto = hipotenusa × sen(ángulo). ángulo ∈ {30, 45, 60}.
  {
    subtipoOriginal: "trigonometria_aplicada",
    generatorSubtipo: "trigonometria_aplicada",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => {
      const senMap: Record<number, number> = {
        30: 0.5, 45: Math.sqrt(2) / 2, 60: Math.sqrt(3) / 2,
      };
      return Math.round(i.hip * senMap[i.angulo] * 100) / 100;
    },
    tol: 0.01,
    inputsFromGenerator: (e) => {
      const m = e.match(/hipotenusa = (\d+) y ángulo = (\d+)°/);
      if (!m) return null;
      return {
        hip: parseInt(m[1], 10),
        angulo: parseInt(m[2], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      hip: Number(v.hip),
      angulo: Number(v.angulo),
    }),
  },

  // ── 3. identidades_trigonometricas (basico) ─────────────────────────
  // Para basico, siempre pregunta sen²+cos²=1, respuesta "1".
  {
    subtipoOriginal: "identidades_trigonometricas",
    generatorSubtipo: "identidades_trigonometricas",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: () => "1",
    inputsFromGenerator: (e) => {
      if (e.includes("sen²(θ) + cos²(θ)")) return {};
      return null;
    },
    inputsFromTemplate: () => ({}),
  },

  // ── 4. ecuaciones_trigonometricas (basico) ─────────────────────────
  // sen/cos(x) = v: 2 soluciones. Enunciado pide en [0°, 360°].
  {
    subtipoOriginal: "ecuaciones_trigonometricas",
    generatorSubtipo: "ecuaciones_trigonometricas",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      // sen: x = α, x = 180-α. cos: x = α, x = 360-α.
      const sol2 = i.funcion === "sen" ? 180 - i.angulo : 360 - i.angulo;
      return `x = ${i.angulo}° o x = ${sol2}°`;
    },
    inputsFromGenerator: (e) => {
      const m = e.match(/Resuelve en \[0°, 360°\]: (sen|cos)\(x\)\s*=\s*([^=]+)/);
      if (!m) return null;
      const v = m[2].trim();
      // v = "1/2" o "√2/2" o "√3/2"
      const angMap: Record<string, number> = {
        "1/2": 30, "√2/2": 45, "√3/2": 60,
      };
      const angulo = angMap[v];
      if (angulo === undefined) return null;
      return { funcion: m[1], angulo };
    },
    inputsFromTemplate: (v) => ({
      funcion: String(v.funcion),
      angulo: Number(v.angulo),
    }),
  },

  // ── 5. funciones_exponenciales (basico) ───────────────────────────
  // f(x) = b^x con base ∈ {2, 3, 10}, x ∈ [1, 4].
  {
    subtipoOriginal: "funciones_exponenciales",
    generatorSubtipo: "funciones_exponenciales",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => Math.pow(i.base, i.x),
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/f\(x\) = (\d+)\^x.*?f\((\d+)\)/);
      if (!m) return null;
      return { base: parseInt(m[1], 10), x: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      base: Number(v.base),
      x: Number(v.x),
    }),
  },

  // ── 6. funciones_logaritmicas (basico) ────────────────────────────
  // log_base(base^exp) = exp. base ∈ {2, 10}, exp ∈ [1, 4].
  {
    subtipoOriginal: "funciones_logaritmicas",
    generatorSubtipo: "funciones_logaritmicas",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.exp,
    tol: 0,
    inputsFromGenerator: (e) => {
      // "Calcula: log(x)" o "log_2(x)"
      const m = e.match(/Calcula:\s*log(?:_(\d+))?\((\d+)\)/);
      if (!m) return null;
      const base = m[1] ? parseInt(m[1], 10) : 10;
      const x = parseInt(m[2], 10);
      // exp = log_base(x)
      const exp = Math.round(Math.log(x) / Math.log(base));
      return { base, exp, x };
    },
    inputsFromTemplate: (v) => ({
      base: Number(v.base),
      exp: Number(v.exp),
    }),
  },

  // ── 7. ecuaciones_exponenciales (basico) ─────────────────────────
  // b^x = c con base ∈ {2, 3, 5}, exp ∈ [2, 5].
  {
    subtipoOriginal: "ecuaciones_exponenciales",
    generatorSubtipo: "ecuaciones_exponenciales",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.exp,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/Resuelve:\s*(\d+)\^x\s*=\s*(\d+)/);
      if (!m) return null;
      const base = parseInt(m[1], 10);
      const b = parseInt(m[2], 10);
      const exp = Math.round(Math.log(b) / Math.log(base));
      return { base, exp };
    },
    inputsFromTemplate: (v) => ({
      base: Number(v.base),
      exp: Number(v.exp),
    }),
  },

  // ── 8. ecuaciones_logaritmicas (basico) ──────────────────────────
  // log(x) = k → x = 10^k. base = 10 en basico.
  {
    subtipoOriginal: "ecuaciones_logaritmicas",
    generatorSubtipo: "ecuaciones_logaritmicas",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => Math.pow(10, i.k),
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/Resuelve:\s*log\(x\)\s*=\s*(\d+)/);
      if (!m) return null;
      return { k: parseInt(m[1], 10) };
    },
    inputsFromTemplate: (v) => ({ k: Number(v.k) }),
  },

  // ── 9. numeros_complejos (basico) ─────────────────────────────────
  // En basico, pregunta por la parte real de z = a + bi.
  {
    subtipoOriginal: "numeros_complejos",
    generatorSubtipo: "numeros_complejos",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.a,
    tol: 0,
    inputsFromGenerator: (e) => {
      // "Para z = -5 + 1i" o "Para z = 2 + 3i"
      const m = e.match(/Para z = (-?\d+)\s*\+\s*(\d+)i/);
      if (!m) return null;
      return { a: parseInt(m[1], 10), b: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      b: Number(v.b),
    }),
  },

  // ── 10. operaciones_complejos (basico, suma o resta) ──────────────
  // El generador produce "(a1 + b1i) ± (a2 + b2i)" y la respuesta
  // es "ra + rbi" (con `+` siempre, ej. "0 + -3i").
  {
    subtipoOriginal: "operaciones_complejos",
    generatorSubtipo: "operaciones_complejos",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => {
      const ra = i.es_resta === 1 ? i.a1 - i.a2 : i.a1 + i.a2;
      const rb = i.es_resta === 1 ? i.b1 - i.b2 : i.b1 + i.b2;
      return `${ra}+${rb}*i`;
    },
    inputsFromGenerator: (e) => {
      // "Calcula: (a1 + b1i) ± (a2 + b2i)"
      const m = e.match(/\((-?\d+)\s*\+\s*(-?\d+)i\)\s*([+\-−])\s*\((-?\d+)\s*\+\s*(-?\d+)i\)/);
      if (!m) return null;
      const a1 = parseInt(m[1], 10);
      const b1 = parseInt(m[2], 10);
      const op = m[3];
      const a2 = parseInt(m[4], 10);
      const b2 = parseInt(m[5], 10);
      const es_resta = op === "-" || op === "−" ? 1 : 0;
      return { a1, b1, a2, b2, es_resta };
    },
    inputsFromTemplate: (v) => ({
      a1: Number(v.a1),
      b1: Number(v.b1),
      a2: Number(v.a2),
      b2: Number(v.b2),
      es_resta: Number(v.es_resta),
    }),
  },

  // ── 11. matrices_basico (basico) ─────────────────────────────────
  // En basico, pregunta por la dimensión filas×cols.
  // El DSL usa "x" (ASCII) y el generador "×" (Unicode). La
  // normalización convierte el del generador a "x" antes de comparar.
  {
    subtipoOriginal: "matrices_basico",
    generatorSubtipo: "matrices_basico",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) => `${i.filas}x${i.cols}`,
    inputsFromGenerator: (e) => {
      const m = e.match(/Una matriz tiene (\d+) filas y (\d+) columnas/);
      if (!m) return null;
      return { filas: parseInt(m[1], 10), cols: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      filas: Number(v.filas),
      cols: Number(v.cols),
    }),
  },

  // ── 12. determinantes_basico (basico) ────────────────────────────
  // det 2×2 = a·e - b·c.
  {
    subtipoOriginal: "determinantes_basico",
    generatorSubtipo: "determinantes_basico",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.a * i.e - i.b * i.c,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/\|(-?\d+)\s+(-?\d+);\s*(-?\d+)\s+(-?\d+)\|/);
      if (!m) return null;
      return {
        a: parseInt(m[1], 10),
        b: parseInt(m[2], 10),
        c: parseInt(m[3], 10),
        e: parseInt(m[4], 10),
      };
    },
    inputsFromTemplate: (v) => ({
      a: Number(v.a),
      b: Number(v.b),
      c: Number(v.c),
      e: Number(v.e),
    }),
  },

  // ── 13. sistemas_matrices (basico) ──────────────────────────────
  // Cramer 2×2: x = Det(Ax)/Det(A).
  {
    subtipoOriginal: "sistemas_matrices",
    generatorSubtipo: "sistemas_matrices",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.x,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/(\d+)x\s*\+\s*(\d+)y\s*=\s*(-?\d+)\s*\n?\s*(\d+)x\s*\+\s*(\d+)y\s*=\s*(-?\d+)/);
      if (!m) return null;
      const a = parseInt(m[1], 10);
      const b = parseInt(m[2], 10);
      const e1 = parseInt(m[3], 10);
      const c = parseInt(m[4], 10);
      const ee = parseInt(m[5], 10);
      const e2 = parseInt(m[6], 10);
      const det = a * ee - b * c;
      const det_ax = e1 * ee - b * e2;
      const x = det_ax / det;
      return { a, b, e1, c, e: ee, e2, x };
    },
    inputsFromTemplate: (v) => ({
      x: Number(v.x_sol),
    }),
  },

  // ── 14. vectores_basico (basico) ─────────────────────────────────
  // |v| = √(dx² + dy²). En basico, pregunta por el módulo.
  {
    subtipoOriginal: "vectores_basico",
    generatorSubtipo: "vectores_basico",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => Math.round(Math.sqrt(i.dx1 ** 2 + i.dy1 ** 2) * 100) / 100,
    tol: 0.01,
    inputsFromGenerator: (e) => {
      const m = e.match(/v₁\s*=\s*\((-?\d+),\s*(-?\d+)\)/);
      if (!m) return null;
      return { dx1: parseInt(m[1], 10), dy1: parseInt(m[2], 10) };
    },
    inputsFromTemplate: (v) => ({
      dx1: Number(v.dx1),
      dy1: Number(v.dy1),
    }),
  },

  // ── 15. geometria_espacial (basico, cubo) ────────────────────────
  // En basico, siempre es cubo: vol = lado³.
  {
    subtipoOriginal: "geometria_espacial",
    generatorSubtipo: "geometria_espacial",
    dificultad: "basico",
    kind: "numeric",
    oracleNumeric: (i) => i.lado ** 3,
    tol: 0,
    inputsFromGenerator: (e) => {
      const m = e.match(/Calcula el volumen de un cubo con lado\s*=\s*(\d+)/);
      if (!m) return null;
      return { lado: parseInt(m[1], 10) };
    },
    inputsFromTemplate: (v) => ({ lado: Number(v.lado) }),
  },

  // ── 16. conicas (basico, circunferencia) ─────────────────────────
  // Identifica la cónica. En basico, siempre es circunferencia.
  {
    subtipoOriginal: "conicas",
    generatorSubtipo: "conicas",
    dificultad: "basico",
    kind: "symbolic",
    oracleSymbolic: (i) =>
      `Circunferencia: centro (${i.h},${i.k}), radio ${i.r}`,
    inputsFromGenerator: (e) => {
      // "Identifica la cónica: (x + 2)² + (y + 1)² = 25"
      // El formato es (x ± a)² + (y ± b)² = c
      const m = e.match(/\(x\s*([+\-])\s*(\d+)\)²\s*\+\s*\(y\s*([+\-])\s*(\d+)\)²\s*=\s*(\d+)/);
      if (!m) return null;
      const sign_h = m[1];
      const num_h = parseInt(m[2], 10);
      const sign_k = m[3];
      const num_k = parseInt(m[4], 10);
      const r2 = parseInt(m[5], 10);
      // Si equation muestra "(x - a)²", el centro es x=a (sign_h = "-").
      // Si muestra "(x + a)²", el centro es x=-a (sign_h = "+").
      const h = sign_h === "-" ? num_h : -num_h;
      const k = sign_k === "-" ? num_k : -num_k;
      const r = Math.round(Math.sqrt(r2));
      return { h, k, r };
    },
    inputsFromTemplate: (v) => ({
      h: Number(v.h),
      k: Number(v.k),
      r: Number(v.r),
    }),
  },
];

const SEEDS = Array.from({ length: 50 }, (_v, i) => `wo11e-analisis-${i}`);

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = MATEMATICAS_ANALISIS_OFICIALES.find(
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
  const gen = new AnalisisYAvanzadoGenerator(new DeterministicPrng(seed));
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  return {
    enunciado: ej.enunciado,
    answer: String(ej.opciones[ej.indiceCorrecto]),
  };
}

describe("WO-11e — equivalencia generador↔plantilla (Análisis y Avanzado)", () => {
  it("las 16 plantillas oficiales existen con subtipoOriginal correcto", () => {
    const subtipos = MATEMATICAS_ANALISIS_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "conicas",
      "determinantes_basico",
      "ecuaciones_exponenciales",
      "ecuaciones_logaritmicas",
      "ecuaciones_trigonometricas",
      "funciones_exponenciales",
      "funciones_logaritmicas",
      "geometria_espacial",
      "identidades_trigonometricas",
      "matrices_basico",
      "numeros_complejos",
      "operaciones_complejos",
      "sistemas_matrices",
      "trigonometria_aplicada",
      "trigonometria_basica",
      "vectores_basico",
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
          if (inp === null) continue;
          matched += 1;
          if (c.kind === "symbolic") {
            const expected = c.oracleSymbolic!(inp);
            const transformed = c.transformGenerator
              ? c.transformGenerator(answer)
              : answer;
            const normalized = normalizarMatematica(transformed);
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
        // Guard anti-vacío.
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
