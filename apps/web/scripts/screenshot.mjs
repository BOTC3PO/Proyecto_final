import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

// ── Configuración ───────────────────────────────────────────

const BASE_URL = "http://localhost:5173";

const VIEWPORTS = [
  { name: "pc",     width: 1280, height: 800  },
  { name: "tablet", width: 768,  height: 1024 },
  { name: "mobile", width: 390,  height: 844  },
];

// Credenciales de usuarios de prueba por rol
const USUARIOS = {
  alumno:    { email: "perez.alumno@epnorte.edu.ar", password: "Password123!" },
  profesor:  { email: "garcia@epnorte.edu.ar",       password: "Password123!" },
  directivo: { email: "directivo@epnorte.edu.ar",    password: "Password123!" },
  admin:     { email: "admin@plataforma.com",        password: "Password123!" },
  padre:     { email: "perez.padre@gmail.com",       password: "Password123!" },
};

// Rutas agrupadas por rol que puede accederlas
const RUTAS = [
  // ── Públicas (sin login) ──────────────────────────────────
  { path: "/",               rol: null, nombre: "landing"           },
  { path: "/explorar",       rol: null, nombre: "explorar"          },
  { path: "/precios",        rol: null, nombre: "precios"           },
  { path: "/login",          rol: null, nombre: "login"             },
  { path: "/register",       rol: null, nombre: "register"          },
  { path: "/contact",        rol: null, nombre: "contact"           },
  { path: "/metodologia",    rol: null, nombre: "metodologia"       },
  { path: "/terminos",       rol: null, nombre: "terminos"          },
  { path: "/privacidad",     rol: null, nombre: "privacidad"        },
  { path: "/recuperar",      rol: null, nombre: "recuperar"         },
  { path: "/herramientas",   rol: null, nombre: "herramientas-hub"  },
  { path: "/herramientas/estadistica", rol: null, nombre: "herramientas-estadistica" },
  { path: "/herramientas/naturales",   rol: null, nombre: "herramientas-naturales"   },
  { path: "/herramientas/cocina",      rol: null, nombre: "herramientas-cocina"      },
  { path: "/demo/tiza",      rol: null, nombre: "demo-tiza"         },

  // ── Alumno ────────────────────────────────────────────────
  { path: "/alumno",         rol: "alumno",   nombre: "alumno-dashboard"  },
  { path: "/clases",         rol: "alumno",   nombre: "alumno-clases"     },
  { path: "/tareas",         rol: "alumno",   nombre: "alumno-tareas"     },
  { path: "/encuestas",      rol: "alumno",   nombre: "alumno-encuestas"  },
  { path: "/progreso",       rol: "alumno",   nombre: "alumno-progreso"   },
  { path: "/modulos",        rol: "alumno",   nombre: "modulos-lista"     },
  { path: "/perfil",         rol: "alumno",   nombre: "alumno-perfil"     },
  { path: "/mensajes",       rol: "alumno",   nombre: "alumno-mensajes"   },
  { path: "/laboratorio-web3", rol: "alumno", nombre: "laboratorio-web3"  },
  { path: "/calendario",     rol: "alumno",   nombre: "alumno-calendario" },
  { path: "/economia",       rol: "alumno",   nombre: "alumno-economia"   },
  { path: "/pagos",          rol: "alumno",   nombre: "alumno-pagos"      },
  { path: "/tienda-temas",   rol: "alumno",   nombre: "alumno-tienda-temas" },

  // ── Padre ─────────────────────────────────────────────────
  { path: "/hijos",          rol: "padre",    nombre: "padre-hijos"       },
  { path: "/hijos/agregar",  rol: "padre",    nombre: "padre-agregar-hijo"},

  // ── Profesor ──────────────────────────────────────────────
  { path: "/profesor",                rol: "profesor", nombre: "profesor-dashboard"     },
  { path: "/profesor/cursos",         rol: "profesor", nombre: "profesor-cursos"        },
  { path: "/profesor/aulas",          rol: "profesor", nombre: "profesor-aulas"         },
  { path: "/profesor/calificaciones", rol: "profesor", nombre: "profesor-calificaciones"},
  { path: "/profesor/asistencia",     rol: "profesor", nombre: "profesor-asistencia"    },
  { path: "/profesor/evaluaciones",   rol: "profesor", nombre: "profesor-evaluaciones"  },
  { path: "/profesor/estadisticas",   rol: "profesor", nombre: "profesor-estadisticas"  },
  { path: "/profesor/reportes",       rol: "profesor", nombre: "profesor-reportes"      },
  { path: "/profesor/encuestas",      rol: "profesor", nombre: "profesor-encuestas"     },
  { path: "/profesor/calendario",     rol: "profesor", nombre: "profesor-calendario"    },
  { path: "/profesor/aulas/cls-demo-mat-3a/configuracion", rol: "profesor", nombre: "profesor-aula-config" },
  { path: "/modulos",                 rol: "profesor", nombre: "profesor-modulos"       },
  { path: "/gobernanza",              rol: "profesor", nombre: "profesor-gobernanza"    },
  { path: "/mensajes",                rol: "profesor", nombre: "profesor-mensajes"      },
  { path: "/profesor/materiales",     rol: "profesor", nombre: "profesor-materiales"    },
  { path: "/profesor/configuracion",  rol: "profesor", nombre: "profesor-configuracion" },
  { path: "/profesor/cursos/nuevo",   rol: "profesor", nombre: "profesor-curso-nuevo"   },
  { path: "/modulos/crear",           rol: "profesor", nombre: "modulo-crear"           },
  { path: "/plantillas",              rol: "profesor", nombre: "plantillas-lista"       },
  { path: "/plantillas/biblioteca",   rol: "profesor", nombre: "plantillas-biblioteca"  },
  { path: "/plantillas/nueva",        rol: "profesor", nombre: "plantillas-nueva"       },
  { path: "/datasets",                rol: "profesor", nombre: "datasets-lista"         },
  { path: "/datasets/biblioteca",     rol: "profesor", nombre: "datasets-biblioteca"    },
  { path: "/datasets/nuevo",          rol: "profesor", nombre: "datasets-nuevo"         },
  { path: "/editor",                  rol: "profesor", nombre: "editor-libros"          },
  { path: "/bloques/editor",          rol: "profesor", nombre: "editor-bloques"         },
  { path: "/herramientas/mapa-editor",           rol: "profesor", nombre: "editor-mapas"        },
  { path: "/herramientas/presentacion-editor",   rol: "profesor", nombre: "editor-presentacion" },
  { path: "/herramientas/linea-tiempo-editor",   rol: "profesor", nombre: "editor-linea-tiempo" },
  { path: "/profesor/editor-cuestionarios", rol: "profesor", nombre: "editor-cuestionarios" },
  { path: "/profesor/editor-cuestionarios-v2", rol: "profesor", nombre: "editor-cuestionarios-v2" },

  // ── Directivo ─────────────────────────────────────────────
  { path: "/enterprise",          rol: "directivo", nombre: "directivo-dashboard"  },
  { path: "/enterprise/aulas",    rol: "directivo", nombre: "directivo-aulas"      },
  { path: "/enterprise/miembros", rol: "directivo", nombre: "directivo-miembros"   },
  { path: "/enterprise/modulos",  rol: "directivo", nombre: "directivo-modulos"    },
  { path: "/enterprise/reportes",    rol: "directivo", nombre: "directivo-reportes"   },
  { path: "/enterprise/calendario", rol: "directivo", nombre: "directivo-calendario" },
  { path: "/enterprise/comisiones", rol: "directivo", nombre: "directivo-comisiones" },
  { path: "/enterprise/cobros",     rol: "directivo", nombre: "directivo-cobros"     },
  { path: "/enterprise/personalizacion", rol: "directivo", nombre: "directivo-personalizacion" },
  { path: "/gobernanza",            rol: "directivo", nombre: "directivo-gobernanza" },
  { path: "/mensajes",            rol: "directivo", nombre: "directivo-mensajes"   },
  { path: "/perfil",              rol: "directivo", nombre: "directivo-perfil"     },

  // ── Admin ─────────────────────────────────────────────────
  { path: "/admin",              rol: "admin", nombre: "admin-panel"        },
  { path: "/admin/usuarios",     rol: "admin", nombre: "admin-usuarios"     },
  { path: "/admin/cursos",       rol: "admin", nombre: "admin-cursos"       },
  { path: "/admin/materias",     rol: "admin", nombre: "admin-materias"     },
  { path: "/admin/reportes",     rol: "admin", nombre: "admin-reportes"     },
  { path: "/admin/moderacion",   rol: "admin", nombre: "admin-moderacion"   },
  { path: "/admin/plantillas-moderacion", rol: "admin", nombre: "admin-plantillas-moderacion" },
  { path: "/admin/pages",        rol: "admin", nombre: "admin-pages"        },
  { path: "/admin/comisiones",   rol: "admin", nombre: "admin-comisiones"   },
  { path: "/admin/generadores",  rol: "admin", nombre: "admin-generadores"  },
];

