// src/ejercicios/fisica/temaLeyHooke.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class LeyHookeGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/dinamica/ley_hooke";
  categorias: string[] = ["ley_hooke"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let constante: number;
    let deformacion: number;

    switch (params.nivel) {
      case "basico":
        constante = this.randomInt(50, 200);
        deformacion = this.redondear(this.prng.next() * 0.3 + 0.05, 2);
        break;
      case "intermedio":
        constante = this.randomInt(150, 500);
        deformacion = this.redondear(this.prng.next() * 0.5 + 0.1, 2);
        break;
      default:
        constante = this.randomInt(300, 1000);
        deformacion = this.redondear(this.prng.next() * 1 + 0.2, 2);
    }

    const resultado = calc.calcular({
      tipo: "ley_hooke",
      payload: { constante, deformacion },
    });

    const fuerza = resultado.resultado;
    const opciones = this.mezclar([
      fuerza.toString(),
      ...this.generarOpcionesIncorrectas(fuerza, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("hooke"),
      materia: this.materia,
      categoria: "ley_hooke",
      nivel: params.nivel,
      enunciado:
        `Un resorte con constante elástica k = ${constante} N/m se estira ${deformacion} m. ¿Qué fuerza se aplicó?`,
      tipoRespuesta: "multiple",
      datos: { constante, deformacion },
      opciones: opciones.map((o) => `${o} N`),
      respuestaCorrecta: `${fuerza} N`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["dinamica", "ley-hooke", "resortes"],
      },
    };
  }
}
