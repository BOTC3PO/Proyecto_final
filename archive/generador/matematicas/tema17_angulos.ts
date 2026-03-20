import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
} from "./generic";

const ID_TEMA = 17;
const TITULO = "Valor absoluto";

export const generarAngulos: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 8 : d === "intermedio" ? 12 : 20;
  const a = randomInt(-rango, rango);
  const b = d === "basico" ? randomInt(1, 6) : randomInt(1, 10);

  const s1 = a - b;
  const s2 = a + b;
  const correcta = `{${Math.min(s1, s2)}, ${Math.max(s1, s2)}}`;

  const opciones = [
    correcta,
    `{${a - b}}`,
    `{${a + b}}`,
    `{${-a - b}, ${-a + b}}`,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Resuelve la ecuación de valor absoluto:

|x ${a >= 0 ? "-" : "+"} ${Math.abs(a)}| = ${b}`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Si |x-a|=b con b>0, entonces hay dos soluciones: x=a-b y x=a+b.",
  });
};

export default generarAngulos;
