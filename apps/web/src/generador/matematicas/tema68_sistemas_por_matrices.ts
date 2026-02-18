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
import { preloadGeneradoresTema } from "../generadores_api";

const ID_TEMA = 68;
const TITULO = "Sistemas por matrices";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const mat2x2ToStr = (m: [[number, number], [number, number]]): string => `[[${m[0][0]},${m[0][1]}],[${m[1][0]},${m[1][1]}]]`;
const vec2ToStr = (v: [number, number]): string => `[${v[0]},${v[1]}]`;
const parToStr = (x: number, y: number): string => `(${x},${y})`;

const generarTema68: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["sist.2x2.resolver", "sist.2x2.identificar", "sist.matriz_vector"] as const);
  const [minRaw, maxRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "mat");
  const lim = clampInt(Math.max(Math.abs(minRaw), Math.abs(maxRaw)), 4, dificultadCore === "basico" ? 8 : 12);

  if (variante === "sist.2x2.resolver") {
    const x = randomInt(-5, 5);
    const y = randomInt(-5, 5);
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    while (a * d - b * c === 0) {
      a = randomInt(-lim, lim) || 1;
      b = randomInt(-lim, lim) || -1;
      c = randomInt(-lim, lim) || 2;
      d = randomInt(-lim, lim) || -2;
    }
    const e = a * x + b * y;
    const f = c * x + d * y;

    const pedir = dificultadCore === "basico" ? pickRandom(["x", "y"] as const) : dificultadCore === "intermedio" ? pickRandom(["x", "y", "par"] as const) : pickRandom(["par", "x", "y"] as const);
    const correcta = pedir === "x" ? String(x) : pedir === "y" ? String(y) : parToStr(x, y);
    const distractores = pedir === "x"
      ? [String(y), String(x + 1), String(x - 1)]
      : pedir === "y"
        ? [String(x), String(y + 1), String(y - 1)]
        : [parToStr(y, x), parToStr(-x, y), parToStr(x + 1, y)];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "sist.2x2.resolver",
        fallback: "Resuelve el sistema: {{a}}x + {{b}}y = {{e}}, {{c}}x + {{d}}y = {{f}}. ¿Cuál es {{pregunta}}?",
        variables: { a, b, c, d, e, f, pregunta: pedir === "par" ? "(x,y)" : pedir },
      }),
      opciones: buildOpcionesUnicas(correcta, distractores),
      indiceCorrecto: 0,
      explicacion: "El sistema fue construido desde la solución exacta, por lo que al sustituir se verifica cada ecuación.",
    });
  }

  if (variante === "sist.2x2.identificar") {
    const A: [[number, number], [number, number]] = [
      [randomInt(-lim, lim) || 1, randomInt(-lim, lim) || -1],
      [randomInt(-lim, lim) || 2, randomInt(-lim, lim) || -2],
    ];
    const b: [number, number] = [randomInt(-lim, lim), randomInt(-lim, lim)];
    const pedirA = randomInt(0, 1) === 1;

    const AColsIntercambiadas: [[number, number], [number, number]] = [
      [A[0][1], A[0][0]],
      [A[1][1], A[1][0]],
    ];
    const ASigno: [[number, number], [number, number]] = [
      [-A[0][0], A[0][1]],
      [A[1][0], A[1][1]],
    ];
    const bMal: [number, number] = [b[1], b[0] + 1];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "sist.2x2.identificar",
        fallback: "Dado el sistema {{a1}}x + {{b1}}y = {{e}} y {{a2}}x + {{b2}}y = {{f}}, en Ax=b ¿cuál es {{objetivo}}?",
        variables: {
          a1: A[0][0],
          b1: A[0][1],
          e: b[0],
          a2: A[1][0],
          b2: A[1][1],
          f: b[1],
          objetivo: pedirA ? "la matriz A" : "el vector b",
        },
      }),
      opciones: pedirA
        ? buildOpcionesUnicas(mat2x2ToStr(A), [mat2x2ToStr(AColsIntercambiadas), mat2x2ToStr(ASigno), vec2ToStr(b)])
        : buildOpcionesUnicas(vec2ToStr(b), [vec2ToStr(bMal), vec2ToStr([b[0], -b[1]]), mat2x2ToStr(A)]),
      indiceCorrecto: 0,
      explicacion: "En Ax=b, A contiene coeficientes de x e y, mientras que b contiene los términos independientes.",
    });
  }

  const A: [[number, number], [number, number]] = [
    [randomInt(-lim, lim) || 1, randomInt(-lim, lim) || -1],
    [randomInt(-lim, lim) || 2, randomInt(-lim, lim) || -2],
  ];
  const v: [number, number] = [randomInt(-6, 6), randomInt(-6, 6)];
  const r1 = A[0][0] * v[0] + A[0][1] * v[1];
  const r2 = A[1][0] * v[0] + A[1][1] * v[1];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "sist.matriz_vector",
      fallback: "Calcula A·v con A={{A}} y v={{v}}.",
      variables: { A: mat2x2ToStr(A), v: vec2ToStr(v) },
    }),
    opciones: buildOpcionesUnicas(vec2ToStr([r1, r2]), [vec2ToStr([r2, r1]), vec2ToStr([A[0][0] + v[0], A[1][1] + v[1]]), vec2ToStr([r1, -r2])]),
    indiceCorrecto: 0,
    explicacion: "Para multiplicar matriz por vector se hace producto fila por columna en cada componente.",
  });
};

export default generarTema68;
