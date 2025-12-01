// src/generators/economia/contab_07_aportesContribuciones.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoAporte = "Aporte del trabajador" | "Contribución del empleador";

const CONCEPTOS: {
  descripcion: string;
  tipo: TipoAporte;
}[] = [
  {
    descripcion: "Descuento del 11% de jubilación sobre el sueldo del empleado.",
    tipo: "Aporte del trabajador",
  },
  {
    descripcion: "Descuento del 3% de Obra Social sobre el salario del empleado.",
    tipo: "Aporte del trabajador",
  },
  {
    descripcion: "Descuento del 3% de PAMI sobre el salario.",
    tipo: "Aporte del trabajador",
  },
  {
    descripcion: "Aporte patronal a la seguridad social que paga la empresa.",
    tipo: "Contribución del empleador",
  },
  {
    descripcion: "Contribución de la empresa a la Obra Social.",
    tipo: "Contribución del empleador",
  },
  {
    descripcion: "Pago de la ART (Aseguradora de Riesgos del Trabajo) por parte de la empresa.",
    tipo: "Contribución del empleador",
  },
];

export const genContabAportesContribuciones: GeneratorFn = makeQuizGenerator(
  7,
  "Aportes del trabajador vs contribuciones del empleador",
  [
    (_dificultad: Dificultad) => {
      const concepto = pickOne(CONCEPTOS);
      const opciones: TipoAporte[] = [
        "Aporte del trabajador",
        "Contribución del empleador",
      ];
      const indiceCorrecto = opciones.indexOf(concepto.tipo);

      return {
        enunciado:
          "Clasificá el siguiente concepto del recibo de sueldo:\n\n" +
          concepto.descripcion,
        opciones,
        indiceCorrecto,
        explicacion:
          "Los aportes se descuentan del salario del trabajador; las contribuciones son montos adicionales que paga el empleador sobre el sueldo.",
      };
    },
  ]
);
