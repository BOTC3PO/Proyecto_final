// src/ejercicios/fisica/temaConsumoElectrico.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ConsumoElectricoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad/consumo_electrico";
  categorias: string[] = ["consumo_electrico"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let potencia: number;
    let tiempo: number;

    switch (params.nivel) {
      case "basico":
        potencia = this.randomInt(100, 1000);
        tiempo = this.randomInt(2, 10);
        break;
      case "intermedio":
        potencia = this.randomInt(500, 3000);
        tiempo = this.randomInt(5, 24);
        break;
      default:
        potencia = this.randomInt(1000, 5000);
        tiempo = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "consumo_electrico",
      payload: { potencia, tiempo },
    });

    const consumo = resultado.resultado;
    const opciones = this.mezclar([
      consumo.toString(),
      ...this.generarOpcionesIncorrectas(consumo, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("consumo"),
      materia: this.materia,
      categoria: "consumo_electrico",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["consumo_electrico"][0] ||
        `Un aparato de ${potencia} W funciona ${tiempo} horas. ¿Cuántos kWh consume?`,
      tipoRespuesta: "multiple",
      datos: { potencia, tiempo },
      opciones: opciones.map((o) => `${o} kWh`),
      respuestaCorrecta: `${consumo} kWh`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["electricidad", "consumo", "kWh"],
      },
    };
  }
}
