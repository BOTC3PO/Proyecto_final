/**
 * L14 — derechos del titular de los datos por autoservicio (Ley 25.326, arts. 14 a 16; el RGPD como guía en
 * la portabilidad, art. 20).
 *
 * - GET  /api/mis-datos       descarga en JSON los datos personales de la cuenta.
 * - POST /api/mis-datos/baja  da de baja la cuenta: la desactiva, anonimiza lo que identifica a la persona,
 *                             cierra las sesiones y corta vínculos y membresías. Los registros escolares
 *                             (notas, asistencia, cuotas) quedan para la escuela, sin datos que identifiquen.
 */
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { verifyPassword } from "../lib/passwords";
import { recordAuditLog } from "../lib/audit-log";
import { anonimizarUsuario } from "../lib/anonimizar-usuario";

export const misDatos = Router();

const usuarioId = (req: { user?: { id?: string; _id?: { toString?: () => string } | string } }) =>
  req.user?.id ?? (typeof req.user?._id === "string" ? req.user._id : req.user?._id?.toString?.()) ?? null;

misDatos.get("/api/mis-datos", requireUser, async (req, res) => {
  const id = usuarioId(req as never);
  if (!id) return res.status(401).json({ error: "no autenticado" });
  const usuario = await prisma.usuario.findFirst({ where: { id, isDeleted: { not: true } } });
  if (!usuario) return res.status(404).json({ error: "cuenta no encontrada" });

  const [membresias, aulas, progreso, intentos, asistencias, cuotas, saldos, movimientos, mensajes, vinculos] =
    await Promise.all([
      prisma.membresia.findMany({ where: { usuarioId: id } }),
      prisma.claseMiembro.findMany({ where: { usuarioId: id } }),
      prisma.progresoModulo.findMany({ where: { usuarioId: id } }),
      prisma.quizAttempt.findMany({
        where: { userId: id },
        select: { id: true, quizId: true, status: true, startedAt: true, submittedAt: true, score: true, maxScore: true }
      }),
      prisma.asistencia.findMany({ where: { alumnoId: id } }),
      prisma.cuotaAlumno.findMany({ where: { OR: [{ alumnoId: id }, { pagadorId: id }] } }),
      prisma.saldoUsuario.findMany({ where: { usuarioId: id } }),
      prisma.ledgerMovimiento.findMany({ where: { usuarioId: id }, take: 5000 }),
      prisma.mensajeDirecto.findMany({ where: { senderId: id }, select: { id: true, hiloId: true, body: true, createdAt: true }, take: 5000 }),
      prisma.progresoModuloVinculo.findMany({ where: { OR: [{ parentId: id }, { childId: id }] } })
    ]);

  // Sin secretos: ni el hash de la contraseña ni datos internos de verificación.
  const { passwordHash: _hash, datosVerificacion: _ver, ...perfil } = usuario;
  void _hash;
  void _ver;

  await recordAuditLog({ actorId: id, action: "usuario.datos_descargados", targetType: "Usuario", targetId: id, metadata: {} });
  res.setHeader("Content-Disposition", `attachment; filename="virtualbook-mis-datos-${new Date().toISOString().slice(0, 10)}.json"`);
  res.json({
    generado: new Date().toISOString(),
    perfil,
    membresias,
    aulas,
    progreso,
    intentos,
    asistencias,
    cuotas,
    saldos,
    movimientos,
    mensajesEnviados: mensajes,
    vinculosFamiliares: vinculos
  });
});

misDatos.post("/api/mis-datos/baja", requireUser, async (req, res) => {
  const id = usuarioId(req as never);
  if (!id) return res.status(401).json({ error: "no autenticado" });
  const password = typeof req.body?.password === "string" ? req.body.password : "";
  const confirmacion = typeof req.body?.confirmacion === "string" ? req.body.confirmacion.trim().toUpperCase() : "";
  if (confirmacion !== "BAJA") {
    return res.status(400).json({ error: "Escribí BAJA para confirmar.", code: "SIN_CONFIRMACION" });
  }
  const usuario = await prisma.usuario.findFirst({ where: { id, isDeleted: { not: true } } });
  if (!usuario) return res.status(404).json({ error: "cuenta no encontrada" });
  if (usuario.esAdminPrincipal) {
    return res.status(409).json({ error: "El administrador principal no puede darse de baja.", code: "ADMIN_PRINCIPAL" });
  }
  if (!usuario.passwordHash || !(await verifyPassword(password, usuario.passwordHash))) {
    return res.status(403).json({ error: "La contraseña no es correcta.", code: "PASSWORD_INCORRECTA" });
  }

  await anonimizarUsuario(id);
  await recordAuditLog({ actorId: id, action: "usuario.baja_autoservicio", targetType: "Usuario", targetId: id, metadata: {} });
  res.json({ ok: true });
});
