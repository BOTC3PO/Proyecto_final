import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 30;
const TITULO = "Combinatoria";

function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

export const generarEcuacionesConParametros: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const tipo = pickRandom(["permutaciones", "combinaciones"] as const);

  const n = d === "basico" ? randomInt(4, 6) : d === "intermedio" ? randomInt(5, 7) : randomInt(6, 8);
  const k = randomInt(2, n - 1);

  const correcta =
    tipo === "permutaciones"
      ? factorial(n)
      : Math.round(factorial(n) / (factorial(k) * factorial(n - k)));

  const opciones = [correcta, correcta + 1, Math.max(1, correcta - 1), n * k];

  const enunciado =
    tipo === "permutaciones"
      ? `¿De cuántas formas se pueden ordenar ${n} elementos distintos?`
      : `¿De cuántas formas se pueden elegir ${k} elementos de un conjunto de ${n} elementos, sin importar el orden?`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      tipo === "permutaciones"
        ? "Las permutaciones de n elementos distintos son n!."
        : "Las combinaciones se calculan con C(n,k)=n!/(k!(n-k)!).",
  });
};

export default generarEcuacionesConParametros;
