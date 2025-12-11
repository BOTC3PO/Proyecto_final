// src/ejercicios/fisica/temaFriccion.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class FriccionGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/dinamica/friccion";
  categorias: string[] = ["friccion"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let coeficiente: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(10, 50);
        coeficiente = this.redondear(Math.random() * 0.3 + 0.1, 2);
        break;
      case "intermedio":
        masa = this.randomInt(30, 100);
        coeficiente = this.redondear(Math.random() * 0.5 + 0.2, 2);
        break;
      default:
        masa = this.randomInt(50, 200);
        coeficiente = this.redondear(Math.random() * 0.8 + 0.3, 2);
    }

    const g = 9.8;
    const resultado = calc.calcular({
      tipo: "friccion",
      payload: { masa, coeficiente, g },
    });

    const fuerzaFriccion = resultado.resultado;
    const opciones = this.mezclar([
      fuerzaFriccion.toString(),
      ...this.generarOpcionesIncorrectas(fuerzaFriccion, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("friccion"),
      materia: this.materia,
      categoria: "friccion",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["friccion"][0] ||
        `Un objeto de ${masa} kg se desliza sobre una superficie con coeficiente de fricción μ = ${coeficiente}. ¿Cuál es la fuerza de fricción? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, coeficiente, g },
      opciones: opciones.map((o) => `${o} N`),
      respuestaCorrecta: `${fuerzaFriccion} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "friccion", "coeficiente"],
      },
    };
  }
}
