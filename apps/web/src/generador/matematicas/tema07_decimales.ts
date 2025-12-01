// src/generators/math/tema07_decimales.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 7;
const TITULO = "Decimales";

function generarDecimal(dificultad: Dificultad): number {
  const max =
    dificultad === "facil" ? 100 : dificultad === "media" ? 500 : 1000;
  const decimales = dificultad === "dificil" ? 3 : 2;
  const factor = 10 ** decimales;
  return randomInt(1, max * factor) / factor;
}

// Decimal a fracción en forma a/b
function decimalToFraction(n: number): { num: number; den: number } {
  const s = n.toString();
  if (!s.includes(".")) return { num: n, den: 1 };
  const dec = s.split(".")[1];
  const den = 10 ** dec.length;
  const num = Math.round(n * den);
  return { num, den };
}

export const generarDecimales: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  // Modos: convertir a fracción, comparar, redondear
  const modos = ["frac", "comparar", "redondear"] as const;
  const modo = pickRandom(modos);

  if (modo === "frac") {
    const n = generarDecimal(dificultad);
    const { num, den } = decimalToFraction(n);

    const correcta = `${num}/${den}`;
    const opciones = [correcta];

    const distractores = new Set<string>();
    while (distractores.size < 3) {
      const delta = randomInt(-5, 5);
      const cand = `${num + delta}/${den}`;
      if (cand !== correcta) distractores.add(cand);
    }

    opciones.push(...Array.from(distractores));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `Escribe el siguiente número decimal como fracción:\n\n${n}`,
      opciones,
      indiceCorrecto: 0,
      explicacion: `Se cuenta la cantidad de cifras decimales y se coloca como denominador una potencia de 10.`,
    });
  }

  if (modo === "comparar") {
    const a = generarDecimal(dificultad);
    const b = generarDecimal(dificultad);

    let correcta: string;
    if (Math.abs(a - b) < 1e-9) {
      correcta = `${a} = ${b}`;
    } else if (a > b) {
      correcta = `${a} > ${b}`;
    } else {
      correcta = `${a} < ${b}`;
    }

    const opciones = [
      `${a} > ${b}`,
      `${a} < ${b}`,
      `${a} = ${b}`,
      `${Math.max(a, b)} > ${Math.min(a, b)}`, // suele repetir alguna pero no es problema grave
    ];

    const indiceCorrecto = opciones.indexOf(correcta);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: `Elige la comparación correcta entre los siguientes números decimales:`,
      opciones,
      indiceCorrecto,
      explicacion:
        "Para comparar decimales podés alinear las cifras o convertirlos a fracción.",
    });
  }

  // redondear
  const n = generarDecimal(dificultad);
  const lugares =
    dificultad === "facil" ? 1 : dificultad === "media" ? 2 : 3;
  const factor = 10 ** lugares;
  const redondeado = Math.round(n * factor) / factor;

  const opciones = [redondeado.toFixed(lugares)];

  const distractores = new Set<string>();
  while (distractores.size < 3) {
    const delta = randomInt(-3, 3) / factor;
    if (delta === 0) continue;
    const cand = (redondeado + delta).toFixed(lugares);
    if (cand !== redondeado.toFixed(lugares)) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Redondea el número ${n} a ${lugares} ${
      lugares === 1 ? "decimal" : "decimales"
    }.`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se observa la cifra siguiente al lugar pedido: si es 5 o más, se suma 1; si es menor que 5, se deja igual.",
  });
};

export default generarDecimales;
