# Backend — APIs REST (cuestionario, 24 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — API

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["api"]

tipo: mc
opciones_explicitas: ["Un contrato por el que un programa pide cosas a otro", "Un tipo de base de datos", "Un lenguaje", "Un monitor"]
respuesta: "Un contrato por el que un programa pide cosas a otro"

enunciado: "¿Qué es una API?"

explicacion: |
  Define qué se puede pedir y cómo.
```

### 2 — REST

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["rest"]

tipo: mc
opciones_explicitas: ["Un estilo para diseñar APIs sobre HTTP, basado en recursos", "Un lenguaje", "Una base de datos", "Un navegador"]
respuesta: "Un estilo para diseñar APIs sobre HTTP, basado en recursos"

enunciado: "¿Qué es REST?"

explicacion: |
  No es un estándar ni una tecnología.
```

### 3 — Recurso

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["recursos"]

tipo: mc
opciones_explicitas: ["Una cosa con identidad, como un usuario o un pedido", "Un verbo", "Un archivo de imagen", "Un servidor"]
respuesta: "Una cosa con identidad, como un usuario o un pedido"

enunciado: "¿Qué es un recurso en REST?"

explicacion: |
  Se identifica con una URL.
```

### 4 — Ruta

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["rutas"]

tipo: mc
opciones_explicitas: ["`GET /usuarios/42`", "`GET /obtenerUsuario?id=42`", "`POST /verUsuario`", "`GET /usuario/get/42`"]
respuesta: "`GET /usuarios/42`"

enunciado: "¿Cuál es una ruta bien diseñada para ver al usuario 42?"

explicacion: |
  Sustantivos en plural; el verbo es el método HTTP.
```

### 5 — Colección

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["rutas"]

tipo: mc
opciones_explicitas: ["Los pedidos del usuario 42", "Los usuarios del pedido 42", "Un error", "Todos los pedidos"]
respuesta: "Los pedidos del usuario 42"

enunciado: "¿Qué representa `/usuarios/42/pedidos`?"

explicacion: |
  Se anidan los recursos relacionados.
```

### 6 — GET

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["get"]

tipo: mc
opciones_explicitas: ["Para leer", "Para crear", "Para borrar", "Para reemplazar"]
respuesta: "Para leer"

enunciado: "¿Para qué se usa GET?"

explicacion: |
  No debe cambiar datos.
```

### 7 — POST

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["post"]

tipo: mc
opciones_explicitas: ["Para crear un recurso o ejecutar una acción", "Para leer", "Solo para borrar", "Para ver cabeceras"]
respuesta: "Para crear un recurso o ejecutar una acción"

enunciado: "¿Para qué se usa POST?"

explicacion: |
  No es idempotente.
```

### 8 — PUT

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["put"]

tipo: mc
opciones_explicitas: ["Reemplaza un recurso completo", "Lo lee", "Lo borra", "Lo modifica parcialmente"]
respuesta: "Reemplaza un recurso completo"

enunciado: "¿Qué hace PUT?"

explicacion: |
  PATCH modifica parte.
```

### 9 — DELETE

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["delete"]

tipo: mc
opciones_explicitas: ["Borra un recurso", "Lo crea", "Lo lee", "Lo reemplaza"]
respuesta: "Borra un recurso"

enunciado: "¿Qué hace DELETE?"

explicacion: |
  Es idempotente.
```

### 10 — Seguro

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["seguro"]

tipo: mc
opciones_explicitas: ["Que no modifica nada en el servidor", "Que está cifrado", "Que requiere contraseña", "Que es rápido"]
respuesta: "Que no modifica nada en el servidor"

enunciado: "¿Qué significa que un método sea seguro?"

explicacion: |
  GET es seguro.
```

### 11 — Idempotente

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["idempotente"]

tipo: mc
opciones_explicitas: ["Que repetir la petición produce el mismo resultado final", "Que se ejecuta una sola vez", "Que es rápido", "Que es seguro"]
respuesta: "Que repetir la petición produce el mismo resultado final"

enunciado: "¿Qué significa idempotente?"

explicacion: |
  Borrar dos veces deja el recurso borrado.
```

### 12 — GET que modifica

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["get"]

tipo: mc
opciones_explicitas: ["Porque los navegadores y buscadores lo repiten y lo precargan", "Porque no se puede", "Por velocidad", "Por costumbre"]
respuesta: "Porque los navegadores y buscadores lo repiten y lo precargan"

enunciado: "¿Por qué un GET no debe modificar datos?"

explicacion: |
  Puede haber efectos no deseados.
```

