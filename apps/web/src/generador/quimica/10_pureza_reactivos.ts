// src/generators/quimica/10_pureza_reactivos.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

// Descomposición térmica del carbonato de calcio:
// CaCO3(s) → CaO(s) + CO2(g)
const M_CaCO3 = 100.0; // g/mol (aprox)
const M_CO2 = 44.0;    // g/mol (aprox)

export const generarPurezaReactivos: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaMuestra = dificultad === "facil"
    ? randFloat(10, 30, 1)
    : randFloat(20, 50, 1);

  // Elegimos una pureza "real" y calculamos la masa de CO2 que saldría
  const purezaReal = randFloat(60, 95, 1); // %
  const fraccionPura = purezaReal / 100;

  const masaCaCO3puro = masaMuestra * fraccionPura;
  const nCaCO3 = masaCaCO3puro / M_CaCO3;
  const masaCO2 = nCaCO3 * M_CO2;

  // Lo que el alumno ve:
  const masaMuestraR = parseFloat(masaMuestra.toFixed(1));
  const masaCO2R = parseFloat(masaCO2.toFixed(3));

  // Para el resultado, recomputamos la pureza con esos valores redondeados
  const nCaCO3_calc = masaCO2R / M_CO2;
  const masaCaCO3_calc = nCaCO3_calc * M_CaCO3;
  const purezaCalc = (masaCaCO3_calc / masaMuestraR) * 100;
  const purezaR = parseFloat(purezaCalc.toFixed(1));

  return {
    idTema: 10,
    tituloTema: "Pureza de reactivos",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se calienta una muestra impura de carbonato de calcio (CaCO₃), que se descompone según la reacción:\n" +
      "CaCO₃(s) → CaO(s) + CO₂(g)\n\n" +
      `Si una muestra de ${masaMuestraR} g de CaCO₃ impuro produce ${masaCO2R} g de CO₂,\n` +
      "calcula el porcentaje de pureza en CaCO₃ de la muestra original.",
    datos: {
      masaMuestra: masaMuestraR,
      masaCO2: masaCO2R,
      masaMolarCaCO3: M_CaCO3,
      masaMolarCO2: M_CO2,
    },
    unidades: {
      masaMuestra: "g",
      masaCO2: "g",
      masaMolarCaCO3: "g/mol",
      masaMolarCO2: "g/mol",
      resultado: "%",
    },
    resultado: purezaR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de CO₂ a moles: n(CO₂) = m(CO₂) / M(CO₂).",
      "Por estequiometría (1:1), n(CaCO₃) = n(CO₂).",
      "Calcula la masa de CaCO₃ puro: m(CaCO₃) = n(CaCO₃) · M(CaCO₃).",
      "Aplica: % pureza = [m(CaCO₃ puro) / m(muestra)] · 100.",
    ],
  };
};
