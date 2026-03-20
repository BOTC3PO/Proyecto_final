// src/generators/math/tema11_regla_tres_simple.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 11;
const TITULO = "Regla de tres simple (directa e inversa)";

type TipoRegla = "directa" | "inversa";

interface ReglaTresDatos {
  tipo: TipoRegla;
  x1: number;
  y1: number;
  x2: number;
  y2: number; // resultado correcto
  contexto: "precio" | "distancia" | "trabajo";
}

function generarDatosReglaTres(dificultad: Dificultad): ReglaTresDatos {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const tipos: TipoRegla[] = ["directa", "inversa"];
  const tipo = pickRandom(tipos);

  const contexto = pickRandom<ReglaTresDatos["contexto"]>([
    "precio",
    "distancia",
    "trabajo",
  ]);

  // Factor de proporcionalidad entero para que el resultado sea exacto
  const k =
    dificultadCore === "basico"
      ? randomInt(2, 5)
      : dificultadCore === "intermedio"
      ? randomInt(2, 8)
      : randomInt(2, 12);

  const x1 = randomInt(2, 10);
  const x2 = randomInt(2, 12);

  let y1: number;
  let y2: number;

  if (tipo === "directa") {
    // y = k * x
    y1 = k * x1;
    y2 = k * x2;
  } else {
    // y = k / x (inversa)
    // elegimos y1 y calculamos k = y1 * x1
    y1 = randomInt(4, 20);
    const kInv = y1 * x1;
    y2 = Math.round(kInv / x2);
  }

  return { tipo, x1, y1, x2, y2, contexto };
}

function construirEnunciado(datos: ReglaTresDatos): string {
  const { tipo, x1, y1, x2, contexto } = datos;

  if (contexto === "precio") {
    if (tipo === "directa") {
      return `Si ${x1} cuadernos cuestan ${y1} pesos, ¿cuánto costarán ${x2} cuadernos?`;
    } else {
      return `Si ${x1} trabajadores cobran en total ${y1} pesos por un trabajo, ¿cuánto cobra cada uno si el trabajo lo hacen ${x2} trabajadores? (regla de tres inversa simplificada)`;
    }
  }

  if (contexto === "distancia") {
    if (tipo === "directa") {
      return `Un auto recorre ${y1} km en ${x1} horas a velocidad constante. ¿Cuántos km recorrerá en ${x2} horas?`;
    } else {
      return `Un grupo tarda ${y1} horas en recorrer una distancia caminando a paso constante si caminan ${x1} km/h. Si caminan a ${x2} km/h, ¿cuántas horas tardan? (relación inversa velocidad-tiempo)`;
    }
  }

  // trabajo
  if (tipo === "directa") {
    return `Una máquina produce ${y1} piezas en ${x1} horas. ¿Cuántas piezas producirá en ${x2} horas trabajando al mismo ritmo?`;
  } else {
    return `Para terminar un trabajo en ${y1} días se necesitan ${x1} obreros. ¿Cuántos días tardarán ${x2} obreros trabajando al mismo ritmo? (regla de tres inversa)`;
  }
}

export const generarReglaTresSimple: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const datos = generarDatosReglaTres(dificultad);
  const resultado = datos.y2;

  const opciones = [resultado];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-resultado, resultado);
    if (delta === 0) continue;
    const cand = resultado + delta;
    if (cand > 0 && cand !== resultado) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado(datos),
    opciones,
    indiceCorrecto: 0,
    explicacion:
      datos.tipo === "directa"
        ? "En la regla de tres directa, al aumentar una magnitud la otra también aumenta en la misma proporción."
        : "En la regla de tres inversa, al aumentar una magnitud la otra disminuye de forma proporcional (producto constante).",
  });
};

export default generarReglaTresSimple;
