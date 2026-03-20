// src/generators/economia/finanzas_12_ahorroVsConsumoResponsable.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";
import { resolveTemaEnunciado } from "./consignas";

type TipoDecision = "Ahorro" | "Consumo responsable";

const SITUACIONES_BASICO: {
  descripcion: string;
  tipo: TipoDecision;
}[] = [
  {
    descripcion:
      "Separar una parte fija del sueldo todos los meses para un fondo de emergencia.",
    tipo: "Ahorro",
  },
  {
    descripcion:
      "Guardar dinero durante un año para comprar una computadora que se necesita para estudiar.",
    tipo: "Ahorro",
  },
  {
    descripcion:
      "Destinar una parte del ingreso para pagar deudas antes de gastar en ocio.",
    tipo: "Consumo responsable",
  },
  {
    descripcion:
      "Comparar precios y elegir un producto más económico de calidad similar.",
    tipo: "Consumo responsable",
  },
  {
    descripcion:
      "Postergar una compra impulsiva porque no es necesaria en este momento.",
    tipo: "Consumo responsable",
  },
];

const SITUACIONES_INTERMEDIO: { descripcion: string; tipo: TipoDecision }[] = [
  ...SITUACIONES_BASICO,
  {
    descripcion:
      "Armar un presupuesto mensual para controlar gastos y ahorrar.",
    tipo: "Ahorro",
  },
  {
    descripcion:
      "Comprar un producto con descuento real después de comparar precios.",
    tipo: "Consumo responsable",
  },
];

const SITUACIONES_AVANZADO: { descripcion: string; tipo: TipoDecision }[] = [
  ...SITUACIONES_INTERMEDIO,
  {
    descripcion:
      "Destinar parte del aguinaldo a un fondo para arreglos del hogar.",
    tipo: "Ahorro",
  },
  {
    descripcion:
      "Elegir una opción financiada con cuotas sin interés y dentro del presupuesto.",
    tipo: "Consumo responsable",
  },
];



const SITUACIONES_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; tipo: TipoDecision }[]
> = {
  basico: SITUACIONES_BASICO,
  intermedio: SITUACIONES_INTERMEDIO,
  avanzado: SITUACIONES_AVANZADO,
};

export const genFinanzasAhorroVsConsumoResponsable: GeneratorFn =
  makeQuizGenerator(
    12,
    "Ahorro vs consumo responsable",
    [
      (dificultad: Dificultad) => {
        const situacion = pickOne(SITUACIONES_POR_DIFICULTAD[dificultad]);
        const opciones: TipoDecision[] = ["Ahorro", "Consumo responsable"];
        const indiceCorrecto = opciones.indexOf(situacion.tipo);

        const fallbackEnunciado =
          "En la siguiente situación, ¿predomina el Ahorro o el Consumo responsable?\n\n" +
          situacion.descripcion;

        return {
          enunciado: resolveTemaEnunciado(12, { ...situacion }, fallbackEnunciado),
          opciones,
          indiceCorrecto,
          explicacion:
            "El ahorro es guardar parte del ingreso para el futuro. El consumo responsable implica gastar de forma consciente, priorizando necesidades, comparando opciones y evitando compras impulsivas.",
        };
      },
    ]
  );
