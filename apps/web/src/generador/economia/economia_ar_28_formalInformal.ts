// src/generators/economia/economia_ar_28_formalInformal.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Formal" | "Informal";

type Caso = { text: string; tipo: Tipo; detalle: string };

const CASOS_POR_DIFICULTAD: Record<Dificultad, Caso[]> = {
  basico: [
    {
      text: "Trabajo con recibo de sueldo, aportes jubilatorios y obra social.",
      tipo: "Formal",
      detalle: "Incluye aportes y marco legal.",
    },
    {
      text: "Trabajo sin contrato ni aportes, pago en efectivo, no registrado.",
      tipo: "Informal",
      detalle: "No registrado, sin aportes.",
    },
  ],
  intermedio: [
    {
      text: "Trabajo con ART, salario bancarizado y declaración al Estado.",
      tipo: "Formal",
      detalle: "Protegido y registrado.",
    },
    {
      text: "Changas ocasionales sin facturar ni declarar.",
      tipo: "Informal",
      detalle: "Sin registro fiscal.",
    },
  ],
  avanzado: [
    {
      text: "Empleado con contrato, pero parte del salario se paga en negro.",
      tipo: "Informal",
      detalle: "Existe registro parcial, pero hay porción no declarada.",
    },
    {
      text: "Trabajador independiente que factura y paga monotributo.",
      tipo: "Formal",
      detalle: "Está registrado y cumple obligaciones fiscales.",
    },
    {
      text: "Empleado con contrato temporal registrado y aportes completos.",
      tipo: "Formal",
      detalle: "Aunque sea temporal, está registrado.",
    },
    {
      text: "Cuidador domiciliario sin recibo ni aportes, pago semanal en efectivo.",
      tipo: "Informal",
      detalle: "No hay registro ni aportes.",
    },
    {
      text: "Microemprendedor que vende por redes sin facturar ni registrar actividad.",
      tipo: "Informal",
      detalle: "No está inscripto ni emite comprobantes.",
    },
    {
      text: "Pasante con convenio educativo y alta en AFIP como contratado.",
      tipo: "Formal",
      detalle: "Tiene alta formal y aportes asociados.",
    },
  ],
};

export const genARFormalInformal: GeneratorFn = makeQuizGenerator(
  28,
  "Trabajo formal vs informal",
  [
    (dificultad: Dificultad) => {
      const caso = pickOne(CASOS_POR_DIFICULTAD[dificultad]);
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
