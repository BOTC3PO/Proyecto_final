import { type Dificultad, type GeneratorFn, crearQuizBase, pickRandom, randomInt } from "./generic";
import { getRangoConFallback } from "./limits";
import { buildOpcionesUnicas, construirEnunciado } from "./temas56_85_helpers";
import { preloadGeneradoresTema } from "../generadores_api";
import { derivePoly, polyToString, type PolyTerm } from "./temas71_80_helpers";

const ID_TEMA = 74;
const TITULO = "Derivadas básicas";

type DificultadCore = "basico" | "intermedio" | "avanzado";
const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 6],
  intermedio: [1, 10],
  avanzado: [1, 15],
};

const generarTema74: GeneratorFn = (dificultad: Dificultad = "basico") => {
  preloadGeneradoresTema(ID_TEMA).catch(() => {});
  const variante = pickRandom(["calc.deriv.potencia", "calc.deriv.constante", "calc.deriv.polinomio"] as const);
  const [minCoef, maxCoef] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "coef");
  const [minExp, maxExp] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "exp");
  const limCoef = Math.max(2, Math.min(9, Math.max(Math.abs(minCoef), Math.abs(maxCoef))));
  const limExp = Math.max(2, Math.min(5, Math.max(Math.abs(minExp), Math.abs(maxExp))));

  if (variante === "calc.deriv.potencia") {
    const c = randomInt(1, limCoef);
    const n = randomInt(2, limExp);
    const correcta = polyToString([{ coef: c * n, exp: n - 1 }]);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.deriv.potencia",
        fallback: "Calcula d/dx ({{c}}x^{{n}}).",
        variables: { c, n },
      }),
      opciones: buildOpcionesUnicas(correcta, [polyToString([{ coef: c + n, exp: n }]), polyToString([{ coef: c, exp: n - 1 }]), polyToString([{ coef: c * n, exp: n }])]),
      indiceCorrecto: 0,
      explicacion: "Regla de la potencia: d/dx (cx^n)=cnx^(n-1).",
    });
  }

  if (variante === "calc.deriv.constante") {
    const c = randomInt(1, limCoef);
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "calc.deriv.constante",
        fallback: "Calcula d/dx ({{c}}).",
        variables: { c },
      }),
      opciones: buildOpcionesUnicas(0, [1, c, "x"]),
      indiceCorrecto: 0,
      explicacion: "La derivada de una constante es 0.",
    });
  }

  const a = randomInt(1, limCoef);
  const b = randomInt(-limCoef, limCoef);
  const c = randomInt(-limCoef, limCoef);
  const terms: PolyTerm[] = [{ coef: a, exp: 2 }, { coef: b, exp: 1 }, { coef: c, exp: 0 }];
  const correcta = polyToString(derivePoly(terms));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado({
      idTema: ID_TEMA,
      dificultad,
      claveSubtipo: "calc.deriv.polinomio",
      fallback: "Si f(x)={{fx}}, ¿cuál es f'(x)?",
      variables: { fx: polyToString(terms) },
    }),
    opciones: buildOpcionesUnicas(correcta, [polyToString([{ coef: a, exp: 2 }, { coef: b, exp: 0 }]), polyToString([{ coef: 2 * a, exp: 1 }, { coef: c, exp: 0 }]), polyToString([{ coef: 2 * b, exp: 1 }, { coef: a, exp: 0 }])]),
    indiceCorrecto: 0,
    explicacion: "Derivando término a término: (ax²+bx+c)'=2ax+b.",
  });
};

export default generarTema74;
