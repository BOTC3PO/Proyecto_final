// src/ejercicios/fisica/temaTrabajoMecanico.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class TrabajoMecanicoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/trabajo_mecanico";
  categorias: string[] = ["trabajo_mecanico"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let fuerza: number;
    let distancia: number;

    switch (params.nivel) {
      case "basico":
        fuerza = this.randomInt(10, 50);
        distancia = this.randomInt(2, 10);
        break;
      case "intermedio":
        fuerza = this.randomInt(30, 150);
        distancia = this.randomInt(5, 30);
        break;
      default:
        fuerza = this.randomInt(100, 500);
        distancia = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "trabajo_mecanico",
      payload: { fuerza, distancia },
    });

    const trabajo = resultado.resultado;
    const opciones = this.mezclar([
      trabajo.toString(),
      ...this.generarOpcionesIncorrectas(trabajo, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("trabajo"),
      materia: this.materia,
      categoria: "trabajo_mecanico",
      nivel: params.nivel,
      enunciado:
        `Se aplica una fuerza de ${fuerza} N para mover un objeto ${distancia} m en la misma dirección. ¿Cuánto trabajo se realiza?`,
      tipoRespuesta: "multiple",
      datos: { fuerza, distancia },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${trabajo} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "trabajo", "fuerza"],
      },
    };
  }
}
