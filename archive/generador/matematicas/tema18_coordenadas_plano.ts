import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
} from "./generic";

const ID_TEMA = 18;
const TITULO = "Funciones cuadráticas";

export const generarCoordenadasPlano: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rangoA = d === "basico" ? 3 : d === "intermedio" ? 5 : 7;
  const rangoXv = d === "basico" ? 3 : d === "intermedio" ? 5 : 7;

  const a = randomInt(-rangoA, rangoA) || 1;
  const xv = randomInt(-rangoXv, rangoXv);
  const yv = randomInt(-10, 10);

  const b = -2 * a * xv;
  const c = a * xv * xv + yv;

  const correcta = `(${xv}, ${yv})`;
  const opciones = [
    correcta,
    `(${xv}, ${-yv})`,
    `(${-xv}, ${yv})`,
    `(${xv + 1}, ${yv})`,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Para la función f(x) = ${a}x^2 ${b >= 0 ? "+" : "-"} ${Math.abs(
      b
    )}x ${c >= 0 ? "+" : "-"} ${Math.abs(c)}, ¿cuál es el vértice?`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "En f(x)=ax²+bx+c, la abscisa del vértice es x_v=-b/(2a). Luego se evalúa f(x_v) para hallar y_v.",
  });
};

export default generarCoordenadasPlano;
