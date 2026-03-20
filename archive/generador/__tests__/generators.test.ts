import assert from "node:assert/strict";
import test from "node:test";

import { QuizGenerator } from "../basic/basicGenerador";
import { adaptBasicQuizInstance } from "../basic/adapters";
import { BASIC_TEMPLATES } from "../basic/juegosBasicos";
import { parseBasicGenerateOptions } from "../basic/schemas";
import { createPrng } from "../core/prng";
import { parseEconomiaParams } from "../economia/schemas";
import { getDescriptorEconomiaPorClave } from "../economia/indexEconomia";
import { toCorrection as toEconomiaCorrection } from "../economia/adapters";
import { crearCalculadoraFisica } from "../fisica/calculadora";
import { MRUGenerator } from "../fisica/MRU";
import { parseFisicaParametros } from "../fisica/schemas";
import { getDescriptorPorTema, getGeneratorPorTema } from "../matematicas";
import type { Exercise } from "../matematicas/generic";
import { toCorrection as toMathCorrection } from "../matematicas/adapters";
import { parseMatematicasParams } from "../matematicas/schemas";
import { getDescriptorQuimicaPorTema } from "../quimica/indexQuimica";
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

test("matemáticas: determinismo, corrección estable y sin NaN/Infinity", async () => {
  const descriptor = await getDescriptorPorTema(1);
  assert.ok(descriptor, "No se encontró descriptor para tema 1");
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

test("química: determinismo, corrección estable y sin NaN/Infinity", async () => {
  const descriptor = await getDescriptorQuimicaPorTema(1);
  assert.ok(descriptor, "No se encontró descriptor para quimica tema 1");
  const seed = "quimica-seed";
  const exerciseA = descriptor.generate("facil", createPrng(seed));
  const exerciseB = descriptor.generate("facil", createPrng(seed));

  assert.deepStrictEqual(exerciseA, exerciseB);
  assert.deepStrictEqual(toQuimicaCorrection(exerciseA), toQuimicaCorrection(exerciseB));
  assert.strictEqual(exerciseA.generatorVersion, 1);
  assertFiniteDeep(exerciseA);
});

test("economía: determinismo, corrección estable y sin NaN/Infinity", async () => {
  const descriptor = await getDescriptorEconomiaPorClave("contabilidad/1");
  assert.ok(descriptor, "No se encontró descriptor para contabilidad/1");
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


const formatNumLocal = (n: number): string =>
  Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.00$/, "");

const tanNotable = (angulo: number): number => {
  if (angulo === 30) return 1 / Math.sqrt(3);
  if (angulo === 45) return 1;
  return Math.sqrt(3);
};

const getCorrectOption = (exercise: Exercise): string => {
  assert.equal(exercise.tipo, "quiz");
  return exercise.opciones[exercise.indiceCorrecto];
};

const assertNoDuplicateOptions = (exercise: Exercise): void => {
  assert.equal(exercise.tipo, "quiz");
  const set = new Set(exercise.opciones);
  assert.equal(set.size, exercise.opciones.length, `Opciones duplicadas en tema ${exercise.idTema}: ${exercise.opciones.join(" | ")}`);
};


const assertInterpolatedPrompt = (exercise: Exercise): void => {
  assert.equal(exercise.tipo, "quiz");
  assert.ok(!exercise.enunciado.includes("{{"), `Enunciado sin interpolar en tema ${exercise.idTema}: ${exercise.enunciado}`);

  if (exercise.idTema === 56) {
    const match = exercise.enunciado.match(/mide (\d+)/g);
    if (match) {
      for (const token of match) {
        assert.match(token, /\d+/);
      }
    }
    return;
  }

  if (exercise.idTema === 57) {
    const numeros = exercise.enunciado.match(/\d+/g) ?? [];
    assert.ok(numeros.length >= 2, `Enunciado de tema 57 sin valores esperados: ${exercise.enunciado}`);
    return;
  }

  if (exercise.idTema === 58 || exercise.idTema === 59) return;

  assert.fail(`Tema no soportado para validación de interpolación: ${exercise.idTema}`);
};

const assertTrig56to59Correctness = (exercise: Exercise): void => {
  assert.equal(exercise.tipo, "quiz");
  const correcta = getCorrectOption(exercise);

  if (exercise.idTema === 56) {
    let match = exercise.enunciado.match(/opuesto mide (\d+) y el adyacente (\d+).+tan\(θ\)/);
    if (match) {
      const [, op, ad] = match;
      assert.equal(correcta, formatNumLocal(Number(op) / Number(ad)));
      return;
    }

    match = exercise.enunciado.match(/45°-45°-90°.+cateto mide (\d+)/);
    if (match) {
      assert.equal(correcta, String(Number(match[1])));
      return;
    }

    match = exercise.enunciado.match(/opuesto a 30° mide (\d+), ¿cuánto mide la hipotenusa/);
    if (match) {
      assert.equal(correcta, String(Number(match[1]) * 2));
      return;
    }

    match = exercise.enunciado.match(/opuesto a 30° mide (\d+), ¿cuánto mide el cateto opuesto a 60°/);
    if (match) {
      assert.equal(correcta, formatNumLocal(Number(match[1]) * Math.sqrt(3)));
      return;
    }

    match = exercise.enunciado.match(/ángulo agudo mide (\d+)°.+complementario/);
    if (match) {
      assert.equal(correcta, String(90 - Number(match[1])));
      return;
    }
  }

  if (exercise.idTema === 57) {
    let match = exercise.enunciado.match(/sombra de (\d+) m.+es (\d+)°.+altura del poste/);
    if (match) {
      const [, sombra, angulo] = match;
      assert.equal(correcta, formatNumLocal(Number(sombra) * tanNotable(Number(angulo))));
      return;
    }

    match = exercise.enunciado.match(/edificio de (\d+) m.+es (\d+)°.+distancia horizontal/);
    if (match) {
      const [, altura, angulo] = match;
      assert.equal(correcta, formatNumLocal(Number(altura) / tanNotable(Number(angulo))));
      return;
    }

    match = exercise.enunciado.match(/sube (\d+) m.+cada (\d+) m.+tan\(θ\)/);
    if (match) {
      const [, dy, dx] = match;
      assert.equal(correcta, formatNumLocal(Number(dy) / Number(dx)));
      return;
    }
  }

  if (exercise.idTema === 58) {
    if (exercise.enunciado.includes("sin²(x) + ____ = 1")) {
      assert.equal(correcta, "cos²(x)");
      return;
    }
    if (exercise.enunciado.includes("1 − sin²(x)")) {
      assert.equal(correcta, "cos²(x)");
      return;
    }
    if (exercise.enunciado.includes("1 + tan²(x)")) {
      assert.equal(correcta, "sec²(x)");
      return;
    }
  }

  if (exercise.idTema === 59) {
    const expectedByPrompt: Record<string, string> = {
      "Resuelve sin(θ)=0 para θ en [0°, 360°].": "0°, 180°, 360°",
      "Resuelve sin(θ)=1/2 para θ en [0°, 360°].": "30°, 150°",
      "Resuelve cos(θ)=0 para θ en [0°, 360°].": "90°, 270°",
      "Resuelve cos(θ)=1/2 para θ en [0°, 360°].": "60°, 300°",
      "Resuelve cos(θ)=-1/2 para θ en [0°, 360°].": "120°, 240°",
      "Resuelve tan(θ)=1 para θ en [0°, 360°].": "45°, 225°",
      "Resuelve tan(θ)=0 para θ en [0°, 360°].": "0°, 180°, 360°",
      "Resuelve sin²(θ)=1/4 para θ en [0°, 360°].": "30°, 150°, 210°, 330°",
    };
    const expected = expectedByPrompt[exercise.enunciado];
    assert.ok(expected, `Enunciado no reconocido en tema 59: ${exercise.enunciado}`);
    assert.equal(correcta, expected);
    return;
  }

  assert.fail(`No se pudo validar el ejercicio del tema ${exercise.idTema}: ${exercise.enunciado}`);
};

test("matemáticas temas 56–59: variantes válidas por dificultad y sin duplicados", async () => {
  const dificultades = ["basico", "intermedio", "avanzado"] as const;
  const temas = [56, 57, 58, 59] as const;

  for (const idTema of temas) {
    const descriptor = await getDescriptorPorTema(idTema);
    assert.ok(descriptor, `No se encontró descriptor para tema ${idTema}`);
    for (const dificultad of dificultades) {
      for (let i = 0; i < 50; i += 1) {
        const exercise = descriptor.generate(dificultad, { modo: "quiz" }, createPrng(`tema-${idTema}-${dificultad}-${i}`));
        assertFiniteDeep(exercise);
        assertNoDuplicateOptions(exercise);
        assertTrig56to59Correctness(exercise);
        assertInterpolatedPrompt(exercise);
      }
    }
  }
});

test("matemáticas temas 60–65: smoke nativo sin placeholders y con opciones únicas", async () => {
  const dificultades = ["basico", "intermedio", "avanzado"] as const;

  for (let idTema = 60; idTema <= 65; idTema += 1) {
    const descriptor = await getDescriptorPorTema(idTema);
    assert.ok(descriptor, `No se encontró descriptor para tema ${idTema}`);
    for (const dificultad of dificultades) {
      for (let i = 0; i < 50; i += 1) {
        const exercise = descriptor.generate(dificultad, { modo: "quiz" }, createPrng(`tema-${idTema}-${dificultad}-${i}`));
        assert.equal(exercise.idTema, idTema);
        assert.equal(exercise.tipo, "quiz");
        assert.ok(exercise.enunciado.trim().length > 0);
        assert.ok(!exercise.enunciado.includes("{{"));
        assert.equal(exercise.opciones.length, 4);
        assert.equal(new Set(exercise.opciones).size, 4);
        assert.ok(exercise.indiceCorrecto >= 0 && exercise.indiceCorrecto < exercise.opciones.length);
      }
    }
  }
});
