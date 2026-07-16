/**
 * FASE 1 — provisión idempotente de la cuenta espejo de alumno.
 *
 * Contexto: el staff (ADMIN / DIRECTIVO / TEACHER) gana una cuenta
 * "alumno" para vivir la plataforma desde el otro lado sin perder
 * su identidad. La cuenta espejo:
 *
 *   - es un `Usuario` aparte con `roles: ["USER"]`, `role: "USER"`,
 *     `tipoCuenta: "ESPEJO_ALUMNO"` y `passwordHash: null` (no puede
 *     loguearse por contraseña)
 *   - comparte `escuelaId` con el principal
 *   - tiene su propia `Membresia` STUDENT (otro `usuarioId`, así que
 *     no choca con la PK `[usuarioId, escuelaId]` del principal)
 *   - queda apuntada por una fila `CuentaVinculada` SIMÉTRICA (la
 *     aplicación inserta con `min(a,b), max(a,b)` para que el par
 *     único no dependa del orden de las puntas)
 *
 * Garantías:
 *   1. Idempotente: llamar dos veces seguidas para el mismo principal
 *      no duplica espejo ni vínculo.
 *   2. Solo para staff: `isStaffInRoles(resolveRoles(principal))`.
 *      Un USER / GUEST / PARENT no genera espejo (PARENT es opt-in y
 *      vive en Fase 5).
 *   3. El espejo NUNCA lleva roles de staff. Se valida con
 *      `isStaffInRoles` antes de devolver.
 *   4. Un principal tiene a lo sumo un espejo (la unicidad del par
 *      `(min(a,b), max(a,b))` la garantiza la BD; el chequeo extra
 *      contra `tipoCuenta = "ESPEJO_ALUMNO"` evita falsos positivos
 *      si Fase 6 reutiliza la tabla para padre↔padre-mirror).
 *
 * Convenciones de username / email del espejo:
 *
 *   - username: `espejo-<safeUsername>-<6 hex>` donde `safeUsername`
 *     es el username del principal pasados a minúsculas y con todo
 *     lo no alfanumérico reemplazado por `_`. El sufijo aleatorio
 *     evita colisiones con cuentas reales y entre re-provisiones.
 *   - email: `espejo+<espejoId>@mirror.invalid`. El TLD `.invalid`
 *     (RFC 6761) garantiza que no se resuelva a un dominio real;
 *     un eventual envío de mail fallaría con NXDOMAIN.
 *
 * Esto bloquea dos cosas críticas:
 *
 *   a) que un humano pueda loguearse con la credencial del espejo
 *      (no hay password; el endpoint de login exige hash utilizable);
 *   b) que el username/email del espejo choque con un usuario real
 *      y le impida registrarse después.
 *
 * La membresia STUDENT solo se crea si el principal tiene `escuelaId`.
 * Un staff global (ADMIN) queda con espejo sin membresia — su espejo
 * existe como fila pero no está inscripto en ninguna escuela. Esto
 * es consistente con el modelo: ADMIN no tiene `Membresia` canónica.
 */

import { randomBytes, randomUUID } from "node:crypto";
import { prisma } from "./prisma";
import { STAFF_ROLES, isStaffInRoles, isParentInRoles, resolveRoles } from "./roles";
import { recordAuditLog } from "./audit-log";
import { acreditarSaldoInicial } from "./economia-alta";

export const ESPEJO_TIPO_CUENTA = "ESPEJO_ALUMNO" as const;

export type EspejoProvisionResult = {
  espejo: {
    id: string;
    username: string;
    email: string;
    fullName: string;
    role: string;
    roles: string[];
    escuelaId: string | null;
    // El Prisma client lo modela como `string | null` (la columna es
    // nullable). En este endpoint siempre viene poblado con
    // `ESPEJO_TIPO_CUENTA`, pero respetamos el shape del client.
    tipoCuenta: string | null;
  };
  /**
   * `true` si esta llamada CREÓ el espejo y el vínculo.
   * `false` si ya existía (camino idempotente).
   */
  created: boolean;
  /**
   * `true` si se creó además la `Membresia` STUDENT en la escuela del
   * principal. `false` si el principal no tiene escuela (caso ADMIN
   * global) o si el espejo ya existía.
   */
  membresiaCreada: boolean;
};

