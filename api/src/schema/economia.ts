import { z } from "zod";

export const MonedaSchema = z.object({
  codigo: z.string().min(1),
  nombre: z.string().min(1),
  simbolo: z.string().min(1)
});

export const EconomiaConfigSchema = z.object({
  id: z.literal("general"),
  moneda: MonedaSchema,
  tasas: z.object({
    pf: z.number().nonnegative(),
    fci: z.number().nonnegative()
  }),
  inflacion: z.object({
    tasa: z.number().nonnegative(),
    activa: z.boolean()
  }),
  deflacion: z.object({
    tasa: z.number().nonnegative(),
    activa: z.boolean()
  }),
  updatedAt: z.string().datetime()
});

export const SaldoSchema = z.object({
  usuarioId: z.string().min(1),
  saldo: z.number().min(0),
  moneda: z.string().min(1),
  updatedAt: z.string().datetime()
});

export const RecompensaTipoSchema = z.enum(["modulo", "tarea", "bonus"]);

export const RecompensaSchema = z.object({
  id: z.string().min(1),
  tipo: RecompensaTipoSchema,
  referenciaId: z.string().min(1),
  nombre: z.string().min(1),
  descripcion: z.string().min(1).optional(),
  monto: z.number().positive(),
  moneda: z.string().min(1),
  activo: z.boolean(),
  updatedAt: z.string().datetime()
});

export const TransaccionTipoSchema = z.enum(["credito", "debito"]);

export const TransaccionSchema = z.object({
  id: z.string().min(1),
  usuarioId: z.string().min(1),
  tipo: TransaccionTipoSchema,
  monto: z.number().positive(),
  moneda: z.string().min(1),
  motivo: z.string().min(1),
  referenciaId: z.string().min(1).optional(),
  createdAt: z.string().datetime()
});

export const ModuloEconomiaSchema = z.object({
  moduloId: z.string().min(1),
  activo: z.boolean(),
  updatedAt: z.string().datetime()
});

export const EventoEconomicoSchema = z.object({
  id: z.string().min(1),
  nombre: z.string().min(1),
  tipo: z.enum(["inflacion", "deflacion", "bonus", "penalizacion", "otro"]),
  descripcion: z.string().min(1).optional(),
  tasa: z.number().nonnegative().optional(),
  activo: z.boolean(),
  updatedAt: z.string().datetime()
});

export type EconomiaConfig = z.infer<typeof EconomiaConfigSchema>;
export type Saldo = z.infer<typeof SaldoSchema>;
export type Recompensa = z.infer<typeof RecompensaSchema>;
export type Transaccion = z.infer<typeof TransaccionSchema>;
export type ModuloEconomia = z.infer<typeof ModuloEconomiaSchema>;
export type EventoEconomico = z.infer<typeof EventoEconomicoSchema>;
