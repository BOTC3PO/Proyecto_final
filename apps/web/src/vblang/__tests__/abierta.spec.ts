/**
 * WO07 — pregunta abierta end-to-end en el reproductor (web).
 *
 * Verifica que `runPlantilla` (parse + compile + generate + adapt) materializa
 * una pregunta `abierta` con el shape `ModuleQuizQuestion` que el reproductor
 * espera: sin `answerKey`, con `correccion`, y `manualGrading` cuando el modo
 * es `manual`.
 */
import { describe, expect, it } from "vitest";
import { runPlantilla } from "../runPlantilla";

describe("abierta · runPlantilla", () => {
  it("manual: sin answerKey, con correccion y manualGrading", () => {
    const q = runPlantilla(
      `enunciado: "Explicá la fotosíntesis."\ntipo: abierta\ncorreccion: manual\n`,
      { seed: "s1" },
    );
    expect(q.questionType).toBe("abierta");
    expect(q.answerKey).toBeUndefined();
    expect(q.correccion).toBe("manual");
    expect(q.manualGrading).toBe(true);
    expect(q.prompt).toContain("fotosíntesis");
  });

  it("ninguna: informativa, sin answerKey ni manualGrading", () => {
    const q = runPlantilla(
      `enunciado: "Contanos qué aprendiste."\ntipo: abierta\ncorreccion: ninguna\n`,
      { seed: "s2" },
    );
    expect(q.questionType).toBe("abierta");
    expect(q.answerKey).toBeUndefined();
    expect(q.correccion).toBe("ninguna");
    expect(q.manualGrading).toBeUndefined();
  });
});
