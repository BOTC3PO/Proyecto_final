import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class MRUGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/mru";
  categorias: string[] = ["MRU"];  

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const nivel = params.nivel;
    let velocidad: number;
    let tiempo: number;

    switch (nivel) {
      case "basico":
        velocidad = this.randomInt(10, 60);
        tiempo = this.randomInt(1, 5);
        break;
      case "intermedio":
        velocidad = this.randomInt(20, 120);
        tiempo = this.randomInt(2, 10);
        break;
      default:
        velocidad = this.randomInt(50, 200);
        tiempo = this.randomInt(5, 20);
    }

    const resultado = calc.calcular({
      tipo: "MRU_distancia",
      payload: { velocidad, tiempo },
    });

    const distancia = resultado.resultado;
    const opciones = this.mezclar([
      distancia.toString(),
      ...this.generarOpcionesIncorrectas(distancia, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("MRU"),
      materia: this.materia,
      categoria: "MRU",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["MRU"][0] ||
        `Un vehículo se desplaza con velocidad constante de ${velocidad} m/s durante ${tiempo} segundos. ¿Qué distancia recorre?`,
      tipoRespuesta: "multiple",
      datos: { velocidad, tiempo },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${distancia} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRU", "velocidad-constante"],
      },
    };
  }
}
