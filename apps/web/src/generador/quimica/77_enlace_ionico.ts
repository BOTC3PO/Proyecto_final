// src/generators/quimica/77_enlace_ionico.ts
// src/generators/quimica/77_enlace_ionico.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";
import { VSEPR_VISUAL_SPEC } from "./vseprVisualSpec";

interface PreguntaIonico {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_IONICO: PreguntaIonico[] = [
  {
    enunciado: "¿Cuál de los siguientes compuestos es principalmente de enlace iónico?",
    opciones: ["NaCl", "H₂O", "CH₄", "O₂"],
    indiceCorrecto: 0,
    explicacion:
      "NaCl está formado por un metal (Na) y un no metal (Cl), con transferencia de electrones, típico de enlace iónico.",
  },
  {
    enunciado: "El enlace iónico se forma principalmente entre:",
    opciones: [
      "Dos no metales",
      "Dos metales",
      "Un metal y un no metal",
      "Un gas noble y un metal",
    ],
    indiceCorrecto: 2,
    explicacion:
      "En un enlace iónico hay transferencia de electrones de un metal (que forma catión) a un no metal (que forma anión).",
  },
  {
    enunciado: "En un cristal iónico como el de NaCl:",
    opciones: [
      "Existen moléculas discretas de NaCl.",
      "Los iones se organizan en una red tridimensional.",
      "Los electrones se mueven libremente como en los metales.",
      "No hay fuerzas electrostáticas entre las partículas.",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Los sólidos iónicos forman redes cristalinas tridimensionales de cationes y aniones ordenados.",
  },
];

export const generarEnlaceIonico: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_IONICO.length - 1);
  const q = PREGUNTAS_IONICO[index];

  return {
    idTema: 77,
    tituloTema: "Enlace iónico",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
    visualSpec: VSEPR_VISUAL_SPEC,
  };
};
