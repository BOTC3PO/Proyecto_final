/**
 * PLAN-D §1 (Fase 3/4) — Tests de `politicaExpiracion` en
 * `parseEvaluacionConfig`/`serializeEvaluacionConfig` y de
 * `debeAutoCerrarIntento` (cierre lazy por expiración).
 */
import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_EVALUACION_CONFIG,
  POLITICA_EXPIRACION_DEFAULT,
  POLITICAS_EXPIRACION_VALIDAS,
  parseEvaluacionConfig,
  serializeEvaluacionConfig,
  debeAutoCerrarIntento,
} from "./quiz-intentos";

test("PLAN-D: default de politicaExpiracion es `auto` en los 3 tipos", () => {
  assert.equal(DEFAULT_EVALUACION_CONFIG.practica.politicaExpiracion, "auto");
  assert.equal(DEFAULT_EVALUACION_CONFIG.formal.politicaExpiracion, "auto");
  assert.equal(DEFAULT_EVALUACION_CONFIG.competencia.politicaExpiracion, "auto");
  assert.equal(POLITICA_EXPIRACION_DEFAULT, "auto");
});

test("PLAN-D: parseEvaluacionConfig respeta politicaExpiracion explícita", () => {
  const cfg = parseEvaluacionConfig(
    JSON.stringify({ politicaExpiracion: "gracia60" }),
    "formal",
  );
  assert.equal(cfg.politicaExpiracion, "gracia60");
});

test("PLAN-D: parseEvaluacionConfig con politicaExpiracion inválida cae al default", () => {
  const cfg = parseEvaluacionConfig(
    JSON.stringify({ politicaExpiracion: "no_existe" }),
    "practica",
  );
  assert.equal(cfg.politicaExpiracion, "auto");
});

test("PLAN-D: round-trip parse → serialize preserva politicaExpiracion", () => {
  for (const politica of POLITICAS_EXPIRACION_VALIDAS) {
    const original = JSON.stringify({ type: "formal", politicaExpiracion: politica });
    const cfg = parseEvaluacionConfig(original, "formal");
    assert.equal(cfg.politicaExpiracion, politica);
    const serialized = serializeEvaluacionConfig(cfg);
    assert.equal(serialized.politicaExpiracion, politica);
  }
});

test("debeAutoCerrarIntento: sin timer nunca cierra", () => {
  assert.equal(debeAutoCerrarIntento(new Date(), null, "auto"), false);
});

test("debeAutoCerrarIntento: `auto` cierra apenas pasa timer + margen de red", () => {
  const start = new Date("2026-01-01T00:00:00.000Z");
  const timer = 60; // 1 min
  const dentro = new Date(start.getTime() + 60_000); // exactamente al límite, sin margen aún
  const conMargen = new Date(start.getTime() + 89_000); // 60 + 29s < 60+30 margen
  const vencido = new Date(start.getTime() + 91_000); // 60 + 31s > 60+30 margen
  assert.equal(debeAutoCerrarIntento(start, timer, "auto", dentro), false);
  assert.equal(debeAutoCerrarIntento(start, timer, "auto", conMargen), false);
  assert.equal(debeAutoCerrarIntento(start, timer, "auto", vencido), true);
});

test("debeAutoCerrarIntento: `gracia60` da 60s extra antes de cerrar", () => {
  const start = new Date("2026-01-01T00:00:00.000Z");
  const timer = 60;
  // auto ya habría cerrado a los 91s, gracia60 todavía no.
  const t91 = new Date(start.getTime() + 91_000);
  assert.equal(debeAutoCerrarIntento(start, timer, "gracia60", t91), false);
  // gracia60 cierra pasado timer(60) + gracia(60) + margen(30) = 151s
  const t152 = new Date(start.getTime() + 152_000);
  assert.equal(debeAutoCerrarIntento(start, timer, "gracia60", t152), true);
});
