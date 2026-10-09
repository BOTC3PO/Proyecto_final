# Migración al entorno de producción (inventario y plan)

> Documento inicial (2026-10-09). Hasta hoy no existía ninguno. **Producción es el entorno final
> y hoy solo corre de forma local**; este archivo inventaría qué hay que mover, qué falta decidir
> y en qué orden hacerlo. Todo lo que figura como "verificado" se comprobó en el repo; lo que no,
> está marcado. No se desplegó ni se tocó ninguna máquina.

## 1. Qué corre hoy (local)

| Pieza | Qué es | Verificado en |
|---|---|---|
| API | Express 5 + TypeScript, puerto 5050, rutas bajo `/api/*` | `api/src/index.ts`, `README.md` |
| Web | React 19 + Vite; `pnpm --filter web build` genera estáticos | `apps/web/package.json` |
| Base principal | PostgreSQL vía Prisma 7.7 (`DATABASE_URL`), 44 migraciones | `api/prisma/migrations` |
| SQLite de solo lectura | Diccionario (`/api/dictionary`) y mapas (`/api/maps`, GeoNames) | `api/.env.example` |
| Media | Subidas de imagen/audio/video/PDF en disco (`MEDIA_STORAGE=local`) | `api/.env.example` |
| Móvil | Expo, **en construcción**: queda fuera de esta migración | `README.md` |
| Contenido educativo | Archivos en `content/material/` (116 MB; audio generado 29 MB) | repo |

Node local: v22; el README dice que la versión oficial está "por confirmar".
No hay Dockerfile, docker-compose, `render.yaml`, `vercel.json`, `fly.toml`, Procfile ni nginx en el
repo: **no existe ninguna definición de despliegue**.

**Destino: servidor físico `192.168.0.28` (equipo `javier-AI-Series`). Verificado por SSH (solo lectura) el
2026-10-09:**

| Dato | Valor |
|---|---|
| Sistema | Zorin OS 18.1 (basado en Ubuntu/Debian), kernel 7.0 |
| Procesador | AMD Ryzen AI 9 HX 470, 24 hilos |
| Memoria | 29 GiB visibles (3,8 en uso) |
| Disco | NVMe de 931 GB, 848 GB libres (3 % usado) |
| Red | `enp195s0`, `192.168.0.28/24`; salida a internet correcta (npm, nodejs.org, github, apt) |
| IP pública vista desde el servidor | `181.44.116.102` (comparar con la WAN del router: si no coincide, hay CGNAT y no sirve abrir puertos) |
| Zona horaria | America/Argentina/Buenos_Aires |
| Puertos en uso | 22 (SSH), 631 (impresión), 27036 y puertos locales; **80, 443, 5050, 5173 y 5432 están libres** |
| Firewall | `ufw` **activo** (no se pueden leer las reglas sin `sudo`) |
| Instalado | solo `python3` 3.12 y `curl`. **No hay** Node, pnpm, npm, git, PostgreSQL, Nginx, Caddy, Docker ni pm2 |
| Acceso | SSH con clave desde la máquina de trabajo, usuario `javier`; **`sudo` pide contraseña** |

Es capacidad de sobra. Es una **IP privada**: para llegar desde internet faltan una salida
pública (redirección de puertos en el router, proxy inverso o túnel) y HTTPS.

## 2. Lo que hay que mover o decidir, por pieza

