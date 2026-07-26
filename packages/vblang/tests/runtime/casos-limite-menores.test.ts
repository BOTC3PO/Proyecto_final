/**
 * PLAN casos-limite §8/§9/§10 — los "menores" del runtime.
 *
 * §8 era peor de lo que decía el plan: `random` con bordes decimales no
 * "truncaba", devolvía valores POR ENCIMA del máximo declarado
 * (`random(1.2, 4.8)` daba 5.2).
 * §10 también: además de la notación exponencial, `toFixed(4)` aplastaba a `"0"`
 * cualquier valor menor a 0.00005, así que el número desaparecía del enunciado.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { createPrng } from "../../src/runtime/prng.js";
import { formatoDefault } from "../../src/evaluator/interpolation.js";

const SEEDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function valores(dsl: string): unknown[] {
  return SEEDS.map((seed) => generate(compile(parse(dsl)), { seed }).variables?.a);
}

function enunciado(dsl: string, seed = 1): string {
  return generate(compile(parse(dsl)), { seed }).enunciado;
}

describe("§8 · random con bordes decimales", () => {
  it("nunca sale del rango declarado", () => {
    const vals = valores(
      'variables:\n  a: random(1.2, 4.8)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n',
    ) as number[];
    for (const v of vals) {
      expect(v).toBeGreaterThanOrEqual(1.2);
      expect(v).toBeLessThanOrEqual(4.8);
    }
  });

  it("devuelve enteros (es el subtipo entero), redondeando el rango hacia adentro", () => {
    const vals = valores(
      'variables:\n  a: random(1.2, 4.8)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n',
    ) as number[];
    for (const v of vals) expect(Number.isInteger(v)).toBe(true);
    // Enteros entre 1.2 y 4.8 = {2, 3, 4}.
    expect(new Set(vals)).toEqual(new Set([2, 3, 4]));
  });

  it("un rango decimal que no contiene ningún entero lo dice", () => {
    expect(() => createPrng(1).int(1.2, 1.8)).toThrow(
      /no hay ningún entero entre 1\.2 y 1\.8.*random_float/,
    );
  });

  it("con bordes enteros no cambia nada", () => {
    const vals = valores(
      'variables:\n  a: random(1, 5)\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n',
    ) as number[];
    for (const v of vals) {
      expect(Number.isInteger(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(5);
    }
  });
});

describe("§9 · negativos en el enunciado", () => {
  const conB = (texto: string) =>
    enunciado(
      `variables:\n  a: 4\n  b: -3\nenunciado: "${texto}"\nrespuesta: a + b\ntipo: input\n`,
    );

  it("parentiza el negativo pegado a un operador", () => {
    expect(conB("Cuánto es {a} + {b}?")).toBe("Cuánto es 4 + (-3)?");
    expect(conB("{a} - {b}")).toBe("4 - (-3)");
    expect(conB("{a} * {b}")).toBe("4 * (-3)");
    expect(conB("{a} / {b}")).toBe("4 / (-3)");
  });

  it("NO parentiza donde el paréntesis sería peor", () => {
    expect(conB("La temperatura es {b} grados")).toBe("La temperatura es -3 grados");
    expect(conB("{b} es el resultado")).toBe("-3 es el resultado");
    expect(conB("x = {b}")).toBe("x = -3");
    // Guion interno de palabra, no operador.
    expect(conB("anti-{b}")).toBe("anti--3");
  });

  it("no toca los positivos", () => {
    expect(conB("{a} + {a}")).toBe("4 + 4");
  });

  it("no cambia el cálculo, sólo la presentación", () => {
    const g = generate(
      compile(
        parse(
          'variables:\n  a: 4\n  b: -3\nenunciado: "{a} + {b}?"\nrespuesta: a + b\ntipo: input\n',
        ),
      ),
      { seed: 1 },
    );
    expect(g.enunciado).toBe("4 + (-3)?");
    expect(g.respuesta).toBe(1);
  });
});

describe("§10 · formato de números extremos", () => {
  it("un entero grande no sale en notación exponencial", () => {
    expect(formatoDefault(1e21)).toBe("1000000000000000000000");
    expect(formatoDefault(1e20)).toBe("100000000000000000000");
    expect(enunciado('variables:\n  a: 1e21\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n')).toBe(
      "1000000000000000000000?",
    );
  });

  it("un decimal chico no se aplasta a 0", () => {
    // Antes: "0" — el número desaparecía del enunciado.
    expect(formatoDefault(1e-7)).toBe("1e-7");
    expect(formatoDefault(0.0000123)).toBe("0.0000123");
    expect(enunciado('variables:\n  a: 1e-7\nenunciado: "{a}?"\nrespuesta: a\ntipo: input\n')).toBe(
      "1e-7?",
    );
  });

  it("el cero sigue siendo 0 y el redondeo normal no cambia", () => {
    expect(formatoDefault(0)).toBe("0");
    expect(formatoDefault(0.5)).toBe("0.5");
    expect(formatoDefault(1 / 3)).toBe("0.3333");
    expect(formatoDefault(0.1 + 0.2)).toBe("0.3");
    expect(formatoDefault(-7)).toBe("-7");
    expect(formatoDefault(2)).toBe("2");
  });
});
