# README TEMPORAL — Proyecto Final

Este documento es **provisorio** y está enfocado en desarrollo local.
Resume cómo levantar el proyecto en modo dev y cómo orientarse rápido en el repositorio.
La base confirmada en código es: **Web (React + Vite + TypeScript)** y **API (Express + TypeScript)**.
La persistencia principal usa **MongoDB**, y también existe integración de **diccionario sobre SQLite** cuando `DB_KIND=sqlite`.

## 1) Qué es este proyecto (breve)

Proyecto full-stack con frontend en `apps/web` y backend en `api`, con rutas API bajo `/api/*`.
La API arranca por defecto en `http://localhost:5050` y el frontend de Vite consume esa API (por variable `VITE_API_BASE_URL`/`VITE_API_URL`, o fallback a `http://localhost:5050`).
La arquitectura confirmada hoy es:

- Web: React + TypeScript + Vite.
- API: Express + TypeScript.
- DB principal: MongoDB.
- Diccionario: modo SQLite opcional (`DB_KIND=sqlite`) con endpoints específicos de dictionary.

## 2) Estructura del repo (alto nivel)

```text
.
├─ api/          # Backend Express/TS
├─ apps/web/     # Frontend React/Vite/TS
├─ docs/         # Documentación técnica y funcional
├─ server/       # Scripts y utilidades de infraestructura/migraciones
└─ README_TEMP.md
```

> Nota: hay otras carpetas auxiliares en el repo; este árbol muestra solo lo principal para dev.

## 3) Requisitos

- **Node.js**
  - Versión exacta: **POR CONFIRMAR** (no se detectó `.nvmrc` ni `engines` en `package.json`).
- **npm**
  - Se usa npm porque hay `package-lock.json` (raíz, `api/`, `apps/web/`).
- **MongoDB** (local o remoto accesible)
  - URI por defecto en API: `mongodb://localhost:27017`.
- **SQLite (opcional)**
  - Solo si querés usar el diccionario en modo SQLite (`DB_KIND=sqlite`).

## 4) Setup rápido (Dev)

### A) Instalar dependencias

> Ejecutar cada comando desde su carpeta.

1. **Raíz**

```bash
cd /workspace/Proyecto_final
npm install
```

2. **API**

```bash
cd /workspace/Proyecto_final/api
npm install
```

3. **Web**

```bash
cd /workspace/Proyecto_final/apps/web
npm install
```

### B) Variables de entorno

No se encontró `.env.example` en raíz/API/web.

Crear `api/.env` con claves mínimas detectadas en código (completar según entorno):

```env
PORT=5050
CORS_ORIGIN=http://localhost:5173

MONGO_URI=mongodb://localhost:27017
DB_NAME=educational_platform

JWT_SECRET=TODO
JWT_REFRESH_SECRET=TODO

# Opcional para bootstrap admin
BOOTSTRAP_ADMIN_KEY=TODO

# Opcional para diccionario SQLite
DB_KIND=mongo
SQLITE_PATH=./data/diccionario.sqlite
SQLITE_READONLY=1
SQLITE_CACHE_KB=65536
```

Crear `apps/web/.env` (si necesitás apuntar a otra API):

```env
VITE_API_BASE_URL=http://localhost:5050
```

### C) Levantar Mongo

No se detectó `docker-compose.yml` en el repo.

Opciones:

- Levantar Mongo local (instalación nativa) en `mongodb://localhost:27017`.
- O usar una URI remota y setear `MONGO_URI` en `api/.env`.

### D) Flujo único recomendado de arranque (Mongo + DB + seed + API)

> Para evitar desalineaciones, usar **siempre el mismo `DB_NAME`** en API y en el script de setup.

1. Configurar `api/.env`:

```env
MONGO_URI=mongodb://localhost:27017
DB_NAME=educational_platform
```

2. Crear/seedear esa misma DB ejecutando `server/mongodb-setup.js` sobre el `DB_NAME` anterior.

Ejemplo con mongosh:

```bash
mongosh "mongodb://localhost:27017/educational_platform" ./server/mongodb-setup.js
```

3. (Opcional, recomendado) Verificar usuario semilla de autenticación:

