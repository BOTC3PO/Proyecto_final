// src/ejercicios/fisica/temaConservacionEnergia.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ConservacionEnergiaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/conservacion_energia";
  categorias: string[] = ["conservacion_energia"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number;
    let altura: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(2, 10);
        altura = this.randomInt(5, 15);
        break;
      case "intermedio":
        masa = this.randomInt(5, 30);
        altura = this.randomInt(10, 40);
        break;
      default:
        masa = this.randomInt(10, 50);
        altura = this.randomInt(20, 100);
    }

    const resultado = calc.calcular({
      tipo: "conservacion_energia",
      payload: { masa, g, altura },
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.3).map(String),
    ]);

    return {
      id: this.generateId("conservacion"),
      materia: this.materia,
      categoria: "conservacion_energia",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["conservacion_energia"][0] ||
        `Un objeto de ${masa} kg se suelta desde ${altura} m de altura. ¿Con qué velocidad llega al suelo? (Desprecia la fricción, g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g, altura },
      opciones: opciones.map((o) => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "conservacion", "transformacion"],
      },
    };
  }
}