// ── Helpers ─────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function login(page, rol) {
  if (!rol || !USUARIOS[rol]) return;
  const { email, password } = USUARIOS[rol];

  await page.goto(`${BASE_URL}/login`);
  await page.waitForLoadState("networkidle");

  await page.fill('input[name="user"]', email);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');

  await page.waitForLoadState("networkidle");
  await sleep(1000);
}

async function capturar(page, ruta, viewport, outDir) {
  try {
    // networkidle puede no llegar nunca (mapas con tiles, polling):
    // si expira, capturamos igual con lo que haya renderizado.
    await page
      .goto(`${BASE_URL}${ruta.path}`, { waitUntil: "networkidle", timeout: 15000 })
      .catch(() => {});
    await sleep(800);

    const dir = path.join(outDir, viewport.name);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });

    const archivo = path.join(dir, `${ruta.nombre}.png`);
    await page.screenshot({
      path: archivo,
      fullPage: true,
    });

    console.log(`  ✓ ${viewport.name}/${ruta.nombre}.png`);
    return true;
  } catch (err) {
    console.log(`  ✗ ${viewport.name}/${ruta.nombre} — ${err.message.split("\n")[0]}`);
    return false;
  }
}

// ── Main ─────────────────────────────────────────────────────

const OUT_DIR = path.resolve("screenshots");
await mkdir(OUT_DIR, { recursive: true });

