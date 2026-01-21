// src/generators/quimica/70_radio_atomico_comparacion.ts
// src/generators/quimica/70_radio_atomico_comparacion.ts
import type { GeneratorFn, QuizExercise } from "./generico";
import { PERIODIC_TABLE_ELEMENTS } from "./periodicTableData";

interface ParRadioAtomico {
  elemento1: string;
  elemento2: string;
  mayorRadio: string;
}

const PARES_RADIO: ParRadioAtomico[] = [
  // mismo período: más a la izquierda = mayor radio
  { elemento1: "Na", elemento2: "Mg", mayorRadio: "Na" },
  { elemento1: "C", elemento2: "O", mayorRadio: "C" },
  { elemento1: "Al", elemento2: "Cl", mayorRadio: "Al" },
  // mismo grupo: más abajo = mayor radio
  { elemento1: "Li", elemento2: "Cs", mayorRadio: "Cs" },
  { elemento1: "F", elemento2: "Br", mayorRadio: "Br" },
  { elemento1: "Be", elemento2: "Ba", mayorRadio: "Ba" },
];

export const generarRadioAtomicoComparacion: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PARES_RADIO.length);
  const par = PARES_RADIO[index];

  const opciones = [par.elemento1, par.elemento2];
  const indiceCorrecto = opciones.indexOf(par.mayorRadio);

  const enunciado =
    "Considera la tendencia del radio atómico en la tabla periódica.\n" +
    `Entre los elementos ${par.elemento1} y ${par.elemento2}, ¿cuál tiene mayor radio atómico?`;

  return {
    idTema: 70,
    tituloTema: "Radio atómico (comparación)",
    dificultad,
    tipo: "quiz",
    enunciado,
    opciones,
    indiceCorrecto,
    visualSpec: {
      kind: "chem-periodic-table",
      title: "Radio atómico",
      description: "Comparación del tamaño atómico en la tabla.",
      highlightProperty: {
        key: "atomicRadius",
        label: "Radio atómico",
        unit: "pm",
      },
      scale: {
        type: "sequential",
        colors: ["#fee2e2", "#ef4444"],
      },
      elements: PERIODIC_TABLE_ELEMENTS,
      focusElements: [par.elemento1, par.elemento2],
    },
    explicacion:
      "El radio atómico aumenta al descender en un grupo y disminuye al avanzar de izquierda a derecha en un período.",
  };
};
