// src/generators/quimica/79_enlace_metalico.ts
// src/generators/quimica/79_enlace_metalico.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaMetalico {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_METALICO: PreguntaMetalico[] = [
  {
    enunciado: "El modelo más aceptado para describir el enlace metálico es:",
    opciones: [
      "Red de iones positivos inmersos en un mar de electrones deslocalizados",
      "Red de moléculas neutras unidas por fuerzas de Van der Waals",
      "Cationes y aniones alternados en una red cristalina",
      "Pares de átomos unidos por compartición de electrones localizados",
    ],
    indiceCorrecto: 0,
    explicacion:
      "En el enlace metálico los núcleos y electrones internos forman cationes, rodeados por un mar de electrones deslocalizados.",
  },
  {
    enunciado: "Una propiedad característica de los metales debida al enlace metálico es:",
    opciones: [
      "Baja conductividad eléctrica",
      "Fácil ruptura frágil",
      "Elevada conductividad térmica y eléctrica",
      "Baja densidad siempre",
    ],
    indiceCorrecto: 2,
    explicacion:
      "Los electrones deslocalizados permiten el transporte de carga y calor, originando alta conductividad.",
  },
  {
    enunciado: "¿Cuál de los siguientes sólidos es un ejemplo típico de enlace metálico?",
    opciones: ["NaCl(s)", "Cu(s)", "CO₂(s)", "H₂O(s)"],
    indiceCorrecto: 1,
    explicacion:
      "El cobre sólido es un metal; sus átomos están unidos entre sí por enlaces metálicos.",
  },
];

export const generarEnlaceMetalico: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_METALICO.length);
  const q = PREGUNTAS_METALICO[index];

  return {
    idTema: 79,
    tituloTema: "Enlace metálico",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
