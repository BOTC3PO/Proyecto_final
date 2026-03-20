// src/generators/math/tema08_potencias.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 8;
const TITULO = "Potencias";

function generarBaseYExponente(dificultad: Dificultad): {
  base: number;
  exp: number;
} {
  const dificultadCore = normalizarDificultadCore(dificultad);
  if (dificultadCore === "basico") {
    return { base: randomInt(2, 9), exp: randomInt(2, 4) };
  }
  if (dificultadCore === "intermedio") {
    return { base: randomInt(2, 12), exp: randomInt(2, 5) };
  }
  return { base: randomInt(2, 15), exp: randomInt(2, 6) };
}

export const generarPotencias: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const modos = ["calculo", "formaExtendida"] as const;
  const modo = pickRandom(modos);

  const { base, exp } = generarBaseYExponente(dificultad);
  const resultado = Math.pow(base, exp);

  if (modo === "calculo") {
    const opciones = [resultado];

    const distractores = new Set<number>();
    while (distractores.size < 3) {
      const delta = randomInt(
        -Math.floor(resultado / 3) || -5,
        Math.floor(resultado / 3) || 5
      );
      if (delta === 0) continue;
      const cand = resultado + delta;
      if (cand > 0 && cand !== resultado) distractores.add(cand);
    }

    opciones.push(...Array.from(distractores));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `Calcula el valor de la siguiente potencia:\n\n${base}^${exp}`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `${base}^${exp} significa multiplicar ${base} por sí mismo ${exp} veces.`,
    });
  }

  // forma extendida
  const correcta = `${base} × `.repeat(exp - 1) + base;
  const opciones = [correcta];

  const distractores = new Set<string>();
  while (distractores.size < 3) {
    const expErr = Math.max(2, exp + randomInt(-2, 2));
    if (expErr === exp) continue;
    const cand = `${base} × `.repeat(expErr - 1) + base;
    distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `¿Cuál es la forma desarrollada de la potencia ${base}^${exp}?`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Una potencia ${base}^${exp} es una multiplicación de ${exp} factores iguales a ${base}.`,
  });
};

export default generarPotencias;
