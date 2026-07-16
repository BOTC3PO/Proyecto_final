/**
 * FASE 5 — espejo opt-in del padre.
 *
 * Criterios (de `tareas_pendientes/FASE-5-padre.md`):
 *   - El botón opt-in crea el espejo (provisión idempotente) y habilita
 *     el switch (queda un `CuentaVinculada` resoluble).
 *   - NO se auto-crea en el registro (cubierto en register-hook-espejo:
 *     un PARENT registrándose no recibe espejo). Acá validamos el
 *     camino on-demand.
 *   - Un USER (que ya ES alumno) no puede crear espejo por esta vía.
 *
 * Monta un server HTTP con las rutas reales de `padres` y pega a
 * `POST /api/padres/crear-cuenta-alumno`.
 */

import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { randomUUID } from "node:crypto";
import {
  prisma,
  resetPrisma,
  seedUser,
  tokenFor,
  startServer,
  jsonRequest,
  type Role
} from "./_helpers/setup";
import { ESPEJO_TIPO_CUENTA } from "../../src/lib/provisionar-espejo";
import { padres } from "../../src/routes/padres";

const ESC = "esc-fase5-optin";
let baseUrl: string;
let close: () => Promise<void>;

before(async () => {
  const srv = await startServer([padres]);
  baseUrl = srv.baseUrl;
  close = srv.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
});

const seedPadre = (id: string) =>
  seedUser({ id, role: "PARENT" as Role, roles: ["PARENT"], schoolId: ESC, fullName: "Padre Uno" });

test("FASE 5: el padre crea su cuenta de alumno (opt-in) y queda vinculada", async () => {
  const padreId = randomUUID();
  seedPadre(padreId);
  const token = tokenFor({ id: padreId, role: "PARENT", roles: ["PARENT"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/padres/crear-cuenta-alumno", { token, body: {} });

  assert.equal(res.status, 201);
  const body = res.body as {
    ok: boolean; created: boolean;
    espejo: { id: string; username: string };
    cuentaVinculada: { destinoUsuarioId: string; tipoDestino: string } | null;
  };
  assert.equal(body.ok, true);
  assert.equal(body.created, true);
  assert.equal(body.espejo.username.startsWith("espejo-"), true);

  // El espejo es USER puro con marcador ESPEJO_ALUMNO.
  const espejo = prisma.usuario.rows.find((u) => u.id === body.espejo.id);
  assert.ok(espejo);
  assert.deepEqual(espejo!.roles, ["USER"]);
  assert.equal(espejo!.tipoCuenta, ESPEJO_TIPO_CUENTA);

  // El switch queda habilitado: hay un vínculo resoluble y apunta al espejo.
  assert.ok(body.cuentaVinculada);
  assert.equal(body.cuentaVinculada!.tipoDestino, "ALUMNO");
  assert.equal(body.cuentaVinculada!.destinoUsuarioId, body.espejo.id);
  assert.equal(prisma.cuentaVinculada.rows.length, 1);

  // FIX-STAFF-TEMAS-BLOQUEADOS — a diferencia del espejo de STAFF, el de
  // PADRE NO recibe saldo de bienvenida: exclusión deliberada (ver
  // economia-alta.ts) porque el padre no está dando de alta un hijo
  // nuevo, está creando su propio doble para explorar la app.
  assert.equal(
    prisma.economiaTransaccion.rows.filter((t) => t.usuarioId === body.espejo.id).length,
    0,
    "el espejo de padre no recibe crédito de saldo inicial"
  );
});

test("FASE 5: la creación es idempotente (segunda llamada devuelve el mismo espejo, created=false)", async () => {
  const padreId = randomUUID();
  seedPadre(padreId);
  const token = tokenFor({ id: padreId, role: "PARENT", roles: ["PARENT"], schoolId: ESC });

  const first = await jsonRequest(baseUrl, "POST", "/api/padres/crear-cuenta-alumno", { token, body: {} });
  const second = await jsonRequest(baseUrl, "POST", "/api/padres/crear-cuenta-alumno", { token, body: {} });

  assert.equal(first.status, 201);
  assert.equal(second.status, 200);
  const b1 = first.body as { espejo: { id: string } };
  const b2 = second.body as { created: boolean; espejo: { id: string } };
  assert.equal(b2.created, false);
  assert.equal(b1.espejo.id, b2.espejo.id, "mismo espejo");

  // Un solo espejo y un solo vínculo en toda la base.
  assert.equal(prisma.usuario.rows.filter((u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA).length, 1);
  assert.equal(prisma.cuentaVinculada.rows.length, 1);
});

test("FASE 5: un USER no puede crear cuenta de alumno por esta vía (403)", async () => {
  const userId = randomUUID();
  seedUser({ id: userId, role: "USER", roles: ["USER"], schoolId: ESC, fullName: "Alumno" });
  const token = tokenFor({ id: userId, role: "USER", roles: ["USER"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/padres/crear-cuenta-alumno", { token, body: {} });

  assert.equal(res.status, 403);
  assert.equal(prisma.usuario.rows.filter((u) => u.tipoCuenta === ESPEJO_TIPO_CUENTA).length, 0);
});

test("FASE 5: sin token → 401", async () => {
  const res = await jsonRequest(baseUrl, "POST", "/api/padres/crear-cuenta-alumno", { body: {} });
  assert.equal(res.status, 401);
});

test("FASE 5: el espejo del padre hereda la escuela y obtiene membresía STUDENT", async () => {
  const padreId = randomUUID();
  seedPadre(padreId);
  const token = tokenFor({ id: padreId, role: "PARENT", roles: ["PARENT"], schoolId: ESC });

  const res = await jsonRequest(baseUrl, "POST", "/api/padres/crear-cuenta-alumno", { token, body: {} });
  const body = res.body as { espejo: { id: string } };

  const membresias = prisma.membresia.rows.filter(
    (m) => m.usuarioId === body.espejo.id && m.escuelaId === ESC && m.rol === "STUDENT"
  );
  assert.equal(membresias.length, 1);
});