// El navegador puede morir a mitad del run (poca RAM, sin swap):
// se relanza on-demand en vez de abortar todo.
let browser = null;
async function getBrowser() {
  if (browser && browser.isConnected()) return browser;
  if (browser) await browser.close().catch(() => {});
  browser = await chromium.launch({ headless: true });
  return browser;
}

// Agrupar rutas por rol para minimizar logins
const porRol = {};
for (const ruta of RUTAS) {
  const key = ruta.rol ?? "__public__";
  if (!porRol[key]) porRol[key] = [];
  porRol[key].push(ruta);
}

for (const viewport of VIEWPORTS) {
  console.log(`\n── ${viewport.name} (${viewport.width}x${viewport.height}) ──`);

  // Un contexto NUEVO por rol: navegar a /login no borra el token de
  // localStorage, así que reutilizar el contexto contaminaba las
  // capturas del rol siguiente con la sesión del anterior.
  for (const [rol, rutas] of Object.entries(porRol)) {
    // Pendientes de este rol; si el navegador muere a mitad, se
    // relanza y se retoma desde la ruta que falló (1 reintento).
    let pendientes = [...rutas];
    let intentos = 0;

    while (pendientes.length > 0 && intentos < 3) {
      intentos++;
      let context;
      try {
        const b = await getBrowser();
        context = await b.newContext({
          viewport: { width: viewport.width, height: viewport.height },
        });
        const page = await context.newPage();

        if (rol === "__public__") {
          console.log("\n  Públicas:");
        } else {
          console.log(`\n  ${rol}${intentos > 1 ? ` (reintento ${intentos})` : ""}:`);
          await login(page, rol);
        }

        while (pendientes.length > 0) {
          const ruta = pendientes[0];
          const ok = await capturar(page, ruta, viewport, OUT_DIR);
          if (!ok && !browser.isConnected()) break; // navegador muerto → relanzar
          pendientes.shift();
        }
      } catch (err) {
        console.log(`  ⚠ ${rol}: ${err.message.split("\n")[0]}`);
      } finally {
        await context?.close().catch(() => {});
      }
    }

    for (const ruta of pendientes) {
      console.log(`  ✗ ${viewport.name}/${ruta.nombre} — abandonada tras ${intentos} intentos`);
    }
  }
}

await browser.close();

console.log(`\n✓ Screenshots guardados en: ${OUT_DIR}`);
console.log(`  ${RUTAS.length} rutas × ${VIEWPORTS.length} viewports`);
