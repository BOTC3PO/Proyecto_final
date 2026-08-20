### 1 — Estructura de respuesta JSON en GET
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["json", "get", "estructura"]
respuesta: verdadero
tipo: vf
enunciado:
  "Al implementar un endpoint GET para listar recursos, la convención RESTful estándar dicta que el cuerpo de la respuesta debe contener un objeto JSON con una clave que agrupa el array de elementos (ej: `{'items': [...]}`) en lugar de devolver el array JSON directamente en la raíz, para facilitar la paginación y metadatos futuros."
pasos:
  - "Analizar la semántica de REST para colecciones."
  - "Verificar si devolver un array en la raíz (`[1, 2]`) es la práctica recomendada frente a un objeto envoltorio (`{'data': [...]}`)."
  - "Concluir que el objeto envoltorio es preferible para extensibilidad."
explicacion:
  "Devolver un array en la raíz complica la adición de metadatos de paginación, enlaces de navegación o estados de error sin romper la estructura. El estándar moderno prefiere un objeto contenedor."
```

### 2 — Código de estado para creación exitosa
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "post", "creacion"]
respuesta: "201"
tipo: completar
enunciado:
  "Cuando un cliente realiza una solicitud POST exitosa para crear un nuevo recurso en una API REST, el servidor debe devolver el código de estado HTTP _____ para indicar que el recurso ha sido creado."
pasos:
  - "Identificar la acción: creación de recurso."
  - "Buscar el código HTTP correspondiente a 'Created'."
  - "Escribir el código numérico."
explicacion:
  "El código 201 Created es el estándar HTTP para indicar que la solicitud ha dado lugar a la creación de un recurso."
respuestas_validas:
  - "201"
  - "201 Created"
```

### 3 — Método HTTP para actualización parcial
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-method", "patch", "actualizacion"]
opciones_explicitas:
  - "PUT"
  - "PATCH"
  - "UPDATE"
  - "MERGE"
respuesta: "PATCH"
tipo: mc
enunciado:
  "¿Cuál es el método HTTP estándar definido por RFC 5789 para solicitar una modificación parcial de un recurso existente, a diferencia de PUT que suele implicar una sustitución completa?"
pasos:
  - "Diferenciar entre actualización total y parcial."
  - "Identificar el verbo HTTP específico para parches parciales."
  - "Seleccionar la opción correcta."
explicacion:
  "PATCH se diseñó específicamente para aplicar modificaciones parciales a un recurso, mientras que PUT generalmente reemplaza el recurso completo."
```

### 4 — Encabezado para control de caché
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-headers", "cache", "etag"]
respuesta: "ETag"
tipo: completar
enunciado:
  "Para implementar validación condicional y reducir el ancho de banda enviando solo cambios, el servidor debe incluir el encabezado HTTP _____ en la respuesta, que contiene un identificador único (hash) del contenido actual del recurso."
pasos:
  - "Identificar el mecanismo de validación condicional en HTTP."
  - "Determinar el nombre del encabezado que transporta el hash de versión."
  - "Escribir el nombre del encabezado."
explicacion:
  "El encabezado ETag permite al cliente comparar la versión cacheada con la nueva, evitando descargas innecesarias si coinciden."
respuestas_validas:
  - "ETag"
  - "etag"
  - "Entity Tag"
```

### 5 — Semántica de eliminación suave
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["delete", "soft-delete", "lifecycle"]
respuesta: "falso"
tipo: vf
enunciado:
  "En una API REST estricta, el método DELETE debe eliminar físicamente los datos del almacenamiento permanente inmediatamente para garantizar la integridad de la base de datos, sin opción de recuperación."
pasos:
  - "Analizar el comportamiento estándar de DELETE."
  - "Evaluar si la eliminación física inmediata es un requisito absoluto o una implementación específica."
  - "Determinar si las APIs modernas permiten 'soft deletes'."
explicacion:
  "REST no obliga a la eliminación física inmediata. Muchas APIs implementan 'soft delete' marcando el recurso como inactivo para preservar historiales o permitir recuperación."
```

### 6 — Código de estado para recurso no encontrado
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "404", "error-handling"]
respuesta: "404"
tipo: completar
enunciado:
  "Si un cliente solicita la obtención de un recurso mediante GET `/users/999` y dicho ID no existe en el sistema, el servidor debe responder con el código de estado HTTP _____."
pasos:
  - "Identificar la situación: recurso inexistente."
  - "Buscar el código HTTP 'Not Found'."
  - "Escribir el código numérico."
explicacion:
  "404 Not Found indica que el servidor no puede encontrar el recurso solicitado en la URI especificada."
respuestas_validas:
  - "404"
  - "404 Not Found"
```

