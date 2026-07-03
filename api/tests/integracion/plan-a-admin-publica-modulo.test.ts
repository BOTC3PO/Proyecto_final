/**
 * PLAN-A §5 (fase 1/3) — ítem 43 ("el administrador no puede publicar
 * módulos").
 *
 * Investigación: se chequearon las 3 hipótesis del plan en el código
 * actual (HEAD) y ninguna se sostiene:
 *  1. `PATCH /api/modulos/:id` no tiene ningún `requirePolicy`/guard de
 *     rol — sólo `requireUser`. `canEditModuloDirect` (modulos.ts:83-100)
 *     devuelve `true` para ADMIN incondicionalmente (no depende de
 *     `schoolId` ni de "escuela" match).
 *  2. Crear/publicar un módulo con `visibility: "publico"` no requiere
 *     `schoolId` en ningún punto del payload ni del handler — sólo
 *     `visibility: "escuela"` usa `schoolId`. Se reprodujo end-to-end
 *     contra la base real con un ADMIN sin `escuelaId`
 *     (`admin.plataforma`, el mismo huérfano de PLAN-A §1): creó un
 *     módulo (201) y lo publicó con `PATCH { visibility: "publico" }`
 *     (200) sin ningún error.
 *  3. El front (`ModulosList.tsx:71` `canEdit = useHasAnyRole(["TEACHER",
 *     "ADMIN"])`, `router.tsx` permite ADMIN en las rutas del editor)
 *     tampoco oculta el botón para ADMIN.
 *
 * Conclusión: no reproducible en HEAD — no hay fix de código que
 * aplicar. Este test deja el comportamiento correcto bajo regresión
 * (ADMIN, con o sin escuela, puede crear y publicar un módulo).
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const ADMIN_SIN_ESCUELA = "admin-sin-escuela";

before(async () => {
  const { modulos } = await import("../../src/routes/modulos");
  const server = await startServer([modulos]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: ADMIN_SIN_ESCUELA, role: "ADMIN", schoolId: null });
});

test("PLAN-A §5: ADMIN sin escuela crea un módulo privado y lo publica (visibility=publico)", async () => {
  const token = tokenFor({ id: ADMIN_SIN_ESCUELA, role: "ADMIN", schoolId: null });
  const now = new Date().toISOString();

  const createRes = await jsonRequest(baseUrl, "POST", "/api/modulos", {
    token,
    body: {
      title: "Módulo de prueba",
      description: "Descripción",
      visibility: "privado",
      createdBy: ADMIN_SIN_ESCUELA,
      createdAt: now,
      updatedAt: now,
      subject: "General",
      category: "General",
      level: "General",
      durationMinutes: 10,
      dependencies: []
    }
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  const moduloId = (createRes.body as { id: string }).id;

  const patchRes = await jsonRequest(baseUrl, "PATCH", `/api/modulos/${moduloId}`, {
    token,
    body: { visibility: "publico" }
  });
  assert.equal(patchRes.status, 200, JSON.stringify(patchRes.body));
});
