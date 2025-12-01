// src/generators/math/tema26_grado_coeficientes.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 26;
const TITULO = "Grado y coeficientes de un polinomio";

interface PoliInfo {
  expresion: string;
  grado: number;
  coefLider: number; // coef del término de mayor grado
  cantTerminos: number;
}

function generarPolinomioInfo(dificultad: Dificultad): PoliInfo {
  const maxGrado =
    dificultad === "facil"
      ? 2
      : dificultad === "media"
      ? 3
      : 4;

  const grado = randomInt(1, maxGrado);

  // Generamos coeficientes desde grado hasta 0
  const coeficientes: number[] = [];
  for (let exp = grado; exp >= 0; exp--) {
    let coef = randomInt(-9, 9);
    if (exp === grado && coef === 0) coef = randomInt(1, 9); // el líder no puede ser 0
    coeficientes.push(coef);
  }

  // Construcción de expresión
  const partes: string[] = [];
  coeficientes.forEach((coef, idx) => {
    const exp = grado - idx;
    if (coef === 0) return;

    let termino = "";
    if (exp === 0) {
      termino = `${coef}`;
    } else if (exp === 1) {
      if (coef === 1) termino = "x";
      else if (coef === -1) termino = "-x";
      else termino = `${coef}x`;
    } else {
      if (coef === 1) termino = `x^${exp}`;
      else if (coef === -1) termino = `-x^${exp}`;
      else termino = `${coef}x^${exp}`;
    }

    if (partes.length === 0) {
      partes.push(termino);
    } else {
      if (coef > 0) partes.push(`+ ${termino}`);
      else partes.push(`- ${termino.replace("-", "")}`);
    }
  });

  const expresion = partes.join(" ");
  const coefLider = coeficientes[0];
  const cantTerminos = partes.length || 1;

  return { expresion, grado, coefLider, cantTerminos };
}

type TipoPregunta = "grado" | "coefLider" | "cantTerminos";

export const generarGradoCoeficientes: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const info = generarPolinomioInfo(dificultad);
  const tipo: TipoPregunta = pickRandom([
    "grado",
    "coefLider",
    "cantTerminos",
  ]);

  let enunciado: string;
  let correcta: number;
  let explicacion: string;

  if (tipo === "grado") {
    enunciado = `Determina el grado del siguiente polinomio en x:\n\nP(x) = ${info.expresion}`;
    correcta = info.grado;
    explicacion =
      "El grado de un polinomio es el mayor exponente con el que aparece la variable.";
  } else if (tipo === "coefLider") {
    enunciado = `Determina el coeficiente principal (del término de mayor grado) del polinomio:\n\nP(x) = ${info.expresion}`;
    correcta = info.coefLider;
    explicacion =
      "El coeficiente principal es el coeficiente del término con mayor exponente.";
  } else {
    enunciado = `¿Cuántos términos no nulos tiene el siguiente polinomio?\n\nP(x) = ${info.expresion}`;
    correcta = info.cantTerminos;
    explicacion =
      "Los términos son las partes separadas por suma o resta. Se cuentan solo los que tienen coeficiente distinto de cero.";
  }

  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-3, 3);
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
    explicacion,
  });
};

export default generarGradoCoeficientes;
