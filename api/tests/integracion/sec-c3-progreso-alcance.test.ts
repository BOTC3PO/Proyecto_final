/**
 * C3 — progreso de un alumno ajeno. `POST /api/progreso` y `GET /api/progreso?usuarioId=` aceptaban a
 * cualquier personal (de cualquier escuela) sobre cualquier alumno: un docente de otra escuela podía leer
 * y reescribir el avance y las notas de un menor.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-pg-a";
const ESC_B = "esc-pg-b";
const DOC_A = "pg-doc-a";
const DOC_B = "pg-doc-b";
const ALU_A = "pg-alu-a";
const ALU_OTRO = "pg-alu-otro";
const ADMIN = "pg-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { progreso } = await import("../../src/routes/progreso");
  const srv = await startServer([progreso]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_OTRO, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.membresia.rows.push(
    { usuarioId: DOC_A, escuelaId: ESC_A, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: ALU_A, escuelaId: ESC_A, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: DOC_B, escuelaId: ESC_B, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never
  );
  prisma.modulo.rows.push({ id: "mod-pg", titulo: "Mod", slug: "mod-pg", ownerUserId: DOC_A, visibility: "publico", schoolId: ESC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.progresoModulo.rows.push({ id: "pr-1", usuarioId: ALU_A, moduloId: "mod-pg", status: "iniciado", score: 3, updatedAt: nowIso() } as never);
});

const escribir = (token: string, usuarioId: string, status = "completado") =>
  jsonRequest(baseUrl, "POST", "/api/progreso", { token, body: { usuarioId, moduloId: "mod-pg", status, score: 10 } });
const leer = (token: string, usuarioId: string) =>
  jsonRequest(baseUrl, "GET", `/api/progreso?usuarioId=${usuarioId}`, { token });
const estadoDe = () => (prisma.progresoModulo.rows.find((p) => (p as { usuarioId: string }).usuarioId === ALU_A) as { status: string }).status;

describe("leer el progreso de otro alumno", () => {
  test("lo lee el propio alumno, el personal de su escuela y el admin; no el de otra escuela ni otro alumno", async () => {
    assert.equal((await leer(tok(ALU_A, "STUDENT", ESC_A), ALU_A)).status, 200);
    assert.equal((await leer(tok(DOC_A, "TEACHER", ESC_A), ALU_A)).status, 200);
    assert.equal((await leer(tok(ADMIN, "ADMIN", null), ALU_A)).status, 200);
    assert.equal((await leer(tok(DOC_B, "TEACHER", ESC_B), ALU_A)).status, 403);
    assert.equal((await leer(tok(ALU_OTRO, "STUDENT", ESC_A), ALU_A)).status, 403);
  });
});

describe("escribir el progreso de otro alumno", () => {
  test("un docente de otra escuela no lo cambia", async () => {
    const r = await escribir(tok(DOC_B, "TEACHER", ESC_B), ALU_A);
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(estadoDe(), "iniciado");
  });

  test("un alumno no escribe el de otro alumno", async () => {
    assert.equal((await escribir(tok(ALU_OTRO, "STUDENT", ESC_A), ALU_A)).status, 403);
    assert.equal(estadoDe(), "iniciado");
  });

  test("el personal de la escuela del alumno, el admin y el propio alumno sí", async () => {
    assert.equal((await escribir(tok(DOC_A, "TEACHER", ESC_A), ALU_A, "en_progreso")).status, 200);
    assert.equal((await escribir(tok(ADMIN, "ADMIN", null), ALU_A, "iniciado")).status, 200);
    assert.equal((await escribir(tok(ALU_A, "STUDENT", ESC_A), ALU_A, "completado")).status, 200);
  });
});
