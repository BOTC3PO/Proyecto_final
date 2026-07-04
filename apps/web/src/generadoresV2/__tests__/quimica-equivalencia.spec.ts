/**
 * WO-7c — Contrato de equivalencia generador↔plantilla para Química
 * (Estequiometría + Termoquímica).
 *
 * Espejo de `algebra-equivalencia.spec.ts` (WO-11). Patrón de oráculo
 * compartido (ver `docs/vblang/porting-generadores.md`):
 *   - `oracle(inputs) → expected`: la fórmula matemática del subtipo.
 *   - `inputsFromGenerator(enunciado)`: extrae los inputs del enunciado.
 *   - `inputsFromTemplate(result.variables)`: lee los inputs sorteados
 *     por la plantilla.
 *
 * Las dos mitades deben dar el mismo resultado sobre sus propios
 * inputs sorteados.
 */
import { describe, expect, it } from "vitest";
import {
  compile,
  generate,
  parse,
  type CompiledPlantilla,
} from "@vb/vblang";
import { QUIMICA_ESTEQUEOMETRIA_OFICIALES } from "@vb/vblang";
import { EstequiometriaGenerator } from "../quimica/Estequiometria";
import { TermoquimicaGenerator } from "../quimica/Termoquimica";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

type Inputs = Record<string, any>; // C3 (PLAN-CORRECCIONES): valores mixtos number/string (variante/direccion) — ver nota de tipos arriba.

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  generator: EstequiometriaGenerator | TermoquimicaGenerator;
  dificultad: Dificultad;
  oracle: (inp: Inputs) => number;
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  tol: number;
  /** Sólo subtipos con respuesta string (fracciones) la usan. */
  answerType?: "string";
}

