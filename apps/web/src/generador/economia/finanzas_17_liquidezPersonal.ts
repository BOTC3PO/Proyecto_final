// src/generators/economia/finanzas_17_liquidezPersonal.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type TipoLiquidez = "Dinero disponible" | "Dinero inmovilizado";

const ITEMS_BASICO: {
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

const ITEMS_INTERMEDIO = [
  ...ITEMS_BASICO,
  {
    descripcion:
      "Saldo disponible en una cuenta sueldo para usar con tarjeta.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Inversión en bonos que no se piensa vender a corto plazo.",
    tipo: "Dinero inmovilizado",
  },
];

const ITEMS_AVANZADO = [
  ...ITEMS_INTERMEDIO,
  {
    descripcion: "Dinero en una caja de ahorro con extracción inmediata.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Compra de un vehículo con intención de mantenerlo varios años.",
    tipo: "Dinero inmovilizado",
  },
];

const ITEMS_LEGENDARIO = [
  ...ITEMS_AVANZADO,
  {
    descripcion: "Saldo en una billetera virtual listo para transferir.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Inversión en un emprendimiento familiar sin rescate inmediato.",
    tipo: "Dinero inmovilizado",
  },
];

const ITEMS_DIVINO = [
  ...ITEMS_LEGENDARIO,
  {
    descripcion:
      "Dinero apartado en una cuenta de ahorro con disponibilidad diaria.",
    tipo: "Dinero disponible",
  },
  {
    descripcion: "Compra de maquinaria para un negocio propio.",
    tipo: "Dinero inmovilizado",
  },
];

const ITEMS_POR_DIFICULTAD: Record<
  Dificultad,
  { descripcion: string; tipo: TipoLiquidez }[]
> = {
  basico: ITEMS_BASICO,
  intermedio: ITEMS_INTERMEDIO,
  avanzado: ITEMS_AVANZADO,
};

export const genFinanzasLiquidezPersonal: GeneratorFn = makeQuizGenerator(
  17,
  "Liquidez personal del hogar (dinero disponible vs inmovilizado)",
  [
    (dificultad: Dificultad) => {
      const item = pickOne(ITEMS_POR_DIFICULTAD[dificultad]);
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
