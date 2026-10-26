/**
 * FASE 5 — alta de padre por directivo con vínculo padre–hijo.
 *
 * Criterios (de `tareas_pendientes/FASE-5-padre.md`):
 *   - Alta de padre por directivo + vínculo → `ProgresoModuloVinculo`
 *     creado (aprobado) y la clase del hijo aparece para el padre.
 *   - Las validaciones de `/api/hijos` siguen vigentes vía el núcleo
 *     compartido: rol del hijo compatible, máx 2 padres, no auto-vínculo.
 *   - El vínculo es `ProgresoModuloVinculo`, NUNCA `CuentaVinculada`.
 *
 * Monta `usuarios` (alta + link) y `padres` (área informativa: aulas).
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
import { usuarios } from "../../src/routes/usuarios";
import { padres } from "../../src/routes/padres";

const ESC = "esc-fase5-dir";
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([usuarios, padres]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

const seedDirectivo = (id: string) =>
  seedUser({ id, role: "DIRECTIVO" as Role, roles: ["DIRECTIVO"], schoolId: ESC, fullName: "Dir" });
const seedPadre = (id: string, school: string | null = ESC) =>
  seedUser({ id, role: "PARENT" as Role, roles: ["PARENT"], schoolId: school, fullName: "Padre" });
const seedHijo = (id: string, school: string | null = ESC) =>
  seedUser({ id, role: "STUDENT" as Role, roles: ["USER"], schoolId: school, fullName: "Hijo" });

const dirToken = (id: string) =>
  tokenFor({ id, role: "DIRECTIVO", roles: ["DIRECTIVO"], schoolId: ESC });

test("FASE 5: directivo vincula un hijo a un padre → vínculo aprobado creado", async () => {
  const dirId = randomUUID();
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedDirectivo(dirId);
  seedPadre(padreId);
  seedHijo(hijoId);
  // El hijo tiene un username conocido para vincular por username.
  prisma.usuario.rows.find((u) => u.id === hijoId)!.username = "juan_alumno";

  const res = await jsonRequest(baseUrl, "POST", `/api/usuarios/${padreId}/hijos`, {
    token: dirToken(dirId),
    body: { childUsername: "juan_alumno" }
  });

  assert.equal(res.status, 201);
  const body = res.body as { ok: boolean; estado: string; parentId: string; childId: string };
  assert.equal(body.ok, true);
  assert.equal(body.estado, "aprobado", "el alta por directivo aprueba el vínculo");
  assert.equal(body.childId, hijoId);

  // Es un ProgresoModuloVinculo (padre↔hijo), NO un CuentaVinculada.
  assert.equal(prisma.progresoModuloVinculo.rows.length, 1);
  assert.equal(prisma.cuentaVinculada.rows.length, 0, "no se usa CuentaVinculada para padre↔hijo");
  const vinculo = prisma.progresoModuloVinculo.rows[0];
  assert.equal(vinculo.parentId, padreId);
  assert.equal(vinculo.childId, hijoId);
  assert.equal(vinculo.estado, "aprobado");
});

test("FASE 5: tras el vínculo, la clase del hijo aparece para el padre", async () => {
  const dirId = randomUUID();
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedDirectivo(dirId);
  seedPadre(padreId);
  seedHijo(hijoId);

  // El hijo está inscripto en un aula activa.
  const claseId = randomUUID();
  prisma.clase.rows.push({
    id: claseId,
    escuelaId: ESC,
    name: "6° B Matemática",
    grade: "6",
    isDeleted: false,
    status: "ACTIVE"
  } as any);
  prisma.claseMiembro.rows.push({ claseId, usuarioId: hijoId, rolEnClase: "STUDENT" } as any);

  // Directivo crea el vínculo por childId.
  const link = await jsonRequest(baseUrl, "POST", `/api/usuarios/${padreId}/hijos`, {
    token: dirToken(dirId),
    body: { childId: hijoId }
  });
  assert.equal(link.status, 201);

  // El padre ve la clase del hijo (área informativa, solo lectura).
  const padreToken = tokenFor({ id: padreId, role: "PARENT", roles: ["PARENT"], schoolId: ESC });
  const aulas = await jsonRequest(baseUrl, "GET", `/api/padres/hijos/${hijoId}/aulas`, {
    token: padreToken
  });
  assert.equal(aulas.status, 200);
  const body = aulas.body as { aulas: Array<{ id: string; nombre: string; grado: string | null }> };
  assert.equal(body.aulas.length, 1);
  assert.equal(body.aulas[0].id, claseId);
  assert.equal(body.aulas[0].nombre, "6° B Matemática");
});

test("FASE 5: no se puede vincular un hijo con rol incompatible (PARENT)", async () => {
  const dirId = randomUUID();
  const padreId = randomUUID();
  const otroPadreId = randomUUID();
  seedDirectivo(dirId);
  seedPadre(padreId);
  seedPadre(otroPadreId);

  const res = await jsonRequest(baseUrl, "POST", `/api/usuarios/${padreId}/hijos`, {
    token: dirToken(dirId),
    body: { childId: otroPadreId }
  });
  assert.equal(res.status, 400);
  assert.equal(prisma.progresoModuloVinculo.rows.length, 0);
});

test("FASE 5: no se puede auto-vincular (padre == hijo)", async () => {
  const dirId = randomUUID();
  const padreId = randomUUID();
  seedDirectivo(dirId);
  seedPadre(padreId);

  const res = await jsonRequest(baseUrl, "POST", `/api/usuarios/${padreId}/hijos`, {
    token: dirToken(dirId),
    body: { childId: padreId }
  });
  assert.equal(res.status, 400);
});

test("FASE 5: máx 2 padres por hijo (el tercer vínculo es rechazado)", async () => {
  const dirId = randomUUID();
  const p1 = randomUUID();
  const p2 = randomUUID();
  const p3 = randomUUID();
  const hijoId = randomUUID();
  seedDirectivo(dirId);
  seedPadre(p1); seedPadre(p2); seedPadre(p3);
  seedHijo(hijoId);

  const r1 = await jsonRequest(baseUrl, "POST", `/api/usuarios/${p1}/hijos`, { token: dirToken(dirId), body: { childId: hijoId } });
  const r2 = await jsonRequest(baseUrl, "POST", `/api/usuarios/${p2}/hijos`, { token: dirToken(dirId), body: { childId: hijoId } });
  const r3 = await jsonRequest(baseUrl, "POST", `/api/usuarios/${p3}/hijos`, { token: dirToken(dirId), body: { childId: hijoId } });

  assert.equal(r1.status, 201);
  assert.equal(r2.status, 201);
  assert.equal(r3.status, 409, "el tercer padre se rechaza");
  assert.equal(prisma.progresoModuloVinculo.rows.filter((v) => v.estado !== "revocado").length, 2);
});

test("FASE 5: el target debe tener rol PARENT (vincular a un USER → 400)", async () => {
  const dirId = randomUUID();
  const noPadreId = randomUUID();
  const hijoId = randomUUID();
  seedDirectivo(dirId);
  seedUser({ id: noPadreId, role: "USER" as Role, roles: ["USER"], schoolId: ESC, fullName: "No padre" });
  seedHijo(hijoId);

  const res = await jsonRequest(baseUrl, "POST", `/api/usuarios/${noPadreId}/hijos`, {
    token: dirToken(dirId),
    body: { childId: hijoId }
  });
  assert.equal(res.status, 400);
});

test("FASE 5: un directivo de OTRA escuela no puede vincular (403)", async () => {
  const dirId = randomUUID();
  const padreId = randomUUID();
  const hijoId = randomUUID();
  seedDirectivo(dirId); // escuela ESC
  seedPadre(padreId, "otra-escuela");
  seedHijo(hijoId, "otra-escuela");

  const res = await jsonRequest(baseUrl, "POST", `/api/usuarios/${padreId}/hijos`, {
    token: dirToken(dirId),
    body: { childId: hijoId }
  });
  assert.equal(res.status, 403);
});
