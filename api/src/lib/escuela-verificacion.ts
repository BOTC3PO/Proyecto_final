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
export const puedeEmitirCobros = async (
  usuario: { id?: string; roles?: string[]; role?: string } | undefined,
  escuelaId: string
): Promise<boolean> => {
  const roles = usuario?.roles ?? (usuario?.role ? [usuario.role] : []);
  if (roles.includes("ADMIN")) return true;
  if (!usuario?.id) return false;

  const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
  if (escuela?.directivoPrincipalId === usuario.id) return true;

  const membresia = await prisma.membresia.findFirst({
    where: { usuarioId: usuario.id, escuelaId, rol: "DIRECTIVO", estado: "activa" }
  });
  if (membresia?.puedeCobrar === true) return true;

  // Escuelas anteriores a este flujo: no tienen principal designado. Sin
  // esta salida NADIE podría cobrar en ellas — la delegación sólo aprieta
  // donde hay un principal que pueda otorgarla.
  if (!escuela?.directivoPrincipalId) return roles.includes("DIRECTIVO");
  return false;
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
  // Misma salida que en `puedeEmitirCobros`: sin principal designado
  // (escuela previa al flujo de alta), cualquier DIRECTIVO de esa escuela
  // conserva lo que ya podía hacer.
  if (!escuela?.directivoPrincipalId) return roles.includes("DIRECTIVO");
  return escuela.directivoPrincipalId === usuario.id;
};
