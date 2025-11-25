// src/generators/quimica/61_concentracion_maxima.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarConcentracionMaximaAntesPrecipitar: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const Ksp = dificultad === "facil"
    ? 1.0e-8
    : 5.0e-9;

  // Elegimos una [Cl-] (por ejemplo) razonable
  const Cl = dificultad === "facil"
    ? randFloat(1e-4, 1e-2, 5)
    : randFloat(5e-5, 5e-2, 5);

  const ClR = parseFloat(Cl.toFixed(5));

  // Para AgCl: Ksp = [Ag+][Cl-] → [Ag+]_max = Ksp / [Cl-]
  const Ag_max = Ksp / ClR;
  const Ag_maxR = Number(Ag_max.toExponential(2));
  const KspR = Number(Ksp.toExponential(2));

  const enunciado =
    "Para la sal poco soluble AgCl(s):\n" +
    "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)\n\n" +
    `se conoce un producto de solubilidad Ksp = ${KspR}.\n` +
    `En una disolución acuosa ya hay una concentración de cloruros [Cl⁻] = ${ClR} mol/L.\n\n` +
    "Calcula la concentración máxima de plata [Ag⁺]_máx (en mol/L) que se puede alcanzar\n" +
    "en la disolución antes de que comience a precipitar AgCl.";

  return {
    idTema: 61,
    tituloTema: "Concentraciones máximas antes de precipitar",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      Ksp,
      Cl: ClR,
      Ag_max,
    },
    unidades: {
      Ksp: "(mol/L)²",
      Cl: "mol/L",
      resultado: "mol/L",
    },
    resultado: Ag_maxR,
    toleranciaRelativa: 0.05,
    pasos: [
      "Recuerda la expresión de equilibrio: Ksp = [Ag⁺]·[Cl⁻].",
      "Para el límite de precipitación se cumple Q = Ksp.",
      "Despeja [Ag⁺]_máx = Ksp / [Cl⁻].",
      "Sustituye los valores numéricos y expresa el resultado en notación científica.",
    ],
  };
};
