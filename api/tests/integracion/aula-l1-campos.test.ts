/**
 * L1 (2026-10-28) — el aula guarda lo que se carga en el formulario y deja registrado a quien la creó.
 *
 * Antes `POST /api/aulas` guardaba solo nombre, grado y código: el aula quedaba sin creador, sin docente y
 * sin miembros, y `PUT /api/aulas/:id` descartaba descripción, categoría, grado y tipo de acceso.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const ESC = "esc-l1";
const DOCENTE = "docente-l1";

before(async () => {
  const { aulas } = await import("../../src/routes/aulas");
  const server = await startServer([aulas]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: ESC });
});

const token = () => tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESC });

const crear = (extra: Record<string, unknown> = {}) =>
  jsonRequest(baseUrl, "POST", "/api/aulas", {
    token: token(),
    body: {
      id: "aula-l1",
      name: "3.º B — Lengua",
      description: "Prácticas del lenguaje",
      category: "Lengua",
      grade: "3.º año",
      accessType: "publica",
      status: "ACTIVE",
      createdBy: DOCENTE,
      members: [
        { userId: DOCENTE, roleInClass: "TEACHER", schoolId: ESC },
        { userId: DOCENTE, roleInClass: "ADMIN", schoolId: ESC }
      ],
      ...extra
    }
  });

test("POST /api/aulas guarda descripción, categoría, grado, acceso, creador y al docente como miembro", async () => {
  const res = await crear();
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const aula = prisma.clase.rows.find((c) => c.id === "aula-l1") as Record<string, unknown>;
  assert.equal(aula.description, "Prácticas del lenguaje");
  assert.equal(aula.category, "Lengua");
  assert.equal(aula.grade, "3.º año");
  assert.equal(aula.accessType, "publica");
  assert.equal(aula.createdBy, DOCENTE);
  assert.equal(aula.teacherId, DOCENTE);
  const miembros = prisma.claseMiembro.rows.filter((m) => m.claseId === "aula-l1");
  assert.deepEqual(
    miembros.map((m) => [m.usuarioId, m.rolEnClase]),
    [[DOCENTE, "TEACHER"]]
  );
});

test("POST /api/aulas sin tipo de acceso la deja privada", async () => {
  const res = await crear({ accessType: undefined, description: "" });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const aula = prisma.clase.rows.find((c) => c.id === "aula-l1") as Record<string, unknown>;
  assert.equal(aula.accessType, "privada");
  assert.equal(aula.description, null);
});

test("PUT /api/aulas/:id guarda los campos que antes se descartaban", async () => {
  await crear();
  const res = await jsonRequest(baseUrl, "PUT", "/api/aulas/aula-l1", {
    token: token(),
    body: {
      name: "3.º B — Lengua y Literatura",
      description: "Nueva descripción",
      category: "Literatura",
      grade: "4.º año",
      accessType: "privada",
      status: "ACTIVE",
      members: [
        { userId: DOCENTE, roleInClass: "TEACHER", schoolId: ESC },
        { userId: DOCENTE, roleInClass: "ADMIN", schoolId: ESC }
      ],
      updatedAt: new Date().toISOString()
    }
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const aula = prisma.clase.rows.find((c) => c.id === "aula-l1") as Record<string, unknown>;
  assert.equal(aula.name, "3.º B — Lengua y Literatura");
  assert.equal(aula.description, "Nueva descripción");
  assert.equal(aula.category, "Literatura");
  assert.equal(aula.grade, "4.º año");
  assert.equal(aula.accessType, "privada");
});
