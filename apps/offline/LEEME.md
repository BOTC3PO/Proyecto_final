# App sin conexión (Tauri)

La misma web de Virtual Book, con una API local que responde dentro del dispositivo. El plan completo está en
`docs/plan/app-sin-conexion-tauri.md`; el manual para quien usa la app, en `MANUAL.md` (va también en el paquete
completo).

## Partes

- `src/arranque.ts`: prepara las bases e instala la API local antes de que cargue la web.
- `src/api-local/`: la API local (TypeScript). Responde con el mismo formato que el servidor; lo que necesita red
  contesta 503 con `code: "SIN_CONEXION"`.
- `nucleo/`: las dos bases SQLite del dispositivo (`contenido` y `progreso`), en Rust y sin depender de Tauri.
- `src-tauri/`: la app de escritorio y de Android.
- `navegador/`: el «modo navegador» para Huayra 5 y 6 (ver «Distribución»).

## Configuración de la compilación

Las variables van en `apps/offline/.env.local` (no se sube; el modelo está en `.env.example`):

| Variable | Qué hace |
|---|---|
| `VITE_API_REMOTA` | API de la plataforma, para activar cuentas. Vacía: solo usuarios locales. |
| `VITE_OFFLINE_CLAVE_PUBLICA` | Clave pública que verifica los permisos de las cuentas de la plataforma. |
| `VITE_MODO_AUTONOMO` | `true` cuando la plataforma deje de estar en producción: los permisos no vencen y no se llama al servidor. |
| `VITE_USUARIOS_LOCALES` | `false` para no permitir usuarios locales. |

## Cuentas de la plataforma

La primera vez, con red, la persona entra con su usuario y su contraseña de la web. La app pide al servidor un
permiso firmado (`POST /api/offline/permiso`), lo verifica con la clave pública y guarda una huella de la contraseña
(no la contraseña). Después entra sin red durante 90 días; al vencer, alcanza con conectarse una vez.

Para habilitarlo en un servidor:

1. Generar las claves, fuera del repositorio (la privada queda con permisos 600 y no se muestra):
   `cd api && npx tsx scripts/generar_clave_permiso.ts /ruta/segura/permiso-offline.pem`
2. En `api/.env`: `OFFLINE_PERMISO_CLAVE_ARCHIVO=/ruta/segura/permiso-offline.pem` (y, si se quiere otro plazo,
   `OFFLINE_PERMISO_DIAS`). Reiniciar la API.
3. Poner la clave pública que mostró el paso 1 en `VITE_OFFLINE_CLAVE_PUBLICA` y compilar la app.
4. La API tiene que aceptar el origen de la app en `CORS_ORIGIN`: `http://tauri.localhost` (Android y Windows),
   `tauri://localhost` (Linux de escritorio) y `http://127.0.0.1:47811` (modo navegador).

Cambiar la clave invalida los permisos de todos los dispositivos: cada cuenta tiene que volver a conectarse.

## Paquetes

Cada paquete es una base SQLite comprimida con gzip (formato en `nucleo/src/paquetes.rs`): una materia del temario
oficial o el diccionario de un idioma. Se bajan desde «Mi perfil → Contenido sin conexión» o se importan desde un
archivo (pendrive). Los módulos de la escuela se piden aparte, con el permiso firmado, y se actualizan solos cada vez
que una cuenta de la plataforma entra con red. La app trae Matemática incluida para el primer uso (no depende de otras materias).

Muchas materias tienen prerrequisitos en otras (Antropología pide «Hominización», de Historia). Cada paquete lleva esa
lista: al bajar una materia se bajan también las que necesita, y un módulo bloqueado nombra el prerrequisito aunque
su materia no esté en el dispositivo. Un prerrequisito que falta cuenta como no hecho: quitar una materia no desbloquea
nada.

Para generarlos (en el servidor lo hace `config/generar-paquetes.sh`):

```bash
pnpm paquetes --salida DIR --temario ~/proyectos/temario-oficial [--materias fisica,quimica] \
  [--diccionario RUTA/Diccionario.sqlite] [--idiomas es,en] [--sin-temario]
```

Con el mismo temario sale el mismo archivo (y el mismo hash). La API los sirve desde `OFFLINE_PAQUETES_DIR`.

## Prácticas y evaluaciones

