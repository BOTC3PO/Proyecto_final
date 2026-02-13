// src/ejercicios/fisica/temaMovimientoVertical.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "06_movimiento_vertical";

export class MovimientoVerticalGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/movimiento_vertical";
  categorias: string[] = ["movimiento_vertical"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let v0: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    v0 = randIntFromPorNivel(limits, params.nivel, "v0", this, {
      basico: [5, 20],
      intermedio: [10, 35],
      avanzado: [20, 60],
    });

    const resultado = calc.calcular({
      tipo: "movimiento_vertical_altura_max",
      payload: { v0, g },
    });

    const alturaMax = resultado.resultado;
    const opciones = this.mezclar([
      alturaMax.toString(),
      ...this.generarOpcionesIncorrectas(alturaMax, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("mov_vertical"),
      materia: this.materia,
      categoria: "movimiento_vertical",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["movimiento_vertical"][0] ||
        `Se lanza verticalmente hacia arriba un objeto con velocidad inicial de ${v0} m/s. ¿Cuál es la altura máxima que alcanza? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { v0, g },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${alturaMax} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "movimiento-vertical", "tiro-vertical"],
      },
    };
  }
}
