// src/generators/quimica/72_particulas_subatomicas.ts
// src/generators/quimica/72_particulas_subatomicas.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";

interface PreguntaSubatomica {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_SUBATOMICAS: PreguntaSubatomica[] = [
  {
    enunciado: "¿Cuál de las siguientes partículas tiene carga positiva?",
    opciones: ["Protón", "Neutrón", "Electrón", "Todas"],
    indiceCorrecto: 0,
    explicacion: "El protón tiene carga +1, el electrón −1 y el neutrón es neutro.",
  },
  {
    enunciado: "¿Qué partícula subatómica se encuentra principalmente en la corteza electrónica del átomo?",
    opciones: ["Protón", "Neutrón", "Electrón", "Ninguna de las anteriores"],
    indiceCorrecto: 2,
    explicacion: "Los electrones ocupan los orbitales alrededor del núcleo, formando la corteza electrónica.",
  },
  {
    enunciado: "¿Cuál de las siguientes partículas tiene masa aproximadamente igual a la del protón?",
    opciones: ["Electrón", "Neutrón", "Positrón", "Ninguna"],
    indiceCorrecto: 1,
    explicacion: "Neutrón y protón tienen masas similares, mientras que la masa del electrón es mucho menor.",
  },
];

export const generarParticulasSubatomicas: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_SUBATOMICAS.length - 1);
  const q = PREGUNTAS_SUBATOMICAS[index];

  return {
    idTema: 72,
    tituloTema: "Partículas subatómicas",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
    visualSpec: {
      kind: "chem-structure",
      title: "Modelo de Bohr: Helio",
      description: "Distribución electrónica simplificada en capas.",
      electronDistribution: {
        atom: "He",
        model: "bohr",
        notation: "1s²",
        shells: [
          { shell: "K", electrons: 2, label: "Capa K (n=1)" },
        ],
        notes: "Los electrones ocupan niveles discretos alrededor del núcleo.",
      },
    },
  };
};
