import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 16;
const TITULO = "Inecuaciones lineales";

type Signo = "<" | "<=" | ">" | ">=";

function resolverInecuacion(a: number, signo: Signo, k: number): string {
  const invierte = a < 0;
  const signoFinal: Signo = invierte
    ? signo === "<"
      ? ">"
      : signo === "<="
      ? ">="
      : signo === ">"
      ? "<"
      : "<="
    : signo;
  return `x ${signoFinal} ${k}`;
}

export const generarPerimetroArea: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 6 : d === "intermedio" ? 10 : 15;
  const a = randomInt(-rango, rango) || 1;
  const b = randomInt(-rango, rango);
  const k = randomInt(-rango, rango);
  const signo = pickRandom<Signo>(["<", "<=", ">", ">="]);

  const c = a * k + b;
  const inecuacion = `${a}x ${b >= 0 ? "+" : "-"} ${Math.abs(b)} ${signo} ${c}`;
  const correcta = resolverInecuacion(a, signo, k);

  const opciones = [
    correcta,
    `x ${signo} ${k}`,
    `x = ${k}`,
    `x ${pickRandom(["<", ">"])} ${-k}`,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Resuelve la inecuación:

${inecuacion}`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se despeja x como en una ecuación. Si se divide por un número negativo, el signo de la inecuación se invierte.",
  });
};

export default generarPerimetroArea;
