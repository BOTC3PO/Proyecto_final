/**
 * L2 (2026-10-28) — tareas del aula y entregas.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const ESC = "esc-t";
const AULA = "aula-t";

before(async () => {
  const { tareasRouter } = await import("../../src/routes/tareas");
  const server = await startServer([tareasRouter]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => {
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
  seedUser({ id: "doc", role: "TEACHER", schoolId: ESC, fullName: "Docente" });
  seedUser({ id: "otro-doc", role: "TEACHER", schoolId: ESC });
  seedUser({ id: "alu1", role: "USER", schoolId: ESC, fullName: "Ana" });
  seedUser({ id: "alu2", role: "USER", schoolId: ESC, fullName: "Beto" });
  seedUser({ id: "ajeno", role: "USER", schoolId: ESC });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC, name: "3.º A", isDeleted: false, status: "ACTIVE", teacherId: "doc" } as never);
  for (const u of ["alu1", "alu2"]) prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: u, rolEnClase: "STUDENT", esPrueba: false } as never);
});

const tk = (id: string, role = "USER") => tokenFor({ id, role: role as never, schoolId: ESC });
const crear = (extra: Record<string, unknown> = {}, token = tk("doc", "TEACHER")) =>
  jsonRequest(baseUrl, "POST", `/api/aulas/${AULA}/tareas`, {
    token,
    body: { titulo: "Resumen del capítulo 3", consigna: "Escribí un resumen de una carilla.", puntajeMax: 10, ...extra }
  });

test("el docente del aula crea una tarea; otro docente no", async () => {
  assert.equal((await crear()).status, 201);
  assert.equal((await crear({}, tk("otro-doc", "TEACHER"))).status, 403);
});

test("el alumno ve la tarea pendiente, la entrega, y deja de figurar como pendiente", async () => {
  const id = ((await crear()).body as { id: string }).id;
  const pend = await jsonRequest(baseUrl, "GET", "/api/tareas", { token: tk("alu1") });
  assert.deepEqual((pend.body as Array<{ id: string; curso: string }>).map((t) => [t.id, t.curso]), [[id, "3.º A"]]);

  const ent = await jsonRequest(baseUrl, "POST", `/api/tareas/${id}/entregas`, { token: tk("alu1"), body: { texto: "Mi resumen" } });
  assert.equal(ent.status, 201, JSON.stringify(ent.body));
  assert.equal((ent.body as { tarde: boolean }).tarde, false);
  const otra = await jsonRequest(baseUrl, "POST", `/api/tareas/${id}/entregas`, { token: tk("alu1"), body: { texto: "Versión 2" } });
  assert.equal(otra.status, 200, "puede volver a entregar mientras no esté corregida");
  assert.equal(prisma.entregaTarea.rows.length, 1);

  const despues = await jsonRequest(baseUrl, "GET", "/api/tareas", { token: tk("alu1") });
  assert.deepEqual(despues.body, []);
});

test("quien no es alumno del aula no ve ni entrega", async () => {
  const id = ((await crear()).body as { id: string }).id;
  assert.equal((await jsonRequest(baseUrl, "GET", `/api/tareas/${id}`, { token: tk("ajeno") })).status, 403);
  assert.equal(
    (await jsonRequest(baseUrl, "POST", `/api/tareas/${id}/entregas`, { token: tk("ajeno"), body: { texto: "x" } })).status,
    403
  );
});

test("una entrega después del vencimiento queda marcada tarde; una tarea cerrada no recibe entregas", async () => {
  const vencida = ((await crear({ vence: new Date(Date.now() - 60_000).toISOString() })).body as { id: string }).id;
  const ent = await jsonRequest(baseUrl, "POST", `/api/tareas/${vencida}/entregas`, { token: tk("alu1"), body: { texto: "Tarde" } });
  assert.equal((ent.body as { tarde: boolean }).tarde, true);

  const cerrada = ((await crear()).body as { id: string }).id;
  await jsonRequest(baseUrl, "PATCH", `/api/tareas/${cerrada}`, { token: tk("doc", "TEACHER"), body: { estado: "cerrada" } });
  const r = await jsonRequest(baseUrl, "POST", `/api/tareas/${cerrada}/entregas`, { token: tk("alu1"), body: { texto: "x" } });
  assert.equal(r.status, 409);
});

test("el docente ve quién entregó y quién no, y corrige con nota y devolución", async () => {
  const id = ((await crear()).body as { id: string }).id;
  await jsonRequest(baseUrl, "POST", `/api/tareas/${id}/entregas`, { token: tk("alu1"), body: { texto: "Mi resumen" } });
  const lista = await jsonRequest(baseUrl, "GET", `/api/tareas/${id}/entregas`, { token: tk("doc", "TEACHER") });
  const filas = (lista.body as { entregas: Array<{ alumnoNombre: string; entrega: { id: string } | null }> }).entregas;
  assert.deepEqual(filas.map((f) => [f.alumnoNombre, Boolean(f.entrega)]), [["Ana", true], ["Beto", false]]);

  const entregaId = filas[0].entrega!.id;
  const excedida = await jsonRequest(baseUrl, "PATCH", `/api/entregas/${entregaId}`, { token: tk("doc", "TEACHER"), body: { nota: 12 } });
  assert.equal(excedida.status, 422);
  const ok = await jsonRequest(baseUrl, "PATCH", `/api/entregas/${entregaId}`, {
    token: tk("doc", "TEACHER"),
    body: { nota: 8, devolucion: "Buen trabajo" }
  });
  assert.equal(ok.status, 200);
  const reintento = await jsonRequest(baseUrl, "POST", `/api/tareas/${id}/entregas`, { token: tk("alu1"), body: { texto: "otra" } });
  assert.equal(reintento.status, 409, "una entrega corregida no se reemplaza");
  const vista = await jsonRequest(baseUrl, "GET", `/api/tareas/${id}`, { token: tk("alu1") });
  assert.equal((vista.body as { miEntrega: { nota: number; devolucion: string } }).miEntrega.devolucion, "Buen trabajo");
});
