import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 29;
const TITULO = "Estadística descriptiva";

function media(datos: number[]): number {
  return datos.reduce((acc, n) => acc + n, 0) / datos.length;
}

function mediana(datos: number[]): number {
  const o = [...datos].sort((a, b) => a - b);
  const m = Math.floor(o.length / 2);
  return o.length % 2 === 0 ? (o[m - 1] + o[m]) / 2 : o[m];
}

export const generarEcuacionesLinealesSimples: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const n = d === "basico" ? 5 : d === "intermedio" ? 6 : 7;
  const datos = Array.from({ length: n }, () => randomInt(1, d === "basico" ? 12 : 20));
  const tipo = pickRandom(["media", "mediana"] as const);

  const correcta = tipo === "media" ? Number(media(datos).toFixed(2)) : Number(mediana(datos).toFixed(2));
  const opciones = [correcta, Number((correcta + 1).toFixed(2)), Number((correcta - 1).toFixed(2)), Number((correcta + 2).toFixed(2))];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Con el conjunto de datos ${datos.join(", ")}, calcula la ${tipo}.`,
    opciones,
    indiceCorrecto: 0,
    explicacion: tipo === "media" ? "La media es la suma de los datos dividida por la cantidad." : "La mediana es el valor central al ordenar los datos.",
  });
};

export default generarEcuacionesLinealesSimples;
