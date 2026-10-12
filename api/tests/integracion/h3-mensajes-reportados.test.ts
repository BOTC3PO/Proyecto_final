/**
 * H3 / H8 — reporte de mensajes directos y topes de largo de la mensajería.
 */

process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-h3-a";
const ESC_B = "esc-h3-b";
const ALUMNA = "h3-alumna";
const DOCENTE = "h3-docente";
const OTRO = "h3-otro";
const MOD_A = "h3-mod-a";
const ADMIN = "h3-admin";
const ALUMNO_B = "h3-alumno-b";
const DOCENTE_B = "h3-docente-b";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { mensajeria } = await import("../../src/routes/mensajeria");
  const { moderacion } = await import("../../src/routes/moderacion");
  const srv = await startServer([mensajeria, moderacion]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

const alumna = () => tokenFor({ id: ALUMNA, role: "USER", schoolId: ESC_A });
const modA = () => tokenFor({ id: MOD_A, role: "ADMIN_ESCUELA", roles: ["ADMIN_ESCUELA"], schoolId: ESC_A } as never);
const admin = () => tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });

const sembrarHilo = (hiloId: string, escuelaId: string, a: string, b: string, mensajes: Array<[string, string, string]>) => {
  prisma.hilo.rows.push({ id: hiloId, escuelaId, usuarioA: a, usuarioB: b, createdAt: nowIso() } as never);
  for (const [id, senderId, body] of mensajes) {
    prisma.mensajeDirecto.rows.push({ id, hiloId, senderId, body, leido: 0, createdAt: nowIso() } as never);
  }
};

beforeEach(() => {
  resetPrisma();
  prisma.mensajeReportado.rows = [];
  prisma.hilo.rows = [];
  prisma.mensajeDirecto.rows = [];
  for (const id of [ESC_A, ESC_B]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  }
  seedUser({ id: ALUMNA, role: "USER", schoolId: ESC_A });
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: OTRO, role: "USER", schoolId: ESC_A });
  seedUser({ id: MOD_A, role: "ADMIN_ESCUELA", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  seedUser({ id: ALUMNO_B, role: "USER", schoolId: ESC_B });
  seedUser({ id: DOCENTE_B, role: "TEACHER", schoolId: ESC_B });
  sembrarHilo("hilo-a", ESC_A, DOCENTE, ALUMNA, [
    ["m-docente", DOCENTE, "texto ofensivo del docente"],
    ["m-alumna", ALUMNA, "respuesta de la alumna"],
  ]);
  sembrarHilo("hilo-b", ESC_B, DOCENTE_B, ALUMNO_B, [["m-b", DOCENTE_B, "mensaje en otra escuela"]]);
});

const reportar = (mensajeId: string, token: string, body: Record<string, unknown> = {}) =>
  jsonRequest(baseUrl, "POST", `/api/mensajeria/mensajes/${mensajeId}/reportar`, { token, body });

describe("reportar un mensaje", () => {
  test("quien recibe el mensaje lo reporta: queda en la escuela del hilo con copia del texto", async () => {
    const r = await reportar("m-docente", alumna(), { motivo: "me insulta" });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    const fila = prisma.mensajeReportado.rows[0] as Record<string, unknown>;
    assert.deepEqual(
      [fila.escuelaId, fila.reportadoPor, fila.autorId, fila.estado, fila.motivo, fila.cuerpo],
      [ESC_A, ALUMNA, DOCENTE, "pendiente", "me insulta", "texto ofensivo del docente"]
    );
  });

  test("la copia del texto se conserva aunque el mensaje original cambie o se borre", async () => {
    await reportar("m-docente", alumna());
    prisma.mensajeDirecto.rows = [];
    assert.equal((prisma.mensajeReportado.rows[0] as { cuerpo: string }).cuerpo, "texto ofensivo del docente");
  });

  test("no se reporta dos veces el mismo mensaje, ni uno propio", async () => {
    assert.equal((await reportar("m-docente", alumna())).status, 201);
    assert.equal((await reportar("m-docente", alumna())).status, 409);
    assert.equal((await reportar("m-alumna", alumna())).status, 400);
    assert.equal(prisma.mensajeReportado.rows.length, 1);
  });

  test("un tercero ajeno al hilo, o un mensaje inexistente, dan 404 (no revela que existe)", async () => {
    assert.equal((await reportar("m-docente", tokenFor({ id: OTRO, role: "USER", schoolId: ESC_A }))).status, 404);
    assert.equal((await reportar("no-existe", alumna())).status, 404);
    assert.equal((await reportar("m-docente", "")).status, 401);
  });

  test("el motivo tiene tope de largo", async () => {
    assert.equal((await reportar("m-docente", alumna(), { motivo: "x".repeat(501) })).status, 413);
  });
});

