import { randomUUID } from "node:crypto";
import type { NextFunction, Request, Response } from "express";

/**
 * B2 — que los errores internos no lleguen al cliente.
 *
 * Muchas rutas hacen `res.status(400).json({ error: e.message })`. Con un error de Prisma, de
 * Node o de código eso muestra nombres de tablas, consultas, rutas de archivos o trazas. Este
 * filtro mira lo que se está por enviar: si un mensaje de error parece interno, lo cambia por uno
 * genérico con un código de referencia (el detalle queda en el log, con ese mismo código).
 * Los mensajes de validación ("Invalid payload", errores de Zod, los de las reglas de negocio)
 * pasan sin cambios.
 */

/** Señales de que el mensaje viene de las tripas del sistema y no de una regla pensada para el usuario. */
const PATRONES_INTERNOS: RegExp[] = [
  /prisma/i,
  /invalid `.*` invocation/i,
  /unique constraint|foreign key constraint|violates .* constraint|null value in column/i,
  /can'?t reach database|connection (terminated|refused|timeout)|too many clients|server closed the connection/i,
  /unknown (argument|field|arg)\b|unknown (relation|model)/i,
  /relation ".*" does not exist|column ".*" does not exist|syntax error at or near/i,
  /cannot read propert|is not a function|is not defined|is not iterable|undefined is not|of undefined|of null/i,
  /\bat .+\(.+:\d+:\d+\)|\bat [^\s]+:\d+:\d+/,
  /node_modules|[/\\](home|usr|var|app|opt|srv)[/\\]\S+\.(ts|js|json|sqlite|env)/i,
  /\b(ECONNREFUSED|ECONNRESET|ENOTFOUND|ETIMEDOUT|ENOENT|EACCES|EPERM|EADDRINUSE|EMFILE)\b/,
  /sqlite_|sqliteerror|better-sqlite/i,
  /unexpected token .* in json|json at position/i,
];

export const MENSAJE_GENERICO = "Error interno del servidor";

export function parecErrorInterno(mensaje: unknown): boolean {
  return typeof mensaje === "string" && PATRONES_INTERNOS.some((re) => re.test(mensaje));
}

/** Errores que son siempre internos, sin mirar el mensaje (TypeError, errores de Prisma, del sistema). */
export function esErrorInternoPorTipo(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const e = err as { name?: unknown; code?: unknown };
  const name = typeof e.name === "string" ? e.name : "";
  const clase = (err as { constructor?: { name?: string } }).constructor?.name ?? "";
  if (name.startsWith("PrismaClient") || clase.startsWith("PrismaClient")) return true;
  if (["TypeError", "ReferenceError", "RangeError", "EvalError", "URIError"].includes(name)) return true;
  if (typeof e.code === "string" && /^E[A-Z]{3,}$/.test(e.code)) return true; // códigos de Node: ENOENT, ECONNREFUSED...
  return false;
}

function referenciaNueva() {
  return randomUUID().slice(0, 8);
}

/**
 * Middleware: envuelve `res.json` para revisar las respuestas de error antes de enviarlas.
 * No se aplica en desarrollo, donde el detalle completo ayuda.
 */
export function ocultarErroresInternos(req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV === "development") return next();
  const jsonOriginal = res.json.bind(res);
  res.json = ((cuerpo?: unknown) => {
    if (
      res.statusCode >= 400 &&
      cuerpo &&
      typeof cuerpo === "object" &&
      !Array.isArray(cuerpo) &&
      parecErrorInterno((cuerpo as { error?: unknown }).error)
    ) {
      const referencia = referenciaNueva();
      console.error(`[api-error] ref=${referencia} ${req.method} ${req.originalUrl.split("?")[0]} ->`, (cuerpo as { error: unknown }).error);
      // Lo que falló por dentro no es un error del cliente: 500, aunque la ruta lo haya respondido como 400.
      res.status(500);
      return jsonOriginal({ error: MENSAJE_GENERICO, referencia });
    }
    return jsonOriginal(cuerpo);
  }) as typeof res.json;
  next();
}

/** Respuesta para el manejador global de errores (el último `app.use`). */
export function respuestaDeError(err: unknown, req: Pick<Request, "method" | "originalUrl">) {
  const status =
    typeof err === "object" && err !== null && "status" in err && typeof (err as { status: unknown }).status === "number"
      ? (err as { status: number }).status
      : 500;
  const mensaje =
    typeof err === "object" && err !== null && "message" in err && typeof (err as { message: unknown }).message === "string"
      ? (err as { message: string }).message
      : "";
  // JSON mal formado en el cuerpo: es un error del cliente, no interno.
  if (typeof err === "object" && err !== null && (err as { type?: unknown }).type === "entity.parse.failed") {
    return { status: 400, cuerpo: { error: "El cuerpo de la petición no es un JSON válido" } };
  }
  // Un error con status 4xx explícito (body-parser: "request entity too large", JSON mal formado) se
  // informa tal cual; todo lo demás, o cualquier cosa que parezca interna, sale genérico.
  const exponible = status >= 400 && status < 500 && mensaje.length > 0 && !parecErrorInterno(mensaje) && !esErrorInternoPorTipo(err);
  if (exponible) return { status, cuerpo: { error: mensaje } };
  const referencia = referenciaNueva();
  console.error(`[api-error] ref=${referencia} ${req.method} ${req.originalUrl.split("?")[0]} ->`, err);
  return { status: status >= 400 ? status : 500, cuerpo: { error: MENSAJE_GENERICO, referencia } };
}
