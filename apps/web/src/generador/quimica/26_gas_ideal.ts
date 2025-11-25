// src/generators/quimica/26_gas_ideal.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

const R = 0.082; // L·atm·K⁻¹·mol⁻¹ aprox

export const generarGasIdeal: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const n = dificultad === "facil"
    ? randFloat(0.5, 2.0, 2)
    : randFloat(1.0, 5.0, 2);    // mol

  const T = randFloat(280, 330, 0); // K

  const V = dificultad === "facil"
    ? randFloat(5, 15, 1)       // L
    : randFloat(5, 25, 1);

  const P = (n * R * T) / V;

  const nR = parseFloat(n.toFixed(2));
  const TR = parseFloat(T.toFixed(0));
  const VR = parseFloat(V.toFixed(1));
  const PR = parseFloat(P.toFixed(2));

  return {
    idTema: 26,
    tituloTema: "Ecuación del gas ideal PV = nRT",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Un gas ideal ocupa un determinado volumen a cierta temperatura.\n" +
      `En un recipiente de volumen V = ${VR} L se encuentran n = ${nR} mol de gas a T = ${TR} K.\n` +
      "Calcula la presión del gas en atm, usando R = 0,082 L·atm·K⁻¹·mol⁻¹.",
    datos: {
      n: nR,
      T: TR,
      V: VR,
      R,
    },
    unidades: {
      n: "mol",
      T: "K",
      V: "L",
      resultado: "atm",
    },
    resultado: PR,
    toleranciaRelativa: 0.03,
    pasos: [
      "Escribe la ecuación del gas ideal: P·V = n·R·T.",
      "Despeja la presión: P = n·R·T / V.",
      "Sustituye el número de moles, la constante de los gases, la temperatura y el volumen.",
      "Redondea el resultado a 2 decimales.",
    ],
  };
};
