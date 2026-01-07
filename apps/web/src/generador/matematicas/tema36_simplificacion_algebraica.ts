// src/generators/math/tema36_simplificacion_algebraica.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 36;
const TITULO = "Simplificación de expresiones algebraicas";

interface ExpresionCaso {
  expresion: string;
  resultado: string;
  explicacion: string;
}

function generarCaso(dificultad: Dificultad): ExpresionCaso {
  const k1 = randomInt(1, 5);
  const k2 = randomInt(1, 5);
  const k3 = randomInt(1, 5);

  const casos: ExpresionCaso[] = [
    {
      expresion: `${k1}x + ${k2}x`,
      resultado: `${k1 + k2}x`,
      explicacion: "Se suman coeficientes de términos semejantes: (k₁ + k₂)x.",
    },
    {
      expresion: `${k1}x - ${k2}x + ${k3}x`,
      resultado: `${k1 - k2 + k3}x`,
      explicacion:
        "Se suman y restan los coeficientes de x: k₁ - k₂ + k₃.",
    },
    {
      expresion: `${k1}(x + ${k2}) + ${k3}(x + ${k2})`,
      resultado: `${k1 + k3}x + ${(k1 + k3) * k2}`,
      explicacion:
        "Se saca factor común (x + c): (k₁ + k₃)(x + c), luego se desarrolla.",
    },
    {
      expresion: `${k1}(2x + 1) - ${k2}(x - 3)`,
      resultado: `${2 * k1 - k2}x + ${k1 + 3 * k2}`,
      explicacion:
        "Se aplica distributiva en ambos productos y luego se agrupan términos semejantes.",
    },
  ];

  return pickRandom(casos);
}

export const generarSimplificacionAlgebraica: GeneratorFn = (
  dificultad: Dificultad = "intermedio"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const rangoDelta = dificultadCore === "basico" ? 2 : 3;
  const caso = generarCaso(dificultad);
  const correcta = caso.resultado;

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    const delta = randomInt(-rangoDelta, rangoDelta);
    const deltaConst = randomInt(-5, 5);
    const match = correcta.match(/(-?\d+)x \+ (-?\d+)/);
    if (!match) break;
    const coef = parseInt(match[1], 10);
    const cte = parseInt(match[2], 10);

    const cand = `${coef + delta}x + ${cte + deltaConst}`;
    if (cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      "Simplifica la siguiente expresión algebraica:\n\n" + caso.expresion,
    opciones,
    indiceCorrecto: 0,
    explicacion: caso.explicacion,
  });
};

export default generarSimplificacionAlgebraica;
