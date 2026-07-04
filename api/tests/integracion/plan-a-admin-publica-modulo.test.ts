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
 * Conclusión original: no reproducible en HEAD a nivel API pura (crear +
 * publicar). Este primer test deja ese comportamiento bajo regresión
 * (ADMIN, con o sin escuela, puede crear y publicar un módulo).
 *
 * PLAN-CORRECCIONES C1 (2026-07-03) — repro en navegador (Claude en
 * Chrome, siguiendo el "próximo paso" que el propio plan dejó
 * anotado): "publica pero no visible" SÍ era reproducible, pero no por
 * caché stale ni falta de re-fetch (la hipótesis original) — era un
 * bug de contrato entre `GET /api/modulos` (listado) y el front.
 * `GET /api/modulos/:id` mapea las columnas de Prisma (`titulo`,
 * `descripcion`, `ownerUserId`) a lo que `ModulosList.tsx` espera
 * (`title`, `description`, `createdBy`); el listado devolvía las filas
 * CRUDAS sin ese mapeo. Efecto observable: el título de cada card salía
 * en blanco, la pestaña "Mis módulos" (filtra client-side por
 * `module.createdBy`, siempre `undefined` en la fila cruda) no mostraba
 * NADA aunque el módulo existiera y fuera del usuario, y la búsqueda
 * por texto tampoco encontraba nada (`module.title`/`description`
 * también `undefined`). Fix: `toModuleListItem` en `modulos.ts`
 * (mismo mapeo que ya usaba el GET de detalle), aplicado en las dos
 * ramas de `GET /api/modulos`.
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

test("PLAN-CORRECCIONES C1: GET /api/modulos (listado) devuelve title/description/createdBy mapeados, no las columnas crudas de Prisma", async () => {
  const token = tokenFor({ id: ADMIN_SIN_ESCUELA, role: "ADMIN", schoolId: null });
  const now = new Date().toISOString();

  const createRes = await jsonRequest(baseUrl, "POST", "/api/modulos", {
    token,
    body: {
      title: "TEST-C1 listado con titulo",
      description: "Descripcion de prueba",
      visibility: "publico",
      createdBy: ADMIN_SIN_ESCUELA,
      createdAt: now,
      updatedAt: now,
      subject: "matemáticas",
      category: "General",
      level: "General",
      durationMinutes: 10,
      dependencies: []
    }
  });
  assert.equal(createRes.status, 201, JSON.stringify(createRes.body));
  const moduloId = (createRes.body as { id: string }).id;

  const listRes = await jsonRequest(baseUrl, "GET", "/api/modulos", { token });
  assert.equal(listRes.status, 200);
  const body = listRes.body as {
    items: Array<Record<string, unknown> & { id: string }>;
  };
  const item = body.items.find((i) => i.id === moduloId);
  assert.ok(item, "el módulo recién creado debe aparecer en el listado");
  // Antes del fix, el listado devolvía la fila cruda de Prisma:
  // `titulo`/`descripcion`/`ownerUserId` en vez de
  // `title`/`description`/`createdBy` — el título salía en blanco en
  // `ModulosList.tsx` y "Mis módulos"/la búsqueda no encontraban nada.
  assert.equal(item!.title, "TEST-C1 listado con titulo");
  assert.equal(item!.description, "Descripcion de prueba");
  assert.equal(item!.createdBy, ADMIN_SIN_ESCUELA);
  assert.equal("titulo" in item!, false, "no debe filtrar el nombre crudo de la columna");
  assert.equal("ownerUserId" in item!, false, "no debe filtrar el nombre crudo de la columna");

  // Mismo chequeo con ?mine=true, que es lo que "Mis módulos" necesitaría
  // si migrara a filtrar server-side (hoy `ModulosList.tsx` filtra
  // client-side por `createdBy`, que dependía de este mismo mapeo).
  const mineRes = await jsonRequest(baseUrl, "GET", "/api/modulos?mine=true", { token });
  assert.equal(mineRes.status, 200);
  const mineBody = mineRes.body as { items: Array<{ id: string; createdBy: string }> };
  const mineItem = mineBody.items.find((i) => i.id === moduloId);
  assert.ok(mineItem, "?mine=true también debe traer el módulo con createdBy mapeado");
  assert.equal(mineItem!.createdBy, ADMIN_SIN_ESCUELA);
});
