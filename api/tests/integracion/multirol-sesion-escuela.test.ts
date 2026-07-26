/**
 * PLAN-multirol Fase 2 — escuela activa y roles acotados a esa escuela.
 *
 * El test central es el de la fuga: alguien que es DIRECTIVO en la escuela
 * A y alumno en la B NO puede llevarse el rol de directivo cuando está
 * parado en B. Las ~95 guardas del repo comparan
 * `hasRole(user, X) && user.schoolId === escuelaId`, así que si la sesión
 * llevara la unión de roles, esa persona podría emitir cuotas en una
 * escuela donde sólo es alumno.
 */
import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser } from "./_helpers/setup";
import { sincronizarMembresia } from "../../src/lib/memberships";
import { escuelasDisponiblesPara, resolverSesionEscuela } from "../../src/lib/sesion-escuela";

const ESCUELA_A = "esc-sesion-a";
const ESCUELA_B = "esc-sesion-b";

const nowIso = () => new Date().toISOString();
const usuario = (id: string) => prisma.usuario.rows.find((u) => u.id === id) as never;

beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({ estadoVerificacion: "verificada", id: ESCUELA_A, name: "Escuela A", isDeleted: false, createdAt: nowIso() });
  prisma.escuela.rows.push({ estadoVerificacion: "verificada", id: ESCUELA_B, name: "Escuela B", isDeleted: false, createdAt: nowIso() });
});

const seedJuan = async () => {
  seedUser({ id: "juan", role: "DIRECTIVO", schoolId: ESCUELA_A });
  await sincronizarMembresia({
    usuarioId: "juan",
    escuelaId: ESCUELA_A,
    rolUsuario: "DIRECTIVO",
    fechaAlta: "2024-01-01T00:00:00.000Z"
  });
  await sincronizarMembresia({
    usuarioId: "juan",
    escuelaId: ESCUELA_B,
    rolUsuario: "USER",
    fechaAlta: "2026-01-01T00:00:00.000Z"
  });
};

test("parado en su escuela, la sesión trae el rol de esa escuela", async () => {
  await seedJuan();
  const sesion = await resolverSesionEscuela(usuario("juan"), ESCUELA_A);
  assert.equal(sesion.escuelaId, ESCUELA_A);
  assert.equal(sesion.rolPrincipal, "DIRECTIVO");
  assert.deepEqual(sesion.roles, ["DIRECTIVO"]);
});

test("el rol de directivo NO viaja a la escuela donde sólo es alumno", async () => {
  await seedJuan();
  const sesion = await resolverSesionEscuela(usuario("juan"), ESCUELA_B);
  assert.equal(sesion.escuelaId, ESCUELA_B);
  assert.equal(sesion.rolPrincipal, "USER");
  assert.deepEqual(sesion.roles, ["USER"], "sin DIRECTIVO: si no, podría cobrar en la escuela B");
});

test("pedir una escuela donde no tiene membresía no la concede", async () => {
  await seedJuan();
  const sesion = await resolverSesionEscuela(usuario("juan"), "esc-ajena");
  assert.notEqual(sesion.escuelaId, "esc-ajena");
  assert.equal(sesion.escuelaId, ESCUELA_A, "cae a la suya, no a la pedida");
});

test("ADMIN conserva su rol aunque no sea miembro de ninguna escuela", async () => {
  seedUser({ id: "root", role: "ADMIN", schoolId: null });
  const sesion = await resolverSesionEscuela(usuario("root"));
  assert.deepEqual(sesion.roles, ["ADMIN"]);
  assert.equal(sesion.escuelaId, null);
});

test("un ADMIN que además es profesor de una escuela conserva ADMIN al pararse ahí", async () => {
  seedUser({ id: "jefe", role: "ADMIN", roles: ["ADMIN", "TEACHER"], schoolId: ESCUELA_A });
  await sincronizarMembresia({ usuarioId: "jefe", escuelaId: ESCUELA_A, rolUsuario: "TEACHER" });

  const sesion = await resolverSesionEscuela(usuario("jefe"), ESCUELA_A);
  assert.ok(sesion.roles.includes("TEACHER"));
  assert.ok(sesion.roles.includes("ADMIN"), "ADMIN no es un rol de escuela, no se pierde");
});

