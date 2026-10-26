### 1 — Diferencia entre HTTP y TCP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "intermedio"
  tags: ["redes", "protocolos", "modelo_cliente_servidor"]

respuesta: "capa_aplicacion"
tipo: completar
respuestas_validas: ["capa_aplicacion", "capa_aplicacion"]

enunciado: "Mientras que TCP opera en la capa de transporte para garantizar la entrega de datos, el protocolo HTTP opera en la ___."

explicacion: |
  HTTP es un protocolo de la capa de aplicación que define cómo se estructuran los mensajes, mientras que TCP se encarga de la conexión y fiabilidad del transporte de esos mensajes.
```

### 2 — HTTP vs FTP (Transferencia de archivos)
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["protocolos", "web"]

variables:
  es_statica: uno_de([verdadero, falso])

respuesta: es_statica
tipo: vf

enunciado: "A diferencia de FTP, que está diseñado principalmente para la transferencia de archivos, HTTP es un protocolo orientado a la transferencia de hipermedios (páginas web, imágenes, etc.). ¿Es correcto afirmar que HTTP es un protocolo sin estado (stateless) por diseño?"

explicacion: |
  HTTP es stateless porque cada petición es independiente; el servidor no guarda memoria de peticiones anteriores por defecto (para eso se usan cookies o sesiones).
```

### 3 — Métodos HTTP: GET vs POST
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

### 4 — Flujo de una petición HTTP
```
metadata:
  materia: "informatica"
  tema: "protocolo_http_peticion_respuesta"
  nivel: "basico"
  tags: ["flujo", "modelo_cliente_servidor"]

respuesta: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]
tipo: ordenar
opciones_explicitas: ["Petición del cliente", "Procesamiento del servidor", "Respuesta del servidor"]

enunciado: "Ordena cronológicamente los pasos que ocurren en un ciclo estándar de comunicación HTTP:"

explicacion: |
  El cliente inicia la comunicación con una petición (Request), el servidor procesa dicha petición y finalmente devuelve una respuesta (Response) al cliente.
```

### 5 — Códigos de estado: 2xx vs 4xx
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