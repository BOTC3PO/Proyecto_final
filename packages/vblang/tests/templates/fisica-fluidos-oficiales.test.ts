/**
 * WO-7b-ext — Validez DSL de las plantillas oficiales de Física/Fluidos.
 *
 * Espeja el patrón de `fisica-cinematica-oficiales.test.ts`. La
 * EQUIVALENCIA contra el generador nativo vive en
 * `apps/web/src/generadoresV2/__tests__/porting-fisica-fluidos-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_FLUIDOS_OFICIALES } from "../../src/templates/fisica-fluidos-oficiales.js";

describe("WO-7b-ext: FISICA_FLUIDOS_OFICIALES", () => {
  it("expone 4 plantillas de Fluidos (densidad, presion, presion_hidrostatica, caudal)", () => {
    expect(FISICA_FLUIDOS_OFICIALES).toHaveLength(4);
    expect(FISICA_FLUIDOS_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "caudal",
      "densidad",
      "presion",
      "presion_hidrostatica",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_FLUIDOS_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_FLUIDOS_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_FLUIDOS_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-ext-fluidos-${plantilloOriginal(plantilla)}`,
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

function plantilloOriginal(p: { subtipoOriginal: string }): string {
  return p.subtipoOriginal;
}
