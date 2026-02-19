import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, construirEnunciado, formatNum } from "./temas56_85_helpers";

const ID_TEMA = 82;
const TITULO = "Variables aleatorias";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const generarTema82: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["va.esperanza", "va.varianza_simple", "va.discreta_tabla"] as const);
  const [minX, maxX] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "x");
  const lim = Math.max(4, Math.min(20, Math.max(Math.abs(minX), Math.abs(maxX))));

  if (variante === "va.esperanza") {
    const base = randomInt(1, lim - 2);
    const x1 = base;
    const x2 = base + 2;
    const x3 = base + 4;
    const p1 = 0.2;
    const p2 = 0.3;
    const p3 = 0.5;
    const correcta = x1 * p1 + x2 * p2 + x3 * p3;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "va.esperanza",
        fallback: "Para X con valores {{x1}}, {{x2}}, {{x3}} y probabilidades 0.2, 0.3, 0.5, calcula E[X].",
        variables: { x1, x2, x3 },
      }),
      opciones: buildOpcionesUnicas(formatNum(correcta), [formatNum((x1 + x2 + x3) / 3), formatNum(p1 + p2 + p3), formatNum(x1 + x2 + x3)]),
      indiceCorrecto: 0,
      explicacion: "E[X]=Σxᵢpᵢ, es un promedio ponderado por probabilidades.",
    });
  }

  if (variante === "va.varianza_simple") {
    const a = randomInt(1, lim - 2);
    const b = a + pickRandom([2, 4]);
    const pA = 0.5;
    const pB = 0.5;
    const mu = a * pA + b * pB;
    const varianza = pA * (a - mu) ** 2 + pB * (b - mu) ** 2;
    const ex2 = pA * a ** 2 + pB * b ** 2;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "va.varianza_simple",
        fallback: "Si X toma {{a}} y {{b}} con probabilidad 0.5 cada uno, ¿cuál es Var(X)?",
        variables: { a, b },
      }),
      opciones: buildOpcionesUnicas(formatNum(varianza), [formatNum(ex2), formatNum(mu ** 2), formatNum((Math.abs(a - mu) + Math.abs(b - mu)) / 2)]),
      indiceCorrecto: 0,
      explicacion: "Var(X)=Σpᵢ(xᵢ-μ)^2 con μ=E[X].",
    });
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "va.discreta_tabla",
      fallback: "¿Qué representa la esperanza matemática E[X] de una variable aleatoria discreta?",
      variables: {},
    }),
    opciones: buildOpcionesUnicas(
      "El promedio esperado a largo plazo en muchas repeticiones.",
      [
        "El valor máximo que puede tomar X.",
        "La probabilidad total acumulada.",
        "El valor que siempre ocurre con mayor probabilidad.",
      ]
    ),
    indiceCorrecto: 0,
    explicacion: "E[X] describe el valor medio esperado en repeticiones del experimento.",
  });
};

export default generarTema82;
