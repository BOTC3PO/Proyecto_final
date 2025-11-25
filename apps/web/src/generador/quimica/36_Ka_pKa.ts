// src/generators/quimica/36_Ka_pKa.ts
import {
  GeneratorFn,
  NumericExercise,
  randInt,
  randFloat,
} from "./generico";

export const generarKa_pKa: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Ka entre 10⁻² y 10⁻⁹
  const minExp = 2;
  const maxExp = dificultad === "facil" ? 5 : 9;
  const exp = -randInt(minExp, maxExp);

  const base = randFloat(1.0, 9.9, 1) / 10; // 0.1–0.99
  const Ka = base * Math.pow(10, exp);
  const pKa = -Math.log10(Ka);

  return {
    idTema: 36,
    tituloTema: "Ka – pKa",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Un ácido débil tiene una constante de acidez Ka = ${Ka.toExponential(2)}.\n` +
      "Calcula el valor de pKa.",
    datos: { Ka },
    unidades: { resultado: "adimensional" },
    resultado: parseFloat(pKa.toFixed(2)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que pKa = -log₁₀(Ka).",
      "Sustituye el valor de Ka en la expresión.",
      "Calcula el logaritmo en base 10 y cambia el signo.",
      "Redondea el resultado a 2 cifras decimales.",
    ],
  };
};
