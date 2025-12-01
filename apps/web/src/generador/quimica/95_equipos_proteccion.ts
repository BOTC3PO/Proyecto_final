// src/generators/quimica/95_equipos_proteccion.ts
// src/generators/quimica/95_equipos_proteccion.ts
import type { GeneratorFn, QuizExercise } from "./generico";

interface PreguntaEPP {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
}

const PREGUNTAS_EPP: PreguntaEPP[] = [
  {
    enunciado: "¿Cuál de los siguientes elementos de protección es adecuado para evitar salpicaduras químicas en los ojos?",
    opciones: [
      "Guantes de látex",
      "Gafas de seguridad o antiparras",
      "Mascarilla para polvo",
      "Botas de seguridad",
    ],
    indiceCorrecto: 1,
    explicacion:
      "Las gafas de seguridad protegen frente a salpicaduras y partículas.",
  },
  {
    enunciado: "Para manipular ácidos concentrados en el laboratorio se recomienda:",
    opciones: [
      "No usar protección especial",
      "Usar lentes de contacto sin protección adicional",
      "Utilizar gafas, guantes y guardapolvo o bata",
      "Usar solo sandalias abiertas para ventilar los pies",
    ],
    indiceCorrecto: 2,
    explicacion:
      "La protección ocular, de manos y corporal es esencial al manejar sustancias corrosivas.",
  },
  {
    enunciado:
      "La finalidad principal del equipo de protección personal (EPP) en un laboratorio es:",
    opciones: [
      "Reemplazar todas las medidas de seguridad",
      "Evitar por completo cualquier accidente",
      "Reducir la exposición del trabajador a los peligros presentes",
      "Decoración sin función práctica",
    ],
    indiceCorrecto: 2,
    explicacion:
      "El EPP es una barrera adicional para disminuir la probabilidad y la gravedad de daños.",
  },
];

export const generarEquiposProteccionQuimica: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PREGUNTAS_EPP.length);
  const q = PREGUNTAS_EPP[index];

  return {
    idTema: 95,
    tituloTema: "Equipos de protección (seguridad química)",
    dificultad,
    tipo: "quiz",
    enunciado: q.enunciado,
    opciones: q.opciones,
    indiceCorrecto: q.indiceCorrecto,
    explicacion: q.explicacion,
  };
};
