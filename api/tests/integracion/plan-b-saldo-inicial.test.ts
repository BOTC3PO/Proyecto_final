/**
 * PLAN-B Fase 6 (ítem 34) — saldo de bienvenida para alumnos nuevos.
 *
 * Diagnóstico (ver comentario en api/src/lib/economia-alta.ts): de los 3
 * modelos con pinta de "saldo de usuario" (`SaldoUsuario`, `EconomiaSaldo`,
 * `Billetera`), el runtime de economia.ts sólo lee/escribe `EconomiaSaldo`
 * (los otros dos tienen 0 referencias fuera del schema). El ledger real es
 * `EconomiaTransaccion` (`LedgerMovimiento` también está huérfano).
 *
 * Cubre:
 *  - Registro con role=USER acredita 50 (default) vía EconomiaTransaccion
 *    tipo=saldo_inicial + EconomiaSaldo.
 *  - Registro con role=TEACHER NO acredita nada (no es alumno).
 *  - El guest también se acredita (aterriza y juega como alumno).
 *  - El monto es configurable por escuela (Escuela.saldoInicialAlumno).
 *  - Alta por admin (POST /api/usuarios) con role=USER también acredita.
 *  - Idempotencia: acreditarSaldoInicial no duplica si se llama dos veces
 *    para el mismo usuario.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, startServer, jsonRequest } from "./_helpers/setup";
import { acreditarSaldoInicial } from "../../src/lib/economia-alta";

// El endpoint /api/auth/register valida `schoolId` con
// `z.string().regex(/^[a-fA-F0-9]{24}$/)`.
const ESC = "000000000000000000000001";
const ESC_CUSTOM = "000000000000000000000002";

let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const { auth } = await import("../../src/routes/auth");
  const { usuarios } = await import("../../src/routes/usuarios");
  const server = await startServer([auth, usuarios]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  const nowIso = new Date().toISOString();
  prisma.escuela.rows.push({ estadoVerificacion: "verificada",
    id: ESC,
    name: "Escuela Default",
    code: "ESC-DEF",
    isDeleted: false,
    saldoInicialAlumno: 50,
    createdAt: nowIso,
    updatedAt: nowIso
  });
  prisma.escuela.rows.push({ estadoVerificacion: "verificada",
    id: ESC_CUSTOM,
    name: "Escuela Custom",
    code: "ESC-CUS",
    isDeleted: false,
    saldoInicialAlumno: 100,
    createdAt: nowIso,
    updatedAt: nowIso
  });
});

const register = (body: Record<string, unknown>) =>
  jsonRequest(baseUrl, "POST", "/api/auth/register", { body });

test("registro con role=USER acredita 50 (default) con movimiento de ledger", async () => {
  const r = await register({
    email: "nuevoalumno@test.local",
    username: "nuevoalumno",
    password: "Password123!",
    fullName: "Nuevo Alumno",
    role: "USER",
    schoolId: ESC
  });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  const userId = (r.body as { id: string }).id;

  const movimiento = prisma.economiaTransaccion.rows.find(
    (t) => t.usuarioId === userId && t.tipo === "saldo_inicial"
  );
  assert.ok(movimiento, "debe existir el movimiento de ledger saldo_inicial");
  assert.equal(movimiento?.monto, 50);

  const saldo = prisma.economiaSaldo.rows.find((s) => s.usuarioId === userId);
  assert.ok(saldo, "debe existir el EconomiaSaldo del alumno");
  assert.equal(saldo?.saldo, 50);
});

test("registro con role=TEACHER se rechaza (self-registro de staff, fix vuln-0002)", async () => {
  // El auto-registro público sólo admite USER/PARENT/GUEST desde el
  // hardening de Strix (ver RegisterSchema en api/src/schema/auth.ts):
  // TEACHER/DIRECTIVO sólo se asignan vía invitación de un ADMIN/DIRECTIVO
  // (POST /api/invitaciones), nunca por auto-registro. Este test antes
  // esperaba 201 (el propio bug que se corrigió); ahora valida el fix.
  const r = await register({
    email: "nuevoprofe@test.local",
    username: "nuevoprofe",
    password: "Password123!",
    fullName: "Nuevo Profe",
    role: "TEACHER",
    schoolId: ESC
  });
  assert.equal(r.status, 400, JSON.stringify(r.body));
});

test("el guest también recibe el saldo de bienvenida", async () => {
  const r = await jsonRequest(baseUrl, "POST", "/api/auth/guest", { body: {} });
  assert.equal(r.status, 201, JSON.stringify(r.body));
  const userId = (r.body as { id: string }).id;
  const saldo = prisma.economiaSaldo.rows.find((s) => s.usuarioId === userId);
  assert.equal(saldo?.saldo, 50);
});

test("el monto es configurable por escuela", async () => {
  const r = await register({
    email: "alumnocustom@test.local",
    username: "alumnocustom",
    password: "Password123!",
    fullName: "Alumno Custom",
    role: "USER",
    schoolId: ESC_CUSTOM
  });
  const userId = (r.body as { id: string }).id;
  const saldo = prisma.economiaSaldo.rows.find((s) => s.usuarioId === userId);
  assert.equal(saldo?.saldo, 100);
});

test("alta por admin (POST /api/usuarios) con role=USER también acredita", async () => {
  const ADMIN_ID = "admin-saldo-inicial";
  seedUser({ id: ADMIN_ID, role: "ADMIN", schoolId: null });
  const now = new Date().toISOString();
  const token = (await import("../../src/lib/auth-token")).createAccessToken({
    id: ADMIN_ID,
    role: "ADMIN",
    roles: ["ADMIN"],
    schoolId: null
  }).token;

  const res = await jsonRequest(baseUrl, "POST", "/api/usuarios", {
    token,
    body: {
      username: "alumnoporadmin",
      email: "alumnoporadmin@test.local",
      fullName: "Alumno Por Admin",
      role: "USER",
      escuelaId: ESC,
      password: "Password123!",
      createdAt: now,
      updatedAt: now
    }
  });
  assert.equal(res.status, 201, JSON.stringify(res.body));
  const userId = (res.body as { id: string }).id;
  const saldo = prisma.economiaSaldo.rows.find((s) => s.usuarioId === userId);
  assert.equal(saldo?.saldo, 50);
});

test("acreditarSaldoInicial es idempotente: no duplica si se llama dos veces", async () => {
  seedUser({ id: "alumno-idempotencia", role: "USER", schoolId: ESC });
  const primero = await acreditarSaldoInicial({ usuarioId: "alumno-idempotencia", schoolId: ESC });
  assert.ok(primero);
  const segundo = await acreditarSaldoInicial({ usuarioId: "alumno-idempotencia", schoolId: ESC });
  assert.equal(segundo, null, "la segunda llamada no debe acreditar de nuevo");

  const movimientos = prisma.economiaTransaccion.rows.filter(
    (t) => t.usuarioId === "alumno-idempotencia" && t.tipo === "saldo_inicial"
  );
  assert.equal(movimientos.length, 1);
  const saldo = prisma.economiaSaldo.rows.find((s) => s.usuarioId === "alumno-idempotencia");
  assert.equal(saldo?.saldo, 50);
});
