// src/ejercicios/fisica/temaMovimientoHorizontal.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class MovimientoHorizontalGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/movimiento_horizontal";
  categorias: string[] = ["movimiento_horizontal"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let altura: number;
    let velocidad: number;

    switch (params.nivel) {
      case "basico":
        altura = this.randomInt(5, 20);     // m
        velocidad = this.randomInt(5, 20);  // m/s
        break;
      case "intermedio":
        altura = this.randomInt(10, 50);
        velocidad = this.randomInt(10, 40);
        break;
      default:
        altura = this.randomInt(20, 100);
        velocidad = this.randomInt(20, 60);
    }

    const resultado = calc.calcular({
      tipo: "movimiento_horizontal_alcance",
      payload: { altura, velocidad, g },
    });

    const alcance = resultado.resultado;
    const opciones = this.mezclar([
      alcance.toString(),
      ...this.generarOpcionesIncorrectas(alcance, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("mov_horizontal"),
      materia: this.materia,
      categoria: "movimiento_horizontal",
      nivel: params.nivel,
      enunciado:
        `Desde una altura de ${altura} m se lanza horizontalmente un objeto con velocidad ${velocidad} m/s. ¿Qué distancia horizontal recorre antes de tocar el suelo? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { altura, velocidad, g },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${alcance} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "movimiento-horizontal", "tiro-parabolico"],
      },
    };
  }
}
