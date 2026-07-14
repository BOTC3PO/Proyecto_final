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
// Generado a partir de router.tsx — mantener sincronizado cuando se agreguen rutas.
const RUTAS = [
  // ── Públicas (sin login) ──────────────────────────────────
  { path: "/",                              rol: null, nombre: "home"                          },
  { path: "/landing",                       rol: null, nombre: "landing"                        },
  { path: "/explorar",                      rol: null, nombre: "explorar"                       },
  { path: "/login",                         rol: null, nombre: "login"                          },
  { path: "/register",                      rol: null, nombre: "register"                       },
  { path: "/recuperar",                     rol: null, nombre: "recuperar-contrasena"            },
  { path: "/contact",                       rol: null, nombre: "contact"                        },
  { path: "/metodologia",                   rol: null, nombre: "metodologia"                    },
  { path: "/terminos",                      rol: null, nombre: "terminos"                       },
  { path: "/privacidad",                    rol: null, nombre: "privacidad"                     },
  { path: "/laboratorio-web3",              rol: null, nombre: "laboratorio-web3"                },
  { path: "/onboarding-guest",              rol: null, nombre: "onboarding-guest"                },
  { path: "/onboarding/tema",               rol: null, nombre: "onboarding-tema"                 },
  { path: "/demo/tiza",                     rol: null, nombre: "demo-tiza"                       },
  { path: "/herramientas",                  rol: null, nombre: "herramientas-index"              },
  { path: "/herramientas/estadistica",       rol: null, nombre: "herramientas-estadistica"        },
  { path: "/herramientas/ciencias-sociales", rol: null, nombre: "herramientas-ciencias-sociales"  },
  { path: "/herramientas/mapa-editor",       rol: null, nombre: "herramientas-mapa-editor"        },
  { path: "/herramientas/filosofia",         rol: null, nombre: "herramientas-filosofia"          },
  { path: "/herramientas/arte",              rol: null, nombre: "herramientas-arte"               },
  { path: "/herramientas/biologia",          rol: null, nombre: "herramientas-biologia"           },
  { path: "/herramientas/musica",            rol: null, nombre: "herramientas-musica"             },
  { path: "/herramientas/politica",          rol: null, nombre: "herramientas-politica"           },
  { path: "/herramientas/civica",            rol: null, nombre: "herramientas-civica"             },
  { path: "/herramientas/ambiental",         rol: null, nombre: "herramientas-ambiental"          },
  { path: "/herramientas/informatica",       rol: null, nombre: "herramientas-informatica"        },
  { path: "/herramientas/naturales",         rol: null, nombre: "herramientas-naturales"          },
  { path: "/herramientas/cocina",            rol: null, nombre: "herramientas-cocina"             },
  { path: "/herramientas/vida-practica",     rol: null, nombre: "herramientas-vida-practica"      },

  // ── Alumno ────────────────────────────────────────────────
  { path: "/alumno",         rol: "alumno",   nombre: "alumno-dashboard"  },
  { path: "/clases",         rol: "alumno",   nombre: "alumno-clases"     },
  { path: "/tareas",         rol: "alumno",   nombre: "alumno-tareas"     },
  { path: "/encuestas",      rol: "alumno",   nombre: "alumno-encuestas"  },
  { path: "/progreso",       rol: "alumno",   nombre: "alumno-progreso"   },
  { path: "/economia",       rol: "alumno",   nombre: "alumno-economia"   },
  { path: "/pagos",          rol: "alumno",   nombre: "alumno-pagos"      },
  { path: "/tienda-temas",   rol: "alumno",   nombre: "alumno-tienda-temas" },
  { path: "/calendario",     rol: "alumno",   nombre: "alumno-calendario" },
  { path: "/modulos",        rol: "alumno",   nombre: "modulos-lista"     },
  { path: "/reproductor",    rol: "alumno",   nombre: "alumno-reproductor" },
  { path: "/perfil",         rol: "alumno",   nombre: "alumno-perfil"     },
  { path: "/mensajes",       rol: "alumno",   nombre: "alumno-mensajes"   },

  // ── Padre ─────────────────────────────────────────────────
  { path: "/hijos",          rol: "padre",    nombre: "padre-hijos"       },
  { path: "/hijos/agregar",  rol: "padre",    nombre: "padre-agregar-hijo"},
  { path: "/menualumno",     rol: "padre",    nombre: "padre-menualumno"  },
  { path: "/mensajes",       rol: "padre",    nombre: "padre-mensajes"    },
  { path: "/perfil",         rol: "padre",    nombre: "padre-perfil"      },

  // ── Profesor ──────────────────────────────────────────────
  { path: "/profesor",                       rol: "profesor", nombre: "profesor-dashboard"        },
  { path: "/profesor/aulas",                 rol: "profesor", nombre: "profesor-aulas"             },
  { path: "/profesor/aulas/cls-demo-mat-3a", rol: "profesor", nombre: "profesor-aula-config"       },
  { path: "/profesor/calificaciones",        rol: "profesor", nombre: "profesor-calificaciones"    },
  { path: "/profesor/asistencia",            rol: "profesor", nombre: "profesor-asistencia"        },
  { path: "/profesor/evaluaciones",          rol: "profesor", nombre: "profesor-evaluaciones"      },
  { path: "/profesor/estadisticas",          rol: "profesor", nombre: "profesor-estadisticas"      },
  { path: "/profesor/reportes",              rol: "profesor", nombre: "profesor-reportes"          },
  { path: "/profesor/encuestas",             rol: "profesor", nombre: "profesor-encuestas"         },
  { path: "/profesor/materiales",            rol: "profesor", nombre: "profesor-materiales"        },
  { path: "/profesor/configuracion",         rol: "profesor", nombre: "profesor-configuracion"     },
  { path: "/profesor/calendario",            rol: "profesor", nombre: "profesor-calendario"        },
  { path: "/modulos",                        rol: "profesor", nombre: "profesor-modulos"           },
  { path: "/modulos/crear",                  rol: "profesor", nombre: "profesor-modulos-crear"     },
  { path: "/gobernanza",                     rol: "profesor", nombre: "profesor-gobernanza"        },
  { path: "/gobernanza/propuestas/nueva",    rol: "profesor", nombre: "profesor-gobernanza-nueva-propuesta" },
  { path: "/mensajes",                       rol: "profesor", nombre: "profesor-mensajes"          },
  { path: "/perfil",                         rol: "profesor", nombre: "profesor-perfil"            },
  { path: "/editor",                         rol: "profesor", nombre: "editor-libros"              },
  { path: "/bloques/editor",                 rol: "profesor", nombre: "editor-bloques"             },
  { path: "/profesor/editor-cuestionarios",    rol: "profesor", nombre: "editor-cuestionarios"     },
  { path: "/profesor/editor-cuestionarios-v2", rol: "profesor", nombre: "editor-cuestionarios-v2"  },
  { path: "/plantillas",                     rol: "profesor", nombre: "plantillas-index"           },
  { path: "/plantillas/biblioteca",          rol: "profesor", nombre: "plantillas-biblioteca"      },
  { path: "/plantillas/nueva",               rol: "profesor", nombre: "plantillas-nueva"           },
  { path: "/datasets",                       rol: "profesor", nombre: "datasets-index"             },
  { path: "/datasets/biblioteca",            rol: "profesor", nombre: "datasets-biblioteca"        },
  { path: "/datasets/nuevo",                 rol: "profesor", nombre: "datasets-nuevo"             },

  // ── Directivo ─────────────────────────────────────────────
  { path: "/enterprise",                rol: "directivo", nombre: "directivo-dashboard"       },
  { path: "/enterprise/aulas",          rol: "directivo", nombre: "directivo-aulas"           },
  { path: "/enterprise/miembros",       rol: "directivo", nombre: "directivo-miembros"        },
  { path: "/enterprise/modulos",        rol: "directivo", nombre: "directivo-modulos"         },
  { path: "/enterprise/reportes",       rol: "directivo", nombre: "directivo-reportes"        },
  { path: "/enterprise/comisiones",     rol: "directivo", nombre: "directivo-comisiones"      },
  { path: "/enterprise/cobros",         rol: "directivo", nombre: "directivo-cobros"          },
  { path: "/enterprise/personalizacion", rol: "directivo", nombre: "directivo-personalizacion" },
  { path: "/enterprise/calendario",     rol: "directivo", nombre: "directivo-calendario"      },
  { path: "/gobernanza",                rol: "directivo", nombre: "directivo-gobernanza"      },
  { path: "/mensajes",                  rol: "directivo", nombre: "directivo-mensajes"        },
  { path: "/perfil",                    rol: "directivo", nombre: "directivo-perfil"          },

  // ── Admin ─────────────────────────────────────────────────
  { path: "/admin",                       rol: "admin", nombre: "admin-panel"               },
  { path: "/admin/usuarios",              rol: "admin", nombre: "admin-usuarios"            },
  { path: "/admin/cursos",                rol: "admin", nombre: "admin-cursos"              },
  { path: "/admin/materias",              rol: "admin", nombre: "admin-materias"            },
  { path: "/admin/moderacion",            rol: "admin", nombre: "admin-moderacion"          },
  { path: "/admin/plantillas-moderacion", rol: "admin", nombre: "admin-plantillas-moderacion" },
  { path: "/admin/reportes",              rol: "admin", nombre: "admin-reportes"            },
  { path: "/admin/pages",                 rol: "admin", nombre: "admin-pages"               },
  { path: "/admin/generadores",           rol: "admin", nombre: "admin-generadores"         },
  { path: "/admin/comisiones",            rol: "admin", nombre: "admin-comisiones"          },
];

