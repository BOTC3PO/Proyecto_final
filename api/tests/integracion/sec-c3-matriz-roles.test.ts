/**
 * C3 / G4 — matriz automática rol × endpoint sobre la aplicación REAL.
 *
 * Recorre todas las rutas protegidas de `src/app.ts` y, para los prefijos de gestión, comprueba que los
 * roles que no corresponden NO pasan el control de acceso: la respuesta tiene que ser 401, 403 o 404 y
 * nunca 2xx, 400 (validación antes que permisos) ni 5xx. Una ruta nueva bajo uno de estos prefijos que
 * olvide el control de rol hace fallar este test.
 *
 * Los pedidos van con cuerpo vacío e ids falsos: sirve para el control de acceso, no para la lógica.
 */

process.env.NODE_ENV = "test";

import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import type { Server } from "node:http";
import { prisma, resetPrisma, seedUser, tokenFor } from "./_helpers/setup";
import { app } from "../../src/app";
import { requireUser } from "../../src/lib/user-auth";
import { requireAdmin } from "../../src/lib/admin-auth";
import { assetsRouter } from "../../src/routes/assets";
import { mediaRouter } from "../../src/routes/media";
import { visualizadoresRouter } from "../../src/routes/visualizadores";
import { herramientasRouter } from "../../src/routes/herramientas";
import { mapsRouter } from "../../src/routes/maps";
import { provinciasRouter } from "../../src/maps/provincias";

const PREFIJOS = new Map<unknown, string>([
  [assetsRouter, "/api/assets"], [mediaRouter, "/api/media"], [visualizadoresRouter, "/api/visualizadores"],
  [herramientasRouter, "/api/herramientas"], [mapsRouter, "/api/maps"], [provinciasRouter, "/api/maps/provincias"],
]);

type Rol = "ADMIN" | "ADMIN_ESCUELA" | "DIRECTIVO" | "TEACHER" | "USER" | "PARENT" | "GUEST";
const BAJOS: Rol[] = ["USER", "PARENT", "GUEST"];

/** Prefijo → roles que NO deben pasar. Agregar acá cada área de gestión nueva. */
const REGLAS: Array<{ prefijo: string; prohibidos: Rol[] }> = [
  { prefijo: "/api/admin", prohibidos: ["ADMIN_ESCUELA", "DIRECTIVO", "TEACHER", ...BAJOS] },
  { prefijo: "/api/enterprise", prohibidos: ["TEACHER", ...BAJOS] },
  { prefijo: "/api/moderacion", prohibidos: ["DIRECTIVO", "TEACHER", ...BAJOS] },
  { prefijo: "/api/comisiones", prohibidos: ["ADMIN_ESCUELA", "DIRECTIVO", "TEACHER", ...BAJOS] },
  { prefijo: "/api/estadisticas", prohibidos: BAJOS },
  { prefijo: "/api/reportes", prohibidos: BAJOS },
  { prefijo: "/api/usuarios", prohibidos: BAJOS },
  { prefijo: "/api/escuela/", prohibidos: BAJOS },
];

/** Rutas bajo esos prefijos que son del propio usuario o públicas a propósito (con el motivo). */
const EXCEPCIONES = new Map<string, string>([
  // (vacío a propósito: si hace falta, agregar "METODO /ruta" con el motivo)
]);

const ESC = "esc-mx";
const rutas: Array<{ metodo: string; ruta: string; protegida: boolean }> = [];
const tokens = {} as Record<Rol, string>;
let server: Server;
let base = "";

before(async () => {
  resetPrisma();
  prisma.escuela.rows.push({ id: ESC, name: ESC, isDeleted: false, estadoVerificacion: "verificada", createdAt: new Date().toISOString() } as never);
  const roles: Array<[Rol, string | null, string | null]> = [
    ["ADMIN", null, null], ["ADMIN_ESCUELA", ESC, "ADMIN_ESCUELA"], ["DIRECTIVO", ESC, "DIRECTIVO"],
    ["TEACHER", ESC, "TEACHER"], ["USER", ESC, "STUDENT"], ["PARENT", ESC, "PARENT"], ["GUEST", null, null],
  ];
  for (const [rol, escuela, membresia] of roles) {
    const id = `mx-${rol}`;
    seedUser({ id, role: rol as never, schoolId: escuela });
    if (membresia) prisma.membresia.rows.push({ usuarioId: id, escuelaId: ESC, rol: membresia, estado: "activa", fechaAlta: new Date().toISOString() } as never);
    tokens[rol] = tokenFor({ id, role: rol as never, schoolId: escuela });
  }

  const raiz = (app as unknown as { router: { stack: unknown[] } }).router.stack as Array<Record<string, any>>;
  const visitar = (capas: Array<Record<string, any>>, prefijo: string, protegidaAfuera: boolean) => {
    for (const capa of capas) {
      if (capa.route) {
        const handlers = capa.route.stack.map((h: any) => h.handle);
        const propia = handlers.includes(requireUser) || handlers.includes(requireAdmin);
        for (const m of Object.keys(capa.route.methods)) {
          rutas.push({ metodo: m.toUpperCase(), ruta: `${prefijo}${capa.route.path}`, protegida: protegidaAfuera || propia });
        }
      } else if (capa.handle?.stack) {
        visitar(capa.handle.stack, PREFIJOS.get(capa.handle) ?? prefijo, protegidaAfuera);
      }
    }
  };
  let protegida = false;
  for (const capa of raiz) {
    if (capa.handle === requireUser) { protegida = true; continue; }
    visitar([capa], "", protegida);
  }
  server = await new Promise<Server>((ok) => { const s = app.listen(0, () => ok(s)); });
  base = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
});
after(async () => { if (server) await new Promise((ok) => server.close(ok)); });

const llamar = async (metodo: string, ruta: string, rol: Rol) => {
  const path = ruta.replace(/:([A-Za-z0-9_]+)\??/g, "x-$1").replace(/\*/g, "x");
  const res = await fetch(base + path, {
    method: metodo,
    redirect: "manual",
    headers: { "content-type": "application/json", authorization: `Bearer ${tokens[rol]}` },
    body: metodo === "GET" || metodo === "DELETE" ? undefined : "{}",
  });
  await res.arrayBuffer();
  return res.status;
};

test("la matriz recorre rutas reales de cada prefijo de gestión", () => {
  for (const { prefijo } of REGLAS) {
    assert.ok(rutas.some((r) => r.ruta.startsWith(prefijo)), `no se encontró ninguna ruta bajo ${prefijo}`);
  }
});

for (const { prefijo, prohibidos } of REGLAS) {
  test(`${prefijo}: ${prohibidos.join(", ")} no pasan el control de acceso`, async () => {
    const delPrefijo = rutas.filter((r) => r.protegida && r.ruta.startsWith(prefijo) && !/webhook|\/auth\//.test(r.ruta));
    const fallos: string[] = [];
    for (const r of delPrefijo) {
      if (EXCEPCIONES.has(`${r.metodo} ${r.ruta}`)) continue;
      for (const rol of prohibidos) {
        const status = await llamar(r.metodo, r.ruta, rol);
        if (![401, 403, 404].includes(status)) fallos.push(`${r.metodo} ${r.ruta} como ${rol} → ${status}`);
      }
    }
    assert.deepEqual(fallos, [], `rutas de gestión que dejan pasar a un rol que no corresponde:\n${fallos.join("\n")}`);
  });
}
