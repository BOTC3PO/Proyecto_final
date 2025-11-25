// src/generators/quimica/76_orbitales_spdf.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaOrbitales {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_ORBITALES: PreguntaOrbitales[] = [
  {
    enunciado: "¿Cuántos orbitales contiene un subnivel tipo p?",
    opciones: ["1", "2", "3", "5"],
    indiceCorrecto: 2,
    explicacion:
      "El subnivel p tiene 3 orbitales (px, py, pz), cada uno con hasta 2 electrones.",
  },
  {
    enunciado: "¿Cuántos electrones como máximo puede alojar un subnivel s?",
    opciones: ["1", "2", "4", "6"],
    indiceCorrecto: 1,
    explicacion:
      "Un subnivel s tiene 1 orbital, que puede alojar hasta 2 electrones con espines opuestos.",
  },
  {
    enunciado: "¿Cuál de los siguientes subniveles puede existir en el nivel principal n = 3?",
    opciones: ["3s, 3p y 3d", "3s y 3f", "3p y 3f", "Solo 3s"],
    indiceCorrecto: 0,
    explicacion:
      "Para n = 3 pueden existir los subniveles s, p y d: 3s, 3p y 3d.",
  },
];

export const generarOrbitalesSPDF: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_ORBITALES.length);
  const q = PREGUNTAS_ORBITALES[index];

  return {
    idTema: 76,
    tituloTema: "Orbitales (s, p, d, f)",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
