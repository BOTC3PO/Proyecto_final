// src/ejercicios/fisica/temaEnergiaPotencial.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class EnergiaPotencialGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/energia/energia_potencial";
  categorias: string[] = ["energia_potencial"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    const g = 9.8;
    let masa: number;
    let altura: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(5, 30);
        altura = this.randomInt(2, 10);
        break;
      case "intermedio":
        masa = this.randomInt(20, 100);
        altura = this.randomInt(5, 30);
        break;
      default:
        masa = this.randomInt(50, 300);
        altura = this.randomInt(10, 100);
    }

    const resultado = calc.calcular({
      tipo: "energia_potencial",
      payload: { masa, g, altura },
    });

    const energia = resultado.resultado;
    const opciones = this.mezclar([
      energia.toString(),
      ...this.generarOpcionesIncorrectas(energia, 3, 0.35).map(String),
    ]);
    const pointCount = 5;
    const step = altura / (pointCount - 1);
    const positionSeries = Array.from({ length: pointCount }, (_, index) => {
      const h = Number((index * step).toFixed(2));
      const ep = Number((masa * g * h).toFixed(2));
      return { x: h, y: ep };
    });
    const zeroSeries = positionSeries.map((point) => ({ x: point.x, y: 0 }));

    return {
      id: this.generateId("ep"),
      materia: this.materia,
      categoria: "energia_potencial",
      nivel: params.nivel,
      enunciado:
        `Un objeto de ${masa} kg está a ${altura} m de altura. ¿Cuál es su energía potencial gravitatoria? (g = 9.8 m/s²)`,
      tipoRespuesta: "multiple",
      datos: { masa, g, altura },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${energia} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["energia", "potencial", "gravedad"],
      },
      visual: {
        kind: "energy-chart",
        title: "Energía potencial gravitatoria",
        description:
          "La energía potencial aumenta con la altura para una masa constante.",
        axes: {
          x: { label: "Altura", unit: "m", variable: "posicion" },
          y: { label: "Energía", unit: "J" },
        },
        series: [
          {
            id: "ep-series",
            label: "Energía potencial (Ep)",
            energyType: "Ep",
            data: positionSeries,
            color: "#38BDF8",
          },
          {
            id: "ec-series",
            label: "Energía cinética (Ec)",
            energyType: "Ec",
            data: zeroSeries,
            color: "#F97316",
          },
          {
            id: "et-series",
            label: "Energía total (Etotal)",
            energyType: "Etotal",
            data: positionSeries,
            color: "#22C55E",
          },
        ],
        conservation: {
          note: "Se está realizando trabajo externo al elevar el objeto.",
        },
      },
    };
  }
}
