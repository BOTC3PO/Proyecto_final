/**
 * WO-7b — Equivalencia generador↔plantilla para Física/Cinemática.
 *
 * Espeja el patrón de `porting-equivalencia.spec.ts` (Aritmética): cada
 * plantilla de `fisica-cinematica-oficiales.ts` se compara con el generador
 * nativo correspondiente (`CinematicaGenerator`) vía oráculo compartido.
 *
 * Las plantillas cubren la rama basico (con algunas extensiones a
 * intermedio/avanzado vía `uno_de`). El harness extrae los inputs del
 * enunciado del generador; si la variante sorteada no matchea, salta el
 * seed. Para mantener el "no vacío", exige ≥ 5 coincidencias en la mitad
 * del generador (excepto `relacion_distancia_tiempo` que cubre las 3
 * variantes y suele tener > 30 matches).
 */
import { describe, expect, it } from "vitest";
import { compile, generate, parse } from "@vb/vblang";
import { FISICA_CINEMATICA_OFICIALES } from "@vb/vblang";
import type { CompiledPlantilla } from "@vb/vblang";
import { CinematicaGenerator } from "../fisica/Cinematica";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";
import { crearCalculadoraFisica } from "../fisica/calculadora";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };
// Algunas subtipos de Cinematica delegan el cálculo a `crearCalculadoraFisica`.
// Usamos la real para que el extractor y el template operen sobre el mismo
// cómputo que el generador (los tests verifican equivalencia de FÓRMULAS, no
// de PRNGs distintos).
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
    subtipoOriginal: "MRU",
    generatorSubtipo: "MRU",
    dificultad: "basico",
    oracle: (i) => round2(i.v * i.t),
    inputsFromGenerator: (e) => {
      const m = e.match(/a (\d+) m\/s durante (\d+) s\./);
      return m ? { v: Number(m[1]), t: Number(m[2]) } : null;
    },
    inputsFromTemplate: (v) => ({ v: Number(v.v), t: Number(v.t) }),
    tol: 0.5,
  },
  {
    subtipoOriginal: "MRUV",
    generatorSubtipo: "MRUV",
    dificultad: "basico",
    oracle: (i) => i.v0 + i.a * i.t,
    inputsFromGenerator: (e) => {
      const m = e.match(/v₀=(\d+) m\/s y acelera a=(\d+) m\/s².* tras (\d+) s/);
      return m ? { v0: Number(m[1]), a: Number(m[2]), t: Number(m[3]) } : null;
    },
    inputsFromTemplate: (v) => ({
      v0: Number(v.v0),
      a: Number(v.a),
      t: Number(v.t),
    }),
    tol: 0.5,
  },
  {
    subtipoOriginal: "caida_libre",
    generatorSubtipo: "caida_libre",
    dificultad: "basico",
    oracle: (i) => round2(9.8 * i.t),
    inputsFromGenerator: (e) => {
      const m = e.match(/durante (\d+) s \(g=9\.8 m\/s²\)/);
      return m ? { t: Number(m[1]) } : null;
    },
    inputsFromTemplate: (v) => ({ t: Number(v.t) }),
    tol: 0.5,
  },
  {
    subtipoOriginal: "relacion_distancia_tiempo",
    generatorSubtipo: "relacion_distancia_tiempo",
    dificultad: "basico",
    // Tres variantes: distancia = v·t, velocidad = d/t, tiempo = d/v.
    oracle: (i) => {
      if (i.variante === "distancia") return round2(i.v * i.t);
      if (i.variante === "velocidad") return round2(i.d / i.t);
      return round2(i.d / i.v);
    },
    inputsFromGenerator: (e) => {
      let m = e.match(/a (\d+) m\/s durante (\d+) s\. ¿Qué distancia/);
      if (m) return { variante: "distancia", v: Number(m[1]), t: Number(m[2]) };
      m = e.match(/recorre (\d+) m en (\d+) s\. ¿Cuál es su velocidad/);
      if (m) return { variante: "velocidad", d: Number(m[1]), t: Number(m[2]) };
      m = e.match(/a (\d+) m\/s recorre (\d+) m\. ¿Cuánto/);
      if (m) return { variante: "tiempo", v: Number(m[1]), d: Number(m[2]) };
      return null;
    },
    inputsFromTemplate: (v) => {
      const enun = String(v.enun);
      const mDist = enun.match(/a (\d+) m\/s durante (\d+) s\. ¿Qué distancia/);
      if (mDist) {
        return { variante: "distancia", v: Number(v.v), t: Number(v.t) };
      }
      const mVel = enun.match(/recorre (\d+) m en (\d+) s/);
      if (mVel) {
        return { variante: "velocidad", d: Number(v.d), t: Number(v.t) };
      }
      return { variante: "tiempo", v: Number(v.v), d: Number(v.d) };
    },
    tol: 0.5,
  },
  {
    subtipoOriginal: "conversion_unidades",
    generatorSubtipo: "conversion_unidades",
    dificultad: "basico",
    oracle: (i) => round2(i.v * i.factor),
    inputsFromGenerator: (e) => {
      const m = e.match(/Convierte (\d+) (m\/s|km\/h) a (m\/s|km\/h)\./);
      if (!m) return null;
      const factor = m[2] === "m/s" && m[3] === "km/h"
        ? 3.6
        : m[2] === "km/h" && m[3] === "m/s"
          ? 1 / 3.6
          : null;
      if (factor === null) return null;
      return { v: Number(m[1]), factor };
    },
    inputsFromTemplate: (v) => {
      const conv = v.conv as { factor: number };
      return { v: Number(v.v), factor: Number(conv.factor) };
    },
    tol: 0.05,
  },
];

const SEEDS = Array.from({ length: 120 }, (_v, i) => `wo7b-fisica-seed-${i}`);

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  const tpl = FISICA_CINEMATICA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(subtipo: string, dificultad: Dificultad, seed: string): {
  enunciado: string;
  answer: number;
} {
  const gen = new CinematicaGenerator(new DeterministicPrng(seed), FISICA_CALC);
  const ej = gen.generarEjercicio(subtipo, dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${subtipo}, recibió ${ej.tipo}`);
  }
  // El formato es "{ans} unidad" — extraemos el número.
  const raw = String(ej.opciones[ej.indiceCorrecto]);
  const m = raw.match(/-?\d+(\.\d+)?/);
  if (!m) throw new Error(`no se pudo extraer número de: ${raw}`);
  return { enunciado: ej.enunciado, answer: Number(m[0]) };
}

describe("WO-7b — equivalencia Física/Cinemática generador↔plantilla", () => {
  it("hay un caso de equivalencia por cada plantilla oficial de Cinematica", () => {
    const portadas = FISICA_CINEMATICA_OFICIALES.map((p) => p.subtipoOriginal).sort();
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
