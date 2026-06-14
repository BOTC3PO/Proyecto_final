export { parse } from "./parser/parser.js";
export { emitExpr, serialize } from "./serializer/serialize.js";

// WO14 — Catálogo de escalas de nota + conversión.
export {
  SCORING_SYSTEMS,
  DEFAULT_SCORING_SYSTEM_ID,
  getScoringSystem,
  pctToCanonical10,
  passingCutoffPct,
  resolveGrade,
  gradeFromConfig,
} from "./scoring/index.js";
export type {
  ScoringKind,
  ScoringConfig,
  ScoringSystem,
  NumericScoringSystem,
  BandedScoringSystem,
  BinaryScoringSystem,
  GradeBand,
  ResolvedGrade,
} from "./scoring/index.js";
export { compile } from "./runtime/compile.js";
export { generate } from "./runtime/generate.js";
export { createPrng } from "./runtime/prng.js";
export { ParseError } from "./parser/errors.js";
export { LexError } from "./lexer/errors.js";
export {
  EvalError,
  RestriccionesNoSatisfechasError,
} from "./evaluator/errors.js";
export { lint } from "./validator/linter.js";
export type { LintOptions } from "./validator/linter.js";
import { CONSTANTES_GLOBALES } from "./evaluator/constants.js";
export { CONSTANTES_GLOBALES };
export { BUILTIN_NAMES, builtinNames } from "./evaluator/builtins.js";
export const GLOBAL_CONSTANTS: readonly string[] = Object.keys(
  CONSTANTES_GLOBALES,
).sort();
export { validate } from "./validator/validator.js";
export {
  T,
  isAssignable,
  simplifyUnion,
  typeToString,
} from "./validator/types.js";

export { toModuleQuizQuestion } from "./adapters/to-module-quiz-question.js";
export { AdapterError } from "./adapters/errors.js";

export {
  ALL_QUESTION_TYPES,
  DASH_LIST_BLOCKS,
  getQuestionSchema,
  QUESTION_TYPE_SCHEMAS,
} from "./schema/index.js";
export type {
  BoolField,
  DashListBlock,
  EnumField,
  EnumOption,
  Field,
  FieldKind,
  ListField,
  ListItemShape,
  NumberField,
  QuestionTypeSchema,
  TextField,
} from "./schema/index.js";

export type {
  CircuitSpec,
  LatexSpec,
  LineChartSpec,
  StaticImageSpec,
  TimelineSpec,
  VectorDiagramSpec,
  VisualSpec,
} from "./types/visual.js";
export type {
  AdapterOptions,
  ModuleQuizQuestion,
  ModuleQuizQuestionType,
} from "./adapters/module-quiz-question.js";
export type {
  GeneradorAsistidoEjercicio,
  GeneradorAsistidoProvider,
} from "./runtime/provider.js";

export type { PRNG } from "./runtime/prng.js";
export type {
  CompiledPlantilla,
  GenerationOptions,
  GenerationResult,
  OpcionGenerada,
} from "./runtime/types.js";
export type {
  LintIssue,
  LintReport,
  VBType,
} from "./validator/types.js";
export type {
  ValidationError,
  ValidationReport,
  ValidateOptions,
} from "./validator/validator.js";

export type {
  Bloque,
  BloqueKind,
  BinOpKind,
  CampoKV,
  CorreccionBloque,
  CorreccionModo,
  DatasetBloque,
  EnunciadoBloque,
  EnunciadosBloque,
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
  PistasBloque,
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
