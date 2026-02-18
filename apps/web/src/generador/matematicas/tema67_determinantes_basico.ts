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

const ID_TEMA = 67;
const TITULO = "Determinantes básico";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const mat2x2ToStr = (a: number, b: number, c: number, d: number): string => `[[${a},${b}],[${c},${d}]]`;
const mat3x3ToStr = (m: number[][]): string => `[${m.map((fila) => `[${fila.join(",")}]`).join(",")}]`;

const generarTema67: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["det.2x2.calcular", "det.propiedad.escalar", "det.triangular"] as const);
  const [minRaw, maxRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "mat");
  const lim = clampInt(Math.max(Math.abs(minRaw), Math.abs(maxRaw)), 3, dificultadCore === "basico" ? 8 : 12);

  if (variante === "det.2x2.calcular") {
    const a = randomInt(-lim, lim);
    const b = randomInt(-lim, lim);
    const c = randomInt(-lim, lim);
    const d = randomInt(-lim, lim);
    const det = a * d - b * c;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "det.2x2.calcular",
        fallback: "Calcula det(A) para A={{A}}.",
        variables: { A: mat2x2ToStr(a, b, c, d) },
      }),
      opciones: buildOpcionesUnicas(det, [a * d + b * c, a + d, b - c]),
      indiceCorrecto: 0,
      explicacion: "Para una matriz 2×2, det([[a,b],[c,d]]) = ad − bc.",
    });
  }

  if (variante === "det.propiedad.escalar") {
    const baseDet = randomInt(2, lim);
    const k = randomInt(2, dificultadCore === "basico" ? 6 : 9);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "det.propiedad.escalar",
        fallback: "Si una matriz 2×2 tiene determinante {{det}}, ¿qué ocurre con el determinante si multiplicas una fila por {{k}}?",
        variables: { det: baseDet, k },
      }),
      opciones: buildOpcionesUnicas("Se multiplica por k", ["Se divide por k", "No cambia", "Se multiplica por k^2"]),
      indiceCorrecto: 0,
      explicacion: "Multiplicar una sola fila (o columna) por k multiplica el determinante por k.",
    });
  }

  const p = randomInt(1, lim);
  const q = randomInt(1, lim);
  const r = randomInt(1, lim);
  const triangularSuperior = randomInt(0, 1) === 1;
  const m = triangularSuperior
    ? [
        [p, randomInt(-4, 4), randomInt(-4, 4)],
        [0, q, randomInt(-4, 4)],
        [0, 0, r],
      ]
    : [
        [p, 0, 0],
        [randomInt(-4, 4), q, 0],
        [randomInt(-4, 4), randomInt(-4, 4), r],
      ];
  const det = p * q * r;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "det.triangular",
      fallback: "Para la matriz triangular A={{A}}, calcula det(A).",
      variables: { A: mat3x3ToStr(m) },
    }),
    opciones: buildOpcionesUnicas(det, [p + q + r, p * q + r, -det]),
    indiceCorrecto: 0,
    explicacion: "En matrices triangulares, el determinante es el producto de los elementos de la diagonal principal.",
  });
};

export default generarTema67;
