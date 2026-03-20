import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 28;
const TITULO = "Probabilidad";

export const generarProductosNotables: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const total = d === "basico" ? randomInt(8, 15) : d === "intermedio" ? randomInt(12, 20) : randomInt(18, 30);
  const favorables = randomInt(1, total - 1);
  const tipo = pickRandom(["fraccion", "porcentaje"] as const);

  const p = favorables / total;
  const correcta = tipo === "fraccion" ? `${favorables}/${total}` : `${(p * 100).toFixed(1)}%`;

  const opciones = [
    correcta,
    tipo === "fraccion" ? `${total}/${favorables}` : `${(100 - p * 100).toFixed(1)}%`,
    tipo === "fraccion" ? `${favorables + 1}/${total}` : `${(p * 100 + 10).toFixed(1)}%`,
    tipo === "fraccion" ? `${favorables}/${total + 1}` : `${(p * 100 - 10).toFixed(1)}%`,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `En una urna hay ${total} bolillas y ${favorables} son rojas. ¿Cuál es la probabilidad de extraer una roja en un solo intento? (${tipo})`,
    opciones,
    indiceCorrecto: 0,
    explicacion: "Probabilidad = casos favorables / casos totales.",
  });
};

export default generarProductosNotables;
