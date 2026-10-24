/**
 * F5-03 — Tests del helper de eventos informativos del intento.
 *
 * Cubre: construcción de resumen desde grading arbitrario (incluso null),
 * merge monotónico (no decrementa), preservación de flags previos, label
 * humano.
 *
 * Test puro: sin DB ni red. Sigue el patrón de `quiz-posiciones.test.ts`.
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import {
  formatTabSwitchLabel,
  mergeAttemptEvents,
  summarizeAttemptEvents
} from "../../src/lib/attemptEvents";

test("summarizeAttemptEvents: null/undefined/{} → ceros", () => {
  assert.deepStrictEqual(summarizeAttemptEvents(null), {
    tabSwitchCount: 0,
    canaryTriggered: false
  });
  assert.deepStrictEqual(summarizeAttemptEvents(undefined), {
    tabSwitchCount: 0,
    canaryTriggered: false
  });
  assert.deepStrictEqual(summarizeAttemptEvents({}), {
    tabSwitchCount: 0,
    canaryTriggered: false
  });
});

test("summarizeAttemptEvents: lee el contador desde events.tabSwitchCount", () => {
  assert.deepStrictEqual(summarizeAttemptEvents({ events: { tabSwitchCount: 3 } }), {
    tabSwitchCount: 3,
    canaryTriggered: false
  });
});

test("summarizeAttemptEvents: clampa valores negativos/no-numéricos a 0", () => {
  assert.deepStrictEqual(summarizeAttemptEvents({ events: { tabSwitchCount: -1 } }), {
    tabSwitchCount: 0,
    canaryTriggered: false
  });
  assert.deepStrictEqual(
    summarizeAttemptEvents({ events: { tabSwitchCount: "5" as unknown as number } }),
    { tabSwitchCount: 0, canaryTriggered: false }
  );
});

test("summarizeAttemptEvents: detecta canaryTriggered del campo flat (V2-04)", () => {
  assert.deepStrictEqual(summarizeAttemptEvents({ canaryTriggered: true }), {
    tabSwitchCount: 0,
    canaryTriggered: true
  });
});

test("mergeAttemptEvents: preserva todos los campos previos del grading", () => {
  const before = {
    autoScore: 5,
    items: { q0: { points: 2, score: 2 } },
    canaryTriggered: true,
    canaryQuestions: ["q5"]
  };
  const after = mergeAttemptEvents(before, { tabSwitchCount: 3 });
  assert.deepStrictEqual(after, {
    autoScore: 5,
    items: { q0: { points: 2, score: 2 } },
    canaryTriggered: true,
    canaryQuestions: ["q5"],
    events: { tabSwitchCount: 3 }
  });
});

test("mergeAttemptEvents: monotónico — nunca decrementa", () => {
  const before = { events: { tabSwitchCount: 5 } };
  const after = mergeAttemptEvents(before, { tabSwitchCount: 2 });
  assert.strictEqual((after.events as { tabSwitchCount: number }).tabSwitchCount, 5);
});

test("mergeAttemptEvents: monotónico — acepta valor mayor", () => {
  const before = { events: { tabSwitchCount: 5 } };
  const after = mergeAttemptEvents(before, { tabSwitchCount: 8 });
  assert.strictEqual((after.events as { tabSwitchCount: number }).tabSwitchCount, 8);
});

test("mergeAttemptEvents: idempotente con el mismo valor", () => {
  const before = { events: { tabSwitchCount: 5 } };
  const after1 = mergeAttemptEvents(before, { tabSwitchCount: 5 });
  const after2 = mergeAttemptEvents(after1, { tabSwitchCount: 5 });
  assert.deepStrictEqual(after1, after2);
});

test("mergeAttemptEvents: patch vacío no rompe el contador existente", () => {
  const before = { events: { tabSwitchCount: 5 } };
  const after = mergeAttemptEvents(before, {});
  assert.strictEqual((after.events as { tabSwitchCount: number }).tabSwitchCount, 5);
});

test("formatTabSwitchLabel: 0 → positivo, sin acusar", () => {
  assert.strictEqual(formatTabSwitchLabel(0), "Completó sin cambiar de pestaña");
});

test("formatTabSwitchLabel: 1 → singular", () => {
  assert.strictEqual(formatTabSwitchLabel(1), "Salió de la pestaña 1 vez");
});

test("formatTabSwitchLabel: N > 1 → plural", () => {
  assert.strictEqual(formatTabSwitchLabel(3), "Salió de la pestaña 3 veces");
  assert.strictEqual(formatTabSwitchLabel(15), "Salió de la pestaña 15 veces");
});

test("formatTabSwitchLabel: negativo → tratado como 0 (defensivo)", () => {
  assert.strictEqual(formatTabSwitchLabel(-1), "Completó sin cambiar de pestaña");
});
