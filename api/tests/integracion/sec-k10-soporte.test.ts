/**
 * K10 — mensajes al administrador como canal de soporte. Los mensajes entre personas siguen limitados a la
 * misma escuela; con el administrador de la plataforma se puede hablar siempre, y el hilo lo ven las dos puntas.
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
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_B, role: "STUDENT", schoolId: ESC_B });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  for (const [id, esc] of [[ALU_A, ESC_A], [ALU_B, ESC_B]] as const) {
    prisma.membresia.rows.push({ usuarioId: id, escuelaId: esc, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never);
  }
  (prisma.usuario.rows.find((u) => (u as { id: string }).id === ADMIN) as { fullName?: string }).fullName = "Administración";
});

const enviar = (token: string, destinatarioId: string, body: string) =>
  jsonRequest(baseUrl, "POST", "/api/mensajeria/hilos", { token, body: { destinatarioId, body } });
const hilos = async (token: string) => ((await jsonRequest(baseUrl, "GET", "/api/mensajeria/hilos", { token })).body as { items: Array<{ id: string; otroId: string }> }).items;

test("un alumno le escribe al administrador de soporte aunque no tengan escuela en común, y el admin le responde", async () => {
  const r = await enviar(tok(ALU_A, "STUDENT", ESC_A), ADMIN, "No puedo entrar a mi módulo");
  assert.equal(r.status, 201, JSON.stringify(r.body));
  assert.deepEqual((await hilos(tok(ALU_A, "STUDENT", ESC_A))).map((h) => h.otroId), [ADMIN]);
  const delAdmin = await hilos(tok(ADMIN, "ADMIN", null));
  assert.deepEqual(delAdmin.map((h) => h.otroId), [ALU_A], "el admin (sin escuela) ve el pedido");
  const resp = await enviar(tok(ADMIN, "ADMIN", null), ALU_A, "Ya lo revisamos");
  assert.equal(resp.status, 201, JSON.stringify(resp.body));
  assert.equal(prisma.hilo.rows.length, 1, "la respuesta usa el mismo hilo");
  assert.equal(prisma.mensajeDirecto.rows.length, 2);
});

test("los alumnos de dos escuelas distintas siguen sin poder escribirse", async () => {
  const r = await enviar(tok(ALU_A, "STUDENT", ESC_A), ALU_B, "hola");
  assert.equal(r.status, 403);
  assert.equal(prisma.hilo.rows.length, 0);
});

test("el soporte aparece en la búsqueda de personas y los no leídos cuentan", async () => {
  const buscar = await jsonRequest(baseUrl, "GET", "/api/mensajeria/usuarios", { token: tok(ALU_A, "STUDENT", ESC_A) });
  const items = (buscar.body as { items: Array<{ id: string; nombre: string; role: string }> }).items;
  assert.ok(items.some((i) => i.id === ADMIN && i.role === "ADMIN" && i.nombre.startsWith("Soporte")));
  await enviar(tok(ADMIN, "ADMIN", null), ALU_A, "Te escribimos de soporte");
  const nl = await jsonRequest(baseUrl, "GET", "/api/mensajeria/no-leidos", { token: tok(ALU_A, "STUDENT", ESC_A) });
  assert.equal((nl.body as { mensajes: number }).mensajes, 1);
});

test("el hilo de soporte no lo ve un tercero", async () => {
  const r = await enviar(tok(ALU_A, "STUDENT", ESC_A), ADMIN, "privado");
  const hiloId = (r.body as { hiloId: string }).hiloId;
  const ajeno = await jsonRequest(baseUrl, "GET", `/api/mensajeria/hilos/${hiloId}`, { token: tok(ALU_B, "STUDENT", ESC_B) });
  assert.equal(ajeno.status, 403);
  assert.deepEqual(await hilos(tok(ALU_B, "STUDENT", ESC_B)), []);
});