```bash
cd /workspace/Proyecto_final/api
npm run auth:health
```

4. Levantar la API:

```bash
cd /workspace/Proyecto_final/api
npm run dev
```

Desde este cambio, la API también ejecuta una verificación de startup y muestra warning si:

- la DB está vacía,
- no existe ningún usuario ADMIN,
- o falta `admin@escuela.com` en la DB configurada por `DB_NAME`.

### E) Levantar API

Desde `api/`:

```bash
cd /workspace/Proyecto_final/api
npm run dev
```

- Script real: `dev: nodemon` (ejecuta `ts-node src/index.ts` según `api/nodemon.json`).
- Puerto por defecto confirmado: **5050** (`PORT`, fallback en código).

### F) Levantar Web

Desde `apps/web/`:

```bash
cd /workspace/Proyecto_final/apps/web
npm run dev
```

- Script real: `dev: vite`.
- URL de desarrollo típica de Vite: **http://localhost:5173** (no hay override en `vite.config.ts`).

## 5) Flujo demo / autenticación (importante)

Autenticación confirmada en API:

- `POST /api/auth/login`
- `POST /api/auth/guest`
- `POST /api/auth/register`
- `POST /api/auth/bootstrap-admin` (requiere `BOOTSTRAP_ADMIN_KEY`)

En frontend hay pantalla de login que usa `POST /api/auth/login`.

Si ves errores como **`Missing authentication`**:

- Significa que estás llamando endpoints protegidos sin credenciales válidas.
- Revisar que exista sesión/token y que el flujo de login/guest esté correctamente ejecutado.
- Para rutas de `GUEST`, además puede requerirse estado de onboarding `aceptado`.

> TODO: documentar paso a paso el flujo recomendado de sesión de guest/login para demo end-to-end.

## 6) Scripts útiles (confirmados)

### API (`/api/package.json`)

- `npm run dev` → desarrollo con nodemon + ts-node.
- `npm run build` → compila TypeScript a `dist/`.
- `npm run start` → ejecuta API compilada (`node dist/index.js`).
- `npm run validate:economia` → validaciones de economía (script interno).
- `npm run dict:smoke` → smoke test de diccionario SQLite.
- `npm run dict:explain` → inspección/explicación de plan de consultas del diccionario.
- `npm run sqlite:ensure-indexes` → asegura índices SQLite para el diccionario.
- `npm run auth:health` → valida que el usuario semilla `admin@escuela.com` exista en `DB_NAME` y tenga `passwordHash` utilizable (sin exponer credenciales).

### Web (`/apps/web/package.json`)

- `npm run dev` → servidor Vite de desarrollo.
- `npm run build` → `tsc -b` + build de Vite.
- `npm run lint` → eslint del frontend.
- `npm run preview` → preview local de build.

### Raíz (`/package.json`)

- No hay scripts definidos actualmente (**POR CONFIRMAR** si se agregarán scripts de workspace).

## 7) Problemas comunes (Troubleshooting)

- **Missing authentication**
  - La API responde 401 cuando falta autenticación en rutas protegidas.
  - Verificar login/token/session y permisos por rol.

- **CORS / puertos**
  - API usa `CORS_ORIGIN` (default `http://localhost:5173`).
  - Si web y API corren en puertos distintos, revisar `CORS_ORIGIN` y `VITE_API_BASE_URL`.

- **Mongo connection refused**
  - Verificar que Mongo esté levantado y que `MONGO_URI` apunte a una instancia accesible.

- **Errores de TypeScript (API/Web)**
  - Ejecutar `npm run build` en `api/` y/o `apps/web/` para diagnóstico de compilación.

- **Errores de Vite (pre-transform, import resolve, etc.)**
  - Confirmar instalación en `apps/web/` (`npm install`) y reiniciar `npm run dev`.

## 8) Estado (TEMPORAL)

Este README es **provisorio** y puede quedar desactualizado mientras evoluciona el proyecto.

TODO corto:

- Completar matriz final de variables `.env` confirmadas por entorno.
- Documentar flujo completo guest/login con ejemplos de request/response de dev.
- Documentar proceso de deploy (API/Web/DB) y ambientes.
