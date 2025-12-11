// src/ejercicios/fisica/temaEnergiaCinetica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class EnergiaCineticaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/energia_cinetica";
  categorias: string[] = ["energia_cinetica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let velocidad: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 30);
        velocidad = this.randomInt(2, 10);
        break;
      case "intermedio":
        masa = this.randomInt(20, 100);
        velocidad = this.randomInt(5, 25);
        break;
      default:
        masa = this.randomInt(50, 300);
        velocidad = this.randomInt(10, 50);
    }

    const resultado = calc.calcular({
      tipo: "energia_cinetica",
      payload: { masa, velocidad },
    });

    const energia = resultado.resultado;
    const opciones = this.mezclar([
      energia.toString(),
      ...this.generarOpcionesIncorrectas(energia, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("ec"),
      materia: this.materia,
      categoria: "energia_cinetica",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["energia_cinetica"][0] ||
        `Un objeto de ${masa} kg se mueve a ${velocidad} m/s. ¿Cuál es su energía cinética?`,
      tipoRespuesta: "multiple",
      datos: { masa, velocidad },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${energia} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "cinetica", "movimiento"],
      },
    };
  }
}
