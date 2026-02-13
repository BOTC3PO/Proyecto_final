// src/ejercicios/fisica/temaConsumoElectrico.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "26_consumo_electrico";

export class ConsumoElectricoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/electricidad/consumo_electrico";
  categorias: string[] = ["consumo_electrico"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let potencia: number;
    let tiempo: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    potencia = randIntFromPorNivel(limits, params.nivel, "potencia", this, {
      basico: [100, 1000],
      intermedio: [500, 3000],
      avanzado: [1000, 5000],
    });
    tiempo = randIntFromPorNivel(limits, params.nivel, "tiempo", this, {
      basico: [2, 10],
      intermedio: [5, 24],
      avanzado: [10, 100],
    });

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
