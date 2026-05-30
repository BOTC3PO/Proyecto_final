/**
 * Fase 5.1 — modelo de comisión (demostrable).
 *
 * Helpers de cálculo y registro contable de la comisión que VB retiene a las
 * escuelas en modo "autogestionado". El split real con OAuth de MP
 * (`marketplace_fee`) y liquidaciones automáticas queda como roadmap v2
 * (ver docs/pagos/comision-roadmap-v2.md).
 */
import { prisma } from "./prisma";

/** % por defecto si la escuela no fijó uno explícito. */
export const DEFAULT_COMISION_PCT = 10;

const round2 = (n: number) => Math.round(n * 100) / 100;

export function calcularComision(
  montoTotal: number,
  comisionPct: number | null | undefined,
): { comisionPct: number; comisionVB: number; montoNeto: number } {
  const pct = comisionPct ?? DEFAULT_COMISION_PCT;
  const comisionVB = round2(montoTotal * (pct / 100));
  return { comisionPct: pct, comisionVB, montoNeto: round2(montoTotal - comisionVB) };
}

const genTxId = () => `txe-${Date.now()}-${Math.random().toString(16).slice(2)}`;

/**
 * Registra una transacción contable para una escuela. Solo deja asiento si la
 * escuela está en modo "autogestionado" (en "centralizado" cobra VB y no hay
 * comisión que liquidar). Es defensivo: cualquier error se traga para no
 * romper el flujo de acreditación que lo invoca.
 */
export async function registrarTransaccionEscuela(params: {
  escuelaId: string;
  montoTotal: number;
  mpPaymentId?: string | null;
}): Promise<{ id: string; comisionVB: number; montoNeto: number } | null> {
  try {
    const escuela = await prisma.escuela.findFirst({
      where: { id: params.escuelaId },
    });
    if (!escuela || escuela.modoGestion !== "autogestionado") return null;
    if (!params.montoTotal || params.montoTotal <= 0) return null;

    const { comisionVB, montoNeto } = calcularComision(
      params.montoTotal,
      escuela.comisionPct,
    );
    const row = await prisma.transaccionEscuela.create({
      data: {
        id: genTxId(),
        escuelaId: params.escuelaId,
        montoTotal: params.montoTotal,
        comisionVB,
        montoNeto,
        estado: "registrada",
        mpPaymentId: params.mpPaymentId ?? null,
        createdAt: new Date().toISOString(),
      },
    });
    return { id: row.id, comisionVB, montoNeto };
  } catch {
    // No bloquear la acreditación si el registro contable falla.
    return null;
  }
}
