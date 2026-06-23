/**
 * WO-14 — Fundación de la adaptativa: tests E2E de la capa `lib/quiz-*`.
 *
 * Cubre los criterios de la tarea (mirror de los tests del front en
 * `apps/web/src/domain/quiz/__tests__/wo14-fundacion.spec.ts`):
 *  - `dificultad` sobrevive toda la cadena (posiciones → variante →
 *    sorteo → selección → scorer) — el bug de los 4 intentos.
 *  - Variantes por dificultad (a/b/c etiquetadas) en una posición.
 *  - Selección por regla simple sobre material congelado
 *    (`elegirVariantePorDificultad`, `sortearCuestionarioPorDificultadFija`).
 *  - Regla `adaptativa_simple` pura (`proximaDificultad`,
 *    `dificultadInicialSugerida`).
 *  - Scoring ponderado por dificultad (`factorDificultad` +
 *    `puntajePorPosiciones`).
 *  - Config persistida en `EvaluacionConfig` (defaults, parse, round-trip).
 *  - Back-compat con cuestionarios v2 (sin `dificultad`).
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import {
  POSICIONES_SCHEMA_VERSION,
  coerceDificultad,
  dificultadIndice,
  dificultadVecina,
  migrarCuestionario,
  parseCuestionario,
  validarCuestionario,
  type Dificultad,
  type Variante,
} from "../../src/lib/quiz-posiciones";
import {
  DIFICULTAD_INICIAL_DEFAULT,
  elegirVariantePorDificultad,
  dificultadInicialSugerida,
  proximaDificultad,
  sortearCuestionarioPorDificultadFija,
} from "../../src/lib/quiz-sorteo";
import { factorDificultad, puntajePorPosiciones } from "../../src/lib/quiz-puntaje";
import {
  DEFAULT_EVALUACION_CONFIG,
  DIFICULTAD_VENTANA_MAX,
  DIFICULTAD_VENTANA_MIN,
  POLITICA_DIFICULTAD_DEFAULT,
  parseEvaluacionConfig,
  serializeEvaluacionConfig,
} from "../../src/lib/quiz-intentos";

// ────────────────────────────────────────────────────────────────
// Modelo (posiciones)
// ────────────────────────────────────────────────────────────────

test("WO-14 · modelo · schema version es 3 y back-compat con v2", () => {
  assert.equal(POSICIONES_SCHEMA_VERSION, 3);
  const v2 = parseCuestionario({
    posiciones: [
      {
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "x" } }],
      },
    ],
  });
  assert.equal(v2.posiciones[0].variantes[0].dificultad, undefined);
  assert.equal(validarCuestionario(v2).ok, true);
});

test("WO-14 · modelo · parse preserva dificultad válida", () => {
  const c = parseCuestionario({
    posiciones: [
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
          { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
          { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
        ],
      },
    ],
  });
  const difs = c.posiciones[0].variantes.map((v) => v.dificultad);
  assert.deepEqual(difs, ["basico", "intermedio", "avanzado"]);
});

test("WO-14 · modelo · parse descarta valores inválidos silenciosamente", () => {
  const c = parseCuestionario({
    posiciones: [
      {
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "leyenda" },
          { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: 42 },
        ],
      },
    ],
  });
  assert.equal(c.posiciones[0].variantes[0].dificultad, undefined);
  assert.equal(c.posiciones[0].variantes[1].dificultad, undefined);
});

test("WO-14 · modelo · variantes pueden diferir en dificultad", () => {
  const c = parseCuestionario({
    posiciones: [
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
          { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "avanzado" },
        ],
      },
    ],
  });
  assert.equal(validarCuestionario(c).ok, true);
});

test("WO-14 · modelo · round-trip preserva dificultad", () => {
  const original = parseCuestionario({
    posiciones: [
      {
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
          { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "avanzado" },
        ],
      },
    ],
  });
  const round = parseCuestionario(JSON.parse(JSON.stringify(original)));
  assert.deepEqual(round, original);
});

test("WO-14 · modelo · migración viejo → sin dificultad (factor 1.0 por default)", () => {
  const c = migrarCuestionario({ questions: [{ id: "q1" }] });
  assert.equal(c.posiciones[0].variantes[0].dificultad, undefined);
});

test("WO-14 · helpers · dificultadIndice y dificultadVecina", () => {
  assert.equal(dificultadIndice("basico"), 0);
  assert.equal(dificultadIndice("intermedio"), 1);
  assert.equal(dificultadIndice("avanzado"), 2);
  assert.equal(dificultadIndice(undefined), 1);
  assert.equal(dificultadVecina("basico", -1), "basico");
  assert.equal(dificultadVecina("basico", +1), "intermedio");
  assert.equal(dificultadVecina("avanzado", +1), "avanzado");
});

test("WO-14 · helpers · coerceDificultad acepta válidos y descarta inválidos", () => {
  assert.equal(coerceDificultad("basico"), "basico");
  assert.equal(coerceDificultad("intermedio"), "intermedio");
  assert.equal(coerceDificultad("avanzado"), "avanzado");
  assert.equal(coerceDificultad("garbage"), undefined);
  assert.equal(coerceDificultad(42), undefined);
  assert.equal(coerceDificultad(null), undefined);
});

// ────────────────────────────────────────────────────────────────
// Sorteo (ruteo por dificultad)
// ────────────────────────────────────────────────────────────────

const POOL_ABC: Variante[] = [
  { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
  { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
  { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
];

test("WO-14 · elegirVariantePorDificultad · exacta", () => {
  assert.equal(elegirVariantePorDificultad(POOL_ABC, "basico", "s1", {}).letra, "a");
  assert.equal(elegirVariantePorDificultad(POOL_ABC, "intermedio", "s1", {}).letra, "b");
  assert.equal(elegirVariantePorDificultad(POOL_ABC, "avanzado", "s1", {}).letra, "c");
});

test("WO-14 · elegirVariantePorDificultad · vecindad ±1 si no hay exacta", () => {
  const sinAvanzado: Variante[] = [
    { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
    { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
  ];
  assert.equal(elegirVariantePorDificultad(sinAvanzado, "avanzado", "s1", {}).letra, "b");
});

test("WO-14 · elegirVariantePorDificultad · fallback a cualquier nivel con dificultad", () => {
  const soloBasico: Variante[] = [
    { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
  ];
  assert.equal(elegirVariantePorDificultad(soloBasico, "avanzado", "s1", {}).letra, "a");
});

test("WO-14 · elegirVariantePorDificultad · fallback legacy (sin etiqueta)", () => {
  const legacy: Variante[] = [
    { letra: "a", origen: { origen: "banco", questionId: "qa" } },
    { letra: "b", origen: { origen: "banco", questionId: "qb" } },
  ];
  const r = elegirVariantePorDificultad(legacy, "avanzado", "s1", {});
  assert.ok(r.letra === "a" || r.letra === "b");
});

test("WO-14 · elegirVariantePorDificultad · determinista", () => {
  const vistas = { a: 1, b: 0, c: 1 };
  const r1 = elegirVariantePorDificultad(POOL_ABC, "basico", "seed", vistas);
  const r2 = elegirVariantePorDificultad(POOL_ABC, "basico", "seed", vistas);
  assert.equal(r1.letra, r2.letra);
});

test("WO-14 · elegirVariantePorDificultad · pool de 1 variante devuelve esa sin consumir seed", () => {
  const una: Variante[] = [
    { letra: "x", origen: { origen: "banco", questionId: "qx" }, dificultad: "basico" },
  ];
  assert.equal(elegirVariantePorDificultad(una, "avanzado", "s1", {}).letra, "x");
});

test("WO-14 · sortearCuestionarioPorDificultadFija · propaga dificultad a la selección", () => {
  const c = parseCuestionario({
    posiciones: [
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
          { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
          { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
        ],
      },
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa2" }, dificultad: "avanzado" },
          { letra: "b", origen: { origen: "banco", questionId: "qb2" }, dificultad: "avanzado" },
        ],
      },
    ],
  });
  const s = sortearCuestionarioPorDificultadFija(
    c,
    { alumnoId: "a1", quizId: "q1" },
    "intermedio",
  );
  assert.equal(s.selecciones[0].letra, "b");
  assert.equal(s.selecciones[0].dificultad, "intermedio");
  // Pos 2: intermedio no está → cae a avanzado (vecindad).
  assert.equal(s.selecciones[1].dificultad, "avanzado");
});

test("WO-14 · sortearCuestionarioPorDificultadFija · idempotente", () => {
  const c = parseCuestionario({
    posiciones: [
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "qa" }, dificultad: "basico" },
          { letra: "b", origen: { origen: "banco", questionId: "qb" }, dificultad: "intermedio" },
          { letra: "c", origen: { origen: "banco", questionId: "qc" }, dificultad: "avanzado" },
        ],
      },
    ],
  });
  const ctx = { alumnoId: "a1", quizId: "q1" };
  const r1 = sortearCuestionarioPorDificultadFija(c, ctx, "intermedio");
  const r2 = sortearCuestionarioPorDificultadFija(c, ctx, "intermedio");
  assert.equal(r1.selecciones[0].letra, r2.selecciones[0].letra);
});

// ────────────────────────────────────────────────────────────────
// Reglas adaptativa_simple
// ────────────────────────────────────────────────────────────────

test("WO-14 · proximaDificultad · todas correctas sube; todas incorrectas baja", () => {
  assert.equal(proximaDificultad("basico", [true, true], 2), "intermedio");
  assert.equal(proximaDificultad("intermedio", [true, true], 2), "avanzado");
  assert.equal(proximaDificultad("avanzado", [true, true, true], 2), "avanzado"); // saturado
  assert.equal(proximaDificultad("avanzado", [false, false], 2), "intermedio");
  assert.equal(proximaDificultad("intermedio", [false, false], 2), "basico");
  assert.equal(proximaDificultad("basico", [false, false, false], 2), "basico"); // saturado
});

test("WO-14 · proximaDificultad · mezcla o ventana incompleta = se queda", () => {
  assert.equal(proximaDificultad("intermedio", [true, false], 2), "intermedio");
  assert.equal(proximaDificultad("intermedio", [true], 2), "intermedio");
  assert.equal(proximaDificultad("intermedio", [], 2), "intermedio");
});

test("WO-14 · dificultadInicialSugerida · historial vacío = default (intermedio)", () => {
  assert.equal(dificultadInicialSugerida([]), "intermedio");
  assert.equal(dificultadInicialSugerida([]), DIFICULTAD_INICIAL_DEFAULT);
});

test("WO-14 · dificultadInicialSugerida · un nivel arriba del mejor dominado", () => {
  // básico 2/3 → dominó básico → un nivel arriba = intermedio.
  const r1 = dificultadInicialSugerida([
    { dificultad: "basico", correcta: true },
    { dificultad: "basico", correcta: true },
    { dificultad: "basico", correcta: false },
  ]);
  assert.equal(r1, "intermedio");
  // intermedio 2/2 → dominó intermedio → un nivel arriba = avanzado.
  const r2 = dificultadInicialSugerida([
    { dificultad: "intermedio", correcta: true },
    { dificultad: "intermedio", correcta: true },
  ]);
  assert.equal(r2, "avanzado");
  // avanzado 2/2 → dominó avanzado → saturado en avanzado.
  const r3 = dificultadInicialSugerida([
    { dificultad: "avanzado", correcta: true },
    { dificultad: "avanzado", correcta: true },
  ]);
  assert.equal(r3, "avanzado");
  // sin dominio (<60%) en ningún nivel → default intermedio.
  const r4 = dificultadInicialSugerida([
    { dificultad: "avanzado", correcta: false },
    { dificultad: "avanzado", correcta: false },
  ]);
  assert.equal(r4, "intermedio");
});

// ────────────────────────────────────────────────────────────────
// Scoring (factor de dificultad)
// ────────────────────────────────────────────────────────────────

test("WO-14 · factorDificultad · 0.8 / 1.0 / 1.2 / 1.0(undefined)", () => {
  assert.equal(factorDificultad("basico"), 0.8);
  assert.equal(factorDificultad("intermedio"), 1.0);
  assert.equal(factorDificultad("avanzado"), 1.2);
  assert.equal(factorDificultad(undefined), 1.0);
});

test("WO-14 · puntajePorPosiciones · back-compat sin factor (pre-WO-14)", () => {
  const r = puntajePorPosiciones(
    [
      { numero: 1, puntaje: 2 },
      { numero: 2, puntaje: 3 },
    ],
    new Set([1, 2]),
  );
  assert.equal(r.score, 5);
  assert.equal(r.maxScore, 5);
  assert.equal(r.ratio, 1.0);
});

test("WO-14 · puntajePorPosiciones · factor se aplica a score y maxScore (ratio se preserva)", () => {
  const r = puntajePorPosiciones(
    [
      { numero: 1, puntaje: 2, factorDificultad: 1.2 },
      { numero: 2, puntaje: 3, factorDificultad: 0.8 },
    ],
    new Set([1]),
  );
  // score = 2*1.2 = 2.4; maxScore = 2.4 + 2.4 = 4.8; ratio = 0.5.
  assert.ok(Math.abs(r.score - 2.4) < 1e-5);
  assert.ok(Math.abs(r.maxScore - 4.8) < 1e-5);
  assert.ok(Math.abs((r.ratio ?? 0) - 0.5) < 1e-5);
});

test("WO-14 · puntajePorPosiciones · posición con puntaje 0 sigue sin entrar", () => {
  const r = puntajePorPosiciones(
    [
      { numero: 1, puntaje: 2, factorDificultad: 1.2 },
      { numero: 2, puntaje: 0, factorDificultad: 0.8 },
    ],
    new Set([1, 2]),
  );
  assert.ok(Math.abs(r.maxScore - 2.4) < 1e-5);
  assert.ok(Math.abs(r.score - 2.4) < 1e-5);
});

test("WO-14 · criterio: una difícil bien pesa más que una fácil bien", () => {
  const rFacil = puntajePorPosiciones(
    [{ numero: 1, puntaje: 2, factorDificultad: 0.8 }],
    new Set([1]),
  );
  const rDificil = puntajePorPosiciones(
    [{ numero: 1, puntaje: 2, factorDificultad: 1.2 }],
    new Set([1]),
  );
  assert.ok(rDificil.score > rFacil.score);
  assert.ok(rDificil.maxScore > rFacil.maxScore);
});

// ────────────────────────────────────────────────────────────────
// Config (EvaluacionConfig)
// ────────────────────────────────────────────────────────────────

test("WO-14 · EvaluacionConfig · defaults para los 3 tipos", () => {
  for (const tipo of ["practica", "formal", "competencia"] as const) {
    const r = parseEvaluacionConfig(null, tipo);
    assert.equal(r.politicaDificultad, POLITICA_DIFICULTAD_DEFAULT);
    assert.equal(r.dificultadInicial, "intermedio");
    assert.equal(r.dificultadVentana, 2);
  }
});

test("WO-14 · EvaluacionConfig · override gana sobre defaults", () => {
  const r = parseEvaluacionConfig(
    JSON.stringify({
      politicaDificultad: "adaptativa_simple",
      dificultadInicial: "avanzado",
      dificultadVentana: 3,
    }),
    "practica",
  );
  assert.equal(r.politicaDificultad, "adaptativa_simple");
  assert.equal(r.dificultadInicial, "avanzado");
  assert.equal(r.dificultadVentana, 3);
});

test("WO-14 · EvaluacionConfig · back-compat con JSON viejos (sin los campos nuevos)", () => {
  const r = parseEvaluacionConfig(JSON.stringify({ type: "formal" }), "formal");
  assert.equal(r.politicaDificultad, POLITICA_DIFICULTAD_DEFAULT);
  assert.equal(r.dificultadInicial, "intermedio");
  assert.equal(r.dificultadVentana, 2);
});

test("WO-14 · EvaluacionConfig · valores inválidos caen al default (defensa)", () => {
  const r1 = parseEvaluacionConfig(
    JSON.stringify({ politicaDificultad: "garbage" }),
    "practica",
  );
  assert.equal(r1.politicaDificultad, "fija");
  const r2 = parseEvaluacionConfig(
    JSON.stringify({ dificultadInicial: "legendario" }),
    "practica",
  );
  assert.equal(r2.dificultadInicial, "intermedio");
});

test("WO-14 · EvaluacionConfig · clamp de ventana", () => {
  assert.equal(
    parseEvaluacionConfig(
      JSON.stringify({ dificultadVentana: 999 }),
      "practica",
    ).dificultadVentana,
    DIFICULTAD_VENTANA_MAX,
  );
  assert.equal(
    parseEvaluacionConfig(
      JSON.stringify({ dificultadVentana: 0 }),
      "practica",
    ).dificultadVentana,
    DIFICULTAD_VENTANA_MIN,
  );
});

test("WO-14 · EvaluacionConfig · round-trip de los 3 campos nuevos", () => {
  const original = parseEvaluacionConfig(
    JSON.stringify({
      politicaDificultad: "adaptativa_simple",
      dificultadInicial: "avanzado",
      dificultadVentana: 3,
    }),
    "practica",
  );
  const serialized = serializeEvaluacionConfig(original);
  assert.equal(serialized.politicaDificultad, "adaptativa_simple");
  assert.equal(serialized.dificultadInicial, "avanzado");
  assert.equal(serialized.dificultadVentana, 3);
  const round = parseEvaluacionConfig(JSON.stringify(serialized), "practica");
  assert.deepEqual(round, original);
});

test("WO-14 · DEFAULT_EVALUACION_CONFIG · los 3 tipos traen los 3 campos nuevos", () => {
  for (const tipo of ["practica", "formal", "competencia"] as const) {
    const cfg = DEFAULT_EVALUACION_CONFIG[tipo];
    assert.ok(cfg.politicaDificultad);
    assert.ok(cfg.dificultadInicial);
    assert.ok(cfg.dificultadVentana);
  }
});
