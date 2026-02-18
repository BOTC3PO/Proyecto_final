import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, clampInt, construirEnunciado } from "./temas56_85_helpers";

const ID_TEMA = 63;
const TITULO = "Ecuaciones logarítmicas";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const generarTema63: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante = pickRandom(["log.eq.basica", "log.eq.igualdad", "log.eq.propiedad"] as const);

  if (variante === "log.eq.basica") {
    const [minBaseRaw, maxBaseRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "base");
    const base = randomInt(clampInt(minBaseRaw, 2, 5), clampInt(Math.max(minBaseRaw, maxBaseRaw), 2, 5));
    const n = randomInt(1, dificultadCore === "basico" ? 4 : 5);
    const x = base ** n;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "log.eq.basica",
        fallback: "Resuelve log_{{base}}(x)={{n}} para x.",
        variables: { base, n },
      }),
      opciones: buildOpcionesUnicas(x, [n, base * n, base ** (n - 1)]),
      indiceCorrecto: 0,
      explicacion: "Si log_b(x)=n, entonces x=b^n.",
    });
  }

  if (variante === "log.eq.igualdad") {
    const base = randomInt(2, 5);
    const n = randomInt(1, dificultadCore === "basico" ? 4 : 5);
    const y = base ** n;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "log.eq.igualdad",
        fallback: "Si log_{{base}}(x)=log_{{base}}({{y}}), ¿x=?",
        variables: { base, y },
      }),
      opciones: buildOpcionesUnicas(y, [`1/${y}`, y + base, y - base]),
      indiceCorrecto: 0,
      explicacion: "Con misma base y argumentos válidos, la igualdad de logaritmos implica igualdad de argumentos.",
    });
  }

  const base = randomInt(2, 5);
  const a = randomInt(1, dificultadCore === "basico" ? 3 : 4);
  const c = randomInt(1, dificultadCore === "avanzado" ? 5 : 4);
  const x = base ** a;
  const y = base ** c;
  const producto = x * y;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "log.eq.propiedad",
      fallback: "Si x={{x}} e y={{y}}, calcula x·y.",
      variables: { x, y },
    }),
    opciones: buildOpcionesUnicas(producto, [base ** (a - c), base ** (a * c), a + c]),
    indiceCorrecto: 0,
    explicacion: "Al multiplicar potencias de igual base se suman exponentes: b^a·b^c=b^(a+c).",
  });
};

export default generarTema63;
