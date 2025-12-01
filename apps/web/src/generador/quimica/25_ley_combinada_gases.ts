// src/generators/quimica/25_ley_combinada_gases.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarLeyCombinadaGases: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const P1 = dificultad === "facil"
    ? randFloat(0.8, 1.2, 2)   // atm
    : randFloat(0.5, 2.0, 2);

  const V1 = dificultad === "facil"
    ? randFloat(1.0, 3.0, 2)   // L
    : randFloat(1.0, 5.0, 2);

  const T1 = randFloat(280, 310, 0); // K

  // Cambiamos volumen y temperatura, pedimos P2
  const factorVolumen = dificultad === "facil"
    ? randFloat(0.6, 1.4, 2)   // V2 algo distinto
    : randFloat(0.5, 1.5, 2);
  const deltaT = dificultad === "facil"
    ? randFloat(10, 40, 0)
    : randFloat(20, 80, 0);

  const V2 = V1 * factorVolumen;
  const T2 = T1 + deltaT;

  // P1·V1 / T1 = P2·V2 / T2  →  P2 = (P1·V1·T2) / (T1·V2)
  const P2 = (P1 * V1 * T2) / (T1 * V2);

  const P1R = parseFloat(P1.toFixed(2));
  const V1R = parseFloat(V1.toFixed(2));
  const T1R = parseFloat(T1.toFixed(0));
  const V2R = parseFloat(V2.toFixed(2));
  const T2R = parseFloat(T2.toFixed(0));
  const P2R = parseFloat(P2.toFixed(2));

  return {
    idTema: 25,
    tituloTema: "Ley combinada de los gases",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Un gas ideal sufre simultáneamente cambios de presión, volumen y temperatura.\n" +
      `Inicialmente se encuentra a P₁ = ${P1R} atm, V₁ = ${V1R} L y T₁ = ${T1R} K.\n` +
      `Tras el cambio, ocupa un volumen V₂ = ${V2R} L a una temperatura T₂ = ${T2R} K.\n` +
      "Calcula la nueva presión P₂ del gas (en atm), suponiendo cantidad de gas constante.",
    datos: {
      P1: P1R,
      V1: V1R,
      T1: T1R,
      V2: V2R,
      T2: T2R,
    },
    unidades: {
      P1: "atm",
      V1: "L",
      T1: "K",
      V2: "L",
      T2: "K",
      resultado: "atm",
    },
    resultado: P2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Utiliza la ley combinada: (P₁·V₁)/T₁ = (P₂·V₂)/T₂.",
      "Despeja P₂: P₂ = (P₁·V₁·T₂) / (T₁·V₂).",
      "Sustituye los valores de P₁, V₁, T₁, V₂ y T₂ (temperaturas en Kelvin).",
      "Redondea el resultado a 2 decimales.",
    ],
  };
};
