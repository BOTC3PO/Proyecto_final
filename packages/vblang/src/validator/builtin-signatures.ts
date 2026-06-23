import { T, type VBType } from "./types.js";

export interface BuiltinSignature {
  params: VBType[];
  /** Si está definido, se aceptan params + estos como opcionales */
  optionalParams?: VBType[];
  /** El último param se repite */
  variadic?: boolean;
  returns: VBType;
  /** Retorno dependiente de los tipos de argumento */
  returnsFn?: (argTypes: VBType[]) => VBType;
}

export const BUILTIN_SIGNATURES: Record<string, BuiltinSignature> = {
  // Aleatoriedad
  random: { params: [T.number, T.number], returns: T.number },
  random_float: {
    params: [T.number, T.number],
    optionalParams: [T.number],
    returns: T.number,
  },
  uno_de: {
    params: [T.array(T.unknown)],
    returns: T.unknown,
    returnsFn: (args) =>
      args[0]?.kind === "array" ? args[0].element : T.unknown,
  },
  n_de: {
    params: [T.array(T.unknown), T.number],
    returns: T.array(T.unknown),
    returnsFn: (args) =>
      args[0]?.kind === "array" ? T.array(args[0].element) : T.array(T.unknown),
  },
  mezclar: {
    params: [T.array(T.unknown)],
    returns: T.array(T.unknown),
    returnsFn: (args) =>
      args[0]?.kind === "array" ? T.array(args[0].element) : T.array(T.unknown),
  },

  // Strings
  capitalizar: { params: [T.string], returns: T.string },
  mayusculas: { params: [T.string], returns: T.string },
  minusculas: { params: [T.string], returns: T.string },
  // WO-11 — `concatenar` acepta number también: la implementación usa
  // `String(a)`, así que es seguro y permite ensambar strings con
  // variables numéricas sin necesidad de coerciones explícitas. Esto
  // desbloquea las plantillas simbólicas de Álgebra que arman la
  // expresión respuesta con números sorteados.
  concatenar: {
    params: [T.union(T.string, T.number)],
    variadic: true,
    returns: T.string,
  },
  longitud: {
    params: [T.union(T.string, T.array(T.unknown))],
    returns: T.number,
  },

  // Aritmética
  sqrt: { params: [T.number], returns: T.number },
  raiz: { params: [T.number, T.number], returns: T.number },
  redondear: {
    params: [T.number],
    optionalParams: [T.number],
    returns: T.number,
  },
  signo: { params: [T.number], returns: T.number },
  // abs movido de MATHJS_SIGNATURES a BUILTIN_SIGNATURES en WO-8: ahora es un
  // builtin de primera clase. El evaluador lo implementa explícitamente (con
  // validación de NaN), no delega en math.js. La firma no cambia.
  abs: { params: [T.number], returns: T.number },

  // Teoría de números (WO-8)
  mcd: { params: [T.number, T.number], returns: T.number },
  mcm: { params: [T.number, T.number], returns: T.number },
  es_primo: { params: [T.number], returns: T.boolean },
  divisores: { params: [T.number], returns: T.array(T.number) },
  factorizar: { params: [T.number], returns: T.array(T.number) },
  // Fracción simplificada: string "p/q" con denominador > 0 y signo en p.
  // Devuelve un string (no un objeto/par) para que sea directamente usable
  // como `respuesta:` de un `input` y para poder interpolarlo en
  // enunciados/pasos sin transformación adicional.
  fraccion: { params: [T.number, T.number], returns: T.string },

  // Arrays
  largo: { params: [T.array(T.unknown)], returns: T.number },
  primero: {
    params: [T.array(T.unknown)],
    returns: T.unknown,
    returnsFn: (args) =>
      args[0]?.kind === "array" ? args[0].element : T.unknown,
  },
  ultimo: {
    params: [T.array(T.unknown)],
    returns: T.unknown,
    returnsFn: (args) =>
      args[0]?.kind === "array" ? args[0].element : T.unknown,
  },
  sumar: { params: [T.array(T.number)], returns: T.number },
  promedio: { params: [T.array(T.number)], returns: T.number },
  mediana: { params: [T.array(T.number)], returns: T.number },
  // moda devuelve el valor más frecuente (unknown) o null si no hay moda
  // (todos los elementos aparecen 1 vez, o hay empate entre varias modas).
  moda: { params: [T.array(T.unknown)], returns: T.unknown },
  ordenar: {
    params: [T.array(T.unknown)],
    returns: T.array(T.unknown),
    returnsFn: (args) =>
      args[0]?.kind === "array" ? T.array(args[0].element) : T.array(T.unknown),
  },
  ordenar_por: {
    params: [T.array(T.unknown), T.string],
    returns: T.array(T.unknown),
    returnsFn: (args) =>
      args[0]?.kind === "array" ? T.array(args[0].element) : T.array(T.unknown),
  },
  unico: {
    params: [T.array(T.unknown)],
    returns: T.array(T.unknown),
    returnsFn: (args) =>
      args[0]?.kind === "array" ? T.array(args[0].element) : T.array(T.unknown),
  },

  // Predicados
  es_numero: { params: [T.unknown], returns: T.boolean },
  es_positivo: { params: [T.unknown], returns: T.boolean },
  es_entero: { params: [T.unknown], returns: T.boolean },

  // Trigonometría en grados
  sin_deg: { params: [T.number], returns: T.number },
  cos_deg: { params: [T.number], returns: T.number },
  tan_deg: { params: [T.number], returns: T.number },
  asin_deg: { params: [T.number], returns: T.number },
  acos_deg: { params: [T.number], returns: T.number },
  atan_deg: { params: [T.number], returns: T.number },

  // Otros
  unidad: { params: [T.string], returns: T.unknown },
  error: { params: [T.string], returns: T.never },

  // Álgebra simbólica (WO-11). Reciben strings (notación math.js) y
  // delegan en `evaluator/symbolic.ts` (que usa su propia instancia
  // math.js, no el sandbox del DSL).
  derivar: { params: [T.string, T.string], returns: T.string },
  simplificar_expr: { params: [T.string], returns: T.string },
  evaluar_en: { params: [T.string, T.string, T.number], returns: T.number },
};

export const MATHJS_SIGNATURES: Record<string, BuiltinSignature> = {
  // WO-8: `abs` se movió a BUILTIN_SIGNATURES (es nuestro, no de math.js).
  log: { params: [T.number], returns: T.number },
  ln: { params: [T.number], returns: T.number },
  log10: { params: [T.number], returns: T.number },
  exp: { params: [T.number], returns: T.number },
  sin: { params: [T.number], returns: T.number },
  cos: { params: [T.number], returns: T.number },
  tan: { params: [T.number], returns: T.number },
  asin: { params: [T.number], returns: T.number },
  acos: { params: [T.number], returns: T.number },
  atan: { params: [T.number], returns: T.number },
  min: { params: [T.number], variadic: true, returns: T.number },
  max: { params: [T.number], variadic: true, returns: T.number },
  pow: { params: [T.number, T.number], returns: T.number },
  floor: { params: [T.number], returns: T.number },
  ceil: { params: [T.number], returns: T.number },
};

export function lookupSignature(name: string): BuiltinSignature | undefined {
  return BUILTIN_SIGNATURES[name] ?? MATHJS_SIGNATURES[name];
}

export function allSignatureNames(): string[] {
  return [
    ...Object.keys(BUILTIN_SIGNATURES),
    ...Object.keys(MATHJS_SIGNATURES),
  ];
}
