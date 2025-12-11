// src/ejercicios/fisica/temaCalor.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CalorGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica/calor";
  categorias: string[] = ["calor"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let calorEspecifico: number;
    let deltaT: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 500);
        calorEspecifico = 4.18; // agua
        deltaT = this.randomInt(10, 50);
        break;
      case "intermedio":
        masa = this.randomInt(200, 1000);
        calorEspecifico = [4.18, 0.385, 0.9][this.randomInt(0, 2)]; // agua, cobre, aluminio
        deltaT = this.randomInt(20, 80);
        break;
      default:
        masa = this.randomInt(500, 3000);
        calorEspecifico = this.redondear(Math.random() * 4 + 0.3, 2);
        deltaT = this.randomInt(30, 150);
    }

    const resultado = calc.calcular({
      tipo: "calor",
      payload: { masa: masa / 1000, calorEspecifico, deltaT }, // g → kg
    });

    const calor = resultado.resultado;
    const opciones = this.mezclar([
      calor.toString(),
      ...this.generarOpcionesIncorrectas(calor, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("calor"),
      materia: this.materia,
      categoria: "calor",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["calor"][0] ||
        `¿Cuánto calor se necesita para elevar la temperatura de ${masa} g de una sustancia (c = ${calorEspecifico} J/g°C) en ${deltaT}°C?`,
      tipoRespuesta: "multiple",
      datos: { masa, calorEspecifico, deltaT },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${calor} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "calor", "temperatura"],
      },
    };
  }
}
