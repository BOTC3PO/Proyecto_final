/**
 * Interés por mora de las cuotas escolares.
 *
 * La escuela elige si lo cobra, la tasa, si es mensual o anual y los días de gracia. El interés es simple
 * y se prorratea por día de atraso: mensual → tasa × días / 30; anual → tasa × días / 365. Se calcula al
 * leer la cuota (no hay tarea programada) y se congela en el `Pago` cuando la familia inicia el pago.
 *
 * Solo las cuotas (`tipo: "cuota"`) generan mora: las cooperadoras y los aportes solidarios son voluntarios.
 */

export const MORA_PERIODOS = ["mensual", "anual"] as const;
export type MoraPeriodo = (typeof MORA_PERIODOS)[number];

/** Tasa por defecto: 2 % mensual, apenas por encima de la inflación mensual (1,8 % en octubre de 2026). */
export const MORA_TASA_DEFAULT = 2;

/**
 * Tope de la plataforma (no lo fija una ley; lo dicen los Términos y Condiciones): la mora no puede superar
 * el 60 % anual o 2 veces la inflación anual, lo que sea mayor. Así la mora nunca queda por debajo de la
 * inflación y tampoco llega a montos que un juez podría reducir por excesivos (Código Civil y Comercial,
 * art. 771). La tasa mensual equivalente es la anual dividida por 12 (interés simple).
 * La inflación anual de referencia la carga el administrador (lib/comisiones.ts, parámetros de cobros).
 */
export const MORA_TOPE_ANUAL_BASE = 60;
export const INFLACION_ANUAL_DEFAULT = 24;

export const topesMora = (inflacionAnualPct = INFLACION_ANUAL_DEFAULT): Record<MoraPeriodo, number> => {
  const anual = Math.max(MORA_TOPE_ANUAL_BASE, 2 * (Number(inflacionAnualPct) || 0));
  return { anual: Math.round(anual * 100) / 100, mensual: Math.round((anual / 12) * 100) / 100 };
};

/** Topes con la inflación por defecto (para mostrar y para pruebas). */
export const MORA_TASA_MAX: Record<MoraPeriodo, number> = topesMora();
export const MORA_DIAS_GRACIA_MAX = 60;

const DIA_MS = 24 * 60 * 60 * 1000;
const round2 = (n: number) => Math.round(n * 100) / 100;

export type ConfigMora = {
  moraActiva: boolean;
  moraTasa: number;
  moraPeriodo: string;
  moraDiasGracia: number;
};

export type CalculoMora = {
  /** La cuota pasó su vencimiento (con o sin interés). */
  vencida: boolean;
  /** Días que se cobran (después de la gracia). */
  diasAtraso: number;
  interesMora: number;
  montoAPagar: number;
};

/** Normaliza lo guardado: período válido y tasa dentro del tope. */
export const tasaEfectiva = (
  cfg: Pick<ConfigMora, "moraTasa" | "moraPeriodo">,
  topes: Record<MoraPeriodo, number> = MORA_TASA_MAX,
) => {
  const periodo: MoraPeriodo = cfg.moraPeriodo === "anual" ? "anual" : "mensual";
  const tasa = Math.min(Math.max(Number(cfg.moraTasa) || 0, 0), topes[periodo]);
  return { periodo, tasa };
};

export function calcularMora(
  monto: number,
  vencimiento: string | null | undefined,
  cfg: ConfigMora | null | undefined,
  opts: { tipo?: string | null; ahora?: Date; topes?: Record<MoraPeriodo, number> } = {},
): CalculoMora {
  const sinMora = {
    vencida: false,
    diasAtraso: 0,
    interesMora: 0,
    montoAPagar: round2(monto),
  };
  if (!vencimiento) return sinMora;
  const vence = new Date(vencimiento).getTime();
  if (!Number.isFinite(vence)) return sinMora;
  const ahora = (opts.ahora ?? new Date()).getTime();
  if (ahora <= vence) return sinMora;

  const vencida = { ...sinMora, vencida: true };
  if ((opts.tipo ?? "cuota") !== "cuota" || !cfg?.moraActiva) return vencida;

  const gracia = Math.min(Math.max(Math.floor(cfg.moraDiasGracia || 0), 0), MORA_DIAS_GRACIA_MAX);
  const diasAtraso = Math.max(Math.floor((ahora - vence) / DIA_MS) - gracia, 0);
  const { periodo, tasa } = tasaEfectiva(cfg, opts.topes);
  const base = periodo === "mensual" ? 30 : 365;
  const interesMora = round2(monto * (tasa / 100) * (diasAtraso / base));
  return {
    vencida: true,
    diasAtraso,
    interesMora,
    montoAPagar: round2(monto + interesMora),
  };
}
