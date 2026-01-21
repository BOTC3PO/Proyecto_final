// src/generators/quimica/08_rendimiento_teorico.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

// Reacción: 2 H2 + O2 → 2 H2O
const M_H2 = 2.0;   // g/mol
const M_H2O = 18.0; // g/mol

export const generarRendimientoTeorico: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaH2 = dificultad === "facil"
    ? randFloat(2, 10, 1)
    : randFloat(5, 20, 1);

  const nH2 = masaH2 / M_H2;
  // relación molar 2 H2 → 2 H2O, o sea 1:1
  const nH2Oteorico = nH2;
  const masaH2Oteorica = nH2Oteorico * M_H2O;

  const masaH2r = parseFloat(masaH2.toFixed(1));
  const masaH2Oteor = parseFloat(masaH2Oteorica.toFixed(2));

  return {
    idTema: 8,
    tituloTema: "Rendimiento teórico",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se considera la reacción de formación de agua:\n" +
      "2 H₂(g) + O₂(g) → 2 H₂O(l)\n\n" +
      `Se hacen reaccionar completamente ${masaH2r} g de H₂ con exceso de O₂.\n` +
      "Calcula la masa teórica de agua (H₂O) que se puede obtener.",
    datos: {
      masaH2: masaH2r,
      masaMolarH2: M_H2,
      masaMolarH2O: M_H2O,
    },
    unidades: {
      masaH2: "g",
      masaMolarH2: "g/mol",
      masaMolarH2O: "g/mol",
      resultado: "g",
    },
    resultado: masaH2Oteor,
    visualSpec: {
      kind: "chart",
      chartType: "bar",
      title: "Masa teórica de producto",
      xAxis: { label: "Sustancia" },
      yAxis: { label: "Masa (g)" },
      series: [
        {
          id: "masas",
          label: "Masa",
          data: [
            { x: "H₂ (reactivo)", y: masaH2r },
            { x: "H₂O (teórico)", y: masaH2Oteor },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Convierte la masa de H₂ a moles: n(H₂) = m(H₂) / M(H₂).",
      "Usa la relación estequiométrica 2 H₂ → 2 H₂O (1:1 en moles).",
      "Los moles teóricos de H₂O son iguales a los moles de H₂.",
      "Convierte los moles de H₂O a masa: m(H₂O) = n(H₂O) · M(H₂O).",
    ],
  };
};
