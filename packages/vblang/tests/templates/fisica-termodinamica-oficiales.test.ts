/**
 * WO-7b-ext — Validez DSL de las plantillas oficiales de Física/Termodinámica.
 *
 * Espeja el patrón de `fisica-cinematica-oficiales.test.ts`. La
 * EQUIVALENCIA contra el generador nativo vive en
 * `apps/web/src/generadoresV2/__tests__/porting-fisica-termodinamica-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_TERMODINAMICA_OFICIALES } from "../../src/templates/fisica-termodinamica-oficiales.js";

describe("WO-7b-ext: FISICA_TERMODINAMICA_OFICIALES", () => {
  it("expone 4 plantillas de Termodinámica (calor, conversion_temperatura, cambios_estado, dilatacion_termica)", () => {
    expect(FISICA_TERMODINAMICA_OFICIALES).toHaveLength(4);
    expect(FISICA_TERMODINAMICA_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "calor",
      "cambios_estado",
      "conversion_temperatura",
      "dilatacion_termica",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_TERMODINAMICA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_TERMODINAMICA_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_TERMODINAMICA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-ext-termo-${plantilla.subtipoOriginal}`,
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
