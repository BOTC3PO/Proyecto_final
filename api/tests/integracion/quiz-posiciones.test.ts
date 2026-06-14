/**
 * F3-01 — Modelo de datos "cuestionario por posiciones".
 *
 * Tests puros (sin DB ni red) del modelo: round-trip serialización, migración
 * idempotente desde el modelo viejo, y validación de las reglas del plan
 * (variantes de una posición comparten tema y puntaje).
 */

import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CuestionarioPosiciones,
  POSICIONES_SCHEMA_VERSION,
  TEMA_GENERAL,
  letraPorIndice,
  migrarCuestionario,
  parseCuestionario,
  tienePosiciones,
  validarCuestionario,
} from "../../src/lib/quiz-posiciones";

// ───────────────────────────────────────────────────────────────
// Round-trip
// ───────────────────────────────────────────────────────────────

test("round-trip: parse(JSON.parse(JSON.stringify(c))) reconstruye el canónico", () => {
  const c: CuestionarioPosiciones = {
    version: POSICIONES_SCHEMA_VERSION,
    temas: [
      { id: "general", nombre: "General" },
      { id: "algebra", nombre: "Álgebra", color: "#f00" },
      { id: "geo", nombre: "Geometría" },
    ],
    posiciones: [
      {
        numero: 1,
        tipo: "fijo",
        temaPrincipal: "algebra",
        puntaje: 2,
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }],
      },
      {
        numero: 2,
        tipo: "obligatorio",
        temaPrincipal: "algebra",
        temaSecundario: "geo",
        puntaje: 3,
        variantes: [
          { letra: "a", origen: { origen: "plantilla", plantillaId: "pl1", plantillaVersion: 2, params: { n: 5 } } },
          { letra: "b", origen: { origen: "generador", generatorId: "gen1", generatorVersion: "1.0" } },
          { letra: "c", origen: { origen: "banco", questionId: "q9" } },
        ],
      },
      {
        numero: 3,
        tipo: "relleno",
        temaPrincipal: "geo",
        puntaje: 1,
        variantes: [{ letra: "a", origen: { origen: "generador", generatorId: "gen2", params: {} } }],
      },
    ],
  };

  const round = parseCuestionario(JSON.parse(JSON.stringify(c)));
  assert.deepEqual(round, c);
});

test("round-trip: re-parsear lo ya canónico es estable (idempotente)", () => {
  const once = parseCuestionario({
    posiciones: [{ tipo: "fijo", temaPrincipal: "general", puntaje: 1, variantes: [{ origen: { origen: "banco", questionId: "x" } }] }],
  });
  const twice = parseCuestionario(JSON.parse(JSON.stringify(once)));
  assert.deepEqual(twice, once);
});

test("parse: renumera posiciones 1..N y completa letras y tema general faltantes", () => {
  const c = parseCuestionario({
    posiciones: [
      { numero: 99, variantes: [{}, {}] }, // sin letras, sin tema
    ],
  });
  assert.equal(c.posiciones[0].numero, 1);
  assert.deepEqual(
    c.posiciones[0].variantes.map((v) => v.letra),
    ["a", "b"],
  );
  assert.equal(c.posiciones[0].temaPrincipal, TEMA_GENERAL.id);
  // El tema general referenciado se agrega a la lista de temas.
  assert.ok(c.temas.some((t) => t.id === TEMA_GENERAL.id));
});

// ───────────────────────────────────────────────────────────────
// Migración modelo viejo → posiciones
// ───────────────────────────────────────────────────────────────

