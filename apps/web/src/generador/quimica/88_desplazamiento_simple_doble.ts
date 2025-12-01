// src/generators/quimica/88_desplazamiento_simple_doble.ts
// src/generators/quimica/88_desplazamiento_simple_doble.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaDesplazamiento {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_DESPLAZAMIENTO: PreguntaDesplazamiento[] = [
  {
    enunciado: "¿Cuál de las siguientes ecuaciones representa una reacción de desplazamiento simple?",
    opciones: [
      "Zn(s) + 2 HCl(aq) → ZnCl₂(aq) + H₂(g)",
      "NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)",
      "2 H₂(g) + O₂(g) → 2 H₂O(l)",
      "CaCO₃(s) → CaO(s) + CO₂(g)",
    ],
    indiceCorrecto: 0,
    explicacion:
      "En el desplazamiento simple, un elemento (Zn) desplaza a otro (H) de un compuesto (HCl).",
  },
  {
    enunciado: "¿Cuál de las siguientes ecuaciones es de desplazamiento doble?",
    opciones: [
      "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)",
      "2 KClO₃(s) → 2 KCl(s) + 3 O₂(g)",
      "NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)",
      "2 Mg(s) + O₂(g) → 2 MgO(s)",
    ],
    indiceCorrecto: 2,
    explicacion:
      "En el desplazamiento doble (o doble sustitución) los iones de dos compuestos intercambian parejas.",
  },
  {
    enunciado: "En una reacción de desplazamiento simple:",
    opciones: [
      "Dos compuestos intercambian iones.",
      "Un compuesto se descompone en dos o más sustancias.",
      "Un elemento libre reemplaza a otro en un compuesto.",
      "Dos elementos se combinan para formar un compuesto.",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Un metal puede desplazar a otro metal de una sal, o un halógeno desplazar a otro de una sal halógena.",
  },
];

export const generarDesplazamientoSimpleDoble: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_DESPLAZAMIENTO.length);
  const q = PREGUNTAS_DESPLAZAMIENTO[index];

  return {
    idTema: 88,
    tituloTema: "Desplazamiento simple y doble",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
