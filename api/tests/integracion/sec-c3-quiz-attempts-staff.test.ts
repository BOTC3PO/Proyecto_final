/**
 * C3 — corregir y ver intentos de otro alumno. `POST /api/quiz-attempts/:id/grade` solo pedía ser personal
 * (de cualquier escuela): un docente podía cambiar la nota de cualquier alumno. `GET .../staff` comparaba
 * contra `attempt.schoolId`, una columna que no existe, así que tampoco acotaba.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-qa-a";
const ESC_B = "esc-qa-b";
const DOC_A = "qa-doc-a";     // autor del módulo
const DOC_A2 = "qa-doc-a2";   // otro docente de la misma escuela
const DOC_B = "qa-doc-b";
const ALU_A = "qa-alu-a";
const ADMIN = "qa-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const srv = await startServer([quizAttempts]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_A2, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.membresia.rows.push(
    { usuarioId: DOC_A, escuelaId: ESC_A, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: DOC_A2, escuelaId: ESC_A, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: ALU_A, escuelaId: ESC_A, rol: "STUDENT", estado: "activa", fechaAlta: nowIso() } as never,
    { usuarioId: DOC_B, escuelaId: ESC_B, rol: "TEACHER", estado: "activa", fechaAlta: nowIso() } as never
  );
  prisma.modulo.rows.push({ id: "mod-qa", titulo: "Mod", slug: "mod-qa", ownerUserId: DOC_A, visibility: "escuela", schoolId: ESC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.quiz.rows.push({ id: "quiz-qa", moduleId: "mod-qa", ownerUserId: DOC_A, title: "Quiz" } as never);
  prisma.quizVersion.rows.push({ id: "ver-qa", quizId: "quiz-qa", versionNumber: 1 } as never);
  prisma.quizAttempt.rows.push({
    id: "att-qa", quizId: "quiz-qa", quizVersionId: "ver-qa", userId: ALU_A, status: "pending_review",
    startedAt: nowIso(), submittedAt: nowIso(), score: 0, maxScore: 5, answers: "{}", feedback: "{}",
    grading: JSON.stringify({ autoScore: 0, items: { q1: { points: 5, prompt: "¿Por qué?", response: "porque sí", score: null } } }),
  } as never);
});

const ver = (token: string) => jsonRequest(baseUrl, "GET", "/api/quiz-attempts/att-qa/staff", { token });
const corregir = (token: string) => jsonRequest(baseUrl, "POST", "/api/quiz-attempts/att-qa/grade", { token, body: { questionId: "q1", score: 5 } });
const nota = () => (prisma.quizAttempt.rows[0] as { score: number }).score;

describe("ver un intento ajeno (vista docente)", () => {
  test("lo ve el docente de la escuela del alumno y el admin; no uno de otra escuela ni el alumno", async () => {
    assert.equal((await ver(tok(DOC_A, "TEACHER", ESC_A))).status, 200);
    assert.equal((await ver(tok(DOC_A2, "TEACHER", ESC_A))).status, 200, "misma escuela");
    assert.equal((await ver(tok(ADMIN, "ADMIN", null))).status, 200);
    assert.equal((await ver(tok(DOC_B, "TEACHER", ESC_B))).status, 403);
    assert.equal((await ver(tok(ALU_A, "STUDENT", ESC_A))).status, 403);
  });
});

describe("corregir un intento ajeno", () => {
  test("un docente de otra escuela no cambia la nota", async () => {
    const r = await corregir(tok(DOC_B, "TEACHER", ESC_B));
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(nota(), 0);
    assert.equal((prisma.quizAttempt.rows[0] as { status: string }).status, "pending_review");
  });

  test("un alumno no corrige, ni el suyo", async () => {
    assert.equal((await corregir(tok(ALU_A, "STUDENT", ESC_A))).status, 403);
    assert.equal(nota(), 0);
  });

  test("el docente de la escuela corrige", async () => {
    const r = await corregir(tok(DOC_A, "TEACHER", ESC_A));
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(nota(), 5);
  });

  test("un intento que no existe da 404", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts/no-existe/grade", { token: tok(DOC_A, "TEACHER", ESC_A), body: { questionId: "q1", score: 5 } });
    assert.equal(r.status, 404);
  });
});
