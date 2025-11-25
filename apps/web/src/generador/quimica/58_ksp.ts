// src/generators/quimica/58_ksp.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarKsp: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Concentraciones pequeñas, solución saturada
  const Ag = dificultad === "facil"
    ? randFloat(0.00010, 0.00100, 5)  // mol/L
    : randFloat(0.00001, 0.00100, 5);

  const Cl = dificultad === "facil"
    ? randFloat(0.00010, 0.00100, 5)
    : randFloat(0.00001, 0.00100, 5);

  const AgR = parseFloat(Ag.toFixed(5));
  const ClR = parseFloat(Cl.toFixed(5));

  const Ksp = AgR * ClR;
  const KspR = Number(Ksp.toExponential(2));

  const enunciado =
    "El cloruro de plata es una sal poco soluble que se disuelve según:\n" +
    "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)\n\n" +
    "En una disolución saturada se miden las concentraciones a equilibrio:\n" +
    `[Ag⁺]ₑq = ${AgR} mol/L\n` +
    `[Cl⁻]ₑq = ${ClR} mol/L\n\n` +
    "Calcula el producto de solubilidad Ksp para el AgCl.";

  return {
    idTema: 58,
    tituloTema: "Producto de solubilidad (Ksp)",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      Ag: AgR,
      Cl: ClR,
      Ksp: Ksp,
    },
    unidades: {
      Ag: "mol/L",
      Cl: "mol/L",
      resultado: "(mol/L)²",
    },
    resultado: KspR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Escribe la expresión de Ksp para AgCl: Ksp = [Ag⁺]·[Cl⁻].",
      "Sustituye las concentraciones de equilibrio de Ag⁺ y Cl⁻.",
      "Multiplica los valores y expresa el resultado en notación científica.",
    ],
  };
};
