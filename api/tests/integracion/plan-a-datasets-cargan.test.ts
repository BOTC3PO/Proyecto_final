/**
 * PLAN-A §6 (fase 1/4) — ítem 18 ("los datasets no cargan").
 *
 * Investigación: se chequearon las 3 hipótesis del plan contra el código
 * actual (HEAD) y la base real de dev, y ninguna se sostiene:
 *  1. **Fetch/auth roto**: se reprodujo `GET /api/vblang/datasets` en
 *     proceso (mismo patrón que los demás repros de PLAN-A) contra la
 *     base real, con un TEACHER real (`prof.garcia`) y con un ADMIN sin
 *     escuela (`admin.plataforma`, el huérfano de §1) — ambos reciben
 *     200 con los 3 datasets seedeados. `datasetApi.ts` usa el helper
 *     `apiGet` estándar, sin URL/base hardcodeada distinta al resto.
 *  2. **Base sin datos**: la base de dev YA tiene 3 `VblangDataset`
 *     seedeados (2 demo `visibility: "escuela"` de `esc-0001` + la tabla
 *     periódica `visibility: "publica"` global) — no está vacía.
 *  3. **Filtro por escuela/visibilidad que excluye todo**: el `where` de
 *     `GET /api/vblang/datasets` (vblang-datasets.ts:99-113) siempre
 *     agrega la rama `{ visibility: "publica", NOT: { ownerUserId } }`
 *     SIN condicionarla a tener `schoolId` — un staff sin escuela igual
 *     ve los públicos.
 *
 * Conclusión: no reproducible en HEAD. El front (`DatasetExplorer.tsx`,
 * `VblangDatasetsIndex.tsx`) ya distingue "cargando" / "error" / "vacío
 * de verdad" (no hay confusión ahí). Este test deja el camino feliz bajo
 * regresión: un TEACHER ve los datasets `publica` aunque no sea el owner
 * ni comparta escuela.
 */
import assert from "node:assert/strict";
import { after, before, beforeEach, test } from "node:test";
import { prisma, resetPrisma, seedUser, tokenFor, startServer, jsonRequest } from "./_helpers/setup";

let baseUrl: string;
let close: () => Promise<void>;

const OWNER_ID = "owner-dataset";
const OTRO_TEACHER_ID = "otro-teacher-sin-escuela-compartida";
const ESCUELA_OWNER = "esc-dataset-owner";
const ESCUELA_OTRA = "esc-dataset-otra";

before(async () => {
  const { vblangDatasets } = await import("../../src/routes/vblang-datasets");
  const server = await startServer([vblangDatasets]);
  baseUrl = server.baseUrl;
  close = server.close;
});

after(async () => {
  if (close) await close();
});

beforeEach(() => {
  resetPrisma();
  seedUser({ id: OWNER_ID, role: "TEACHER", schoolId: ESCUELA_OWNER });
  seedUser({ id: OTRO_TEACHER_ID, role: "TEACHER", schoolId: ESCUELA_OTRA });

  const now = new Date().toISOString();
  prisma.vblangDataset.rows.push({
    id: "ds-publico",
    ownerUserId: OWNER_ID,
    schoolId: ESCUELA_OWNER,
    visibility: "publica",
    nombre: "dataset_publico",
    descripcion: "Público, cualquier staff lo ve",
    columnas: JSON.stringify({ nombre: "string" }),
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
  prisma.vblangDataset.rows.push({
    id: "ds-privado-otro",
    ownerUserId: OWNER_ID,
    schoolId: ESCUELA_OWNER,
    visibility: "privada",
    nombre: "dataset_privado",
    descripcion: "Privado del owner",
    columnas: JSON.stringify({ nombre: "string" }),
    isDeleted: false,
    createdAt: now,
    updatedAt: now,
  });
});

test("PLAN-A §6: un TEACHER de OTRA escuela ve los datasets 'publica' (no ve los privados ajenos)", async () => {
  const token = tokenFor({ id: OTRO_TEACHER_ID, role: "TEACHER", schoolId: ESCUELA_OTRA });
  const res = await jsonRequest(baseUrl, "GET", "/api/vblang/datasets", { token });
  assert.equal(res.status, 200, JSON.stringify(res.body));
  const body = res.body as { items: Array<{ id: string }>; total: number };
  const ids = body.items.map((i) => i.id);
  assert.ok(ids.includes("ds-publico"), "debe ver el dataset público aunque sea de otra escuela");
  assert.ok(!ids.includes("ds-privado-otro"), "no debe ver el privado ajeno");
});

test("PLAN-A §6: el owner ve ambos (el suyo privado y el público)", async () => {
  const token = tokenFor({ id: OWNER_ID, role: "TEACHER", schoolId: ESCUELA_OWNER });
  const res = await jsonRequest(baseUrl, "GET", "/api/vblang/datasets", { token });
  assert.equal(res.status, 200);
  const body = res.body as { items: Array<{ id: string }>; total: number };
  const ids = body.items.map((i) => i.id);
  assert.ok(ids.includes("ds-publico"));
  assert.ok(ids.includes("ds-privado-otro"));
});