| Pieza | En producción | Pendiente |
|---|---|---|
| **Código** | Rama `main` | `tareas_de_reparación` está **1.334 commits adelante** de `main` (9.161 archivos, mayormente contenido; también 585 de web y 383 de api). Hay que decidir qué entra a producción y cómo (PR único, por partes o solo el código). |
| **PostgreSQL** | Instancia gestionada o propia | Aplicar esquema con `pnpm --filter api db:migrate` (`prisma migrate deploy`, **nunca** `migrate dev` ni `db:push`). Saber si la base local tiene **datos reales** que haya que pasar (`pg_dump`/`pg_restore`). El seed demo **no** va a producción. |
| **Diccionario.sqlite** | Archivo en el servidor | No está en el repo (está en `.gitignore`); se arma con `install/build_dictionary_*.py` (ver `composer.sh --langs`). Hay que construirlo o copiarlo. |
| **geonames_index.sqlite** | 4,6 MB | Sí está versionado en git: viaja con el código. |
| **Media subida** | Idealmente S3-compatible (`MEDIA_STORAGE=s3`: S3, R2, B2, MinIO) | `local` solo sirve con **una** instancia del API. Si ya hay subidas locales, migrarlas al bucket. |
| **Rate limit** | Redis (`REDIS_URL`) si hay 2 o más instancias | Con una sola instancia alcanza el almacenamiento en memoria. |
| **Web** | Estáticos servidos por CDN o servidor web | `VITE_API_BASE_URL` se fija **al compilar**. Proxy `/api` o dominio propio para la API. |
| **HTTPS y dominios** | Obligatorio | `API_URL`, `APP_URL` y `CORS_ORIGIN` con las URL públicas. MercadoPago exige `https` (redirect y back_url). |
| **Contenido educativo** | Ver sección 4 | **La app no lee `content/material/`**: no encontré ningún importador. Es un trabajo aparte. |

## 3. Configuración y secretos (revisar antes de salir)

- **Secretos nuevos y únicos**, nunca los de desarrollo: `JWT_SECRET`, `JWT_REFRESH_SECRET`,
  `BOOTSTRAP_ADMIN_KEY`, `PAYMENTS_WEBHOOK_SECRET` y credenciales de MercadoPago. El `.env.example`
  de la raíz trae valores de desarrollo (`JWT_SECRET=dev-secret`): no copiarlos.
- `NODE_ENV=production`. `ENABLE_SEED_ENDPOINT` debe quedar apagado (su valor por defecto ya es
  `false`, verificado en `api/src/lib/env.ts`). `AUTH_RATE_LIMIT_DISABLED` no debe estar activo.
- Dejar los `.env` fuera de git y guardar los secretos en el gestor del servidor.
- Crear el primer admin con el procedimiento de `docs/bootstrap-admin.md`.

## 4. El contenido educativo no entra solo

Todo lo que se escribió en `content/material/` (temas, ejercicios, exámenes de certificación,
logros en 11 idiomas, recetas de Cocina, audios) son **archivos**. La plataforma no los carga:
para que estén en producción hace falta diseñar un importador hacia la base (o servirlos de otra
forma). Puntos ya sabidos:

- Los ejercicios están en el lenguaje VBLang; el validador está en `content/material/_qa_tools/`.
- **Logros:** no existe un modelo `Logro` en Prisma (así lo dice `content/troncos.md`). Hoy son JSON.
- El examen de certificación y el examen-jefe tampoco tienen modelo; el audio (mp3) tampoco está
  enlazado a las preguntas (falta `AudioSpec` en VBLang).
- Las recetas (Ruta B) no se evalúan desde la plataforma: solo se entregan como contenido.
- Conviene decidir **cuánto de este contenido sale en la primera versión de producción**.

## 5. Orden propuesto

1. **Decidir el destino** (sección 6) y el dominio.
2. **Ordenar el código:** decidir qué de `tareas_de_reparación` llega a `main`; fijar versión de
   Node y de pnpm; probar `pnpm install --frozen-lockfile`, `pnpm --filter api build` y
   `pnpm --filter web build` en limpio.
3. **Definir el despliegue** (hoy no hay nada): proceso del API, servidor de estáticos, HTTPS.
4. **Base de datos:** crear PostgreSQL, aplicar migraciones, cargar datos reales si los hay.
5. **Archivos:** diccionario SQLite, bucket de media.
6. **Configuración y secretos**, y primer admin.
7. **Verificación:** ruta `health` (`api/src/routes/health.ts`), `api/scripts/auth_health_check.ts`,
   un recorrido manual de login, creación de clase, subida de media y un pago de prueba.
