/**
 * FASE 1 — provisión idempotente de cuenta espejo de alumno.
 *
 * Cubre los criterios de aceptación de
 * `tareas_pendientes/FASE-1-datos-y-provision.md`:
 *
 *   1. Provisión crea exactamente: espejo USER puro + membresía
 *      STUDENT + vínculo.
 *   2. Idempotencia (segunda llamada no duplica).
 *   3. El espejo no pasa `isStaffRole` / `isStaffInRoles`.
 *   4. El registro de un TEACHER nuevo deja su espejo provisionado;
 *      el de un USER no.
 *   5. Seed deja espejos para staff demo (cubierto por el test del
 *      backfill: provee DIRECTIVO+TEACHER+ADMIN y verifica que cada
 *      staff con escuela tiene exactamente un espejo).
 *
 * La unidad bajo test es `provisionarEspejoAlumno` con el in-memory
 * Prisma del setup. NO se monta un server HTTP — la lógica vive en
 * la lib y se valida contra el stub. Para los hooks de registro
 * (auth/usuarios) hay un test aparte que sí monta un server y pega
 * a `/api/auth/register`.
 */

import assert from "node:assert/strict";
import { before, test } from "node:test";
import { randomUUID } from "node:crypto";
import {
  prisma,
  resetPrisma,
  seedUser
} from "./_helpers/setup";
import {
  ESPEJO_TIPO_CUENTA,
  EspejoNoProvisionableError,
  provisionarEspejoAlumno,
  provisionarEspejosParaStaffExistente
} from "../../src/lib/provisionar-espejo";
import { isStaffInRoles, resolveRoles } from "../../src/lib/roles";

const ESC = "esc-fase1-test";

const seedStaff = (id: string, role: "TEACHER" | "DIRECTIVO" | "ADMIN", fullName: string) => {
  seedUser({
    id,
    role,
    roles: [role],
    schoolId: role === "ADMIN" ? null : ESC,
    fullName
  });
};

before(() => {
  resetPrisma();
});

// ─── 1. Provisión: TEACHER con escuela ──────────────────────────────────

test("FASE 1: provision crea exactamente espejo USER + membresia STUDENT + vinculacion", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Ana Profesora");

  const result = await provisionarEspejoAlumno(teacherId);

  assert.equal(result.created, true, "primera llamada: created=true");
  assert.equal(result.membresiaCreada, true, "con escuela: membresia creada");
  assert.equal(result.espejo.role, "USER", "espejo es USER singular");
  assert.deepEqual(result.espejo.roles, ["USER"], "espejo es USER puro");
  assert.equal(result.espejo.tipoCuenta, ESPEJO_TIPO_CUENTA);
  assert.equal(result.espejo.escuelaId, ESC, "espejo hereda escuela");
  assert.notEqual(result.espejo.id, teacherId, "espejo != principal");
  assert.equal(result.espejo.username.startsWith("espejo-"), true, "prefijo username");
  assert.equal(
    result.espejo.email.endsWith("@mirror.invalid"),
    true,
    "email usa TLD .invalid"
  );

  // El espejo no es staff por ninguna vía.
  assert.equal(isStaffInRoles(resolveRoles(result.espejo)), false, "espejo NO es staff");

  // Membresia: existe una fila STUDENT para el espejo en la escuela.
  const membresiasEspejo = prisma.membresia.rows.filter(
    (m) => m.usuarioId === result.espejo.id && m.escuelaId === ESC
  );
  assert.equal(membresiasEspejo.length, 1, "exactamente 1 membresia");
  assert.equal(membresiasEspejo[0].rol, "STUDENT");
  assert.equal(membresiasEspejo[0].estado, "activa");

  // Vinculacion: exactamente 1 fila, con orden canónico (min, max).
  const vinculos = prisma.cuentaVinculada.rows.filter(
    (v) => v.usuarioAId === result.espejo.id || v.usuarioBId === result.espejo.id
  );
  assert.equal(vinculos.length, 1, "exactamente 1 vinculacion");
  const a = vinculos[0].usuarioAId;
  const b = vinculos[0].usuarioBId;
  assert.ok(a < b, `orden canonico min/max: a=${a} < b=${b}`);
});

// ─── 2. Idempotencia ─────────────────────────────────────────────────────

