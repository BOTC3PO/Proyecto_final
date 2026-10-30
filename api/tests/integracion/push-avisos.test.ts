/**
 * L4 (2026-10-28) — notificaciones push: un mensaje nuevo y una cuota publicada avisan al destinatario, sin
 * datos personales en el texto.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { interceptarPush, type AvisoPush } from "../../src/lib/push";
import { enviarMensajeDirecto } from "../../src/lib/mensaje-directo";

let baseUrl: string;
let close: () => Promise<void>;
let enviados: Array<{ tokens: string[]; aviso: AvisoPush }> = [];
const ESC = "esc-push";

before(async () => {
  const { cobros } = await import("../../src/routes/cobros");
  const server = await startServer([cobros]);
  baseUrl = server.baseUrl;
  close = server.close;
  interceptarPush((tokens, aviso) => enviados.push({ tokens, aviso }));
});
after(async () => {
  interceptarPush(null);
  if (close) await close();
});
beforeEach(() => {
  resetPrisma();
  enviados = [];
  const ahora = new Date().toISOString();
  prisma.escuela.rows.push({ id: ESC, name: "Escuela", isDeleted: false, estadoVerificacion: "verificada", createdAt: ahora } as never);
  seedUser({ id: "dir", role: "DIRECTIVO", schoolId: ESC });
  seedUser({ id: "alu", role: "USER", schoolId: ESC });
  seedUser({ id: "padre", role: "PARENT", schoolId: ESC });
  prisma.pushToken.rows.push({ id: "t1", userId: "padre", token: "ExponentPushToken[padre]", createdAt: ahora, updatedAt: ahora } as never);
  prisma.pushToken.rows.push({ id: "t2", userId: "alu", token: "ExponentPushToken[alu]", createdAt: ahora, updatedAt: ahora } as never);
  prisma.clase.rows.push({ id: "aula", escuelaId: ESC, name: "Aula", isDeleted: false, status: "ACTIVE" } as never);
  prisma.claseMiembro.rows.push({ claseId: "aula", usuarioId: "alu", rolEnClase: "STUDENT" } as never);
  prisma.progresoModuloVinculo.rows.push({ id: "v", parentId: "padre", childId: "alu", estado: "aprobado", createdAt: ahora, updatedAt: ahora } as never);
});

test("un mensaje directo avisa al destinatario sin mostrar el texto", async () => {
  await enviarMensajeDirecto({ escuelaId: ESC, remitenteId: "dir", destinatarioId: "alu", body: "Tu nota de matemática es 4" });
  await new Promise((r) => setTimeout(r, 20));
  assert.equal(enviados.length, 1);
  assert.deepEqual(enviados[0].tokens, ["ExponentPushToken[alu]"]);
  assert.doesNotMatch(enviados[0].aviso.cuerpo, /matemática|nota/);
  assert.equal(enviados[0].aviso.data?.pantalla, "mensajes");
});

test("publicar un cobro avisa a la familia que paga", async () => {
  const token = tokenFor({ id: "dir", role: "DIRECTIVO", schoolId: ESC });
  const cobro = await jsonRequest(baseUrl, "POST", "/api/cobros", { token, body: { concepto: "Cuota", montoUnitario: 1000 } });
  const id = (cobro.body as { id: string }).id;
  const pub = await jsonRequest(baseUrl, "POST", `/api/cobros/${id}/publicar`, { token, body: { aulaId: "aula" } });
  assert.equal(pub.status, 200, JSON.stringify(pub.body));
  await new Promise((r) => setTimeout(r, 20));
  assert.equal(enviados.length, 1);
  assert.deepEqual(enviados[0].tokens, ["ExponentPushToken[padre]"]);
  assert.doesNotMatch(enviados[0].aviso.cuerpo, /1000|\$/);
});
