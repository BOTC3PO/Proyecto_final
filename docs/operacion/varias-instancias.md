# Correr la API en varias instancias (D5)

El servidor tiene 24 hilos y la API usa uno. Con 2 a 4 instancias detrás de Nginx se aprovecha el resto y,
si una se cae, las otras siguen atendiendo. Esto es lo que cada pieza necesita.

## Qué ya está resuelto en el código

| Pieza | Cómo funciona con varias instancias |
|---|---|
| Sesión (token de acceso) | Firmada con `JWT_SECRET`: cualquier instancia la valida. |
| Verificación en dos pasos | El desafío va firmado (HMAC), no queda en memoria. |
| Tareas programadas (conciliación de pagos, conservación de datos) | Toman un bloqueo en Postgres (`lib/pg-lock.ts`): corre una sola a la vez. |
| Límite de pedidos y de subidas de archivos | Con `REDIS_URL` se cuentan en Redis, compartidos. Sin Redis, cada instancia cuenta por su lado (el límite real se multiplica por la cantidad de instancias). |
| Caché de sesión (`AUTH_CACHE_SEGUNDOS`, 15 s) | Cada instancia vacía la suya cuando escribe en usuarios o membresías. Un ban o una baja hecha en otra instancia vale a lo sumo 15 s después. |
| Archivos subidos | Están en el disco del servidor: todas las instancias ven la misma carpeta. |
| Diccionario (SQLite, solo lectura) | Cada instancia abre el archivo; el sistema operativo comparte la caché. Consulta más lenta medida: 0,15 ms. |

## Qué hay que instalar (con aprobación)

1. **Redis local** (`sudo apt install redis-server`) y en `api/.env`: `REDIS_URL=redis://127.0.0.1:6379`.
2. **Servicio por puerto**: `config/monolitico-api@.service.propuesta` en la carpeta del servidor. Es un
   servicio de usuario (no necesita `sudo`); las instrucciones están en el encabezado del archivo.
3. **Nginx**: el bloque `upstream` de `config/nginx-upstream-api.inc.propuesta` y el cambio de `proxy_pass`
   (necesita `sudo`).

## Orden recomendado

1. Instalar Redis y poner `REDIS_URL` con una sola instancia; comprobar que los límites siguen funcionando.
2. Levantar la segunda instancia en 5051 y probarla directo (`curl http://127.0.0.1:5051/health`).
3. Cambiar Nginx al upstream y recargar.
4. Recién entonces pasar a 3 o 4 instancias si la carga lo pide.

## Qué todavía no conviene

- Más de un **servidor**: ahí la media tendría que ir a un almacenamiento de objetos (D7; el código ya
  soporta `MEDIA_STORAGE=s3`).
