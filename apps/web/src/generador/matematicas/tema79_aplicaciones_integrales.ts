import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { formatFraction } from "./temas71_80_helpers";

const ID_TEMA = 79;
const TITULO = "Aplicaciones de integrales";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema79: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const variante = pickRandom(["calc.int.aplic_area", "calc.int.aplic_volumen_discos", "calc.int.aplic_desplazamiento"] as const);
  const [minCoef, maxCoef] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const lim = Math.max(2, Math.min(8, Math.max(Math.abs(minCoef), Math.abs(maxCoef))));

  if (variante === "calc.int.aplic_area") {
    const m = randomInt(1, 4);
    const b0 = randomInt(0, lim);
    const a = 0;
    const b = randomInt(2, 5);
    const correcta = (m / 2) * (b ** 2 - a ** 2) + b0 * (b - a);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.int.aplic_area",
        fallback: "Calcula el área entre la curva f(x)={{m}}x+{{b0}} y el eje x en [{{a}},{{b}}].",
        variables: { m, b0, a, b },
      }),
      opciones: buildOpcionesUnicas(correcta, [((b - a) * ((m * a + b0) + (m * b + b0))) / 2 + 1, (b - a) * (m * a + b0), (b - a) * (m * b + b0)]),
      indiceCorrecto: 0,
      explicacion: "Como f(x)≥0 en el intervalo, el área coincide con la integral definida.",
    });
  }

  if (variante === "calc.int.aplic_volumen_discos") {
    const r = pickRandom([3, 6, 9]);
    const valor = (r ** 3) / 3;
    const correcta = `π·${Number.isInteger(valor) ? valor : formatFraction(r ** 3, 3)}`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.int.aplic_volumen_discos",
        fallback: "Para y=x en [0,{{r}}], calcula el volumen al rotar alrededor del eje x (método de discos).",
        variables: { r },
      }),
      opciones: buildOpcionesUnicas(correcta, [`π·${r ** 2}`, `${formatFraction(4 * r ** 3, 3)}π`, `π·${r ** 3}`]),
      indiceCorrecto: 0,
      explicacion: "V=π∫_0^R x²dx=πR³/3.",
    });
  }

  const a = randomInt(1, 4);
  const b = randomInt(-3, 5);
  const t1 = 0;
  const t2 = randomInt(2, 5);
  const correcta = (a / 2) * (t2 ** 2 - t1 ** 2) + b * (t2 - t1);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.int.aplic_desplazamiento",
      fallback: "Si v(t)={{a}}t {{bSign}} {{bAbs}} en [{{t1}},{{t2}}], calcula el desplazamiento.",
      variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b), t1, t2 },
    }),
    opciones: buildOpcionesUnicas(correcta, [a * (t2 - t1), (t2 - t1) * (a * t2 + b), (t2 - t1) * (a * t1 + b)]),
    indiceCorrecto: 0,
    explicacion: "El desplazamiento neto es la integral de la velocidad en el intervalo.",
  });
};

export default generarTema79;
