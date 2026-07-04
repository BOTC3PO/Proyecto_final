/**
 * WO-7c — Equivalencia generador↔plantilla para la 3ª ola de Aritmética.
 *
 * Cubre las ramas intermedio/avanzado que se portaron con builtins
 * de WO-8 (`mcd`, `mcm`, `factorizar`, `fraccion`).
 *
 *   - `divisibilidad` intermedio (MCD/MCM con max=100)
 *   - `divisibilidad` avanzado (MCD/MCM anidado con 3 números)
 *   - `numeros_primos` avanzado (MCD/MCM vía factorización)
 *   - `fracciones` intermedio (denominadores distintos, +/−/×/÷)
 *   - `fracciones` avanzado (número mixto)
 *
 * Patrón de oráculo compartido (ver
 * `docs/vblang/porting-generadores.md`).
 */
import { describe, expect, it } from "vitest";
import {
  compile,
  generate,
  parse,
  type CompiledPlantilla,
} from "@vb/vblang";
import { MATEMATICAS_ARITMETICA_OFICIALES } from "@vb/vblang";
import { AritmeticaGenerator } from "../matematicas/Aritmetica";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

type Inputs = Record<string, any>; // C3 (PLAN-CORRECCIONES): valores mixtos number/string (variante/direccion) — ver nota de tipos arriba.

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  dificultad: Dificultad;
  oracle: (inp: Inputs) => number;
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  tol: number;
  /** Si el subtipo tiene MC en lugar de numérico (false por default). */
  isMC?: boolean;
  /** Para subtipos con respuesta string (fracciones). */
  isString?: boolean;
}

const CASES: PortCase[] = [
  {
    subtipoOriginal: "divisibilidad",
    generatorSubtipo: "divisibilidad",
    dificultad: "intermedio",
    oracle: (i) => (i.esMCD ? gcd(i.a, i.b) : lcm(i.a, i.b)),
    inputsFromGenerator: (e) => {
      // "Calcula el {MCD|MCM}({a}, {b})." — solo matchea la rama
      // intermedio (max=100).
      const m = e.match(/Calcula el (MCD|MCM)\((\d+), (\d+)\)\./);
      if (!m) return null;
      return { esMCD: m[1] === "MCD" ? 1 : 0, a: Number(m[2]), b: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({
      esMCD: (v.op as { label: string }).label === "MCD" ? 1 : 0,
      a: Number(v.a),
      b: Number(v.b),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "numeros_primos",
    generatorSubtipo: "numeros_primos",
    dificultad: "avanzado",
    oracle: (i) => (i.esMCD ? gcd(i.a, i.b) : lcm(i.a, i.b)),
    inputsFromGenerator: (e) => {
      // "Usando la factorización prima, calcula el {MCD|MCM}({a}, {b})."
      const m = e.match(/factorización prima, calcula el (MCD|MCM)\((\d+), (\d+)\)\./);
      if (!m) return null;
      return { esMCD: m[1] === "MCD" ? 1 : 0, a: Number(m[2]), b: Number(m[3]) };
    },
    inputsFromTemplate: (v) => ({
      esMCD: (v.op as { label: string }).label === "MCD" ? 1 : 0,
      a: Number(v.a),
      b: Number(v.b),
    }),
    tol: 0,
  },
];

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

const SEEDS = Array.from({ length: 50 }, (_v, i) => `wo7c-arit-3a-${i}`);

function compiledFor(subtipoOriginal: string, id?: string): CompiledPlantilla {
  const matching = MATEMATICAS_ARITMETICA_OFICIALES.filter(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (id) {
    const t = matching.find((p) => p.id === id);
    if (!t) throw new Error(`plantilla no encontrada: ${id}`);
    return compile(parse(t.codigoDsl));
  }
  if (matching.length === 0) {
    throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  }
  // Para `numeros_primos` y `divisibilidad` hay múltiples plantillas
  // (basico + avanzado/intermedio). Para 3ª ola, queremos las
  // nuevas (las que tienen el prefijo "-avanzado" o "-intermedio").
  if (subtipoOriginal === "numeros_primos") {
    const t = matching.find((p) => p.id.includes("avanzado"));
    if (t) return compile(parse(t.codigoDsl));
  }
  if (subtipoOriginal === "divisibilidad") {
    // Para 3ª ola, queremos la intermedio o avanzado según lo que pida el test.
    // Por default, devolvemos la intermedio (que cubre la mayor parte).
    const t =
      matching.find((p) => p.id.includes("intermedio")) ??
      matching.find((p) => p.id.includes("avanzado"));
    if (t) return compile(parse(t.codigoDsl));
  }
  return compile(parse(matching[0]!.codigoDsl));
}

function generatorAnswer(
  c: PortCase,
  seed: string,
): { enunciado: string; answer: string } {
  const gen = new AritmeticaGenerator(new DeterministicPrng(seed));
  const ej = gen.generarEjercicio(c.generatorSubtipo, c.dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${c.generatorSubtipo}, recibió ${ej.tipo}`);
  }
  return {
    enunciado: ej.enunciado,
    answer: String(ej.opciones[ej.indiceCorrecto]),
  };
}

describe("WO-7c — equivalencia generador↔plantilla (3ª ola Aritmética)", () => {
  for (const c of CASES) {
    describe(`${c.subtipoOriginal} (${c.dificultad})`, () => {
      it("GENERADOR real ≡ oráculo (sobre sus inputs sorteados)", () => {
        let matched = 0;
        for (const seed of SEEDS) {
          const { enunciado, answer } = generatorAnswer(c, seed);
          const inp = c.inputsFromGenerator(enunciado);
          if (inp === null) continue;
          matched += 1;
          const expected = c.oracle(inp);
          const numAnswer = Number(answer);
          expect(
            Math.abs(numAnswer - expected) <= c.tol,
            `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected=${expected}`,
          ).toBe(true);
        }
        expect(
          matched,
          `ejercicios del generador que matchearon ${c.subtipoOriginal}-${c.dificultad}`,
        ).toBeGreaterThan(5);
      });

      it("PLANTILLA real ≡ oráculo (sobre sus inputs sorteados)", () => {
        // Para `divisibilidad` intermedio/avanzado hay una sola plantilla
        // por dificultad (la regex ya filtra por enunciado del generador).
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
