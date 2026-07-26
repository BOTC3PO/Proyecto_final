/**
 * PLAN-B Fase 2/4 — confirmación de un `Pago`. Compartido entre
 * `routes/cobros.ts` (confirmación manual + webhook real de cada
 * provider) y el job de reconciliación de Fase 4
 * (`lib/pasarelas/reconciliacion.ts`) — moverlo fuera de `routes/` evita
 * que el job tenga que importar un archivo de rutas.
 *
 * Es el ÚNICO punto donde una cuota pasa a "pagada", así que acá viven
 * los tres controles de plata (endurecimiento 2026-07-25):
 *  1. El monto que reporta la pasarela tiene que alcanzar para saldar la
 *     cuota — antes se confiaba en `cuota.montoFinal` y se ignoraba el
 *     `montoBruto` del webhook, así que un pago parcial la saldaba igual.
 *  2. La confirmación es atómica (compare-and-swap sobre `estado`): el
 *     webhook y el job de reconciliación pueden llegar a la vez y no
 *     deben asentar la comisión dos veces.
 *  3. Todo queda auditado — quién confirmó cada peso y por qué vía.
 */
import { prisma } from "./prisma";
import { registrarTransaccionEscuela } from "./comisiones";
import { recordAuditLog } from "./audit-log";

const now = () => new Date().toISOString();

/**
 * Tolerancia al comparar lo reportado por la pasarela contra lo debido:
 * el redondeo de la pasarela (y la conversión de cripto a fiat en
 * Cryptomus) mueve centavos, no pesos. Un centavo de gracia evita mandar
 * a revisión manual cobros que en la práctica están completos.
 */
const TOLERANCIA_MONTO = 0.01;

export type ConfirmarPagoResult = {
  alreadyConfirmed: boolean;
  /** true si NO se confirmó porque la pasarela reportó menos de lo debido. */
  montoInsuficiente?: boolean;
  pago: { id: string; estado: string; provider: string; providerRef: string | null };
  cuota: { id: string; montoFinal: number };
  transaccion: { id: string; comisionVB: number; montoNeto: number } | null;
};

export const confirmarPago = async (
  pago: { id: string; estado: string; provider: string; providerRef: string | null },
  cuota: { id: string; montoFinal: number },
  cobro: { escuelaId: string },
  opts?: {
    /** Monto que la pasarela dice haber cobrado. `undefined` cuando no hay
     * dato (confirmación manual del staff, o `checkStatus` que sólo
     * devuelve estado) — ahí no hay nada contra qué verificar. */
    montoReportado?: number | null;
    /** Quién confirma: id del usuario staff, o `system:*` para webhook/job. */
    actorId?: string;
  }
): Promise<ConfirmarPagoResult> => {
  if (pago.estado === "pagada") return { alreadyConfirmed: true, pago, cuota, transaccion: null };

  const actorId = opts?.actorId ?? "system:desconocido";
  const montoReportado = opts?.montoReportado;

  // ── 1. El monto tiene que alcanzar ──────────────────────────────
  // Se cobró de MENOS: no se salda la cuota. El pago queda en
  // "en_revision" (fuera del filtro pendiente/en_proceso de la
  // reconciliación, así no se reintenta en loop) y la cuota sigue impaga
  // hasta que un humano mire. Cobrar de MÁS sí confirma: el excedente es
  // un tema entre la escuela y la familia, no motivo para dejar la cuota
  // impaga.
  if (
    typeof montoReportado === "number" &&
    Number.isFinite(montoReportado) &&
    montoReportado + TOLERANCIA_MONTO < cuota.montoFinal
  ) {
    const { count } = await prisma.pago.updateMany({
      where: { id: pago.id, estado: { notIn: ["pagada", "en_revision"] } },
      data: { estado: "en_revision", updatedAt: now() }
    });
    // count === 0 ⇒ ya estaba marcado por un reintento anterior del mismo
    // webhook; no hace falta volver a auditar lo mismo.
    if (count > 0) {
      await recordAuditLog({
        actorId,
        action: "pago.monto_insuficiente",
        targetType: "Pago",
        targetId: pago.id,
        metadata: {
          cuotaId: cuota.id,
          escuelaId: cobro.escuelaId,
          provider: pago.provider,
          providerRef: pago.providerRef,
          montoEsperado: cuota.montoFinal,
          montoReportado
        }
      });
    }
    return { alreadyConfirmed: false, montoInsuficiente: true, pago, cuota, transaccion: null };
  }

  // ── 2. Confirmación atómica ─────────────────────────────────────
  // Compare-and-swap: el UPDATE condicional decide quién gana. Si dos
  // confirmaciones entran a la vez (webhook + reconciliación), sólo una
  // ve count === 1 y sólo esa asienta la comisión.
  const nowIso = now();
  const { count } = await prisma.pago.updateMany({
    where: { id: pago.id, estado: { not: "pagada" } },
    data: { estado: "pagada", updatedAt: nowIso }
  });
  if (count === 0) {
    return { alreadyConfirmed: true, pago: { ...pago, estado: "pagada" }, cuota, transaccion: null };
  }

  const asiento = await registrarTransaccionEscuela({
    escuelaId: cobro.escuelaId,
    montoTotal: cuota.montoFinal,
    mpPaymentId: pago.providerRef,
    provider: pago.provider
  });
  const pagoActualizado = await prisma.pago.update({
    where: { id: pago.id },
    data: {
      comisionVB: asiento?.comisionVB ?? null,
      montoNetoEscuela: asiento?.montoNeto ?? null,
      updatedAt: nowIso
    }
  });
  const cuotaActualizada = await prisma.cuotaAlumno.update({
    where: { id: cuota.id },
    data: { estado: "pagada", updatedAt: nowIso }
  });

  // ── 3. Rastro ───────────────────────────────────────────────────
  await recordAuditLog({
    actorId,
    action: "pago.confirmado",
    targetType: "Pago",
    targetId: pago.id,
    metadata: {
      cuotaId: cuota.id,
      escuelaId: cobro.escuelaId,
      provider: pago.provider,
      providerRef: pago.providerRef,
      monto: cuota.montoFinal,
      montoReportado: montoReportado ?? null,
      comisionVB: asiento?.comisionVB ?? null
    }
  });

  return { alreadyConfirmed: false, pago: pagoActualizado, cuota: cuotaActualizada, transaccion: asiento };
};
