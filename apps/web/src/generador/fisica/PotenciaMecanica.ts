// src/ejercicios/fisica/temaPotenciaMecanica.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class PotenciaMecanicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/potencia_mecanica";
  categorias: string[] = ["potencia_mecanica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let trabajo: number;
    let tiempo: number;

    switch (params.nivel) {
      case "basico":
        trabajo = this.randomInt(100, 500);
        tiempo = this.randomInt(5, 20);
        break;
      case "intermedio":
        trabajo = this.randomInt(500, 3000);
        tiempo = this.randomInt(10, 60);
        break;
      default:
        trabajo = this.randomInt(2000, 10000);
        tiempo = this.randomInt(30, 180);
    }

    const resultado = calc.calcular({
      tipo: "potencia_mecanica",
      payload: { trabajo, tiempo },
    });

    const potencia = resultado.resultado;
    const opciones = this.mezclar([
      potencia.toString(),
      ...this.generarOpcionesIncorrectas(potencia, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("potencia"),
      materia: this.materia,
      categoria: "potencia_mecanica",
      nivel: params.nivel,
      enunciado:
        `Se realiza un trabajo de ${trabajo} J en ${tiempo} segundos. ¿Cuál es la potencia desarrollada?`,
      tipoRespuesta: "multiple",
      datos: { trabajo, tiempo },
      opciones: opciones.map((o) => `${o} W`),
      respuestaCorrecta: `${potencia} W`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "potencia", "trabajo"],
      },
    };
  }
}
