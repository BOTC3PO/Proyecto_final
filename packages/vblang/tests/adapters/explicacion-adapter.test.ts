/**
 * F2-03 — adapter: la `explicacion:` materializada llega al shape de salida
 * del consumidor (ModuleQuizQuestion) con precedencia sobre el fallback
 * `buildExplanation(pasos)`. Una `explicacion:` con interpolación rota hace
 * fallar la validación dinámica.
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

describe("adapter / F2-03: propagacion de explicacion", () => {
  it("toModuleQuizQuestion copia gen.explicacion → question.explanation", () => {
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
explicacion: "Es {a}."
respuesta: a
`;
    const g = generate(cargar(src), { seed: "ad-1" });
    const q = toModuleQuizQuestion(g);
    expect(q.explanation).toBe(g.explicacion);
    expect(q.explanation).toBe(`Es ${g.variables.a as number}.`);
  });

  it("sin explicacion: en la plantilla, question.explanation queda undefined (sin fallback a pasos)", () => {
    const g = generate(
      cargar(`enunciado: "x"\nrespuesta: 1\n`),
      { seed: "ad-2" },
    );
    const q = toModuleQuizQuestion(g);
    expect(q.explanation).toBeUndefined();
  });

  it("explicacion: gana sobre el fallback `buildExplanation(pasos)`", () => {
    // Sin explicitacion:, el adapter construye explanation desde pasos.
    // Con explicitacion:, gana la explicitacion y los pasos quedan fuera de
    // explanation (siguen disponibles en `q.pasos` para quien los quiera).
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
pasos:
  - "Paso 1 con {a}"
  - "Paso 2 con {a}"
explicacion: "Explicacion explicita con {a}"
respuesta: a
`;
    const g = generate(cargar(src), { seed: "ad-3" });
    const q = toModuleQuizQuestion(g);
    const a = g.variables.a as number;
    expect(q.explanation).toBe(g.explicacion);
    expect(q.explanation).toBe(`Explicacion explicita con ${a}`);
    expect(q.explanation).not.toContain("Paso 1");
    expect(q.pasos).toEqual([`Paso 1 con ${a}`, `Paso 2 con ${a}`]);
  });

  it("caller puede override con options.explanation (mayor precedencia que gen.explicacion)", () => {
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
explicacion: "Explicacion de la plantilla"
respuesta: a
`;
    const g = generate(cargar(src), { seed: "ad-4" });
    const q = toModuleQuizQuestion(g, {
      explanation: "Explicacion del caller (override)",
    });
    expect(q.explanation).toBe("Explicacion del caller (override)");
  });
});

describe("validator / F2-03: explicacion con variable inexistente", () => {
  it("una explicacion que referencia una variable no declarada hace fallar la validación", () => {
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
explicacion: "Falta {noExiste}"
respuesta: a
`;
    const report = validate(cargar(src), {
      iterations: 10,
      seedPrefix: "f203",
    });
    expect(report.pass).toBe(false);
    expect(
      report.errors.some((e) => /indefinida|no existe|undefined/i.test(e.message)),
    ).toBe(true);
  });

  it("una explicacion con todas las variables declaradas pasa la validación", () => {
    const src = `variables:
  a: random(1, 100)
enunciado: "x {a}"
explicacion: "Es {a}."
respuesta: a
`;
    const report = validate(cargar(src), {
      iterations: 10,
      seedPrefix: "f203-ok",
    });
    expect(report.pass).toBe(true);
  });
});
