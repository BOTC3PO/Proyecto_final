/**
 * F4-04 — Helper de `parseEvaluacionConfig` y agregados.
 *
 * Cubre los criterios de la tarea:
 *  - Defaults por tipo (politica, timer, fullscreen, etc.).
 *  - Settings sin los campos → defaults del tipo.
 *  - Settings con override gana sobre defaults.
 *  - `timerSegundos` null o 0 = sin timer; números fuera de rango
 *    se rechazan.
 *  - Coherencia con F3-04 (mismos defaults para `politicaNota` y
 *    `maxIntentos` que `parseIntentoPolicy`).
 */

import { describe, expect, it } from "vitest";
import {
  parseEvaluacionConfig,
  serializeEvaluacionConfig,
  mergeEvaluacionConfigIntoSettings,
  clampTimerSegundos,
  calcularDeadline,
  validarTiempoLimite,
  TIMER_SEGUNDOS_MIN,
  TIMER_SEGUNDOS_MAX,
  TIMER_GRACE_SECONDS,
  DEFAULT_EVALUACION_CONFIG
} from "../intentos";

describe("parseEvaluacionConfig — F4-04 defaults por tipo", () => {
  it("sin settings, devuelve los defaults del tipo", () => {
    const r = parseEvaluacionConfig(null, "practica");
    expect(r).toEqual(DEFAULT_EVALUACION_CONFIG.practica);
  });

  it("settings con JSON inválido → defaults del tipo", () => {
    const r = parseEvaluacionConfig("{not json", "formal");
    expect(r).toEqual(DEFAULT_EVALUACION_CONFIG.formal);
  });

  it("settings sin los campos nuevos → defaults del tipo (back-compat)", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ type: "formal" }), "formal");
    expect(r.maxIntentos).toBe(DEFAULT_EVALUACION_CONFIG.formal.maxIntentos);
    expect(r.politicaNota).toBe(DEFAULT_EVALUACION_CONFIG.formal.politicaNota);
    expect(r.timerSegundos).toBe(DEFAULT_EVALUACION_CONFIG.formal.timerSegundos);
    expect(r.fullscreenOnStart).toBe(DEFAULT_EVALUACION_CONFIG.formal.fullscreenOnStart);
  });

  it("type desconocido cae a 'practica' (no rompe)", () => {
    const r = parseEvaluacionConfig(null, "xyz");
    expect(r).toEqual(DEFAULT_EVALUACION_CONFIG.practica);
  });

  it("WO-3: política de sorteo — default fijo_por_alumno, override y back-compat", () => {
    // Default por tipo.
    expect(parseEvaluacionConfig(null, "formal").politicaSorteo).toBe(
      "fijo_por_alumno",
    );
    // Settings viejos (sin el campo) → default (back-compat).
    expect(
      parseEvaluacionConfig(JSON.stringify({ type: "formal" }), "formal")
        .politicaSorteo,
    ).toBe("fijo_por_alumno");
    // Override del docente se respeta.
    expect(
      parseEvaluacionConfig(
        JSON.stringify({ politicaSorteo: "por_intento" }),
        "formal",
      ).politicaSorteo,
    ).toBe("por_intento");
    // Valor inválido cae al default (no rompe).
    expect(
      parseEvaluacionConfig(
        JSON.stringify({ politicaSorteo: "garbage" }),
        "formal",
      ).politicaSorteo,
    ).toBe("fijo_por_alumno");
  });

  it("WO-3: serializeEvaluacionConfig incluye politicaSorteo (round-trip)", () => {
    const cfg = parseEvaluacionConfig(
      JSON.stringify({ politicaSorteo: "por_intento" }),
      "formal",
    );
    const serialized = serializeEvaluacionConfig(cfg);
    expect(serialized.politicaSorteo).toBe("por_intento");
    // round-trip: re-parsear el serializado preserva el valor.
    expect(
      parseEvaluacionConfig(JSON.stringify(serialized), "formal").politicaSorteo,
    ).toBe("por_intento");
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
    expect(r.timerSegundos).toBe(1800);
    expect(r.fullscreenOnStart).toBe(true);
    expect(r.maxIntentos).toBe(5);
    expect(r.politicaNota).toBe("primera");
    expect(r.ocultarPuntos).toBe(true);
  });

  it("timerSegundos = 0 o negativo se coerce a null (sin timer)", () => {
    const r1 = parseEvaluacionConfig(JSON.stringify({ timerSegundos: 0 }), "formal");
    expect(r1.timerSegundos).toBeNull();
    const r2 = parseEvaluacionConfig(JSON.stringify({ timerSegundos: -5 }), "formal");
    expect(r2.timerSegundos).toBeNull();
  });

  it("timerSegundos = null se mantiene null", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ timerSegundos: null }), "formal");
    expect(r.timerSegundos).toBeNull();
  });

  it("timerSegundos como string '600' se coerce a 600", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ timerSegundos: "600" }), "formal");
    expect(r.timerSegundos).toBe(600);
  });

  it("maxIntentos = 0 se coerce a null (ilimitado, alias histórico F3-04)", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ maxIntentos: 0 }), "formal");
    expect(r.maxIntentos).toBeNull();
  });

  it("politicaNota inválida cae al default del tipo", () => {
    const r = parseEvaluacionConfig(JSON.stringify({ politicaNota: "xyz" }), "formal");
    expect(r.politicaNota).toBe("ultima");
  });

  it("ocultarPuntos como string 'true' se coerce a boolean", () => {
    const r1 = parseEvaluacionConfig(JSON.stringify({ ocultarPuntos: "true" }), "practica");
    expect(r1.ocultarPuntos).toBe(true);
    const r2 = parseEvaluacionConfig(JSON.stringify({ ocultarPuntos: "false" }), "practica");
    expect(r2.ocultarPuntos).toBe(false);
  });
});