export class EspejoNoProvisionableError extends Error {
  constructor(message: string, public readonly code: string) {
    super(message);
    this.name = "EspejoNoProvisionableError";
  }
}

const isUuid = (s: string): boolean =>
  typeof s === "string" && /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(s);

/**
 * La columna `Usuario.id` no está restringida a UUID por el schema
 * (es `String`). Conviven ids "semilla" (ej. `usr-admin-001`,
 * generado en `init_db.ts`/`seed_demo.ts`) con UUIDs v4 (los
 * creados en runtime). El servicio debe aceptar ambos: la
 * garantía dura la da la unicidad del par canónico en
 * `CuentaVinculada`, no el formato del id.
 */
const isValidPrincipalId = (s: string): boolean =>
  typeof s === "string" && s.trim().length > 0 && s.length <= 64;

const safeUsernameSegment = (s: string): string => {
  const lower = s.toLowerCase();
  const cleaned = lower.replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return cleaned || "user";
};

const randomHex = (bytes: number): string => randomBytes(bytes).toString("hex");

/**
 * Opciones de provisión.
 *
 * `allowParent`: por defecto la provisión es SOLO para staff (auto en
 * el registro). La cuenta espejo del padre es **opt-in** (Fase 5): el
 * padre no es staff, así que la provisión normal lo rechazaría. El
 * endpoint opt-in del padre pasa `allowParent: true` para habilitar
 * ese único camino. El espejo resultante sigue siendo `USER` puro.
 */
export type EspejoProvisionOptions = {
  allowParent?: boolean;
};

/**
 * Devuelve la cuenta espejo-alumno del principal, creándola si no
 * existe. Idempotente: una segunda llamada con el mismo principal
 * devuelve el mismo espejo sin tocar la base.
 *
 * Elegibilidad: por defecto solo staff. Con `opts.allowParent` también
 * un PARENT (Fase 5, opt-in). En ambos casos el espejo es `USER` puro.
 *
 * Lanza `EspejoNoProvisionableError` si:
 *   - el principal no existe o está borrado
 *   - el principal no es elegible (no es staff; ni PARENT con allowParent)
 *   - el principal es él mismo un espejo
 */
