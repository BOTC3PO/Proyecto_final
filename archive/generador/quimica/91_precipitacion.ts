// src/generators/quimica/91_reaccion_precipitacion.ts
// src/generators/quimica/91_reaccion_precipitacion.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";

interface PreguntaPrecipitacion {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_PRECIPITACION: PreguntaPrecipitacion[] = [
  {
    enunciado: "¿Cuál de las siguientes ecuaciones representa una reacción de precipitación?",
    opciones: [
      "NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)",
      "CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g)",
      "CaCO₃(s) → CaO(s) + CO₂(g)",
      "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
    ],
    indiceCorrecto: 0,
    explicacion:
      "Se forma un sólido insoluble (AgCl) que se separa como precipitado.",
  },
  {
    enunciado: "Una reacción de precipitación ocurre cuando:",
    opciones: [
      "Un solo reactivo se descompone en varios productos.",
      "Dos soluciones acuosas forman un sólido insoluble.",
      "Dos elementos se combinan para formar un compuesto.",
      "Un gas reacciona con un metal produciendo hidrógeno.",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La mezcla de soluciones con ciertos iones puede producir una sal poco soluble que precipita.",
  },
];

export const generarReaccionPrecipitacion: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_PRECIPITACION.length - 1);
  const q = PREGUNTAS_PRECIPITACION[index];

  return {
    idTema: 91,
    tituloTema: "Reacciones de precipitación",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
