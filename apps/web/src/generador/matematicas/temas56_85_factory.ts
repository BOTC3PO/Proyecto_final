import {
  type Dificultad,
  pickRandom,
  type GeneratorFn,
  crearQuizBase,
  randomInt,
  normalizarDificultadCore,
} from "./generic";
import { getRangoConFallback } from "./limits";

type DificultadCore = "basico" | "intermedio" | "avanzado";

type TemaNuevoConfig = {
  idTema: number;
  titulo: string;
};

type Ctx = {
  idTema: number;
  titulo: string;
  dificultad: Dificultad;
};

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
    if (!opciones.includes(valor)) {
      opciones.push(valor);
    }
    if (opciones.length === 4) break;
  }
  let extra = 1;
  while (opciones.length < 4) {
    opciones.push(String(`${correcta} (${extra})`));
    extra += 1;
  }
  return opciones;
};

const getTrigRanges = (ctx: Ctx) => {
  const [min, max] = getRangoConFallback(ctx.idTema, ctx.dificultad, fallbackRangos, "numeros");
  return {
    min,
    max,
    angleMin: clamp(min, 5, 85),
    angleMax: clamp(max, 5, 85),
    lengthMin: clamp(min, 1, 50),
    lengthMax: clamp(max, 1, 50),
  };
};

const genTrig56_Basica = (ctx: Ctx): ReturnType<typeof crearQuizBase> => {
  const { angleMin, angleMax, lengthMin, lengthMax } = getTrigRanges(ctx);
  const dificultadCore = normalizarDificultadCore(ctx.dificultad);
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
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: `En un triángulo rectángulo, si el cateto opuesto mide ${opuesto} y el adyacente ${adyacente}, ¿cuál es tan(θ)?`,
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
      const correcta = base;
      return crearQuizBase({
        idTema: ctx.idTema,
        tituloTema: ctx.titulo,
        dificultad: ctx.dificultad,
        enunciado: `En un triángulo rectángulo isósceles (45°-45°-90°), si un cateto mide ${base}, ¿cuánto mide el otro cateto?`,
        opciones: uniqueOptions(correcta, [base + 1, Math.max(1, base - 1), base * 2]),
        indiceCorrecto: 0,
        explicacion: "En un triángulo 45°-45°-90°, ambos catetos son iguales.",
      });
    }

    if (tipo === "30") {
      const correcta = base;
      return crearQuizBase({
        idTema: ctx.idTema,
        tituloTema: ctx.titulo,
        dificultad: ctx.dificultad,
        enunciado: `En un triángulo 30°-60°-90°, si el cateto opuesto a 30° mide ${base}, ¿cuánto mide la hipotenusa?`,
        opciones: uniqueOptions(correcta * 2, [correcta, correcta * 3, formatNum(correcta * 1.5)]),
        indiceCorrecto: 0,
        explicacion: "En un triángulo 30°-60°-90°, la hipotenusa es el doble del cateto opuesto a 30°.",
      });
    }

    const correcta = base;
    return crearQuizBase({
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: `En un triángulo 30°-60°-90°, si el cateto opuesto a 30° mide ${base}, ¿cuánto mide el cateto opuesto a 60°?`,
      opciones: uniqueOptions(formatNum(correcta * Math.sqrt(3)), [correcta * 2, correcta, formatNum(correcta * 1.5)]),
      indiceCorrecto: 0,
      explicacion: "En un triángulo 30°-60°-90°, los lados están en razón 1 : √3 : 2.",
    });
  }

  const angulo = randomInt(Math.max(10, angleMin), Math.min(80, angleMax));
  const complementario = 90 - angulo;
  return crearQuizBase({
    idTema: ctx.idTema,
    tituloTema: ctx.titulo,
    dificultad: ctx.dificultad,
    enunciado: `En un triángulo rectángulo, si un ángulo agudo mide ${angulo}°, ¿cuánto mide su complementario?`,
    opciones: uniqueOptions(complementario, [complementario + 5, Math.max(1, complementario - 5), 180 - angulo]),
    indiceCorrecto: 0,
    explicacion: "En triángulos rectángulos, los ángulos agudos son complementarios y suman 90°.",
  });
};

const genTrig57_Aplicada = (ctx: Ctx): ReturnType<typeof crearQuizBase> => {
  const { lengthMin, lengthMax } = getTrigRanges(ctx);
  const dificultadCore = normalizarDificultadCore(ctx.dificultad);
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
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: `Un poste proyecta una sombra de ${sombra} m y el ángulo de elevación del sol es ${angulo}°. ¿Cuál es la altura del poste?`,
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
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: `Desde un punto del suelo se observa la cima de un edificio de ${altura} m con un ángulo de elevación de ${angulo}°. ¿A qué distancia horizontal está el edificio?`,
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
    idTema: ctx.idTema,
    tituloTema: ctx.titulo,
    dificultad: ctx.dificultad,
    enunciado: `Una rampa sube ${dy} m verticalmente por cada ${dx} m horizontales. ¿Cuál es tan(θ) de su inclinación?`,
    opciones: uniqueOptions(tanTheta, [formatNum(dx / dy), formatNum((dy + dx) / dx), formatNum(dy / (dy + dx))]),
    indiceCorrecto: 0,
    explicacion: "La pendiente trigonométrica es tan(θ)=Δy/Δx.",
  });
};

