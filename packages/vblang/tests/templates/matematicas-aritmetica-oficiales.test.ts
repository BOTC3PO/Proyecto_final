/**
 * WO-7 — Validez DSL de las plantillas oficiales de Matemáticas/Aritmética.
 *
 * Espeja el patrón de `matematicas-oficiales.test.ts` (F6-05): cada plantilla
 * portada pasa el pipeline completo `parse -> lint -> compile -> validate` con
 * 100 simulaciones sin errores. La EQUIVALENCIA contra el generador original
 * (mismo oráculo) vive en
 * `apps/web/src/generadoresV2/__tests__/porting-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { validate } from "../../src/validator/validator.js";
import { MATEMATICAS_ARITMETICA_OFICIALES } from "../../src/templates/matematicas-aritmetica-oficiales.js";

describe("WO-7: MATEMATICAS_ARITMETICA_OFICIALES", () => {
  it("expone 7 plantillas con subtipoOriginal del generador de Aritmética", () => {
    expect(MATEMATICAS_ARITMETICA_OFICIALES).toHaveLength(7);
    expect(MATEMATICAS_ARITMETICA_OFICIALES.map((p) => p.subtipoOriginal).sort()).toEqual([
      "angulos",
      "coordenadas_plano",
      "potencias",
      "regla_tres",
      "series_simples",
      "sucesiones",
      "unidades_medida",
    ]);
  });

  it("ids únicos y materia 'matematicas'", () => {
    const ids = MATEMATICAS_ARITMETICA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of MATEMATICAS_ARITMETICA_OFICIALES) {
      expect(p.materia).toBe("matematicas");
    }
  });

  for (const plantilla of MATEMATICAS_ARITMETICA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-7-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });
    });
  }
});
