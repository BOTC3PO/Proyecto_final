/**
 * Auditoría 11/2026 — suscripciones: cancelar una de escuela alcanzaba con ser miembro (incluso alumno) y el
 * reembolso no controlaba dueño.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import "./_helpers/mp-stub";

let baseUrl: string;
let close: () => Promise<void>;
before(async () => {
  const { suscripciones } = await import("../../src/routes/suscripciones");
  const s = await startServer([suscripciones]);
  baseUrl = s.baseUrl;
  close = s.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  const now = new Date().toISOString();
  const fin = new Date(Date.now() + 30 * 86_400_000).toISOString();
  seedUser({ id: "su-alu", role: "STUDENT", schoolId: "su-esc" });
  seedUser({ id: "su-dir", role: "DIRECTIVO", schoolId: "su-esc" });
  seedUser({ id: "su-dir-otra", role: "DIRECTIVO", schoolId: "su-otra" });
  prisma.suscripcion.rows.push({ id: "su-sub", entidadTipo: "escuela", entidadId: "su-esc", plan: "pago", estado: "activa", mpPreapprovalId: null, periodoInicio: now, periodoFin: fin, montoMensual: 1000, moneda: "ARS", expansiones: 0, createdAt: now, updatedAt: now } as never);
  prisma.historialPago.rows.push({ id: "su-pago", suscripcionId: "su-sub", entidadTipo: "escuela", entidadId: "su-esc", monto: 1000, moneda: "ARS", estado: "pagado", createdAt: now, periodoInicio: now, periodoFin: fin } as never);
});

const post = (ruta: string, id: string, role: string, esc: string) =>
  jsonRequest(baseUrl, "POST", ruta, { token: tokenFor({ id, role: role as never, schoolId: esc }), body: { suscripcionId: "su-sub" } });
const sub = () => prisma.suscripcion.rows.find((s: any) => s.id === "su-sub") as { estado: string; reembolsoSolicitado?: number };

test("un alumno de la escuela no cancela; el directivo sí", async () => {
  assert.equal((await post("/api/suscripciones/cancelar", "su-alu", "STUDENT", "su-esc")).status, 403);
  assert.equal(sub().estado, "activa");
  assert.equal((await post("/api/suscripciones/cancelar", "su-dir", "DIRECTIVO", "su-esc")).status, 200);
  assert.equal(sub().estado, "cancelada");
});

test("reembolso: ni un alumno ni un directivo de otra escuela; el directivo de la escuela sí", async () => {
  assert.equal((await post("/api/suscripciones/reembolso", "su-dir-otra", "DIRECTIVO", "su-otra")).status, 403);
  assert.equal((await post("/api/suscripciones/reembolso", "su-alu", "STUDENT", "su-esc")).status, 403);
  assert.ok(!sub().reembolsoSolicitado);
  assert.equal((await post("/api/suscripciones/reembolso", "su-dir", "DIRECTIVO", "su-esc")).status, 200);
});
