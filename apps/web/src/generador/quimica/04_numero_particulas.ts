// src/generators/quimica/04_numero_particulas.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  choice,
} from "./generico";

const NA = 6.022e23;

const MASA_MOLAR_APROX: Record<string, number> = {
  H2O: 18.0,
  NaCl: 58.5,
  CO2: 44.0,
  O2: 32.0,
};

export const generarNumeroParticulas: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const sustancias = Object.keys(MASA_MOLAR_APROX);
  const sustancia = choice(sustancias);
  const M = MASA_MOLAR_APROX[sustancia];

  const masa = dificultad === "facil"
    ? randFloat(1, 20, 1)
    : randFloat(5, 50, 1);

  const moles = masa / M;
  const particulas = moles * NA;

  return {
    idTema: 4,
    tituloTema: "Número de partículas (Nₐ)",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Se tienen ${masa} g de ${sustancia} (M ≈ ${M} g/mol).\n` +
      `Calcula cuántas partículas (moléculas o átomos, según corresponda) hay en la muestra.\n` +
      `Usa Nₐ = 6.022·10²³ partículas/mol y expresa la respuesta en notación científica.`,
    datos: { masa, masaMolar: M },
    unidades: { masa: "g", masaMolar: "g/mol", resultado: "partículas" },
    resultado: parseFloat(particulas.toExponential(3)), // número en notación científica
    pasos: [
      "Calcula los moles: n = m / M.",
      "Aplica: N = n · Nₐ.",
      "Expresa el resultado en notación científica con 3 cifras significativas.",
    ],
  };
};
