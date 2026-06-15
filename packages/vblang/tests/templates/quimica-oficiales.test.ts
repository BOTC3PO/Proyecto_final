/**
 * F6-05 — Plantillas VBLang OFICIALES para Química.
 *
 * Cubre los 2 templates de `src/templates/quimica-oficiales.ts`
 * (`particulas_subatomicas`, `configuracion_electronica`):
 * 1. Pipeline completo `parse -> lint -> compile -> validate` (100
 *    simulaciones) sin errores.
 * 2. `respuesta` generada coincide con el cálculo esperado, recalculado de
 *    forma independiente (tabla de elementos / principio de Aufbau).
 * 3. Adapter `toModuleQuizQuestion`: tipo, explanation y pasos propagados.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { QUIMICA_OFICIALES } from "../../src/templates/quimica-oficiales.js";
import type { PlantillaOficial } from "../../src/templates/types.js";

function porId(id: string): PlantillaOficial {
  const t = QUIMICA_OFICIALES.find((p) => p.id === id);
  if (!t) throw new Error(`plantilla no encontrada: ${id}`);
  return t;
}

const ELEMENTOS = [
  { simbolo: "H", nombre: "hidrógeno", Z: 1, proton: 1, neutron: 0, electron: 1 },
  { simbolo: "He", nombre: "helio", Z: 2, proton: 2, neutron: 2, electron: 2 },
  { simbolo: "Li", nombre: "litio", Z: 3, proton: 3, neutron: 4, electron: 3 },
  { simbolo: "C", nombre: "carbono", Z: 6, proton: 6, neutron: 6, electron: 6 },
  { simbolo: "N", nombre: "nitrógeno", Z: 7, proton: 7, neutron: 7, electron: 7 },
  { simbolo: "O", nombre: "oxígeno", Z: 8, proton: 8, neutron: 8, electron: 8 },
  { simbolo: "Na", nombre: "sodio", Z: 11, proton: 11, neutron: 12, electron: 11 },
  { simbolo: "Mg", nombre: "magnesio", Z: 12, proton: 12, neutron: 12, electron: 12 },
  { simbolo: "Cl", nombre: "cloro", Z: 17, proton: 17, neutron: 18, electron: 17 },
  { simbolo: "Ca", nombre: "calcio", Z: 20, proton: 20, neutron: 20, electron: 20 },
  { simbolo: "Fe", nombre: "hierro", Z: 26, proton: 26, neutron: 30, electron: 26 },
];

const PARTICULAS = [
  { nombre: "protones", clave: "proton" },
  { nombre: "neutrones", clave: "neutron" },
  { nombre: "electrones", clave: "electron" },
];

const NIVELES_AUFBAU = [
  { orbital: "1s", hasta: 2, base: 0 },
  { orbital: "2s", hasta: 4, base: 2 },
  { orbital: "2p", hasta: 10, base: 4 },
  { orbital: "3s", hasta: 12, base: 10 },
  { orbital: "3p", hasta: 18, base: 12 },
  { orbital: "4s", hasta: 20, base: 18 },
];

describe("F6-05: QUIMICA_OFICIALES", () => {
  it("expone exactamente 2 plantillas (particulas_subatomicas, configuracion_electronica)", () => {
    expect(QUIMICA_OFICIALES).toHaveLength(2);
    expect(QUIMICA_OFICIALES.map((p) => p.subtipoOriginal)).toEqual([
      "particulas_subatomicas",
      "configuracion_electronica",
    ]);
  });

  for (const plantilla of QUIMICA_OFICIALES) {
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

  describe("oficial-quimica-particulas-subatomicas", () => {
    const plantilla = porId("oficial-quimica-particulas-subatomicas");
    const compiled = compile(parse(plantilla.codigoDsl));

    it("el/particula sorteados pertenecen a las tablas; masa = proton+neutron; respuesta = el[particula.clave]", () => {
      for (const seed of ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"]) {
        const r = generate(compiled, { seed });
        const el = r.variables.el as Record<string, unknown>;
        const particula = r.variables.particula as { nombre: string; clave: string };
        const masa = r.variables.masa as number;

        const elEsperado = ELEMENTOS.find((e) => e.simbolo === el.simbolo);
        expect(elEsperado).toBeDefined();
        expect(el).toEqual(elEsperado);

        const particulaEsperada = PARTICULAS.find((p) => p.clave === particula.clave);
        expect(particulaEsperada).toBeDefined();
        expect(particula).toEqual(particulaEsperada);

        expect(masa).toBe(elEsperado!.proton + elEsperado!.neutron);
        expect(r.respuesta).toBe(elEsperado![particula.clave as keyof typeof elEsperado]);
        expect(r.variables.resultado).toBe(r.respuesta);
      }
    });

    it("adapter: tipo input y answerKey numérico coherente con el/particula", () => {
      const r = generate(compiled, { seed: "adapter-particulas" });
      const q = toModuleQuizQuestion(r, { id: "q1" });
      expect(q.questionType).toBe("input");
      expect(q.answerKey).toBe(String(r.respuesta));
      expect(q.explanation).toBe(r.explicacion);
    });
  });

  describe("oficial-quimica-configuracion-electronica", () => {
    const plantilla = porId("oficial-quimica-configuracion-electronica");
    const compiled = compile(parse(plantilla.codigoDsl));

    function nivelEsperado(z: number) {
      const nivel = NIVELES_AUFBAU.find((n) => n.hasta >= z);
      if (!nivel) throw new Error(`sin nivel Aufbau para z=${z}`);
      return nivel;
    }

    it("Z en 1..20; nivel_actual = primer subnivel con hasta>=Z; electrones_subnivel = Z - base", () => {
      for (const seed of ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8", "z9", "z10"]) {
        const r = generate(compiled, { seed });
        const z = r.variables.z as number;
        const nivelActual = r.variables.nivel_actual as { orbital: string; hasta: number; base: number };
        const electrones = r.variables.electrones_subnivel as number;

        expect(z).toBeGreaterThanOrEqual(1);
        expect(z).toBeLessThanOrEqual(20);

        const esperado = nivelEsperado(z);
        expect(nivelActual).toEqual(esperado);
        expect(electrones).toBe(z - esperado.base);
        expect(r.respuesta).toBe(electrones);
      }
    });

    it("adapter: tipo input, explanation con {nivel_actual.orbital} y pasos materializados", () => {
      const r = generate(compiled, { seed: "adapter-configelec" });
      const q = toModuleQuizQuestion(r, { id: "q2" });
      expect(q.questionType).toBe("input");
      const nivelActual = r.variables.nivel_actual as { orbital: string };
      expect(q.explanation).toContain(nivelActual.orbital);
      expect(r.pasos).toHaveLength(3);
    });
  });
});
