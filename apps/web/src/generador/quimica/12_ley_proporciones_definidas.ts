// src/generators/quimica/12_ley_proporciones_definidas.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarLeyProporcionesDefinidas: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Compuesto genérico: XO (por ejemplo, óxido de X)
  // Muestra 1: elegimos masa total y porcentaje de X
  const masaMuestra1 = dificultad === "facil"
    ? randFloat(5, 20, 1)
    : randFloat(10, 50, 1);

  const porcentajeX = randFloat(30, 80, 1); // % en masa de X
  const fraccionX = porcentajeX / 100;

  const masaX1 = masaMuestra1 * fraccionX;
  const masaX1r = parseFloat(masaX1.toFixed(2));

  // Muestra 2: masa diferente, mismo porcentaje teórico
  const masaMuestra2 = dificultad === "facil"
    ? randFloat(5, 20, 1)
    : randFloat(10, 50, 1);
  const masaX2 = masaMuestra2 * fraccionX;
  const masaMuestra2r = parseFloat(masaMuestra2.toFixed(2));
  const masaX2r = parseFloat(masaX2.toFixed(2));
  const porcentajeMuestra1 = parseFloat(((masaX1r / masaMuestra1) * 100).toFixed(1));

  // Lo que pedimos: porcentaje en masa de X (a partir de la muestra 2, por ejemplo)
  const porcentajeCalculado = (masaX2r / masaMuestra2r) * 100;
  const resultado = parseFloat(porcentajeCalculado.toFixed(1));

  return {
    idTema: 12,
    tituloTema: "Ley de las proporciones definidas",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se estudia un mismo compuesto formado por el elemento X y oxígeno (XO).\n\n" +
      `• En una primera muestra del compuesto, de masa ${masaMuestra1.toFixed(2)} g, se encuentran ${masaX1r} g de X.\n` +
      `• En una segunda muestra, de masa ${masaMuestra2r} g, se encuentran ${masaX2r} g de X.\n\n` +
      "Calcula el porcentaje en masa de X en la segunda muestra.\n" +
      "¿Coincide con el porcentaje en la primera muestra (ley de las proporciones definidas)?",
    datos: {
      masaMuestra1: parseFloat(masaMuestra1.toFixed(2)),
      masaX1: masaX1r,
      masaMuestra2: masaMuestra2r,
      masaX2: masaX2r,
    },
    unidades: {
      masaMuestra1: "g",
      masaX1: "g",
      masaMuestra2: "g",
      masaX2: "g",
      resultado: "%",
    },
    resultado,
    visualSpec: {
      kind: "chart",
      chartType: "bar",
      title: "Porcentaje en masa de X",
      xAxis: { label: "Muestra" },
      yAxis: { label: "% en masa de X" },
      series: [
        {
          id: "porcentaje-x",
          label: "% X",
          data: [
            { x: "Muestra 1", y: porcentajeMuestra1 },
            { x: "Muestra 2", y: resultado },
          ],
        },
      ],
    },
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula el porcentaje en masa de X en la segunda muestra: %X = (m(X) / m(muestra)) · 100.",
      `Sustituye los valores: %X = (${masaX2r} g / ${masaMuestra2r} g) · 100.`,
      "Compara este porcentaje con el de la primera muestra: ambos deben ser prácticamente iguales.",
      "Esto ilustra que un compuesto puro siempre tiene la misma proporción en masa de sus elementos.",
    ],
  };
};
