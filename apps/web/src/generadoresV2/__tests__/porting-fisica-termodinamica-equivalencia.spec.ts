/**
 * WO-7b-ext — Equivalencia generador↔plantilla para Física/Termodinámica.
 *
 * NOTA DE TIPOS (mismo patrón que `algebra-equivalencia.spec.ts`):
 * errores de tipo preexistentes por el framework `Inputs` mal tipado.
 * No se introdujeron errores estructurales nuevos.
 *
 * Espeja el patrón de `porting-fisica-equivalencia.spec.ts` (Cinemática).
 * Cubre los 4 subtipos portados (calor, conversion_temperatura,
 * cambios_estado, dilatacion_termica) en rama `basico`.
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_TERMODINAMICA_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { TermodinamicaGenerator } from "../fisica/Termodinamica";
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
    subtipoOriginal: "calor",
    generatorSubtipo: "calor",
    dificultad: "basico",
    oracle: (i) => {
      if (i.variante === "Q") return round2(i.masa * i.c * i.deltaT);
      if (i.variante === "masa") return round2(i.Q / (i.c * i.deltaT));
      return round2(i.Q / (i.masa * i.c)); // variante deltaT
    },
    inputsFromGenerator: (e) => {
      // Q: "¿Cuánto calor se necesita para elevar {masa} g de una sustancia (c={c} J/g°C) en {dT}°C?"
      const mQ = e.match(/elevar (\d+) g de una sustancia \(c=([\d.]+) J\/g°C\) en (\d+)°C/);
      if (mQ) return { variante: "Q", masa: Number(mQ[1]), c: Number(mQ[2]), deltaT: Number(mQ[3]) };
      // masa: "Se absorben {Q} J con c={c} J/g°C y ΔT={dT}°C. ¿Cuál es la masa?"
      const mM = e.match(/Se absorben ([\d.]+) J con c=([\d.]+) J\/g°C y ΔT=(\d+)°C.*masa/);
      if (mM) return { variante: "masa", Q: Number(mM[1]), c: Number(mM[2]), deltaT: Number(mM[3]) };
      // dT: "{Q} J calientan {masa} g de una sustancia (c={c} J/g°C). ¿En cuánto sube la temperatura?"
      const mDT = e.match(/^([\d.]+) J calientan (\d+) g de una sustancia \(c=([\d.]+) J\/g°C\)/);
      if (mDT) return { variante: "deltaT", Q: Number(mDT[1]), masa: Number(mDT[2]), c: Number(mDT[3]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const idx = Number(v.idx);
      if (idx === 0) return { variante: "Q", masa: Number(v.masa), c: Number(v.c), deltaT: Number(v.deltaT) };
      if (idx === 1) return { variante: "masa", Q: Number(v.Q), c: Number(v.c), deltaT: Number(v.deltaT) };
      return { variante: "deltaT", Q: Number(v.Q), masa: Number(v.masa), c: Number(v.c) };
    },
    tol: 0.05,
  },
  {
    subtipoOriginal: "conversion_temperatura",
    generatorSubtipo: "conversion_temperatura",
    dificultad: "basico",
    oracle: (i) => {
      if (i.direccion === "CF") return round2(i.t * (9 / 5) + 32);
      if (i.direccion === "FC") return round2((i.t - 32) * (5 / 9));
      if (i.direccion === "CK") return round2(i.t + 273.15);
      return round2(i.t - 273.15); // KC
    },
    inputsFromGenerator: (e) => {
      // "Convierte {t} {desde} a {hasta}."
      const m = e.match(/Convierte ([\d.]+) (°C|°F|K) a (°C|°F|K)\./);
      if (!m) return null;
      const t = Number(m[1]);
      const desde = m[2];
      const hasta = m[3];
      if (desde === "°C" && hasta === "°F") return { direccion: "CF", t };
      if (desde === "°F" && hasta === "°C") return { direccion: "FC", t };
      if (desde === "°C" && hasta === "K") return { direccion: "CK", t };
      if (desde === "K" && hasta === "°C") return { direccion: "KC", t };
      return null;
    },
    inputsFromTemplate: (v) => {
      const enunIn = Number(v.enun_in);
      const desde = String(v.enun_desde);
      const hasta = String(v.enun_hasta);
      if (desde === "°C" && hasta === "°F") return { direccion: "CF", t: enunIn };
      if (desde === "°F" && hasta === "°C") return { direccion: "FC", t: enunIn };
      if (desde === "°C" && hasta === "K") return { direccion: "CK", t: enunIn };
      return { direccion: "KC", t: enunIn };
    },
    tol: 0.01,
  },
  {
    subtipoOriginal: "cambios_estado",
    generatorSubtipo: "cambios_estado",
    dificultad: "basico",
    oracle: (i) => round2(i.masa * i.L),
    inputsFromGenerator: (e) => {
      // "¿Cuánto calor se necesita para {fundir|vaporizar} {masa} g de agua (L={L} J/g)?"
      const m = e.match(/para (fundir|vaporizar) (\d+) g de agua \(L=(\d+) J\/g\)/);
      if (!m) return null;
      return { masa: Number(m[2]), L: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({ masa: Number(v.masa), L: Number(v.L) }),
    tol: 0.01,
  },
  {
    subtipoOriginal: "dilatacion_termica",
    generatorSubtipo: "dilatacion_termica",
    dificultad: "basico",
    // La calculadora redondea a 4 decimales (default), por lo que
    // respuestas como 0.0026312 → 0.0026. Reproducimos ese redondeo
    // en el oráculo para hacer match exacto dentro de tol=1e-6.
    oracle: (i) => round4(i.L0 * i.alfa * i.deltaT),
    inputsFromGenerator: (e) => {
      // "Una barra de {nombre} de {L0} m se calienta {dT}°C (α={alfa} 1/°C)."
      const m = e.match(/barra de \w+ de ([\d.]+) m se calienta (\d+)°C \(α=([\d.e-]+) 1\/°C\)/);
      if (!m) return null;
      return { L0: Number(m[1]), deltaT: Number(m[2]), alfa: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({ L0: Number(v.L0), deltaT: Number(v.deltaT), alfa: Number(v.alfa) }),
    tol: 1e-6,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-ext-fisica-termo-${i}`);

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function round4(v: number): number {
  return Math.round(v * 10000) / 10000;
}

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_TERMODINAMICA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new TermodinamicaGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b-ext — equivalencia Física/Termodinámica generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Termodinámica", () => {
    const portadas = FISICA_TERMODINAMICA_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
