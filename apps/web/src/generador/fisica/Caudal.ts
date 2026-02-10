// src/ejercicios/fisica/temaCaudal.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CaudalGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/fluidos/caudal";
  categorias: string[] = ["caudal"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let volumen: number;
    let tiempo: number;

    switch (params.nivel) {
      case "basico":
        volumen = this.randomInt(100, 1000);
        tiempo = this.randomInt(10, 60);
        break;
      case "intermedio":
        volumen = this.randomInt(500, 5000);
        tiempo = this.randomInt(30, 300);
        break;
      default:
        volumen = this.randomInt(1000, 20000);
        tiempo = this.randomInt(60, 600);
    }

    const resultado = calc.calcular({
      tipo: "caudal",
      payload: { volumen: volumen / 1000, tiempo }, // L a m³
    });

    const caudal = resultado.resultado;
    const opciones = this.mezclar([
      caudal.toString(),
      ...this.generarOpcionesIncorrectas(caudal, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("caudal"),
      materia: this.materia,
      categoria: "caudal",
      nivel: params.nivel,
      enunciado:
        `Por una tubería circulan ${volumen} litros en ${tiempo} segundos. ¿Cuál es el caudal?`,
      tipoRespuesta: "multiple",
      datos: { volumen, tiempo },
      opciones: opciones.map((o) => `${o} m³/s`),
      respuestaCorrecta: `${caudal} m³/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "caudal", "flujo"],
      },
    };
  }
}
