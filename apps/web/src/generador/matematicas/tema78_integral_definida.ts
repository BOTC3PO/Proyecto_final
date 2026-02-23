import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import type { AlgebraCalculoSpec } from "../../visualizadores/types";

const ID_TEMA = 78;
const TITULO = "Integral definida";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const integrarPotencia = (n: number, a: number, b: number): number => (b ** (n + 1) - a ** (n + 1)) / (n + 1);

const generarTema78: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.int.def_potencia", "calc.int.def_area_simple", "calc.int.def_promedio"] as const);
  const [minCoef, maxCoef] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const lim = Math.max(2, Math.min(8, Math.max(Math.abs(minCoef), Math.abs(maxCoef))));

  if (variante === "calc.int.def_potencia") {
    const n = pickRandom([1, 2, 3]);
    const a = randomInt(0, 2);
    const b = randomInt(a + 1, a + 4);
    const correcta = integrarPotencia(n, a, b);

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "calc.int.def_potencia",
          fallback: "Calcula ∫_{{a}}^{{b}} x^{{n}} dx.",
          variables: { a, b, n },
        }),
        opciones: buildOpcionesUnicas(correcta, [b ** n - a ** n, (b - a) ** (n + 1), b ** (n + 1) - a ** (n + 1)]),
        indiceCorrecto: 0,
        explicacion: "Se usa la primitiva x^(n+1)/(n+1) y se evalúa entre a y b.",
      }),
      visual: {
        kind: "algebra-calculo" as const,
        title: `∫₍${a}₎^${b} x^${n} dx`,
        description: `Regla de la potencia: ∫x^n dx = x^(n+1)/(n+1) + C`,
        topics: [{
          id: "int-potencia",
          label: "Integral de potencia",
          steps: [
            `∫ x^${n} dx = x^${n + 1} / ${n + 1} + C`,
            `Evaluar en [${a}, ${b}]:`,
            `[${b}^${n + 1} / ${n + 1}] - [${a}^${n + 1} / ${n + 1}]`,
            `= ${b ** (n + 1)} / ${n + 1} - ${a ** (n + 1)} / ${n + 1}`,
            `= ${correcta}`,
          ],
          formula: `∫₍${a}₎^${b} x^${n} dx = ${correcta}`,
        }],
      } satisfies AlgebraCalculoSpec,
    };
  }

  if (variante === "calc.int.def_area_simple") {
    const m = randomInt(1, 4);
    const c = randomInt(0, lim);
    const a = randomInt(0, 2);
    const b = randomInt(a + 1, a + 4);
    const correcta = (m / 2) * (b * b - a * a) + c * (b - a);
    const cStr = c > 0 ? ` + ${c}` : "";

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "calc.int.def_area_simple",
          fallback: "Halla el área bajo f(x)={{m}}x+{{c}} en [{{a}},{{b}}].",
          variables: { m, c, a, b },
        }),
        opciones: buildOpcionesUnicas(correcta, [((b - a) * (m * b + c + m * a + c)) / 2 + 1, (b - a) * (m * b + c), (b - a) * (m * a + c)]),
        indiceCorrecto: 0,
        explicacion: "El área se obtiene integrando la recta en el intervalo.",
      }),
      visual: {
        kind: "algebra-calculo" as const,
        title: `Área bajo f(x) = ${m}x${cStr} en [${a}, ${b}]`,
        description: `∫₍${a}₎^${b} (${m}x${cStr}) dx = ${correcta}`,
        topics: [{
          id: "int-area",
          label: "Área bajo una recta",
          steps: [
            `f(x) = ${m}x${cStr}`,
            `∫ f(x) dx = ${m}x²/2${cStr ? ` + ${c}x` : ""} + C`,
            `Evaluar en [${a}, ${b}]:`,
            `= [${m}·${b}²/2${c > 0 ? ` + ${c}·${b}` : ""}] - [${m}·${a}²/2${c > 0 ? ` + ${c}·${a}` : ""}]`,
            `= ${correcta}`,
          ],
          formula: `∫₍${a}₎^${b} (${m}x${cStr}) dx = ${correcta}`,
        }],
      } satisfies AlgebraCalculoSpec,
    };
  }

  const a = randomInt(0, 3);
  const b = randomInt(a + 1, a + 5);
  const m = randomInt(1, 4);
  const c = randomInt(0, 6);
  const integral = (m / 2) * (b * b - a * a) + c * (b - a);
  const correcta = integral / (b - a);
  const promedioExtremos = ((m * a + c) + (m * b + c)) / 2;
  const cStr = c > 0 ? ` + ${c}` : "";

  return {
    ...crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.int.def_promedio",
        fallback: "Calcula el valor promedio de f(x)={{m}}x+{{c}} en [{{a}},{{b}}].",
        variables: { m, c, a, b },
      }),
      opciones: buildOpcionesUnicas(correcta, [integral, integral / (a + b), promedioExtremos + 1]),
      indiceCorrecto: 0,
      explicacion: "f_prom=(1/(b-a))·∫[a,b]f(x)dx.",
    }),
    visual: {
      kind: "algebra-calculo" as const,
      title: `Valor promedio de f(x) = ${m}x${cStr} en [${a}, ${b}]`,
      description: `f_prom = (1/(b-a)) · ∫₍${a}₎^${b} f(x) dx = ${correcta}`,
      topics: [{
        id: "int-promedio",
        label: "Valor promedio de una función",
        steps: [
          `f(x) = ${m}x${cStr}`,
          `f_prom = 1/(${b}-${a}) · ∫₍${a}₎^${b} f(x) dx`,
          `∫₍${a}₎^${b} f(x) dx = ${integral}`,
          `f_prom = ${integral} / ${b - a} = ${correcta}`,
        ],
        formula: `f_prom = (1/(b-a)) · ∫[a,b] f dx = ${correcta}`,
        notes: "El valor promedio generaliza el promedio aritmético a funciones continuas.",
      }],
    } satisfies AlgebraCalculoSpec,
  };
};

export default generarTema78;
