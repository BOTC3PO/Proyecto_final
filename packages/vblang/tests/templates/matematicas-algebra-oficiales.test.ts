/**
 * WO-11 / WO-11b — Validez DSL de las plantillas oficiales de
 * Matemáticas/Álgebra.
 *
 * Espeja el patrón de `matematicas-aritmetica-oficiales.test.ts`: cada
 * plantilla portada pasa el pipeline completo `parse -> lint -> compile ->
 * validate` con 100 simulaciones sin errores. La EQUIVALENCIA contra el
 * generador original (mismo oráculo simbólico) vive en
 * `apps/web/src/generadoresV2/__tests__/algebra-equivalencia.spec.ts`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { MATEMATICAS_ALGEBRA_OFICIALES } from "../../src/templates/matematicas-algebra-oficiales.js";

// Plantillas con respuesta simbólica (respuesta_expr + tipo expresion).
const SIMBOLICAS = new Set([
  "terminos_semejantes",
  "multiplicacion_monomios",
  "factorizacion_basica",
  "suma_resta_polinomios",
  "multiplicacion_polinomios",
  "productos_notables",
  "lenguaje_algebraico",
  "racionales_simples",
  "division_polinomios",
  "simplificacion_algebraica",
  "ecuacion_recta",
]);

describe("WO-11/WO-11b: MATEMATICAS_ALGEBRA_OFICIALES", () => {
  it("expone 18 plantillas con subtipoOriginal del generador de Álgebra", () => {
    // 3 (WO-11) + 9 (WO-11b) + 6 (WO-11c) = 18.
    expect(MATEMATICAS_ALGEBRA_OFICIALES).toHaveLength(18);
    const subtipos = MATEMATICAS_ALGEBRA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    expect(subtipos).toMatchObject(
      expect.arrayContaining([
        "division_polinomios",
        "ecuacion_recta",
        "ecuaciones_fracciones",
        "ecuaciones_lineales",
        "ecuaciones_parametros",
        "evaluacion_expresiones",
        "factorizacion_basica",
        "funcion_afin",
        "funciones_lineales",
        "grado_coeficientes",
        "lenguaje_algebraico",
        "multiplicacion_monomios",
        "multiplicacion_polinomios",
        "productos_notables",
        "racionales_simples",
        "simplificacion_algebraica",
        "suma_resta_polinomios",
        "terminos_semejantes",
      ]),
    );
  });

  it("ids únicos y materia 'matematicas'", () => {
    const ids = MATEMATICAS_ALGEBRA_OFICIALES.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const p of MATEMATICAS_ALGEBRA_OFICIALES) {
      expect(p.materia).toBe("matematicas");
    }
  });

  for (const plantilla of MATEMATICAS_ALGEBRA_OFICIALES) {
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
          seedPrefix: `wo-11-${plantilla.subtipoOriginal}`,
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
