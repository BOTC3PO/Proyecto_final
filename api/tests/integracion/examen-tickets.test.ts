/**
 * Tickets de examen.
 *
 *  - Oferta: 50% de los alumnos del aula, mínimo 2 (se reparte entre quienes más pagan).
 *  - Cada alumno puede comprar y canjear como máximo 2 tickets por examen.
 *  - Canje: solo tras entregar el examen, suma el 10% del puntaje máximo por ticket y sobrevive
 *    a la corrección manual posterior.
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-vblang";
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { after, before, beforeEach, describe, test } from "node:test";
import {
  bonusPorTickets,
  cupoTickets,
  precioInicialTicket,
  repartirCupo,
  topePorAlumno,
} from "../../src/lib/examen-tickets";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

// ── reglas puras ───────────────────────────────────────────────────────────

describe("reglas de tickets", () => {
  test("cupo: 50% de los alumnos, mínimo 2", () => {
    const casos: Array<[number, number]> = [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 3], [10, 5], [11, 6], [30, 15]];
    for (const [alumnos, esperado] of casos) assert.equal(cupoTickets(alumnos), esperado, `alumnos=${alumnos}`);
  });

  test("tope por alumno: máximo 2 aunque el examen permita más", () => {
    assert.equal(topePorAlumno(undefined), 2);
    assert.equal(topePorAlumno(10), 2);
    assert.equal(topePorAlumno(1), 1);
  });

  test("precio inicial: promedio de monedas por alumno × 25%", () => {
    assert.equal(precioInicialTicket(400, 4), 25);
    assert.equal(precioInicialTicket(1000, 8), 31.25);
    assert.equal(precioInicialTicket(100, 3), 8.33);
    assert.equal(precioInicialTicket(0, 10), 0);
    assert.equal(precioInicialTicket(500, 0), 0);
  });

  test("cada ticket suma 10% del puntaje máximo", () => {
    assert.equal(bonusPorTickets(1, 10), 1);
    assert.equal(bonusPorTickets(2, 4), 0.8);
    assert.equal(bonusPorTickets(0, 10), 0);
    assert.equal(bonusPorTickets(2, 0), 0);
  });

  test("repartirCupo: primero los que más pagan; la que no entra se salta", () => {
    const r = repartirCupo(
      [
        { id: "barata", usuarioId: "a", puntos: 1, montoPorPunto: 3, createdAt: "1" },
        { id: "cara", usuarioId: "b", puntos: 2, montoPorPunto: 9, createdAt: "2" },
        { id: "media", usuarioId: "c", puntos: 1, montoPorPunto: 5, createdAt: "3" },
      ],
      2
    );
    assert.deepEqual(r.aceptadas, ["cara"]);
    assert.deepEqual(r.sinCupo.sort(), ["barata", "media"]);
  });
});

// ── servidor ───────────────────────────────────────────────────────────────

const ESC = "esc-tk";
const AULA = "aula-tk";
const MOD = "mod-tk";
const QUIZ = "quiz-tk";
const QV = "qv-tk";
const DOCENTE = "tk-docente";
const A = "tk-alumno-a";
const EXAMEN = "ex-tk";

let baseUrl: string;
let close: () => Promise<void>;
const nowIso = () => new Date().toISOString();
const tAlumno = (id = A) => tokenFor({ id, role: "STUDENT", schoolId: ESC });
const tDocente = () => tokenFor({ id: DOCENTE, role: "TEACHER", schoolId: ESC });

before(async () => {
  const { quizAttempts } = await import("../../src/routes/quiz-attempts");
  const { examenTickets } = await import("../../src/routes/examen-tickets");
  const { economia } = await import("../../src/routes/economia");
  const srv = await startServer([quizAttempts, examenTickets, economia]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});
after(async () => { if (close) await close(); });

const sembrarAula = (alumnos: string[]) => {
  prisma.escuela.rows.push({ id: ESC, name: ESC, isDeleted: false, estadoVerificacion: "verificada", createdAt: nowIso() });
  prisma.clase.rows.push({ id: AULA, escuelaId: ESC, name: "5A", isDeleted: false, status: "ACTIVE", createdAt: nowIso(), updatedAt: nowIso() } as never);
  seedUser({ id: DOCENTE, role: "TEACHER", schoolId: ESC });
  prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: DOCENTE, rolEnClase: "TEACHER" });
  for (const id of alumnos) {
    seedUser({ id, role: "STUDENT", schoolId: ESC });
    prisma.claseMiembro.rows.push({ claseId: AULA, usuarioId: id, rolEnClase: "STUDENT" });
  }
};
const fondear = (id: string, saldo = 1000) =>
  prisma.economiaSaldo.rows.push({ usuarioId: id, saldo, moneda: "PF", updatedAt: nowIso() } as never);

// ── subasta: cupo y tope por alumno ────────────────────────────────────────

describe("subasta", () => {
  const futuro = () => new Date(Date.now() + 7 * 86_400_000).toISOString();
  const sembrarSubasta = (extra: Record<string, unknown> = {}) => {
    const examen = {
      id: EXAMEN, aulaId: AULA, moduloId: MOD, nombre: "Parcial", estado: "anunciado", subastaActiva: true,
      maxCompra: 2, impuestoTasa: 0.1, fechaExamen: futuro(), updatedAt: nowIso(), ...extra,
    };
    prisma.economiaExamen.rows.push({ id: EXAMEN, json: JSON.stringify(examen), createdAt: nowIso() } as never);
  };
  const pujar = (id: string, puntos: number, montoPorPunto: number) =>
    jsonRequest(baseUrl, "POST", `/api/economia/examenes/${EXAMEN}/pujas`, {
      token: tAlumno(id), body: { usuarioId: id, puntos, montoPorPunto },
    });
  const cerrar = () => jsonRequest(baseUrl, "POST", `/api/economia/examenes/${EXAMEN}/cerrar`, { token: tDocente() });
  const pujasPorEstado = () =>
    Object.fromEntries(prisma.economiaExamenPuja.rows.map((r) => {
      const j = JSON.parse((r as { json: string }).json);
      return [j.usuarioId, j.motivoRechazo ?? j.estado];
    }));

  beforeEach(() => {
    resetPrisma();
    for (const t of [prisma.economiaSaldo, prisma.economiaTransaccion, prisma.economiaExamen, prisma.economiaExamenPuja, prisma.economiaExamenPunto, prisma.economiaAuditoria]) t.rows = [];
  });

  test("al crear el examen, el módulo enlazado tiene que existir", async () => {
    sembrarAula([A]);
    prisma.modulo.rows.push({ id: MOD, slug: "m", titulo: "Examen", isDeleted: false, createdAt: nowIso(), updatedAt: nowIso() } as never);
    const crear = (moduloId: string) =>
      jsonRequest(baseUrl, "POST", "/api/economia/examenes", {
        token: tDocente(),
        body: { aulaId: AULA, nombre: "Parcial", fechaExamen: futuro(), moduloId },
      });
    assert.equal((await crear("no-existe")).status, 400);
    assert.equal((await crear(MOD)).status, 201);
  });

  describe("precio inicial según las monedas del aula", () => {
    const crear = (extra: Record<string, unknown> = {}) =>
      jsonRequest(baseUrl, "POST", "/api/economia/examenes", {
        token: tDocente(),
        body: { id: EXAMEN, aulaId: AULA, nombre: "Parcial", fechaExamen: futuro(), ...extra },
      });
    const examenGuardado = () => JSON.parse((prisma.economiaExamen.rows[0] as { json: string }).json);

    test("al abrir la subasta: monedas de los alumnos ÷ alumnos × 25% (sin contar al docente)", async () => {
      sembrarAula(["tk-a1", "tk-a2", "tk-a3", "tk-a4"]);
      fondear("tk-a1", 100); fondear("tk-a2", 200); fondear("tk-a3", 0); fondear("tk-a4", 100);
      fondear(DOCENTE, 5000); // el docente no es alumno: no entra en la cuenta
      const r = await crear();
      assert.equal(r.status, 201, JSON.stringify(r.body));
      assert.equal((r.body as { precioInicial: number }).precioInicial, 25); // 400 ÷ 4 × 25%
      assert.deepEqual(
        [examenGuardado().monedasAula, examenGuardado().alumnosAula, examenGuardado().precioInicial],
        [400, 4, 25]
      );
    });

    test("el cliente no puede fijarlo al crear ni cambiarlo después", async () => {
      sembrarAula(["tk-a1", "tk-a2"]);
      fondear("tk-a1", 80); fondear("tk-a2", 120);
      await crear({ precioInicial: 1, monedasAula: 1 });
      assert.equal(examenGuardado().precioInicial, 25); // 200 ÷ 2 × 25%
      const p = await jsonRequest(baseUrl, "PATCH", `/api/economia/examenes/${EXAMEN}`, {
        token: tDocente(), body: { precioInicial: 1, nombre: "Parcial 2" },
      });
      assert.ok(p.status === 200 || p.status === 400, String(p.status));
      assert.equal(examenGuardado().precioInicial, 25);
    });

    test("es un mínimo obligatorio: una puja por debajo se rechaza", async () => {
      sembrarAula(["tk-a1", "tk-a2"]);
      fondear("tk-a1", 80); fondear("tk-a2", 120);
      await crear();
      const bajo = await pujar("tk-a1", 1, 24.99);
      assert.equal(bajo.status, 400);
      assert.equal((bajo.body as { error: string; precioInicial: number }).error, "precio_menor_al_inicial");
      assert.equal((bajo.body as { precioInicial: number }).precioInicial, 25);
      assert.equal((await pujar("tk-a1", 1, 25)).status, 201);
    });

    test("aula sin monedas: no hay piso más que el monto positivo", async () => {
      sembrarAula(["tk-a1", "tk-a2"]);
      const r = await crear();
      assert.equal((r.body as { precioInicial: number }).precioInicial, 0);
      fondear("tk-a1", 5);
      assert.equal((await pujar("tk-a1", 1, 1)).status, 201);
    });
  });

  test("no se puede pujar por más de 2 tickets ni por fracciones", async () => {
    sembrarAula([A]); fondear(A); sembrarSubasta();
    assert.equal((await pujar(A, 3, 10)).status, 400);
    assert.equal((await pujar(A, 1.5, 10)).status, 400);
    assert.equal((await pujar(A, 2, 10)).status, 201);
    assert.equal((await pujar(A, 1, 10)).status, 400, "ya pidió 2: no puede pedir uno más");
  });

  test("solo pujan los que cursan el aula", async () => {
    sembrarAula([A]); seedUser({ id: "intruso", role: "STUDENT", schoolId: ESC }); sembrarSubasta();
    assert.equal((await pujar("intruso", 1, 10)).status, 403);
  });

  test("10 alumnos → 5 tickets: entran las 5 pujas que más pagan; las demás, sin cupo", async () => {
    const alumnos = Array.from({ length: 10 }, (_, i) => `tk-a${i}`);
    sembrarAula(alumnos); sembrarSubasta();
    for (const id of alumnos) fondear(id);
    const precios = [10, 20, 30, 40, 50, 60]; // 6 pujas de 1 ticket
    for (const [i, precio] of precios.entries()) assert.equal((await pujar(alumnos[i], 1, precio)).status, 201);
    const r = await cerrar();
    assert.equal(r.status, 200, JSON.stringify(r.body));
    const estados = pujasPorEstado();
    assert.equal(estados["tk-a0"], "sin_cupo", "la más barata queda afuera");
    for (const i of [1, 2, 3, 4, 5]) assert.equal(estados[`tk-a${i}`], "aceptada");
    const examen = JSON.parse((prisma.economiaExamen.rows[0] as { json: string }).json);
    assert.equal(examen.cupo, 5);
    assert.equal(examen.ticketsEmitidos, 5);
  });

  test("con 3 alumnos el cupo es 2 (mínimo): una puja de 2 deja afuera a la siguiente", async () => {
    sembrarAula(["tk-a1", "tk-a2", "tk-a3"]); sembrarSubasta();
    for (const id of ["tk-a1", "tk-a2", "tk-a3"]) fondear(id);
    await pujar("tk-a1", 2, 50);
    await pujar("tk-a2", 1, 30);
    await pujar("tk-a3", 1, 20);
    assert.equal((await cerrar()).status, 200);
    assert.deepEqual(pujasPorEstado(), { "tk-a1": "aceptada", "tk-a2": "sin_cupo", "tk-a3": "sin_cupo" });
  });

  test("una puja sin saldo no consume cupo: pasa la siguiente", async () => {
    sembrarAula(["tk-a1", "tk-a2"]); sembrarSubasta();
    fondear("tk-a1"); fondear("tk-a2");
    await pujar("tk-a1", 2, 90); // paga más...
    await pujar("tk-a2", 2, 10);
    // ...pero gasta su saldo antes del cierre.
    (prisma.economiaSaldo.rows.find((r) => (r as { usuarioId: string }).usuarioId === "tk-a1") as { saldo: number }).saldo = 0;
    assert.equal((await cerrar()).status, 200);
    assert.deepEqual(pujasPorEstado(), { "tk-a1": "saldo_insuficiente", "tk-a2": "aceptada" });
  });
});

// ── canje ──────────────────────────────────────────────────────────────────

describe("canje", () => {
  const sembrarExamenRendible = (tickets = 2, canjeados = 0) => {
    sembrarAula([A]);
    prisma.modulo.rows.push({
      id: MOD, slug: `mod-${Date.now()}`, titulo: "Examen", descripcion: "", visibility: "privado", schoolId: ESC,
      ownerUserId: DOCENTE, teoriaId: null, tuesdayDocId: null, libroId: null, defaultQuestionCount: 3,
      dependencies: null, isDeleted: false, createdAt: nowIso(), updatedAt: nowIso(),
    });
    prisma.quiz.rows.push({ id: QUIZ, moduleId: MOD, title: "Parcial", currentVersionId: QV, isActive: true, createdAt: nowIso(), updatedAt: nowIso() });
    // 2 preguntas automáticas (1 punto c/u) + 1 manual de 2 puntos: maxScore = 4.
    prisma.quizVersion.rows.push({
      id: QV, quizId: QUIZ, versionNumber: 1,
      questions: [
        { id: "q0", prompt: "P0", answerKey: "c0", points: 1 },
        { id: "q1", prompt: "P1", answerKey: "c1", points: 1 },
        { id: "q2", prompt: "Explica", questionType: "abierta", correccion: "manual", points: 2 },
      ],
      generatorId: null, generatorVersion: null, params: null, count: 3, seedPolicy: 0, fixedSeed: null,
      settings: null, createdAt: nowIso(), createdBy: DOCENTE,
    });
    prisma.quizUmbral.rows.push({ quizId: QUIZ, umbral: 60 });
    prisma.economiaExamen.rows.push({
      id: EXAMEN,
      json: JSON.stringify({ id: EXAMEN, aulaId: AULA, moduloId: MOD, estado: "cerrado", maxCompra: 2, updatedAt: nowIso() }),
      createdAt: nowIso(),
    } as never);
    prisma.economiaExamenPunto.rows.push({
      id: "w-a", examenId: EXAMEN, updatedAt: nowIso(),
      json: JSON.stringify({ usuarioId: A, examenId: EXAMEN, tickets, canjeados, puntos: tickets * 0.9 }),
    } as never);
  };
  const wallet = () => JSON.parse((prisma.economiaExamenPunto.rows[0] as { json: string }).json);
  const intento = () => prisma.quizAttempt.rows[0] as { score: number; status: string; grading: string };

  async function rendir(): Promise<string> {
    const c = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", { token: tAlumno(), body: { quizId: QUIZ, moduleId: MOD } });
    assert.equal(c.status, 201, JSON.stringify(c.body));
    const id = (c.body as { id: string }).id;
    const s = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${id}/submit`, {
      token: tAlumno(), body: { answers: { q0: "c0", q1: "c1" }, presentedIds: ["q0", "q1", "q2"] },
    });
    assert.equal(s.status, 200, JSON.stringify(s.body));
    return id;
  }
  const canjear = (id: string, tickets: unknown, token = tAlumno()) =>
    jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${id}/canjear-tickets`, { token, body: { tickets } });

  beforeEach(() => {
    resetPrisma();
    for (const t of [prisma.economiaSaldo, prisma.economiaTransaccion, prisma.economiaExamen, prisma.economiaExamenPuja, prisma.economiaExamenPunto, prisma.economiaAuditoria]) t.rows = [];
  });

  test("tras entregar, 1 ticket suma 10% del máximo (2 → 2,4 sobre 4)", async () => {
    sembrarExamenRendible();
    const id = await rendir();
    assert.equal(intento().score, 2);
    const r = await canjear(id, 1);
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(Math.round(intento().score * 100) / 100, 2.4);
    assert.equal(wallet().canjeados, 1);
    assert.equal((r.body as { disponibles: number }).disponibles, 1);
  });

  test("máximo 2 tickets por examen: el tercero se rechaza", async () => {
    sembrarExamenRendible(5); // aunque tuviera más comprados
    const id = await rendir();
    assert.equal((await canjear(id, 1)).status, 200);
    assert.equal((await canjear(id, 2)).status, 409, "1 + 2 supera el máximo de 2");
    assert.equal((await canjear(id, 1)).status, 200);
    assert.equal((await canjear(id, 1)).status, 409);
    assert.equal(wallet().canjeados, 2);
    assert.equal(Math.round(intento().score * 100) / 100, 2.8);
  });

  test("no se puede canjear más de lo que se compró", async () => {
    sembrarExamenRendible(1);
    const id = await rendir();
    const r = await canjear(id, 2);
    assert.equal(r.status, 400);
    assert.equal(wallet().canjeados, 0);
  });

  test("la nota nunca pasa del puntaje máximo", async () => {
    sembrarExamenRendible();
    const id = await rendir();
    (prisma.quizAttempt.rows[0] as { score: number }).score = 3.9;
    await canjear(id, 2);
    assert.equal(intento().score, 4);
  });

  test("la corrección manual posterior conserva los tickets canjeados", async () => {
    sembrarExamenRendible();
    const id = await rendir();
    assert.equal((await canjear(id, 2)).status, 200);
    const g = await jsonRequest(baseUrl, "POST", `/api/quiz-attempts/${id}/grade`, {
      token: tDocente(), body: { questionId: "q2", score: 1 },
    });
    assert.equal(g.status, 200, JSON.stringify(g.body));
    // 2 auto + 1 manual = 3; más 2 tickets × 10% de 4 = 0,8.
    assert.equal(Math.round(intento().score * 100) / 100, 3.8);
    assert.equal(intento().status, "graded");
  });

  test("dos canjes simultáneos por todo el cupo: solo uno prospera", async () => {
    sembrarExamenRendible();
    const id = await rendir();
    const [x, y] = await Promise.all([canjear(id, 2), canjear(id, 2)]);
    assert.equal([x.status, y.status].filter((s) => s === 200).length, 1, JSON.stringify([x.body, y.body]));
    assert.equal(wallet().canjeados, 2);
    assert.equal(Math.round(intento().score * 100) / 100, 2.8);
  });

  test("tickets ganados en dos subastas del mismo módulo se canjean juntos (1 + 1 = 2)", async () => {
    sembrarExamenRendible(1);
    prisma.economiaExamen.rows.push({
      id: "ex-2",
      json: JSON.stringify({ id: "ex-2", aulaId: AULA, moduloId: MOD, modo: "ticket", estado: "cerrado", maxCompra: 2, updatedAt: nowIso() }),
      createdAt: nowIso(),
    } as never);
    prisma.economiaExamenPunto.rows.push({
      id: "w-a2", examenId: "ex-2", updatedAt: nowIso(),
      json: JSON.stringify({ usuarioId: A, examenId: "ex-2", tickets: 1, canjeados: 0 }),
    } as never);
    const id = await rendir();
    const r = await canjear(id, 2);
    assert.equal(r.status, 200, JSON.stringify(r.body));
    assert.equal(Math.round(intento().score * 100) / 100, 2.8);
    const canjeados = prisma.economiaExamenPunto.rows.map((x) => JSON.parse((x as { json: string }).json).canjeados);
    assert.deepEqual(canjeados, [1, 1]);
    assert.equal((await canjear(id, 1)).status, 400, "ya no quedan");
  });

  test("antes de entregar no se canjea", async () => {
    sembrarExamenRendible();
    const c = await jsonRequest(baseUrl, "POST", "/api/quiz-attempts", { token: tAlumno(), body: { quizId: QUIZ, moduleId: MOD } });
    const r = await canjear((c.body as { id: string }).id, 1);
    assert.equal(r.status, 409);
    assert.equal(wallet().canjeados, 0);
  });

  test("sin tickets de ese examen → 404; intento ajeno → 404; cantidad inválida → 400", async () => {
    sembrarExamenRendible();
    const id = await rendir();
    prisma.economiaExamenPunto.rows = [];
    assert.equal((await canjear(id, 1)).status, 404);
    seedUser({ id: "tk-otro", role: "STUDENT", schoolId: ESC });
    assert.equal((await canjear(id, 1, tAlumno("tk-otro"))).status, 404);
    for (const t of [0, -1, 1.5, "2", null]) assert.equal((await canjear(id, t)).status, 400, String(t));
  });

  test("solo sobre el último intento", async () => {
    sembrarExamenRendible();
    const id = await rendir();
    prisma.quizAttempt.rows.push({
      id: "intento-nuevo", quizId: QUIZ, quizVersionId: QV, userId: A, status: "in_progress",
      startedAt: new Date(Date.now() + 60_000).toISOString(), answers: "{}", seedPolicy: 0,
    } as never);
    assert.equal((await canjear(id, 1)).status, 409);
  });
});
