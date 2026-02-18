import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, clampInt, construirEnunciado } from "./temas56_85_helpers";

const ID_TEMA = 69;
const TITULO = "Vectores básico";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const vec2ToStr = (x: number, y: number): string => `(${x},${y})`;

const generarTema69: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["vec.suma_resta", "vec.modulo", "vec.producto_punto"] as const);
  const [minRaw, maxRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "vec");
  const lim = clampInt(Math.max(Math.abs(minRaw), Math.abs(maxRaw)), 4, dificultadCore === "basico" ? 10 : 15);

  if (variante === "vec.suma_resta") {
    const a = randomInt(-lim, lim);
    const b = randomInt(-lim, lim);
    const c = randomInt(-lim, lim);
    const d = randomInt(-lim, lim);
    const resta = dificultadCore !== "basico" && randomInt(0, 1) === 1;
    const x = resta ? a - c : a + c;
    const y = resta ? b - d : b + d;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "vec.suma_resta",
        fallback: "Sean u={{u}} y v={{v}}. Calcula u {{op}} v.",
        variables: { u: vec2ToStr(a, b), v: vec2ToStr(c, d), op: resta ? "-" : "+" },
      }),
      opciones: buildOpcionesUnicas(vec2ToStr(x, y), [vec2ToStr(resta ? a - d : a + d, resta ? b - c : b + c), vec2ToStr(a * c, b * d), vec2ToStr(a + b, c + d)]),
      indiceCorrecto: 0,
      explicacion: "La suma/resta de vectores se hace componente a componente.",
    });
  }

  if (variante === "vec.modulo") {
    const ternas = pickRandom([
      { x: 3, y: 4, m: 5 },
      { x: 5, y: 12, m: 13 },
      { x: 8, y: 15, m: 17 },
    ]);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "vec.modulo",
        fallback: "Para v={{v}}, calcula |v|.",
        variables: { v: vec2ToStr(ternas.x, ternas.y) },
      }),
      opciones: buildOpcionesUnicas(ternas.m, [ternas.x + ternas.y, ternas.x ** 2 + ternas.y ** 2, `√${ternas.x + ternas.y}`]),
      indiceCorrecto: 0,
      explicacion: "|v| = √(x²+y²). Con pares pitagóricos el resultado es entero.",
    });
  }

  const a = randomInt(-lim, lim);
  const b = randomInt(-lim, lim);
  const c = randomInt(-lim, lim);
  const d = randomInt(-lim, lim);
  const correcto = a * c + b * d;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "vec.producto_punto",
      fallback: "Sean u={{u}} y v={{v}}. Calcula u·v.",
      variables: { u: vec2ToStr(a, b), v: vec2ToStr(c, d) },
    }),
    opciones: buildOpcionesUnicas(correcto, [a * c - b * d, (a + b) * (c + d), a * d + b * c]),
    indiceCorrecto: 0,
    explicacion: "El producto punto en 2D es u·v = u1v1 + u2v2.",
  });
};

export default generarTema69;
