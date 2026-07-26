/**
 * PLAN-roles-v3 B — identidad pública separada de la de intranet.
 *
 * Lo que se protege: que el rol que una escuela te concede adentro NO se
 * publique afuera como si fuera una credencial. "Soy profe en la escuela X"
 * no es "soy profesor" a secas — esa confusión es justamente lo que sirve
 * para hacerse pasar por alguien.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { serializeUsuario } from "../../src/lib/user-serializer";

const ADMIN = "admin-verif";
const DOCENTE = "docente-publico";

let baseUrl: string;
let close: () => Promise<void>;

const DATOS = {
  rolDeclarado: "TEACHER" as const,
  nombreCompleto: "Ana Docente",
  documento: "30123456"
};

before(async () => {
  const { verificacionPublica } = await import("../../src/routes/verificacion-publica");
  const srv = await startServer([verificacionPublica]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: null });
});

const tkDocente = () => tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: null });
const tkAdmin = () => tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });

// ── B1: el rol de intranet no se publica ─────────────────────────

test("sin verificar, el perfil público NO afirma ningún rol", () => {
  const publico = serializeUsuario(
    { _id: DOCENTE, username: "ana", role: "TEACHER", roles: ["TEACHER"], verificacionPublica: "no_solicitada" },
    { access: "public" }
  ) as Record<string, unknown>;

  assert.equal(publico.role, null, "ser profe en una escuela no te hace profesor afuera");
  assert.deepEqual(publico.roles, []);
  assert.equal(publico.verificado, false);
});

test("verificado, el perfil público muestra el rol DECLARADO y verificado", () => {
  const publico = serializeUsuario(
    {
      _id: DOCENTE,
      username: "ana",
      role: "USER",
      roles: ["USER"],
      verificacionPublica: "verificada",
      datosVerificacion: JSON.stringify(DATOS)
    },
    { access: "public" }
  ) as Record<string, unknown>;

  assert.equal(publico.role, "TEACHER", "sale del trámite verificado, no del rol de sesión");
  assert.equal(publico.verificado, true);
});

test("la vista de miembro/admin sigue viendo el rol de intranet", () => {
  const interno = serializeUsuario(
    { _id: DOCENTE, username: "ana", role: "TEACHER", roles: ["TEACHER"], escuelaId: "esc-1" },
    { access: "admin" }
  ) as Record<string, unknown>;
  assert.equal(interno.role, "TEACHER");
});

// ── B2: el trámite ───────────────────────────────────────────────

test("pedir verificación deja el perfil pendiente con los datos declarados", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/verificacion-publica", {
    token: tkDocente(),
    body: DATOS
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const fila = prisma.usuario.rows.find((u) => u.id === DOCENTE);
  assert.equal(fila?.verificacionPublica, "pendiente");
  assert.ok(fila?.datosVerificacion);
});

test("datos incompletos no crean nada", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/verificacion-publica", {
    token: tkDocente(),
    body: { rolDeclarado: "TEACHER" }
  });
  assert.equal(res.status, 400);
  // El shim in-memory no aplica el default de la columna, así que se
  // comprueba lo que importa: que NO haya quedado un trámite abierto.
  assert.notEqual(
    prisma.usuario.rows.find((u) => u.id === DOCENTE)?.verificacionPublica,
    "pendiente"
  );
});

test("el admin verifica y el estado queda consultable por el propio usuario", async () => {
  await jsonRequest(baseUrl, "POST", "/api/verificacion-publica", { token: tkDocente(), body: DATOS });

  const bandeja = await jsonRequest(baseUrl, "GET", "/api/verificacion-publica/solicitudes", { token: tkAdmin() });
  assert.equal((bandeja.body as { items: unknown[] }).items.length, 1);

  const ok = await jsonRequest(baseUrl, "POST", `/api/verificacion-publica/${DOCENTE}/resolver`, {
    token: tkAdmin(),
    body: { estado: "verificada" }
  });
  assert.equal(ok.status, 200);

  const estado = await jsonRequest(baseUrl, "GET", "/api/verificacion-publica/mi-estado", { token: tkDocente() });
  assert.equal((estado.body as { estado: string }).estado, "verificada");
});

test("rechazar exige motivo y el usuario lo puede leer", async () => {
  await jsonRequest(baseUrl, "POST", "/api/verificacion-publica", { token: tkDocente(), body: DATOS });

  const sinMotivo = await jsonRequest(baseUrl, "POST", `/api/verificacion-publica/${DOCENTE}/resolver`, {
    token: tkAdmin(),
    body: { estado: "rechazada" }
  });
  assert.equal(sinMotivo.status, 400);

  await jsonRequest(baseUrl, "POST", `/api/verificacion-publica/${DOCENTE}/resolver`, {
    token: tkAdmin(),
    body: { estado: "rechazada", motivo: "documento ilegible" }
  });
  const estado = await jsonRequest(baseUrl, "GET", "/api/verificacion-publica/mi-estado", { token: tkDocente() });
  assert.equal((estado.body as { motivo: string }).motivo, "documento ilegible");
});

test("un usuario común no ve la bandeja del admin", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/verificacion-publica/solicitudes", { token: tkDocente() });
  assert.equal(res.status, 403);
});
