// src/generators/economia/economia_ar_26_ivaCalculo.ts
import {
  type Dificultad,
  type GeneratorFn,
  makeQuizGenerator,
  randInt,
  randomBool,
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

function crearCasoTotal(base: number, tasa: number, etiqueta: string): Caso {
  const iva = Math.round(base * tasa);
  const total = base + iva;
  const opciones = crearOpciones(total, 20, 4);
  const indiceCorrecto = opciones.indexOf("$ " + total.toLocaleString("es-AR"));

  return {
    enunciado:
      `Producto ${etiqueta} con precio sin IVA de $ ${base.toLocaleString(
        "es-AR"
      )}. ` +
      `IVA a aplicar = ${tasa * 100}%. ¿Cuál es el precio final con IVA?`,
    opciones,
    indiceCorrecto,
    explicacion: `IVA = Precio × ${tasa}. Total = ${base} + ${iva}.`,
  };
}

function crearCasoIVA(base: number, tasa: number, etiqueta: string): Caso {
  const iva = Math.round(base * tasa);
  const opciones = crearOpciones(iva, 25, 4);
  const indiceCorrecto = opciones.indexOf("$ " + iva.toLocaleString("es-AR"));

  return {
    enunciado:
      `Producto ${etiqueta} con precio sin IVA de $ ${base.toLocaleString(
        "es-AR"
      )}. ` +
      `IVA a aplicar = ${tasa * 100}%. ¿Cuánto IVA se paga?`,
    opciones,
    indiceCorrecto,
    explicacion: `IVA = Precio × ${tasa}.`,
  };
}

function crearCasoBaseDesdeTotal(total: number, tasa: number, etiqueta: string): Caso {
  const base = Math.round(total / (1 + tasa));
  const opciones = crearOpciones(base, 25, 4);
  const indiceCorrecto = opciones.indexOf("$ " + base.toLocaleString("es-AR"));

  return {
    enunciado:
      `Producto ${etiqueta} con precio final (IVA incluido) de $ ${total.toLocaleString(
        "es-AR"
      )}. ` +
      `Si la alícuota es ${tasa * 100}%, ¿cuál es el precio sin IVA aproximado?`,
    opciones,
    indiceCorrecto,
    explicacion:
      "Para quitar el IVA se divide el precio final por (1 + alícuota).",
  };
}

export const genARIVACalculo: GeneratorFn = makeQuizGenerator(
  26,
  "IVA cálculo escolar (21% general o 10.5% esencial)",
  [
    (dificultad: Dificultad) => {
      const base = randInt(10, 90) * 1000;
      const baseAlta = randInt(40, 140) * 1000;
      const tasaGeneral = 0.21;
      const tasaEsencial = 0.105;
      const esencial = randomBool();
      const tasa = esencial ? tasaEsencial : tasaGeneral;
      const etiqueta = esencial ? "esencial" : "general";

      const casos: Record<Dificultad, Caso> = {
        basico: crearCasoTotal(base, tasaGeneral, "general"),
        intermedio: crearCasoTotal(base, tasa, etiqueta),
        avanzado: crearCasoIVA(base, tasa, etiqueta),
      };

      return casos[dificultad];
    },
  ]
);
