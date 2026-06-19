/**
 * FASE 6 — provisión autoservicio de la cuenta de PADRE para un alumno
 * adulto.
 *
 * Contexto: el alumno (USER) mayor de 18 años que quiere ser padre de un
 * hijo real en la plataforma puede crear su cuenta de padre sin esperar
 * aprobación de un admin (a diferencia de los roles TEACHER/DIRECTIVO/
 * ADMIN, que sí requieren `POST /api/solicitar-rol`). La cuenta nueva
 * es una cuenta "real" (no espejo): tiene `roles: ["PARENT"]` y queda
 * apuntada por una fila `CuentaVinculada` SIMÉTRICA.
 *
 * Diferencias con la Fase 5 (padre opt-in a su espejo de alumno):
 *
 *   - En Fase 5 el padre es el principal y el alumno es el espejo
 *     (`tipoCuenta = "ESPEJO_ALUMNO"`). El espejo es USER puro, no puede
 *     loguearse con password.
 *   - En Fase 6 el alumno es el principal y el padre es la cuenta
 *     vinculada. El padre es una cuenta REAL de la plataforma (con
 *     `role: "PARENT"`, `roles: ["PARENT"]`) y `tipoCuenta: null`. No
 *     lleva el marcador de espejo porque no es un USER mirror — es un
 *     padre "de verdad" que el alumno puede invocar para monitorear
 *     hijos reales (Fase 5).
 *
 * Esto es simétrico al flujo existente: el padre crea su espejo de
 * alumno (Fase 5) o el alumno crea su cuenta de padre (Fase 6). El par
 * queda en `CuentaVinculada` y se navega entre ambos con
 * `POST /api/auth/cambiar-cuenta`. El switch usa el `landing` derivado
 * de los roles del destino, así que alumno→padre aterriza en `/padre`.
 *
 * Garantías:
 *   1. Idempotente: una segunda llamada con el mismo alumno devuelve
 *      el mismo padre sin tocar la base.
 *   2. Solo para alumnos: el principal debe tener rol USER (y NO ser un
 *      espejo alumno). TEACHER/DIRECTIVO/ADMIN/PARENT no entran por acá
 *      — sus mecanismos son otros (registro, `solicitar-rol`).
 *   3. Validación de edad: 18+ (helper `isMinor` de `lib/age.ts`). Sin
 *      `birthdate` o fecha inválida → rechazo (no se puede demostrar
 *      mayoría de edad sin fecha de nacimiento).
 *   4. La cuenta del padre es real: `passwordHash: null` (no se
 *      loguea por contraseña, lo mismo que el espejo de Fase 5) pero
 *      sin marcador de tipoCuenta — es una cuenta padre de verdad.
 *   5. El padre NO se inscribe en ninguna escuela por defecto. El
 *      alumno original conserva su membresia; el padre es un actor
 *      paralelo (vinculado solo por `CuentaVinculada`). Cuando un
 *      directivo quiera darle alcance sobre los hijos reales del
 *      alumno, lo vinculará por `ProgresoModuloVinculo` (Fase 5).
 *
 * Convenciones de username / email del padre:
 *   - username: `padre-<safeUsername>-<6 hex>`. El sufijo aleatorio
 *     evita colisiones entre re-provisiones y con cuentas reales.
 *   - email: `padre+<padreId>@parent.invalid`. TLD `.invalid`
 *     (RFC 6761) garantiza que no se resuelva a un dominio real.
 *
 * Esto bloquea dos cosas críticas:
 *   a) que un humano pueda loguearse con la credencial del padre
 *      (no hay password; el endpoint de login exige hash utilizable);
 *   b) que el username/email del padre choque con un usuario real
 *      y le impida registrarse después.
 */

import { randomBytes, randomUUID } from "node:crypto";
import { isMinor } from "./age";
import { prisma } from "./prisma";
import { ESPEJO_TIPO_CUENTA } from "./provisionar-espejo";
import { isStaffInRoles, isParentInRoles, resolveRoles } from "./roles";
import { recordAuditLog } from "./audit-log";

