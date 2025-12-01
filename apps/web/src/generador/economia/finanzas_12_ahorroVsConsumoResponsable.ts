// src/generators/economia/finanzas_12_ahorroVsConsumoResponsable.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoDecision = "Ahorro" | "Consumo responsable";

const SITUACIONES: {
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

export const genFinanzasAhorroVsConsumoResponsable: GeneratorFn =
  makeQuizGenerator(
    12,
    "Ahorro vs consumo responsable",
    [
      (_dificultad: Dificultad) => {
        const situacion = pickOne(SITUACIONES);
        const opciones: TipoDecision[] = ["Ahorro", "Consumo responsable"];
        const indiceCorrecto = opciones.indexOf(situacion.tipo);

        return {
          enunciado:
            "En la siguiente situación, ¿predomina el Ahorro o el Consumo responsable?\n\n" +
            situacion.descripcion,
          opciones,
          indiceCorrecto,
          explicacion:
            "El ahorro es guardar parte del ingreso para el futuro. El consumo responsable implica gastar de forma consciente, priorizando necesidades, comparando opciones y evitando compras impulsivas.",
        };
      },
    ]
  );
