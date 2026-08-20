# Informatica — Protocolo http peticion respuesta (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El modelo cliente-servidor

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "redes", "web"]

tipo: vf

enunciado: "En el modelo de comunicación de la web, el dispositivo que inicia una comunicación solicitando un recurso (como una página HTML) se denomina cliente."

respuesta: verdadero
```

### 2 — Componentes de una petición HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "peticion", "metodo"]

tipo: mc

opciones_explicitas: ["URL", "Método HTTP", "Código de estado", "Cuerpo de la respuesta"]

enunciado: "En una petición HTTP, el verbo que indica la acción a realizar (como GET o POST) se conoce como:"

respuesta: "Método HTTP"

explicacion: |
  El método HTTP (GET, POST, PUT, DELETE, etc.) define la naturaleza de la operación que el cliente desea realizar sobre el recurso.
```

### 3 — Ciclo de vida de la comunicación

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "secuencia"]

tipo: ordenar

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

enunciado: "Ordena los pasos que describen el flujo básico de una interacción HTTP:"

respuesta_orden: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

explicacion: |
  La comunicación HTTP es un protocolo de tipo petición-respuesta: el cliente siempre debe iniciar la comunicación para que el servidor pueda responder.
```

### 4 — El significado de la respuesta

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["404", "No encontrado"], ["200", "OK"]]

tipo: completar

respuestas_validas:
  - "404"
  - "200"

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado HTTP de tipo ___."

respuesta: escenarios[escenario_idx][0]

explicacion: |
  El código 404 indica que el servidor no pudo encontrar el recurso solicitado. El código 200 indica que la petición fue exitosa.
```

### 5 — Estructura de la respuesta

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "cabeceras"]

tipo: mc

opciones_explicitas: ["Cabeceras (Headers)", "Cuerpo (Body)", "Línea de estado", "Todas las anteriores"]

enunciado: "Una respuesta HTTP estándar está compuesta por varias partes. ¿Cuál de las siguientes opciones describe los elementos que contienen metadatos sobre el contenido (como el tipo de archivo o la fecha)?"

respuesta: "Cabeceras (Headers)"

explicacion: |
  Las cabeceras (Headers) contienen información adicional sobre la respuesta, mientras que el cuerpo (Body) contiene el recurso solicitado propiamente dicho.
```

### 6 — El ciclo de una petición GET

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "web", "cliente_servidor"]

respuesta: "GET"
tipo: completar
respuestas_validas:
  - "GET"

enunciado: "Cuando un usuario escribe una URL en su navegador y presiona Enter, el navegador actúa como cliente y envía una petición de tipo ___ al servidor para solicitar el recurso."

explicacion: |
  En el protocolo HTTP, el método GET se utiliza para solicitar y recibir una representación de un recurso (como un archivo HTML) del servidor.
```

### 7 — Componentes de una respuesta HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  idx: uno_de([0, 1])
  datos: [["200 OK", "El recurso se encontró y se envió correctamente."], ["404 Not Found", "El servidor no pudo encontrar el recurso solicitado."]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"]

enunciado: "Si el servidor responde con el código de estado {datos[idx][1]}, ¿cuál es el mensaje de estado que acompaña a la respuesta?"

explicacion: |
  El código de estado indica el resultado de la petición. El código 200 indica éxito, mientras que el 404 indica que la URL no existe en el servidor.
```

### 8 — Verdad o Falso: El estado de la conexión

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "estado"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es un protocolo 'stateful', lo que significa que el servidor recuerda automáticamente quién es el cliente entre una petición y otra sin ayuda de cookies o tokens."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente; para mantener el estado (como un carrito de compras), se usan mecanismos adicionales como Cookies o sesiones.
```

### 9 — Ordenar el flujo de comunicación

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "flujo"]

respuesta_orden: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que un usuario hace clic en un enlace hasta que ve la página en su pantalla:"

explicacion: |
  El flujo comienza con el cliente enviando la petición, el servidor la procesa, envía la respuesta y finalmente el navegador interpreta (renderiza) el contenido.
