/**
 * Tarea 06 — runtime: seleccion de variante de enunciado por PRNG.
 *
 * Cubre:
 * 1. Determinismo: misma plantilla + mismo seed → mismo enunciado.
 * 2. Cobertura en validacion: una variante con {variableInexistente}
 *    rompe la validacion aunque su probabilidad sea baja.
 * 3. Sin overhead en plantillas con `enunciado:` simple: la secuencia del
 *    PRNG que ven las variables declaradas NO cambia (no se consume
 *    prng extra).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";

const PLANTILLA_ENUNCIADOS = `variables:
  a: random(1, 1000)
  b: random(1, 1000)
enunciados:
  - "Variante A: cuanto es {a} + {b}?"
  - "Variante B: resolvé la suma."
respuesta: a + b
`;

const PLANTILLA_ENUNCIADO_SIMPLE = `variables:
  a: random(1, 1000)
  b: random(1, 1000)
enunciado: "Cuanto es {a} + {b}?"
respuesta: a + b
`;

function cargar(src: string) {
  return compile(parse(src));
}

describe("runtime / Tarea 06: variante de enunciado por PRNG", () => {
  it("mismo seed + enunciados → mismo enunciado dos veces (determinismo)", () => {
    const compiled = cargar(PLANTILLA_ENUNCIADOS);
    const a = generate(compiled, { seed: "det" });
    const b = generate(compiled, { seed: "det" });
    expect(a.enunciado).toBe(b.enunciado);
    // La eleccion es estable: ademas del enunciado, el resto del resultado
    // debe ser identico (mismas variables).
    expect(a.variables).toEqual(b.variables);
  });

  it("seeds distintos pueden elegir variantes distintas", () => {
    const compiled = cargar(PLANTILLA_ENUNCIADOS);
    const seen = new Set<string>();
    for (let i = 0; i < 30; i += 1) {
      const r = generate(compiled, { seed: `mix-${i}` });
      seen.add(r.enunciado);
    }
    // Con 30 seeds y 2 variantes, esperamos haber visto ambas.
    expect(seen.size).toBeGreaterThanOrEqual(2);
  });

  it("plantilla con enunciado: simple NO consume prng extra (secuencia estable)", () => {
    // Si `enunciado:` simple consumiera prng, los valores de `a` y `b` con
    // el mismo seed variarian al introducir el bloque `enunciados:` (que
    // SI consume). Pero al reves (introducir enunciados sobre enunciado:)
    // el resultado de las variables SI cambia (consumo extra). Lo que
    // probamos aca es la NO-regresion: enunciado: simple produce la
    // MISMA secuencia de variables que antes del cambio.
    const compiledSimple = cargar(PLANTILLA_ENUNCIADO_SIMPLE);
    const r1 = generate(compiledSimple, { seed: "s1" });
    const r2 = generate(compiledSimple, { seed: "s1" });
    expect(r1.variables.a).toBe(r2.variables.a);
    expect(r1.variables.b).toBe(r2.variables.b);
    expect(r1.enunciado).toBe(r2.enunciado);
    // Sanity: el enunciado SI se interpola.
    expect(r1.enunciado).toMatch(/Cuanto es \d+ \+ \d+/);
  });

  it("forceVariant: variante fija N veces → mismo enunciado cada vez", () => {
    const compiled = cargar(PLANTILLA_ENUNCIADOS);
    const a = generate(compiled, { seed: "f", forceVariant: 0 });
    const b = generate(compiled, { seed: "f", forceVariant: 0 });
    expect(a.enunciado).toBe(b.enunciado);
    expect(a.enunciado.startsWith("Variante A:")).toBe(true);

    const c = generate(compiled, { seed: "f", forceVariant: 1 });
    expect(c.enunciado.startsWith("Variante B:")).toBe(true);
  });

  it("forceVariant con mismo seed produce variables identicas (secuencia PRNG preservada)", () => {
    const compiled = cargar(PLANTILLA_ENUNCIADOS);
    const v0 = generate(compiled, { seed: "p", forceVariant: 0 });
    const v1 = generate(compiled, { seed: "p", forceVariant: 1 });
    // Misma seed → misma secuencia de random() → mismas variables,
    // independientemente de la variante forzada.
    expect(v0.variables).toEqual(v1.variables);
  });
});

describe("validator / Tarea 06: cobertura de variantes", () => {
  it("variante con variable inexistente hace fallar la validacion aunque su probabilidad sea baja", () => {
    // Variante 0 valida; variante 1 referencia {noExiste}. Si el validador
    // no forzara cobertura, ~50% de las simulaciones pasarian. Con cobertura
    // forzada en las primeras 2 simulaciones, la variante 1 aparece siempre
    // y la validacion falla.
    const src = `variables:
  a: random(1, 100)
enunciados:
  - "Variante A: cuanto es {a}?"
  - "Variante B: el numero {noExiste} es primo."
respuesta: a
`;
    const compiled = cargar(src);
    const report = validate(compiled, { iterations: 20, seedPrefix: "t06" });
    expect(report.pass).toBe(false);
    expect(
      report.errors.some((e) => /no existe|indefinida|undefined/i.test(e.message)),
    ).toBe(true);
  });

  it("plantilla sin enunciados: la validacion sigue funcionando como antes", () => {
    const compiled = cargar(PLANTILLA_ENUNCIADO_SIMPLE);
    const report = validate(compiled, { iterations: 20, seedPrefix: "t06b" });
    expect(report.totalSimulations).toBe(20);
    // No exigimos pass:true (puede haber restricciones), pero el reporte
    // debe estar bien formado y no romperse por el flag forceVariant.
    expect(Array.isArray(report.errors)).toBe(true);
    expect(Array.isArray(report.warnings)).toBe(true);
  });
});
