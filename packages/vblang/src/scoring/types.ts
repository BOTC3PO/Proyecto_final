// WO14 — Catálogo data-driven de escalas de nota + conversión.
//
// Modelo de un solo eje: el % interno (rawRatio * 100). Todas las escalas se
// definen sobre ese eje. `canonical10` es el mapa lineal fijo 0%→1.0 / 100%→10.0,
// independiente de la config; sólo sirve para comparar/mostrar el equivalente 1–10.

export type ScoringKind = "numeric" | "banded" | "binary";

/** Configuración de scoring de un quiz/módulo (fuente: ModuleScoringConfig). */
export interface ScoringConfig {
  systemId: string;
  /**
   * Umbral de aprobación expresado EN LA ESCALA: un número (numeric/binary) o
   * una etiqueta/banda (banded, ej. "C", "Suficiente", "Aprobado"). Es la única
   * fuente de verdad del corte; se traduce a un cutoff en % vía el `system`.
   */
  minPassingScore?: string;
  questionsPerPoint?: number | null;
  maxScoreForSix?: number | null;
  promotionRule?: string;
}

/** Una banda de una escala `banded`: intervalo continuo y semiabierto [minPct, maxPct). */
export interface GradeBand {
  /** Límite inferior inclusivo, en % interno [0..100]. */
  minPct: number;
  /** Límite superior, en % interno. Exclusivo salvo la banda superior (100 inclusive). */
  maxPct: number;
  /** Lo que se muestra (ej. "A", "Suficiente", "Mítico"). */
  display: string;
  /** Equivalente nominal en el eje 1–10 (metadata). */
  canonical10: number;
}

export interface NumericScoringSystem {
  id: string;
  label: string;
  kind: "numeric";
  /** Extremos de la escala (ej. 1..10, 0..100, 0..4 para GPA). */
  min: number;
  max: number;
  /** Decimales al formatear el display. */
  decimals: number;
  /** Nota de aprobación por defecto en la escala (ej. 6, 60, 2.0). */
  defaultPassingGrade: number;
}

export interface BandedScoringSystem {
  id: string;
  label: string;
  kind: "banded";
  /** Bandas continuas, semiabiertas y sin huecos, cubriendo [0..100]. */
  bands: GradeBand[];
  /** Banda mínima de aprobación por defecto (su `display`). */
  defaultPassingDisplay: string;
}

export interface BinaryScoringSystem {
  id: string;
  label: string;
  kind: "binary";
  passDisplay: string;
  failDisplay: string;
  /** Corte por defecto en % interno. */
  defaultCutoffPct: number;
}

export type ScoringSystem =
  | NumericScoringSystem
  | BandedScoringSystem
  | BinaryScoringSystem;

/** Resultado de convertir un puntaje a la nota de la escuela. */
export interface ResolvedGrade {
  /** Nota a mostrar; "—" cuando no hay nota (maxScore = 0). */
  display: string;
  /** Equivalente 1–10 (lineal); null cuando no hay nota. */
  canonical10: number | null;
  /** Aprobó; null = N/A (sin ítems puntuables). */
  passing: boolean | null;
}
