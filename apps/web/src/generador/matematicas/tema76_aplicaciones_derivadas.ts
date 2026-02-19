import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import { evalPoly, type PolyTerm } from "./temas71_80_helpers";

const ID_TEMA = 76;
const TITULO = "Aplicaciones de derivadas";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema76: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.aplic.max_min", "calc.aplic.velocidad", "calc.aplic.crecimiento"] as const);
  const [coefMin, coefMax] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const [x0Min, x0Max] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "x0");
  const limCoef = Math.max(2, Math.min(8, Math.max(Math.abs(coefMin), Math.abs(coefMax))));
  const limX = Math.max(2, Math.min(7, Math.max(Math.abs(x0Min), Math.abs(x0Max))));

  if (variante === "calc.aplic.max_min") {
    const a = pickRandom([-3, -2, -1, 1, 2, 3]);
    const xVert = randomInt(-3, 3);
    const b = -2 * a * xVert;
    const c = randomInt(-limCoef, limCoef);
    const correcta = xVert;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.aplic.max_min",
        fallback: "Para f(x)={{a}}x^2 {{bSign}} {{bAbs}}x {{cSign}} {{cAbs}}, ¿cuál es la abscisa del vértice?",
        variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b), cSign: c >= 0 ? "+" : "-", cAbs: Math.abs(c) },
      }),
      opciones: buildOpcionesUnicas(correcta, [-b / a, b / (2 * a), -b / 2]),
      indiceCorrecto: 0,
      explicacion: "La coordenada x del vértice es x*= -b/(2a).",
    });
  }

  if (variante === "calc.aplic.velocidad") {
    const a = randomInt(1, limCoef);
    const b = randomInt(-limCoef, limCoef);
    const c = randomInt(-limCoef, limCoef);
    const t0 = randomInt(0, limX);
    const correcta = 2 * a * t0 + b;
    const sTerms: PolyTerm[] = [{ coef: a, exp: 2 }, { coef: b, exp: 1 }, { coef: c, exp: 0 }];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.aplic.velocidad",
        fallback: "Si s(t)={{a}}t^2 {{bSign}} {{bAbs}}t {{cSign}} {{cAbs}}, calcula la velocidad instantánea en t={{t0}}.",
        variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b), cSign: c >= 0 ? "+" : "-", cAbs: Math.abs(c), t0 },
      }),
      opciones: buildOpcionesUnicas(correcta, [evalPoly(sTerms, t0), 2 * a * t0, 2 * a * t0 + c]),
      indiceCorrecto: 0,
      explicacion: "v(t)=s'(t)=2at+b y luego se evalúa en t0.",
    });
  }

  const a = randomInt(1, limCoef);
  const b = randomInt(-limCoef, limCoef);
  const c = randomInt(-limCoef, limCoef);
  const x0 = randomInt(-limX, limX);
  const correcta = 2 * a * x0 + b;
  const fTerms: PolyTerm[] = [{ coef: a, exp: 2 }, { coef: b, exp: 1 }, { coef: c, exp: 0 }];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.aplic.crecimiento",
      fallback: "Para f(x)={{a}}x^2 {{bSign}} {{bAbs}}x {{cSign}} {{cAbs}}, calcula la tasa de cambio en x={{x0}}.",
      variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b), cSign: c >= 0 ? "+" : "-", cAbs: Math.abs(c), x0 },
    }),
    opciones: buildOpcionesUnicas(correcta, [evalPoly(fTerms, x0), correcta + 1, 2 * a * x0]),
    indiceCorrecto: 0,
    explicacion: "La tasa de cambio instantánea se obtiene con la derivada f'(x0).",
  });
};

export default generarTema76;
