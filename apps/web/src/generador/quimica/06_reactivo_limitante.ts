// src/generators/quimica/06_reactivo_limitante.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  randomBool,
} from "./generico";

const M_N2 = 28.0; // g/mol
const M_H2 = 2.0;  // g/mol

export const generarReactivoLimitante: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Reacción: N2 + 3 H2 → 2 NH3
  // Hacemos que uno de los dos sea claramente limitante
  const limitarPor = randomBool() ? "N2" : "H2";

  let masaN2: number;
  let masaH2: number;
  let reactivoLimitante: "N2" | "H2";
  let molesNH3: number;

  if (limitarPor === "N2") {
    const nN2 = dificultad === "facil"
      ? randFloat(0.5, 2.0, 2)
      : randFloat(1.0, 4.0, 2);
    const nH2req = 3 * nN2;
    const factorExceso = randFloat(1.2, 2.0, 2);
    const nH2 = nH2req * factorExceso;

    masaN2 = nN2 * M_N2;
    masaH2 = nH2 * M_H2;
    reactivoLimitante = "N2";
    molesNH3 = 2 * nN2; // 1 N2 → 2 NH3
  } else {
    const nH2 = dificultad === "facil"
      ? randFloat(1.0, 3.0, 2)
      : randFloat(1.5, 5.0, 2);
    const nN2req = nH2 / 3;
    const factorExceso = randFloat(1.2, 2.0, 2);
    const nN2 = nN2req * factorExceso;

    masaN2 = nN2 * M_N2;
    masaH2 = nH2 * M_H2;
    reactivoLimitante = "H2";
    molesNH3 = (2 / 3) * nH2; // 3 H2 → 2 NH3
  }

  const masaN2r = parseFloat(masaN2.toFixed(1));
  const masaH2r = parseFloat(masaH2.toFixed(1));
  const molesNH3r = parseFloat(molesNH3.toFixed(3));
  const molesN2r = parseFloat((masaN2 / M_N2).toFixed(3));
  const molesH2r = parseFloat((masaH2 / M_H2).toFixed(3));

  return {
    idTema: 6,
    tituloTema: "Reactivo limitante",
    dificultad,
    tipo: "numeric",
    enunciado:
      "La reacción de síntesis del amoníaco es:\n" +
      "N₂(g) + 3 H₂(g) → 2 NH₃(g)\n\n" +
      `Se mezclan ${masaN2r} g de N₂ y ${masaH2r} g de H₂.\n` +
      "a) Indica cuál es el reactivo limitante.\n" +
      "b) Calcula cuántos moles de NH₃ se pueden formar como máximo.",
    datos: {
      masaN2: masaN2r,
      masaH2: masaH2r,
      masaMolarN2: M_N2,
      masaMolarH2: M_H2,
    },
    unidades: {
      masaN2: "g",
      masaH2: "g",
      masaMolarN2: "g/mol",
      masaMolarH2: "g/mol",
      resultado_molesNH3: "mol",
    },
    resultado: {
      reactivoLimitante,
      molesProducto: molesNH3r,
    },
    visualSpec: {
      kind: "chart",
      chartType: "bar",
      title: "Relación molar inicial",
      xAxis: { label: "Reactivo" },
      yAxis: { label: "Moles" },
      series: [
        {
          id: "moles-reactivos",
          label: "Moles iniciales",
          data: [
            { x: "N₂", y: molesN2r },
            { x: "H₂", y: molesH2r },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte las masas de N₂ y H₂ a moles usando sus masas molares.",
      "Compara la relación n(N₂):n(H₂) con la estequiométrica 1:3.",
      "El que esté en menor proporción respecto a su coeficiente es el reactivo limitante.",
      "Usa el reactivo limitante para calcular los moles máximos de NH₃ producidos.",
    ],
  };
};