export type PadreProvisionResult = {
  padre: {
    id: string;
    username: string;
    email: string;
    fullName: string;
    role: string;
    roles: string[];
    escuelaId: string | null;
    tipoCuenta: string | null;
  };
  /**
   * `true` si esta llamada CREÓ la cuenta de padre y el vínculo.
   * `false` si ya existía (camino idempotente).
   */
  created: boolean;
};

export class PadreNoProvisionableError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = "PadreNoProvisionableError";
  }
}

const safeUsernameSegment = (s: string): string => {
  const lower = s.toLowerCase();
  const cleaned = lower.replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return cleaned || "user";
};

const randomHex = (bytes: number): string => randomBytes(bytes).toString("hex");

const isValidAlumnoId = (s: string): boolean =>
  typeof s === "string" && s.trim().length > 0 && s.length <= 64;

/**
 * Devuelve la cuenta de padre del alumno, creándola si no existe.
 * Idempotente: una segunda llamada con el mismo alumno devuelve el
 * mismo padre sin tocar la base.
 *
 * Elegibilidad:
 *   - El principal debe existir y no estar borrado.
 *   - El principal debe tener rol USER (un staff o un padre ya no
 *     entran por acá; `solicitar-rol` y Fase 5 los cubren).
 *   - El principal NO debe ser un espejo alumno (un espejo no es
 *     una persona "de verdad" para el autoservicio).
 *   - El principal debe ser mayor de 18 años (birthdate requerida).
 *
 * Lanza `PadreNoProvisionableError` si algo falla. El caller mapea los
 * códigos a HTTP:
 *   - `ALUMNO_NOT_FOUND`, `INVALID_ALUMNO_ID`              → 400/404
 *   - `ALUMNO_NOT_USER` (staff/padre ya tienen otros caminos) → 403
 *   - `ALUMNO_IS_ESPEJO` (defensivo: no espejamos un espejo)  → 403
 *   - `ALUMNO_IS_MINOR` (autoservicio requiere 18+)          → 403
 */
