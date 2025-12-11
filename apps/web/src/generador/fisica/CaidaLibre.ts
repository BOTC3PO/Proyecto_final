import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CaidaLibreGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/caida_libre";
  categorias: string[] = ["caida_libre"];  // <- cambio

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let tiempo: number;

    switch (params.nivel) {
      case "basico":
        tiempo = this.randomInt(1, 3);
        break;
      case "intermedio":
        tiempo = this.randomInt(2, 5);
        break;
      default:
        tiempo = this.randomInt(3, 8);
    }

    const resultado = calc.calcular({
      tipo: "caida_libre",
      payload: { g, tiempo },
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("caida_libre"),
      materia: this.materia,
      categoria: "caida_libre",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["caida_libre"][0] ||
        `Un objeto se deja caer libremente desde el reposo. ¿Con qué velocidad llega al suelo después de ${tiempo} segundos? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { g, tiempo },
      opciones: opciones.map((o) => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "caida-libre", "gravedad"],
      },
    };
  }
}
