import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class MRUVGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/mruv";
  categorias: string[] = ["aceleracion_MRUV"];  // <- cambio

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const nivel = params.nivel;
    let v0: number;
    let aceleracion: number;
    let tiempo: number;

    switch (nivel) {
      case "basico":
        v0 = this.randomInt(0, 20);
        aceleracion = this.randomInt(1, 5);
        tiempo = this.randomInt(2, 5);
        break;
      case "intermedio":
        v0 = this.randomInt(5, 40);
        aceleracion = this.randomInt(2, 10);
        tiempo = this.randomInt(3, 8);
        break;
      default:
        v0 = this.randomInt(10, 60);
        aceleracion = this.randomInt(5, 15);
        tiempo = this.randomInt(4, 12);
    }

    const resultado = calc.calcular({
      tipo: "MRUV_velocidad_final",
      payload: { v0, aceleracion, tiempo },
    });

    const vf = resultado.resultado;
    const opciones = this.mezclar([
      vf.toString(),
      ...this.generarOpcionesIncorrectas(vf, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("MRUV"),
      materia: this.materia,
      categoria: "aceleracion_MRUV",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["aceleracion_MRUV"][0] ||
        `Un móvil parte con velocidad inicial de ${v0} m/s y acelera a ${aceleracion} m/s². ¿Cuál es su velocidad final después de ${tiempo} segundos?`,
      tipoRespuesta: "multiple",
      datos: { v0, aceleracion, tiempo },
      opciones: opciones.map((o) => `${o} m/s`),
      respuestaCorrecta: `${vf} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRUV", "aceleracion"],
      },
    };
  }
}
