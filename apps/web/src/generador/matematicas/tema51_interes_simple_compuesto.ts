// src/generators/math/tema51_interes_simple_compuesto.ts
// Tema lógico 55 – Interés simple y compuesto
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 51;
const TITULO = "Interés simple y compuesto";

type TipoInteres = "simple" | "compuesto";

export const generarInteresSimpleCompuesto: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  const tipo: TipoInteres =
    dificultad === "facil"
      ? "simple"
      : pickRandom(["simple", "compuesto"]);

  const capital = randomInt(1000, 10000); // pesos
  const tasa = randomInt(1, 10);          // % anual
  const anios =
    dificultad === "facil"
      ? randomInt(1, 3)
      : randomInt(1, 5);

  let enunciado: string;
  let monto: number;

  if (tipo === "simple") {
    // M = C (1 + i·t)
    const i = tasa / 100;
    monto = capital * (1 + i * anios);

    enunciado =
      `Un capital de ${capital} pesos se invierte a interés simple ` +
      `con una tasa anual del ${tasa}%. ¿Cuál será el monto final luego de ${anios} años?`;
  } else {
    // M = C (1 + i)^t
    const i = tasa / 100;
    monto = capital * Math.pow(1 + i, anios);

    enunciado =
      `Un capital de ${capital} pesos se invierte a interés compuesto ` +
      `con una tasa anual del ${tasa}%. ¿Cuál será el monto final luego de ${anios} años?`;
  }

  const correcta = Math.round(monto); // redondeamos a entero

  const opciones = [correcta];
  const distractores = new Set<number>();

  while (opciones.length < 4) {
    const deltaPorc = randomInt(-20, 20); // +-20%
    const cand = Math.round(correcta * (1 + deltaPorc / 100));
    if (cand > 0 && cand !== correcta && !distractores.has(cand)) {
      opciones.push(cand);
      distractores.add(cand);
    }
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      tipo === "simple"
        ? "En interés simple: M = C · (1 + i·t), donde C es el capital, i la tasa (en forma decimal) y t el tiempo."
        : "En interés compuesto: M = C · (1 + i)^t, donde C es el capital, i la tasa (en forma decimal) y t el tiempo.",
  });
};

export default generarInteresSimpleCompuesto;
