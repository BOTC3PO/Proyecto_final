/**
 * FIX-MENSAJERIA-ESCUELA-EFECTIVA — `usuarios.escuela_id` (y el claim
 * `schoolId` del JWT que sale de esa columna) sólo lo puebla el alta
 * de TEACHER/DIRECTIVO/ADMIN. Un USER (alumno) o PARENT lo tienen
 * SIEMPRE null, aunque estén inscriptos en un aula real vía
 * `membresias` (la fuente canónica, mismo criterio que
 * `provisionar-espejo.ts`). Antes de este fix, `mensajeria.ts` leía
 * el claim crudo en GET /hilos, /usuarios, /no-leidos, /avisos y en
 * `mismaEscuela()` (usada por POST /hilos) — un alumno o padre nunca
 * encontraba a nadie para escribirle ni podía enviar el primer
 * mensaje, pese a compartir escuela con su docente.
 *
 * Cubre:
 *  1. USER sin escuelaId propio, con membresía activa → GET /usuarios
 *     encuentra al docente de su escuela.
 *  2. Mismo USER → POST /hilos al docente da 201 (antes 403).
 *  3. PARENT sin escuelaId propio, sin membresía propia, con vínculo
 *     aprobado a un hijo con membresía activa → GET /usuarios también
 *     encuentra al docente (resuelve vía el hijo).
 *  4. Candado: un USER sin membresía y sin vínculo sigue sin ver a
 *     nadie (no se relaja la policy de más).
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
  type Role,
} from "./_helpers/setup";
import { mensajeria } from "../../src/routes/mensajeria";

const ESC = "esc-mensajeria-efectiva";
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([mensajeria]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

const seedMembresia = (usuarioId: string, escuelaId: string, rol: string) => {
  prisma.membresia.rows.push({
    usuarioId,
    escuelaId,
    rol,
    estado: "activa",
    fechaAlta: new Date().toISOString(),
  });
};

const seedVinculoAprobado = (parentId: string, childId: string) => {
  prisma.progresoModuloVinculo.rows.push({
    id: randomUUID(),
    parentId,
    childId,
    estado: "aprobado",
    permisos: JSON.stringify({ tareas: true, mensajes: true }),
    solicitadoAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
};

test("USER sin escuelaId propio pero con membresía activa: GET /usuarios encuentra al docente", async () => {
  const alumnoId = randomUUID();
  const docenteId = randomUUID();
  // El alumno NO tiene escuelaId en la columna (caso real del seed).
  seedUser({ id: alumnoId, role: "STUDENT" as Role, roles: ["USER"], schoolId: null, fullName: "Ana Alumna" });
  seedMembresia(alumnoId, ESC, "alumno");
  seedUser({ id: docenteId, role: "TEACHER" as Role, schoolId: ESC, fullName: "Prof. Garcia" });

  const token = tokenFor({ id: alumnoId, role: "STUDENT", roles: ["USER"], schoolId: null });
  const res = await jsonRequest(baseUrl, "GET", "/api/mensajeria/usuarios?q=Garcia", { token });

  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string }> }).items;
  assert.ok(items.some((u) => u.id === docenteId), `esperaba encontrar al docente, recibido ${JSON.stringify(items)}`);
});

test("USER sin escuelaId propio pero con membresía activa: POST /hilos al docente da 201", async () => {
  const alumnoId = randomUUID();
  const docenteId = randomUUID();
  seedUser({ id: alumnoId, role: "STUDENT" as Role, roles: ["USER"], schoolId: null, fullName: "Ana Alumna" });
  seedMembresia(alumnoId, ESC, "alumno");
  seedUser({ id: docenteId, role: "TEACHER" as Role, schoolId: ESC, fullName: "Prof. Garcia" });

  const token = tokenFor({ id: alumnoId, role: "STUDENT", roles: ["USER"], schoolId: null });
  const res = await jsonRequest(baseUrl, "POST", "/api/mensajeria/hilos", {
    token,
    body: { destinatarioId: docenteId, body: "Hola profe" },
  });

  assert.equal(res.status, 201, `esperado 201, recibido ${res.status} (${JSON.stringify(res.body)})`);
});

test("PARENT sin membresía propia, con vínculo aprobado a un hijo con membresía: GET /usuarios encuentra al docente", async () => {
  const padreId = randomUUID();
  const hijoId = randomUUID();
  const docenteId = randomUUID();
  seedUser({ id: padreId, role: "PARENT" as Role, roles: ["PARENT"], schoolId: null, fullName: "Roberto Padre" });
  seedUser({ id: hijoId, role: "STUDENT" as Role, roles: ["USER"], schoolId: null, fullName: "Hijo" });
  seedMembresia(hijoId, ESC, "alumno");
  seedVinculoAprobado(padreId, hijoId);
  seedUser({ id: docenteId, role: "TEACHER" as Role, schoolId: ESC, fullName: "Prof. Garcia" });

  const token = tokenFor({ id: padreId, role: "PARENT", roles: ["PARENT"], schoolId: null });
  const res = await jsonRequest(baseUrl, "GET", "/api/mensajeria/usuarios?q=Garcia", { token });

  assert.equal(res.status, 200);
  const items = (res.body as { items: Array<{ id: string }> }).items;
  assert.ok(items.some((u) => u.id === docenteId), `esperaba encontrar al docente, recibido ${JSON.stringify(items)}`);
});

test("candado: USER sin membresía y sin vínculo sigue sin encontrar a nadie", async () => {
  const alumnoId = randomUUID();
  const docenteId = randomUUID();
  seedUser({ id: alumnoId, role: "STUDENT" as Role, roles: ["USER"], schoolId: null, fullName: "Ana Sin Escuela" });
  seedUser({ id: docenteId, role: "TEACHER" as Role, schoolId: ESC, fullName: "Prof. Garcia" });

  const token = tokenFor({ id: alumnoId, role: "STUDENT", roles: ["USER"], schoolId: null });
  const res = await jsonRequest(baseUrl, "GET", "/api/mensajeria/usuarios?q=Garcia", { token });

  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { items: [] });
});