### 7 — Patrón de versionado por URI
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["versioning", "uri", "rest"]
respuesta: "/api/v1/resource"
tipo: completar
enunciado:
  "En el patrón de versionado de APIs REST por URI, si la versión actual es la 1, ¿cuál es la ruta base estándar para el recurso 'usuarios'?"
pasos:
  - "Identificar el patrón de versionado solicitado (URI path)."
  - "Construir la ruta incluyendo el prefijo /api y la versión."
  - "Añadir el nombre del recurso."
explicacion:
  "El versionado por URI coloca la versión como parte de la ruta, típicamente después de /api, ej: /api/v1/recursos."
respuestas_validas:
  - "/api/v1/resource"
  - "/api/v1/usuarios"
  - "/v1/resource"
```

### 8 — Encabezado de autenticación Bearer
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["oauth2", "jwt", "authorization-header"]
respuesta: "Authorization"
tipo: completar
enunciado:
  "Para enviar un token de acceso JWT en una solicitud protegida, el cliente debe incluir el token en el encabezado HTTP llamado _____ con el prefijo 'Bearer '."
pasos:
  - "Identificar el encabezado estándar para credenciales de autenticación en HTTP."
  - "Recordar el nombre específico usado por OAuth2/JWT."
  - "Escribir el nombre del encabezado."
explicacion:
  "El encabezado Authorization es el estándar para transportar credenciales, usando el esquema Bearer para tokens."
respuestas_validas:
  - "Authorization"
  - "authorization"
```

### 9 — Código de estado para error de validación
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "422", "validation"]
respuesta: "422"
tipo: completar
enunciado:
  "Cuando una solicitud POST es sintácticamente válida pero contiene datos semánticamente incorrectos (ej: campos requeridos faltantes o formato de email inválido), el código de estado HTTP recomendado (RFC 4918) es _____."
pasos:
  - "Diferenciar entre error de sintaxis (400) y error semántico."
  - "Identificar el código 422 Unprocessable Entity."
  - "Escribir el código."
explicacion:
  "422 Unprocessable Entity se usa específicamente cuando el servidor entiende el contenido del tipo de solicitud pero no puede procesarlo debido a errores semánticos."
respuestas_validas:
  - "422"
  - "422 Unprocessable Entity"
```

### 10 — HATEOAS en respuesta de recurso
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["hateoas", "links", "rest-constraints"]
respuesta: "verdadero"
tipo: vf
enunciado:
  "Para cumplir con el principio de HATEOAS (Hypermedia As The Engine Of Application State), una respuesta JSON de un recurso debe incluir enlaces ('links') que indiquen las acciones posibles disponibles para ese recurso en su estado actual."
pasos:
  - "Definir HATEOAS."
  - "Verificar si los enlaces son parte del payload del recurso."
  - "Confirmar que esto permite la navegación dinámica."
explicacion:
  "HATEOAS exige que la API proporcione información sobre las acciones posibles a través de hiperenlaces en la respuesta, no solo datos estáticos."
```

### 11 — Código de estado para no autorizado
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "401", "authentication"]
respuesta: "401"
tipo: completar
enunciado:
  "Si una solicitud a un endpoint protegido carece de credenciales de autenticación válidas o estas son incorrectas, el servidor debe responder con el código de estado HTTP _____."
pasos:
  - "Identificar la falta de autenticación."
  - "Buscar el código 'Unauthorized'."
  - "Escribir el código."
explicacion:
  "401 Unauthorized indica que la solicitud requiere autenticación de usuario válida."
respuestas_validas:
  - "401"
  - "401 Unauthorized"
```

### 12 — Método HTTP para consulta compleja
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-method", "post", "query-complex"]
respuesta: "POST"
tipo: completar
enunciado:
  "Cuando una consulta requiere parámetros de filtrado muy complejos que exceden la longitud máxima de la URL o son estructurados (JSON), se recomienda usar el método HTTP _____ enviando los filtros en el cuerpo de la solicitud, en lugar de GET con query params."
pasos:
  - "Analizar limitaciones de GET (URL length, seguridad de datos sensibles)."
  - "Identificar el método alternativo para payloads complejos."
  - "Escribir el método."
explicacion:
  "Aunque REST prefiere GET para consultas, POST se usa comúnmente para 'queries complejas' o 'search endpoints' cuando GET no es viable."
respuestas_validas:
  - "POST"
  - "post"
```

