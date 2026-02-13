import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 26;
const TITULO = "Matrices";

export const generarGradoCoeficientes: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 5 : d === "intermedio" ? 8 : 12;

  const a11 = randomInt(-rango, rango);
  const a12 = randomInt(-rango, rango);
  const a21 = randomInt(-rango, rango);
  const a22 = randomInt(-rango, rango);

  const b11 = randomInt(-rango, rango);
  const b12 = randomInt(-rango, rango);
  const b21 = randomInt(-rango, rango);
  const b22 = randomInt(-rango, rango);

  const operacion = pickRandom(["suma", "resta"] as const);
  const c11 = operacion === "suma" ? a11 + b11 : a11 - b11;

  const opciones = [c11, c11 + 1, c11 - 1, -c11];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Sean
A = [[${a11}, ${a12}], [${a21}, ${a22}]]
B = [[${b11}, ${b12}], [${b21}, ${b22}]]

Si C = A ${operacion === "suma" ? "+" : "-"} B, ¿cuál es el valor de c11?`,
    opciones,
    indiceCorrecto: 0,
    explicacion: "Las matrices se suman/restan elemento a elemento en la misma posición.",
  });
};

export default generarGradoCoeficientes;
