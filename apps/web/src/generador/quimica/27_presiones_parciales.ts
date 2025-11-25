// src/generators/quimica/27_presiones_parciales.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarPresionesParciales: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Mezcla de dos gases A y B
  const nA = dificultad === "facil"
    ? randFloat(0.5, 2.0, 2)
    : randFloat(1.0, 4.0, 2);

  const nB = dificultad === "facil"
    ? randFloat(0.5, 2.0, 2)
    : randFloat(1.0, 4.0, 2);

  const nTotal = nA + nB;

  const Ptotal = dificultad === "facil"
    ? randFloat(0.8, 1.5, 2)    // atm
    : randFloat(1.0, 3.0, 2);

  const xA = nA / nTotal;
  const xB = nB / nTotal;
  const PA = xA * Ptotal;
  const PB = xB * Ptotal;

  const nAR = parseFloat(nA.toFixed(2));
  const nBR = parseFloat(nB.toFixed(2));
  const PtotalR = parseFloat(Ptotal.toFixed(2));
  const xAR = parseFloat(xA.toFixed(3));
  const xBR = parseFloat(xB.toFixed(3));
  const PAR = parseFloat(PA.toFixed(2));
  const PBR = parseFloat(PB.toFixed(2));

  return {
    idTema: 27,
    tituloTema: "Presiones parciales (Ley de Dalton)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "En un recipiente se mezclan dos gases ideales A y B a la misma temperatura.\n" +
      `Hay n(A) = ${nAR} mol y n(B) = ${nBR} mol, y la presión total del recipiente es P_total = ${PtotalR} atm.\n` +
      "a) Calcula la fracción molar de cada gas.\n" +
      "b) Calcula la presión parcial de A (P_A) y de B (P_B).",
    datos: {
      nA: nAR,
      nB: nBR,
      Ptotal: PtotalR,
    },
    unidades: {
      nA: "mol",
      nB: "mol",
      Ptotal: "atm",
      resultado_PA: "atm",
      resultado_PB: "atm",
    },
    resultado: {
      xA: xAR,
      xB: xBR,
      PA: PAR,
      PB: PBR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Calcula el número total de moles: n_total = n(A) + n(B).",
      "Halla las fracciones molares: x(A) = n(A)/n_total y x(B) = n(B)/n_total.",
      "Aplica la ley de Dalton: P_A = x(A) · P_total y P_B = x(B) · P_total.",
      "Redondea fracciones molares a 3 decimales y presiones parciales a 2.",
    ],
  };
};
