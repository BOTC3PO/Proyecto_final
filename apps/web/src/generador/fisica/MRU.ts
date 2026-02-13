import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "01_mru";

export class MRUGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/mru";
  categorias: string[] = ["MRU"];  

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const nivel = params.nivel;
    let velocidad: number;
    let tiempo: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    velocidad = randIntFromPorNivel(limits, nivel, "velocidad", this, {
      basico: [10, 60],
      intermedio: [20, 120],
      avanzado: [50, 200],
    });
    tiempo = randIntFromPorNivel(limits, nivel, "tiempo", this, {
      basico: [1, 5],
      intermedio: [2, 10],
      avanzado: [5, 20],
    });

    const resultado = calc.calcular({
      tipo: "MRU_distancia",
      payload: { velocidad, tiempo },
    });

    const distancia = resultado.resultado;
    const opciones = this.mezclar([
      distancia.toString(),
      ...this.generarOpcionesIncorrectas(distancia, 3, 0.4).map(String),
    ]);
    const pointCount = 6;
    const step = tiempo / (pointCount - 1);
    const positionSeries = Array.from({ length: pointCount }, (_, index) => {
      const t = Number((index * step).toFixed(2));
      return { t, value: Number((velocidad * t).toFixed(2)) };
    });
    const velocitySeries = positionSeries.map(({ t }) => ({
      t,
      value: velocidad,
    }));

    return {
      id: this.generateId("MRU"),
      materia: this.materia,
      categoria: "MRU",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["MRU"][0] ||
        `Un vehículo se desplaza con velocidad constante de ${velocidad} m/s durante ${tiempo} segundos. ¿Qué distancia recorre?`,
      tipoRespuesta: "multiple",
      datos: { velocidad, tiempo },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${distancia} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRU", "velocidad-constante"],
      },
      visual: {
        kind: "physics-motion-chart",
        title: "Movimiento rectilíneo uniforme",
        description: "Comparación entre posición-tiempo y velocidad-tiempo.",
        motion: {
          type: "MRU",
          time: tiempo,
          initialPosition: 0,
          initialVelocity: velocidad,
          acceleration: 0,
          displacement: distancia,
        },
        axes: {
          time: { label: "Tiempo", unit: "s" },
          position: { label: "Posición", unit: "m" },
          velocity: { label: "Velocidad", unit: "m/s" },
        },
        series: {
          position: {
            id: "mru-posicion",
            label: "x(t)",
            data: positionSeries,
            color: "#2563EB",
          },
          velocity: {
            id: "mru-velocidad",
            label: "v(t)",
            data: velocitySeries,
            color: "#F97316",
          },
        },
        annotations: {
          slope: {
            time: tiempo,
            value: velocidad,
            unit: "m/s",
            label: "Pendiente (v)",
          },
          area: {
            time: tiempo,
            value: distancia,
            unit: "m",
            label: "Área (desplazamiento)",
          },
        },
      },
    };
  }
}
