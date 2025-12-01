// src/generators/math/tema33_ecuaciones_cuadraticas.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 33;
const TITULO = "Ecuaciones cuadráticas con soluciones enteras";

export const generarEcuacionesCuadraticas: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const rangoRaiz =
    dificultad === "facil"
      ? 5
      : dificultad === "media"
      ? 8
      : 10;

  const r1 = randomInt(-rangoRaiz, rangoRaiz);
  const r2 =
    dificultad === "facil"
      ? r1 // tipo (x - r)^2
      : randomInt(-rangoRaiz, rangoRaiz);

  const a = pickRandom([1, 1, 1, -1]); // casi siempre 1, a veces -1
  const b = -a * (r1 + r2);
  const c = a * r1 * r2;

  const ecuacion = `${a === 1 ? "" : a === -1 ? "-" : a}x^2 ${
    b >= 0 ? "+ " + b : "- " + Math.abs(b)
  }x ${c >= 0 ? "+ " + c : "- " + Math.abs(c)} = 0`;

  const esDoble = r1 === r2;
  const correcta = esDoble ? `x = ${r1}` : `x = ${r1} y x = ${r2}`;

  const opciones: string[] = [correcta];

  // Distractores: cambiar signos o permutar raíces
  if (!esDoble) {
    opciones.push(`x = ${-r1} y x = ${-r2}`);
    opciones.push(`x = ${r1}`);
    opciones.push(`x = ${r2}`);
  } else {
    opciones.push(`x = ${-r1}`);
    opciones.push(`x = ${r1} o x = 0`);
    opciones.push(`x = 0`);
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `Resuelve la siguiente ecuación cuadrática e indica sus soluciones:\n\n` +
      ecuacion,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se puede factorizar como a(x - r₁)(x - r₂) = 0 y luego aplicar el principio del producto: cada factor se iguala a cero.",
  });
};

export default generarEcuacionesCuadraticas;
