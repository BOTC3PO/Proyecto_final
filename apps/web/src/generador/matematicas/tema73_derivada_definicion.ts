import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import type { AlgebraCalculoSpec } from "../../../../../archive/visualizadores/types";

const ID_TEMA = 73;
const TITULO = "Derivada por definición";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema73: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.deriv.def_lineal", "calc.deriv.def_cuadratica", "calc.deriv.def_en_punto"] as const);
  const [minCoef, maxCoef] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const lim = Math.max(2, Math.min(8, Math.max(Math.abs(minCoef), Math.abs(maxCoef))));

  if (variante === "calc.deriv.def_lineal") {
    const m = randomInt(-lim, lim) || 1;
    const b = randomInt(-lim, lim);
    const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "calc.deriv.def_lineal",
          fallback: "Usando la definición, ¿cuál es f'(x) para f(x)={{m}}x + {{b}}?",
          variables: { m, b },
        }),
        opciones: buildOpcionesUnicas(m, [m + b, b, m * m]),
        indiceCorrecto: 0,
        explicacion: "La derivada de una función lineal mx+b es m.",
      }),
      visual: {
        kind: "algebra-calculo" as const,
        title: `Derivada de f(x) = ${m}x ${bStr}`,
        description: `f'(x) = ${m} (pendiente constante de la función lineal)`,
        topics: [{
          id: "deriv-lineal",
          label: "Derivada de función lineal",
          steps: [
            `f(x) = ${m}x ${bStr}`,
            `f(x+h) = ${m}(x+h) ${bStr} = ${m}x + ${m}h ${bStr}`,
            `f(x+h) - f(x) = ${m}h`,
            `f'(x) = lim h→0 [${m}h / h] = ${m}`,
          ],
          formula: `f'(x) = ${m}`,
          notes: "La derivada de mx+b es siempre m (la pendiente).",
        }],
      } satisfies AlgebraCalculoSpec,
    };
  }

  if (variante === "calc.deriv.def_cuadratica") {
    const a = randomInt(1, lim);
    const correcta = 2 * a;
    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "calc.deriv.def_cuadratica",
          fallback: "Para f(x)=x^2, calcula f'({{a}}) por definición.",
          variables: { a },
        }),
        opciones: buildOpcionesUnicas(correcta, [a * a, 2, a]),
        indiceCorrecto: 0,
        explicacion: "Para f(x)=x² se cumple f'(x)=2x, por lo tanto f'(a)=2a.",
      }),
      visual: {
        kind: "algebra-calculo" as const,
        title: `Derivada de f(x) = x² en x = ${a}`,
        description: `f'(${a}) = 2·${a} = ${correcta}`,
        topics: [{
          id: "deriv-cuad",
          label: "Derivada de x² por definición",
          steps: [
            `f(x) = x²`,
            `f(x+h) = (x+h)² = x² + 2xh + h²`,
            `[f(x+h) - f(x)] / h = (2xh + h²) / h = 2x + h`,
            `f'(x) = lim h→0 (2x + h) = 2x`,
            `f'(${a}) = 2·${a} = ${correcta}`,
          ],
          formula: `f'(x) = 2x  →  f'(${a}) = ${correcta}`,
        }],
      } satisfies AlgebraCalculoSpec,
    };
  }

  const c = randomInt(1, lim);
  const a = randomInt(1, lim);
  const correcta = 2 * c * a;
  return {
    ...crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.deriv.def_en_punto",
        fallback: "Si f(x)={{c}}x^2, ¿cuál es f'({{a}}) por definición?",
        variables: { c, a },
      }),
      opciones: buildOpcionesUnicas(correcta, [c * a, 2 * a, 2 * c]),
      indiceCorrecto: 0,
      explicacion: "Si f(x)=cx² entonces f'(x)=2cx y evaluando en a: 2ca.",
    }),
    visual: {
      kind: "algebra-calculo" as const,
      title: `Derivada de f(x) = ${c}x² en x = ${a}`,
      description: `f'(${a}) = 2·${c}·${a} = ${correcta}`,
      topics: [{
        id: "deriv-en-punto",
        label: "Derivada de cx² en un punto",
        steps: [
          `f(x) = ${c}x²`,
          `f(x+h) = ${c}(x+h)² = ${c}x² + ${2 * c}xh + ${c}h²`,
          `[f(x+h) - f(x)] / h = ${2 * c}x + ${c}h`,
          `f'(x) = lim h→0 = ${2 * c}x`,
          `f'(${a}) = ${2 * c}·${a} = ${correcta}`,
        ],
        formula: `f'(x) = ${2 * c}x  →  f'(${a}) = ${correcta}`,
      }],
    } satisfies AlgebraCalculoSpec,
  };
};

export default generarTema73;
