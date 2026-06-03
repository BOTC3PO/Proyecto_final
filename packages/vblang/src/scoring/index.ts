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
