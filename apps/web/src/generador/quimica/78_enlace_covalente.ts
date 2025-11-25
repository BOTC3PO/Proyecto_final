// src/generators/quimica/78_enlace_covalente.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaCovalente {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_COVALENTE: PreguntaCovalente[] = [
  {
    enunciado: "El enlace covalente se caracteriza principalmente por:",
    opciones: [
      "Transferencia total de electrones",
      "Compartición de pares de electrones",
      "Movimiento libre de electrones",
      "Ausencia de electrones de valencia",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En el enlace covalente los átomos comparten uno o más pares de electrones.",
  },
  {
    enunciado: "¿Cuál de los siguientes compuestos presenta enlaces covalentes?",
    opciones: ["NaCl", "MgO", "H₂O", "KBr"],
    indiceCorrecto: 2,
    explicacion:
      "H₂O está formado por no metales (H y O) que comparten electrones, formando enlaces covalentes.",
  },
  {
    enunciado: "¿Cuál de estas moléculas tiene únicamente enlaces covalentes no polares?",
    opciones: ["O₂", "HCl", "H₂O", "NH₃"],
    indiceCorrecto: 0,
    explicacion:
      "En O₂ los dos átomos de oxígeno tienen la misma electronegatividad, de modo que el enlace O–O es covalente no polar.",
  },
];

export const generarEnlaceCovalente: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_COVALENTE.length);
  const q = PREGUNTAS_COVALENTE[index];

  return {
    idTema: 78,
    tituloTema: "Enlace covalente",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
