// src/generators/quimica/23_ley_charles.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarLeyCharles: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const V1 = dificultad === "facil"
    ? randFloat(1.0, 3.0, 2)   // L
    : randFloat(1.0, 5.0, 2);

  const T1 = randFloat(280, 310, 0); // K (aprox 7–37 °C)

  // Calentamos el gas → T2 mayor que T1
  const deltaT = dificultad === "facil"
    ? randFloat(10, 40, 0)
    : randFloat(20, 80, 0);

  const T2 = T1 + deltaT;
  const V2 = (V1 * T2) / T1;

  const V1R = parseFloat(V1.toFixed(2));
  const T1R = parseFloat(T1.toFixed(0));
  const T2R = parseFloat(T2.toFixed(0));
  const V2R = parseFloat(V2.toFixed(2));

  return {
    idTema: 23,
    tituloTema: "Ley de Charles",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Un gas se encuentra contenido en un cilindro a presión constante.\n" +
      `Su volumen inicial es V₁ = ${V1R} L y la temperatura inicial T₁ = ${T1R} K.\n` +
      `Luego se calienta el gas hasta una temperatura T₂ = ${T2R} K.\n` +
      "Suponiendo presión constante, calcula el nuevo volumen V₂ del gas.",
    datos: {
      V1: V1R,
      T1: T1R,
      T2: T2R,
    },
    unidades: {
      V1: "L",
      T1: "K",
      T2: "K",
      resultado: "L",
    },
    resultado: V2R,
    toleranciaRelativa: 0.03,
    pasos: [
      "Aplica la ley de Charles: V₁ / T₁ = V₂ / T₂.",
      "Despeja V₂: V₂ = V₁ · (T₂ / T₁).",
      "Sustituye los valores de V₁, T₁ y T₂ (en Kelvin).",
      "Redondea el resultado a 2 decimales.",
    ],
  };
};
