// src/ejercicios/fisica/temaCambiosEstado.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CambiosEstadoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica/cambios_estado";
  categorias: string[] = ["cambios_estado"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let calorLatente: number;
    const sustancia = Math.random() > 0.5 ? "agua" : "hielo";

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 500);
        calorLatente = sustancia === "agua" ? 2260 : 334; // kJ/kg
        break;
      case "intermedio":
        masa = this.randomInt(200, 1000);
        calorLatente = sustancia === "agua" ? 2260 : 334;
        break;
      default:
        masa = this.randomInt(500, 3000);
        calorLatente = sustancia === "agua" ? 2260 : 334;
    }

    const resultado = calc.calcular({
      tipo: "cambio_estado",
      payload: { masa: masa / 1000, calorLatente }, // g → kg
    });

    const calor = resultado.resultado;
    const opciones = this.mezclar([
      calor.toString(),
      ...this.generarOpcionesIncorrectas(calor, 3, 0.35).map(String),
    ]);

    const proceso = sustancia === "agua" ? "evaporar" : "fundir";

    return {
      id: this.generateId("cambio_estado"),
      materia: this.materia,
      categoria: "cambios_estado",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["cambios_estado"][0] ||
        `¿Cuánto calor se necesita para ${proceso} ${masa} g de ${sustancia}? (L = ${calorLatente} kJ/kg)`,
      tipoRespuesta: "multiple",
      datos: { masa, calorLatente, sustancia },
      opciones: opciones.map((o) => `${o} kJ`),
      respuestaCorrecta: `${calor} kJ`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "cambio-estado", "calor-latente"],
      },
    };
  }
}
