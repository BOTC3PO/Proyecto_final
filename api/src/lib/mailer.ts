/**
 * E1 — correo saliente. Un solo punto de envío para toda la API.
 *
 * Se configura con SMTP_HOST/PORT/SECURE/USER/PASS/FROM (ver lib/env.ts). Sin SMTP_HOST no se envía nada:
 * en desarrollo el mensaje se escribe en la consola para poder probar el flujo; en producción solo queda un
 * aviso (nunca el contenido, que puede llevar un enlace de un solo uso).
 */
import nodemailer, { type Transporter } from "nodemailer";
import { ENV } from "./env";

export type Correo = { para: string; asunto: string; texto: string; html?: string };

let transporte: Transporter | null = null;

const obtenerTransporte = () => {
  if (!ENV.SMTP_HOST) return null;
  if (!transporte) {
    transporte = nodemailer.createTransport({
      host: ENV.SMTP_HOST,
      port: ENV.SMTP_PORT,
      secure: ENV.SMTP_SECURE,
      auth: ENV.SMTP_USER ? { user: ENV.SMTP_USER, pass: ENV.SMTP_PASS } : undefined
    });
  }
  return transporte;
};

/** Reemplazo para pruebas: guarda los correos en vez de enviarlos. */
let interceptor: ((c: Correo) => void) | null = null;
export const interceptarCorreos = (fn: ((c: Correo) => void) | null) => {
  interceptor = fn;
};

/** Envía el correo. Devuelve false si no se pudo (sin configuración o error del servidor de correo). */
export async function enviarCorreo(correo: Correo): Promise<boolean> {
  if (interceptor) {
    interceptor(correo);
    return true;
  }
  const t = obtenerTransporte();
  if (!t) {
    if (ENV.NODE_ENV !== "production") {
      console.info(`[correo] (sin SMTP configurado) Para: ${correo.para}\nAsunto: ${correo.asunto}\n${correo.texto}`);
    } else {
      console.warn("[correo] SMTP_HOST no está configurado: no se envió un correo.");
    }
    return false;
  }
  try {
    await t.sendMail({ from: ENV.SMTP_FROM, to: correo.para, subject: correo.asunto, text: correo.texto, html: correo.html });
    return true;
  } catch (err) {
    console.error("[correo] no se pudo enviar:", err instanceof Error ? err.message : err);
    return false;
  }
}
