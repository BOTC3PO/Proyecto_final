// @vitest-environment node
import { describe, test, expect } from "vitest";

import { DeterministicPrng } from "../core/prng";
import { getDescriptoresBiologia } from "../biologia/index";
import { getDescriptoresFisica } from "../fisica/index";
import { getDescriptoresMatematicas } from "../matematicas/index";
import { getDescriptoresQuimica } from "../quimica/index";
import { getDescriptoresEconomia } from "../economia/index";
import { getDescriptoresInformatica } from "../informatica/index";

const TEMPLATE = "TMPL:{subtipo}";

function allDescriptors() {
  const prng = new DeterministicPrng(42);
  return [
    ...getDescriptoresBiologia(prng),
    ...getDescriptoresFisica(prng),
    ...getDescriptoresMatematicas(prng),
    ...getDescriptoresQuimica(prng),
    ...getDescriptoresEconomia(prng),
    ...getDescriptoresInformatica(prng),
  ];
}

describe("applyEnunciadoTemplateExt", () => {
  test("applies template even when generator emits no datos", () => {
    const descriptors = allDescriptors();
    expect(descriptors.length).toBeGreaterThan(0);

    for (const descriptor of descriptors) {
      for (const subtipo of descriptor.subtipos) {
        const prng = new DeterministicPrng(`${descriptor.id}:${subtipo}`);
        const ejercicio = descriptor.generate("basico", prng, subtipo, TEMPLATE);

        expect(
          ejercicio.enunciado.startsWith("TMPL:"),
          `${descriptor.id}/${subtipo}: expected template to be applied, got: "${ejercicio.enunciado}"`
        ).toBe(true);
        expect(
          ejercicio.enunciado.includes("{subtipo}"),
          `${descriptor.id}/${subtipo}: {subtipo} token was not substituted in: "${ejercicio.enunciado}"`
        ).toBe(false);
      }
    }
  });

  test("template substitution exposes respuesta for quiz exercises", () => {
    const descriptors = allDescriptors();
    let checkedQuiz = false;

    for (const descriptor of descriptors) {
      for (const subtipo of descriptor.subtipos) {
        const prng = new DeterministicPrng(`${descriptor.id}:${subtipo}:respuesta`);
        const ej = descriptor.generate("basico", prng, subtipo, "R:{respuesta}");
        if (ej.tipo !== "quiz") continue;
        checkedQuiz = true;
        expect(
          ej.enunciado.startsWith("R:"),
          `${descriptor.id}/${subtipo}: {respuesta} template not applied, got: "${ej.enunciado}"`
        ).toBe(true);
      }
    }

    expect(checkedQuiz).toBe(true);
  });

  test("template leaves unknown tokens literal instead of throwing", () => {
    const descriptors = allDescriptors();
    expect(descriptors.length).toBeGreaterThan(0);

    const d = descriptors[0];
    const subtipo = d.subtipos[0];
    const prng = new DeterministicPrng("unknown-token-test");
    const ej = d.generate("basico", prng, subtipo, "X:{noExiste}");

    expect(ej.enunciado.includes("{noExiste}")).toBe(true);
  });
});
