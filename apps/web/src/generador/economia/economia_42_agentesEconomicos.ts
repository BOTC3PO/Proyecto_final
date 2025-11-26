// src/generators/economia/economia_42_agentesEconomicos.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Agente =
  | "Hogares/Familias"
  | "Empresas"
  | "Estado"
  | "Sector externo";

const CASOS: {
  descripcion: string;
  agente: Agente;
  explicacion: string;
}[] = [
  {
    descripcion:
      "Personas que ofrecen su trabajo a las empresas y consumen bienes y servicios.",
    agente: "Hogares/Familias",
    explicacion:
      "En el esquema escolar, los hogares ofrecen trabajo y demandan bienes y servicios.",
  },
  {
    descripcion:
      "Organizaciones que producen bienes y servicios para vender en el mercado.",
    agente: "Empresas",
    explicacion:
      "Las empresas demandan factores de producción y ofrecen bienes/servicios.",
  },
  {
    descripcion:
      "Cobra impuestos, realiza gasto público y regula la economía.",
    agente: "Estado",
    explicacion:
      "El Estado interviene con impuestos, gasto y regulaciones.",
  },
  {
    descripcion:
      "Relaciona la economía local con otros países mediante exportaciones e importaciones.",
    agente: "Sector externo",
    explicacion:
      "El sector externo participa con comercio exterior y flujo de capitales.",
  },
];

export const genAgentesEconomicos: GeneratorFn = makeQuizGenerator(
  42,
  "Agentes económicos y sus roles",
  [
    (_dificultad: Dificultad) => {
      const caso = pickOne(CASOS);
      const opciones: Agente[] = [
        "Hogares/Familias",
        "Empresas",
        "Estado",
        "Sector externo",
      ];
      const indiceCorrecto = opciones.indexOf(caso.agente);

      return {
        enunciado:
          "En el flujo circular de la economía escolar, ¿qué agente económico corresponde a la siguiente descripción?\n\n" +
          caso.descripcion,
        opciones,
        indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
