// src/generators/quimica/28_mezcla_gases.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

const R = 0.082; // L·atm·K⁻¹·mol⁻¹

export const generarMezclaGases: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const nA = dificultad === "facil"
    ? randFloat(0.5, 2.0, 2)
    : randFloat(1.0, 4.0, 2);

  const nB = dificultad === "facil"
    ? randFloat(0.5, 2.0, 2)
    : randFloat(1.0, 4.0, 2);

  const nTotal = nA + nB;

  const T = randFloat(290, 320, 0);       // K
  const V = dificultad === "facil"
    ? randFloat(5, 15, 1)                 // L
    : randFloat(5, 25, 1);

  // P_total = n_total · R · T / V
  const Ptotal = (nTotal * R * T) / V;

  const xA = nA / nTotal;
  const xB = nB / nTotal;
  const PA = xA * Ptotal;
  const PB = xB * Ptotal;

  const nAR = parseFloat(nA.toFixed(2));
  const nBR = parseFloat(nB.toFixed(2));
  const TR = parseFloat(T.toFixed(0));
  const VR = parseFloat(V.toFixed(1));
  const PtotalR = parseFloat(Ptotal.toFixed(2));
  const xAR = parseFloat(xA.toFixed(3));
  const xBR = parseFloat(xB.toFixed(3));
  const PAR = parseFloat(PA.toFixed(2));
  const PBR = parseFloat(PB.toFixed(2));

  return {
    idTema: 28,
    tituloTema: "Mezcla de gases (fracción molar, presión total)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "En un recipiente de volumen V se encuentran dos gases ideales A y B a la misma temperatura T.\n" +
      `Hay n(A) = ${nAR} mol y n(B) = ${nBR} mol en un volumen de ${VR} L a T = ${TR} K.\n` +
      "a) Calcula la presión total del gas (P_total).\n" +
      "b) Calcula la fracción molar de cada gas.\n" +
      "c) Calcula las presiones parciales P_A y P_B.",
    datos: {
      nA: nAR,
      nB: nBR,
      T: TR,
      V: VR,
      R,
    },
    unidades: {
      nA: "mol",
      nB: "mol",
      T: "K",
      V: "L",
      resultado_Ptotal: "atm",
      resultado_PA: "atm",
      resultado_PB: "atm",
    },
    resultado: {
      Ptotal: PtotalR,
      xA: xAR,
      xB: xBR,
      PA: PAR,
      PB: PBR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Calcula los moles totales: n_total = n(A) + n(B).",
      "Aplica la ecuación de gas ideal para la mezcla: P_total = n_total·R·T / V.",
      "Halla las fracciones molares: x(A) = n(A)/n_total, x(B) = n(B)/n_total.",
      "Usa P_A = x(A)·P_total y P_B = x(B)·P_total para las presiones parciales.",
    ],
  };
};
