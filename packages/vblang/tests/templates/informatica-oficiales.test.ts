/**
 * F6-05 — Plantillas VBLang OFICIALES para Informática.
 *
 * Cubre el template `algebra_booleana` de
 * `src/templates/informatica-oficiales.ts`:
 * 1. Pipeline completo `parse -> lint -> compile -> validate` (100
 *    simulaciones) sin errores.
 * 2. `respuesta` generada coincide con la evaluación lógica esperada,
 *    recalculada de forma independiente para cada una de las 6 expresiones
 *    posibles.
 * 3. Adapter `toModuleQuizQuestion`: tipo `vf`, `opciones`
 *    Verdadero/Falso y `answerKey` coherente con `respuesta`.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { INFORMATICA_OFICIALES } from "../../src/templates/informatica-oficiales.js";
import type { PlantillaOficial } from "../../src/templates/types.js";

function porId(id: string): PlantillaOficial {
  const t = INFORMATICA_OFICIALES.find((p) => p.id === id);
  if (!t) throw new Error(`plantilla no encontrada: ${id}`);
  return t;
}

const EVALUADORES: Record<string, (a: boolean, b: boolean, c: boolean) => boolean> = {
  "(A Y B) O C": (a, b, c) => (a && b) || c,
  "(A O B) Y (NO C)": (a, b, c) => (a || b) && !c,
  "A Y (B O C)": (a, b, c) => a && (b || c),
  "NO (A Y B)": (a, b) => !(a && b),
  "A distinto de B (XOR)": (a, b) => a !== b,
  "(NO A) O (NO B)": (a, b) => !a || !b,
};

describe("F6-05: INFORMATICA_OFICIALES", () => {
  it("expone exactamente 1 plantilla (algebra_booleana)", () => {
    expect(INFORMATICA_OFICIALES).toHaveLength(1);
    expect(INFORMATICA_OFICIALES.map((p) => p.subtipoOriginal)).toEqual([
      "algebra_booleana",
    ]);
  });

  for (const plantilla of INFORMATICA_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `f6-05-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });
    });
  }

  describe("oficial-informatica-algebra-booleana", () => {
    const plantilla = porId("oficial-informatica-algebra-booleana");
    const compiled = compile(parse(plantilla.codigoDsl));

    it("expr.valor = evaluación independiente de expr.texto con A/B/C, respuesta = expr.valor", () => {
      for (const seed of ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12"]) {
        const r = generate(compiled, { seed });
        const a = r.variables.a as boolean;
        const b = r.variables.b as boolean;
        const c = r.variables.c as boolean;
        const expr = r.variables.expr as { texto: string; valor: boolean };

        const evaluador = EVALUADORES[expr.texto];
        expect(evaluador).toBeDefined();
        expect(expr.valor).toBe(evaluador(a, b, c));
        expect(r.respuesta).toBe(expr.valor);
      }
    });

    it("adapter: tipo vf, opciones Verdadero/Falso y answerKey coherente con respuesta", () => {
      const r = generate(compiled, { seed: "adapter-booleana" });
      const q = toModuleQuizQuestion(r, { id: "q1" });
      expect(q.questionType).toBe("vf");
      expect(q.options).toEqual(["Verdadero", "Falso"]);
      expect(q.answerKey).toBe(r.respuesta ? "Verdadero" : "Falso");
      expect(q.explanation).toBe(r.explicacion);
    });
  });
});
