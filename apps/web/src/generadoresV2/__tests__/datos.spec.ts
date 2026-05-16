import test from "node:test";
import assert from "node:assert/strict";

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

test("applyEnunciadoTemplateExt applies template even when generator emits no datos", () => {
  const descriptors = allDescriptors();
  assert.ok(descriptors.length > 0, "catalog should not be empty");

  for (const descriptor of descriptors) {
    for (const subtipo of descriptor.subtipos) {
      const prng = new DeterministicPrng(`${descriptor.id}:${subtipo}`);
      const ejercicio = descriptor.generate("basico", prng, subtipo, TEMPLATE);

      assert.ok(
        ejercicio.enunciado.startsWith("TMPL:"),
        `${descriptor.id}/${subtipo}: expected template to be applied, got: "${ejercicio.enunciado}"`
      );
      assert.ok(
        !ejercicio.enunciado.includes("{subtipo}"),
        `${descriptor.id}/${subtipo}: {subtipo} token was not substituted in: "${ejercicio.enunciado}"`
      );
    }
  }
});

test("template substitution exposes respuesta for quiz exercises", () => {
  const descriptors = allDescriptors();
  const quizDescriptors = descriptors.filter(d =>
    d.subtipos.some(st => {
      const prng = new DeterministicPrng(`check:${d.id}:${st}`);
      const ej = d.generate("basico", prng, st);
      return ej.tipo === "quiz";
    })
  );

  for (const descriptor of quizDescriptors) {
    const subtipo = descriptor.subtipos[0];
    const prng = new DeterministicPrng(`${descriptor.id}:${subtipo}:respuesta`);
    const ejercicio = descriptor.generate("basico", prng, subtipo, "R:{respuesta}");

    assert.ok(
      ejercicio.enunciado.startsWith("R:"),
      `${descriptor.id}/${subtipo}: {respuesta} template not applied, got: "${ejercicio.enunciado}"`
    );
  }
});