8. **Respaldos y monitoreo** (copias de la base y de la media, logs, alertas): no hay nada definido.
9. **Contenido:** lo que se decida cargar, con su importador.

## 6. Decisiones tomadas (2026-10-09)

- **Servidor:** el de arriba. Se accede por SSH (pendiente autorizar la clave).
- **Datos reales:** no hay todavía; lo único real es la teoría de `content/material/`. La base de
  producción arranca **vacía** (migraciones + primer admin), sin seed demo.
- **Dominio:** no hay de momento. Mientras tanto la web y la API se pueden servir **dentro de la red
  local** por IP; para salir a internet sin dominio hay opciones sin costo (túnel de Cloudflare,
  Tailscale o un DNS dinámico), pero conviene elegir una antes de configurar HTTPS.
- **MercadoPago:** todavía no se activa: no hace falta HTTPS público ni webhook en la primera salida.
- **Contenido (`content/material/`):** **todavía no se despliega.** Se deja fuera de esta migración;
  el importador es una etapa posterior.
- **Una sola instancia:** alcanza `MEDIA_STORAGE=local` y no hace falta Redis.

## 7. Alcance de la primera salida

Código del API y de la web, PostgreSQL vacío con las 44 migraciones, SQLite de mapas (viaja en git)
y diccionario, media en disco local, primer admin y secretos propios. Sin pagos, sin contenido
educativo, sin móvil.

## 8. Fase de pruebas internas por HTTP (decisión de Javier, 2026-10-09)

Primero se prueba por la dirección local del servidor (`http://192.168.0.28:...`) y después se abre
a internet. Revisado en el código (sin tocar el servidor):

**Funciona en HTTP plano**
- **No hay cookies:** la autenticación es por tokens JWT en cabecera, guardados en `localStorage`
  (`apps/web/src/lib/api.ts`). Ninguna cookie `Secure` puede romper el login.
- **El API no sirve la web:** no hay `express.static`. La web compilada necesita su propio servidor
  de archivos estáticos (Nginx, Caddy o similar).
- **Sin pagos no se pide nada de MercadoPago:** `assertSecretosDePago` solo exige claves si hay una
  pasarela configurada.

**Hay que configurar bien (si no, falla)**
- **`JWT_SECRET` es obligatorio:** el API **se niega a arrancar** si falta o es `dev-secret`.
  Conviene definir también `JWT_REFRESH_SECRET` aparte (si no, reutiliza el anterior).
- **La web compilada apunta a `http://localhost:5050` por defecto** si al compilar no se define
  `VITE_API_BASE_URL`: desde otra computadora, el navegador llamaría a *su propio* localhost. Hay que
  compilar con `VITE_API_BASE_URL=http://192.168.0.28:5050` (o la URL que se use).
- **`CORS_ORIGIN` tiene que listar el origen exacto de la web**, por ejemplo `http://192.168.0.28`
  (con el puerto si no es el 80). Si cambia la dirección, hay que cambiarlo también.
- **`API_URL` y `APP_URL`** con las mismas direcciones locales.

**Para tener en cuenta**
- **`helmet()` con valores por defecto** (`api/src/index.ts`): suma cabeceras de seguridad que
  presuponen HTTPS (HSTS, `upgrade-insecure-requests`). En respuestas JSON no molesta; si algún día
  el API sirve HTML por HTTP, conviene revisarlo. A verificar en la prueba, no comprobado.
- **Sin `trust proxy`:** si más adelante se pone un proxy inverso (Nginx) delante del API, el límite de
  intentos (`lib/rate-limit.ts`) vería a todos los usuarios con la IP del proxy. Habría que configurar
  `trust proxy` en ese momento. Conectando directo al puerto del API no pasa.
- **Funciones del navegador que exigen HTTPS** (micrófono, portapapeles, service workers, `crypto.subtle`)
  **no van a andar** en `http://192.168.0.28`; sí en `localhost`. Si la plataforma usa alguna, se prueba
  recién con HTTPS.
