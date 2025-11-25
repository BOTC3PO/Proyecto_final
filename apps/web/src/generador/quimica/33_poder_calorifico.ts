// src/generators/quimica/33_poder_calorifico.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

export const generarPoderCalorifico: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Usamos combustible genérico, por ejemplo etanol
  // Poder calorífico específico en kJ/g (tomamos un valor razonable genérico)
  const poderCalorifico = dificultad === "facil"
    ? randFloat(20, 30, 1)   // kJ/g
    : randFloat(25, 40, 1);  // kJ/g

  const masaCombustible = dificultad === "facil"
    ? randFloat(5, 30, 1)    // g
    : randFloat(10, 80, 1);  // g

  const energia = poderCalorifico * masaCombustible;

  const PC_R = parseFloat(poderCalorifico.toFixed(1));
  const masaR = parseFloat(masaCombustible.toFixed(1));
  const energiaR = parseFloat(energia.toFixed(1));

  return {
    idTema: 33,
    tituloTema: "Poder calorífico",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se estudia un combustible líquido que se quema completamente en una caldera.\n" +
      `El poder calorífico específico del combustible es de ${PC_R} kJ por gramo.\n` +
      `Si se queman ${masaR} g de combustible,\n` +
      "calcula la energía total liberada en kJ.",
    datos: {
      poderCalorifico: PC_R,
      masaCombustible: masaR,
    },
    unidades: {
      poderCalorifico: "kJ/g",
      masaCombustible: "g",
      resultado: "kJ",
    },
    resultado: energiaR,
    toleranciaRelativa: 0.01,
    pasos: [
      "Recuerda que el poder calorífico indica cuánta energía (kJ) se libera por unidad de masa (g).",
      "Multiplica el poder calorífico por la masa de combustible quemada: E = PC · m.",
      "Sustituye los valores y realiza la operación.",
      "Redondea el resultado a 1 decimal.",
    ],
  };
};
