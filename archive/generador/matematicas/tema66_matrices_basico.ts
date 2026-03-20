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

const ID_TEMA = 66;
const TITULO = "Matrices básico";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 10],
  intermedio: [1, 20],
  avanzado: [1, 30],
};

const mat2x2ToStr = (m: [[number, number], [number, number]]): string =>
  `[[${m[0][0]},${m[0][1]}],[${m[1][0]},${m[1][1]}]]`;

const matToStr = (m: number[][]): string => `[${m.map((fila) => `[${fila.join(",")}]`).join(",")}]`;

const generarMatriz = (filas: number, columnas: number, min: number, max: number): number[][] =>
  Array.from({ length: filas }, () => Array.from({ length: columnas }, () => randomInt(min, max)));

const generarTema66: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["mat.basica.suma", "mat.basica.multiplicar_escalar", "mat.basica.transpuesta"] as const);

  const [minMatRaw, maxMatRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "mat");
  const [minNumRaw, maxNumRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "numeros");
  const lim = clampInt(Math.max(Math.abs(minMatRaw), Math.abs(maxMatRaw), Math.abs(minNumRaw), Math.abs(maxNumRaw)), 4, dificultadCore === "basico" ? 8 : 12);
  const min = -lim;
  const max = lim;

  if (variante === "mat.basica.suma") {
    const A = generarMatriz(2, 2, min, max) as [[number, number], [number, number]];
    const B = generarMatriz(2, 2, min, max) as [[number, number], [number, number]];
    const usarResta = dificultadCore !== "basico" && randomInt(0, 1) === 1;

    const correcta: [[number, number], [number, number]] = [
      [A[0][0] + (usarResta ? -B[0][0] : B[0][0]), A[0][1] + (usarResta ? -B[0][1] : B[0][1])],
      [A[1][0] + (usarResta ? -B[1][0] : B[1][0]), A[1][1] + (usarResta ? -B[1][1] : B[1][1])],
    ];
    const aMasB: [[number, number], [number, number]] = [
      [A[0][0] + B[0][0], A[0][1] + B[0][1]],
      [A[1][0] + B[1][0], A[1][1] + B[1][1]],
    ];
    const aMenosB: [[number, number], [number, number]] = [
      [A[0][0] - B[0][0], A[0][1] - B[0][1]],
      [A[1][0] - B[1][0], A[1][1] - B[1][1]],
    ];
    const bMenosA: [[number, number], [number, number]] = [
      [B[0][0] - A[0][0], B[0][1] - A[0][1]],
      [B[1][0] - A[1][0], B[1][1] - A[1][1]],
    ];
    const casi = JSON.parse(JSON.stringify(correcta)) as [[number, number], [number, number]];
    casi[1][1] += pickRandom([-2, -1, 1, 2]);

    const operador = usarResta ? "-" : "+";
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "mat.basica.suma",
        fallback: "Sean A={{A}} y B={{B}}. Calcula A {{operador}} B.",
        variables: { A: mat2x2ToStr(A), B: mat2x2ToStr(B), operador },
      }),
      opciones: buildOpcionesUnicas(mat2x2ToStr(correcta), [mat2x2ToStr(usarResta ? aMasB : aMenosB), mat2x2ToStr(bMenosA), mat2x2ToStr(casi)]),
      indiceCorrecto: 0,
      explicacion: "La suma/resta de matrices se realiza elemento a elemento en la misma posición.",
    });
  }

  if (variante === "mat.basica.multiplicar_escalar") {
    const A = generarMatriz(2, 2, min, max) as [[number, number], [number, number]];
    const k = randomInt(dificultadCore === "basico" ? 2 : -4, dificultadCore === "basico" ? 6 : 6);
    const escalar = k === 0 ? 2 : k;

    const correcta: [[number, number], [number, number]] = [
      [A[0][0] * escalar, A[0][1] * escalar],
      [A[1][0] * escalar, A[1][1] * escalar],
    ];
    const sumarK: [[number, number], [number, number]] = [
      [A[0][0] + escalar, A[0][1] + escalar],
      [A[1][0] + escalar, A[1][1] + escalar],
    ];
    const diagonal: [[number, number], [number, number]] = [
      [A[0][0] * escalar, A[0][1]],
      [A[1][0], A[1][1] * escalar],
    ];
    const kCuadrado: [[number, number], [number, number]] = [
      [A[0][0] * escalar * escalar, A[0][1] * escalar * escalar],
      [A[1][0] * escalar * escalar, A[1][1] * escalar * escalar],
    ];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "mat.basica.multiplicar_escalar",
        fallback: "Sea A={{A}}. Calcula {{k}}·A.",
        variables: { A: mat2x2ToStr(A), k: escalar },
      }),
      opciones: buildOpcionesUnicas(mat2x2ToStr(correcta), [mat2x2ToStr(sumarK), mat2x2ToStr(diagonal), mat2x2ToStr(kCuadrado)]),
      indiceCorrecto: 0,
      explicacion: "Multiplicar por un escalar significa multiplicar cada entrada de la matriz por ese número.",
    });
  }

  const dimensiones = dificultadCore === "basico" ? pickRandom([[2, 3], [3, 2]] as const) : pickRandom([[2, 3], [3, 2], [2, 3]] as const);
  const A = generarMatriz(dimensiones[0], dimensiones[1], min, max);
  const transpuesta = Array.from({ length: dimensiones[1] }, (_fila, i) => Array.from({ length: dimensiones[0] }, (_col, j) => A[j][i]));
  const parcial = transpuesta.map((fila, idx) => (idx === 0 ? [...fila].reverse() : fila));
  const permutada = [...transpuesta].reverse();

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "mat.basica.transpuesta",
      fallback: "Sea A={{A}} de tamaño {{f}}×{{c}}. ¿Cuál es A^T?",
      variables: { A: matToStr(A), f: dimensiones[0], c: dimensiones[1] },
    }),
    opciones: buildOpcionesUnicas(matToStr(transpuesta), [matToStr(A), matToStr(parcial), matToStr(permutada)]),
    indiceCorrecto: 0,
    explicacion: "La transpuesta intercambia filas por columnas: (A^T)ij = Aji.",
  });
};

export default generarTema66;
