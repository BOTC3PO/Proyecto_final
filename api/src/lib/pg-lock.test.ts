/**
 * Sólo testea `lockKeyFor` (puro, sin DB). `withAdvisoryLock` en sí se
 * verificó a mano contra Postgres local (acquire/blocked/release con 2
 * PrismaClient separados) — el stub de tests (InMemoryPrisma) no
 * implementa $queryRaw, así que no se puede ejercitar acá. Ver
 * tareas_pendientes/PLAN-escalabilidad-api.md.
 */
import assert from "node:assert/strict";
import test from "node:test";
import { lockKeyFor } from "./pg-lock";

test("lockKeyFor: es determinístico", () => {
  assert.equal(lockKeyFor("billing-delinquency-sweep"), lockKeyFor("billing-delinquency-sweep"));
});

test("lockKeyFor: distintas keys dan distinto hash", () => {
  assert.notEqual(lockKeyFor("billing-delinquency-sweep"), lockKeyFor("pasarelas-reconciliacion"));
});

test("lockKeyFor: siempre en rango int32 (válido como bigint para pg_try_advisory_lock)", () => {
  for (const key of ["", "a", "billing-delinquency-sweep", "x".repeat(200)]) {
    const hash = lockKeyFor(key);
    assert.ok(Number.isInteger(hash));
    assert.ok(hash >= -(2 ** 31) && hash < 2 ** 31);
  }
});
