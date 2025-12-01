// src/generators/quimica/84_metodos_separacion.ts
// src/generators/quimica/84_metodos_separacion.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaSeparacion {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_SEPARACION: PreguntaSeparacion[] = [
  {
    enunciado:
      "¿Qué método de separación es más adecuado para separar una mezcla de arena y agua?",
    opciones: [
      "Destilación",
      "Filtración",
      "Cromatografía",
      "Evaporación",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La filtración permite separar un sólido insoluble (arena) de un líquido (agua).",
  },
  {
    enunciado:
      "¿Qué técnica se utiliza para separar líquidos con diferentes puntos de ebullición?",
    opciones: [
      "Imantación",
      "Sedimentación",
      "Destilación",
      "Tamizado",
    ],
    indiceCorrecto: 2,
    explicacion:
      "La destilación separa líquidos basándose en sus diferentes puntos de ebullición.",
  },
  {
    enunciado:
      "¿Qué método de separación se puede utilizar para obtener sal sólida a partir de una disolución de sal en agua?",
    opciones: [
      "Decantación",
      "Evaporación o cristalización",
      "Imantación",
      "Cromatografía",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La evaporación del agua o la cristalización permiten recuperar la sal sólida disuelta.",
  },
  {
    enunciado:
      "Para separar los componentes de una mezcla de pigmentos (tintas de colores) se usa habitualmente:",
    opciones: [
      "Destilación simple",
      "Cromatografía",
      "Filtración",
      "Tamizado",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La cromatografía de papel o de capa fina permite separar sustancias coloreadas según su afinidad por la fase móvil y la fase estacionaria.",
  },
];

export const generarMetodosSeparacion: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_SEPARACION.length);
  const q = PREGUNTAS_SEPARACION[index];

  return {
    idTema: 84,
    tituloTema: "Métodos de separación (filtración, decantación...)",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
