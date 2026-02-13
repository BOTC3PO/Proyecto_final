// src/ejercicios/fisica/temaRelacionDistanciaTiempo.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";
import { getFisicaTemaLimitsSync, randIntFromPorNivel } from "./limits";

const TEMA = "05_relacion_distancia_tiempo";

export class RelacionDistanciaTiempoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/cinematica/relacion_distancia_tiempo";
  categorias: string[] = ["relacion_distancia_tiempo"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    // Elegimos qué variable calcular
    const modo = ["distancia", "velocidad", "tiempo"][this.randomInt(0, 2)];

    // Generamos valores base (en MRU)
    let velocidad: number;
    let tiempo: number;
    const limits = getFisicaTemaLimitsSync(TEMA);
    velocidad = randIntFromPorNivel(limits, params.nivel, "velocidad", this, {
      basico: [5, 25],
      intermedio: [10, 40],
      avanzado: [20, 60],
    });
    tiempo = randIntFromPorNivel(limits, params.nivel, "tiempo", this, {
      basico: [2, 10],
      intermedio: [3, 20],
      avanzado: [5, 30],
    });

    const distancia = this.redondear(velocidad * tiempo); // m

    let datos: any;
    let enunciado: string;
    let respuesta: string;
    let unidad: string;
    let subtipo: "distancia" | "velocidad" | "tiempo";

    if (modo === "distancia") {
      subtipo = "distancia";
      datos = { velocidad, tiempo };
      enunciado = `Un móvil se desplaza con velocidad constante de ${velocidad} m/s durante ${tiempo} s. ¿Qué distancia recorre?`;
      respuesta = distancia.toString();
      unidad = "m";
    } else if (modo === "velocidad") {
      subtipo = "velocidad";
      datos = { distancia, tiempo };
      enunciado = `Un móvil recorre ${distancia} m en ${tiempo} s con movimiento rectilíneo uniforme. ¿Cuál es su velocidad?`;
      respuesta = velocidad.toString();
      unidad = "m/s";
    } else {
      subtipo = "tiempo";
      datos = { distancia, velocidad };
      enunciado = `Un móvil recorre ${distancia} m con velocidad constante de ${velocidad} m/s. ¿Cuánto tiempo tarda?`;
      respuesta = tiempo.toString();
      unidad = "s";
    }

    const resultado = calc.calcular({
      tipo: `relacion_distancia_tiempo_${subtipo}`,
      payload: datos,
    });

    const valorCorrecto = resultado.resultado;
    const opciones = this.mezclar([
      valorCorrecto.toString(),
      ...this.generarOpcionesIncorrectas(valorCorrecto, 3, 0.3).map(String),
    ]);
    const velocidadVisual =
      modo === "velocidad" ? Number(valorCorrecto) : velocidad;
    const tiempoVisual = modo === "tiempo" ? Number(valorCorrecto) : tiempo;
    const distanciaVisual =
      modo === "distancia" ? Number(valorCorrecto) : distancia;
    const pointCount = 6;
    const step = tiempoVisual / (pointCount - 1);
    const positionSeries = Array.from({ length: pointCount }, (_, index) => {
      const t = Number((index * step).toFixed(2));
      return { t, value: Number((velocidadVisual * t).toFixed(2)) };
    });
    const velocitySeries = positionSeries.map(({ t }) => ({
      t,
      value: velocidadVisual,
    }));

    return {
      id: this.generateId("relacion_dt"),
      materia: this.materia,
      categoria: "relacion_distancia_tiempo",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["relacion_distancia_tiempo"][0] || enunciado,
      tipoRespuesta: "multiple",
      datos,
      opciones: opciones.map((o) => `${o} ${unidad}`),
      respuestaCorrecta: `${respuesta} ${unidad}`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["cinematica", "MRU", "distancia-tiempo-velocidad"],
      },
      visual: {
        kind: "physics-motion-chart",
        title: "Relación distancia-tiempo",
        description: "Movimiento rectilíneo uniforme en dos gráficas coordinadas.",
        motion: {
          type: "MRU",
          time: tiempoVisual,
          initialPosition: 0,
          initialVelocity: velocidadVisual,
          acceleration: 0,
          displacement: distanciaVisual,
        },
        axes: {
          time: { label: "Tiempo", unit: "s" },
          position: { label: "Posición", unit: "m" },
          velocity: { label: "Velocidad", unit: "m/s" },
        },
        series: {
          position: {
            id: "mru-relacion-posicion",
            label: "x(t)",
            data: positionSeries,
            color: "#2563EB",
          },
          velocity: {
            id: "mru-relacion-velocidad",
            label: "v(t)",
            data: velocitySeries,
            color: "#F97316",
          },
        },
        annotations: {
          slope: {
            time: tiempoVisual,
            value: velocidadVisual,
            unit: "m/s",
            label: "Pendiente (v)",
          },
          area: {
            time: tiempoVisual,
            value: distanciaVisual,
            unit: "m",
            label: "Área (desplazamiento)",
          },
        },
      },
    };
  }
}
