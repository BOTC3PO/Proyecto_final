/**
 * F6-04 — Plantillas VBLang OFICIALES para EconomiaAR.
 *
 * Cubre los 3 templates de `src/templates/economia-ar-oficiales.ts`
 * (`recibo_basico`, `descuentos_obligatorios`, `monotributo`):
 * 1. Pipeline completo `parse -> lint -> compile -> validate` (100
 *    simulaciones) sin errores.
 * 2. `respuesta` generada coincide con el cálculo esperado, recalculado
 *    de forma independiente a partir de las variables generadas (paridad
 *    con la fórmula de `genAportes17`/`genNetoDesdeBruto` de
 *    `EconomiaAR.ts` para los aportes del 11/3/3/17%, y con la tabla de
 *    categorías para monotributo).
 * 3. Adapter `toModuleQuizQuestion`: tipo `input`, `unidad`, tolerancia y
 *    `explanation` propagados.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import {
  ECONOMIA_AR_OFICIALES,
  type PlantillaOficialEconomiaAR,
} from "../../src/templates/economia-ar-oficiales.js";

function porId(id: string): PlantillaOficialEconomiaAR {
  const t = ECONOMIA_AR_OFICIALES.find((p) => p.id === id);
  if (!t) throw new Error(`plantilla no encontrada: ${id}`);
  return t;
}

describe("F6-04: ECONOMIA_AR_OFICIALES", () => {
  it("expone exactamente 3 plantillas (recibo_basico, descuentos_obligatorios, monotributo)", () => {
    expect(ECONOMIA_AR_OFICIALES).toHaveLength(3);
    expect(ECONOMIA_AR_OFICIALES.map((p) => p.subtipoOriginal)).toEqual([
      "recibo_basico",
      "descuentos_obligatorios",
      "monotributo",
    ]);
  });

  for (const plantilla of ECONOMIA_AR_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors).toEqual([]);

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `f6-04-${plantilla.subtipoOriginal}`,
        });
        expect(report.errors).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });
    });
  }

  describe("oficial-economia-ar-recibo-basico", () => {
    const plantilla = porId("oficial-economia-ar-recibo-basico");
    const compiled = compile(parse(plantilla.codigoDsl));

    it("respuesta = basico + adicional_antiguedad + pago_horas_extra (cálculo independiente)", () => {
      for (const seed of ["s1", "s2", "s3", "s4", "s5"]) {
        const r = generate(compiled, { seed });
        const basico = r.variables.basico as number;
        const aniosAntiguedad = r.variables.anios_antiguedad as number;
        const horasExtra = r.variables.horas_extra as number;

        const adicionalAntiguedad = Math.round(basico * aniosAntiguedad * 0.01);
        const valorHoraExtra = Math.round((basico / 200) * 1.5);
        const pagoHorasExtra = horasExtra * valorHoraExtra;
        const esperado = basico + adicionalAntiguedad + pagoHorasExtra;

        expect(r.respuesta).toBe(esperado);
        expect(r.variables.adicional_antiguedad).toBe(adicionalAntiguedad);
        expect(r.variables.valor_hora_extra).toBe(valorHoraExtra);
        expect(r.variables.pago_horas_extra).toBe(pagoHorasExtra);
      }
    });

    it("básico es múltiplo de 10000 entre 60000 y 150000", () => {
      const r = generate(compiled, { seed: "rango" });
      const basico = r.variables.basico as number;
      expect(basico % 10000).toBe(0);
      expect(basico).toBeGreaterThanOrEqual(60000);
      expect(basico).toBeLessThanOrEqual(150000);
    });

    it("explicacion y pasos quedan materializados con los valores generados", () => {
      const r = generate(compiled, { seed: "explica" });
      expect(r.explicacion).toBeDefined();
      expect(r.explicacion).toContain(`$ ${r.respuesta}`);
      expect(r.pasos).toBeDefined();
      expect(r.pasos).toHaveLength(4);
    });

    it("adapter: tipo input, unidad $, tolerancia absoluta 1 y explanation presente", () => {
      const r = generate(compiled, { seed: "adapter" });
      const q = toModuleQuizQuestion(r, { id: "q1" });
      expect(q.questionType).toBe("input");
      expect(q.unidades).toEqual({ resultado: "$" });
      expect(q.toleranciaAbsoluta).toBe(1);
      expect(q.explanation).toBe(r.explicacion);
      expect(q.answerKey).toBe(String(r.respuesta));
    });
  });

  describe("oficial-economia-ar-descuentos-obligatorios", () => {
    const plantilla = porId("oficial-economia-ar-descuentos-obligatorios");
    const compiled = compile(parse(plantilla.codigoDsl));

    const PORCENTAJES: Record<string, number> = {
      Jubilación: 11,
      "Obra Social": 3,
      PAMI: 3,
      "el total de aportes obligatorios": 17,
    };

    it("descuento = redondear(bruto * porcentaje / 100) para los 4 conceptos posibles (11/3/3/17%)", () => {
      for (const seed of ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"]) {
        const r = generate(compiled, { seed });
        const bruto = r.variables.bruto as number;
        const concepto = r.variables.concepto as {
          nombre: string;
          porcentaje: number;
        };

        expect(PORCENTAJES).toHaveProperty(concepto.nombre);
        expect(concepto.porcentaje).toBe(PORCENTAJES[concepto.nombre]);

        const esperado = Math.round((bruto * concepto.porcentaje) / 100);
        expect(r.respuesta).toBe(esperado);
        expect(r.variables.descuento).toBe(esperado);
      }
    });

    it("bruto es múltiplo de 1000 entre 60000 y 150000", () => {
      const r = generate(compiled, { seed: "rango-bruto" });
      const bruto = r.variables.bruto as number;
      expect(bruto % 1000).toBe(0);
      expect(bruto).toBeGreaterThanOrEqual(60000);
      expect(bruto).toBeLessThanOrEqual(150000);
    });

    it("el total de los 3 conceptos individuales coincide con el 17% (paridad con genAportes17)", () => {
      const bruto = 100000;
      const totalAportes17 = Math.round(bruto * 0.17);
      const suma =
        Math.round((bruto * 11) / 100) +
        Math.round((bruto * 3) / 100) +
        Math.round((bruto * 3) / 100);
      expect(suma).toBe(totalAportes17);
    });

    it("adapter: tipo input, unidad $, explanation y pasos interpolados con {concepto.nombre}", () => {
      const r = generate(compiled, { seed: "adapter-desc" });
      const q = toModuleQuizQuestion(r, { id: "q2" });
      expect(q.questionType).toBe("input");
      expect(q.unidades).toEqual({ resultado: "$" });
      expect(q.toleranciaAbsoluta).toBe(1);
      expect(q.explanation).toContain(
        (r.variables.concepto as { nombre: string }).nombre,
      );
      expect(r.pasos?.[0]).toContain(
        (r.variables.concepto as { nombre: string }).nombre,
      );
    });
  });

  describe("oficial-economia-ar-monotributo", () => {
    const plantilla = porId("oficial-economia-ar-monotributo");
    const compiled = compile(parse(plantilla.codigoDsl));

    const CATEGORIAS = [
      { nombre: "A", limite: 6_000_000, cuota: 30_000 },
      { nombre: "B", limite: 9_000_000, cuota: 35_000 },
      { nombre: "C", limite: 12_000_000, cuota: 45_000 },
      { nombre: "D", limite: 15_000_000, cuota: 58_000 },
      { nombre: "E", limite: 18_000_000, cuota: 73_000 },
    ];

    function categoriaEsperada(ingresos: number) {
      const cat = CATEGORIAS.find((c) => c.limite >= ingresos);
      if (!cat) throw new Error(`sin categoría para ingresos=${ingresos}`);
      return cat;
    }

    it("categoria = primera categoría cuyo límite >= ingresos_anuales, respuesta = categoria.cuota", () => {
      for (const seed of ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10"]) {
        const r = generate(compiled, { seed });
        const ingresos = r.variables.ingresos_anuales as number;
        const categoria = r.variables.categoria as {
          nombre: string;
          limite: number;
          cuota: number;
        };

        const esperada = categoriaEsperada(ingresos);
        expect(categoria.nombre).toBe(esperada.nombre);
        expect(categoria.cuota).toBe(esperada.cuota);
        expect(r.respuesta).toBe(esperada.cuota);
      }
    });

    it("ingresos_anuales es múltiplo de 100000 entre 4.000.000 y 18.000.000 (siempre matchea alguna categoría)", () => {
      for (const seed of ["rango-1", "rango-2", "rango-3"]) {
        const r = generate(compiled, { seed });
        const ingresos = r.variables.ingresos_anuales as number;
        expect(ingresos % 100_000).toBe(0);
        expect(ingresos).toBeGreaterThanOrEqual(4_000_000);
        expect(ingresos).toBeLessThanOrEqual(18_000_000);
        expect(r.variables.categoria).toBeDefined();
      }
    });

    it("adapter: tipo input, unidad $, explanation y pasos con {categoria.nombre}/{categoria.cuota}", () => {
      const r = generate(compiled, { seed: "adapter-mono" });
      const q = toModuleQuizQuestion(r, { id: "q3" });
      expect(q.questionType).toBe("input");
      expect(q.unidades).toEqual({ resultado: "$" });
      expect(q.toleranciaAbsoluta).toBe(1);
      const categoria = r.variables.categoria as { nombre: string; cuota: number };
      expect(q.explanation).toContain(categoria.nombre);
      expect(r.pasos?.[1]).toContain(String(categoria.cuota));
    });
  });
});
