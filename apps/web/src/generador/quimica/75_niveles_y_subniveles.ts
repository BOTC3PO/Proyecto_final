// src/generators/quimica/75_niveles_y_subniveles.ts
// src/generators/quimica/75_niveles_y_subniveles.ts
import { type GeneratorFn, type QuizExercise, randInt } from "./generico";

interface PreguntaNiveles {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_NIVELES: PreguntaNiveles[] = [
  {
    enunciado:
      "¿Cómo se denomina el número cuántico principal que indica el nivel de energía de un electrón?",
    opciones: ["n", "l", "m", "s"],
    indiceCorrecto: 0,
    explicacion:
      "El número cuántico principal n indica el nivel de energía (capa) en el que se encuentra el electrón.",
  },
  {
    enunciado:
      "¿Qué subniveles de energía existen en el nivel principal n = 2?",
    opciones: ["Solo s", "s y p", "s, p y d", "s, p, d y f"],
    indiceCorrecto: 1,
    explicacion:
      "En n = 2 existen los subniveles 2s y 2p.",
  },
  {
    enunciado:
      "¿Cuál de los siguientes niveles o subniveles tiene, en general, mayor energía en el átomo de hidrógeno?",
    opciones: ["1s", "2s", "2p", "3s"],
    indiceCorrecto: 3,
    explicacion:
      "En el hidrógeno, la energía aumenta con n; los orbitales con n más grande tienen mayor energía promedio.",
  },
];

export const generarNivelesSubnivelesEnergia: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = randInt(0, PREGUNTAS_NIVELES.length - 1);
  const q = PREGUNTAS_NIVELES[index];

  return {
    idTema: 75,
    tituloTema: "Niveles y subniveles de energía",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
