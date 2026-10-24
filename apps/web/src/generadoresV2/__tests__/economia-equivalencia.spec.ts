/**
 * WO-7c — Contrato de equivalencia generador↔plantilla para Economía
 * General.
 *
 * Patrón de oráculo compartido (ver
 * `docs/vblang/porting-generadores.md`):
 *   - `oracle(inputs) → expected`: la fórmula matemática.
 *   - `inputsFromGenerator(enunciado)`: extrae los inputs del enunciado.
 *   - `inputsFromTemplate(result.variables)`: lee los inputs sorteados.
 *
 * Cubre las ramas numéricas del `EconomiaGeneralGenerator` (el
 * generador también tiene muchas ramas MC/conceptuales, fuera del
 * alcance de WO-7c).
 */
import { describe, expect, it } from "vitest";
import {
  compile,
  generate,
  parse,
  type CompiledPlantilla,
} from "@vb/vblang";
import { ECONOMIA_GENERAL_OFICIALES } from "@vb/vblang";
import { EconomiaGeneralGenerator } from "../economia/EconomiaGeneral";
import { DeterministicPrng } from "../core/prng";
import type { Calculator, Dificultad } from "../core/types";

const NOOP_CALC: Calculator = { calcular: () => ({ resultado: 0, pasos: [] }) };

type Inputs = Record<string, any>; // C3 (PLAN-CORRECCIONES): valores mixtos number/string (variante/direccion) — ver nota de tipos arriba.

interface PortCase {
  subtipoOriginal: string;
  generatorSubtipo: string;
  dificultad: Dificultad;
  oracle: (inp: Inputs) => number;
  inputsFromGenerator: (enunciado: string) => Inputs | null;
  inputsFromTemplate: (vars: Record<string, unknown>) => Inputs;
  tol: number;
}

