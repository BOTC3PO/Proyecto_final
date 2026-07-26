/**
 * QA-FIX-06 — Ver/operar intentos de quiz NO debe exigir feature enterprise.
 *
 * A diferencia del resto de la suite (que en `_helpers/setup` stubea
 * `entitlements` para permitir todo), este test instala SOLO el stub de
 * `prisma` y deja el módulo `entitlements` REAL. Así los guards enterprise se
 * evalúan de verdad contra el plan de la escuela en memoria, y podemos
 * verificar que:
 *
 *  - Un TEACHER de una escuela NO enterprise (plan ENTERPRISE_BASIC, sin la
 *    feature QUIZZES) puede listar los intentos de un módulo propio → 200
 *    (antes el guard cortaba con 403 y la vista del módulo quedaba rota).
 *  - El docente staff de un aula ve los intentos de sus alumnos → 200.
 *  - El flujo enterprise (ENTERPRISE_PLUS, con QUIZZES) sigue funcionando → 200.
 *  - El gating premium REAL se conserva donde corresponde: las MÉTRICAS
 *    agregadas de quizzes (`/api/estadisticas/quizzes/aula/:id`) siguen
 *    devolviendo 403 para una escuela no enterprise.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-quiz-gating";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import path from "node:path";
import Module from "node:module";
import type { Server } from "node:http";
import { after, before, beforeEach, test } from "node:test";
import express from "express";
import { InMemoryPrisma } from "./_helpers/in-memory-prisma";

const apiSrc = path.resolve(__dirname, "..", "..", "src");
const prisma = new InMemoryPrisma();

function installModule(absPath: string, exports: unknown): void {
  // @ts-expect-error — internal require cache surface.
  Module._cache = Module._cache || {};
  // @ts-expect-error — same.
  Module._cache[absPath] = {
    id: absPath,
    filename: absPath,
    loaded: true,
    exports,
    children: [],
    paths: [],
  };
}

// Stub ONLY prisma. NO stub de `entitlements`: queremos los guards reales.
installModule(path.join(apiSrc, "lib", "prisma.ts"), { prisma });

import { createAccessToken } from "../../src/lib/auth-token";

const ESC_BASIC = "esc-basic"; // plan ENTERPRISE_BASIC → SIN feature QUIZZES
const ESC_PLUS = "esc-plus"; // plan ENTERPRISE_PLUS → CON feature QUIZZES
const TEACHER_BASIC = "teacher-basic";
const TEACHER_PLUS = "teacher-plus";
const ALUMNO = "alumno-1";
const AULA = "aula-1";
const MOD = "mod-1";
const QUIZ = "quiz-1";
const QV = "qv-1";

let baseUrl: string;
let close: () => Promise<void>;

function tokenFor(opts: { id: string; role: string; schoolId: string | null }): string {
  return createAccessToken({ id: opts.id, role: opts.role, schoolId: opts.schoolId }).token;
}

function seedUser(id: string, role: string, schoolId: string | null): void {
  prisma.usuario.rows.push({
    id,
    username: id,
    email: `${id}@test.local`,
    fullName: id,
    role,
    escuelaId: schoolId,
    isDeleted: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const { estadisticas } = await import("../../src/routes/estadisticas");
  const app = express();
  app.use(express.json());
  app.use(quizAttempts);
  app.use(estadisticas);
  const server: Server = await new Promise((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  const address = server.address();
  if (!address || typeof address === "string") throw new Error("bind failed");
  baseUrl = `http://127.0.0.1:${address.port}`;
  close = () => new Promise((resolve) => server.close(() => resolve()));
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  prisma.usuario.rows = [];
  prisma.escuela.rows = [];
  prisma.clase.rows = [];
  prisma.claseMiembro.rows = [];
  prisma.quiz.rows = [];
  prisma.quizAttempt.rows = [];

  const now = new Date().toISOString();

  // Escuela NO enterprise (no incluye QUIZZES) y escuela enterprise PLUS.
  prisma.escuela.rows.push({ estadoVerificacion: "verificada", id: ESC_BASIC, plan: "ENTERPRISE_BASIC", subscriptionStatus: "ACTIVE" });
  prisma.escuela.rows.push({ estadoVerificacion: "verificada", id: ESC_PLUS, plan: "ENTERPRISE_PLUS", subscriptionStatus: "ACTIVE" });

  seedUser(TEACHER_BASIC, "TEACHER", ESC_BASIC);
  seedUser(TEACHER_PLUS, "TEACHER", ESC_PLUS);
  seedUser(ALUMNO, "STUDENT", ESC_BASIC);

  // Aula de la escuela basic con el docente y un alumno.
  prisma.clase.rows.push({
    id: AULA,
    escuelaId: ESC_BASIC,
    name: "5°B",
    grade: "5°",
    isDeleted: false,
    status: "ACTIVE",
    createdBy: TEACHER_BASIC,
    createdAt: now,
  });
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: TEACHER_BASIC, rolEnClase: "TEACHER" });
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: ALUMNO, rolEnClase: "STUDENT" });

  // Quiz dentro del módulo + un intento del alumno.
  prisma.quiz.rows.push({ id: QUIZ, moduleId: MOD, title: "Quiz 1", createdAt: now, updatedAt: now });
  prisma.quizAttempt.rows.push({
    id: "att-1",
    quizId: QUIZ,
    quizVersionId: QV,
    userId: ALUMNO,
    status: "SUBMITTED",
    startedAt: now,
    submittedAt: now,
    score: 8,
    maxScore: 10,
    answers: "{}",
    seedPolicy: 0,
  });
});

async function getJson(token: string, path: string) {
  const res = await fetch(`${baseUrl}${path}`, { headers: { authorization: `Bearer ${token}` } });
  const text = await res.text();
  return { status: res.status, body: text ? JSON.parse(text) : null };
}

test("TEACHER de escuela NO enterprise lista intentos de un módulo → 200 (antes 403)", async () => {
  const token = tokenFor({ id: TEACHER_BASIC, role: "TEACHER", schoolId: ESC_BASIC });
  const { status } = await getJson(token, `/api/quiz-attempts?moduleId=${MOD}&userId=${TEACHER_BASIC}`);
  assert.equal(status, 200);
});

test("Docente staff de escuela NO enterprise ve los intentos de sus alumnos del aula → 200", async () => {
  const token = tokenFor({ id: TEACHER_BASIC, role: "TEACHER", schoolId: ESC_BASIC });
  const { status, body } = await getJson(
    token,
    `/api/quiz-attempts?aulaId=${AULA}&moduleId=${MOD}&userId=${ALUMNO}`,
  );
  assert.equal(status, 200);
  assert.equal((body as { items: unknown[] }).items.length, 1);
});

test("Flujo enterprise (ENTERPRISE_PLUS) sigue funcionando → 200", async () => {
  const token = tokenFor({ id: TEACHER_PLUS, role: "TEACHER", schoolId: ESC_PLUS });
  const { status } = await getJson(token, `/api/quiz-attempts?moduleId=${MOD}&userId=${TEACHER_PLUS}`);
  assert.equal(status, 200);
});

test("Gating premium real conservado: métricas agregadas de quizzes siguen 403 sin enterprise", async () => {
  const token = tokenFor({ id: TEACHER_BASIC, role: "TEACHER", schoolId: ESC_BASIC });
  const { status, body } = await getJson(token, `/api/estadisticas/quizzes/aula/${AULA}`);
  assert.equal(status, 403);
  assert.equal((body as { error?: string })?.error, "feature not enabled for current plan");
});
