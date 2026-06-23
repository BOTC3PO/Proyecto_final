/**
 * WO-7c — Validez DSL de las plantillas oficiales de Economía General.
 *
 * Espeja el patrón de `matematicas-aritmetica-oficiales.test.ts`.
 * Cada plantilla pasa el pipeline completo `parse -> lint -> compile
 * -> validate` con 100 simulaciones sin errores. La EQUIVALENCIA
 * contra el generador original vive en
 * `apps/web/src/generadoresV2/__tests__/economia-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { ECONOMIA_GENERAL_OFICIALES } from "../../src/templates/economia-general-oficiales.js";

describe("WO-7c: ECONOMIA_GENERAL_OFICIALES", () => {
  it("expone 11 plantillas (9 subtipos; `porcentajes_simples` cubre 3 ramas)", () => {
    expect(ECONOMIA_GENERAL_OFICIALES).toHaveLength(11);
    const subtipos = ECONOMIA_GENERAL_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "capital_trabajo",
      "ganancia_perdida",
      "margen_bruto",
      "margen_neto",
      "porcentajes_simples",
      "porcentajes_simples",
      "porcentajes_simples",
      "productividad",
      "punto_equilibrio",
      "resultado_bruto",
      "resultado_neto",
    ]);
  });

  it("ids únicos y materia 'economia'", () => {
    const ids = ECONOMIA_GENERAL_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of ECONOMIA_GENERAL_OFICIALES) {
      expect(p.materia).toBe("economia");
    }
  });

  for (const plantilla of ECONOMIA_GENERAL_OFICIALES) {
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
