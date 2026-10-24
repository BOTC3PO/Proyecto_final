/**
 * F5-05 — Re-sorteo de runtime ante fallo de evaluación.
 *
 * Cubre la segunda capa del guard de división por cero:
 *  - una expresión que falla en ALGUNAS seeds genera igual el ejercicio
 *    (re-sorteo con seeds derivadas);
 *  - si falla en TODAS, lanza un error AMABLE (`ResorteoAgotadoError`), nunca la
 *    excepción cruda del evaluador;
 *  - el tope de re-sorteos se respeta.
 */

import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import {
  generateConResorteo,
  ResorteoAgotadoError,
} from "../../src/runtime/resorteo.js";

const compileSrc = (src: string) => compile(parse(src));

describe("runtime / generateConResorteo", () => {
  // Denominador que puede ser 0 según el rango: en algunas seeds la división
  // lanza, en otras no. El re-sorteo debe encontrar una seed válida.
  const DIVISOR_RIESGOSO = `
variables:
  a: random(1, 10)
  b: random(-2, 2)

enunciado: "{a / b}"
respuesta: a / b
`;

  it("genera igual cuando algunas seeds fallan (re-sorteo)", () => {
    const compiled = compileSrc(DIVISOR_RIESGOSO);
    // Buscamos una seed base cuya PRIMERA derivada (`${base}-0`) lance división
    // por cero en el generate crudo: así probamos que es el re-sorteo lo que
    // rescata, no que la primera tirada ya servía.
    let base: string | null = null;
    for (let k = 0; k < 200 && base === null; k += 1) {
      const candidate = `lim-${k}`;
      try {
        generate(compiled, { seed: `${candidate}-0` });
      } catch (e) {
        if (e instanceof EvalError) base = candidate;
      }
    }
    expect(base, "se esperaba al menos una seed que falle").not.toBeNull();
    // El crudo falla en la primera derivada, pero el re-sorteo igual entrega un
    // ejercicio válido (avanza a la siguiente seed derivada).
    const result = generateConResorteo(compiled, { seed: base as string });
    expect(typeof result.respuesta).toBe("number");
    expect(Number.isFinite(result.respuesta as number)).toBe(true);
  });

  it("es determinista: misma seed → mismo ejercicio", () => {
    const compiled = compileSrc(DIVISOR_RIESGOSO);
    const r1 = generateConResorteo(compiled, { seed: "det-1" });
    const r2 = generateConResorteo(compiled, { seed: "det-1" });
    expect(r1.respuesta).toEqual(r2.respuesta);
    expect(r1.enunciado).toEqual(r2.enunciado);
  });

  it("si falla en TODAS las seeds, lanza error amable (no excepción cruda)", () => {
    // Denominador literal 0: lanza división por cero en cualquier seed.
    const compiled = compileSrc(`
variables:
  a: random(1, 10)

enunciado: "{a}"
respuesta: a / 0
`);
    expect(() => generateConResorteo(compiled, { seed: "x" })).toThrow(
      ResorteoAgotadoError,
    );
    try {
      generateConResorteo(compiled, { seed: "x" });
    } catch (e) {
      expect(e).toBeInstanceOf(ResorteoAgotadoError);
      // El mensaje es apto para el alumno (no filtra "división por cero").
      expect((e as ResorteoAgotadoError).message).not.toMatch(/cero/i);
      // Pero conserva la causa cruda para diagnóstico del docente.
      expect((e as ResorteoAgotadoError).ultimaCausa).toBeInstanceOf(EvalError);
    }
  });

  it("respeta el tope de re-sorteos", () => {
    const compiled = compileSrc(`
enunciado: "x"
respuesta: 1 / 0
`);
    try {
      generateConResorteo(compiled, { seed: "x", maxResorteos: 3 });
      throw new Error("debió lanzar");
    } catch (e) {
      expect(e).toBeInstanceOf(ResorteoAgotadoError);
      expect((e as ResorteoAgotadoError).intentos).toBe(3);
    }
  });

  it("una plantilla sana genera al primer intento", () => {
    const compiled = compileSrc(`
variables:
  v: random(1, 10)

enunciado: "{v}"
respuesta: v
`);
    const result = generateConResorteo(compiled, { seed: "ok" });
    expect(typeof result.respuesta).toBe("number");
  });
});
