// src/generators/math/tema03_numeros_primos.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  esPrimo,
  generarPrimoEnRango,
  rangoPorDificultad,
  randomInt,
} from "./generic";

const ID_TEMA = 3;
const TITULO = "Números primos";

export const generarNumerosPrimos: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const [min, max] = rangoPorDificultad(dificultad, {
    facil: [2, 50],
    media: [2, 100],
    dificil: [2, 300],
  });

  const primoCorrecto = generarPrimoEnRango(min, max);

  const compuestos = new Set<number>();
  while (compuestos.size < 3) {
    const n = randomInt(min, max);
    if (!esPrimo(n)) {
      compuestos.add(n);
    }
  }

  const opciones = [primoCorrecto, ...Array.from(compuestos)];
  const indiceCorrecto = 0;

  const enunciado = `¿Cuál de los siguientes números es primo?`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "Un número primo es aquel que solo tiene dos divisores positivos: 1 y él mismo.",
  });
};

export default generarNumerosPrimos;
