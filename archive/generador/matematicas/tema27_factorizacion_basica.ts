import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
} from "./generic";

const ID_TEMA = 27;
const TITULO = "Determinantes";

export const generarFactorizacionBasica: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 5 : d === "intermedio" ? 8 : 12;

  const a = randomInt(-rango, rango);
  const b = randomInt(-rango, rango);
  const c = randomInt(-rango, rango);
  const d2 = randomInt(-rango, rango);

  const det = a * d2 - b * c;
  const opciones = [det, det + 1, det - 1, -det];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula el determinante de la matriz 2x2:

| ${a}  ${b} |
| ${c}  ${d2} |`,
    opciones,
    indiceCorrecto: 0,
    explicacion: "Para una matriz [[a,b],[c,d]], su determinante es ad - bc.",
  });
};

export default generarFactorizacionBasica;
