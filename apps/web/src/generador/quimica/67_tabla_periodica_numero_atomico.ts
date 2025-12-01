// src/generators/quimica/67_tabla_periodica_numero_atomico.ts
import {
  type GeneratorFn,
  type QuizExercise,
} from "./generico";

interface ElementoZA {
  simbolo: string;
  nombre: string;
  Z: number;
}

const ELEMENTOS_Z: ElementoZA[] = [
  { simbolo: "H", nombre: "hidrógeno", Z: 1 },
  { simbolo: "He", nombre: "helio", Z: 2 },
  { simbolo: "C", nombre: "carbono", Z: 6 },
  { simbolo: "O", nombre: "oxígeno", Z: 8 },
  { simbolo: "Na", nombre: "sodio", Z: 11 },
  { simbolo: "Cl", nombre: "cloro", Z: 17 },
  { simbolo: "Fe", nombre: "hierro", Z: 26 },
  { simbolo: "Cu", nombre: "cobre", Z: 29 },
];

export const generarNumeroAtomico: GeneratorFn = (
  dificultad = "media"
): QuizExercise => {
  const index = Math.floor(Math.random() * ELEMENTOS_Z.length);
  const el = ELEMENTOS_Z[index];

  const opcionesSet = new Set<number>();
  opcionesSet.add(el.Z);
  while (opcionesSet.size < 4) {
    const delta = Math.floor(Math.random() * 5) - 2; // -2 a +2
    const candidato = el.Z + delta;
    if (candidato > 0) opcionesSet.add(candidato);
  }
  const opcionesNumeros = Array.from(opcionesSet).sort((a, b) => a - b);
  const indiceCorrecto = opcionesNumeros.indexOf(el.Z);

  const enunciado =
    `¿Cuál es el número atómico (Z) del elemento ${el.nombre} (${el.simbolo})?`;

  return {
    idTema: 67,
    tituloTema: "Número atómico",
    dificultad,
    tipo: "quiz",
    enunciado,
    opciones: opcionesNumeros.map((z) => z.toString()),
    indiceCorrecto,
    explicacion:
      "El número atómico Z es la cantidad de protones en el núcleo del átomo y define al elemento químico.",
  };
};
