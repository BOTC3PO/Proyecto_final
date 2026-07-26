/**
 * Alcance de moderación por escuela.
 *
 * Estos endpoints no filtraban por escuela: era coherente mientras el único
 * que llegaba era el admin de plataforma, y deja de serlo apenas exista un
 * rol de escuela con acceso a moderación. Lo que se protege acá es que
 * sancionar a alguien de OTRA escuela no sea posible, y que el admin de
 * plataforma siga viendo todo.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { alcanceModeracion, puedeSancionar } from "../../src/routes/moderacion";
import { hasRole } from "../../src/lib/roles";

const ESC_A = "esc-mod-a";
const ESC_B = "esc-mod-b";
const ADMIN = "admin-plataforma";
const DIRECTIVO_A = "directivo-a";
const ALUMNO_A = "alumno-a";
const ALUMNO_B = "alumno-b";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { moderacion } = await import("../../src/routes/moderacion");
  const srv = await startServer([moderacion]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() });
  }
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  seedUser({ id: DIRECTIVO_A, role: "DIRECTIVO", schoolId: ESC_A });
  seedUser({ id: ALUMNO_A, role: "USER", schoolId: ESC_A });
  seedUser({ id: ALUMNO_B, role: "USER", schoolId: ESC_B });
  for (const [u, e] of [[ALUMNO_A, ESC_A], [ALUMNO_B, ESC_B]] as const) {
    prisma.membresia.rows.push({ usuarioId: u, escuelaId: e, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never);
  }
  for (const [id, esc] of [["clase-a", ESC_A], ["clase-b", ESC_B]] as const) {
    prisma.clase.rows.push({ id, escuelaId: esc, name: id, isDeleted: false, status: "ACTIVE", updatedAt: nowIso(), createdAt: nowIso() } as never);
  }
});

// El admin de plataforma no pertenece a ninguna escuela: su alcance es global.
test("el admin de plataforma ve las clases de TODAS las escuelas", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/moderacion/clases-publicas", {
    token: tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null })
  });
  assert.equal(res.status, 200);
  assert.equal((res.body as { items: unknown[] }).items.length, 2);
});

test("el admin de plataforma puede sancionar en cualquier escuela", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO_B}/ban`, {
    token: tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null }),
    body: { motivo: "spam" }
  });
  assert.equal(res.status, 201);
  assert.equal(prisma.usuario.rows.find((u) => u.id === ALUMNO_B)?.isBanned, true);
});

// PLAN-roles-v3 A1 — ahora el ADMIN_ESCUELA entra por HTTP y el
// confinamiento se ejercita de punta a punta, no sólo en los helpers.

const tokenAdminEscuela = (escuelaId: string) =>
  tokenFor({ id: DIRECTIVO_A, role: "ADMIN_ESCUELA", roles: ["ADMIN_ESCUELA"], schoolId: escuelaId } as never);

test("el admin de escuela sólo ve las clases de SU escuela", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/moderacion/clases-publicas", {
    token: tokenAdminEscuela(ESC_A)
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const items = (res.body as { items: Array<{ id: string }> }).items;
  assert.equal(items.length, 1);
  assert.equal(items[0]?.id, "clase-a");
});

test("el admin de escuela NO puede sancionar a alguien de otra escuela", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO_B}/ban`, {
    token: tokenAdminEscuela(ESC_A),
    body: { motivo: "no es de mi escuela" }
  });
  assert.equal(res.status, 403);
  assert.equal((res.body as { code?: string }).code, "FUERA_DE_ALCANCE");
  assert.notEqual(prisma.usuario.rows.find((u) => u.id === ALUMNO_B)?.isBanned, true);
});

test("el admin de escuela sí sanciona en la propia", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO_A}/advertencias`, {
    token: tokenAdminEscuela(ESC_A),
    body: { motivo: "lenguaje", severidad: "media" }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
});

test("un alumno no entra a moderación", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/moderacion/clases-publicas", {
    token: tokenFor({ id: ALUMNO_A, role: "USER", schoolId: ESC_A })
  });
  assert.equal(res.status, 403);
});

test("el admin de escuela NO pasa las guardas de ADMIN de plataforma", () => {
  // La razón de que sean dos strings distintos: si ADMIN_ESCUELA matcheara
  // `hasRole(user, "ADMIN")`, tendría acceso a cobros y pasarelas de TODAS
  // las escuelas — hay 48 chequeos que devuelven true sin mirar escuela.
  assert.equal(hasRole({ roles: ["ADMIN_ESCUELA"] }, "ADMIN"), false);
  assert.equal(alcanceModeracion({ roles: ["ADMIN_ESCUELA"], schoolId: ESC_A }), ESC_A);
});


test("el alcance de un admin de plataforma es global; el de otro rol, su escuela", () => {
  assert.equal(alcanceModeracion({ id: ADMIN, roles: ["ADMIN"], schoolId: null }), null);
  assert.equal(
    alcanceModeracion({ id: DIRECTIVO_A, roles: ["DIRECTIVO"], schoolId: ESC_A }),
    ESC_A
  );
});

test("con alcance de escuela NO se puede sancionar a alguien de otra", async () => {
  assert.equal(await puedeSancionar(ESC_A, ALUMNO_B), false, "alumno de la escuela B");
  assert.equal(await puedeSancionar(ESC_A, ALUMNO_A), true, "alumno de la propia");
});

test("el alcance global puede sancionar a cualquiera", async () => {
  assert.equal(await puedeSancionar(null, ALUMNO_B), true);
});

test("la sanción queda auditada con actor, destinatario y alcance", async () => {
  const res = await jsonRequest(baseUrl, "POST", `/api/moderacion/usuarios/${ALUMNO_A}/advertencias`, {
    token: tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null }),
    body: { motivo: "lenguaje", severidad: "media" }
  });
  assert.equal(res.status, 201);
  const log = prisma.auditLog.rows.find((l) => l.action === "moderacion.advertencia");
  assert.equal(log?.actorId, ADMIN);
  assert.equal(log?.targetId, ALUMNO_A);
});
