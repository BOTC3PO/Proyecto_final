// src/generators/quimica/11_ley_proporciones_multiples.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randInt,
  randFloat,
} from "./generico";

export const generarLeyProporcionesMultiples: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Elementos genéricos X e Y
  const masaX = 10; // 10 g de X en ambos compuestos

  // Elegimos una masa de Y1 y una razón entera sencilla para Y2
  const masaY1Base = randInt(4, 12);        // 4–12 g
  const razonEntera = dificultad === "facil"
    ? randInt(2, 3)
    : randInt(2, 4);                        // 2 a 4
  const masaY2 = masaY1Base * razonEntera;

  // Redondeamos un poco para que no sean números perfectos de entrada
  const masaY1 = parseFloat((masaY1Base + randFloat(-0.2, 0.2, 1)).toFixed(1));
  const masaY2r = parseFloat((masaY2 + randFloat(-0.2, 0.2, 1)).toFixed(1));

  // Lo que queremos como resultado: la razón aproximada m2/m1 ≈ razonEntera
  const razonReal = masaY2r / masaY1;
  const resultado = parseFloat(razonReal.toFixed(2));

  return {
    idTema: 11,
    tituloTema: "Ley de proporciones múltiples",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Dos compuestos distintos están formados por los mismos elementos X e Y.\n" +
      `En el compuesto A, 10 g de X se combinan con ${masaY1} g de Y.\n` +
      `En el compuesto B, 10 g de X se combinan con ${masaY2r} g de Y.\n\n` +
      "Calcula la razón entre las masas de Y en ambos compuestos (masa de Y en B / masa de Y en A).\n" +
      "Indica el valor numérico aproximado de esa razón.",
    datos: {
      masaX_compuestoA: masaX,
      masaY_compuestoA: masaY1,
      masaX_compuestoB: masaX,
      masaY_compuestoB: masaY2r,
    },
    unidades: {
      masaX_compuestoA: "g",
      masaY_compuestoA: "g",
      masaX_compuestoB: "g",
      masaY_compuestoB: "g",
      resultado: "adimensional",
    },
    resultado,
    toleranciaRelativa: 0.05, // 5%
    pasos: [
      "Escribe la razón entre las masas de Y: razón = m(Y en B) / m(Y en A).",
      `Sustituye los valores numéricos dados para m(Y en B) y m(Y en A).`,
      "Calcula el cociente y obsérvalo: debería ser cercano a un número entero sencillo (2, 3, 4...).",
      "Esa relación entera es una manifestación de la ley de las proporciones múltiples.",
    ],
  };
};
