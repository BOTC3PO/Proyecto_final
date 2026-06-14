/**
 * F5-04 — Tests del helper de cálculo del RANGO honesto de nota.
 *
 * Cubre: defaults, edge cases (maxScore=0, sin pendientes, todas en
 * 0/todas en máximo), monotonicidad (más pendientes → rango más
 * amplio), etiqueta humana.
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import {
  computeGradeRange,
  formatGradeRangeLabel,
  type GradeRange
} from "../../src/lib/gradeRange";

const SCALE_0_100 = {
  systemId: "scale-0-100",
  minPassingScore: "60"
} as const;

test("computeGradeRange: sin pendientes → pendingCount=0 y min===max===autoScore", () => {
  const r = computeGradeRange(7, 10, [], SCALE_0_100);
  assert.strictEqual(r.pendingCount, 0);
  assert.strictEqual(r.minScore, 7);
  assert.strictEqual(r.maxScore, 7);
  // scale-0-100 con decimals=0 → display es el % entero, no "7/10".
  assert.strictEqual(r.minDisplay, "70");
  assert.strictEqual(r.maxDisplay, "70");
  assert.strictEqual(r.minCanonical10, 7.3);
  assert.strictEqual(r.maxCanonical10, 7.3);
});

test("computeGradeRange: 1 pendiente de 3 puntos, autoScore=7, max=10", () => {
  // mín: 7/10 = 70% → "70" / 7.3
  // máx: 10/10 = 100% → "100" / 10
  const r = computeGradeRange(7, 10, [3], SCALE_0_100);
  assert.strictEqual(r.pendingCount, 1);
  assert.strictEqual(r.minScore, 7);
  assert.strictEqual(r.maxScore, 10);
  assert.strictEqual(r.minDisplay, "70");
  assert.strictEqual(r.maxDisplay, "100");
  assert.strictEqual(r.minCanonical10, 7.3);
  assert.strictEqual(r.maxCanonical10, 10);
});

test("computeGradeRange: 2 pendientes [2, 3], autoScore=5, max=10", () => {
  // mín: 5/10 = 50% → "50" / 5.5
  // máx: 10/10 = 100% → "100" / 10
  const r = computeGradeRange(5, 10, [2, 3], SCALE_0_100);
  assert.strictEqual(r.minScore, 5);
  assert.strictEqual(r.maxScore, 10);
  assert.strictEqual(r.minDisplay, "50");
  assert.strictEqual(r.maxDisplay, "100");
  assert.strictEqual(r.minCanonical10, 5.5);
  assert.strictEqual(r.maxCanonical10, 10);
});

test("computeGradeRange: monotónico — más pendientes → rango más amplio", () => {
  const r1 = computeGradeRange(5, 10, [2], SCALE_0_100);
  const r3 = computeGradeRange(5, 10, [2, 3, 1], SCALE_0_100);
  // r3.maxScore >= r1.maxScore
  assert.ok(r3.maxScore > r1.maxScore, "más pendientes → max mayor");
  // r3.minScore === r1.minScore (mín es autoScore, no depende de pendientes)
  assert.strictEqual(r3.minScore, r1.minScore);
});

test("computeGradeRange: maxScore=0 → displays null, sin tirar", () => {
  const r = computeGradeRange(0, 0, [3], SCALE_0_100);
  assert.strictEqual(r.minDisplay, null);
  assert.strictEqual(r.maxDisplay, null);
  assert.strictEqual(r.minCanonical10, null);
  assert.strictEqual(r.maxCanonical10, null);
});

test("computeGradeRange: pendingPoints con 0 o negativo se ignoran (defensivo)", () => {
  const r = computeGradeRange(5, 10, [0, -1, 3], SCALE_0_100);
  // Sólo 3 cuenta → máx = 5 + 3 = 8
  assert.strictEqual(r.maxScore, 8);
  assert.strictEqual(r.pendingCount, 3, "el count NO se filtra, sólo los puntos");
});

test("computeGradeRange: refleja distintos sistemas de scoring", () => {
  // scale-1-10 con cutoff 6. autoScore=5, max=10, pending [3] → máx = 5+3 = 8.
  // mín: 5/10 = 0.5 → 1 + 9*0.5 = 5.5
  // máx: 8/10 = 0.8 → 1 + 9*0.8 = 8.2
  const r = computeGradeRange(5, 10, [3], {
    systemId: "scale-1-10",
    minPassingScore: "6"
  });
  assert.strictEqual(r.minDisplay, "5.5");
  assert.strictEqual(r.maxDisplay, "8.2");
});

test("formatGradeRangeLabel: min y max → frase estándar", () => {
  const label = formatGradeRangeLabel("5", "8", 2);
  assert.strictEqual(
    label,
    "Tu nota está entre 5 y 8. 2 preguntas pendientes de corrección por el profesor."
  );
});

test("formatGradeRangeLabel: 1 pendiente → singular", () => {
  const label = formatGradeRangeLabel("5", "8", 1);
  assert.strictEqual(
    label,
    "Tu nota está entre 5 y 8. 1 pregunta pendiente de corrección por el profesor."
  );
});

test("formatGradeRangeLabel: solo min (max null) → 'Tu nota (mín.) es ...'", () => {
  const label = formatGradeRangeLabel("5", null, 1);
  assert.ok(label.includes("Tu nota (mín.) es 5."));
  assert.ok(label.includes("1 pregunta pendiente"));
});

test("formatGradeRangeLabel: solo max (min null) → 'Tu nota (máx.) es ...'", () => {
  const label = formatGradeRangeLabel(null, "10", 0);
  assert.ok(label.includes("Tu nota (máx.) es 10."));
  assert.ok(label.includes("0 preguntas pendientes"));
});

test("formatGradeRangeLabel: ambos null → 'pendiente de cálculo' (defensivo)", () => {
  const label = formatGradeRangeLabel(null, null, 2);
  assert.ok(label.includes("pendiente de cálculo"));
  assert.ok(label.includes("2 preguntas pendientes"));
});
