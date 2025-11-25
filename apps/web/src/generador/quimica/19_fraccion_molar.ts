// src/generators/quimica/19_fraccion_molar.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

// Aproximaciones de masas molares
const M_H2O = 18.0;    // g/mol
const M_ETANOL = 46.0; // g/mol (C2H5OH)

export const generarFraccionMolar: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaEtanol = dificultad === "facil"
    ? randFloat(5, 20, 1)
    : randFloat(10, 40, 1);

  const masaAgua = dificultad === "facil"
    ? randFloat(50, 150, 1)
    : randFloat(80, 250, 1);

  const nEtanol = masaEtanol / M_ETANOL;
  const nAgua = masaAgua / M_H2O;
  const nTotal = nEtanol + nAgua;

  const xEtanol = nEtanol / nTotal;
  const xAgua = nAgua / nTotal;

  const masaEtanolR = parseFloat(masaEtanol.toFixed(1));
  const masaAguaR = parseFloat(masaAgua.toFixed(1));
  const xEtanolR = parseFloat(xEtanol.toFixed(3));
  const xAguaR = parseFloat(xAgua.toFixed(3));

  return {
    idTema: 19,
    tituloTema: "Fracción molar",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución mezclando etanol (C₂H₅OH, M ≈ 46 g/mol) con agua (H₂O, M ≈ 18 g/mol).\n" +
      `Se usan ${masaEtanolR} g de etanol y ${masaAguaR} g de agua.\n` +
      "Calcula la fracción molar de etanol (Xₑₜₐₙₒₗ) y la fracción molar de agua (Xₐgᵤₐ).",
    datos: {
      masaEtanol: masaEtanolR,
      masaAgua: masaAguaR,
      masaMolarEtanol: M_ETANOL,
      masaMolarAgua: M_H2O,
    },
    unidades: {
      masaEtanol: "g",
      masaAgua: "g",
      resultado: "adimensional",
    },
    resultado: {
      xEtanol: xEtanolR,
      xAgua: xAguaR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de etanol a moles: n(etanol) = m(etanol) / M(etanol).",
      "Convierte la masa de agua a moles: n(agua) = m(agua) / M(agua).",
      "Calcula los moles totales: n(total) = n(etanol) + n(agua).",
      "Aplica: X(etanol) = n(etanol) / n(total) y X(agua) = n(agua) / n(total).",
      "Comprueba que X(etanol) + X(agua) ≈ 1.",
    ],
  };
};
