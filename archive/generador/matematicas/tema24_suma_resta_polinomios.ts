import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  randomInt,
} from "./generic";

const ID_TEMA = 24;
const TITULO = "Geometría analítica";

export const generarSumaRestaPolinomios: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const rango = d === "basico" ? 6 : d === "intermedio" ? 10 : 14;

  const x1 = randomInt(-rango, rango);
  const y1 = randomInt(-rango, rango);
  const x2 = randomInt(-rango, rango) || 1;
  const y2 = randomInt(-rango, rango);

  const denominador = x2 - x1 || 1;
  const pendiente = (y2 - y1) / denominador;
  const pendienteTxt = pendiente.toFixed(2);

  const opciones = [
    pendienteTxt,
    (-pendiente).toFixed(2),
    (denominador / (y2 - y1 || 1)).toFixed(2),
    (pendiente + 1).toFixed(2),
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Calcula la pendiente de la recta que pasa por A(${x1}, ${y1}) y B(${x2}, ${y2}).`,
    opciones,
    indiceCorrecto: 0,
    explicacion: "La pendiente se calcula con m=(y2−y1)/(x2−x1).",
  });
};

export default generarSumaRestaPolinomios;
