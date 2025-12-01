// src/generators/economia/economia_ar_28_formalInformal.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Formal" | "Informal";

const CASOS = [
  { text: "Trabajo con recibo de sueldo, aportes jubilatorios y obra social.", tipo: "Formal", detalle: "Incluye aportes y marco legal." },
  { text: "Trabajo sin contrato ni aportes, pago en efectivo, no registrado.", tipo: "Informal", detalle: "No registrado, sin aportes." },
  { text: "Trabajo con ART, salario bancarizado y declaración al Estado.", tipo: "Formal", detalle: "Protegido y registrado." },
  { text: "Changas ocasionales sin facturar ni declarar.", tipo: "Informal", detalle: "Sin registro fiscal." },
];

export const genARFormalInformal: GeneratorFn = makeQuizGenerator(
  28,
  "Trabajo formal vs informal",
  [
    (_: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: Tipo[] = ["Formal", "Informal"];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado: `Clasificá la situación laboral en Argentina:\n\n${caso.text}`,
        opciones,
        indiceCorrecto,
        explicacion: caso.detalle,
      };
    },
  ]
);
