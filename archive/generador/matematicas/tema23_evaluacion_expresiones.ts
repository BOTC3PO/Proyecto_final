import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";

const ID_TEMA = 23;
const TITULO = "Trigonometría aplicada";

export const generarEvaluacionExpresiones: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const angulo = pickRandom(d === "basico" ? [30, 45] : [30, 45, 60]);
  const adyacente = randomInt(2, d === "basico" ? 8 : 12);

  let opuesto: number;
  if (angulo === 45) opuesto = adyacente;
  else if (angulo === 30) opuesto = Math.round(adyacente / 2);
  else opuesto = Math.round(adyacente * 1.73);

  const opciones = [
    opuesto,
    opuesto + 1,
    Math.max(1, opuesto - 1),
    adyacente,
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `En un triángulo rectángulo, si el ángulo es ${angulo}° y el cateto adyacente mide ${adyacente}, ¿cuánto mide aproximadamente el cateto opuesto?`,
    opciones,
    indiceCorrecto: 0,
    explicacion:
      "Se usa tan(θ)=cateto opuesto/cateto adyacente, por lo tanto opuesto = adyacente·tan(θ).",
  });
};

export default generarEvaluacionExpresiones;
