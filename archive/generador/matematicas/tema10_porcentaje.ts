// src/generators/math/tema10_porcentaje.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 10;
const TITULO = "Porcentajes";

type TipoProblema = "parteDeTodo" | "aumento" | "descuento";

function generarPorcentaje(dificultad: Dificultad): number {
  const dificultadCore = normalizarDificultadCore(dificultad);
  if (dificultadCore === "basico") {
    return [5, 10, 20, 25, 50][randomInt(0, 4)];
  }
  if (dificultadCore === "intermedio") return randomInt(5, 40);
  return randomInt(5, 70);
}

export const generarPorcentajes: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const tipo: TipoProblema = pickRandom([
    "parteDeTodo",
    "aumento",
    "descuento",
  ]);

  const porcentaje = generarPorcentaje(dificultad);
  const dificultadCore = normalizarDificultadCore(dificultad);
  const base =
    dificultadCore === "basico"
      ? randomInt(40, 200)
      : dificultadCore === "intermedio"
      ? randomInt(100, 500)
      : randomInt(200, 1000);

  let enunciado: string;
  let resultado: number;
  let explicacion: string;

  if (tipo === "parteDeTodo") {
    resultado = (porcentaje / 100) * base;
    enunciado = `¿Cuál es el ${porcentaje}% de ${base}?`;
    explicacion = `Se calcula como ${base} × ${porcentaje}/100.`;
  } else if (tipo === "aumento") {
    const incremento = (porcentaje / 100) * base;
    resultado = base + incremento;
    enunciado = `Un producto cuesta ${base} y aumenta un ${porcentaje}%. ¿Cuál es el nuevo precio?`;
    explicacion = `Se suma el ${porcentaje}% al valor original: ${base} × (1 + ${porcentaje}/100).`;
  } else {
    const descuento = (porcentaje / 100) * base;
    resultado = base - descuento;
    enunciado = `Un producto cuesta ${base} y tiene un descuento del ${porcentaje}%. ¿Cuál es el precio final?`;
    explicacion = `Se resta el ${porcentaje}% al valor original: ${base} × (1 - ${porcentaje}/100).`;
  }

  // Redondeo razonable para evitar flotantes largos
  const resultadoRedondeado = Math.round(resultado * 100) / 100;

  const opciones = [resultadoRedondeado];

  const distractores = new Set<number>();
  while (distractores.size < 3) {
    const delta = randomInt(-20, 20);
    const cand = Math.round((resultadoRedondeado + delta) * 100) / 100;
    if (cand > 0 && cand !== resultadoRedondeado) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion,
  });
};

export default generarPorcentajes;
