// src/generators/quimica/81_geometria_molecular_vsepr.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaVSEPR {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_VSEPR: PreguntaVSEPR[] = [
  {
    enunciado: "Según el modelo VSEPR, ¿qué geometría tiene la molécula CO₂?",
    opciones: [
      "Lineal",
      "Angular (doblez)",
      "Trigonal plana",
      "Tetraédrica",
    ],
    indiceCorrecto: 0,
    explicacion:
      "El átomo central C está unido a dos oxígenos por dobles enlaces y no tiene pares libres: la geometría es lineal.",
  },
  {
    enunciado: "¿Cuál es la geometría molecular aproximada del CH₄?",
    opciones: [
      "Trigonal plana",
      "Tetraédrica",
      "Trigonal piramidal",
      "Angular",
    ],
    indiceCorrecto: 1,
    explicacion:
      "El carbono se une a cuatro hidrógenos sin pares libres en el átomo central → geometría tetraédrica.",
  },
  {
    enunciado: "La molécula de NH₃ (amoníaco) presenta una geometría:",
    opciones: [
      "Tetraédrica",
      "Trigonal plana",
      "Trigonal piramidal",
      "Angular",
    ],
    indiceCorrecto: 2,
    explicacion:
      "NH₃ tiene 3 enlaces y 1 par solitario en el átomo central: la disposición electrónica es tetraédrica, pero la geometría molecular es trigonal piramidal.",
  },
  {
    enunciado: "La molécula de H₂O tiene una geometría descrita como:",
    opciones: [
      "Lineal",
      "Trigonal plana",
      "Angular (doblez)",
      "Tetraédrica",
    ],
    indiceCorrecto: 2,
    explicacion:
      "H₂O tiene 2 enlaces y 2 pares solitarios en el átomo central: la geometría molecular es angular.",
  },
];

export const generarGeometriaMolecularVSEPR: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_VSEPR.length);
  const q = PREGUNTAS_VSEPR[index];

  return {
    idTema: 81,
    tituloTema: "Geometría molecular básica (VSEPR)",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
