import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
} from "./generic";

const ID_TEMA = 59;
const TITULO = "Ecuaciones trigonométricas";

const uniqueOptions = (correcta: string | number, distractores: Array<string | number>): string[] => {
  const opciones = [String(correcta)];
  for (const distractor of distractores) {
    const valor = String(distractor);
    if (!opciones.includes(valor)) opciones.push(valor);
    if (opciones.length === 4) break;
  }
  let extra = 1;
  while (opciones.length < 4) {
    opciones.push(`${correcta} (${extra})`);
    extra += 1;
  }
  return opciones;
};

const toAngleSet = (values: number[]): string =>
  [...new Set(values)]
    .sort((a, b) => a - b)
    .map((v) => `${v}°`)
    .join(", ");

function construirEnunciado(
  fallback: string,
  variables?: Record<string, string | number>
): string {
  let enunciado = fallback;
  if (variables) {
    for (const [nombre, valor] of Object.entries(variables)) {
      enunciado = enunciado.replace(`{{${nombre}}}`, String(valor));
    }
  }
  return enunciado;
}

const generarEcuacionesTrigonometricas: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante =
    dificultadCore === "avanzado"
      ? pickRandom(["sinCos", "tan", "identidad"] as const)
      : pickRandom(["sinCos", "tan", "identidad", "sinCos"] as const);

  if (variante === "sinCos") {
    const casos = [
      {
        enunciado: "sin(θ)=0",
        correcta: toAngleSet([0, 180, 360]),
        distractores: [toAngleSet([0, 180]), toAngleSet([90, 270]), toAngleSet([0, 360])],
      },
      {
        enunciado: "sin(θ)=1/2",
        correcta: toAngleSet([30, 150]),
        distractores: [toAngleSet([30]), toAngleSet([30, 330]), toAngleSet([60, 120])],
      },
      {
        enunciado: "cos(θ)=0",
        correcta: toAngleSet([90, 270]),
        distractores: [toAngleSet([0, 180]), toAngleSet([90]), toAngleSet([45, 225])],
      },
      {
        enunciado: "cos(θ)=1/2",
        correcta: toAngleSet([60, 300]),
        distractores: [toAngleSet([60, 120]), toAngleSet([300]), toAngleSet([30, 330])],
      },
      {
        enunciado: "cos(θ)=-1/2",
        correcta: toAngleSet([120, 240]),
        distractores: [toAngleSet([60, 240]), toAngleSet([120]), toAngleSet([150, 210])],
      },
    ] as const;
    const caso = pickRandom(casos);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado(
        "Resuelve {{expresion}} para θ en [0°, 360°].",
        { expresion: caso.enunciado }
      ),
      opciones: uniqueOptions(caso.correcta, [...caso.distractores]),
      indiceCorrecto: 0,
      explicacion: "Se usan valores notables del círculo trigonométrico en el dominio [0°,360°].",
    });
  }

  if (variante === "tan") {
    const casos = [
      {
        enunciado: "tan(θ)=1",
        correcta: toAngleSet([45, 225]),
        distractores: [toAngleSet([45, 135]), toAngleSet([90, 270]), toAngleSet([225])],
      },
      {
        enunciado: "tan(θ)=0",
        correcta: toAngleSet([0, 180, 360]),
        distractores: [toAngleSet([0, 180]), toAngleSet([90, 270]), toAngleSet([45, 225])],
      },
    ] as const;
    const caso = pickRandom(casos);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado(
        "Resuelve {{expresion}} para θ en [0°, 360°].",
        { expresion: caso.enunciado }
      ),
      opciones: uniqueOptions(caso.correcta, [...caso.distractores]),
      indiceCorrecto: 0,
      explicacion: "La tangente tiene período 180° y se validan todas las soluciones del dominio.",
    });
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado("Resuelve sin²(θ)=1/4 para θ en [0°, 360°]."),
    opciones: uniqueOptions(toAngleSet([30, 150, 210, 330]), [
      toAngleSet([30, 150]),
      toAngleSet([60, 120, 240, 300]),
      toAngleSet([30, 330]),
    ]),
    indiceCorrecto: 0,
    explicacion: "Si sin²(θ)=1/4 entonces sin(θ)=±1/2, y se toman los cuatro ángulos del dominio.",
  });
};

export default generarEcuacionesTrigonometricas;
