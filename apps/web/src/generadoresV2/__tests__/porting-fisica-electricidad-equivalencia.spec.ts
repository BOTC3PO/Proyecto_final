/**
 * WO-7b-ext — Equivalencia generador↔plantilla para Física/Electricidad.
 *
 * NOTA DE TIPOS (mismo patrón que `algebra-equivalencia.spec.ts`):
 * errores de tipo preexistentes (~5) por el framework `Inputs` mal
 * tipado — los extractores devuelven keys string. No se introdujeron
 * errores estructurales nuevos; el refactor del framework queda fuera
 * de scope.
 *
 * Espeja el patrón de `porting-fisica-equivalencia.spec.ts` (Cinemática).
 * Cubre los 3 subtipos numéricos portados (los 2 basados en arrays
 * quedan como gap de builtins, no se incluyen).
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_ELECTRICIDAD_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { ElectricidadGenerator } from "../fisica/Electricidad";
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
    subtipoOriginal: "ley_ohm",
    generatorSubtipo: "ley_ohm",
    dificultad: "basico",
    // El generador sortea V y R como enteros, deriva I = V/R
    // redondeado a 3 decimales, y COMPUTA la respuesta de la variante
    // con la fórmula. La respuesta NO es el valor pre-sorteado de la
    // incógnita sino el producto/cociente de los otros 2 (con drift
    // introducido por el redondeo de I a 3 decimales).
    oracle: (i) => {
      if (i.variante === "V") return i.R * i.I;
      if (i.variante === "I") return i.V / i.R;
      return i.V / i.I; // variante R
    },
    inputsFromGenerator: (e) => {
      // V: "Por una resistencia de {R} Ω circula {I} A. ¿Cuál es el voltaje?"
      const mV = e.match(/resistencia de (\d+) Ω circula ([\d.]+) A.*voltaje/);
      if (mV) return { variante: "V", R: Number(mV[1]), I: Number(mV[2]) };
      // I: "Un circuito tiene {V} V y {R} Ω. ¿Qué corriente circula?"
      const mI = e.match(/circuito tiene (\d+) V y (\d+) Ω.*corriente/);
      if (mI) return { variante: "I", V: Number(mI[1]), R: Number(mI[2]) };
      // R: "Con {V} V circulan {I} A. ¿Cuál es la resistencia?"
      const mR = e.match(/Con (\d+) V circulan ([\d.]+) A.*resistencia/);
      if (mR) return { variante: "R", V: Number(mR[1]), I: Number(mR[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "V", R: Number(v.R), I: Number(v.I) };
      if (idx === 1) return { variante: "I", V: Number(v.V), R: Number(v.R) };
      return { variante: "R", V: Number(v.V), I: Number(v.I) };
    },
    tol: 0.01,
  },
  {
    subtipoOriginal: "potencia_electrica",
    generatorSubtipo: "potencia_electrica",
    dificultad: "basico",
    oracle: (i) => i.V * i.I,
    inputsFromGenerator: (e) => {
      const m = e.match(/opera a (\d+) V y consume (\d+) A/);
      return m ? { V: Number(m[1]), I: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ V: Number(v.V), I: Number(v.I) }),
    tol: 0,
  },
  {
    subtipoOriginal: "consumo_electrico",
    generatorSubtipo: "consumo_electrico",
    dificultad: "basico",
    // No redondear: el template redondea a 4 decimales, y ese valor
    // ya es la respuesta "canónica" (el generador hace lo mismo).
    oracle: (i) => (i.P * i.t) / 1000,
    inputsFromGenerator: (e) => {
      const m = e.match(/aparato de (\d+) W funciona (\d+) h/);
      return m ? { P: Number(m[1]), t: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ P: Number(v.P), t: Number(v.t) }),
    tol: 0.0001,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-ext-fisica-electricidad-${i}`);

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_ELECTRICIDAD_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new ElectricidadGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b-ext — equivalencia Física/Electricidad generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Electricidad", () => {
    const portadas = FISICA_ELECTRICIDAD_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