describe("moderación de reportes", () => {
  beforeEach(async () => {
    await reportar("m-docente", alumna());
    await reportar("m-b", tokenFor({ id: ALUMNO_B, role: "USER", schoolId: ESC_B }));
  });

  test("el administrador de una escuela ve solo los reportes de la suya; el admin de plataforma, todos", async () => {
    const a = await jsonRequest(baseUrl, "GET", "/api/moderacion/mensajes-reportados", { token: modA() });
    assert.equal(a.status, 200);
    assert.deepEqual((a.body as { items: Array<{ escuelaId: string }> }).items.map((i) => i.escuelaId), [ESC_A]);
    const todos = await jsonRequest(baseUrl, "GET", "/api/moderacion/mensajes-reportados", { token: admin() });
    assert.equal((todos.body as { items: unknown[] }).items.length, 2);
  });

  test("se puede filtrar por estado", async () => {
    const id = (prisma.mensajeReportado.rows[0] as { id: string }).id;
    await jsonRequest(baseUrl, "POST", `/api/moderacion/mensajes-reportados/${id}/resolver`, { token: admin(), body: { estado: "descartado" } });
    const pend = await jsonRequest(baseUrl, "GET", "/api/moderacion/mensajes-reportados?estado=pendiente", { token: admin() });
    assert.equal((pend.body as { items: unknown[] }).items.length, 1);
  });

  test("resolver: queda registrado quién y cuándo; no se resuelve dos veces", async () => {
    const id = (prisma.mensajeReportado.rows[0] as { id: string }).id;
    const r = await jsonRequest(baseUrl, "POST", `/api/moderacion/mensajes-reportados/${id}/resolver`, {
      token: modA(), body: { estado: "revisado", resolucion: "se habló con el docente" },
    });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const fila = prisma.mensajeReportado.rows.find((x) => (x as { id: string }).id === id) as Record<string, unknown>;
    assert.deepEqual([fila.estado, fila.resueltoPor, fila.resolucion], ["revisado", MOD_A, "se habló con el docente"]);
    assert.ok(fila.resueltoAt);
    const otra = await jsonRequest(baseUrl, "POST", `/api/moderacion/mensajes-reportados/${id}/resolver`, { token: modA(), body: { estado: "descartado" } });
    assert.equal(otra.status, 409);
  });

  test("un administrador de escuela no resuelve reportes de otra escuela; un alumno no modera", async () => {
    const deB = (prisma.mensajeReportado.rows.find((x) => (x as { escuelaId: string }).escuelaId === ESC_B) as { id: string }).id;
    const r = await jsonRequest(baseUrl, "POST", `/api/moderacion/mensajes-reportados/${deB}/resolver`, { token: modA(), body: { estado: "revisado" } });
    assert.equal(r.status, 404);
    const alumno = await jsonRequest(baseUrl, "GET", "/api/moderacion/mensajes-reportados", { token: alumna() });
    assert.equal(alumno.status, 403);
  });

  test("estado inválido → 400", async () => {
    const id = (prisma.mensajeReportado.rows[0] as { id: string }).id;
    const r = await jsonRequest(baseUrl, "POST", `/api/moderacion/mensajes-reportados/${id}/resolver`, { token: admin(), body: { estado: "borrado" } });
    assert.equal(r.status, 400);
  });
});

describe("H8 — topes de largo", () => {
  test("un aviso con título o cuerpo demasiado largo se rechaza con 413", async () => {
    const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESC_A });
    const crear = (titulo: string, cuerpo: string) =>
      jsonRequest(baseUrl, "POST", "/api/mensajeria/avisos", { token, body: { titulo, cuerpo } });
    assert.equal((await crear("t".repeat(201), "cuerpo")).status, 413);
    assert.equal((await crear("titulo", "c".repeat(5001))).status, 413);
    assert.equal((await crear("titulo", "cuerpo normal")).status, 201);
  });

  test("un mensaje directo de más de 2000 caracteres se rechaza con 413", async () => {
    prisma.membresia.rows.push(
      { usuarioId: DOCENTE, escuelaId: ESC_A, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never,
      { usuarioId: ALUMNA, escuelaId: ESC_A, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never
    );
    const token = tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESC_A });
    const enviar = (body: string) =>
      jsonRequest(baseUrl, "POST", "/api/mensajeria/hilos", { token, body: { destinatarioId: ALUMNA, body } });
    assert.equal((await enviar("x".repeat(2001))).status, 413);
    assert.equal((await enviar("hola")).status, 201);
  });
});
