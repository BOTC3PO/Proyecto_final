/**
 * WO-11d — Validez DSL de las plantillas oficiales de
 * Matemáticas/Cálculo.
 *
 * Espeja el patrón de `matematicas-algebra-oficiales.test.ts`: cada
 * plantilla portada pasa el pipeline completo `parse -> lint -> compile ->
 * validate` con 100 simulaciones sin errores. La EQUIVALENCIA contra el
 * generador original vive en
 * `apps/web/src/generadoresV2/__tests__/calculo-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { MATEMATICAS_CALCULO_OFICIALES } from "../../src/templates/matematicas-calculo-oficiales.js";

// Plantillas con respuesta simbólica (respuesta_expr + tipo expresion).
const SIMBOLICAS = new Set([
  "derivadas_basicas",
  "reglas_derivacion",
  "integral_indefinida",
  "aplicaciones_integrales",
]);

describe("WO-11d: MATEMATICAS_CALCULO_OFICIALES", () => {
  it("expone 10 plantillas con subtipoOriginal del generador de Cálculo", () => {
    expect(MATEMATICAS_CALCULO_OFICIALES).toHaveLength(10);
    const subtipos = MATEMATICAS_CALCULO_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "aplicaciones_integrales",
      "derivada_definicion",
      "derivadas_basicas",
      "distribuciones",
      "integral_definida",
      "integral_indefinida",
      "limites_funciones",
      "probabilidad_avanzada",
      "reglas_derivacion",
      "variables_aleatorias",
    ]);
  });

  it("ids únicos y materia 'matematicas'", () => {
    const ids = MATEMATICAS_CALCULO_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of MATEMATICAS_CALCULO_OFICIALES) {
      expect(p.materia).toBe("matematicas");
    }
  });

  for (const plantilla of MATEMATICAS_CALCULO_OFICIALES) {
    const esSimbolica = SIMBOLICAS.has(plantilla.subtipoOriginal);
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        expect(compiled.tipoInferido).toBe(
          esSimbolica ? "expresion" : "input",
        );

        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-11d-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });

      it("genera respuesta con el tipo y contenido correctos", () => {
        const ast = parse(plantilla.codigoDsl);
        const compiled = compile(ast);
        const r = generate(compiled, { seed: "smoke" });
        if (esSimbolica) {
          expect(r.tipo).toBe("expresion");
          expect(typeof r.respuestaExpr).toBe("string");
          expect(r.respuestaExpr!.length).toBeGreaterThan(0);
        } else {
          expect(r.tipo).toBe("input");
          expect(typeof r.respuesta).toBe("number");
        }
      });
    });
  }
});