describe("parseEvaluacionConfig — defaults por tipo (tabla canónica)", () => {
  it("practica: timer null, fullscreen false, ilimitado, mejor", () => {
    const r = parseEvaluacionConfig(null, "practica");
    expect(r.timerSegundos).toBeNull();
    expect(r.fullscreenOnStart).toBe(false);
    expect(r.maxIntentos).toBeNull();
    expect(r.politicaNota).toBe("mejor");
    expect(r.ocultarPuntos).toBe(false);
  });

  it("formal: timer null (conservador), fullscreen true, 3 intentos, ultima", () => {
    const r = parseEvaluacionConfig(null, "formal");
    expect(r.timerSegundos).toBeNull();
    expect(r.fullscreenOnStart).toBe(true);
    expect(r.maxIntentos).toBe(3);
    expect(r.politicaNota).toBe("ultima");
    expect(r.ocultarPuntos).toBe(false);
  });

  it("competencia: timer 600 (10 min, preserva hardcode pre-F4-04), ilimitado, mejor", () => {
    const r = parseEvaluacionConfig(null, "competencia");
    expect(r.timerSegundos).toBe(600);
    expect(r.fullscreenOnStart).toBe(false);
    expect(r.maxIntentos).toBeNull();
    expect(r.politicaNota).toBe("mejor");
    expect(r.ocultarPuntos).toBe(false);
  });
});

describe("serializeEvaluacionConfig", () => {
  it("es la inversa de parseEvaluacionConfig (round-trip)", () => {
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
    expect(roundTripped).toEqual(original);
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
    expect(parsed.type).toBe("formal");
    expect(parsed.mode).toBe("manual");
    expect(parsed.composition).toEqual({ tomar: "todas", seleccion: "fijo" });
    // Y los campos nuevos de F4-04:
    expect(parsed.timerSegundos).toBeNull();
    expect(parsed.fullscreenOnStart).toBe(true);
    expect(parsed.maxIntentos).toBe(3);
  });

  it("settings null + config → JSON.stringify del config solo", () => {
    const config = parseEvaluacionConfig(null, "practica");
    const merged = mergeEvaluacionConfigIntoSettings(null, config);
    expect(JSON.parse(merged)).toEqual(serializeEvaluacionConfig(config));
  });
});

