import assert from "node:assert/strict";
import test from "node:test";

import { parseGeneradorParametros } from "../core/schemas";
import { parseBasicGenerateOptions } from "../basic/schemas";
import { BaseGenerator } from "../core/basegenerador";
import type { Calculator, Ejercicio, GeneradorParametros } from "../core/types";
import { createPrng } from "../core/prng";

const dummyCalculator: Calculator = {
  calcular: () => ({ resultado: 0, pasos: [] }),
};

class DummyGenerator extends BaseGenerator {
  readonly id = "fisica/MRU";
  readonly materia = "fisica" as const;
  readonly categorias = ["MRU"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    void params;
    void calc;
    return {
      id: "dummy",
      materia: "fisica",
      categoria: "MRU",
      nivel: "basico",
      enunciado: "",
      tipoRespuesta: "abierta",
      datos: {},
      respuestaCorrecta: "",
      explicacionPasoAPaso: [],
    };
  }
}

const baseParams: GeneradorParametros = {
  materia: "fisica",
  categoria: "MRU",
  nivel: "basico",
  opciones: {},
};

test("rechaza NaN e Infinity en rangos", () => {
  assert.throws(
    () =>
      parseGeneradorParametros({
        ...baseParams,
        opciones: { rangoMin: Number.NaN, rangoMax: 10 },
      }),
    /rangoMin debe ser un número finito/i
  );

  assert.throws(
    () =>
      parseGeneradorParametros({
        ...baseParams,
        opciones: { rangoMin: 1, rangoMax: Number.POSITIVE_INFINITY },
      }),
    /rangoMax debe ser un número finito/i
  );
});

test("rechaza rangos inválidos y combinaciones incoherentes", () => {
  assert.throws(
    () =>
      parseGeneradorParametros({
        ...baseParams,
        opciones: { rangoMin: 10, rangoMax: 2 },
      }),
    /rangoMin debe ser menor o igual a rangoMax/i
  );

  assert.throws(
    () =>
      parseGeneradorParametros({
        ...baseParams,
        opciones: { rangoMin: -1, permitirNegativos: false },
      }),
    /rangoMin no puede ser negativo/i
  );
});

test("valida selección incoherente en generadores básicos", () => {
  assert.throws(
    () =>
      parseBasicGenerateOptions({
        seed: "seed",
        selection: { mode: "byTags", tags: [] },
      }),
    /selección por tags requiere/i
  );
});

test("valida materia y categoría contra el generador", () => {
  const generator = new DummyGenerator(createPrng("seed"));

  assert.throws(
    () =>
      generator.generate(
        {
          ...baseParams,
          materia: "matematica",
        },
        dummyCalculator
      ),
    /Materia inválida/i
  );

  assert.throws(
    () =>
      generator.generate(
        {
          ...baseParams,
          categoria: "otra",
        },
        dummyCalculator
      ),
    /Categoría inválida/i
  );
});
