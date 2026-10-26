/** H10 — las escrituras validan su cuerpo con Zod y responden 400 claro (antes: valores raros pasaban o daban 500). */
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test-secret-vblang";
process.env.DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const now = () => new Date().toISOString();
const tDoc = () => tokenFor({ id: "h10-doc", role: "TEACHER" as never, schoolId: "h10-esc" });
const tAlu = () => tokenFor({ id: "h10-alu", role: "STUDENT" as never, schoolId: "h10-esc" });
const tAdmin = () => tokenFor({ id: "h10-admin", role: "ADMIN" as never, schoolId: null });

before(async () => {
  const [{ mensajeria }, { calendario }, { tienda }, { pedagogico }, { Router }, { requireUser }] = await Promise.all([
    import("../../src/routes/mensajeria"),
    import("../../src/routes/calendario"),
    import("../../src/routes/tienda"),
    import("../../src/routes/pedagogico"),
    import("express"),
    import("../../src/lib/user-auth"),
  ]);
  const r = Router();
  r.use(requireUser, mensajeria, calendario, tienda, pedagogico);
  const srv = await startServer([r]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "h10-doc", role: "TEACHER", schoolId: "h10-esc" });
  seedUser({ id: "h10-alu", role: "STUDENT", schoolId: "h10-esc" });
  seedUser({ id: "h10-admin", role: "ADMIN", schoolId: null });
  prisma.escuela.rows.push({ id: "h10-esc", name: "E", isDeleted: false, estadoVerificacion: "verificada", createdAt: now() } as never);
  prisma.clase.rows.push({ id: "h10-aula", escuelaId: "h10-esc", name: "A", isDeleted: false, status: "ACTIVE", createdAt: now(), updatedAt: now() } as never);
  prisma.clase.rows.push({ id: "h10-ajena", escuelaId: "otra", name: "B", isDeleted: false, status: "ACTIVE", createdAt: now(), updatedAt: now() } as never);
});

const post = (token: string, path: string, body: unknown) => jsonRequest(baseUrl, "POST", path, { token, body: body as never });

test("avisos: un aula de otra escuela se rechaza; un destino raro cae en 'todos'", async () => {
  assert.equal((await post(tDoc(), "/api/mensajeria/avisos", { titulo: "t", cuerpo: "c", aulaId: "h10-ajena" })).status, 400);
  const ok = await post(tDoc(), "/api/mensajeria/avisos", { titulo: "t", cuerpo: "c", aulaId: "h10-aula", destino: "marcianos" });
  assert.equal(ok.status, 201, JSON.stringify(ok.body));
  assert.equal((prisma.aviso.rows[0] as { destino: string }).destino, "todos");
  assert.equal((await post(tDoc(), "/api/mensajeria/avisos", { titulo: 5, cuerpo: "c" })).status, 400);
});

test("marcar leído: solo avisos que existen y son de tu escuela", async () => {
  prisma.aviso.rows.push({ id: "av-1", escuelaId: "h10-esc", autorId: "h10-doc", autorRol: "TEACHER", titulo: "t", cuerpo: "c", destino: "todos", createdAt: now() } as never);
  prisma.aviso.rows.push({ id: "av-2", escuelaId: "otra", autorId: "x", autorRol: "TEACHER", titulo: "t", cuerpo: "c", destino: "todos", createdAt: now() } as never);
  assert.equal((await post(tAlu(), "/api/mensajeria/avisos/av-1/leer", {})).status, 200);
  assert.equal((await post(tAlu(), "/api/mensajeria/avisos/av-2/leer", {})).status, 404);
  assert.equal((await post(tAlu(), "/api/mensajeria/avisos/no-existe/leer", {})).status, 404);
  assert.equal(prisma.avisoLeido.rows.length, 1);
});

test("calendario: fecha inválida, fin anterior al inicio y título largo → 400", async () => {
  const base = { tipo: "feriado", titulo: "Día", fechaInicio: "2026-11-02" };
  assert.equal((await post(tDoc(), "/api/calendario/escuela", { ...base, fechaInicio: "mañana" })).status, 400);
  assert.equal((await post(tDoc(), "/api/calendario/escuela", { ...base, fechaInicio: "2026-13-45" })).status, 400);
  assert.equal((await post(tDoc(), "/api/calendario/escuela", { ...base, fechaFin: "2026-11-01" })).status, 400);
  assert.equal((await post(tDoc(), "/api/calendario/escuela", { ...base, titulo: "x".repeat(201) })).status, 400);
  assert.equal((await post(tDoc(), "/api/calendario/escuela", base)).status, 201);
  assert.equal((await post(tDoc(), "/api/calendario/escuela", { ...base, fechaInicio: "2026-11-02T10:30" })).status, 201);
});

test("tienda: ítem con datos inválidos → 400; ids únicos; compra sin itemId → 400", async () => {
  assert.equal((await post(tAdmin(), "/api/tienda/items", { tipo: "tema oscuro!", nombre: "x" })).status, 400);
  assert.equal((await post(tAdmin(), "/api/tienda/items", { tipo: "tema", nombre: "x", precio: -5 })).status, 400);
  assert.equal((await post(tAdmin(), "/api/tienda/items", { tipo: "tema", nombre: "x", precio: Number.POSITIVE_INFINITY })).status, 400);
  const a = await post(tAdmin(), "/api/tienda/items", { tipo: "tema", nombre: "A", precio: 10 });
  const b = await post(tAdmin(), "/api/tienda/items", { tipo: "tema", nombre: "B", precio: 10 });
  assert.equal(a.status, 201);
  assert.notEqual((a.body as { id: string }).id, (b.body as { id: string }).id);
  assert.equal((await post(tAlu(), "/api/tienda/comprar", {})).status, 400);
  assert.equal((await post(tAlu(), "/api/tienda/comprar", { itemId: 123 })).status, 400);
});

test("pedagógico: umbral fuera de rango o sin quizId → 400", async () => {
  assert.equal((await post(tAdmin(), "/api/pedagogico/umbral", { quizId: "q", moduloId: "m", umbral: 150 })).status, 400);
  assert.equal((await post(tAdmin(), "/api/pedagogico/umbral", { moduloId: "m", umbral: 50 })).status, 400);
  assert.equal((await post(tAdmin(), "/api/pedagogico/umbral", { quizId: "q", moduloId: "m", umbral: "50" })).status, 400);
  assert.equal((await post(tAdmin(), "/api/pedagogico/umbral", { quizId: "q", moduloId: "m", umbral: 50 })).status, 200);
});
