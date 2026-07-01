/**
 * Etapa 1 (Tiza — preguntas nativas) — Tests de `src/lib/quiz-preguntas.ts`.
 *
 * Tests puros (sin DB ni red), espejo de
 * `apps/web/src/domain/quiz/__tests__/preguntas.spec.ts`. Cubre los
 * criterios de verificación de la Etapa 1: determinismo, obligatorias
 * siempre presentes, relleno respeta maxRepeticiones/poolId, cantidad
 * final == cantidadGlobal, y validación de límites insuficientes.
 */
import assert from "node:assert/strict";
import { test } from "node:test";
import {
  PREGUNTAS_SCHEMA_VERSION,
  POOL_SIN_ID,
  elegirRelleno,
  parseCuestionarioPreguntas,
  repartirSlotsPorPool,
  sortearCuestionarioPreguntas,
  tienePreguntas,
  validarCuestionarioPreguntas,
  type CuestionarioPreguntas,
  type PreguntaQuiz,
} from "../../src/lib/quiz-preguntas";

function obligatoria(plantillaId: string): PreguntaQuiz {
  return { plantillaId, tipo: "obligatoria" };
}

function relleno(
  plantillaId: string,
  opts: { maxRepeticiones?: number; poolId?: string } = {},
): PreguntaQuiz {
  return { plantillaId, tipo: "relleno", ...opts };
}

test("tienePreguntas detecta el schema nuevo", () => {
  assert.equal(tienePreguntas({ preguntas: [] }), true);
  assert.equal(tienePreguntas({ composition: {} }), false);
  assert.equal(tienePreguntas({ posiciones: [] }), false);
  assert.equal(tienePreguntas(null), false);
});

test("parseCuestionarioPreguntas normaliza cantidadGlobal y tipos", () => {
  const c = parseCuestionarioPreguntas({
    cantidadGlobal: 3,
    preguntas: [
      { plantillaId: "p1", tipo: "obligatoria" },
      { plantillaId: "p2", tipo: "relleno", maxRepeticiones: 2, poolId: "pool-a" },
      { plantillaId: "p3" },
    ],
  });
  assert.equal(c.version, PREGUNTAS_SCHEMA_VERSION);
  assert.equal(c.cantidadGlobal, 3);
  assert.equal(c.preguntas.length, 3);
  assert.equal(c.preguntas[2].tipo, "obligatoria");
});

test("round-trip JSON.stringify -> parse reconstruye equivalente", () => {
  const c = parseCuestionarioPreguntas({
    cantidadGlobal: 2,
    preguntas: [{ plantillaId: "p1", tipo: "obligatoria", puntaje: 5 }],
  });
  const roundTripped = parseCuestionarioPreguntas(JSON.parse(JSON.stringify(c)));
  assert.deepEqual(roundTripped, c);
});

test("repartirSlotsPorPool: una sola pool se lleva todos los slots", () => {
  const pool = [relleno("p1", { poolId: "a" }), relleno("p2", { poolId: "a" })];
  const r = repartirSlotsPorPool(pool, 5);
  assert.equal(r.get("a"), 5);
});

test("repartirSlotsPorPool: sin poolId cae en la pool implícita", () => {
  const pool = [relleno("p1"), relleno("p2")];
  const r = repartirSlotsPorPool(pool, 4);
  assert.equal(r.get(POOL_SIN_ID), 4);
});

test("repartirSlotsPorPool: reparto proporcional con mayor resto", () => {
  const pool = [
    relleno("p1", { poolId: "a" }),
    relleno("p2", { poolId: "a" }),
    relleno("p3", { poolId: "a" }),
    relleno("p4", { poolId: "b" }),
  ];
  const r = repartirSlotsPorPool(pool, 5);
  assert.equal(r.get("a"), 4);
  assert.equal(r.get("b"), 1);
});

test("repartirSlotsPorPool: la suma siempre da exacto slotsTotales", () => {
  const pool = [
    relleno("p1", { poolId: "a" }),
    relleno("p2", { poolId: "b" }),
    relleno("p3", { poolId: "c" }),
  ];
  for (let total = 0; total <= 10; total += 1) {
    const r = repartirSlotsPorPool(pool, total);
    const suma = [...r.values()].reduce((a, b) => a + b, 0);
    assert.equal(suma, total, `total=${total}`);
  }
});

test("elegirRelleno respeta maxRepeticiones", () => {
  const pool = [
    relleno("p1", { maxRepeticiones: 2 }),
    relleno("p2", { maxRepeticiones: 1 }),
    relleno("p3", { maxRepeticiones: 3 }),
  ];
  const elegidas = elegirRelleno(pool, 6, (i) => `seed-${i}`);
  assert.equal(elegidas.length, 6);
  const conteo = new Map<string, number>();
  for (const p of elegidas) conteo.set(p.plantillaId, (conteo.get(p.plantillaId) ?? 0) + 1);
  assert.ok((conteo.get("p1") ?? 0) <= 2);
  assert.ok((conteo.get("p2") ?? 0) <= 1);
  assert.ok((conteo.get("p3") ?? 0) <= 3);
});

test("elegirRelleno es determinista por seed", () => {
  const pool = [relleno("p1", { maxRepeticiones: 3 }), relleno("p2", { maxRepeticiones: 3 })];
  const a = elegirRelleno(pool, 4, (i) => `fixed-${i}`).map((p) => p.plantillaId);
  const b = elegirRelleno(pool, 4, (i) => `fixed-${i}`).map((p) => p.plantillaId);
  assert.deepEqual(a, b);
});

