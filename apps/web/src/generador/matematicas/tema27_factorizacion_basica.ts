// src/generators/math/tema27_factorizacion_basica.ts
import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  pickRandom,
  normalizarDificultadCore,
} from "./generic";

const ID_TEMA = 27;
const TITULO = "Factorización básica";

type TipoFactorizacion = "factorComun" | "trinomioSimple";

// --------- HELPERS ---------

function signoConNumero(n: number): string {
  return n >= 0 ? `+ ${n}` : `- ${Math.abs(n)}`;
}

function factorComunEjercicio(dificultad: Dificultad) {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const rangoCoef =
    dificultadCore === "basico"
      ? 6
      : dificultadCore === "intermedio"
      ? 10
      : 15;
  const k = randomInt(2, rangoCoef);          // factor común numérico
  const a = randomInt(1, 9);
  const b = randomInt(1, 9);

  const coef1 = k * a;
  const coef2 = k * b;

  const expresion = `${coef1}x ${signoConNumero(coef2)}x`;
  const factorCorrecto = `${k}x`;
  const factorizacionCorrecta = `${k}x(${a} ${signoConNumero(b)})`;

  // Opciones: pedimos la FACTORIZACIÓN COMPLETA
  const opciones = [
    factorizacionCorrecta,
    `${coef1 + coef2}x`,      // suma tonta
    `${k}(${a}x ${signoConNumero(b)}x)`, // factor mal aplicado
    `${k}(${coef1}x ${signoConNumero(coef2)}x)`, // nada factoriza
  ];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Factoriza la siguiente expresión sacando factor común:\n\n${expresion}`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Se busca el máximo factor común (${factorCorrecto}) y se escribe la expresión como ${factorCorrecto}( ${a} ${signoConNumero(b)} ).`,
  });
}

// Generamos x^2 + bx + c con factorización (x + r1)(x + r2)
function trinomioSimpleEjercicio(dificultad: Dificultad) {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const rangoR =
    dificultadCore === "basico"
      ? 5
      : dificultadCore === "intermedio"
      ? 7
      : 9;

  const r1 = randomInt(-rangoR, rangoR) || 1;
  const r2 = randomInt(-rangoR, rangoR) || -1;

  const b = r1 + r2;
  const c = r1 * r2;

  const expresion = `x^2 ${signoConNumero(b)}x ${signoConNumero(c)}`;

  const factor1 = r1 >= 0 ? `x + ${r1}` : `x - ${Math.abs(r1)}`;
  const factor2 = r2 >= 0 ? `x + ${r2}` : `x - ${Math.abs(r2)}`;

  const correcta = `(${factor1})(${factor2})`;

  // Distractores cambiando signos o sumas
  const d1 = `(${factor1})(${r2 >= 0 ? "x - " + r2 : "x + " + Math.abs(r2)})`;
  const d2 = `(${r1 >= 0 ? "x - " + r1 : "x + " + Math.abs(r1)})(${factor2})`;
  const d3 = `(x + ${b})(x + ${c})`;

  const opciones = [correcta, d1, d2, d3];

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: `Factoriza el siguiente trinomio cuadrático:\n\n${expresion}`,
    opciones,
    indiceCorrecto: 0,
    explicacion: `Se buscan dos números que sumen ${b} y cuyo producto sea ${c}. Esos números son ${r1} y ${r2}, por lo tanto la factorización es (x + ${r1})(x + ${r2}).`,
  });
}

// --------- GENERADOR PRINCIPAL ---------

export const generarFactorizacionBasica: GeneratorFn = (
  dificultad: Dificultad = "basico"
) => {
  const tipo: TipoFactorizacion = pickRandom([
    "factorComun",
    "trinomioSimple",
  ]);

  if (tipo === "factorComun") {
    return factorComunEjercicio(dificultad);
  }
  return trinomioSimpleEjercicio(dificultad);
};

export default generarFactorizacionBasica;