export const provisionarEspejoAlumno = async (
  usuarioPrincipalId: string,
  opts?: EspejoProvisionOptions
): Promise<EspejoProvisionResult> => {
  if (!isValidPrincipalId(usuarioPrincipalId)) {
    throw new EspejoNoProvisionableError(
      `id de principal inválido: ${String(usuarioPrincipalId).slice(0, 32)}`,
      "INVALID_PRINCIPAL_ID"
    );
  }

  const principal = await prisma.usuario.findFirst({
    where: { id: usuarioPrincipalId, isDeleted: { not: true } }
  });
  if (!principal) {
    throw new EspejoNoProvisionableError(
      `principal ${usuarioPrincipalId} no existe o está borrado`,
      "PRINCIPAL_NOT_FOUND"
    );
  }

  // Guard 1: elegibilidad. Por defecto solo staff. Con `allowParent`
  // (Fase 5, opt-in del padre) también un PARENT. USER/GUEST nunca.
  const rolesPrincipal = resolveRoles(principal);
  const esStaff = isStaffInRoles(rolesPrincipal);
  const elegible =
    esStaff ||
    (opts?.allowParent === true && isParentInRoles(rolesPrincipal));
  if (!elegible) {
    throw new EspejoNoProvisionableError(
      `principal ${usuarioPrincipalId} no es elegible (roles=${rolesPrincipal.join(",") || "∅"})`,
      "PRINCIPAL_NOT_STAFF"
    );
  }

  // Guard 2: no provisionar para un espejo. Un espejo no debería ser
  // staff, así que este caso es defensivo — pero si por algún motivo
  // un espejo tiene roles de staff, evitamos una recursión.
  if (principal.tipoCuenta === ESPEJO_TIPO_CUENTA) {
    throw new EspejoNoProvisionableError(
      `principal ${usuarioPrincipalId} es un espejo; no se espeja un espejo`,
      "PRINCIPAL_IS_ESPEJO"
    );
  }

  // Camino idempotente: ¿ya hay un CuentaVinculada con este principal
  // y un espejo-alumno del otro lado? El orden (a, b) lo pone el
  // insert, así que tenemos que mirar en ambas puntas.
  const existingVinculo = await prisma.cuentaVinculada.findFirst({
    where: {
      OR: [{ usuarioAId: usuarioPrincipalId }, { usuarioBId: usuarioPrincipalId }]
    }
  });
  if (existingVinculo) {
    const otherId =
      existingVinculo.usuarioAId === usuarioPrincipalId
        ? existingVinculo.usuarioBId
        : existingVinculo.usuarioAId;
    const other = await prisma.usuario.findFirst({ where: { id: otherId } });
    if (other && other.tipoCuenta === ESPEJO_TIPO_CUENTA) {
      // FIX-STAFF-TEMAS-BLOQUEADOS — backfill perezoso: staff que ya
      // tenía su espejo provisionado ANTES de este fix (no recibió saldo
      // de bienvenida al crearse) lo recibe acá, en la próxima llamada
      // natural a esta función (login, "entrar como alumno", backfill).
      // Idempotente (ver acreditarSaldoInicial), no rompe si ya se acreditó.
      if (esStaff) {
        await acreditarSaldoInicial({ usuarioId: other.id, schoolId: other.escuelaId ?? null });
      }
      return {
        espejo: {
          id: other.id,
          username: other.username,
          email: other.email,
          fullName: other.fullName,
          role: other.role,
          roles: Array.isArray(other.roles) ? other.roles : [other.role],
          escuelaId: other.escuelaId,
          tipoCuenta: other.tipoCuenta
        },
        created: false,
        membresiaCreada: false
      };
    }
  }

  // Camino de creación.
  const espejoId = randomUUID();
  const now = new Date().toISOString();
  const safeName = safeUsernameSegment(principal.username);
  const suffix = randomHex(3); // 6 hex chars: ~16M de combinaciones.
  const espejoUsername = `espejo-${safeName}-${suffix}`;
  const espejoEmail = `espejo+${espejoId}@mirror.invalid`;
  const espejoFullName = `Espejo de ${principal.fullName}`.slice(0, 120);

  // Fuente de verdad de la escuela: la columna `usuarios.escuelaId`
  // es una denormalización. La `membresia` activa es la fuente
  // canónica. Si la columna está vacía pero existe una membresia
  // activa, usamos esa escuela (caso típico del seed_demo que setea
  // la membresia pero no la columna).
  let escuelaEfectiva: string | null = principal.escuelaId ?? null;
  if (!escuelaEfectiva) {
    const membresiaActiva = await prisma.membresia.findFirst({
      where: { usuarioId: usuarioPrincipalId, estado: "activa" }
    });
    if (membresiaActiva?.escuelaId) {
      escuelaEfectiva = membresiaActiva.escuelaId;
    }
  }

  const espejo = await prisma.usuario.create({
    data: {
      id: espejoId,
      username: espejoUsername,
      email: espejoEmail,
      fullName: espejoFullName,
      role: "USER",
      roles: ["USER"],
      escuelaId: escuelaEfectiva,
      passwordHash: null,
      // sin `guestOnboardingStatus` (no es guest), `isBanned=false`,
      // `isDeleted=false` (defaults del schema).
      isDeleted: false,
      tipoCuenta: ESPEJO_TIPO_CUENTA,
      createdAt: now,
      updatedAt: now
    }
  });

  // Membresia STUDENT: solo si el principal tiene escuela (canónica
  // o por membresia activa). Un ADMIN global queda con espejo sin
  // membresia (consistente con el hecho de que ADMIN no tiene
  // membresía canónica).
  let membresiaCreada = false;
  if (escuelaEfectiva) {
    await prisma.membresia.create({
      data: {
        usuarioId: espejoId,
        escuelaId: escuelaEfectiva,
        rol: "STUDENT",
        estado: "activa",
        fechaAlta: now,
        createdAt: now,
        updatedAt: now
      }
    });
    membresiaCreada = true;
  }

  // Vínculo SIMÉTRICO: insertamos con min/max canónico.
  const a = espejoId < usuarioPrincipalId ? espejoId : usuarioPrincipalId;
  const b = espejoId < usuarioPrincipalId ? usuarioPrincipalId : espejoId;
  await prisma.cuentaVinculada.create({
    data: {
      id: randomUUID(),
      usuarioAId: a,
      usuarioBId: b,
      createdAt: now
    }
  });

  // FIX-STAFF-TEMAS-BLOQUEADOS — a diferencia del espejo de PADRE (ver
  // exclusión deliberada en economia-alta.ts: el padre "no está dando de
  // alta un hijo nuevo"), el espejo de STAFF sí recibe el saldo de
  // bienvenida: es la única cuenta con acceso real a /economia y
  // /tienda-temas (TEACHER/DIRECTIVO/ADMIN no tienen ruta propia, ver
  // FIX-VISTA-PREVIA-STAFF), así que sin esto un tema pago quedaría
  // bloqueado para siempre pese al merge de compras en
  // GET /api/tienda/mis-items (ver tienda.ts).
  if (esStaff) {
    await acreditarSaldoInicial({ usuarioId: espejoId, schoolId: escuelaEfectiva });
  }

  // FASE 7 — auditar la creación del espejo. El audit log permite
  // reconstruir quién se espejó (principalId), qué espejo se creó
  // (espejoId) y bajo qué escuela. Es la única vía de trazabilidad
  // a largo plazo porque la membresía STUDENT y la fila espejo
  // son estructuralmente idénticas a las de un alumno real.
  await recordAuditLog({
    actorId: usuarioPrincipalId,
    action: "ESPEJO_PROVISION",
    targetType: "Usuario",
    targetId: espejoId,
    metadata: {
      principalId: usuarioPrincipalId,
      espejoId,
      username: espejoUsername,
      escuelaId: escuelaEfectiva,
      membresiaCreada,
      origen: "staff" // FASE 1 (auto en registro) o backfill explícito
    }
  });

  return {
    espejo: {
      id: espejo.id,
      username: espejo.username,
      email: espejo.email,
      fullName: espejo.fullName,
      role: espejo.role,
      roles: Array.isArray(espejo.roles) ? espejo.roles : [espejo.role],
      escuelaId: escuelaEfectiva,
      tipoCuenta: espejo.tipoCuenta
    },
    created: true,
    membresiaCreada
  };
};

