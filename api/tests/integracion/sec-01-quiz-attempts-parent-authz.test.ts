/**
 * SEC-01 / PLAN-J §3c #6 — un PARENT no puede rendir cuestionarios.
 *
 * Rol PARENT = solo lectura en módulos/quizzes: puede ver el módulo de su
 * hijo, pero no puede iniciar un intento en su nombre. El gating es
 * server-side (no sólo esconder el botón en la UI).
 *
 * Verificaciones:
 *  - POST /api/quiz-attempts sin token → 401.
 *  - PARENT puro → 403.
 *  - PARENT+USER (multi-rol, ej. un adulto que también es alumno) → pasa
 *    el guard, retiene su capacidad de alumno.
 *  - TEACHER → pasa el guard (siguen pudiendo probar su propio contenido).
 *  - USER (alumno normal) → pasa el guard.
 *  "Pasa el guard" = no 401/403; el 404 posterior es por quizId inexistente,
 *  la lógica de negocio que sigue después del check de rol.
 */

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const PARENT_ID = "parent-1";
const PARENT_USER_ID = "parent-user-1";
const TEACHER_ID = "teacher-1";
const STUDENT_ID = "student-1";

before(async () => {
  seedUser({ id: PARENT_ID, role: "PARENT" });
  seedUser({ id: PARENT_USER_ID, role: "PARENT", roles: ["PARENT", "USER"] });
  seedUser({ id: TEACHER_ID, role: "TEACHER" });
  seedUser({ id: STUDENT_ID, role: "STUDENT" });

  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => { await close(); });

test("SEC-01: POST /api/quiz-attempts sin token → 401", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    body: { quizId: "quiz-inexistente" },
  });
  assert.equal(r.status, 401);
});

test("SEC-01: POST /api/quiz-attempts con PARENT puro → 403", async () => {
  const token = tokenFor({ id: PARENT_ID, role: "PARENT" });
  const r = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: "quiz-inexistente" },
  });
  assert.equal(r.status, 403);
  assert.equal((r.body as { error?: string }).error, "role cannot start quiz attempts");
});

test("SEC-01: POST /api/quiz-attempts con PARENT+USER → pasa el guard (404 por quiz inexistente)", async () => {
  const token = tokenFor({ id: PARENT_USER_ID, role: "PARENT", roles: ["PARENT", "USER"] });
  const r = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: "quiz-inexistente" },
  });
  assert.notEqual(r.status, 401);
  assert.notEqual(r.status, 403);
});

test("SEC-01: POST /api/quiz-attempts con TEACHER → pasa el guard (404 por quiz inexistente)", async () => {
  const token = tokenFor({ id: TEACHER_ID, role: "TEACHER" });
  const r = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: "quiz-inexistente" },
  });
  assert.notEqual(r.status, 401);
  assert.notEqual(r.status, 403);
});

test("SEC-01: POST /api/quiz-attempts con STUDENT (alumno) → pasa el guard (404 por quiz inexistente)", async () => {
  const token = tokenFor({ id: STUDENT_ID, role: "STUDENT" });
  const r = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", {
    token,
    body: { quizId: "quiz-inexistente" },
  });
  assert.notEqual(r.status, 401);
  assert.notEqual(r.status, 403);
});
