// src/generators/economia/economia_ar_27_jurisdiccionImpuestos.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Jur = "Nacional" | "Provincial" | "Municipal";

const IMP: { desc: string; tipo: Jur; detalle: string }[] = [
  { desc: "IVA", tipo: "Nacional", detalle: "Impuesto nacional." },
  { desc: "Impuesto a las Ganancias", tipo: "Nacional", detalle: "Impuesto nacional sobre renta." },
  { desc: "Ingresos Brutos", tipo: "Provincial", detalle: "Recaudación provincial." },
  { desc: "Impuesto Inmobiliario", tipo: "Provincial", detalle: "Depende de la provincia." },
  { desc: "Tasa de Seguridad e Higiene", tipo: "Municipal", detalle: "Tasa municipal." },
  { desc: "Alumbrado, Barrido y Limpieza (ABL)", tipo: "Municipal", detalle: "Tasa/local municipal." },
];

export const genARJurisdiccionImpuestos: GeneratorFn = makeQuizGenerator(
  27,
  "Jurisdicción del impuesto (Nación/Provincia/Municipio)",
  [
    (_: Dificultad) => {
      const imp = pickOne(IMP);
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
