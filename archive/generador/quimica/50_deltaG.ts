// src/generators/quimica/50_deltaG.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
  randInt,
} from "./generico";

const F = 96485; // C/mol

export const generarDeltaG: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const n = randInt(1, 4); // número de moles de electrones

  const Ecelda = dificultad === "facil"
    ? randFloat(0.3, 1.2, 2)
    : randFloat(0.1, 2.0, 2);

  const EceldaR = parseFloat(Ecelda.toFixed(2));

  // ΔG en J: ΔG = -n·F·E
  const deltaG_J = -n * F * EceldaR;
  const deltaG_kJ = deltaG_J / 1000;
  const deltaG_kJR = parseFloat(deltaG_kJ.toFixed(1));

  const enunciado =
    "En una celda electroquímica se produce una reacción redox en la que se intercambian n moles de electrones.\n" +
    `Para esta reacción, el potencial estándar de celda es E°_celda = ${EceldaR} V\n` +
    `y se transfieren n = ${n} mol de electrones.\n\n` +
    "Calcula el cambio de energía libre estándar ΔG° (en kJ) usando la relación:\n" +
    "ΔG° = − n·F·E°_celda, con F = 96485 C/mol.";

  return {
    idTema: 50,
    tituloTema: "ΔG = −nFE",
    dificultad,
    tipo: "numeric",
    enunciado,
    datos: {
      n,
      Ecelda: EceldaR,
      F,
      deltaG_kJ: deltaG_kJR,
    },
    unidades: {
      n: "mol de e⁻",
      Ecelda: "V",
      F: "C/mol",
      resultado: "kJ",
    },
    resultado: deltaG_kJR,
    toleranciaRelativa: 0.02,
    pasos: [
      "Escribe la expresión: ΔG° = −n·F·E°_celda.",
      "Sustituye n, F (96485 C/mol) y E°_celda (en V).",
      "Obtendrás ΔG° en joules (J). Convierte a kJ dividiendo por 1000.",
      "Conserva el signo: ΔG° negativo indica reacción espontánea en condiciones estándar.",
    ],
  };
};
