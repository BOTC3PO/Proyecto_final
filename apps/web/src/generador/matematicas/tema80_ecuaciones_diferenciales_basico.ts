import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";

const ID_TEMA = 80;
const TITULO = "Ecuaciones diferenciales (básico)";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema80: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.ed.separable_simple", "calc.ed.crecimiento_exponencial", "calc.ed_solucion_verificar"] as const);
  const [minK, maxK] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "k");
  const lim = Math.max(2, Math.min(8, Math.max(Math.abs(minK), Math.abs(maxK))));

  if (variante === "calc.ed.separable_simple") {
    const k = randomInt(1, lim);
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.ed.separable_simple",
        fallback: "Para la ED dy/dx={{k}}, ¿cuál es una familia de soluciones?",
        variables: { k },
      }),
      opciones: buildOpcionesUnicas(`y = ${k}x + C`, [`y = ${k} + C`, `y = ${k}/x + C`, `y = x^${k} + C`]),
      indiceCorrecto: 0,
      explicacion: "Integrando dy/dx=k se obtiene y=kx+C.",
    });
  }

  if (variante === "calc.ed.crecimiento_exponencial") {
    const k = randomInt(1, lim);
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.ed.crecimiento_exponencial",
        fallback: "Para la ED dy/dx={{k}}y, elige una solución general correcta.",
        variables: { k },
      }),
      opciones: buildOpcionesUnicas(`y = C e^(${k}x)`, [`y = ${k}x + C`, "y = C e^x", "y = C k^x"]),
      indiceCorrecto: 0,
      explicacion: "La ecuación y'=ky tiene solución general y=Ce^(kx).",
    });
  }

  const caso = pickRandom([
    { y: "y = 2x", ed: "dy/dx = 2", es: "Sí" },
    { y: "y = x^2", ed: "dy/dx = 2x", es: "Sí" },
    { y: "y = x^2", ed: "dy/dx = x", es: "No" },
  ] as const);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.ed_solucion_verificar",
      fallback: "Verifica si {{y}} satisface la ED {{ed}}.",
      variables: { y: caso.y, ed: caso.ed },
    }),
    opciones: buildOpcionesUnicas(caso.es, [caso.es === "Sí" ? "No" : "Sí", "Sí, solo en x=0", "Depende de C"]),
    indiceCorrecto: 0,
    explicacion: "Se deriva la función propuesta y se compara con el lado derecho de la ecuación diferencial.",
  });
};

export default generarTema80;
