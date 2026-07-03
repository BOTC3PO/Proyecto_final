/**
 * PLAN-B Fase 2/4 — confirmación de un `Pago`. Compartido entre
 * `routes/cobros.ts` (confirmación manual + webhook real de cada
 * provider) y el job de reconciliación de Fase 4
 * (`lib/pasarelas/reconciliacion.ts`) — moverlo fuera de `routes/` evita
 * que el job tenga que importar un archivo de rutas.
 */
import { prisma } from "./prisma";
import { registrarTransaccionEscuela } from "./comisiones";

const now = () => new Date().toISOString();

export const confirmarPago = async (
  pago: { id: string; estado: string; provider: string; providerRef: string | null },
  cuota: { id: string; montoFinal: number },
  cobro: { escuelaId: string }
) => {
  if (pago.estado === "pagada") return { alreadyConfirmed: true, pago, cuota, transaccion: null };
  const nowIso = now();
  const asiento = await registrarTransaccionEscuela({
    escuelaId: cobro.escuelaId,
    montoTotal: cuota.montoFinal,
    mpPaymentId: pago.providerRef,
    provider: pago.provider
  });
  const pagoActualizado = await prisma.pago.update({
    where: { id: pago.id },
    data: {
      estado: "pagada",
      comisionVB: asiento?.comisionVB ?? null,
      montoNetoEscuela: asiento?.montoNeto ?? null,
      updatedAt: nowIso
    }
  });
  const cuotaActualizada = await prisma.cuotaAlumno.update({
    where: { id: cuota.id },
    data: { estado: "pagada", updatedAt: nowIso }
  });
  return { alreadyConfirmed: false, pago: pagoActualizado, cuota: cuotaActualizada, transaccion: asiento };
};
