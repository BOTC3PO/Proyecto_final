/**
 * WO-7b-ext — Equivalencia generador↔plantilla para Física/Ondas.
 *
 * NOTA DE TIPOS (mismo patrón que `algebra-equivalencia.spec.ts`):
 * errores de tipo preexistentes por el framework `Inputs` mal tipado.
 * No se introdujeron errores estructurales nuevos.
 *
 * Espeja el patrón de `porting-fisica-equivalencia.spec.ts` (Cinemática).
 * Cubre los 3 subtipos portados (velocidad_ondas, longitud_onda,
 * frecuencia_periodo) en rama `basico`.
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_ONDAS_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { OndasGenerator } from "../fisica/Ondas";
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
    subtipoOriginal: "velocidad_ondas",
    generatorSubtipo: "velocidad_ondas",
    dificultad: "basico",
    // 3 variantes: v / f / λ. Igual que ley_ohm: respuestas computadas
    // desde fórmula para absorber el drift del redondeo.
    oracle: (i) => {
      if (i.variante === "v") return round2(i.f * i.lambda);
      if (i.variante === "f") return round2(i.v / i.lambda);
      return round2(i.v / i.f); // variante λ
    },
    inputsFromGenerator: (e) => {
      // v: "Una onda tiene f={f} Hz y λ={lambda} m. ¿Cuál es su velocidad?"
      const mV = e.match(/tiene f=(\d+) Hz y λ=([\d.]+) m.*velocidad/);
      if (mV) return { variante: "v", f: Number(mV[1]), lambda: Number(mV[2]) };
      // f: "Una onda viaja a {v} m/s con λ={lambda} m. ¿Cuál es su frecuencia?"
      const mF = e.match(/viaja a ([\d.]+) m\/s con λ=([\d.]+) m.*frecuencia/);
      if (mF) return { variante: "f", v: Number(mF[1]), lambda: Number(mF[2]) };
      // λ: "Una onda viaja a {v} m/s con f={f} Hz. ¿Cuál es su longitud"
      const mL = e.match(/viaja a ([\d.]+) m\/s con f=(\d+) Hz.*longitud/);
      if (mL) return { variante: "lambda", v: Number(mL[1]), f: Number(mL[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "v", f: Number(v.f), lambda: Number(v.lambda) };
      if (idx === 1) return { variante: "f", v: Number(v.v), lambda: Number(v.lambda) };
      return { variante: "lambda", v: Number(v.v), f: Number(v.f) };
    },
    tol: 0.01,
  },
  {
    subtipoOriginal: "longitud_onda",
    generatorSubtipo: "longitud_onda",
    dificultad: "basico",
    // v depende del medio (aire=340 o agua=1500). El generador sortea
    // el medio. Las 2 variantes calculan λ = v/f o f = v/λ.
    oracle: (i) => {
      if (i.variante === "lambda") return round2(i.v / i.f);
      return round2(i.v / i.lambda); // variante f
    },
    inputsFromGenerator: (e) => {
      // λ: "El sonido en {medio} (v={v} m/s) tiene f={f} Hz. ¿Cuál es su longitud"
      const mL = e.match(/sonido en (\w+).*\(v=(\d+) m\/s\).*f=(\d+) Hz.*longitud/);
      if (mL) return { variante: "lambda", v: Number(mL[2]), f: Number(mL[3]) };
      // f: "El sonido en {medio} (v={v} m/s) tiene λ={lambda} m. ¿Cuál es su frecuencia?"
      const mF = e.match(/sonido en (\w+).*\(v=(\d+) m\/s\).*λ=([\d.]+) m.*frecuencia/);
      if (mF) return { variante: "f", v: Number(mF[2]), lambda: Number(mF[3]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "lambda", v: Number(v.v), f: Number(v.f) };
      return { variante: "f", v: Number(v.v), lambda: Number(v.lambda) };
    },
    tol: 0.01,
  },
  {
    subtipoOriginal: "frecuencia_periodo",
    generatorSubtipo: "frecuencia_periodo",
    dificultad: "basico",
    // 2 variantes: f desde T o T desde f. El generador redondea el
    // resultado a 6 decimales (default 4 + redondeo explícito a 6);
    // el oráculo reproduce ese redondeo para hacer match exacto
    // dentro de tol=0.0001.
    oracle: (i) => {
      if (i.variante === "f") return round6(1 / i.T);
      return round6(1 / i.f); // variante T
    },
    inputsFromGenerator: (e) => {
      // f: "Una onda tiene período T={T} s. ¿Cuál es su frecuencia?"
      const mF = e.match(/período T=([\d.]+) s.*frecuencia/);
      if (mF) return { variante: "f", T: Number(mF[1]) };
      // T: "Una onda tiene frecuencia f={f} Hz. ¿Cuál es su período?"
      const mT = e.match(/frecuencia f=(\d+) Hz.*período/);
      if (mT) return { variante: "T", f: Number(mT[1]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "f", T: Number(v.T) };
      return { variante: "T", f: Number(v.f) };
    },
    tol: 0.0001,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-ext-fisica-ondas-${i}`);

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function round6(v: number): number {
  return Math.round(v * 1e6) / 1e6;
}

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_ONDAS_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new OndasGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b-ext — equivalencia Física/Ondas generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Ondas", () => {
    const portadas = FISICA_ONDAS_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