Los intentos se corrigen en el dispositivo con la misma corrección del servidor (`api/src/lib/quiz-correccion.ts`),
así la nota se ve al instante. Cada intento guarda la semilla, la versión del cuestionario, las respuestas y lo que
mandó la web al entregar: al sincronizar, el servidor lo vuelve a corregir con eso. El progreso y los logros
salen de los cuestionarios formales aprobados; no hay forma de marcar un módulo como completado a mano.

## Sincronización

Cada cambio local queda en la cola `eventos`. Las cuentas de la plataforma la mandan a `POST /api/offline/sync`
(`src/api-local/sincronizacion.ts`) al entrar con red, después de cada entrega y con «Sincronizar ahora» en el
perfil. Se autentica con el permiso firmado, sin tokens de la web.

- **Subida:** el servidor vuelve a corregir cada intento y recién ahí acredita monedas y progreso. Vale su nota; si
  no coincide con la del dispositivo, el intento queda para revisar (se ve en el historial y en el perfil). El
  progreso que calcula el dispositivo no se acredita en la plataforma.
- **Bajada:** el progreso de la cuenta (se queda el mayor avance) y los intentos hechos en la web, de a tandas.
- **Renovación:** cada sincronización trae un permiso nuevo por 3 meses, con los roles de hoy. Si la contraseña
  cambió en la web, el perfil pide la nueva; si la cuenta está suspendida, se bloquea después de subir lo pendiente.
  Si la cuenta se dio de baja (`CUENTA_BAJA`), no se sube nada y el perfil se borra del dispositivo.
- **Usuarios locales:** sus datos no salen del dispositivo hasta que se vinculan a una cuenta (`POST
  /api/offline/vincular`, desde el perfil). Su historial, su progreso y sus favoritos pasan a la cuenta, y el servidor
  corrige cada intento con el sorteo que tuvo como usuario local.

En el historial de la web, los intentos que subieron desde la app figuran como «hecho sin conexión».

## Lo que se ve en la app

La web se compila con `VITE_APP_SIN_CONEXION=true`. Así, el menú no muestra lo que depende del servidor o de otras
personas (clases, tareas, pagos, mensajes, calendario, monedas, encuestas, gestión de aulas: `SOLO_CON_RED` en
`apps/web/src/nav/navConfig.ts`), y el perfil cambia la verificación en dos pasos y «Descargar mis datos / Dar de baja»
por «Tus datos en este dispositivo». La política de privacidad tiene un punto propio para la app (el 9).

## Datos del dispositivo

- `GET /api/offline/mis-datos`: todo lo que el dispositivo guarda del perfil, en JSON, sin la huella ni el permiso.
- `DELETE /api/offline/perfil`: borra el perfil con todo lo suyo (`src/api-local/borrado.ts`); el contenido descargado
  queda. Con sesión pide `{ password }`; sin sesión, `{ identifier, password }` (pantalla «Quitar un perfil de este
  dispositivo», para un perfil bloqueado). Si una cuenta de la plataforma tiene eventos sin subir, responde 409
  `PENDIENTES`; con `descartarPendientes: true` borra igual. Los fallos de contraseña cuentan para la espera, como al
  entrar.

## Distribución

| Sistema | Qué se instala | Cómo se arma |
|---|---|---|
| Android 8 o posterior | APK firmado (ARM de 64 y 32 bits) | `pnpm android:apk`, en el servidor |
| Windows 10 y 11 | Instalador NSIS con WebView2 adentro (no necesita internet), de 64 y 32 bits | GitHub Actions |
| Huayra 6.5 y Debian 12 | `.deb` de la app de escritorio (compilado en Debian 12) | GitHub Actions |
| Huayra 5 y 6, otros Linux | «Modo navegador»: `.tar.gz` (sin contraseña de administrador) y `.deb`, de 64 y 32 bits | `pnpm linux:navegador` o GitHub Actions |

**Modo navegador.** Huayra 5 y 6 no tienen la `libwebkit2gtk-4.1` que pide Tauri 2. `navegador/` es un programa
estático (musl, sin bibliotecas del sistema) que atiende la web y el almacén en `http://127.0.0.1:47811` y abre la app
en el navegador del equipo. Usa la misma carpeta de datos que la app de escritorio (`~/.local/share/ar.virtualbook.offline`)
y se cierra solo a los 20 minutos sin uso (la web le manda un latido cada 2).

