import { z } from "zod";

const texto = z.string();

/** POST /api/mensajeria/hilos — el largo máximo se controla en la ruta (responde 413, no 400). */
export const NuevoMensajeSchema = z.object({
  destinatarioId: texto.trim().min(1, "requerido").max(200),
  body: texto.trim().min(1, "requerido"),
});

export const DESTINOS_AVISO = ["todos", "padres", "alumnos", "profesores"] as const;

/** Un destino desconocido se toma como "todos" (comportamiento histórico), no como error. */
const destino = z.enum(DESTINOS_AVISO).catch("todos");

export const NuevoAvisoSchema = z.object({
  titulo: texto.trim().min(1, "requerido"),
  cuerpo: texto.trim().min(1, "requerido"),
  destino: destino.optional().default("todos"),
  aulaId: z.string().max(200).nullish(),
});

export const EditarAvisoSchema = z.object({
  titulo: texto.trim().optional(),
  cuerpo: texto.trim().optional(),
  destino: z.enum(DESTINOS_AVISO).optional().catch(undefined),
  aulaId: z.string().max(200).nullish(),
});

export const ReporteMensajeSchema = z.object({
  motivo: z.string().nullish(),
});
