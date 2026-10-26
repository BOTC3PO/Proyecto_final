/**
 * Pruebas contra Postgres REAL (H17) de las operaciones de saldo.
 *
 * Solo corre si PG_TEST_DATABASE_URL apunta a una base cuyo nombre termina en `_test`; nunca
 * contra producción. La base debe tener las migraciones aplicadas (`prisma migrate deploy`).
 *
 *   PG_TEST_DATABASE_URL=postgresql://.../virtualbook_test npm run test:pg
 *
 * Verifica lo que el stub en memoria no puede: que los débitos condicionales, el bloqueo por
 * clave y el índice único aguantan pedidos realmente simultáneos.
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

const opts = { skip: habilitado ? false : "definir PG_TEST_DATABASE_URL (base *_test)" };

type Prisma = typeof import("../../src/lib/prisma").prisma;
let prisma: Prisma;
let saldoLib: typeof import("../../src/lib/economia-saldo");
const prefijo = `pgtest-${randomUUID().slice(0, 8)}`;

before(async () => {
  if (!habilitado) return;
  ({ prisma } = await import("../../src/lib/prisma"));
  saldoLib = await import("../../src/lib/economia-saldo");
  const actual = await prisma.$queryRaw<Array<{ current_database: string }>>`select current_database()`;
  assert.ok(actual[0].current_database.endsWith("_test"), "la conexión no es una base de pruebas");
});

after(async () => {
  if (!habilitado) return;
  await prisma.economiaTransaccion.deleteMany({ where: { usuarioId: { startsWith: prefijo } } });
  await prisma.economiaSaldo.deleteMany({ where: { usuarioId: { startsWith: prefijo } } });
  await prisma.usuarioItem.deleteMany({ where: { usuarioId: { startsWith: prefijo } } });
  await prisma.tiendaItem.deleteMany({ where: { id: { startsWith: prefijo } } });
  await prisma.mensajeReportado.deleteMany({ where: { reportadoPor: { startsWith: prefijo } } });
  await prisma.$disconnect();
});

test("PG: 20 débitos simultáneos de 10 con saldo 100 → exactamente 10 prosperan y el saldo queda en 0", opts, async () => {
  const usuarioId = `${prefijo}-debitos`;
  await prisma.economiaSaldo.create({ data: { usuarioId, saldo: 100, moneda: "PF", updatedAt: new Date().toISOString() } });
  const resultados = await Promise.allSettled(
    Array.from({ length: 20 }, (_, i) =>
      prisma.$transaction((tx) =>
        saldoLib.debitarSaldo(tx, { usuarioId, monto: 10, motivo: `prueba:${i}` })
      )
    )
  );
  const ok = resultados.filter((r) => r.status === "fulfilled").length;
  const rechazados = resultados.filter(
    (r) => r.status === "rejected" && r.reason instanceof saldoLib.SaldoInsuficienteError
  ).length;
  assert.equal(ok, 10);
  assert.equal(rechazados, 10);
  const fila = await prisma.economiaSaldo.findFirst({ where: { usuarioId } });
  assert.equal(fila?.saldo, 0);
  assert.equal(await prisma.economiaTransaccion.count({ where: { usuarioId } }), 10);
});

test("PG: una transacción que falla deshace el débito", opts, async () => {
  const usuarioId = `${prefijo}-rollback`;
  await prisma.economiaSaldo.create({ data: { usuarioId, saldo: 50, moneda: "PF", updatedAt: new Date().toISOString() } });
  await assert.rejects(
    prisma.$transaction(async (tx) => {
      await saldoLib.debitarSaldo(tx, { usuarioId, monto: 30, motivo: "se deshace" });
      throw new Error("falla después del débito");
    })
  );
  assert.equal((await prisma.economiaSaldo.findFirst({ where: { usuarioId } }))?.saldo, 50);
  assert.equal(await prisma.economiaTransaccion.count({ where: { usuarioId } }), 0);
});

test("PG: acreditar el saldo inicial 10 veces a la vez acredita una sola", opts, async () => {
  const { acreditarSaldoInicial } = await import("../../src/lib/economia-alta");
  const usuarioId = `${prefijo}-alta`;
  const resultados = await Promise.all(
    Array.from({ length: 10 }, () => acreditarSaldoInicial({ usuarioId, schoolId: null }))
  );
  assert.equal(resultados.filter(Boolean).length, 1);
  assert.equal(await prisma.economiaTransaccion.count({ where: { usuarioId, tipo: "saldo_inicial" } }), 1);
  const suma = await prisma.economiaTransaccion.aggregate({ where: { usuarioId }, _sum: { monto: true } });
  assert.equal((await prisma.economiaSaldo.findFirst({ where: { usuarioId } }))?.saldo, suma._sum.monto);
});

test("PG: el índice único impide dos veces el mismo ítem para un usuario (I2)", opts, async () => {
  const itemId = `${prefijo}-item`;
  const usuarioId = `${prefijo}-comprador`;
  const ahora = new Date().toISOString();
  await prisma.tiendaItem.create({ data: { id: itemId, tipo: "tema", nombre: "pg", createdAt: ahora } });
  const resultados = await Promise.allSettled(
    Array.from({ length: 5 }, () =>
      prisma.usuarioItem.create({ data: { id: randomUUID(), usuarioId, itemId, compradoAt: ahora } })
    )
  );
  assert.equal(resultados.filter((r) => r.status === "fulfilled").length, 1);
  assert.ok(
    resultados
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .every((r) => (r.reason as { code?: string }).code === "P2002")
  );
});

test("PG: un mismo mensaje se reporta una sola vez por persona aunque lleguen pedidos a la vez (H3)", opts, async () => {
  const ahora = new Date().toISOString();
  const resultados = await Promise.allSettled(
    Array.from({ length: 5 }, () =>
      prisma.mensajeReportado.create({
        data: {
          id: randomUUID(), mensajeId: `${prefijo}-msg`, hiloId: `${prefijo}-hilo`, escuelaId: `${prefijo}-esc`,
          reportadoPor: `${prefijo}-alumna`, autorId: `${prefijo}-autor`, cuerpo: "texto", createdAt: ahora
        }
      })
    )
  );
  assert.equal(resultados.filter((r) => r.status === "fulfilled").length, 1);
  assert.ok(
    resultados
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .every((r) => (r.reason as { code?: string }).code === "P2002")
  );
});
