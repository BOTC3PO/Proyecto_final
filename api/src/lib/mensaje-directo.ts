/**
 * Envío de un mensaje 1 a 1 dentro de una escuela: busca (o crea) el hilo entre las dos personas, guarda el
 * mensaje y actualiza la vista previa y los no leídos. Lo usan la mensajería y los avisos del sistema (por
 * ejemplo, cuando la escuela baja un material, se le avisa al autor).
 */
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma";
import { enviarPush } from "./push";

const genId = (prefijo: string) => `${prefijo}-${randomUUID()}`;

export async function enviarMensajeDirecto(params: {
  escuelaId: string;
  remitenteId: string;
  destinatarioId: string;
  body: string;
}): Promise<{ hiloId: string; msgId: string }> {
  const { escuelaId, remitenteId, destinatarioId } = params;
  const body = params.body.trim();
  const now = new Date().toISOString();

  let hilo = await prisma.hilo.findFirst({
    where: {
      escuelaId,
      OR: [
        { usuarioA: remitenteId, usuarioB: destinatarioId },
        { usuarioA: destinatarioId, usuarioB: remitenteId }
      ]
    }
  });
  if (!hilo) {
    hilo = await prisma.hilo.create({
      data: {
        id: genId("hilo"),
        escuelaId,
        usuarioA: remitenteId,
        usuarioB: destinatarioId,
        ultimoMsg: body.slice(0, 80),
        ultimoAt: now,
        createdAt: now
      }
    });
  }

  const msgId = genId("msg");
  await prisma.mensajeDirecto.create({
    data: { id: msgId, hiloId: hilo.id, senderId: remitenteId, body, leido: 0, createdAt: now }
  });
  const noLeidos = hilo.usuarioA === remitenteId ? { noLeidosB: { increment: 1 } } : { noLeidosA: { increment: 1 } };
  await prisma.hilo.update({
    where: { id: hilo.id },
    data: { ultimoMsg: body.slice(0, 80), ultimoAt: now, ...noLeidos }
  });
  // Sin el texto ni el remitente: la notificación pasa por servidores de terceros.
  void enviarPush([destinatarioId], {
    titulo: "Virtual Book",
    cuerpo: "Tenés un mensaje nuevo.",
    data: { pantalla: "mensajes", hiloId: hilo.id }
  });
  return { hiloId: hilo.id, msgId };
}
