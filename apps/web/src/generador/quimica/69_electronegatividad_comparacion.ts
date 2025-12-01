// src/generators/quimica/69_electronegatividad_comparacion.ts
// src/generators/quimica/69_electronegatividad_comparacion.ts
import type {
  GeneratorFn,
  QuizExercise
} from "./generico";

interface ParElectronegatividad {
  elemento1: string;
  elemento2: string;
  masElectronegativo: string;
}

const PARES_EN: ParElectronegatividad[] = [
  { elemento1: "Na", elemento2: "Cl", masElectronegativo: "Cl" },
  { elemento1: "C", elemento2: "O", masElectronegativo: "O" },
  { elemento1: "H", elemento2: "F", masElectronegativo: "F" },
  { elemento1: "Li", elemento2: "F", masElectronegativo: "F" },
  { elemento1: "K", elemento2: "O", masElectronegativo: "O" },
  { elemento1: "Mg", elemento2: "N", masElectronegativo: "N" },
];

export const generarElectronegatividadComparacion: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * PARES_EN.length);
  const par = PARES_EN[index];

  const opciones = [par.elemento1, par.elemento2];
  const indiceCorrecto = opciones.indexOf(par.masElectronegativo);

  const enunciado =
    "Considera la electronegatividad de los siguientes elementos:\n" +
    `${par.elemento1} y ${par.elemento2}.\n` +
    "¿Cuál de ellos es más electronegativo?";

  return {
    idTema: 69,
    tituloTema: "Electronegatividad (comparación)",
    dificultad,
    tipo: "quiz",
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "La electronegatividad aumenta generalmente hacia la derecha en un período y hacia arriba en un grupo. " +
      "Los no metales, especialmente halógenos y elementos como O y N, suelen ser más electronegativos que los metales.",
  };
};
