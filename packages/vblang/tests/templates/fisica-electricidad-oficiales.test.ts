/**
 * WO-7b-ext — Validez DSL de las plantillas oficiales de Física/Electricidad.
 *
 * Espeja el patrón de `fisica-cinematica-oficiales.test.ts`. La
 * EQUIVALENCIA contra el generador nativo vive en
 * `apps/web/src/generadoresV2/__tests__/porting-fisica-electricidad-equivalencia.spec.ts`.
 *
 * Nota: `resistencia_serie` y `resistencia_paralelo` reciben arrays de
 * tamaño variable y NO entran con los builtins actuales — quedan como
 * gap documentado (ver header de `fisica-electricidad-oficiales.ts`).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { FISICA_ELECTRICIDAD_OFICIALES } from "../../src/templates/fisica-electricidad-oficiales.js";

describe("WO-7b-ext: FISICA_ELECTRICIDAD_OFICIALES", () => {
  it("expone 3 plantillas de Electricidad (ley_ohm, potencia_electrica, consumo_electrico)", () => {
    expect(FISICA_ELECTRICIDAD_OFICIALES).toHaveLength(3);
    expect(FISICA_ELECTRICIDAD_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "consumo_electrico",
      "ley_ohm",
      "potencia_electrica",
    ]);
  });

  it("ids únicos y materia 'fisica'", () => {
    const ids = FISICA_ELECTRICIDAD_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of FISICA_ELECTRICIDAD_OFICIALES) {
      expect(p.materia).toBe("fisica");
    }
  });

  for (const plantilla of FISICA_ELECTRICIDAD_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7b-ext-electricidad-${plantilla.subtipoOriginal}`,
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
