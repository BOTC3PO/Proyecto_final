// src/generators/quimica/20_diluciones.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarDiluciones: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const C1 = dificultad === "facil"
    ? randFloat(0.5, 1.5, 2)      // mol/L
    : randFloat(1.0, 3.0, 2);

  const V1 = dificultad === "facil"
    ? randFloat(10, 50, 1)       // mL
    : randFloat(20, 80, 1);

  const factorDilucion = dificultad === "facil"
    ? 2
    : 3; // para no complicar demasiado

  const V2 = V1 * factorDilucion; // mL
  const C2 = (C1 * V1) / V2;

  const C1R = parseFloat(C1.toFixed(2));
  const V1R = parseFloat(V1.toFixed(1));
  const V2R = parseFloat(V2.toFixed(1));
  const C2R = parseFloat(C2.toFixed(3));

  return {
    idTema: 20,
    tituloTema: "Diluciones (C₁V₁ = C₂V₂)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se tiene una solución concentrada de un soluto cualquiera.\n" +
      `Su concentración inicial es C₁ = ${C1R} mol/L y se toman ${V1R} mL de esta solución.\n` +
      `Luego se añade disolvente hasta alcanzar un volumen final de ${V2R} mL.\n` +
      "Calcula la nueva concentración C₂ de la solución diluida.",
    datos: {
      C1: C1R,
      V1: V1R,
      V2: V2R,
    },
    unidades: {
      C1: "mol/L",
      V1: "mL",
      V2: "mL",
      resultado: "mol/L",
    },
    resultado: C2R,
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda que en una dilución se conserva el número de moles de soluto: C₁·V₁ = C₂·V₂.",
      "Despeja C₂: C₂ = (C₁·V₁) / V₂.",
      "Sustituye los valores de C₁, V₁ y V₂ (en las mismas unidades de volumen).",
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
