import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";

function codes(src: string): string[] {
  return lint(parse(src)).issues.map((i) => i.code);
}

describe("linter / ordenar", () => {
  it("sin opciones_explicitas → ordenar-requires-opciones-explicitas", () => {
    const src = `enunciado: "x"
respuesta_orden: ["a", "b"]
tipo: ordenar
`;
    expect(codes(src)).toContain("ordenar-requires-opciones-explicitas");
  });

  it("sin respuesta_orden → el parser ya rechaza tipo: ordenar", () => {
    // El parser exige respuesta_orden cuando tipo: ordenar. Si lo omitimos,
    // parse() lanza. Acá probamos que el linter no se rompe en un caso
    // alternativo: ordenar SIN tipo explícito y sin respuesta_orden no
    // se infiere ordenar.
    const src = `enunciado: "x"
respuesta: 1
opciones_explicitas:
  - 1
  - 2
tipo: mc
`;
    // tipo mc — no issue de ordenar
    const cs = codes(src);
    expect(cs).not.toContain("ordenar-requires-opciones-explicitas");
    expect(cs).not.toContain("ordenar-requires-respuesta-orden");
  });

  it("sets diferentes literales → warning ordenar-sets-diferentes", () => {
    const src = `enunciado: "x"
opciones_explicitas: ["a", "b", "c"]
respuesta_orden: ["a", "b", "d"]
tipo: ordenar
`;
    expect(codes(src)).toContain("ordenar-sets-diferentes");
  });

  it("sets iguales literales → sin warning ordenar-sets-diferentes", () => {
    const src = `enunciado: "x"
opciones_explicitas: ["c", "a", "b"]
respuesta_orden: ["a", "b", "c"]
tipo: ordenar
`;
    expect(codes(src)).not.toContain("ordenar-sets-diferentes");
  });
});

describe("linter / marcar_mapa", () => {
  it("sin mapa → marcar-mapa-requires-mapa", () => {
    const src = `enunciado: "x"
respuesta_iso: "ARG"
tipo: marcar_mapa
`;
    expect(codes(src)).toContain("marcar-mapa-requires-mapa");
  });
});

describe("linter / analisis_sintactico", () => {
  it("sin texto_analizar → analisis-sintactico-requires-texto-analizar", () => {
    const src = `enunciado: "x"
etiquetas_pedidas:
  - { palabra: "a", etiqueta: "t" }
tipo: analisis_sintactico
`;
    expect(codes(src)).toContain("analisis-sintactico-requires-texto-analizar");
  });

  it("palabra literal fuera del texto literal → warning palabra-no-en-texto", () => {
    const src = `enunciado: "x"
texto_analizar: "el gato corre"
etiquetas_pedidas:
  - { palabra: "perro", etiqueta: "sustantivo" }
tipo: analisis_sintactico
`;
    expect(codes(src)).toContain("palabra-no-en-texto");
  });

  it("palabra literal dentro del texto → no warning", () => {
    const src = `enunciado: "x"
texto_analizar: "el gato corre"
etiquetas_pedidas:
  - { palabra: "gato", etiqueta: "sustantivo" }
tipo: analisis_sintactico
`;
    expect(codes(src)).not.toContain("palabra-no-en-texto");
  });
});

describe("linter / identificar_palabras", () => {
  it("parser exige al menos un campo de respuesta — identificar_palabras sin respuestas_validas falla a nivel parse", () => {
    // El parser ya exige una de respuesta/respuestas_validas/respuesta_iso/etc.
    // antes de llegar al linter, así que el caso "sin respuestas_validas" no
    // puede materializarse acá. Comprobamos que la combinación válida emite
    // el error del linter cuando texto_analizar también falta.
    const src = `enunciado: "x"
respuesta: 1
tipo: identificar_palabras
`;
    const cs = codes(src);
    expect(cs).toContain("identificar-palabras-requires-texto-analizar");
    expect(cs).toContain("identificar-palabras-requires-respuestas-validas");
  });

  it("respuesta_valida literal fuera del texto literal → warning", () => {
    const src = `enunciado: "x"
texto_analizar: "el gato corre"
respuestas_validas:
  - "ladra"
tipo: identificar_palabras
`;
    expect(codes(src)).toContain("palabra-no-en-texto");
  });

  it("array literal de respuestas con palabra fuera del texto → warning", () => {
    const src = `enunciado: "x"
texto_analizar: "el gato corre"
respuestas_validas:
  - ["gato", "ladra"]
tipo: identificar_palabras
`;
    expect(codes(src)).toContain("palabra-no-en-texto");
  });
});
