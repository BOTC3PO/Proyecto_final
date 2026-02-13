// src/generators/math/tema52_representacion_datos.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 52;
const TITULO = "Representación de datos (tablas y gráficos)";

type TipoEjercicio =
  | "tabla_frecuencias"
  | "histograma"
  | "poligono_frecuencia"
  | "boxplot"
  | "dispersion";

type Intervalo = {
  minimo: number;
  maximo: number;
  frecuencia: number;
};

type PuntoDispersion = { x: number; y: number };

const OPCIONES_RELACION = [
  "Relación positiva",
  "Relación negativa",
  "Sin relación clara",
  "Relación no lineal",
] as const;

function formatearNumero(valor: number): string {
  if (Number.isInteger(valor)) {
    return valor.toString();
  }
  return valor.toFixed(1).replace(/\.0$/, "");
}

function construirOpcionesNumericas(correcta: number, maxOpciones = 4): string[] {
  const opciones = new Set<number>([correcta]);

  while (opciones.size < maxOpciones) {
    const delta = randomInt(-4, 4);
    if (delta === 0) continue;
    opciones.add(correcta + delta);
  }

  return Array.from(opciones).map(formatearNumero);
}

function generarListaDiscreta(dificultad: Dificultad): {
  datos: number[];
  valores: number[];
  frecuencias: Map<number, number>;
} {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const cantidad =
    dificultadCore === "basico" ? randomInt(10, 12) : randomInt(12, 16);
  const totalValores =
    dificultadCore === "avanzado" ? randomInt(5, 7) : randomInt(4, 6);
  const valores = Array.from({ length: totalValores }, (_, i) => i + 1);
  const datos: number[] = [];

  for (let i = 0; i < cantidad; i++) {
    datos.push(pickRandom(valores));
  }

  const frecuencias = new Map<number, number>();
  for (const valor of valores) {
    frecuencias.set(valor, 0);
  }
  for (const dato of datos) {
    frecuencias.set(dato, (frecuencias.get(dato) ?? 0) + 1);
  }

  return { datos, valores, frecuencias };
}

function generarIntervalos(dificultad: Dificultad): Intervalo[] {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const cantidadIntervalos =
    dificultadCore === "basico"
      ? 4
      : dificultadCore === "intermedio"
      ? 5
      : 6;
  const ancho = dificultadCore === "basico" ? 5 : 10;
  const inicio = randomInt(0, 5) * (ancho === 5 ? 1 : 2);

  const intervalos: Intervalo[] = [];
  for (let i = 0; i < cantidadIntervalos; i++) {
    const minimo = inicio + i * ancho;
    const maximo = minimo + ancho - 1;
    intervalos.push({ minimo, maximo, frecuencia: randomInt(2, 9) });
  }

  const maxActual = Math.max(...intervalos.map((item) => item.frecuencia));
  const indicesMax = intervalos
    .map((item, idx) => (item.frecuencia === maxActual ? idx : -1))
    .filter((idx) => idx >= 0);

  if (indicesMax.length > 1) {
    const indice = pickRandom(indicesMax);
    intervalos[indice].frecuencia += 1;
  }

  return intervalos;
}

function formatearIntervalo(intervalo: Intervalo): string {
  return `${intervalo.minimo}–${intervalo.maximo}`;
}

function generarDatosBoxplot(dificultad: Dificultad): number[] {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const cantidad = dificultadCore === "basico" ? 9 : 11;
  const max = dificultadCore === "avanzado" ? 45 : 30;
  const datos = Array.from({ length: cantidad }, () => randomInt(5, max));
  return datos.sort((a, b) => a - b);
}

function mediana(datos: number[]): number {
  const mitad = Math.floor(datos.length / 2);
  if (datos.length % 2 === 1) {
    return datos[mitad];
  }
  return (datos[mitad - 1] + datos[mitad]) / 2;
}

function cuartiles(datosOrdenados: number[]): { q1: number; q3: number } {
  const mitad = Math.floor(datosOrdenados.length / 2);
  const inferior = datosOrdenados.slice(0, mitad);
  const superior = datosOrdenados.slice(mitad + 1);
  return {
    q1: mediana(inferior),
    q3: mediana(superior),
  };
}

function generarPuntosDispersion(
  tipo: "positiva" | "negativa" | "sin"
): PuntoDispersion[] {
  const cantidad = 6;
  const puntos: PuntoDispersion[] = [];
  const base = randomInt(8, 15);
  const pendiente = randomInt(2, 4);

  for (let i = 1; i <= cantidad; i++) {
    const x = i;
    let y: number;

    if (tipo === "positiva") {
      y = pendiente * x + base + randomInt(-2, 2);
    } else if (tipo === "negativa") {
      y = base - pendiente * x + randomInt(-2, 2);
    } else {
      y = randomInt(4, 20);
    }

    puntos.push({ x, y });
  }

  return puntos;
}

