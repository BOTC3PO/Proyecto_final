// src/generators/quimica/85_propiedades_fisicas_vs_quimicas.ts
// src/generators/quimica/85_propiedades_fisicas_vs_quimicas.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";

interface PreguntaPropiedad {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_PROPIEDADES: PreguntaPropiedad[] = [
  {
    enunciado: "¿Cuál de las siguientes es una propiedad física de la materia?",
    opciones: [
      "Inflamabilidad",
      "Reactividad con ácidos",
      "Punto de fusión",
      "Oxidación",
    ],
    indiceCorrecto: 2,
    explicacion:
      "El punto de fusión describe un cambio de estado sin alterar la composición química de la sustancia.",
  },
  {
    enunciado: "¿Cuál de las siguientes es una propiedad química?",
    opciones: [
      "Densidad",
      "Color",
      "Solubilidad en agua",
      "Capacidad de arder en presencia de oxígeno",
    ],
    indiceCorrecto: 3,
    explicacion:
      "La capacidad de arder (combustión) implica una reacción química con el oxígeno.",
  },
  {
    enunciado:
      "Cuando el hierro se oxida formando óxido de hierro (herrumbre), se observa principalmente:",
    opciones: [
      "Un cambio físico reversible",
      "Un cambio químico (propiedad química)",
      "Solo un cambio de estado",
      "Solo una variación de densidad sin cambio de sustancia",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La oxidación forma una nueva sustancia (óxido de hierro), por lo que es un cambio químico relacionado con propiedades químicas.",
  },
  {
    enunciado:
      "¿Cuál de las siguientes propiedades se clasifica como física intensiva?",
    opciones: [
      "Masa",
      "Volumen",
      "Densidad",
      "Número de moles",
    ],
    indiceCorrecto: 2,
    explicacion:
      "La densidad no depende de la cantidad de sustancia (intensiva), mientras que masa, volumen y moles son extensivas.",
  },
];

export const generarPropiedadesFisicasVsQuimicas: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_PROPIEDADES.length - 1);
  const q = PREGUNTAS_PROPIEDADES[index];

  return {
    idTema: 85,
    tituloTema: "Propiedades físicas vs químicas",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
