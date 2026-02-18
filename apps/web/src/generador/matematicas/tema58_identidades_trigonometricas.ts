import {
  type Dificultad,
  type GeneratorFn,
  crearQuizBase,
  normalizarDificultadCore,
  pickRandom,
} from "./generic";

const ID_TEMA = 58;
const TITULO = "Identidades trigonométricas";

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

const generarIdentidadesTrigonometricas: GeneratorFn = (dificultad: Dificultad = "basico") => {
  const dificultadCore = normalizarDificultadCore(dificultad);
  const variante =
    dificultadCore === "avanzado"
      ? pickRandom(["pitagorica", "simplificacion", "tansec", "tansec"] as const)
      : pickRandom(["pitagorica", "simplificacion", "tansec"] as const);

  if (variante === "pitagorica") {
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado("Completa la identidad: sin²(x) + ____ = 1"),
      opciones: uniqueOptions("cos²(x)", ["tan²(x)", "sec²(x)", "1 - sin(x)"]),
      indiceCorrecto: 0,
      explicacion: "La identidad pitagórica básica es sin²(x)+cos²(x)=1.",
    });
  }

  if (variante === "simplificacion") {
    return crearQuizBase({
      idTema: ID_TEMA,
      tituloTema: TITULO,
      dificultad,
      enunciado: construirEnunciado("Simplifica la expresión: 1 − sin²(x)"),
      opciones: uniqueOptions("cos²(x)", ["1 + sin²(x)", "cos(x)", "tan²(x)"]),
      indiceCorrecto: 0,
      explicacion: "De sin²(x)+cos²(x)=1 se obtiene 1−sin²(x)=cos²(x).",
    });
  }

  return crearQuizBase({
    idTema: ID_TEMA,
    tituloTema: TITULO,
    dificultad,
    enunciado: construirEnunciado("Completa la identidad: 1 + tan²(x) = ____"),
    opciones: uniqueOptions("sec²(x)", ["cosec²(x)", "cos²(x)", "1/cos(x)"]),
    indiceCorrecto: 0,
    explicacion: "La identidad pitagórica extendida es 1+tan²(x)=sec²(x).",
  });
};

export default generarIdentidadesTrigonometricas;
