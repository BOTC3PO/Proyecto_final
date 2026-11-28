/**
 * Verificación de escuela — gate de todo lo que mueve plata.
 *
 * Una escuela sin verificar puede usar el resto de la plataforma (aulas,
 * módulos, evaluaciones, boletines). Lo que NO puede es cobrarle a las
 * familias con la plataforma de por medio: eso es lo que expone a VB, que
 * además se lleva una comisión de cada cobro.
 *
 * La línea es deliberadamente una sola regla y no "limitar opciones": es un
 * único guard, sin casos borde que se descubren tarde. Y deja un onboarding
 * usable — la escuela trabaja mientras tramita, y verificar le desbloquea
 * la plata, así que tiene incentivo propio para apurarlo.
 */
import { prisma } from "./prisma";

export const ESTADOS_VERIFICACION = ["pendiente", "verificada", "rechazada"] as const;
export type EstadoVerificacion = (typeof ESTADOS_VERIFICACION)[number];

export const escuelaPuedeCobrar = async (escuelaId: string): Promise<boolean> => {
  const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
  return escuela?.estadoVerificacion === "verificada";
};

/**
 * Devuelve `true` si ya respondió (y entonces el caller debe cortar). Se
 * usa así para que cada ruta agregue una sola línea:
 *
 *   if (await bloquearSiNoVerificada(res, escuelaId)) return;
 */
export const bloquearSiNoVerificada = async (
  res: { status: (n: number) => { json: (b: unknown) => unknown } },
  escuelaId: string
): Promise<boolean> => {
  if (await escuelaPuedeCobrar(escuelaId)) return false;
  res.status(403).json({
    error:
      "La escuela todavía no está verificada. Contactá al administrador de la plataforma para habilitar los cobros.",
    code: "ESCUELA_NO_VERIFICADA"
  });
  return true;
};


/**
 * Quién puede EMITIR cobros y confirmar pagos en una escuela: el directivo
 * principal (el que la registró) o un directivo con la delegación
 * `Membresia.puedeCobrar`. Conectar la pasarela NO entra acá — decidir a
 * qué cuenta va la plata sigue siendo exclusivo del principal.
 *
 * ADMIN de plataforma pasa siempre: es soporte, y sus acciones quedan en el
 * audit log.
 */
/**
 * ¿Es hoy directivo de esa escuela? Lo que vale es la pertenencia actual, no el rol global ni figurar como
 * principal. Compat con filas anteriores al backfill de membresías (mismo criterio que `perteneceAEscuela`):
 * sin ninguna membresía en esa escuela, alcanza con `usuarios.escuelaId` + rol DIRECTIVO. Una membresía
 * revocada no tiene esa salida.
 */
export const directivoVigente = async (
  usuario: { id: string; roles?: string[]; role?: string },
  escuelaId: string
): Promise<{ puedeCobrar: boolean } | null> => {
  const membresias = await prisma.membresia.findMany({ where: { usuarioId: usuario.id, escuelaId } });
  const activa = membresias.find((m) => m.rol === "DIRECTIVO" && m.estado === "activa");
  if (activa) return { puedeCobrar: activa.puedeCobrar === true };
  if (membresias.length > 0) return null;
  const roles = usuario.roles ?? (usuario.role ? [usuario.role] : []);
  if (!roles.includes("DIRECTIVO")) return null;
  const fila = await prisma.usuario.findFirst({ where: { id: usuario.id } });
  return fila?.escuelaId === escuelaId ? { puedeCobrar: false } : null;
};

export const puedeEmitirCobros = async (
  usuario: { id?: string; roles?: string[]; role?: string } | undefined,
  escuelaId: string
): Promise<boolean> => {
  const roles = usuario?.roles ?? (usuario?.role ? [usuario.role] : []);
  if (roles.includes("ADMIN")) return true;
  if (!usuario?.id) return false;

  const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
  if (!escuela) return false;
  // Un principal o delegado que dejó la escuela (membresía revocada) ya no emite cobros.
  const membresia = await directivoVigente({ ...usuario, id: usuario.id }, escuelaId);
  if (!membresia) return false;
  if (escuela.directivoPrincipalId === usuario.id) return true;
  if (membresia.puedeCobrar === true) return true;

  // Escuelas anteriores a este flujo: no tienen principal designado. Sin
  // esta salida NADIE podría cobrar en ellas — la delegación sólo aprieta
  // donde hay un principal que pueda otorgarla.
  return !escuela.directivoPrincipalId;
};

/** Sólo el directivo principal (o un ADMIN de plataforma). */
export const esDirectivoPrincipal = async (
  usuario: { id?: string; roles?: string[]; role?: string } | undefined,
  escuelaId: string
): Promise<boolean> => {
  const roles = usuario?.roles ?? (usuario?.role ? [usuario.role] : []);
  if (roles.includes("ADMIN")) return true;
  if (!usuario?.id) return false;
  const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
  if (!escuela) return false;
  // Tanto el principal como, en escuelas sin principal designado (previas al
  // flujo de alta), cualquier directivo: siempre con membresía activa en ESA escuela.
  if (!(await directivoVigente({ ...usuario, id: usuario.id }, escuelaId))) return false;
  if (!escuela.directivoPrincipalId) return true;
  return escuela.directivoPrincipalId === usuario.id;
};
