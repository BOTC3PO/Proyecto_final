/**
 * F6-03 — Tests del banco estático de Matemáticas.
 *
 *  - 1 banco: matematicas_algebra_lenguaje_algebraico.
 *  - 17 preguntas: 7 basico + 5 intermedio + 5 avanzado (preguntas con
 *    tag de dificultad).
 *  - Tags: subtipo:lenguaje_algebraico, dificultad:<basico|intermedio|avanzado>,
 *    materia matematicas.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { clearBancoTemplates, getDescriptoresBasic } from "../../../basic/banco";
import { DeterministicPrng } from "../../../core/prng";
import { BANCOS_MATEMATICAS } from "..";
import type { MCQuestion } from "../../../basic/types";

const ALL = BANCOS_MATEMATICAS as ReadonlyArray<readonly [string, MCQuestion[]]>;

const TOTAL_BANCOS = 1;
const TOTAL_PREGUNTAS = 17;

beforeEach(() => clearBancoTemplates());
afterEach(() => clearBancoTemplates());

describe("F6-03 matemáticas — Inventario", () => {
  it("hay exactamente 1 banco: matematicas_algebra_lenguaje_algebraico", () => {
    expect(ALL).toHaveLength(TOTAL_BANCOS);
    expect(ALL[0][0]).toBe("matematicas_algebra_lenguaje_algebraico");
  });

  it("el banco tiene 17 preguntas (7 basico + 5 intermedio + 5 avanzado)", () => {
    expect(ALL[0][1]).toHaveLength(TOTAL_PREGUNTAS);
  });

  it("la distribución por dificultad es 7/5/5", () => {
    const counts = { basico: 0, intermedio: 0, avanzado: 0 };
    for (const q of ALL[0][1]) {
      const tag = q.tags.find((t) => t.startsWith("dificultad:"));
      if (tag === "dificultad:basico") counts.basico += 1;
      else if (tag === "dificultad:intermedio") counts.intermedio += 1;
      else if (tag === "dificultad:avanzado") counts.avanzado += 1;
    }
    expect(counts).toEqual({ basico: 7, intermedio: 5, avanzado: 5 });
  });
});

describe("F6-03 matemáticas — Validez MCQuestion", () => {
  it("toda pregunta es MCQuestion con type === 'mc' y exactamente 1 correct:true", () => {
    for (const [id, qs] of ALL) {
      for (const q of qs) {
        expect(q.type, q.id).toBe("mc");
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        const correctas = q.options.filter((o) => o.correct);
        expect(correctas, q.id).toHaveLength(1);
        expect(q.explanation.length, q.id).toBeGreaterThan(0);
      }
    }
  });

  it("toda pregunta tiene tag subtipo:lenguaje_algebraico + materia matematicas", () => {
    for (const [, qs] of ALL) {
      for (const q of qs) {
        expect(q.tags).toContain("subtipo:lenguaje_algebraico");
        expect(q.tags).toContain("matematicas");
      }
    }
  });

  it("toda pregunta tiene prompt del estilo 'Traduce la expresión verbal...'", () => {
    for (const [, qs] of ALL) {
      for (const q of qs) {
        expect(q.prompt).toMatch(/^Traduce la expresión verbal al lenguaje algebraico: /);
      }
    }
  });
});

describe("F6-03 matemáticas — Integración con framework basic/banco", () => {
  it("registerBancosMatematicas inscribe 1 template con materia matematicas", async () => {
    const { registerBancosMatematicas } = await import("..");
    const tpls = registerBancosMatematicas();
    expect(tpls).toHaveLength(TOTAL_BANCOS);
    expect(tpls[0].metadata.materia).toBe("matematicas");
    expect(tpls[0].pool).toHaveLength(TOTAL_PREGUNTAS);
  });

  it("getDescriptoresBasic devuelve el descriptor con id 'basic/matematicas_algebra_lenguaje_algebraico'", async () => {
    const { registerBancosMatematicas } = await import("..");
    registerBancosMatematicas();
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    expect(descriptores).toHaveLength(TOTAL_BANCOS);
    expect(descriptores[0].id).toBe("basic/matematicas_algebra_lenguaje_algebraico");
    expect(descriptores[0].materia).toBe("matematicas");
  });
});
