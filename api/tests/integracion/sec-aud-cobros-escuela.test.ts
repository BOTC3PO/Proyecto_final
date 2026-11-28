/**
 * Auditoría 11/2026 — cobros.
 *  - Publicar aceptaba un aula o alumnos de otra escuela: se les creaban cuotas y se veían sus nombres.
 *  - En escuelas sin principal designado, cualquier DIRECTIVO (de cualquier escuela) veía los directivos y
 *    cambiaba la delegación de cobro; y un principal dado de baja seguía siéndolo.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "co-esc-a";
const ESC_B = "co-esc-b";
const iso = () => new Date().toISOString();
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { cobros } = await import("../../src/routes/cobros");
  const s = await startServer([cobros]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

const membresia = (usuarioId: string, escuelaId: string, rol: string) =>
  prisma.membresia.rows.push({ id: `m-${usuarioId}-${escuelaId}`, usuarioId, escuelaId, rol, estado: "activa", puedeCobrar: false, fechaAlta: iso() } as never);

beforeEach(() => {
  resetPrisma();
  prisma.escuela.rows.push({ id: ESC_A, name: "A", isDeleted: false, estadoVerificacion: "verificada", directivoPrincipalId: "co-dir-a", createdAt: iso() } as never);
  prisma.escuela.rows.push({ id: ESC_B, name: "B", isDeleted: false, estadoVerificacion: "verificada", directivoPrincipalId: null, createdAt: iso() } as never);
  seedUser({ id: "co-dir-a", role: "DIRECTIVO", schoolId: ESC_A });
  seedUser({ id: "co-dir-b", role: "DIRECTIVO", schoolId: ESC_B });
  seedUser({ id: "co-alu-a", role: "USER", schoolId: ESC_A });
  seedUser({ id: "co-alu-b", role: "USER", schoolId: ESC_B, fullName: "Alumno B" });
  membresia("co-dir-a", ESC_A, "DIRECTIVO");
  membresia("co-dir-b", ESC_B, "DIRECTIVO");
  membresia("co-alu-a", ESC_A, "USER");
  membresia("co-alu-b", ESC_B, "USER");
  prisma.clase.rows.push({ id: "co-aula-b", escuelaId: ESC_B, name: "B", isDeleted: false, status: "ACTIVE", createdAt: iso() } as never);
  prisma.claseMiembro.rows.push({ claseId: "co-aula-b", usuarioId: "co-alu-b", rolEnClase: "STUDENT" } as never);
});

const tDirA = () => tokenFor({ id: "co-dir-a", role: "DIRECTIVO", schoolId: ESC_A });
const crearCobro = async () =>
  (await jsonRequest(baseUrl, "POST", "/api/cobros", { token: tDirA(), body: { concepto: "Cuota", montoUnitario: 100 } })).body as { id: string };

test("publicar con un aula de otra escuela → 422, sin cuotas", async () => {
  const cobro = await crearCobro();
  const r = await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, { token: tDirA(), body: { aulaId: "co-aula-b" } });
  assert.equal(r.status, 422);
  assert.equal(prisma.cuotaAlumno.rows.length, 0);
  assert.equal(prisma.cobroEscuela.rows.find((c) => c.id === cobro.id)?.estado, "borrador");
});

test("publicar con un alumno de otra escuela → 422 aunque venga junto a uno propio", async () => {
  const cobro = await crearCobro();
  const r = await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, { token: tDirA(), body: { alumnoIds: ["co-alu-a", "co-alu-b"] } });
  assert.equal(r.status, 422);
  assert.equal(prisma.cuotaAlumno.rows.length, 0);
  const ok = await jsonRequest(baseUrl, "POST", `/api/cobros/${cobro.id}/publicar`, { token: tDirA(), body: { alumnoIds: ["co-alu-a"] } });
  assert.equal(ok.status, 200, JSON.stringify(ok.body));
});

test("escuela sin principal: un directivo de otra escuela no ve directivos ni delega", async () => {
  const g = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESC_B}/directivos`, { token: tDirA() });
  assert.equal(g.status, 403);
  const p = await jsonRequest(baseUrl, "PATCH", `/api/escuelas/${ESC_B}/delegacion-cobros`, { token: tDirA(), body: { usuarioId: "co-dir-b", puedeCobrar: true } });
  assert.equal(p.status, 403);
  assert.equal((prisma.membresia.rows.find((m: any) => m.usuarioId === "co-dir-b") as any).puedeCobrar, false);
  // El directivo de esa escuela sí.
  const propio = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESC_B}/directivos`, { token: tokenFor({ id: "co-dir-b", role: "DIRECTIVO", schoolId: ESC_B }) });
  assert.equal(propio.status, 200);
});

test("un principal con la membresía dada de baja ya no gestiona la delegación", async () => {
  (prisma.membresia.rows.find((m: any) => m.usuarioId === "co-dir-a") as any).estado = "baja";
  const g = await jsonRequest(baseUrl, "GET", `/api/escuelas/${ESC_A}/directivos`, { token: tDirA() });
  assert.equal(g.status, 403);
});
