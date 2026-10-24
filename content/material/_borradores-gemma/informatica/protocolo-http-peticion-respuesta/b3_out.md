### 1 — El rol del cliente en HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor"]

respuesta: "cliente"
tipo: completar
respuestas_validas: ["cliente"]

enunciado: "En el modelo de comunicación HTTP, el dispositivo o software que inicia una comunicación solicitando un recurso es el ___."

explicacion: |
  El modelo cliente-servidor se basa en que el cliente inicia la interacción mediante una petición (request), y el servidor espera estas peticiones para responder (response).
```

### 2 — ¿Es HTTP un protocolo orientado a estado?
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

### 3 — Componentes de una respuesta HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["estructura_respuesta", "status_code"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["404", "Not Found"],
    ["200", "OK"]
  ]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["404", "200", "500", "301"]

enunciado: "Si un cliente solicita una página que no existe en el servidor, el servidor responderá con un código de estado de la serie 4xx. En este caso específico, el código será ___."

explicacion: |
  Los códigos de la serie 4xx indican errores del cliente (Client Error), como el 404 cuando el recurso no se encuentra.
```

### 4 — Flujo de una petición HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo_comunicacion"]

respuesta: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento en servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos de una interacción estándar de HTTP:"

explicacion: |
  Primero el cliente envía la petición, luego el servidor la procesa y finalmente envía la respuesta con el contenido solicitado.
```

### 5 — Diferencia entre método y URL
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