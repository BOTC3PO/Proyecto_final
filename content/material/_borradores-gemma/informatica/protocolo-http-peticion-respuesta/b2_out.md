### 1 — El ciclo de una petición GET
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "web", "cliente_servidor"]

respuesta: "GET"
tipo: completar
respuestas_validas: ["GET"]

enunciado: "Cuando un usuario escribe una URL en su navegador y presiona Enter, el navegador actúa como cliente y envía una petición de tipo ___ al servidor para solicitar el recurso."

explicacion: |
  En el protocolo HTTP, el método GET se utiliza para solicitar y recibir una representación de un recurso (como un archivo HTML) del servidor.
```

### 2 — Componentes de una respuesta HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["200 OK", "El recurso se encontró y se envió correctamente."],
    ["404 Not Found", "El servidor no pudo encontrar el recurso solicitado."]
  ]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["200 OK", "404 Not Found", "500 Internal Server Error", "301 Moved Permanently"]

enunciado: "Si el servidor responde con el código de estado {escenarios[escenario_idx][1]}, ¿cuál es el mensaje de estado que acompaña a la respuesta?"

explicacion: |
  El código de estado indica el resultado de la petición. El código 200 indica éxito, mientras que el 404 indica que la URL no existe en el servidor.
```

### 3 — Verdad o Falso: El estado de la conexión
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

### 4 — Ordenar el flujo de comunicación
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "flujo"]

respuesta: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en el servidor", "Respuesta del servidor", "Renderizado en el navegador"]

enunciado: "Ordena cronológicamente los pasos que ocurren desde que un usuario hace clic en un enlace hasta que ve la página en su pantalla:"

explicacion: |
  El flujo comienza con el cliente enviando la petición, el servidor la procesa, envía la respuesta y finalmente el navegador interpreta (renderiza) el contenido.
```

### 5 — El código de error 500
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "error_server"]

respuesta: 500
tipo: input
tolerancia_abs: 0

enunciado: "Si un servidor web experimenta un error inesperado en su código interno (por ejemplo, un error de sintaxis en un script de backend) al intentar procesar una petición, el servidor responderá con un código de estado de la familia 5xx. ¿Cuál es el código específico para 'Internal Server Error'?"

pasos:
  - "Identificar la familia de errores (4xx para cliente, 5xx para servidor)."
  - "Localizar el código estándar para errores genéricos del servidor."

explicacion: |
  El código 500 indica que el servidor encontró una condición inesperada que le impidió completar la petición, generalmente debido a un error en el software del lado del servidor.
```