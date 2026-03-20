import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, construirEnunciado, formatNum } from "./temas56_85_helpers";
import { combinatoria } from "./temas81_85_helpers";

const ID_TEMA = 83;
const TITULO = "Distribuciones";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const generarTema83: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["dist.binomial", "dist.normal_concepto", "dist.poisson_simple"] as const);
  const [minK, maxK] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "k");
  const [minP, maxP] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "p");
  const [minLambda, maxLambda] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "lambda");

  if (variante === "dist.binomial") {
    const [minN, maxN] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "n");
    const n = Math.max(3, Math.min(8, randomInt(Math.max(3, minN), Math.max(4, Math.min(8, maxN)))));
    const kMin = Math.max(0, Math.min(n, Math.round(minK)));
    const kMax = Math.max(kMin, Math.min(n, Math.round(maxK)));
    const k = randomInt(kMin, kMax);
    const pMin = Math.max(0.1, Math.min(0.9, minP / 10));
    const pMax = Math.max(pMin, Math.min(0.9, maxP / 10));
    const p = pickRandom([pMin, (pMin + pMax) / 2, pMax]);
    const q = 1 - p;
    const comb = combinatoria(n, k);
    const correcta = comb * p ** k * q ** (n - k);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "dist.binomial",
        fallback: "Si X~Bin(n={{n}}, p={{p}}), calcula P(X={{k}}).",
        variables: { n, p: formatNum(p), k },
      }),
      opciones: buildOpcionesUnicas(formatNum(correcta), [formatNum(comb * p * q), formatNum(comb * p ** n), formatNum(comb * p ** k)]),
      indiceCorrecto: 0,
      explicacion: "Binomial: P(X=k)=C(n,k)p^k(1-p)^(n-k).",
    });
  }

  if (variante === "dist.normal_concepto") {
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "dist.normal_concepto",
        fallback: "En una distribución normal, aproximadamente ¿qué porcentaje de datos cae dentro de 1 desviación estándar de la media?",
        variables: {},
      }),
      opciones: buildOpcionesUnicas("68%", ["95%", "99.7%", "50%"]),
      indiceCorrecto: 0,
      explicacion: "Regla empírica: 68%-95%-99.7%.",
    });
  }

  const lambdaMin = Math.max(1, Math.round(minLambda));
  const lambdaMax = Math.max(lambdaMin, Math.round(maxLambda));
  const lambda = randomInt(lambdaMin, lambdaMax);
  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "dist.poisson_simple",
      fallback: "Si una variable X sigue una Poisson con parámetro λ={{lambda}}, ¿qué magnitud controla λ?",
      variables: { lambda },
    }),
    opciones: buildOpcionesUnicas("La media esperada de ocurrencias.", ["La desviación estándar exacta sin raíz.", "El máximo número posible de eventos.", "La probabilidad total acumulada."]),
    indiceCorrecto: 0,
    explicacion: "En Poisson, λ representa tanto la media como la varianza.",
  });
};

export default generarTema83;
