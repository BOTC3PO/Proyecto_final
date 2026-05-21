export { parse } from "./parser/parser.js";
export { ParseError } from "./parser/errors.js";
export { LexError } from "./lexer/errors.js";

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

export function compile(ast: unknown): never {
  void ast;
  throw new Error("not implemented: compile");
}

export function generate(compiled: unknown, opts?: unknown): never {
  void compiled;
  void opts;
  throw new Error("not implemented: generate");
}

export function validate(compiled: unknown, opts?: unknown): never {
  void compiled;
  void opts;
  throw new Error("not implemented: validate");
}