```

### 10 — El código de error 500

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "error_server"]

respuesta: 500
tipo: completar
tolerancia_abs: 0

enunciado: "Si un servidor web experimenta un error inesperado en su código interno (por ejemplo, un error de sintaxis en un script de backend) al intentar procesar una petición, el servidor responderá con un código de estado de la familia 5xx. ¿Cuál es el código específico para 'Internal Server Error'?"

pasos:
  - "Identificar la familia de errores (4xx para cliente, 5xx para servidor)."
  - "Localizar el código estándar para errores genéricos del servidor."

explicacion: |
  El código 500 indica que el servidor encontró una condición inesperada que le impidió completar la petición, generalmente debido a un error en el software del lado del servidor.
```

### 11 — El rol del cliente en HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor"]

respuesta: "cliente"
tipo: completar
respuestas_validas:
  - "cliente"

enunciado: "En el modelo de comunicación HTTP, el dispositivo o software que inicia una comunicación solicitando un recurso es el ___."

explicacion: |
  El modelo cliente-servidor se basa en que el cliente inicia la interacción mediante una petición (request), y el servidor espera estas peticiones para responder (response).
```

### 12 — ¿Es HTTP un protocolo orientado a estado?

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estado", "stateless"]

respuesta: falso
tipo: vf

enunciado: "El protocolo HTTP es considerado un protocolo 'stateful' (con estado), lo que significa que el servidor recuerda automáticamente todas las peticiones anteriores de un mismo cliente."

explicacion: |
  Falso. HTTP es un protocolo 'stateless' (sin estado). Cada petición es independiente y el servidor no guarda información de sesiones previas por defecto, por eso se usan cookies o tokens para mantener el estado.
```

### 13 — Componentes de una respuesta HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estructura_respuesta", "status_code"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["404", "Not Found"], ["200", "OK"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["404", "200", "500", "301"]

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado de la serie 4xx. En este caso específico, el código será ___."

explicacion: |
  Los códigos de la serie 4xx indican errores del cliente (Client Error), como el 404 cuando el recurso no se encuentra.
```

### 14 — Flujo de una petición HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo_comunicacion"]

respuesta_orden: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos de una interacción estándar de HTTP:"

explicacion: |
  Primero el cliente envía la petición, luego el servidor la procesa y finalmente envía la respuesta con el contenido solicitado.
```

### 15 — Diferencia entre método y URL

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos_http", "verbos"]

respuesta: "GET"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "Si un cliente desea simplemente recuperar (leer) la información de un recurso sin modificar nada en el servidor, el método HTTP más apropiado es ___."

explicacion: |
  El método GET se utiliza para solicitar la representación de un recurso específico, mientras que POST, PUT y DELETE se utilizan para crear, actualizar o eliminar datos.
```

### 16 — Diferencia entre HTTP y TCP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["redes", "protocolos", "modelo_cliente_servidor"]

respuesta: "capa_aplicacion"
tipo: completar
respuestas_validas:
  - "capa_aplicacion"
  - "capa_aplicacion"

enunciado: "Mientras que TCP opera en la capa de transporte para garantizar la entrega de datos, el protocolo HTTP opera en la ___."

explicacion: |
  HTTP es un protocolo de la capa de aplicación que define cómo se estructuran los mensajes, mientras que TCP se encarga de la conexión y fiabilidad del transporte de esos mensajes.
```

### 17 — HTTP vs FTP (Transferencia de archivos)

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["protocolos", "web"]

variables:
  es_statica: uno_de([verdadero, falso])

respuesta: es_statica
tipo: completar
enunciado: "A diferencia de FTP, que está diseñado principalmente para la transferencia de archivos, HTTP es un protocolo orientado a la transferencia de hipermedios (páginas web, imágenes, etc.). ¿Es correcto afirmar que HTTP es un protocolo sin estado (stateless) por diseño?"

