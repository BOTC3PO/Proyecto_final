import assert from "node:assert/strict";
import test from "node:test";

import { __debug } from "../generadores_api";
import { getRangoConFallback } from "../matematicas/limits";
import { construirEnunciado } from "../matematicas/temas56_85_helpers";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallback: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

test("tema 81: construirEnunciado usa consigna API cuando existe", () => {
  __debug.clear();
  __debug.setCache(81, {
    consignas: {
      enunciados: [{ claveSubtipo: "prob.condicional", template: "API P(A)={{pA}}, P(B)={{pB}}" }],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 81,
    dificultad: "basico",
    claveSubtipo: "prob.condicional",
    fallback: "Fallback P(A)={{pA}}, P(B)={{pB}}",
    variables: { pA: "1/2", pB: "1/3" },
  });

  assert.equal(enunciado, "API P(A)=1/2, P(B)=1/3");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 83: construirEnunciado usa fallback cuando API no tiene consigna", () => {
  __debug.clear();

  const enunciado = construirEnunciado({
    idTema: 83,
    dificultad: "intermedio",
    claveSubtipo: "dist.binomial",
    fallback: "Binomial con n={{n}} y k={{k}}",
    variables: { n: 6, k: 2 },
  });

  assert.equal(enunciado, "Binomial con n=6 y k=2");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 85: getRangoConFallback usa límites API cuando existen", () => {
  __debug.clear();
  __debug.setCache(85, {
    limites: {
      porDificultad: {
        avanzado: {
          rangos: {
            pendiente: [1, 4],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(85, "avanzado", fallback, "pendiente");
  assert.deepEqual(rango, [1, 4]);
});

test("tema 83: getRangoConFallback usa fallback cuando API no tiene la key", () => {
  __debug.clear();
  __debug.setCache(83, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            n: [3, 7],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(83, "basico", fallback, "lambda");
  assert.deepEqual(rango, [1, 10]);
});

test("tema 81: si template API deja placeholders, construirEnunciado vuelve a fallback sin llaves", () => {
  __debug.clear();
  __debug.setCache(81, {
    consignas: {
      enunciados: [{ claveSubtipo: "prob.union_interseccion", template: "API P(A)={{pA}} y {{faltante}}" }],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 81,
    dificultad: "avanzado",
    claveSubtipo: "prob.union_interseccion",
    fallback: "Fallback P(A)={{pA}}, P(B)={{pB}}",
    variables: { pA: 40, pB: 30 },
  });

  assert.equal(enunciado, "Fallback P(A)=40, P(B)=30");
  assert.ok(!enunciado.includes("{{"));
});