/**
 * Backfill idempotente: para cada staff con `roles` intersectando
 * `STAFF_ROLES`, garantiza que tenga su espejo provisionado. Pensado
 * para ejecutarse al final del seed (`init_db.ts`, `seed_demo.ts`)
 * para que las filas preexistentes queden cubiertas.
 */
export const provisionarEspejosParaStaffExistente = async (): Promise<{
  revisados: number;
  creados: number;
  omitidos: number;
}> => {
  // Iteramos TODOS los usuarios activos y filtramos en memoria.
  // El `where` con `tipoCuenta: { not: ESPEJO_TIPO_CUENTA }` no es
  // seguro en PostgreSQL cuando la columna es nullable: la SQL
  // resultante `tipo_cuenta != 'X'` es `null` (no `true`) para
  // filas con `tipo_cuenta = null`, y la fila se filtra. Por eso
  // traemos todo y descartamos a los espejos manualmente.
  const allRows = await prisma.usuario.findMany({
    where: { isDeleted: { not: true } }
  });
  const staffRows = allRows.filter(
    (row) => row.tipoCuenta !== ESPEJO_TIPO_CUENTA
  );

  let creados = 0;
  let omitidos = 0;
  for (const row of staffRows) {
    if (!isStaffInRoles(resolveRoles(row))) {
      omitidos += 1;
      continue;
    }
    try {
      const result = await provisionarEspejoAlumno(row.id);
      if (result.created) creados += 1;
    } catch (err) {
      // No reventamos el seed por un fallo individual: logueamos y
      // seguimos. El caller decide si abortar.
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[provisionarEspejoAlumno] backfill omitió ${row.id} (${row.username}):`,
          err instanceof Error ? err.message : err
        );
      }
      omitidos += 1;
    }
  }

  return { revisados: staffRows.length, creados, omitidos };
};

/**
 * Helper de hook: intenta provisionar el espejo de un usuario recién
 * creado. NUNCA lanza — si algo falla, loguea y devuelve `null`.
 * Los hooks de registro lo usan para no romper el alta del principal
 * si la provisión encuentra un corner case (ej. ADMIN sin escuela).
 */
export const tryProvisionarEspejoParaNuevoStaff = async (
  usuarioPrincipalId: string
): Promise<EsjejoHookResult> => {
  try {
    const result = await provisionarEspejoAlumno(usuarioPrincipalId);
    return { ok: true, result };
  } catch (err) {
    const code =
      err instanceof EspejoNoProvisionableError
        ? err.code
        : err instanceof Error
          ? err.name
          : "UNKNOWN";
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[provisionarEspejoAlumno] hook omitió ${usuarioPrincipalId} (code=${code}):`,
        err instanceof Error ? err.message : err
      );
    }
    // FASE 2 — auditar la falla en canal durable. El alta del staff es
    // best-effort (un espejo fallido no rompe el registro), pero la falla
    // NO debe perderse: el backfill (`backfill:espejos`) la repara después
    // y el audit log permite detectar staff sin espejo. PRINCIPAL_IS_ESPEJO
    // y casos esperados no se auditan como error.
    if (code !== "PRINCIPAL_IS_ESPEJO") {
      await recordAuditLog({
        actorId: usuarioPrincipalId,
        action: "ESPEJO_PROVISION_FALLIDA",
        targetType: "Usuario",
        targetId: usuarioPrincipalId,
        metadata: { code, message: err instanceof Error ? err.message : String(err) }
      }).catch(() => { /* nunca romper el alta por el audit */ });
    }
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
};

