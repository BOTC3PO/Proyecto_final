/**
 * WO-7 / WO-7b — Validez DSL de las plantillas oficiales de Matemáticas/Aritmética.
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

describe("WO-7 / WO-7b / WO-7c: MATEMATICAS_ARITMETICA_OFICIALES", () => {
  it("expone 30 plantillas con subtipoOriginal del generador de Aritmética", () => {
    // WO-7/7b: 22 plantillas (basico de los 21 subtipos + ramas
    // adicionales como estadistica_basica_mediana y moda). WO-7c
    // agregó 8 plantillas de 3ª ola (intermedio/avanzado):
    //   divisibilidad intermedio/avanzado (2),
    //   numeros_primos avanzado (1),
    //   fracciones intermedio (+, -, ×, ÷) y avanzado (5).
    expect(MATEMATICAS_ARITMETICA_OFICIALES).toHaveLength(30);
    const subtipos = MATEMATICAS_ARITMETICA_OFICIALES
      .map((p) => p.subtipoOriginal)
      .sort();
    // Verifica que cada subtipo del generador (los 21 listados en
    // `Aritmetica.ts`) tiene al menos una plantilla. Algunos subtipos
    // (estadistica_basica, decimales) tienen más de una plantilla por las
    // distintas ramas (basico/intermedio).
    const set = new Set(subtipos);
    for (const s of [
      "angulos",
      "coordenadas_plano",
      "decimales",
      "divisibilidad",
      "enteros_negativos",
      "estadistica_basica_media",
      "estadistica_basica_mediana",
      "estadistica_basica_moda",
      "fracciones",
      "multiplos_divisores",
      "numeros_primos",
      "operaciones_basicas",
      "operaciones_combinadas",
      "perimetro_area",
      "porcentaje",
      "potencias",
      "proporcionalidad",
      "raices",
      "regla_tres",
      "series_simples",
      "sucesiones",
      "unidades_medida",
    ]) {
      expect(set.has(s), `falta subtipo: ${s}`).toBe(true);
    }
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