- El almacén solo atiende al navegador que entró con un código de un solo uso, que el programa le pasa al abrirlo
  (vence a los 2 minutos) y se cambia por una cookie `HttpOnly` y `SameSite=Strict` con la llave del dispositivo
  (`navegador.llave`, permisos 600). Además se rechazan los pedidos a otro `Host` (DNS que apunta a 127.0.0.1) y con
  otro `Origin`. Si la app se abre con la dirección escrita a mano, sin la cookie, pide abrirla desde el menú.
- Si ya está abierto, abrirlo otra vez pide un código a la copia que corre y abre otra pestaña.
- El puerto es fijo porque la web guarda su sesión por origen y la plataforma lo acepta en `CORS_ORIGIN`.
- Para compilarlo estático hace falta `cargo-zigbuild` con zig (los dos destinos) o `musl-tools` (solo 64 bits).
- Probado con Chromium. Falta probarlo en Firefox ESR 102 y en una netbook con Huayra 5 o 6.

**GitHub Actions** (`.github/workflows/app-sin-conexion.yml`): se corre a mano o con una etiqueta `app-v*`. Compila la
web, los instaladores de Windows (en `windows-latest`), el `.deb` de escritorio (en un contenedor Debian 12) y el modo
navegador, y deja todo en el artefacto «instaladores». La dirección de la API y la clave pública salen de las
variables del repositorio `OFFLINE_API_REMOTA` y `OFFLINE_CLAVE_PUBLICA`. Los instaladores de Windows no están
firmados: Windows SmartScreen avisa la primera vez.

Con una etiqueta `app-vX.Y.Z` también publica una **Release de GitHub** con los instaladores (mismos nombres que
`/descargas`) y `SHA256SUMS.txt`. La etiqueta tiene que coincidir con la versión de `src-tauri/tauri.conf.json`; si
no, el paso falla sin publicar. El APK no sale de Actions (necesita la clave propia): se agrega después con
`gh release upload app-vX.Y.Z virtualbook-X.Y.Z-android.apk`.

**Publicación.** `pnpm descargas --instaladores DIR --salida DIR [--paquetes DIR]` (`scripts/armar-descargas.ts`)
copia los instaladores con nombres claros (`virtualbook-0.1.0-windows-x64.exe`), calcula sus hashes y escribe
`descargas.json`. Con `--paquetes` arma además el **paquete completo** para el modo autónomo: un `.zip` con todos los
instaladores, todos los paquetes, un `LEEME.txt` y `SHA256SUMS.txt`, para copiar a un pendrive. La API sirve la
carpeta desde `OFFLINE_DESCARGAS_DIR` en `GET /api/offline/descargas`, y la web la muestra en `/descargas`.

Para el modo autónomo (la plataforma ya no está en producción), compilar con `VITE_MODO_AUTONOMO=true` (en Actions,
la opción «Modo autónomo») antes de armar el paquete completo.

## Comandos

- `pnpm test` y `pnpm tipos`: pruebas y tipos de la API local.
- `api/tests/integracion-pg/offline-sync.pg.test.ts`: la sincronización de punta a punta contra Postgres (corre con
  `PG_TEST_DATABASE_URL` apuntando a una base `*_test`).
- `api/tests/integracion-pg/offline-escenarios.pg.test.ts`: los casos difíciles, también contra Postgres: modo avión,
  intentos repetidos (con una respuesta de sincronización perdida), notas que no coinciden (y un cuestionario que se
  actualizó mientras tanto), permiso vencido, cuenta suspendida y cuenta dada de baja.
- `cargo test -p vb-nucleo -p vb-navegador`: pruebas de las bases y del modo navegador.
- `pnpm linux:navegador`: los paquetes del modo navegador de 64 y 32 bits, en `dist/`.
- `pnpm descargas ...`: la carpeta de descargas y el paquete completo (ver «Distribución»).
- `pnpm android:apk-prueba`: APK de prueba para el emulador (x86_64).
- `pnpm android:apk`: APK firmado para teléfonos (ARM). La firma sale de `keystore.properties` fuera del
  repositorio (`VB_KEYSTORE_PROPS` cambia la ruta).
