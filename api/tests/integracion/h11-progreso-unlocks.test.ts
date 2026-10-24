/** H11 — /api/progreso sin aulaId ya no calcula candados de TODOS los módulos de la plataforma. */
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-vblang";
process.env.DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { modulosConOverrideActivo } from "../../src/lib/module-unlock-overrides";

let baseUrl: string;
let close: () => Promise<void>;
const now = () => new Date().toISOString();

before(async () => {
  const { progreso } = await import("../../src/routes/progreso");
  const srv = await startServer([progreso]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "h11-alu", role: "STUDENT", schoolId: "h11-e" });
  const mod = (id: string, dependencies: string | null = null) =>
    prisma.modulo.rows.push({ id, slug: id, titulo: id, dependencies, isDeleted: false, createdAt: now(), updatedAt: now() } as never);
  mod("m-base");
  mod("m-bloqueado", JSON.stringify({ requires: ["m-base"] }));
  mod("m-ajeno");
  prisma.clase.rows.push({ id: "h11-aula", escuelaId: "h11-e", name: "A", isDeleted: false, status: "ACTIVE", createdAt: now(), updatedAt: now() } as never);
  prisma.claseMiembro.rows.push({ claseId: "h11-aula", usuarioId: "h11-alu", rolEnClase: "STUDENT" } as never);
  prisma.claseModulo.rows.push({ claseId: "h11-aula", moduloId: "m-base" } as never, { claseId: "h11-aula", moduloId: "m-bloqueado" } as never);
});

test("sin aulaId solo se calculan los módulos de las aulas de la persona y de su progreso", async () => {
  const token = tokenFor({ id: "h11-alu", role: "STUDENT" as never, schoolId: "h11-e" });
  const r = await jsonRequest(baseUrl, "GET", "/api/progreso?usuarioId=h11-alu", { token });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  const ids = (r.body as { unlocks: Array<{ moduloId: string }> }).unlocks.map((u) => u.moduloId).sort();
  assert.deepEqual(ids, ["m-base", "m-bloqueado"]);
});

test("modulosConOverrideActivo: desbloqueo propio o de un aula a la que pertenece", async () => {
  prisma.moduloDesbloqueo.rows.push(
    { id: "d1", moduloId: "m-a", usuarioId: "h11-alu", aulaId: null } as never,
    { id: "d2", moduloId: "m-b", usuarioId: null, aulaId: "h11-aula" } as never,
    { id: "d3", moduloId: "m-c", usuarioId: "otro", aulaId: null } as never,
    { id: "d4", moduloId: "m-d", usuarioId: null, aulaId: "otra-aula" } as never
  );
  const r = await modulosConOverrideActivo(["m-a", "m-b", "m-c", "m-d", "m-e"], "h11-alu");
  assert.deepEqual([...r].sort(), ["m-a", "m-b"]);
});
