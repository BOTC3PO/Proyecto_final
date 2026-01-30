// src/generators/quimica/39_fuerza_acidos_bases.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randInt,
  randFloat,
  randomBool,
} from "./generico";

type TipoComparacion = "Ka" | "pKa";

export const generarFuerzaAcidosBases: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const tipo: TipoComparacion = randomBool() ? "Ka" : "pKa";

  // Generamos pKa1 y pKa2 razonables (ácidos débiles)
  let pKa1Base = randInt(2, 9);
  let pKa2Base = randInt(2, 9);

  // Evitar que salgan iguales
  if (pKa1Base === pKa2Base) {
    pKa2Base = (pKa2Base % 9) + 2;
  }

  // Permitimos medias unidades algunos casos
  const pKa1 = pKa1Base + (randomBool() ? 0 : 0.5);
  const pKa2 = pKa2Base + (randomBool() ? 0 : 0.5);

  const Ka1 = Math.pow(10, -pKa1);
  const Ka2 = Math.pow(10, -pKa2);

  let enunciado: string;
  let resultado: { acidoMasFuerte: string; factorAprox: number };

  const acidoMasFuerte =
    Ka1 > Ka2 ? "Ácido A" : "Ácido B";
  const factor =
    Ka1 > Ka2 ? Ka1 / Ka2 : Ka2 / Ka1;

  const factorRedondeado =
    dificultad === "facil"
      ? parseFloat(factor.toFixed(1))
      : parseFloat(factor.toFixed(2));

  if (tipo === "Ka") {
    const Ka1R = Number(Ka1.toExponential(2));
    const Ka2R = Number(Ka2.toExponential(2));

    enunciado =
      "Se comparan dos ácidos débiles, denominados Ácido A y Ácido B.\n\n" +
      `Para el Ácido A, la constante de acidez es Ka(A) = ${Ka1R}.\n` +
      `Para el Ácido B, la constante de acidez es Ka(B) = ${Ka2R}.\n\n` +
      "a) Indica cuál de los dos ácidos es más fuerte.\n" +
      "b) Aproximadamente, ¿cuántas veces es más grande la Ka del ácido más fuerte respecto del más débil?";
  } else {
    const pKa1R = Number(pKa1.toFixed(2));
    const pKa2R = Number(pKa2.toFixed(2));

    enunciado =
      "Se comparan dos ácidos débiles, denominados Ácido A y Ácido B.\n\n" +
      `Para el Ácido A, el valor es pKa(A) = ${pKa1R}.\n` +
      `Para el Ácido B, el valor es pKa(B) = ${pKa2R}.\n\n` +
      "a) Indica cuál de los dos ácidos es más fuerte.\n" +
      "b) Aproximadamente, ¿cuántas veces es más grande la Ka del ácido más fuerte respecto del más débil?";
  }

  resultado = {
    acidoMasFuerte,
    factorAprox: factorRedondeado,
  };

  return {
    idTema: 39,
    tituloTema: "Fuerza de ácidos y bases (comparación con Ka/pKa)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      pKa1,
      pKa2,
      Ka1,
      Ka2,
    },
    unidades: {
      resultado: "adimensional",
    },
    resultado,
    toleranciaRelativa: 0.1, // para el factor aproximado
    pasos: [
      tipo === "Ka"
        ? "Recuerda: a mayor Ka, el ácido es más fuerte (se ioniza más)."
        : "Recuerda: a menor pKa, el ácido es más fuerte.",
      "Compara los valores dados para decidir cuál es el ácido más fuerte.",
      "Calcula el cociente entre las constantes de acidez Ka del ácido más fuerte y del más débil.",
      "Redondea el factor de diferencia al número de decimales indicado.",
    ],
  };
};
