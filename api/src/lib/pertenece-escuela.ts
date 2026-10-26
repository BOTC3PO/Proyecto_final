import { prisma } from "./prisma";

/**
 * ¿La persona pertenece a la escuela? Se mira la pertenencia real (membresía activa) y no lo que venga
 * en el pedido. Compat con filas anteriores al backfill de membresías: `usuarios.escuelaId`.
 */
export const perteneceAEscuela = async (escuelaId: string, usuarioId: string): Promise<boolean> => {
  const membresia = await prisma.membresia.findFirst({
    where: { usuarioId, escuelaId, estado: "activa" }
  });
  if (membresia) return true;
  const usuario = await prisma.usuario.findFirst({ where: { id: usuarioId } });
  return usuario?.escuelaId === escuelaId;
};
