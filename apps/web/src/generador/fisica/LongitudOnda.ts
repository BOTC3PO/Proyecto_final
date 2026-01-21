// src/ejercicios/fisica/temaLongitudOnda.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class LongitudOndaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/ondas_optica/longitud_onda";
  categorias: string[] = ["longitud_onda"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let velocidad: number;
    let frecuencia: number;

    switch (params.nivel) {
      case "basico":
        velocidad = 340; // sonido en aire
        frecuencia = this.randomInt(100, 1000);
        break;
      case "intermedio":
        velocidad = Math.random() > 0.5 ? 340 : 1500; // aire o agua
        frecuencia = this.randomInt(500, 5000);
        break;
      default:
        velocidad = 300000000; // luz
        frecuencia = this.randomInt(100000000, 1000000000);
    }

    const resultado = calc.calcular({
      tipo: "longitud_onda",
      payload: { velocidad, frecuencia },
    });

    const longitud = resultado.resultado;
    const opciones = this.mezclar([
      longitud.toString(),
      ...this.generarOpcionesIncorrectas(longitud, 3, 0.35).map(String),
    ]);

    return {
      id: this.generateId("long_onda"),
      materia: this.materia,
      categoria: "longitud_onda",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["longitud_onda"][0] ||
        `Una onda se propaga a ${velocidad} m/s con frecuencia ${frecuencia} Hz. ¿Cuál es su longitud de onda?`,
      tipoRespuesta: "multiple",
      datos: { velocidad, frecuencia },
      opciones: opciones.map((o) => `${o} m`),
      respuestaCorrecta: `${longitud} m`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["ondas", "longitud", "frecuencia"],
      },
      visual: {
        kind: "wave-interference",
        title: "Longitud de onda",
        description: "La distancia entre crestas se relaciona con la frecuencia.",
        axes: {
          x: { label: "Tiempo", unit: "s", min: 0, max: 1 },
          y: { label: "Amplitud" },
        },
        samples: 180,
        waves: [
          {
            id: "onda",
            label: "Onda base",
            amplitude: 1,
            frequency,
            phase: 0,
            color: "#2563EB",
          },
          {
            id: "onda-fase",
            label: "Onda desfasada",
            amplitude: 0.6,
            frequency,
            phase: Math.PI / 2,
            color: "#F97316",
          },
        ],
        superposition: {
          enabled: true,
          label: "Interferencia",
          color: "#0F172A",
        },
        animation: {
          enabled: params.nivel === "avanzado",
          speed: 0.8,
        },
      },
    };
  }
}
