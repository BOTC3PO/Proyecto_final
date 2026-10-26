/**
 * PLAN-A §2 (fase 4) — regresión del ítem 2 ("profesor no puede publicar
 * en aulas", 409 "invalid classroom status").
 *
 * Diagnóstico: `publicaciones.ts` rechazaba con 409 crudo cualquier aula
 * cuyo `status` no normalizara a ACTIVE/ARCHIVED/LOCKED — incluyendo
 * aulas legacy con `status` ausente, aunque el profesor las usara a
 * diario. `PUT /api/aulas/:id` YA trataba ese caso como ACTIVE
 * (comentario "Si el aula no tiene status (legacy), asumir ACTIVE"); acá
 * extendemos el mismo fallback a `POST .../publicaciones`,
 * `.../comentarios`, `PATCH /api/aulas/:id` y `reasignar-profesor`, que
 * no lo tenían.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ESCUELA_ID = "esc-plan-a-2";
const TEACHER_ID = "teacher-legacy-aula";
const AULA_LEGACY_ID = "aula-legacy-sin-status";
const AULA_ACTIVA_ID = "aula-activa";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const { publicaciones } = await import("../../src/routes/publicaciones");
  const server = await startServer([aulas, publicaciones]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: TEACHER_ID, role: "TEACHER", schoolId: ESCUELA_ID });

  const now = new Date().toISOString();
  // Aula legacy: SIN campo `status` (simula una aula creada antes de
  // que la columna fuera obligatoria).
  prisma.clase.rows.push({
    id: AULA_LEGACY_ID,
    escuelaId: ESCUELA_ID,
    name: "Aula legacy",
    grade: "5°",
    isDeleted: false,
    createdBy: TEACHER_ID,
    createdAt: now
    // status: (ausente a propósito)
  } as never);

  prisma.clase.rows.push({
    id: AULA_ACTIVA_ID,
    escuelaId: ESCUELA_ID,
    name: "Aula activa",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER_ID,
    createdAt: now
  } as never);
});

test("POST /api/aulas/:id/publicaciones — aula legacy sin status → 201 (ya no 409)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_LEGACY_ID}/publicaciones`, {
    token,
    body: { contenido: "Primera publicación del cuatrimestre" }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("POST /api/aulas/:id/publicaciones — aula ACTIVE explícita sigue funcionando (no-regresión)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ACTIVA_ID}/publicaciones`, {
    token,
    body: { contenido: "Publicación normal" }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("PATCH /api/aulas/:id — aula legacy sin status ya no devuelve 409 crudo", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "PATCH", `/api/aulas/${AULA_LEGACY_ID}`, {
    token,
    body: { name: "Aula legacy renombrada" }
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
});