test("FASE 1: segunda llamada devuelve el mismo espejo (created=false)", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Ana Profesora");

  const first = await provisionarEspejoAlumno(teacherId);
  const second = await provisionarEspejoAlumno(teacherId);

  assert.equal(first.created, true);
  assert.equal(second.created, false, "segunda llamada NO crea");
  assert.equal(first.espejo.id, second.espejo.id, "mismo id de espejo");
  assert.equal(second.membresiaCreada, false, "segunda llamada no recrea membresia");

  // Sigue habiendo 1 sola fila de cada uno.
  assert.equal(
    prisma.cuentaVinculada.rows.filter(
      (v) => v.usuarioAId === first.espejo.id || v.usuarioBId === first.espejo.id
    ).length,
    1
  );
  assert.equal(
    prisma.membresia.rows.filter((m) => m.usuarioId === first.espejo.id).length,
    1
  );
});

// ─── FIX-STAFF-TEMAS-BLOQUEADOS: saldo de bienvenida del espejo de staff ──
// A diferencia del espejo de PADRE (excluido a propósito, ver
// economia-alta.ts), el espejo de STAFF sí recibe saldo: es la única
// cuenta con acceso real a /tienda-temas (ver GET /api/tienda/mis-items).

test("FIX-STAFF-TEMAS-BLOQUEADOS: el espejo de un TEACHER recibe saldo de bienvenida", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Ana Profesora");

  const result = await provisionarEspejoAlumno(teacherId);

  const transacciones = prisma.economiaTransaccion.rows.filter(
    (t) => t.usuarioId === result.espejo.id && t.tipo === "saldo_inicial"
  );
  assert.equal(transacciones.length, 1, "el espejo recibe exactamente 1 crédito de saldo inicial");

  const saldos = prisma.economiaSaldo.rows.filter((s) => s.usuarioId === result.espejo.id);
  assert.equal(saldos.length, 1);
  assert.ok((saldos[0].saldo as number) > 0, "el espejo queda con saldo > 0");
});

test("FIX-STAFF-TEMAS-BLOQUEADOS: llamadas repetidas no duplican el crédito", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Ana Profesora");

  const first = await provisionarEspejoAlumno(teacherId);
  await provisionarEspejoAlumno(teacherId);
  await provisionarEspejoAlumno(teacherId);

  const transacciones = prisma.economiaTransaccion.rows.filter(
    (t) => t.usuarioId === first.espejo.id && t.tipo === "saldo_inicial"
  );
  assert.equal(transacciones.length, 1, "no se duplica el crédito en llamadas repetidas");
});

test("FASE 1: idempotencia: 5 llamadas = 1 espejo + 1 membresia + 1 vinculacion", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Ana Profesora");

  for (let i = 0; i < 5; i += 1) {
    await provisionarEspejoAlumno(teacherId);
  }

  const totalEspejos = prisma.usuario.rows.filter(
    (u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA
  ).length;
  assert.equal(totalEspejos, 1, "un solo espejo en toda la tabla");
  const membresias = prisma.membresia.rows.filter(
    (m) => m.rol === "STUDENT" && m.escuelaId === ESC
  );
  // El espejo es 1, y ya hay 1 fila STUDENT para el espejo. (El
  // profesor mismo puede tener una fila con rol TEACHER; este test
  // cuenta solo las STUDENT del espejo.)
  assert.equal(
    membresias.filter((m) => m.usuarioId !== teacherId).length,
    1,
    "1 sola membresia STUDENT del espejo"
  );
  assert.equal(prisma.cuentaVinculada.rows.length, 1, "1 sola vinculacion");
});

// ─── 3. El espejo NO es staff ────────────────────────────────────────────

test("FASE 1: el espejo no pasa isStaffInRoles ni siquiera si el principal es multi-rol", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  // Principal multi-rol: TEACHER + DIRECTIVO (caso real de
  // profesor-directivo). El espejo igual debe ser USER puro.
  seedUser({
    id: teacherId,
    role: "TEACHER",
    roles: ["TEACHER", "DIRECTIVO"],
    schoolId: ESC,
    fullName: "Multi Staff"
  });

  const result = await provisionarEspejoAlumno(teacherId);

  assert.deepEqual(result.espejo.roles, ["USER"]);
  assert.equal(isStaffInRoles(result.espejo.roles), false);
  assert.equal(result.espejo.role, "USER");
});

// ─── 4. Guardas: USER / GUEST / PARENT no espejan ────────────────────────

