/**
 * FIX-COMPARTIR-SCOPE — el back antes SIEMPRE forzaba
 * `visibility: 'escuela'` en `POST /api/materiales/:id/compartir` sin
 * pedirle nada al docente. Eso exponía el material a toda la escuela
 * sin selector — bug 3.1 de `docs/qa/test-parte-3-profesor.md`.
 *
 * El fix acepta un body con `scope ∈ {'privado', 'escuela', 'publico'}`.
 * Backward compat: si el body está vacío (caso legacy), el endpoint
 * mantiene el comportamiento de "compartir con la escuela" para no
 * romper integraciones existentes.
 *
 * Cubre:
 *  1. body {} → scope='escuela' (legacy), schoolId se setea.
 *  2. body { scope: 'privado' } → visibility=private, schoolId=null.
 *  3. body { scope: 'publico' } → visibility=publico.
 *  4. body { scope: 'invalido' } → 400.
 *  5. doc sin schoolId intenta 'escuela' → 400.
 *  6. body con `targetIds` se persiste en `compartirCon` (JSON).
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
} from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const OWNER = "owner-mat";
const SCHOOL = "esc-mat";
const OTHER = "other-mat";
const MAT = "mat-1";

before(async () => {
  const { materiales } = await import("../../src/routes/materiales");
  const server = await startServer([materiales]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  seedUser({ id: OTHER, role: "TEACHER", schoolId: null });
  prisma.modulo.rows.push({
    id: MAT,
    titulo: "Material compartido",
    subject: "Matemáticas",
    visibility: "private",
    schoolId: null,
    ownerUserId: OWNER,
    isDeleted: false,
    createdAt: "2026-06-01T00:00:00.000Z",
    updatedAt: "2026-06-15T00:00:00.000Z",
  });
});

const visibilityOf = (id: string) =>
  prisma.modulo.rows.find((m) => m.id === id)?.visibility;
const schoolIdOf = (id: string) =>
  prisma.modulo.rows.find((m) => m.id === id)?.schoolId ?? null;
const compartirConOf = (id: string) =>
  (prisma.modulo.rows.find((m) => m.id === id) as Record<string, unknown>)
    ?.compartirCon ?? null;

test("FIX-COMPARTIR-SCOPE: body vacío → comportamiento legacy (escuela)", async () => {
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: {} },
  );
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { ok: true, scope: "escuela" });
  assert.equal(visibilityOf(MAT), "escuela");
  assert.equal(schoolIdOf(MAT), SCHOOL);
});

test("FIX-COMPARTIR-SCOPE: scope=privado vuelve a 'privado' y limpia schoolId", async () => {
  // Setup: empezamos con el material ya en escuela.
  prisma.modulo.rows = prisma.modulo.rows.map((m) =>
    m.id === MAT ? { ...m, visibility: "escuela", schoolId: SCHOOL } : m,
  );
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: { scope: "privado" } },
  );
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { ok: true, scope: "privado" });
  // FIX-COMPARTIR-SCOPE — el front usa el vocabulario español
  // (`publico` | `privado` | `escuela`, ver
  // `apps/web/src/domain/module/module.types.ts:1`). El back ahora
  // persiste el `scope` tal cual llega, así que `privado` queda
  // como `privado` (no `private` legacy).
  assert.equal(visibilityOf(MAT), "privado");
  assert.equal(schoolIdOf(MAT), null);
});

test("FIX-COMPARTIR-SCOPE: scope=publico → visibility=publico", async () => {
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: { scope: "publico" } },
  );
  assert.equal(res.status, 200);
  assert.equal(visibilityOf(MAT), "publico");
});

test("FIX-COMPARTIR-SCOPE: scope inválido → 400 con mensaje claro", async () => {
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: { scope: "nube" } },
  );
  assert.equal(res.status, 400);
  assert.match(res.body.error ?? "", /scope inv/);
});

test("FIX-COMPARTIR-SCOPE: docente sin schoolId intentando 'escuela' → 400", async () => {
  // OTHER es TEACHER con schoolId=null. Solo es dueño si
  // cambiamos el owner del material a OTHER.
  prisma.modulo.rows = prisma.modulo.rows.map((m) =>
    m.id === MAT ? { ...m, ownerUserId: OTHER } : m,
  );
  const token = tokenFor({ id: OTHER, role: "TEACHER", schoolId: null });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: { scope: "escuela" } },
  );
  assert.equal(res.status, 400);
  assert.match(res.body.error ?? "", /escuela/);
});

test("FIX-COMPARTIR-SCOPE: targetIds se persiste en compartirCon", async () => {
  const token = tokenFor({ id: OWNER, role: "TEACHER", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: { scope: "escuela", targetIds: ["aula-1", "doc-2"] } },
  );
  assert.equal(res.status, 200);
  const stored = compartirConOf(MAT);
  assert.ok(typeof stored === "string", "compartirCon debe persistirse como string (JSON)");
  assert.deepEqual(JSON.parse(stored as string), ["aula-1", "doc-2"]);
});

test("FIX-COMPARTIR-SCOPE: no-docente no puede compartir (debe seguir 403)", async () => {
  // No sembramos al OWNER: el user que pega el POST no está en la DB
  // y `getUserId` devuelve null → 403.
  const token = tokenFor({ id: "ghost", role: "STUDENT", schoolId: SCHOOL });
  const res = await jsonRequest(
    baseUrl,
    "POST",
    `/api/materiales/${MAT}/compartir`,
    { token, body: { scope: "escuela" } },
  );
  assert.equal(res.status, 403);
});
