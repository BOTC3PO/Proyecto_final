// src/generators/quimica/09_porcentaje_rendimiento.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

// Reacción: 2 H2 + O2 → 2 H2O
const M_H2 = 2.0;   // g/mol
const M_H2O = 18.0; // g/mol

export const generarPorcentajeRendimiento: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaH2 = dificultad === "facil"
    ? randFloat(2, 10, 1)
    : randFloat(5, 20, 1);

  const nH2 = masaH2 / M_H2;
  const nH2Oteorico = nH2;
  const masaH2Oteorica = nH2Oteorico * M_H2O;

  // rendimiento real entre 60% y 95%
  const factorReal = dificultad === "facil"
    ? randFloat(0.8, 0.95, 2)
    : randFloat(0.6, 0.95, 2);

  const masaH2Oreal = masaH2Oteorica * factorReal;

  const masaH2r = parseFloat(masaH2.toFixed(1));
  const masaTeorR = parseFloat(masaH2Oteorica.toFixed(2));
  const masaRealR = parseFloat(masaH2Oreal.toFixed(2));
  const porcentajeRend = (masaRealR / masaTeorR) * 100;
  const porcentajeR = parseFloat(porcentajeRend.toFixed(1));

  return {
    idTema: 9,
    tituloTema: "Porcentaje de rendimiento",
    dificultad,
    tipo: "numeric",
    enunciado:
      "En la reacción de formación de agua:\n" +
      "2 H₂(g) + O₂(g) → 2 H₂O(l)\n\n" +
      `Se hacen reaccionar ${masaH2r} g de H₂ con exceso de O₂.\n` +
      `La masa teórica de agua que podría obtenerse es de ${masaTeorR} g.\n` +
      `En el laboratorio se obtienen realmente ${masaRealR} g de agua.\n` +
      "Calcula el porcentaje de rendimiento de la reacción.",
    datos: {
      masaH2: masaH2r,
      masaTeoricaH2O: masaTeorR,
      masaRealH2O: masaRealR,
    },
    unidades: {
      masaH2: "g",
      masaTeoricaH2O: "g",
      masaRealH2O: "g",
      resultado: "%",
    },
    resultado: porcentajeR,
    visualSpec: {
      kind: "chart",
      chartType: "bar",
      title: "Rendimiento real vs teórico",
      xAxis: { label: "Masa (g)" },
      yAxis: { label: "Valor" },
      series: [
        {
          id: "rendimiento",
          label: "Agua obtenida",
          data: [
            { x: "Teórica", y: masaTeorR },
            { x: "Real", y: masaRealR },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula el rendimiento teórico de agua (ya dado en el enunciado).",
      "Aplica la fórmula: % rendimiento = (masa real / masa teórica) · 100.",
      "Sustituye las masas y redondea el resultado a 1 decimal.",
    ],
  };
};
