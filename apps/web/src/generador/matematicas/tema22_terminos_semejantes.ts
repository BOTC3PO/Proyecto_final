// src/generators/math/tema22_terminos_semejantes.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 22;
const TITULO = "Términos semejantes (reducción)";

interface Termino {
  coef: number;
  variable: string; // "x", "y", "x^2", etc.
}

function terminoToString(t: Termino): string {
  const { coef, variable } = t;
  if (coef === 0) return "0";
  if (coef === 1) return variable;
  if (coef === -1) return `-${variable}`;
  return `${coef}${variable}`;
}

function generarEjercicio(dificultad: Dificultad) {
  const variablesPosibles = dificultad === "facil"
    ? ["x", "y"]
    : ["x", "y", "x^2", "y^2"];

  const variableElegida = pickRandom(variablesPosibles);

  const cantidadTerminos =
    dificultad === "facil"
      ? randomInt(3, 4)
      : dificultad === "media"
      ? randomInt(3, 5)
      : randomInt(4, 6);

  const terminos: Termino[] = [];
  let sumaCoef = 0;

  for (let i = 0; i < cantidadTerminos; i++) {
    const coef = randomInt(-9, 9) || 1;
    sumaCoef += coef;
    terminos.push({ coef, variable: variableElegida });
  }

  // Evitar que la suma sea 0 demasiado seguido
  if (sumaCoef === 0) {
    terminos[0].coef += 1;
    sumaCoef += 1;
  }

  const expresion = terminos
    .map((t, idx) => {
      const s = terminoToString(t);
      if (idx === 0) return s;
      if (t.coef >= 0) return `+ ${s}`;
      return `- ${Math.abs(t.coef)}${t.variable}`;
    })
    .join(" ");

  const resultado: Termino = { coef: sumaCoef, variable: variableElegida };

  return { expresion, resultado };
}

export const generarTerminosSemejantes: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const { expresion, resultado } = generarEjercicio(dificultad);
  const correcta = terminoToString(resultado);

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    let delta = randomInt(-5, 5);
    if (delta === 0) continue;
    const cand: Termino = {
      coef: resultado.coef + delta,
      variable: resultado.variable,
    };
    const s = terminoToString(cand);
    if (s !== correcta) distractores.add(s);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `Reduce la siguiente expresión sumando los términos semejantes:\n\n` +
      expresion,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Los términos semejantes son aquellos que tienen la misma parte literal (misma variable y mismo exponente). Se suman o restan sus coeficientes.",
  });
};

export default generarTerminosSemejantes;
