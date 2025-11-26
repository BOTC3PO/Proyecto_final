// src/generators/economia/finanzas_17_liquidezPersonal.ts

import {
  Dificultad,
  GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoLiquidez = "Dinero disponible" | "Dinero inmovilizado";

const ITEMS: {
  descripcion: string;
  tipo: TipoLiquidez;
}[] = [
  {
    descripcion: "Efectivo en la billetera.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Saldo en caja de ahorro que se puede retirar con tarjeta de débito.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Saldo en una cuenta de pago digital (billetera virtual) para usar con QR.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Plazo fijo a 30 días que todavía no venció.",
    tipo: "Dinero inmovilizado",
  },
  {
    descripcion: "Dinero usado para comprar un electrodoméstico en cuotas ya firmado.",
    tipo: "Dinero inmovilizado",
  },
  {
    descripcion: "Ahorros invertidos en un terreno que no se piensa vender pronto.",
    tipo: "Dinero inmovilizado",
  },
  {
    descripcion: "Aportes hechos a largo plazo en un plan de retiro/jubilación.",
    tipo: "Dinero inmovilizado",
  },
];

export const genFinanzasLiquidezPersonal: GeneratorFn = makeQuizGenerator(
  17,
  "Liquidez personal del hogar (dinero disponible vs inmovilizado)",
  [
    (_dificultad: Dificultad) => {
      const item = pickOne(ITEMS);
      const opciones: TipoLiquidez[] = [
        "Dinero disponible",
        "Dinero inmovilizado",
      ];
      const indiceCorrecto = opciones.indexOf(item.tipo);

      return {
        enunciado:
          "Clasificá el siguiente recurso del hogar según su liquidez:\n\n" +
          item.descripcion,
        opciones,
        indiceCorrecto,
        explicacion:
          "La liquidez es la facilidad y rapidez con la que algo se puede convertir en dinero para usar. Efectivo y saldos en cuentas son dinero disponible; inversiones a plazo, bienes y aportes de largo plazo son dinero inmovilizado.",
      };
    },
  ]
);
