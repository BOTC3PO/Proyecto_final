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

const ID_TEMA = 64;
const TITULO = "Números complejos";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const formatComplejo = (a: number, b: number): string => `${a} ${b < 0 ? "-" : "+"} ${Math.abs(b)}i`;

const generarTema64: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["comp.forma.identificar", "comp.conjugado", "comp.modulo"] as const);

  if (variante === "comp.forma.identificar") {
    const [minRealRaw, maxRealRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "real");
    const [minImagRaw, maxImagRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "imag");
    const a = randomInt(clampInt(minRealRaw, 1, 12), clampInt(Math.max(minRealRaw, maxRealRaw), 2, dificultadCore === "basico" ? 12 : 20));
    const b = randomInt(-clampInt(Math.max(minImagRaw, maxImagRaw), 2, 12), clampInt(Math.max(minImagRaw, maxImagRaw), 2, 12));
    const imag = b === 0 ? 1 : b;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "comp.forma.identificar",
        fallback: "Dado z = {{z}}, ¿cuál es la parte imaginaria (coeficiente de i)?",
        variables: { z: formatComplejo(a, imag) },
      }),
      opciones: buildOpcionesUnicas(imag, [a, a + imag, `${imag}i`]),
      indiceCorrecto: 0,
      explicacion: "La parte imaginaria es el coeficiente que multiplica a i.",
    });
  }

  if (variante === "comp.conjugado") {
    const [minRealRaw, maxRealRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "real");
    const [minImagRaw, maxImagRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "imag");
    const limReal = clampInt(Math.max(minRealRaw, maxRealRaw), 2, 9);
    const limImag = clampInt(Math.max(minImagRaw, maxImagRaw), 2, dificultadCore === "basico" ? 6 : 9);
    const a = randomInt(-limReal, limReal);
    const b = randomInt(1, limImag);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "comp.conjugado",
        fallback: "Si z = {{z}}, ¿cuál es su conjugado?",
        variables: { z: formatComplejo(a, b) },
      }),
      opciones: buildOpcionesUnicas(formatComplejo(a, -b), [formatComplejo(a, b), formatComplejo(-a, b), formatComplejo(-a, -b)]),
      indiceCorrecto: 0,
      explicacion: "El conjugado cambia el signo de la parte imaginaria.",
    });
  }

  const ternas = [
    { a: 3, b: 4, modulo: 5 },
    { a: 5, b: 12, modulo: 13 },
    { a: 8, b: 15, modulo: 17 },
  ] as const;
  const t = pickRandom(ternas);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "comp.modulo",
      fallback: "Calcula |{{a}} + {{b}}i|.",
      variables: { a: t.a, b: t.b },
    }),
    opciones: buildOpcionesUnicas(t.modulo, [t.a + t.b, t.a ** 2 + t.b ** 2, `√${t.a + t.b}`]),
    indiceCorrecto: 0,
    explicacion: "El módulo es √(a²+b²). Se eligieron ternas pitagóricas para que sea exacto.",
  });
};

export default generarTema64;
