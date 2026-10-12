/**
 * C3 — las herramientas pedagógicas (panel de riesgo, modo aula, umbral) solo las usa quien gestiona el
 * aula o el módulo. Antes cualquier docente de cualquier escuela leía el panel de riesgo (nombres y
 * progreso de menores) de cualquier aula y cambiaba su modo aula o el umbral de un cuestionario ajeno.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-ped-a";
const ESC_B = "esc-ped-b";
const AULA_A = "aula-ped-a";
const DOC_A = "ped-doc-a";
const DOC_A2 = "ped-doc-a2"; // docente de la escuela A que NO es del aula
const DOC_B = "ped-doc-b";
const DIR_A = "ped-dir-a";
const ALU_A = "ped-alu-a";
const ADMIN = "ped-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { pedagogico } = await import("../../src/routes/pedagogico");
  const srv = await startServer([pedagogico]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const t of [prisma.modoAula, prisma.quizUmbral]) (t as { rows: unknown[] }).rows = [];
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_A2, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: DIR_A, role: "DIRECTIVO", schoolId: ESC_A });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A, fullName: "Alumna Riesgo" } as never);
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.clase.rows.push({ id: AULA_A, escuelaId: ESC_A, name: "A", isDeleted: false, status: "ACTIVE", createdBy: DOC_A, createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.claseMiembro.rows.push(
    { claseId: AULA_A, usuarioId: DOC_A, rolEnClase: "TEACHER" },
    { claseId: AULA_A, usuarioId: ALU_A, rolEnClase: "STUDENT" }
  );
  // la alumna está "en riesgo": sin progreso completado
  prisma.progresoModulo.rows.push({ id: "pr1", usuarioId: ALU_A, moduloId: "m1", aulaId: AULA_A, status: "iniciado", updatedAt: nowIso() } as never);
  prisma.modulo.rows.push({ id: "mod-ped", titulo: "Mod", slug: "mod-ped", ownerUserId: DOC_A, visibility: "escuela", schoolId: ESC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
});

describe("panel de riesgo", () => {
  const ver = (token: string) => jsonRequest(baseUrl, "GET", `/api/pedagogico/riesgo/${AULA_A}`, { token });

  test("lo ve el docente del aula, el directivo de la escuela y el admin", async () => {
    for (const t of [tok(DOC_A, "TEACHER", ESC_A), tok(DIR_A, "DIRECTIVO", ESC_A), tok(ADMIN, "ADMIN", null)]) {
      const r = await ver(t);
      assert.equal(r.status, 200, JSON.stringify(r.body));
      assert.equal((r.body as { items: unknown[] }).items.length, 1);
    }
  });

  test("no lo ve un docente de otra escuela ni uno de la misma escuela que no es del aula", async () => {
    for (const t of [tok(DOC_B, "TEACHER", ESC_B), tok(DOC_A2, "TEACHER", ESC_A), tok(ALU_A, "STUDENT", ESC_A)]) {
      const r = await ver(t);
      assert.equal(r.status, 403, JSON.stringify(r.body));
      assert.ok(!JSON.stringify(r.body).includes("Alumna Riesgo"));
    }
  });
});

describe("modo aula", () => {
  const activar = (token: string) => jsonRequest(baseUrl, "POST", "/api/pedagogico/modo-aula", { token, body: { aulaId: AULA_A, activo: true } });

  test("lo activa el docente del aula; no uno de otra escuela ni el de la escuela que no es del aula", async () => {
    assert.equal((await activar(tok(DOC_B, "TEACHER", ESC_B))).status, 403);
    assert.equal((await activar(tok(DOC_A2, "TEACHER", ESC_A))).status, 403);
    assert.equal(prisma.modoAula.rows.length, 0);
    assert.equal((await activar(tok(DOC_A, "TEACHER", ESC_A))).status, 200);
    assert.equal((await activar(tok(DIR_A, "DIRECTIVO", ESC_A))).status, 200);
  });

  test("un aula inexistente da 404", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/pedagogico/modo-aula", { token: tok(DOC_A, "TEACHER", ESC_A), body: { aulaId: "no-existe", activo: true } });
    assert.equal(r.status, 404);
  });
});

describe("umbral de aprobación", () => {
  test("lo fija el dueño del módulo o su escuela; no un docente de otra escuela", async () => {
    const poner = (token: string) => jsonRequest(baseUrl, "POST", "/api/pedagogico/umbral", { token, body: { quizId: "q1", moduloId: "mod-ped", umbral: 90 } });
    assert.equal((await poner(tok(DOC_B, "TEACHER", ESC_B))).status, 403);
    assert.equal(prisma.quizUmbral.rows.length, 0);
    assert.equal((await poner(tok(DOC_A, "TEACHER", ESC_A))).status, 200);
    assert.equal((await poner(tok(DOC_A2, "TEACHER", ESC_A))).status, 200, "staff de la escuela dueña del módulo (visibilidad escuela)");
  });
});
