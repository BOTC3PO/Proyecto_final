# Virtual Book — plataforma educativa

Plataforma que organiza el aprendizaje **por temas y no por grados**: cada tema es un módulo con teoría y evaluación,
y un módulo se habilita cuando el alumno domina los temas que necesita. Incluye un temario propio de más de 2.300
módulos, aulas para las escuelas, una app de Android y una app para estudiar sin internet.

- **Estado:** en producción en un servidor propio; salida pública con el dominio `virtualbook.com.ar` en preparación.
- **Última actualización:** 2026-11-25.

## Qué incluye

- **Temario oficial:** 2.133 temas de 36 materias (con oficios e idiomas), 225 exámenes jefe y 24 libros de teoría
  extendida, unidos por prerrequisitos. Se recorre por caminos en el **mapa del temario** (`/mapa-temario`).
- **Módulos y editor:** teoría con texto, mapas, líneas de tiempo, diagramas, gráficos, fórmulas y presentaciones;
  cuestionarios con corrección automática; prerrequisitos y visibilidad. Páginas de apoyo: plantillas y su
  biblioteca, datasets, libros, editor de bloques, de mapas, de líneas de tiempo y de presentaciones.
- **VBLang:** formato propio para escribir preguntas con datos al azar, respuesta calculada, resolución paso a paso y
  explicación. Diez tipos de pregunta (opción múltiple, verdadero o falso, completar, numérica, ordenar, marcar en un
  mapa, análisis sintáctico, entre otros). Editor visual **Tiza**.
- **Escuelas y aulas:** roles (alumno, profesor, padre o tutor, directivo, administrador), publicaciones, tareas y
  entregas, asistencia, calificaciones, encuestas, calendario, mensajería con reporte, reportes y boletines.
- **Economía virtual** con tienda de temas visuales, **cobro de cuotas** con Mercado Pago (comisión escalonada,
  interés por mora, cooperadora), diccionario en 14 idiomas y lectura en voz alta.
- **App de Android** (Expo) y **app sin conexión** (Tauri 2) para Windows, Linux y Android, pensada para las
  netbooks Juana Manso y Conectar Igualdad: trae todo el temario y el diccionario de español, y sincroniza al volver
  la red. Página pública de descargas en `/descargas`.

## Estructura del repositorio

```text
.
├─ api/                  # API REST: Express 5 + TypeScript, Prisma + PostgreSQL
├─ apps/
│  ├─ web/               # Web: React 19 + Vite
│  ├─ mobile/            # App de Android: Expo / React Native
│  └─ offline/           # App sin conexión: Tauri 2 (API local en TypeScript, núcleo en Rust, «modo navegador»)
├─ packages/
│  └─ vblang/            # @vb/vblang: parser, validador y generador de preguntas (lo usan la API y la web)
├─ content/
│  ├─ material/          # El temario: <materia>/<tema>/{teoria.md, cuestionario.md, herramientas/}
│  │  └─ _qa_tools/      # Exportar el temario, validar cuestionarios y exámenes, generar el mapa
│  └─ troncos.md         # Mapa de temas y prerrequisitos (los caminos)
├─ docs/                 # Documentación técnica, legal, de pagos y planes (índice en docs/README.md)
├─ tools/                # Compuertas de CI (auditoría de dependencias, lint), pruebas de carga, generador
└─ .github/workflows/    # CI y compilación de la app sin conexión
```

## Stack

| Parte | Tecnología |
|---|---|
| Monorepo | pnpm workspaces (`apps/*`, `api`, `packages/*`) |
| API | Node.js 22, Express 5.2, TypeScript 5.9, Prisma 7.10 con `@prisma/adapter-pg` |
| Base de datos | PostgreSQL 16; SQLite de solo lectura para el diccionario y los mapas; Redis opcional (límites compartidos entre instancias) |
| Web | React 19, Vite 7, Tailwind, Vitest |
| Móvil | Expo 54, React Native 0.83 |
| Sin conexión | Tauri 2, Rust 1.99 (SQLite), Vite |

## Requisitos

- **Node.js 22** (fijado en `.nvmrc` y en `engines`) y **pnpm 12.3.4**.
- **PostgreSQL 16** para la API.
- **Redis**, solo si se corre más de una instancia de la API.
- **Rust 1.99.1**, solo para compilar la app sin conexión (ver `apps/offline/LEEME.md`).

## Puesta en marcha (desarrollo)