const CASES: PortCase[] = [
  {
    subtipoOriginal: "ganancia_perdida",
    generatorSubtipo: "ganancia_perdida",
    dificultad: "basico",
    // El generador reporta el valor ABSOLUTO precedido por "Ganancia"
    // o "Pérdida". El oráculo es IT - CT (con signo). El test compara
    // con Math.abs en la rama de GENERADOR para aceptar ambas
    // presentaciones.
    oracle: (i) => i.IT - i.CT,
    inputsFromGenerator: (e) => {
      // El enunciado es multilínea:
      //   "Una actividad económica obtiene un Ingreso Total (IT) de $ 67.000 y un Costo Total (CT) de $ 131.000.
      //    ¿Cuál es el resultado ..."
      // El número viene con `.` como separador de miles (locale
      // es-AR) y puede tener un punto al final. Buscamos todos los
      // números y los asociamos por posición (IT primero, CT después).
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 2) return null;
      return { IT: nums[0], CT: nums[1] };
    },
    inputsFromTemplate: (v) => ({
      IT: Number(v.ingresoTotal),
      CT: Number(v.costoTotal),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "resultado_bruto",
    generatorSubtipo: "resultado_bruto",
    dificultad: "basico",
    oracle: (i) => i.ventas - i.costoVentas,
    inputsFromGenerator: (e) => {
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 2) return null;
      return { ventas: nums[0], costoVentas: nums[1] };
    },
    inputsFromTemplate: (v) => ({
      ventas: Number(v.ventas),
      costoVentas: Number(v.costoVentas),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "resultado_neto",
    generatorSubtipo: "resultado_neto",
    dificultad: "basico",
    oracle: (i) => i.RB - i.gastos,
    inputsFromGenerator: (e) => {
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 2) return null;
      return { RB: nums[0], gastos: nums[1] };
    },
    inputsFromTemplate: (v) => ({
      RB: Number(v.resultadoBruto),
      gastos: Number(v.gastos),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "margen_bruto",
    generatorSubtipo: "margen_bruto",
    dificultad: "basico",
    oracle: (i) => Math.round(((i.ventas - i.costoVentas) / i.ventas) * 100),
    inputsFromGenerator: (e) => {
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 2) return null;
      return { ventas: nums[0], costoVentas: nums[1] };
    },
    inputsFromTemplate: (v) => ({
      ventas: Number(v.ventas),
      costoVentas: Number(v.costoVentas),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "margen_neto",
    generatorSubtipo: "margen_neto",
    dificultad: "basico",
    oracle: (i) => Math.round((i.RN / i.ventas) * 100),
    inputsFromGenerator: (e) => {
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 2) return null;
      return { ventas: nums[0], RN: nums[1] };
    },
    inputsFromTemplate: (v) => ({
      ventas: Number(v.ventas),
      RN: Number(v.resultadoNeto),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "capital_trabajo",
    generatorSubtipo: "capital_trabajo",
    dificultad: "basico",
    oracle: (i) => i.AC - i.PC,
    inputsFromGenerator: (e) => {
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 2) return null;
      return { AC: nums[0], PC: nums[1] };
    },
    inputsFromTemplate: (v) => ({
      AC: Number(v.activoCorriente),
      PC: Number(v.pasivoCorriente),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "punto_equilibrio",
    generatorSubtipo: "punto_equilibrio",
    dificultad: "basico",
    oracle: (i) => Math.round(i.CF / (i.P - i.CVu)),
    inputsFromGenerator: (e) => {
      // "Costos Fijos de $ X.\nVende su producto a $ P por unidad y el
      // costo variable unitario (CVu) es de $ Y."
      const nums = [...e.matchAll(/\$ ([\d.]+)/g)].map((m) => Number(m[1].replace(/\./g, "")));
      if (nums.length < 3) return null;
      return { CF: nums[0], P: nums[1], CVu: nums[2] };
    },
    inputsFromTemplate: (v) => ({
      CF: Number(v.costoFijo),
      P: Number(v.precioUnitario),
      CVu: Number(v.costoVariableUnitario),
    }),
    tol: 0,
  },
  {
    subtipoOriginal: "productividad",
    generatorSubtipo: "productividad",
    dificultad: "basico",
    oracle: (i) => Math.round((i.produccion / i.insumo) * 10) / 10,
    inputsFromGenerator: (e) => {
      // "se producen X unidades usando Y unidades de insumo (horas de trabajo)."
      // X viene con `.` como separador de miles (es-AR): "1.423" → 1423.
      const m = e.match(/producen ([\d.]+) unidades usando ([\d.]+) unidades de insumo/);
      if (!m) return null;
      return {
        produccion: Number(m[1].replace(/\./g, "")),
        insumo: Number(m[2].replace(/\./g, "")),
      };
    },
    inputsFromTemplate: (v) => ({
      produccion: Number(v.produccion),
      insumo: Number(v.insumo),
    }),
    tol: 0.05,
  },
  // Los 3 subtipos de `porcentajes_simples` (descuento, aumento, impuesto)
  // se prueban como una sola categoría con el discriminador `tipo`.
  {
    subtipoOriginal: "porcentajes_simples",
    generatorSubtipo: "porcentajes_simples",
    dificultad: "basico",
    oracle: (i) => Math.round(i.base * (i.signo === -1 ? (1 - i.pct / 100) : (1 + i.pct / 100))),
    inputsFromGenerator: (e) => {
      // Detectar tipo:
      //   descuento: "tiene un descuento del {pct}%"
      //   aumento:   "aumenta un {pct}%"
      //   impuesto:  "impuesto simple del {pct}%"
      // Y extraer base y pct.
      let signo: number;
      if (e.includes("descuento")) signo = -1;
      else if (e.includes("aumenta")) signo = 1;
      else if (e.includes("impuesto")) signo = 1;
      else return null;
      const m = e.match(/\$ ([\d.]+).*?(\d+)%/);
      if (!m) return null;
      // base viene con `.` como separador de miles (es-AR):
      // "$ 58.000" → 58000.
      return {
        base: Number(m[1].replace(/\./g, "")),
        pct: Number(m[2]),
        signo,
      };
    },
    inputsFromTemplate: (v) => ({
      base: Number(v.base),
      pct: Number(v.pct),
      // signo viene del template (implícito en la rama).
      // Como hay 3 plantillas, el "signo" se deduce del id al matchear.
      signo: 0,
    }),
    tol: 0,
  },
];

const SEEDS = Array.from({ length: 50 }, (_v, i) => `wo7c-economia-${i}`);

function compiledFor(subtipoOriginal: string, branch?: string): CompiledPlantilla {
  const matching = ECONOMIA_GENERAL_OFICIALES.filter(
    (p) => p.subtipoOriginal === subtipoOriginal,
  );
  if (matching.length === 0) {
    throw new Error(`plantilla no encontrada para ${subtipoOriginal}`);
  }
  // Para subtipos con múltiples ramas (porcentajes_simples), elegimos
  // por el discriminador de la rama.
  if (branch === "descuento") {
    const t = matching.find((p) => p.id.includes("descuento"));
    if (!t) throw new Error("plantilla descuento no encontrada");
    return compile(parse(t.codigoDsl));
  }
  if (branch === "aumento") {
    const t = matching.find((p) => p.id.includes("aumento"));
    if (!t) throw new Error("plantilla aumento no encontrada");
    return compile(parse(t.codigoDsl));
  }
  if (branch === "impuesto") {
    const t = matching.find((p) => p.id.includes("impuesto"));
    if (!t) throw new Error("plantilla impuesto no encontrada");
    return compile(parse(t.codigoDsl));
  }
  // Para los demás, hay una sola plantilla por subtipo.
  return compile(parse(matching[0]!.codigoDsl));
}

function generatorAnswer(
  c: PortCase,
  seed: string,
): { enunciado: string; answer: string } {
  const gen = new EconomiaGeneralGenerator(new DeterministicPrng(seed));
  const ej = gen.generarEjercicio(c.generatorSubtipo, c.dificultad, NOOP_CALC);
  if (ej.tipo !== "quiz") {
    throw new Error(`esperaba quiz para ${c.generatorSubtipo}, recibió ${ej.tipo}`);
  }
  return {
    enunciado: ej.enunciado,
    answer: String(ej.opciones[ej.indiceCorrecto]),
  };
}

describe("WO-7c — equivalencia generador↔plantilla (Economía General)", () => {
  it("las 11 plantillas oficiales existen con subtipoOriginal correcto", () => {
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

  for (const c of CASES) {
    describe(c.subtipoOriginal, () => {
      it("GENERADOR real ≡ oráculo (sobre sus inputs sorteados)", () => {
        let matched = 0;
        for (const seed of SEEDS) {
          const { enunciado, answer } = generatorAnswer(c, seed);
          const inp = c.inputsFromGenerator(enunciado);
          if (inp === null) continue;
          matched += 1;
          const expected = c.oracle(inp);
          // El generator produce respuestas con prefijos ("Ganancia de $", "Pérdida de $")
          // o con sufijo "%". La locale es es-AR donde `.` es separador
          // de miles y `,` es decimal (ej "$ 14.000" = 14000, "50 %" = 50).
          // Para `ganancia_perdida`, el generador devuelve el valor
          // ABSOLUTO (con prefijo "Ganancia" o "Pérdida"). Comparamos
          // con Math.abs del oráculo.
          const numStr = answer.match(/-?[\d.,]+/);
          if (!numStr) continue;
          // Quitamos TODOS los puntos (separador de miles) y dejamos
          // la coma como separador decimal. "14.000" → "14000".
          const cleaned = numStr[0].replace(/\./g, "").replace(",", ".");
          const numAnswer = Number(cleaned);
          // Algunos generadores devuelven el valor ABSOLUTO con
          // prefijos ("Pérdida de $", "Pérdida neta de $"). Comparamos
          // con Math.abs del oráculo.
          const compareValue =
            c.subtipoOriginal === "ganancia_perdida" ||
            c.subtipoOriginal === "resultado_neto"
              ? Math.abs(expected)
              : expected;
          expect(
            Math.abs(numAnswer - compareValue) <= c.tol,
            `seed ${seed}: enunciado="${enunciado}" answer="${answer}" expected=${expected}`,
          ).toBe(true);
        }
        expect(
          matched,
          `ejercicios del generador que matchearon ${c.subtipoOriginal}`,
        ).toBeGreaterThan(5);
      });

      it("PLANTILLA real ≡ oráculo (sobre sus inputs sorteados)", () => {
        // Para `porcentajes_simples`, probamos las 3 ramas por separado.
        if (c.subtipoOriginal === "porcentajes_simples") {
          for (const branch of ["descuento", "aumento", "impuesto"] as const) {
            const compiled = compiledFor(c.subtipoOriginal, branch);
            for (const seed of SEEDS) {
              const result = generate(compiled, { seed });
              const inp = c.inputsFromTemplate(result.variables);
              // Determinamos el signo según la rama.
              const signo = branch === "descuento" ? -1 : 1;
              const expected = Math.round(
                inp.base * (signo === -1 ? (1 - inp.pct / 100) : (1 + inp.pct / 100)),
              );
              const respuesta = result.respuesta as number;
              expect(
                Math.abs(respuesta - expected) <= c.tol,
                `[${branch}] seed ${seed}: respuesta=${respuesta} expected=${expected} inputs=${JSON.stringify(inp)}`,
              ).toBe(true);
            }
          }
          return;
        }
        const compiled = compiledFor(c.subtipoOriginal);
        for (const seed of SEEDS) {
          const result = generate(compiled, { seed });
          const inp = c.inputsFromTemplate(result.variables);
          const expected = c.oracle(inp);
          const respuesta = result.respuesta as number;
          expect(
            Math.abs(respuesta - expected) <= c.tol,
            `seed ${seed}: respuesta=${respuesta} expected=${expected} inputs=${JSON.stringify(inp)}`,
          ).toBe(true);
        }
      });
    });
  }
});
