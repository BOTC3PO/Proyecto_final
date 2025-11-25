// src/generators/quimica/34_pH.ts
import {
  GeneratorFn,
  NumericExercise,
  randInt,
  randFloat,
} from "./generico";

export const generarPH: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // [H+] entre 10⁻¹ y 10⁻¹³ aproximadamente
  const minExp = dificultad === "facil" ? 1 : 1;
  const maxExp = dificultad === "facil" ? 6 : 13;

  const exp = -randInt(minExp, maxExp);    // exponente negativo
  const base = randFloat(1.0, 9.9, 1) / 10; // 0.1 a 0.99
  const H = base * Math.pow(10, exp);       // [H+] en mol/L

  const pH = -Math.log10(H);

  return {
    idTema: 34,
    tituloTema: "pH",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Una solución acuosa tiene una concentración de iones hidrógeno ` +
      `[H⁺] = ${H.toExponential(2)} mol/L.\n` +
      `Calcula el pH de la solución.`,
    datos: { H },
    unidades: { H: "mol/L", resultado: "unidad de pH" },
    resultado: parseFloat(pH.toFixed(2)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Recuerda la definición: pH = -log₁₀[H⁺].",
      "Sustituye la concentración de H⁺ en la fórmula.",
      "Calcula el logaritmo en base 10 y cambia el signo.",
      "Redondea el resultado a 2 cifras decimales.",
    ],
  };
};
