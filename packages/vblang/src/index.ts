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
// PLAN casos-limite §7 — corrección numérica compartida (api + web preview).
export {
  respuestaNumericaCorrecta,
  toleranciaEfectiva,
  usaToleranciaPorDefecto,
  TOLERANCIA_ABS_POR_DEFECTO,
  TOLERANCIA_REL_POR_DEFECTO,
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
export { camposToVisualSpec } from "./runtime/visual.js";
export {
  generateConResorteo,
  ResorteoAgotadoError,
  RESORTEO_TOPE_DEFAULT,
} from "./runtime/resorteo.js";
export type { ResorteoOptions } from "./runtime/resorteo.js";
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

// WO-11 — equivalencia simbólica para respuestas algebraicas.
export {
  sonEquivalentes,
  type ResultadoEquivalencia,
  type MetodoEquivalencia,
  type EquivalenciaOpts,
} from "./evaluator/symbolic.js";

export {
  toModuleQuizQuestion,
  spanToKey,
  spanFromKey,
} from "./adapters/to-module-quiz-question.js";
export { AdapterError } from "./adapters/errors.js";
// PLAN-E §21 Parte B — tokenización compartida editor/player (palabra = token
// por espacios; misma unidad que los índices de `spans_pedidos`).
export { splitPalabras } from "./runtime/generate-special.js";

// F6-04 — Plantillas oficiales VBLang (EconomiaAR).
export { ECONOMIA_AR_OFICIALES } from "./templates/economia-ar-oficiales.js";
export type { PlantillaOficialEconomiaAR } from "./templates/economia-ar-oficiales.js";

// F6-05 — Plantillas oficiales VBLang (Biología, Química, Informática, Matemáticas).
export type { PlantillaOficial } from "./templates/types.js";
export { BIOLOGIA_OFICIALES } from "./templates/biologia-oficiales.js";
export { QUIMICA_OFICIALES } from "./templates/quimica-oficiales.js";
export { INFORMATICA_OFICIALES } from "./templates/informatica-oficiales.js";
export { MATEMATICAS_OFICIALES } from "./templates/matematicas-oficiales.js";

// WO-7 — Plantillas oficiales VBLang (Matemáticas/Aritmética), porting
// generador paramétrico → plantilla DSL con contrato de equivalencia.
export { MATEMATICAS_ARITMETICA_OFICIALES } from "./templates/matematicas-aritmetica-oficiales.js";

// WO-11 — Plantillas oficiales VBLang (Matemáticas/Álgebra), porting
// de los 3 primeros subtipos con respuesta simbólica (terminos_semejantes,
// multiplicacion_monomios, factorizacion_basica). Verificación end-to-end
// de la capacidad de equivalencia simbólica. Ver
// `docs/vblang/wo-11-eje-simbolico.md` y
// `apps/web/.../algebra-equivalencia.spec.ts`.
export { MATEMATICAS_ALGEBRA_OFICIALES } from "./templates/matematicas-algebra-oficiales.js";

// WO-11d — Plantillas oficiales VBLang (Matemáticas/Cálculo), porting
// masivo de 10 subtipos (mezcla simbólica + numérica). Ver
// `apps/web/.../calculo-equivalencia.spec.ts`. Los 5 subtipos no
// portadaos son MC conceptuales o formatos especiales (constante
// libre C, multi-statement string) — gaps documentados en el doc
// de la plantilla.
export { MATEMATICAS_CALCULO_OFICIALES } from "./templates/matematicas-calculo-oficiales.js";

// WO-11e — Plantillas oficiales VBLang (Matemáticas/Análisis y Avanzado),
// cierre del eje 2. 16 subtipos de `AnalisisYAvanzado.ts` (todos
// rama basico). Ver `apps/web/.../analisis-equivalencia.spec.ts`.
export { MATEMATICAS_ANALISIS_OFICIALES } from "./templates/matematicas-analisis-oficiales.js";

// WO-7c — Plantillas oficiales VBLang (Química: Estequiometría +
// Termoquímica), porting de 9 subtipos numéricos (no conflictúa
// con `quimica-oficiales.ts` que es F6-05 de partículas
// subatómicas y configuración electrónica). Verificación en
// `apps/web/.../quimica-equivalencia.spec.ts`.
export { QUIMICA_ESTEQUEOMETRIA_OFICIALES } from "./templates/quimica-estequeometria-oficiales.js";

// WO-7c — Plantillas oficiales VBLang (Economía General), porting
// de 11 plantillas numéricas (9 subtipos, 3 ramas de
// `porcentajes_simples` separadas). Verificación en
// `apps/web/.../economia-equivalencia.spec.ts`.
export { ECONOMIA_GENERAL_OFICIALES } from "./templates/economia-general-oficiales.js";

// WO-7b — Plantillas oficiales VBLang (Física/Cinemática), porting de MRU,
// MRUV, caída libre, relación d/v/t y conversión de unidades. Verificación en
// `apps/web/src/generadoresV2/__tests__/porting-fisica-equivalencia.spec.ts`.
export { FISICA_CINEMATICA_OFICIALES } from "./templates/fisica-cinematica-oficiales.js";

// WO-7b-ext — Plantillas oficiales VBLang (Física: 6 áreas restantes).
// Porting numérico de Dinámica, Electricidad, Energía, Ondas, Fluidos y
// Termodinámica. 23 plantillas en total (los 2 subtipos basados en arrays
// de tamaño variable — `suma_fuerzas`, `resistencia_serie`,
// `resistencia_paralelo` — quedan como gap de builtins, documentados).
// Verificación: 6 archivos de equivalencia uno por área, en
// `apps/web/src/generadoresV2/__tests__/porting-fisica-<area>-equivalencia.spec.ts`.
export { FISICA_DINAMICA_OFICIALES } from "./templates/fisica-dinamica-oficiales.js";
export { FISICA_ELECTRICIDAD_OFICIALES } from "./templates/fisica-electricidad-oficiales.js";
export { FISICA_ENERGIA_OFICIALES } from "./templates/fisica-energia-oficiales.js";
export { FISICA_ONDAS_OFICIALES } from "./templates/fisica-ondas-oficiales.js";
export { FISICA_FLUIDOS_OFICIALES } from "./templates/fisica-fluidos-oficiales.js";
export { FISICA_TERMODINAMICA_OFICIALES } from "./templates/fisica-termodinamica-oficiales.js";

// WO-8 — Plantilla de cobertura de los builtins nuevos (teoría de números,
// estadística, valor absoluto, salida de fracción simplificada). Verificación
// end-to-end de la expansión del DSL.
export { MATEMATICAS_WO8_OFICIALES } from "./templates/matematicas-wo8-oficiales.js";

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
  AudioSpec,
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

// F7-01 — Referencia DSL auto-generada (base del generador de prompts F7-02).
export {
  diffBloques,
  diffBuiltins,
  generarReferenciaDsl,
  listaBloques,
  listaBuiltins,
  listaConstantesGlobales,
  listaEjemplos,
  nombresBuiltinsDisponibles,
  nombresBuiltinsRuntime,
  RESUMENES_BLOQUES,
  BLOCK_NAMES as REFERENCIA_BLOCK_NAMES,
} from "./reference/index.js";
export type {
  BloqueReferencia,
  BuiltinReferencia,
  EjemploTipoPregunta,
} from "./reference/index.js";

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
  ExplicacionBloque,
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
  RespuestaExprBloque,
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
  ToleranciaAbsBloque,
  UnidadBloque,
  VariableDecl,
  VariablesBloque,
  VisualBloque,
} from "./parser/ast.js";