test("elegirRelleno reparte parejo cuando hay capacidad de sobra", () => {
  const pool = [relleno("p1", { maxRepeticiones: 10 }), relleno("p2", { maxRepeticiones: 10 })];
  const elegidas = elegirRelleno(pool, 4, (i) => `seed-${i}`);
  const conteo = new Map<string, number>();
  for (const p of elegidas) conteo.set(p.plantillaId, (conteo.get(p.plantillaId) ?? 0) + 1);
  assert.equal(conteo.get("p1"), 2);
  assert.equal(conteo.get("p2"), 2);
});

test("validarCuestionarioPreguntas: ok cuando no hace falta relleno", () => {
  const c: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 2,
    preguntas: [obligatoria("p1"), obligatoria("p2")],
  };
  assert.deepEqual(validarCuestionarioPreguntas(c), { ok: true, errores: [] });
});

test("validarCuestionarioPreguntas: error cuando obligatorias exceden cantidadGlobal", () => {
  const c: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 1,
    preguntas: [obligatoria("p1"), obligatoria("p2")],
  };
  const r = validarCuestionarioPreguntas(c);
  assert.equal(r.ok, false);
  assert.match(r.errores[0], /cantidadGlobal.*menor.*obligatorias/);
});

test("validarCuestionarioPreguntas: error claro cuando maxRepeticiones no alcanza", () => {
  const c: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 5,
    preguntas: [
      obligatoria("p1"),
      relleno("p2", { poolId: "pool-x", maxRepeticiones: 2 }),
      relleno("p3", { poolId: "pool-x", maxRepeticiones: 1 }),
    ],
  };
  const r = validarCuestionarioPreguntas(c);
  assert.equal(r.ok, false);
  assert.ok(r.errores[0].includes('pool "pool-x"'));
  assert.ok(r.errores[0].includes("no alcanzan para llenar 4"));
});

test("validarCuestionarioPreguntas: sin maxRepeticiones cubre cualquier cantidad", () => {
  const c: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 100,
    preguntas: [obligatoria("p1"), relleno("p2")],
  };
  assert.equal(validarCuestionarioPreguntas(c).ok, true);
});

test("sortearCuestionarioPreguntas: obligatorias siempre entran, cantidad final == cantidadGlobal", () => {
  const cuestionario: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 5,
    preguntas: [
      obligatoria("obl-1"),
      obligatoria("obl-2"),
      relleno("rel-1", { maxRepeticiones: 3 }),
      relleno("rel-2", { maxRepeticiones: 3 }),
    ],
  };
  const r = sortearCuestionarioPreguntas(cuestionario, { quizId: "q1", alumnoId: "a1" });
  assert.equal(r.slots.length, 5);
  const obligatoriasElegidas = r.slots.filter((s) => s.tipo === "obligatoria");
  assert.deepEqual(
    obligatoriasElegidas.map((s) => s.pregunta.plantillaId).sort(),
    ["obl-1", "obl-2"],
  );
  const conteo = new Map<string, number>();
  for (const s of r.slots) {
    if (s.tipo !== "relleno") continue;
    conteo.set(s.pregunta.plantillaId, (conteo.get(s.pregunta.plantillaId) ?? 0) + 1);
  }
  assert.ok((conteo.get("rel-1") ?? 0) <= 3);
  assert.ok((conteo.get("rel-2") ?? 0) <= 3);
});

test("sortearCuestionarioPreguntas: determinismo por (quizId, alumnoId, politica, intento)", () => {
  const cuestionario: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 5,
    preguntas: [
      obligatoria("obl-1"),
      obligatoria("obl-2"),
      relleno("rel-1", { maxRepeticiones: 3 }),
      relleno("rel-2", { maxRepeticiones: 3 }),
    ],
  };
  const ctx = { quizId: "q1", alumnoId: "a1", politica: "fijo_por_alumno" as const, intento: 1 };
  const r1 = sortearCuestionarioPreguntas(cuestionario, ctx);
  const r2 = sortearCuestionarioPreguntas(cuestionario, ctx);
  assert.deepEqual(
    r1.slots.map((s) => s.pregunta.plantillaId),
    r2.slots.map((s) => s.pregunta.plantillaId),
  );
});

test("sortearCuestionarioPreguntas: tira Error con mensaje claro si no es sorteable", () => {
  const invalido: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 5,
    preguntas: [obligatoria("p1")],
  };
  assert.throws(
    () => sortearCuestionarioPreguntas(invalido, { quizId: "q1", alumnoId: "a1" }),
    /faltan 4 preguntas de relleno/,
  );
});

test("sortearCuestionarioPreguntas: reparte slots de relleno proporcional entre pools", () => {
  const c: CuestionarioPreguntas = {
    version: PREGUNTAS_SCHEMA_VERSION,
    cantidadGlobal: 6,
    preguntas: [
      relleno("a1", { poolId: "a", maxRepeticiones: 10 }),
      relleno("a2", { poolId: "a", maxRepeticiones: 10 }),
      relleno("b1", { poolId: "b", maxRepeticiones: 10 }),
    ],
  };
  const r = sortearCuestionarioPreguntas(c, { quizId: "q1", alumnoId: "a1" });
  const deA = r.slots.filter((s) => s.pregunta.poolId === "a").length;
  const deB = r.slots.filter((s) => s.pregunta.poolId === "b").length;
  assert.equal(deA, 4);
  assert.equal(deB, 2);
});