// ── Helpers ─────────────────────────────────────────────────

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function login(page, rol) {
  if (!rol || !USUARIOS[rol]) return true;
  const { email, password } = USUARIOS[rol];

  await page.goto(`${BASE_URL}/login`);
  await page.waitForLoadState("networkidle");

  await page.fill('input[name="user"]', email);
  await page.fill('input[name="password"]', password);

  const respPromise = page
    .waitForResponse((r) => r.url().includes("/api/auth/login"), { timeout: 10000 })
    .catch(() => null);
  await page.click('button[type="submit"]');
  const resp = await respPromise;

  if (!resp || !resp.ok()) {
    const status = resp ? resp.status() : "sin respuesta";
    console.log(`  ✗ login "${rol}" falló (status ${status})${status === 429 ? " — rate limit de /api/auth/login agotado" : ""}`);
    return false;
  }

  await page.waitForLoadState("networkidle");
  await sleep(1000);
  return true;
}

async function capturar(page, ruta, viewportName, outDir) {
  try {
    // networkidle puede no llegar nunca (mapas con tiles, polling):
    // si expira, capturamos igual con lo que haya renderizado.
    await page
      .goto(`${BASE_URL}${ruta.path}`, { waitUntil: "networkidle", timeout: 15000 })
      .catch(() => {});
    await sleep(800);

    const dir = path.join(outDir, viewportName);
    if (!existsSync(dir)) await mkdir(dir, { recursive: true });

    const archivo = path.join(dir, `${ruta.nombre}.png`);
    await page.screenshot({
      path: archivo,
      fullPage: true,
    });

    console.log(`  ✓ ${viewportName}/${ruta.nombre}.png`);
  } catch (err) {
    console.log(`  ✗ ${viewportName}/${ruta.nombre} — ${err.message}`);
  }
}

