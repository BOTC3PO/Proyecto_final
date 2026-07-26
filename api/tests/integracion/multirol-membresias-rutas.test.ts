/**
 * PLAN-multirol Fase 1 — los caminos de ruta que ANTES no mantenían
 * `Membresia`. Cada uno de estos tests falla contra el código previo:
 *
 *  - `POST /api/usuarios` creaba el usuario sin membresía, y como
 *    `GET /api/usuarios/:id` autoriza leyéndola, ese usuario quedaba
 *    dando 403 para siempre.
 *  - `PATCH /api/admin/usuarios/:id/escuela` movía `escuelaId` y dejaba la
 *    membresía en la escuela ANTERIOR (autorización contra una escuela a
 *    la que ya no pertenece).
 *  - `PATCH /api/admin/usuarios/:id/rol` cambiaba el rol y dejaba la
 *    membresía con el rol viejo.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

// `UsuarioWriteSchema` valida `escuelaId` como ObjectId (24 hex), así que
// las escuelas de este archivo usan ids con ese formato.
const ESCUELA_A = "aaaaaaaaaaaaaaaaaaaaaaa1";
const ESCUELA_B = "aaaaaaaaaaaaaaaaaaaaaaa2";
const ADMIN = "admin-rutas";

let baseUrl: string;
let close: () => Promise<void>;

const nowIso = () => new Date().toISOString();

before(async () => {
  const { adminRouter } = await import("../../src/routes/admin");
  const { usuarios } = await import("../../src/routes/usuarios");
  const server = await startServer([usuarios, adminRouter]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  for (const id of [ESCUELA_A, ESCUELA_B]) {
    prisma.escuela.rows.push({ estadoVerificacion: "verificada", id, name: id, isDeleted: false, createdAt: nowIso() });
  }
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
});

const tokenAdmin = () => tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
const membresiasDe = (usuarioId: string) =>
  prisma.membresia.rows.filter((m) => m.usuarioId === usuarioId);

test("POST /api/usuarios deja membresía (antes nacía sin ella y comía 403)", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/usuarios", {
    token: tokenAdmin(),
    body: {
      username: "nuevo-alumno",
      email: "nuevo-alumno@test.local",
      fullName: "Nuevo Alumno",
      password: "unaClaveLarga123",
      role: "USER",
      escuelaId: ESCUELA_A
    }
  });

  assert.equal(res.status, 201, JSON.stringify(res.body));
  const creado = prisma.usuario.rows.find((u) => u.username === "nuevo-alumno");
  assert.ok(creado);
  const filas = membresiasDe(creado!.id as string);
  assert.equal(filas.length, 1);
  assert.equal(filas[0]?.escuelaId, ESCUELA_A);
  assert.equal(filas[0]?.rol, "STUDENT");
  assert.equal(filas[0]?.estado, "activa");
  assert.deepEqual(creado?.roles, ["USER"], "también pobla `roles`, que este camino no tocaba");
});

test("PATCH .../escuela mueve la membresía y revoca la de la escuela vieja", async () => {
  seedUser({ id: "mudado", role: "TEACHER", schoolId: ESCUELA_A });
  prisma.membresia.rows.push({
    usuarioId: "mudado",
    escuelaId: ESCUELA_A,
    rol: "TEACHER",
    estado: "activa",
    fechaAlta: nowIso(),
    createdAt: nowIso(),
    updatedAt: nowIso()
  });

  const res = await jsonRequest(baseUrl, "PATCH", "/api/admin/usuarios/mudado/escuela", {
    token: tokenAdmin(),
    body: { escuelaId: ESCUELA_B }
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));

  const filas = membresiasDe("mudado");
  const vieja = filas.find((m) => m.escuelaId === ESCUELA_A);
  const nueva = filas.find((m) => m.escuelaId === ESCUELA_B);
  assert.equal(vieja?.estado, "revocada", "la escuela vieja ya no autoriza");
  assert.ok(vieja?.fechaBaja);
  assert.equal(nueva?.estado, "activa");
  assert.equal(nueva?.rol, "TEACHER");
});

test("PATCH .../rol actualiza la membresía en vez de dejar el rol viejo", async () => {
  seedUser({ id: "promovido", role: "TEACHER", schoolId: ESCUELA_A });
  prisma.membresia.rows.push({
    usuarioId: "promovido",
    escuelaId: ESCUELA_A,
    rol: "TEACHER",
    estado: "activa",
    fechaAlta: nowIso(),
    createdAt: nowIso(),
    updatedAt: nowIso()
  });

  const res = await jsonRequest(baseUrl, "PATCH", "/api/admin/usuarios/promovido/rol", {
    token: tokenAdmin(),
    body: { role: "DIRECTIVO" }
  });
  assert.equal(res.status, 200, JSON.stringify(res.body));

  const filas = membresiasDe("promovido");
  assert.equal(filas.find((m) => m.rol === "TEACHER")?.estado, "revocada");
  const directivo = filas.find((m) => m.rol === "DIRECTIVO");
  assert.equal(directivo?.estado, "activa");
  assert.equal(directivo?.escuelaId, ESCUELA_A);
});
