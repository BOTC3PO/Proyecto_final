// src/generators/quimica/81_geometria_molecular_vsepr.ts
// src/generators/quimica/81_geometria_molecular_vsepr.ts
import type { GeneratorFn, QuizExercise } from "./generico";

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
    visualSpec: {
      kind: "chem-structure",
      title: "Geometrías VSEPR en 3D",
      description: "Modelos moleculares con coordenadas cartesianas simples.",
      molecularModels: [
        {
          id: "co2-model",
          name: "Dióxido de carbono",
          formula: "CO₂",
          geometry: "lineal",
          atoms: [
            { id: "o1", element: "O", position: { x: -1.16, y: 0, z: 0 } },
            { id: "c", element: "C", position: { x: 0, y: 0, z: 0 } },
            { id: "o2", element: "O", position: { x: 1.16, y: 0, z: 0 } },
          ],
          bonds: [
            { id: "co2-b1", fromId: "c", toId: "o1", order: 2 },
            { id: "co2-b2", fromId: "c", toId: "o2", order: 2 },
          ],
          notes: "Dos regiones electrónicas → geometría lineal.",
        },
        {
          id: "h2o-model",
          name: "Agua",
          formula: "H₂O",
          geometry: "angular",
          atoms: [
            { id: "o", element: "O", position: { x: 0, y: 0, z: 0 } },
            { id: "h1", element: "H", position: { x: 0.95, y: 0.3, z: 0 } },
            { id: "h2", element: "H", position: { x: -0.95, y: 0.3, z: 0 } },
          ],
          bonds: [
            { id: "h2o-b1", fromId: "o", toId: "h1", order: 1 },
            { id: "h2o-b2", fromId: "o", toId: "h2", order: 1 },
          ],
          notes: "Dos pares solitarios distorsionan la geometría.",
        },
      ],
    },
  };
};
