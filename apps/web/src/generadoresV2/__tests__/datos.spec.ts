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
  let checkedQuiz = false;

  for (const descriptor of descriptors) {
    for (const subtipo of descriptor.subtipos) {
      const prng = new DeterministicPrng(`${descriptor.id}:${subtipo}:respuesta`);
      const ej = descriptor.generate("basico", prng, subtipo, "R:{respuesta}");
      if (ej.tipo !== "quiz") continue;
      checkedQuiz = true;
      assert.ok(
        ej.enunciado.startsWith("R:"),
        `${descriptor.id}/${subtipo}: {respuesta} template not applied, got: "${ej.enunciado}"`
      );
    }
  }

  assert.ok(checkedQuiz, "expected at least one quiz-typed exercise to verify {respuesta}");
});

test("template leaves unknown tokens literal instead of throwing", () => {
  const descriptors = allDescriptors();
  assert.ok(descriptors.length > 0);

  const d = descriptors[0];
  const subtipo = d.subtipos[0];
  const prng = new DeterministicPrng("unknown-token-test");
  const ej = d.generate("basico", prng, subtipo, "X:{noExiste}");

  assert.ok(
    ej.enunciado.includes("{noExiste}"),
    `unknown token should be left literal, got: "${ej.enunciado}"`
  );
});