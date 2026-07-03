/**
 * PLAN-B Fase 6 (ítem 34) — saldo de bienvenida para alumnos nuevos.
 *
 * Economía interna del juego (Puntos de Foco), no dinero real. Se acredita
 * SIEMPRE vía un movimiento de ledger (`EconomiaTransaccion`, el modelo que
 * de verdad lee/escribe el runtime — ver diagnóstico en
 * tareas_pendientes/PLAN-B-negocio-comisiones-pasarelas.md §Fase 6),
 * nunca con un UPDATE directo de `EconomiaSaldo`, para no romper la
 * auditoría (`EconomiaAuditoria` reconstruye saldos a partir del ledger).
 *
 * `SaldoUsuario`, `Billetera` y `LedgerMovimiento` son modelos legacy sin
 * ningún caller en el runtime (0 referencias en api/src) — no se tocan.
 *
 * Deviación del plan: el ítem 34 menciona "padre-crea-alumno" como una de
 * las altas que debe acreditar saldo. El único flujo así en el código es
 * `provisionarEspejoAlumnoParaPadre` (POST /api/padres/crear-cuenta-alumno),
 * pero esa cuenta queda marcada `tipoCuenta: "ESPEJO_ALUMNO"` — el mismo
 * mecanismo que el espejo de staff, EXCLUIDO explícitamente de "alumno
 * real" en todo el resto del código (asistencia, límites de facturación,
 * paneles de riesgo, boletines). Acreditar acá rompería esa convención: el
 * padre no está dando de alta un hijo nuevo, está creando su propio doble
 * para explorar la app. Se excluye a propósito.
 */
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma";

const DEFAULT_SALDO_INICIAL = 50;
const DEFAULT_MONEDA = "PF";

const resolveMonedaConfig = async (): Promise<string> => {
  const configRow = await prisma.economiaConfig.findFirst({ where: { id: "default" } });
  if (!configRow) return DEFAULT_MONEDA;
  try {
    const parsed = JSON.parse(configRow.json) as { moneda?: { codigo?: string } };
    return parsed.moneda?.codigo ?? DEFAULT_MONEDA;
  } catch {
    return DEFAULT_MONEDA;
  }
};

export async function acreditarSaldoInicial(params: {
  usuarioId: string;
  schoolId?: string | null;
}): Promise<{ monto: number; moneda: string } | null> {
  try {
    // Idempotencia: si el alta se reintenta (ej. el hook corre dos veces),
    // no duplicar el crédito.
    const yaAcreditado = await prisma.economiaTransaccion.findFirst({
      where: { usuarioId: params.usuarioId, tipo: "saldo_inicial" }
    });
    if (yaAcreditado) return null;

    const escuela = params.schoolId
      ? await prisma.escuela.findFirst({ where: { id: params.schoolId } })
      : null;
    const monto = escuela?.saldoInicialAlumno ?? DEFAULT_SALDO_INICIAL;
    if (!monto || monto <= 0) return null;

    const moneda = await resolveMonedaConfig();
    const now = new Date().toISOString();

    await prisma.economiaTransaccion.create({
      data: {
        id: randomUUID(),
        usuarioId: params.usuarioId,
        // Movimiento de sistema, no ligado a un aula puntual.
        aulaId: "sistema",
        schoolId: params.schoolId ?? "sistema",
        tipo: "saldo_inicial",
        monto,
        moneda,
        motivo: "Saldo inicial de bienvenida",
        createdAt: now
      }
    });

    const existingSaldo = await prisma.economiaSaldo.findFirst({
      where: { usuarioId: params.usuarioId }
    });
    if (existingSaldo) {
      await prisma.economiaSaldo.updateMany({
        where: { usuarioId: params.usuarioId },
        data: { saldo: (existingSaldo.saldo as number) + monto, moneda, updatedAt: now }
      });
    } else {
      await prisma.economiaSaldo.create({
        data: { id: randomUUID(), usuarioId: params.usuarioId, saldo: monto, moneda, updatedAt: now }
      });
    }

    return { monto, moneda };
  } catch {
    // Best-effort: un fallo acá no debe romper el alta del usuario (mismo
    // criterio que tryProvisionarEspejoParaNuevoStaff).
    return null;
  }
}
