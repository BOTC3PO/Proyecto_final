// src/ejercicios/fisica/temaPresion.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class PresionGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/fluidos/presion";
  categorias: string[] = ["presion"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let fuerza: number;
    let area: number;

    switch (params.nivel) {
      case "basico":
        fuerza = this.randomInt(100, 500);
        area = this.randomInt(5, 20);
        break;
      case "intermedio":
        fuerza = this.randomInt(500, 3000);
        area = this.redondear(this.prng.next() * 50 + 5, 2);
        break;
      default:
        fuerza = this.randomInt(2000, 10000);
        area = this.redondear(this.prng.next() * 100 + 10, 2);
    }

    const resultado = calc.calcular({
      tipo: "presion",
      payload: { fuerza, area: area / 10000 }, // convertir cm² a m²
    });

    const presion = resultado.resultado;
    const opciones = this.mezclar([
      presion.toString(),
      ...this.generarOpcionesIncorrectas(presion, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("presion"),
      materia: this.materia,
      categoria: "presion",
      nivel: params.nivel,
      enunciado:
        `Se aplica una fuerza de ${fuerza} N sobre un área de ${area} cm². ¿Cuál es la presión?`,
      tipoRespuesta: "multiple",
      datos: { fuerza, area },
      opciones: opciones.map((o) => `${o} Pa`),
      respuestaCorrecta: `${presion} Pa`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "presion", "fuerza-area"],
      },
    };
  }
}