export const generarRepresentacionDatos: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipos: TipoEjercicio[] =
    dificultadCore === "basico"
      ? ["tabla_frecuencias", "histograma", "dispersion"]
      : [
          "tabla_frecuencias",
          "histograma",
          "poligono_frecuencia",
          "boxplot",
          "dispersion",
        ];
  const tipo: TipoEjercicio = pickRandom(tipos);

  if (tipo === "tabla_frecuencias") {
    const { datos, valores, frecuencias } = generarListaDiscreta(dificultad);
    const valor = pickRandom(valores);
    const correcta = frecuencias.get(valor) ?? 0;
    const opciones = construirOpcionesNumericas(correcta);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado:
        "Construye la tabla de frecuencias para los datos dados. " +
        `¿Cuál es la frecuencia absoluta del valor ${valor}?\n\nDatos: [${datos.join(
          ", "
        )}]`,
      opciones,
      indiceCorrecto: opciones.indexOf(formatearNumero(correcta)),
      explicacion:
        "La frecuencia absoluta cuenta cuántas veces aparece cada valor en la lista de datos.",
    });
  }

  if (tipo === "histograma") {
    const intervalos = generarIntervalos(dificultad);
    const maxFrecuencia = Math.max(...intervalos.map((item) => item.frecuencia));
    const intervaloMax = intervalos.find(
      (item) => item.frecuencia === maxFrecuencia
    );
    const opciones = intervalos.map(formatearIntervalo);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado:
        "A partir de la tabla de frecuencias, indica qué intervalo tendría la barra " +
        `más alta en el histograma.\n\n${intervalos
          .map((item) => `${formatearIntervalo(item)}: ${item.frecuencia}`)
          .join("\n")}`,
      opciones,
      indiceCorrecto: intervaloMax
        ? opciones.indexOf(formatearIntervalo(intervaloMax))
        : 0,
      explicacion:
        "En un histograma, la barra más alta corresponde al intervalo con mayor frecuencia.",
    });
  }

  if (tipo === "poligono_frecuencia") {
    const intervalos = generarIntervalos(dificultad);
    const maxFrecuencia = Math.max(...intervalos.map((item) => item.frecuencia));
    const intervaloMax = intervalos.find(
      (item) => item.frecuencia === maxFrecuencia
    );
    const opciones = intervalos.map((item) => {
      const marcaClase = (item.minimo + item.maximo) / 2;
      return `(${formatearNumero(marcaClase)}, ${item.frecuencia})`;
    });
    const correcta = intervaloMax
      ? `(${formatearNumero((intervaloMax.minimo + intervaloMax.maximo) / 2)}, ${
          intervaloMax.frecuencia
        })`
      : opciones[0];

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado:
        "Para construir el polígono de frecuencias, usa la marca de clase de cada intervalo. " +
        `¿Qué punto representa el pico del polígono?\n\n${intervalos
          .map((item) => `${formatearIntervalo(item)}: ${item.frecuencia}`)
          .join("\n")}`,
      opciones,
      indiceCorrecto: opciones.indexOf(correcta),
      explicacion:
        "El pico del polígono se ubica en la marca de clase del intervalo con mayor frecuencia.",
    });
  }

  if (tipo === "boxplot") {
    const datos = generarDatosBoxplot(dificultad);
    const med = mediana(datos);
    const { q1, q3 } = cuartiles(datos);
    const tipoBox = pickRandom(["mediana", "rango_intercuartil"] as const);
    const correcta = tipoBox === "mediana" ? med : q3 - q1;
    const opciones = construirOpcionesNumericas(correcta);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado:
        "Con los datos ordenados, determina los elementos necesarios para el boxplot. " +
        (tipoBox === "mediana"
          ? "¿Cuál es la mediana?"
          : "¿Cuál es el rango intercuartil (Q3 - Q1)?") +
        `\n\nDatos: [${datos.join(", ")}]`,
      opciones,
      indiceCorrecto: opciones.indexOf(formatearNumero(correcta)),
      explicacion:
        tipoBox === "mediana"
          ? "La mediana es el valor central del conjunto ordenado."
          : "El rango intercuartil es la diferencia entre Q3 y Q1.",
    });
  }

  const tipoRelacion = pickRandom(["positiva", "negativa", "sin"] as const);
  const puntos = generarPuntosDispersion(tipoRelacion);
  const correcta =
    tipoRelacion === "positiva"
      ? "Relación positiva"
      : tipoRelacion === "negativa"
      ? "Relación negativa"
      : "Sin relación clara";

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado:
      "Observa el diagrama de dispersión (pares x, y). " +
      "¿Qué tipo de relación sugiere?\n\n" +
      puntos.map((punto) => `(${punto.x}, ${punto.y})`).join(", "),
    opciones: [...OPCIONES_RELACION],
    indiceCorrecto: OPCIONES_RELACION.indexOf(correcta),
    explicacion:
      "Una tendencia ascendente indica relación positiva; descendente, negativa; dispersa, sin relación clara.",
  });
};

export default generarRepresentacionDatos;
