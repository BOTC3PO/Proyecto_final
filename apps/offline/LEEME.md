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

## Comandos

- `pnpm test` y `pnpm tipos`: pruebas y tipos de la API local.
- `cargo test -p vb-nucleo`: pruebas de las bases.
- `pnpm android:apk-prueba`: APK de prueba para el emulador (x86_64).
- `pnpm android:apk`: APK firmado para teléfonos (ARM). La firma sale de `keystore.properties` fuera del
  repositorio (`VB_KEYSTORE_PROPS` cambia la ruta).
