/**
 * WO-7c — Validez DSL de las plantillas oficiales de Química
 * (Estequiometría + Termoquímica).
 *
 * Espeja el patrón de `matematicas-aritmetica-oficiales.test.ts`: cada
 * plantilla pasa el pipeline completo `parse -> lint -> compile ->
 * validate` con 100 simulaciones sin errores. La EQUIVALENCIA contra
 * el generador original vive en
 * `apps/web/src/generadoresV2/__tests__/quimica-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { QUIMICA_ESTEQUEOMETRIA_OFICIALES } from "../../src/templates/quimica-estequeometria-oficiales.js";

describe("WO-7c: QUIMICA_ESTEQUEOMETRIA_OFICIALES", () => {
  it("expone 9 plantillas con subtipoOriginal de los generadores", () => {
    expect(QUIMICA_ESTEQUEOMETRIA_OFICIALES).toHaveLength(9);
    const subtipos = QUIMICA_ESTEQUEOMETRIA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "calculo_masa",
      "calculo_moles",
      "calor",
      "cambio_entalpia",
      "diluciones",
      "energia_reaccion",
      "molaridad",
      "poder_calorifico",
      "relaciones_molares",
    ]);
  });

  it("ids únicos y materia 'quimica'", () => {
    const ids = QUIMICA_ESTEQUEOMETRIA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of QUIMICA_ESTEQUEOMETRIA_OFICIALES) {
      expect(p.materia).toBe("quimica");
    }
  });

  for (const plantilla of QUIMICA_ESTEQUEOMETRIA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        expect(compiled.tipoInferido).toBe("input");

        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7c-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });

      it("genera respuesta numérica finita", () => {
        const ast = parse(plantilla.codigoDsl);
        const compiled = compile(ast);
        const r = generate(compiled, { seed: "smoke" });
        expect(typeof r.respuesta).toBe("number");
        expect(Number.isFinite(r.respuesta as number)).toBe(true);
      });
    });
  }
});
