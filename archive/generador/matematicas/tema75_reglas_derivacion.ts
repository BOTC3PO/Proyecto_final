import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import { derivePoly, polyToString, type PolyTerm } from "./temas71_80_helpers";

const ID_TEMA = 75;
const TITULO = "Reglas de derivación";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema75: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.deriv.producto", "calc.deriv.cociente", "calc.deriv.cadena_simple"] as const);
  const [minCoef, maxCoef] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const lim = Math.max(2, Math.min(8, Math.max(Math.abs(minCoef), Math.abs(maxCoef))));

  if (variante === "calc.deriv.producto") {
    const p = randomInt(1, lim);
    const q = randomInt(-lim, lim);
    const r = randomInt(1, lim);
    const s = randomInt(-lim, lim);
    const expanded: PolyTerm[] = [
      { coef: p * r, exp: 2 },
      { coef: p * s + q * r, exp: 1 },
      { coef: q * s, exp: 0 },
    ];
    const correcta = polyToString(derivePoly(expanded));

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.deriv.producto",
        fallback: "Calcula la derivada de f(x)=({{p}}x{{qSign}}{{qAbs}})({{r}}x{{sSign}}{{sAbs}}).",
        variables: {
          p,
          qSign: q >= 0 ? "+" : "-",
          qAbs: Math.abs(q),
          r,
          sSign: s >= 0 ? "+" : "-",
          sAbs: Math.abs(s),
        },
      }),
      opciones: buildOpcionesUnicas(correcta, [polyToString([{ coef: p, exp: 0 }]), polyToString([{ coef: p + r, exp: 0 }]), polyToString([{ coef: 2 * p * r + 1, exp: 1 }, { coef: p * s + q * r, exp: 0 }])]),
      indiceCorrecto: 0,
      explicacion: "Primero se expande el producto y luego se deriva el polinomio resultante.",
    });
  }

  if (variante === "calc.deriv.cociente") {
    const a = randomInt(1, lim);
    const b = randomInt(-lim, lim);
    const c = randomInt(1, lim);
    const d = randomInt(1, lim);
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.deriv.cociente",
        fallback: "¿Qué regla se usa para derivar la función ({{a}}x{{bSign}}{{bAbs}})/({{c}}x+{{d}})?",
        variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b), c, d },
      }),
      opciones: buildOpcionesUnicas("Regla del cociente", ["Regla del producto", "Regla de la cadena", "Regla de la potencia"]),
      indiceCorrecto: 0,
      explicacion: "Cuando aparece un cociente u/v se usa la regla del cociente.",
    });
  }

  const a = randomInt(1, lim);
  const b = randomInt(-lim, lim);
  const n = randomInt(2, 4);
  const correcta = `${n * a}(${a}x${b >= 0 ? "+" : "-"}${Math.abs(b)})^${n - 1}`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.deriv.cadena_simple",
      fallback: "Deriva f(x)=({{a}}x{{bSign}}{{bAbs}})^{{n}}.",
      variables: { a, bSign: b >= 0 ? "+" : "-", bAbs: Math.abs(b), n },
    }),
    opciones: buildOpcionesUnicas(correcta, [`${n}(${a}x${b >= 0 ? "+" : "-"}${Math.abs(b)})^${n}`, `${a}(${a}x${b >= 0 ? "+" : "-"}${Math.abs(b)})^${n - 1}`, `${n}(${a}x${b >= 0 ? "+" : "-"}${Math.abs(b)})^${n - 1}`]),
    indiceCorrecto: 0,
    explicacion: "Regla de cadena: n(ax+b)^(n-1)·a.",
  });
};

export default generarTema75;
