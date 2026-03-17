import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { buildOpcionesUnicas, clampInt, construirEnunciado } from "./temas56_85_helpers";
import type { FuncionesGraficoSpec } from "../../../../../archive/visualizadores/types";

const ID_TEMA = 60;
const TITULO = "Funciones exponenciales";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const generarTema60: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["exp.func.evaluar", "exp.func.crecimiento", "exp.func.comparar"] as const);

  if (variante === "exp.func.evaluar") {
    const [minBaseRaw, maxBaseRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "base");
    const minBase = clampInt(minBaseRaw, 2, 9);
    const maxBase = clampInt(maxBaseRaw, 2, dificultadCore === "basico" ? 5 : 9);
    const base = randomInt(minBase, Math.max(minBase, maxBase));
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const expMax = clampInt(maxExpRaw, 3, dificultadCore === "basico" ? 4 : 6);
    const n = randomInt(clampInt(minExpRaw, 2, expMax), expMax);
    const correcta = base ** n;

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "exp.func.evaluar",
          fallback: "Calcula {{base}}^{{n}}.",
          variables: { base, n },
        }),
        opciones: buildOpcionesUnicas(correcta, [base ** (n - 1), base ** (n + 1), base * n], [correcta + 1, correcta + base]),
        indiceCorrecto: 0,
        explicacion: "Para evaluar una potencia, multiplicamos la base por sí misma tantas veces como indique el exponente.",
      }),
      visual: {
        kind: "funciones-grafico" as const,
        title: `f(x) = ${base}^x`,
        description: `Función exponencial con base ${base}. Se evalúa en x = ${n}.`,
        functions: [{ id: "exp", expression: `${base}^x`, color: "#10B981", notes: `f(${n}) = ${correcta}` }],
        variables: [{ symbol: "x", description: "exponente", value: n }],
      } satisfies FuncionesGraficoSpec,
    };
  }

  if (variante === "exp.func.crecimiento") {
    const [minPRaw, maxPRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coeficiente");
    const p0 = clampInt(randomInt(minPRaw, maxPRaw), 1, dificultadCore === "basico" ? 12 : 24);
    const [minExpRaw, maxExpRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exponente");
    const [minTimeRaw, maxTimeRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "tiempo");
    const minFactor = clampInt(minExpRaw, 2, 5);
    const maxFactor = clampInt(maxExpRaw, 2, dificultadCore === "avanzado" ? 5 : 4);
    const b = randomInt(minFactor, Math.max(minFactor, maxFactor));
    const tMax = clampInt(maxTimeRaw, 2, dificultadCore === "basico" ? 3 : 5);
    const t = randomInt(clampInt(minTimeRaw, 2, tMax), tMax);
    const correcta = p0 * b ** t;

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "exp.func.crecimiento",
          fallback: "Si P0={{p0}} y crece por factor {{b}} cada periodo, ¿cuál es su valor tras {{t}} periodos?",
          variables: { p0, b, t },
        }),
        opciones: buildOpcionesUnicas(correcta, [p0 * b * t, p0 * (b * t), p0 * b ** (t - 1)], [correcta + p0, correcta + b]),
        indiceCorrecto: 0,
        explicacion: "En crecimiento exponencial por factor b cada periodo: P(t)=P0·b^t.",
      }),
      visual: {
        kind: "funciones-grafico" as const,
        title: `P(t) = ${p0} × ${b}^t`,
        description: `Crecimiento exponencial: P0=${p0}, factor=${b}, t=${t} periodos.`,
        functions: [{ id: "crec", expression: `${p0}*${b}^t`, color: "#6366F1", notes: `P(${t}) = ${correcta}` }],
        variables: [
          { symbol: "P0", description: "valor inicial", value: p0 },
          { symbol: "b", description: "factor de crecimiento", value: b },
          { symbol: "t", description: "número de periodos", value: t },
        ],
      } satisfies FuncionesGraficoSpec,
    };
  }

  const b = randomInt(2, dificultadCore === "basico" ? 5 : 8);
  const n1 = randomInt(2, dificultadCore === "basico" ? 3 : 5);
  const n2 = randomInt(n1 + 1, n1 + (dificultadCore === "avanzado" ? 3 : 2));
  const correcta = `${b}^${n2}`;

  return {
    ...crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "exp.func.comparar",
        fallback: "¿Cuál es mayor: {{b}}^{{n1}} o {{b}}^{{n2}}?",
        variables: { b, n1, n2 },
      }),
      opciones: buildOpcionesUnicas(correcta, [`${b}^${n1}`, "Son iguales", "Depende de b"]),
      indiceCorrecto: 0,
      explicacion: "Con base mayor que 1, la potencia con exponente más grande siempre es mayor.",
    }),
    visual: {
      kind: "funciones-grafico" as const,
      title: `f(x) = ${b}^x (comparación de potencias)`,
      description: `Comparar ${b}^${n1} vs ${b}^${n2} con base ${b} > 1.`,
      functions: [{ id: "exp", expression: `${b}^x`, color: "#F59E0B", notes: `base ${b} > 1 → función creciente` }],
      variables: [
        { symbol: "n₁", description: "primer exponente", value: n1 },
        { symbol: "n₂", description: "segundo exponente", value: n2 },
      ],
    } satisfies FuncionesGraficoSpec,
  };
};

export default generarTema60;
