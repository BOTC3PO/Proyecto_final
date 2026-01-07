// src/generators/economia/economia_41_clasificacionBienes.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoBien =
  | "Bien libre"
  | "Bien económico"
  | "Bien de consumo"
  | "Bien de capital"
  | "Bien sustituto"
  | "Bien complementario";

const CASOS: {
  enunciado: string;
  opciones: string[];
  correcta: string;
  explicacion: string;
  dificultadMinima: Dificultad;
}[] = [
  // Libres vs económicos
  {
    enunciado:
      "El aire que respiramos normalmente (sin contaminación ni procesos especiales) se clasifica como:",
    opciones: ["Bien libre", "Bien económico"],
    correcta: "Bien libre",
    explicacion:
      "Es un bien libre porque está disponible en abundancia, no tiene precio y no requiere proceso productivo directo para obtenerlo.",
    dificultadMinima: "basico",
  },
  {
    enunciado:
      "Un paquete de fideos que se compra en el supermercado se clasifica como:",
    opciones: ["Bien libre", "Bien económico"],
    correcta: "Bien económico",
    explicacion:
      "Requiere trabajo, insumos y organización para producirse y tiene un precio; por eso es un bien económico.",
    dificultadMinima: "basico",
  },

  // Consumo vs capital
  {
    enunciado:
      "Una heladera que una familia compra para su casa se clasifica, en forma escolar, como:",
    opciones: ["Bien de consumo", "Bien de capital"],
    correcta: "Bien de consumo",
    explicacion:
      "Se usa directamente para satisfacer una necesidad del hogar, no para producir otros bienes.",
    dificultadMinima: "basico",
  },
  {
    enunciado:
      "Una máquina industrial que utiliza una fábrica para producir botellas se clasifica como:",
    opciones: ["Bien de consumo", "Bien de capital"],
    correcta: "Bien de capital",
    explicacion:
      "Es un medio de producción que sirve para fabricar otros bienes.",
    dificultadMinima: "intermedio",
  },

  // Sustitutos / complementarios
  {
    enunciado:
      "El café y el té (a nivel escolar) se consideran ejemplos de bienes:",
    opciones: ["Sustitutos", "Complementarios"],
    correcta: "Sustitutos",
    explicacion:
      "Cubren una necesidad similar, por lo que se pueden reemplazar entre sí.",
    dificultadMinima: "intermedio",
  },
  {
    enunciado:
      "El auto y la nafta se consideran ejemplos de bienes:",
    opciones: ["Sustitutos", "Complementarios"],
    correcta: "Complementarios",
    explicacion:
      "Se usan juntos: el auto necesita combustible para funcionar.",
    dificultadMinima: "intermedio",
  },
  {
    enunciado:
      "Un software de diseño que compra una empresa para producir gráficos se clasifica como:",
    opciones: ["Bien de consumo", "Bien de capital"],
    correcta: "Bien de capital",
    explicacion:
      "Es un recurso utilizado para producir otros bienes o servicios, por lo que actúa como bien de capital.",
    dificultadMinima: "avanzado",
  },
  {
    enunciado:
      "El azúcar y el edulcorante se consideran ejemplos de bienes:",
    opciones: ["Sustitutos", "Complementarios"],
    correcta: "Sustitutos",
    explicacion:
      "Ambos cumplen la misma función y pueden reemplazarse según la preferencia del consumidor.",
    dificultadMinima: "Legendario",
  },
  {
    enunciado:
      "Una impresora 3D en un laboratorio se clasifica como:",
    opciones: ["Bien de consumo", "Bien de capital"],
    correcta: "Bien de capital",
    explicacion:
      "Se utiliza como herramienta para crear otros bienes, no para consumo directo.",
    dificultadMinima: "Divino",
  },
];

export const genClasificacionBienes: GeneratorFn = makeQuizGenerator(
  41,
  "Clasificación de bienes (libres/económicos, consumo/capital, sustitutos/complementarios)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const indiceCorrecto = caso.opciones.indexOf(caso.correcta);

      return {
        enunciado: caso.enunciado,
        opciones: caso.opciones,
        indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
