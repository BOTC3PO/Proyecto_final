import { z } from "zod";

// SEC-LIBRO — visibility es opcional en el payload (default 'privado'
// si no viene). Solo se acepta 'privado' o 'escuela' (mismo modelo
// que datasets). 'publica' no se ofrece para libros porque hoy no
// existe una pantalla de descubrimiento de libros públicos.
export const BookVisibilitySchema = z.enum(["privado", "escuela"]);
export type BookVisibility = z.infer<typeof BookVisibilitySchema>;

export const BookSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  book: z.record(z.string(), z.unknown()),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime()
});

export type BookRecord = z.infer<typeof BookSchema>;
