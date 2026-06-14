/**
 * F4-04 — Helper `parseEvaluacionConfig` y agregados.
 *
 * Mirror byte-a-byte del spec de front
 * `apps/web/src/domain/quiz/__tests__/intentos.spec.ts` (vitest). Acá se
 * usa el patrón de tests de api (node:test + node:assert/strict) para
 * mantener simetría con el resto de la suite api (F3-04, F3-01, etc.).
 *
 * Cubre los criterios de la tarea:
 *  - Defaults por tipo (politica, timer, fullscreen, etc.).
 *  - Settings sin los campos → defaults del tipo (back-compat).
 *  - Settings con override gana sobre defaults.
 *  - Round-trip parse ↔ serialize.
 *  - `clampTimerSegundos`: bordes del rango.
 */

import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  parseEvaluacionConfig,
  serializeEvaluacionConfig,
  mergeEvaluacionConfigIntoSettings,
  clampTimerSegundos,
  TIMER_SEGUNDOS_MIN,
  TIMER_SEGUNDOS_MAX,
  DEFAULT_EVALUACION_CONFIG
} from "../../src/lib/quiz-intentos";

describe("parseEvaluacionConfig — F4-04 defaults por tipo", () => {
  it("sin settings devuelve los defaults del tipo", () => {
    const r = parseEvaluacionConfig(null, "practica");
    assert.deepEqual(r, DEFAULT_EVALUACION_CONFIG.practica);
  });

  it("settings con JSON inválido cae a defaults del tipo", () => {
    const r = parseEvaluacionConfig("{not json", "formal");
    assert.deepEqual(r, DEFAULT_EVALUACION_CONFIG.formal);
  });

  it("settings sin los campos nuevos aplica defaults del tipo (back-compat)", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ type: "formal" }), "formal");
    assert.equal(r.maxIntentos, DEFAULT_EVALUACION_CONFIG.formal.maxIntentos);
    assert.equal(r.politicaNota, DEFAULT_EVALUACION_CONFIG.formal.politicaNota);
    assert.equal(r.timerSegundos, DEFAULT_EVALUACION_CONFIG.formal.timerSegundos);
    assert.equal(r.fullscreenOnStart, DEFAULT_EVALUACION_CONFIG.formal.fullscreenOnStart);
  });

  it("type desconocido cae a 'practica'", () => {
    const r = parseEvaluacionConfig(null, "xyz");
    assert.deepEqual(r, DEFAULT_EVALUACION_CONFIG.practica);
  });

  it("override gana sobre defaults", () => {
    const settings = JSON.stringify({
      timerSegundos: 1800,
      fullscreenOnStart: true,
      maxIntentos: 5,
      politicaNota: "primera",
      ocultarPuntos: true
    });
    const r = parseEvaluacionConfig(settings, "practica");
    assert.equal(r.timerSegundos, 1800);
    assert.equal(r.fullscreenOnStart, true);
    assert.equal(r.maxIntentos, 5);
    assert.equal(r.politicaNota, "primera");
    assert.equal(r.ocultarPuntos, true);
  });

  it("timerSegundos 0 o negativo se coerce a null (sin timer)", () => {
    assert.equal(parseEvaluacionConfig(JSON.stringify({ timerSegundos: 0 }), "formal").timerSegundos, null);
    assert.equal(parseEvaluacionConfig(JSON.stringify({ timerSegundos: -5 }), "formal").timerSegundos, null);
  });

  it("timerSegundos null se mantiene null", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ timerSegundos: null }), "formal");
    assert.equal(r.timerSegundos, null);
  });

  it("timerSegundos string '600' se coerce a 600", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ timerSegundos: "600" }), "formal");
    assert.equal(r.timerSegundos, 600);
  });

  it("maxIntentos 0 se coerce a null (ilimitado, F3-04 alias)", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ maxIntentos: 0 }), "formal");
    assert.equal(r.maxIntentos, null);
  });

  it("politicaNota inválida cae al default del tipo", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ politicaNota: "xyz" }), "formal");
    assert.equal(r.politicaNota, "ultima");
  });

  it("ocultarPuntos string 'true'/'false' se coerce a boolean", () => {
    assert.equal(parseEvaluacionConfig(JSON.stringify({ ocultarPuntos: "true" }), "practica").ocultarPuntos, true);
    assert.equal(parseEvaluacionConfig(JSON.stringify({ ocultarPuntos: "false" }), "practica").ocultarPuntos, false);
  });
});

