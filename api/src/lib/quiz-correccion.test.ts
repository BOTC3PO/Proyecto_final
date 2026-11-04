/**
 * Corrección de `completar` con varias respuestas aceptables (`respuestas_validas`): el adaptador de VBLang las manda
 * como lista en `answerKey`. Antes se corregían como una opción múltiple (había que mandar la lista entera) y una
 * respuesta de texto nunca contaba, aunque la vista previa del docente la daba por buena.
 */
import assert from "node:assert/strict";
import test from "node:test";

import { buildFeedback, gradeAnswers, type ModuleQuiz } from "./quiz-correccion";

const quiz: ModuleQuiz = {
  questions: [
    { id: "c1", questionType: "completar", answerKey: ["136"] },
    { id: "c2", questionType: "completar", answerKey: ["Buenos Aires", "CABA"] },
    { id: "m1", questionType: "mc", multiple: true, answerKey: ["a", "b"] },
  ],
};

test("completar: alcanza con una de las respuestas aceptables", () => {
  const r = gradeAnswers(quiz, { c1: "136", c2: "CABA", m1: ["a", "b"] });
  assert.equal(r.score, 3);
  const f = buildFeedback(quiz, { c1: "136", c2: "CABA", m1: ["a", "b"] });
  assert.deepEqual([f.c1.correct, f.c2.correct, f.m1.correct], [true, true, true]);
});

test("completar: una respuesta que no está en la lista sigue mal", () => {
  assert.equal(gradeAnswers(quiz, { c1: "135", c2: "Rosario" }).score, 0);
  assert.equal(buildFeedback(quiz, { c1: "135" }).c1.correct, false);
});

test("opción múltiple: sigue pidiendo todas las correctas", () => {
  assert.equal(gradeAnswers(quiz, { m1: ["a"] }).score, 0);
  assert.equal(gradeAnswers(quiz, { m1: "a" }).score, 0);
});
