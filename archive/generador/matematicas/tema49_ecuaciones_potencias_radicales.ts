// src/generators/math/tema49_ecuaciones_potencias_radicales.ts
// Tema lógico 53 – Ecuaciones con potencias y radicales simples
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 49;
const TITULO = "Ecuaciones con potencias y radicales simples";

type TipoEcuacion = "x2_igual_a" | "sqrt_x_mas_a" | "a_pow_x";

export const generarEcuacionesPotenciasRadicales: GeneratorFn = (
  dificultad: Dificultad = "intermedio"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tiposPosibles: TipoEcuacion[] =
    dificultadCore === "basico"
      ? ["x2_igual_a", "sqrt_x_mas_a"]
      : ["x2_igual_a", "sqrt_x_mas_a", "a_pow_x"];

  const tipo = pickRandom(tiposPosibles);

  let enunciado: string;
  let correcta: number | string;
  const opciones: (number | string)[] = [];

  if (tipo === "x2_igual_a") {
    // x^2 = a
    const x0 =
      dificultadCore === "basico"
        ? randomInt(1, 8)
        : dificultadCore === "intermedio"
        ? randomInt(2, 12)
        : randomInt(3, 20);
    const a = x0 * x0;

    enunciado = `Resuelve la ecuación:\n\nx² = ${a}`;

    correcta = `x = ${x0} o x = -${x0}`;
    opciones.push(
      correcta,
      `x = ${x0}`,
      `x = -${x0}`,
      `x = ${a}`
    );

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Para x² = a (con a > 0) se obtienen dos soluciones: x = √a y x = -√a.",
    });
  }

  if (tipo === "sqrt_x_mas_a") {
    // √(x + a) = b => x + a = b² => x = b² - a
    const a =
      dificultadCore === "basico"
        ? randomInt(-3, 6)
        : dificultadCore === "intermedio"
        ? randomInt(-6, 10)
        : randomInt(-10, 14);
    const b =
      dificultadCore === "basico"
        ? randomInt(1, 4)
        : dificultadCore === "intermedio"
        ? randomInt(2, 7)
        : randomInt(3, 9);

    const xSol = b * b - a;

    enunciado = `Resuelve la ecuación:\n\n√(x ${
      a >= 0 ? "+ " + a : "- " + Math.abs(a)
    }) = ${b}`;

    correcta = xSol;

    opciones.push(correcta);

    const distractores = new Set<number>();
    const salto = dificultadCore === "avanzado" ? 7 : 5;
    while (opciones.length < 4) {
      const delta = randomInt(-salto, salto);
      if (delta === 0) continue;
      const cand = xSol + delta;
      if (cand !== xSol && !distractores.has(cand)) {
        opciones.push(cand);
        distractores.add(cand);
      }
    }

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Se eleva al cuadrado en ambos miembros: x + a = b², y luego se despeja x.",
    });
  }

  // a_pow_x: a^x = N, con x entero pequeño
  const aBase =
    dificultadCore === "intermedio" ? randomInt(2, 4) : randomInt(2, 5);
  const xSol =
    dificultadCore === "intermedio" ? randomInt(1, 3) : randomInt(2, 4);
  const N = aBase ** xSol;

  enunciado = `Resuelve la ecuación en números enteros:\n\n${aBase}^x = ${N}`;

  correcta = xSol;

  opciones.push(correcta);
  const distractores = new Set<number>();
  const variacion = dificultadCore === "avanzado" ? 4 : 3;
  while (opciones.length < 4) {
    const delta = randomInt(-variacion, variacion);
    if (delta === 0) continue;
    const cand = xSol + delta;
    if (cand !== xSol && cand >= -5 && cand <= 10 && !distractores.has(cand)) {
      opciones.push(cand);
      distractores.add(cand);
    }
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      `Se buscan potencias de ${aBase} que coincidan con ${N}. En este caso, ${aBase}^${xSol} = ${N}, por lo tanto x = ${xSol}.`,
  });
};

export default generarEcuacionesPotenciasRadicales;
