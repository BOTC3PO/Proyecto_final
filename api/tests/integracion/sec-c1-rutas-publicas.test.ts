/**
 * C1 — la frontera público/privado de la API no puede abrirse sin que nadie lo note.
 *
 * Todo lo que se monta ANTES de `app.use(requireUser)` en `src/app.ts` es público. Este test recorre
 * las rutas de la aplicación real y falla si aparece una pública que no está en la lista de abajo,
 * o si un router montado con prefijo no está registrado acá. Para publicar una ruta a propósito hay
 * que agregarla a PUBLICAS (y que alguien la revise en el PR).
 */

process.env.NODE_ENV = "test";
process.env.JWT_SECRET = process.env.JWT_SECRET ?? "test-secret-rutas-publicas";
process.env.DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://test:test@localhost:5432/test";

import assert from "node:assert/strict";
import { test } from "node:test";
import { app } from "../../src/app";
import { requireUser } from "../../src/lib/user-auth";
import { requireAdmin } from "../../src/lib/admin-auth";
import { assetsRouter } from "../../src/routes/assets";
import { mediaRouter } from "../../src/routes/media";
import { visualizadoresRouter } from "../../src/routes/visualizadores";
import { herramientasRouter } from "../../src/routes/herramientas";
import { mapsRouter } from "../../src/routes/maps";
import { provinciasRouter } from "../../src/maps/provincias";

/** Routers que `app.ts` monta con prefijo: sus rutas se declaran relativas a él. */
const PREFIJOS = new Map<unknown, string>([
  [assetsRouter, "/api/assets"],
  [mediaRouter, "/api/media"],
  [visualizadoresRouter, "/api/visualizadores"],
  [herramientasRouter, "/api/herramientas"],
  [mapsRouter, "/api/maps"],
  [provinciasRouter, "/api/maps/provincias"],
]);

const TEMAS = ["economia", "quimica", "matematicas", "fisica", "geografia", "historia", "lengua_espanola", "lengua_inglesa"];

/** Rutas que se sirven sin sesión, a propósito. */
const PUBLICAS = new Set<string>([
  // Estado del servicio (Nginx y el monitoreo lo consultan).
  "GET /health",
  // Catálogo de consignas educativas.
  ...TEMAS.flatMap((t) => [`GET /api/consignas/${t}`, `GET /api/consignas/${t}/:tema`, `GET /api/consignas/${t}/:tema/v2`]),
  // Catálogo de generadores de ejercicios.
  "GET /api/generators",
  "GET /api/generators/:category/:name/docs",
  "GET /api/generators/:category/:name",
  // Sesión y alta: por definición sin sesión previa.
  "POST /api/auth/bootstrap-admin",
  "POST /api/auth/register",
  "POST /api/auth/guest",
  "POST /api/auth/refresh",
  "POST /api/auth/forgot-password",
  "POST /api/auth/login",
  "GET /api/registro/opciones",
  // Mapas y geografía (catálogos).
  "GET /api/maps/geonames/buscar",
]);

/** Prefijos cuyas rutas son catálogos públicos de solo lectura (GET); cualquier otro método debe estar protegido. */
const PREFIJOS_PUBLICOS_SOLO_GET = ["/api/assets", "/api/media", "/api/visualizadores", "/api/herramientas", "/api/maps"];

type Ruta = { metodo: string; ruta: string; protegida: boolean };

function recorrer(): { rutas: Ruta[]; sinPrefijo: string[] } {
  const raiz = (app as unknown as { router: { stack: unknown[] } }).router.stack as Array<Record<string, any>>;
  const rutas: Ruta[] = [];
  const sinPrefijo: string[] = [];

  const visitar = (capas: Array<Record<string, any>>, prefijo: string, protegidaDesdeAfuera: boolean) => {
    for (const capa of capas) {
      if (capa.route) {
        const handlers = capa.route.stack.map((h: any) => h.handle);
        const propia = handlers.includes(requireUser) || handlers.includes(requireAdmin);
        const ruta = `${prefijo}${capa.route.path}`;
        if (prefijo === "" && !ruta.startsWith("/api/") && ruta !== "/health") sinPrefijo.push(ruta);
        for (const m of Object.keys(capa.route.methods)) {
          rutas.push({ metodo: m.toUpperCase(), ruta, protegida: protegidaDesdeAfuera || propia });
        }
      } else if (capa.handle?.stack) {
        visitar(capa.handle.stack, PREFIJOS.get(capa.handle) ?? prefijo, protegidaDesdeAfuera);
      }
    }
  };

  let protegida = false;
  for (const capa of raiz) {
    if (capa.handle === requireUser) { protegida = true; continue; }
    visitar([capa], "", protegida);
  }
  return { rutas, sinPrefijo };
}

test("C1: la aplicación real tiene rutas y se pudo recorrer (el test no es vacío)", () => {
  const { rutas } = recorrer();
  assert.ok(rutas.length > 300, `solo se encontraron ${rutas.length} rutas`);
  assert.ok(rutas.some((r) => r.protegida), "ninguna ruta figura como protegida");
});

test("C1: ninguna ruta sin prefijo conocido (un router nuevo con prefijo hay que registrarlo en PREFIJOS)", () => {
  const { sinPrefijo } = recorrer();
  assert.deepEqual(sinPrefijo, [], `rutas sin prefijo registrado:\n${sinPrefijo.join("\n")}`);
});

test("C1: solo son públicas las rutas de la lista (más los catálogos GET de los routers con prefijo)", () => {
  const { rutas } = recorrer();
  const inesperadas = rutas
    .filter((r) => !r.protegida)
    .filter((r) => {
      if (PUBLICAS.has(`${r.metodo} ${r.ruta}`)) return false;
      const esCatalogo = PREFIJOS_PUBLICOS_SOLO_GET.some((p) => r.ruta === p || r.ruta.startsWith(`${p}/`));
      return !(esCatalogo && r.metodo === "GET");
    })
    .map((r) => `${r.metodo} ${r.ruta}`);
  assert.deepEqual(
    inesperadas,
    [],
    `Rutas públicas que no están en la lista (¿se montaron antes de requireUser?):\n${inesperadas.join("\n")}`
  );
});

test("C1: las rutas de escritura de los routers con prefijo público están protegidas", () => {
  const { rutas } = recorrer();
  const abiertas = rutas
    .filter((r) => r.metodo !== "GET" && !r.protegida)
    .filter((r) => PREFIJOS_PUBLICOS_SOLO_GET.some((p) => r.ruta === p || r.ruta.startsWith(`${p}/`)))
    .map((r) => `${r.metodo} ${r.ruta}`);
  assert.deepEqual(abiertas, [], `escrituras sin sesión:\n${abiertas.join("\n")}`);
});

test("C1: lo que toca datos de personas y dinero siempre exige sesión", () => {
  const { rutas } = recorrer();
  const sensibles = /^\/api\/(usuarios|alumnos|aulas|escuelas|economia|instrumentos|tienda|cobros|cuotas|payments|suscripciones|mensajeria|moderacion|padres|hijos|quiz-attempts|progreso|sync|admin|pages|boletin|enterprise|invitaciones|membresias|push-tokens)(\/|$)/;
  const abiertas = rutas.filter((r) => !r.protegida && sensibles.test(r.ruta)).map((r) => `${r.metodo} ${r.ruta}`);
  assert.deepEqual(abiertas, [], `rutas sensibles sin sesión:\n${abiertas.join("\n")}`);
});
