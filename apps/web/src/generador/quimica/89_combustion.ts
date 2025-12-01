// src/generators/quimica/89_combustion.ts
// src/generators/quimica/89_combustion.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaCombustion {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_COMBUSTION: PreguntaCombustion[] = [
  {
    enunciado: "¿Cuál de las siguientes ecuaciones representa una combustión completa de un hidrocarburo?",
    opciones: [
      "CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(g)",
      "CaCO₃(s) → CaO(s) + CO₂(g)",
      "2 H₂(g) + O₂(g) → 2 H₂O(l)",
      "NaCl(aq) + AgNO₃(aq) → NaNO₃(aq) + AgCl(s)",
    ],
    indiceCorrecto: 0,
    explicacion:
      "La combustión de CH₄ en presencia de oxígeno produce CO₂ y H₂O, típicamente con desprendimiento de energía.",
  },
  {
    enunciado: "En una combustión completa de un hidrocarburo se obtienen principalmente:",
    opciones: [
      "CO₂ y H₂O",
      "CO y H₂",
      "C y H₂O",
      "Sólo CO₂",
    ],
    indiceCorrecto: 0,
    explicacion:
      "La combustión completa de hidrocarburos produce dióxido de carbono y agua.",
  },
  {
    enunciado: "La combustión es un proceso:",
    opciones: [
      "Siempre endotérmico",
      "Siempre exotérmico",
      "Ni endotérmico ni exotérmico",
      "Solo físico, sin reacción química",
    ],
    indiceCorrecto: 1,
    explicacion:
      "La combustión libera energía (calor y a veces luz), por lo que es exotérmica.",
  },
];

export const generarReaccionCombustion: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_COMBUSTION.length);
  const q = PREGUNTAS_COMBUSTION[index];

  return {
    idTema: 89,
    tituloTema: "Reacciones de combustión",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
