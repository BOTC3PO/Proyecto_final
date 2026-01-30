// src/ejercicios/fisica/temaConversionTemperatura.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ConversionTemperaturaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica/conversion_temperatura";
  categorias: string[] = ["conversion_temperatura"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const conversion = this.prng.next() > 0.5 ? "C_a_F" : "F_a_C";
    let temperatura: number;

    switch (params.nivel) {
      case "basico":
        temperatura =
          conversion === "C_a_F"
            ? this.randomInt(0, 50)
            : this.randomInt(32, 122);
        break;
      case "intermedio":
        temperatura =
          conversion === "C_a_F"
            ? this.randomInt(-20, 100)
            : this.randomInt(-4, 212);
        break;
      default:
        temperatura =
          conversion === "C_a_F"
            ? this.randomInt(-50, 200)
            : this.randomInt(-58, 392);
    }

    const resultado = calc.calcular({
      tipo: `conversion_${conversion}`,
      payload: { temperatura },
    });

    const tempConvertida = resultado.resultado;
    const opciones = this.mezclar([
      tempConvertida.toString(),
      ...this.generarOpcionesIncorrectas(tempConvertida, 3, 0.2).map(String),
    ]);

    const unidadOrigen = conversion === "C_a_F" ? "°C" : "°F";
    const unidadDestino = conversion === "C_a_F" ? "°F" : "°C";

    return {
      id: this.generateId("temp"),
      materia: this.materia,
      categoria: "conversion_temperatura",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["conversion_temperatura"][0] ||
        `Convierte ${temperatura}${unidadOrigen} a ${unidadDestino}`,
      tipoRespuesta: "multiple",
      datos: { temperatura, tipo: conversion },
      opciones: opciones.map((o) => `${o}${unidadDestino}`),
      respuestaCorrecta: `${tempConvertida}${unidadDestino}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "conversion", "temperatura"],
      },
    };
  }
}