type EsjejoHookResult =
  | { ok: true; result: EspejoProvisionResult }
  | { ok: false; error: string };

/**
 * FASE 5 — provisión opt-in de la cuenta espejo del PADRE.
 *
 * A diferencia del staff (cuyo espejo se auto-crea en el registro),
 * el padre pide su cuenta de alumno on-demand desde su perfil. Este
 * wrapper:
 *   1. valida que el principal exista y tenga rol PARENT (un USER no
 *      puede colarse por este camino);
 *   2. delega en `provisionarEspejoAlumno(..., { allowParent: true })`,
 *      reusando toda la lógica idempotente (espejo USER puro, membresía
 *      STUDENT si hay escuela, vínculo simétrico en `CuentaVinculada`).
 *
 * Lanza `EspejoNoProvisionableError` con code `PRINCIPAL_NOT_PARENT`
 * si el principal no es padre.
 */
export const provisionarEspejoAlumnoParaPadre = async (
  usuarioPadreId: string
): Promise<EspejoProvisionResult> => {
  if (!isValidPrincipalId(usuarioPadreId)) {
    throw new EspejoNoProvisionableError(
      `id de principal inválido: ${String(usuarioPadreId).slice(0, 32)}`,
      "INVALID_PRINCIPAL_ID"
    );
  }
  const padre = await prisma.usuario.findFirst({
    where: { id: usuarioPadreId, isDeleted: { not: true } }
  });
  if (!padre) {
    throw new EspejoNoProvisionableError(
      `principal ${usuarioPadreId} no existe o está borrado`,
      "PRINCIPAL_NOT_FOUND"
    );
  }
  if (!isParentInRoles(resolveRoles(padre))) {
    throw new EspejoNoProvisionableError(
      `principal ${usuarioPadreId} no es PARENT (roles=${resolveRoles(padre).join(",") || "∅"})`,
      "PRINCIPAL_NOT_PARENT"
    );
  }
  // FASE 7 — etiqueta el audit log con el origen "parent" para
  // distinguirlo del espejado de staff (FASE 1) en los reportes.
  const result = await provisionarEspejoAlumno(usuarioPadreId, { allowParent: true });
  if (result.created) {
    await recordAuditLog({
      actorId: usuarioPadreId,
      action: "ESPEJO_PROVISION",
      targetType: "Usuario",
      targetId: result.espejo.id,
      metadata: {
        principalId: usuarioPadreId,
        espejoId: result.espejo.id,
        username: result.espejo.username,
        escuelaId: result.espejo.escuelaId,
        membresiaCreada: result.membresiaCreada,
        origen: "parent" // FASE 5 (opt-in del padre)
      }
    });
  }
  return result;
};

