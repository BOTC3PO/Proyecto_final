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

**Destino (datos que dio Javier, 2026-10-09):** servidor físico en `192.168.0.28`, Zorin OS 18.1,
32 GB de RAM, 1 TB de disco y un procesador Ryzen (lo anotó como "Ryzen 9 IA 470"; confirmar el
modelo exacto con `lscpu`). Tiene salida a internet, se accede por SSH con el mismo usuario
administrador y el router lo administra Javier. Es capacidad de sobra para una sola instancia del
API, PostgreSQL y los estáticos de la web.

Comprobado desde la máquina de trabajo: **responde a ping** (4/4, 0 % de pérdida, ~1,2 ms), pero el
**SSH rechaza la clave de esta máquina** (`Permission denied (publickey,password)`): la clave pública
`~/.ssh/id_ed25519.pub` (sin passphrase) todavía no está en el `authorized_keys` del servidor. Hasta
que se autorice, **no se pudo ver qué tiene instalado**. Es una **IP privada**: para que se llegue
desde internet faltan una salida pública (redirección de puertos en el router, proxy inverso o un
túnel) y HTTPS.

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

## 8. Lo que falta antes de empezar

1. **Autorizar la clave SSH** en el servidor (un paso, una vez; lo hace quien tenga la contraseña):
   `ssh-copy-id -i ~/.ssh/id_ed25519.pub javier@192.168.0.28`.
2. **Reconocimiento del servidor** (solo lectura): versión de Node, pnpm, PostgreSQL, Nginx o
   Docker si están instalados, puertos ocupados, firewall (`ufw`), zona horaria, espacio.
3. **Decidir cómo se sale a internet** (túnel, DNS dinámico o redirección de puertos) y si se quiere
   que sea solo para uso interno al principio.
4. **Decidir qué entra de `tareas_de_reparación` a `main`** (ver sección 2, Código).
5. **Definir el despliegue** (servicio `systemd` o contenedores, y servidor web para los estáticos).
