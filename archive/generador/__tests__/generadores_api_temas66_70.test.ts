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

test("tema 66: construirEnunciado prioriza consigna API y renderiza placeholders", () => {
  __debug.clear();
  __debug.setCache(66, {
    consignas: {
      enunciados: [
        {
          claveSubtipo: "mat.basica.suma",
          template: "API: suma {{A}} con {{B}}",
        },
      ],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 66,
    dificultad: "basico",
    claveSubtipo: "mat.basica.suma",
    fallback: "Fallback {{A}} y {{B}}",
    variables: { A: "[[1,2],[3,4]]", B: "[[5,6],[7,8]]" },
  });

  assert.equal(enunciado, "API: suma [[1,2],[3,4]] con [[5,6],[7,8]]");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 68: construirEnunciado usa fallback cuando API no tiene consigna", () => {
  __debug.clear();

  const enunciado = construirEnunciado({
    idTema: 68,
    dificultad: "intermedio",
    claveSubtipo: "sist.2x2.resolver",
    fallback: "Fallback: {{a}}x + {{b}}y = {{e}}",
    variables: { a: 2, b: 3, e: 7 },
  });

  assert.equal(enunciado, "Fallback: 2x + 3y = 7");
  assert.ok(!enunciado.includes("{{"));
});

test("tema 70: getRangoConFallback prioriza límites API", () => {
  __debug.clear();
  __debug.setCache(70, {
    limites: {
      porDificultad: {
        avanzado: {
          rangos: {
            coord: [3, 15],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(70, "avanzado", fallback, "coord");
  assert.deepEqual(rango, [3, 15]);
});

test("tema 68: getRangoConFallback cae a fallback cuando API no tiene key", () => {
  __debug.clear();
  __debug.setCache(68, {
    limites: {
      porDificultad: {
        basico: {
          rangos: {
            mat: [2, 8],
          },
        },
      },
    },
  });

  const rango = getRangoConFallback(68, "basico", fallback, "rhs");
  assert.deepEqual(rango, [1, 10]);
});

test("tema 70: si API deja placeholders, construirEnunciado vuelve a fallback sin llaves", () => {
  __debug.clear();
  __debug.setCache(70, {
    consignas: {
      enunciados: [
        {
          claveSubtipo: "geo3d.plano_basico",
          template: "API incompleta {{a}}x + {{faltante}}",
        },
      ],
    },
  });

  const enunciado = construirEnunciado({
    idTema: 70,
    dificultad: "avanzado",
    claveSubtipo: "geo3d.plano_basico",
    fallback: "Plano {{a}}x + {{b}}y + {{c}}z = {{d}}",
    variables: { a: 1, b: -2, c: 3, d: 9 },
  });

  assert.equal(enunciado, "Plano 1x + -2y + 3z = 9");
  assert.ok(!enunciado.includes("{{"));
});
