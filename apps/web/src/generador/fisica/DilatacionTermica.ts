// src/ejercicios/fisica/temaDilatacionTermica.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class DilatacionTermicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica/dilatacion_termica";
  categorias: string[] = ["dilatacion_termica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let longitud: number;
    let coeficiente: number;
    let deltaT: number;

    switch (params.nivel) {
      case "basico":
        longitud = this.randomInt(100, 500);
        coeficiente = 0.000012; // acero típico
        deltaT = this.randomInt(20, 60);
        break;
      case "intermedio":
        longitud = this.randomInt(200, 1000);
        coeficiente = [0.000012, 0.000017, 0.000024][this.randomInt(0, 2)];
        deltaT = this.randomInt(30, 100);
        break;
      default:
        longitud = this.randomInt(500, 3000);
        coeficiente = this.redondear(this.prng.next() * 0.00003 + 0.00001, 6);
        deltaT = this.randomInt(50, 200);
    }

    const resultado = calc.calcular({
      tipo: "dilatacion_lineal",
      payload: { longitud: longitud / 100, coeficiente, deltaT }, // cm → m
    });

    const dilatacion = resultado.resultado;
    const opciones = this.mezclar([
      dilatacion.toString(),
      ...this.generarOpcionesIncorrectas(dilatacion, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("dilatacion"),
      materia: this.materia,
      categoria: "dilatacion_termica",
      nivel: params.nivel,
      enunciado:
        `Una barra de ${longitud} cm se calienta ${deltaT}°C. Si α = ${coeficiente} °C⁻¹, ¿cuánto se dilata?`,
      tipoRespuesta: "multiple",
      datos: { longitud, coeficiente, deltaT },
      opciones: opciones.map((o) => `${o} cm`),
      respuestaCorrecta: `${dilatacion} cm`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "dilatacion", "temperatura"],
      },
    };
  }
}
