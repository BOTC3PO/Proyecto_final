/** Respuestas con el mismo formato que la API del servidor (`{ error }` en los errores). */
export const json = (cuerpo: unknown, status = 200) =>
  new Response(JSON.stringify(cuerpo), { status, headers: { "Content-Type": "application/json" } });

export const error = (status: number, mensaje: string, extra: Record<string, unknown> = {}) => json({ error: mensaje, ...extra }, status);

/** Lo que depende del servidor o de otras personas (mensajes, pagos, economía del aula...). */
export const sinConexion = () =>
  error(503, "Necesita conexión: esta función no está disponible sin conexión.", { code: "SIN_CONEXION" });

export async function leerJson<T = Record<string, unknown>>(req: Request): Promise<T> {
  try {
    const texto = await req.text();
    return (texto ? JSON.parse(texto) : {}) as T;
  } catch {
    return {} as T;
  }
}
