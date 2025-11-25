// src/generators/quimica/62_descenso_punto_congelacion.ts
import {
  GeneratorFn,
  NumericExercise,
  randFloat,
} from "./generico";

// Constante crioscópica del agua (aprox)
const Kf_AGUA = 1.86; // °C·kg/mol
const T_CONGELACION_PURA = 0.0; // °C

export const generarDescensoPuntoCongelacion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  // Soluto no electrolito (i = 1)
  const masaSoluto = dificultad === "facil"
    ? randFloat(5, 25, 1)          // g
    : randFloat(10, 50, 1);

  const masaMolarSoluto = dificultad === "facil"
    ? randFloat(40, 100, 1)        // g/mol
    : randFloat(50, 180, 1);

  const masaDisolvente = dificultad === "facil"
    ? randFloat(100, 300, 1)       // g
    : randFloat(200, 600, 1);

  const molesSoluto = masaSoluto / masaMolarSoluto;
  const kgDisolvente = masaDisolvente / 1000;
  const molalidad = molesSoluto / kgDisolvente;

  const deltaTf = Kf_AGUA * molalidad; // i = 1
  const Tf = T_CONGELACION_PURA - deltaTf;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const masaMolarSolutoR = parseFloat(masaMolarSoluto.toFixed(1));
  const masaDisolventeR = parseFloat(masaDisolvente.toFixed(1));
  const molalidadR = parseFloat(molalidad.toFixed(3));
  const deltaTfR = parseFloat(deltaTf.toFixed(2));
  const TfR = parseFloat(Tf.toFixed(2));

  return {
    idTema: 62,
    tituloTema: "Descenso del punto de congelación",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una disolución no electrolítica en agua (i = 1).\n" +
      `Se disuelven ${masaSolutoR} g de un soluto (M = ${masaMolarSolutoR} g/mol)\n` +
      `en ${masaDisolventeR} g de agua (Kf = ${Kf_AGUA} °C·kg/mol).\n\n` +
      "a) Calcula la molalidad de la disolución.\n" +
      "b) Calcula el descenso del punto de congelación (ΔTf).\n" +
      "c) Calcula el nuevo punto de congelación de la disolución.",
    datos: {
      masaSoluto: masaSolutoR,
      masaMolarSoluto: masaMolarSolutoR,
      masaDisolvente: masaDisolventeR,
      Kf: Kf_AGUA,
      molalidad: molalidadR,
      deltaTf: deltaTfR,
      Tf: TfR,
    },
    unidades: {
      masaSoluto: "g",
      masaMolarSoluto: "g/mol",
      masaDisolvente: "g",
      Kf: "°C·kg/mol",
      molalidad: "mol/kg",
      deltaTf: "°C",
      resultado: "°C",
    },
    resultado: {
      molalidad: molalidadR,
      deltaTf: deltaTfR,
      Tf: TfR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Calcula los moles de soluto: n = m / M.",
      "Convierte la masa de disolvente a kg y calcula la molalidad: m = n / kg_disolvente.",
      "Aplica ΔTf = Kf · m · i (con i = 1).",
      "El nuevo punto de congelación es T_f = 0 °C − ΔTf.",
    ],
  };
};
