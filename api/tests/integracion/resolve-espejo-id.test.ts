/**
 * FIX-STAFF-TEMAS-BLOQUEADOS — `resolveEspejoId` (cuenta-vinculada.ts) es
 * la pieza que decide si `GET /api/tienda/mis-items` mergea las compras
 * de la cuenta vinculada. El riesgo real: NO debe mergear cuando el otro
 * lado del vínculo es una persona DISTINTA (FASE 6 padre↔hijo real, FASE
 * 8 staff↔alumno real) — sólo cuando genuinamente es un espejo
 * (`tipoCuenta: "ESPEJO_ALUMNO"`, la misma persona con otro login).
 */
import assert from "node:assert/strict";
import { before, test } from "node:test";
import { randomUUID } from "node:crypto";
import { prisma, resetPrisma, seedUser, seedVinculacion } from "./_helpers/setup";
import { resolveEspejoId } from "../../src/lib/cuenta-vinculada";

before(() => {
  resetPrisma();
});

test("resolveEspejoId: devuelve el id cuando el otro lado es un espejo genuino", async () => {
  resetPrisma();
  const staffId = randomUUID();
  const espejoId = randomUUID();
  seedUser({ id: staffId, role: "TEACHER" });
  seedUser({ id: espejoId, role: "USER", tipoCuenta: "ESPEJO_ALUMNO" });
  seedVinculacion(staffId, espejoId);

  assert.equal(await resolveEspejoId(staffId), espejoId);
  // NO es simétrico a propósito: llamado con el id del espejo, el "otro
  // lado" es el staff (que no es un espejo) — no hay nada que mergear en
  // esa dirección (el staff nunca compra como sí mismo).
  assert.equal(await resolveEspejoId(espejoId), null);
});

test("resolveEspejoId: null si no hay vínculo", async () => {
  resetPrisma();
  const staffId = randomUUID();
  seedUser({ id: staffId, role: "TEACHER" });

  assert.equal(await resolveEspejoId(staffId), null);
});

test("resolveEspejoId: null si el otro lado es una persona real distinta (no espejo)", async () => {
  resetPrisma();
  const staffId = randomUUID();
  const alumnoRealId = randomUUID();
  seedUser({ id: staffId, role: "TEACHER" });
  // FASE 8: alumno real vinculado (sin tipoCuenta ESPEJO_ALUMNO) — NO
  // debe mergearse su inventario con el del staff.
  seedUser({ id: alumnoRealId, role: "USER" });
  seedVinculacion(staffId, alumnoRealId);

  assert.equal(await resolveEspejoId(staffId), null);
});
