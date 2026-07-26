/**
 * PLAN-multirol Fase 1 — `Membresia` como fuente de verdad.
 *
 * Antes de este plan sólo dos caminos la escribían y cuatro la ignoraban,
 * mientras `usuarios.ts` autorizaba leyéndola. Estos tests cubren:
 *  - que los cuatro caminos ahora la mantengan,
 *  - que una persona pueda tener dos roles en la MISMA escuela (lo que
 *    antes bloqueaba la PK y forzaba las cuentas espejo),
 *  - la regla del rol principal ("el primero con el que se registró, salvo
 *    que esté desactivado").
 */
import assert from "node:assert/strict";
import { beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser } from "./_helpers/setup";
import {
  desactivarMembresia,
  rolPrincipalEnEscuela,
  sincronizarMembresia
} from "../../src/lib/memberships";

const ESCUELA_A = "esc-multirol-a";
const ESCUELA_B = "esc-multirol-b";

const nowIso = () => new Date().toISOString();

beforeEach(() => {
  resetPrisma();
  for (const id of [ESCUELA_A, ESCUELA_B]) {
    prisma.escuela.rows.push({ estadoVerificacion: "verificada", id, name: id, isDeleted: false, createdAt: nowIso() });
  }
});

const membresiasDe = (usuarioId: string) =>
  prisma.membresia.rows.filter((m) => m.usuarioId === usuarioId);

test("una persona puede ser DIRECTIVO en una escuela y alumno en otra, con una sola cuenta", async () => {
  seedUser({ id: "juan", role: "DIRECTIVO", schoolId: ESCUELA_A });

  await sincronizarMembresia({ usuarioId: "juan", escuelaId: ESCUELA_A, rolUsuario: "DIRECTIVO" });
  await sincronizarMembresia({ usuarioId: "juan", escuelaId: ESCUELA_B, rolUsuario: "USER" });

  const filas = membresiasDe("juan");
  assert.equal(filas.length, 2, "una sola cuenta, dos membresías");
  assert.equal(prisma.usuario.rows.filter((u) => u.id === "juan").length, 1, "no se duplica el usuario");
  assert.equal(filas.find((m) => m.escuelaId === ESCUELA_A)?.rol, "DIRECTIVO");
  assert.equal(filas.find((m) => m.escuelaId === ESCUELA_B)?.rol, "STUDENT");
});

test("dos roles en la MISMA escuela conviven (lo que antes forzaba la cuenta espejo)", async () => {
  seedUser({ id: "ana", role: "TEACHER", schoolId: ESCUELA_A });

  await sincronizarMembresia({ usuarioId: "ana", escuelaId: ESCUELA_A, rolUsuario: "TEACHER" });
  await sincronizarMembresia({ usuarioId: "ana", escuelaId: ESCUELA_A, rolUsuario: "PARENT" });

  const filas = membresiasDe("ana");
  assert.equal(filas.length, 2);
  assert.deepEqual(
    filas.map((m) => m.rol).sort(),
    ["PARENT", "TEACHER"],
    "el rol está en la PK, así que no se pisan"
  );
});

test("sincronizar dos veces el mismo rol es idempotente y conserva la fechaAlta original", async () => {
  seedUser({ id: "leo", role: "TEACHER", schoolId: ESCUELA_A });
  const alta = "2020-01-01T00:00:00.000Z";

  await sincronizarMembresia({
    usuarioId: "leo",
    escuelaId: ESCUELA_A,
    rolUsuario: "TEACHER",
    fechaAlta: alta
  });
  await sincronizarMembresia({ usuarioId: "leo", escuelaId: ESCUELA_A, rolUsuario: "TEACHER" });

  const filas = membresiasDe("leo");
  assert.equal(filas.length, 1, "no duplica");
  assert.equal(filas[0]?.fechaAlta, alta, "la antigüedad no se pisa: de ella depende el rol principal");
});

test("ADMIN no genera membresía (no es miembro de ninguna escuela)", async () => {
  seedUser({ id: "root", role: "ADMIN", schoolId: ESCUELA_A });

  const res = await sincronizarMembresia({
    usuarioId: "root",
    escuelaId: ESCUELA_A,
    rolUsuario: "ADMIN"
  });

  assert.equal(res.escrita, false);
  assert.equal(membresiasDe("root").length, 0);
});

// ── Regla del rol principal ──────────────────────────────────────

test("el rol principal es el más antiguo de la escuela", async () => {
  seedUser({ id: "pia", role: "TEACHER", schoolId: ESCUELA_A });

  await sincronizarMembresia({
    usuarioId: "pia",
    escuelaId: ESCUELA_A,
    rolUsuario: "TEACHER",
    fechaAlta: "2024-01-01T00:00:00.000Z"
  });
  await sincronizarMembresia({
    usuarioId: "pia",
    escuelaId: ESCUELA_A,
    rolUsuario: "PARENT",
    fechaAlta: "2026-01-01T00:00:00.000Z"
  });

  assert.equal(await rolPrincipalEnEscuela("pia", ESCUELA_A), "TEACHER");
});

test("si el rol más antiguo se desactiva, el principal pasa al siguiente activo", async () => {
  seedUser({ id: "pia", role: "TEACHER", schoolId: ESCUELA_A });
  await sincronizarMembresia({
    usuarioId: "pia",
    escuelaId: ESCUELA_A,
    rolUsuario: "TEACHER",
    fechaAlta: "2024-01-01T00:00:00.000Z"
  });
  await sincronizarMembresia({
    usuarioId: "pia",
    escuelaId: ESCUELA_A,
    rolUsuario: "PARENT",
    fechaAlta: "2026-01-01T00:00:00.000Z"
  });

  // "era profesor pero ahora no lo es" — el caso que planteó Javier.
  const bajado = await desactivarMembresia({
    usuarioId: "pia",
    escuelaId: ESCUELA_A,
    rol: "TEACHER"
  });

  assert.equal(bajado, true);
  assert.equal(await rolPrincipalEnEscuela("pia", ESCUELA_A), "PARENT");
  const teacher = membresiasDe("pia").find((m) => m.rol === "TEACHER");
  assert.equal(teacher?.estado, "revocada", "la baja se registra, no se borra la fila");
  assert.ok(teacher?.fechaBaja, "queda con fechaBaja");
});

test("sin membresías activas en esa escuela no hay rol principal", async () => {
  seedUser({ id: "solo", role: "TEACHER", schoolId: ESCUELA_A });
  assert.equal(await rolPrincipalEnEscuela("solo", ESCUELA_B), null);
});
