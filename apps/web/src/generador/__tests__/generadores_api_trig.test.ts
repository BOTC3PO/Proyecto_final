import assert from "node:assert/strict";
import test from "node:test";

import { __debug } from "../generadores_api";
import { getRangoConFallback } from "../matematicas/limits";
import { construirEnunciado } from "../matematicas/tema56_59_enunciados";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallback: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

test("usa consigna API e interpola variables para tema 56-59", () => {
  __debug.clear();
  __debug.setCache(56, {
    consignas: {
      enunciados: [
        {
          claveSubtipo: "trig.basica.razon",
          template: "API: opuesto={{opuesto}}, adyacente={{adyacente}}",
        },
      ],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 56,
    dificultad: "basico",
    claveSubtipo: "trig.basica.razon",
    fallback: "Fallback {{opuesto}}/{{adyacente}}",
    variables: { opuesto: 8, adyacente: 2 },
  });

  assert.equal(enunciado, "API: opuesto=8, adyacente=2");
  assert.ok(!enunciado.includes("{{"), `El enunciado no debe conservar placeholders: ${enunciado}`);
});

test("si no hay consigna API se mantiene fallback local", () => {
  __debug.clear();

  const enunciado = construirEnunciado({
    idTema: 58,
    dificultad: "intermedio",
    claveSubtipo: "trig.identidad.simplificar",
    fallback: "Fallback sin placeholders",
  });

  assert.equal(enunciado, "Fallback sin placeholders");
  assert.ok(!enunciado.includes("{{"), `El enunciado no debe conservar placeholders: ${enunciado}`);
});

test("getRangoConFallback prioriza límites API cuando existen y son válidos", () => {
  __debug.clear();
  __debug.setCache(57, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            longitud: [3, 33],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(57, "basico", fallback, "longitud");
  assert.deepEqual(rango, [3, 33]);
});

test("getRangoConFallback usa fallback cuando API no tiene key", () => {
  __debug.clear();
  __debug.setCache(57, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            angulo: [10, 80],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(57, "basico", fallback, "longitud");
  assert.deepEqual(rango, [1, 20]);
});

test("getRangoConFallback acepta compatibilidad con key numeros desde API", () => {
  __debug.clear();
  __debug.setCache(56, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            numeros: [7, 21],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(56, "basico", fallback, "longitud");
  assert.deepEqual(rango, [7, 21]);
});

