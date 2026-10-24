/**
 * H10 — validación común de cuerpos de pedido con Zod. Si el cuerpo no cumple el esquema se responde 400 con el
 * primer problema (campo y motivo) y se devuelve `null`: quien llama solo tiene que cortar.
 */
import type { Request, Response } from "express";
import type { ZodType } from "zod";

export function validarCuerpo<T>(schema: ZodType<T>, req: Request, res: Response): T | null {
  const r = schema.safeParse(req.body ?? {});
  if (r.success) return r.data;
  const problema = r.error.issues[0];
  const campo = problema?.path?.join(".") || "cuerpo";
  res.status(400).json({ error: `${campo}: ${problema?.message ?? "inválido"}`, campo });
  return null;
}
