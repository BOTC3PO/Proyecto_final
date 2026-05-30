# Proyecto Final — Plataforma educativa

Monorepo full-stack de una plataforma educativa: API en Express/TypeScript, web en
React/Vite/TypeScript, app mobile en Expo (en desarrollo) y un paquete compartido de
lenguaje (`vblang`).

- **Estado:** en desarrollo activo.
- **Última actualización:** 2026-05-30.

## Qué es

Plataforma educativa organizada como un monorepo con `pnpm` workspaces. El backend expone
una API REST bajo `/api/*` respaldada por **PostgreSQL vía Prisma** (más algunas bases
**SQLite** de solo lectura para diccionario y mapas). El frontend web consume esa API y
comparte lógica de dominio con el paquete `@vb/vblang`.

## Layout del monorepo

```text
.
├─ api/                # Backend Express + TypeScript (Prisma + PostgreSQL)
├─ apps/
│  ├─ web/             # Frontend React + Vite + TypeScript
│  └─ mobile/          # App Expo / React Native (en desarrollo)
├─ packages/
│  └─ vblang/          # Paquete compartido @vb/vblang (lógica de dominio)
└─ docs/               # Documentación técnica y funcional (incluye docs/archive/)
```

Workspaces declarados en `pnpm-workspace.yaml`: `apps/*`, `api`, `packages/*`.

## Stack real

- **Monorepo:** pnpm workspaces
- **API:** Express 5 + TypeScript
- **ORM / DB principal:** Prisma 7.7 + PostgreSQL (driver adapter `@prisma/adapter-pg`)
- **DB auxiliares:** SQLite de solo lectura para diccionario (`/api/dictionary`) y mapas (`/api/maps`)
- **Web:** React 19 + Vite 7 + TypeScript
- **Mobile:** Expo / React Native (en desarrollo)
- **Compartido:** `@vb/vblang` (`packages/vblang`)

## Requisitos

- **Node.js:** `POR CONFIRMAR` (no hay `.nvmrc` ni `engines` en ningún `package.json`).
  El código usa `@types/node` v25 en `api/`, por lo que se recomienda Node 22 LTS o superior
  hasta fijar la versión oficial.
- **pnpm:** gestor de paquetes del monorepo (hay `pnpm-workspace.yaml` y `pnpm-lock.yaml`).
- **PostgreSQL:** base de datos principal (la API se conecta vía `DATABASE_URL`).

## Quickstart (dev)

### 1) Instalar dependencias

Desde la raíz del repo, una sola vez para todos los workspaces:

```bash
pnpm install
```

### 2) Configurar variables de entorno

El proyecto usa archivos `.env` por paquete. Copiá los `.env.example` correspondientes:

```bash
cp api/.env.example api/.env
```

Variables reales detectadas:

**API (`api/.env`, ver `api/.env.example`):**

- `NODE_ENV`, `PORT` (default `5050`), `CORS_ORIGIN` (default `http://localhost:5173`)
- `DATABASE_URL` — conexión PostgreSQL (ej. `postgresql://user:password@localhost:5432/virtualbook`)
- SQLite de solo lectura: `SQLITE_PATH`, `SQLITE_READONLY`, `SQLITE_CACHE_KB`, `CONTENT_SQLITE_PATH`
- Auth: `JWT_SECRET`, `JWT_REFRESH_SECRET`, `JWT_ISSUER`, `JWT_AUDIENCE`, `JWT_ACCESS_TTL_SECONDS`, `JWT_REFRESH_TTL_SECONDS`, `BOOTSTRAP_ADMIN_KEY`
- Otros: `MAX_PAGE_MB`, `AUTH_RATE_LIMIT_DISABLED`, `ENABLE_SEED_ENDPOINT`, `PAYMENTS_WEBHOOK_SECRET`, knobs de billing/governance

**Web (`apps/web/.env`):** no hay `.env.example` propio; las variables `VITE_*` figuran en el
`.env.example` de la raíz. Solo se necesitan si querés apuntar a una API distinta del default:

- `VITE_API_BASE_URL` / `VITE_API_URL` (fallback en código a `http://localhost:5050`)
- `VITE_TEST_MODE`

### 3) Preparar la base de datos (Prisma + PostgreSQL)

Con `DATABASE_URL` configurado y PostgreSQL corriendo:

```bash
# Generar el cliente Prisma
pnpm --filter api db:generate

# Aplicar migraciones en desarrollo
pnpm --filter api exec prisma migrate dev

# Seed de datos demo
pnpm --filter api db:seed
```

> Scripts de DB disponibles en `api/package.json`: `db:generate` (`prisma generate`),
> `db:migrate` (`prisma migrate deploy`, para entornos no-dev), `db:push`, `db:studio`,
> `db:init`, `db:seed` / `seed:demo`. El seed de Prisma (`prisma.seed`) ejecuta `prisma/seed.ts`.

### 4) Levantar los servicios en dev

```bash
# API → http://localhost:5050   (script: nodemon; confirmado en api/src/index.ts)
pnpm --filter api dev

# Web → http://localhost:5173   (script: vite; proxea /api a http://localhost:5050)
pnpm --filter web dev
```

- El puerto **5050** de la API está confirmado en `api/src/index.ts` (`app.listen(ENV.PORT)`)
  con default `5050` en `api/src/lib/env.ts`.
- El puerto **5173** es el default de Vite; `apps/web/vite.config.ts` no lo sobreescribe y
  define un proxy de `/api` hacia `http://localhost:5050`.

## Cómo orientarse en el repo

- **Backend / API:** `api/src/` — `index.ts` monta las rutas bajo `/api/*`; `routes/`, `lib/`,
  `db/`, `schema/`. Modelo de datos en `api/prisma/schema.prisma`; scripts de mantenimiento en
  `api/scripts/`.
- **Frontend web:** `apps/web/src/` — la base de la API se resuelve en `apps/web/src/lib/api.ts`.
  Configuración de build/dev en `apps/web/vite.config.ts`.
- **Mobile (en desarrollo):** `apps/mobile/` — app Expo/React Native.
- **Paquete compartido:** `packages/vblang/` (`@vb/vblang`), consumido por `api` y `web`.
- **Documentación:** `docs/` (técnica y funcional). El README histórico previo está en
  `docs/archive/README-temporal.md`.
