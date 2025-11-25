// src/generators/quimica/87_descomposicion.ts
import { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaDescomposicion {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_DESCOMPOSICION: PreguntaDescomposicion[] = [
  {
    enunciado: "¿Cuál de las siguientes ecuaciones representa una reacción de descomposición?",
    opciones: [
      "2 H₂(g) + O₂(g) → 2 H₂O(l)",
      "CaCO₃(s) → CaO(s) + CO₂(g)",
      "Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)",
      "NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)",
    ],
    indiceCorrecto: 1,
    explicacion:
      "En una descomposición, un solo compuesto se rompe en dos o más sustancias más simples.",
  },
  {
    enunciado: "Una reacción de descomposición se caracteriza por:",
    opciones: [
      "Varios reactivos formando un único producto.",
      "Un compuesto que se transforma en elementos únicamente.",
      "Un compuesto que se transforma en dos o más sustancias.",
      "Elementos que intercambian lugares en compuestos diferentes.",
    ],
    indiceCorrecto: 2,
    explicacion:
      "En general un solo reactivo (compuesto) se descompone en varios productos, que pueden ser elementos o compuestos.",
  },
];

export const generarReaccionDescomposicion: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_DESCOMPOSICION.length);
  const q = PREGUNTAS_DESCOMPOSICION[index];

  return {
    idTema: 87,
    tituloTema: "Reacciones de descomposición",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
