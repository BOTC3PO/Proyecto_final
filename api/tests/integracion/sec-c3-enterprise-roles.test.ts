/**
 * C3 — la gestión institucional (/api/enterprise/*) es solo para ADMIN, DIRECTIVO y ADMIN_ESCUELA.
 * Antes pedía solo sesión: un alumno o un padre listaba a los miembros de la escuela, leía los mensajes
 * reportados y podía crear aulas.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC = "esc-c3";
const ROLES = [
  ["c3-admin", "ADMIN", null, null],
  ["c3-adminesc", "ADMIN_ESCUELA", ESC, "ADMIN_ESCUELA"],
  ["c3-directivo", "DIRECTIVO", ESC, "DIRECTIVO"],
  ["c3-docente", "TEACHER", ESC, "TEACHER"],
  ["c3-alumno", "USER", ESC, "STUDENT"],
  ["c3-padre", "PARENT", ESC, "PARENT"],
] as const;

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const token = (id: string) => {
  const r = ROLES.find(([i]) => i === id)!;
  return tokenFor({ id, role: r[1] as never, schoolId: r[2] });
};

before(async () => {
  const { enterprise } = await import("../../src/routes/enterprise");
  const srv = await startServer([enterprise]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({ id: ESC, name: ESC, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  for (const [id, role, school, mem] of ROLES) {
    seedUser({ id, role: role as never, schoolId: school });
    if (mem) prisma.membresia.rows.push({ usuarioId: id, escuelaId: ESC, rol: mem, estado: "activa", fechaAlta: nowIso() } as never);
  }
  prisma.mensajeReportado.rows = [
    { id: "rep-1", mensajeId: "m1", hiloId: "h1", escuelaId: ESC, reportadoPor: "c3-alumno", autorId: "otro", cuerpo: "texto reportado", estado: "pendiente", createdAt: nowIso() } as never,
  ];
});

const LECTURAS = ["entitlements", "miembros", "dashboard", "modulos", "aulas", "mensajes", "contratos", "billing", "reportes"];

describe("lecturas de /api/enterprise", () => {
  for (const ruta of LECTURAS) {
    test(`GET /api/enterprise/${ruta}: alumno, padre y docente reciben 403; la gestión no`, async () => {
      for (const id of ["c3-alumno", "c3-padre", "c3-docente"]) {
        const r = await jsonRequest(baseUrl, "GET", `/api/enterprise/${ruta}`, { token: token(id) });
        assert.equal(r.status, 403, `${id} no debería entrar a ${ruta}: ${JSON.stringify(r.body)}`);
      }
      for (const id of ["c3-directivo", "c3-adminesc", "c3-admin"]) {
        const r = await jsonRequest(baseUrl, "GET", `/api/enterprise/${ruta}`, { token: token(id) });
        // El ADMIN de plataforma no tiene escuela y el handler le responde su propio 403: lo que importa es
        // que NO sea el de la puerta de rol.
        assert.notEqual((r.body as { error?: string })?.error, "sin permiso de gestión de la escuela", `${id} debería pasar el control de rol en ${ruta}`);
      }
    });
  }

  test("un alumno no ve el texto de los mensajes reportados", async () => {
    const r = await jsonRequest(baseUrl, "GET", "/api/enterprise/mensajes", { token: token("c3-alumno") });
    assert.equal(r.status, 403);
    assert.ok(!JSON.stringify(r.body).includes("texto reportado"));
    const ok = await jsonRequest(baseUrl, "GET", "/api/enterprise/mensajes", { token: token("c3-directivo") });
    assert.equal(ok.status, 200);
    assert.ok(JSON.stringify(ok.body).includes("texto reportado"));
  });
});

describe("escrituras", () => {
  test("un alumno no puede crear aulas por /api/enterprise/aulas", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/enterprise/aulas", { token: token("c3-alumno"), body: { name: "Mi aula", grade: "5°" } });
    assert.equal(r.status, 403);
    assert.equal(prisma.clase.rows.length, 0);
  });
});

test("sin sesión: 401", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/enterprise/miembros");
  assert.equal(r.status, 401);
});
