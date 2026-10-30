/**
 * Modelo de comisión.
 *
 * Helpers de cálculo y registro contable de la comisión que VB retiene a las
 * escuelas. La escuela conecta su propia cuenta de Mercado Pago por OAuth
 * (`EscuelaPasarela`) y el split lo hace Mercado Pago con `marketplace_fee`:
 * VB no maneja los fondos de la escuela, sólo cobra su comisión y lleva el
 * registro contable. La comisión es escalonada (ver `pctEscalonado`).
 */
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma";

/** Rango de comisión: pagos domésticos (MercadoPago/Argentina) vs internacionales (Cryptomus). El mínimo
 * doméstico es el 3 % del servicio de mantenimiento. */
export const COMISION_PCT_RANGO_AR = { min: 3, max: 7 } as const;
export const COMISION_PCT_RANGO_INTL = { min: 1, max: 2 } as const;
/** Cooperadoras y aportes solidarios: de 0 % a 1 %, a elección de la institución. */
export const COMISION_PCT_RANGO_APORTES = { min: 0, max: 1 } as const;
export const DEFAULT_COMISION_PCT_AR = 6;
export const DEFAULT_COMISION_PCT_INTL = 1.5;

/**
 * Comisión escalonada (decisión del 2026-10-28). Sobre el 6 % de base se descuenta un punto por cada
 * condición: la cuota supera los $100.000, la escuela tiene 30 alumnos o más, y otro con 350 o más.
 * Nunca baja del 3 % y nunca supera $40.000 por cuota. El objetivo es que sea accesible, no maximizar.
 */
export type ComisionParams = {
  basePct: number;
  minimoPct: number;
  umbralCuota: number;
  umbralAlumnos: number;
  umbralAlumnosGrande: number;
  topeMonto: number;
  /** Inflación anual de referencia (%): fija el tope de la mora (lib/mora.ts). */
  inflacionAnualPct: number;
};
export const COMISION_PARAMS_DEFAULT: ComisionParams = {
  basePct: 6,
  minimoPct: 3,
  umbralCuota: 100_000,
  umbralAlumnos: 30,
  umbralAlumnosGrande: 350,
  topeMonto: 40_000,
  inflacionAnualPct: 24,
};

const round2 = (n: number) => Math.round(n * 100) / 100;
const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

/** Sólo Mercado Pago (y los cobros manuales, típicamente locales) se consideran
 * pago doméstico; el resto (hoy Cryptomus) paga la tarifa internacional. */
const esProviderDomestico = (provider: string | null | undefined) =>
  !provider || provider === "mercadopago" || provider === "manual";

export const esCobroVoluntario = (tipo: string | null | undefined) =>
  tipo === "cooperadora" || tipo === "aporte_solidario";

/** Porcentaje escalonado para una cuota doméstica. */
export function pctEscalonado(
  monto: number,
  alumnos: number,
  p: ComisionParams = COMISION_PARAMS_DEFAULT,
): number {
  let pct = p.basePct;
  if (monto > p.umbralCuota) pct -= 1;
  if (alumnos >= p.umbralAlumnos) pct -= 1;
  if (alumnos >= p.umbralAlumnosGrande) pct -= 1;
  return Math.max(pct, p.minimoPct);
}

export function calcularComision(
  montoTotal: number,
  provider: string | null | undefined,
  escuela: {
    comisionPct: number | null | undefined;
    comisionPctIntl: number | null | undefined;
    comisionPctAportes?: number | null;
  },
  opts: {
    alumnos?: number;
    tipo?: string | null;
    params?: ComisionParams;
  } = {},
): { comisionPct: number; comisionVB: number; montoNeto: number } {
  const params = opts.params ?? COMISION_PARAMS_DEFAULT;
  let pct: number;
  let tope = Infinity;
  if (esCobroVoluntario(opts.tipo)) {
    pct = clamp(
      escuela.comisionPctAportes ?? 0,
      COMISION_PCT_RANGO_APORTES.min,
      COMISION_PCT_RANGO_APORTES.max,
    );
  } else if (esProviderDomestico(provider)) {
    // `comisionPct` de la escuela es un acuerdo particular que fija el administrador; si no hay, escalonada.
    pct =
      escuela.comisionPct != null
        ? clamp(
            escuela.comisionPct,
            Math.max(COMISION_PCT_RANGO_AR.min, params.minimoPct),
            COMISION_PCT_RANGO_AR.max,
          )
        : pctEscalonado(montoTotal, opts.alumnos ?? 0, params);
    tope = params.topeMonto > 0 ? params.topeMonto : Infinity;
  } else {
    pct = clamp(
      escuela.comisionPctIntl ?? DEFAULT_COMISION_PCT_INTL,
      COMISION_PCT_RANGO_INTL.min,
      COMISION_PCT_RANGO_INTL.max,
    );
  }
  const comisionVB = round2(Math.min(montoTotal * (pct / 100), tope));
  return {
    comisionPct: pct,
    comisionVB,
    montoNeto: round2(montoTotal - comisionVB),
  };
}

