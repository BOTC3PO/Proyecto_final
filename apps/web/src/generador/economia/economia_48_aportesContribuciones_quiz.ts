// src/generators/economia/economia_48_aportesContribuciones_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Aporte del trabajador" | "Contribución del empleador";

const CASOS = [
  {
    desc: "Descuento del 11% de jubilación sobre el sueldo del empleado.",
    tipo: "Aporte del trabajador" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Descuento del 3% de Obra Social sobre el salario del empleado.",
    tipo: "Aporte del trabajador" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    desc: "Monto que paga la empresa a la seguridad social sobre la nómina salarial.",
    tipo: "Contribución del empleador" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Pago que hace la empresa a la ART por la cobertura de riesgos del trabajo.",
    tipo: "Contribución del empleador" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    desc: "Retención del trabajador para financiar el sistema previsional.",
    tipo: "Aporte del trabajador" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Aporte adicional que realiza el empleador para el seguro de vida colectivo.",
    tipo: "Contribución del empleador" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    desc: "Descuento en el recibo del empleado destinado a la obra social.",
    tipo: "Aporte del trabajador" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
];

export const genQuizAportesContribuciones: GeneratorFn = makeQuizGenerator(
  48,
  "Aportes vs contribuciones (quiz)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const opciones: Tipo[] = [
        "Aporte del trabajador",
        "Contribución del empleador",
      ];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "En esta situación del recibo de sueldo, ¿se trata de un aporte del trabajador o una contribución del empleador?\n\n" +
          caso.desc,
        opciones,
        indiceCorrecto,
        explicacion:
          "En el modelo escolar: los aportes se descuentan del sueldo del trabajador; las contribuciones son montos adicionales que paga el empleador.",
      };
    },
  ]
);