const genTrig58_Identidades = (ctx: Ctx): ReturnType<typeof crearQuizBase> => {
  const dificultadCore = normalizarDificultadCore(ctx.dificultad);
  const variante =
    dificultadCore === "avanzado"
      ? pickRandom(["pitagorica", "simplificacion", "tansec", "tansec"] as const)
      : pickRandom(["pitagorica", "simplificacion", "tansec"] as const);

  if (variante === "pitagorica") {
    return crearQuizBase({
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: "Completa la identidad: sin²(x) + ____ = 1",
      opciones: uniqueOptions("cos²(x)", ["tan²(x)", "sec²(x)", "1 - sin(x)"]),
      indiceCorrecto: 0,
      explicacion: "La identidad pitagórica básica es sin²(x)+cos²(x)=1.",
    });
  }

  if (variante === "simplificacion") {
    return crearQuizBase({
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: "Simplifica la expresión: 1 − sin²(x)",
      opciones: uniqueOptions("cos²(x)", ["1 + sin²(x)", "cos(x)", "tan²(x)"]),
      indiceCorrecto: 0,
      explicacion: "De sin²(x)+cos²(x)=1 se obtiene 1−sin²(x)=cos²(x).",
    });
  }

  return crearQuizBase({
    idTema: ctx.idTema,
    tituloTema: ctx.titulo,
    dificultad: ctx.dificultad,
    enunciado: "Completa la identidad: 1 + tan²(x) = ____",
    opciones: uniqueOptions("sec²(x)", ["cosec²(x)", "cos²(x)", "1/cos(x)"]),
    indiceCorrecto: 0,
    explicacion: "La identidad pitagórica extendida es 1+tan²(x)=sec²(x).",
  });
};

const toAngleSet = (values: number[]): string =>
  [...new Set(values)].sort((a, b) => a - b).map((v) => `${v}°`).join(", ");

const genTrig59_Ecuaciones = (ctx: Ctx): ReturnType<typeof crearQuizBase> => {
  const dificultadCore = normalizarDificultadCore(ctx.dificultad);
  const variante =
    dificultadCore === "avanzado"
      ? pickRandom(["sinCos", "tan", "identidad"] as const)
      : pickRandom(["sinCos", "tan", "identidad", "sinCos"] as const);

  if (variante === "sinCos") {
    const casos = [
      { enunciado: "sin(θ)=0", correcta: toAngleSet([0, 180, 360]), distractores: [toAngleSet([0, 180]), toAngleSet([90, 270]), toAngleSet([0, 360])] },
      { enunciado: "sin(θ)=1/2", correcta: toAngleSet([30, 150]), distractores: [toAngleSet([30]), toAngleSet([30, 330]), toAngleSet([60, 120])] },
      { enunciado: "cos(θ)=0", correcta: toAngleSet([90, 270]), distractores: [toAngleSet([0, 180]), toAngleSet([90]), toAngleSet([45, 225])] },
      { enunciado: "cos(θ)=1/2", correcta: toAngleSet([60, 300]), distractores: [toAngleSet([60, 120]), toAngleSet([300]), toAngleSet([30, 330])] },
      { enunciado: "cos(θ)=-1/2", correcta: toAngleSet([120, 240]), distractores: [toAngleSet([60, 240]), toAngleSet([120]), toAngleSet([150, 210])] },
    ] as const;
    const caso = pickRandom(casos);
    return crearQuizBase({
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: `Resuelve ${caso.enunciado} para θ en [0°, 360°].`,
      opciones: uniqueOptions(caso.correcta, [...caso.distractores]),
      indiceCorrecto: 0,
      explicacion: "Se usan valores notables del círculo trigonométrico en el dominio [0°,360°].",
    });
  }

  if (variante === "tan") {
    const casos = [
      { enunciado: "tan(θ)=1", correcta: toAngleSet([45, 225]), distractores: [toAngleSet([45, 135]), toAngleSet([90, 270]), toAngleSet([225])] },
      { enunciado: "tan(θ)=0", correcta: toAngleSet([0, 180, 360]), distractores: [toAngleSet([0, 180]), toAngleSet([90, 270]), toAngleSet([45, 225])] },
    ] as const;
    const caso = pickRandom(casos);
    return crearQuizBase({
      idTema: ctx.idTema,
      tituloTema: ctx.titulo,
      dificultad: ctx.dificultad,
      enunciado: `Resuelve ${caso.enunciado} para θ en [0°, 360°].`,
      opciones: uniqueOptions(caso.correcta, [...caso.distractores]),
      indiceCorrecto: 0,
      explicacion: "La tangente tiene período 180° y se validan todas las soluciones del dominio.",
    });
  }

  return crearQuizBase({
    idTema: ctx.idTema,
    tituloTema: ctx.titulo,
    dificultad: ctx.dificultad,
    enunciado: "Resuelve sin²(θ)=1/4 para θ en [0°, 360°].",
    opciones: uniqueOptions(toAngleSet([30, 150, 210, 330]), [toAngleSet([30, 150]), toAngleSet([60, 120, 240, 300]), toAngleSet([30, 330])]),
    indiceCorrecto: 0,
    explicacion: "Si sin²(θ)=1/4 entonces sin(θ)=±1/2, y se toman los cuatro ángulos del dominio.",
  });
};

