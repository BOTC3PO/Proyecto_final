// src/generators/quimica/32_energia_reaccion.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  randomBool,
} from "./generico";

// masa molar genérica para el reactivo A (solo para convertir masa→moles)
const M_A = 50.0; // g/mol (valor genérico)

export const generarEnergiaReaccion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Elegimos si la reacción es exotérmica (ΔH<0) o endotérmica (ΔH>0)
  const esExotermica = randomBool();

  const deltaHMolar = esExotermica
    ? randFloat(-300, -50, 0)   // kJ/mol
    : randFloat(50, 300, 0);    // kJ/mol

  // Elegimos si damos moles o masa
  const usarMolesDirectos = randomBool();
  let n: number;
  let masa: number | null = null;

  if (usarMolesDirectos) {
    n = dificultad === "facil"
      ? randFloat(0.5, 2.0, 2)
      : randFloat(1.0, 4.0, 2);
  } else {
    masa = dificultad === "facil"
      ? randFloat(10, 50, 1)
      : randFloat(20, 100, 1);
    n = masa / M_A;
  }

  const energiaTotal = n * deltaHMolar;

  const deltaHMolarR = parseFloat(deltaHMolar.toFixed(1));
  const nR = parseFloat(n.toFixed(2));
  const energiaR = parseFloat(energiaTotal.toFixed(1));
  const masaR = masa !== null ? parseFloat(masa.toFixed(1)) : null;

  const textoCantidad = usarMolesDirectos
    ? `Se consumen ${nR} mol de A en una reacción representada por:\n` +
      "A → productos\n"
    : `Se consumen ${masaR} g de A (M ≈ ${M_A} g/mol) en una reacción representada por:\n` +
      "A → productos\n";

  return {
    idTema: 32,
    tituloTema: "Energía liberada o absorbida por reacción",
    dificultad,
    tipo: "numeric",
    enunciado:
      textoCantidad +
      `La entalpía estándar de reacción es ΔH° = ${deltaHMolarR} kJ/mol de A.\n` +
      "Calcula la energía total intercambiada (ΔH_total) para la cantidad de A indicada.\n" +
      (esExotermica
        ? "Indica el signo negativo si la reacción es exotérmica (libera energía)."
        : "Indica el signo positivo si la reacción es endotérmica (absorbe energía)."),
    datos: {
      deltaHMolar: deltaHMolarR,
      n: nR,
      masa: masaR,
      masaMolarA: M_A,
    },
    unidades: {
      n: "mol",
      masa: "g",
      masaMolarA: "g/mol",
      deltaHMolar: "kJ/mol",
      resultado: "kJ",
    },
    resultado: energiaR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Si te dan la masa, conviértela a moles usando n = m / M.",
      "Usa el valor de ΔH molar (kJ/mol) para calcular la energía total.",
      "Aplica: ΔH_total = n · ΔH_molar.",
      "Conserva el signo de ΔH (negativo para exotérmica, positivo para endotérmica).",
    ],
  };
};
