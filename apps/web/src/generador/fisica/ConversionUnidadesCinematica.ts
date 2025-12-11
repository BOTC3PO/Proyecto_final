import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ConversionUnidadesCinematicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/conversion_unidades";
  categorias: string[] = ["conversion_unidades_cinematica"];  // <- cambio

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const conversiones = [
      { de: "km/h", a: "m/s", factor: 1 / 3.6 },
      { de: "m/s", a: "km/h", factor: 3.6 },
      { de: "cm", a: "m", factor: 0.01 },
      { de: "m", a: "km", factor: 0.001 },
    ] as const;

    const conversion =
      conversiones[this.randomInt(0, conversiones.length - 1)];
    const valorInicial = this.randomInt(10, 200);

    const resultado = calc.calcular({
      tipo: "conversion_unidades",
      payload: { valor: valorInicial, factor: conversion.factor },
    });

    const valorFinal = resultado.resultado;
    const opciones = this.mezclar([
      valorFinal.toString(),
      ...this.generarOpcionesIncorrectas(valorFinal, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("conversion_cinematica"),
      materia: this.materia,
      categoria: "conversion_unidades_cinematica",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["conversion_unidades_cinematica"][0] ||
        `Convierte ${valorInicial} ${conversion.de} a ${conversion.a}`,
      tipoRespuesta: "multiple",
      datos: {
        valorInicial,
        unidadInicial: conversion.de,
        unidadFinal: conversion.a,
      },
      opciones: opciones.map((o) => `${o} ${conversion.a}`),
      respuestaCorrecta: `${valorFinal} ${conversion.a}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["conversion", "unidades", "cinematica"],
      },
    };
  }
}
