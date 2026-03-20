import type { QuizTemplate, SelectionConfig, Question } from "./types";

const DEFAULT_SELECTION: SelectionConfig = {
  mode: "random",
  seeded: true,
};

function buildSettings(pool: Question[]): QuizTemplate["settings"] {
  const displayCountDefault = Math.min(5, pool.length);

  return {
    poolSize: pool.length,
    displayCount: pool.length,
    displayCountDefault,
    feedbackPolicyDefault: "inmediato",
    selectionDefault: DEFAULT_SELECTION,
  };
}

const SUMAS_BASICAS_POOL: Question[] = [
  {
    id: "sumas_mc_1",
    type: "mc",
    prompt: "¿Cuánto es 4 + 5?",
    options: [
      { text: "8", correct: false, because: "4 + 5 suma 9." },
      { text: "9", correct: true, because: "4 + 5 = 9." },
      { text: "10", correct: false, because: "Es una suma menor." },
      { text: "7", correct: false, because: "4 + 5 es mayor." },
    ],
    explanation: "Sumá ambos números para obtener el resultado.",
    tags: ["sumas", "basico"],
  },
  {
    id: "sumas_mc_2",
    type: "mc",
    prompt: "¿Cuál es el resultado de 7 + 3?",
    options: [
      { text: "9", correct: false, because: "Sumaste uno menos." },
      { text: "10", correct: true, because: "7 + 3 = 10." },
      { text: "11", correct: false, because: "Sumaste uno de más." },
      { text: "12", correct: false, because: "Es demasiado alto." },
    ],
    explanation: "Agregar 3 a 7 completa la decena.",
    tags: ["sumas", "basico"],
  },
  {
    id: "sumas_tf_1",
    type: "tf",
    prompt: "8 + 2 = 10.",
    answer: true,
    becauseTrue: "Sumar 2 a 8 completa 10.",
    becauseFalse: "La suma correcta es 10.",
    tags: ["sumas", "basico"],
  },
  {
    id: "sumas_tf_2",
    type: "tf",
    prompt: "6 + 7 = 12.",
    answer: false,
    becauseTrue: "No, 6 + 7 es mayor.",
    becauseFalse: "6 + 7 = 13.",
    tags: ["sumas", "basico"],
  },
  {
    id: "sumas_match_1",
    type: "match",
    prompt: "Relaciona cada suma con su resultado.",
    pairs: [
      { left: "3 + 6", right: "9" },
      { left: "5 + 4", right: "9" },
      { left: "2 + 7", right: "9" },
    ],
    explanation: "Todas las sumas completan 9.",
    tags: ["sumas", "basico"],
  },
];

const RESTAS_BASICAS_POOL: Question[] = [
  {
    id: "restas_mc_1",
    type: "mc",
    prompt: "¿Cuánto es 9 - 4?",
    options: [
      { text: "3", correct: false, because: "Restaste de más." },
      { text: "5", correct: true, because: "9 - 4 = 5." },
      { text: "6", correct: false, because: "Restaste de menos." },
      { text: "7", correct: false, because: "No corresponde." },
    ],
    explanation: "Quitá 4 unidades de 9.",
    tags: ["restas", "basico"],
  },
  {
    id: "restas_mc_2",
    type: "mc",
    prompt: "¿Cuál es el resultado de 12 - 3?",
    options: [
      { text: "8", correct: false, because: "Restaste una unidad extra." },
      { text: "9", correct: true, because: "12 - 3 = 9." },
      { text: "10", correct: false, because: "Restaste menos de lo indicado." },
      { text: "7", correct: false, because: "Es demasiado bajo." },
    ],
    explanation: "Se restan 3 unidades del total.",
    tags: ["restas", "basico"],
  },
  {
    id: "restas_tf_1",
    type: "tf",
    prompt: "10 - 5 = 5.",
    answer: true,
    becauseTrue: "La mitad de 10 es 5.",
    becauseFalse: "El resultado correcto es 5.",
    tags: ["restas", "basico"],
  },
  {
    id: "restas_tf_2",
    type: "tf",
    prompt: "15 - 6 = 8.",
    answer: false,
    becauseTrue: "No, 15 - 6 es 9.",
    becauseFalse: "15 - 6 = 9.",
    tags: ["restas", "basico"],
  },
  {
    id: "restas_match_1",
    type: "match",
    prompt: "Relaciona cada resta con su resultado.",
    pairs: [
      { left: "11 - 2", right: "9" },
      { left: "14 - 5", right: "9" },
      { left: "13 - 4", right: "9" },
    ],
    explanation: "Todas las restas dan 9.",
    tags: ["restas", "basico"],
  },
];

