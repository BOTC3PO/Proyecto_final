/**
 * K13 — `/api/sync` y el ranking de competencia.
 *  - pull solo para miembros del aula (antes: cualquiera con el id obtenía módulos y avisos).
 *  - el puntaje de competencia sale del intento corregido por el servidor, no del cliente.
 *  - estado de progreso validado.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { prisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
let miembro: string, ajeno: string;

before(async () => {
  seedUser({ id: "k13-miembro", role: "STUDENT" });
  seedUser({ id: "k13-ajeno", role: "STUDENT" });
  miembro = tokenFor({ id: "k13-miembro", role: "STUDENT" });
  ajeno = tokenFor({ id: "k13-ajeno", role: "STUDENT" });
  await prisma.clase.create({ data: { id: "k13-aula", nombre: "A", escuelaId: "k13-esc" } as never });
  await prisma.claseMiembro.create({
    data: { id: "k13-cm", claseId: "k13-aula", usuarioId: "k13-miembro", rolEnClase: "STUDENT" } as never,
  });
  await prisma.quizAttempt.create({
    data: { id: "k13-att", userId: "k13-miembro", quizId: "k13-quiz", status: "submitted", score: 7, maxScore: 10 } as never,
  });
  const { sync } = await import("../../src/routes/sync");
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const server = await startServer([sync, quizAttempts]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => { await close(); });

test("sync/pull: un usuario ajeno al aula recibe 404", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/sync/pull/k13-aula", { token: ajeno });
  assert.equal(r.status, 404);
});

test("sync/pull: el miembro sí puede bajar el aula", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/sync/pull/k13-aula", { token: miembro });
  assert.equal(r.status, 200);
});

test("sync/push competencia: ignora el puntaje del cliente y usa el del intento", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/sync/push", {
    token: miembro,
    body: { items: [{ id: "i1", tipo: "competencia", createdAt: new Date().toISOString(),
      payload: { attemptId: "k13-att", quizId: "k13-quiz", score: 999, maxScore: 999, tiempoSeg: 5 } }] },
  });
  assert.equal(r.status, 200);
  const fila = (await prisma.quizCompetencia.findMany({ where: { usuarioId: "k13-miembro" } }))[0] as { score: number };
  assert.equal(fila.score, 7);
});

test("sync/push competencia: intento de otro usuario → falla", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/sync/push", {
    token: ajeno,
    body: { items: [{ id: "i2", tipo: "competencia", createdAt: new Date().toISOString(),
      payload: { attemptId: "k13-att", score: 10, maxScore: 10, tiempoSeg: 1 } }] },
  });
  assert.equal((r.body as { failed: number }).failed, 1);
});

test("sync/push progreso: estado inválido se rechaza", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/sync/push", {
    token: miembro,
    body: { items: [{ id: "i3", tipo: "progreso", createdAt: new Date().toISOString(),
      payload: { moduloId: "m", status: "hackeado" } }] },
  });
  assert.equal((r.body as { failed: number }).failed, 1);
});

test("POST /competencia: el puntaje del cuerpo se ignora; intento ajeno → 404", async () => {
  const mal = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts/k13-att/competencia", {
    token: ajeno, body: { score: 999, tiempoSeg: 3 },
  });
  assert.equal(mal.status, 404);
  const ok = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts/k13-att/competencia", {
    token: miembro, body: { score: 999, tiempoSeg: 3 },
  });
  assert.equal(ok.status, 200); // ya registrado por el push → idempotente
  const filas = await prisma.quizCompetencia.findMany({ where: { usuarioId: "k13-miembro" } });
  assert.equal(filas.length, 1);
});
