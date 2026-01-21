// src/ejercicios/fisica/temaCalor.ts
import { FisicaBaseGenerator, ENUNCIADOS_FISICA } from "./generico";
import type { GeneradorParametros, Ejercicio, Calculator } from "../core/types";

export class CalorGenerator extends FisicaBaseGenerator {
  readonly id = "fisica/termodinamica/calor";
  categorias: string[] = ["calor"];

  generarEjercicio(params: GeneradorParametros, calc: Calculator): Ejercicio {
    let masa: number;
    let calorEspecifico: number;
    let deltaT: number;

    switch (params.nivel) {
      case "basico":
        masa = this.randomInt(100, 500);
        calorEspecifico = 4.18; // agua
        deltaT = this.randomInt(10, 50);
        break;
      case "intermedio":
        masa = this.randomInt(200, 1000);
        calorEspecifico = [4.18, 0.385, 0.9][this.randomInt(0, 2)]; // agua, cobre, aluminio
        deltaT = this.randomInt(20, 80);
        break;
      default:
        masa = this.randomInt(500, 3000);
        calorEspecifico = this.redondear(Math.random() * 4 + 0.3, 2);
        deltaT = this.randomInt(30, 150);
    }

    const resultado = calc.calcular({
      tipo: "calor",
      payload: { masa: masa / 1000, calorEspecifico, deltaT }, // g → kg
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
    const temperatureStart = 293;
    const temperatureEnd = temperatureStart + deltaT;
    const tsData = Array.from({ length: pointCount }, (_, index) => {
      const ratio = index / (pointCount - 1);
      const temperature = Number((temperatureStart + ratio * (temperatureEnd - temperatureStart)).toFixed(2));
      const entropy = Number((masa * calorEspecifico * Math.log(temperature / temperatureStart)).toFixed(2));
      return { x: entropy, y: temperature };
    });

    return {
      id: this.generateId("calor"),
      materia: this.materia,
      categoria: "calor",
      nivel: params.nivel,
      enunciado:
        ENUNCIADOS_FISICA["calor"][0] ||
        `¿Cuánto calor se necesita para elevar la temperatura de ${masa} g de una sustancia (c = ${calorEspecifico} J/g°C) en ${deltaT}°C?`,
      tipoRespuesta: "multiple",
      datos: { masa, calorEspecifico, deltaT },
      opciones: opciones.map((o) => `${o} J`),
      respuestaCorrecta: `${calor} J`,
      explicacionPasoAPaso: resultado.pasos,
      metadatos: {
        tags: ["termodinamica", "calor", "temperatura"],
      },
      visual: {
        kind: "energy-chart",
        title: "Calor transferido",
        description:
          "El calor aumenta con el tiempo y se puede visualizar en un diagrama T-S.",
        axes: {
          x: { label: "Tiempo", unit: "s", variable: "tiempo" },
          y: { label: "Energía", unit: "J" },
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
          note: "El sistema recibe energía en forma de calor.",
        },
        thermodynamic: {
          ts: {
            title: "Diagrama T-S (calentamiento)",
            xAxis: { label: "Entropía", unit: "J/K" },
            yAxis: { label: "Temperatura", unit: "K" },
            data: tsData,
            color: "#6366F1",
          },
        },
      },
    };
  }
}
