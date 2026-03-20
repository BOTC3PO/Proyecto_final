import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 20;
const TITULO = "Logaritmos";

export const generarSeriesSimples: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const bases = d === "basico" ? [2, 10] : d === "intermedio" ? [2, 3, 5, 10] : [2, 3, 4, 5, 10];
  const base = pickRandom(bases);
  const exponente = d === "basico" ? randomInt(1, 4) : d === "intermedio" ? randomInt(1, 5) : randomInt(1, 6);
  const argumento = base ** exponente;

  const opciones = [
    exponente,
    exponente + 1,
    exponente - 1,
    randomInt(0, 7),
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula: log_${base}(${argumento})`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "El logaritmo responde a: ¿a qué potencia debo elevar la base para obtener el argumento?",
  });
};

export default generarSeriesSimples;
