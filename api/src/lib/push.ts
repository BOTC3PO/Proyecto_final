/**
 * L4 — envío de notificaciones push a la app móvil por la API de Expo (https://exp.host/--/api/v2/push/send).
 *
 * Las notificaciones pasan por servidores externos (Expo, Google), así que NUNCA llevan datos personales:
 * solo un texto genérico («Tenés un mensaje nuevo») y, en `data`, a qué pantalla ir.
 * Se apaga con PUSH_ENABLED=false (apagado en pruebas). Los errores no frenan la acción que dispara el aviso.
 */
import { prisma } from "./prisma";
import { ENV } from "./env";

const EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send";
const LOTE = 100; // máximo de mensajes por pedido que acepta Expo

export type AvisoPush = { titulo: string; cuerpo: string; data?: Record<string, string> };

type TicketExpo = { status: "ok" | "error"; details?: { error?: string } };

/** Reemplazo para pruebas. */
let interceptor: ((tokens: string[], aviso: AvisoPush) => void) | null = null;
export const interceptarPush = (fn: typeof interceptor) => {
  interceptor = fn;
};

export async function enviarPush(usuarioIds: string[], aviso: AvisoPush): Promise<number> {
  const ids = [...new Set(usuarioIds.filter(Boolean))];
  if (ids.length === 0) return 0;
  if (!interceptor && !ENV.PUSH_ENABLED) return 0;
  try {
    const filas = await prisma.pushToken.findMany({ where: { userId: { in: ids } }, select: { token: true } });
    const tokens = filas.map((f) => f.token);
    if (tokens.length === 0) return 0;
    if (interceptor) {
      interceptor(tokens, aviso);
      return tokens.length;
    }
    for (let i = 0; i < tokens.length; i += LOTE) {
      const lote = tokens.slice(i, i + LOTE);
      const respuesta = await fetch(EXPO_PUSH_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(
          lote.map((to) => ({ to, title: aviso.titulo, body: aviso.cuerpo, data: aviso.data ?? {}, sound: "default" }))
        )
      });
      if (!respuesta.ok) {
        console.warn(`[push] Expo respondió ${respuesta.status}`);
        continue;
      }
      // Un teléfono que desinstaló la app devuelve DeviceNotRegistered: ese token se borra.
      const { data } = (await respuesta.json()) as { data?: TicketExpo[] };
      const vencidos = (data ?? [])
        .map((t, k) => (t.status === "error" && t.details?.error === "DeviceNotRegistered" ? lote[k] : null))
        .filter((t): t is string => Boolean(t));
      if (vencidos.length) await prisma.pushToken.deleteMany({ where: { token: { in: vencidos } } });
    }
    return tokens.length;
  } catch (err) {
    console.warn("[push] no se pudo enviar:", err instanceof Error ? err.message : err);
    return 0;
  }
}
