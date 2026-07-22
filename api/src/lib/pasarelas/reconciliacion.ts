/**
 * PLAN-B Fase 4 — reconciliación: reintenta contra el provider los `Pago`
 * en `pendiente`/`en_proceso` más viejos que `maxAgeMinutes`, por si el
 * webhook nunca llegó (o llegó y se perdió). Usa `checkStatus` de cada
 * adapter (Fase 4 también) — mismo tratamiento pagada/fallida que el
 * webhook real en `routes/cobros.ts`.
 *
 * Los `Pago` con `provider: "manual"` no tienen adapter (se confirman a
 * mano vía `POST .../confirmar-pago`) — se saltean.
 */
import { prisma } from "../prisma";
import { ENV } from "../env";
import { getProvider } from "./index";
import { confirmarPago } from "../cobros-confirmacion";
import { withAdvisoryLock } from "../pg-lock";

const now = () => new Date().toISOString();

export const reconciliarPagosPendientes = async (maxAgeMinutes = ENV.RECONCILIACION_PAGO_MAX_AGE_MINUTES) => {
  const umbral = new Date(Date.now() - maxAgeMinutes * 60 * 1000).toISOString();
  const pendientes = (
    await prisma.pago.findMany({
      where: { estado: { in: ["pendiente", "en_proceso"] } }
    })
  ).filter((p) => p.provider !== "manual" && p.providerRef && String(p.createdAt) < umbral);

  let confirmados = 0;
  let fallidos = 0;
  let sinCambios = 0;

  for (const pago of pendientes) {
    const adapter = getProvider(pago.provider);
    if (!adapter?.checkStatus || !pago.providerRef) {
      sinCambios++;
      continue;
    }

    let estado: string | null;
    try {
      estado = await adapter.checkStatus(pago.providerRef);
    } catch {
      estado = null;
    }

    if (estado === "pagada") {
      const cuota = await prisma.cuotaAlumno.findFirst({ where: { pagoId: pago.id } });
      const cobro = cuota ? await prisma.cobroEscuela.findFirst({ where: { id: cuota.cobroId } }) : null;
      if (cuota && cobro) {
        await confirmarPago(pago as never, cuota, cobro);
        confirmados++;
      } else {
        sinCambios++;
      }
    } else if (estado === "fallida") {
      await prisma.pago.update({ where: { id: pago.id }, data: { estado: "fallida", updatedAt: now() } });
      fallidos++;
    } else {
      sinCambios++;
    }
  }

  return { evaluados: pendientes.length, confirmados, fallidos, sinCambios };
};

export const scheduleReconciliacionJob = () => {
  if (!ENV.RECONCILIACION_JOB_ENABLED) return;
  const intervalMs = Math.max(ENV.RECONCILIACION_JOB_INTERVAL_MINUTES, 5) * 60 * 1000;
  const runJob = async () => {
    try {
      // Advisory lock — evita confirmar/reintentar el mismo pago dos
      // veces si corren 2+ instancias del API (ver tareas_pendientes/
      // PLAN-escalabilidad-api.md).
      await withAdvisoryLock("pasarelas-reconciliacion", () => reconciliarPagosPendientes());
    } catch (error) {
      console.error("Reconciliación de pagos falló", error);
    }
  };
  runJob();
  setInterval(runJob, intervalMs);
};
