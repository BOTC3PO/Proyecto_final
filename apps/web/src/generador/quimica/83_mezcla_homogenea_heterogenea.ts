// src/generators/quimica/83_mezcla_homogenea_heterogenea.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaTipoMezcla {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_MEZCLAS: PreguntaTipoMezcla[] = [
  {
    enunciado: "¿Cuál de las siguientes es una mezcla homogénea?",
    opciones: [
      "Aire",
      "Arena y piedras",
      "Aceite y agua",
      "Ensalada de frutas",
    ],
    indiceCorrecto: 0,
    explicacion:
      "El aire es una mezcla de gases uniformemente distribuida, por eso es homogénea.",
  },
  {
    enunciado: "¿Cuál de las siguientes mezclas es heterogénea?",
    opciones: [
      "Agua con sal disuelta",
      "Bronce",
      "Agua y arena",
      "Alcohol y agua",
    ],
    indiceCorrecto: 2,
    explicacion:
      "En agua y arena se pueden distinguir fases (sólido y líquido), por lo que es una mezcla heterogénea.",
  },
  {
    enunciado: "Una mezcla homogénea se caracteriza por:",
    opciones: [
      "Presentar varias fases visibles",
      "No permitir distinguir sus componentes a simple vista",
      "Tener composición diferente en cada punto",
      "Estar formada solo por sólidos",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En una mezcla homogénea la composición es uniforme y no se distinguen los componentes a simple vista.",
  },
];

export const generarMezclaHomogeneaHeterogenea: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_MEZCLAS.length);
  const q = PREGUNTAS_MEZCLAS[index];

  return {
    idTema: 83,
    tituloTema: "Mezcla homogénea/heterogénea",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
