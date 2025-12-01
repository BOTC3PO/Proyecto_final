// src/generators/quimica/17_molalidad.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarMolalidad: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Ejemplo: solución de glucosa C6H12O6 (M ≈ 180 g/mol)
  const masaMolar = 180.0; // g/mol (aprox)

  const masaSoluto = dificultad === "facil"
    ? randFloat(5, 20, 1)        // g
    : randFloat(10, 40, 1);

  const masaDisolvente = dificultad === "facil"
    ? randFloat(100, 300, 1)     // g
    : randFloat(200, 600, 1);

  const molesSoluto = masaSoluto / masaMolar;
  const kgDisolvente = masaDisolvente / 1000; // g → kg
  const molalidad = molesSoluto / kgDisolvente;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const masaDisolventeR = parseFloat(masaDisolvente.toFixed(1));
  const resultado = parseFloat(molalidad.toFixed(3));

  return {
    idTema: 17,
    tituloTema: "Molalidad (m)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución disolviendo glucosa (C₆H₁₂O₆, M ≈ 180 g/mol) en agua.\n" +
      `Se disuelven ${masaSolutoR} g de glucosa en ${masaDisolventeR} g de agua.\n` +
      "Calcula la molalidad (m) de la solución.",
    datos: {
      masaSoluto: masaSolutoR,
      masaMolar: masaMolar,
      masaDisolvente: masaDisolventeR,
    },
    unidades: {
      masaSoluto: "g",
      masaMolar: "g/mol",
      masaDisolvente: "g",
      resultado: "mol/kg",
    },
    resultado,
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de soluto a moles: n = m / M.",
      "Convierte la masa de disolvente de gramos a kilogramos.",
      "Aplica la definición de molalidad: m = n / (kg de disolvente).",
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