const CASES: PortCase[] = [
  // ── Estequiometria ──────────────────────────────────────────────────
  {
    subtipoOriginal: "calculo_moles",
    generatorSubtipo: "calculo_moles",
    generator: new EstequiometriaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => i.masa / i.M,
    inputsFromGenerator: (e) => {
      const m = e.match(/¿Cuántos moles hay en (\d+(?:\.\d+)?) g de (.+?) \((\w+(?:₂|₃)?), M = ([\d.]+) g\/mol\)\?/);
      if (!m) return null;
      return { masa: Number(m[1]), M: Number(m[4]) };
    },
    inputsFromTemplate: (v) => ({
      masa: Number(v.masa),
      M: Number(v.M),
    }),
    tol: 0.005,
  },
  {
    subtipoOriginal: "calculo_masa",
    generatorSubtipo: "calculo_masa",
    generator: new EstequiometriaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => i.moles * i.M,
    inputsFromGenerator: (e) => {
      const m = e.match(/¿Cuántos gramos hay en (\d+(?:\.\d+)?) mol de (.+?) \((\w+(?:₂|₃)?), M = ([\d.]+) g\/mol\)\?/);
      if (!m) return null;
      return { moles: Number(m[1]), M: Number(m[4]) };
    },
    inputsFromTemplate: (v) => ({
      moles: Number(v.moles),
      M: Number(v.M),
    }),
    tol: 0.05,
  },
  {
    subtipoOriginal: "relaciones_molares",
    generatorSubtipo: "relaciones_molares",
    generator: new EstequiometriaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => i.nReactivo * i.coefP / i.coefR,
    inputsFromGenerator: (e) => {
      // Formato: "Dada la reacción: N₂ + 3H₂ → 2NH₃\n¿Cuántos moles de NH₃ ..."
      // Extraer el reactivo y producto del final de la pregunta.
      // El coeficiente de la izquierda: "{nReactivo} mol de {reactivo}"
      const m = e.match(/a partir de (\d+(?:\.\d+)?) mol de (\w+)\?/);
      if (!m) return null;
      // El texto anterior tiene la reacción. Buscamos los coeficientes
      // en el orden: reactivo a la izquierda, producto a la derecha.
      // No es trivial parsear la reacción completa — usamos el reactivo
      // del match y un lookup de coefs.
      const reactivo = m[2];
      const coefsMap: Record<string, { coefR: number; coefP: number }> = {
        "N₂": { coefR: 1, coefP: 2 },
        "H₂": { coefR: 3, coefP: 2 },
        "Na": { coefR: 2, coefP: 2 },
        "Fe": { coefR: 4, coefP: 2 },
      };
      const cfg = coefsMap[reactivo];
      if (!cfg) return null;
      return { nReactivo: Number(m[1]), ...cfg };
    },
    inputsFromTemplate: (v) => ({
      nReactivo: Number(v.nReactivo),
      coefR: Number((v.r as { coefR: number }).coefR),
      coefP: Number((v.r as { coefP: number }).coefP),
    }),
    tol: 0.01,
  },
  {
    subtipoOriginal: "molaridad",
    generatorSubtipo: "molaridad",
    generator: new EstequiometriaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => (i.masa / i.M) / i.vol,
    inputsFromGenerator: (e) => {
      // "¿Cuál es la molaridad de una solución que contiene {masa} g de {s.nombre} (M = {M} g/mol) en {vol} L de solución?"
      const m = e.match(/contiene (\d+(?:\.\d+)?) g de \w+ \(M = ([\d.]+) g\/mol\) en (\d+(?:\.\d+)?) L/);
      if (!m) return null;
      return { masa: Number(m[1]), M: Number(m[2]), vol: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({
      masa: Number(v.masa),
      M: Number((v.s as { M: number }).M),
      vol: Number(v.vol),
    }),
    tol: 0.005,
  },
  {
    subtipoOriginal: "diluciones",
    generatorSubtipo: "diluciones",
    generator: new EstequiometriaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => (i.C1 * i.V1) / i.V2,
    inputsFromGenerator: (e) => {
      // "Se toman {V1} mL de una solución {C1} mol/L y se diluye hasta {V2} mL."
      const m = e.match(/Se toman (\d+) mL de una solución ([\d.]+) mol\/L y se diluye hasta (\d+) mL/);
      if (!m) return null;
      return { C1: Number(m[2]), V1: Number(m[1]), V2: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({
      C1: Number(v.C1),
      V1: Number(v.V1),
      V2: Number(v.V2),
    }),
    tol: 0.01,
  },

  // ── Termoquimica ────────────────────────────────────────────────────
  {
    subtipoOriginal: "calor",
    generatorSubtipo: "calor",
    generator: new TermoquimicaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => i.masa * i.c * i.deltaT,
    inputsFromGenerator: (e) => {
      // "¿Cuánto calor se necesita para calentar {masa} g de {s.nombre} (c = {c} J/g·°C) en {deltaT} °C?"
      const m = e.match(/calentar (\d+) g de \w+ \(c = ([\d.]+) J\/g·°C\) en (\d+) °C/);
      if (!m) return null;
      return { masa: Number(m[1]), c: Number(m[2]), deltaT: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({
      masa: Number(v.masa),
      c: Number((v.s as { c: number }).c),
      deltaT: Number(v.deltaT),
    }),
    tol: 1,
  },
  {
    subtipoOriginal: "cambio_entalpia",
    generatorSubtipo: "cambio_entalpia",
    generator: new TermoquimicaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => (i.masa / i.M) * i.dH,
    inputsFromGenerator: (e) => {
      // "La combustión de {c.nombre} ({c.formula}) tiene ΔH° = {c.dH} kJ/mol. ¿Cuánto calor se libera al quemar {masa} g? (M = {c.M} g/mol)"
      const m = e.match(/tiene ΔH° = (-?[\d.]+) kJ\/mol.*?al quemar ([\d.]+) g\? \(M = ([\d.]+) g\/mol\)/);
      if (!m) return null;
      return { masa: Number(m[2]), M: Number(m[3]), dH: Number(m[1]) };
    },
    inputsFromTemplate: (v) => ({
      masa: Number(v.masa),
      M: Number((v.c as { M: number }).M),
      dH: Number((v.c as { dH: number }).dH),
    }),
    tol: 0.5,
  },
  {
    subtipoOriginal: "energia_reaccion",
    generatorSubtipo: "energia_reaccion",
    generator: new TermoquimicaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => i.dH * i.n,
    inputsFromGenerator: (e) => {
      // "La {r.desc} libera {r.dH} kJ/mol. ¿Cuánta energía se libera en {n} mol de reacción?"
      const m = e.match(/libera (-?[\d.]+) kJ\/mol.*?libera en ([\d.]+) mol de/);
      if (!m) return null;
      return { dH: Number(m[1]), n: Number(m[2]) };
    },
    inputsFromTemplate: (v) => ({
      dH: Number((v.r as { dH: number }).dH),
      n: Number(v.n),
    }),
    tol: 0.5,
  },
  {
    subtipoOriginal: "poder_calorifico",
    generatorSubtipo: "poder_calorifico",
    generator: new TermoquimicaGenerator(new DeterministicPrng("seed")),
    dificultad: "basico",
    oracle: (i) => i.masa * i.pci,
    inputsFromGenerator: (e) => {
      // "El poder calorífico del {c.nombre} es {c.pci} MJ/kg. ¿Cuánta energía se libera al quemar {masa} kg?"
      const m = e.match(/es ([\d.]+) MJ\/kg.*?al quemar ([\d.]+) kg/);
      if (!m) return null;
      return { pci: Number(m[1]), masa: Number(m[2]) };
    },
    inputsFromTemplate: (v) => ({
      pci: Number((v.c as { pci: number }).pci),
      masa: Number(v.masa),
    }),
    tol: 0.05,
  },
];

const SEEDS = Array.from({ length: 50 }, (_v, i) => `wo7c-quimica-${i}`);

function compiledFor(subtipoOriginal: string): CompiledPlantilla {
  // Hay UNA plantilla por subtipo (basico) en Química.
  const tpl = QUIMICA_ESTEQUEOMETRIA_OFICIALES.find(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (!tpl) throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  return compile(parse(tpl.codigoDsl));
}

function generatorAnswer(
  c: PortCase,
  seed: string,
): { enunciado: string; answer: string } {
  const gen = new (c.generator.constructor as new (prng: DeterministicPrng) => typeof c.generator)(
    new DeterministicPrng(seed),
  );
  const ej = gen.generarEjercicio(c.generatorSubtipo, c.dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${c.generatorSubtipo}, recibió ${ej.tipo}`);
  }
  return {
    enunciado: ej.enunciado,
    answer: String(ej.opciones[ej.indiceCorrecto]),
  };
}

describe("WO-7c — equivalencia generador↔plantilla (Química)", () => {
  it("las 9 plantillas oficiales existen con subtipoOriginal correcto", () => {
    const subtipos = QUIMICA_ESTEQUEOMETRIA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "calculo_masa",
      "calculo_moles",
      "calor",
      "cambio_entalpia",
      "diluciones",
      "energia_reaccion",
      "molaridad",
      "poder_calorifico",
      "relaciones_molares",
    ]);
  });

  for (const c of CASES) {
    describe(c.subtipoOriginal, () => {
      it("GENERADOR real ≡ oráculo (sobre sus inputs sorteados)", () => {
        let matched = 0;
        for (const seed of SEEDS) {
          const { enunciado, answer } = generatorAnswer(c, seed);
          const inp = c.inputsFromGenerator(enunciado);
          if (inp === null) continue;
          matched += 1;
          const expected = c.oracle(inp);
          // El generator produce un string con unidades (ej "5.5 mol/L").
          // Para "calor", el generador produce "X J" sin unidad; el
          // número puro es el answer sin sufijo.
          const numAnswer = Number(answer.replace(/[^\d.\-eE+]/g, ""));
          expect(
            Math.abs(numAnswer - expected) <= c.tol,
            `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected=${expected}`,
          ).toBe(true);
        }
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
          const expected = c.oracle(inp);
          const respuesta = result.respuesta as number;
          expect(
            Math.abs(respuesta - expected) <= c.tol,
            `seed ${seed}: respuesta=${respuesta} expected=${expected} inputs=${JSON.stringify(inp)}`,
          ).toBe(true);
        }
      });
    });
  }
});
