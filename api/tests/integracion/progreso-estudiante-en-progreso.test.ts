/**
 * FIX-PROGRESO-ESTADO — GET /api/progreso/estudiante comparaba el
 * status de `ProgresoModulo` contra "en-curso" (guion), pero el
 * valor real que escribe quiz-attempts.ts (y que las otras dos
 * funciones de progreso.ts ya usan correctamente) es "en_progreso"
 * (guion bajo). El check nunca matcheaba: todo módulo con avance
 * real pero no completado caía al fallback "0%", contradiciendo
 * directamente a aula.tsx (ContinuarCard), que sí usa el valor
 * correcto y mostraba 50% para el mismo módulo/alumno.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const SCHOOL = "esc-prog-est";
const ALUMNO = "alumno-prog-est";
const MODULO_EN_PROGRESO = "mod-prog-est-en-progreso";
const MODULO_COMPLETADO = "mod-prog-est-completado";

before(async () => {
  const { progreso } = await import("../../src/routes/progreso");
  const server = await startServer([progreso]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: ALUMNO, role: "USER", schoolId: SCHOOL });
  const now = new Date().toISOString();
  prisma.modulo.rows.push(
    { id: MODULO_EN_PROGRESO, titulo: "Módulo en progreso", createdAt: now, updatedAt: now },
    { id: MODULO_COMPLETADO, titulo: "Módulo completado", createdAt: now, updatedAt: now }
  );
  prisma.progresoModulo.rows.push(
    { id: "pm-1", usuarioId: ALUMNO, moduloId: MODULO_EN_PROGRESO, status: "en_progreso", updatedAt: now },
    { id: "pm-2", usuarioId: ALUMNO, moduloId: MODULO_COMPLETADO, status: "completado", updatedAt: now }
  );
});

test("FIX-PROGRESO-ESTADO: un módulo en_progreso se refleja como 'En progreso', no '0%'", async () => {
  const res = await jsonRequest(baseUrl, "GET", "/api/progreso/estudiante", {
    token: tokenFor({ id: ALUMNO, role: "USER", schoolId: SCHOOL }),
  });
  assert.equal(res.status, 200);
  const avances = (res.body as { avances: Array<{ modulo: string; progreso: string }> }).avances;

  const enProgreso = avances.find((a) => a.modulo === "Módulo en progreso");
  assert.ok(enProgreso, "el módulo en progreso debe estar en la lista");
  assert.equal(enProgreso?.progreso, "En progreso");

  const completado = avances.find((a) => a.modulo === "Módulo completado");
  assert.equal(completado?.progreso, "100%");
});