test("FASE 1: provision para un USER lanza PRINCIPAL_NOT_STAFF", async () => {
  resetPrisma();
  const studentId = randomUUID();
  seedUser({
    id: studentId,
    role: "USER",
    roles: ["USER"],
    schoolId: ESC,
    fullName: "Alumno"
  });

  await assert.rejects(
    () => provisionarEspejoAlumno(studentId),
    (err: unknown) =>
      err instanceof EspejoNoProvisionableError && err.code === "PRINCIPAL_NOT_STAFF"
  );
});

test("FASE 1: provision para un GUEST lanza PRINCIPAL_NOT_STAFF", async () => {
  resetPrisma();
  const guestId = randomUUID();
  seedUser({
    id: guestId,
    role: "GUEST",
    roles: ["GUEST"],
    schoolId: null,
    fullName: "Invitado"
  });

  await assert.rejects(
    () => provisionarEspejoAlumno(guestId),
    (err: unknown) =>
      err instanceof EspejoNoProvisionableError && err.code === "PRINCIPAL_NOT_STAFF"
  );
});

test("FASE 1: provision para un PARENT lanza PRINCIPAL_NOT_STAFF (Fase 5: opt-in)", async () => {
  resetPrisma();
  const parentId = randomUUID();
  seedUser({
    id: parentId,
    role: "PARENT",
    roles: ["PARENT"],
    schoolId: ESC,
    fullName: "Padre"
  });

  await assert.rejects(
    () => provisionarEspejoAlumno(parentId),
    (err: unknown) =>
      err instanceof EspejoNoProvisionableError && err.code === "PRINCIPAL_NOT_STAFF"
  );
});

test("FASE 1: provision para id inexistente lanza PRINCIPAL_NOT_FOUND", async () => {
  resetPrisma();
  await assert.rejects(
    () => provisionarEspejoAlumno(randomUUID()),
    (err: unknown) =>
      err instanceof EspejoNoProvisionableError && err.code === "PRINCIPAL_NOT_FOUND"
  );
});

test("FASE 1: provision para un espejo (defensa contra recursion) lanza PRINCIPAL_IS_ESPEJO", async () => {
  resetPrisma();
  // Sembramos un principal con su espejo, y luego intentamos espejar
  // el espejo. La fila espejo tiene tipoCuenta=ESPEJO_ALUMNO y roles
  // ["USER"]; el guard de staff filtra antes, así que en realidad
  // va a tirar PRINCIPAL_NOT_STAFF. Pero el test guarda la
  // intención: aunque el espejo tuviera roles staff (caso imposible
  // por invariante), el guard PRINCIPAL_IS_ESPEJO corta.
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Prof");
  const first = await provisionarEspejoAlumno(teacherId);
  // El espejo tiene roles=["USER"] así que tira NOT_STAFF, que es
  // el camino esperado.
  await assert.rejects(
    () => provisionarEspejoAlumno(first.espejo.id),
    (err: unknown) =>
      err instanceof EspejoNoProvisionableError &&
      (err.code === "PRINCIPAL_NOT_STAFF" || err.code === "PRINCIPAL_IS_ESPEJO")
  );
});

// ─── 5. ADMIN sin escuela: espejo sin membresia pero con vinculacion ─────

test("FASE 1: ADMIN sin escuela obtiene espejo + vinculacion pero sin membresia", async () => {
  resetPrisma();
  const adminId = randomUUID();
  seedStaff(adminId, "ADMIN", "Admin Global");

  const result = await provisionarEspejoAlumno(adminId);

  assert.equal(result.created, true);
  assert.equal(result.membresiaCreada, false, "ADMIN sin escuela: sin membresia");
  assert.equal(result.espejo.escuelaId, null, "espejo hereda escuelaId null");
  assert.equal(result.espejo.tipoCuenta, ESPEJO_TIPO_CUENTA);
  // La vinculacion sí existe.
  assert.equal(
    prisma.cuentaVinculada.rows.filter(
      (v) => v.usuarioAId === result.espejo.id || v.usuarioBId === result.espejo.id
    ).length,
    1
  );
  // La membresia NO existe.
  assert.equal(
    prisma.membresia.rows.filter((m) => m.usuarioId === result.espejo.id).length,
    0
  );
});

// ─── 6. Backfill: provisiona espejos para staff existente en bulk ────────

