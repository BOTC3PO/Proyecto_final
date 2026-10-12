/**
 * C3 — reportes v2. El boletín (nombres y notas de menores), la asistencia, el progreso y el resumen de la
 * escuela no tenían ningún control de rol: cualquier usuario con sesión los leía, de cualquier aula. Y el
 * reporte de progreso sumaba el avance de todos los alumnos de la plataforma, no solo el del aula.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC_A = "esc-rv-a";
const ESC_B = "esc-rv-b";
const AULA_A = "aula-rv-a";
const AULA_OTRA = "aula-rv-otra";
const DOC_A = "rv-doc-a";
const DOC_A2 = "rv-doc-a2";
const DOC_B = "rv-doc-b";
const DIR_A = "rv-dir-a";
const ALU_A = "rv-alu-a";
const ALU_OTRA = "rv-alu-otra";
const ADMIN = "rv-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });
const get = (path: string, token: string) => jsonRequest(baseUrl, "GET", path, { token });

before(async () => {
  const { reportesV2 } = await import("../../src/routes/reportes-v2");
  const srv = await startServer([reportesV2]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_A2, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: DIR_A, role: "DIRECTIVO", schoolId: ESC_A });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ALU_OTRA, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  for (const [id, nombre] of [[AULA_A, "A"], [AULA_OTRA, "Otra"]] as const) {
    prisma.clase.rows.push({ id, escuelaId: ESC_A, name: nombre, isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  }
  prisma.claseMiembro.rows.push(
    { claseId: AULA_A, usuarioId: DOC_A, rolEnClase: "TEACHER" },
    { claseId: AULA_A, usuarioId: ALU_A, rolEnClase: "STUDENT" },
    { claseId: AULA_OTRA, usuarioId: ALU_OTRA, rolEnClase: "STUDENT" }
  );
  prisma.modulo.rows.push({ id: "mod-rv", titulo: "Mod", slug: "mod-rv", isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.claseModulo.rows.push({ claseId: AULA_A, moduloId: "mod-rv", assignedAt: nowIso(), required: false } as never);
});

const REPORTES = ["boletin", "asistencia", "progreso"];

describe("reportes por aula", () => {
  for (const reporte of REPORTES) {
    test(`${reporte}: el docente del aula, el directivo de la escuela y el admin sí; el resto no`, async () => {
      const ruta = `/api/v2/reportes/${reporte}/${AULA_A}`;
      for (const t of [tok(DOC_A, "TEACHER", ESC_A), tok(DIR_A, "DIRECTIVO", ESC_A), tok(ADMIN, "ADMIN", null)]) {
        const r = await get(ruta, t);
        assert.equal(r.status, 200, `${reporte}: ${JSON.stringify(r.body)}`);
      }
      for (const [quien, t] of [
        ["alumno del aula", tok(ALU_A, "STUDENT", ESC_A)],
        ["alumno de otra aula", tok(ALU_OTRA, "STUDENT", ESC_A)],
        ["docente de la escuela que no es del aula", tok(DOC_A2, "TEACHER", ESC_A)],
        ["docente de otra escuela", tok(DOC_B, "TEACHER", ESC_B)],
      ] as const) {
        const r = await get(ruta, t);
        assert.equal(r.status, 403, `${reporte} como ${quien}: ${JSON.stringify(r.body)}`);
      }
    });

    test(`${reporte}: un aula que no existe da 404`, async () => {
      const r = await get(`/api/v2/reportes/${reporte}/no-existe`, tok(DOC_A, "TEACHER", ESC_A));
      assert.equal(r.status, 404);
    });
  }

  test("el boletín no entrega nombres ni notas a un alumno", async () => {
    prisma.usuario.rows.find((u) => (u as { id: string }).id === ALU_OTRA)!.fullName = "Compañero Secreto" as never;
    const r = await get(`/api/v2/reportes/boletin/${AULA_OTRA}`, tok(ALU_A, "STUDENT", ESC_A));
    assert.equal(r.status, 403);
    assert.ok(!JSON.stringify(r.body).includes("Compañero Secreto"));
  });

  test("el progreso cuenta solo a los alumnos del aula, no a todos los que cursan el módulo", async () => {
    prisma.progresoModulo.rows.push(
      { id: "p1", usuarioId: ALU_A, moduloId: "mod-rv", aulaId: AULA_A, status: "completado", updatedAt: nowIso() } as never,
      { id: "p2", usuarioId: ALU_OTRA, moduloId: "mod-rv", aulaId: AULA_OTRA, status: "completado", updatedAt: nowIso() } as never,
      { id: "p3", usuarioId: "otro-de-otra-escuela", moduloId: "mod-rv", aulaId: "aula-ajena", status: "iniciado", updatedAt: nowIso() } as never
    );
    const r = await get(`/api/v2/reportes/progreso/${AULA_A}`, tok(DOC_A, "TEACHER", ESC_A));
    const mod = (r.body as { modulos: Array<{ total: number; completados: number }> }).modulos[0];
    assert.equal(mod.total, 1);
    assert.equal(mod.completados, 1);
  });
});

describe("resumen de la escuela", () => {
  test("lo ven el directivo y el admin; no un docente, un alumno ni un padre", async () => {
    assert.equal((await get("/api/v2/reportes/escuela", tok(DIR_A, "DIRECTIVO", ESC_A))).status, 200);
    assert.equal((await get("/api/v2/reportes/escuela", tok(ADMIN, "ADMIN", null))).status, 200);
    for (const t of [tok(DOC_A, "TEACHER", ESC_A), tok(ALU_A, "STUDENT", ESC_A)]) {
      assert.equal((await get("/api/v2/reportes/escuela", t)).status, 403);
    }
  });
});