const MULTIPLICACIONES_BASICAS_POOL: Question[] = [
  {
    id: "multi_mc_1",
    type: "mc",
    prompt: "¿Cuánto es 3 × 4?",
    options: [
      { text: "7", correct: false, because: "Es una suma, no una multiplicación." },
      { text: "12", correct: true, because: "3 × 4 = 12." },
      { text: "9", correct: false, because: "3 × 3 es 9." },
      { text: "14", correct: false, because: "Es demasiado alto." },
    ],
    explanation: "Multiplicar 3 por 4 es sumar 3 cuatro veces.",
    tags: ["multiplicacion", "basico"],
  },
  {
    id: "multi_mc_2",
    type: "mc",
    prompt: "¿Cuál es el resultado de 5 × 2?",
    options: [
      { text: "10", correct: true, because: "5 × 2 = 10." },
      { text: "7", correct: false, because: "No corresponde." },
      { text: "12", correct: false, because: "Es demasiado alto." },
      { text: "15", correct: false, because: "Es 5 × 3." },
    ],
    explanation: "Doblar 5 da 10.",
    tags: ["multiplicacion", "basico"],
  },
  {
    id: "multi_tf_1",
    type: "tf",
    prompt: "2 × 6 = 12.",
    answer: true,
    becauseTrue: "Multiplicar por 2 es duplicar.",
    becauseFalse: "2 × 6 es 12.",
    tags: ["multiplicacion", "basico"],
  },
  {
    id: "multi_tf_2",
    type: "tf",
    prompt: "4 × 3 = 15.",
    answer: false,
    becauseTrue: "No, 4 × 3 es 12.",
    becauseFalse: "4 × 3 = 12.",
    tags: ["multiplicacion", "basico"],
  },
  {
    id: "multi_match_1",
    type: "match",
    prompt: "Relaciona cada multiplicación con su resultado.",
    pairs: [
      { left: "2 × 4", right: "8" },
      { left: "3 × 3", right: "9" },
      { left: "5 × 2", right: "10" },
    ],
    explanation: "Cada producto corresponde al resultado correcto.",
    tags: ["multiplicacion", "basico"],
  },
];

export const BASIC_TEMPLATES: Record<string, QuizTemplate> = {
  sumas_basicas: {
    schema: "quiz-basic/v1",
    metadata: {
      id: "sumas_basicas",
      materia: "matematica",
      titulo: "Sumas básicas",
      idioma: "es",
      tags: ["basico", "sumas"],
    },
    settings: buildSettings(SUMAS_BASICAS_POOL),
    pool: SUMAS_BASICAS_POOL,
  },
  restas_basicas: {
    schema: "quiz-basic/v1",
    metadata: {
      id: "restas_basicas",
      materia: "matematica",
      titulo: "Restas básicas",
      idioma: "es",
      tags: ["basico", "restas"],
    },
    settings: buildSettings(RESTAS_BASICAS_POOL),
    pool: RESTAS_BASICAS_POOL,
  },
  multiplicaciones_basicas: {
    schema: "quiz-basic/v1",
    metadata: {
      id: "multiplicaciones_basicas",
      materia: "matematica",
      titulo: "Multiplicaciones básicas",
      idioma: "es",
      tags: ["basico", "multiplicacion"],
    },
    settings: buildSettings(MULTIPLICACIONES_BASICAS_POOL),
    pool: MULTIPLICACIONES_BASICAS_POOL,
  },
};
