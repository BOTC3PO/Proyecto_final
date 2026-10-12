/**
 * B10 — las estadísticas se confinan a la escuela de la sesión (el ADMIN de plataforma ve todo).
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-b10-a";
const ESC_B = "esc-b10-b";
const DOC_A = "b10-doc-a";
const DOC_B = "b10-doc-b";
const ALU_A = "b10-alu-a";
const ALU_B = "b10-alu-b";
const ADMIN = "b10-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();

before(async () => {
  const { estadisticas } = await import("../../src/routes/estadisticas");
  const srv = await startServer([estadisticas]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

const docA = () => tokenFor({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
const admin = () => tokenFor({ id: ADMIN, role: "ADMIN", schoolId: null });
const get = (path: string, token: string) => jsonRequest(baseUrl, "GET", path, { token });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) {
    prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  }
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_A, role: "USER", schoolId: ESC_A });
  seedUser({ id: ALU_B, role: "USER", schoolId: ESC_B });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.membresia.rows.push(
    { usuarioId: DOC_A, escuelaId: ESC_A, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: ALU_A, escuelaId: ESC_A, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: DOC_B, escuelaId: ESC_B, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: ALU_B, escuelaId: ESC_B, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never
  );
  prisma.clase.rows.push(
    { id: "aula-a", escuelaId: ESC_A, name: "A", grade: "1", isDeleted: false, status: "ACTIVE", createdAt: nowIso() } as never,
    { id: "aula-b", escuelaId: ESC_B, name: "B", grade: "1", isDeleted: false, status: "ACTIVE", createdAt: nowIso() } as never
  );
  prisma.claseMiembro.rows.push(
    { claseId: "aula-a", usuarioId: ALU_A, rolEnClase: "STUDENT" } as never,
    { claseId: "aula-b", usuarioId: ALU_B, rolEnClase: "STUDENT" } as never
  );
  prisma.modulo.rows.push(
    { id: "mod-a", title: "A", schoolId: ESC_A, ownerUserId: DOC_A } as never,
    { id: "mod-b", title: "B", schoolId: ESC_B, ownerUserId: DOC_B } as never
  );
  prisma.quiz.rows.push(
    { id: "quiz-a", moduleId: "mod-a" } as never,
    { id: "quiz-b", moduleId: "mod-b" } as never
  );
  const intento = (id: string, quizId: string, userId: string, score: number) =>
    ({ id, quizId, quizVersionId: "v", userId, status: "submitted", startedAt: "2026-10-01T10:00:00.000Z", score, maxScore: 10, answers: "{}" }) as never;
  prisma.quizAttempt.rows.push(intento("i1", "quiz-a", ALU_A, 8), intento("i2", "quiz-b", ALU_B, 4), intento("i3", "quiz-b", ALU_B, 6));
  prisma.progresoModulo.rows.push(
    { id: "p1", usuarioId: ALU_A, moduloId: "mod-a", status: "completado", score: 9, updatedAt: "2026-10-02T00:00:00.000Z" } as never,
    { id: "p2", usuarioId: ALU_B, moduloId: "mod-b", status: "completado", score: 5, updatedAt: "2026-10-02T00:00:00.000Z" } as never
  );
});

type Perfil = { general: { completadas: number; progresoPorModulo: Array<{ moduloId: string }> } };
type Quizzes = { resumen: { intentos: number } };

describe("/api/estadisticas/profesor", () => {
  test("el personal de una escuela ve solo el progreso de la suya", async () => {
    const r = await get("/api/estadisticas/profesor", docA());
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.deepEqual((r.body as Perfil).general.progresoPorModulo.map((m) => m.moduloId), ["mod-a"]);
  });
  test("el admin de plataforma ve todas", async () => {
    const r = await get("/api/estadisticas/profesor", admin());
    assert.equal((r.body as Perfil).general.completadas, 2);
  });
  test("una fecha inválida da 400 y una válida filtra (las fechas son texto ISO)", async () => {
    assert.equal((await get("/api/estadisticas/profesor?fechaInicio=ayer", docA())).status, 400);
    const r = await get("/api/estadisticas/profesor?fechaInicio=2026-10-02&fechaFin=2026-10-02", docA());
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal((r.body as Perfil).general.completadas, 1, "fechaFin de solo fecha incluye todo ese día");
    const fuera = await get("/api/estadisticas/profesor?fechaFin=2026-10-01", docA());
    assert.equal((fuera.body as Perfil).general.completadas, 0);
  });
  test("una sesión sin escuela (y sin ser admin) no ve nada", async () => {
    seedUser({ id: "b10-suelto", role: "TEACHER", schoolId: null });
    const r = await get("/api/estadisticas/profesor", tokenFor({ id: "b10-suelto", role: "TEACHER", schoolId: null }));
    assert.equal(r.status, 403);
  });
});

describe("/api/estadisticas/quizzes", () => {
  test("aula propia: solo los intentos de sus alumnos; aula de otra escuela: 404", async () => {
    const propia = await get("/api/estadisticas/quizzes/aula/aula-a", docA());
    assert.equal(propia.status, 200, JSON.stringify(propia.body));
    assert.equal((propia.body as Quizzes).resumen.intentos, 1);
    assert.equal((await get("/api/estadisticas/quizzes/aula/aula-b", docA())).status, 404);
    assert.equal((await get("/api/estadisticas/quizzes/aula/no-existe", docA())).status, 404);
  });
  test("institución: la propia sí, otra escuela no; el admin elige cualquiera", async () => {
    const propia = await get(`/api/estadisticas/quizzes/institucion/${ESC_A}`, docA());
    assert.equal((propia.body as Quizzes).resumen.intentos, 1);
    assert.equal((await get(`/api/estadisticas/quizzes/institucion/${ESC_B}`, docA())).status, 403);
    const comoAdmin = await get(`/api/estadisticas/quizzes/institucion/${ESC_B}`, admin());
    assert.equal((comoAdmin.body as Quizzes).resumen.intentos, 2);
  });
  test("docente: uno de la propia escuela sí, de otra escuela 404", async () => {
    const propio = await get(`/api/estadisticas/quizzes/docente/${DOC_A}`, docA());
    assert.equal((propio.body as Quizzes).resumen.intentos, 1);
    assert.equal((await get(`/api/estadisticas/quizzes/docente/${DOC_B}`, docA())).status, 404);
  });
});
