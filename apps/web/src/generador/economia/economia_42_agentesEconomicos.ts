// src/generators/economia/economia_42_agentesEconomicos.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
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
  dificultadMinima: Dificultad;
}[] = [
  {
    descripcion:
      "Personas que ofrecen su trabajo a las empresas y consumen bienes y servicios.",
    agente: "Hogares/Familias",
    explicacion:
      "En el esquema escolar, los hogares ofrecen trabajo y demandan bienes y servicios.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "Organizaciones que producen bienes y servicios para vender en el mercado.",
    agente: "Empresas",
    explicacion:
      "Las empresas demandan factores de producción y ofrecen bienes/servicios.",
    dificultadMinima: "basico",
  },
  {
    descripcion:
      "Cobra impuestos, realiza gasto público y regula la economía.",
    agente: "Estado",
    explicacion:
      "El Estado interviene con impuestos, gasto y regulaciones.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "Relaciona la economía local con otros países mediante exportaciones e importaciones.",
    agente: "Sector externo",
    explicacion:
      "El sector externo participa con comercio exterior y flujo de capitales.",
    dificultadMinima: "intermedio",
  },
  {
    descripcion:
      "Recauda impuestos para financiar obras públicas y programas sociales.",
    agente: "Estado",
    explicacion:
      "La recaudación y el gasto público son funciones del Estado en la economía.",
    dificultadMinima: "avanzado",
  },
  {
    descripcion:
      "Importa insumos y exporta productos terminados, conectando el mercado local con el global.",
    agente: "Sector externo",
    explicacion:
      "El comercio internacional de insumos y productos pertenece al sector externo.",
    dificultadMinima: "Legendario",
  },
  {
    descripcion:
      "Contrata trabajadores, invierte en maquinaria y busca beneficios a través de sus ventas.",
    agente: "Empresas",
    explicacion:
      "Las empresas combinan factores de producción para generar bienes y servicios.",
    dificultadMinima: "Divino",
  },
];

export const genAgentesEconomicos: GeneratorFn = makeQuizGenerator(
  42,
  "Agentes económicos y sus roles",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
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
