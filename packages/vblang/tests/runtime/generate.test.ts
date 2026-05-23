import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_DIR = resolve(__dirname, "../fixtures/valid");

function loadFixture(name: string): string {
  return readFileSync(resolve(FIXTURE_DIR, name), "utf8");
}

describe("generate / 16.1 MRU", () => {
  const src = loadFixture("16_1_mru.vblang");
  const compiled = compile(parse(src));

  it("genera enunciado con km/h y h", () => {
    const result = generate(compiled, { seed: "test-1" });
    expect(result.enunciado).toMatch(/km\/h/);
    expect(result.enunciado).toMatch(/h\b/);
  });

  it("respuesta es número finito positivo", () => {
    const result = generate(compiled, { seed: "test-1" });
    expect(typeof result.respuesta).toBe("number");
    expect(Number.isFinite(result.respuesta as number)).toBe(true);
    expect((result.respuesta as number) > 0).toBe(true);
  });

  it("unidad === 'km'", () => {
    const result = generate(compiled, { seed: "test-1" });
    expect(result.unidad).toBe("km");
  });

  it("tolerancia está definida", () => {
    const result = generate(compiled, { seed: "test-1" });
    expect(result.tolerancia).toEqual({ valor: 1, esPorcentaje: false });
  });

  it("tipo === 'input'", () => {
    const result = generate(compiled, { seed: "test-1" });
    expect(result.tipo).toBe("input");
  });

  it("variables.v y variables.t son números", () => {
    const result = generate(compiled, { seed: "test-1" });
    expect(typeof result.variables.v).toBe("number");
    expect(typeof result.variables.t).toBe("number");
  });

  it("mismo seed → resultado idéntico (determinismo)", () => {
    const a = generate(compiled, { seed: "deterministic" });
    const b = generate(compiled, { seed: "deterministic" });
    expect(JSON.stringify(a)).toBe(JSON.stringify(b));
  });
});

describe("generate / 16.3 cuadrática (con restricción b^2-4ac>=0)", () => {
  const src = loadFixture("16_3_cuadratica.vblang");
  const compiled = compile(parse(src));

  it("respuestasValidas es array de 2 números", () => {
    const result = generate(compiled, { seed: "cuad-1", maxRetries: 500 });
    expect(result.respuestasValidas).toHaveLength(2);
    expect(typeof result.respuestasValidas![0]).toBe("number");
    expect(typeof result.respuestasValidas![1]).toBe("number");
  });
});

describe("generate / 16.4 energía con pasos", () => {
  const src = loadFixture("16_4_energia.vblang");
  const compiled = compile(parse(src));

  it("pasos es array de 3 strings con interpolación", () => {
    const result = generate(compiled, { seed: "energia-1" });
    expect(result.pasos).toHaveLength(3);
    for (const p of result.pasos!) {
      expect(typeof p).toBe("string");
    }
  });

  it("pasos[0] contiene 'kg' y 'm/s'", () => {
    const result = generate(compiled, { seed: "energia-1" });
    expect(result.pasos![0]).toMatch(/kg/);
    expect(result.pasos![0]).toMatch(/m\/s/);
  });
});

describe("generate / tipo vf inline", () => {
  it("respuesta booleana produce opciones Verdadero/Falso", () => {
    const src = `
enunciado: "Verificar"
respuesta: 2 + 2 == 4
tipo: vf
`;
    const result = generate(compile(parse(src)), { seed: "vf-1" });
    expect(result.tipo).toBe("vf");
    expect(result.opciones).toHaveLength(2);
    const correct = result.opciones!.find((o) => o.correcta)!;
    const incorrect = result.opciones!.find((o) => !o.correcta)!;
    expect(correct.texto).toBe("Verdadero");
    expect(incorrect.texto).toBe("Falso");
  });

  it("respuesta no-boolean en vf lanza EvalError", () => {
    const src = `
enunciado: "X"
respuesta: 42
tipo: vf
`;
    expect(() => generate(compile(parse(src)), { seed: "x" })).toThrow(
      /verdadero\/falso/,
    );
  });
});

describe("generate / tipo mc con opciones numéricas", () => {
  it("genera N opciones únicas con la correcta marcada", () => {
    const src = `
enunciado: "Cuanto es 50 * 2?"
respuesta: 100
tipo: mc
opciones: 4
`;
    const result = generate(compile(parse(src)), { seed: "mc-num" });
    expect(result.opciones).toHaveLength(4);
    const correctas = result.opciones!.filter((o) => o.correcta);
    expect(correctas).toHaveLength(1);
    expect(correctas[0].texto).toBe("100");
  });
});

describe("generate / tipo mc con opciones_explicitas", () => {
  it("usa la lista provista y marca la correcta", () => {
    const src = `
enunciado: "Capital de Francia?"
respuesta: "Paris"
tipo: mc
opciones_explicitas:
  - "Madrid"
  - "Paris"
  - "Roma"
`;
    const result = generate(compile(parse(src)), { seed: "mc-cap" });
    expect(result.opciones).toHaveLength(3);
    const correcta = result.opciones!.find((o) => o.correcta)!;
    expect(correcta.texto).toBe("Paris");
    const textos = result.opciones!.map((o) => o.texto).sort();
    expect(textos).toEqual(["Madrid", "Paris", "Roma"]);
  });

  it("respuesta ausente en opciones_explicitas lanza error", () => {
    const src = `
enunciado: "X"
respuesta: "Berlin"
tipo: mc
opciones_explicitas:
  - "Madrid"
  - "Paris"
`;
    expect(() => generate(compile(parse(src)), { seed: "x" })).toThrow(
      /no aparece/,
    );
  });
});

describe("generate / performance", () => {
  it("100 iteraciones de 16_1_mru promedio < 50ms", () => {
    const src = loadFixture("16_1_mru.vblang");
    const compiled = compile(parse(src));
    const t0 = performance.now();
    for (let i = 0; i < 100; i++) {
      generate(compiled, { seed: `perf-${i}` });
    }
    const dt = performance.now() - t0;
    const avg = dt / 100;
    expect(avg).toBeLessThan(50);
  });
});
