/**
 * WO-11e — Validez DSL de las plantillas oficiales de
 * Matemáticas/Análisis y Avanzado.
 *
 * Espeja el patrón de `matematicas-calculo-oficiales.test.ts`:
 * cada plantilla portada pasa el pipeline completo
 * `parse -> lint -> compile -> validate` con 100 simulaciones sin
 * errores. La EQUIVALENCIA contra el generador original vive en
 * `apps/web/src/generadoresV2/__tests__/analisis-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { MATEMATICAS_ANALISIS_OFICIALES } from "../../src/templates/matematicas-analisis-oficiales.js";

// Plantillas con respuesta simbólica (respuesta_expr + tipo expresion).
const SIMBOLICAS = new Set([
  "trigonometria_basica",
  "identidades_trigonometricas",
  "ecuaciones_trigonometricas",
  "operaciones_complejos",
  "matrices_basico",
  "conicas",
]);

describe("WO-11e: MATEMATICAS_ANALISIS_OFICIALES", () => {
  it("expone 16 plantillas con subtipoOriginal del generador de Análisis", () => {
    expect(MATEMATICAS_ANALISIS_OFICIALES).toHaveLength(16);
    const subtipos = MATEMATICAS_ANALISIS_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toEqual([
      "conicas",
      "determinantes_basico",
      "ecuaciones_exponenciales",
      "ecuaciones_logaritmicas",
      "ecuaciones_trigonometricas",
      "funciones_exponenciales",
      "funciones_logaritmicas",
      "geometria_espacial",
      "identidades_trigonometricas",
      "matrices_basico",
      "numeros_complejos",
      "operaciones_complejos",
      "sistemas_matrices",
      "trigonometria_aplicada",
      "trigonometria_basica",
      "vectores_basico",
    ]);
  });

  it("ids únicos y materia 'matematicas'", () => {
    const ids = MATEMATICAS_ANALISIS_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of MATEMATICAS_ANALISIS_OFICIALES) {
      expect(p.materia).toBe("matematicas");
    }
  });

  for (const plantilla of MATEMATICAS_ANALISIS_OFICIALES) {
    const esSimbolica = SIMBOLICAS.has(plantilla.subtipoOriginal);
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        expect(compiled.tipoInferido).toBe(
          esSimbolica ? "expresion" : "input",
        );

        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo-11e-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });

      it("genera respuesta con el tipo y contenido correctos", () => {
        const ast = parse(plantilla.codigoDsl);
        const compiled = compile(ast);
        const r = generate(compiled, { seed: "smoke" });
        if (esSimbolica) {
          expect(r.tipo).toBe("expresion");
          expect(typeof r.respuestaExpr).toBe("string");
          expect(r.respuestaExpr!.length).toBeGreaterThan(0);
        } else {
          expect(r.tipo).toBe("input");
          expect(typeof r.respuesta).toBe("number");
        }
      });
    });
  }
});
