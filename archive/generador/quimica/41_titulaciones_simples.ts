// src/generators/quimica/41_titulaciones_simples.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";
import { buildTitrationVisualSpec } from "./titrationSpec";

export const generarTitulacionesSimples: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Ejemplo: titulación de HCl desconocido con NaOH 1:1
  const V_acido_mL = dificultad === "facil"
    ? randFloat(10, 30, 1)       // mL
    : randFloat(20, 50, 1);

  const C_base = dificultad === "facil"
    ? randFloat(0.10, 0.20, 2)   // mol/L
    : randFloat(0.10, 0.30, 2);

  const V_base_mL = dificultad === "facil"
    ? randFloat(8, 25, 1)
    : randFloat(10, 35, 1);

  // C_acido·V_acido = C_base·V_base  (1:1)
  const V_acido_L = V_acido_mL / 1000;
  const V_base_L = V_base_mL / 1000;

  const C_acido = (C_base * V_base_L) / V_acido_L;

  const V_acido_mLR = parseFloat(V_acido_mL.toFixed(1));
  const C_baseR = parseFloat(C_base.toFixed(2));
  const V_base_mLR = parseFloat(V_base_mL.toFixed(1));
  const C_acidoR = parseFloat(C_acido.toFixed(3));

  return {
    idTema: 41,
    tituloTema: "Titulaciones simples",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se titula una disolución de ácido clorhídrico HCl de concentración desconocida con una disolución de NaOH.\n" +
      "La reacción de neutralización es:\n" +
      "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\n\n" +
      `Se toman ${V_acido_mLR} mL de la disolución de HCl.\n` +
      `Durante la titulación, el punto de equivalencia se alcanza al añadir ${V_base_mLR} mL de NaOH de concentración ${C_baseR} mol/L.\n\n` +
      "Calcula la concentración de HCl (en mol/L) en la muestra original.",
    datos: {
      V_acido_mL: V_acido_mLR,
      V_base_mL: V_base_mLR,
      C_base: C_baseR,
    },
    unidades: {
      V_acido_mL: "mL",
      V_base_mL: "mL",
      C_base: "mol/L",
      resultado: "mol/L",
    },
    resultado: C_acidoR,
    visualSpec: buildTitrationVisualSpec({
      title: "Curva de titulación ácido-base",
      description: "Ubicación del punto equivalente según el volumen añadido.",
      equivalenceVolume: V_base_mLR,
      currentPH: 7,
    }),
    toleranciaRelativa: 0.02,
    pasos: [
      "Convierte los volúmenes de ácido y base a litros.",
      "En una titulación 1:1 se cumple: n(HCl) = n(NaOH) en el punto de equivalencia.",
      "Usa n = C·V: C_acido·V_acido = C_base·V_base.",
      "Despeja C_acido = (C_base·V_base) / V_acido y sustituye los valores.",
    ],
  };
};
