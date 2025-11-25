// src/generators/quimica/35_pOH.ts
import {
  GeneratorFn,
  NumericExercise,
  randInt,
  randFloat,
} from "./generico";

export const generarPOH: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // [OH-] entre 10⁻¹ y 10⁻¹³ aproximadamente
  const minExp = dificultad === "facil" ? 1 : 1;
  const maxExp = dificultad === "facil" ? 6 : 13;

  const exp = -randInt(minExp, maxExp);
  const base = randFloat(1.0, 9.9, 1) / 10; // 0.1–0.99
  const OH = base * Math.pow(10, exp);      // [OH-] en mol/L

  const pOH = -Math.log10(OH);

  return {
    idTema: 35,
    tituloTema: "pOH",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Una solución acuosa tiene una concentración de iones hidróxido ` +
      `[OH⁻] = ${OH.toExponential(2)} mol/L.\n` +
      `Calcula el pOH de la solución.`,
    datos: { OH },
    unidades: { OH: "mol/L", resultado: "unidad de pOH" },
    resultado: parseFloat(pOH.toFixed(2)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda la definición: pOH = -log₁₀[OH⁻].",
      "Sustituye la concentración de OH⁻ en la fórmula.",
      "Calcula el logaritmo en base 10 y cambia el signo.",
      "Redondea el resultado a 2 cifras decimales.",
    ],
  };
};
