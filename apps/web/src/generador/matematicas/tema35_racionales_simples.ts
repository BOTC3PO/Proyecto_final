// src/generators/math/tema35_racionales_simples.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 35;
const TITULO = "Expresiones racionales simples";

type TipoRacional = "sumaMismoDen" | "producto";

export const generarRacionalesSimples: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  const tipo: TipoRacional = pickRandom(["sumaMismoDen", "producto"]);

  const a = randomInt(-5, 5) || 1;
  const b = randomInt(-5, 5) || 2;
  const c = randomInt(-5, 5) || 1;
  const d = randomInt(-5, 5) || 2;

  if (tipo === "sumaMismoDen") {
    const den = pickRandom(["x", "x+1", "x-1"]);
    const num1 = `${a}x + ${b}`;
    const num2 = `${c}x + ${d}`;

    // Resultado: (num1 + num2) / den
    const A = a + c;
    const B = b + d;
    const numRes = `${A}x + ${B}`;

    const correcta = `(${numRes}) / (${den})`;
    const d1 = `(${num1} + ${num2}) / (${den})`;
    const d2 = `(${num1}) / (${den}) + (${num2}) / (${den})`;
    const d3 = `(${A}x - ${B}) / (${den})`;

    const opciones = [correcta, d1, d2, d3];

    const enunciado =
      "Simplifica la siguiente suma de fracciones algebraicas con el mismo denominador:\n\n" +
      `(${num1}) / (${den}) + (${num2}) / (${den})`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Cuando las fracciones tienen el mismo denominador, se suman los numeradores y se mantiene el denominador.",
    });
  }

  // Producto de fracciones: ((ax + b)/(x)) * ((cx + d)/(x))
  const num1 = `${a}x + ${b}`;
  const num2 = `${c}x + ${d}`;
  const den = "x";

  // Resultado formal: ((ax + b)(cx + d))/x²  (no desarrollamos numerador)
  const correcta = `(${num1})(${num2}) / x^2`;
  const d1 = `(${num1} + ${num2}) / x^2`;
  const d2 = `(${num1})(${num2}) / x`;
  const d3 = `(${a * c}x^2 + ...) / x^2`;

  const opciones = [correcta, d1, d2, d3];

  const enunciado =
    "Escribe el siguiente producto de fracciones algebraicas en una sola fracción (no es necesario desarrollar el numerador):\n\n" +
    `(${num1}) / x · (${num2}) / x`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se multiplican numeradores entre sí y denominadores entre sí: (a/b)·(c/d) = (ac)/(bd).",
  });
};

export default generarRacionalesSimples;
