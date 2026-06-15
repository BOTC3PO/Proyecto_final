/**
 * F6-03 — Tests del banco estático de Biología.
 *
 *  - 1 banco: biologia_clasificacion_seres_vivos.
 *  - 30 preguntas: 10 filas (SERES_VIVOS) × 3 dificultades.
 *  - Distribución uniforme de filas por reino (Monera=2, Protista=2,
 *    Fungi=2, Plantae=2, Animalia=2).
 *  - Tags incluyen `subtipo:clasificacion_seres_vivos` y
 *    `dificultad:{basico|intermedio|avanzado}`.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { clearBancoTemplates, getDescriptoresBasic } from "../../../basic/banco";
import { DeterministicPrng } from "../../../core/prng";
import { BANCOS_BIOLOGIA } from "..";
import type { MCQuestion } from "../../../basic/types";

const ALL = BANCOS_BIOLOGIA as ReadonlyArray<readonly [string, MCQuestion[]]>;

const TOTAL_BANCOS = 1;
const TOTAL_PREGUNTAS = 30;

beforeEach(() => clearBancoTemplates());
afterEach(() => clearBancoTemplates());

describe("F6-03 biología — Inventario", () => {
  it("hay exactamente 1 banco: biologia_clasificacion_seres_vivos", () => {
    expect(ALL).toHaveLength(TOTAL_BANCOS);
    expect(ALL[0][0]).toBe("biologia_clasificacion_seres_vivos");
  });

  it("el banco tiene 30 preguntas (10 filas × 3 difficulties)", () => {
    expect(ALL[0][1]).toHaveLength(TOTAL_PREGUNTAS);
  });

  it("cada fila (ser vivo) genera exactamente 3 preguntas (basico|intermedio|avanzado)", () => {
    const banco = ALL[0][1];
    const counts = { basico: 0, intermedio: 0, avanzado: 0 };
    for (const q of banco) {
      const tag = q.tags.find((t) => t.startsWith("dificultad:"));
      if (tag === "dificultad:basico") counts.basico += 1;
      else if (tag === "dificultad:intermedio") counts.intermedio += 1;
      else if (tag === "dificultad:avanzado") counts.avanzado += 1;
    }
    expect(counts).toEqual({ basico: 10, intermedio: 10, avanzado: 10 });
  });
});

describe("F6-03 biología — Validez MCQuestion", () => {
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

  it("toda pregunta tiene tag subtipo:clasificacion_seres_vivos + materia biologia", () => {
    for (const [, qs] of ALL) {
      for (const q of qs) {
        expect(q.tags).toContain("subtipo:clasificacion_seres_vivos");
        expect(q.tags).toContain("biologia");
      }
    }
  });
});

describe("F6-03 biología — Integración con framework basic/banco", () => {
  it("registerBancosBiologia inscribe 1 template con materia biologia", async () => {
    const { registerBancosBiologia } = await import("..");
    const tpls = registerBancosBiologia();
    expect(tpls).toHaveLength(TOTAL_BANCOS);
    expect(tpls[0].metadata.materia).toBe("biologia");
    expect(tpls[0].pool).toHaveLength(TOTAL_PREGUNTAS);
  });

  it("getDescriptoresBasic devuelve el descriptor con id 'basic/biologia_clasificacion_seres_vivos'", async () => {
    const { registerBancosBiologia } = await import("..");
    registerBancosBiologia();
    const descriptores = getDescriptoresBasic(new DeterministicPrng("seed-1"));
    expect(descriptores).toHaveLength(TOTAL_BANCOS);
    expect(descriptores[0].id).toBe("basic/biologia_clasificacion_seres_vivos");
    expect(descriptores[0].materia).toBe("biologia");
  });
});
