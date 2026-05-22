import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_DIR = resolve(__dirname, "../fixtures/valid");

function loadCompiled(name: string) {
  return compile(parse(readFileSync(resolve(FIXTURE_DIR, name), "utf8")));
}

describe("validator / 16.1 MRU pasa siempre", () => {
  it("100/100 pass", () => {
    const compiled = loadCompiled("16_1_mru.vblang");
    const report = validate(compiled, { iterations: 100 });
    expect(report.passedSimulations).toBe(100);
    expect(report.errors).toHaveLength(0);
    expect(report.pass).toBe(true);
    expect(report.generationTimeMs).toBeGreaterThan(0);
  });
});

describe("validator / restricción imposible", () => {
  it("todas las simulaciones fallan agrupadas", () => {
    const compiled = compile(
      parse(`
variables:
  v: random(-10, -1)

restricciones:
  - v > 0

enunciado: "{v}"
respuesta: v
`),
    );
    const report = validate(compiled, { iterations: 20 });
    expect(report.pass).toBe(false);
    expect(report.passedSimulations).toBe(0);
    expect(report.errors).toHaveLength(1);
    expect(report.errors[0].code).toBe("restricciones-fallaron");
    expect(report.errors[0].count).toBe(20);
  });
});

describe("validator / división por cero ocasional", () => {
  it("agrupa errores div-zero", () => {
    const compiled = compile(
      parse(`
variables:
  v: random(-5, 5)

enunciado: "{10 / v}"
respuesta: 10 / v
`),
    );
    const report = validate(compiled, { iterations: 100 });
    // Algunas pasarán (v != 0), otras tirarán div-zero. Esperamos errores agrupados.
    expect(report.errors.length).toBeGreaterThan(0);
    const divZero = report.errors.find((e) => e.code === "div-zero");
    expect(divZero).toBeDefined();
    expect(divZero!.count).toBeGreaterThan(0);
  });
});

describe("validator / threshold custom", () => {
  it("threshold 0.5 con 60% pass → pass true", () => {
    // Crear una plantilla que falle ~40% del tiempo: v == 0 es la única
    // probabilidad de div-zero con v: random(-5, 5) → 1/11 ≈ 9%.
    // Eso da 91% pass → fácilmente pasa threshold 0.5.
    const compiled = compile(
      parse(`
variables:
  v: random(-5, 5)

enunciado: "{10 / v}"
respuesta: 10 / v
`),
    );
    const report = validate(compiled, {
      iterations: 100,
      threshold: 0.5,
    });
    expect(report.pass).toBe(true);
  });

  it("threshold 1.0 con cualquier fallo → pass false", () => {
    const compiled = compile(
      parse(`
variables:
  v: random(-5, 5)

enunciado: "{10 / v}"
respuesta: 10 / v
`),
    );
    const report = validate(compiled, {
      iterations: 100,
      threshold: 1.0,
    });
    expect(report.pass).toBe(false);
  });
});

describe("validator / performance", () => {
  it("100 iteraciones en menos de 5 segundos", () => {
    const compiled = loadCompiled("16_1_mru.vblang");
    const t0 = performance.now();
    validate(compiled, { iterations: 100 });
    expect(performance.now() - t0).toBeLessThan(5000);
  });
});

describe("validator / agrupación de errores", () => {
  it("mismo error en muchas seeds da una sola entrada con count alto", () => {
    const compiled = compile(
      parse(`
variables:
  v: random(-10, -1)

restricciones:
  - v > 100

enunciado: "{v}"
respuesta: v
`),
    );
    const report = validate(compiled, { iterations: 30 });
    expect(report.errors).toHaveLength(1);
    expect(report.errors[0].count).toBe(30);
    expect(report.errors[0].sampleSeed).toBeDefined();
  });
});
