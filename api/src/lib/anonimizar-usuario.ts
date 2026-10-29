/**
 * Anonimiza una cuenta: borra lo que identifica a la persona (nombre, usuario, correo, fecha de nacimiento,
 * contraseña, datos de verificación), cierra sus sesiones, borra sus tokens push y corta membresías y
 * vínculos familiares. Los registros escolares (notas, asistencia, cuotas) quedan, sin datos personales.
 * La usan la baja por autoservicio (L14) y la conservación de datos (L13).
 */
import { prisma } from "./prisma";

export const DOMINIO_ANONIMO = "baja.invalid";

export async function anonimizarUsuario(id: string, ahora = new Date().toISOString()) {
  const corto = id.replace(/[^a-zA-Z0-9]/g, "").slice(-12);
  await prisma.$transaction([
    prisma.usuario.update({
      where: { id },
      data: {
        isDeleted: true,
        username: `baja-${corto}`,
        email: `baja-${corto}@${DOMINIO_ANONIMO}`,
        fullName: "Cuenta dada de baja",
        birthdate: null,
        passwordHash: null,
        datosVerificacion: null,
        updatedAt: ahora
      }
    }),
    prisma.refreshToken.updateMany({ where: { userId: id, revoked: false }, data: { revoked: true } }),
    prisma.pushToken.deleteMany({ where: { userId: id } }),
    prisma.membresia.updateMany({ where: { usuarioId: id, estado: "activa" }, data: { estado: "revocada", fechaBaja: ahora, updatedAt: ahora } }),
    prisma.progresoModuloVinculo.updateMany({
      where: { OR: [{ parentId: id }, { childId: id }], estado: { not: "revocado" } },
      data: { estado: "revocado", updatedAt: ahora }
    })
  ]);
}
