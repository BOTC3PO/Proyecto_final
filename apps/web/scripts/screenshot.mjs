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
  alumno:    { email: "alumno@test.com",    password: "test1234" },
  profesor:  { email: "profesor@test.com",  password: "test1234" },
  directivo: { email: "directivo@test.com", password: "test1234" },
  admin:     { email: "admin@test.com",     password: "test1234" },
  padre:     { email: "padre@test.com",     password: "test1234" },
};

// Rutas agrupadas por rol que puede accederlas
const RUTAS = [
  // ── Públicas (sin login) ──────────────────────────────────
  { path: "/",               rol: null, nombre: "landing"           },
  { path: "/explorar",       rol: null, nombre: "explorar"          },
  { path: "/precios",        rol: null, nombre: "precios"           },
  { path: "/login",          rol: null, nombre: "login"             },
  { path: "/register",       rol: null, nombre: "register"          },
  { path: "/about",          rol: null, nombre: "about"             },
  { path: "/contact",        rol: null, nombre: "contact"           },
  { path: "/metodologia",    rol: null, nombre: "metodologia"       },
  { path: "/terminos",       rol: null, nombre: "terminos"          },
  { path: "/privacidad",     rol: null, nombre: "privacidad"        },

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
  { path: "/profesor/mensajes",       rol: "profesor", nombre: "profesor-mensajes"      },
  { path: "/profesor/encuestas",      rol: "profesor", nombre: "profesor-encuestas"     },
  { path: "/profesor/calendario",     rol: "profesor", nombre: "profesor-calendario"    },
  { path: "/profesor/materiales",     rol: "profesor", nombre: "profesor-materiales"    },
  { path: "/profesor/configuracion",  rol: "profesor", nombre: "profesor-configuracion" },
  { path: "/modulos",                 rol: "profesor", nombre: "profesor-modulos"       },
  { path: "/gobernanza",              rol: "profesor", nombre: "profesor-gobernanza"    },
  { path: "/mensajes",                rol: "profesor", nombre: "profesor-mensajes-new"  },
  { path: "/editor",                  rol: "profesor", nombre: "editor-libros"          },
  { path: "/bloques/editor",          rol: "profesor", nombre: "editor-bloques"         },
  { path: "/profesor/editor-cuestionarios", rol: "profesor", nombre: "editor-cuestionarios" },

  // ── Directivo ─────────────────────────────────────────────
  { path: "/enterprise",          rol: "directivo", nombre: "directivo-dashboard"  },
  { path: "/enterprise/aulas",    rol: "directivo", nombre: "directivo-aulas"      },
  { path: "/enterprise/miembros", rol: "directivo", nombre: "directivo-miembros"   },
  { path: "/enterprise/modulos",  rol: "directivo", nombre: "directivo-modulos"    },
  { path: "/enterprise/reportes", rol: "directivo", nombre: "directivo-reportes"   },
  { path: "/gobernanza",          rol: "directivo", nombre: "directivo-gobernanza" },
  { path: "/mensajes",            rol: "directivo", nombre: "directivo-mensajes"   },
  { path: "/perfil",              rol: "directivo", nombre: "directivo-perfil"     },

  // ── Admin ─────────────────────────────────────────────────
  { path: "/admin",              rol: "admin", nombre: "admin-panel"        },
  { path: "/admin/usuarios",     rol: "admin", nombre: "admin-usuarios"     },
  { path: "/admin/materias",     rol: "admin", nombre: "admin-materias"     },
  { path: "/admin/reportes",     rol: "admin", nombre: "admin-reportes"     },
  { path: "/admin/moderacion",   rol: "admin", nombre: "admin-moderacion"   },
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
  await page.click('input[type="submit"]');

  await page.waitForLoadState("networkidle");
  await sleep(1000);
}

async function capturar(page, ruta, viewport, outDir) {
  try {
    await page.goto(`${BASE_URL}${ruta.path}`, {
      waitUntil: "networkidle",
      timeout: 15000,
    });
    await sleep(800);

    const dir = path.join(outDir, viewport.name);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });

    const archivo = path.join(dir, `${ruta.nombre}.png`);
    await page.screenshot({
      path: archivo,
      fullPage: true,
    });

    console.log(`  ✓ ${viewport.name}/${ruta.nombre}.png`);
  } catch (err) {
    console.log(`  ✗ ${viewport.name}/${ruta.nombre} — ${err.message}`);
  }
}

// ── Main ─────────────────────────────────────────────────────

const OUT_DIR = path.resolve("screenshots");
await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });

// Agrupar rutas por rol para minimizar logins
const porRol = {};
for (const ruta of RUTAS) {
  const key = ruta.rol ?? "__public__";
  if (!porRol[key]) porRol[key] = [];
  porRol[key].push(ruta);
}

for (const viewport of VIEWPORTS) {
  console.log(`\n── ${viewport.name} (${viewport.width}x${viewport.height}) ──`);

  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
  });
  const page = await context.newPage();

  // Rutas públicas
  if (porRol["__public__"]) {
    console.log("\n  Públicas:");
    for (const ruta of porRol["__public__"]) {
      await capturar(page, ruta, viewport, OUT_DIR);
    }
  }

  // Rutas por rol
  for (const [rol, rutas] of Object.entries(porRol)) {
    if (rol === "__public__") continue;
    console.log(`\n  ${rol}:`);
    await login(page, rol);
    for (const ruta of rutas) {
      await capturar(page, ruta, viewport, OUT_DIR);
    }
    // Logout para el siguiente rol
    await page.goto(`${BASE_URL}/login`);
    await sleep(500);
  }

  await context.close();
}

await browser.close();

console.log(`\n✓ Screenshots guardados en: ${OUT_DIR}`);
console.log(`  ${RUTAS.length} rutas × ${VIEWPORTS.length} viewports`);
