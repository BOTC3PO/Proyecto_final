// WO14 — Los 10 sistemas de nota como datos estructurados y computables.
//
// Reconstrucción del array `scoringSystems` de la versión vieja (CrearModulo.tsx,
// borrado), corrigiendo sus bugs: las equivalencias son DATOS (no strings), todo
// vive sobre el % interno, y los cortes que no aprobaban (ej. GPA 0.0) se arreglan.

import type {
  BandedScoringSystem,
  GradeBand,
  NumericScoringSystem,
  BinaryScoringSystem,
  ScoringSystem,
} from "./types.js";

/** Eje canónico: % interno ↔ 1–10 lineal (0%→1.0, 100%→10.0). */
const canonicalToPct = (canonical10: number): number =>
  ((canonical10 - 1) / 9) * 100;

const round2 = (n: number): number => Math.round(n * 100) / 100;

/**
 * Construye bandas continuas, semiabiertas y sin huecos a partir de una lista de
 * equivalencias { display, canonical10 }. Los límites entre bandas son los puntos
 * medios (en el eje 1–10) mapeados a %. La banda más baja arranca en 0 y la más
 * alta llega a 100, de modo que cubren todo [0..100] sin solaparse ni dejar huecos.
 */
function bandsFromEquivalences(
  items: ReadonlyArray<{ display: string; canonical10: number }>
): GradeBand[] {
  const sorted = [...items].sort((a, b) => a.canonical10 - b.canonical10);
  return sorted.map((item, i) => {
    const minPct =
      i === 0
        ? 0
        : canonicalToPct((sorted[i - 1].canonical10 + item.canonical10) / 2);
    const maxPct =
      i === sorted.length - 1
        ? 100
        : canonicalToPct((item.canonical10 + sorted[i + 1].canonical10) / 2);
    return {
      minPct: round2(minPct),
      maxPct: round2(maxPct),
      display: item.display,
      canonical10: item.canonical10,
    };
  });
}

/**
 * Construye bandas a partir de rangos de % explícitos (escalas A–F y S–F, donde la
 * versión vieja ya daba bandas en %). Cada `floorPct` es el límite inferior inclusivo;
 * el superior es el `floorPct` de la banda inmediatamente superior (100 para la top).
 * `canonical10` se deriva del piso vía el mapa canónico (metadata determinista).
 */
function bandsFromFloors(
  items: ReadonlyArray<{ display: string; floorPct: number }>
): GradeBand[] {
  const sorted = [...items].sort((a, b) => a.floorPct - b.floorPct);
  return sorted.map((item, i) => ({
    minPct: item.floorPct,
    maxPct: i === sorted.length - 1 ? 100 : sorted[i + 1].floorPct,
    display: item.display,
    canonical10: round2(1 + (item.floorPct / 100) * 9),
  }));
}

const numeric = (
  id: string,
  label: string,
  min: number,
  max: number,
  decimals: number,
  defaultPassingGrade: number
): NumericScoringSystem => ({
  id,
  label,
  kind: "numeric",
  min,
  max,
  decimals,
  defaultPassingGrade,
});

// ── Los 10 sistemas ──────────────────────────────────────────────────────────

const scale1to10: NumericScoringSystem = numeric(
  "scale-1-10",
  "Escala 1–10 (canónico)",
  1,
  10,
  1,
  6
);

const scale0to100: NumericScoringSystem = numeric(
  "scale-0-100",
  "Escala 0–100",
  0,
  100,
  0,
  60
);

// Bug del viejo corregido: GPA 0.0 NO aprueba. El corte por defecto es 2.0 (C).
const scaleGpa: NumericScoringSystem = numeric(
  "scale-gpa",
  "GPA 0.0–4.0",
  0,
  4,
  2,
  2
);

const passFail: BinaryScoringSystem = {
  id: "pass-fail",
  label: "Aprobado / Desaprobado",
  kind: "binary",
  passDisplay: "Aprobado",
  failDisplay: "Desaprobado",
  defaultCutoffPct: 60,
};

// A–F con bandas en % explícitas (90–100 A · 80–89 B · 70–79 C · 60–69 D · <60 F).
const scaleAF: BandedScoringSystem = {
  id: "scale-a-f",
  label: "Letras A–F",
  kind: "banded",
  bands: bandsFromFloors([
    { display: "F", floorPct: 0 },
    { display: "D", floorPct: 60 },
    { display: "C", floorPct: 70 },
    { display: "B", floorPct: 80 },
    { display: "A", floorPct: 90 },
  ]),
  defaultPassingDisplay: "D",
};

