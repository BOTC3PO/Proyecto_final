# App sin conexión (Tauri)

La misma web de Virtual Book, con una API local que responde dentro del dispositivo. El plan completo está en
`docs/plan/app-sin-conexion-tauri.md`.

## Partes

- `src/arranque.ts`: prepara las bases e instala la API local antes de que cargue la web.
- `src/api-local/`: la API local (TypeScript). Responde con el mismo formato que el servidor; lo que necesita red
  contesta 503 con `code: "SIN_CONEXION"`.
- `nucleo/`: las dos bases SQLite del dispositivo (`contenido` y `progreso`), en Rust y sin depender de Tauri.
- `src-tauri/`: la app de escritorio y de Android.

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
4. La API tiene que aceptar el origen de la app en `CORS_ORIGIN` (`http://tauri.localhost` en Android y Windows).

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
  cambió en la web, el perfil pide la nueva; si la cuenta está suspendida o dada de baja, se bloquea después de subir
  lo pendiente.
- **Usuarios locales:** sus datos no salen del dispositivo hasta que se vinculan a una cuenta (`POST
  /api/offline/vincular`, desde el perfil). Su historial, su progreso y sus favoritos pasan a la cuenta, y el servidor
  corrige cada intento con el sorteo que tuvo como usuario local.

En el historial de la web, los intentos que subieron desde la app figuran como «hecho sin conexión».

## Comandos

- `pnpm test` y `pnpm tipos`: pruebas y tipos de la API local.
- `api/tests/integracion-pg/offline-sync.pg.test.ts`: la sincronización de punta a punta contra Postgres (corre con
  `PG_TEST_DATABASE_URL` apuntando a una base `*_test`).
- `cargo test -p vb-nucleo`: pruebas de las bases.
- `pnpm android:apk-prueba`: APK de prueba para el emulador (x86_64).
- `pnpm android:apk`: APK firmado para teléfonos (ARM). La firma sale de `keystore.properties` fuera del
  repositorio (`VB_KEYSTORE_PROPS` cambia la ruta).
