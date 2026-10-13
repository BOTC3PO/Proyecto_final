/**
 * K10b — el soporte es un chat GRUPAL: todos los ADMIN, el directivo principal de la escuela, quien lo abrió y los
 * padres con vínculo aprobado. Un menor nunca queda a solas con alguien ajeno a la escuela. Los mensajes entre
 * personas siguen limitados a la misma escuela, y un alumno no le escribe a padres ajenos.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-k10-a";
const ESC_B = "esc-k10-b";
const ALU_A = "k10-alu-a";
const ALU_B = "k10-alu-b";
const ADMIN = "k10-admin";
const ADMIN2 = "k10-admin-2";
const DIRECTIVO = "k10-dir";
const PADRE = "k10-padre";
const PADRE_AJENO = "k10-padre-ajeno";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { mensajeria } = await import("../../src/routes/mensajeria");
  const srv = await startServer([mensajeria]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  prisma.hilo.rows = [];
  prisma.mensajeDirecto.rows = [];
  prisma.hiloSoporte.rows = [];
  prisma.mensajeSoporte.rows = [];
  prisma.soporteLectura.rows = [];
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_B, role: "STUDENT", schoolId: ESC_B });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  seedUser({ id: ADMIN2, role: "ADMIN", schoolId: null });
  seedUser({ id: DIRECTIVO, role: "DIRECTIVO", schoolId: ESC_A });
  seedUser({ id: PADRE, role: "PARENT", schoolId: null });
  seedUser({ id: PADRE_AJENO, role: "PARENT", schoolId: null });
  (prisma.escuela.rows.find((e) => (e as { id: string }).id === ESC_A) as { directivoPrincipalId?: string }).directivoPrincipalId = DIRECTIVO;
  prisma.progresoModuloVinculo.rows.push({ id: "v1", parentId: PADRE, childId: ALU_A, estado: "aprobado" } as never);
  for (const [id, esc] of [[ALU_A, ESC_A], [ALU_B, ESC_B]] as const) {
    prisma.membresia.rows.push({ usuarioId: id, escuelaId: esc, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never);
  }
  (prisma.usuario.rows.find((u) => (u as { id: string }).id === ADMIN) as { fullName?: string }).fullName = "Administración";
});

const enviar = (token: string, destinatarioId: string, body: string) =>
  jsonRequest(baseUrl, "POST", "/api/mensajeria/hilos", { token, body: { destinatarioId, body } });
const lista = async (token: string) =>
  ((await jsonRequest(baseUrl, "GET", "/api/mensajeria/hilos", { token })).body as { items: Array<{ id: string; otroId: string; tipo?: string; noLeidos: number }> }).items;
const T = {
  alu: tok(ALU_A, "STUDENT", ESC_A),
  aluB: tok(ALU_B, "STUDENT", ESC_B),
  admin: tok(ADMIN, "ADMIN", null),
  admin2: tok(ADMIN2, "ADMIN", null),
  dir: tok(DIRECTIVO, "DIRECTIVO", ESC_A),
  padre: tok(PADRE, "PARENT", null),
  padreAjeno: tok(PADRE_AJENO, "PARENT", null),
};

test("el alumno abre el hilo de soporte y lo ven todos los admins, el principal y su padre", async () => {
  const r = await enviar(T.alu, "soporte", "No puedo entrar a mi módulo");
  assert.equal(r.status, 201, JSON.stringify(r.body));
  const hiloId = (r.body as { hiloId: string }).hiloId;
  for (const t of [T.alu, T.admin, T.admin2, T.dir, T.padre]) {
    const items = await lista(t);
    assert.deepEqual(items.map((h) => h.id), [hiloId]);
    assert.equal(items[0].tipo, "soporte");
  }
});

test("todos los participantes leen y responden en el mismo hilo", async () => {
  const hiloId = ((await enviar(T.alu, "soporte", "ayuda")).body as { hiloId: string }).hiloId;
  for (const [t, txt] of [[T.admin, "a"], [T.admin2, "b"], [T.dir, "c"], [T.padre, "d"]] as const) {
    const r = await enviar(t, `soporte:${hiloId}`, txt);
    assert.equal(r.status, 201, JSON.stringify(r.body));
  }
  const ver = await jsonRequest(baseUrl, "GET", `/api/mensajeria/hilos/${hiloId}`, { token: T.alu });
  assert.equal((ver.body as { mensajes: unknown[] }).mensajes.length, 5);
  assert.equal(prisma.hiloSoporte.rows.length, 1, "un solo hilo por persona");
});

test("quien no participa no ve ni responde el hilo (404, sin revelar que existe)", async () => {
  const hiloId = ((await enviar(T.alu, "soporte", "privado")).body as { hiloId: string }).hiloId;
  for (const t of [T.aluB, T.padreAjeno]) {
    assert.equal((await jsonRequest(baseUrl, "GET", `/api/mensajeria/hilos/${hiloId}`, { token: t })).status, 404);
    assert.equal((await enviar(t, `soporte:${hiloId}`, "intruso")).status, 404);
    assert.deepEqual(await lista(t), []);
  }
});

test("un directivo no principal de otra escuela no participa", async () => {
  seedUser({ id: "dir-otro", role: "DIRECTIVO", schoolId: ESC_B });
  const hiloId = ((await enviar(T.alu, "soporte", "x")).body as { hiloId: string }).hiloId;
  const t = tok("dir-otro", "DIRECTIVO", ESC_B);
  assert.equal((await jsonRequest(baseUrl, "GET", `/api/mensajeria/hilos/${hiloId}`, { token: t })).status, 404);
});

test("un admin no abre hilos propios; los no leídos cuentan para los participantes", async () => {
  assert.equal((await enviar(T.admin, "soporte", "hola")).status, 400);
  await enviar(T.alu, "soporte", "uno");
  const nl = async (t: string) => ((await jsonRequest(baseUrl, "GET", "/api/mensajeria/no-leidos", { token: t })).body as { mensajes: number }).mensajes;
  assert.equal(await nl(T.admin), 1);
  assert.equal(await nl(T.padre), 1);
  assert.equal(await nl(T.alu), 0, "lo que uno escribe no cuenta");
  const hiloId = prisma.hiloSoporte.rows[0].id as string;
  await jsonRequest(baseUrl, "GET", `/api/mensajeria/hilos/${hiloId}`, { token: T.admin });
  assert.equal(await nl(T.admin), 0);
  assert.equal(await nl(T.padre), 1, "leer no lo marca leído para los demás");
});

test("el soporte es un solo destino en la búsqueda y ya no se escribe 1:1 a un admin", async () => {
  const buscar = await jsonRequest(baseUrl, "GET", "/api/mensajeria/usuarios", { token: T.alu });
  const items = (buscar.body as { items: Array<{ id: string; role: string }> }).items;
  assert.ok(items.some((i) => i.id === "soporte" && i.role === "SOPORTE"));
  assert.ok(!items.some((i) => i.id === ADMIN));
  assert.equal((await enviar(T.alu, ADMIN, "directo")).status, 403);
  assert.equal(prisma.hilo.rows.length, 0);
});

test("alumnos de escuelas distintas siguen sin escribirse; un alumno no le escribe a padres ajenos", async () => {
  assert.equal((await enviar(T.alu, ALU_B, "hola")).status, 403);
  prisma.usuario.rows.find((u) => (u as { id: string }).id === PADRE_AJENO);
  assert.equal((await enviar(T.alu, PADRE_AJENO, "hola")).status, 403);
});