const generatorsByTema = {
  56: genTrig56_Basica,
  57: genTrig57_Aplicada,
  58: genTrig58_Identidades,
  59: genTrig59_Ecuaciones,
};

const generarTrigonometria = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const [min, max] = getRangoConFallback(idTema, dificultad, fallbackRangos, "numeros");
  const angulo = randomInt(Math.max(10, min), Math.min(80, max));
  const complementario = 90 - angulo;
  const correcto = complementario;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `En un triángulo rectángulo, si un ángulo agudo mide ${angulo}°, ¿cuánto mide su complementario?`,
    opciones: [correcto, correcto + 5, correcto - 5, 180 - angulo],
    indiceCorrecto: 0,
    explicacion: "En triángulos rectángulos, los ángulos agudos son complementarios y suman 90°.",
  });
};

const generarExponencialLog = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const base = randomInt(2, 5);
  const exponente = randomInt(2, normalizarDificultadCore(dificultad) === "avanzado" ? 6 : 4);
  const valor = base ** exponente;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Calcula ${base}^${exponente}.`,
    opciones: [valor, valor + base, valor - base, base * exponente],
    indiceCorrecto: 0,
    explicacion: "Una potencia multiplica la base por sí misma tantas veces como indique el exponente.",
  });
};

const generarComplejosMatrices = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const [min, max] = getRangoConFallback(idTema, dificultad, fallbackRangos, "numeros");
  const a = randomInt(min, max);
  const b = randomInt(min, max);
  const c = randomInt(min, max);
  const d = randomInt(min, max);
  const det = a * d - b * c;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Para la matriz 2x2 A = [[${a}, ${b}], [${c}, ${d}]], ¿cuál es det(A)?`,
    opciones: [det, a * d + b * c, a + d, b - c],
    indiceCorrecto: 0,
    explicacion: "Para matrices 2x2, det(A)=ad−bc.",
  });
};

const generarCalculo = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const coef = randomInt(2, 9);
  const exp = randomInt(2, normalizarDificultadCore(dificultad) === "basico" ? 3 : 5);
  const nuevoCoef = coef * exp;
  const nuevoExp = exp - 1;
  const derivada = nuevoExp === 0 ? `${nuevoCoef}` : `${nuevoCoef}x^${nuevoExp}`;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Deriva f(x) = ${coef}x^${exp}.`,
    opciones: [derivada, `${coef + exp}x^${exp}`, `${coef}x^${exp - 1}`, `${coef * exp}x^${exp}`],
    indiceCorrecto: 0,
    explicacion: "Regla de la potencia: d/dx(ax^n)=a·n·x^(n−1).",
  });
};

const generarProbabilidadEstadistica = (idTema: number, titulo: string, dificultad: Dificultad) => {
  const total = randomInt(20, 100);
  const favorables = randomInt(1, total - 1);
  const prob = favorables / total;
  return crearQuizBase({
    idTema,
    tituloTema: titulo,
    dificultad,
    enunciado: `Si hay ${favorables} casos favorables de ${total} posibles, ¿cuál es la probabilidad?`,
    opciones: [formatNum(prob), formatNum(1 - prob), formatNum(total / favorables), formatNum(favorables + total)],
    indiceCorrecto: 0,
    explicacion: "Probabilidad clásica: casos favorables / casos posibles.",
  });
};

export function crearGeneradorTemaNuevo({ idTema, titulo }: TemaNuevoConfig): GeneratorFn {
  return (dificultad: Dificultad = "basico") => {
    const gen = generatorsByTema[idTema as keyof typeof generatorsByTema];
    if (gen) {
      return gen({ idTema, titulo, dificultad });
    }
    if (idTema <= 59) return generarTrigonometria(idTema, titulo, dificultad);
    if (idTema <= 63) return generarExponencialLog(idTema, titulo, dificultad);
    if (idTema <= 70) return generarComplejosMatrices(idTema, titulo, dificultad);
    if (idTema <= 80) return generarCalculo(idTema, titulo, dificultad);
    return generarProbabilidadEstadistica(idTema, titulo, dificultad);
  };
}