test("dos roles en la misma escuela: principal el más antiguo, ambos disponibles", async () => {
  seedUser({ id: "ana", role: "TEACHER", schoolId: ESCUELA_A });
  await sincronizarMembresia({
    usuarioId: "ana",
    escuelaId: ESCUELA_A,
    rolUsuario: "TEACHER",
    fechaAlta: "2024-01-01T00:00:00.000Z"
  });
  await sincronizarMembresia({
    usuarioId: "ana",
    escuelaId: ESCUELA_A,
    rolUsuario: "PARENT",
    fechaAlta: "2026-01-01T00:00:00.000Z"
  });

  const sesion = await resolverSesionEscuela(usuario("ana"), ESCUELA_A);
  assert.equal(sesion.rolPrincipal, "TEACHER");
  assert.deepEqual(sesion.roles, ["TEACHER", "PARENT"]);
});

test("sin membresías, la sesión cae a los roles propios (admins, guests, filas viejas)", async () => {
  seedUser({ id: "invitado", role: "GUEST", schoolId: null });
  const sesion = await resolverSesionEscuela(usuario("invitado"));
  assert.deepEqual(sesion.roles, ["GUEST"]);
});

test("escuelasDisponiblesPara agrupa los roles por escuela", async () => {
  await seedJuan();
  const items = await escuelasDisponiblesPara("juan");
  assert.equal(items.length, 2);
  assert.deepEqual(items.find((i) => i.escuelaId === ESCUELA_A)?.roles, ["DIRECTIVO"]);
  assert.deepEqual(items.find((i) => i.escuelaId === ESCUELA_B)?.roles, ["USER"]);
  assert.equal(items.find((i) => i.escuelaId === ESCUELA_A)?.nombre, "Escuela A");
});

test("un rol revocado desaparece de la sesión", async () => {
  seedUser({ id: "expro", role: "TEACHER", schoolId: ESCUELA_A });
  await sincronizarMembresia({ usuarioId: "expro", escuelaId: ESCUELA_A, rolUsuario: "TEACHER" });
  const fila = prisma.membresia.rows.find((m) => m.usuarioId === "expro");
  if (fila) fila.estado = "revocada";

  const sesion = await resolverSesionEscuela(usuario("expro"), ESCUELA_A);
  assert.ok(!sesion.roles.includes("TEACHER") || sesion.roles.length === 1);
  assert.equal(await escuelasDisponiblesPara("expro").then((i) => i.length), 0);
});

// ── Elección de rol dentro de una escuela (PLAN-multirol Fase 3) ──
// Es el reemplazo funcional de la cuenta espejo: en vez de una segunda
// cuenta para "vivir la plataforma como alumno", la misma persona tiene
// dos membresías y elige con cuál actúa.

test("se puede actuar con el rol NO principal si se tiene activo en esa escuela", async () => {
  seedUser({ id: "ana", role: "TEACHER", schoolId: ESCUELA_A });
  await sincronizarMembresia({
    usuarioId: "ana", escuelaId: ESCUELA_A, rolUsuario: "TEACHER",
    fechaAlta: "2024-01-01T00:00:00.000Z"
  });
  await sincronizarMembresia({
    usuarioId: "ana", escuelaId: ESCUELA_A, rolUsuario: "USER",
    fechaAlta: "2026-01-01T00:00:00.000Z"
  });

  const comoAlumna = await resolverSesionEscuela(usuario("ana"), ESCUELA_A, "USER");
  assert.equal(comoAlumna.rolPrincipal, "USER", "actúa como alumna aunque su rol más antiguo sea docente");

  const porDefecto = await resolverSesionEscuela(usuario("ana"), ESCUELA_A);
  assert.equal(porDefecto.rolPrincipal, "TEACHER", "sin pedir nada, sigue mandando el más antiguo");
});

test("pedir un rol que no se tiene NO lo concede", async () => {
  seedUser({ id: "leo", role: "USER", schoolId: ESCUELA_A });
  await sincronizarMembresia({ usuarioId: "leo", escuelaId: ESCUELA_A, rolUsuario: "USER" });

  const sesion = await resolverSesionEscuela(usuario("leo"), ESCUELA_A, "DIRECTIVO");
  assert.equal(sesion.rolPrincipal, "USER", "cae al que sí tiene");
  assert.ok(!sesion.roles.includes("DIRECTIVO"));
});

test("un rol revocado no se puede volver a pedir", async () => {
  seedUser({ id: "ex", role: "TEACHER", schoolId: ESCUELA_A });
  await sincronizarMembresia({ usuarioId: "ex", escuelaId: ESCUELA_A, rolUsuario: "TEACHER" });
  await sincronizarMembresia({ usuarioId: "ex", escuelaId: ESCUELA_A, rolUsuario: "USER" });
  const fila = prisma.membresia.rows.find((m) => m.usuarioId === "ex" && m.rol === "TEACHER");
  if (fila) fila.estado = "revocada";

  const sesion = await resolverSesionEscuela(usuario("ex"), ESCUELA_A, "TEACHER");
  assert.equal(sesion.rolPrincipal, "USER");
});
