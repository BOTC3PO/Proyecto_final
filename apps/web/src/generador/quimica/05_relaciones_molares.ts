// src/generators/quimica/05_relaciones_molares.ts
import {
  GeneratorFn,
  NumericExercise,
  choice,
  randFloat,
} from "./generico";

interface ReaccionSimple {
  ecuacion: string;
  // coeficientes estequiométricos en orden [reactivo1, reactivo2?, producto1...]
  // vamos a usar solo una relación a→p o p→p para el enunciado
  nombreReactivo: string;
  nombreProducto: string;
  coefReactivo: number;
  coefProducto: number;
}

const REACCIONES: ReaccionSimple[] = [
  {
    ecuacion: "N2 + 3 H2 → 2 NH3",
    nombreReactivo: "H₂",
    nombreProducto: "NH₃",
    coefReactivo: 3,
    coefProducto: 2,
  },
  {
    ecuacion: "2 H2 + O2 → 2 H2O",
    nombreReactivo: "O₂",
    nombreProducto: "H₂O",
    coefReactivo: 1,
    coefProducto: 2,
  },
  {
    ecuacion: "4 Al + 3 O2 → 2 Al2O3",
    nombreReactivo: "Al",
    nombreProducto: "Al₂O₃",
    coefReactivo: 4,
    coefProducto: 2,
  },
  {
    ecuacion: "CaCO3 → CaO + CO2",
    nombreReactivo: "CaCO₃",
    nombreProducto: "CO₂",
    coefReactivo: 1,
    coefProducto: 1,
  },
];

export const generarRelacionesMolares: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const rxn = choice(REACCIONES);

  // moles de reactivo dados
  const nReactivo = dificultad === "facil"
    ? randFloat(0.5, 2.0, 2)
    : randFloat(1.0, 5.0, 2);

  // nProducto = nReactivo * (coefProducto / coefReactivo)
  const nProducto = nReactivo * (rxn.coefProducto / rxn.coefReactivo);

  return {
    idTema: 5,
    tituloTema: "Relaciones molares entre reactivos y productos",
    dificultad,
    tipo: "numeric",
    enunciado:
      `Para la reacción balanceada:\n` +
      `${rxn.ecuacion}\n\n` +
      `Si reaccionan completamente ${nReactivo} mol de ${rxn.nombreReactivo}, ` +
      `¿cuántos moles de ${rxn.nombreProducto} se forman?`,
    datos: {
      nReactivo,
      coefReactivo: rxn.coefReactivo,
      coefProducto: rxn.coefProducto,
    },
    unidades: {
      nReactivo: "mol",
      resultado: "mol",
    },
    resultado: parseFloat(nProducto.toFixed(3)),
    toleranciaRelativa: 0.02,
    pasos: [
      "Identifica los coeficientes estequiométricos de la ecuación balanceada.",
      `Relación: n(${rxn.nombreProducto}) / n(${rxn.nombreReactivo}) = ` +
        `${rxn.coefProducto} / ${rxn.coefReactivo}.`,
      `Calcula: n(${rxn.nombreProducto}) = ${nReactivo} · (${rxn.coefProducto}/${rxn.coefReactivo}).`,
      "Redondea el resultado a 3 cifras decimales.",
    ],
  };
};
