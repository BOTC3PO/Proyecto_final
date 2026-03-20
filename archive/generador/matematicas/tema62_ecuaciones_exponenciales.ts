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

const ID_TEMA = 62;
const TITULO = "Ecuaciones exponenciales";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const generarTema62: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["exp.eq.basica", "exp.eq.misma_base", "exp.eq.igualar_potencias"] as const);

  if (variante === "exp.eq.basica") {
    const [minBaseRaw, maxBaseRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "base");
    const base = randomInt(clampInt(minBaseRaw, 2, 9), clampInt(Math.max(minBaseRaw, maxBaseRaw), 2, 9));
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const minExp = clampInt(minExpRaw, 2, 6);
  const maxExp = clampInt(maxExpRaw, 2, dificultadCore === "basico" ? 4 : 6);
  const n = randomInt(minExp, Math.max(minExp, maxExp));
    const correcta = `x=${n}`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "exp.eq.basica",
        fallback: "Resuelve {{base}}^x = {{base}}^{{n}}.",
        variables: { base, n },
      }),
      opciones: buildOpcionesUnicas(correcta, [`x=${base * n}`, `x=${base + n}`, `x=${n - 1}`]),
      indiceCorrecto: 0,
      explicacion: "Si las bases son iguales y positivas, los exponentes deben ser iguales.",
    });
  }

  if (variante === "exp.eq.misma_base") {
    const base = randomInt(2, 7);
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const minExp = clampInt(minExpRaw, 2, 6);
  const maxExp = clampInt(maxExpRaw, 2, dificultadCore === "basico" ? 4 : 6);
  const n = randomInt(minExp, Math.max(minExp, maxExp));
    const valor = base ** n;
    const correcta = `x=${n}`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "exp.eq.misma_base",
        fallback: "Resuelve {{base}}^x = {{valor}}.",
        variables: { base, valor },
      }),
      opciones: buildOpcionesUnicas(correcta, [`x=${n + 1}`, `x=${n - 1}`, `x=${valor}`]),
      indiceCorrecto: 0,
      explicacion: "Reconocemos el valor como una potencia exacta de la misma base.",
    });
  }

  const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
  const minExp = clampInt(minExpRaw, 2, 6);
  const maxExp = clampInt(maxExpRaw, 2, dificultadCore === "basico" ? 4 : 6);
  const n = randomInt(minExp, Math.max(minExp, maxExp));
  const k = 2 * n;
  const correcta = `x=${n}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "exp.eq.igualar_potencias",
      fallback: "Resuelve 4^x = 2^{{k}}.",
      variables: { k },
    }),
    opciones: buildOpcionesUnicas(correcta, [`x=${k * 2}`, `x=${k - 2}`, `x=${k / 4}`]),
    indiceCorrecto: 0,
    explicacion: "Como 4=2^2, queda 2^(2x)=2^k, entonces 2x=k y x=k/2.",
  });
};

export default generarTema62;