test("migración: quiz viejo → N posiciones fijas de una variante (banco)", () => {
  const legacy = {
    questions: [{ id: "q1", points: 2 }, { id: "q2" }, { id: "q3", points: 5 }],
    composition: { tomar: "todas", seleccion: "fijo", pesoPorDefecto: 1 },
  };
  const c = migrarCuestionario(legacy);

  assert.equal(c.version, POSICIONES_SCHEMA_VERSION);
  assert.equal(c.posiciones.length, 3);
  assert.deepEqual(c.temas, [TEMA_GENERAL]);

  // Todas fijas, una variante "a" al banco, numeradas 1..3.
  c.posiciones.forEach((p, i) => {
    assert.equal(p.numero, i + 1);
    assert.equal(p.tipo, "fijo");
    assert.equal(p.temaPrincipal, TEMA_GENERAL.id);
    assert.equal(p.variantes.length, 1);
    assert.deepEqual(p.variantes[0], { letra: "a", origen: { origen: "banco", questionId: `q${i + 1}` } });
  });

  // Puntaje: points propio, o pesoPorDefecto.
  assert.equal(c.posiciones[0].puntaje, 2);
  assert.equal(c.posiciones[1].puntaje, 1); // sin points → pesoPorDefecto
  assert.equal(c.posiciones[2].puntaje, 5);
});

test("migración: pesoPorDefecto distinto de 1 se aplica a posiciones sin points", () => {
  const c = migrarCuestionario({
    questions: [{ id: "a" }, { id: "b", points: 4 }],
    composition: { pesoPorDefecto: 3 },
  });
  assert.equal(c.posiciones[0].puntaje, 3);
  assert.equal(c.posiciones[1].puntaje, 4);
});

test("migración: idempotente — migrar(migrar(x)) === migrar(x)", () => {
  const legacy = {
    questions: [{ id: "q1", points: 2 }, { id: "q2" }],
    composition: { pesoPorDefecto: 1 },
  };
  const once = migrarCuestionario(legacy);
  const twice = migrarCuestionario(once);
  const thrice = migrarCuestionario(twice);
  assert.deepEqual(twice, once);
  assert.deepEqual(thrice, once);
});

test("migración: quiz sin composición usa puntaje 1 por defecto", () => {
  const c = migrarCuestionario({ questions: [{ id: "q1" }] });
  assert.equal(c.posiciones[0].puntaje, 1);
});

test("tienePosiciones distingue modelo viejo de nuevo", () => {
  assert.equal(tienePosiciones({ questions: [{ id: "q1" }] }), false);
  assert.equal(tienePosiciones({ posiciones: [] }), true);
  assert.equal(tienePosiciones(null), false);
});

// ───────────────────────────────────────────────────────────────
// Validación
// ───────────────────────────────────────────────────────────────

test("validación: un cuestionario canónico bien formado es válido", () => {
  const c = migrarCuestionario({ questions: [{ id: "q1", points: 2 }] });
  const r = validarCuestionario(c);
  assert.equal(r.ok, true, r.errores.join("; "));
});

test("validación: rechaza variantes con puntaje distinto en la misma posición", () => {
  const raw = {
    temas: [TEMA_GENERAL],
    posiciones: [
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        variantes: [
          { letra: "a", puntaje: 2, origen: { origen: "banco", questionId: "q1" } },
          { letra: "b", puntaje: 3, origen: { origen: "banco", questionId: "q2" } },
        ],
      },
    ],
  };
  const r = validarCuestionario(raw);
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /no comparten puntaje/.test(e)), r.errores.join("; "));
});

test("validación: rechaza variantes con tema distinto en la misma posición", () => {
  const raw = {
    temas: [TEMA_GENERAL, { id: "otro", nombre: "Otro" }],
    posiciones: [
      {
        tipo: "obligatorio",
        variantes: [
          { letra: "a", tema: "general", origen: { origen: "banco", questionId: "q1" } },
          { letra: "b", tema: "otro", origen: { origen: "banco", questionId: "q2" } },
        ],
      },
    ],
  };
  const r = validarCuestionario(raw);
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /no comparten tema/.test(e)), r.errores.join("; "));
});

