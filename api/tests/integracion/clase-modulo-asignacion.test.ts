/**
 * Tarea 16b — endpoints de asignación/desasignación de módulos.
 *
 * Verifica:
 *  - POST /api/aulas/:id/modulos (docente del aula) → 201 y crea la fila.
 *  - POST /api/aulas/:id/modulos idempotente → 200 con alreadyAssigned.
 *  - GET /api/aulas/:id/modulos devuelve la fila creada.
 *  - POST /api/aulas/:id/modulos como alumno → 403.
 *  - POST /api/aulas/:id/modulos con aula inexistente → 404.
 *  - DELETE /api/aulas/:id/modulos/:moduloId (docente) → 200 y borra el vínculo.
 *  - DELETE no toca el módulo en sí (sigue existiendo).
 *  - POST /api/modulos con aulaId crea la fila clase_modulos (cierre del lazo).
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const DOCENTE_ID = "docente-1";
const OTRO_DOCENTE_ID = "docente-2";
const ALUMNO_ID = "alumno-1";
const ESCUELA_ID = "escuela-1";
const AULA_ID = "aula-1";
const AULA_OTRA_ESCUELA_ID = "aula-2";
const MODULO_ID = "mod-1";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([modulos, aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();

  // Docentes y alumno
  seedUser({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  seedUser({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: "otra-escuela" });
  seedUser({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });

  // Aula AULA_ID: pertenece a la escuela 1, el DOCENTE_ID es miembro TEACHER.
  prisma.clase.rows.push({
    id: AULA_ID,
    escuelaId: ESCUELA_ID,
    name: "5°B",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: DOCENTE_ID,
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: DOCENTE_ID,
    rolEnClase: "TEACHER",
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_ID,
    usuarioId: ALUMNO_ID,
    rolEnClase: "STUDENT",
  });

  // Aula de OTRA escuela: DOCENTE_ID NO es miembro.
  prisma.clase.rows.push({
    id: AULA_OTRA_ESCUELA_ID,
    escuelaId: "otra-escuela",
    name: "Otra aula",
    grade: "1°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: OTRO_DOCENTE_ID,
    createdAt: new Date().toISOString(),
  });
  prisma.claseMiembro.rows.push({
    claseId: AULA_OTRA_ESCUELA_ID,
    usuarioId: OTRO_DOCENTE_ID,
    rolEnClase: "TEACHER",
  });

  // Módulo a asignar.
  prisma.modulo.rows.push({
    id: MODULO_ID,
    titulo: "Módulo de prueba",
    visibility: "privado",
    schoolId: null,
    ownerUserId: DOCENTE_ID,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
});

test("POST /api/aulas/:id/modulos — docente del aula asigna un módulo (201)", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(res.status, 201);
  const rows = prisma.claseModulo.rows;
  assert.equal(rows.length, 1);
  assert.equal(rows[0].claseId, AULA_ID);
  assert.equal(rows[0].moduloId, MODULO_ID);
});

test("GET /api/aulas/:id/modulos — devuelve la fila creada", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  // Asignamos primero
  await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  const res = await jsonRequest(baseUrl, "GET", `/api/aulas/${AULA_ID}/modulos`, { token });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ moduloId: string }> };
  assert.equal(body.items.length, 1);
  assert.equal(body.items[0].moduloId, MODULO_ID);
});

test("POST /api/aulas/:id/modulos idempotente — segundo POST idéntico devuelve 200", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const first = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(first.status, 201);
  const second = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(second.status, 200);
  assert.equal((second.body as { alreadyAssigned: boolean }).alreadyAssigned, true);
  // Sigue habiendo una sola fila
  assert.equal(prisma.claseModulo.rows.length, 1);
});

test("POST /api/aulas/:id/modulos — alumno del aula → 403", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(res.status, 403);
  assert.equal(prisma.claseModulo.rows.length, 0);
});

test("POST /api/aulas/:id/modulos — docente de otra escuela → 403", async () => {
  const token = tokenFor({ id: OTRO_DOCENTE_ID, role: "TEACHER", schoolId: "otra-escuela" });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(res.status, 403);
});

test("POST /api/aulas/:id/modulos — aula inexistente → 404", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/no-existe/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(res.status, 404);
});

test("POST /api/aulas/:id/modulos — modulo inexistente → 404", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: "no-existe" },
  });
  assert.equal(res.status, 404);
});

test("DELETE /api/aulas/:id/modulos/:moduloId — docente saca el vínculo (200) sin tocar el módulo", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  // Asignar primero
  await jsonRequest(baseUrl, "POST", `/api/aulas/${AULA_ID}/modulos`, {
    token,
    body: { moduloId: MODULO_ID },
  });
  assert.equal(prisma.claseModulo.rows.length, 1);

  const del = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA_ID}/modulos/${MODULO_ID}`, { token });
  assert.equal(del.status, 200);
  assert.equal(prisma.claseModulo.rows.length, 0);
  // El módulo sigue existiendo.
  assert.equal(prisma.modulo.rows.length, 1);
  assert.equal(prisma.modulo.rows[0].id, MODULO_ID);
});

test("DELETE /api/aulas/:id/modulos/:moduloId — asignación inexistente → 404", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA_ID}/modulos/${MODULO_ID}`, { token });
  assert.equal(res.status, 404);
});

test("DELETE /api/aulas/:id/modulos/:moduloId — alumno → 403", async () => {
  const token = tokenFor({ id: ALUMNO_ID, role: "STUDENT", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "DELETE", `/api/aulas/${AULA_ID}/modulos/${MODULO_ID}`, { token });
  assert.equal(res.status, 403);
});

test("POST /api/modulos con aulaId — crea la fila clase_modulos automáticamente", async () => {
  const token = tokenFor({ id: DOCENTE_ID, role: "TEACHER", schoolId: ESCUELA_ID });
  const res = await jsonRequest(baseUrl, "POST", "/api/modulos", {
    token,
    body: {
      title: "Módulo nuevo",
      description: "Desc",
      subject: "Math",
      category: "general",
      level: "1",
      durationMinutes: 10,
      visibility: "privado",
      createdBy: DOCENTE_ID,
      schoolId: ESCUELA_ID,
      aulaId: AULA_ID,
      dependencies: [],
      quizzes: [],
    },
  });
  assert.equal(res.status, 201);
  // Debe haber al menos un módulo creado.
  assert.ok(prisma.modulo.rows.length >= 1);
  // Y la fila clase_modulos con claseId=AULA_ID, moduloId=el id devuelto.
  const createdId = (res.body as { id: string }).id;
  const cm = prisma.claseModulo.rows.find(
    (r) => r.claseId === AULA_ID && r.moduloId === createdId,
  );
  assert.ok(cm, "claseModulo row should be created");
});
