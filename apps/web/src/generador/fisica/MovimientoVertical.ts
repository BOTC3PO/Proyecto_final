// src/ejercicios/fisica/temaMovimientoVertical.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class MovimientoVerticalGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/movimiento_vertical";
  categorias: string[] = ["movimiento_vertical"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let v0: number;

    switch (params.nivel) {
      case "basico":
        v0 = this.randomInt(5, 20);  // m/s
        break;
      case "intermedio":
        v0 = this.randomInt(10, 35);
        break;
      default:
        v0 = this.randomInt(20, 60);
    }

    const resultado = calc.calcular({
      tipo: "movimiento_vertical_altura_max",
      payload: { v0, g },
    });

    const alturaMax = resultado.resultado;
    const opciones = this.mezclar([
      alturaMax.toString(),
      ...this.generarOpcionesIncorrectas(alturaMax, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("mov_vertical"),
      materia: this.materia,
      categoria: "movimiento_vertical",
      nivel: params.nivel,
      enunciado:
        `Se lanza verticalmente hacia arriba un objeto con velocidad inicial de ${v0} m/s. ¿Cuál es la altura máxima que alcanza? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { v0, g },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${alturaMax} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "movimiento-vertical", "tiro-vertical"],
      },
    };
  }
}
