// src/generators/quimica/63_elevacion_punto_ebullicion.ts
import {
  type GeneratorFn,
  type NumericExercise,
  randFloat,
} from "./generico";

// Constante ebulloscópica del agua (aprox)
const Kb_AGUA = 0.512; // °C·kg/mol
const T_EBULLICION_PURA = 100.0; // °C

export const generarElevacionPuntoEbullicion: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const masaSoluto = dificultad === "facil"
    ? randFloat(5, 25, 1)
    : randFloat(10, 50, 1);

  const masaMolarSoluto = dificultad === "facil"
    ? randFloat(40, 100, 1)
    : randFloat(50, 180, 1);

  const masaDisolvente = dificultad === "facil"
    ? randFloat(100, 300, 1)
    : randFloat(200, 600, 1);

  const molesSoluto = masaSoluto / masaMolarSoluto;
  const kgDisolvente = masaDisolvente / 1000;
  const molalidad = molesSoluto / kgDisolvente;

  const deltaTb = Kb_AGUA * molalidad; // i = 1
  const Tb = T_EBULLICION_PURA + deltaTb;

  const masaSolutoR = parseFloat(masaSoluto.toFixed(1));
  const masaMolarSolutoR = parseFloat(masaMolarSoluto.toFixed(1));
  const masaDisolventeR = parseFloat(masaDisolvente.toFixed(1));
  const molalidadR = parseFloat(molalidad.toFixed(3));
  const deltaTbR = parseFloat(deltaTb.toFixed(2));
  const TbR = parseFloat(Tb.toFixed(2));

  return {
    idTema: 63,
    tituloTema: "Elevación del punto de ebullición",
    dificultad,
    tipo: "numeric",
    enunciado:
      "Se prepara una disolución no electrolítica en agua (i = 1).\n" +
      `Se disuelven ${masaSolutoR} g de un soluto (M = ${masaMolarSolutoR} g/mol)\n` +
      `en ${masaDisolventeR} g de agua (Kb = ${Kb_AGUA} °C·kg/mol).\n\n` +
      "a) Calcula la molalidad de la disolución.\n" +
      "b) Calcula la elevación del punto de ebullición (ΔTb).\n" +
      "c) Calcula el nuevo punto de ebullición de la disolución.",
    datos: {
      masaSoluto: masaSolutoR,
      masaMolarSoluto: masaMolarSolutoR,
      masaDisolvente: masaDisolventeR,
      Kb: Kb_AGUA,
      molalidad: molalidadR,
      deltaTb: deltaTbR,
      Tb: TbR,
    },
    unidades: {
      masaSoluto: "g",
      masaMolarSoluto: "g/mol",
      masaDisolvente: "g",
      Kb: "°C·kg/mol",
      molalidad: "mol/kg",
      deltaTb: "°C",
      resultado: "°C",
    },
    resultado: {
      molalidad: molalidadR,
      deltaTb: deltaTbR,
      Tb: TbR,
    },
    toleranciaRelativa: 0.03,
    pasos: [
      "Calcula la molalidad: m = n / kg_disolvente.",
      "Aplica ΔTb = Kb · m · i (con i = 1).",
      "El nuevo punto de ebullición es T_b = 100 °C + ΔTb.",
    ],
  };
};
