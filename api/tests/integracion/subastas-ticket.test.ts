/**
 * Subastas por ticket y reventa entre alumnos.
 *
 *  - El docente crea una subasta por ticket hasta el límite (50% de los alumnos, mínimo 2).
 *  - El precio inicial lo calcula el servidor con las monedas del aula.
 *  - Gana la puja que más paga; no hay premio de ranking que le devuelva el pago.
 *  - Reventa: el comprador paga el precio, el vendedor cobra el 90% y el 10% se quema.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

const ESC = "esc-st";
const AULA = "aula-st";
const MOD = "mod-st";
const DOCENTE = "st-docente";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const futuro = () => new Date(Date.now() + 7 * 86_400_000).toISOString();
const tAlumno = (id: string) => tokenFor({ id, role: "STUDENT", schoolId: ESC });
const tDocente = (id = DOCENTE) => tokenFor({ id, role: "TEACHER", schoolId: ESC });

before(async () => {
  const { economia } = await import("../../src/routes/economia");
  const { subastasTicket } = await import("../../src/routes/subastas-ticket");
  const srv = await startServer([economia, subastasTicket]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

const limpiar = () => {
  resetPrisma();
  for (const t of [
    prisma.economiaSaldo, prisma.economiaTransaccion, prisma.economiaExamen, prisma.economiaExamenPuja,
    prisma.economiaExamenPunto, prisma.economiaIntercambio, prisma.economiaAuditoria,
  ]) t.rows = [];
};
const sembrarAula = (alumnos: string[]) => {
  prisma.escuela.rows.push({ id: ESC, name: ESC, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC, name: "5A", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  prisma.modulo.rows.push({ id: MOD, slug: "m", titulo: "Examen", isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: ESC });
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: DOCENTE, rolEnClase: "TEACHER" });
  for (const id of alumnos) {
    seedUser({ id, role: "STUDENT", schoolId: ESC });
    prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: id, rolEnClase: "STUDENT" });
  }
};
const fondear = (id: string, saldo: number) =>
  prisma.economiaSaldo.rows.push({ usuarioId: id, saldo, moneda: "PF", updatedAt: nowIso() } as never);
const saldoDe = (id: string) =>
  (prisma.economiaSaldo.rows.find((r) => (r as { usuarioId: string }).usuarioId === id) as { saldo?: number } | undefined)?.saldo ?? 0;
const alumnosN = (n: number) => Array.from({ length: n }, (_, i) => `st-a${i + 1}`);

// ── creación ───────────────────────────────────────────────────────────────

describe("crear subastas", () => {
  beforeEach(limpiar);
  const crear = (extra: Record<string, unknown> = {}, token = tDocente()) =>
    jsonRequest(baseUrl, "POST", "/api/economia/subastas-ticket", {
      token, body: { aulaId: AULA, moduloId: MOD, fechaExamen: futuro(), ...extra },
    });
  const estado = (token = tDocente()) =>
    jsonRequest(baseUrl, "GET", `/api/economia/subastas-ticket/estado?aulaId=${AULA}&moduloId=${MOD}`, { token });

  test("se crean subastas hasta el límite: 10 alumnos → 5; la sexta se rechaza", async () => {
    sembrarAula(alumnosN(10));
    for (let i = 1; i <= 5; i++) {
      const r = await crear();
      assert.equal(r.status, 201, JSON.stringify(r.body));
      assert.deepEqual(
        [(r.body as { creadas: number }).creadas, (r.body as { limite: number }).limite],
        [i, 5]
      );
    }
    const sexta = await crear();
    assert.equal(sexta.status, 409);
    assert.deepEqual(sexta.body, { error: "limite_de_subastas", limite: 5, creadas: 5 });
    const e = (await estado()).body as { puedeCrear: boolean; restantes: number };
    assert.deepEqual([e.puedeCrear, e.restantes], [false, 0]);
  });

  test("el límite mínimo es 2 aunque haya pocos alumnos", async () => {
    sembrarAula(alumnosN(3));
    assert.equal((await crear()).status, 201);
    assert.equal((await crear()).status, 201);
    assert.equal((await crear()).status, 409);
  });

  test("el precio inicial sale de las monedas del aula (promedio por alumno × 25%)", async () => {
    sembrarAula(alumnosN(4));
    [100, 200, 0, 100].forEach((s, i) => fondear(`st-a${i + 1}`, s));
    const e = (await estado()).body as { precioInicial: number; monedasAula: number };
    assert.deepEqual([e.monedasAula, e.precioInicial], [400, 25]);
    const r = await crear({ precioInicial: 1 }); // el cliente no puede fijarlo
    assert.equal((r.body as { precioInicial: number }).precioInicial, 25);
    const guardado = JSON.parse((prisma.economiaExamen.rows[0] as { json: string }).json);
    assert.deepEqual([guardado.modo, guardado.precioInicial, guardado.impuestoTasa], ["ticket", 25, 0]);
  });

  test("dos clics a la vez con un solo lugar libre: solo uno crea", async () => {
    sembrarAula(alumnosN(3)); // límite 2
    await crear();
    const [x, y] = await Promise.all([crear(), crear()]);
    assert.deepEqual([x.status, y.status].sort(), [201, 409]);
    assert.equal(prisma.economiaExamen.rows.length, 2);
  });

  test("solo el docente del aula crea: alumno 403, docente ajeno 403; módulo y fecha se validan", async () => {
    sembrarAula(alumnosN(4));
    assert.equal((await crear({}, tAlumno("st-a1"))).status, 403);
    seedUser({ id: "otro-doc", role: "TEACHER", schoolId: ESC });
    assert.equal((await crear({}, tDocente("otro-doc"))).status, 403);
    assert.equal((await crear({ moduloId: "no-existe" })).status, 400);
    assert.equal((await crear({ fechaExamen: "2020-01-01T00:00:00.000Z" })).status, 400);
    assert.equal(prisma.economiaExamen.rows.length, 0);
  });
});

// ── pujas y cierre ─────────────────────────────────────────────────────────

describe("pujas y cierre de una subasta por ticket", () => {
  beforeEach(limpiar);
  const crear = async () =>
    (await jsonRequest(baseUrl, "POST", "/api/economia/subastas-ticket", {
      token: tDocente(), body: { aulaId: AULA, moduloId: MOD, fechaExamen: futuro() },
    })).body as { id: string };
  const pujar = (subastaId: string, id: string, monto: number, puntos = 1) =>
    jsonRequest(baseUrl, "POST", `/api/economia/examenes/${subastaId}/pujas`, {
      token: tAlumno(id), body: { usuarioId: id, puntos, montoPorPunto: monto },
    });
  const cerrar = (subastaId: string) =>
    jsonRequest(baseUrl, "POST", `/api/economia/examenes/${subastaId}/cerrar`, { token: tDocente() });
  const billetera = (id: string) =>
    prisma.economiaExamenPunto.rows
      .map((r) => JSON.parse((r as { json: string }).json))
      .find((b) => b.usuarioId === id);

  test("una puja por 1 ticket, una sola vez por subasta", async () => {
    sembrarAula(alumnosN(4)); alumnosN(4).forEach((id) => fondear(id, 500));
    const { id } = await crear();
    assert.equal((await pujar(id, "st-a1", 130, 2)).status, 400, "no se puja por 2 tickets");
    assert.equal((await pujar(id, "st-a1", 100)).status, 400, "por debajo del precio inicial (125)");
    assert.equal((await pujar(id, "st-a1", 130)).status, 201);
    assert.equal((await pujar(id, "st-a1", 140)).status, 409, "ya pujó en esta subasta");
  });

  test("un alumno no puede pedir más de 2 tickets entre todas las subastas del módulo", async () => {
    sembrarAula(alumnosN(10)); alumnosN(10).forEach((id) => fondear(id, 500));
    const [s1, s2, s3] = [await crear(), await crear(), await crear()];
    assert.equal((await pujar(s1.id, "st-a1", 130)).status, 201);
    assert.equal((await pujar(s2.id, "st-a1", 130)).status, 201);
    assert.equal((await pujar(s3.id, "st-a1", 130)).status, 400);
    assert.equal((await pujar(s3.id, "st-a2", 130)).status, 201, "otro alumno sí puede");
  });

  test("gana la puja que más paga, paga lo que pujó y no hay premio de ranking", async () => {
    sembrarAula(alumnosN(4)); alumnosN(4).forEach((id) => fondear(id, 500));
    const { id } = await crear();
    await pujar(id, "st-a1", 130);
    await pujar(id, "st-a2", 180);
    await pujar(id, "st-a3", 150);
    const r = await cerrar(id);
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(saldoDe("st-a2"), 320, "ganador: paga 180 y no recupera nada");
    assert.equal(saldoDe("st-a1"), 500);
    assert.equal(saldoDe("st-a3"), 500);
    assert.equal(billetera("st-a2").tickets, 1);
    assert.equal(billetera("st-a1"), undefined);
    assert.equal(
      prisma.economiaTransaccion.rows.filter((t) => (t as { tipo: string }).tipo === "credito").length,
      0,
      "ningún crédito: el pago del ticket queda quemado"
    );
    const estados = prisma.economiaExamenPuja.rows.map((p) => {
      const j = JSON.parse((p as { json: string }).json);
      return `${j.usuarioId}:${j.motivoRechazo ?? j.estado}`;
    }).sort();
    assert.deepEqual(estados, ["st-a1:sin_cupo", "st-a2:aceptada", "st-a3:sin_cupo"]);
  });
});

// ── reventa ────────────────────────────────────────────────────────────────

describe("reventa entre alumnos", () => {
  const VENDEDOR = "st-a1";
  const COMPRADOR = "st-a2";
  const SUBASTA = "sub-cerrada";

  beforeEach(() => {
    limpiar();
    sembrarAula(alumnosN(4));
    prisma.economiaExamen.rows.push({
      id: SUBASTA,
      json: JSON.stringify({ id: SUBASTA, aulaId: AULA, moduloId: MOD, modo: "ticket", estado: "cerrado", maxCompra: 2, updatedAt: nowIso() }),
      createdAt: nowIso(),
    } as never);
  });

  const darTicket = (id: string, tickets = 1, canjeados = 0) =>
    prisma.economiaExamenPunto.rows.push({
      id: `w-${id}`, examenId: SUBASTA, updatedAt: nowIso(),
      json: JSON.stringify({ usuarioId: id, examenId: SUBASTA, tickets, canjeados, puntos: 0 }),
    } as never);
  const tickets = (id: string) => {
    const f = prisma.economiaExamenPunto.rows.find((r) => JSON.parse((r as { json: string }).json).usuarioId === id);
    return f ? JSON.parse((f as { json: string }).json).tickets : 0;
  };
  const ofrecer = (precio: unknown, receptorId = COMPRADOR, vendedor = VENDEDOR) =>
    jsonRequest(baseUrl, "POST", "/api/economia/tickets/reventa", {
      token: tAlumno(vendedor), body: { aulaId: AULA, moduloId: MOD, receptorId, precio },
    });
  const aceptar = (id: string, comprador = COMPRADOR) =>
    jsonRequest(baseUrl, "POST", `/api/economia/tickets/reventa/${id}/aceptar`, { token: tAlumno(comprador) });

  test("el comprador paga 100: el vendedor cobra 90 y 10 se queman; el ticket cambia de dueño", async () => {
    darTicket(VENDEDOR); fondear(VENDEDOR, 0); fondear(COMPRADOR, 500);
    const o = await ofrecer(100);
    assert.equal(o.status, 201, JSON.stringify(o.body));
    assert.deepEqual([(o.body as { comision: number }).comision, (o.body as { netoParaElVendedor: number }).netoParaElVendedor], [10, 90]);
    const a = await aceptar((o.body as { id: string }).id);
    assert.equal(a.status, 200, JSON.stringify(a.body));
    assert.equal(saldoDe(COMPRADOR), 400);
    assert.equal(saldoDe(VENDEDOR), 90);
    assert.deepEqual([tickets(VENDEDOR), tickets(COMPRADOR)], [0, 1]);
    const quemado = prisma.economiaTransaccion.rows
      .filter((t) => /comision_quemada/.test((t as { motivo: string }).motivo))
      .reduce((acc, t) => acc + (t as { monto: number }).monto, 0);
    assert.equal(quemado, 10);
  });

  test("sin tickets sin usar no se puede ofrecer; tampoco más ofertas que tickets", async () => {
    fondear(COMPRADOR, 500);
    assert.equal((await ofrecer(50)).status, 409);
    darTicket(VENDEDOR, 1, 1); // el único ya lo canjeó
    assert.equal((await ofrecer(50)).status, 409);
    prisma.economiaExamenPunto.rows = [];
    darTicket(VENDEDOR, 1, 0);
    assert.equal((await ofrecer(50)).status, 201);
    assert.equal((await ofrecer(50, "st-a3")).status, 409, "ya tiene una oferta pendiente por su único ticket");
  });

  test("solo entre alumnos del aula, precio válido, y no a uno mismo", async () => {
    darTicket(VENDEDOR);
    seedUser({ id: "intruso", role: "STUDENT", schoolId: ESC });
    assert.equal((await ofrecer(50, "intruso")).status, 403);
    assert.equal((await ofrecer(50, VENDEDOR)).status, 400);
    for (const p of [0, -5, "50", null, 1e12]) assert.equal((await ofrecer(p)).status, 400, String(p));
  });

  test("solo el comprador acepta; el endpoint viejo de intercambios no sirve para tickets", async () => {
    darTicket(VENDEDOR); fondear(COMPRADOR, 500);
    const id = ((await ofrecer(100)).body as { id: string }).id;
    assert.equal((await aceptar(id, VENDEDOR)).status, 403);
    assert.equal((await aceptar(id, "st-a3")).status, 403);
    const viejo = await jsonRequest(baseUrl, "POST", `/api/economia/intercambios/${id}/aceptar`, { token: tDocente() });
    assert.equal(viejo.status, 400);
    assert.equal(tickets(VENDEDOR), 1);
  });

  test("sin saldo suficiente: 400 y no se mueve nada (ni ticket ni monedas)", async () => {
    darTicket(VENDEDOR); fondear(VENDEDOR, 0); fondear(COMPRADOR, 95);
    const id = ((await ofrecer(100)).body as { id: string }).id;
    const a = await aceptar(id);
    assert.equal(a.status, 400);
    assert.equal(saldoDe(COMPRADOR), 95);
    assert.equal(saldoDe(VENDEDOR), 0);
    assert.deepEqual([tickets(VENDEDOR), tickets(COMPRADOR)], [1, 0]);
    // sigue pendiente: con saldo después, se puede aceptar
    prisma.economiaSaldo.rows.find((r) => (r as { usuarioId: string }).usuarioId === COMPRADOR)!.saldo = 500;
    assert.equal((await aceptar(id)).status, 200);
  });

  test("el comprador no puede pasar de 2 tickets por examen", async () => {
    darTicket(VENDEDOR); fondear(COMPRADOR, 500);
    prisma.economiaExamenPunto.rows.push({
      id: "w-comprador", examenId: SUBASTA, updatedAt: nowIso(),
      json: JSON.stringify({ usuarioId: COMPRADOR, examenId: SUBASTA, tickets: 2, canjeados: 0 }),
    } as never);
    const id = ((await ofrecer(100)).body as { id: string }).id;
    const a = await aceptar(id);
    assert.equal(a.status, 409);
    assert.equal(saldoDe(COMPRADOR), 500);
    assert.equal(tickets(VENDEDOR), 1);
  });

  test("dos aceptaciones simultáneas: se cumple una sola vez", async () => {
    darTicket(VENDEDOR); fondear(VENDEDOR, 0); fondear(COMPRADOR, 500);
    const id = ((await ofrecer(100)).body as { id: string }).id;
    const [x, y] = await Promise.all([aceptar(id), aceptar(id)]);
    assert.equal([x.status, y.status].filter((s) => s === 200).length, 1, JSON.stringify([x.body, y.body]));
    assert.equal(saldoDe(COMPRADOR), 400);
    assert.equal(saldoDe(VENDEDOR), 90);
    assert.deepEqual([tickets(VENDEDOR), tickets(COMPRADOR)], [0, 1]);
  });
});