- **El tráfico va sin cifrar:** aceptable en una red local de prueba, **sin usuarios reales ni
  contraseñas que importen**. Al abrir a internet, HTTPS es obligatorio.

## 9. Plan inmediato en el servidor

Como `sudo` pide contraseña, se divide en lo que **solo puede hacer Javier** (instalar paquetes del
sistema, crear la base y abrir el firewall) y lo que se hace **sin `sudo`**, en el directorio del
usuario.

**A. Una sola vez, con `sudo` (lo corre Javier en el servidor):**

```bash
sudo apt update && sudo apt install -y git nginx postgresql postgresql-contrib rsync
PGPASS=$(openssl rand -hex 24)
sudo -u postgres psql -c "CREATE USER virtualbook WITH PASSWORD '$PGPASS';"
sudo -u postgres psql -c "CREATE DATABASE virtualbook OWNER virtualbook;"
mkdir -p ~/.config/virtualbook
( umask 077; printf 'DATABASE_URL=postgresql://virtualbook:%s@localhost:5432/virtualbook\n' "$PGPASS" > ~/.config/virtualbook/db.env )
sudo ufw allow from 192.168.0.0/24 to any port 80 proto tcp
sudo ufw allow from 192.168.0.0/24 to any port 5050 proto tcp
```

La contraseña de la base se genera al azar y queda en `~/.config/virtualbook/db.env` (permisos
solo para el usuario); no se escribe en ningún documento ni en git. El firewall abre 80 y 5050
**solo para la red local**.

**B. Sin `sudo` (lo hace Claude por SSH, en `~/`):**
1. Node 22 desde el tarball oficial en `~/.local` y pnpm con corepack.
2. Copiar el código desde la máquina de trabajo con `rsync` o `git archive` (sin pasar credenciales de
   GitHub al servidor).
3. `pnpm install --frozen-lockfile`, compilar API y web (con `VITE_API_BASE_URL` y `CORS_ORIGIN` de la
   sección 8), `pnpm --filter api db:migrate`.
4. Crear `api/.env` con secretos nuevos (permisos 600) y el primer admin según `docs/bootstrap-admin.md`.
5. Dejar el API como servicio de usuario `systemd` y la web servida por Nginx (la configuración de
   Nginx necesita `sudo`: se deja el archivo listo y lo activa Javier).
6. Verificar con la ruta `health` y `api/scripts/auth_health_check.ts`.

**C. Después:** decidir cómo se sale a internet (túnel, DNS dinámico o redirección de puertos, ver
sección 6), elegir qué de `tareas_de_reparación` llega a `main`, y respaldos de la base.

## 10. Estado del despliegue de prueba (2026-10-09)

Servidor `192.168.0.28`, todo por HTTP en la red local. **Funciona:** web en `http://192.168.0.28`
(Nginx, con SPA fallback), API en `http://192.168.0.28:5050/health`, CORS con el origen de la web,
Postgres local (solo 127.0.0.1) con las 104 tablas migradas y la base vacía, servicio de usuario
`monolitico-api` con `Linger=yes`.

**Disposición en el servidor** (`~/proyectos/monolitico/`, compartida a futuro con otros proyectos):
`app/` (código por `git archive`, marcador `DEPLOYED_COMMIT`), `datos/media/` (enlazado a
`app/api/dist/media`), `logs/`, `config/nginx-monolitico.conf`. Node 22 + pnpm en `~/.local/node`;
la URL de la base en `~/.config/virtualbook/db.env` y los secretos de la API en `app/api/.env`
(ambos modo 600, generados en el servidor, nunca en el repositorio).

**Hallazgos a resolver en el repositorio:**
- `@vb/vblang` solo expone TypeScript (`main: src/index.ts`): la API compilada (`node dist/src/index.js`)
  no arranca; hoy corre con `tsx src/index.ts`. Arreglo limpio: compilar vblang y apuntar `main`/`exports` a `dist`.
