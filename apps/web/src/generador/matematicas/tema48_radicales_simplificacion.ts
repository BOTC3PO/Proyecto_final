// src/generators/math/tema48_radicales_simplificacion.ts
// Tema lógico 52 – Radicales y simplificación básica
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 48;
const TITULO = "Radicales: simplificación básica (√)";

interface CasoRadical {
  expresion: string;
  resultado: string;
  explicacion: string;
}

function generarCasoRadical(dificultad: Dificultad): CasoRadical {
  // √(k² * n) = k√n
  const k = randomInt(2, dificultad === "facil" ? 5 : 9);
  const nOpciones = [2, 3, 5, 6, 7];
  const n = pickRandom(nOpciones);

  const radicando = k * k * n;

  const expresion = `√${radicando}`;
  const resultado = `${k}√${n}`;
  const explicacion = `Se descompone el radicando como ${radicando} = ${k}² · ${n}. Luego √(${k}² · ${n}) = ${k}√${n}.`;

  return { expresion, resultado, explicacion };
}

export const generarRadicalesSimplificacion: GeneratorFn = (
  dificultad: Dificultad = "media"
) => {
  const caso = generarCasoRadical(dificultad);
  const correcta = caso.resultado;

  const opciones = [correcta, caso.expresion]; // uno de los distractores: "no simplificar"

  const distractores = new Set<string>();
  distractores.add(caso.expresion);

  while (opciones.length < 4) {
    const match = correcta.match(/^(\d+)√(\d+)$/);
    if (!match) break;
    const k = parseInt(match[1], 10);
    const n = parseInt(match[2], 10);

    const candK = k + randomInt(-2, 2);
    const candN = n + randomInt(-3, 3);
    if (candK <= 0 || candN <= 0) continue;

    const cand = `${candK}√${candN}`;
    if (cand !== correcta && !distractores.has(cand)) {
      opciones.push(cand);
      distractores.add(cand);
    }
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Simplifica el siguiente radical (si es posible):\n\n${caso.expresion}`,
    opciones,
    indiceCorrecto: 0,
    explicacion: caso.explicacion,
  });
};

export default generarRadicalesSimplificacion;
