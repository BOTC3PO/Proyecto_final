/**
 * Pruebas contra Postgres REAL (H17 / I5) de los cobros a familias con pedidos realmente simultáneos:
 * publicar, iniciar el checkout y confirmar el pago de una cuota.
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base `*_test` (ver economia-saldo.pg.test.ts).
 * Levanta el router real de `cobros` con el `requireUser` real; los datos llevan un prefijo único y se
 * borran al terminar.
 */

const url = process.env.PG_TEST_DATABASE_URL ?? "";
const dbName = url.replace(/\?.*$/, "").split("/").pop() ?? "";
const habilitado = url !== "" && dbName.endsWith("_test");

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-pg";
if (habilitado) process.env.DATABASE_URL = url;

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { randomUUID } from "node:crypto";
import type { Server } from "node:http";

const opts = { skip: habilitado ? false : "definir PG_TEST_DATABASE_URL (base *_test)" };

type Prisma = typeof import("../../src/lib/prisma").prisma;
let prisma: Prisma;
let server: Server;
let baseUrl = "";
let tokenDirectivo = "";
let tokenAlumno1 = "";

const p = `pgcob-${randomUUID().slice(0, 8)}`;
const ESCUELA = `${p}-esc`;
const DIRECTIVO = `${p}-directivo`;
const ALUMNO_1 = `${p}-alumno1`;
const ALUMNO_2 = `${p}-alumno2`;
const AULA = `${p}-aula`;

const llamar = async (method: string, path: string, token: string, body: unknown = {}) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method,
    headers: { "content-type": "application/json", authorization: `Bearer ${token}` },
    body: JSON.stringify(body)
  });
  const texto = await res.text();
  let json: any = null;
  try { json = JSON.parse(texto); } catch { /* no es JSON */ }
  return { status: res.status, body: json };
};

const crearCobro = async () => {
  const r = await llamar("POST", "/api/cobros", tokenDirectivo, { concepto: "Cuota", montoUnitario: 5000 });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  return r.body.id as string;
};

const limpiar = async () => {
  const cobros = await prisma.cobroEscuela.findMany({ where: { escuelaId: ESCUELA }, select: { id: true } });
  const cuotas = await prisma.cuotaAlumno.findMany({ where: { cobroId: { in: cobros.map((c) => c.id) } } });
  await prisma.cuotaAlumno.deleteMany({ where: { cobroId: { in: cobros.map((c) => c.id) } } });
  const pagoIds = cuotas.map((c) => c.pagoId).filter((x): x is string => Boolean(x));
  await prisma.pago.deleteMany({ where: { id: { in: pagoIds } } });
  await prisma.transaccionEscuela.deleteMany({ where: { escuelaId: ESCUELA } });
  await prisma.cobroEscuela.deleteMany({ where: { escuelaId: ESCUELA } });
};

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");

  const ahora = new Date().toISOString();
  await prisma.escuela.create({ data: { id: ESCUELA, name: "Escuela pg", createdAt: ahora, estadoVerificacion: "verificada", comisionPct: 6, comisionPctIntl: 1.5 } });
  for (const [id, rol] of [[DIRECTIVO, "DIRECTIVO"], [ALUMNO_1, "USER"], [ALUMNO_2, "USER"]] as const) {
    await prisma.usuario.create({
      data: { id, username: id, email: `${id}@pg.test`, fullName: id, roles: [rol], escuelaId: ESCUELA, createdAt: ahora, updatedAt: ahora }
    });
  }
  await prisma.membresia.createMany({
    data: [
      { usuarioId: DIRECTIVO, escuelaId: ESCUELA, rol: "DIRECTIVO", estado: "activa", fechaAlta: ahora },
      { usuarioId: ALUMNO_1, escuelaId: ESCUELA, rol: "STUDENT", estado: "activa", fechaAlta: ahora },
      { usuarioId: ALUMNO_2, escuelaId: ESCUELA, rol: "STUDENT", estado: "activa", fechaAlta: ahora }
    ]
  });
  await prisma.clase.create({ data: { id: AULA, escuelaId: ESCUELA, name: "Aula pg", grade: "5°", createdAt: ahora } });
  await prisma.claseMiembro.createMany({
    data: [
      { claseId: AULA, usuarioId: ALUMNO_1, rolEnClase: "STUDENT" },
      { claseId: AULA, usuarioId: ALUMNO_2, rolEnClase: "STUDENT" }
    ]
  });

  const { createAccessToken } = await import("../../src/lib/auth-token");
  const token = (id: string, role: string) =>
    createAccessToken({ id, role, roles: [role], esAdminPrincipal: false, schoolId: ESCUELA } as never).token;
  tokenDirectivo = token(DIRECTIVO, "DIRECTIVO");
  tokenAlumno1 = token(ALUMNO_1, "USER");

  const express = (await import("express")).default;
  const { cobros } = await import("../../src/routes/cobros");
  const app = express();
  app.use(express.json());
  app.use(cobros);
  await new Promise<void>((ok) => { server = app.listen(0, "127.0.0.1", ok); });
  baseUrl = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
});

