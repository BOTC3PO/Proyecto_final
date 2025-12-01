// src/generators/math/tema30_ecuaciones_parametros.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 30;
const TITULO = "Ecuaciones lineales con paréntesis / parámetros";

type TipoEcuacion = "a_x_mas_b" | "x_mas_b_sobre_k";

export const generarEcuacionesConParametros: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoEcuacion = pickRandom(["a_x_mas_b", "x_mas_b_sobre_k"]);

  const rango =
    dificultad === "facil"
      ? 5
      : dificultad === "media"
      ? 10
      : 15;

  const xSol = randomInt(-rango * 2, rango * 2);

  let enunciado: string;
  let opciones: number[];
  let correcta = xSol;

  if (tipo === "a_x_mas_b") {
    const a = randomInt(2, rango) * (Math.random() < 0.5 ? 1 : -1);
    const b = randomInt(-10, 10);
    const c = randomInt(-10, 10);

    // Ecuación: a(x + b) = c
    // Para que xSol sea solución: a(xSol + b) = c
    const cReal = a * (xSol + b);

    const ecuacion = `${a}(x ${b >= 0 ? "+ " + b : "- " + Math.abs(
      b
    )}) = ${cReal}`;

    enunciado = `Resuelve la ecuación y encuentra el valor de x:\n\n${ecuacion}`;
  } else {
    const k = randomInt(2, 8);
    const b = randomInt(-10, 10);

    // Ecuación: (x + b)/k = c  => x = k*c - b
    const c = randomInt(-rango, rango);
    const xReal = k * c - b;

    correcta = xReal;

    const ecuacion = `(x ${b >= 0 ? "+ " + b : "- " + Math.abs(
      b
    )}) / ${k} = ${c}`;

    enunciado = `Resuelve la ecuación y encuentra el valor de x:\n\n${ecuacion}`;
  }

  // Opciones
  opciones = [correcta];
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
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se aplican operaciones inversas paso a paso: primero se elimina el paréntesis o la división, y luego se despeja x.",
  });
};

export default generarEcuacionesConParametros;
