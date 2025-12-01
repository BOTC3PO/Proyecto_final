// src/generators/math/tema29_ecuaciones_lineales.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
} from "./generic";

const ID_TEMA = 29;
const TITULO = "Ecuaciones lineales simples (ax + b = c)";

export const generarEcuacionesLinealesSimples: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const rangoA =
    dificultad === "facil"
      ? 5
      : dificultad === "media"
      ? 10
      : 15;
  const rangoX =
    dificultad === "facil"
      ? 10
      : dificultad === "media"
      ? 20
      : 30;

  const a = randomInt(-rangoA, rangoA) || 1;
  const xSol = randomInt(-rangoX, rangoX);
  const b = randomInt(-20, 20);

  const c = a * xSol + b;

  const ecuacion = `${a}x ${b >= 0 ? "+ " + b : "- " + Math.abs(b)} = ${c}`;

  const correcta = xSol;

  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-5, 5);
    if (delta === 0) continue;
    const cand = correcta + delta;
    if (cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Resuelve la siguiente ecuación lineal y encuentra el valor de x:\n\n${ecuacion}`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se aísla la x: primero se pasa el término independiente al otro miembro y luego se divide por el coeficiente de x.",
  });
};

export default generarEcuacionesLinealesSimples;
