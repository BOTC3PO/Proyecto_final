// src/generators/economia/economia_ar_25_iva.ts

import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  pickOne,
  randInt,
} from "./generico";

type Caso = {
  enunciado: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
};

function crearOpciones(valor: number, desvio: number, cantidad: number): string[] {
  const opciones = new Set<number>();
  opciones.add(valor);

  while (opciones.size < cantidad) {
    const variacion = randInt(-desvio, desvio);
    const candidato = Math.round(valor * (1 + variacion / 100));
    if (candidato > 0) opciones.add(candidato);
  }

  return Array.from(opciones).map(
    (v) => "$ " + v.toLocaleString("es-AR")
  );
}

function crearCasoTotal(
  base: number,
  tasa: number,
  etiqueta: string,
  desvio = 20,
  cantidad = 4
): Caso {
  const iva = Math.round(base * tasa);
  const total = base + iva;
  const opciones = crearOpciones(total, desvio, cantidad);
  const indiceCorrecto = opciones.indexOf(
    "$ " + total.toLocaleString("es-AR")
  );

  return {
    enunciado:
      `En Argentina, un bien ${etiqueta} con precio sin IVA de $ ${base.toLocaleString(
        "es-AR"
      )} paga IVA ${tasa * 100}%. ` +
      `¿Cuál es el precio final aproximado con IVA incluido?`,
    opciones,
    indiceCorrecto,
    explicacion:
      "El IVA se calcula como Precio sin IVA × alícuota y luego se suma al precio base.",
  };
}

function crearCasoIVA(
  base: number,
  tasa: number,
  etiqueta: string,
  desvio = 25,
  cantidad = 4
): Caso {
  const iva = Math.round(base * tasa);
  const opciones = crearOpciones(iva, desvio, cantidad);
  const indiceCorrecto = opciones.indexOf("$ " + iva.toLocaleString("es-AR"));

  return {
    enunciado:
      `En Argentina, un bien ${etiqueta} cuesta $ ${base.toLocaleString(
        "es-AR"
      )} sin IVA y paga IVA ${tasa * 100}%. ` +
      `¿Cuál es el monto de IVA aproximado?`,
    opciones,
    indiceCorrecto,
    explicacion: "El IVA se obtiene multiplicando el precio base por la alícuota.",
  };
}

function crearCasoBaseDesdeTotal(
  total: number,
  tasa: number,
  etiqueta: string,
  desvio = 25,
  cantidad = 4
): Caso {
  const base = Math.round(total / (1 + tasa));
  const opciones = crearOpciones(base, desvio, cantidad);
  const indiceCorrecto = opciones.indexOf("$ " + base.toLocaleString("es-AR"));

  return {
    enunciado:
      `Un bien ${etiqueta} tiene un precio final de $ ${total.toLocaleString(
        "es-AR"
      )} con IVA incluido (alícuota ${tasa * 100}%). ` +
      `¿Cuál es el precio sin IVA aproximado?`,
    opciones,
    indiceCorrecto,
    explicacion:
      "Para quitar el IVA, se divide el precio final por (1 + alícuota).",
  };
}

export const genARIVA: GeneratorFn = makeQuizGenerator(
  25,
  "IVA Argentina: 21% general y 10,5% bienes esenciales",
  [
    (dificultad: Dificultad) => {
      const base = randInt(10, 80) * 1000;
      const baseAlta = randInt(40, 120) * 1000;
      const tasaGeneral = 0.21;
      const tasaEsencial = 0.105;

      const casos: Record<Dificultad, Caso[]> = {
        basico: [crearCasoTotal(base, tasaGeneral, "general")],
        intermedio: [
          crearCasoTotal(base, tasaGeneral, "general"),
          crearCasoTotal(base, tasaEsencial, "esencial"),
        ],
        avanzado: [
          crearCasoIVA(base, tasaGeneral, "general"),
          crearCasoIVA(base, tasaEsencial, "esencial"),
        ],
        Legendario: [
          crearCasoBaseDesdeTotal(baseAlta, tasaGeneral, "general"),
          crearCasoBaseDesdeTotal(baseAlta, tasaEsencial, "esencial"),
        ],
        Divino: [
          crearCasoTotal(baseAlta, tasaGeneral, "general"),
          crearCasoIVA(baseAlta, tasaEsencial, "esencial"),
        ],
      };

      const caso = pickOne(casos[dificultad]);
      return {
        enunciado: caso.enunciado,
        opciones: caso.opciones,
        indiceCorrecto: caso.indiceCorrecto,
        explicacion: caso.explicacion,
      };
    },
  ]
);
