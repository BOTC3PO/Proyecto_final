// src/generators/math/tema47_potencias_exponentes.ts
// Tema lógico 51 – Potencias y propiedades de exponentes
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 47;
const TITULO = "Potencias y propiedades de los exponentes";

type TipoPotencia = "producto" | "potenciaDePotencia" | "cociente";

export const generarPotenciasExponentes: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoPotencia = pickRandom(["producto", "potenciaDePotencia", "cociente"]);
  const base = randomInt(2, 9);

  const rangoExp =
    dificultad === "facil"
      ? 2
      : dificultad === "media"
      ? 3
      : 4;

  const m = randomInt(1, rangoExp);
  const n = randomInt(1, rangoExp);

  let enunciado: string;
  let correcta: string;

  if (tipo === "producto") {
    // a^m · a^n = a^(m+n)
    enunciado = `Simplifica usando propiedades de potencias:\n\n${base}^${m} · ${base}^${n}`;
    correcta = `${base}^${m + n}`;
  } else if (tipo === "potenciaDePotencia") {
    // (a^m)^n = a^(m·n)
    enunciado = `Simplifica usando propiedades de potencias:\n\n(${base}^${m})^${n}`;
    correcta = `${base}^${m * n}`;
  } else {
    // a^m / a^n = a^(m-n)
    // nos aseguramos m > n
    const expoMayor = Math.max(m, n);
    const expoMenor = Math.min(m, n);
    enunciado = `Simplifica usando propiedades de potencias:\n\n${base}^${expoMayor} / ${base}^${expoMenor}`;
    correcta = `${base}^${expoMayor - expoMenor}`;
  }

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    const delta = randomInt(-2, 2);
    const match = correcta.match(/\^(\d+)/);
    if (!match) break;
    const expo = parseInt(match[1], 10);
    const candExpo = expo + delta;
    if (candExpo < 0 || candExpo === expo) continue;
    const cand = `${base}^${candExpo}`;
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
      "Se aplican las propiedades: a^m · a^n = a^(m+n), (a^m)^n = a^(m·n), a^m / a^n = a^(m-n).",
  });
};

export default generarPotenciasExponentes;
