import { prisma } from "./prisma";

/**
 * K9 — cuántas monedas da completar un módulo/cuestionario. Lo define SOLO el administrador:
 *  1. si el ADMIN fijó un monto para ese módulo (catálogo de recompensas, tipo "modulo", activo), vale ese;
 *  2. si no, vale la tabla fija por dificultad de la configuración de economía (más dificultad, más monedas).
 * Los docentes eligen la dificultad de su cuestionario, no cuánto paga.
 */
export type Dificultad = "basico" | "intermedio" | "avanzado";

export const RECOMPENSA_POR_DIFICULTAD_DEFECTO: Record<Dificultad, number> = {
  basico: 10,
  intermedio: 20,
  avanzado: 30
};

const DIFICULTADES: readonly Dificultad[] = ["basico", "intermedio", "avanzado"];
const MONEDA_DEFECTO = "PF";

const esDificultad = (v: unknown): v is Dificultad => DIFICULTADES.includes(v as Dificultad);

export async function cargarTablaRecompensas(): Promise<{ moneda: string; tabla: Record<Dificultad, number> }> {
  let moneda = MONEDA_DEFECTO;
  const tabla = { ...RECOMPENSA_POR_DIFICULTAD_DEFECTO };
  const fila = await prisma.economiaConfig.findFirst({ where: { id: "default" } });
  if (fila) {
    try {
      const j = JSON.parse(fila.json) as {
        moneda?: { codigo?: string };
        recompensasPorDificultad?: Partial<Record<Dificultad, unknown>>;
      };
      moneda = j.moneda?.codigo ?? moneda;
      for (const d of DIFICULTADES) {
        const v = j.recompensasPorDificultad?.[d];
        if (typeof v === "number" && Number.isFinite(v) && v >= 0) tabla[d] = v;
      }
    } catch {
      /* configuración ilegible: valen los valores por defecto */
    }
  }
  return { moneda, tabla };
}

/** Dificultad de un cuestionario (la que eligió el docente en su configuración) y su módulo. */
export async function dificultadDeQuiz(quizId: string): Promise<{ dificultad: Dificultad; moduloId: string | null }> {
  const quiz = await prisma.quiz.findFirst({ where: { id: quizId } });
  if (!quiz) return { dificultad: "basico", moduloId: null };
  const version = quiz.currentVersionId
    ? await prisma.quizVersion.findFirst({ where: { id: quiz.currentVersionId } })
    : null;
  // Solo cuenta una dificultad ELEGIDA en la configuración del cuestionario; sin ella vale la básica (el
  // default de la configuración de evaluación es otro y haría pagar de más a cuestionarios sin configurar).
  let elegida: unknown;
  try {
    elegida = version?.settings ? (JSON.parse(version.settings) as { dificultadInicial?: unknown }).dificultadInicial : undefined;
  } catch {
    elegida = undefined;
  }
  return { dificultad: esDificultad(elegida) ? elegida : "basico", moduloId: quiz.moduleId ?? null };
}

export async function resolverRecompensa(params: {
  moduloId?: string | null;
  dificultad?: Dificultad | null;
}): Promise<{ monto: number; moneda: string; origen: "modulo" | "dificultad" }> {
  const { moneda, tabla } = await cargarTablaRecompensas();
  if (params.moduloId) {
    const fijada = await prisma.economiaRecompensa.findFirst({
      where: { tipo: "modulo", referenciaId: params.moduloId, activo: true, isDeleted: { not: true } },
      orderBy: { updatedAt: "desc" }
    });
    if (fijada && typeof fijada.monto === "number" && fijada.monto > 0) {
      return { monto: fijada.monto, moneda, origen: "modulo" };
    }
  }
  return { monto: tabla[params.dificultad ?? "basico"], moneda, origen: "dificultad" };
}
