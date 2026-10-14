# Backend — APIs REST (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../informatica/protocolo-http-peticion-respuesta/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/backend/apis-rest/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una API

Una **API** (interfaz de programación de aplicaciones) es el **contrato** por el que un programa **pide cosas a otro**. Una **API web** la ofrece un servidor por **HTTP**: el cliente (una app, una página, otro servidor) **envía una petición** y recibe una **respuesta**, casi siempre en **JSON**.

**REST** es un **estilo** para diseñarlas, no un estándar ni una tecnología. Se apoya en HTTP y organiza todo en **recursos** (cosas con identidad: un usuario, un pedido).

---

## 2. Recursos y rutas

Cada recurso tiene una **URL** que lo identifica. Se usan **sustantivos en plural**, no verbos:

| Ruta | Significa |
|:--|:--|
| `/usuarios` | la colección de usuarios |
| `/usuarios/42` | el usuario 42 |
| `/usuarios/42/pedidos` | los pedidos de ese usuario |

**Mal:** `/obtenerUsuario?id=42`, `/borrarPedido`. **Bien:** `GET /usuarios/42`, `DELETE /pedidos/7`.

---

## 3. Métodos HTTP

| Método | Para qué | ¿Seguro? | ¿Idempotente? |
|:--|:--|:--|:--|
| **GET** | **leer** | sí | sí |
| **POST** | **crear** (o ejecutar una acción) | no | no |
| **PUT** | **reemplazar** un recurso completo | no | sí |
| **PATCH** | **modificar** parte de un recurso | no | depende |
| **DELETE** | **borrar** | no | sí |

- **Seguro:** no modifica nada en el servidor.
- **Idempotente:** repetir la misma petición **da el mismo resultado final** (borrar dos veces el mismo recurso lo deja borrado).
- Un **GET nunca debe cambiar datos** (los navegadores y buscadores los repiten y los "pre-cargan").

---

## 4. Códigos de estado

| Rango | Significa | Ejemplos |
|:--|:--|:--|
| **2xx** | éxito | **200** OK, **201** Creado, **204** Sin contenido |
| **3xx** | redirección | **301** movido, **304** no modificado |
| **4xx** | **error del cliente** | **400** petición mala, **401** no autenticado, **403** prohibido, **404** no existe, **409** conflicto, **422** datos inválidos, **429** demasiadas peticiones |
| **5xx** | **error del servidor** | **500** error interno, **503** no disponible |

Se elige el código que **mejor describe** lo ocurrido: un recurso que no existe es **404**, no un **200** con un mensaje de error.

---

## 5. Cuerpo, cabeceras y formato

- **Cabeceras:** `Content-Type: application/json` (qué se envía), `Accept` (qué se acepta), `Authorization` (credenciales).
- **Cuerpo (body):** el JSON de un `POST` o `PUT`.
- **Respuestas consistentes:** misma estructura siempre; para errores, un cuerpo con un **código y un mensaje** claros que **no revelen** detalles internos.
- **JSON:** nombres de campos **coherentes** (por ejemplo, `camelCase`).
- Las **fechas** en formato **ISO 8601** (`2026-10-14T15:30:00Z`).

---

## 6. Diseño de buenas APIs

1. **Paginación** en las colecciones (`?pagina=2&limite=20`): no devolver miles de registros.
2. **Filtros y orden** por parámetros de consulta (`?estado=pagado&orden=-fecha`).
3. **Validar** todo lo que llega.
4. **Versionado** (`/v1/usuarios`) para cambiar sin romper a quienes ya la usan.
5. **Documentar** (por ejemplo, con **OpenAPI/Swagger**).
6. **Límite de peticiones** (*rate limit*) para evitar abusos.
7. **HTTPS** siempre.
8. **Sin estado** (*stateless*): cada petición trae **todo lo necesario** (por ejemplo, un token); el servidor no recuerda la anterior.

---

## 7. Probar una API

Herramientas: **curl**, **Postman**, **Insomnia**, o código. Ejemplo:

```
curl -X POST https://api.ejemplo.com/v1/usuarios \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Ana"}'
```

Se verifican **código de estado**, **cabeceras** y **cuerpo**, también para los **casos de error**.
