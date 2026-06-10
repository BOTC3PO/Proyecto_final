/**
 * Tarea 07 — linter: variantes de `enunciados:` con variables no
 * declaradas y duplicados exactos.
 *
 * El warning por variable no declarada lleva el prefijo
 * `enunciados[i]: variable "x" no declarada` para que el docente
 * ubique el error rapido.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";

function lintSrc(src: string) {
  return lint(parse(src));
}

describe("linter / enunciados: variable no declarada (Tarea 07)", () => {
  it("warning enunciados[1] cuando la 2da variante referencia variable no declarada", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciados:
  - "Cuanto es {a} + {b}?"
  - "Cuanto es {a} + {masa}?"

respuesta: a + b
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "enunciados-var-undef" &&
        /enunciados\[1\]: variable "masa" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("warning enunciados[2] cuando la 3ra variante tiene variable no declarada", () => {
    const src = `variables:
  a: random(1, 10)

enunciados:
  - "Solo {a}"
  - "Solo {a} v2"
  - "Tengo {volumen}"

respuesta: a
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "enunciados-var-undef" &&
        /enunciados\[2\]: variable "volumen" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("no warning si todas las variables estan declaradas", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciados:
  - "{a} + {b}"
  - "{a} * {b}"

respuesta: a + b
`;
    const report = lintSrc(src);
    expect(
      report.warnings.find((i) => i.code === "enunciados-var-undef"),
    ).toBeUndefined();
  });

  it("warning enunciados[0] en variable declarada dentro de binop", () => {
    // La expr {a + xyz} tiene una var no declarada (xyz) dentro de un binop.
    // El walk profundo debe detectarla.
    const src = `variables:
  a: random(1, 10)

enunciados:
  - "Resultado: {a + xyz}"

respuesta: a
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "enunciados-var-undef" &&
        /enunciados\[0\]: variable "xyz" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });
});

describe("linter / enunciados: variantes duplicadas (Tarea 07)", () => {
  it("warning enunciados-duplicado cuando dos variantes son identicas", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciados:
  - "Cuanto es {a} + {b}?"
  - "Otra cosa"
  - "Cuanto es {a} + {b}?"

respuesta: a + b
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "enunciados-duplicado" &&
        /enunciados\[2\] es duplicado exacto de enunciados\[0\]/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("no warning de duplicado cuando todas las variantes son distintas", () => {
    const src = `variables:
  a: random(1, 10)

enunciados:
  - "Variante A: {a}"
  - "Variante B: {a}"
  - "Variante C: {a}"

respuesta: a
`;
    const report = lintSrc(src);
    expect(
      report.warnings.find((i) => i.code === "enunciados-duplicado"),
    ).toBeUndefined();
  });

  it("duplicado exacto: dos strings literales identicos", () => {
    const src = `enunciados:
  - "Hola mundo"
  - "Hola mundo"
respuesta: 1
`;
    const report = lintSrc(src);
    const w = report.warnings.find((i) => i.code === "enunciados-duplicado");
    expect(w).toBeDefined();
  });
});
