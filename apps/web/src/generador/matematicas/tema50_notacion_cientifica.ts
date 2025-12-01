// src/generators/math/tema50_notacion_cientifica.ts
// Tema lógico 54 – Notación científica
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
} from "./generic";

const ID_TEMA = 50;
const TITULO = "Notación científica";

function aNotacionCientifica(n: number): { a: number; k: number; str: string } {
  const signo = n < 0 ? -1 : 1;
  let valor = Math.abs(n);
  let k = 0;

  if (valor === 0) {
    return { a: 0, k: 0, str: "0" };
  }

  while (valor >= 10) {
    valor /= 10;
    k++;
  }
  while (valor < 1) {
    valor *= 10;
    k--;
  }

  const a = signo * Number(valor.toFixed(2));
  const strA = a === 1 ? "1" : a === -1 ? "-1" : a.toString();
  const str = `${strA} · 10^${k}`;
  return { a, k, str };
}

export const generarNotacionCientifica: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const maxExp =
    dificultad === "facil"
      ? 3
      : dificultad === "media"
      ? 6
      : 9;

  const k = randomInt(-maxExp, maxExp);
  const a = randomInt(1, 9);
  const signo = Math.random() < 0.5 ? -1 : 1;

  // Número real N = signo * a * 10^k
  const N = signo * a * 10 ** k;

  const { str: correcta } = aNotacionCientifica(N);

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (opciones.length < 4) {
    const deltaK = randomInt(-2, 2);
    const deltaA = randomInt(-3, 3) / 10;

    const candK = k + deltaK;
    const candA = (a + deltaA) * signo;
    if (candA === 0) continue;

    const approxA = Number(candA.toFixed(2));
    const strA =
      approxA === 1
        ? "1"
        : approxA === -1
        ? "-1"
        : approxA.toString();

    const candStr = `${strA} · 10^${candK}`;
    if (candStr !== correcta && !distractores.has(candStr)) {
      opciones.push(candStr);
      distractores.add(candStr);
    }
  }

  const enunciado =
    `Escribe el siguiente número en notación científica (a · 10^k, con 1 ≤ |a| < 10):\n\n` +
    `${N}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "En notación científica se expresa un número como a · 10^k, donde 1 ≤ |a| < 10 y k es un número entero.",
  });
};

export default generarNotacionCientifica;
