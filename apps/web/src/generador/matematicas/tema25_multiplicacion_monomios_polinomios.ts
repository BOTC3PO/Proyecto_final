// src/generators/math/tema25_multiplicacion_monomios_polinomios.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 25;
const TITULO = "Multiplicación de monomios y polinomios simples";

type TipoProblema = "monomios" | "monomioPorBinomio";

interface Monomio {
  coef: number;
  exponente: number; // x^exponente
}

function monomioToString(m: Monomio): string {
  const { coef, exponente } = m;
  if (exponente === 0) return `${coef}`;
  if (coef === 1) return exponente === 1 ? "x" : `x^${exponente}`;
  if (coef === -1) return exponente === 1 ? "-x" : `-x^${exponente}`;
  return exponente === 1 ? `${coef}x` : `${coef}x^${exponente}`;
}

function multiplicarMonomios(m1: Monomio, m2: Monomio): Monomio {
  return {
    coef: m1.coef * m2.coef,
    exponente: m1.exponente + m2.exponente,
  };
}

function generarMonomio(dificultad: Dificultad): Monomio {
  const rango =
    dificultad === "facil"
      ? 5
      : dificultad === "media"
      ? 8
      : 10;

  const coef = randomInt(-rango, rango) || 1;
  const exponente =
    dificultad === "facil"
      ? randomInt(0, 2)
      : randomInt(0, 3);

  return { coef, exponente };
}

export const generarMultiplicacionMonomiosPolinomios: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoProblema =
    dificultad === "facil"
      ? "monomios"
      : pickRandom(["monomios", "monomioPorBinomio"]);

  if (tipo === "monomios") {
    const m1 = generarMonomio(dificultad);
    const m2 = generarMonomio(dificultad);
    const producto = multiplicarMonomios(m1, m2);
    const correcta = monomioToString(producto);

    const opciones = [correcta];
    const distractores = new Set<string>();

    while (distractores.size < 3) {
      const deltaCoef = randomInt(-3, 3);
      const deltaExp = randomInt(-1, 1);

      const cand: Monomio = {
        coef: producto.coef + deltaCoef,
        exponente: Math.max(0, producto.exponente + deltaExp),
      };

      const s = monomioToString(cand);
      if (s !== correcta) distractores.add(s);
    }

    opciones.push(...Array.from(distractores));

    const enunciado = `Multiplica los siguientes monomios en x:\n\n(${monomioToString(
      m1
    )}) · (${monomioToString(m2)})`;

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado,
      opciones,
      indiceCorrecto: 0,
      explicacion:
        "Para multiplicar monomios se multiplican los coeficientes y se suman los exponentes de la misma variable.",
    });
  }

  // monomio por binomio: a*x^n (bx + c)
  const m = generarMonomio(dificultad);
  const b = randomInt(-5, 5) || 1;
  const c = randomInt(-10, 10);

  const term1: Monomio = {
    coef: m.coef * b,
    exponente: m.exponente + 1,
  };

  const term2: Monomio = {
    coef: m.coef * c,
    exponente: m.exponente,
  };

  const correcta = `${monomioToString(term1)} + ${monomioToString(term2)}`.replace(
    "+ -",
    "- "
  );

  const opciones = [correcta];
  const distractores = new Set<string>();

  while (distractores.size < 3) {
    const delta1 = randomInt(-3, 3);
    const delta2 = randomInt(-3, 3);

    const cand1: Monomio = {
      ...term1,
      coef: term1.coef + delta1,
    };
    const cand2: Monomio = {
      ...term2,
      coef: term2.coef + delta2,
    };

    let s = `${monomioToString(cand1)} + ${monomioToString(cand2)}`;
    s = s.replace("+ -", "- ");
    if (s !== correcta) distractores.add(s);
  }

  opciones.push(...Array.from(distractores));

  const mStr = monomioToString(m);
  const binomioStr = `${b === 1 ? "" : b === -1 ? "-" : b}x ${
    c >= 0 ? "+ " + c : "- " + Math.abs(c)
  }`;

  const enunciado = `Desarrolla el producto entre el monomio y el binomio:\n\n(${mStr}) · (${binomioStr})`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se aplica la propiedad distributiva: a(x + y) = ax + ay. Se multiplica el monomio por cada término del binomio.",
  });
};

export default generarMultiplicacionMonomiosPolinomios;
