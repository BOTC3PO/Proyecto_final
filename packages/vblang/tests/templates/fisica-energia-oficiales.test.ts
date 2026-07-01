/**
 * WO-7b-ext — Validez DSL de las plantillas oficiales de Física/Energía.
 *
 * Espeja el patrón de `fisica-cinematica-oficiales.test.ts`. La
 * EQUIVALENCIA contra el generador nativo vive en
 * `apps/web/src/generadoresV2/__tests__/porting-fisica-energia-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_ENERGIA_OFICIALES } from "../../src/templates/fisica-energia-oficiales.js";

describe("WO-7b-ext: FISICA_ENERGIA_OFICIALES", () => {
  it("expone 5 plantillas de Energía (trabajo_mecanico, energia_cinetica, energia_potencial, conservacion_energia, potencia_mecanica)", () => {
    expect(FISICA_ENERGIA_OFICIALES).toHaveLength(5);
    expect(FISICA_ENERGIA_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "conservacion_energia",
      "energia_cinetica",
      "energia_potencial",
      "potencia_mecanica",
      "trabajo_mecanico",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_ENERGIA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_ENERGIA_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_ENERGIA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-ext-energia-${plantilla.subtipoOriginal}`,
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
