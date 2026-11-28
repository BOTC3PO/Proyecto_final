/**
 * Auditoría 11/2026 — la copia que se crea al editar un módulo ajeno heredaba la escuela del original: un
 * docente de otra escuela dejaba en el catálogo "solo escuela" ajeno un módulo con su contenido.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const s = await startServer([modulos]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  seedUser({ id: "mc-owner-a", role: "TEACHER", schoolId: "mc-esc-a" });
  seedUser({ id: "mc-doc-b", role: "TEACHER", schoolId: "mc-esc-b" });
  seedUser({ id: "mc-alu-a", role: "STUDENT", schoolId: "mc-esc-a" });
  const now = new Date().toISOString();
  prisma.modulo.rows.push({ id: "mc-pub-a", slug: "mc", titulo: "Original A", descripcion: "d", visibility: "publico", schoolId: "mc-esc-a", ownerUserId: "mc-owner-a", teoriaId: null, tuesdayDocId: null, libroId: null, defaultQuestionCount: 5, dependencies: null, isDeleted: false, createdAt: now, updatedAt: now } as never);
});

const tB = () => tokenFor({ id: "mc-doc-b", role: "TEACHER", schoolId: "mc-esc-b" });

for (const metodo of ["PATCH", "PUT"] as const) {
  test(`${metodo}: la copia queda en la escuela de quien edita y no aparece en la escuela del original`, async () => {
    const r = await jsonRequest(baseUrl, metodo, "/api/modulos/mc-pub-a", { token: tB(), body: { title: "Contenido de B", visibility: "escuela", level: "1" } });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const id = (r.body as { id: string }).id;
    assert.notEqual(id, "mc-pub-a");
    const copia = prisma.modulo.rows.find((m: any) => m.id === id) as { schoolId: string | null; ownerUserId: string };
    assert.equal(copia.schoolId, "mc-esc-b");
    assert.equal(copia.ownerUserId, "mc-doc-b");
    const ga = await jsonRequest(baseUrl, "GET", `/api/modulos/${id}`, { token: tokenFor({ id: "mc-alu-a", role: "STUDENT", schoolId: "mc-esc-a" }) });
    assert.notEqual(ga.status, 200);
  });
}

test("duplicar: la copia queda en la escuela de quien duplica", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/modulos/mc-pub-a/duplicar", { token: tB() });
  assert.ok(r.status === 200 || r.status === 201, JSON.stringify(r.body));
  const id = (r.body as { id?: string; newId?: string }).id ?? (r.body as { newId?: string }).newId;
  const copia = prisma.modulo.rows.find((m: any) => m.id === id) as { schoolId: string | null };
  assert.equal(copia.schoolId, "mc-esc-b");
});
