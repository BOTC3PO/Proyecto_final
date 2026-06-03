import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";

function lintSrc(src: string) {
  return lint(parse(src));
}

const BASE = `\nenunciado: "x"\nrespuesta: 1\n`;

describe("lint / plantilla mínima sin errores", () => {
  it("issues vacío", () => {
    const report = lintSrc(`
variables:
  v: random(1, 10)

enunciado: "{v}"
respuesta: v
`);
    expect(report.errors).toHaveLength(0);
  });

  it("variableTypes está poblado", () => {
    const report = lintSrc(`
variables:
  v: random(1, 10)
  s: "hola"

enunciado: "{v} {s}"
respuesta: v
`);
    expect(report.variableTypes.v).toEqual({ kind: "number" });
    expect(report.variableTypes.s).toEqual({ kind: "string" });
  });
});

describe("lint / errores de tipo", () => {
  it("v y t con v, t: number → type-mismatch", () => {
    const report = lintSrc(`
variables:
  v: random(1, 10)
  t: random(1, 10)

enunciado: "{v y t}"
respuesta: v
`);
    expect(report.errors.some((i) => i.code === "type-mismatch")).toBe(true);
  });

  it("rango invertido en random(10, 5)", () => {
    const report = lintSrc(`
variables:
  v: random(10, 5)

enunciado: "{v}"
respuesta: v
`);
    expect(report.errors.some((i) => i.code === "range-invalid")).toBe(true);
  });
});

describe("lint / var-undef y var-unused", () => {
  it("var-undef en respuesta", () => {
    const report = lintSrc(`
variables:
  v: random(1, 10)

enunciado: "{v}"
respuesta: w
`);
    expect(report.errors.some((i) => i.code === "var-undef")).toBe(true);
  });

  it("var-undef sugiere variable similar", () => {
    const report = lintSrc(`
variables:
  velocidad: random(1, 10)

enunciado: "{velocidad}"
respuesta: velocida
`);
    const issue = report.errors.find((i) => i.code === "var-undef");
    expect(issue?.suggestion).toBe("velocidad");
  });

  it("var-unused → warning", () => {
    const report = lintSrc(`
variables:
  v: random(1, 10)
  basura: 5

enunciado: "{v}"
respuesta: v
`);
    expect(report.warnings.some((i) => i.code === "var-unused")).toBe(true);
  });
});

describe("lint / random-inline", () => {
  it("random en interpolación de enunciado → warning", () => {
    const report = lintSrc(`
enunciado: "Numero: {random(1, 10)}"
respuesta: 1
`);
    expect(report.warnings.some((i) => i.code === "random-inline")).toBe(true);
  });
});

describe("lint / division-zero-risk y sqrt-negative-risk", () => {
  it("a / b con b random que puede ser 0", () => {
    const report = lintSrc(`
variables:
  a: random(1, 10)
  b: random(-5, 5)

enunciado: "{a / b}"
respuesta: a / b
`);
    expect(report.warnings.some((i) => i.code === "division-zero-risk")).toBe(
      true,
    );
  });

  it("sqrt(x) con x random que puede ser negativo", () => {
    const report = lintSrc(`
variables:
  x: random(-10, 10)

enunciado: "{sqrt(x)}"
respuesta: sqrt(x)
`);
    expect(report.warnings.some((i) => i.code === "sqrt-negative-risk")).toBe(
      true,
    );
  });
});

describe("lint / range-contradictorio", () => {
  it("v > 100 y v < 50 → warning", () => {
    const report = lintSrc(`
variables:
  v: random(1, 200)

restricciones:
  - v > 100
  - v < 50

enunciado: "{v}"
respuesta: v
`);
    expect(report.warnings.some((i) => i.code === "range-contradictorio")).toBe(
      true,
    );
  });
});

describe("lint / vf-requires-boolean y mc-requires-number", () => {
  it("tipo vf con respuesta number → error", () => {
    const report = lintSrc(`
enunciado: "X"
respuesta: 42
tipo: vf
`);
    expect(
      report.errors.some((i) => i.code === "vf-requires-boolean"),
    ).toBe(true);
  });

  it("tipo mc con opciones y respuesta string → error", () => {
    const report = lintSrc(`
enunciado: "X"
respuesta: "hola"
tipo: mc
opciones: 4
`);
    expect(
      report.errors.some((i) => i.code === "mc-requires-number"),
    ).toBe(true);
  });

  it("mc con opciones_explicitas y respuesta no incluida (literales) → error", () => {
    const report = lintSrc(`
enunciado: "X"
respuesta: "Berlin"
tipo: mc
opciones_explicitas:
  - "Madrid"
  - "Paris"
`);
    expect(
      report.errors.some((i) => i.code === "mc-opcion-no-incluida"),
    ).toBe(true);
  });

  it("mc con opciones_explicitas y respuesta NO literal → no se chequea", () => {
    const report = lintSrc(`
variables:
  capital: "Paris"

enunciado: "X"
respuesta: capital
tipo: mc
opciones_explicitas:
  - "Madrid"
  - "Paris"
`);
    expect(
      report.errors.some((i) => i.code === "mc-opcion-no-incluida"),
    ).toBe(false);
  });
});

describe("lint / restricción no booleana", () => {
  it("restricción que infiere number → error", () => {
    const report = lintSrc(`
variables:
  v: random(1, 10)

restricciones:
  - v + 1

enunciado: "{v}"
respuesta: v
`);
    expect(report.errors.some((i) => i.code === "type-mismatch")).toBe(true);
  });
});

describe("lint / performance", () => {
  it("plantilla mediana lintsea en < 50ms", () => {
    const src = `
variables:
  a: random(1, 100)
  b: random(1, 100)
  c: random(1, 100)
  d: random(1, 100)
  e: random(1, 100)
  f: random(1, 100)
  g_var: random(1, 100)
  h: random(1, 100)

restricciones:
  - a > 0
  - b > 0

enunciado: "Test {a} {b} {c} {d} {e} {f} {g_var} {h}"
respuesta: a + b + c + d + e + f + g_var + h
`;
    const t0 = performance.now();
    lintSrc(src);
    expect(performance.now() - t0).toBeLessThan(50);
  });
});

describe("lint / base generador (generador-aware)", () => {
  it("marca indefinida la variable del enunciado que el generador no provee", () => {
    const report = lint(
      parse(`generador: fisica/cinematica\nenunciado: "Cuanto es {a}"\n`),
      { generadorVars: ["v", "t"] },
    );
    expect(report.errors.some((i) => i.code === "var-undef")).toBe(true);
  });

  it("no marca las variables que el generador sí provee", () => {
    const report = lint(
      parse(`generador: fisica/cinematica\nenunciado: "Va a {v} durante {t}"\n`),
      { generadorVars: ["v", "t"] },
    );
    expect(report.errors).toHaveLength(0);
  });

  it("ignora el bloque variables: heredado (vale el set del generador)", () => {
    const report = lint(
      parse(
        `variables:\n  a: random(1, 10)\ngenerador: fisica/cinematica\nenunciado: "{a}"\n`,
      ),
      { generadorVars: ["v"] },
    );
    // `a` está declarada pero el generador la ignora → indefinida en el enunciado.
    expect(report.errors.some((i) => i.code === "var-undef")).toBe(true);
  });

  it("sin generadorVars, cualquier interpolación queda indefinida", () => {
    const report = lint(
      parse(`generador: fisica/cinematica\nenunciado: "{v}"\n`),
    );
    expect(report.errors.some((i) => i.code === "var-undef")).toBe(true);
  });
});

void BASE;
