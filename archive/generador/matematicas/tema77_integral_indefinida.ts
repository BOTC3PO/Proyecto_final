import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import { formatFraction, integratedPolyToString } from "./temas71_80_helpers";

const ID_TEMA = 77;
const TITULO = "Integral indefinida";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema77: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.int.indef_potencia", "calc.int.indef_polinomio", "calc.int.indef_constante"] as const);
  const [minCoef, maxCoef] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const [minExp, maxExp] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exp");
  const limCoef = Math.max(2, Math.min(9, Math.max(Math.abs(minCoef), Math.abs(maxCoef))));
  const limExp = Math.max(2, Math.min(4, Math.max(Math.abs(minExp), Math.abs(maxExp))));

  if (variante === "calc.int.indef_potencia") {
    const n = randomInt(1, limExp);
    const cBase = randomInt(1, limCoef);
    const c = cBase * (n + 1);
    const correcta = `${integratedPolyToString([{ coef: c, exp: n }])} + C`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.int.indef_potencia",
        fallback: "Calcula ∫ {{c}}x^{{n}} dx.",
        variables: { c, n },
      }),
      opciones: buildOpcionesUnicas(correcta, [`${c * n}x^${Math.max(0, n - 1)} + C`, `${formatFraction(c, Math.max(1, n - 1))}x^${Math.max(0, n - 1)} + C`, `${c}x^${n + 1} + C`]),
      indiceCorrecto: 0,
      explicacion: "Se aumenta el exponente en 1 y se divide por el nuevo exponente.",
    });
  }

  if (variante === "calc.int.indef_polinomio") {
    const a = 2 * randomInt(1, limCoef);
    const b = randomInt(-limCoef, limCoef);
    const correcta = `${formatFraction(a, 2)}x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x + C`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.int.indef_polinomio",
        fallback: "Calcula ∫ ({{a}}x {{bSign}} {{bAbs}}) dx.",
        variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b) },
      }),
      opciones: buildOpcionesUnicas(correcta, [`${a}x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)}x + C`, `${a}x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(b)} + C`, `${formatFraction(a, 2)}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} + C`]),
      indiceCorrecto: 0,
      explicacion: "∫(ax+b)dx=(a/2)x²+bx+C.",
    });
  }

  const c = randomInt(1, limCoef);
  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.int.indef_constante",
      fallback: "Calcula ∫ {{c}} dx.",
      variables: { c },
    }),
    opciones: buildOpcionesUnicas(`${c}x + C`, [`${c} + C`, "x + C", "0"]),
    indiceCorrecto: 0,
    explicacion: "La integral de una constante c es cx + C.",
  });
};

export default generarTema77;