// ── Main ─────────────────────────────────────────────────────
//
// El login vive detrás de un rate limiter estricto en la API
// (10 req / 15 min sobre /api/auth/login). Antes este script
// iteraba viewport-por-fuera y rol-por-dentro, lo que forzaba un
// re-login por cada combinación (5 roles × 3 viewports = 15
// intentos), agotando el límite a mitad de corrida — el resto de
// las capturas terminaban mostrando el formulario de login en vez
// del contenido real. Ahora se itera rol-por-fuera: se hace login
// UNA vez por rol y se reutiliza la misma sesión/página para los 3
// viewports (solo se redimensiona la ventana), bajando a 5 logins
// por corrida completa.

const OUT_DIR = path.resolve("screenshots");
await mkdir(OUT_DIR, { recursive: true });

const browser = await chromium.launch({ headless: true });

const porRol = {};
for (const ruta of RUTAS) {
  const key = ruta.rol ?? "__public__";
  if (!porRol[key]) porRol[key] = [];
  porRol[key].push(ruta);
}

for (const [rol, rutas] of Object.entries(porRol)) {
  console.log(`\n== ${rol === "__public__" ? "Públicas" : rol} ==`);

  const context = await browser.newContext({ viewport: VIEWPORTS[0] });
  const page = await context.newPage();
  page.on("response", (r) => {
    if (r.status() === 429) console.log(`  ⚠ 429 (rate limit) — ${r.url()}`);
  });

  const loginOk = await login(page, rol);
  if (!loginOk) {
    console.log(`  ⚠ se omite el rol "${rol}" por fallo de login`);
    await context.close();
    continue;
  }

  for (const viewport of VIEWPORTS) {
    console.log(`\n  ${viewport.name} (${viewport.width}x${viewport.height}):`);
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const ruta of rutas) {
      await capturar(page, ruta, viewport.name, OUT_DIR);
    }
  }

  await context.close();
}

await browser.close();

console.log(`\n✓ Screenshots guardados en: ${OUT_DIR}`);
console.log(`  ${RUTAS.length} rutas × ${VIEWPORTS.length} viewports`);
