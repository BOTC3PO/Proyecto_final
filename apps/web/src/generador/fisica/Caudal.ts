// src/ejercicios/fisica/temaCaudal.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "36_caudal";

export class CaudalGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/fluidos/caudal";
  categorias: string[] = ["caudal"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let volumen: number;
    let tiempo: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    volumen = randIntFromPorNivel(limits, params.nivel, "volumen", this, {
      basico: [100, 1000],
      intermedio: [500, 5000],
      avanzado: [1000, 20000],
    });
    tiempo = randIntFromPorNivel(limits, params.nivel, "tiempo", this, {
      basico: [10, 60],
      intermedio: [30, 300],
      avanzado: [60, 600],
    });

    const resultado = calc.calcular({
      tipo: "caudal",
      payload: { volumen: volumen / 1000, tiempo }, // L a m³
    });

    const caudal = resultado.resultado;
    const opciones = this.mezclar([
      caudal.toString(),
      ...this.generarOpcionesIncorrectas(caudal, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("caudal"),
      materia: this.materia,
      categoria: "caudal",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["caudal"][0] ||
        `Por una tubería circulan ${volumen} litros en ${tiempo} segundos. ¿Cuál es el caudal?`,
      tipoRespuesta: "multiple",
      datos: { volumen, tiempo },
      opciones: opciones.map((o) => `${o} m³/s`),
      respuestaCorrecta: `${caudal} m³/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["fluidos", "caudal", "flujo"],
      },
    };
  }
}
