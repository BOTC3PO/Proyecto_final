// src/generators/quimica/03_calculo_masa.ts
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

export const generarCalculoMasa: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const sustancias = Object.keys(MASA_MOLAR_APROX);
  const sustancia = choice(sustancias);
  const M = MASA_MOLAR_APROX[sustancia];

  const moles = dificultad === "facil"
    ? randFloat(0.2, 2.0, 2)
    : dificultad === "media"
    ? randFloat(0.5, 5.0, 2)
    : randFloat(1.0, 10.0, 2);

  const masa = moles * M;

  return {
    idTema: 3,
    tituloTema: "Cálculo de masa",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Se tienen ${moles} mol de ${sustancia} (M ≈ ${M} g/mol).\n` +
      `Calcula la masa de la muestra en gramos.`,
    datos: { moles, masaMolar: M },
    unidades: { moles: "mol", masaMolar: "g/mol", resultado: "g" },
    resultado: parseFloat(masa.toFixed(2)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Usa la relación: m = n · M.",
      `Sustituye: m = ${moles} mol · ${M} g/mol.`,
      "Redondea el resultado a 2 cifras decimales.",
    ],
  };
};
