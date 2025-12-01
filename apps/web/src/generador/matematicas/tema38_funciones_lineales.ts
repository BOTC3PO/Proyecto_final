// src/generators/math/tema38_funciones_lineales.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 38;
const TITULO = "Funciones lineales: pendiente y ordenada al origen";

type TipoPregunta = "pendiente" | "ordenada" | "evaluar";

export const generarFuncionesLineales: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const m = randomInt(-5, 5) || 1;
  const b = randomInt(-10, 10);

  const tipo: TipoPregunta = pickRandom(["pendiente", "ordenada", "evaluar"]);

  if (tipo === "pendiente") {
    const correcta = m;
    const opciones = [correcta];
    const distractores = new Set<number>();

    while (distractores.size < 3) {
      const delta = randomInt(-4, 4);
      if (delta === 0) continue;
      const cand = correcta + delta;
      if (cand !== correcta) distractores.add(cand);
    }

    opciones.push(...Array.from(distractores));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `Dada la función lineal f(x) = ${m}x ${
        b >= 0 ? "+ " + b : "- " + Math.abs(b)
      }, ¿cuál es su pendiente?`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "En la forma y = mx + b, la pendiente es el coeficiente de x (m).",
    });
  }

  if (tipo === "ordenada") {
    const correcta = b;
    const opciones = [correcta];
    const distractores = new Set<number>();

    while (distractores.size < 3) {
      const delta = randomInt(-6, 6);
      if (delta === 0) continue;
      const cand = correcta + delta;
      if (cand !== correcta) distractores.add(cand);
    }

    opciones.push(...Array.from(distractores));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `Dada la función lineal y = ${m}x ${
        b >= 0 ? "+ " + b : "- " + Math.abs(b)
      }, ¿cuál es la ordenada al origen?`,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "En la forma y = mx + b, la ordenada al origen es el término independiente b (el valor de y cuando x = 0).",
    });
  }

  // evaluar f(x0)
  const x0 =
    dificultad === "facil"
      ? randomInt(-3, 3)
      : randomInt(-6, 6);

  const y0 = m * x0 + b;
  const correcta = y0;
  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-8, 8);
    if (delta === 0) continue;
    const cand = correcta + delta;
    if (cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Sea f(x) = ${m}x ${
      b >= 0 ? "+ " + b : "- " + Math.abs(b)
    }. Calcula f(${x0}).`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Para evaluar una función, se sustituye x por el valor dado y se realiza la operación.",
  });
};

export default generarFuncionesLineales;