### 13 — Código de estado para conflicto de recursos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "409", "conflict"]
respuesta: "409"
tipo: completar
enunciado:
  "Si un intento de PUT falla porque el recurso actual en el servidor tiene un estado que impide la actualización (ej: versión desactualizada o conflicto de datos), el código de estado HTTP adecuado es _____."
pasos:
  - "Identificar la situación de conflicto de estado."
  - "Buscar el código 'Conflict'."
  - "Escribir el código."
explicacion:
  "409 Conflict indica que la solicitud no se puede completar debido a un conflicto con el estado actual del recurso."
respuestas_validas:
  - "409"
  - "409 Conflict"
```

### 14 — Encabezado CORS para credenciales
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["cors", "security", "credentials"]
respuesta: "true"
tipo: completar
enunciado:
  "Para permitir que un navegador envíe cookies o tokens de autenticación en solicitudes cruzadas (CORS), el servidor debe configurar el encabezado `Access-Control-Allow-Credentials` con el valor _____."
pasos:
  - "Identificar el encabezado CORS para credenciales."
  - "Determinar el valor booleano aceptado."
  - "Escribir el valor literal."
explicacion:
  "El valor debe ser la cadena literal 'true' (no el booleano JS true, sino el string HTTP) para habilitar el envío de credenciales."
respuestas_validas:
  - "true"
  - "True"
```

### 15 — Semántica de paginación offset
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["pagination", "offset", "performance"]
respuesta: "falso"
tipo: vf
enunciado:
  "El uso de paginación basada en offset (`LIMIT 10000, 10`) es siempre la estrategia más eficiente para grandes conjuntos de datos en bases de datos relacionales, ya que evita el escaneo de índices completos."
pasos:
  - "Analizar el rendimiento de OFFSET en grandes tablas."
  - "Evaluar si el escaneo de índices se evita o se agrava."
  - "Concluir sobre la eficiencia."
explicacion:
  "El offset alto obliga a la base de datos a leer y descartar todas las filas anteriores, lo que es ineficiente. Se prefiere paginación por clave cursor (keyset)."
```

### 16 — Código de estado para método no permitido
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "405", "method"]
respuesta: "405"
tipo: completar
enunciado:
  "Si un cliente envía una solicitud DELETE a un endpoint que solo soporta GET y POST, el servidor debe responder con el código de estado HTTP _____."
pasos:
  - "Identificar la situación: método incorrecto para el recurso."
  - "Buscar el código 'Method Not Allowed'."
  - "Escribir el código."
explicacion:
  "405 Method Not Allowed indica que el método de solicitud no está soportado por el recurso identificado."
respuestas_validas:
  - "405"
  - "405 Method Not Allowed"
```

### 17 — Encabezado para limitación de tasa
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["rate-limiting", "headers", "throttling"]
respuesta: "X-RateLimit-Remaining"
tipo: completar
enunciado:
  "Para informar al cliente cuántas solicitudes le quedan en el periodo actual de limitación de tasa, el servidor debe incluir el encabezado personalizado o estándar _____ en la respuesta."
pasos:
  - "Identificar el encabezado común para cuota restante."
  - "Escribir el nombre del encabezado."
explicacion:
  "X-RateLimit-Remaining es un encabezado ampliamente adoptado (aunque no RFC estandarizado estrictamente) para indicar la cuota restante."
respuestas_validas:
  - "X-RateLimit-Remaining"
  - "X-Rate-Limit-Remaining"
  - "RateLimit-Remaining"
```

### 18 — Código de estado para error de servidor interno
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "500", "error"]
respuesta: "500"
tipo: completar
enunciado:
  "Cuando ocurre un error inesperado en el código del servidor backend (ej: excepción no capturada) que impide cumplir con la solicitud, el código de estado HTTP estándar es _____."
pasos:
  - "Identificar la falla interna del servidor."
  - "Buscar el código 'Internal Server Error'."
  - "Escribir el código."
explicacion:
  "500 Internal Server Error es la respuesta genérica cuando no hay un código más específico disponible."
respuestas_validas:
  - "500"
  - "500 Internal Server Error"
```

### 19 — Semántica de recursos anidados
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["uri-design", "nesting", "resources"]
respuesta: "/users/{userId}/posts"
tipo: completar
enunciado:
  "Siguiendo las mejores prácticas de diseño de URI para recursos anidados, ¿cuál es la ruta correcta para obtener los comentarios de un post específico perteneciente a un usuario?"
