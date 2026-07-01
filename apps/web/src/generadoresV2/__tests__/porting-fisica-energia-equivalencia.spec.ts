/**
 * WO-7b-ext — Equivalencia generador↔plantilla para Física/Energía.
 *
 * NOTA DE TIPOS (mismo patrón que `algebra-equivalencia.spec.ts`):
 * errores de tipo preexistentes por el framework `Inputs` mal tipado.
 * No se introdujeron errores estructurales nuevos.
 *
 * Espeja el patrón de `porting-fisica-equivalencia.spec.ts` (Cinemática).
 * Cubre los 5 subtipos portados (trabajo_mecanico, energia_cinetica,
 * energia_potencial, conservacion_energia, potencia_mecanica) en
 * rama `basico`.
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_ENERGIA_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { EnergiaGenerator } from "../fisica/Energia";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";
import { crearCalculadoraFisica } from "../fisica/calculadora";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };
const FISICA_CALC = crearCalculadoraFisica();

type Inputs = Record<string, number>;

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
    subtipoOriginal: "trabajo_mecanico",
    generatorSubtipo: "trabajo_mecanico",
    dificultad: "basico",
    oracle: (i) => round2(i.F * i.d * Math.cos((i.angulo * Math.PI) / 180)),
    inputsFromGenerator: (e) => {
      // "Una fuerza de {F} N [ (θ={angulo}°)] desplaza un objeto {d} m."
      const m = e.match(/fuerza de (\d+) N(?:\s*\(θ=(\d+)°\))? desplaza un objeto (\d+) m/);
      if (!m) return null;
      return { F: Number(m[1]), angulo: m[2] ? Number(m[2]) : 0, d: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({
      F: Number(v.F),
      d: Number(v.d),
      angulo: Number(v.angulo),
    }),
    tol: 0.05,
  },
  {
    subtipoOriginal: "energia_cinetica",
    generatorSubtipo: "energia_cinetica",
    dificultad: "basico",
    oracle: (i) => round2(0.5 * i.m * i.v * i.v),
    inputsFromGenerator: (e) => {
      const m = e.match(/objeto de (\d+) kg se mueve a (\d+) m\/s/);
      return m ? { m: Number(m[1]), v: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ m: Number(v.m), v: Number(v.v) }),
    tol: 0.01,
  },
  {
    subtipoOriginal: "energia_potencial",
    generatorSubtipo: "energia_potencial",
    dificultad: "basico",
    oracle: (i) => round2(i.m * 9.8 * i.h),
    inputsFromGenerator: (e) => {
      const m = e.match(/objeto de (\d+) kg está a (\d+) m de altura/);
      return m ? { m: Number(m[1]), h: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ m: Number(v.m), h: Number(v.h) }),
    tol: 0.01,
  },
  {
    subtipoOriginal: "conservacion_energia",
    generatorSubtipo: "conservacion_energia",
    dificultad: "basico",
    oracle: (i) => round2(Math.sqrt(2 * 9.8 * i.h)),
    inputsFromGenerator: (e) => {
      const m = e.match(/cae desde (\d+) m de altura/);
      return m ? { h: Number(m[1]) } : null;
    },
    inputsFromTemplate: (v) => ({ h: Number(v.h) }),
    tol: 0.01,
  },
  {
    subtipoOriginal: "potencia_mecanica",
    generatorSubtipo: "potencia_mecanica",
    dificultad: "basico",
    oracle: (i) => round2(i.W / i.t),
    inputsFromGenerator: (e) => {
      const m = e.match(/trabajo de (\d+) J en (\d+) s/);
      return m ? { W: Number(m[1]), t: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ W: Number(v.W), t: Number(v.t) }),
    tol: 0.01,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-ext-fisica-energia-${i}`);

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_ENERGIA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new EnergiaGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b-ext — equivalencia Física/Energía generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Energía", () => {
    const portadas = FISICA_ENERGIA_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
