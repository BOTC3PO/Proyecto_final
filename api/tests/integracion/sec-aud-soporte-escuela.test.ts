/**
 * Auditoría 11/2026 — soporte grupal. El hilo guardaba la escuela con la que se abrió y el principal se tomaba
 * de `escuelas.directivoPrincipalId` sin mirar membresías: tras un cambio de escuela el directivo anterior
 * seguía leyendo el chat, y un principal dado de baja también.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const now = () => new Date().toISOString();
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { mensajeria } = await import("../../src/routes/mensajeria");
  const s = await startServer([mensajeria]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const k of ["hilo", "mensajeDirecto", "hiloSoporte", "mensajeSoporte", "soporteLectura"]) (prisma as any)[k].rows = [];
  prisma.escuela.rows.push({ id: "so-esc-a", name: "A", isDeleted: false, estadoVerificacion: "verificada", directivoPrincipalId: "so-dir-a", createdAt: now() } as never);
  prisma.escuela.rows.push({ id: "so-esc-b", name: "B", isDeleted: false, estadoVerificacion: "verificada", directivoPrincipalId: "so-dir-b", createdAt: now() } as never);
  seedUser({ id: "so-alu", role: "STUDENT", schoolId: "so-esc-a" });
  seedUser({ id: "so-dir-a", role: "DIRECTIVO", schoolId: "so-esc-a" });
  seedUser({ id: "so-dir-b", role: "DIRECTIVO", schoolId: "so-esc-b" });
  for (const [u, e, r] of [["so-alu", "so-esc-a", "STUDENT"], ["so-dir-a", "so-esc-a", "DIRECTIVO"], ["so-dir-b", "so-esc-b", "DIRECTIVO"]]) {
    prisma.membresia.rows.push({ id: `m-${u}`, usuarioId: u, escuelaId: e, rol: r, estado: "activa", fechaAlta: now() } as never);
  }
});

const send = (t: string, d: string, body: string) => jsonRequest(baseUrl, "POST", "/api/mensajeria/hilos", { token: t, body: { destinatarioId: d, body } });
const get = (t: string, id: string) => jsonRequest(baseUrl, "GET", `/api/mensajeria/hilos/${id}`, { token: t });
const tDirA = () => tokenFor({ id: "so-dir-a", role: "DIRECTIVO", schoolId: "so-esc-a" });

test("el principal de la escuela participa", async () => {
  const r = await send(tokenFor({ id: "so-alu", role: "STUDENT", schoolId: "so-esc-a" }), "soporte", "hola");
  assert.equal(r.status, 201);
  assert.equal((await get(tDirA(), (r.body as any).hiloId)).status, 200);
});

test("tras cambiar de escuela, el directivo anterior ya no ve ni responde; el nuevo sí", async () => {
  const r1 = await send(tokenFor({ id: "so-alu", role: "STUDENT", schoolId: "so-esc-a" }), "soporte", "en A");
  const hiloId = (r1.body as any).hiloId;
  const m = prisma.membresia.rows.find((x: any) => x.usuarioId === "so-alu") as any;
  m.estado = "baja";
  prisma.membresia.rows.push({ id: "m-so-alu-b", usuarioId: "so-alu", escuelaId: "so-esc-b", rol: "STUDENT", estado: "activa", fechaAlta: now() } as never);
  (prisma.usuario.rows.find((u: any) => u.id === "so-alu") as any).escuelaId = "so-esc-b";
  // Antes de que escriba de nuevo, el directivo anterior ya no entra.
  assert.equal((await get(tDirA(), hiloId)).status, 404);
  const r2 = await send(tokenFor({ id: "so-alu", role: "STUDENT", schoolId: "so-esc-b" }), "soporte", "en B");
  assert.equal((r2.body as any).hiloId, hiloId);
  assert.equal((await get(tDirA(), hiloId)).status, 404);
  assert.equal((await send(tDirA(), `soporte:${hiloId}`, "respuesta")).status, 404);
  assert.equal((await get(tokenFor({ id: "so-dir-b", role: "DIRECTIVO", schoolId: "so-esc-b" }), hiloId)).status, 200);
});

test("un principal dado de baja ya no ve, lista ni responde el hilo", async () => {
  const r1 = await send(tokenFor({ id: "so-alu", role: "STUDENT", schoolId: "so-esc-a" }), "soporte", "ayuda");
  const hiloId = (r1.body as any).hiloId;
  (prisma.membresia.rows.find((x: any) => x.usuarioId === "so-dir-a") as any).estado = "baja";
  const u = prisma.usuario.rows.find((x: any) => x.id === "so-dir-a") as any;
  u.roles = ["USER"]; u.role = "USER"; u.escuelaId = null;
  const t = tokenFor({ id: "so-dir-a", role: "STUDENT", roles: ["USER"], schoolId: null });
  const ls = await jsonRequest(baseUrl, "GET", "/api/mensajeria/hilos", { token: t });
  assert.equal(JSON.stringify(ls.body).includes(hiloId), false);
  assert.equal((await get(t, hiloId)).status, 404);
  assert.equal((await send(t, `soporte:${hiloId}`, "x")).status, 404);
});
