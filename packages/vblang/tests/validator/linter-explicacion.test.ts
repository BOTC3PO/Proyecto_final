/**
 * F2-03 — linter: `explicacion:` con variables no declaradas.
 * El warning lleva el prefijo `explicacion: variable "x" no declarada` para
 * que el docente ubique la interpolación rota.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";

function lintSrc(src: string) {
  return lint(parse(src));
}

describe("linter / explicacion: variable no declarada (F2-03)", () => {
  it("warning explicacion-var-undef cuando referencia variable no declarada", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"

explicacion: "Resultado: {masa}"

respuesta: a
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "explicacion-var-undef" &&
        /explicacion: variable "masa" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("warning explicacion-var-undef en variable no declarada dentro de binop", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"

explicacion: "Suma: {a + xyz}"

respuesta: a
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "explicacion-var-undef" &&
        /explicacion: variable "xyz" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("no warning si todas las variables de la explicacion estan declaradas", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "x {a}"

explicacion: "{a} y {b} suman {a + b}"

respuesta: a + b
`;
    const report = lintSrc(src);
    expect(
      report.warnings.find((i) => i.code === "explicacion-var-undef"),
    ).toBeUndefined();
  });

  it("random() inline dentro de explicacion dispara random-inline", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"
explicacion: "azar {random(1, 5)}"
respuesta: a
`;
    const report = lintSrc(src);
    expect(
      report.warnings.some((i) => i.code === "random-inline"),
    ).toBe(true);
  });

  it("sin bloque explicacion: no se emiten warnings asociados", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"

respuesta: a
`;
    const report = lintSrc(src);
    expect(
      report.warnings.find((i) => i.code === "explicacion-var-undef"),
    ).toBeUndefined();
  });
});
