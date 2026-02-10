// src/ejercicios/fisica/temaCambiosEstado.ts
import { FisicaBaseGenerator } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CambiosEstadoGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica/cambios_estado";
  categorias: string[] = ["cambios_estado"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let calorLatente: number;
    const sustancia = this.prng.next() > 0.5 ? "agua" : "hielo";

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 500);
        calorLatente = sustancia === "agua" ? 2260 : 334; // kJ/kg
        break;
      case "intermedio":
        masa = this.randomInt(200, 1000);
        calorLatente = sustancia === "agua" ? 2260 : 334;
        break;
      default:
        masa = this.randomInt(500, 3000);
        calorLatente = sustancia === "agua" ? 2260 : 334;
    }

    const resultado = calc.calcular({
      tipo: "cambio_estado",
      payload: { masa: masa / 1000, calorLatente }, // g → kg
    });

    const calor = resultado.resultado;
    const opciones = this.mezclar([
      calor.toString(),
      ...this.generarOpcionesIncorrectas(calor, 3, 0.35).map(String),
    ]);
    const pointCount = 5;
    const duration = 4;
    const step = duration / (pointCount - 1);
    const energySeries = Array.from({ length: pointCount }, (_, index) => {
      const t = Number((index * step).toFixed(2));
      const q = Number(((calor * index) / (pointCount - 1)).toFixed(2));
      return { x: t, y: q };
    });

    const proceso = sustancia === "agua" ? "evaporar" : "fundir";
    const temperature = sustancia === "agua" ? 373 : 273;
    const entropyTotal = Number((calor / temperature).toFixed(4));
    const tsData = Array.from({ length: pointCount }, (_, index) => {
      const entropy = Number(((entropyTotal * index) / (pointCount - 1)).toFixed(4));
      return { x: entropy, y: temperature };
    });

    return {
      id: this.generateId("cambio_estado"),
      materia: this.materia,
      categoria: "cambios_estado",
      nivel: params.nivel,
      enunciado:
        `¿Cuánto calor se necesita para ${proceso} ${masa} g de ${sustancia}? (L = ${calorLatente} kJ/kg)`,
      tipoRespuesta: "multiple",
      datos: { masa, calorLatente, sustancia },
      opciones: opciones.map((o) => `${o} kJ`),
      respuestaCorrecta: `${calor} kJ`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "cambio-estado", "calor-latente"],
      },
      visual: {
        kind: "energy-chart",
        title: "Calor latente en cambio de fase",
        description:
          "Durante el cambio de estado, la temperatura se mantiene constante mientras aumenta la energía.",
        axes: {
          x: { label: "Tiempo", unit: "s", variable: "tiempo" },
          y: { label: "Energía", unit: "kJ" },
        },
        series: [
          {
            id: "et-series",
            label: "Energía total (Etotal)",
            energyType: "Etotal",
            data: energySeries,
            color: "#22C55E",
          },
        ],
        conservation: {
          note: "El calor aportado incrementa la energía interna.",
        },
        thermodynamic: {
          ts: {
            title: "Diagrama T-S (fase constante)",
            xAxis: { label: "Entropía", unit: "kJ/K" },
            yAxis: { label: "Temperatura", unit: "K" },
            data: tsData,
            color: "#6366F1",
          },
        },
      },
    };
  }
}
