// src/generators/quimica/21_preparacion_soluciones.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

// Usamos NaCl como ejemplo
const MASA_MOLAR_NACL = 58.5; // g/mol aprox

export const generarPreparacionSoluciones: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const M = dificultad === "facil"
    ? randFloat(0.1, 0.5, 2)     // mol/L
    : randFloat(0.5, 2.0, 2);

  const V = dificultad === "facil"
    ? randFloat(0.1, 0.5, 2)     // L
    : randFloat(0.25, 1.0, 2);

  const moles = M * V;
  const masa = moles * MASA_MOLAR_NACL;

  const MR = parseFloat(M.toFixed(2));
  const VR = parseFloat(V.toFixed(2));
  const masaR = parseFloat(masa.toFixed(2));

  return {
    idTema: 21,
    tituloTema: "Preparación de soluciones (masa necesaria)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se desea preparar una solución acuosa de NaCl (M ≈ 58,5 g/mol).\n" +
      `La concentración deseada es de ${MR} mol/L y el volumen final ${VR} L.\n` +
      "Calcula la masa de NaCl que se debe pesar para preparar la solución.",
    datos: {
      molaridad: MR,
      volumen: VR,
      masaMolarNaCl: MASA_MOLAR_NACL,
    },
    unidades: {
      molaridad: "mol/L",
      volumen: "L",
      masaMolarNaCl: "g/mol",
      resultado: "g",
    },
    resultado: masaR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula primero los moles necesarios: n = M · V.",
      "Luego convierte moles a masa: m = n · M_molar.",
      "Sustituye los valores y redondea el resultado a 2 decimales.",
    ],
  };
};
