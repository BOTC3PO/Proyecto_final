import { type Dificultad, type GeneratorFn, crearQuizBase, normalizarDificultadCore, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import { evalPoly, polyToString, type PolyTerm } from "./temas71_80_helpers";

const ID_TEMA = 71;
const TITULO = "Límites de funciones";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema71: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["calc.limite.directo", "calc.limite.factorizar", "calc.limite.racionalizar"] as const);

  const [coefMin, coefMax] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const [x0Min, x0Max] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "x0");
  const limCoef = Math.max(2, Math.min(8, Math.max(Math.abs(coefMin), Math.abs(coefMax))));
  const limX = Math.max(2, Math.min(dificultadCore === "avanzado" ? 8 : 6, Math.max(Math.abs(x0Min), Math.abs(x0Max))));

  if (variante === "calc.limite.directo") {
    const a = randomInt(-limCoef, limCoef) || 1;
    const b = randomInt(-limCoef, limCoef);
    const c = randomInt(-limCoef, limCoef);
    const x0 = randomInt(-limX, limX);
    const terms: PolyTerm[] = [{ coef: a, exp: 2 }, { coef: b, exp: 1 }, { coef: c, exp: 0 }];
    const correcta = evalPoly(terms, x0);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.limite.directo",
        fallback: "Calcula el límite lim x→{{x0}} de f(x)={{fx}}.",
        variables: { x0, fx: polyToString(terms) },
      }),
      opciones: buildOpcionesUnicas(correcta, [correcta + 1, correcta - 1, a * x0]),
      indiceCorrecto: 0,
      explicacion: "Al ser un polinomio, el límite en x0 se obtiene por sustitución directa.",
    });
  }

  if (variante === "calc.limite.factorizar") {
    const k = randomInt(1, limX);
    const correcta = 2 * k;
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.limite.factorizar",
        fallback: "Calcula lim x→{{k}} de (x^2 - {{k2}})/(x - {{k}}).",
        variables: { k, k2: k * k },
      }),
      opciones: buildOpcionesUnicas(correcta, [k, k * k, 0]),
      indiceCorrecto: 0,
      explicacion: "x²-k²=(x-k)(x+k), se simplifica y queda x+k; al evaluar en k resulta 2k.",
    });
  }

  const k = pickRandom([1, 4, 9, 16]);
  const correcta = `1/${2 * Math.sqrt(k)}`;
  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.limite.racionalizar",
      fallback: "Calcula lim x→{{k}} de (√x - √{{k}})/(x - {{k}}).",
      variables: { k },
    }),
    opciones: buildOpcionesUnicas(correcta, [`1/${Math.sqrt(k)}`, `1/${k}`, "0"]),
    indiceCorrecto: 0,
    explicacion: "Al racionalizar queda 1/(√x+√k) y al evaluar en x=k se obtiene 1/(2√k).",
  });
};

export default generarTema71;
