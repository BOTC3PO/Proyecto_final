// src/generators/math/tema23_evaluacion_expresiones.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 23;
const TITULO = "Evaluación de expresiones algebraicas";

type TipoExpresion = "soloX" | "xY";

function evaluarSoloX(expr: string, x: number): number {
  // expr del estilo "2*x + 3", etc. (muy simple)
  // Usamos replace para convertir a JS y luego eval (si no querés eval, se puede hacer a mano).
  const jsExpr = expr.replace(/x/g, `(${x})`);
  // eslint-disable-next-line no-eval
  return eval(jsExpr);
}

function evaluarXY(expr: string, x: number, y: number): number {
  const jsExpr = expr
    .replace(/x/g, `(${x})`)
    .replace(/y/g, `(${y})`);
  // eslint-disable-next-line no-eval
  return eval(jsExpr);
}

export const generarEvaluacionExpresiones: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoExpresion =
    dificultad === "facil" ? "soloX" : pickRandom(["soloX", "xY"]);

  let exprTexto: string;
  let x: number;
  let y: number | null = null;
  let resultado: number;

  if (tipo === "soloX") {
    x = randomInt(-5, 5);
    const a = randomInt(-5, 5) || 1;
    const b = randomInt(-10, 10);

    const formas = [
      `${a}*x + ${b}`,
      `${a}*x - ${b}`,
      `${a}*x*x + ${b}`,
      `${a}*x - 2`,
    ];

    const expr = pickRandom(formas);
    exprTexto = expr.replace(/\*/g, "·").replace(/x\*x/g, "x²");

    resultado = evaluarSoloX(expr, x);
  } else {
    x = randomInt(-5, 5);
    y = randomInt(-5, 5);
    const a = randomInt(-4, 4) || 1;
    const b = randomInt(-4, 4) || 1;
    const c = randomInt(-10, 10);

    const formas = [
      `${a}*x + ${b}*y + ${c}`,
      `${a}*x*y + ${b}`,
      `${a}*x - ${b}*y + ${c}`,
    ];

    const expr = pickRandom(formas);
    exprTexto = expr
      .replace(/\*/g, "·")
      .replace(/x\*y/g, "xy");

    resultado = evaluarXY(formas[0] === expr ? expr : expr, x, y);
  }

  const correcta = resultado;
  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-10, 10);
    if (delta === 0) continue;
    const cand = correcta + delta;
    if (cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  const enunciado =
    tipo === "soloX"
      ? `Evalúa la siguiente expresión para x = ${x}:\n\n${exprTexto}`
      : `Evalúa la siguiente expresión para x = ${x} e y = ${y}:\n\n${exprTexto}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Para evaluar una expresión se reemplazan las variables por los valores dados y luego se realizan las operaciones respetando la prioridad.",
  });
};

export default generarEvaluacionExpresiones;
