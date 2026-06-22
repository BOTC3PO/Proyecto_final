/**
 * WO-7 — Contrato de equivalencia generador↔plantilla (porting paramétrico).
 *
 * REGLA DE ORO del porting (ver `docs/vblang/porting-generadores.md`): un port
 * no se da por bueno si no MATCHEA al generador original. Como `generate()` de
 * VBLang sortea su propia aleatoriedad (no acepta inyección de inputs) y el
 * generador nativo usa otro PRNG, "misma seed" no produce los mismos inputs en
 * ambos. El contrato honesto es el de **ORÁCULO COMPARTIDO**:
 *
 *   1. Se define una fórmula pura `F(inputs) → respuesta` (la matemática del
 *      subtipo), encarnada una sola vez en este test.
 *   2. GENERADOR real: se corre `AritmeticaGenerator` sobre N seeds; de cada
 *      ejercicio se EXTRAEN los inputs (del enunciado) y la respuesta correcta
 *      (`opciones[indiceCorrecto]`), y se exige `respuesta === F(inputs)`.
 *   3. PLANTILLA real: se compila y corre el DSL portado sobre N seeds; de cada
 *      resultado se leen los inputs (`result.variables`) y se exige
 *      `result.respuesta === F(inputs)`.
 *
 * Si AMBOS satisfacen el MISMO `F` sobre sus propios inputs sorteados, entonces
 * la plantilla reproduce la fórmula del generador. Ambas mitades corren código
 * REAL (no mocks): generador nativo + runtime VBLang.
 *
 * Las plantillas reproducen una rama de dificultad concreta por subtipo (ver el
 * doc y el header de `matematicas-aritmetica-oficiales.ts`); por eso cada caso
 * fija `generatorSubtipo` + `dificultad`. Para subtipos cuya rama elegida es una
 * de varias variantes (p. ej. `angulos`, `coordenadas_plano`), el extractor del
 * generador devuelve `null` en las variantes no portadas y el caso las saltea
 * (se exige igualmente un mínimo de coincidencias para no pasar en vacío).
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { MATEMATICAS_ARITMETICA_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { AritmeticaGenerator } from "../matematicas/Aritmetica";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

// Factores de conversión usados por `genUnidadesMedida` (rama basico).
const FACTOR_CONVERSION: Record<string, number> = {
  "m->cm": 100,
  "cm->mm": 10,
  "km->m": 1000,
  "kg->g": 1000,
  "min->s": 60,
  "h->min": 60,
};

function round(v: number, dec: number): number {
  const f = Math.pow(10, dec);
  return Math.round(v * f) / f;
}

type Inputs = Record<string, number>;

interface PortCase {
  /** Coincide con `subtipoOriginal` de la plantilla y el subtipo del generador. */
  subtipoOriginal: string;
  /** Subtipo a pedirle al generador nativo. */
  generatorSubtipo: string;
  /** Rama de dificultad del generador que la plantilla reproduce. */
  dificultad: Dificultad;
  /** Fórmula pura compartida: el ORÁCULO. */
  oracle: (inp: Inputs) => number;
  /** Extrae inputs del enunciado del generador. `null` = variante no portada. */
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  /** Lee los inputs de `result.variables` de la plantilla. */
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  /** Tolerancia absoluta para comparar (0 = igualdad exacta de enteros). */
  tol: number;
}

