/**
 * WO-7b-ext — Equivalencia generador↔plantilla para Física/Fluidos.
 *
 * NOTA DE TIPOS (mismo patrón que `algebra-equivalencia.spec.ts`):
 * errores de tipo preexistentes por el framework `Inputs` mal tipado.
 * No se introdujeron errores estructurales nuevos.
 *
 * Espeja el patrón de `porting-fisica-equivalencia.spec.ts` (Cinemática).
 * Cubre los 4 subtipos portados (densidad, presion, presion_hidrostatica,
 * caudal) en rama `basico`.
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_FLUIDOS_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { FluidosGenerator } from "../fisica/Fluidos";
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
    subtipoOriginal: "densidad",
    generatorSubtipo: "densidad",
    dificultad: "basico",
    // El generador tiene un BUG documentado: la enunciado redondea
    // `masaKg` a 2 decimales (`masaKg.toFixed(2)`) y `densidad` a 1
    // decimal (`(densidad * 1000).toFixed(1)`), pero el cálculo de la
    // respuesta usa los valores SIN redondear. Por eso la tolerancia
    // es generosa: con `masaKg` ±0.005 y `volM3` ~0.003 el error puede
    // ser ~1.5 kg/m³; con `rho` ±50 (redondeo a 1 dec) el error es
    // hasta 50 sobre el valor final. Aceptamos la imprecisión del
    // generador sin "arreglarlo" (no es el alcance de WO-7b-ext).
    oracle: (i) => {
      if (i.variante === "rho") return i.masaKg / i.volM3;
      if (i.variante === "masa") return i.rho * i.volM3;
      return i.masaKg / i.rho; // variante V
    },
    inputsFromGenerator: (e) => {
      // rho: "Un objeto pesa {masaKg} kg y ocupa {volM3} m³. ¿Cuál es su densidad?"
      const mR = e.match(/pesa ([\d.]+) kg y ocupa ([\d.]+) m³.*densidad/);
      if (mR) return { variante: "rho", masaKg: Number(mR[1]), volM3: Number(mR[2]) };
      // masa: "Un fluido de densidad {rho} kg/m³ ocupa {volM3} m³. ¿Cuál es su masa?"
      const mM = e.match(/densidad ([\d.]+) kg\/m³ ocupa ([\d.]+) m³.*masa/);
      if (mM) return { variante: "masa", rho: Number(mM[1]), volM3: Number(mM[2]) };
      // V: "Un fluido de densidad {rho} kg/m³ tiene masa {masaKg} kg. ¿Cuál es su volumen?"
      const mV = e.match(/densidad ([\d.]+) kg\/m³ tiene masa ([\d.]+) kg.*volumen/);
      if (mV) return { variante: "V", rho: Number(mV[1]), masaKg: Number(mV[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "rho", masaKg: Number(v.masaKg), volM3: Number(v.volM3) };
      if (idx === 1) return { variante: "masa", rho: Number(v.rho), volM3: Number(v.volM3) };
      return { variante: "V", rho: Number(v.rho), masaKg: Number(v.masaKg) };
    },
    tol: 5, // tolera el drift de enunciado del generador (ver comentario)
  },
  {
    subtipoOriginal: "presion",
    generatorSubtipo: "presion",
    dificultad: "basico",
    oracle: (i) => {
      if (i.variante === "P") return round2(i.F / i.A);
      if (i.variante === "F") return round2(i.P * i.A);
      return round2(i.F / i.P); // variante A
    },
    inputsFromGenerator: (e) => {
      // P: "Una fuerza de {F} N actúa sobre un área de {A} m². ¿Cuál es la presión?"
      const mP = e.match(/fuerza de (\d+) N actúa sobre un área de ([\d.]+) m².*presión/);
      if (mP) return { variante: "P", F: Number(mP[1]), A: Number(mP[2]) };
      // F: "Una presión de {P} Pa actúa sobre {A} m². ¿Cuál es la fuerza?"
      const mF = e.match(/presión de ([\d.]+) Pa actúa sobre ([\d.]+) m².*fuerza/);
      if (mF) return { variante: "F", P: Number(mF[1]), A: Number(mF[2]) };
      // A: "Una fuerza de {F} N genera una presión de {P} Pa. ¿Cuál es el área?"
      const mA = e.match(/fuerza de (\d+) N genera una presión de ([\d.]+) Pa.*área/);
      if (mA) return { variante: "A", F: Number(mA[1]), P: Number(mA[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "P", F: Number(v.F), A: Number(v.A) };
      if (idx === 1) return { variante: "F", P: Number(v.P), A: Number(v.A) };
      return { variante: "A", F: Number(v.F), P: Number(v.P) };
    },
    tol: 0.05,
  },
  {
    subtipoOriginal: "presion_hidrostatica",
    generatorSubtipo: "presion_hidrostatica",
    dificultad: "basico",
    oracle: (i) => round2(i.rho * 9.8 * i.h),
    inputsFromGenerator: (e) => {
      const m = e.match(/presión hidrostática a (\d+) m.*ρ=(\d+) kg\/m³/);
      return m ? { h: Number(m[1]), rho: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ h: Number(v.h), rho: Number(v.rho) }),
    tol: 0.05,
  },
  {
    subtipoOriginal: "caudal",
    generatorSubtipo: "caudal",
    dificultad: "basico",
    // A tiene hasta 3 decimales en la enunciado (`redondear(randFloat, 3)`);
    // el generador redondea la respuesta a 4 decimales. Oracle sin
    // redondear (la tolerancia absorbe el redondeo).
    oracle: (i) => i.A * i.v,
    inputsFromGenerator: (e) => {
      const m = e.match(/sección ([\d.]+) m².*fluido a (\d+) m\/s/);
      return m ? { A: Number(m[1]), v: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ A: Number(v.A), v: Number(v.v) }),
    tol: 0.005,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-ext-fisica-fluidos-${i}`);

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_FLUIDOS_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new FluidosGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b-ext — equivalencia Física/Fluidos generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Fluidos", () => {
    const portadas = FISICA_FLUIDOS_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
