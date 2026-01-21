// src/generators/quimica/01_balanceo.ts
import { type GeneratorFn, type NumericExercise, choice } from "./generico";

interface EcuacionBalanceo {
  enunciadoBase: string;      // con __ para coeficientes
  coeficientes: number[];     // solución
  especies: string[];
}

const ECUACIONES: EcuacionBalanceo[] = [
  {
    enunciadoBase: "__ H2 + __ O2 → __ H2O",
    coeficientes: [2, 1, 2],
    especies: ["H2", "O2", "H2O"],
  },
  {
    enunciadoBase: "__ N2 + __ H2 → __ NH3",
    coeficientes: [1, 3, 2],
    especies: ["N2", "H2", "NH3"],
  },
  {
    enunciadoBase: "__ Fe + __ O2 → __ Fe2O3",
    coeficientes: [4, 3, 2],
    especies: ["Fe", "O2", "Fe2O3"],
  },
  {
    enunciadoBase: "__ Na + __ Cl2 → __ NaCl",
    coeficientes: [2, 1, 2],
    especies: ["Na", "Cl2", "NaCl"],
  },
  {
    enunciadoBase: "__ C3H8 + __ O2 → __ CO2 + __ H2O",
    coeficientes: [1, 5, 3, 4],
    especies: ["C3H8", "O2", "CO2", "H2O"],
  },
];

export const generarBalanceo: GeneratorFn = (
  dificultad = "media"
): NumericExercise => {
  const ecuacion = choice(ECUACIONES);

  return {
    idTema: 1,
    tituloTema: "Balanceo de ecuaciones químicas",
    dificultad,
    tipo: "numeric",
    enunciado: `Balancea la siguiente ecuación química (escribe los coeficientes en orden):\n${ecuacion.enunciadoBase}`,
    datos: {},
    resultado: ecuacion.coeficientes,
    visualSpec: {
      kind: "chart",
      chartType: "bar",
      title: "Coeficientes estequiométricos",
      xAxis: { label: "Especie" },
      yAxis: { label: "Coeficiente" },
      series: [
        {
          id: "coeficientes",
          label: "Coeficiente",
          data: ecuacion.especies.map((especie, index) => ({
            x: especie,
            y: ecuacion.coeficientes[index] ?? 0,
          })),
        },
      ],
    },
    pasos: [
      "Cuenta los átomos de cada elemento en reactivos y productos.",
      "Ajusta los coeficientes para igualar la cantidad de átomos en ambos lados.",
      "Verifica que la ecuación quede balanceada en todos los elementos.",
    ],
  };
};
