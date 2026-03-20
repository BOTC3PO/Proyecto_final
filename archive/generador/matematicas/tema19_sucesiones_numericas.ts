import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
} from "./generic";

const ID_TEMA = 19;
const TITULO = "Polinomios";

interface Poli {
  a: number;
  b: number;
  c: number;
  d: number;
}

function toString(p: Poli): string {
  const partes = [`${p.a}x^3`, `${p.b >= 0 ? "+" : "-"} ${Math.abs(p.b)}x^2`, `${p.c >= 0 ? "+" : "-"} ${Math.abs(p.c)}x`, `${p.d >= 0 ? "+" : "-"} ${Math.abs(p.d)}`];
  return partes.join(" ");
}

export const generarSucesionesNumericas: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 4 : d === "intermedio" ? 7 : 10;

  const p1: Poli = { a: randomInt(-rango, rango) || 1, b: randomInt(-rango, rango), c: randomInt(-rango, rango), d: randomInt(-rango, rango) };
  const p2: Poli = { a: randomInt(-rango, rango) || -1, b: randomInt(-rango, rango), c: randomInt(-rango, rango), d: randomInt(-rango, rango) };

  const suma: Poli = {
    a: p1.a + p2.a,
    b: p1.b + p2.b,
    c: p1.c + p2.c,
    d: p1.d + p2.d,
  };

  const correcta = toString(suma);
  const opciones = [
    correcta,
    toString({ ...suma, b: suma.b + 1 }),
    toString({ ...suma, c: suma.c - 1 }),
    toString({ ...suma, d: suma.d + 2 }),
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Suma los polinomios:

P(x) = ${toString(p1)}
Q(x) = ${toString(p2)}`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Para sumar polinomios se agrupan términos de igual grado y se suman sus coeficientes.",
  });
};

export default generarSucesionesNumericas;
