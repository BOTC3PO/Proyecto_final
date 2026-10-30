/**
 * L13 — plazos de conservación del resto de los datos (los mensajes tienen el suyo en retencion-mensajes.ts).
 * Principio de finalidad de la Ley 25.326 (art. 4, inc. 7): no guardar datos personales más de lo necesario.
 *
 * - Sesiones (refresh tokens): se borran 30 días después de vencer.
 * - Enlaces de recuperación de contraseña: se borran a los 30 días.
 * - Tokens push sin actualizar en un año: se borran (el teléfono ya no usa la app).
 * - Cuentas que un administrador marcó como borradas: se anonimizan pasados USUARIOS_BORRADOS_ANONIMIZAR_DIAS
 *   (30 por defecto), igual que una baja por autoservicio.
 * - Registro de auditoría: se conserva 10 años (registros contables, Código Civil y Comercial, art. 328).
 *
 * Las notas, la asistencia y las cuotas no se borran: son registro académico y contable de la escuela.
 * Las cuentas inactivas nunca se borran solas: son el registro educativo del alumno (decisión de Javier,
 * 2026-10-29).
 */
import { prisma } from "./prisma";
import { ENV } from "./env";
import { anonimizarUsuario, DOMINIO_ANONIMO } from "./anonimizar-usuario";

const DIA_MS = 24 * 60 * 60 * 1000;
const haceDias = (ahora: Date, dias: number) => new Date(ahora.getTime() - dias * DIA_MS);

export async function purgarDatosVencidos(ahora = new Date()) {
  const r = { sesiones: 0, enlaces: 0, push: 0, auditoria: 0, cuentasAnonimizadas: 0 };
  r.sesiones = (await prisma.refreshToken.deleteMany({ where: { expiresAt: { lt: haceDias(ahora, 30) } } })).count;
  r.enlaces = (await prisma.passwordResetToken.deleteMany({ where: { createdAt: { lt: haceDias(ahora, 30).toISOString() } } })).count;
  r.push = (await prisma.pushToken.deleteMany({ where: { updatedAt: { lt: haceDias(ahora, 365).toISOString() } } })).count;
  const corteAuditoria = new Date(ahora.getTime());
  corteAuditoria.setUTCFullYear(corteAuditoria.getUTCFullYear() - 10);
  r.auditoria = (await prisma.auditLog.deleteMany({ where: { timestamp: { lt: corteAuditoria.toISOString() } } })).count;

  const dias = ENV.USUARIOS_BORRADOS_ANONIMIZAR_DIAS;
  if (Number.isFinite(dias) && dias >= 0) {
    const pendientes = await prisma.usuario.findMany({
      where: {
        isDeleted: true,
        updatedAt: { lt: haceDias(ahora, dias).toISOString() },
        NOT: { email: { endsWith: `@${DOMINIO_ANONIMO}` } }
      },
      select: { id: true },
      take: 500
    });
    for (const u of pendientes) {
      await anonimizarUsuario(u.id, ahora.toISOString());
      r.cuentasAnonimizadas++;
    }
  }
  return r;
}
