// src/generators/math/tema15_unidades_medida.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
} from "./generic";

const ID_TEMA = 15;
const TITULO = "Unidades de medida (longitud, masa, capacidad, tiempo)";

type TipoMagnitud = "longitud" | "masa" | "capacidad" | "tiempo";

interface Conversion {
  tipo: TipoMagnitud;
  desde: string;
  hacia: string;
  factor: number; // multiplicar por factor para pasar de "desde" a "hacia"
}

const CONVERSIONES: Conversion[] = [
  // Longitud
  { tipo: "longitud", desde: "m", hacia: "cm", factor: 100 },
  { tipo: "longitud", desde: "cm", hacia: "m", factor: 0.01 },
  { tipo: "longitud", desde: "km", hacia: "m", factor: 1000 },
  { tipo: "longitud", desde: "m", hacia: "km", factor: 0.001 },

  // Masa
  { tipo: "masa", desde: "kg", hacia: "g", factor: 1000 },
  { tipo: "masa", desde: "g", hacia: "kg", factor: 0.001 },
  { tipo: "masa", desde: "kg", hacia: "ton", factor: 0.001 },
  { tipo: "masa", desde: "ton", hacia: "kg", factor: 1000 },

  // Capacidad
  { tipo: "capacidad", desde: "L", hacia: "mL", factor: 1000 },
  { tipo: "capacidad", desde: "mL", hacia: "L", factor: 0.001 },

  // Tiempo
  { tipo: "tiempo", desde: "h", hacia: "min", factor: 60 },
  { tipo: "tiempo", desde: "min", hacia: "s", factor: 60 },
  { tipo: "tiempo", desde: "s", hacia: "min", factor: 1 / 60 },
  { tipo: "tiempo", desde: "min", hacia: "h", factor: 1 / 60 },
];

export const generarUnidadesMedida: GeneratorFn = (
  dificultad: Dificultad = "facil"
) => {
  const conv = pickRandom(CONVERSIONES);

  const base =
    dificultad === "facil"
      ? randomInt(1, 50)
      : dificultad === "media"
      ? randomInt(10, 200)
      : randomInt(50, 1000);

  const resultado = base * conv.factor;
  // Para evitar coma eterna
  const redondeado =
    Math.abs(resultado - Math.round(resultado)) < 1e-6
      ? Math.round(resultado)
      : Math.round(resultado * 100) / 100;

  const opciones = [redondeado];

  const distractores = new Set<number>();
  while (distractores.size < 3) {
    const factorError = pickRandom([0.1, 0.5, 2, 10]);
    const cand =
      Math.random() < 0.5
        ? redondeado * factorError
        : redondeado / factorError;
    const candR =
      Math.abs(cand - Math.round(cand)) < 1e-6
        ? Math.round(cand)
        : Math.round(cand * 100) / 100;
    if (candR > 0 && candR !== redondeado) distractores.add(candR);
  }

  opciones.push(...Array.from(distractores));

  const enunciado = `Convierte ${base} ${conv.desde} a ${conv.hacia}.`;

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Para convertir unidades se multiplica o divide por la potencia de 10 o el factor correspondiente entre las unidades.",
  });
};

export default generarUnidadesMedida;
