export { parse } from "./parser/parser.js";
export { compile } from "./runtime/compile.js";
export { generate } from "./runtime/generate.js";
export { createPrng } from "./runtime/prng.js";
export { ParseError } from "./parser/errors.js";
export { LexError } from "./lexer/errors.js";
export {
  EvalError,
  RestriccionesNoSatisfechasError,
} from "./evaluator/errors.js";

export type { PRNG } from "./runtime/prng.js";
export type {
  CompiledPlantilla,
  GenerationOptions,
  GenerationResult,
  OpcionGenerada,
} from "./runtime/types.js";

export type {
  Bloque,
  BloqueKind,
  BinOpKind,
  CampoKV,
  DatasetBloque,
  EnunciadoBloque,
  EtiquetaPedida,
  EtiquetasPedidasBloque,
  Expr,
  GeneradorBloque,
  Interpolacion,
  Loc,
  MapaBloque,
  MetadataBloque,
  ObjectEntry,
  OpcionesBloque,
  OpcionesExplicitasBloque,
  PasoItem,
  PasosBloque,
  Plantilla,
  RangeIter,
  RespuestaBloque,
  RespuestaIsoBloque,
  RespuestaNombreBloque,
  RespuestaOrdenBloque,
  RespuestasValidasBloque,
  RestriccionesBloque,
  TextoAnalizarBloque,
  TextoLiteral,
  TextoOInterpolacion,
  TipoBloque,
  TipoPregunta,
  ToleranciaBloque,
  UnidadBloque,
  VariableDecl,
  VariablesBloque,
  VisualBloque,
} from "./parser/ast.js";

export function validate(compiled: unknown, opts?: unknown): never {
  void compiled;
  void opts;
  throw new Error("not implemented: validate");
}
