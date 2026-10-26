// WO14 — Catálogo de escalas + conversión a nota. Consumible por api y web.
export {
  SCORING_SYSTEMS,
  DEFAULT_SCORING_SYSTEM_ID,
  getScoringSystem,
} from "./catalog.js";
export {
  pctToCanonical10,
  passingCutoffPct,
  resolveGrade,
  gradeFromConfig,
} from "./convert.js";
// PLAN casos-limite §7 — corrección numérica compartida (api + web).
export {
  respuestaNumericaCorrecta,
  toleranciaEfectiva,
  usaToleranciaPorDefecto,
  TOLERANCIA_ABS_POR_DEFECTO,
  TOLERANCIA_REL_POR_DEFECTO,
} from "./respuesta-numerica.js";
export type {
  ScoringKind,
  ScoringConfig,
  ScoringSystem,
  NumericScoringSystem,
  BandedScoringSystem,
  BinaryScoringSystem,
  GradeBand,
  ResolvedGrade,
} from "./types.js";
