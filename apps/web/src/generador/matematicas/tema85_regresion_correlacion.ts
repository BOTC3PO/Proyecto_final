import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { correlacionPearson } from "./temas81_85_helpers";

const ID_TEMA = 85;
const TITULO = "Regresión y correlación";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const generarTema85: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["reg.lineal_pendiente", "reg.prediccion", "corr.signo_magnitud"] as const);
  const [minY, maxY] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "y");
  const [minPendiente, maxPendiente] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "pendiente");
  const [minIntercepto, maxIntercepto] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "intercepto");
  const [minDatos, maxDatos] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "datos");

  if (variante === "reg.lineal_pendiente") {
    const [minX, maxX] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "x");
    const x1 = randomInt(Math.max(1, minX), Math.max(3, Math.min(12, maxX)));
    const pasoX = randomInt(1, 4);
    const mAbsMin = Math.max(1, Math.min(3, Math.round(Math.abs(minPendiente))));
    const mAbsMax = Math.max(mAbsMin, Math.min(3, Math.round(Math.abs(maxPendiente))));
    const mBase = randomInt(mAbsMin, mAbsMax);
    const m = pickRandom([-mBase, mBase]);
    const y1 = randomInt(Math.min(minY, maxY), Math.max(minY, maxY));
    const x2 = x1 + pasoX;
    const y2 = y1 + m * pasoX;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "reg.lineal_pendiente",
        fallback: "Dados los puntos ({{x1}},{{y1}}) y ({{x2}},{{y2}}), calcula la pendiente m.",
        variables: { x1, y1, x2, y2 },
      }),
      opciones: buildOpcionesUnicas(m, [1 / m, (y2 - y1) + (x2 - x1), Math.abs(m)]),
      indiceCorrecto: 0,
      explicacion: "Pendiente: m=(y2-y1)/(x2-x1).",
    });
  }

  if (variante === "reg.prediccion") {
    const mAbsMin = Math.max(1, Math.min(3, Math.round(Math.abs(minPendiente))));
    const mAbsMax = Math.max(mAbsMin, Math.min(3, Math.round(Math.abs(maxPendiente))));
    const mBase = randomInt(mAbsMin, mAbsMax);
    const m = pickRandom([-mBase, mBase]);
    const b = randomInt(Math.round(minIntercepto), Math.max(Math.round(minIntercepto), Math.round(maxIntercepto)));
    const x = randomInt(Math.max(1, Math.round(minDatos)), Math.max(Math.max(1, Math.round(minDatos)), Math.round(maxDatos)));
    const y = m * x + b;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "reg.prediccion",
        fallback: "Para la recta y={{m}}x + {{b}}, ¿cuál es y cuando x={{x}}?",
        variables: { m, b, x },
      }),
      opciones: buildOpcionesUnicas(y, [m * x - b, m + b, x + b]),
      indiceCorrecto: 0,
      explicacion: "Sustituye x en y=mx+b.",
    });
  }

  const caso = pickRandom([
    { puntos: "(1,2), (2,4), (3,6)", x: [1, 2, 3], y: [2, 4, 6], etiqueta: "Positiva" },
    { puntos: "(1,6), (2,4), (3,2)", x: [1, 2, 3], y: [6, 4, 2], etiqueta: "Negativa" },
    { puntos: "(1,3), (2,1), (3,3)", x: [1, 2, 3], y: [3, 1, 3], etiqueta: "Cercana a 0" },
  ] as const);
  const r = correlacionPearson(caso.x, caso.y);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "corr.signo_magnitud",
      fallback: "Dado el conjunto de puntos {{datos}}, ¿cómo es la correlación lineal?",
      variables: { datos: caso.puntos },
    }),
    opciones: buildOpcionesUnicas(caso.etiqueta, [caso.etiqueta === "Positiva" ? "Negativa" : "Positiva", caso.etiqueta === "Cercana a 0" ? "Positiva" : "Cercana a 0", "No se puede determinar"]),
    indiceCorrecto: 0,
    explicacion: `El signo de r (${r.toFixed(2)}) marca si la tendencia lineal es positiva, negativa o casi nula.`,
  });
};

export default generarTema85;
