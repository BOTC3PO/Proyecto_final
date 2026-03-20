// src/generators/math/tema40_ecuacion_recta.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 40;
const TITULO = "Ecuación de la recta";

type TipoEjercicio = "dosPuntos" | "mMasPunto";

function rectaToString(m: number, b: number): string {
  const mStr =
    m === 1 ? "x" : m === -1 ? "-x" : `${m}x`;
  const bStr =
    b === 0 ? "" : b > 0 ? ` + ${b}` : ` - ${Math.abs(b)}`;
  return `y = ${mStr}${bStr}`;
}

export const generarEcuacionRecta: GeneratorFn = (
  dificultad: Dificultad = "intermedio"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipo: TipoEjercicio =
    dificultadCore === "basico"
      ? "mMasPunto"
      : pickRandom(["dosPuntos", "mMasPunto"]);

  let enunciado: string;
  let correcta: string;

  if (tipo === "mMasPunto") {
    const m = randomInt(-5, 5) || 1;
    const b = randomInt(-10, 10);
    const x0 = randomInt(-5, 5);
    const y0 = m * x0 + b;

    correcta = rectaToString(m, b);

    enunciado =
      `Determina la ecuación de la recta en forma y = mx + b que tiene pendiente m = ${m} ` +
      `y pasa por el punto (${x0}, ${y0}).`;
  } else {
    // dos puntos
    const x1 = randomInt(-5, 5);
    const x2 = randomInt(-5, 5) || x1 + 1;
    const m = randomInt(-4, 4) || 1;
    const b = randomInt(-8, 8);

    const y1 = m * x1 + b;
    const y2 = m * x2 + b;

    correcta = rectaToString(m, b);

    enunciado =
      `Determina la ecuación de la recta en forma y = mx + b que pasa por los puntos ` +
      `P₁(${x1}, ${y1}) y P₂(${x2}, ${y2}).`;
  }

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    const dm = randomInt(-2, 2);
    const db = randomInt(-4, 4);
    if (dm === 0 && db === 0) continue;

    // sacamos m y b de la correcta aproximando
    const match = correcta.match(/y = ([-\d]*)x(?: ([+-]) (\d+))?/);
    if (!match) break;

    let mBase = match[1] === "" || match[1] === "+" ? 1 : match[1] === "-" ? -1 : parseInt(match[1], 10);
    let bBase = 0;
    if (match[2] && match[3]) {
      bBase = match[2] === "+" ? parseInt(match[3], 10) : -parseInt(match[3], 10);
    }

    const mCand = mBase + dm;
    const bCand = bBase + db;

    const cand = rectaToString(mCand, bCand);
    if (cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se calcula la pendiente (si hace falta) y luego se usa y = mx + b reemplazando un punto conocido para hallar b.",
  });
};

export default generarEcuacionRecta;