test("normalización: variantes con tema/puntaje uniforme se hoistean a la posición", () => {
  const c = parseCuestionario({
    temas: [TEMA_GENERAL, { id: "algebra", nombre: "Álgebra" }],
    posiciones: [
      {
        tipo: "obligatorio",
        variantes: [
          { letra: "a", tema: "algebra", puntaje: 4, origen: { origen: "banco", questionId: "q1" } },
          { letra: "b", tema: "algebra", puntaje: 4, origen: { origen: "banco", questionId: "q2" } },
        ],
      },
    ],
  });
  const pos = c.posiciones[0];
  assert.equal(pos.temaPrincipal, "algebra");
  assert.equal(pos.puntaje, 4);
  // El modelo canónico NO lleva tema/puntaje a nivel variante.
  assert.deepEqual(pos.variantes[0], { letra: "a", origen: { origen: "banco", questionId: "q1" } });
});

test("validación: tipo 'fijo' con más de una variante es inválido", () => {
  const r = validarCuestionario({
    temas: [TEMA_GENERAL],
    posiciones: [
      {
        tipo: "fijo",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "q1" } },
          { letra: "b", origen: { origen: "banco", questionId: "q2" } },
        ],
      },
    ],
  });
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /exactamente una variante/.test(e)));
});

test("validación: letras de variante duplicadas son inválidas", () => {
  const r = validarCuestionario({
    temas: [TEMA_GENERAL],
    posiciones: [
      {
        tipo: "obligatorio",
        temaPrincipal: "general",
        puntaje: 1,
        variantes: [
          { letra: "a", origen: { origen: "banco", questionId: "q1" } },
          { letra: "a", origen: { origen: "banco", questionId: "q2" } },
        ],
      },
    ],
  });
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /letra de variante duplicada/.test(e)));
});

test("validación: temaPrincipal no declarado es inválido", () => {
  const r = validarCuestionario({
    temas: [TEMA_GENERAL],
    posiciones: [
      { tipo: "fijo", temaPrincipal: "inexistente", puntaje: 1, variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }] },
    ],
  });
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /no está declarado/.test(e)));
});

test("validación: temaSecundario igual al principal es inválido", () => {
  const r = validarCuestionario({
    temas: [TEMA_GENERAL],
    posiciones: [
      {
        tipo: "fijo",
        temaPrincipal: "general",
        temaSecundario: "general",
        puntaje: 1,
        variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }],
      },
    ],
  });
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /temaSecundario igual a temaPrincipal/.test(e)));
});

test("validación: cuestionario sin posiciones es inválido", () => {
  const r = validarCuestionario({ temas: [], posiciones: [] });
  assert.equal(r.ok, false);
  assert.ok(r.errores.some((e) => /no tiene posiciones/.test(e)));
});

test("letraPorIndice: a..z luego aa, ab", () => {
  assert.equal(letraPorIndice(0), "a");
  assert.equal(letraPorIndice(25), "z");
  assert.equal(letraPorIndice(26), "aa");
  assert.equal(letraPorIndice(27), "ab");
});

// ───────────────────────────────────────────────────────────────
// Soporte de los 3 tipos de slot del plan (sin sorteo, F3-02)
// ───────────────────────────────────────────────────────────────

test("el modelo soporta los 3 tipos de slot: fijo, obligatorio, relleno", () => {
  const c = parseCuestionario({
    temas: [TEMA_GENERAL],
    posiciones: [
      { tipo: "fijo", temaPrincipal: "general", puntaje: 1, variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }] },
      { tipo: "obligatorio", temaPrincipal: "general", puntaje: 1, variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q2" } }, { letra: "b", origen: { origen: "banco", questionId: "q3" } }] },
      { tipo: "relleno", temaPrincipal: "general", puntaje: 1, variantes: [{ letra: "a", origen: { origen: "generador", generatorId: "g1" } }] },
    ],
  });
  assert.deepEqual(c.posiciones.map((p) => p.tipo), ["fijo", "obligatorio", "relleno"]);
  assert.equal(validarCuestionario(c).ok, true);
});
