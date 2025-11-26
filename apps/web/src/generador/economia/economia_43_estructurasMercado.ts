// src/generators/economia/economia_43_estructurasMercado.ts

import {
  Dificultad,
  GeneratorFn,
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
}[] = [
  {
    descripcion:
      "Hay muchísimas empresas pequeñas que venden un producto prácticamente igual (por ejemplo, trigo). Ninguna puede influir por sí sola en el precio.",
    tipo: "Competencia perfecta",
    explicacion:
      "Muchos oferentes y demandantes, producto homogéneo y precio determinado por el mercado.",
  },
  {
    descripcion:
      "Pocas empresas dominan la mayor parte de la oferta de un producto (por ejemplo, empresas grandes de telefonía móvil).",
    tipo: "Oligopolio",
    explicacion:
      "Pocos oferentes con poder de mercado, pueden influir en precios y cantidades.",
  },
  {
    descripcion:
      "Solo hay una empresa que vende un producto sin sustitutos cercanos y controla el precio (por ejemplo, un servicio público en manos de una sola empresa).",
    tipo: "Monopolio",
    explicacion:
      "Un solo oferente con alto poder de mercado.",
  },
  {
    descripcion:
      "Muchas empresas compiten ofreciendo productos similares pero diferenciados (por ejemplo, distintas marcas de ropa o restaurantes).",
    tipo: "Competencia monopolística",
    explicacion:
      "Hay muchos vendedores, pero cada uno ofrece un producto con cierta diferenciación (marca, calidad, servicio).",
  },
];

export const genEstructurasMercado: GeneratorFn = makeQuizGenerator(
  43,
  "Estructuras de mercado",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
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
