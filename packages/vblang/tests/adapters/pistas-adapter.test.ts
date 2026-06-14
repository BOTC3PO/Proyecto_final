/**
 * F2-02 — adapter + validator: las pistas materializadas llegan al shape de
 * salida del consumidor (ModuleQuizQuestion) y una pista con interpolación rota
 * hace fallar la validación dinámica.
 */
import { describe, expect, it } from "vitest";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";

function cargar(src: string) {
  return compile(parse(src));
}

describe("adapter / F2-02: propagación de pistas", () => {
  it("toModuleQuizQuestion copia gen.pistas → question.pistas", () => {
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
pistas:
  - "Pensá {a}"
  - "Es {a}"
respuesta: a
`;
    const g = generate(cargar(src), { seed: "ad-1" });
    const q = toModuleQuizQuestion(g);
    expect(q.pistas).toEqual(g.pistas);
    expect(q.pistas).toHaveLength(2);
  });

  it("sin pistas: en la plantilla, question.pistas queda undefined", () => {
    const g = generate(
      cargar(`enunciado: "x"\nrespuesta: 1\n`),
      { seed: "ad-2" },
    );
    const q = toModuleQuizQuestion(g);
    expect(q.pistas).toBeUndefined();
  });
});

describe("validator / F2-02: pista con variable inexistente", () => {
  it("una pista que referencia una variable no declarada hace fallar la validación", () => {
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
pistas:
  - "Pensá {a}"
  - "Falta {noExiste}"
respuesta: a
`;
    const report = validate(cargar(src), { iterations: 10, seedPrefix: "f202" });
    expect(report.pass).toBe(false);
    expect(
      report.errors.some((e) => /indefinida|no existe|undefined/i.test(e.message)),
    ).toBe(true);
  });
});
