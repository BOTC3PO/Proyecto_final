// src/generators/math/tema31_inecuaciones_simples.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 31;
const TITULO = "Inecuaciones lineales simples";

type TipoSigno = "<" | ">" | "≤" | "≥";

// En vez de pedir el intervalo, preguntamos “¿qué valor de x satisface...?”
export const generarInecuacionesSimples: GeneratorFn = (
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
  const b = randomInt(-20, 20);
  const signo: TipoSigno = pickRandom(["<", ">", "≤", "≥"]);

  // Elegimos un x0 que satisfaga la inecuación
  const x0 = randomInt(-rangoX, rangoX);
  const lhs0 = a * x0 + b;

  // Creamos el lado derecho en función de x0 para asegurar solución
  let c: number;
  switch (signo) {
    case "<":
      c = lhs0 + randomInt(1, 5);
      break;
    case ">":
      c = lhs0 - randomInt(1, 5);
      break;
    case "≤":
      c = lhs0 + randomInt(-2, 2); // a veces igual, a veces más grande
      break;
    case "≥":
      c = lhs0 + randomInt(-2, 2); // igual o menor
      break;
  }

  const inec = `${a}x ${b >= 0 ? "+ " + b : "- " + Math.abs(b)} ${signo} ${c}`;

  // Ahora generamos opciones de valores de x, solo UNA satisface la inecuación
  const opciones: number[] = [x0];
  const usados = new Set<number>();
  usados.add(x0);

  while (opciones.length < 4) {
    const x = randomInt(-rangoX, rangoX);
    if (usados.has(x)) continue;

    // Forzamos que NO satisfaga
    const lhs = a * x + b;
    let esValido: boolean;
    switch (signo) {
      case "<":
        esValido = lhs < c;
        break;
      case ">":
        esValido = lhs > c;
        break;
      case "≤":
        esValido = lhs <= c;
        break;
      case "≥":
        esValido = lhs >= c;
        break;
    }

    if (!esValido) {
      opciones.push(x);
      usados.add(x);
    }
  }

  const indiceCorrecto = 0;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `De las siguientes opciones, ¿cuál valor de x satisface la inecuación?\n\n` +
      inec,
    opciones,
    indiceCorrecto,
    explicacion:
      "Se resuelve como una ecuación lineal para encontrar el límite y luego se verifica qué valores cumplen el sentido de la desigualdad.",
  });
};

export default generarInecuacionesSimples;
