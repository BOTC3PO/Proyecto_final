// src/generators/quimica/40_neutralizacion.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

export const generarNeutralizacion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l)   (1:1)
  const C_acido = dificultad === "facil"
    ? randFloat(0.10, 0.50, 2)      // mol/L
    : randFloat(0.20, 1.00, 2);

  const V_acido_mL = dificultad === "facil"
    ? randFloat(10, 50, 1)          // mL
    : randFloat(20, 80, 1);

  const C_base = dificultad === "facil"
    ? randFloat(0.10, 0.50, 2)      // mol/L
    : randFloat(0.20, 1.00, 2);

  // Pasamos V_acido a litros para la cuenta
  const V_acido_L = V_acido_mL / 1000;
  const nHCl = C_acido * V_acido_L;

  // Estequiometría 1:1 → nNaOH = nHCl
  const V_base_L = nHCl / C_base;
  const V_base_mL = V_base_L * 1000;

  const C_acidoR = parseFloat(C_acido.toFixed(2));
  const V_acido_mLR = parseFloat(V_acido_mL.toFixed(1));
  const C_baseR = parseFloat(C_base.toFixed(2));
  const V_base_mLR = parseFloat(V_base_mL.toFixed(1));

  return {
    idTema: 40,
    tituloTema: "Neutralización ácido–base",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se realiza una neutralización entre ácido clorhídrico y una base fuerte:\n" +
      "HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\n\n" +
      `Se tienen ${V_acido_mLR} mL de HCl de concentración ${C_acidoR} mol/L.\n` +
      `La solución de NaOH tiene concentración ${C_baseR} mol/L.\n` +
      "Calcula qué volumen de NaOH (en mL) se necesita para neutralizar exactamente todo el HCl.",
    datos: {
      C_acido: C_acidoR,
      V_acido_mL: V_acido_mLR,
      C_base: C_baseR,
    },
    unidades: {
      C_acido: "mol/L",
      V_acido_mL: "mL",
      C_base: "mol/L",
      resultado: "mL",
    },
    resultado: V_base_mLR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Convierte el volumen de ácido a litros: V(L) = V(mL) / 1000.",
      "Calcula los moles de HCl: n(HCl) = C(acido) · V(acido).",
      "Usa la estequiometría 1:1: n(NaOH) = n(HCl).",
      "Despeja el volumen de base: V(base) = n(NaOH) / C(base), y luego pasa a mL.",
    ],
  };
};
