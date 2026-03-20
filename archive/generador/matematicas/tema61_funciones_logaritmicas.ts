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

const ID_TEMA = 61;
const TITULO = "Funciones logarítmicas";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const generarTema61: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["log.func.evaluar", "log.func.inverso", "log.func.propiedad"] as const);

  if (variante === "log.func.evaluar") {
    const [minBaseRaw, maxBaseRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "base");
    const base = randomInt(clampInt(minBaseRaw, 2, 5), clampInt(Math.max(minBaseRaw, maxBaseRaw), 2, 5));
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const minExp = clampInt(minExpRaw, 2, 5);
    const maxExp = clampInt(maxExpRaw, 2, dificultadCore === "basico" ? 4 : 5);
    const n = randomInt(minExp, Math.max(minExp, maxExp));
    const x = base ** n;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "log.func.evaluar",
        fallback: "Calcula log_{{base}}({{x}}).",
        variables: { base, x },
      }),
      opciones: buildOpcionesUnicas(n, [n - 1, n + 1, x]),
      indiceCorrecto: 0,
      explicacion: "Si base^n = x, entonces log_base(x)=n.",
    });
  }

  if (variante === "log.func.inverso") {
    const base = randomInt(2, 5);
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const minExp = clampInt(minExpRaw, 2, 5);
    const maxExp = clampInt(maxExpRaw, 2, dificultadCore === "basico" ? 4 : 5);
    const n = randomInt(minExp, Math.max(minExp, maxExp));
    const x = base ** n;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "log.func.inverso",
        fallback: "Si {{base}}^{{n}} = {{x}}, entonces log_{{base}}({{x}})= ?",
        variables: { base, n, x },
      }),
      opciones: buildOpcionesUnicas(n, [base, x, `1/${n}`]),
      indiceCorrecto: 0,
      explicacion: "Logaritmo y exponencial son funciones inversas.",
    });
  }

  const base = randomInt(2, 5);
  const a = randomInt(1, dificultadCore === "basico" ? 3 : 4);
  const c = randomInt(1, dificultadCore === "avanzado" ? 5 : 4);
  const m = base ** a;
  const n = base ** c;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "log.func.propiedad",
      fallback: "Calcula log_{{base}}({{m}}·{{n}}).",
      variables: { base, m, n },
    }),
    opciones: buildOpcionesUnicas(a + c, [a * c, a - c, a + c + 1]),
    indiceCorrecto: 0,
    explicacion: "Por propiedad del producto: log_b(m·n)=log_b(m)+log_b(n).",
  });
};

export default generarTema61;
