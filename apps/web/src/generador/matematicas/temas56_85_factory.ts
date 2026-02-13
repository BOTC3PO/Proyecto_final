import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  normalizarDificultadCore,
} from "./generic";
import { getRangoConFallback } from "./limits";

type DificultadCore = "basico" | "intermedio" | "avanzado";

type TemaNuevoConfig = {
  idTema: number;
  titulo: string;
};

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const formatNum = (n: number): string =>
  Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.00$/, "");

const generarTrigonometria = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const [min, max] = getRangoConFallback(idTema, dificultad, fallbackRangos, "numeros");
  const angulo = randomInt(Math.max(10, min), Math.min(80, max));
  const complementario = 90 - angulo;
  const correcto = complementario;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `En un triángulo rectángulo, si un ángulo agudo mide ${angulo}°, ¿cuánto mide su complementario?`,
    opciones: [correcto, correcto + 5, correcto - 5, 180 - angulo],
    indiceCorrecto: 0,
    explicacion: "En triángulos rectángulos, los ángulos agudos son complementarios y suman 90°.",
  });
};

const generarExponencialLog = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const base = randomInt(2, 5);
  const exponente = randomInt(2, normalizarDificultadCore(dificultad) === "avanzado" ? 6 : 4);
  const valor = base ** exponente;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Calcula ${base}^${exponente}.`,
    opciones: [valor, valor + base, valor - base, base * exponente],
    indiceCorrecto: 0,
    explicacion: "Una potencia multiplica la base por sí misma tantas veces como indique el exponente.",
  });
};

const generarComplejosMatrices = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const [min, max] = getRangoConFallback(idTema, dificultad, fallbackRangos, "numeros");
  const a = randomInt(min, max);
  const b = randomInt(min, max);
  const c = randomInt(min, max);
  const d = randomInt(min, max);
  const det = a * d - b * c;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Para la matriz 2x2 A = [[${a}, ${b}], [${c}, ${d}]], ¿cuál es det(A)?`,
    opciones: [det, a * d + b * c, a + d, b - c],
    indiceCorrecto: 0,
    explicacion: "Para matrices 2x2, det(A)=ad−bc.",
  });
};

const generarCalculo = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const coef = randomInt(2, 9);
  const exp = randomInt(2, normalizarDificultadCore(dificultad) === "basico" ? 3 : 5);
  const nuevoCoef = coef * exp;
  const nuevoExp = exp - 1;
  const derivada = nuevoExp === 0 ? `${nuevoCoef}` : `${nuevoCoef}x^${nuevoExp}`;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Deriva f(x) = ${coef}x^${exp}.`,
    opciones: [derivada, `${coef + exp}x^${exp}`, `${coef}x^${exp - 1}`, `${coef * exp}x^${exp}`],
    indiceCorrecto: 0,
    explicacion: "Regla de la potencia: d/dx(ax^n)=a·n·x^(n−1).",
  });
};

const generarProbabilidadEstadistica = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const total = randomInt(20, 100);
  const favorables = randomInt(1, total - 1);
  const prob = favorables / total;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Si hay ${favorables} casos favorables de ${total} posibles, ¿cuál es la probabilidad?`,
    opciones: [formatNum(prob), formatNum(1 - prob), formatNum(total / favorables), formatNum(favorables + total)],
    indiceCorrecto: 0,
    explicacion: "Probabilidad clásica: casos favorables / casos posibles.",
  });
};

export function crearGeneradorTemaNuevo({ idTema, titulo }: TemaNuevoConfig): GeneratorFn {
  return (dificultad: Dificultad = "basico") => {
    if (idTema <= 59) return generarTrigonometria(idTema, titulo, dificultad);
    if (idTema <= 63) return generarExponencialLog(idTema, titulo, dificultad);
    if (idTema <= 70) return generarComplejosMatrices(idTema, titulo, dificultad);
    if (idTema <= 80) return generarCalculo(idTema, titulo, dificultad);
    return generarProbabilidadEstadistica(idTema, titulo, dificultad);
  };
}
