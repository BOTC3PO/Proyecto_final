### 1 — El ciclo de una petición web
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["http", "cliente_servidor", "web"]

variables:
  escenario: uno_de([["El navegador solicita la página principal de un sitio", "GET"], ["El navegador envía un formulario de registro", "POST"], ["El navegador solicita un archivo de estilo CSS", "GET"]])
  idx: uno_de([0, 1, 2])

enunciado: "En el modelo cliente-servidor, cuando {escenario[idx][0]}, el método HTTP utilizado es ___."

respuestas_validas: ["GET", "POST", "PUT", "DELETE"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  El método HTTP indica la acción que el cliente desea realizar. 'GET' se usa para solicitar datos y 'POST' para enviar datos al servidor.
```

### 2 — Componentes de una respuesta HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["http", "status_code", "headers"]

variables:
  caso: uno_de([["404", "Not Found"], ["200", "OK"], ["500", "Internal Server Error"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si el servidor responde con el código de estado {caso[idx][0]}, el significado de la respuesta es ___."

opciones_explicitas: ["Not Found", "OK", "Internal Server Error", "Bad Request"]
respuesta: caso[idx][1]
tipo: mc

explicacion: |
  Los códigos de estado HTTP informan sobre el resultado de la petición: 2xx son éxitos, 4xx errores del cliente y 5xx errores del servidor.
```

### 3 — Veracidad del modelo cliente-servidor
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

### 4 — Secuencia de una transacción HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["flujo", "protocolo"]

enunciado: "Ordena los pasos que ocurren durante una navegación web estándar:"

opciones_explicitas: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
respuesta: ["El cliente envía una petición HTTP", "El servidor procesa la petición", "El servidor envía una respuesta HTTP", "El cliente recibe y renderiza el contenido"]
tipo: ordenar

explicacion: |
  El flujo lógico es: Petición (Cliente) -> Procesamiento (Servidor) -> Respuesta (Servidor) -> Renderizado (Cliente).
```

### 5 — Identificación de métodos HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["metodos", "http"]

variables:
  accion: uno_de([["actualizar un recurso existente", "PUT"], ["eliminar un recurso", "DELETE"], ["enviar datos para crear un nuevo usuario", "POST"]])
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo de la operación es ___, el método HTTP más adecuado es ___."

opciones_explicitas: ["GET", "POST", "PUT", "DELETE"]
respuesta: accion[idx][1]
tipo: mc

explicacion: |
  Cada método tiene una semántica definida: GET para lectura, POST para creación, PUT para actualización y DELETE para eliminación.
```