// src/generators/math/tema01_operaciones_basicas.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
  pickRandom,
} from "./generic";
import type { Dificultad as DificultadCore } from "../core/types";
import { getOperacionesConFallback, getRangoConFallback, getReglaBoolConFallback } from "./limits";

const ID_TEMA = 1;
const TITULO = "Operaciones básicas";

type OperacionBasica = "+" | "-" | "×" | "÷";

function generarOperacion(dificultad: Dificultad): {
  a: number;
  b: number;
  op: OperacionBasica;
  resultado: number;
} {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const [min, max] = getRangoConFallback(
    ID_TEMA,
    dificultad,
    {
      basico: [1, 20],
      intermedio: [1, 50],
      avanzado: [1, 100],
    },
    "numeros"
  );

  const opsSegunDif: Record<DificultadCore, OperacionBasica[]> = {
    basico: ["+", "-"],
    intermedio: ["+", "-", "×"],
    avanzado: ["+", "-", "×", "÷"],
  };

  const ops = getOperacionesConFallback(ID_TEMA, dificultad, opsSegunDif) as OperacionBasica[];
  const op = pickRandom(ops);
  let a = randomInt(min, max);
  let b = randomInt(min, max);

  if (op === "÷") {
    const permitirDecimales = getReglaBoolConFallback(
      ID_TEMA,
      dificultad,
      "permitirDecimales",
      { basico: false, intermedio: false, avanzado: true }
    );
    if (!permitirDecimales) {
      const resultado = randomInt(1, 12);
      b = randomInt(1, 12);
      a = resultado * b;
      return { a, b, op, resultado };
    }
    const resultado = Number((a / b).toFixed(2));
    return { a, b, op, resultado };
  }

  let resultado: number;
  switch (op) {
    case "+":
      resultado = a + b;
      break;
    case "-": {
      const permitirNegativos = getReglaBoolConFallback(
        ID_TEMA,
        dificultad,
        "permitirNegativos",
        { basico: false, intermedio: true, avanzado: true }
      );
      if (!permitirNegativos && a < b) [a, b] = [b, a];
      resultado = a - b;
      break;
    }
    case "×":
      resultado = a * b;
      break;
  }

  return { a, b, op, resultado };
}

export const generarOperacionesBasicas: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const { a, b, op, resultado } = generarOperacion(dificultad);

  const distractores = new Set<number>();
  while (distractores.size < 3) {
    let delta = randomInt(-10, 10);
    if (delta === 0) continue;
    const candidato = resultado + delta;
    if (candidato !== resultado) {
      distractores.add(candidato);
    }
  }

  const opciones = [resultado, ...Array.from(distractores)];
  const indiceCorrecto = 0;

  const enunciado = `¿Cuánto es ${a} ${op} ${b}?`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion: `Se resuelve la operación ${a} ${op} ${b} = ${resultado}.`,
  });
};

export default generarOperacionesBasicas;
