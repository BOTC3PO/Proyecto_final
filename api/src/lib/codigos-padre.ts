import { createHash, randomInt, randomUUID } from "node:crypto";
import { prisma } from "./prisma";
import { sincronizarMembresia } from "./memberships";
import { vincularHijoCore } from "./vinculo-padre-hijo";
import { recordAuditLog } from "./audit-log";

/**
 * K8 — códigos de invitación para familias. La escuela (directivo) genera un código por alumno y se lo da a
 * la familia; quien lo canjea queda vinculado (aprobado) a ESE alumno. Sin código no hay vínculo: ya no se
 * puede vincular a un menor por su nombre de usuario.
 *
 * Se guarda solo el hash (sha256): el código en claro se ve una vez. Un solo uso, vence a los 7 días.
 */
const ALFABETO = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // sin 0/O/1/I/L: se dicta y se tipea sin confusión
const LARGO = 10;
export const VIGENCIA_DIAS = 7;

export const normalizarCodigo = (crudo: string): string =>
  crudo.toUpperCase().replace(/[^A-Z0-9]/g, "");

export const hashCodigo = (codigo: string): string =>
  createHash("sha256").update(normalizarCodigo(codigo)).digest("hex");

const generar = (): string => {
  let out = "";
  for (let i = 0; i < LARGO; i++) out += ALFABETO[randomInt(ALFABETO.length)];
  return out;
};

/** "ABCDE-FGHJK": cómo se muestra. */
export const formatearCodigo = (codigo: string): string => `${codigo.slice(0, 5)}-${codigo.slice(5)}`;

export async function crearCodigoPadre(params: { escuelaId: string; hijoId: string; creadoPor: string }) {
  const codigo = generar();
  const ahora = new Date();
  const fila = await prisma.codigoInvitacionPadre.create({
    data: {
      id: randomUUID(),
      escuelaId: params.escuelaId,
      hijoId: params.hijoId,
      codigoHash: hashCodigo(codigo),
      creadoPor: params.creadoPor,
      createdAt: ahora.toISOString(),
      expiresAt: new Date(ahora.getTime() + VIGENCIA_DIAS * 86_400_000).toISOString(),
      estado: "activo"
    }
  });
  return { id: fila.id, codigo: formatearCodigo(codigo), expiresAt: fila.expiresAt };
}

export type ResultadoCodigo =
  | { ok: true; id: string; escuelaId: string; hijoId: string }
  | { ok: false; status: number; error: string };

/** Mira el código sin gastarlo: existe, está activo y no venció. Mismo mensaje en todos los fallos. */
export async function validarCodigoPadre(codigo: string): Promise<ResultadoCodigo> {
  const invalido: ResultadoCodigo = { ok: false, status: 404, error: "código inválido o vencido" };
  if (!codigo || normalizarCodigo(codigo).length !== LARGO) return invalido;
  const fila = await prisma.codigoInvitacionPadre.findFirst({ where: { codigoHash: hashCodigo(codigo) } });
  if (!fila || fila.estado !== "activo" || new Date(fila.expiresAt).getTime() < Date.now()) return invalido;
  return { ok: true, id: fila.id, escuelaId: fila.escuelaId, hijoId: fila.hijoId };
}

/**
 * Gasta el código y vincula a `parentId` con el alumno, aprobado. El código se reclama con un UPDATE
 * condicional (dos canjes a la vez: gana uno); si el vínculo no se puede hacer (ya vinculado, el alumno ya
 * tiene 2 familiares) el código se devuelve a "activo".
 */
export async function canjearCodigoPadre(codigo: string, parentId: string): Promise<ResultadoCodigo> {
  const valido = await validarCodigoPadre(codigo);
  if (!valido.ok) return valido;
  const ahora = new Date().toISOString();
  const reclamo = await prisma.codigoInvitacionPadre.updateMany({
    where: { id: valido.id, estado: "activo" },
    data: { estado: "usado", usadoPor: parentId, usadoAt: ahora }
  });
  if (reclamo.count !== 1) return { ok: false, status: 404, error: "código inválido o vencido" };

  const devolver = () =>
    prisma.codigoInvitacionPadre.updateMany({
      where: { id: valido.id, usadoPor: parentId },
      data: { estado: "activo", usadoPor: null, usadoAt: null }
    });

  const hijo = await prisma.usuario.findFirst({ where: { id: valido.hijoId, isDeleted: { not: true } } });
  if (!hijo) {
    await devolver();
    return { ok: false, status: 404, error: "el alumno ya no existe" };
  }
  await sincronizarMembresia({ usuarioId: parentId, escuelaId: valido.escuelaId, rolUsuario: "PARENT" });
  const vinculo = await vincularHijoCore({
    parentId,
    childId: valido.hijoId,
    estadoSiNuevo: "aprobado",
    forzarAprobado: true,
    datos: {
      nombre: hijo.fullName ?? hijo.username ?? "Hijo",
      usuario: hijo.username ?? "",
      grado: "",
      escuela: valido.escuelaId,
      notas: null,
      permisosTareas: true,
      permisosMensajes: true
    }
  });
  if (!vinculo.ok) {
    await devolver();
    return { ok: false, status: vinculo.status, error: vinculo.error };
  }
  await recordAuditLog({
    actorId: parentId,
    action: "padres.codigo_canjeado",
    targetType: "CodigoInvitacionPadre",
    targetId: valido.id,
    metadata: { escuelaId: valido.escuelaId, hijoId: valido.hijoId }
  });
  return valido;
}
