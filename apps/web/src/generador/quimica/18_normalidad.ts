// src/generators/quimica/18_normalidad.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

// H2SO4 (ácido sulfúrico) para reacciones ácido-base: 2 equivalentes por mol
const MASA_MOLAR_H2SO4 = 98.0; // g/mol (aprox)
const VALENCIA_H2SO4 = 2;      // 2 H+ por mol

export const generarNormalidad: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaSoluto = dificultad === "facil"
    ? randFloat(4, 15, 1)         // g
    : randFloat(8, 30, 1);

  const volumenLitros = dificultad === "facil"
    ? randFloat(0.1, 0.5, 2)      // L
    : randFloat(0.25, 1.0, 2);

  const moles = masaSoluto / MASA_MOLAR_H2SO4;
  const equivalentes = moles * VALENCIA_H2SO4;
  const normalidad = equivalentes / volumenLitros;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const volumenLitrosR = parseFloat(volumenLitros.toFixed(2));
  const resultado = parseFloat(normalidad.toFixed(3));

  return {
    idTema: 18,
    tituloTema: "Normalidad (N)",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una solución de ácido sulfúrico H₂SO₄ (M ≈ 98 g/mol) para usarla en una titulación ácido–base.\n" +
      `Se disuelven ${masaSolutoR} g de H₂SO₄ en agua hasta obtener ${volumenLitrosR} L de solución.\n` +
      "Sabiendo que H₂SO₄ aporta 2 H⁺ por mol (2 equivalentes por mol), calcula la normalidad (N) de la solución.",
    datos: {
      masaSoluto: masaSolutoR,
      masaMolar: MASA_MOLAR_H2SO4,
      volumen: volumenLitrosR,
      valencia: VALENCIA_H2SO4,
    },
    unidades: {
      masaSoluto: "g",
      masaMolar: "g/mol",
      volumen: "L",
      resultado: "eq/L",
    },
    resultado,
    toleranciaRelativa: 0.03,
    pasos: [
      "Convierte la masa de H₂SO₄ a moles: n = m / M.",
      "Calcula los equivalentes: eq = n · valencia (2 equivalentes por mol para H₂SO₄).",
      "Aplica la definición de normalidad: N = eq / V.",
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
