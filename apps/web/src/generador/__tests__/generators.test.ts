import assert from "node:assert/strict";
import test from "node:test";

import { QuizGenerator } from "../basic/basicGenerador";
import { adaptBasicQuizInstance } from "../basic/adapters";
import { BASIC_TEMPLATES } from "../basic/juegosBasicos";
import { parseBasicGenerateOptions } from "../basic/schemas";
import { createPrng } from "../core/prng";
import { parseEconomiaParams } from "../economia/schemas";
import { GENERADORES_ECONOMIA_DESCRIPTORES } from "../economia/indexEconomia";
import { toCorrection as toEconomiaCorrection } from "../economia/adapters";
import { crearCalculadoraFisica } from "../fisica/calculadora";
import { MRUGenerator } from "../fisica/MRU";
import { parseFisicaParametros } from "../fisica/schemas";
import { GENERADORES_MATEMATICAS_POR_TEMA } from "../matematicas";
import { toCorrection as toMathCorrection } from "../matematicas/adapters";
import { parseMatematicasParams } from "../matematicas/schemas";
import { GENERADORES_QUIMICA_DESCRIPTORES } from "../quimica/indexQuimica";
import { toCorrection as toQuimicaCorrection } from "../quimica/adapters";
import { parseQuimicaParams } from "../quimica/schemas";

const assertFiniteDeep = (value: unknown, path = "root", seen = new WeakSet<object>()) => {
  if (typeof value === "number") {
    assert.ok(
      Number.isFinite(value),
      `Se esperaba un número finito en ${path}, se recibió ${value}.`
    );
    return;
  }

  if (value && typeof value === "object") {
    const obj = value as object;
    if (seen.has(obj)) return;
    seen.add(obj);

    if (Array.isArray(value)) {
      value.forEach((entry, index) =>
        assertFiniteDeep(entry, `${path}[${index}]`, seen)
      );
      return;
    }

    Object.entries(value as Record<string, unknown>).forEach(([key, entry]) =>
      assertFiniteDeep(entry, `${path}.${key}`, seen)
    );
  }
};

test("basic: mismo seed y corrección consistente con recreación", () => {
  const template = BASIC_TEMPLATES.sumas_basicas;
  const generator = new QuizGenerator(template);
  const seed = "basic-seed";
  const instanceA = generator.generate({ seed, displayCount: 3, shuffleOptions: true });
  const instanceB = generator.generate({ seed, displayCount: 3, shuffleOptions: true });

  assert.deepStrictEqual(instanceA, instanceB);

  const bankA = adaptBasicQuizInstance(instanceA, template);
  const bankB = adaptBasicQuizInstance(instanceB, template);
  assert.deepStrictEqual(bankA.correction, bankB.correction);
  assert.strictEqual(generator.version, 1);
});

test("matemáticas: determinismo, corrección estable y sin NaN/Infinity", () => {
  const descriptor = GENERADORES_MATEMATICAS_POR_TEMA[1];
  const seed = "math-seed";
  const exerciseA = descriptor.generate("basico", { modo: "quiz" }, createPrng(seed));
  const exerciseB = descriptor.generate("basico", { modo: "quiz" }, createPrng(seed));

  assert.deepStrictEqual(exerciseA, exerciseB);
  assert.deepStrictEqual(toMathCorrection(exerciseA), toMathCorrection(exerciseB));
  assert.strictEqual(exerciseA.generatorVersion, 1);
  assertFiniteDeep(exerciseA);
});

test("física: determinismo, corrección estable y sin NaN/Infinity", () => {
  const seed = "fisica-seed";
  const params = {
    materia: "fisica" as const,
    categoria: "MRU",
    nivel: "basico" as const,
    opciones: {},
  };
  const calc = crearCalculadoraFisica();
  const exerciseA = new MRUGenerator(createPrng(seed)).generate(params, calc);
  const exerciseB = new MRUGenerator(createPrng(seed)).generate(params, calc);

  assert.deepStrictEqual(exerciseA, exerciseB);
  assert.strictEqual(exerciseA.generatorVersion, 1);
  assertFiniteDeep(exerciseA);

  const renderA = new MRUGenerator(createPrng(seed)).generateRenderable(params, calc);
  const renderB = new MRUGenerator(createPrng(seed)).generateRenderable(params, calc);
  assert.deepStrictEqual(renderA.correction, renderB.correction);
});

test("química: determinismo, corrección estable y sin NaN/Infinity", () => {
  const descriptor = GENERADORES_QUIMICA_DESCRIPTORES[1];
  const seed = "quimica-seed";
  const exerciseA = descriptor.generate("facil", createPrng(seed));
  const exerciseB = descriptor.generate("facil", createPrng(seed));

  assert.deepStrictEqual(exerciseA, exerciseB);
  assert.deepStrictEqual(toQuimicaCorrection(exerciseA), toQuimicaCorrection(exerciseB));
  assert.strictEqual(exerciseA.generatorVersion, 1);
  assertFiniteDeep(exerciseA);
});

test("economía: determinismo, corrección estable y sin NaN/Infinity", () => {
  const descriptor = GENERADORES_ECONOMIA_DESCRIPTORES["contabilidad/1"];
  const seed = "economia-seed";
  const exerciseA = descriptor.generate("basico", createPrng(seed));
  const exerciseB = descriptor.generate("basico", createPrng(seed));

  assert.deepStrictEqual(exerciseA, exerciseB);
  assert.deepStrictEqual(toEconomiaCorrection(exerciseA), toEconomiaCorrection(exerciseB));
  assert.strictEqual(exerciseA.generatorVersion, 1);
  assertFiniteDeep(exerciseA);
});

test("params inválidos entregan errores claros por materia", () => {
  assert.throws(
    () => parseBasicGenerateOptions({ seed: "seed", selection: { mode: "byTags" } }),
    /selección por tags requiere/i
  );

  assert.throws(
    () => parseMatematicasParams("imposible" as never),
    /Parámetros inválidos/i
  );

  assert.throws(
    () => parseQuimicaParams("muy-dificil" as never),
    /Parámetros inválidos/i
  );

  assert.throws(
    () => parseEconomiaParams("ultra" as never),
    /Parámetros inválidos/i
  );

  assert.throws(
    () =>
      parseFisicaParametros({
        materia: "matematica" as never,
        categoria: "MRU",
        nivel: "basico",
        opciones: {},
      }),
    /Parámetros inválidos/i
  );
});