/** Parámetros vigentes (los edita el administrador; si no hay fila, los de por defecto). */
export async function cargarParamsComision(): Promise<ComisionParams> {
  try {
    const fila = await prisma.comisionConfig.findFirst({
      where: { id: "default" },
    });
    if (!fila) return COMISION_PARAMS_DEFAULT;
    return normalizarParamsComision(JSON.parse(fila.json));
  } catch {
    return COMISION_PARAMS_DEFAULT;
  }
}

export function normalizarParamsComision(raw: unknown): ComisionParams {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const num = (k: keyof ComisionParams, min: number, max: number) => {
    const v = r[k];
    return typeof v === "number" && Number.isFinite(v)
      ? clamp(v, min, max)
      : COMISION_PARAMS_DEFAULT[k];
  };
  const minimoPct = num("minimoPct", COMISION_PCT_RANGO_AR.min, COMISION_PCT_RANGO_AR.max);
  return {
    basePct: Math.max(
      num("basePct", COMISION_PCT_RANGO_AR.min, COMISION_PCT_RANGO_AR.max),
      minimoPct,
    ),
    minimoPct,
    umbralCuota: num("umbralCuota", 0, 1e9),
    umbralAlumnos: Math.round(num("umbralAlumnos", 1, 1e6)),
    umbralAlumnosGrande: Math.round(num("umbralAlumnosGrande", 1, 1e6)),
    topeMonto: num("topeMonto", 0, 1e9),
    inflacionAnualPct: num("inflacionAnualPct", 0, 10_000),
  };
}

/** Alumnos activos de la escuela: lo que mueve los escalones de 30 y 350. */
export const contarAlumnosEscuela = (escuelaId: string) =>
  prisma.membresia.count({
    where: { escuelaId, rol: "STUDENT", estado: "activa" },
  });

const genTxId = () => `txe-${randomUUID()}`;

/**
 * Registra una transacción contable para una escuela (siempre — no existe
 * modo "centralizado"). Es defensivo: cualquier error se traga para no
 * romper el flujo de acreditación que lo invoca.
 */
export async function registrarTransaccionEscuela(params: {
  escuelaId: string;
  montoTotal: number;
  mpPaymentId?: string | null;
  /** de qué pasarela vino el cobro. Default "mercadopago" (todo lo pre-Fase-3,
   * el SaaS de suscripción, era siempre MP). */
  provider?: string;
  /** Interés por mora incluido en `montoTotal`: la escuela lo cobra entero, VB no comisiona sobre él. */
  interesMora?: number;
  /** Tipo del cobro (cuota, cooperadora, aporte_solidario). */
  tipo?: string | null;
  /** A quién le corresponde el neto: la escuela o su cooperadora. */
  titular?: "escuela" | "cooperadora";
}): Promise<{ id: string; comisionVB: number; montoNeto: number } | null> {
  try {
    const escuela = await prisma.escuela.findFirst({
      where: { id: params.escuelaId },
    });
    if (!escuela) return null;
    if (!params.montoTotal || params.montoTotal <= 0) return null;

    const interes = Math.max(params.interesMora ?? 0, 0);
    const [alumnos, paramsComision] = await Promise.all([
      contarAlumnosEscuela(params.escuelaId),
      cargarParamsComision(),
    ]);
    const { comisionVB } = calcularComision(params.montoTotal - interes, params.provider, escuela, {
      alumnos,
      tipo: params.tipo,
      params: paramsComision,
    });
    const montoNeto = round2(params.montoTotal - comisionVB);
    const row = await prisma.transaccionEscuela.create({
      data: {
        id: genTxId(),
        escuelaId: params.escuelaId,
        montoTotal: params.montoTotal,
        comisionVB,
        montoNeto,
        estado: "registrada",
        provider: params.provider ?? "mercadopago",
        titular: params.titular ?? "escuela",
        mpPaymentId: params.mpPaymentId ?? null,
        createdAt: new Date().toISOString(),
      },
    });
    return { id: row.id, comisionVB, montoNeto };
  } catch {
    // No bloquear la acreditación si el registro contable falla.
    return null;
  }
}
