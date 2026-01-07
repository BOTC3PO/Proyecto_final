// src/generators/math/tema37_ecuaciones_fracciones.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 37;
const TITULO = "Ecuaciones con fracciones algebraicas simples";

type TipoEcuacion = "fraccionIgualNumero" | "fraccionIgualFraccion";

export const generarEcuacionesFraccionesAlgebraicas: GeneratorFn = (
  dificultad: Dificultad = "intermedio"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipo: TipoEcuacion =
    dificultadCore === "basico"
      ? "fraccionIgualNumero"
      : pickRandom(["fraccionIgualNumero", "fraccionIgualFraccion"]);

  const rango = dificultadCore === "avanzado" ? 10 : 6;
  const xSol = randomInt(-rango, rango);

  let enunciado: string;
  let correcta = xSol;

  if (tipo === "fraccionIgualNumero") {
    const a = randomInt(1, 5);
    const b = randomInt(-5, 5);
    const k = randomInt(2, 9);

    // (ax + b)/k = N => N = (a xSol + b)/k
    const N = (a * xSol + b) / k;
    // forzamos entero si querés, pero dejamos así
    enunciado =
      `Resuelve la ecuación:\n\n` +
      `(${a}x ${b >= 0 ? "+ " + b : "- " + Math.abs(b)}) / ${k} = ${N}`;
  } else {
    const a1 = randomInt(1, 5);
    const b1 = randomInt(-5, 5);
    const k1 = randomInt(2, 9);

    const a2 = randomInt(1, 5);
    const b2 = randomInt(-5, 5);
    const k2 = randomInt(2, 9);

    // (a1 xSol + b1)/k1 = (a2 xSol + b2)/k2
    const lhs = (a1 * xSol + b1) * k2;
    const rhs = (a2 * xSol + b2) * k1;

    // Ajustamos uno de los términos para que la igualdad sea verdadera
    // Tomamos c2 tal que (a1 xSol + b1)/k1 = (a2 xSol + c2)/k2
    const c2 = (lhs / k1 - a2 * xSol * k2) / k2;
    // redondeo a entero por si acaso:
    const c2int = Math.round(c2);

    enunciado =
      `Resuelve la ecuación:\n\n` +
      `(${a1}x ${b1 >= 0 ? "+ " + b1 : "- " + Math.abs(b1)}) / ${k1} = ` +
      `(${a2}x ${c2int >= 0 ? "+ " + c2int : "- " + Math.abs(c2int)}) / ${k2}`;
  }

  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-5, 5);
    if (delta === 0) continue;
    const cand = correcta + delta;
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
      "Se puede multiplicar en cruz para eliminar denominadores y luego resolver la ecuación lineal resultante.",
  });
};

export default generarEcuacionesFraccionesAlgebraicas;
