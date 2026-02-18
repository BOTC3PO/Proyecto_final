import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";

const ID_TEMA = 57;
const TITULO = "Trigonometría aplicada";

type DificultadCore = "basico" | "intermedio" | "avanzado";

const fallbackRangos: Record<DificultadCore, [number, number]> = {
  basico: [1, 20],
  intermedio: [1, 50],
  avanzado: [1, 100],
};

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

const formatNum = (n: number): string =>
  Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/\.00$/, "");

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

const generarTrigonometriaAplicada: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const { lengthMin, lengthMax } = getTrigRanges(dificultad);
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante =
    dificultadCore === "basico"
      ? pickRandom(["altura", "distancia", "pendiente"] as const)
      : pickRandom(["altura", "distancia", "pendiente", "altura"] as const);

  if (variante === "altura") {
    const sombra = randomInt(lengthMin, lengthMax);
    const angulo = pickRandom([30, 45, 60] as const);
    const tanValor = angulo === 30 ? 1 / Math.sqrt(3) : angulo === 45 ? 1 : Math.sqrt(3);
    const altura = formatNum(sombra * tanValor);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado(
        "Un poste proyecta una sombra de {{sombra}} m y el ángulo de elevación del sol es {{angulo}}°. ¿Cuál es la altura del poste?",
        { sombra, angulo }
      ),
      opciones: uniqueOptions(altura, [
        formatNum(sombra / tanValor),
        formatNum(sombra * (angulo === 45 ? Math.sqrt(2) : 0.5)),
        formatNum(sombra + tanValor),
      ]),
      indiceCorrecto: 0,
      explicacion: "Usamos tan(θ)=altura/sombra, por lo tanto altura=sombra·tan(θ).",
    });
  }

  if (variante === "distancia") {
    const altura = randomInt(lengthMin, lengthMax);
    const angulo = pickRandom([30, 45, 60] as const);
    const tanValor = angulo === 30 ? 1 / Math.sqrt(3) : angulo === 45 ? 1 : Math.sqrt(3);
    const distancia = formatNum(altura / tanValor);

    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado(
        "Desde un punto del suelo se observa la cima de un edificio de {{altura}} m con un ángulo de elevación de {{angulo}}°. ¿A qué distancia horizontal está el edificio?",
        { altura, angulo }
      ),
      opciones: uniqueOptions(distancia, [
        formatNum(altura * tanValor),
        formatNum(altura / (tanValor + 1)),
        formatNum(altura + tanValor),
      ]),
      indiceCorrecto: 0,
      explicacion: "Usamos tan(θ)=altura/distancia, por lo que distancia=altura/tan(θ).",
    });
  }

  const dy = randomInt(lengthMin, lengthMax);
  const dx = randomInt(lengthMin, lengthMax);
  const tanTheta = formatNum(dy / dx);

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado(
      "Una rampa sube {{dy}} m verticalmente por cada {{dx}} m horizontales. ¿Cuál es tan(θ) de su inclinación?",
      { dy, dx }
    ),
    opciones: uniqueOptions(tanTheta, [formatNum(dx / dy), formatNum((dy + dx) / dx), formatNum(dy / (dy + dx))]),
    indiceCorrecto: 0,
    explicacion: "La pendiente trigonométrica es tan(θ)=Δy/Δx.",
  });
};

export default generarTrigonometriaAplicada;
