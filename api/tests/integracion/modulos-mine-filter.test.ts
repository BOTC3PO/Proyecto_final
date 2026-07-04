/**
 * QA-FIX-07 — `GET /api/modulos?mine=true` filtra por ownerUserId (Q4).
 *
 * Síntoma: `MenuProfesor` (apps/web/src/pages/MenuProfesor.tsx:150)
 * llama `GET /api/modulos?mine=true` esperando "mis módulos". Pero el
 * handler (`api/src/routes/modulos.ts:114-151` antes del fix) ignoraba
 * `mine` y devolvía TODOS los módulos del sistema. Resultado: el panel
 * "Módulos activos" mostraba módulos de otros profesores.
 *
 * Decisión (ver `docs/qa/qa-fix-07.md`):
 *  - Opción B elegida: hacer que `/api/modulos` respete `mine` reusando
 *    el mismo patrón que `/api/modulos/buscar` (modulos.ts:54-70).
 *  - Razón: los 4 consumidores restantes de `/api/modulos` (aula.tsx,
 *    ProfesorEstadisticas, useModuloEditor, docs) NO pasan `mine`, así
 *    que la superficie es cero. Semánticamente `/api/modulos?mine=true`
 *    es el path REST canónico (filtro sobre el recurso listado).
 *
 * Cubre:
 *  1. TEACHER autenticado con módulos propios y ajenos → solo recibe
 *     los propios.
 *  2. ?mine=true sin token → 401.
 *  3. ?mine=true combinado con ?aulaId=… → intersección (míos + del aula).
 *  4. Regresión: ?aulaId=… sin mine sigue funcionando como antes.
 *  5. Regresión: sin query params sigue devolviendo todos los módulos
 *     (modo lectura, sigue siendo público).
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

// IDs estables para que la lectura del test sea legible.
const TEACHER_A = "teacher-a";
const TEACHER_B = "teacher-b";
const AULA_X = "aula-x";

// Módulos del TEACHER_A (dueño).
const MOD_A1 = "mod-a-1";
const MOD_A2 = "mod-a-2";
// Módulos del TEACHER_B (ajenos para A).
const MOD_B1 = "mod-b-1";
const MOD_B2 = "mod-b-2";
// Módulo público (sin owner claro, no debería aparecer en mine=true).
const MOD_PUB = "mod-pub";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();

  seedUser({ id: TEACHER_A, role: "TEACHER", schoolId: null });
  seedUser({ id: TEACHER_B, role: "TEACHER", schoolId: null });

  const now = new Date().toISOString();
  const seedModulo = (id: string, owner: string, opts: { aulaId?: string } = {}) => {
    prisma.modulo.rows.push({
      id,
      slug: null,
      titulo: `Módulo ${id}`,
      descripcion: null,
      visibility: "privado",
      schoolId: null,
      ownerUserId: owner,
      dependencies: null,
      createdAt: now,
      updatedAt: now,
      ...(opts.aulaId ? { aulaId: opts.aulaId } : {}),
    });
  };

  seedModulo(MOD_A1, TEACHER_A);
  seedModulo(MOD_A2, TEACHER_A);
  seedModulo(MOD_B1, TEACHER_B);
  seedModulo(MOD_B2, TEACHER_B);
  seedModulo(MOD_PUB, "system");

  // AULA_X tiene asignado MOD_A1 (del TEACHER_A) y MOD_B1 (del TEACHER_B).
  prisma.claseModulo.rows.push({ claseId: AULA_X, moduloId: MOD_A1, required: false });
  prisma.claseModulo.rows.push({ claseId: AULA_X, moduloId: MOD_B1, required: false });
});

test("QA-FIX-07: TEACHER con ?mine=true solo ve sus módulos (no los ajenos)", async () => {
  const token = tokenFor({ id: TEACHER_A, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos?mine=true", { token });

  assert.equal(res.status, 200);
  // PLAN-CORRECCIONES C1 — el endpoint mapea `ownerUserId` (columna
  // Prisma) a `createdBy` (contrato del front, igual que
  // `GET /api/modulos/:id`); antes de ese fix el listado devolvía la
  // fila cruda con `ownerUserId`.
  const body = res.body as { items: Array<{ id: string; createdBy: string }> };
  const ids = body.items.map((m) => m.id).sort();
  // Candado Q4: NO debe incluir MOD_B1, MOD_B2 ni MOD_PUB.
  assert.deepEqual(ids, [MOD_A1, MOD_A2], `unexpected items: ${JSON.stringify(ids)}`);
  // Sanity: todos los items son efectivamente del TEACHER_A.
  for (const m of body.items) {
    assert.equal(m.createdBy, TEACHER_A, `item ${m.id} no es de TEACHER_A`);
  }
});

test("QA-FIX-07: TEACHER_B con ?mine=true ve solo los suyos (sin filtrar por A)", async () => {
  const token = tokenFor({ id: TEACHER_B, role: "TEACHER" });
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos?mine=true", { token });

  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }> };
  const ids = body.items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_B1, MOD_B2]);
});

test("QA-FIX-07: ?mine=true sin token devuelve 401", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos?mine=true");
  assert.equal(res.status, 401, `expected 401, got ${res.status}`);
});

test("QA-FIX-07: ?mine=true&aulaId=X devuelve la intersección (míos ∩ aula)", async () => {
  // TEACHER_A en AULA_X tiene SOLO a MOD_A1 (MOD_B1 es ajeno y MOD_A2
  // no está asignado al aula). Por tanto la intersección es {MOD_A1}.
  const token = tokenFor({ id: TEACHER_A, role: "TEACHER" });
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/modulos?mine=true&aulaId=${encodeURIComponent(AULA_X)}`,
    { token }
  );

  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string; ownerUserId: string }> };
  const ids = body.items.map((m) => m.id).sort();
  // Candado: NO MOD_B1 (no es mío) ni MOD_A2 (no está en el aula).
  assert.deepEqual(ids, [MOD_A1], `expected [MOD_A1], got ${JSON.stringify(ids)}`);
});

test("QA-FIX-07 (regresión): ?aulaId=X sin mine sigue devolviendo TODOS los del aula", async () => {
  // AULA_X tiene MOD_A1 y MOD_B1. Sin auth, sin mine.
  const res = await jsonRequest(
    baseUrl,
    "GET",
    `/api/modulos?aulaId=${encodeURIComponent(AULA_X)}`
  );

  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }> };
  const ids = body.items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_A1, MOD_B1].sort());
});

test("QA-FIX-07 (regresión): sin query params sigue siendo público y devuelve todos", async () => {
  // Modo lectura: GET /api/modulos sin auth ni filtros → todos los
  // módulos del sistema. Verifica que el fix no rompe este caso de uso.
  const res = await jsonRequest(baseUrl, "GET", "/api/modulos");
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }> };
  const ids = body.items.map((m) => m.id).sort();
  assert.deepEqual(ids, [MOD_A1, MOD_A2, MOD_B1, MOD_B2, MOD_PUB].sort());
});