### 13 — 200

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["Éxito", "No encontrado", "Error del servidor", "Prohibido"]
respuesta: "Éxito"

enunciado: "¿Qué indica el código 200?"

explicacion: |
  201 es "creado".
```

### 14 — 201

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["Recurso creado", "Éxito sin crear", "No encontrado", "Redirección"]
respuesta: "Recurso creado"

enunciado: "¿Qué indica el código 201?"

explicacion: |
  Típico de un POST exitoso.
```

### 15 — 404

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["El recurso no existe", "Error del servidor", "No autenticado", "Éxito"]
respuesta: "El recurso no existe"

enunciado: "¿Qué indica 404?"

explicacion: |
  No se debe devolver 200 con un mensaje de error.
```

### 16 — 401 y 403

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["401: no autenticado; 403: autenticado pero sin permiso", "Son iguales", "401: sin permiso; 403: sin sesión", "Ninguna se usa"]
respuesta: "401: no autenticado; 403: autenticado pero sin permiso"

enunciado: "¿Qué diferencia hay entre 401 y 403?"

explicacion: |
  Son errores del cliente.
```

### 17 — 500

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["Un error del servidor", "Un error del cliente", "Un éxito", "Una redirección"]
respuesta: "Un error del servidor"

enunciado: "¿Qué indica un código 5xx?"

explicacion: |
  500 es error interno.
```

### 18 — 429

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["codigos"]

tipo: mc
opciones_explicitas: ["Demasiadas peticiones (rate limit)", "No encontrado", "Éxito", "Redirección"]
respuesta: "Demasiadas peticiones (rate limit)"

enunciado: "¿Qué indica 429?"

explicacion: |
  Protege la API de abusos.
```

### 19 — Content-Type

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["cabeceras"]

tipo: mc
opciones_explicitas: ["Que el cuerpo está en formato JSON", "Que no hay cuerpo", "Que es una imagen", "Que es HTML"]
respuesta: "Que el cuerpo está en formato JSON"

enunciado: "¿Qué indica la cabecera `Content-Type: application/json`?"

explicacion: |
  Informa el formato.
```

### 20 — Paginación

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["paginacion"]

tipo: mc
opciones_explicitas: ["Para no devolver miles de registros de una vez", "Para ocultar datos", "Para cifrar", "Para validar"]
respuesta: "Para no devolver miles de registros de una vez"

enunciado: "¿Para qué sirve la paginación?"

explicacion: |
  Se usa con `pagina` y `limite`.
```

### 21 — Versionado

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["versionado"]

tipo: mc
opciones_explicitas: ["Para cambiarla sin romper a quienes ya la usan", "Para ocultarla", "Para acelerarla", "Para cifrarla"]
respuesta: "Para cambiarla sin romper a quienes ya la usan"

enunciado: "¿Para qué se versiona una API (`/v1/...`)?"

explicacion: |
  Se mantiene la versión anterior un tiempo.
```

### 22 — Sin estado

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "intermedio"
  tags: ["stateless"]

tipo: mc
opciones_explicitas: ["Cada petición trae todo lo necesario; el servidor no recuerda la anterior", "Que no usa datos", "Que no tiene errores", "Que no usa HTTP"]
respuesta: "Cada petición trae todo lo necesario; el servidor no recuerda la anterior"

enunciado: "¿Qué significa que una API sea sin estado (stateless)?"

explicacion: |
  Facilita escalar.
```

### 23 — Errores

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["errores"]

tipo: mc
opciones_explicitas: ["Con un código y un mensaje claro, sin revelar detalles internos", "Con la traza completa", "Vacío", "Con la consulta SQL"]
respuesta: "Con un código y un mensaje claro, sin revelar detalles internos"

enunciado: "¿Cómo debe ser el cuerpo de un error?"

explicacion: |
  Los detalles internos se registran en un log.
```

### 24 — HTTPS

```
metadata:
  materia: "backend"
  tema: "apis_rest"
  nivel: "basico"
  tags: ["https"]

tipo: mc
opciones_explicitas: ["HTTPS", "HTTP", "FTP", "Telnet"]
respuesta: "HTTPS"

enunciado: "¿Qué protocolo se usa para proteger las APIs?"

explicacion: |
  Cifra el tráfico.
```

