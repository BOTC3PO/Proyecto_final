import assert from "node:assert/strict";
import test from "node:test";

import { __debug } from "../generadores_api";
import { GENERATORS_BY_TEMA } from "../matematicas";
import { getRangoConFallback } from "../matematicas/limits";
import { construirEnunciado } from "../matematicas/temas56_85_helpers";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallback: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

test("tema 60: construirEnunciado usa consigna de API cuando existe", () => {
  __debug.clear();
  __debug.setCache(60, {
    consignas: {
      enunciados: [
        {
          claveSubtipo: "exp.func.evaluar",
          template: "API calcula {{base}}^{{n}}",
        },
      ],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 60,
    dificultad: "basico",
    claveSubtipo: "exp.func.evaluar",
    fallback: "Fallback {{base}}^{{n}}",
    variables: { base: 3, n: 4 },
  });

  assert.equal(enunciado, "API calcula 3^4");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 62: construirEnunciado vuelve a fallback cuando API no tiene consigna", () => {
  __debug.clear();

  const enunciado = construirEnunciado({
    idTema: 62,
    dificultad: "intermedio",
    claveSubtipo: "exp.eq.basica",
    fallback: "Fallback {{base}}^x={{valor}}",
    variables: { base: 2, valor: 16 },
  });

  assert.equal(enunciado, "Fallback 2^x=16");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 64: getRangoConFallback prioriza límites de API", () => {
  __debug.clear();
  __debug.setCache(64, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            real: [2, 10],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(64, "basico", fallback, "real");
  assert.deepEqual(rango, [2, 10]);
});

test("tema 65: getRangoConFallback usa fallback cuando API no tiene límites", () => {
  __debug.clear();
  __debug.setCache(65, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            otro: [7, 12],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(65, "basico", fallback, "imag");
  assert.deepEqual(rango, [1, 20]);
});

test("si la consigna API deja placeholders, construirEnunciado usa fallback sin llaves", () => {
  __debug.clear();
  __debug.setCache(60, {
    consignas: {
      enunciados: [
        {
          claveSubtipo: "exp.func.comparar",
          template: "API incompleta {{b}}^{{faltante}}",
        },
      ],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 60,
    dificultad: "avanzado",
    claveSubtipo: "exp.func.comparar",
    fallback: "Fallback {{b}}^{{n1}} vs {{b}}^{{n2}}",
    variables: { b: 2, n1: 3, n2: 4 },
  });

  assert.equal(enunciado, "Fallback 2^3 vs 2^4");
  assert.ok(!enunciado.includes("{{"));
});

test("smoke 60-65: genera quizzes válidos en todas las dificultades", () => {
  __debug.clear();
  const temas = [60, 61, 62, 63, 64, 65] as const;
  const dificultades = ["basico", "intermedio", "avanzado"] as const;

  for (const tema of temas) {
    const gen = GENERATORS_BY_TEMA[tema];
    assert.ok(gen, `No se encontró generador para tema ${tema}`);

    for (const dificultad of dificultades) {
      for (let i = 0; i < 35; i += 1) {
        const exercise = gen(dificultad, { modo: "quiz" });
        assert.equal(exercise.tipo, "quiz");
        assert.equal(exercise.idTema, tema);
        assert.ok(!exercise.enunciado.includes("{{"), `Placeholder sin interpolar en ${tema}/${dificultad}`);
        const quiz = exercise as typeof exercise & { opciones: string[]; indiceCorrecto: number };
        assert.equal(quiz.opciones.length, 4);
        assert.equal(new Set(quiz.opciones).size, 4, `Opciones repetidas en ${tema}/${dificultad}`);
        assert.ok(quiz.indiceCorrecto >= 0 && quiz.indiceCorrecto < 4);
      }
    }
  }
});
