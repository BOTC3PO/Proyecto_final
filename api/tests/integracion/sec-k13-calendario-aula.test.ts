/** K13 — agendar actividades en un aula exige gestionarla. */
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-vblang";
process.env.DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { prisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
let titular: string, otro: string;

before(async () => {
  seedUser({ id: "cal-titular", role: "TEACHER", schoolId: "cal-esc" });
  seedUser({ id: "cal-otro", role: "TEACHER", schoolId: "cal-esc-2" });
  titular = tokenFor({ id: "cal-titular", role: "TEACHER", schoolId: "cal-esc" });
  otro = tokenFor({ id: "cal-otro", role: "TEACHER", schoolId: "cal-esc-2" });
  await prisma.clase.create({
    data: { id: "cal-aula", nombre: "A", escuelaId: "cal-esc", createdBy: "cal-titular", teacherId: "cal-titular" } as never,
  });
  await prisma.claseMiembro.create({
    data: { id: "cal-cm", claseId: "cal-aula", usuarioId: "cal-titular", rolEnClase: "TEACHER" } as never,
  });
  const { calendario } = await import("../../src/routes/calendario");
  const server = await startServer([calendario]);
  baseUrl = server.baseUrl;
  close = server.close;
});
after(async () => { await close(); });

const crear = (token: string) =>
  jsonRequest(baseUrl, "POST", "/api/calendario/aula", {
    token, body: { aulaId: "cal-aula", tipo: "tarea", titulo: "T", fechaInicio: "2026-11-01" },
  });

test("docente de otra escuela no puede agendar en el aula → 403", async () => {
  assert.equal((await crear(otro)).status, 403);
});

test("el titular sí puede", async () => {
  assert.equal((await crear(titular)).status, 201);
});
