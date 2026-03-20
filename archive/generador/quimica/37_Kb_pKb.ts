// src/generators/quimica/37_Kb_pKb.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randInt,
  randFloat,
} from "./generico";

export const generarKb_pKb: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Kb entre 10⁻² y 10⁻⁹
  const minExp = 2;
  const maxExp = dificultad === "facil" ? 5 : 9;
  const exp = -randInt(minExp, maxExp);

  const base = randFloat(1.0, 9.9, 1) / 10;
  const Kb = base * Math.pow(10, exp);
  const pKb = -Math.log10(Kb);

  return {
    idTema: 37,
    tituloTema: "Kb – pKb",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Una base débil tiene una constante de basicidad Kb = ${Kb.toExponential(2)}.\n` +
      "Calcula el valor de pKb.",
    datos: { Kb },
    unidades: { resultado: "adimensional" },
    resultado: parseFloat(pKb.toFixed(2)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que pKb = -log₁₀(Kb).",
      "Sustituye el valor de Kb en la expresión.",
      "Calcula el logaritmo en base 10 y cambia el signo.",
      "Redondea el resultado a 2 cifras decimales.",
    ],
  };
};
