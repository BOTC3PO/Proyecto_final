// src/generators/economia/finanzas_19_publicidadEnganosa.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoCaso = "Publicidad engañosa" | "Publicidad clara";

const CASOS: {
  anuncio: string;
  tipo: TipoCaso;
  consejo: string;
}[] = [
  {
    anuncio:
      "“Crédito SIN INTERÉS en 24 cuotas. CFT 120% TNA 80%” (en letra muy pequeña casi ilegible).",
    tipo: "Publicidad engañosa",
    consejo:
      "Promete 'sin interés', pero el CFT y la tasa aparecen escondidos: hay costos financieros importantes.",
  },
  {
    anuncio:
      "“Llévate hoy y empezá a pagar dentro de 6 meses. No aclara tasa ni CFT en ningún lugar visible.”",
    tipo: "Publicidad engañosa",
    consejo:
      "Oculta información clave sobre el costo del crédito, lo que dificulta una decisión informada.",
  },
  {
    anuncio:
      "“Crédito personal: TNA 60%, CFT 85%. Monto mínimo, máximo, gastos y plazos claramente detallados.”",
    tipo: "Publicidad clara",
    consejo:
      "La tasa y el CFT están visibles; permite comparar con otras ofertas y entender el costo real.",
  },
  {
    anuncio:
      "“Hasta 30% de descuento pagando en efectivo. Sin intereses ni costos financieros adicionales.” (y no aparece CFT porque no hay financiamiento).",
    tipo: "Publicidad clara",
    consejo:
      "Se trata de un descuento por pago contado, no de un crédito; no hay financiamiento escondido.",
  },
];

export const genFinanzasPublicidadEnganosa: GeneratorFn = makeQuizGenerator(
  19,
  "Educación del consumidor: publicidad engañosa y decisión inteligente de compra",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: TipoCaso[] = [
        "Publicidad engañosa",
        "Publicidad clara",
      ];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "Leé el siguiente anuncio y decidí si se trata de publicidad engañosa o clara para el consumidor:\n\n" +
          caso.anuncio,
        opciones,
        indiceCorrecto,
        explicacion:
          "Para tomar decisiones inteligentes de compra hay que buscar siempre el CFT, las tasas y los costos detallados. " +
          caso.consejo,
      };
    },
  ]
);
