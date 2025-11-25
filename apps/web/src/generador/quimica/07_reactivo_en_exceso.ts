// src/generators/quimica/07_reactivo_en_exceso.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

const M_N2 = 28.0; // g/mol
const M_H2 = 2.0;  // g/mol

export const generarReactivoEnExceso: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Reacción: N2 + 3 H2 → 2 NH3
  const limitarPor = Math.random() < 0.5 ? "N2" : "H2";

  let masaN2: number;
  let masaH2: number;
  let reactivoEnExceso: "N2" | "H2";
  let molesSobrantes: number;
  let masaSobrante: number;

  if (limitarPor === "N2") {
    // N2 limitante → H2 en exceso
    const nN2 = dificultad === "facil"
      ? randFloat(0.5, 2.0, 2)
      : randFloat(1.0, 4.0, 2);
    const nH2req = 3 * nN2;
    const factorExceso = randFloat(1.3, 2.0, 2);
    const nH2 = nH2req * factorExceso;

    masaN2 = nN2 * M_N2;
    masaH2 = nH2 * M_H2;

    const nH2consumido = nH2req;
    molesSobrantes = nH2 - nH2consumido;
    masaSobrante = molesSobrantes * M_H2;
    reactivoEnExceso = "H2";
  } else {
    // H2 limitante → N2 en exceso
    const nH2 = dificultad === "facil"
      ? randFloat(1.0, 3.0, 2)
      : randFloat(1.5, 5.0, 2);
    const nN2req = nH2 / 3;
    const factorExceso = randFloat(1.3, 2.0, 2);
    const nN2 = nN2req * factorExceso;

    masaN2 = nN2 * M_N2;
    masaH2 = nH2 * M_H2;

    const nN2consumido = nN2req;
    molesSobrantes = nN2 - nN2consumido;
    masaSobrante = molesSobrantes * M_N2;
    reactivoEnExceso = "N2";
  }

  const masaN2r = parseFloat(masaN2.toFixed(1));
  const masaH2r = parseFloat(masaH2.toFixed(1));
  const molesSobR = parseFloat(molesSobrantes.toFixed(3));
  const masaSobR = parseFloat(masaSobrante.toFixed(2));

  return {
    idTema: 7,
    tituloTema: "Reactivo en exceso",
    dificultad,
    tipo: "numeric",
    enunciado:
      "La reacción de síntesis del amoníaco es:\n" +
      "N₂(g) + 3 H₂(g) → 2 NH₃(g)\n\n" +
      `Se mezclan ${masaN2r} g de N₂ y ${masaH2r} g de H₂, y la reacción avanza hasta completarse.\n` +
      "a) Indica cuál es el reactivo en exceso.\n" +
      "b) Calcula cuántos moles y cuánta masa de ese reactivo quedan sin reaccionar.",
    datos: {
      masaN2: masaN2r,
      masaH2: masaH2r,
      masaMolarN2: M_N2,
      masaMolarH2: M_H2,
    },
    unidades: {
      masaN2: "g",
      masaH2: "g",
      masaMolarN2: "g/mol",
      masaMolarH2: "g/mol",
      molesSobrantes: "mol",
      masaSobrante: "g",
    },
    resultado: {
      reactivoEnExceso,
      molesSobrantes: molesSobR,
      masaSobrante: masaSobR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Determina primero el reactivo limitante comparando los moles de cada reactivo con sus coeficientes.",
      "Calcula cuántos moles del otro reactivo se consumen según la estequiometría.",
      "Resta los moles consumidos de los moles iniciales del reactivo en exceso.",
      "Convierte los moles sobrantes a masa usando su masa molar.",
    ],
  };
};
