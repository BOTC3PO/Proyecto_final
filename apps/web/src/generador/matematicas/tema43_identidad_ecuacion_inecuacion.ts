// src/generators/math/tema43_identidad_ecuacion_inecuacion.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  pickRandom,
} from "./generic";

const ID_TEMA = 43;
const TITULO = "Identidad, ecuación o inecuación";

type Tipo = "identidad" | "ecuacion" | "inecuacion";

interface Caso {
  expresion: string;
  tipo: Tipo;
}

const CASOS_BASE: Caso[] = [
  { expresion: "2(x + 3) = 2x + 6", tipo: "identidad" },
  { expresion: "x + 5 = 12", tipo: "ecuacion" },
  { expresion: "3x - 1 > 5", tipo: "inecuacion" },
  { expresion: "4(x - 2) = 4x - 8", tipo: "identidad" },
  { expresion: "x^2 - 4 = 0", tipo: "ecuacion" },
  { expresion: "2x + 1 ≤ 7", tipo: "inecuacion" },
];

export const generarIdentidadEcuacionInecuacion: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const caso = pickRandom(CASOS_BASE);

  const opciones = [
    "Identidad (verdadera para todo valor de la variable)",
    "Ecuación (verdadera solo para algunos valores)",
    "Inecuación (desigualdad)",
  ];

  const mapa: Record<Tipo, string> = {
    identidad: "Identidad (verdadera para todo valor de la variable)",
    ecuacion: "Ecuación (verdadera solo para algunos valores)",
    inecuacion: "Inecuación (desigualdad)",
  };

  const correcta = mapa[caso.tipo];
  const indiceCorrecto = opciones.indexOf(correcta);

  const enunciado =
    "Clasifica la siguiente expresión en identidad, ecuación o inecuación:\n\n" +
    caso.expresion;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "Una identidad es verdadera para todos los valores de la variable; una ecuación solo para algunos valores; una inecuación expresa una desigualdad (<, >, ≤, ≥).",
  });
};

export default generarIdentidadEcuacionInecuacion;
