import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
} from "./generic";

const ID_TEMA = 25;
const TITULO = "Vectores";

export const generarMultiplicacionMonomiosPolinomios: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 6 : d === "intermedio" ? 9 : 12;

  const x = randomInt(-rango, rango) || 3;
  const y = randomInt(-rango, rango) || 4;
  const modulo = Math.sqrt(x * x + y * y);

  const correcta = modulo.toFixed(2);
  const opciones = [
    correcta,
    Math.abs(x + y).toFixed(2),
    Math.sqrt(Math.abs(x * y)).toFixed(2),
    (modulo + 1).toFixed(2),
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula el módulo del vector v = (${x}, ${y}).`,
    opciones,
    indiceCorrecto: 0,
    explicacion: "El módulo de (x,y) es ||v|| = √(x²+y²).",
  });
};

export default generarMultiplicacionMonomiosPolinomios;