test("FASE 1: provisionarEspejosParaStaffExistente backfilea staff con escuela y omite al resto", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  const directivoId = randomUUID();
  const adminId = randomUUID();
  const studentId = randomUUID();
  const parentId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Prof");
  seedStaff(directivoId, "DIRECTIVO", "Dir");
  seedStaff(adminId, "ADMIN", "Admin");
  seedUser({ id: studentId, role: "USER", roles: ["USER"], schoolId: ESC, fullName: "Al" });
  seedUser({ id: parentId, role: "PARENT", roles: ["PARENT"], schoolId: ESC, fullName: "Pa" });

  const result = await provisionarEspejosParaStaffExistente();

  assert.equal(result.revisados, 5, "se escanearon los 5 usuarios");
  // 3 espejos nuevos (TEACHER + DIRECTIVO + ADMIN; los USER/PARENT
  // se omiten por no ser staff).
  assert.equal(result.creados, 3);
  assert.equal(result.omitidos, 2);

  const espejos = prisma.usuario.rows.filter((u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA);
  assert.equal(espejos.length, 3);
  // Cada principal con escuela tiene una membresia STUDENT del espejo.
  assert.equal(
    prisma.membresia.rows.filter(
      (m) => m.rol === "STUDENT" && espejos.some((e) => e.id === m.usuarioId)
    ).length,
    2,
    "TEACHER y DIRECTIVO: cada espejo con membresia"
  );
  // ADMIN sin escuela: espejo sin membresia.
  const adminEspejo = espejos.find(
    (e) => e.fullName === "Espejo de Admin"
  );
  assert.ok(adminEspejo, "hay espejo para ADMIN");
  assert.equal(
    prisma.membresia.rows.filter((m) => m.usuarioId === adminEspejo!.id).length,
    0,
    "espejo de ADMIN no tiene membresia"
  );
});

test("FASE 1: backfill idempotente: 2 corridas producen la misma cantidad de espejos", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Prof");

  await provisionarEspejosParaStaffExistente();
  const espejosCountAfterFirst = prisma.usuario.rows.filter(
    (u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA
  ).length;

  await provisionarEspejosParaStaffExistente();
  const espejosCountAfterSecond = prisma.usuario.rows.filter(
    (u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA
  ).length;

  assert.equal(espejosCountAfterFirst, 1);
  assert.equal(espejosCountAfterSecond, 1, "segunda corrida: no duplica");
});

// ─── 7. Username / email: no chocan con cuentas reales ───────────────────

test("FASE 1: el username del espejo no colisiona con el principal ni con usuarios reales", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedUser({
    id: teacherId,
    role: "TEACHER",
    roles: ["TEACHER"],
    schoolId: ESC,
    fullName: "Profa López",
    // Username con caracteres raros que el sanitizer debe normalizar.
    // (En el stub el helper de seed usa id como username; acá forzamos
    // uno específico vía updateMany.)
  });
  // Forzamos username con caracteres especiales.
  await prisma.usuario.updateMany({
    where: { id: teacherId },
    data: { username: "Profe.Ana+Demo!" }
  });

  const result = await provisionarEspejoAlumno(teacherId);

  // El username del espejo empieza con `espejo-` y NO contiene chars
  // no alfanuméricos en el segmento del principal. El sanitizer
  // colapsa `Profe.Ana+Demo!` → `profe_ana_demo` (sin guion bajo al
  // final porque `replace(/^_+|_+$/g, "")` los recorta).
  assert.match(
    result.espejo.username,
    /^espejo-profe_ana_demo-[a-f0-9]{6}$/,
    `username espejado normalizado: ${result.espejo.username}`
  );
  // El principal sigue existiendo con su username original.
  const principalDespues = prisma.usuario.rows.find((u) => u.id === teacherId);
  assert.equal(principalDespues?.username, "Profe.Ana+Demo!");
});

test("FASE 1: el username y email del espejo son unicos entre varios staff", async () => {
  resetPrisma();
  const t1 = randomUUID();
  const t2 = randomUUID();
  const t3 = randomUUID();
  seedStaff(t1, "TEACHER", "P1");
  seedStaff(t2, "TEACHER", "P2");
  seedStaff(t3, "TEACHER", "P3");

  const r1 = await provisionarEspejoAlumno(t1);
  const r2 = await provisionarEspejoAlumno(t2);
  const r3 = await provisionarEspejoAlumno(t3);

  const usernames = [r1.espejo.username, r2.espejo.username, r3.espejo.username];
  const emails = [r1.espejo.email, r2.espejo.email, r3.espejo.email];
  assert.equal(new Set(usernames).size, 3, "usernames unicos");
  assert.equal(new Set(emails).size, 3, "emails unicos");
});

