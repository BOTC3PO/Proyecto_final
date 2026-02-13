// src/ejercicios/fisica/temaTrabajoMecanico.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "13_trabajo_mecanico";

export class TrabajoMecanicoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/trabajo_mecanico";
  categorias: string[] = ["trabajo_mecanico"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let fuerza: number;
    let distancia: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    fuerza = randIntFromPorNivel(limits, params.nivel, "fuerza", this, {
      basico: [10, 50],
      intermedio: [30, 150],
      avanzado: [100, 500],
    });
    distancia = randIntFromPorNivel(limits, params.nivel, "distancia", this, {
      basico: [2, 10],
      intermedio: [5, 30],
      avanzado: [10, 100],
    });

    const resultado = calc.calcular({
      tipo: "trabajo_mecanico",
      payload: { fuerza, distancia },
    });

    const trabajo = resultado.resultado;
    const opciones = this.mezclar([
      trabajo.toString(),
      ...this.generarOpcionesIncorrectas(trabajo, 3, 0.4).map(String),
    ]);

    return {
      id: this.generateId("trabajo"),
      materia: this.materia,
      categoria: "trabajo_mecanico",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["trabajo_mecanico"][0] ||
        `Se aplica una fuerza de ${fuerza} N para mover un objeto ${distancia} m en la misma dirección. ¿Cuánto trabajo se realiza?`,
      tipoRespuesta: "multiple",
      datos: { fuerza, distancia },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${trabajo} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "trabajo", "fuerza"],
      },
    };
  }
}
