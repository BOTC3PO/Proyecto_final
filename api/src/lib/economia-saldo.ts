import { prisma } from "./prisma";

/**
 * Operaciones de saldo atómicas (E7). Deben llamarse dentro de
 * `prisma.$transaction(async (tx) => ...)` pasando `tx`, para que el
 * movimiento y el cambio de estado asociado se confirmen o se deshagan juntos.
 *
 * El débito es condicional (`saldo >= monto`) y se resuelve en una sola
 * sentencia: dos pedidos simultáneos no pueden gastar el mismo saldo.
 */
export type SaldoTx = Pick<typeof prisma, "economiaSaldo" | "economiaTransaccion" | "$executeRaw">;

export class SaldoInsuficienteError extends Error {
  constructor(public readonly saldo: number) {
    super("saldo_insuficiente");
  }
}

type Movimiento = {
  id?: string;
  usuarioId: string;
  aulaId?: string;
  schoolId?: string;
  /** Valor de `tipo` en la transacción; por defecto "debito" / "credito". */
  tipoTransaccion?: string;
  monto: number;
  moneda?: string;
  motivo: string;
  referenciaId?: string | null;
  now?: string;
};

export async function debitarSaldo(tx: SaldoTx, m: Movimiento): Promise<void> {
  const now = m.now ?? new Date().toISOString();
  const moneda = m.moneda ?? "PF";
  const r = await tx.economiaSaldo.updateMany({
    where: { usuarioId: m.usuarioId, saldo: { gte: m.monto } },
    data: { saldo: { decrement: m.monto }, updatedAt: now },
  });
  if (r.count !== 1) {
    const fila = await tx.economiaSaldo.findFirst({ where: { usuarioId: m.usuarioId } });
    throw new SaldoInsuficienteError(fila?.saldo ?? 0);
  }
  await tx.economiaTransaccion.create({
    data: {
      ...(m.id ? { id: m.id } : {}),
      usuarioId: m.usuarioId,
      aulaId: m.aulaId ?? "",
      schoolId: m.schoolId ?? "",
      tipo: m.tipoTransaccion ?? "debito",
      monto: m.monto,
      moneda,
      motivo: m.motivo,
      referenciaId: m.referenciaId ?? null,
      createdAt: now,
    },
  });
}

export async function acreditarSaldo(tx: SaldoTx, m: Movimiento): Promise<void> {
  const now = m.now ?? new Date().toISOString();
  const moneda = m.moneda ?? "PF";
  await tx.economiaSaldo.upsert({
    where: { usuarioId: m.usuarioId },
    update: { saldo: { increment: m.monto }, updatedAt: now },
    create: { usuarioId: m.usuarioId, saldo: m.monto, moneda, updatedAt: now },
  });
  await tx.economiaTransaccion.create({
    data: {
      ...(m.id ? { id: m.id } : {}),
      usuarioId: m.usuarioId,
      aulaId: m.aulaId ?? "",
      schoolId: m.schoolId ?? "",
      tipo: m.tipoTransaccion ?? "credito",
      monto: m.monto,
      moneda,
      motivo: m.motivo,
      referenciaId: m.referenciaId ?? null,
      createdAt: now,
    },
  });
}

/**
 * Serializa operaciones que comparten `clave` hasta que termina la transacción
 * (advisory lock de Postgres). Sirve para las acreditaciones idempotentes
 * ("¿ya se acreditó?" + acreditar) que no tienen índice único donde apoyarse.
 */
export async function bloquearClave(tx: SaldoTx, clave: string): Promise<void> {
  await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${clave}))`;
}

export async function leerSaldo(usuarioId: string): Promise<number> {
  const fila = await prisma.economiaSaldo.findFirst({ where: { usuarioId } });
  return fila?.saldo ?? 0;
}
