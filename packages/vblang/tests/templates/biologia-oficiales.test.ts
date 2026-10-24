/**
 * F6-05 — Plantillas VBLang OFICIALES para Biología.
 *
 * Cubre los 2 templates de `src/templates/biologia-oficiales.ts`
 * (`genetica_mendel`, `piramide_biomasas`):
 * 1. Pipeline completo `parse -> lint -> compile -> validate` (100
 *    simulaciones) sin errores.
 * 2. `respuesta` generada coincide con el cálculo esperado, recalculado de
 *    forma independiente (tabla de cruces monohíbridos / regla del 10%).
 * 3. Adapter `toModuleQuizQuestion`: tipo, unidad, tolerancia y
 *    `explanation` propagados.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { BIOLOGIA_OFICIALES } from "../../src/templates/biologia-oficiales.js";
import type { PlantillaOficial } from "../../src/templates/types.js";

function porId(id: string): PlantillaOficial {
  const t = BIOLOGIA_OFICIALES.find((p) => p.id === id);
  if (!t) throw new Error(`plantilla no encontrada: ${id}`);
  return t;
}

const CRUCES = [
  { padres: "AA x AA", descripcion: "ambos homocigotos dominantes", AA: "1", Aa: "0", aa: "0", dominante: "1", recesivo: "0" },
  { padres: "AA x Aa", descripcion: "homocigoto dominante x heterocigoto", AA: "1/2", Aa: "1/2", aa: "0", dominante: "1", recesivo: "0" },
  { padres: "AA x aa", descripcion: "lineas puras", AA: "0", Aa: "1", aa: "0", dominante: "1", recesivo: "0" },
  { padres: "Aa x Aa", descripcion: "monohibrido", AA: "1/4", Aa: "2/4", aa: "1/4", dominante: "3/4", recesivo: "1/4" },
  { padres: "Aa x aa", descripcion: "retrocruzamiento", AA: "0", Aa: "1/2", aa: "1/2", dominante: "1/2", recesivo: "1/2" },
  { padres: "aa x aa", descripcion: "ambos homocigotos recesivos", AA: "0", Aa: "0", aa: "1", dominante: "0", recesivo: "1" },
];

const ASPECTOS = [
  { clave: "dominante", desc: "fenotipo dominante" },
  { clave: "recesivo", desc: "fenotipo recesivo" },
  { clave: "AA", desc: "genotipo homocigoto dominante (AA)" },
  { clave: "Aa", desc: "genotipo heterocigoto (Aa)" },
  { clave: "aa", desc: "genotipo homocigoto recesivo (aa)" },
];

describe("F6-05: BIOLOGIA_OFICIALES", () => {
  it("expone exactamente 2 plantillas (genetica_mendel, piramide_biomasas)", () => {
    expect(BIOLOGIA_OFICIALES).toHaveLength(2);
    expect(BIOLOGIA_OFICIALES.map((p) => p.subtipoOriginal)).toEqual([
      "genetica_mendel",
      "piramide_biomasas",
    ]);
  });

  for (const plantilla of BIOLOGIA_OFICIALES) {
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

  describe("oficial-biologia-genetica-mendel", () => {
    const plantilla = porId("oficial-biologia-genetica-mendel");
    const compiled = compile(parse(plantilla.codigoDsl));

    it("cruce/aspecto sorteados pertenecen a las tablas y respuesta = cruce[aspecto.clave]", () => {
      for (const seed of ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10", "g11", "g12"]) {
        const r = generate(compiled, { seed });
        const cruce = r.variables.cruce as Record<string, string>;
        const aspecto = r.variables.aspecto as { clave: string; desc: string };

        const cruceEsperado = CRUCES.find((c) => c.padres === cruce.padres);
        expect(cruceEsperado).toBeDefined();
        expect(cruce).toEqual(cruceEsperado);

        const aspectoEsperado = ASPECTOS.find((a) => a.clave === aspecto.clave);
        expect(aspectoEsperado).toBeDefined();
        expect(aspecto).toEqual(aspectoEsperado);

        expect(r.respuesta).toBe(cruceEsperado![aspecto.clave as keyof typeof cruceEsperado]);
        expect(r.variables.resultado).toBe(r.respuesta);
      }
    });

    it("explicacion y pasos quedan materializados con los valores generados", () => {
      const r = generate(compiled, { seed: "explica" });
      const cruce = r.variables.cruce as Record<string, string>;
      expect(r.explicacion).toContain(cruce.padres);
      expect(r.pasos).toHaveLength(2);
    });

    it("adapter: tipo input y answerKey = respuesta (string)", () => {
      const r = generate(compiled, { seed: "adapter-mendel" });
      const q = toModuleQuizQuestion(r, { id: "q1" });
      expect(q.questionType).toBe("input");
      expect(q.answerKey).toBe(String(r.respuesta));
      expect(q.explanation).toBe(r.explicacion);
    });
  });

  describe("oficial-biologia-piramide-biomasas", () => {
    const plantilla = porId("oficial-biologia-piramide-biomasas");
    const compiled = compile(parse(plantilla.codigoDsl));

    const NOMBRES_NIVELES = [
      "consumidores primarios",
      "consumidores secundarios",
      "consumidores terciarios",
    ];

    it("consumidor = productor / 10^niveles_descenso = base (regla del 10%)", () => {
      for (const seed of ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"]) {
        const r = generate(compiled, { seed });
        const niveles = r.variables.niveles_descenso as number;
        const base = r.variables.base as number;
        const productor = r.variables.productor as number;
        const consumidor = r.variables.consumidor as number;
        const nivelNombre = r.variables.nivel_nombre as string;

        expect(niveles).toBeGreaterThanOrEqual(1);
        expect(niveles).toBeLessThanOrEqual(3);
        expect(base).toBeGreaterThanOrEqual(1);
        expect(base).toBeLessThanOrEqual(500);
        expect(nivelNombre).toBe(NOMBRES_NIVELES[niveles - 1]);

        expect(productor).toBe(base * Math.pow(10, niveles));
        expect(consumidor).toBe(base);
        expect(r.respuesta).toBe(consumidor);
      }
    });

    it("adapter: tipo input, unidad kg, tolerancia absoluta 0.01 y explanation presente", () => {
      const r = generate(compiled, { seed: "adapter-biomasas" });
      const q = toModuleQuizQuestion(r, { id: "q2" });
      expect(q.questionType).toBe("input");
      expect(q.unidades).toEqual({ resultado: "kg" });
      expect(q.toleranciaAbsoluta).toBe(0.01);
      expect(q.explanation).toBe(r.explicacion);
      expect(q.answerKey).toBe(String(r.respuesta));
    });
  });
});
