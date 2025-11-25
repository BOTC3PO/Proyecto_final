// src/generators/quimica/59_solubilidad_molar.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarSolubilidadMolar: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Ksp pequeño típico de sales poco solubles
  const Ksp = dificultad === "facil"
    ? randFloat(1e-9, 1e-7, 10)
    : randFloat(1e-10, 1e-6, 10);

  // s = (Ksp / 4)^(1/3)
  const s = Math.cbrt(Ksp / 4);

  const KspR = Number(Ksp.toExponential(2));
  const sR = Number(s.toExponential(2));

  const enunciado =
    "El fluoruro de calcio se disuelve según:\n" +
    "CaF₂(s) ⇌ Ca²⁺(aq) + 2 F⁻(aq)\n\n" +
    `El producto de solubilidad a cierta temperatura es Ksp = ${KspR}.\n` +
    "Asumiendo que solo la disolución de CaF₂ aporta Ca²⁺ y F⁻, calcula la solubilidad molar s (en mol/L)\n" +
    "de CaF₂ en agua pura.";

  return {
    idTema: 59,
    tituloTema: "Solubilidad molar",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      Ksp,
      s,
    },
    unidades: {
      Ksp: "(mol/L)³",
      resultado: "mol/L",
    },
    resultado: sR,
    toleranciaRelativa: 0.05,
    pasos: [
      "Plantea la tabla de disolución: s mol/L de CaF₂ producen s de Ca²⁺ y 2s de F⁻.",
      "Escribe la expresión de Ksp: Ksp = [Ca²⁺][F⁻]² = s·(2s)² = 4s³.",
      "Resuelve s = (Ksp / 4)^(1/3).",
      "Sustituye el valor de Ksp y expresa s en notación científica.",
    ],
  };
};