/**
 * FASE 8 — vincular una cuenta de alumno YA EXISTENTE como cuenta espejo
 * del staff (alternativa opt-in a la auto-creación). NO crea un usuario
 * nuevo: solo inserta la fila `CuentaVinculada` simétrica entre el staff
 * y un USER puro existente del mismo dueño.
 *
 * El `alumnoIdentifier` es el username o email de la cuenta alumno.
 *
 * Lanza `EspejoNoProvisionableError` si:
 *   - el staff no existe / no es staff / ya tiene una cuenta vinculada
 *   - el alumno no existe / es uno mismo / es un espejo / no es USER puro
 *   - el alumno ya está vinculado
 *   - el alumno es de otra escuela (cuando ambos tienen escuela)
 */
export const vincularCuentaAlumnoExistente = async (
  staffId: string,
  alumnoIdentifier: string
): Promise<{ alumnoId: string }> => {
  const staff = await prisma.usuario.findFirst({
    where: { id: staffId, isDeleted: { not: true } }
  });
  if (!staff) {
    throw new EspejoNoProvisionableError(`staff ${staffId} no existe`, "PRINCIPAL_NOT_FOUND");
  }
  if (!isStaffInRoles(resolveRoles(staff))) {
    throw new EspejoNoProvisionableError(`${staffId} no es staff`, "PRINCIPAL_NOT_STAFF");
  }
  const yaVinc = await prisma.cuentaVinculada.findFirst({
    where: { OR: [{ usuarioAId: staffId }, { usuarioBId: staffId }] }
  });
  if (yaVinc) {
    throw new EspejoNoProvisionableError(`el staff ya tiene una cuenta vinculada`, "ALREADY_LINKED");
  }

  const ident = String(alumnoIdentifier ?? "").trim().toLowerCase();
  if (!ident) {
    throw new EspejoNoProvisionableError(`identificador de alumno vacío`, "ALUMNO_IDENTIFIER_EMPTY");
  }
  const alumno = await prisma.usuario.findFirst({
    where: { isDeleted: { not: true }, OR: [{ username: ident }, { email: ident }] }
  });
  if (!alumno) {
    throw new EspejoNoProvisionableError(`cuenta alumno '${ident}' no encontrada`, "ALUMNO_NOT_FOUND");
  }
  if (alumno.id === staffId) {
    throw new EspejoNoProvisionableError(`no podés vincularte a vos mismo`, "SELF_LINK");
  }
  if (alumno.tipoCuenta === ESPEJO_TIPO_CUENTA) {
    throw new EspejoNoProvisionableError(`la cuenta destino es un espejo`, "ALUMNO_IS_ESPEJO");
  }
  const alumnoRoles = resolveRoles(alumno);
  const esAlumnoPuro = alumnoRoles.length === 1 && alumnoRoles[0] === "USER";
  if (!esAlumnoPuro) {
    throw new EspejoNoProvisionableError(`la cuenta destino no es un alumno (USER) puro`, "ALUMNO_NOT_PURE_USER");
  }
  const alumnoVinc = await prisma.cuentaVinculada.findFirst({
    where: { OR: [{ usuarioAId: alumno.id }, { usuarioBId: alumno.id }] }
  });
  if (alumnoVinc) {
    throw new EspejoNoProvisionableError(`la cuenta alumno ya está vinculada`, "ALUMNO_ALREADY_LINKED");
  }
  if (staff.escuelaId && alumno.escuelaId && staff.escuelaId !== alumno.escuelaId) {
    throw new EspejoNoProvisionableError(`la cuenta alumno es de otra escuela`, "DIFFERENT_SCHOOL");
  }

  const now = new Date().toISOString();
  const a = alumno.id < staffId ? alumno.id : staffId;
  const b = alumno.id < staffId ? staffId : alumno.id;
  await prisma.cuentaVinculada.create({
    data: { id: randomUUID(), usuarioAId: a, usuarioBId: b, createdAt: now }
  });
  await recordAuditLog({
    actorId: staffId,
    action: "CUENTA_ALUMNO_VINCULADA",
    targetType: "Usuario",
    targetId: alumno.id,
    metadata: { staffId, alumnoId: alumno.id, origen: "vinculo_manual" }
  });

  return { alumnoId: alumno.id };
};

export { STAFF_ROLES };
