// src/generators/math/tema21_lenguaje_algebraico.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 21;
const TITULO = "Lenguaje algebraico";

interface FraseExpresion {
  frase: string;
  expresionCorrecta: string;
  distractores: string[];
}

function generarFrase(): FraseExpresion {
  const x = randomInt(2, 10);
  const y = randomInt(2, 10);

  const plantillas: FraseExpresion[] = [
    {
      frase: `El doble de un número x más ${y}.`,
      expresionCorrecta: `2x + ${y}`,
      distractores: [`x + ${y}`, `2 + ${y}x`, `x^2 + ${y}`],
    },
    {
      frase: `La mitad de un número x menos ${y}.`,
      expresionCorrecta: `x/2 - ${y}`,
      distractores: [`x - ${y}/2`, `2x - ${y}`, `x/2 + ${y}`],
    },
    {
      frase: `La suma de ${x} y un número y.`,
      expresionCorrecta: `${x} + y`,
      distractores: [`${x}y`, `${x} - y`, `y - ${x}`],
    },
    {
      frase: `El producto de ${x} con un número y, disminuido en ${y}.`,
      expresionCorrecta: `${x}y - ${y}`,
      distractores: [`${x}(y - ${y})`, `${x} + y - ${y}`, `${x}y + ${y}`],
    },
    {
      frase: `El triple de un número x.`,
      expresionCorrecta: `3x`,
      distractores: [`x^3`, `x + 3`, `x/3`],
    },
    {
      frase: `La diferencia entre un número x y ${y}.`,
      expresionCorrecta: `x - ${y}`,
      distractores: [`${y} - x`, `x + ${y}`, `${y}x`],
    },
  ];

  return pickRandom(plantillas);
}

export const generarLenguajeAlgebraico: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const plantilla = generarFrase();

  const opciones = [
    plantilla.expresionCorrecta,
    ...plantilla.distractores,
  ];

  const indiceCorrecto = 0;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      "Escribe en lenguaje algebraico la siguiente frase. Elige la opción correcta:\n\n" +
      plantilla.frase,
    opciones,
    indiceCorrecto,
    explicacion:
      "Se reemplaza 'un número' por una variable (x, y, etc.) y se traducen palabras como doble, triple, suma, producto, diferencia, mitad, etc.",
  });
};

export default generarLenguajeAlgebraico;