export const provisionarEspejoPadreParaAlumno = async (
  alumnoId: string
): Promise<PadreProvisionResult> => {
  if (!isValidAlumnoId(alumnoId)) {
    throw new PadreNoProvisionableError(
      `id de alumno inválido: ${String(alumnoId).slice(0, 32)}`,
      "INVALID_ALUMNO_ID"
    );
  }

  const alumno = await prisma.usuario.findFirst({
    where: { id: alumnoId, isDeleted: { not: true } }
  });
  if (!alumno) {
    throw new PadreNoProvisionableError(
      `alumno ${alumnoId} no existe o está borrado`,
      "ALUMNO_NOT_FOUND"
    );
  }

  // Guard 1: elegibilidad. Solo USER puro puede crear padre por esta
  // vía. TEACHER/DIRECTIVO/ADMIN no entran (sus roles son de
  // privilegio — `solicitar-rol` los cubre). PARENT no entra
  // (idempotencia + simetría: si ya es padre, el destino de su
  // espejo es alumno, no al revés).
  const rolesAlumno = resolveRoles(alumno);
  if (isStaffInRoles(rolesAlumno) || isParentInRoles(rolesAlumno)) {
    throw new PadreNoProvisionableError(
      `alumno ${alumnoId} no es USER puro (roles=${rolesAlumno.join(",") || "∅"})`,
      "ALUMNO_NOT_USER"
    );
  }

  // Guard 2: el principal no puede ser un espejo alumno. Un espejo es
  // una cuenta "artificial" generada para el staff/padre — pedirle
  // que cree un padre es conceptualmente raro y abriría ciclos
  // (espejo de staff → padre → hijo de su principal). Defensivo:
  // improbable que pase porque el guard 1 ya bloquea al espejo (no
  // tiene roles de staff ni PARENT), pero blindamos el caso.
  if (alumno.tipoCuenta === ESPEJO_TIPO_CUENTA) {
    throw new PadreNoProvisionableError(
      `alumno ${alumnoId} es un espejo; el autoservicio solo aplica a cuentas reales`,
      "ALUMNO_IS_ESPEJO"
    );
  }

  // Guard 3: 18+. El autoservicio de padre es de adulto (similar a
  // `solicitar-rol`): un menor no puede crear su propia cuenta de
  // padre en la plataforma. La convención de `isMinor` es
  // conservadora: sin birthdate ⇒ menor.
  if (isMinor(alumno.birthdate)) {
    throw new PadreNoProvisionableError(
      `alumno ${alumnoId} debe ser mayor de 18 años para crear su cuenta de padre`,
      "ALUMNO_IS_MINOR"
    );
  }

  // Camino idempotente: ¿ya hay un CuentaVinculada con este alumno
  // y un PARENT del otro lado? El orden (a, b) lo pone el insert,
  // así que tenemos que mirar en ambas puntas.
  const existingVinculo = await prisma.cuentaVinculada.findFirst({
    where: {
      OR: [{ usuarioAId: alumnoId }, { usuarioBId: alumnoId }]
    }
  });
  if (existingVinculo) {
    const otherId =
      existingVinculo.usuarioAId === alumnoId
        ? existingVinculo.usuarioBId
        : existingVinculo.usuarioAId;
    const other = await prisma.usuario.findFirst({ where: { id: otherId } });
    if (other && isParentInRoles(resolveRoles(other))) {
      return {
        padre: {
          id: other.id,
          username: other.username,
          email: other.email,
          fullName: other.fullName,
          role: other.role,
          roles: Array.isArray(other.roles) ? other.roles : [other.role],
          escuelaId: other.escuelaId,
          tipoCuenta: other.tipoCuenta
        },
        created: false
      };
    }
  }

  // Camino de creación.
  const padreId = randomUUID();
  const now = new Date().toISOString();
  const safeName = safeUsernameSegment(alumno.username);
  const suffix = randomHex(3); // 6 hex chars: ~16M de combinaciones.
  const padreUsername = `padre-${safeName}-${suffix}`;
  const padreEmail = `padre+${padreId}@parent.invalid`;
  // El "fullName" del padre es el mismo del alumno: son la misma
  // persona física con dos cuentas (la del alumno para estudiar, la
  // del padre para monitorear). Marcamos el prefijo para que sea
  // fácil de identificar en listados.
  const padreFullName = `Padre ${alumno.fullName}`.slice(0, 120);

  const padre = await prisma.usuario.create({
    data: {
      id: padreId,
      username: padreUsername,
      email: padreEmail,
      fullName: padreFullName,
      role: "PARENT",
      roles: ["PARENT"],
      // Heredamos la escuela del alumno para que las rutas que
      // filtran por `escuelaId` lo ubiquen. Si el alumno no tiene
      // escuela (caso raro), queda null.
      escuelaId: alumno.escuelaId ?? null,
      passwordHash: null,
      // No es espejo (tipoCuenta null): es una cuenta padre real,
      // no un USER mirror. Fase 4 lo excluiría de rosters de alumnos
      // por su rol, no por el tipoCuenta.
      isDeleted: false,
      tipoCuenta: null,
      createdAt: now,
      updatedAt: now
    }
  });

  // Vínculo SIMÉTRICO: insertamos con min/max canónico. Esto
  // garantiza que la unicidad del par `(a, b)` no dependa del
  // orden de las puntas.
  const a = padreId < alumnoId ? padreId : alumnoId;
  const b = padreId < alumnoId ? alumnoId : padreId;
  await prisma.cuentaVinculada.create({
    data: {
      id: randomUUID(),
      usuarioAId: a,
      usuarioBId: b,
      createdAt: now
    }
  });

  // FASE 7 — auditar la creación del padre desde alumno. Igual que
  // en FASE 1/5, esta es la única trazabilidad a largo plazo
  // (el `CuentaVinculada` row no distingue por origen).
  await recordAuditLog({
    actorId: alumnoId,
    action: "ESPEJO_PROVISION",
    targetType: "Usuario",
    targetId: padreId,
    metadata: {
      principalId: alumnoId,
      padreId,
      username: padreUsername,
      escuelaId: alumno.escuelaId ?? null,
      origen: "alumno" // FASE 6 (autoservicio alumno → padre)
    }
  });

  return {
    padre: {
      id: padre.id,
      username: padre.username,
      email: padre.email,
      fullName: padre.fullName,
      role: padre.role,
      roles: Array.isArray(padre.roles) ? padre.roles : [padre.role],
      escuelaId: padre.escuelaId,
      tipoCuenta: padre.tipoCuenta
    },
    created: true
  };
};
