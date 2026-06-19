/**
 * FASE 6 — autoservicio alumno → cuenta de padre.
 *
 * Criterios (de `tareas_pendientes/FASE-6-autoservicio-desde-alumno.md`):
 *   - Alumno 18+ crea su cuenta de padre vinculada.
 *   - Alumno menor → rechazo (403).
 *   - Idempotencia: una segunda llamada no duplica.
 *   - El switch alumno→padre aterriza en /padre (vía
 *     `landingForRoles` del back).
 *   - `solicitar-rol` sigue funcionando igual para
 *     TEACHER/DIRECTIVO/ADMIN (no regresó nada).
 *   - El padre creado es una cuenta real (`role: "PARENT"`,
 *     `passwordHash: null`, `tipoCuenta: null`).
 *   - El par queda en `CuentaVinculada` y `resolveCuentaVinculada`
 *     devuelve `tipoDestino: "PADRE"` desde el lado del alumno.
 *
 * Monta un server HTTP con las rutas reales de `usuarios` (que es
 * donde vive el endpoint nuevo) y pega a
 * `POST /api/alumnos/crear-cuenta-padre`. El switch se valida
 * contra el router de `auth` (que es donde vive
 * `POST /api/auth/cambiar-cuenta`).
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
import { auth } from "../../src/routes/auth";
import { roles } from "../../src/routes/roles";

const ESC = "esc-fase6-test";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  // Cargamos los routers DESPUÉS de que el setup haya instalado el
  // stub de prisma.
  const srv = await startServer([auth, usuarios, roles]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

const seedAlumno = (id: string, opts: { birthdate?: string | null; schoolId?: string | null } = {}) =>
  seedUser({
    id,
    role: "USER" as Role,
    roles: ["USER"],
    schoolId: opts.schoolId ?? ESC,
    fullName: "Alumno Adulto",
    // Por default el seedUser no setea birthdate; lo hacemos explícito
    // en cada test que lo necesite.
  });

const setBirthdate = (id: string, birthdate: string | null) => {
  const row = prisma.usuario.rows.find((u) => u.id === id);
  if (!row) throw new Error("alumno no encontrado en stub");
  (row as Record<string, unknown>).birthdate = birthdate;
};

// ─── 1. Happy path: alumno 18+ crea su cuenta de padre ──────────────────

test("FASE 6: alumno 18+ crea su cuenta de padre (autoservicio) y queda vinculado", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  // 25 años
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 25 * 24 * 60 * 60 * 1000).toISOString());
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });

  assert.equal(res.status, 201);
  const body = res.body as {
    ok: boolean; created: boolean;
    padre: { id: string; username: string; fullName: string };
    cuentaVinculada: { destinoUsuarioId: string; tipoDestino: string } | null;
  };
  assert.equal(body.ok, true);
  assert.equal(body.created, true);
  assert.equal(body.padre.username.startsWith("padre-"), true);

  // El padre es PARENT puro, con marcador null (cuenta real).
  const padre = prisma.usuario.rows.find((u) => u.id === body.padre.id);
  assert.ok(padre);
  assert.deepEqual(padre!.roles, ["PARENT"]);
  assert.equal(padre!.role, "PARENT");
  assert.equal(padre!.tipoCuenta, null, "padre real, no espejo");
  assert.equal(padre!.passwordHash, null, "padre sin password");

  // El switch queda habilitado: hay un vínculo resoluble y apunta
  // al padre con tipoDestino "PADRE" (FASE 6).
  assert.ok(body.cuentaVinculada);
  assert.equal(body.cuentaVinculada!.tipoDestino, "PADRE");
  assert.equal(body.cuentaVinculada!.destinoUsuarioId, body.padre.id);
  assert.equal(prisma.cuentaVinculada.rows.length, 1);
});

// ─── 2. Idempotencia ────────────────────────────────────────────────────

test("FASE 6: la creación es idempotente (segunda llamada no duplica)", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 30 * 24 * 60 * 60 * 1000).toISOString());
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const first = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });
  const second = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });

  assert.equal(first.status, 201);
  assert.equal(second.status, 200);
  const b1 = first.body as { padre: { id: string } };
  const b2 = second.body as { created: boolean; padre: { id: string } };
  assert.equal(b2.created, false);
  assert.equal(b1.padre.id, b2.padre.id, "mismo padre");

  // Un solo padre y un solo vínculo en toda la base.
  assert.equal(prisma.usuario.rows.filter((u) => u.role === "PARENT" && u.tipoCuenta === null).length, 1);
  assert.equal(prisma.cuentaVinculada.rows.length, 1);
});

// ─── 3. Alumno menor → rechazo ─────────────────────────────────────────

test("FASE 6: alumno menor de 18 → 403 ALUMNO_IS_MINOR", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 15 * 24 * 60 * 60 * 1000).toISOString());
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });

  assert.equal(res.status, 403);
  const body = res.body as { code: string };
  assert.equal(body.code, "ALUMNO_IS_MINOR");
  assert.equal(
    prisma.usuario.rows.filter((u) => u.role === "PARENT" && u.tipoCuenta === null).length,
    0
  );
});

test("FASE 6: alumno sin birthdate → 403 (no se puede demostrar mayoría de edad)", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  // No seteamos birthdate.
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });

  assert.equal(res.status, 403);
  const body = res.body as { code: string };
  assert.equal(body.code, "ALUMNO_IS_MINOR");
});

// ─── 4. Sin token → 401 ────────────────────────────────────────────────

test("FASE 6: sin token → 401", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { body: {} });
  assert.equal(res.status, 401);
});

// ─── 5. Staff/Padre no pueden usar esta vía ────────────────────────────

test("FASE 6: un TEACHER no puede crear padre por esta vía (403 ALUMNO_NOT_USER)", async () => {
  const teacherId = randomUUID();
  seedUser({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC, fullName: "Prof" });
  const token = tokenFor({ id: teacherId, role: "TEACHER", roles: ["TEACHER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });

  assert.equal(res.status, 403);
  const body = res.body as { code: string };
  assert.equal(body.code, "ALUMNO_NOT_USER");
});

test("FASE 6: un PARENT no puede usar esta vía (403 ALUMNO_NOT_USER)", async () => {
  const parentId = randomUUID();
  seedUser({ id: parentId, role: "PARENT", roles: ["PARENT"], schoolId: ESC, fullName: "Padre" });
  const token = tokenFor({ id: parentId, role: "PARENT", roles: ["PARENT"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", { token, body: {} });

  assert.equal(res.status, 403);
  const body = res.body as { code: string };
  assert.equal(body.code, "ALUMNO_NOT_USER");
});

// ─── 6. Switch alumno→padre aterriza en /padre ─────────────────────────

test("FASE 6: el switch alumno→padre emite token del padre y landing /padre", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 25 * 24 * 60 * 60 * 1000).toISOString());
  const tokenAlumno = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  // 1. alumno crea su padre
  const create = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", {
    token: tokenAlumno, body: {}
  });
  assert.equal(create.status, 201);
  const padreId = (create.body as { padre: { id: string } }).padre.id;

  // 2. alumno hace switch → debe obtener un token del padre
  const sw = await jsonRequest(baseUrl, "POST", "/api/auth/cambiar-cuenta", {
    token: tokenAlumno, body: {}
  });
  assert.equal(sw.status, 200);
  const swBody = sw.body as {
    id: string;
    role: string;
    roles: string[];
    landing: string;
    cuentaVinculada: { destinoUsuarioId: string; tipoDestino: string } | null;
  };
  assert.equal(swBody.id, padreId);
  assert.equal(swBody.role, "PARENT");
  assert.deepEqual(swBody.roles, ["PARENT"]);
  assert.equal(swBody.landing, "/padre", "FASE 6: landing del padre");
  assert.ok(swBody.cuentaVinculada);
  assert.equal(swBody.cuentaVinculada!.tipoDestino, "ALUMNO_HIJO", "desde el padre, el destino es el alumno");
  assert.equal(swBody.cuentaVinculada!.destinoUsuarioId, alumnoId);
});

// ─── 7. /me expone el cuentaVinculada correcto desde cada lado ──────────

test("FASE 6: /me desde el alumno expone cuentaVinculada.tipoDestino=PADRE", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 25 * 24 * 60 * 60 * 1000).toISOString());
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const create = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", {
    token, body: {}
  });
  const padreId = (create.body as { padre: { id: string } }).padre.id;

  const me = await jsonRequest(baseUrl, "GET", "/api/auth/me", { token });
  assert.equal(me.status, 200);
  const meBody = me.body as { cuentaVinculada: { destinoUsuarioId: string; tipoDestino: string } | null };
  assert.ok(meBody.cuentaVinculada);
  assert.equal(meBody.cuentaVinculada!.tipoDestino, "PADRE");
  assert.equal(meBody.cuentaVinculada!.destinoUsuarioId, padreId);
});

test("FASE 6: /me desde el padre expone cuentaVinculada.tipoDestino=ALUMNO_HIJO", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 25 * 24 * 60 * 60 * 1000).toISOString());
  const tokenAlumno = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const create = await jsonRequest(baseUrl, "POST", "/api/alumnos/crear-cuenta-padre", {
    token: tokenAlumno, body: {}
  });
  const padreId = (create.body as { padre: { id: string } }).padre.id;
  const tokenPadre = tokenFor({ id: padreId, role: "PARENT", roles: ["PARENT"], schoolId: ESC });

  const me = await jsonRequest(baseUrl, "GET", "/api/auth/me", { token: tokenPadre });
  assert.equal(me.status, 200);
  const meBody = me.body as { cuentaVinculada: { destinoUsuarioId: string; tipoDestino: string } | null };
  assert.ok(meBody.cuentaVinculada);
  assert.equal(meBody.cuentaVinculada!.tipoDestino, "ALUMNO_HIJO");
  assert.equal(meBody.cuentaVinculada!.destinoUsuarioId, alumnoId);
});

// ─── 8. No regresión en solicitar-rol ──────────────────────────────────

test("FASE 6: solicitar-rol sigue funcionando para TEACHER (no regresó nada)", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 25 * 24 * 60 * 60 * 1000).toISOString());
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/solicitar-rol", {
    token,
    body: { target_role: "TEACHER", motivo: "quiero ser docente" }
  });

  // El handler responde 201 con la solicitud creada. Lo importante es
  // que el endpoint sigue existiendo y NO exige el flujo de Fase 6.
  assert.equal(res.status, 201);
  const body = res.body as { id: string; message: string };
  assert.ok(body.id);
  assert.equal(typeof body.message, "string");
});

test("FASE 6: solicitar-rol con un menor → 403 (sigue bloqueado por edad)", async () => {
  const alumnoId = randomUUID();
  seedAlumno(alumnoId);
  setBirthdate(alumnoId, new Date(Date.now() - 365.25 * 15 * 24 * 60 * 60 * 1000).toISOString());
  const token = tokenFor({ id: alumnoId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/solicitar-rol", {
    token,
    body: { target_role: "TEACHER" }
  });

  assert.equal(res.status, 403);
});
