/**
 * Auditoría 11/2026 — economía.
 *  - Compras: cualquier docente (de cualquier escuela) descontaba saldo a un alumno ajeno.
 *  - Exámenes: el PATCH aceptaba `precioPromedio`/`estado`, y el cierre tomaba precios de exámenes de
 *    cualquier aula: un docente de otra escuela inflaba los premios del ranking.
 *  - Saldo, movimientos y puntos se leían de cualquier usuario.
 */
process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const futuro = () => new Date(Date.now() + 7 * 86_400_000).toISOString();
const tok = (id: string, role: string, school: string | null) => tokenFor({ id, role: role as never, schoolId: school });
const saldoDe = async (id: string) => ((await prisma.economiaSaldo.findFirst({ where: { usuarioId: id } })) as { saldo?: number } | null)?.saldo ?? 0;
const poner = async (id: string, saldo: number) => {
  const r = await prisma.economiaSaldo.updateMany({ where: { usuarioId: id }, data: { saldo } });
  if (r.count === 0) await prisma.economiaSaldo.create({ data: { usuarioId: id, saldo, moneda: "PF", updatedAt: nowIso() } });
};

before(async () => {
  const { economia } = await import("../../src/routes/economia");
  const srv = await startServer([economia]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

beforeEach(() => {
  resetPrisma();
  for (const t of [prisma.economiaCompra, prisma.economiaExamen, prisma.economiaExamenPuja, prisma.economiaExamenPunto, prisma.economiaAuditoria]) (t as { rows: unknown[] }).rows = [];
  for (const id of ["ec-esc-a", "ec-esc-b"]) prisma.escuela.rows.push({ id, name: id, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() } as never);
  seedUser({ id: "ec-doc-a", role: "TEACHER", schoolId: "ec-esc-a" });
  seedUser({ id: "ec-doc-b", role: "TEACHER", schoolId: "ec-esc-b" });
  seedUser({ id: "ec-alu-a", role: "STUDENT", schoolId: "ec-esc-a" });
  seedUser({ id: "ec-alu-b", role: "STUDENT", schoolId: "ec-esc-b" });
  seedUser({ id: "ec-padre", role: "PARENT", schoolId: null });
  seedUser({ id: "ec-admin", role: "ADMIN", schoolId: null });
  for (const [id, esc, doc, alu] of [["ec-aula-a", "ec-esc-a", "ec-doc-a", "ec-alu-a"], ["ec-aula-b", "ec-esc-b", "ec-doc-b", "ec-alu-b"]]) {
    prisma.clase.rows.push({ id, escuelaId: esc, name: id, isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
    prisma.claseMiembro.rows.push({ claseId: id, usuarioId: doc, rolEnClase: "TEACHER" } as never, { claseId: id, usuarioId: alu, rolEnClase: "STUDENT" } as never);
  }
  prisma.progresoModuloVinculo.rows.push({ id: "ec-v", parentId: "ec-padre", childId: "ec-alu-a", estado: "aprobado", createdAt: nowIso(), updatedAt: nowIso() } as never);
});

const compra = (token: string) =>
  jsonRequest(baseUrl, "POST", "/api/economia/compras", { token, body: { usuarioId: "ec-alu-a", aulaId: "ec-aula-a", schoolId: "ec-esc-a", concepto: "x", monto: 40 } });

test("compras: un docente de otra escuela no descuenta saldo; el de la escuela y el alumno sí", async () => {
  await poner("ec-alu-a", 100);
  assert.equal((await compra(tok("ec-doc-b", "TEACHER", "ec-esc-b"))).status, 403);
  assert.equal(await saldoDe("ec-alu-a"), 100);
  assert.equal((await compra(tok("ec-doc-a", "TEACHER", "ec-esc-a"))).status, 201);
  assert.equal((await compra(tok("ec-alu-a", "STUDENT", "ec-esc-a"))).status, 201);
  assert.equal(await saldoDe("ec-alu-a"), 20);
});

test("exámenes: un precio promedio editado en otra escuela no cambia los premios del cierre", async () => {
  const cerrarConVeneno = async (veneno: boolean) => {
    resetPrisma();
    for (const t of [prisma.economiaExamen, prisma.economiaExamenPuja, prisma.economiaExamenPunto, prisma.economiaTransaccion]) (t as { rows: unknown[] }).rows = [];
    prisma.clase.rows.push({ id: "ec-aula-a", escuelaId: "ec-esc-a", name: "a", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
    prisma.clase.rows.push({ id: "ec-aula-b", escuelaId: "ec-esc-b", name: "b", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
    prisma.claseMiembro.rows.push({ claseId: "ec-aula-a", usuarioId: "ec-alu-a", rolEnClase: "STUDENT" } as never);
    seedUser({ id: "ec-doc-a", role: "TEACHER", schoolId: "ec-esc-a" });
    seedUser({ id: "ec-doc-b", role: "TEACHER", schoolId: "ec-esc-b" });
    seedUser({ id: "ec-alu-a", role: "STUDENT", schoolId: "ec-esc-a" });
    await poner("ec-alu-a", 100);
    const eA = await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tok("ec-doc-a", "TEACHER", "ec-esc-a"), body: { nombre: "A", aulaId: "ec-aula-a", fechaExamen: futuro() } });
    assert.equal(eA.status, 201, JSON.stringify(eA.body));
    const exA = (eA.body as { id: string; precioInicial?: number }).id;
    const pi = (eA.body as { precioInicial?: number }).precioInicial ?? 1;
    const pj = await jsonRequest(baseUrl, "POST", `/api/economia/examenes/${exA}/pujas`, { token: tok("ec-alu-a", "STUDENT", "ec-esc-a"), body: { usuarioId: "ec-alu-a", puntos: 1, montoPorPunto: Math.max(pi, 10) } });
    assert.equal(pj.status, 201, JSON.stringify(pj.body));
    if (veneno) {
      await new Promise((r) => setTimeout(r, 5));
      const eB = await jsonRequest(baseUrl, "POST", "/api/economia/examenes", { token: tok("ec-doc-b", "TEACHER", "ec-esc-b"), body: { nombre: "B", aulaId: "ec-aula-b", fechaExamen: futuro() } });
      const idB = (eB.body as { id: string }).id;
      const p = await jsonRequest(baseUrl, "PATCH", `/api/economia/examenes/${idB}`, { token: tok("ec-doc-b", "TEACHER", "ec-esc-b"), body: { estado: "cerrado", precioPromedio: 1e9 } });
      assert.ok(p.status === 200 || p.status === 400);
      const doc = JSON.parse(String(prisma.economiaExamen.rows.find((r: any) => r.id === idB)!.json));
      assert.notEqual(doc.precioPromedio, 1e9);
      assert.notEqual(doc.estado, "cerrado");
    }
    const c = await jsonRequest(baseUrl, "POST", `/api/economia/examenes/${exA}/cerrar`, { token: tok("ec-doc-a", "TEACHER", "ec-esc-a"), body: {} });
    assert.equal(c.status, 200, JSON.stringify(c.body));
    return saldoDe("ec-alu-a");
  };
  const control = await cerrarConVeneno(false);
  const conVeneno = await cerrarConVeneno(true);
  assert.equal(conVeneno, control);
  assert.ok(conVeneno <= 100, "el premio no supera lo pagado");
});

test("saldo, movimientos y puntos: solo la persona, su familia, el personal de su aula o un ADMIN", async () => {
  const rutas = ["/api/economia/saldos", "/api/economia/transacciones", "/api/economia/examenes/puntos"].map((r) => `${r}?usuarioId=ec-alu-a`);
  for (const ruta of rutas) {
    for (const t of [tok("ec-alu-b", "STUDENT", "ec-esc-b"), tok("ec-doc-b", "TEACHER", "ec-esc-b")]) {
      assert.equal((await jsonRequest(baseUrl, "GET", ruta, { token: t })).status, 403, ruta);
    }
    for (const t of [tok("ec-alu-a", "STUDENT", "ec-esc-a"), tok("ec-doc-a", "TEACHER", "ec-esc-a"), tok("ec-padre", "PARENT", null), tok("ec-admin", "ADMIN", null)]) {
      const r = await jsonRequest(baseUrl, "GET", ruta, { token: t });
      assert.equal(r.status, 200, `${ruta} ${JSON.stringify(r.body)}`);
    }
  }
});
