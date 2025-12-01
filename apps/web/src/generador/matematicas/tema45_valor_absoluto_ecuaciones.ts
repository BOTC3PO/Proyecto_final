// src/generators/math/tema45_valor_absoluto_ecuaciones.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
} from "./generic";

const ID_TEMA = 45;
const TITULO = "Ecuaciones con valor absoluto |x - a| = b";

export const generarValorAbsolutoEcuaciones: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const a = randomInt(-10, 10);
  const b = randomInt(1, 10); // b > 0 para dos soluciones

  const enunciado = `Resuelve la ecuación con valor absoluto:\n\n|x ${
    a >= 0 ? "- " + a : "+ " + Math.abs(a)
  }| = ${b}`;

  const x1 = a + b;
  const x2 = a - b;

  const correcta = `x = ${x1} o x = ${x2}`;

  const opciones = [
    correcta,
    `x = ${x1}`,
    `x = ${x2}`,
    `x = ${-x1} o x = ${-x2}`,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Para |x - a| = b, con b > 0, se resuelve como dos ecuaciones: x - a = b y x - a = -b. Así se obtienen dos soluciones simétricas respecto de a.",
  });
};

export default generarValorAbsolutoEcuaciones;
