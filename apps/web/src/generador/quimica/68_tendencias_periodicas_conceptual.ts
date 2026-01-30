// src/generators/quimica/68_tendencias_periodicas_conceptual.ts
// src/generators/quimica/68_tendencias_periodicas_conceptual.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";
import { PERIODIC_TABLE_ELEMENTS } from "./periodicTableData";

interface PreguntaTendencia {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
  highlightKey: "atomicRadius" | "electronegativity" | "ionizationEnergy";
  highlightLabel: string;
  highlightUnit?: string;
}

const PREGUNTAS_TENDENCIAS: PreguntaTendencia[] = [
  {
    enunciado:
      "En un mismo período de la tabla periódica, ¿cómo varía generalmente el radio atómico al avanzar de izquierda a derecha?",
    opciones: [
      "Aumenta",
      "Disminuye",
      "Permanece constante",
      "Aumenta y luego disminuye",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En un mismo período aumenta la carga nuclear efectiva y el radio atómico tiende a disminuir de izquierda a derecha.",
    highlightKey: "atomicRadius",
    highlightLabel: "Radio atómico",
    highlightUnit: "pm",
  },
  {
    enunciado:
      "En un mismo grupo de la tabla periódica, al descender hacia abajo, la electronegatividad suele:",
    opciones: [
      "Aumentar",
      "Disminuir",
      "Permanecer constante",
      "Primero aumentar y luego disminuir",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Al bajar en un grupo aumenta el número de capas electrónicas y la atracción por los electrones de enlace disminuye, reduciendo la electronegatividad.",
    highlightKey: "electronegativity",
    highlightLabel: "Electronegatividad",
  },
  {
    enunciado:
      "¿Cuál de las siguientes afirmaciones es correcta sobre la energía de ionización en un período?",
    opciones: [
      "Disminuye de izquierda a derecha.",
      "Aumenta de izquierda a derecha.",
      "Es igual para todos los elementos del período.",
      "No se puede relacionar con la posición en la tabla.",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En general, la energía de ionización aumenta de izquierda a derecha debido al aumento de la carga nuclear efectiva.",
    highlightKey: "ionizationEnergy",
    highlightLabel: "Energía de ionización",
    highlightUnit: "kJ/mol",
  },
];

export const generarTendenciasPeriodicas: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_TENDENCIAS.length - 1);
  const q = PREGUNTAS_TENDENCIAS[index];

  return {
    idTema: 68,
    tituloTema: "Tendencias periódicas (conceptual)",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    visualSpec: {
      kind: "chem-periodic-table",
      title: "Tendencias periódicas",
      description: "Explora cómo cambia la propiedad en la tabla.",
      highlightProperty: {
        key: q.highlightKey,
        label: q.highlightLabel,
        unit: q.highlightUnit,
      },
      scale: {
        type: "sequential",
        colors: ["#bfdbfe", "#1d4ed8"],
      },
      elements: PERIODIC_TABLE_ELEMENTS,
    },
    explicacion: q.explicacion,
  };
};
