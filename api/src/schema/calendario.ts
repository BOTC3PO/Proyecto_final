import { z } from "zod";

/** "AAAA-MM-DD" o con hora ("AAAA-MM-DDTHH:mm[:ss[.sss]][Z|±HH:mm]"), y que sea una fecha real. */
const FECHA = /^\d{4}-\d{2}-\d{2}([T ]\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/;
const fecha = z
  .string()
  .trim()
  .regex(FECHA, "fecha inválida")
  .refine((v) => !Number.isNaN(Date.parse(v.replace(" ", "T"))), "fecha inexistente");

const tipo = z.string().trim().min(1, "requerido").max(50);
const titulo = z.string().trim().min(1, "requerido").max(200);
const descripcion = z.string().max(2000).nullish();
const idOpcional = z.string().trim().max(200).nullish();

export const EventoEscuelaCrearSchema = z.object({
  tipo,
  titulo,
  descripcion,
  fechaInicio: fecha,
  fechaFin: fecha.nullish(),
  aulaId: idOpcional,
});

export const EventoEscuelaEditarSchema = z.object({
  tipo: tipo.optional().catch(undefined),
  titulo: titulo.optional().catch(undefined),
  descripcion: z.string().max(2000).optional(),
  fechaInicio: fecha.optional(),
  fechaFin: fecha.optional(),
  aulaId: z.string().trim().max(200).optional(),
});

export const ActividadAulaCrearSchema = z.object({
  aulaId: z.string().trim().min(1, "requerido").max(200),
  tipo,
  titulo,
  descripcion,
  fechaInicio: fecha,
  fechaFin: fecha.nullish(),
});

export const ActividadAulaEditarSchema = z.object({
  tipo: tipo.optional().catch(undefined),
  titulo: titulo.optional().catch(undefined),
  descripcion: z.string().max(2000).optional(),
  fechaInicio: fecha.optional(),
  fechaFin: fecha.optional(),
});
