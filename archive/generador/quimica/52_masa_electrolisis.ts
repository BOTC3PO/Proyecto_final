// src/generators/quimica/52_masa_electrolisis.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

const F = 96485; // C/mol
const M_CU = 63.5; // g/mol aprox
const N_E_CU = 2;  // Cu²⁺ + 2e⁻ → Cu

export const generarMasaElectrolisis: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const I = dificultad === "facil"
    ? randFloat(0.5, 3.0, 2)     // A
    : randFloat(1.0, 8.0, 2);

  const t = dificultad === "facil"
    ? randFloat(600, 3600, 0)    // s
    : randFloat(1200, 7200, 0);

  const IR = parseFloat(I.toFixed(2));
  const tR = parseFloat(t.toFixed(0));

  const Q = IR * tR;                   // C
  const n_e = Q / F;                   // mol de e⁻
  const n_Cu = n_e / N_E_CU;           // mol de Cu depositado
  const m_Cu = n_Cu * M_CU;            // g

  const m_CuR = parseFloat(m_Cu.toFixed(3));

  const enunciado =
    "En una celda de electrólisis se deposita cobre a partir de una disolución de Cu²⁺ según:\n" +
    "Cu²⁺(aq) + 2 e⁻ → Cu(s)\n\n" +
    `Se hace pasar una corriente de I = ${IR} A durante t = ${tR} s.\n` +
    "Calcula la masa de cobre metálico depositada en el cátodo (en gramos).\n" +
    "Datos: M(Cu) ≈ 63,5 g/mol, F = 96485 C/mol.";

  return {
    idTema: 52,
    tituloTema: "Masa depositada en electrólisis",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      I: IR,
      t: tR,
      Q,
      F,
      M_Cu: M_CU,
      n_e,
      n_Cu,
      m_Cu: m_CuR,
    },
    unidades: {
      I: "A",
      t: "s",
      Q: "C",
      M_Cu: "g/mol",
      resultado: "g",
    },
    resultado: m_CuR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Calcula la carga total: Q = I·t.",
      "Obtén los moles de electrones: n(e⁻) = Q / F.",
      "Usa la estequiometría de la semirreacción: Cu²⁺ + 2e⁻ → Cu, así que n(Cu) = n(e⁻)/2.",
      "Convierte los moles de Cu a masa: m(Cu) = n(Cu)·M(Cu).",
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
