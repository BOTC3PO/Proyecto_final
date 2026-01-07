// src/generators/economia/finanzas_21_segurosFamilia.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoSeguro =
  | "Seguro de hogar"
  | "Seguro de auto"
  | "Seguro de vida"
  | "Seguro de salud";

const CASOS_BASICO = [
  {
    enunciado:
      "Una familia contrata una póliza que cubre daños por incendio y robo en su vivienda.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de hogar",
    explicacion:
      "El seguro de hogar protege la vivienda y su contenido frente a riesgos como incendio, robo o daños.",
  },
  {
    enunciado:
      "Una persona paga una póliza que cubre los gastos médicos en caso de enfermedad o accidente.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de salud",
    explicacion:
      "El seguro de salud ayuda a cubrir gastos médicos e internaciones, protegiendo la economía familiar.",
  },
  {
    enunciado:
      "Una persona asegura su auto para que la compañía cubra daños a terceros y al vehículo en un choque.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de auto",
    explicacion:
      "El seguro de auto cubre daños propios y/o a terceros, reduciendo el impacto económico de un accidente.",
  },
  {
    enunciado:
      "Una familia contrata un seguro que paga una suma de dinero a los beneficiarios si la persona asegurada fallece.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de vida",
    explicacion:
      "El seguro de vida busca proteger económicamente a la familia si falta el ingreso principal.",
  },
];

const CASOS_INTERMEDIO = [
  ...CASOS_BASICO,
  {
    enunciado:
      "Una persona contrata una póliza que cubre consultas y estudios médicos sin pagar todo de su bolsillo.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de salud",
    explicacion:
      "El seguro de salud cubre gastos médicos y ayuda a reducir el costo de atención.",
  },
  {
    enunciado:
      "Una familia protege su auto ante robo y daños por accidentes.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de auto",
    explicacion:
      "El seguro de auto protege frente a robos y accidentes del vehículo.",
  },
];

const CASOS_AVANZADO = [
  ...CASOS_INTERMEDIO,
  {
    enunciado:
      "Una persona paga una póliza que entrega una suma a sus familiares si sufre un accidente fatal.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de vida",
    explicacion:
      "El seguro de vida protege a los beneficiarios ante el fallecimiento.",
  },
  {
    enunciado:
      "Una póliza protege el contenido de la vivienda ante incendio o robo.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de hogar",
    explicacion:
      "El seguro de hogar cubre la vivienda y sus bienes.",
  },
];

const CASOS_LEGENDARIO = [
  ...CASOS_AVANZADO,
  {
    enunciado:
      "Un conductor contrata una póliza con cobertura contra terceros y daños propios.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de auto",
    explicacion:
      "El seguro de auto cubre daños al vehículo y a terceros.",
  },
  {
    enunciado:
      "Una familia contrata un plan que cubre internaciones y cirugías.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de salud",
    explicacion:
      "El seguro de salud cubre gastos médicos importantes.",
  },
];

const CASOS_DIVINO = [
  ...CASOS_LEGENDARIO,
  {
    enunciado:
      "Una persona asegura su vivienda contra incendios, robos y daños climáticos.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de hogar",
    explicacion:
      "El seguro de hogar cubre riesgos como incendio, robo y daños.",
  },
  {
    enunciado:
      "Un plan garantiza una suma a los beneficiarios ante el fallecimiento del titular.",
    opciones: [
      "Seguro de hogar",
      "Seguro de auto",
      "Seguro de vida",
      "Seguro de salud",
    ],
    correcta: "Seguro de vida",
    explicacion:
      "El seguro de vida busca proteger económicamente a la familia.",
  },
];

const CASOS_POR_DIFICULTAD: Record<
  Dificultad,
  {
    enunciado: string;
    opciones: string[];
    correcta: string;
    explicacion: string;
  }[]
> = {
  basico: CASOS_BASICO,
  intermedio: CASOS_INTERMEDIO,
  avanzado: CASOS_AVANZADO,
  Legendario: CASOS_LEGENDARIO,
  Divino: CASOS_DIVINO,
};

export const genFinanzasSegurosFamilia: GeneratorFn = makeQuizGenerator(
  21,
  "Seguros: función básica para resguardo económico familiar",
  [
    (dificultad: Dificultad) => {
      const caso = pickOne(CASOS_POR_DIFICULTAD[dificultad]);
      const indiceCorrecto = caso.opciones.indexOf(caso.correcta);

      return {
        enunciado: caso.enunciado,
        opciones: caso.opciones,
        indiceCorrecto,
        explicacion:
          caso.explicacion +
          " A nivel escolar, la idea clave es que los seguros ayudan a reducir el impacto económico de ciertos riesgos.",
      };
    },
  ]
);
