// src/generators/quimica/38_concentraciones_H_OH.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarConcentracionesH_OH: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // pH entre 1 y 13
  const pH = dificultad === "facil"
    ? randFloat(1.0, 6.0, 1)   // ácidas–casi neutras
    : randFloat(1.0, 13.0, 1); // rango más amplio

  const H = Math.pow(10, -pH);
  const pOH = 14 - pH;
  const OH = Math.pow(10, -pOH);

  const pHR = Number(pH.toFixed(1));
  const HR = Number(H.toExponential(2));
  const OHR = Number(OH.toExponential(2));

  return {
    idTema: 38,
    tituloTema: "Cálculo de concentración de H⁺ y OH⁻",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Una disolución acuosa tiene un pH de ${pHR}.\n` +
      "Calcula:\n" +
      "a) La concentración de iones hidrógeno [H⁺] en mol/L.\n" +
      "b) La concentración de iones hidróxido [OH⁻] en mol/L.\n" +
      "Expresa los resultados en notación científica.",
    datos: {
      pH: pHR,
    },
    unidades: {
      resultado_H: "mol/L",
      resultado_OH: "mol/L",
    },
    resultado: {
      H: HR,
      OH: OHR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Usa la definición de pH: pH = −log₁₀[H⁺] → [H⁺] = 10⁻ᵖᴴ.",
      "Calcula [H⁺] aplicando la potencia de 10 correspondiente.",
      "Recuerda que pH + pOH = 14 en agua a 25 °C, así que pOH = 14 − pH.",
      "Calcula [OH⁻] usando [OH⁻] = 10⁻ᵖᴼᴴ.",
      "Expresa ambas concentraciones en notación científica.",
    ],
  };
};
