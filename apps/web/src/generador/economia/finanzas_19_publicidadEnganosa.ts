// src/generators/economia/finanzas_19_publicidadEnganosa.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoCaso = "Publicidad engañosa" | "Publicidad clara";

const CASOS_BASICO: {
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

const CASOS_INTERMEDIO = [
  ...CASOS_BASICO,
  {
    anuncio:
      "“12 cuotas fijas. TNA 50% y CFT 90% visibles en la letra principal.”",
    tipo: "Publicidad clara",
    consejo:
      "Informa claramente tasas y CFT, lo que permite comparar el costo real.",
  },
  {
    anuncio:
      "“Sin interés en 18 cuotas” pero solo muestra un número de teléfono sin tasas detalladas.",
    tipo: "Publicidad engañosa",
    consejo:
      "No detalla CFT ni tasas; la falta de información clave puede ocultar costos.",
  },
];

const CASOS_AVANZADO = [
  ...CASOS_INTERMEDIO,
  {
    anuncio:
      "“Pagá en 24 cuotas. CFT 130%” pero la letra chica agrega seguros y cargos no explicados.",
    tipo: "Publicidad engañosa",
    consejo:
      "Aunque menciona CFT, agrega cargos ocultos sin detallar; es poco transparente.",
  },
  {
    anuncio:
      "“Financiación: TNA 55%, CFT 78%, incluye gastos administrativos.”",
    tipo: "Publicidad clara",
    consejo:
      "Detalla tasas y cargos, permitiendo entender el costo total del crédito.",
  },
];

const CASOS_LEGENDARIO = [
  ...CASOS_AVANZADO,
  {
    anuncio:
      "“Crédito inmediato. Aprobación sin requisitos” y no indica tasas ni CFT.",
    tipo: "Publicidad engañosa",
    consejo:
      "La ausencia de información financiera básica es un indicador de publicidad engañosa.",
  },
  {
    anuncio:
      "“Préstamo personal: CFT 95%, TNA 60%, gastos incluidos y detallados.”",
    tipo: "Publicidad clara",
    consejo:
      "Brinda información completa y visible para una decisión informada.",
  },
];

const CASOS_DIVINO = [
  ...CASOS_LEGENDARIO,
  {
    anuncio:
      "“Cuotas sin interés” pero el precio al contado es mucho menor y no lo aclara.",
    tipo: "Publicidad engañosa",
    consejo:
      "Si no compara con precio de contado, puede ocultar un sobreprecio.",
  },
  {
    anuncio:
      "“Precio contado y financiado detallados. CFT y tasas visibles.”",
    tipo: "Publicidad clara",
    consejo:
      "Expone el costo real del financiamiento comparando con el precio de contado.",
  },
];

const CASOS_POR_DIFICULTAD: Record<
  Dificultad,
  { anuncio: string; tipo: TipoCaso; consejo: string }[]
> = {
  basico: CASOS_BASICO,
  intermedio: CASOS_INTERMEDIO,
  avanzado: CASOS_AVANZADO,
  Legendario: CASOS_LEGENDARIO,
  Divino: CASOS_DIVINO,
};

export const genFinanzasPublicidadEnganosa: GeneratorFn = makeQuizGenerator(
  19,
  "Educación del consumidor: publicidad engañosa y decisión inteligente de compra",
  [
    (dificultad: Dificultad) => {
      const caso = pickOne(CASOS_POR_DIFICULTAD[dificultad]);
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
