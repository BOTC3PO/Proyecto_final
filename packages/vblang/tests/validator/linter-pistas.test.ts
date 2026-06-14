/**
 * F2-02 — linter: pistas con variables no declaradas.
 * El warning lleva el prefijo `pistas[i]: variable "x" no declarada` para que
 * el docente ubique la pista rota por índice.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";

function lintSrc(src: string) {
  return lint(parse(src));
}

describe("linter / pistas: variable no declarada (F2-02)", () => {
  it("warning pistas[1] cuando la 2da pista referencia variable no declarada", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "Cuanto es {a} + {b}?"

pistas:
  - "Pensá en {a}"
  - "Usá {masa}"

respuesta: a + b
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "pistas-var-undef" &&
        /pistas\[1\]: variable "masa" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("warning pistas[0] en variable no declarada dentro de binop", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"

pistas:
  - "Resultado: {a + xyz}"

respuesta: a
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "pistas-var-undef" &&
        /pistas\[0\]: variable "xyz" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("pista unica inline: warning con indice 0", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"
pistas: "Falta {noExiste}"
respuesta: a
`;
    const report = lintSrc(src);
    const w = report.warnings.find(
      (i) =>
        i.code === "pistas-var-undef" &&
        /pistas\[0\]: variable "noExiste" no declarada/.test(i.message),
    );
    expect(w).toBeDefined();
  });

  it("no warning si todas las variables de las pistas estan declaradas", () => {
    const src = `variables:
  a: random(1, 10)
  b: random(1, 10)

enunciado: "x {a}"

pistas:
  - "{a}"
  - "{a} y {b}"

respuesta: a + b
`;
    const report = lintSrc(src);
    expect(
      report.warnings.find((i) => i.code === "pistas-var-undef"),
    ).toBeUndefined();
  });

  it("random() inline dentro de una pista dispara random-inline", () => {
    const src = `variables:
  a: random(1, 10)

enunciado: "x {a}"
pistas: "azar {random(1, 5)}"
respuesta: a
`;
    const report = lintSrc(src);
    expect(
      report.warnings.some((i) => i.code === "random-inline"),
    ).toBe(true);
  });
});
