/**
 * Borrar un perfil del dispositivo con todo lo que guardó: sesiones, progreso, intentos, favoritos, desbloqueos, cola de
 * sincronización y, si es un profesor local, sus módulos propios. No toca la cuenta de la plataforma.
 */
import type { Contexto } from "./contexto";

export async function borrarPerfilDelDispositivo(ctx: Contexto, perfil: { id: string; tipo: string }) {
  if (perfil.tipo === "local") {
    const propios = "SELECT id FROM modulos WHERE owner_user_id = ? AND origen = 'propio'";
    await ctx.almacen.lote("contenido", [
      { sql: `DELETE FROM plantillas WHERE modulo_id IN (${propios})`, params: [perfil.id] },
      { sql: `DELETE FROM quizzes WHERE modulo_id IN (${propios})`, params: [perfil.id] },
      { sql: "DELETE FROM modulos WHERE owner_user_id = ? AND origen = 'propio'", params: [perfil.id] },
    ]);
  }
  // `eventos` no tiene clave foránea (hay eventos del dispositivo); el resto se borra en cascada con el perfil.
  await ctx.almacen.lote("progreso", [
    { sql: "DELETE FROM eventos WHERE perfil_id = ?", params: [perfil.id] },
    { sql: "DELETE FROM perfiles WHERE id = ?", params: [perfil.id] },
  ]);
}
