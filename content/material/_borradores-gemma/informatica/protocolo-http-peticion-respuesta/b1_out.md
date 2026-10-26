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

respuesta: ["El cliente envía una petición HTTP", "El servidor procesa la solicitud", "El servidor envía una respuesta HTTP", "El cliente recibe el contenido"]

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
  escenarios: [
    ["404", "No encontrado"],
    ["200", "OK"]
  ]

tipo: completar

respuestas_validas: ["404", "200"]

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