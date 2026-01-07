// src/generators/math/tema20_series_simples.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 20;
const TITULO = "Series simples (sumatoria de términos)";

function generarSerieAritmetica(
  cantidad: number,
  inicio: number,
  diferencia: number
): number[] {
  const res: number[] = [];
  for (let i = 0; i < cantidad; i++) {
    res.push(inicio + i * diferencia);
  }
  return res;
}

export const generarSeriesSimples: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  // De momento usamos solo series aritméticas con pocos términos
  const dificultadCore = normalizarDificultadCore(dificultad);
  const cantidad =
    dificultadCore === "basico"
      ? randomInt(3, 5)
      : dificultadCore === "intermedio"
      ? randomInt(4, 6)
      : randomInt(5, 7);

  const inicio = randomInt(1, 15);
  const diferencia = pickRandom([1, 2, 3, 5]);

  const serie = generarSerieAritmetica(cantidad, inicio, diferencia);
  const suma = serie.reduce((acc, n) => acc + n, 0);

  const opciones = [suma];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-cantidad * 3, cantidad * 3);
    if (delta === 0) continue;
    const cand = suma + delta;
    if (cand > 0 && cand !== suma) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  const enunciado =
    `Calcula la suma de los siguientes términos de una serie aritmética:\n\n` +
    serie.join(" + ");

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Podés sumar término a término o usar la fórmula de suma de una progresión aritmética (cuando la conozcan).",
  });
};

export default generarSeriesSimples;
