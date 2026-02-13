// src/ejercicios/fisica/temaMovimientoHorizontal.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "07_movimiento_horizontal";

export class MovimientoHorizontalGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/movimiento_horizontal";
  categorias: string[] = ["movimiento_horizontal"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let altura: number;
    let velocidad: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    altura = randIntFromPorNivel(limits, params.nivel, "altura", this, {
      basico: [5, 20],
      intermedio: [10, 50],
      avanzado: [20, 100],
    });
    velocidad = randIntFromPorNivel(limits, params.nivel, "velocidad", this, {
      basico: [5, 20],
      intermedio: [10, 40],
      avanzado: [20, 60],
    });

    const resultado = calc.calcular({
      tipo: "movimiento_horizontal_alcance",
      payload: { altura, velocidad, g },
    });

    const alcance = resultado.resultado;
    const opciones = this.mezclar([
      alcance.toString(),
      ...this.generarOpcionesIncorrectas(alcance, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("mov_horizontal"),
      materia: this.materia,
      categoria: "movimiento_horizontal",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["movimiento_horizontal"][0] ||
        `Desde una altura de ${altura} m se lanza horizontalmente un objeto con velocidad ${velocidad} m/s. ¿Qué distancia horizontal recorre antes de tocar el suelo? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { altura, velocidad, g },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${alcance} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "movimiento-horizontal", "tiro-parabolico"],
      },
    };
  }
}
