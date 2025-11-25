// src/generators/quimica/49_anodo_catodo.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarAnodoCatodo: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const E1 = dificultad === "facil"
    ? randFloat(-0.8, 0.2, 2)
    : randFloat(-1.2, 0.4, 2);

  const E2 = dificultad === "facil"
    ? randFloat(0.0, 1.0, 2)
    : randFloat(-0.1, 1.2, 2);

  const E1R = parseFloat(E1.toFixed(2));
  const E2R = parseFloat(E2.toFixed(2));

  let anodo: string;
  let catodo: string;

  if (E1R > E2R) {
    catodo = "Electrodo 1";
    anodo = "Electrodo 2";
  } else if (E2R > E1R) {
    catodo = "Electrodo 2";
    anodo = "Electrodo 1";
  } else {
    // Si por casualidad salen iguales, fuerza una elección simple
    catodo = "Ninguno (E° iguales)";
    anodo = "Ninguno (E° iguales)";
  }

  const enunciado =
    "Se tienen dos semireacciones (como reducciones estándar):\n\n" +
    "Electrodo 1: Ox₁ + ne⁻ ⇌ Red₁   E°₁ = " + E1R + " V\n" +
    "Electrodo 2: Ox₂ + ne⁻ ⇌ Red₂   E°₂ = " + E2R + " V\n\n" +
    "En una celda galvánica, el electrodo con mayor E° de reducción actúa como cátodo (se reduce)\n" +
    "y el de menor E° actúa como ánodo (se oxida).\n\n" +
    "Indica cuál de los dos electrodos actuará como ánodo y cuál como cátodo.";

  return {
    idTema: 49,
    tituloTema: "Determinación de ánodo y cátodo",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      E1: E1R,
      E2: E2R,
    },
    unidades: {
      E1: "V",
      E2: "V",
      resultado:  "sin unidad",
    },
    resultado: {
      anodo,
      catodo,
    },
    pasos: [
      "Recuerda: en una celda galvánica el electrodo con E°red más alto se reduce (cátodo).",
      "El electrodo con E°red más bajo se oxida (ánodo).",
      "Compara E°₁ y E°₂ y asigna cátodo al mayor, ánodo al menor.",
    ],
  };
};
