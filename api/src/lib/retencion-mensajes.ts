/**
 * K14 — conservación de mensajes. Los mensajes directos y los de soporte se borran pasados N años
 * (`MENSAJES_RETENCION_ANOS`, 8 por defecto; 0 desactiva el borrado), para no acumular conversaciones de
 * personas (incluidos menores) que ya no hacen falta: esto no es una plataforma de mensajería. También se
 * borran los hilos que quedan vacíos y los reportes ya resueltos con esa antigüedad; los reportes pendientes
 * se conservan hasta que moderación los resuelva.
 */
import { prisma } from "./prisma";
import { ENV } from "./env";
import { withAdvisoryLock } from "./pg-lock";

const DIA_MS = 24 * 60 * 60 * 1000;

export const fechaCorte = (ahora: Date, anios: number): string => {
  const d = new Date(ahora.getTime());
  d.setUTCFullYear(d.getUTCFullYear() - anios);
  return d.toISOString();
};

export async function purgarMensajesVencidos(ahora = new Date(), anios = ENV.MENSAJES_RETENCION_ANOS) {
  if (!Number.isFinite(anios) || anios <= 0) return { mensajes: 0, hilos: 0, soporte: 0, reportes: 0 };
  const corte = fechaCorte(ahora, anios);

  const mensajes = await prisma.mensajeDirecto.deleteMany({ where: { createdAt: { lt: corte } } });
  const soporte = await prisma.mensajeSoporte.deleteMany({ where: { createdAt: { lt: corte } } });
  const reportes = await prisma.mensajeReportado.deleteMany({
    where: { createdAt: { lt: corte }, estado: { not: "pendiente" } },
  });

  // Hilos viejos que ya no tienen mensajes.
  let hilos = 0;
  const hilosViejos = await prisma.hilo.findMany({ where: { createdAt: { lt: corte } }, select: { id: true }, take: 1000 });
  for (const h of hilosViejos) {
    if ((await prisma.mensajeDirecto.count({ where: { hiloId: h.id } })) === 0) {
      await prisma.hilo.delete({ where: { id: h.id } });
      hilos++;
    }
  }
  const soporteViejos = await prisma.hiloSoporte.findMany({ where: { createdAt: { lt: corte } }, select: { id: true }, take: 1000 });
  for (const h of soporteViejos) {
    if ((await prisma.mensajeSoporte.count({ where: { hiloId: h.id } })) === 0) {
      await prisma.soporteLectura.deleteMany({ where: { hiloId: h.id } });
      await prisma.hiloSoporte.delete({ where: { id: h.id } });
      hilos++;
    }
  }
  return { mensajes: mensajes.count, hilos, soporte: soporte.count, reportes: reportes.count };
}

/** Corre una vez al día (con candado para que no lo hagan dos instancias a la vez). */
export const scheduleRetencionMensajesJob = () => {
  if (!(ENV.MENSAJES_RETENCION_ANOS > 0)) return;
  const correr = async () => {
    try {
      await withAdvisoryLock("retencion-mensajes", async () => {
        const r = await purgarMensajesVencidos();
        if (r.mensajes || r.soporte || r.hilos || r.reportes) console.log("Retención de mensajes:", r);
      });
    } catch (error) {
      console.error("Retención de mensajes falló", error);
    }
  };
  setTimeout(correr, 60_000);
  setInterval(correr, DIA_MS).unref?.();
};
