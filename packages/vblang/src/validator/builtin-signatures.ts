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
  concatenar: {
    params: [T.string],
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
};

export const MATHJS_SIGNATURES: Record<string, BuiltinSignature> = {
  abs: { params: [T.number], returns: T.number },
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
