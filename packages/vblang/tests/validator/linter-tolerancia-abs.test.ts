/**
 * F2-04 — validator: `tolerancia_abs:` inválida dispara warning.
 * Default ausente = 0 (comportamiento previo). Si está presente, debe
 * ser ≥ 0 — número negativo es inválido.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";

describe("validator / F2-04: tolerancia_abs inválida", () => {
  it("tolerancia_abs válida (positiva) → no warning", () => {
    const src = `variables:
  a: random(1, 10)
enunciado: "x {a}"
respuesta: a
tolerancia_abs: 0.001
`;
    const report = validate(compile(parse(src)), {
      iterations: 5,
      seedPrefix: "tolabs-ok",
    });
    expect(
      report.warnings.find((i) => i.code === "tolerancia-abs-invalida"),
    ).toBeUndefined();
  });

  it("plantilla sin tolerancia_abs → tolAbs undefined en el result", () => {
    const src = `variables:
  a: random(1, 10)
enunciado: "x {a}"
respuesta: a
`;
    const r = generate(compile(parse(src)), { seed: "x" });
    expect(r.toleranciaAbs).toBeUndefined();
  });

  it("tolerancia_abs = 0 → se considera válida y NO dispara el warning", () => {
    // 0 colapsa al comportamiento previo (sin tolerancia absoluta) — no es
    // un error.
    const src = `variables:
  a: random(1, 10)
enunciado: "x {a}"
respuesta: a
tolerancia_abs: 0
`;
    const report = validate(compile(parse(src)), {
      iterations: 5,
      seedPrefix: "tolabs-0",
    });
    expect(
      report.warnings.find((i) => i.code === "tolerancia-abs-invalida"),
    ).toBeUndefined();
  });

  it("tolerancia_abs negativa → rechazada por el parser (no llega al validator)", () => {
    // El parser tokeniza `-1` como `MINUS NUMBER` (dos tokens). El bloque
    // exige un solo `NUMBER`, así que la sintaxis se rechaza ANTES de
    // validar. Documentamos acá para que un cambio futuro al parser no
    // rompa silenciosamente la invariante.
    const src = `variables:
  a: random(1, 10)
enunciado: "x {a}"
respuesta: a
tolerancia_abs: -1
`;
    expect(() => parse(src)).toThrow(/n[uú]mero/);
  });
});