explicacion: |
  HTTP es stateless porque cada petición es independiente; el servidor no guarda memoria de peticiones anteriores por defecto (para eso se usan cookies o sesiones).
```

### 18 — Métodos HTTP: GET vs POST

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

respuesta: "POST"
tipo: mc
opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]

enunciado: "En el modelo petición-respuesta, ¿qué método se distingue por enviar los datos del cuerpo en el cuerpo del mensaje y no en la URL, siendo ideal para enviar información sensible?"

explicacion: |
  El método GET envía los parámetros en la URL (query string), lo que los hace visibles en el historial y logs. El método POST envía la información en el cuerpo (body) de la petición.
```

### 19 — Flujo de una petición HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo", "modelo_cliente_servidor"]

respuesta_orden: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos que ocurren en un ciclo estándar de comunicación HTTP:"

explicacion: |
  El cliente inicia la comunicación con una petición (Request), el servidor procesa dicha petición y finalmente devuelve una respuesta (Response) al cliente.
```

### 20 — Códigos de estado: 2xx vs 4xx

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["codigos_estado", "http"]

respuesta: "Error del cliente"
tipo: mc
opciones_explicitas: ["Éxito del servidor", "Redirección", "Error del cliente", "Error del servidor"]

enunciado: "Un código de estado HTTP de la serie 400 (como el 404) se distingue de un código de la serie 500 porque el primero indica un ___."

explicacion: |
  Los códigos 4xx indican que el problema reside en la petición del cliente (ej. recurso no encontrado), mientras que los 5xx indican que el servidor falló al procesar una petición válida.
```

### 21 — El ciclo de una petición web

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor", "web"]

variables:
  datos: [["El navegador solicita la página principal de un sitio", "GET"], ["El navegador envía un formulario de registro", "POST"], ["El navegador solicita un archivo de estilo CSS", "GET"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el modelo cliente-servidor, cuando {datos[idx][0]}, el método HTTP utilizado es ___."

respuestas_validas:
  - "GET"
  - "POST"
  - "PUT"
  - "DELETE"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El método HTTP indica la acción que el cliente desea realizar. 'GET' se usa para solicitar datos y 'POST' para enviar datos al servidor.
```

### 22 — Componentes de una respuesta HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code", "headers"]

variables:
  datos: [["404", "Not Found"], ["200", "OK"], ["500", "Internal Server Error"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el servidor responde con el código de estado {datos[idx][0]}, el significado de la respuesta es ___."

opciones_explicitas: ["Not Found", "OK", "Internal Server Error", "Bad Request"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los códigos de estado HTTP informan sobre el resultado de la petición: 2xx son éxitos, 4xx errores del cliente y 5xx errores del servidor.
```

### 23 — Veracidad del modelo cliente-servidor

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["conceptos", "modelo_cliente_servidor"]

enunciado: "En el protocolo HTTP, el servidor es el encargado de iniciar la comunicación enviando una petición al cliente para que este pueda mostrar contenido."

respuesta: falso
tipo: vf

explicacion: |
  Es falso. En el modelo petición-respuesta de HTTP, el cliente (como un navegador) siempre inicia la comunicación mediante una petición, y el servidor responde a dicha petición.
```

### 24 — Secuencia de una transacción HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["flujo", "protocolo"]

enunciado: "Ordena los pasos que ocurren durante una navegación web estándar:"

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
respuesta_orden: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
tipo: ordenar

explicacion: |
  El flujo lógico es: Petición (Cliente) -> Procesamiento (Servidor) -> Respuesta (Servidor) -> Renderizado (Cliente).
```

### 25 — Identificación de métodos HTTP

```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

variables:
  datos: [["actualizar un recurso existente", "PUT"], ["eliminar un recurso", "DELETE"], ["enviar datos para crear un nuevo usuario", "POST"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo de la operación es ___, el método HTTP más adecuado es ___."

opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada método tiene una semántica definida: GET para lectura, POST para creación, PUT para actualización y DELETE para eliminación.
```
