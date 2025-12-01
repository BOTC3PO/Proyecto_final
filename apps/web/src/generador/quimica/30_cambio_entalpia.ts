// src/generators/quimica/30_cambio_entalpia.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

const M_CH4 = 16.0;      // g/mol aprox
const DELTAH_MOLAR = -890; // kJ/mol de CH4 (combustión)

export const generarCambioEntalpia: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaCH4 = dificultad === "facil"
    ? randFloat(5, 25, 1)        // g
    : randFloat(10, 50, 1);

  const nCH4 = masaCH4 / M_CH4;   // mol
  const deltaH = nCH4 * DELTAH_MOLAR; // kJ

  const masaCH4R = parseFloat(masaCH4.toFixed(1));
  const deltaHR = parseFloat(deltaH.toFixed(1));

  return {
    idTema: 30,
    tituloTema: "Cambio de entalpía ΔH por ecuación química",
    dificultad,
    tipo: "numeric",
    enunciado:
      "La combustión completa del metano se describe por la reacción:\n" +
      "CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)\n" +
      "con un cambio de entalpía estándar ΔH° = –890 kJ por mol de CH₄.\n\n" +
      `Si se queman completamente ${masaCH4R} g de CH₄,\n` +
      "calcula el cambio de entalpía total ΔH (en kJ) para esta cantidad de metano.",
    datos: {
      masaCH4: masaCH4R,
      masaMolarCH4: M_CH4,
      deltaHMolar: DELTAH_MOLAR,
    },
    unidades: {
      masaCH4: "g",
      masaMolarCH4: "g/mol",
      deltaHMolar: "kJ/mol",
      resultado: "kJ",
    },
    resultado: deltaHR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de CH₄ a moles: n = m / M.",
      "Usa el cambio de entalpía molar: ΔH_total = n · (ΔH° por mol).",
      "Sustituye el número de moles y el valor de –890 kJ/mol.",
      "Redondea el resultado a 1 decimal (será negativo porque la reacción es exotérmica).",
    ],
  };
};
