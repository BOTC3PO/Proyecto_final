// src/generators/quimica/94_riesgos_toxicos.ts
// src/generators/quimica/94_riesgos_toxicos.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaToxicos {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_TOXICOS: PreguntaToxicos[] = [
  {
    enunciado: "Una sustancia tóxica es aquella que:",
    opciones: [
      "Siempre produce lesiones inmediatas",
      "Puede causar daños a la salud dependiendo de la dosis y el tiempo de exposición",
      "Solo es peligrosa si está caliente",
      "Solo es peligrosa si está en estado gaseoso",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La toxicidad depende de la dosis, la vía de entrada y el tiempo de exposición.",
  },
  {
    enunciado: "¿Cuál de las siguientes medidas ayuda a reducir el riesgo por sustancias tóxicas?",
    opciones: [
      "Comer y beber en el laboratorio",
      "Trabajar sin ventilación",
      "Utilizar equipos de protección personal adecuados",
      "Oler directamente todos los reactivos para identificarlos",
    ],
    indiceCorrecto: 2,
    explicacion:
      "El uso de EPP adecuado y una buena ventilación son claves para minimizar el riesgo.",
  },
];

export const generarRiesgosToxicos: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_TOXICOS.length);
  const q = PREGUNTAS_TOXICOS[index];

  return {
    idTema: 94,
    tituloTema: "Riesgos tóxicos",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