describe("clampTimerSegundos", () => {
  it("null se mantiene null", () => {
    expect(clampTimerSegundos(null)).toBeNull();
  });

  it("valor < MIN se rechaza (devuelve null)", () => {
    expect(clampTimerSegundos(10)).toBeNull();
    expect(clampTimerSegundos(0)).toBeNull();
  });

  it("valor > MAX se recorta a MAX", () => {
    expect(clampTimerSegundos(100000)).toBe(TIMER_SEGUNDOS_MAX);
  });

  it("valor en rango se mantiene", () => {
    expect(clampTimerSegundos(600)).toBe(600);
  });

  it("valor con decimales se redondea hacia abajo", () => {
    expect(clampTimerSegundos(60.7)).toBe(60);
  });

  it("NaN/Infinity se rechazan", () => {
    expect(clampTimerSegundos(NaN)).toBeNull();
    expect(clampTimerSegundos(Infinity)).toBeNull();
  });
});

describe("constants sanity", () => {
  it("TIMER_SEGUNDOS_MIN ≥ 30 (decisión de UX: timers < 30s no son útiles)", () => {
    expect(TIMER_SEGUNDOS_MIN).toBeGreaterThanOrEqual(30);
  });

  it("TIMER_SEGUNDOS_MAX = 3 horas (tope arbitrario)", () => {
    expect(TIMER_SEGUNDOS_MAX).toBe(3 * 60 * 60);
  });

  it("TIMER_GRACE_SECONDS = 30 (margen de red)", () => {
    expect(TIMER_GRACE_SECONDS).toBe(30);
  });
});

describe("calcularDeadline — WO-3b", () => {
  it("devuelve null si timerSegundos es null", () => {
    expect(calcularDeadline("2025-01-01T00:00:00Z", null)).toBeNull();
  });

  it("devuelve null si startedAt es inválido", () => {
    expect(calcularDeadline("not-a-date", 600)).toBeNull();
  });

  it("calcula deadline = startedAt + timerSegundos", () => {
    const deadline = calcularDeadline("2025-06-01T10:00:00.000Z", 600);
    expect(deadline).toBe("2025-06-01T10:10:00.000Z");
  });

  it("acepta Date como startedAt", () => {
    const start = new Date("2025-06-01T10:00:00.000Z");
    const deadline = calcularDeadline(start, 3600);
    expect(deadline).toBe("2025-06-01T11:00:00.000Z");
  });
});

describe("validarTiempoLimite — WO-3b", () => {
  const start = new Date("2025-06-01T10:00:00.000Z");

  it("sin timer → nunca excede", () => {
    expect(validarTiempoLimite(start, null)).toEqual({ exceeded: false });
  });

  it("dentro del timer → no excede", () => {
    const now = new Date("2025-06-01T10:05:00.000Z"); // 5 min en 10 min timer
    expect(validarTiempoLimite(start, 600, now)).toEqual({ exceeded: false });
  });

  it("dentro del margen de gracia → no excede", () => {
    const now = new Date(start.getTime() + (600 + TIMER_GRACE_SECONDS) * 1000);
    expect(validarTiempoLimite(start, 600, now)).toEqual({ exceeded: false });
  });

  it("después del margen de gracia → excede", () => {
    const now = new Date(start.getTime() + (600 + TIMER_GRACE_SECONDS + 1) * 1000);
    const result = validarTiempoLimite(start, 600, now);
    expect(result.exceeded).toBe(true);
    if (result.exceeded) {
      expect(result.limitSec).toBe(600);
      expect(result.elapsedSec).toBeGreaterThan(600 + TIMER_GRACE_SECONDS);
    }
  });

  it("startedAt como string ISO → funciona igual", () => {
    const now = new Date("2025-06-01T10:05:00.000Z");
    expect(validarTiempoLimite("2025-06-01T10:00:00.000Z", 600, now)).toEqual({
      exceeded: false,
    });
  });

  it("startedAt inválido → no excede (fail-open)", () => {
    expect(validarTiempoLimite("garbage", 600)).toEqual({ exceeded: false });
  });
});
