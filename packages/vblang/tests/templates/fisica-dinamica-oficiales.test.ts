/**
 * WO-7b-ext — Validez DSL de las plantillas oficiales de Física/Dinámica.
 *
 * Espeja el patrón de `fisica-cinematica-oficiales.test.ts`: cada plantilla
 * portada pasa el pipeline `parse → lint → compile → validate` con 100
 * simulaciones sin errores. La EQUIVALENCIA contra el generador nativo vive
 * en `apps/web/src/generadoresV2/__tests__/porting-fisica-dinamica-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_DINAMICA_OFICIALES } from "../../src/templates/fisica-dinamica-oficiales.js";

describe("WO-7b-ext: FISICA_DINAMICA_OFICIALES", () => {
  it("expone 4 plantillas de Dinámica (peso, friccion, plano_inclinado, ley_hooke)", () => {
    expect(FISICA_DINAMICA_OFICIALES).toHaveLength(4);
    expect(FISICA_DINAMICA_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "friccion",
      "ley_hooke",
      "peso",
      "plano_inclinado",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_DINAMICA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_DINAMICA_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_DINAMICA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-ext-dinamica-${plantilla.subtipoOriginal}`,
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
