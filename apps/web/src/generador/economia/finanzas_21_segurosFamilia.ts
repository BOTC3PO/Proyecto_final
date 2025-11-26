// src/generators/economia/finanzas_21_segurosFamilia.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoSeguro =
  | "Seguro de hogar"
  | "Seguro de auto"
  | "Seguro de vida"
  | "Seguro de salud";

const CASOS = [
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

export const genFinanzasSegurosFamilia: GeneratorFn = makeQuizGenerator(
  21,
  "Seguros: función básica para resguardo económico familiar",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
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
