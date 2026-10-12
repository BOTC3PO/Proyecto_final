/**
 * K9 — cuántas monedas da un módulo lo define SOLO el administrador: una tabla fija por dificultad (más
 * dificultad, más monedas) y, opcionalmente, un monto propio por módulo. Los docentes no lo cambian ni
 * acreditan montos a mano.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";
import { acreditarPorPrimerCuestionario } from "../../src/lib/economia-alta";

const ESC_A = "esc-k9-a";
const ESC_B = "esc-k9-b";
const AULA_A = "aula-k9-a";
const DOC_A = "k9-doc-a";
const DOC_B = "k9-doc-b";
const ALU_A = "k9-alu-a";
const ADMIN = "k9-admin";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });

before(async () => {
  const { economia } = await import("../../src/routes/economia");
  const srv = await startServer([economia]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const t of [prisma.economiaSaldo, prisma.economiaTransaccion, prisma.economiaRecompensa, prisma.economiaConfig, prisma.economiaAuditoria]) {
    (t as { rows: unknown[] }).rows = [];
  }
  for (const id of [ESC_A, ESC_B]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: DOC_A, role: "TEACHER", schoolId: ESC_A });
  seedUser({ id: DOC_B, role: "TEACHER", schoolId: ESC_B });
  seedUser({ id: ALU_A, role: "STUDENT", schoolId: ESC_A });
  seedUser({ id: ADMIN, role: "ADMIN", schoolId: null });
  prisma.clase.rows.push({ id: AULA_A, escuelaId: ESC_A, name: "A", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.claseMiembro.rows.push({ claseId: AULA_A, usuarioId: DOC_A, rolEnClase: "TEACHER" }, { claseId: AULA_A, usuarioId: ALU_A, rolEnClase: "STUDENT" });
  prisma.modulo.rows.push({ id: "mod-k9", titulo: "Mod", slug: "mod-k9", ownerUserId: DOC_A, visibility: "escuela", schoolId: ESC_A, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  const quiz = (id: string, dificultad: string | null) => {
    prisma.quiz.rows.push({ id, moduleId: "mod-k9", ownerUserId: DOC_A, title: id, currentVersionId: `ver-${id}` } as never);
    prisma.quizVersion.rows.push({ id: `ver-${id}`, quizId: id, versionNumber: 1, settings: dificultad ? JSON.stringify({ dificultadInicial: dificultad }) : null } as never);
  };
  quiz("q-basico", "basico");
  quiz("q-medio", "intermedio");
  quiz("q-dificil", "avanzado");
  quiz("q-sin-config", null);
});

const saldo = (id: string) => (prisma.economiaSaldo.rows.find((s) => (s as { usuarioId: string }).usuarioId === id) as { saldo: number } | undefined)?.saldo ?? 0;

describe("la tabla fija por dificultad", () => {
  test("más dificultad, más monedas (10 / 20 / 30 por defecto)", async () => {
    const montos: number[] = [];
    for (const q of ["q-basico", "q-medio", "q-dificil"]) {
      montos.push((await acreditarPorPrimerCuestionario({ usuarioId: `u-${q}`, quizId: q, schoolId: ESC_A }))!.monto);
    }
    assert.deepEqual(montos, [10, 20, 30]);
    assert.equal((await acreditarPorPrimerCuestionario({ usuarioId: "u-x", quizId: "q-sin-config" }))!.monto, 10, "sin dificultad configurada vale la básica");
  });

  test("no se paga dos veces el mismo cuestionario", async () => {
    assert.ok(await acreditarPorPrimerCuestionario({ usuarioId: ALU_A, quizId: "q-medio" }));
    assert.equal(await acreditarPorPrimerCuestionario({ usuarioId: ALU_A, quizId: "q-medio" }), null);
    assert.equal(saldo(ALU_A), 20);
  });

  test("el admin cambia la tabla desde la configuración y el cambio vale para todos", async () => {
    const r = await jsonRequest(baseUrl, "PATCH", "/api/economia/config", { token: tok(ADMIN, "ADMIN", null), body: { recompensasPorDificultad: { basico: 5, intermedio: 15, avanzado: 50 } } });
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal((await acreditarPorPrimerCuestionario({ usuarioId: "u1", quizId: "q-basico" }))!.monto, 5);
    assert.equal((await acreditarPorPrimerCuestionario({ usuarioId: "u2", quizId: "q-dificil" }))!.monto, 50);
  });

  test("un docente no cambia la tabla", async () => {
    const r = await jsonRequest(baseUrl, "PATCH", "/api/economia/config", { token: tok(DOC_A, "TEACHER", ESC_A), body: { recompensasPorDificultad: { basico: 999, intermedio: 999, avanzado: 999 } } });
    assert.ok([401, 403].includes(r.status), String(r.status));
    assert.equal((await acreditarPorPrimerCuestionario({ usuarioId: "u1", quizId: "q-basico" }))!.monto, 10);
  });
});

describe("monto propio de un módulo (solo el ADMIN)", () => {
  const recompensa = { tipo: "modulo", referenciaId: "mod-k9", nombre: "Módulo k9", monto: 77, moneda: "PF", activo: true };

  test("el ADMIN lo fija y gana sobre la tabla de dificultad", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/economia/recompensas", { token: tok(ADMIN, "ADMIN", null), body: recompensa });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    assert.equal((await acreditarPorPrimerCuestionario({ usuarioId: "u1", quizId: "q-dificil" }))!.monto, 77);
  });

  test("un recompensa desactivada no cuenta", async () => {
    await jsonRequest(baseUrl, "POST", "/api/economia/recompensas", { token: tok(ADMIN, "ADMIN", null), body: { ...recompensa, activo: false } });
    assert.equal((await acreditarPorPrimerCuestionario({ usuarioId: "u1", quizId: "q-dificil" }))!.monto, 30);
  });

  test("un docente (de cualquier escuela) no crea, cambia ni borra recompensas", async () => {
    const creada = await jsonRequest(baseUrl, "POST", "/api/economia/recompensas", { token: tok(ADMIN, "ADMIN", null), body: recompensa });
    const id = (creada.body as { id: string }).id;
    for (const t of [tok(DOC_A, "TEACHER", ESC_A), tok(DOC_B, "TEACHER", ESC_B)]) {
      assert.ok([401, 403].includes((await jsonRequest(baseUrl, "POST", "/api/economia/recompensas", { token: t, body: recompensa })).status));
      assert.ok([401, 403].includes((await jsonRequest(baseUrl, "PUT", `/api/economia/recompensas/${id}`, { token: t, body: { monto: 5000 } })).status));
      assert.ok([401, 403].includes((await jsonRequest(baseUrl, "PATCH", `/api/economia/recompensas/${id}`, { token: t, body: { monto: 5000 } })).status));
      assert.ok([401, 403].includes((await jsonRequest(baseUrl, "DELETE", `/api/economia/recompensas/${id}`, { token: t })).status));
    }
    assert.equal(prisma.economiaRecompensa.rows.length, 1);
    assert.equal((prisma.economiaRecompensa.rows[0] as { monto: number }).monto, 77);
  });
});

describe("créditos manuales", () => {
  const credito = (monto: number, aulaId = AULA_A, schoolId = ESC_A) => ({
    usuarioId: ALU_A, aulaId, schoolId, tipo: "credito", monto, moneda: "PF", motivo: "modulo:mod-k9", referenciaId: "mod-k9"
  });

  test("el monto lo fija el servidor: pedir 150 acredita lo que definió el admin", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/economia/transacciones", { token: tok(DOC_A, "TEACHER", ESC_A), body: credito(150) });
    assert.equal(r.status, 201, JSON.stringify(r.body));
    assert.equal((r.body as { monto: number }).monto, 10);
    assert.equal(saldo(ALU_A), 10);
  });

  test("con un monto del admin para el módulo, ese es el que se acredita", async () => {
    await jsonRequest(baseUrl, "POST", "/api/economia/recompensas", { token: tok(ADMIN, "ADMIN", null), body: { tipo: "modulo", referenciaId: "mod-k9", nombre: "x", monto: 40, moneda: "PF", activo: true } });
    const r = await jsonRequest(baseUrl, "POST", "/api/economia/transacciones", { token: tok(DOC_A, "TEACHER", ESC_A), body: credito(1) });
    assert.equal((r.body as { monto: number }).monto, 40);
  });

  test("un docente de otra escuela no acredita monedas a un alumno ajeno", async () => {
    const r = await jsonRequest(baseUrl, "POST", "/api/economia/transacciones", { token: tok(DOC_B, "TEACHER", ESC_B), body: credito(10) });
    assert.equal(r.status, 403, JSON.stringify(r.body));
    assert.equal(saldo(ALU_A), 0);
  });
});