describe("parseEvaluacionConfig — tabla de defaults por tipo", () => {
  it("practica: timer null, fullscreen false, ilimitado, mejor", () => {
    const r = parseEvaluacionConfig(null, "practica");
    assert.equal(r.timerSegundos, null);
    assert.equal(r.fullscreenOnStart, false);
    assert.equal(r.maxIntentos, null);
    assert.equal(r.politicaNota, "mejor");
    assert.equal(r.ocultarPuntos, false);
  });

  it("formal: timer null (conservador), fullscreen true, 3 intentos, ultima", () => {
    const r = parseEvaluacionConfig(null, "formal");
    assert.equal(r.timerSegundos, null);
    assert.equal(r.fullscreenOnStart, true);
    assert.equal(r.maxIntentos, 3);
    assert.equal(r.politicaNota, "ultima");
    assert.equal(r.ocultarPuntos, false);
  });

  it("competencia: timer 600 (preserva el hardcode pre-F4-04), ilimitado, mejor", () => {
    const r = parseEvaluacionConfig(null, "competencia");
    assert.equal(r.timerSegundos, 600);
    assert.equal(r.fullscreenOnStart, false);
    assert.equal(r.maxIntentos, null);
    assert.equal(r.politicaNota, "mejor");
    assert.equal(r.ocultarPuntos, false);
  });
});

describe("serializeEvaluacionConfig (round-trip)", () => {
  it("es la inversa de parseEvaluacionConfig", () => {
    const original = parseEvaluacionConfig(
      JSON.stringify({
        timerSegundos: 900,
        fullscreenOnStart: true,
        maxIntentos: 2,
        politicaNota: "promedio",
        ocultarPuntos: true
      }),
      "formal"
    );
    const serialized = serializeEvaluacionConfig(original);
    const roundTripped = parseEvaluacionConfig(JSON.stringify(serialized), "formal");
    assert.deepEqual(roundTripped, original);
  });
});

describe("mergeEvaluacionConfigIntoSettings", () => {
  it("preserva campos no relacionados (type, mode, composition)", () => {
    const before = JSON.stringify({
      type: "formal",
      mode: "manual",
      composition: { tomar: "todas", seleccion: "fijo" }
    });
    const config = parseEvaluacionConfig(null, "formal");
    const after = mergeEvaluacionConfigIntoSettings(before, config);
    const parsed = JSON.parse(after);
    assert.equal(parsed.type, "formal");
    assert.equal(parsed.mode, "manual");
    assert.deepEqual(parsed.composition, { tomar: "todas", seleccion: "fijo" });
    assert.equal(parsed.timerSegundos, null);
    assert.equal(parsed.fullscreenOnStart, true);
    assert.equal(parsed.maxIntentos, 3);
  });

  it("settings null + config = JSON.stringify(config)", () => {
    const config = parseEvaluacionConfig(null, "practica");
    const merged = mergeEvaluacionConfigIntoSettings(null, config);
    assert.deepEqual(JSON.parse(merged), serializeEvaluacionConfig(config));
  });
});

describe("clampTimerSegundos", () => {
  it("null se mantiene null", () => {
    assert.equal(clampTimerSegundos(null), null);
  });
  it("valor < MIN se rechaza", () => {
    assert.equal(clampTimerSegundos(10), null);
    assert.equal(clampTimerSegundos(0), null);
  });
  it("valor > MAX se recorta a MAX", () => {
    assert.equal(clampTimerSegundos(100000), TIMER_SEGUNDOS_MAX);
  });
  it("valor en rango se mantiene", () => {
    assert.equal(clampTimerSegundos(600), 600);
  });
  it("valor con decimales se redondea hacia abajo", () => {
    assert.equal(clampTimerSegundos(60.7), 60);
  });
  it("NaN/Infinity se rechazan", () => {
    assert.equal(clampTimerSegundos(NaN), null);
    assert.equal(clampTimerSegundos(Infinity), null);
  });
});
