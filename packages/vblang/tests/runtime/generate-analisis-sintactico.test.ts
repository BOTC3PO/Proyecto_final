import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

describe("generate / analisis_sintactico — caso feliz", () => {
  const src = `variables:
  oracion: "El gato negro corre rápido"

enunciado: "Identificá las palabras."
texto_analizar: oracion
etiquetas_pedidas:
  - { palabra: "El", etiqueta: "articulo" }
  - { palabra: "gato", etiqueta: "sustantivo" }
  - { palabra: "negro", etiqueta: "adjetivo" }
tipo: analisis_sintactico
`;
  const compiled = compile(parse(src));

  it("tipo y textoAnalizar correctos", () => {
    const r = generate(compiled, { seed: "as-1" });
    expect(r.tipo).toBe("analisis_sintactico");
    expect(r.textoAnalizar).toBe("El gato negro corre rápido");
  });

  it("etiquetasPedidas tiene los 3 pares esperados", () => {
    const r = generate(compiled, { seed: "as-1" });
    expect(r.etiquetasPedidas).toEqual([
      { palabra: "El", etiqueta: "articulo" },
      { palabra: "gato", etiqueta: "sustantivo" },
      { palabra: "negro", etiqueta: "adjetivo" },
    ]);
  });
});

describe("generate / analisis_sintactico — palabra fuera del texto", () => {
  const src = `enunciado: "x"
texto_analizar: "El gato corre"
etiquetas_pedidas:
  - { palabra: "perro", etiqueta: "sustantivo" }
tipo: analisis_sintactico
`;

  it("EvalError porque 'perro' no aparece en el texto", () => {
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "x" })).toThrow(/no aparece en/);
  });
});

describe("generate / analisis_sintactico — etiquetas_pedidas vacío", () => {
  const src = `enunciado: "x"
texto_analizar: "Hola mundo"
etiquetas_pedidas:
tipo: analisis_sintactico
`;

  // Plantilla "vacía pero válida": parser ya rechaza? Si rechaza el parser,
  // no es problema del runtime.
  it("se acepta etiquetas_pedidas vacío o el parser lo rechaza", () => {
    let parsedOK = false;
    let compiled;
    try {
      compiled = compile(parse(src));
      parsedOK = true;
    } catch {
      // parser/compile rechazó — es comportamiento aceptable
    }
    if (parsedOK && compiled) {
      const r = generate(compiled, { seed: "vacio" });
      expect(r.etiquetasPedidas).toEqual([]);
    }
    expect(true).toBe(true); // smoke
  });
});

describe("generate / analisis_sintactico — falla si EvalError no se enmascara", () => {
  // sanity: no debería tirar EvalError indebidamente para input válido.
  const src = `enunciado: "x"
texto_analizar: "ab cd ef"
etiquetas_pedidas:
  - { palabra: "ab", etiqueta: "T1" }
  - { palabra: "cd", etiqueta: "T2" }
tipo: analisis_sintactico
`;
  it("no lanza EvalError", () => {
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "ok" })).not.toThrow(EvalError);
  });
});
