// src/ejercicios/fisica/temaPotenciaMecanica.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "17_potencia_mecanica";

export class PotenciaMecanicaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/potencia_mecanica";
  categorias: string[] = ["potencia_mecanica"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let trabajo: number;
    let tiempo: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    trabajo = randIntFromPorNivel(limits, params.nivel, "trabajo", this, {
      basico: [100, 500],
      intermedio: [500, 3000],
      avanzado: [2000, 10000],
    });
    tiempo = randIntFromPorNivel(limits, params.nivel, "tiempo", this, {
      basico: [5, 20],
      intermedio: [10, 60],
      avanzado: [30, 180],
    });

    const resultado = calc.calcular({
      tipo: "potencia_mecanica",
      payload: { trabajo, tiempo },
    });

    const potencia = resultado.resultado;
    const opciones = this.mezclar([
      potencia.toString(),
      ...this.generarOpcionesIncorrectas(potencia, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("potencia"),
      materia: this.materia,
      categoria: "potencia_mecanica",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["potencia_mecanica"][0] ||
        `Se realiza un trabajo de ${trabajo} J en ${tiempo} segundos. ¿Cuál es la potencia desarrollada?`,
      tipoRespuesta: "multiple",
      datos: { trabajo, tiempo },
      opciones: opciones.map((o) => `${o} W`),
      respuestaCorrecta: `${potencia} W`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "potencia", "trabajo"],
      },
    };
  }
}
