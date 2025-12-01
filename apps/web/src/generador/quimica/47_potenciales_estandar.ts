// src/generators/quimica/47_potenciales_estandar.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarPotencialesEstandar: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // E° en voltios, valores típicos entre -1.5 V y +1.5 V
  const E1 = dificultad === "facil"
    ? randFloat(-0.5, 1.0, 2)
    : randFloat(-1.2, 1.2, 2);

  const E2 = dificultad === "facil"
    ? randFloat(-0.5, 1.0, 2)
    : randFloat(-1.2, 1.2, 2);

  const E1R = parseFloat(E1.toFixed(2));
  const E2R = parseFloat(E2.toFixed(2));

  const diferencia = Math.abs(E1R - E2R);
  const diferenciaR = parseFloat(diferencia.toFixed(2));

  const parMasFuerte =
    E1R > E2R ? "Par 1" : (E2R > E1R ? "Par 2" : "Iguales");

  const enunciado =
    "Se comparan dos pares redox a 25 °C con sus potenciales estándar de reducción:\n\n" +
    "Par 1: Ox₁ + n e⁻ ⇌ Red₁   E°₁ = " + E1R + " V\n" +
    "Par 2: Ox₂ + n e⁻ ⇌ Red₂   E°₂ = " + E2R + " V\n\n" +
    "a) Indica cuál de los dos pares tiene mayor tendencia a reducirse (mayor E°).\n" +
    "b) Calcula la diferencia de potencial estándar entre ambos (|E°₁ − E°₂|).";

  return {
    idTema: 47,
    tituloTema: "Potenciales estándar de electrodo (E°)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      E1: E1R,
      E2: E2R,
      diferencia: diferenciaR,
    },
    unidades: {
      E1: "V",
      E2: "V",
      diferencia: "V",
      resultado: "V",
    },
    resultado: {
      parMasFuerte,
      diferencia: diferenciaR,
    },
    toleranciaRelativa: 0.05,
    pasos: [
      "Recuerda: cuanto mayor es E° de reducción, mayor tendencia tiene el par a actuar como agente oxidante (a reducirse).",
      "Compara los valores E°₁ y E°₂ y elige el mayor.",
      "Calcula la diferencia de potencial: |E°₁ − E°₂|.",
    ],
  };
};
