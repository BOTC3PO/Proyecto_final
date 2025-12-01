// src/generators/quimica/16_molaridad.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarMolaridad: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Ejemplo: solución de NaCl
  const masaMolar = 58.5; // g/mol (aprox)

  const masaSoluto = dificultad === "facil"
    ? randFloat(5, 20, 1)       // g
    : randFloat(10, 40, 1);

  const volumenLitros = dificultad === "facil"
    ? randFloat(0.1, 0.5, 2)    // L
    : randFloat(0.25, 1.0, 2);

  const moles = masaSoluto / masaMolar;
  const molaridad = moles / volumenLitros;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const volumenLitrosR = parseFloat(volumenLitros.toFixed(2));
  const resultado = parseFloat(molaridad.toFixed(3));

  return {
    idTema: 16,
    tituloTema: "Molaridad (M)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución acuosa de NaCl (M ≈ 58,5 g/mol).\n" +
      `Si se disuelven ${masaSolutoR} g de NaCl para obtener un volumen final de ${volumenLitrosR} L de solución,\n` +
      "calcula la molaridad (M) de la solución.",
    datos: {
      masaSoluto: masaSolutoR,
      masaMolar: masaMolar,
      volumen: volumenLitrosR,
    },
    unidades: {
      masaSoluto: "g",
      masaMolar: "g/mol",
      volumen: "L",
      resultado: "mol/L",
    },
    resultado,
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula los moles de soluto: n = m / M (masa / masa molar).",
      "Usa la definición de molaridad: M = n / V.",
      "Sustituye el número de moles y el volumen en litros.",
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
