/**
 * FASE 5 — área informativa del padre (solo lectura).
 *
 * Criterios (de `tareas_pendientes/FASE-5-padre.md`):
 *   - El área informativa devuelve datos del hijo en modo lectura
 *     (aulas / boletín / actividades) cuando hay vínculo aprobado.
 *   - Sin vínculo (o de un hijo ajeno) → 403: el padre no puede ver
 *     ni operar la cuenta de alguien que no es su hijo.
 *   - El área es SOLO LECTURA: no expone ninguna escritura como el
 *     hijo. El padre nunca opera la cuenta del hijo.
 *
 * Monta el router `padres`.
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { randomUUID } from "node:crypto";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
  type Role
} from "./_helpers/setup";
import { padres } from "../../src/routes/padres";

const ESC = "esc-fase5-area";
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([padres]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

const seedPadre = (id: string) =>
  seedUser({ id, role: "PARENT" as Role, roles: ["PARENT"], schoolId: ESC, fullName: "Padre" });
const seedHijo = (id: string, fullName = "Hijo") =>
  seedUser({ id, role: "STUDENT" as Role, roles: ["USER"], schoolId: ESC, fullName });
const padreToken = (id: string) =>
  tokenFor({ id, role: "PARENT", roles: ["PARENT"], schoolId: ESC });

// Vínculo aprobado padre↔hijo (el hijo menor de edad aprueba automático;
// acá lo sembramos directo en estado aprobado para aislar el área).
const seedVinculoAprobado = (parentId: string, childId: string) => {
  prisma.progresoModuloVinculo.rows.push({
    id: randomUUID(),
    parentId,
    childId,
    estado: "aprobado",
    permisos: JSON.stringify({ tareas: true, mensajes: true }),
    solicitadoAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
};

test("FASE 5: con vínculo aprobado, el padre ve las aulas del hijo (lectura)", async () => {
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedPadre(padreId);
  seedHijo(hijoId);
  seedVinculoAprobado(padreId, hijoId);

  const claseId = randomUUID();
  prisma.clase.rows.push({
    id: claseId, escuelaId: ESC, name: "5° A", grade: "5", isDeleted: false, status: "ACTIVE"
  } as any);
  prisma.claseMiembro.rows.push({ claseId, usuarioId: hijoId, rolEnClase: "STUDENT" } as any);

  const res = await jsonRequest(baseUrl, "GET", `/api/padres/hijos/${hijoId}/aulas`, {
    token: padreToken(padreId)
  });
  assert.equal(res.status, 200);
  const body = res.body as { aulas: Array<{ id: string }> };
  assert.equal(body.aulas.length, 1);
  assert.equal(body.aulas[0].id, claseId);
});

test("FASE 5: el boletín del hijo es accesible con vínculo (lectura)", async () => {
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedPadre(padreId);
  seedHijo(hijoId);
  seedVinculoAprobado(padreId, hijoId);

  const res = await jsonRequest(baseUrl, "GET", `/api/padres/hijos/${hijoId}/boletin`, {
    token: padreToken(padreId)
  });
  assert.equal(res.status, 200);
  const body = res.body as { materias: unknown[]; total: number };
  assert.ok(Array.isArray(body.materias));
});

test("FASE 5: sin vínculo, el padre NO ve aulas del hijo (403)", async () => {
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedPadre(padreId);
  seedHijo(hijoId);
  // No hay vínculo.

  const res = await jsonRequest(baseUrl, "GET", `/api/padres/hijos/${hijoId}/aulas`, {
    token: padreToken(padreId)
  });
  assert.equal(res.status, 403);
});

test("FASE 5: un padre no puede ver el hijo de OTRO padre (403)", async () => {
  const padreA = randomUUID();
  const padreB = randomUUID();
  const hijoDeB = randomUUID();
  seedPadre(padreA);
  seedPadre(padreB);
  seedHijo(hijoDeB);
  seedVinculoAprobado(padreB, hijoDeB);

  const res = await jsonRequest(baseUrl, "GET", `/api/padres/hijos/${hijoDeB}/aulas`, {
    token: padreToken(padreA)
  });
  assert.equal(res.status, 403);
});

test("FASE 5: el área informativa es solo lectura — no hay endpoint de escritura como el hijo", async () => {
  // El único PATCH del área (`/limites`) modifica los PERMISOS del
  // vínculo del PADRE (su monitoreo), NO la cuenta del hijo. Validamos
  // que escribir "límites" no toca ninguna fila del hijo ni crea
  // progreso/intentos a su nombre.
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedPadre(padreId);
  seedHijo(hijoId);
  seedVinculoAprobado(padreId, hijoId);

  const hijoAntes = JSON.stringify(prisma.usuario.rows.find((u) => u.id === hijoId));

  const res = await jsonRequest(baseUrl, "PATCH", `/api/padres/hijos/${hijoId}/limites`, {
    token: padreToken(padreId),
    body: { permisosTareas: false, permisosMensajes: false }
  });
  assert.equal(res.status, 200);

  // La cuenta del hijo quedó intacta; el cambio vive en el vínculo.
  const hijoDespues = JSON.stringify(prisma.usuario.rows.find((u) => u.id === hijoId));
  assert.equal(hijoAntes, hijoDespues, "la cuenta del hijo no se modifica");
  assert.equal(prisma.progresoModulo.rows.filter((p) => p.usuarioId === hijoId).length, 0);
  assert.equal(prisma.quizAttempt.rows.filter((q) => (q as any).userId === hijoId).length, 0);
});
