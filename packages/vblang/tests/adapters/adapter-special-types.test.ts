import { describe, expect, it } from "vitest";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

describe("adapter / ordenar", () => {
  const src = `variables:
  procesos: ["a", "b", "c"]

enunciado: "x"
opciones_explicitas: mezclar(procesos)
respuesta_orden: procesos
tipo: ordenar
`;

  it("questionType, items, answerKey (array)", () => {
    const g = generate(compile(parse(src)), { seed: "ad-ord" });
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("ordenar");
    expect(q.items).toBeDefined();
    expect(q.items!.length).toBe(3);
    expect(Array.isArray(q.answerKey)).toBe(true);
    expect(q.answerKey).toEqual(["a", "b", "c"]);
  });
});

describe("adapter / marcar_mapa", () => {
  const src = `mapa: world_countries
enunciado: "x"
respuesta_iso: "BRA"
respuesta_nombre: "Brasil"
tipo: marcar_mapa
`;

  it("mapaId, respuestaIsoCorrecta, answerKey string, explanation con nombre", () => {
    const g = generate(compile(parse(src)), { seed: "ad-mm" });
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("marcar_mapa");
    expect(q.mapaId).toBe("world_countries");
    expect(q.respuestaIsoCorrecta).toBe("BRA");
    expect(q.answerKey).toBe("BRA");
    expect(q.explanation).toContain("Brasil");
  });
});

describe("adapter / analisis_sintactico", () => {
  const src = `enunciado: "x"
texto_analizar: "El gato corre"
etiquetas_pedidas:
  - { palabra: "El", etiqueta: "articulo" }
  - { palabra: "gato", etiqueta: "sustantivo" }
tipo: analisis_sintactico
`;

  it("textoAnalizar y etiquetasPedidas, sin answerKey", () => {
    const g = generate(compile(parse(src)), { seed: "ad-as" });
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("analisis_sintactico");
    expect(q.textoAnalizar).toBe("El gato corre");
    expect(q.etiquetasPedidas).toEqual([
      { palabra: "El", etiqueta: "articulo" },
      { palabra: "gato", etiqueta: "sustantivo" },
    ]);
    expect(q.answerKey).toBeUndefined();
  });
});

describe("adapter / identificar_palabras", () => {
  const src = `enunciado: "x"
texto_analizar: "El perro corre y ladra"
respuestas_validas:
  - "corre"
  - "ladra"
tipo: identificar_palabras
`;

  it("textoAnalizar y answerKey (array de strings)", () => {
    const g = generate(compile(parse(src)), { seed: "ad-ip" });
    const q = toModuleQuizQuestion(g);
    expect(q.questionType).toBe("identificar_palabras");
    expect(q.textoAnalizar).toBe("El perro corre y ladra");
    expect(Array.isArray(q.answerKey)).toBe(true);
    expect(q.answerKey).toEqual(["corre", "ladra"]);
  });
});
