import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

describe("generate / ordenar — caso feliz", () => {
  const src = `variables:
  procesos: ["a", "b", "c", "d", "e"]

enunciado: "Ordená las etapas."
opciones_explicitas: mezclar(procesos)
respuesta_orden: procesos
tipo: ordenar
`;
  const compiled = compile(parse(src));

  it("tipo === 'ordenar'", () => {
    const r = generate(compiled, { seed: "ord-1" });
    expect(r.tipo).toBe("ordenar");
  });

  it("items tiene los 5 elementos esperados", () => {
    const r = generate(compiled, { seed: "ord-1" });
    expect(r.items).toBeDefined();
    expect(r.items!.length).toBe(5);
    expect([...r.items!].sort()).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("ordenCorrecto es la secuencia original", () => {
    const r = generate(compiled, { seed: "ord-1" });
    expect(r.ordenCorrecto).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("determinismo: mismo seed produce mismo items", () => {
    const r1 = generate(compiled, { seed: "ord-det" });
    const r2 = generate(compiled, { seed: "ord-det" });
    expect(r1.items).toEqual(r2.items);
  });
});

describe("generate / ordenar — sets diferentes lanza EvalError", () => {
  const src = `variables:
  a: ["x", "y", "z"]
  b: ["x", "y", "w"]

enunciado: "x"
opciones_explicitas: a
respuesta_orden: b
tipo: ordenar
`;

  it("EvalError porque los conjuntos difieren", () => {
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "diff" })).toThrow(EvalError);
  });
});

describe("generate / ordenar — opciones_explicitas no-array lanza EvalError", () => {
  const src = `enunciado: "x"
opciones_explicitas: 42
respuesta_orden: [1, 2, 3]
tipo: ordenar
`;

  it("EvalError porque opciones_explicitas no es array de strings", () => {
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "x" })).toThrow(EvalError);
  });
});
