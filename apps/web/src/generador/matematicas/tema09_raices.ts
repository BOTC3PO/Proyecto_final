// src/generators/math/tema09_raices.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 9;
const TITULO = "Raíces";

type TipoRaiz = "cuadrada" | "cubica";

function generarRaizPerfecta(dificultad: Dificultad, tipo: TipoRaiz) {
  let n: number;
  if (tipo === "cuadrada") {
    if (dificultad === "facil") n = randomInt(2, 12);
    else if (dificultad === "media") n = randomInt(2, 20);
    else n = randomInt(2, 30);
    const valor = n * n;
    return { valor, raiz: n };
  } else {
    if (dificultad === "facil") n = randomInt(2, 6);
    else if (dificultad === "media") n = randomInt(2, 8);
    else n = randomInt(2, 10);
    const valor = n * n * n;
    return { valor, raiz: n };
  }
}

export const generarRaices: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoRaiz =
    dificultad === "facil"
      ? "cuadrada"
      : Math.random() < 0.7
      ? "cuadrada"
      : "cubica";

  const { valor, raiz } = generarRaizPerfecta(dificultad, tipo);

  const opciones = [raiz];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-4, 4);
    if (delta === 0) continue;
    const cand = raiz + delta;
    if (cand > 0 && cand !== raiz) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  const simbolo = tipo === "cuadrada" ? "√" : "∛";

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula la raíz ${
      tipo === "cuadrada" ? "cuadrada" : "cúbica"
    } de:\n\n${simbolo}${valor}`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Buscamos el número que elevado a ${tipo === "cuadrada" ? "2" : "3"} da ${valor}.`,
  });
};

export default generarRaices;
