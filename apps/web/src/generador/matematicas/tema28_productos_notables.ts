// src/generators/math/tema28_productos_notables.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 28;
const TITULO = "Productos notables";

type TipoProducto = "cuadradoBinomio" | "diferenciaCuadrados";

function signoConNumero(n: number): string {
  return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`;
}

export const generarProductosNotables: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipo: TipoProducto = pickRandom(["cuadradoBinomio", "diferenciaCuadrados"]);
  const maxTermino = dificultadCore === "basico" ? 5 : 9;
  const a = randomInt(1, maxTermino);
  const b = randomInt(1, maxTermino);

  if (tipo === "cuadradoBinomio") {
    const signo = Math.random() < 0.5 ? "+" : "-";
    const binomio = signo === "+"
      ? `(${a}x + ${b})`
      : `(${a}x - ${b})`;

    const a2 = a * a;
    const ab2 = 2 * a * b;
    const b2 = b * b;

    const correcta =
      signo === "+"
        ? `${a2}x^2 + ${ab2}x + ${b2}`
        : `${a2}x^2 - ${ab2}x + ${b2}`;

    const d1 =
      signo === "+"
        ? `${a2}x^2 + ${b2}x + ${ab2}`
        : `${a2}x^2 - ${b2}x + ${ab2}`;
    const d2 =
      signo === "+"
        ? `${a2}x^2 - ${ab2}x + ${b2}`
        : `${a2}x^2 + ${ab2}x + ${b2}`;
    const d3 = `${a2}x^2 + ${b2}`;

    const opciones = [correcta, d1, d2, d3];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `Desarrolla el siguiente producto notable (cuadrado de un binomio):\n\n${binomio}^2`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Se aplica la fórmula (ax ± b)² = a²x² ± 2abx + b².",
    });
  }

  // diferencia de cuadrados: (ax + b)(ax - b)
  const a2 = a * a;
  const b2 = b * b;

  const binomio1 = `(${a}x + ${b})`;
  const binomio2 = `(${a}x - ${b})`;

  const correcta = `${a2}x^2 - ${b2}`;

  const d1 = `${a2}x^2 + ${b2}`;
  const d2 = `${a2}x^2 - 2${a * b}x + ${b2}`;
  const d3 = `${a2}x^2`;

  const opciones = [correcta, d1, d2, d3];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      "Desarrolla el siguiente producto notable (diferencia de cuadrados):\n\n" +
      `${binomio1} · ${binomio2}`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se aplica la fórmula (ax + b)(ax - b) = (ax)² - b² = a²x² - b².",
  });
};

export default generarProductosNotables;
