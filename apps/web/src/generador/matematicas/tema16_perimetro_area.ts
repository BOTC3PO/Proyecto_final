// src/generators/math/tema16_perimetro_area.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 16;
const TITULO = "Perímetro y área de figuras simples";

type Figura = "cuadrado" | "rectangulo" | "triangulo";
type TipoProblema = "perimetro" | "area";

interface DatosFigura {
  figura: Figura;
  tipo: TipoProblema;
  enunciado: string;
  resultado: number;
  explicacion: string;
}

function generarDatosFigura(dificultad: Dificultad): DatosFigura {
  const figura: Figura = pickRandom(["cuadrado", "rectangulo", "triangulo"]);
  const tipo: TipoProblema = pickRandom(["perimetro", "area"]);

  // Rango de lados
  const max =
    dificultad === "facil" ? 15 : dificultad === "media" ? 30 : 50;
  const min = 2;

  if (figura === "cuadrado") {
    const lado = randomInt(min, max);
    if (tipo === "perimetro") {
      const per = 4 * lado;
      return {
        figura,
        tipo,
        enunciado: `Un cuadrado tiene lados de ${lado} cm. ¿Cuál es su perímetro?`,
        resultado: per,
        explicacion: `El perímetro de un cuadrado es 4 × lado = 4 × ${lado} = ${per}.`,
      };
    } else {
      const area = lado * lado;
      return {
        figura,
        tipo,
        enunciado: `Un cuadrado tiene lados de ${lado} cm. ¿Cuál es su área?`,
        resultado: area,
        explicacion: `El área de un cuadrado es lado × lado = ${lado} × ${lado} = ${area}.`,
      };
    }
  }

  if (figura === "rectangulo") {
    const base = randomInt(min, max);
    const altura = randomInt(min, max);
    if (tipo === "perimetro") {
      const per = 2 * (base + altura);
      return {
        figura,
        tipo,
        enunciado: `Un rectángulo tiene base ${base} cm y altura ${altura} cm. ¿Cuál es su perímetro?`,
        resultado: per,
        explicacion: `El perímetro de un rectángulo es 2 × (base + altura) = 2 × (${base} + ${altura}) = ${per}.`,
      };
    } else {
      const area = base * altura;
      return {
        figura,
        tipo,
        enunciado: `Un rectángulo tiene base ${base} cm y altura ${altura} cm. ¿Cuál es su área?`,
        resultado: area,
        explicacion: `El área de un rectángulo es base × altura = ${base} × ${altura} = ${area}.`,
      };
    }
  }

  // Triángulo: solo trabajamos área para no complicar perímetro
  const base = randomInt(min, max);
  const altura = randomInt(min, max);
  const area = (base * altura) / 2;

  return {
    figura,
    tipo: "area",
    enunciado: `Un triángulo tiene base ${base} cm y altura ${altura} cm. ¿Cuál es su área?`,
    resultado: area,
    explicacion: `El área de un triángulo es (base × altura) / 2 = (${base} × ${altura}) / 2 = ${area}.`,
  };
}

export const generarPerimetroArea: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const datos = generarDatosFigura(dificultad);
  const correcta = datos.resultado;

  const opciones = [correcta];
  const distractores = new Set<number>();

  while (distractores.size < 3) {
    const delta = randomInt(-correcta, correcta);
    if (delta === 0) continue;
    const cand = correcta + delta;
    if (cand > 0 && cand !== correcta) distractores.add(cand);
  }

  opciones.push(...Array.from(distractores));

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: datos.enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion: datos.explicacion,
  });
};

export default generarPerimetroArea;
