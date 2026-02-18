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

const ID_TEMA = 65;
const TITULO = "Operaciones con complejos";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const formatComplejo = (a: number, b: number): string => `${a} ${b < 0 ? "-" : "+"} ${Math.abs(b)}i`;

const generarTema65: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["comp.op.suma", "comp.op.producto", "comp.op.division_simple"] as const);
  const [minRealRaw, maxRealRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "real");
  const [minImagRaw, maxImagRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "imag");
  const limReal = clampInt(Math.max(minRealRaw, maxRealRaw), 3, dificultadCore === "basico" ? 6 : 10);
  const limImag = clampInt(Math.max(minImagRaw, maxImagRaw), 3, dificultadCore === "basico" ? 6 : 10);

  if (variante === "comp.op.suma") {
    const a = randomInt(-limReal, limReal);
    const b = randomInt(-limImag, limImag);
    const c = randomInt(-limReal, limReal);
    const d = randomInt(-limImag, limImag);
    const re = a + c;
    const im = b + d;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "comp.op.suma",
        fallback: "Calcula ({{z1}}) + ({{z2}}).",
        variables: { z1: formatComplejo(a, b), z2: formatComplejo(c, d) },
      }),
      opciones: buildOpcionesUnicas(formatComplejo(re, im), [formatComplejo(re, b - d), formatComplejo(a - c, im), formatComplejo(re, b * d)]),
      indiceCorrecto: 0,
      explicacion: "Se suman por separado las partes reales e imaginarias.",
    });
  }

  if (variante === "comp.op.producto") {
    const a = randomInt(-4, 4);
    const b = randomInt(-4, 4);
    const c = randomInt(-4, 4);
    const d = randomInt(-4, 4);
    const re = a * c - b * d;
    const im = a * d + b * c;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "comp.op.producto",
        fallback: "Calcula ({{z1}})({{z2}}).",
        variables: { z1: formatComplejo(a, b), z2: formatComplejo(c, d) },
      }),
      opciones: buildOpcionesUnicas(formatComplejo(re, im), [formatComplejo(a * c + b * d, im), formatComplejo(re, a * d - b * c), formatComplejo(a * c, b * d)]),
      indiceCorrecto: 0,
      explicacion: "(a+bi)(c+di)=(ac−bd)+(ad+bc)i.",
    });
  }

  const k = randomInt(1, dificultadCore === "basico" ? 6 : 12);
  const a = k;
  const b = k;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "comp.op.division_simple",
      fallback: "Calcula ({{a}} + {{b}}i)/(1+i).",
      variables: { a, b },
    }),
    opciones: buildOpcionesUnicas(k, [`${k}i`, `${k}/2`, 2 * k]),
    indiceCorrecto: 0,
    explicacion: "(k+ki)/(1+i)=k(1+i)/(1+i)=k.",
  });
};

export default generarTema65;
