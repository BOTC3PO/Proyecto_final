/**
 * WO-11 — Validez DSL de las plantillas oficiales de Matemáticas/Álgebra.
 *
 * Espeja el patrón de `matematicas-aritmetica-oficiales.test.ts`: cada
 * plantilla portada pasa el pipeline completo `parse -> lint -> compile ->
 * validate` con 100 simulaciones sin errores. La EQUIVALENCIA contra el
 * generador original (mismo oráculo simbólico) vive en
 * `apps/web/src/generadoresV2/__tests__/algebra-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { MATEMATICAS_ALGEBRA_OFICIALES } from "../../src/templates/matematicas-algebra-oficiales.js";

describe("WO-11: MATEMATICAS_ALGEBRA_OFICIALES", () => {
  it("expone 3 plantillas con subtipoOriginal del generador de Álgebra", () => {
    expect(MATEMATICAS_ALGEBRA_OFICIALES).toHaveLength(3);
    const subtipos = MATEMATICAS_ALGEBRA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "factorizacion_basica",
      "multiplicacion_monomios",
      "terminos_semejantes",
    ]);
  });

  it("ids únicos y materia 'matematicas'", () => {
    const ids = MATEMATICAS_ALGEBRA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of MATEMATICAS_ALGEBRA_OFICIALES) {
      expect(p.materia).toBe("matematicas");
    }
  });

  for (const plantilla of MATEMATICAS_ALGEBRA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        // El tipo inferido debe ser 'expresion' (las 3 plantillas
        // declaran `respuesta_expr:`).
        expect(compiled.tipoInferido).toBe("expresion");

        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-11-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });

      it("genera respuesta_expr no vacía y string", () => {
        const ast = parse(plantilla.codigoDsl);
        const compiled = compile(ast);
        const r = generate(compiled, { seed: "smoke" });
        expect(r.tipo).toBe("expresion");
        expect(typeof r.respuestaExpr).toBe("string");
        expect(r.respuestaExpr!.length).toBeGreaterThan(0);
      });
    });
  }
});
