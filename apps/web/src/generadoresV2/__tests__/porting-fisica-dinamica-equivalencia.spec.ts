/**
 * WO-7b-ext — Equivalencia generador↔plantilla para Física/Dinámica.
 *
 * NOTA DE TIPOS (mismo patrón que `algebra-equivalencia.spec.ts`):
 * este archivo tiene errores de tipo preexistentes (~10) por el
 * framework `Inputs = Record<string, number>` mal tipado — los
 * extractores/extractor-side devuelven objetos con keys string
 * (variante, etc.) que no encajan en `Inputs`. No se introdujeron
 * errores estructurales nuevos respecto al patrón de WO-7b; el
 * refactor del framework queda fuera de scope.
 *
 * Espeja el patrón de `porting-fisica-equivalencia.spec.ts` (Cinemática):
 * cada plantilla de `fisica-dinamica-oficiales.ts` se compara con el
 * generador nativo correspondiente (`DinamicaGenerator`) vía oráculo
 * compartido. Cada subtipo multi-variante (peso: 2, friccion: 3,
 * ley_hooke: 3) tiene un único caso en CASES con un `oracle` que decide
 * la rama según el input extraído; el `inputsFromGenerator`/`Template`
 * devuelve `null` en las variantes no matcheadas y se salta el seed.
 *
 * Para mantener el "no vacío" se exige ≥ 5 coincidencias en la mitad
 * del generador (excepto casos extremos).
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_DINAMICA_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { DinamicaGenerator } from "../fisica/Dinamica";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";
import { crearCalculadoraFisica } from "../fisica/calculadora";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };
const FISICA_CALC = crearCalculadoraFisica();

type Inputs = Record<string, any>; // C3 (PLAN-CORRECCIONES): valores mixtos number/string (variante/direccion) — ver nota de tipos arriba.

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  dificultad: Dificultad;
  oracle: (inp: Inputs) => number;
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  tol: number;
}

const CASES: PortCase[] = [
  {
    subtipoOriginal: "peso",
    generatorSubtipo: "peso",
    dificultad: "basico",
    oracle: (i) => {
      if (i.variante === "peso") return round2(i.masa * 9.8);
      return round2(i.peso / 9.8); // variante "masa": respuesta = peso/g
    },
    inputsFromGenerator: (e) => {
      // Variante 0: "Un objeto tiene masa {m} kg. ¿Cuál es su peso"
      const mPeso = e.match(/tiene masa (\d+) kg.*¿Cuál es su peso/);
      if (mPeso) return { variante: "peso", masa: Number(mPeso[1]) };
      // Variante 1: "Un objeto pesa {P} N (g=9.8 m/s²). ¿Cuál es su masa?"
      const mMasa = e.match(/pesa ([\d.]+) N.*¿Cuál es su masa/);
      if (mMasa) return { variante: "masa", peso: Number(mMasa[1]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "peso", masa: Number(v.masa) };
      return { variante: "masa", peso: Number(v.peso) };
    },
    tol: 0.01,
  },
  {
    subtipoOriginal: "friccion",
    generatorSubtipo: "friccion",
    dificultad: "basico",
    oracle: (i) => {
      if (i.variante === "fuerza") return round2(i.mu * i.N);
      if (i.variante === "coeficiente") return round2(i.Fr / i.N);
      return round2(i.Fr / i.mu); // variante "normal"
    },
    inputsFromGenerator: (e) => {
      // Variante 0: "μ={mu}, N={N} N. ¿Cuál es la fuerza de fricción?"
      const mFr = e.match(/μ=([\d.]+), N=(\d+) N\..*fuerza de fricción/);
      if (mFr) return { variante: "fuerza", mu: Number(mFr[1]), N: Number(mFr[2]) };
      // Variante 1: "Fr={Fr} N, N={N} N. ¿Cuál es el coeficiente de fricción?"
      const mMu = e.match(/Fr=([\d.]+) N, N=(\d+) N\..*coeficiente de fricción/);
      if (mMu) return { variante: "coeficiente", Fr: Number(mMu[1]), N: Number(mMu[2]) };
      // Variante 2: "Fr={Fr} N, μ={mu}. ¿Cuál es la fuerza normal?"
      const mN = e.match(/Fr=([\d.]+) N, μ=([\d.]+)\..*fuerza normal/);
      if (mN) return { variante: "normal", Fr: Number(mN[1]), mu: Number(mN[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "fuerza", mu: Number(v.mu), N: Number(v.N) };
      if (idx === 1) return { variante: "coeficiente", Fr: Number(v.Fr), N: Number(v.N) };
      return { variante: "normal", Fr: Number(v.Fr), mu: Number(v.mu) };
    },
    tol: 0.05,
  },
  {
    subtipoOriginal: "plano_inclinado",
    generatorSubtipo: "plano_inclinado",
    dificultad: "basico",
    oracle: (i) => round2(i.masa * 9.8 * Math.sin((i.angulo * Math.PI) / 180)),
    inputsFromGenerator: (e) => {
      const m = e.match(/bloque de (\d+) kg.*plano inclinado (\d+)°/);
      return m ? { masa: Number(m[1]), angulo: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ masa: Number(v.masa), angulo: Number(v.angulo) }),
    tol: 0.05,
  },
  {
    subtipoOriginal: "ley_hooke",
    generatorSubtipo: "ley_hooke",
    dificultad: "basico",
    oracle: (i) => {
      if (i.variante === "fuerza") return round2(i.k * i.x);
      if (i.variante === "constante") return round2(i.F / i.x);
      return round2(i.F / i.k); // variante "deformacion"
    },
    inputsFromGenerator: (e) => {
      // Variante 0: "Un resorte con k={k} N/m se comprime {x} cm."
      const mF = e.match(/resorte con k=(\d+) N\/m se comprime (\d+) cm/);
      if (mF) return { variante: "fuerza", k: Number(mF[1]), x: Number(mF[2]) };
      // Variante 1: "Una fuerza de {F} N produce una deformación de {x} cm. ¿Cuál es la constante"
      const mK = e.match(/fuerza de (\d+) N produce una deformación de (\d+) cm/);
      if (mK) return { variante: "constante", F: Number(mK[1]), x: Number(mK[2]) };
      // Variante 2: "Una fuerza de {F} N actúa sobre un resorte (k={k} N/m)."
      const mX = e.match(/fuerza de (\d+) N actúa sobre un resorte \(k=(\d+) N\/m\)/);
      if (mX) return { variante: "deformacion", F: Number(mX[1]), k: Number(mX[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "fuerza", k: Number(v.k), x: Number(v.x) };
      if (idx === 1) return { variante: "constante", F: Number(v.F), x: Number(v.x) };
      return { variante: "deformacion", F: Number(v.F), k: Number(v.k) };
    },
    tol: 0.01,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-ext-fisica-dinamica-${i}`);

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_DINAMICA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new DinamicaGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b-ext — equivalencia Física/Dinámica generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Dinámica", () => {
    const portadas = FISICA_DINAMICA_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
          if (inp === null) continue;
          matched += 1;
          const expected = c.oracle(inp);
          expect(
            Math.abs(answer - expected),
            `seed ${seed}: enunciado="${enunciado}" answer=${answer} oracle=${expected}`,
          ).toBeLessThanOrEqual(c.tol);
        }
        expect(matched, "ejercicios del generador que matchearon").toBeGreaterThan(5);
      });

      it("PLANTILLA real ≡ oráculo (sobre sus inputs sorteados)", () => {
        const compiled = compiledFor(c.subtipoOriginal);
        for (const seed of SEEDS) {
          const result = generate(compiled, { seed });
          const inp = c.inputsFromTemplate(result.variables);
          const expected = c.oracle(inp);
          const respuesta = Number(result.respuesta);
          expect(
            Math.abs(respuesta - expected),
            `seed ${seed}: respuesta=${respuesta} inputs=${JSON.stringify(inp)} expected=${expected}`,
          ).toBeLessThanOrEqual(c.tol);
        }
      });
    });
  }
});
