import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

describe("generate / identificar_palabras — caso feliz", () => {
  const src = `variables:
  oracion: "El perro corre, salta y ladra fuerte"
  verbos: ["corre", "salta", "ladra"]

enunciado: "Marcá los verbos."
texto_analizar: oracion
respuestas_validas:
  - verbos
tipo: identificar_palabras
`;
  const compiled = compile(parse(src));

  it("tipo, textoAnalizar y respuestasValidas correctos", () => {
    const r = generate(compiled, { seed: "ip-1" });
    expect(r.tipo).toBe("identificar_palabras");
    expect(r.textoAnalizar).toBe("El perro corre, salta y ladra fuerte");
    expect(r.respuestasValidas).toEqual(["corre", "salta", "ladra"]);
  });
});

describe("generate / identificar_palabras — palabra inválida", () => {
  const src = `enunciado: "x"
texto_analizar: "El perro corre"
respuestas_validas:
  - "xyz"
tipo: identificar_palabras
`;

  it("EvalError porque 'xyz' no está en el texto", () => {
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "x" })).toThrow(/no aparece en/);
  });
});

describe("generate / identificar_palabras — palabras inline OK", () => {
  const src = `enunciado: "x"
texto_analizar: "uno dos tres cuatro"
respuestas_validas:
  - "dos"
  - "cuatro"
tipo: identificar_palabras
`;

  it("usa los strings literales como respuestas válidas", () => {
    const compiled = compile(parse(src));
    const r = generate(compiled, { seed: "ip-2" });
    expect(r.respuestasValidas).toEqual(["dos", "cuatro"]);
  });
});
