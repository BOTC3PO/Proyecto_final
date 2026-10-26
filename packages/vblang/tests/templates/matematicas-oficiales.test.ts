/**
 * F6-05 — Plantillas VBLang OFICIALES para Matemáticas.
 *
 * Cubre el template `probabilidad_simple` de
 * `src/templates/matematicas-oficiales.ts`:
 * 1. Pipeline completo `parse -> lint -> compile -> validate` (100
 *    simulaciones) sin errores.
 * 2. `respuesta` generada coincide con `redondear(favorables/total, 4)`,
 *    recalculado de forma independiente para cada uno de los 7 casos
 *    posibles.
 * 3. Adapter `toModuleQuizQuestion`: tipo `input`, tolerancia absoluta
 *    0.0001 y `explanation` propagada.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { MATEMATICAS_OFICIALES } from "../../src/templates/matematicas-oficiales.js";
import type { PlantillaOficial } from "../../src/templates/types.js";

function porId(id: string): PlantillaOficial {
  const t = MATEMATICAS_OFICIALES.find((p) => p.id === id);
  if (!t) throw new Error(`plantilla no encontrada: ${id}`);
  return t;
}

const CASOS = [
  { espacio: "un dado de 6 caras", evento: "un número par", favorables: 3, total: 6 },
  { espacio: "un dado de 6 caras", evento: "un número mayor que 4", favorables: 2, total: 6 },
  { espacio: "un dado de 6 caras", evento: "el número 3", favorables: 1, total: 6 },
  { espacio: "una moneda", evento: "cara", favorables: 1, total: 2 },
  { espacio: "una baraja española de 40 cartas", evento: "un as", favorables: 4, total: 40 },
  { espacio: "una baraja española de 40 cartas", evento: "una figura (sota, caballo o rey)", favorables: 12, total: 40 },
  { espacio: "una bolsa con 10 bolitas numeradas del 1 al 10", evento: "un número menor que 4", favorables: 3, total: 10 },
];

describe("F6-05: MATEMATICAS_OFICIALES", () => {
  it("expone exactamente 1 plantilla (probabilidad_simple)", () => {
    expect(MATEMATICAS_OFICIALES).toHaveLength(1);
    expect(MATEMATICAS_OFICIALES.map((p) => p.subtipoOriginal)).toEqual([
      "probabilidad_simple",
    ]);
  });

  for (const plantilla of MATEMATICAS_OFICIALES) {
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

  describe("oficial-matematicas-probabilidad-simple", () => {
    const plantilla = porId("oficial-matematicas-probabilidad-simple");
    const compiled = compile(parse(plantilla.codigoDsl));

    it("caso sorteado pertenece a la tabla; probabilidad = redondear(favorables/total, 4)", () => {
      for (const seed of ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14"]) {
        const r = generate(compiled, { seed });
        const caso = r.variables.caso as { espacio: string; evento: string; favorables: number; total: number };
        const probabilidad = r.variables.probabilidad as number;

        const casoEsperado = CASOS.find(
          (c) => c.espacio === caso.espacio && c.evento === caso.evento,
        );
        expect(casoEsperado).toBeDefined();
        expect(caso).toEqual(casoEsperado);

        const esperada = Math.round((caso.favorables / caso.total) * 10000) / 10000;
        expect(probabilidad).toBe(esperada);
        expect(probabilidad).toBeGreaterThanOrEqual(0);
        expect(probabilidad).toBeLessThanOrEqual(1);
        expect(r.respuesta).toBe(probabilidad);
      }
    });

    it("adapter: tipo input, tolerancia absoluta 0.0001 y explanation con {caso.favorables}/{caso.total}", () => {
      const r = generate(compiled, { seed: "adapter-probabilidad" });
      const q = toModuleQuizQuestion(r, { id: "q1" });
      expect(q.questionType).toBe("input");
      expect(q.toleranciaAbsoluta).toBe(0.0001);
      const caso = r.variables.caso as { favorables: number; total: number };
      expect(q.explanation).toContain(`${caso.favorables}/${caso.total}`);
      expect(r.pasos?.[0]).toContain(`${caso.favorables} / ${caso.total}`);
      expect(q.answerKey).toBe(String(r.respuesta));
    });
  });
});