```bash
pnpm install                              # una vez, desde la raíz
cp api/.env.example api/.env              # completar DATABASE_URL y JWT_SECRET como mínimo
cp apps/web/.env.example apps/web/.env    # opcional: VITE_API_BASE_URL (por defecto http://localhost:5050)

pnpm --filter api db:generate             # cliente de Prisma
pnpm --filter api exec prisma migrate dev # migraciones
pnpm --filter api db:seed                 # datos de demostración (solo desarrollo)

pnpm --filter api dev                     # API en http://localhost:5050
pnpm --filter web dev                     # web en http://localhost:5173 (redirige /api a la API)
pnpm --filter mobile start                # app móvil (Expo)
```

> El seed y `db:init` son **solo para desarrollo**: nunca se corren contra la base de producción.

### Cargar el temario

```bash
python3 content/material/_qa_tools/exportar_manifiesto.py /tmp/manifiesto.json
cd api
npx tsx scripts/importar_contenido.ts /tmp/manifiesto.json                       # ensayo: no escribe
IMPORT_DB_ESPERADA=<base> npx tsx scripts/importar_contenido.ts /tmp/manifiesto.json --aplicar
```

`--materia=a,b` limita la carga y `--actualizar` reemplaza lo ya importado (salvo cuestionarios con intentos). Detalle
en `docs/IMPORTAR-CONTENIDO.md`. Si cambia el temario, regenerar el mapa con
`python3 content/material/_qa_tools/exportar_mapa.py` (la CI lo comprueba).

## Pruebas y calidad

| Qué | Comando |
|---|---|
| Tipos y lint de la API | `pnpm --filter api typecheck` · `pnpm --filter api lint` |
| Pruebas de la API (base en memoria) | `pnpm --filter api test` (necesita `JWT_SECRET`) |
| Pruebas de la API contra PostgreSQL | `pnpm --filter api test:pg` (con `PG_TEST_DATABASE_URL` apuntando a una base de pruebas) |
| Web | `pnpm --filter web test` · `node tools/lint-gate.mjs` |
| App sin conexión | `pnpm --filter offline tipos` · `pnpm --filter offline test` · `cargo test -p vb-nucleo` (en `apps/offline`) |
| Dependencias | `node tools/audit-gate.mjs` |

La CI (`.github/workflows/ci.yml`) corre todo esto en cada PR y en cada cambio de `main`: tipos, lint, pruebas con
una base PostgreSQL creada desde cero, la compuerta de seguridad de dependencias y el control del mapa del temario.
`tools/lint-gate.mjs` frena solo los errores de lint **nuevos** de la web (los heredados están en
`tools/lint-web-base.json`).

## Configuración

Todas las variables, con su explicación, están en `api/.env.example`, `apps/web/.env.example` y
`apps/mobile/.env.example`. Las principales de la API:

- **Base y servidor:** `DATABASE_URL`, `PORT` (5050), `HOST`, `API_URL`, `APP_URL`, `CORS_ORIGIN`, `TRUST_PROXY`,
  `REDIS_URL`, `COMPRESSION`.
- **Autenticación:** `JWT_SECRET`, `JWT_REFRESH_SECRET`, `JWT_ISSUER`, `JWT_AUDIENCE`, `TOTP_ENCRYPTION_KEY`, límites
  de ingreso `LOGIN_*` (por cuenta y por IP; `LOGIN_IPS_CONFIABLES` para escuelas detrás de una misma IP).
- **Correo:** `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `EMAIL_VERIFICACION`.
- **Pagos:** `MP_CLIENT_ID`, `MP_CLIENT_SECRET`, `MP_WEBHOOK_SECRET` (obligatoria si hay credenciales),
  `PASARELAS_ENCRYPTION_KEY`.
- **App sin conexión:** `OFFLINE_PERMISO_CLAVE_ARCHIVO`, `OFFLINE_PAQUETES_DIR`, `OFFLINE_DESCARGAS_DIR`.
- **Contenido:** `SQLITE_PATH` (diccionario), `CONTENT_SQLITE_PATH`, `GEONAMES_SQLITE_PATH`, `MEDIA_STORAGE`.

## Más documentación

- `docs/README.md` — índice: qué documento es la referencia de cada tema.
- `docs/VBLang.md` y `docs/modulos.md` — el formato de preguntas y el modelo de módulos.
- `docs/MIGRACION-PRODUCCION.md` — instalación en el servidor y despliegue.
- `docs/legal/` — cumplimiento de la Ley 25.326, evaluación de impacto y procedimiento ante incidentes.
- `docs/pagos/` — comisión, interés por mora, cooperadora y reembolsos.
- `apps/offline/LEEME.md` y `apps/offline/MANUAL.md` — la app sin conexión, para quien la desarrolla y para quien la usa.
- `content/introduccion.md` y `content/troncos.md` — cómo está pensado el temario y sus caminos.
