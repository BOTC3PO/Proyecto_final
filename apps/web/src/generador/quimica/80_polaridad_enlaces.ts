// src/generators/quimica/80_polaridad_enlaces.ts
// src/generators/quimica/80_polaridad_enlaces.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaPolaridad {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_POLARIDAD: PreguntaPolaridad[] = [
  {
    enunciado: "¿Cuál de los siguientes enlaces es covalente no polar?",
    opciones: ["H–F", "C–O", "O–O", "H–Cl"],
    indiceCorrecto: 2,
    explicacion:
      "En O–O los dos átomos son idénticos y tienen la misma electronegatividad, así que el enlace es no polar.",
  },
  {
    enunciado: "¿Cuál de los siguientes enlaces es el más polar?",
    opciones: ["H–Cl", "H–Br", "H–I", "H–H"],
    indiceCorrecto: 0,
    explicacion:
      "La diferencia de electronegatividad entre H y Cl es mayor que con Br e I; H–H tiene diferencia cero.",
  },
  {
    enunciado:
      "Si la diferencia de electronegatividad entre dos átomos que forman un enlace es muy pequeña (cercana a 0), el enlace será:",
    opciones: [
      "Iónico",
      "Covalente polar",
      "Covalente no polar",
      "Metálico",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Cuando la diferencia de electronegatividad es casi nula, los electrones se comparten de manera casi simétrica → enlace covalente no polar.",
  },
];

export const generarPolaridadEnlaces: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_POLARIDAD.length);
  const q = PREGUNTAS_POLARIDAD[index];

  return {
    idTema: 80,
    tituloTema: "Polaridad de enlaces",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
