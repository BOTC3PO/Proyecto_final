import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 21;
const TITULO = "Exponenciales";

export const generarLenguajeAlgebraico: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const base = pickRandom(d === "basico" ? [2, 3] : d === "intermedio" ? [2, 3, 4] : [2, 3, 4, 5]);
  const exponente = d === "basico" ? randomInt(2, 4) : d === "intermedio" ? randomInt(2, 5) : randomInt(2, 6);
  const resultado = base ** exponente;

  const opciones = [
    resultado,
    resultado + base,
    resultado - base,
    base * exponente,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula el valor de ${base}^${exponente}.`,
    opciones,
    indiceCorrecto: 0,
    explicacion: "Una potencia representa multiplicar la base por sí misma tantas veces como indique el exponente.",
  });
};

export default generarLenguajeAlgebraico;