- `pnpm --filter web build` falla en `tsc -b` por 3 specs (`casos-limite-menores.spec.tsx`,
  `tiza-spans.spec.tsx`, `variables-factories-builtins.spec.ts`); se compiló con `vite build` directo.
- El script `start` apuntaba a `dist/index.js`; corregido a `dist/src/index.js` (commit 39ab3d00).
- Sin el `Diccionario.sqlite` la API arranca igual, pero el endpoint del diccionario devuelve error (esperado).
- La web lleva `VITE_API_BASE_URL` fijada en el build: al cambiar la URL pública hay que recompilarla.
- Un proceso de prueba en primer plano junto al servicio dejó al servicio sin puerto abierto; reiniciarlo lo resolvió.

**Pendiente:** crear el primer administrador (`POST /api/auth/bootstrap-admin` con `x-bootstrap-key`,
contraseña elegida por Javier; no usar `db:init`), HTTPS/dominio/salida a internet (`trust proxy` al
poner proxy), respaldos de la base, diccionario, e importador de `content/material`.

### 10.1 HTTPS en la red local (2026-10-09)

- Entrada única: `https://192.168.0.28` (Nginx 1.24, 443 con http2; el 80 redirige). `/api/` y `/health`
  van por proxy a la API, que escucha **solo en 127.0.0.1:5050** (`HOST=127.0.0.1`, `TRUST_PROXY=loopback`
  en `api/.env`). La web se compila con `VITE_API_BASE_URL=https://192.168.0.28` (mismo origen).
- Certificado: autoridad propia "Monolitico CA local" (10 años) y certificado de servidor (800 días, vence
  2028-12-17) con SAN `192.168.0.28`, `127.0.0.1`, `javier-AI-Series(.local)`, `localhost`. Archivos en
  `~/proyectos/monolitico/config/tls/` (llaves modo 600, `ca.key` no sale del servidor). Cada dispositivo de
  prueba debe instalar `ca.crt` como autoridad de confianza. Con dominio real se reemplaza por Let's Encrypt.
- Nginx 1.24 no admite la directiva `http2 on;` (es de 1.25.1+): usar `listen 443 ssl http2`.
- ufw no tenía regla para el 5050 y aun así estaba accesible: no confiar en ufw para cerrar puertos de la API,
  cerrar en la aplicación (HOST) como se hizo.
- Reinicios: nginx, postgresql y la API (linger) arrancan solos; verificar tras el primer reinicio con
  `https://192.168.0.28/health`, `systemctl --user status monolitico-api` y `systemctl status nginx`.

### 10.2 Respaldos de la base (2026-10-09)

- Timer de usuario `monolitico-respaldo.timer`: todos los días 03:30 (+hasta 5 min al azar, `Persistent=true`
  recupera uno perdido si el servidor estaba apagado). Corre `~/proyectos/monolitico/config/respaldo-db.sh`:
  `pg_dump --format=custom`, verifica con `pg_restore --list`, deja 14 copias en
  `~/proyectos/monolitico/datos/backups/` (modo 600) y escribe en `logs/respaldo.log`.
- Verificado el primer respaldo: 104 tablas, 43 migraciones y la fila del admin. **No se hizo una restauración
  completa**: el usuario de la base no tiene `CREATEDB`. Para probarla hace falta `sudo -u postgres createdb`.
- **Límite:** el respaldo está en el mismo disco que la base. No protege de una falla de disco ni del servidor.
  Pendiente: copia fuera del servidor (otro equipo o almacenamiento externo).
- No incluye `api/.env`, `db.env` ni `config/tls/` (secretos y la CA): perderlos obliga a regenerar secretos
  (invalida las sesiones) y a reinstalar la CA en cada dispositivo.
- Restaurar: `pg_restore --clean --if-exists --no-owner -d "$DATABASE_URL" <archivo.dump>` con la API detenida.
