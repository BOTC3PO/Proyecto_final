// src/generators/math/tema44_intervalos_soluciones.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 44;
const TITULO = "Intervalos y conjuntos de solución";

type Tipo = "xMayor" | "xMenor" | "entre";

export const generarIntervalosSoluciones: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const tipo: Tipo = pickRandom(["xMayor", "xMenor", "entre"]);

  let enunciado: string;
  let correcta: string;

  const a = randomInt(-5, 0);
  const b = randomInt(1, 10);

  if (tipo === "xMayor") {
    // x > b o x ≥ b
    const cerrado = Math.random() < 0.5;
    enunciado = `Escribe en notación de intervalos el conjunto solución de la inecuación:\n\nx ${
      cerrado ? "≥" : ">" 
    } ${b}`;
    correcta = cerrado ? `[${b}, +∞)` : `(${b}, +∞)`;
  } else if (tipo === "xMenor") {
    const cerrado = Math.random() < 0.5;
    enunciado = `Escribe en notación de intervalos el conjunto solución de la inecuación:\n\nx ${
      cerrado ? "≤" : "<"
    } ${a}`;
    correcta = cerrado ? `(-∞, ${a}]` : `(-∞, ${a})`;
  } else {
    // a < x ≤ b
    enunciado =
      `Escribe en notación de intervalos el conjunto solución de la inecuación:\n\n` +
      `${a} < x ≤ ${b}`;
    correcta = `(${a}, ${b}]`;
  }

  const opciones = [correcta];

  const distractores = new Set<string>();
  while (distractores.size < 3) {
    // Variantes típicas: cambiar paréntesis/corchetes o invertir extremos
    const variantes = [
      `(${a}, ${b})`,
      `[${a}, ${b}]`,
      `(${b}, ${a})`,
      `(-∞, ${b})`,
      `(${a}, +∞)`,
    ];
    const cand = pickRandom(variantes);
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
      "Se usan paréntesis cuando el extremo no pertenece al conjunto y corchetes cuando sí pertenece. El símbolo +∞ o -∞ siempre usa paréntesis.",
  });
};

export default generarIntervalosSoluciones;