// S–F con bandas en % explícitas (95–100 S · 85–94 A · 75–84 B · 65–74 C · 55–64 D · <55 F).
const scaleSF: BandedScoringSystem = {
  id: "scale-s-f",
  label: "Letras S–F",
  kind: "banded",
  bands: bandsFromFloors([
    { display: "F", floorPct: 0 },
    { display: "D", floorPct: 55 },
    { display: "C", floorPct: 65 },
    { display: "B", floorPct: 75 },
    { display: "A", floorPct: 85 },
    { display: "S", floorPct: 95 },
  ]),
  defaultPassingDisplay: "D",
};

// S-A-B-C-D: sólo había equivalencias a 1–10 → se traducen a bandas de %.
// No tiene nota de reprobación: su banda más baja (D) aprueba. Es intencional
// (modela escuelas que no aplazan); por eso el corte por defecto es D.
const scaleSABCD: BandedScoringSystem = {
  id: "scale-s-a-b-c-d",
  label: "S-A-B-C-D",
  kind: "banded",
  bands: bandsFromEquivalences([
    { display: "D", canonical10: 6 },
    { display: "C", canonical10: 7 },
    { display: "B", canonical10: 8 },
    { display: "A", canonical10: 9 },
    { display: "S", canonical10: 10 },
  ]),
  defaultPassingDisplay: "D",
};

// Canadiense: equivalencias a 1–10 → bandas de %. F→1 es la nota de reprobación.
const scaleCanadian: BandedScoringSystem = {
  id: "scale-canadian",
  label: "Canadiense",
  kind: "banded",
  bands: bandsFromEquivalences([
    { display: "F", canonical10: 1 },
    { display: "D", canonical10: 5 },
    { display: "C", canonical10: 6 },
    { display: "C+", canonical10: 7 },
    { display: "B", canonical10: 8 },
    { display: "A", canonical10: 9 },
    { display: "A+", canonical10: 10 },
  ]),
  defaultPassingDisplay: "C",
};

// Cualitativa (escuelas que evitan el número): equivalencias a 1–10 → bandas de %.
const scaleEs: BandedScoringSystem = {
  id: "scale-es",
  label: "Cualitativa",
  kind: "banded",
  bands: bandsFromEquivalences([
    { display: "Reprobado", canonical10: 1 },
    { display: "Insuficiente", canonical10: 3 },
    { display: "Suficiente", canonical10: 6 },
    { display: "Bueno", canonical10: 7 },
    { display: "Muy Bueno", canonical10: 8 },
    { display: "Excelente", canonical10: 9 },
    { display: "Sobresaliente", canonical10: 10 },
  ]),
  defaultPassingDisplay: "Suficiente",
};

// Rareza (gamificada): equivalencias a 1–10 → bandas de %.
const scaleRarity: BandedScoringSystem = {
  id: "scale-rarity",
  label: "Rareza",
  kind: "banded",
  bands: bandsFromEquivalences([
    { display: "Común", canonical10: 2 },
    { display: "Poco común", canonical10: 4 },
    { display: "Raro", canonical10: 6 },
    { display: "Muy raro", canonical10: 7 },
    { display: "Épico", canonical10: 8 },
    { display: "Legendario", canonical10: 9 },
    { display: "Mítico", canonical10: 10 },
  ]),
  defaultPassingDisplay: "Raro",
};

export const SCORING_SYSTEMS: readonly ScoringSystem[] = [
  scale1to10,
  scale0to100,
  passFail,
  scaleAF,
  scaleSF,
  scaleSABCD,
  scaleGpa,
  scaleCanadian,
  scaleEs,
  scaleRarity,
];

/** Sistema por defecto: 0–100 numérico (se reconcilia con QuizUmbral.umbral). */
export const DEFAULT_SCORING_SYSTEM_ID = "scale-0-100";

const BY_ID: ReadonlyMap<string, ScoringSystem> = new Map(
  SCORING_SYSTEMS.map((s) => [s.id, s])
);

/** Devuelve el sistema por id, o undefined si no existe en el catálogo. */
export function getScoringSystem(id: string | undefined | null): ScoringSystem | undefined {
  if (!id) return undefined;
  return BY_ID.get(id);
}
