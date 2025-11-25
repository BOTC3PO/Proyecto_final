// src/generators/quimica/02_calculo_moles.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
  choice,
} from "./generico";

const MASA_MOLAR_APROX: Record<string, number> = {
  H2O: 18.0,
  NaCl: 58.5,
  CO2: 44.0,
  O2: 32.0,
  CaCO3: 100.0,
};

export const generarCalculoMoles: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const sustancias = Object.keys(MASA_MOLAR_APROX);
  const sustancia = choice(sustancias);
  const M = MASA_MOLAR_APROX[sustancia];

  const masa = dificultad === "facil"
    ? randFloat(5, 50, 1)
    : dificultad === "media"
    ? randFloat(10, 150, 1)
    : randFloat(20, 300, 1);

  const moles = masa / M;

  return {
    idTema: 2,
    tituloTema: "Cálculo de moles",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Una muestra de ${masa} g de ${sustancia} tiene una masa molar aproximada de ${M} g/mol.\n` +
      `¿Cuántos moles de ${sustancia} hay en la muestra?`,
    datos: { masa, masaMolar: M },
    unidades: { masa: "g", masaMolar: "g/mol", resultado: "mol" },
    resultado: parseFloat(moles.toFixed(3)),
    toleranciaRelativa: 0.02, // ±2%
    pasos: [
      "Usa la relación: n = m / M.",
      `Sustituye: n = ${masa} g / ${M} g/mol.`,
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
