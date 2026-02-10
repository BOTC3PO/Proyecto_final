// src/generators/economia/economia_43_estructurasMercado.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Mercado =
  | "Competencia perfecta"
  | "Competencia monopolística"
  | "Oligopolio"
  | "Monopolio";

const CASOS: {
  descripcion: string;
  tipo: Mercado;
  explicacion: string;
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion:
      "Hay muchísimas empresas pequeñas que venden un producto prácticamente igual (por ejemplo, trigo). Ninguna puede influir por sí sola en el precio.",
    tipo: "Competencia perfecta",
    explicacion:
      "Muchos oferentes y demandantes, producto homogéneo y precio determinado por el mercado.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "Pocas empresas dominan la mayor parte de la oferta de un producto (por ejemplo, empresas grandes de telefonía móvil).",
    tipo: "Oligopolio",
    explicacion:
      "Pocos oferentes con poder de mercado, pueden influir en precios y cantidades.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "Solo hay una empresa que vende un producto sin sustitutos cercanos y controla el precio (por ejemplo, un servicio público en manos de una sola empresa).",
    tipo: "Monopolio",
    explicacion:
      "Un solo oferente con alto poder de mercado.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "Muchas empresas compiten ofreciendo productos similares pero diferenciados (por ejemplo, distintas marcas de ropa o restaurantes).",
    tipo: "Competencia monopolística",
    explicacion:
      "Hay muchos vendedores, pero cada uno ofrece un producto con cierta diferenciación (marca, calidad, servicio).",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "Un único proveedor con concesión exclusiva ofrece energía en una región, sin posibilidad de entrada de competidores.",
    tipo: "Monopolio",
    explicacion:
      "La exclusividad legal limita la competencia y concentra la oferta en un solo agente.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "Varias empresas dominan la oferta de automóviles, con barreras de entrada y competencia en precios y tecnología.",
    tipo: "Oligopolio",
    explicacion:
      "Pocos grandes oferentes con barreras de entrada, interdependencia y competencia estratégica.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "Muchas marcas venden cafés especiales con diferenciación de calidad, experiencia y marketing.",
    tipo: "Competencia monopolística",
    explicacion:
      "Existe diferenciación de producto con numerosos oferentes y cierta libertad de entrada.",
    dificultadMinima: "avanzado",
  },
];

export const genEstructurasMercado: GeneratorFn = makeQuizGenerator(
  43,
  "Estructuras de mercado",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const opciones: Mercado[] = [
        "Competencia perfecta",
        "Competencia monopolística",
        "Oligopolio",
        "Monopolio",
      ];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "Identificá la estructura de mercado de la siguiente situación:\n\n" +
          caso.descripcion,
        opciones,
        indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
