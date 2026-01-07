// src/generators/math/tema05_multiplos_divisores.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  rangoPorDificultadCore,
  randomInt,
  obtenerDivisores,
} from "./generic";

const ID_TEMA = 5;
const TITULO = "Múltiplos y divisores";

type TipoProblema = "multiplo" | "divisor";

export const generarMultiplosYDivisores: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const tipo: TipoProblema = Math.random() < 0.5 ? "multiplo" : "divisor";

  const [min, max] = rangoPorDificultadCore(dificultad, {
    basico: [2, 20],
    intermedio: [3, 40],
    avanzado: [4, 60],
  });

  const base = randomInt(min, max);

  if (tipo === "multiplo") {
    // Un múltiplo correcto y 3 que no lo son
    const kCorrecto = randomInt(2, 10);
    const correcto = base * kCorrecto;

    const distractores = new Set<number>();
    while (distractores.size < 3) {
      const n = randomInt(base + 1, base * 12);
      if (n % base !== 0) {
        distractores.add(n);
      }
    }

    const opciones = [correcto, ...Array.from(distractores)];
    const enunciado = `¿Cuál de los siguientes números es múltiplo de ${base}?`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion: `Un número es múltiplo de ${base} si se obtiene multiplicando ${base} por un número entero.`,
    });
  } else {
    // DIVISOR: un divisor correcto y 3 que no lo son
    const n = randomInt(base * 2, base * 20);
    const divisores = obtenerDivisores(n).filter((d) => d !== n); // evitamos el propio n si querés

    const divisorCorrecto =
      divisores.length > 0 ? divisores[randomInt(0, divisores.length - 1)] : 1;

    const distractores = new Set<number>();
    while (distractores.size < 3) {
      const candidato = randomInt(2, n - 1);
      if (n % candidato !== 0) {
        distractores.add(candidato);
      }
    }

    const opciones = [divisorCorrecto, ...Array.from(distractores)];
    const enunciado = `¿Cuál de los siguientes números es divisor de ${n}?`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion: `Un número es divisor de ${n} si al dividir ${n} por ese número el resto es 0.`,
    });
  }
};

export default generarMultiplosYDivisores;
