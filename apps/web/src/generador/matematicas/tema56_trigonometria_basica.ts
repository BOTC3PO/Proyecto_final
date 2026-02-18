import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";

const ID_TEMA = 56;
const TITULO = "Trigonometría básica";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const formatNum = (n: number): string =>
  Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.00$/, "");

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

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

const getTrigRanges = (dificultad: Dificultad) => {
  const [min, max] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "numeros");
  return {
    angleMin: clamp(min, 5, 85),
    angleMax: clamp(max, 5, 85),
    lengthMin: clamp(min, 1, 50),
    lengthMax: clamp(max, 1, 50),
  };
};

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

const generarTrigonometriaBasica: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const { angleMin, angleMax, lengthMin, lengthMax } = getTrigRanges(dificultad);
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante =
    dificultadCore === "basico"
      ? pickRandom(["razon", "lado", "complementario"] as const)
      : dificultadCore === "intermedio"
        ? pickRandom(["razon", "lado", "complementario", "lado"] as const)
        : pickRandom(["razon", "lado", "razon", "complementario"] as const);

  if (variante === "razon") {
    const opuesto = randomInt(lengthMin, lengthMax);
    const adyacente = randomInt(lengthMin, lengthMax);
    const correcta = formatNum(opuesto / adyacente);
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado(
        "En un triángulo rectángulo, si el cateto opuesto mide {{opuesto}} y el adyacente {{adyacente}}, ¿cuál es tan(θ)?",
        { opuesto, adyacente }
      ),
      opciones: uniqueOptions(correcta, [
        formatNum(adyacente / opuesto),
        formatNum(opuesto + adyacente),
        formatNum(opuesto / (opuesto + adyacente)),
      ]),
      indiceCorrecto: 0,
      explicacion: "La tangente de un ángulo agudo se calcula como cateto opuesto dividido entre cateto adyacente.",
    });
  }

  if (variante === "lado") {
    const tipo = pickRandom(["30", "45", "60"] as const);
    const base = randomInt(lengthMin, lengthMax);

    if (tipo === "45") {
      return crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado(
          "En un triángulo rectángulo isósceles (45°-45°-90°), si un cateto mide {{base}}, ¿cuánto mide el otro cateto?",
          { base }
        ),
        opciones: uniqueOptions(base, [base + 1, Math.max(1, base - 1), base * 2]),
        indiceCorrecto: 0,
        explicacion: "En un triángulo 45°-45°-90°, ambos catetos son iguales.",
      });
    }

    if (tipo === "30") {
      return crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado(
          "En un triángulo 30°-60°-90°, si el cateto opuesto a 30° mide {{base}}, ¿cuánto mide la hipotenusa?",
          { base }
        ),
        opciones: uniqueOptions(base * 2, [base, base * 3, formatNum(base * 1.5)]),
        indiceCorrecto: 0,
        explicacion: "En un triángulo 30°-60°-90°, la hipotenusa es el doble del cateto opuesto a 30°.",
      });
    }

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado(
        "En un triángulo 30°-60°-90°, si el cateto opuesto a 30° mide {{base}}, ¿cuánto mide el cateto opuesto a 60°?",
        { base }
      ),
      opciones: uniqueOptions(formatNum(base * Math.sqrt(3)), [base * 2, base, formatNum(base * 1.5)]),
      indiceCorrecto: 0,
      explicacion: "En un triángulo 30°-60°-90°, los lados están en razón 1 : √3 : 2.",
    });
  }

  const angulo = randomInt(Math.max(10, angleMin), Math.min(80, angleMax));
  const complementario = 90 - angulo;
  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado(
      "En un triángulo rectángulo, si un ángulo agudo mide {{angulo}}°, ¿cuánto mide su complementario?",
      { angulo }
    ),
    opciones: uniqueOptions(complementario, [complementario + 5, Math.max(1, complementario - 5), 180 - angulo]),
    indiceCorrecto: 0,
    explicacion: "En triángulos rectángulos, los ángulos agudos son complementarios y suman 90°.",
  });
};

export default generarTrigonometriaBasica;
