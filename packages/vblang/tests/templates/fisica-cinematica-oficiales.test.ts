/**
 * WO-7b — Validez DSL de las plantillas oficiales de Física/Cinemática.
 *
 * Espeja el patrón de `matematicas-aritmetica-oficiales.test.ts`: cada
 * plantilla portada pasa el pipeline `parse → lint → compile → validate` con
 * 100 simulaciones sin errores. La EQUIVALENCIA contra el generador nativo
 * vive en `apps/web/src/generadoresV2/__tests__/porting-fisica-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_CINEMATICA_OFICIALES } from "../../src/templates/fisica-cinematica-oficiales.js";

describe("WO-7b: FISICA_CINEMATICA_OFICIALES", () => {
  it("expone 5 plantillas de Cinemática (MRU, MRUV, caída libre, d/v/t, conversión)", () => {
    expect(FISICA_CINEMATICA_OFICIALES).toHaveLength(5);
    expect(FISICA_CINEMATICA_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "MRU",
      "MRUV",
      "caida_libre",
      "conversion_unidades",
      "relacion_distancia_tiempo",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_CINEMATICA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_CINEMATICA_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_CINEMATICA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-fisica-${plantilla.subtipoOriginal}`,
        });
        expect(
          report.errors,
          `errores: ${report.errors.map((e) => e.message).join(" | ")}`,
        ).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });
    });
  }
});
