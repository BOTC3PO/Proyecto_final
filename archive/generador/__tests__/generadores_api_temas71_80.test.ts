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

test("tema 71: construirEnunciado prioriza consigna API con interpolación", () => {
  __debug.clear();
  __debug.setCache(71, {
    consignas: {
      enunciados: [{ claveSubtipo: "calc.limite.directo", template: "API lim x→{{x0}} de {{fx}}" }],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 71,
    dificultad: "basico",
    claveSubtipo: "calc.limite.directo",
    fallback: "Fallback lim x→{{x0}} de {{fx}}",
    variables: { x0: 3, fx: "x^2+1" },
  });

  assert.equal(enunciado, "API lim x→3 de x^2+1");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 74: construirEnunciado usa fallback cuando API no tiene consigna", () => {
  __debug.clear();

  const enunciado = construirEnunciado({
    idTema: 74,
    dificultad: "intermedio",
    claveSubtipo: "calc.deriv.potencia",
    fallback: "Deriva f(x)={{c}}x^{{n}}",
    variables: { c: 4, n: 3 },
  });

  assert.equal(enunciado, "Deriva f(x)=4x^3");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 78: getRangoConFallback prioriza límites API", () => {
  __debug.clear();
  __debug.setCache(78, {
    limites: {
      porDificultad: {
        avanzado: {
          rangos: {
            b: [4, 12],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(78, "avanzado", fallback, "b");
  assert.deepEqual(rango, [4, 12]);
});

test("tema 80: getRangoConFallback cae a fallback cuando API no tiene key", () => {
  __debug.clear();
  __debug.setCache(80, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            t1: [2, 9],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(80, "basico", fallback, "k");
  assert.deepEqual(rango, [1, 10]);
});

test("tema 80: construirEnunciado elimina placeholders residuales usando fallback", () => {
  __debug.clear();
  __debug.setCache(80, {
    consignas: {
      enunciados: [
        {
          claveSubtipo: "calc.ed.crecimiento_exponencial",
          template: "API dy/dt={{k}}y con dato {{faltante}}",
        },
      ],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 80,
    dificultad: "avanzado",
    claveSubtipo: "calc.ed.crecimiento_exponencial",
    fallback: "Resolver dy/dt={{k}}y, y(0)={{y0}}",
    variables: { k: 2, y0: 5 },
  });

  assert.equal(enunciado, "Resolver dy/dt=2y, y(0)=5");
  assert.ok(!enunciado.includes("{{"));
});
