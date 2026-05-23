import { describe, expect, it } from "vitest";
import { RestriccionesNoSatisfechasError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

function gen(src: string, seed: string, maxRetries?: number) {
  return generate(compile(parse(src)), { seed, maxRetries });
}

describe("runtime / restricciones", () => {
  it("restricción siempre satisfecha", () => {
    const src = `
variables:
  v: random(1, 10)

restricciones:
  - v > 0

enunciado: "{v}"
respuesta: v
`;
    const result = gen(src, "easy");
    expect(typeof result.respuesta).toBe("number");
    expect((result.respuesta as number) > 0).toBe(true);
  });

  it("restricción imposible: lanza RestriccionesNoSatisfechasError", () => {
    const src = `
variables:
  v: random(-10, -1)

restricciones:
  - v > 0

enunciado: "{v}"
respuesta: v
`;
    expect(() => gen(src, "impossible", 10)).toThrow(
      RestriccionesNoSatisfechasError,
    );
  });

  it("restricción difícil eventualmente se cumple", () => {
    const src = `
variables:
  v: random(1, 100)

restricciones:
  - v > 50

enunciado: "{v}"
respuesta: v
`;
    const result = gen(src, "needs-retries", 200);
    expect((result.respuesta as number) > 50).toBe(true);
    expect(result.intentos).toBeGreaterThan(0);
  });

  it("maxRetries se respeta", () => {
    const src = `
variables:
  v: random(-10, -1)

restricciones:
  - v > 0

enunciado: "{v}"
respuesta: v
`;
    try {
      gen(src, "x", 5);
    } catch (e) {
      if (e instanceof RestriccionesNoSatisfechasError) {
        expect(e.intentos).toBe(5);
        return;
      }
      throw e;
    }
    expect.fail("debió tirar RestriccionesNoSatisfechasError");
  });

  it("intentos se reporta correctamente cuando no hay restricciones", () => {
    const src = `
variables:
  v: random(1, 10)

enunciado: "{v}"
respuesta: v
`;
    const result = gen(src, "no-restr");
    expect(result.intentos).toBe(1);
  });
});
