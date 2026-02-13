import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "02_mruv";

export class MRUVGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/mruv";
  categorias: string[] = ["aceleracion_MRUV"];  // <- cambio

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const nivel = params.nivel;
    let v0: number;
    let aceleracion: number;
    let tiempo: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    v0 = randIntFromPorNivel(limits, nivel, "v0", this, {
      basico: [0, 20],
      intermedio: [5, 40],
      avanzado: [10, 60],
    });
    aceleracion = randIntFromPorNivel(limits, nivel, "aceleracion", this, {
      basico: [1, 5],
      intermedio: [2, 10],
      avanzado: [5, 15],
    });
    tiempo = randIntFromPorNivel(limits, nivel, "tiempo", this, {
      basico: [2, 5],
      intermedio: [3, 8],
      avanzado: [4, 12],
    });

    const resultado = calc.calcular({
      tipo: "MRUV_velocidad_final",
      payload: { v0, aceleracion, tiempo },
    });

    const vf = resultado.resultado;
    const opciones = this.mezclar([
      vf.toString(),
      ...this.generarOpcionesIncorrectas(vf, 3, 0.35).map(String),
    ]);
    const pointCount = 6;
    const step = tiempo / (pointCount - 1);
    const positionSeries = Array.from({ length: pointCount }, (_, index) => {
      const t = Number((index * step).toFixed(2));
      const posicion = v0 * t + 0.5 * aceleracion * t * t;
      return { t, value: Number(posicion.toFixed(2)) };
    });
    const velocitySeries = Array.from({ length: pointCount }, (_, index) => {
      const t = Number((index * step).toFixed(2));
      return { t, value: Number((v0 + aceleracion * t).toFixed(2)) };
    });
    const desplazamiento = Number((v0 * tiempo + 0.5 * aceleracion * tiempo * tiempo).toFixed(2));

    return {
      id: this.generateId("MRUV"),
      materia: this.materia,
      categoria: "aceleracion_MRUV",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["aceleracion_MRUV"][0] ||
        `Un móvil parte con velocidad inicial de ${v0} m/s y acelera a ${aceleracion} m/s². ¿Cuál es su velocidad final después de ${tiempo} segundos?`,
      tipoRespuesta: "multiple",
      datos: { v0, aceleracion, tiempo },
      opciones: opciones.map((o) => `${o} m/s`),
      respuestaCorrecta: `${vf} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRUV", "aceleracion"],
      },
      visual: {
        kind: "physics-motion-chart",
        title: "Movimiento rectilíneo uniformemente variado",
        description: "Curvas posición-tiempo y velocidad-tiempo con aceleración constante.",
        motion: {
          type: "MRUV",
          time: tiempo,
          initialPosition: 0,
          initialVelocity: v0,
          acceleration: aceleracion,
          displacement: desplazamiento,
        },
        axes: {
          time: { label: "Tiempo", unit: "s" },
          position: { label: "Posición", unit: "m" },
          velocity: { label: "Velocidad", unit: "m/s" },
        },
        series: {
          position: {
            id: "mruv-posicion",
            label: "x(t)",
            data: positionSeries,
            color: "#2563EB",
          },
          velocity: {
            id: "mruv-velocidad",
            label: "v(t)",
            data: velocitySeries,
            color: "#F97316",
          },
        },
        annotations: {
          slope: {
            time: tiempo,
            value: vf,
            unit: "m/s",
            label: "Pendiente (v)",
          },
          area: {
            time: tiempo,
            value: desplazamiento,
            unit: "m",
            label: "Área (desplazamiento)",
          },
        },
      },
    };
  }
}
