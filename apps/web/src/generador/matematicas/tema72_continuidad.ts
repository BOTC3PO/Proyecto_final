import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { polyToString, type PolyTerm } from "./temas71_80_helpers";

const ID_TEMA = 72;
const TITULO = "Continuidad";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema72: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const variante = pickRandom(["calc.continuidad.evaluar", "calc.continuidad.removible", "calc.continuidad.salto"] as const);
  const [coefMin, coefMax] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const lim = Math.max(2, Math.min(7, Math.max(Math.abs(coefMin), Math.abs(coefMax))));

  if (variante === "calc.continuidad.evaluar") {
    const terms: PolyTerm[] = [
      { coef: randomInt(-lim, lim) || 1, exp: 2 },
      { coef: randomInt(-lim, lim), exp: 1 },
      { coef: randomInt(-lim, lim), exp: 0 },
    ];
    const x0 = randomInt(-lim, lim);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.continuidad.evaluar",
        fallback: "¿La función f(x)={{fx}} es continua en x={{x0}}?",
        variables: { fx: polyToString(terms), x0 },
      }),
      opciones: buildOpcionesUnicas("Sí", ["No, por dominio", "No, por asíntota", "Depende"]),
      indiceCorrecto: 0,
      explicacion: "Todo polinomio es continuo en todos los reales.",
    });
  }

  if (variante === "calc.continuidad.removible") {
    const k = randomInt(1, lim);
    const correcta = 2 * k;
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.continuidad.removible",
        fallback: "Sea f(x)=(x^2-{{k2}})/(x-{{k}}) si x≠{{k}} y f({{k}})=m. ¿Qué valor debe tener m para continuidad?",
        variables: { k, k2: k * k },
      }),
      opciones: buildOpcionesUnicas(correcta, [k, k * k, 0]),
      indiceCorrecto: 0,
      explicacion: "La continuidad exige f(k)=lim x→k f(x)=2k.",
    });
  }

  const k = randomInt(-lim, lim);
  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.continuidad.salto",
      fallback: "Sea f(x)=1 si x<{{k}}, y f(x)=3 si x≥{{k}}. ¿Es continua en x={{k}}?",
      variables: { k },
    }),
    opciones: buildOpcionesUnicas("No", ["Sí", "Solo por derecha", "Solo por izquierda"]),
    indiceCorrecto: 0,
    explicacion: "Los límites laterales difieren (1 y 3), por eso hay discontinuidad de salto.",
  });
};

export default generarTema72;
