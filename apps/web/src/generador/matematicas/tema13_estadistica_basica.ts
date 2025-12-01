// src/generators/math/tema13_estadistica_basica.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 13;
const TITULO = "Estadística básica (promedio, moda, mediana)";

type TipoMedida = "promedio" | "moda" | "mediana";

function generarListaNumeros(dificultad: Dificultad): number[] {
  const largo =
    dificultad === "facil"
      ? randomInt(4, 6)
      : dificultad === "media"
      ? randomInt(5, 8)
      : randomInt(7, 10);

  const max =
    dificultad === "facil" ? 20 : dificultad === "media" ? 50 : 100;

  const arr: number[] = [];
  for (let i = 0; i < largo; i++) {
    arr.push(randomInt(1, max));
  }
  return arr;
}

function calcularPromedio(datos: number[]): number {
  const suma = datos.reduce((acc, n) => acc + n, 0);
  return suma / datos.length;
}

function calcularMediana(datos: number[]): number {
  const ordenados = [...datos].sort((a, b) => a - b);
  const n = ordenados.length;
  const mitad = Math.floor(n / 2);
  if (n % 2 === 1) {
    return ordenados[mitad];
  }
  return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
}

function calcularModa(datos: number[]): number {
  const frec = new Map<number, number>();
  for (const n of datos) {
    frec.set(n, (frec.get(n) ?? 0) + 1);
  }
  let mejor = datos[0];
  let maxF = 0;
  for (const [valor, f] of frec.entries()) {
    if (f > maxF || (f === maxF && valor < mejor)) {
      mejor = valor;
      maxF = f;
    }
  }
  return mejor;
}

export const generarEstadisticaBasica: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const datos = generarListaNumeros(dificultad);
  const tipo: TipoMedida = pickRandom(["promedio", "moda", "mediana"]);

  let correcta: number;
  let enunciadoPregunta: string;

  if (tipo === "promedio") {
    correcta = calcularPromedio(datos);
    enunciadoPregunta = "¿Cuál es el promedio (media aritmética) de los siguientes datos?";
  } else if (tipo === "mediana") {
    correcta = calcularMediana(datos);
    enunciadoPregunta = "¿Cuál es la mediana de los siguientes datos?";
  } else {
    correcta = calcularModa(datos);
    enunciadoPregunta = "¿Cuál es la moda de los siguientes datos?";
  }

  // Redondeo a 1 decimal para promedio/mediana si no es entero
  const esEntero = Number.isInteger(correcta);
  const correctaMostrar = esEntero
    ? correcta
    : Math.round(correcta * 10) / 10;

  const opciones = [correctaMostrar];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-5, 5);
    if (delta === 0) continue;
    const cand = esEntero
      ? correctaMostrar + delta
      : Math.round((correctaMostrar + delta) * 10) / 10;
    if (cand !== correctaMostrar) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  const listaStr = datos.join(", ");

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      `${enunciadoPregunta}\n\nDatos: [ ${listaStr} ]`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      tipo === "promedio"
        ? "El promedio se obtiene sumando todos los datos y dividiendo por la cantidad de valores."
        : tipo === "mediana"
        ? "La mediana es el valor central del conjunto ordenado. Si hay cantidad par de datos, es el promedio de los dos centrales."
        : "La moda es el valor que más veces se repite en el conjunto de datos.",
  });
};

export default generarEstadisticaBasica;
