/**
 * WO-7b-ext — Validez DSL de las plantillas oficiales de Física/Ondas.
 *
 * Espeja el patrón de `fisica-cinematica-oficiales.test.ts`. La
 * EQUIVALENCIA contra el generador nativo vive en
 * `apps/web/src/generadoresV2/__tests__/porting-fisica-ondas-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_ONDAS_OFICIALES } from "../../src/templates/fisica-ondas-oficiales.js";

describe("WO-7b-ext: FISICA_ONDAS_OFICIALES", () => {
  it("expone 3 plantillas de Ondas (velocidad_ondas, longitud_onda, frecuencia_periodo)", () => {
    expect(FISICA_ONDAS_OFICIALES).toHaveLength(3);
    expect(FISICA_ONDAS_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "frecuencia_periodo",
      "longitud_onda",
      "velocidad_ondas",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_ONDAS_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_ONDAS_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_ONDAS_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-ext-ondas-${plantilla.subtipoOriginal}`,
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