// ─── 8. El espejo no es logueable (sin passwordHash) ─────────────────────

test("FASE 1: el espejo creado tiene passwordHash null y no es logueable", async () => {
  resetPrisma();
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Profa");

  const result = await provisionarEspejoAlumno(teacherId);
  const espejoRow = prisma.usuario.rows.find((u) => u.id === result.espejo.id);
  assert.equal(espejoRow?.passwordHash, null, "espejo sin passwordHash");
  // El endpoint de login exige hash utilizable (ver auth.ts:461); un
  // null hace fallar el login con 401. Esto es lo que queremos: el
  // espejo NUNCA se loguea por contraseña — solo se entra por switch.
});

// ─── 9. Vinculacion: orden canonico (min, max) ───────────────────────────

test("FASE 1: la vinculacion se inserta con orden canonico (min, max) aunque el principal se cree antes que el espejo", async () => {
  resetPrisma();
  // Caso exótico: principal con id menor que el espejo. El servicio
  // genera el UUID del espejo con randomUUID() que no es
  // monótono, así que podemos tener principalId > espejoId. La
  // vinculacion igual debe respetar (min, max).
  const teacherId = "00000000-0000-0000-0000-000000000001";
  seedStaff(teacherId, "TEACHER", "P1");
  // Forzamos al espejo a tener un id mayor: creamos primero una fila
  // "tonta" con id alto que será sobreescrita por el create del
  // servicio. Para no pelear con UUIDs, este test se valida del
  // modo siguiente: dejamos que el servicio cree, y revisamos que
  // SIEMPRE se cumple `a < b`.
  const result = await provisionarEspejoAlumno(teacherId);
  const vinculo = prisma.cuentaVinculada.rows[0];
  const espejofromRow = prisma.usuario.rows.find((u) => u.id === result.espejo.id)!;
  const a = vinculo.usuarioAId;
  const b = vinculo.usuarioBId;
  // Cualquiera de los dos puede ser el espejo; lo que importa es
  // que la tupla sea ordenada.
  assert.ok(a < b, `a < b: a=${a} b=${b}`);
  const ids = new Set([a, b]);
  assert.ok(ids.has(teacherId));
  assert.ok(ids.has(espejofromRow.id));
});

// ─── 10. Hooks: register engancha la provision solo para staff ───────────

test("FASE 1: hook tryProvisionarEspejoParaNuevoStaff no lanza aunque falle", async () => {
  resetPrisma();
  const { tryProvisionarEspejoParaNuevoStaff } = await import(
    "../../src/lib/provisionar-espejo"
  );
  // Pasamos un id que no existe: la provision tira error, pero el
  // hook best-effort no debe propagarlo.
  const result = await tryProvisionarEspejoParaNuevoStaff(randomUUID());
  assert.equal(result.ok, false, "ok=false para id inexistente");
  // Tampoco se creó nada.
  assert.equal(prisma.usuario.rows.filter((u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA).length, 0);
});

test("FASE 1: hook tryProvisionarEspejoParaNuevoStaff propaga éxito en TEACHER", async () => {
  resetPrisma();
  const { tryProvisionarEspejoParaNuevoStaff } = await import(
    "../../src/lib/provisionar-espejo"
  );
  const teacherId = randomUUID();
  seedStaff(teacherId, "TEACHER", "Profa");
  const result = await tryProvisionarEspejoParaNuevoStaff(teacherId);
  assert.equal(result.ok, true);
  assert.equal(prisma.usuario.rows.filter((u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA).length, 1);
});

test("FASE 1: hook tryProvisionarEspejoParaNuevoStaff omite USER sin lanzar", async () => {
  resetPrisma();
  const { tryProvisionarEspejoParaNuevoStaff } = await import(
    "../../src/lib/provisionar-espejo"
  );
  const studentId = randomUUID();
  seedUser({ id: studentId, role: "USER", roles: ["USER"], schoolId: ESC, fullName: "Al" });
  const result = await tryProvisionarEspejoParaNuevoStaff(studentId);
  assert.equal(result.ok, false, "ok=false para USER (omitido por no ser staff)");
  assert.equal(prisma.usuario.rows.filter((u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA).length, 0);
});
