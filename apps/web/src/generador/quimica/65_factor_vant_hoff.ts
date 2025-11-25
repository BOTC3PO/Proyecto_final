// src/generators/quimica/65_factor_vant_hoff.ts
import {
  GeneratorFn,
  NumericExercise,
} from "./generico";

type SalInfo = {
  nombre: string;
  formula: string;
  iones: number; // número de partículas en disolución
};

const SALES: SalInfo[] = [
  { nombre: "cloruro de sodio", formula: "NaCl", iones: 2 },
  { nombre: "cloruro de calcio", formula: "CaCl₂", iones: 3 },
  { nombre: "nitrato de sodio", formula: "NaNO₃", iones: 2 },
  { nombre: "sulfato de sodio", formula: "Na₂SO₄", iones: 3 },
  { nombre: "sulfato de aluminio", formula: "Al₂(SO₄)₃", iones: 5 },
  { nombre: "urea", formula: "CO(NH₂)₂", iones: 1 }, // no electrolito
];

export const generarFactorVantHoff: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const index = Math.floor(Math.random() * SALES.length);
  const sal = SALES[index];

  const iTeorico = sal.iones;
  const iR = iTeorico; // es entero

  const enunciado =
    "En una primera aproximación, el factor de van 't Hoff i se puede estimar\n" +
    "contando cuántas partículas (iones) se forman por cada unidad de soluto disuelta.\n\n" +
    `Considera el soluto ${sal.nombre} (${sal.formula}), que se disuelve en agua de manera ideal.\n` +
    "Asumiendo disociación completa, indica el valor teórico del factor i para esta sustancia.";

  return {
    idTema: 65,
    tituloTema: "Factor de van 't Hoff (i)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      i: iR,
    },
    unidades: {
      resultado: "adimensional",
    },
    resultado: iR,
    toleranciaRelativa: 0, // debe ser exacto
    pasos: [
      "Escribe la disociación aproximada en agua de la sal dada (por ejemplo, NaCl → Na⁺ + Cl⁻).",
      "Cuenta cuántas partículas (iones o moléculas) aparecen por cada unidad fórmula en disolución.",
      "Ese número es el factor de van 't Hoff i teórico para esa sustancia.",
    ],
  };
};
