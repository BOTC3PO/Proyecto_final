// src/generators/math/tema46_valor_absoluto_distancia.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
} from "./generic";

const ID_TEMA = 46;
const TITULO = "Valor absoluto como distancia en la recta numérica";

export const generarValorAbsolutoDistancia: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  // Distancia entre dos puntos a y b en R es |a - b|
  const a = randomInt(-10, 10);
  let b = randomInt(-10, 10);
  if (b === a) b += 1;

  const distancia = Math.abs(a - b);
  const correcta = distancia;

  const modo = Math.random() < 0.5 ? "directo" : "inversion";

  let enunciado: string;

  if (modo === "directo") {
    enunciado =
      `En la recta numérica, ¿cuál es la distancia entre los puntos ` +
      `${a} y ${b}?`;
  } else {
    // Pedimos que expresen la distancia como valor absoluto
    enunciado =
      `¿Cuál de las siguientes expresiones con valor absoluto representa la distancia entre los puntos ${a} y ${b} en la recta numérica?`;
  }

  if (modo === "directo") {
    const opciones = [correcta];
    const distractores = new Set<number>();

    while (distractores.size < 3) {
      const delta = randomInt(-5, 5);
      if (delta === 0) continue;
      const cand = correcta + delta;
      if (cand >= 0 && cand !== correcta) distractores.add(cand);
    }

    opciones.push(...Array.from(distractores));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "La distancia entre dos puntos reales a y b es |a - b| = |b - a|.",
    });
  } else {
    const exprCorrecta = `|${a} - ${b}|`;
    const opciones = [
      exprCorrecta,
      `|${a} + ${b}|`,
      `|${b} - ${a} - 1|`,
      `|${a}| + |${b}|`,
    ];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "La distancia entre dos puntos a y b en la recta se expresa como |a - b| (o |b - a|). Las otras expresiones no representan correctamente esa distancia.",
    });
  }
};

export default generarValorAbsolutoDistancia;
