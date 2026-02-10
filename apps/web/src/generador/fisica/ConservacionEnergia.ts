// src/ejercicios/fisica/temaConservacionEnergia.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class ConservacionEnergiaGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/conservacion_energia";
  categorias: string[] = ["conservacion_energia"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number;
    let altura: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(2, 10);
        altura = this.randomInt(5, 15);
        break;
      case "intermedio":
        masa = this.randomInt(5, 30);
        altura = this.randomInt(10, 40);
        break;
      default:
        masa = this.randomInt(10, 50);
        altura = this.randomInt(20, 100);
    }

    const resultado = calc.calcular({
      tipo: "conservacion_energia",
      payload: { masa, g, altura },
    });

    const velocidad = resultado.resultado;
    const opciones = this.mezclar([
      velocidad.toString(),
      ...this.generarOpcionesIncorrectas(velocidad, 3, 0.3).map(String),
    ]);
    const pointCount = 6;
    const step = altura / (pointCount - 1);
    const totalEnergy = Number((masa * g * altura).toFixed(2));
    const energySeries = Array.from({ length: pointCount }, (_, index) => {
      const h = Number((index * step).toFixed(2));
      const ep = Number((masa * g * h).toFixed(2));
      const ec = Number((totalEnergy - ep).toFixed(2));
      return { h, ep, ec };
    });

    return {
      id: this.generateId("conservacion"),
      materia: this.materia,
      categoria: "conservacion_energia",
      nivel: params.nivel,
      enunciado:
        `Un objeto de ${masa} kg se suelta desde ${altura} m de altura. ¿Con qué velocidad llega al suelo? (Desprecia la fricción, g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g, altura },
      opciones: opciones.map((o) => `${o} m/s`),
      respuestaCorrecta: `${velocidad} m/s`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "conservacion", "transformacion"],
      },
      visual: {
        kind: "energy-chart",
        title: "Conservación de la energía mecánica",
        description:
          "La energía potencial se transforma en cinética mientras la energía total permanece constante.",
        axes: {
          x: { label: "Altura", unit: "m", variable: "posicion" },
          y: { label: "Energía", unit: "J" },
        },
        series: [
          {
            id: "ep-series",
            label: "Energía potencial (Ep)",
            energyType: "Ep",
            data: energySeries.map((point) => ({ x: point.h, y: point.ep })),
            color: "#38BDF8",
          },
          {
            id: "ec-series",
            label: "Energía cinética (Ec)",
            energyType: "Ec",
            data: energySeries.map((point) => ({ x: point.h, y: point.ec })),
            color: "#F97316",
          },
          {
            id: "et-series",
            label: "Energía total (Etotal)",
            energyType: "Etotal",
            data: energySeries.map((point) => ({ x: point.h, y: totalEnergy })),
            color: "#22C55E",
          },
        ],
        conservation: {
          tolerance: 0.01,
          note: "La energía total se mantiene casi constante.",
        },
      },
    };
  }
}
