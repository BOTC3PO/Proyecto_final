import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, clampInt, construirEnunciado } from "./temas56_85_helpers";

const ID_TEMA = 60;
const TITULO = "Funciones exponenciales";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const generarTema60: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["exp.func.evaluar", "exp.func.crecimiento", "exp.func.comparar"] as const);

  if (variante === "exp.func.evaluar") {
    const [minBaseRaw, maxBaseRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "base");
    const minBase = clampInt(minBaseRaw, 2, 9);
    const maxBase = clampInt(maxBaseRaw, 2, dificultadCore === "basico" ? 5 : 9);
    const base = randomInt(minBase, Math.max(minBase, maxBase));
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const expMax = clampInt(maxExpRaw, 3, dificultadCore === "basico" ? 4 : 6);
    const n = randomInt(clampInt(minExpRaw, 2, expMax), expMax);
    const correcta = base ** n;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "exp.func.evaluar",
        fallback: "Calcula {{base}}^{{n}}.",
        variables: { base, n },
      }),
      opciones: buildOpcionesUnicas(correcta, [base ** (n - 1), base ** (n + 1), base * n], [correcta + 1, correcta + base]),
      indiceCorrecto: 0,
      explicacion: "Para evaluar una potencia, multiplicamos la base por sí misma tantas veces como indique el exponente.",
    });
  }

  if (variante === "exp.func.crecimiento") {
    const [minPRaw, maxPRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coeficiente");
    const p0 = clampInt(randomInt(minPRaw, maxPRaw), 1, dificultadCore === "basico" ? 12 : 24);
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const [minTimeRaw, maxTimeRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "tiempo");
    const minFactor = clampInt(minExpRaw, 2, 5);
    const maxFactor = clampInt(maxExpRaw, 2, dificultadCore === "avanzado" ? 5 : 4);
    const b = randomInt(minFactor, Math.max(minFactor, maxFactor));
    const tMax = clampInt(maxTimeRaw, 2, dificultadCore === "basico" ? 3 : 5);
    const t = randomInt(clampInt(minTimeRaw, 2, tMax), tMax);
    const correcta = p0 * b ** t;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "exp.func.crecimiento",
        fallback: "Si P0={{p0}} y crece por factor {{b}} cada periodo, ¿cuál es su valor tras {{t}} periodos?",
        variables: { p0, b, t },
      }),
      opciones: buildOpcionesUnicas(correcta, [p0 * b * t, p0 * (b * t), p0 * b ** (t - 1)], [correcta + p0, correcta + b]),
      indiceCorrecto: 0,
      explicacion: "En crecimiento exponencial por factor b cada periodo: P(t)=P0·b^t.",
    });
  }

  const b = randomInt(2, dificultadCore === "basico" ? 5 : 8);
  const n1 = randomInt(2, dificultadCore === "basico" ? 3 : 5);
  const n2 = randomInt(n1 + 1, n1 + (dificultadCore === "avanzado" ? 3 : 2));
  const correcta = `${b}^${n2}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "exp.func.comparar",
      fallback: "¿Cuál es mayor: {{b}}^{{n1}} o {{b}}^{{n2}}?",
      variables: { b, n1, n2 },
    }),
    opciones: buildOpcionesUnicas(correcta, [`${b}^${n1}`, "Son iguales", "Depende de b"]),
    indiceCorrecto: 0,
    explicacion: "Con base mayor que 1, la potencia con exponente más grande siempre es mayor.",
  });
};

export default generarTema60;
