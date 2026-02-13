// src/generators/economia/economia_ar_27_jurisdiccionImpuestos.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Jur = "Nacional" | "Provincial" | "Municipal";

type Caso = { desc: string; tipo: Jur; detalle: string };

const CASOS_POR_DIFICULTAD: Record<Dificultad, Caso[]> = {
  basico: [
    { desc: "IVA", tipo: "Nacional", detalle: "Impuesto nacional." },
    {
      desc: "Impuesto Inmobiliario",
      tipo: "Provincial",
      detalle: "Depende de la provincia.",
    },
  ],
  intermedio: [
    {
      desc: "Impuesto a las Ganancias",
      tipo: "Nacional",
      detalle: "Impuesto nacional sobre la renta.",
    },
    {
      desc: "Ingresos Brutos",
      tipo: "Provincial",
      detalle: "Recaudación provincial.",
    },
  ],
  avanzado: [
    {
      desc: "Tasa de Seguridad e Higiene",
      tipo: "Municipal",
      detalle: "Tasa municipal.",
    },
    {
      desc: "ABL (Alumbrado, Barrido y Limpieza)",
      tipo: "Municipal",
      detalle: "Tasa local municipal.",
    },
    {
      desc: "Impuesto al Cheque",
      tipo: "Nacional",
      detalle: "Grava movimientos bancarios a nivel nacional.",
    },
    {
      desc: "Patente automotor",
      tipo: "Provincial",
      detalle: "Tributo provincial asociado al vehículo.",
    },
    {
      desc: "Tasa de habilitación comercial",
      tipo: "Municipal",
      detalle: "Es un tributo municipal por habilitar un comercio.",
    },
    {
      desc: "Derechos de exportación",
      tipo: "Nacional",
      detalle: "Tributo nacional sobre exportaciones.",
    },
  ],
};

export const genARJurisdiccionImpuestos: GeneratorFn = makeQuizGenerator(
  27,
  "Jurisdicción del impuesto (Nación/Provincia/Municipio)",
  [
    (dificultad: Dificultad) => {
      const imp = pickOne(CASOS_POR_DIFICULTAD[dificultad]);
      const opciones: Jur[] = ["Nacional", "Provincial", "Municipal"];
      const indiceCorrecto = opciones.indexOf(imp.tipo);

      return {
        enunciado: `¿A qué jurisdicción pertenece el impuesto/tasa: "${imp.desc}"?`,
        opciones,
        indiceCorrecto,
        explicacion: imp.detalle,
      };
    },
  ]
);
