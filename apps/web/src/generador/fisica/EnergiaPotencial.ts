// src/ejercicios/fisica/temaEnergiaPotencial.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class EnergiaPotencialGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/energia_potencial";
  categorias: string[] = ["energia_potencial"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number;
    let altura: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 30);
        altura = this.randomInt(2, 10);
        break;
      case "intermedio":
        masa = this.randomInt(20, 100);
        altura = this.randomInt(5, 30);
        break;
      default:
        masa = this.randomInt(50, 300);
        altura = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "energia_potencial",
      payload: { masa, g, altura },
    });

    const energia = resultado.resultado;
    const opciones = this.mezclar([
      energia.toString(),
      ...this.generarOpcionesIncorrectas(energia, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("ep"),
      materia: this.materia,
      categoria: "energia_potencial",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["energia_potencial"][0] ||
        `Un objeto de ${masa} kg está a ${altura} m de altura. ¿Cuál es su energía potencial gravitatoria? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g, altura },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${energia} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "potencial", "gravedad"],
      },
    };
  }
}
