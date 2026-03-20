import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
} from "./generic";

const ID_TEMA = 22;
const TITULO = "Trigonometría básica";

type FuncionTrig = "sin" | "cos" | "tan";

interface CasoTrig {
  angulo: string;
  funcion: FuncionTrig;
  valor: string;
  distractores: string[];
}

const CASOS: CasoTrig[] = [
  { angulo: "30°", funcion: "sin", valor: "1/2", distractores: ["√3/2", "1", "0"] },
  { angulo: "30°", funcion: "cos", valor: "√3/2", distractores: ["1/2", "1", "0"] },
  { angulo: "45°", funcion: "sin", valor: "√2/2", distractores: ["1/2", "√3/2", "1"] },
  { angulo: "45°", funcion: "tan", valor: "1", distractores: ["√3", "1/2", "√2/2"] },
  { angulo: "60°", funcion: "cos", valor: "1/2", distractores: ["√3/2", "√2/2", "1"] },
  { angulo: "60°", funcion: "tan", valor: "√3", distractores: ["1", "1/√3", "√2"] },
];

export const generarTerminosSemejantes: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const d = normalizarDificultadCore(dificultad);
  const candidatos = d === "basico" ? CASOS.slice(0, 4) : CASOS;
  const caso = pickRandom(candidatos);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Selecciona el valor correcto: ${caso.funcion}(${caso.angulo})`,
    opciones: [caso.valor, ...caso.distractores],
    indiceCorrecto: 0,
    explicacion: "Usa la tabla de ángulos notables de 30°, 45° y 60° para seno, coseno y tangente.",
  });
};

export default generarTerminosSemejantes;