after(async () => {
  if (!habilitado) return;
  if (server) await new Promise((ok) => server.close(ok));
  await limpiar();
  await prisma.claseMiembro.deleteMany({ where: { claseId: AULA } });
  await prisma.clase.deleteMany({ where: { id: AULA } });
  await prisma.membresia.deleteMany({ where: { escuelaId: ESCUELA } });
  await prisma.usuario.deleteMany({ where: { id: { in: [DIRECTIVO, ALUMNO_1, ALUMNO_2] } } });
  await prisma.escuela.deleteMany({ where: { id: ESCUELA } });
  await prisma.$disconnect();
});

test("PG: publicar el mismo cobro 6 veces a la vez deja un solo publicador y una cuota por alumno", opts, async () => {
  const id = await crearCobro();
  const rs = await Promise.all(Array.from({ length: 6 }, () => llamar("POST", `/api/cobros/${id}/publicar`, tokenDirectivo, { aulaId: AULA })));
  const estados = rs.map((r) => r.status).sort();
  assert.deepEqual(estados, [200, 409, 409, 409, 409, 409], JSON.stringify(rs.map((r) => [r.status, r.body])));
  assert.equal(await prisma.cuotaAlumno.count({ where: { cobroId: id } }), 2);
  assert.equal((await prisma.cobroEscuela.findFirst({ where: { id } }))!.estado, "publicado");
});

test("PG: iniciar el checkout de una cuota 6 veces a la vez deja un solo pago", opts, async () => {
  const id = await crearCobro();
  await llamar("POST", `/api/cobros/${id}/publicar`, tokenDirectivo, { aulaId: AULA });
  const cuota = (await prisma.cuotaAlumno.findFirst({ where: { cobroId: id, alumnoId: ALUMNO_1 } }))!;
  const rs = await Promise.all(Array.from({ length: 6 }, () => llamar("POST", `/api/cuotas/${cuota.id}/checkout`, tokenAlumno1)));
  assert.ok(rs.every((r) => r.status === 200 || r.status === 201), JSON.stringify(rs.map((r) => [r.status, r.body])));
  const pagos = new Set(rs.map((r) => r.body.pago.id));
  assert.equal(pagos.size, 1, "todas las respuestas apuntan al mismo pago");
  const despues = (await prisma.cuotaAlumno.findFirst({ where: { id: cuota.id } }))!;
  assert.equal(despues.pagoId, [...pagos][0]);
  const huerfanos = await prisma.pago.count({ where: { id: { not: despues.pagoId! }, providerRef: { startsWith: "manual-" }, createdAt: { gte: cuota.createdAt } } });
  assert.equal(huerfanos, 0, "no quedan pagos sueltos sin cuota");
});

test("PG: confirmar el mismo pago 6 veces a la vez asienta una sola comisión y deja la cuota pagada", opts, async () => {
  const id = await crearCobro();
  await llamar("POST", `/api/cobros/${id}/publicar`, tokenDirectivo, { aulaId: AULA });
  const cuota = (await prisma.cuotaAlumno.findFirst({ where: { cobroId: id, alumnoId: ALUMNO_1 } }))!;
  await llamar("POST", `/api/cuotas/${cuota.id}/checkout`, tokenAlumno1);
  const rs = await Promise.all(Array.from({ length: 6 }, () => llamar("POST", `/api/cuotas/${cuota.id}/confirmar-pago`, tokenDirectivo)));
  assert.ok(rs.every((r) => r.status === 200), JSON.stringify(rs.map((r) => [r.status, r.body])));
  assert.equal(await prisma.transaccionEscuela.count({ where: { escuelaId: ESCUELA } }), 1);
  assert.equal((await prisma.cuotaAlumno.findFirst({ where: { id: cuota.id } }))!.estado, "pagada");
});