pasos:
  - "Determinar la jerarquía: Usuario -> Post -> Comentario."
  - "Construir la URI con parámetros de ruta."
  - "Escribir la ruta."
explicacion:
  "La jerarquía debe reflejarse en la URI: /usuarios/{id}/posts/{id}/comentarios."
respuestas_validas:
  - "/users/{userId}/posts/{postId}/comments"
  - "/users/{id}/posts/{id}/comments"
  - "/usuarios/{id}/posts/{id}/comentarios"
```

### 20 — Código de estado para no procesable (JSON inválido)
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "400", "json-syntax"]
respuesta: "400"
tipo: completar
enunciado:
  "Si el cuerpo de la solicitud contiene JSON mal formado (ej: comillas faltantes), el servidor no puede entender la solicitud y debe responder con el código de estado HTTP _____."
pasos:
  - "Identificar el error de sintaxis del cuerpo."
  - "Buscar el código 'Bad Request'."
  - "Escribir el código."
explicacion:
  "400 Bad Request se usa cuando la sintaxis de la solicitud es inválida y el servidor no puede procesarla."
respuestas_validas:
  - "400"
  - "400 Bad Request"
```

### 21 — Encabezado para sugerir formato de respuesta
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-headers", "negotiation", "accept"]
respuesta: "Accept"
tipo: completar
enunciado:
  "Para indicar al servidor que el cliente prefiere recibir la respuesta en formato XML en lugar de JSON, el cliente debe incluir el encabezado HTTP _____ con el valor `application/xml`."
pasos:
  - "Identificar el encabezado de negociación de contenido."
  - "Escribir el nombre del encabezado."
explicacion:
  "El encabezado Accept define los tipos de medio (MIME) que el cliente puede entender."
respuestas_validas:
  - "Accept"
  - "accept"
```

### 22 — Código de estado para recurso movido permanentemente
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "301", "redirect"]
respuesta: "301"
tipo: completar
enunciado:
  "Si un recurso ha sido trasladado permanentemente a una nueva URI y el cliente debe actualizar sus enlaces, el servidor debe responder con el código de estado HTTP _____."
pasos:
  - "Identificar la redirección permanente."
  - "Buscar el código 'Moved Permanently'."
  - "Escribir el código."
explicacion:
  "301 Moved Permanently indica que la URI solicitada ha cambiado y las versiones futuras deben usar la nueva URI."
respuestas_validas:
  - "301"
  - "301 Moved Permanently"
```

### 23 — Semántica de idempotencia de PUT
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-method", "idempotency", "put"]
respuesta: "verdadero"
tipo: vf
enunciado:
  "El método HTTP PUT es idempotente, lo que significa que múltiples solicitudes idénticas enviadas al mismo recurso resultan en el mismo estado final que una sola solicitud."
pasos:
  - "Definir idempotencia en el contexto de HTTP."
  - "Verificar si PUT cumple esta propiedad."
  - "Confirmar la veracidad."
explicacion:
  "PUT es idempotente porque establecer el mismo estado una o varias veces produce el mismo resultado."
```

### 24 — Encabezado para caché privado
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-headers", "cache-control", "privacy"]
respuesta: "private"
tipo: completar
enunciado:
  "Para indicar a los proxies compartidos que la respuesta es específica para un único usuario y no debe ser almacenada en caché compartida, el valor del encabezado `Cache-Control` debe ser _____."
pasos:
  - "Identificar el tipo de caché privado."
  - "Escribir el valor del parámetro."
explicacion:
  "Cache-Control: private restringe el almacenamiento en caché a la caché del cliente (navegador) y no a proxies intermedios."
respuestas_validas:
  - "private"
  - "Private"
```

### 25 — Código de estado para error de gateway
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-apis-rest"
  nivel: "avanzado"
  tags: ["http-status", "502", "gateway"]
respuesta: "502"
tipo: completar
enunciado:
  "Si un servidor proxy o gateway actúa como intermediario recibe una respuesta inválida del servidor upstream que debe cumplir con la solicitud, el código de estado HTTP es _____."
pasos:
  - "Identificar el error de comunicación entre servidores."
  - "Buscar el código 'Bad Gateway'."
  - "Escribir el código."
explicacion:
  "502 Bad Gateway indica que el servidor, actuando como gateway o proxy, recibió una respuesta inválida del servidor upstream."
respuestas_validas:
  - "502"
  - "502 Bad Gateway"
```