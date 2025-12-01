// src/generators/math/tema17_angulos.ts
import {
  Dificultad,
  GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 17;
const TITULO = "Clasificación de ángulos";

type TipoAngulo =
  | "agudo"
  | "recto"
  | "obtuso"
  | "llano"
  | "completo";

function generarMedidaYTipo(): { grados: number; tipo: TipoAngulo } {
  const tipos: TipoAngulo[] = ["agudo", "recto", "obtuso", "llano", "completo"];
  const tipo = pickRandom(tipos);

  switch (tipo) {
    case "agudo":
      return { grados: randomInt(1, 89), tipo };
    case "recto":
      return { grados: 90, tipo };
    case "obtuso":
      return { grados: randomInt(91, 179), tipo };
    case "llano":
      return { grados: 180, tipo };
    case "completo":
      return { grados: 360, tipo };
  }
}

export const generarAngulos: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const { grados, tipo } = generarMedidaYTipo();

  const opciones = [
    "Ángulo agudo",
    "Ángulo recto",
    "Ángulo obtuso",
    "Ángulo llano",
    "Ángulo completo",
  ];

  const mapa: Record<TipoAngulo, string> = {
    agudo: "Ángulo agudo",
    recto: "Ángulo recto",
    obtuso: "Ángulo obtuso",
    llano: "Ángulo llano",
    completo: "Ángulo completo",
  };

  const correcta = mapa[tipo];
  const indiceCorrecto = opciones.indexOf(correcta);

  const enunciado = `Un ángulo mide ${grados}°. ¿Cómo se clasifica?`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto,
    explicacion:
      "Ángulo agudo: menos de 90°. Recto: 90°. Obtuso: entre 90° y 180°. Llano: 180°. Completo: 360°.",
  });
};

export default generarAngulos;
