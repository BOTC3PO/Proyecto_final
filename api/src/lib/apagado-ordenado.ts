import type { Server } from "node:http";

type Opciones = {
  /** Ventana en la que la instancia sigue atendiendo pero avisa a los clientes (`Connection: close`) que abran otra conexión. */
  drenajeMs: number;
  /** Tope total (drenaje + pedidos pendientes) antes de salir igual. */
  esperaMaximaMs: number;
  /** Se llama una vez que el servidor dejó de aceptar y terminó lo pendiente (p. ej. cerrar la base). */
  alCerrar: () => Promise<void> | void;
  salir: (codigo: number) => void;
  log: (mensaje: string) => void;
};

/**
 * Apagado ordenado de una instancia de la API (SIGTERM / SIGINT), pensado para estar detrás de Nginx con conexiones
 * keep-alive (upstream con `keepalive`):
 *
 *  1. DRENAJE: durante `drenajeMs` sigue atendiendo con normalidad pero cada respuesta lleva `Connection: close`; así Nginx
 *     cierra sus conexiones al terminar cada pedido y abre otras. Cerrar de golpe las conexiones inactivas choca con Nginx
 *     justo cuando va a reutilizar una, y esos POST ya enviados no se reintentan (502).
 *  2. Recién entonces deja de aceptar conexiones (`close`) y termina lo que quede en curso. Nginx reintenta en otra
 *     instancia los pedidos cuya conexión se rechaza (todavía no se envió nada), también los POST.
 *  3. Sale cuando no queda nada, o a los `esperaMaximaMs`.
 *
 * Devuelve la función de apagado (idempotente: la segunda señal no hace nada).
 */
export const crearApagadoOrdenado = (
  servidor: Pick<Server, "close" | "closeIdleConnections" | "prependListener">,
  op: Opciones
) => {
  let apagando = false;
  return (senal: string) => {
    if (apagando) return;
    apagando = true;
    op.log(`[apagado] ${senal}: aviso a los clientes (Connection: close), dejo de aceptar en ${op.drenajeMs} ms y espero los pedidos en curso (máx. ${op.esperaMaximaMs} ms)`);
    servidor.prependListener("request", (_req, res) => {
      res.setHeader("Connection", "close");
    });
    const limite = setTimeout(() => {
      op.log("[apagado] se agotó la espera: salgo con pedidos pendientes");
      op.salir(1);
    }, op.esperaMaximaMs);
    limite.unref?.();
    const cerrar = () => {
      servidor.close(() => {
        Promise.resolve(op.alCerrar())
          .catch((e) => op.log(`[apagado] error al cerrar: ${e instanceof Error ? e.message : String(e)}`))
          .finally(() => {
            clearTimeout(limite);
            op.log("[apagado] listo");
            op.salir(0);
          });
      });
      servidor.closeIdleConnections?.();
    };
    const t = setTimeout(cerrar, Math.max(0, op.drenajeMs));
    t.unref?.();
  };
};
