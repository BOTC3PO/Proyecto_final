// WO14 — Conversión del puntaje interno a la nota de la escuela + aprobación.
//
// Eje canónico = % interno = rawRatio * 100. Se convierte SIEMPRE desde el ratio
// crudo (score/maxScore), nunca desde un porcentaje ya redondeado (evita doble
// redondeo). El corte de aprobación se autoriza en la escala (config.minPassingScore)
// y se traduce a un % vía el sistema; ese % se compara contra el % interno.

import { getScoringSystem } from "./catalog.js";
import type {
  BandedScoringSystem,
  GradeBand,
  NumericScoringSystem,
  ResolvedGrade,
  ScoringConfig,
  ScoringSystem,
} from "./types.js";

const clamp = (n: number, lo: number, hi: number): number =>
  Math.min(hi, Math.max(lo, n));

const round2 = (n: number): number => Math.round(n * 100) / 100;

/** Mapa lineal fijo: rawRatio [0..1] → 1.0..10.0. Independiente de la config. */
export function pctToCanonical10(rawRatio: number): number {
  return round2(1 + clamp(rawRatio, 0, 1) * 9);
}

/** Banda cuyo intervalo [minPct, maxPct) contiene `pct` (la superior incluye 100). */
function bandFor(system: BandedScoringSystem, pct: number): GradeBand {
  const sorted = [...system.bands].sort((a, b) => a.minPct - b.minPct);
  let chosen = sorted[0];
  for (const band of sorted) {
    if (pct >= band.minPct) chosen = band;
  }
  return chosen;
}

/** Display de un sistema numérico: mapa lineal % → [min, max], formateado. */
function numericDisplay(system: NumericScoringSystem, pct: number): string {
  const value = system.min + (clamp(pct, 0, 100) / 100) * (system.max - system.min);
  return value.toFixed(system.decimals);
}

/** % del eje interno donde una nota numérica `grade` cae (inverso del mapa lineal). */
function numericGradeToPct(system: NumericScoringSystem, grade: number): number {
  if (system.max === system.min) return 0;
  return clamp(((grade - system.min) / (system.max - system.min)) * 100, 0, 100);
}

/**
 * Traduce `config.minPassingScore` (autorizado en la escala) a un cutoff en %.
 *  - numeric: el % bajo el cual cae la nota de aprobación (la nota como número).
 *  - banded:  el `minPct` de la banda mínima de aprobación (match por `display`).
 *  - binary:  el cutoff (un número en %), o el corte por defecto.
 * Si no hay `minPassingScore`, usa el default del sistema.
 */
export function passingCutoffPct(system: ScoringSystem, config?: ScoringConfig): number {
  const mps = config?.minPassingScore;
  switch (system.kind) {
    case "numeric": {
      const grade = mps != null && mps !== "" ? Number(mps) : system.defaultPassingGrade;
      if (!Number.isFinite(grade)) {
        return numericGradeToPct(system, system.defaultPassingGrade);
      }
      return numericGradeToPct(system, grade);
    }
    case "banded": {
      const label = mps != null && mps !== "" ? mps : system.defaultPassingDisplay;
      const band =
        system.bands.find((b) => b.display === label) ??
        system.bands.find((b) => b.display === system.defaultPassingDisplay);
      return band ? band.minPct : 0;
    }
    case "binary": {
      if (mps != null && mps !== "" && Number.isFinite(Number(mps))) {
        return clamp(Number(mps), 0, 100);
      }
      return system.defaultCutoffPct;
    }
  }
}

/**
 * Convierte el ratio crudo a la nota de la escuela.
 *  - rawRatio = null (maxScore = 0) → display "—", canonical10 null, passing null (N/A).
 *  - corte `>=` consistente en los tres kinds.
 */
export function resolveGrade(
  rawRatio: number | null,
  system: ScoringSystem,
  config?: ScoringConfig
): ResolvedGrade {
  if (rawRatio == null) {
    return { display: "—", canonical10: null, passing: null };
  }
  const pct = clamp(rawRatio * 100, 0, 100);
  const canonical10 = pctToCanonical10(rawRatio);
  const cutoff = passingCutoffPct(system, config);
  const passing = pct >= cutoff;

  let display: string;
  switch (system.kind) {
    case "numeric":
      display = numericDisplay(system, pct);
      break;
    case "banded":
      display = bandFor(system, pct).display;
      break;
    case "binary":
      display = passing ? system.passDisplay : system.failDisplay;
      break;
  }
  return { display, canonical10, passing };
}

/**
 * Helper para el wiring: resuelve el sistema a partir de la config (o el default)
 * y convierte. Centraliza el fallback al sistema por defecto cuando el `systemId`
 * no existe en el catálogo.
 */
export function gradeFromConfig(
  rawRatio: number | null,
  config: ScoringConfig
): ResolvedGrade {
  const system = getScoringSystem(config.systemId) ?? getScoringSystem("scale-0-100");
  // `system` siempre existe: "scale-0-100" está en el catálogo.
  return resolveGrade(rawRatio, system as ScoringSystem, config);
}
