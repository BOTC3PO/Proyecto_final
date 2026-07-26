/**
 * FASE 5 — núcleo compartido del vínculo padre–hijo (`ProgresoModuloVinculo`).
 *
 * `ProgresoModuloVinculo` une a un PADRE con un HIJO (personas
 * DISTINTAS, solo monitoreo). NO confundir con `CuentaVinculada`, que
 * une las dos cuentas de la MISMA persona (switchable).
 *
 * Este módulo centraliza las validaciones e idempotencia del alta de
 * vínculo para que las compartan:
 *   - `POST /api/hijos` — autoservicio del padre (el requester ES el
 *     padre).
 *   - `POST /api/usuarios/:parentId/hijos` — alta por un directivo/admin
 *     en el momento de dar de alta al padre (el requester NO es el padre).
 *
 * Las validaciones que NO dependen del requester viven acá:
 *   - no auto-vínculo (childId !== parentId)
 *   - el hijo debe tener rol compatible (no PARENT/DIRECTIVO/ADMIN)
 *   - máximo 2 padres activos por hijo
 *   - idempotencia: si ya hay vínculo no-revocado → conflicto; si está
 *     revocado se revive
 *
 * El control de QUIÉN puede crear el vínculo (rol del requester, misma
 * escuela, etc.) lo hace cada ruta antes de llamar acá.
 */

import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";
import { resolveRoles, resolvePrimaryRole } from "./roles";

export type DatosVinculo = {
  nombre: string;
  usuario: string;
  grado: string;
  escuela?: string | null;
  notas?: string | null;
  permisosTareas: boolean;
  permisosMensajes: boolean;
};

export type VincularHijoInput = {
  parentId: string;
  childId: string;
  datos: DatosVinculo;
  /**
   * Estado a usar al CREAR un vínculo nuevo (autoservicio: depende de
   * si el hijo es menor). El alta por directivo pasa "aprobado" y
   * `forzarAprobado: true`.
   */
  estadoSiNuevo: "aprobado" | "pendiente";
  /**
   * Si `true`, el vínculo queda "aprobado" tanto al crearlo como al
   * revivir uno revocado (acción autoritativa del directivo). Si
   * `false` (autoservicio), al revivir se preserva "aprobado" solo si
   * ya lo estaba; si no, queda "pendiente".
   */
  forzarAprobado?: boolean;
};

export type VincularHijoResult =
  | { ok: false; status: number; error: string }
  | { ok: true; status: number; created: boolean; estado: string };

const ROLES_HIJO_INCOMPATIBLES = new Set(["PARENT", "DIRECTIVO", "ADMIN"]);

/**
 * Aplica las validaciones compartidas y crea/revive el vínculo. El
 * `childId` ya debe estar resuelto por el caller; este núcleo no
 * resuelve usernames.
 */
export const vincularHijoCore = async (
  input: VincularHijoInput
): Promise<VincularHijoResult> => {
  const { parentId, childId, datos, estadoSiNuevo, forzarAprobado } = input;

  if (!parentId || !childId) {
    return { ok: false, status: 400, error: "parentId and childId are required" };
  }
  if (childId === parentId) {
    return {
      ok: false,
      status: 400,
      error: "No podés vincularte a vos mismo como tu propio hijo."
    };
  }

  const child = await prisma.usuario.findFirst({
    where: { id: childId, isDeleted: { not: true } }
  });
  if (!child) return { ok: false, status: 404, error: "child not found" };

  const childRoles = resolveRoles(child);
  if (childRoles.some((r) => ROLES_HIJO_INCOMPATIBLES.has(r))) {
    const offending = childRoles.find((r) => ROLES_HIJO_INCOMPATIBLES.has(r)) ?? resolvePrimaryRole(child);
    return {
      ok: false,
      status: 400,
      error: `Un usuario con rol ${offending} no puede ser hijo de un padre.`
    };
  }

  const existing = await prisma.progresoModuloVinculo.findFirst({
    where: { parentId, childId }
  });
  if (existing && existing.estado !== "revocado") {
    return { ok: false, status: 409, error: "child already linked" };
  }

  // Máximo 2 padres activos por hijo (excluyendo el vínculo que vamos
  // a revivir, si existe).
  const activeCount = await prisma.progresoModuloVinculo.count({
    where: {
      childId,
      estado: { not: "revocado" },
      ...(existing ? { id: { not: existing.id } } : {})
    }
  });
  if (activeCount >= 2) {
    return { ok: false, status: 409, error: "child already has max parents" };
  }

  const now = new Date();
  const permisos = JSON.stringify({
    tareas: datos.permisosTareas,
    mensajes: datos.permisosMensajes
  });

  if (existing) {
    const estado = forzarAprobado
      ? "aprobado"
      : existing.estado === "aprobado"
        ? "aprobado"
        : "pendiente";
    await prisma.progresoModuloVinculo.updateMany({
      where: { id: existing.id },
      data: {
        estado,
        solicitadoAt: existing.solicitadoAt ?? now.toISOString(),
        updatedAt: now.toISOString(),
        nombre: datos.nombre,
        usuario: datos.usuario,
        grado: datos.grado,
        escuela: datos.escuela ?? null,
        notas: datos.notas ?? null,
        permisos
      }
    });
    return { ok: true, status: 200, created: false, estado };
  }

  const estado = forzarAprobado ? "aprobado" : estadoSiNuevo;
  try {
    await prisma.progresoModuloVinculo.create({
      data: {
        parentId,
        childId,
        estado,
        solicitadoAt: now.toISOString(),
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
        nombre: datos.nombre,
        usuario: datos.usuario,
        grado: datos.grado,
        escuela: datos.escuela ?? null,
        notas: datos.notas ?? null,
        permisos
      }
    });
  } catch (e) {
    // Dos requests concurrentes pasaron el chequeo de "existing" antes de
    // que cualquiera hiciera el insert; la unique constraint (parentId,
    // childId) corta la segunda fila en vez de duplicarla.
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return { ok: false, status: 409, error: "child already linked" };
    }
    throw e;
  }
  return { ok: true, status: 201, created: true, estado };
};
