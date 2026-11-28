/**
 * Auditoría 11/2026 — GET /api/libros/:id devolvía cualquier libro, también los privados de otra escuela,
 * a quien conociera el id. Ahora aplica canReadLibro, como el listado.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { libros } = await import("../../src/routes/libros");
  const s = await startServer([libros]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "lb-owner", role: "TEACHER", schoolId: "lb-esc-a" });
  seedUser({ id: "lb-alu-b", role: "STUDENT", schoolId: "lb-esc-b" });
  seedUser({ id: "lb-doc-b", role: "TEACHER", schoolId: "lb-esc-b" });
  const now = new Date().toISOString();
  prisma.libro.rows.push({
    id: "lb-priv",
    json: JSON.stringify({ id: "lb-priv", title: "Privado", book: { schema: "book.pages@1.1", metadata: { id: "lb-priv", title: "Privado" }, pages: [{ text: "secreto" }] }, updatedAt: now }),
    ownerUserId: "lb-owner", schoolId: "lb-esc-a", visibility: "privado", updatedAt: now,
  } as never);
});

test("un libro privado ajeno responde 404 en el detalle", async () => {
  for (const [id, role, esc] of [["lb-alu-b", "STUDENT", "lb-esc-b"], ["lb-doc-b", "TEACHER", "lb-esc-b"]]) {
    const r = await jsonRequest(baseUrl, "GET", "/api/libros/lb-priv", { token: tokenFor({ id, role: role as never, schoolId: esc }) });
    assert.equal(r.status, 404);
    assert.equal(JSON.stringify(r.body).includes("secreto"), false);
  }
});

test("el dueño lo sigue leyendo", async () => {
  const r = await jsonRequest(baseUrl, "GET", "/api/libros/lb-priv", { token: tokenFor({ id: "lb-owner", role: "TEACHER", schoolId: "lb-esc-a" }) });
  assert.equal(r.status, 200);
});
