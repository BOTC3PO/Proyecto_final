# Revisión visual por screenshots — 2026-07-04

**Método**: `npm run screenshots` (apps/web) corregido y ejecutado — 97
pantallas × 3 viewports (pc 1280/tablet 768/mobile 390), todos los roles
(sesión nueva por rol). Capturas en `apps/web/screenshots/`. Revisión
manual de ~20 capturas clave + triage por tamaño de archivo.

**Correcciones hechas al script** (`scripts/screenshot.mjs`): rutas
faltantes agregadas (materiales, plantillas, datasets, editores nuevos,
economía/pagos/tienda, comisiones/cobros/personalización, admin pages);
logout real entre roles (contexto nuevo — navegar a /login no borraba el
token y contaminaba las capturas del rol siguiente); calendario de
alumno apuntaba a la ruta del profesor; relanzamiento automático si el
navegador muere a mitad del run; fallback de captura cuando
`networkidle` no llega (mapas con tiles).

**Nota de entorno** (Ubuntu Server sin UI): Playwright no soporta
ubuntu26.04 — instalar con
`PLAYWRIGHT_HOST_PLATFORM_OVERRIDE=ubuntu24.04-x64 npx playwright install chromium`,
extraer las libs faltantes de .deb sin sudo (libatk, libgbm, etc. →
`LD_LIBRARY_PATH`) e instalar fuentes en `~/.local/share/fonts`
(fonts-dejavu + liberation). **Sin fuentes el sistema no renderiza
texto Y Chromium se crashea** — ese era el motivo de los runs fallidos.

## Hallazgos GRAVES (estructurales)

1. **El layout docente/directivo/admin no es responsive.** En mobile
   (390px) el sidebar queda fijo en ~223px y el contenido vive en una
   franja de ~167px: título partido por palabra, tabs cortadas
   ("Mis materia…"), botón "Descargar" superpuesto al texto de la
   tarjeta. Evidencia: `mobile/profesor-materiales.png` (y cualquier
   página con sidebar). Afecta a TODAS las vistas con ese shell.
2. **El navbar del alumno/padre en mobile no colapsa.** Los links se
   envuelven en 4 filas alrededor del logo, sin menú hamburguesa —
   mientras el navbar PÚBLICO sí tiene hamburguesa (register mobile se
   ve perfecto). Evidencia: `mobile/alumno-dashboard.png` vs
   `mobile/register.png`.
3. **El editor de mapas es accesible sin login, con "Guardar" visible.**
   `pc/herramientas-mapa-editor.png` se capturó en el grupo público
   (navbar de invitado) y el editor carga completo. La ruta
   `herramientas/mapa-editor` está en la zona pública del router.
   Decidir: ¿demo intencional? Si sí, ocultar "Guardar" para guests; si
   no, mover detrás de login.
4. **Editores inutilizables en mobile sin aviso.** El editor de libros
   en 390px muestra sólo los paneles laterales (el lienzo desaparece) y
   no hay mensaje "usá una pantalla más grande". Mismo patrón esperable
   en los otros editores de escritorio.
   **RESUELTO POR DECISIÓN (2026-07-04)**: los editores no están
   pensados para mobile — quedan desktop-only por diseño (PLAN-I §3).
   Sin trabajo responsive; a lo sumo un aviso liviano opcional.

## Hallazgos MEDIOS

5. **13 rutas públicas `herramientas/*` renderizan vacío absoluto**
   (navbar + footer, cero contenido): son stubs archivados que
   devuelven `null` (`src/stubs/herramientas.tsx`) pero siguen
   ruteadas. Cerrar: redirect a `/herramientas` real o 404. (El usuario
   ya avisó que no forman parte del flujo — el problema es que la URL
   siga viva y vacía.)
6. **`Landing.tsx` es un stub con mojibake hardcodeado** ("Landing
   pÃºblica" — doble encoding EN el fuente, 1 línea) ruteado en
   `/landing`. Durante el run llegó a verse en `/` (transitorio; hoy
   `/` renderiza Home bien). Arreglar el encoding o eliminar el stub.
7. **Badge "Sin cuestionarios" duplicado** (dos chips idénticos
   contiguos) en la sección Cuestionarios de crear módulo
   (`pc/profesor-modulos-crear.png`).
8. **Selector de temas indistinguible** — confirmación visual de
   PLAN-H §1: en admin (tema oscuro) 18 puntos casi todos el mismo
   celeste (`pc/admin-panel.png`); en claro, 5 de 8 son azules
   parecidos.
9. **Select de materia truncado** ("– Seleccionar mater…") en crear
   módulo — ancho insuficiente del control.
10. **Toolbar del editor de bloques con jerga y solapamiento**:
    "Guardar API" (jerga dev para docentes) + tres acciones de abrir
    ("Abrir local" / "Cargar" / "Importar") sin diferencia clara.
11. **Dashboard docente**: select vacío (sin opciones visibles) junto a
    "Activar modo aula"; módulo listado como "test · ? min" (duración
    desconocida mostrada como "?").

## Menores / copy

12. "No hay evaluaciones formales completadas en **este** aula" →
    "esta aula" (`pc/profesor-calificaciones.png`).
13. File input nativo sin estilizar: "Choose File / No file chosen" en
    inglés (crear módulo, Importar JSON).
14. Sidebar del editor de libros: título de página truncado en render
    torpe ("Págin… / 2 / bloques" en 3 líneas).
15. Register: copy en Title Case no natural ("El Nombre Completo Real
    Solo Será Visible Para…").
16. Demo Tiza: labels duplicados sección/campo ("Enunciado/Enunciado",
    "Variables/Variables") y 7 botones rojos "Eliminar" que dominan la
    jerarquía visual.
17. Datasets no tiene la barra superior de sección que tienen las demás
    páginas del shell docente (inconsistencia de chrome).

## Cruce con planes existentes

- #1/#2/#4 son nuevos → candidatos a PLAN-H (UX transversal) o plan
  responsive propio; #4 se cruza con PLAN-G3 fase 5.
- #3 es decisión de producto (¿demo pública?).
- #8 ya está en PLAN-H §1 (ahora con evidencia).
- #10/#14 se suman a PLAN-G3 fase 3 (editor de libros/bloques).
- #7/#9/#11/#12/#13 son quick-wins sueltos.
- Legacy fuera de flujo (editor-cuestionarios v1/v2, stubs
  herramientas): no se auditó su diseño a fondo, sólo se verificó que
  rendericen.