const CASES: PortCase[] = [
  {
    subtipoOriginal: "potencias",
    generatorSubtipo: "potencias",
    dificultad: "basico",
    oracle: (i) => i.base ** i.exponente,
    inputsFromGenerator: (e) => {
      const m = e.match(/¿Cuánto es (\d+)\^(\d+)\?/);
      return m ? { base: Number(m[1]), exponente: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ base: Number(v.base), exponente: Number(v.exponente) }),
    tol: 0,
  },
  {
    subtipoOriginal: "unidades_medida",
    generatorSubtipo: "unidades_medida",
    dificultad: "basico",
    oracle: (i) => i.valor * i.factor,
    inputsFromGenerator: (e) => {
      const m = e.match(/Convierte (\d+) (\S+) a (\S+)\./);
      if (!m) return null;
      const factor = FACTOR_CONVERSION[`${m[2]}->${m[3]}`];
      if (factor === undefined) return null;
      return { valor: Number(m[1]), factor };
    },
    inputsFromTemplate: (v) => {
      const conv = v.conv as { factor: number };
      return { valor: Number(v.valor), factor: Number(conv.factor) };
    },
    tol: 0,
  },
  {
    subtipoOriginal: "regla_tres",
    generatorSubtipo: "regla_tres",
    dificultad: "basico",
    oracle: (i) => round((i.b * i.c) / i.a, 2),
    inputsFromGenerator: (e) => {
      const m = e.match(/Si (\d+) kg cuestan \$(\d+), ¿cuánto cuestan (\d+) kg\?/);
      return m ? { a: Number(m[1]), b: Number(m[2]), c: Number(m[3]) } : null;
    },
    inputsFromTemplate: (v) => ({ a: Number(v.a), b: Number(v.b), c: Number(v.c) }),
    tol: 0.01,
  },
  {
    subtipoOriginal: "sucesiones",
    generatorSubtipo: "sucesiones",
    dificultad: "basico",
    oracle: (i) => i.a1 + (i.n - 1) * i.d,
    inputsFromGenerator: (e) => {
      const m = e.match(/a₁ = (\d+) y d = (\d+), ¿cuánto vale a(\d+)\?/);
      return m ? { a1: Number(m[1]), d: Number(m[2]), n: Number(m[3]) } : null;
    },
    inputsFromTemplate: (v) => ({ a1: Number(v.a1), d: Number(v.d), n: Number(v.n) }),
    tol: 0,
  },
  {
    subtipoOriginal: "series_simples",
    generatorSubtipo: "series_simples",
    dificultad: "basico",
    oracle: (i) => {
      const an = i.a1 + (i.n - 1) * i.d;
      return Math.round((i.n / 2) * (i.a1 + an));
    },
    inputsFromGenerator: (e) => {
      const m = e.match(
        /primeros (\d+) términos de la progresión aritmética con a₁ = (\d+) y d = (\d+)/,
      );
      return m ? { n: Number(m[1]), a1: Number(m[2]), d: Number(m[3]) } : null;
    },
    inputsFromTemplate: (v) => ({ a1: Number(v.a1), d: Number(v.d), n: Number(v.n) }),
    tol: 0,
  },
  {
    subtipoOriginal: "angulos",
    generatorSubtipo: "angulos",
    dificultad: "intermedio",
    oracle: (i) => i.tope - i.a,
    inputsFromGenerator: (e) => {
      const m = e.match(/ángulo (complementario|suplementario) de (\d+)°\?/);
      if (!m) return null;
      return { tope: m[1] === "complementario" ? 90 : 180, a: Number(m[2]) };
    },
    inputsFromTemplate: (v) => {
      const caso = v.caso as { tope: number };
      return { tope: Number(caso.tope), a: Number(v.a) };
    },
    tol: 0,
  },
  {
    subtipoOriginal: "coordenadas_plano",
    generatorSubtipo: "coordenadas_plano",
    dificultad: "intermedio",
    oracle: (i) => round(Math.sqrt((i.x2 - i.x1) ** 2 + (i.y2 - i.y1) ** 2), 2),
    inputsFromGenerator: (e) => {
      const m = e.match(
        /distancia entre A\((-?\d+), (-?\d+)\) y B\((-?\d+), (-?\d+)\)/,
      );
      return m
        ? { x1: Number(m[1]), y1: Number(m[2]), x2: Number(m[3]), y2: Number(m[4]) }
        : null;
    },
    inputsFromTemplate: (v) => ({
      x1: Number(v.x1),
      y1: Number(v.y1),
      x2: Number(v.x2),
      y2: Number(v.y2),
    }),
    tol: 0.01,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7-seed-${i}`);

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = MATEMATICAS_ARITMETICA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new AritmeticaGenerator(new DeterministicPrng(seed));
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  return { enunciado: ej.enunciado, answer: Number(ej.opciones[ej.indiceCorrecto]) };
}

describe("WO-7 — equivalencia generador↔plantilla (oráculo compartido)", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Aritmética", () => {
    const portadas = MATEMATICAS_ARITMETICA_OFICIALES.map((p) => p.subtipoOriginal).sort();
    const cubiertas = CASES.map((c) => c.subtipoOriginal).sort();
    expect(cubiertas).toEqual(portadas);
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
          expect(Math.abs(answer - c.oracle(inp)), `seed ${seed}: ${enunciado}`).toBeLessThanOrEqual(c.tol);
        }
        // No debe pasar "en vacío": exigimos coincidencias reales.
        expect(matched, "ejercicios del generador que matchearon la variante portada").toBeGreaterThan(5);
      });

      it("PLANTILLA real ≡ oráculo (sobre sus inputs sorteados)", () => {
        const compiled = compiledFor(c.subtipoOriginal);
        for (const seed of SEEDS) {
          const result = generate(compiled, { seed });
          const inp = c.inputsFromTemplate(result.variables);
          const respuesta = Number(result.respuesta);
          expect(
            Math.abs(respuesta - c.oracle(inp)),
            `seed ${seed}: respuesta=${respuesta} inputs=${JSON.stringify(inp)}`,
          ).toBeLessThanOrEqual(c.tol);
        }
      });
    });
  }
});
