import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
  randomInt,
} from "./generic";
import { getRangoConFallback } from "./limits";
import { preloadGeneradoresTema } from "../generadores_api";
import { construirEnunciado } from "./tema56_59_enunciados";
import type { TrigonometriaSpec } from "../../visualizadores/types";

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
  const [angleMinRaw, angleMaxRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "angulo");
  const [lengthMinRaw, lengthMaxRaw] = getRangoConFallback(ID_TEMA, dificultad, fallbackRangos, "longitud");
  return {
    angleMin: clamp(angleMinRaw, 5, 85),
    angleMax: clamp(angleMaxRaw, 5, 85),
    lengthMin: clamp(lengthMinRaw, 1, 50),
    lengthMax: clamp(lengthMaxRaw, 1, 50),
  };
};

const BASE_TRIG_IDENTITIES: TrigonometriaSpec["identities"] = [
  { id: "sin", expression: "sin(θ) = opuesto / hipotenusa" },
  { id: "cos", expression: "cos(θ) = adyacente / hipotenusa" },
  { id: "tan", expression: "tan(θ) = opuesto / adyacente" },
];

const generarTrigonometriaBasica: GeneratorFn = (dificultad: Dificultad = "basico") => {
  void preloadGeneradoresTema(ID_TEMA);
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
    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "trig.basica.razon",
          fallback: "En un triángulo rectángulo, si el cateto opuesto mide {{opuesto}} y el adyacente {{adyacente}}, ¿cuál es tan(θ)?",
          variables: { opuesto, adyacente },
        }),
        opciones: uniqueOptions(correcta, [
          formatNum(adyacente / opuesto),
          formatNum(opuesto + adyacente),
          formatNum(opuesto / (opuesto + adyacente)),
        ]),
        indiceCorrecto: 0,
        explicacion: "La tangente de un ángulo agudo se calcula como cateto opuesto dividido entre cateto adyacente.",
      }),
      visual: {
        kind: "trigonometria" as const,
        title: "Triángulo rectángulo",
        description: `Cateto opuesto = ${opuesto}, cateto adyacente = ${adyacente}`,
        identities: BASE_TRIG_IDENTITIES,
        angles: [{ id: "theta", label: "θ", value: "?", ratio: `tan(θ) = ${opuesto}/${adyacente}` }],
      } satisfies TrigonometriaSpec,
    };
  }

  if (variante === "lado") {
    const tipo = pickRandom(["30", "45", "60"] as const);
    const base = randomInt(lengthMin, lengthMax);

    if (tipo === "45") {
      return {
        ...crearQuizBase({
          idTema: ID_TEMA,
          tituloTema: TITULO,
          dificultad,
          enunciado: construirEnunciado({
            idTema: ID_TEMA,
            dificultad,
            claveSubtipo: "trig.basica.lado",
            fallback: "En un triángulo rectángulo isósceles (45°-45°-90°), si un cateto mide {{base}}, ¿cuánto mide el otro cateto?",
            variables: { base },
          }),
          opciones: uniqueOptions(base, [base + 1, Math.max(1, base - 1), base * 2]),
          indiceCorrecto: 0,
          explicacion: "En un triángulo 45°-45°-90°, ambos catetos son iguales.",
        }),
        visual: {
          kind: "trigonometria" as const,
          title: "Triángulo 45°-45°-90°",
          identities: [{ id: "45", expression: "catetos iguales, hipotenusa = cateto × √2" }],
          angles: [
            { id: "a1", label: "45°", value: "45°", ratio: "cateto = base" },
            { id: "a2", label: "45°", value: "45°", ratio: "cateto = base" },
            { id: "a3", label: "90°", value: "90°" },
          ],
        } satisfies TrigonometriaSpec,
      };
    }

    if (tipo === "30") {
      return {
        ...crearQuizBase({
          idTema: ID_TEMA,
          tituloTema: TITULO,
          dificultad,
          enunciado: construirEnunciado({
            idTema: ID_TEMA,
            dificultad,
            claveSubtipo: "trig.basica.lado",
            fallback: "En un triángulo 30°-60°-90°, si el cateto opuesto a 30° mide {{base}}, ¿cuánto mide la hipotenusa?",
            variables: { base },
          }),
          opciones: uniqueOptions(base * 2, [base, base * 3, formatNum(base * 1.5)]),
          indiceCorrecto: 0,
          explicacion: "En un triángulo 30°-60°-90°, la hipotenusa es el doble del cateto opuesto a 30°.",
        }),
        visual: {
          kind: "trigonometria" as const,
          title: "Triángulo 30°-60°-90°",
          identities: [{ id: "306090", expression: "lados en razón 1 : √3 : 2" }],
          angles: [
            { id: "a30", label: "30°", value: "30°", ratio: `cateto opuesto = ${base}` },
            { id: "a60", label: "60°", value: "60°" },
            { id: "a90", label: "90°", value: "90°" },
          ],
        } satisfies TrigonometriaSpec,
      };
    }

    return {
      ...crearQuizBase({
        idTema: ID_TEMA,
        tituloTema: TITULO,
        dificultad,
        enunciado: construirEnunciado({
          idTema: ID_TEMA,
          dificultad,
          claveSubtipo: "trig.basica.lado",
          fallback: "En un triángulo 30°-60°-90°, si el cateto opuesto a 30° mide {{base}}, ¿cuánto mide el cateto opuesto a 60°?",
          variables: { base },
        }),
        opciones: uniqueOptions(formatNum(base * Math.sqrt(3)), [base * 2, base, formatNum(base * 1.5)]),
        indiceCorrecto: 0,
        explicacion: "En un triángulo 30°-60°-90°, los lados están en razón 1 : √3 : 2.",
      }),
      visual: {
        kind: "trigonometria" as const,
        title: "Triángulo 30°-60°-90°",
        identities: [{ id: "306090", expression: "lados en razón 1 : √3 : 2" }],
        angles: [
          { id: "a30", label: "30°", value: "30°", ratio: `cateto opuesto = ${base}` },
          { id: "a60", label: "60°", value: "60°", ratio: `cateto opuesto = ${formatNum(base * Math.sqrt(3))}` },
          { id: "a90", label: "90°", value: "90°" },
        ],
      } satisfies TrigonometriaSpec,
    };
  }

  const angulo = randomInt(Math.max(10, angleMin), Math.min(80, angleMax));
  const complementario = 90 - angulo;
  return {
    ...crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado({
        idTema: ID_TEMA,
        dificultad,
        claveSubtipo: "trig.basica.complementario",
        fallback: "En un triángulo rectángulo, si un ángulo agudo mide {{angulo}}°, ¿cuánto mide su complementario?",
        variables: { angulo },
      }),
      opciones: uniqueOptions(complementario, [complementario + 5, Math.max(1, complementario - 5), 180 - angulo]),
      indiceCorrecto: 0,
      explicacion: "En triángulos rectángulos, los ángulos agudos son complementarios y suman 90°.",
    }),
    visual: {
      kind: "trigonometria" as const,
      title: "Ángulos complementarios",
      identities: [{ id: "comp", expression: "α + β = 90° (en triángulo rectángulo)" }],
      angles: [
        { id: "alpha", label: "α", value: `${angulo}°` },
        { id: "beta", label: "β", value: "?", ratio: `β = 90° - ${angulo}°` },
        { id: "rect", label: "90°", value: "90°" },
      ],
    } satisfies TrigonometriaSpec,
  };
};

export default generarTrigonometriaBasica;
