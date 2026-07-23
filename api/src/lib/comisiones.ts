/**
 * Fase 5.1 — modelo de comisión (demostrable).
 *
 * Helpers de cálculo y registro contable de la comisión que VB retiene a las
 * escuelas. El sistema es siempre autogestionado: la escuela conecta su
 * propia cuenta de pago (`EscuelaPasarela`) y corre/paga su propio servidor —
 * VB nunca maneja los fondos, sólo lleva el registro contable y liquida a
 * mano. El split real con OAuth de MP (`marketplace_fee`) y liquidaciones
 * automáticas queda como roadmap v2 (ver docs/pagos/comision-roadmap-v2.md).
 */
import { prisma } from "./prisma";

/** Rango real de comisión: pagos domésticos (MercadoPago/Argentina) vs internacionales (Cryptomus). */
export const COMISION_PCT_RANGO_AR = { min: 5, max: 7 } as const;
export const COMISION_PCT_RANGO_INTL = { min: 1, max: 2 } as const;
export const DEFAULT_COMISION_PCT_AR = 6;
export const DEFAULT_COMISION_PCT_INTL = 1.5;

const round2 = (n: number) => Math.round(n * 100) / 100;
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

/** Sólo Mercado Pago (y los cobros manuales, típicamente locales) se consideran
 * pago doméstico; el resto (hoy Cryptomus) paga la tarifa internacional. */
const esProviderDomestico = (provider: string | null | undefined) =>
  !provider || provider === "mercadopago" || provider === "manual";

export function calcularComision(
  montoTotal: number,
  provider: string | null | undefined,
  escuela: { comisionPct: number | null | undefined; comisionPctIntl: number | null | undefined },
): { comisionPct: number; comisionVB: number; montoNeto: number } {
  const domestico = esProviderDomestico(provider);
  const rango = domestico ? COMISION_PCT_RANGO_AR : COMISION_PCT_RANGO_INTL;
  const base = domestico
    ? (escuela.comisionPct ?? DEFAULT_COMISION_PCT_AR)
    : (escuela.comisionPctIntl ?? DEFAULT_COMISION_PCT_INTL);
  const pct = clamp(base, rango.min, rango.max);
  const comisionVB = round2(montoTotal * (pct / 100));
  return { comisionPct: pct, comisionVB, montoNeto: round2(montoTotal - comisionVB) };
}

const genTxId = () => `txe-${Date.now()}-${Math.random().toString(16).slice(2)}`;

/**
 * Registra una transacción contable para una escuela (siempre — no existe
 * modo "centralizado"). Es defensivo: cualquier error se traga para no
 * romper el flujo de acreditación que lo invoca.
 */
export async function registrarTransaccionEscuela(params: {
  escuelaId: string;
  montoTotal: number;
  mpPaymentId?: string | null;
  /** de qué pasarela vino el cobro. Default "mercadopago" (todo lo pre-Fase-3,
   * el SaaS de suscripción, era siempre MP). */
  provider?: string;
}): Promise<{ id: string; comisionVB: number; montoNeto: number } | null> {
  try {
    const escuela = await prisma.escuela.findFirst({
      where: { id: params.escuelaId },
    });
    if (!escuela) return null;
    if (!params.montoTotal || params.montoTotal <= 0) return null;

    const { comisionVB, montoNeto } = calcularComision(params.montoTotal, params.provider, escuela);
    const row = await prisma.transaccionEscuela.create({
      data: {
        id: genTxId(),
        escuelaId: params.escuelaId,
        montoTotal: params.montoTotal,
        comisionVB,
        montoNeto,
        estado: "registrada",
        provider: params.provider ?? "mercadopago",
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
