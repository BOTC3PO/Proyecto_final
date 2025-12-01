// src/generators/math/tema18_coordenadas_plano.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 18;
const TITULO = "Coordenadas en el plano cartesiano";

type TipoEjercicio = "cuadrante" | "eje";

export const generarCoordenadasPlano: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const tipo: TipoEjercicio =
    dificultad === "facil"
      ? "cuadrante"
      : pickRandom(["cuadrante", "eje"]);

  let x: number;
  let y: number;
  let enunciado: string;
  let opciones: string[];
  let correcta: string;

  if (tipo === "cuadrante") {
    // Garantizamos x,y ≠ 0
    x = randomInt(-10, 10);
    y = randomInt(-10, 10);
    if (x === 0) x = 1;
    if (y === 0) y = -1;

    if (x > 0 && y > 0) correcta = "Primer cuadrante";
    else if (x < 0 && y > 0) correcta = "Segundo cuadrante";
    else if (x < 0 && y < 0) correcta = "Tercer cuadrante";
    else correcta = "Cuarto cuadrante";

    opciones = [
      "Primer cuadrante",
      "Segundo cuadrante",
      "Tercer cuadrante",
      "Cuarto cuadrante",
    ];

    enunciado = `Dado el punto P(${x}, ${y}) en el plano cartesiano, ¿en qué cuadrante se encuentra?`;
  } else {
    // Clasificar si está en eje X, eje Y, origen o cuadrante
    x = randomInt(-10, 10);
    y = randomInt(-10, 10);

    if (x === 0 && y === 0) correcta = "En el origen";
    else if (x === 0) correcta = "Sobre el eje Y";
    else if (y === 0) correcta = "Sobre el eje X";
    else correcta = "En algún cuadrante";

    opciones = [
      "En el origen",
      "Sobre el eje X",
      "Sobre el eje Y",
      "En algún cuadrante",
    ];

    enunciado = `Dado el punto P(${x}, ${y}), ¿dónde se encuentra?`;
  }

  const indiceCorrecto = opciones.indexOf(correcta);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "En el plano cartesiano: eje X es horizontal, eje Y vertical. Los cuadrantes se numeran comenzando en el superior derecho y avanzando en sentido antihorario.",
  });
};

export default generarCoordenadasPlano;
