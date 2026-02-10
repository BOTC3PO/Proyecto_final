// src/generators/economia/economia_50_publicidadEnganosa_quiz.ts

import {
  type Dificultad,
  type GeneratorFn,
  esDificultadMinima,
  makeQuizGenerator,
  pickOne,
} from "./generico";

type Tipo = "Publicidad engañosa" | "Publicidad clara";

const CASOS = [
  {
    anuncio:
      "“Crédito SIN INTERÉS, 24 cuotas fijas”. En letra muy pequeña se leen CFT 120% y varias comisiones.",
    tipo: "Publicidad engañosa" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    anuncio:
      "“Llévate hoy y empezá a pagar dentro de 6 meses”. No aclara tasa ni CFT en ningún lado.",
    tipo: "Publicidad engañosa" as Tipo,
    dificultadMinima: "basico" as Dificultad,
  },
  {
    anuncio:
      "“Crédito personal: Tasa nominal 60%, CFT 85%. Detalle de gastos e impuestos en el contrato”.",
    tipo: "Publicidad clara" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    anuncio:
      "“30% de descuento pagando en efectivo. No hay financiación ni recargos”.",
    tipo: "Publicidad clara" as Tipo,
    dificultadMinima: "intermedio" as Dificultad,
  },
  {
    anuncio:
      "“Cuotas sin interés”. La publicidad no menciona que el precio de contado es 25% menor.",
    tipo: "Publicidad engañosa" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    anuncio:
      "“Tasa nominal 70%, CFT 95% con seguro incluido y detalle de cargos”.",
    tipo: "Publicidad clara" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
  {
    anuncio:
      "“Hasta 50% de descuento”. No aclara condiciones ni productos alcanzados.",
    tipo: "Publicidad engañosa" as Tipo,
    dificultadMinima: "avanzado" as Dificultad,
  },
];

export const genQuizPublicidadEnganosa: GeneratorFn = makeQuizGenerator(
  50,
  "Publicidad engañosa (quiz)",
  [
    (dificultad: Dificultad) => {
      const casosDisponibles = CASOS.filter((caso) =>
        esDificultadMinima(dificultad, caso.dificultadMinima)
      );
      const caso = pickOne(casosDisponibles);
      const opciones: Tipo[] = ["Publicidad engañosa", "Publicidad clara"];
      const indiceCorrecto = opciones.indexOf(caso.tipo);

      return {
        enunciado:
          "Leé el siguiente anuncio y decidí si es un ejemplo de publicidad engañosa o clara:\n\n" +
          caso.anuncio,
        opciones,
        indiceCorrecto,
        explicacion:
          "Para decidir, en nivel escolar se observa si la información clave (tasas, CFT, costos) está visible y entendible o si se oculta en letra muy pequeña.",
      };
    },
  ]
);
