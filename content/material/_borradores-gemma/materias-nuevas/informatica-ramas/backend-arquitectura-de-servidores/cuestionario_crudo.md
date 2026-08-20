### 1 — Definición de Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["backend", "definicion"]
enunciado: "En el contexto de la arquitectura de software, ¿cuál es la responsabilidad principal del backend?"
tipo: "vf"
respuesta: verdadero
pasos:
  - "Analizar la definición técnica de backend."
  - "Verificar que su función es la lógica de servidor, gestión de datos y API."
  - "Confirmar que NO se encarga de la presentación visual (frontend)."
explicacion: "El backend maneja la lógica del servidor, las bases de datos y la API, mientras que el frontend se ocupa de la interfaz de usuario."
```

### 2 — Patrón MVC en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["mvc", "patron"]
enunciado: "En un patrón MVC (Model-View-Controller) implementado en backend, ¿qué componente es responsable de la lógica de negocio y la manipulación de datos?"
tipo: "mc"
opciones_explicitas:
  - "View"
  - "Model"
  - "Controller"
  - "Database"
respuesta: "Model"
pasos:
  - "Definir las responsabilidades de MVC."
  - "Identificar que el Model gestiona los datos y la lógica de negocio."
  - "Descartar Controller (intermediario) y View (presentación)."
explicacion: "El Model es quien contiene la lógica de datos y reglas de negocio en el patrón MVC."
```

### 3 — Estado de HTTP para Recurso Creado
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que debe devolver un servidor REST exitosamente tras crear un nuevo recurso mediante una petición POST."
tipo: "completar"
respuesta: "201"
respuestas_validas:
  - "201"
  - "201 Created"
pasos:
  - "Recordar los códigos de estado HTTP estándar."
  - "Identificar 200 como OK, 204 como No Content, 201 como Created."
  - "Seleccionar el código específico para creación."
explicacion: "El código 201 Created indica que la acción ha sido cumplida y ha resultado en la creación de un nuevo recurso."
```

### 4 — Escalabilidad Vertical vs Horizontal
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["escalabilidad", "infraestructura"]
enunciado: "¿Qué término describe la estrategia de aumentar la capacidad de un servidor agregando más recursos (CPU, RAM) a la máquina existente?"
tipo: "mc"
opciones_explicitas:
  - "Escalabilidad Horizontal"
  - "Escalabilidad Vertical"
  - "Load Balancing"
  - "Microservicios"
respuesta: "Escalabilidad Vertical"
pasos:
  - "Definir escalabilidad vertical (scale-up): más potencia en una sola máquina."
  - "Definir escalabilidad horizontal (scale-out): más máquinas en un cluster."
  - "Coincidir la descripción con el término correcto."
explicacion: "La escalabilidad vertical implica mejorar los recursos de un nodo individual, mientras que la horizontal añade más nodos."
```

### 5 — Middleware en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["middleware", "lifecycle"]
enunciado: "En la arquitectura de servidores web, ¿cuál es la función principal de un middleware?"
tipo: "mc"
opciones_explicitas:
  - "Renderizar la vista final al cliente."
  - "Interceptar la solicitud y la respuesta para realizar procesamiento previo o posterior."
  - "Almacenar permanentemente los datos del usuario."
  - "Gestionar la autenticación del usuario directamente sin pasar al controlador."
respuesta: "Interceptar la solicitud y la respuesta para realizar procesamiento previo o posterior."
pasos:
  - "Analizar el ciclo de vida de una petición HTTP."
  - "Identificar que el middleware se ejecuta entre la recepción de la petición y la respuesta."
  - "Confirmar que su rol es transversal (logging, auth, parsing)."
explicacion: "El middleware actúa como un intermediario que procesa la petición antes de llegar al controlador o la respuesta antes de salir al cliente."
```

### 6 — Base de Datos Relacional vs NoSQL
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["database", "sql", "nosql"]
enunciado: "Completa el nombre del tipo de base de datos que almacena datos en pares clave-valor y es conocida por su alta velocidad de lectura/escritura para cachés."
tipo: "completar"
respuesta: "redis"
respuestas_validas:
  - "redis"
  - "Redis"
  - "REDIS"
  - "redis server"
  - "redis server"
pasos:
  - "Identificar bases de datos NoSQL populares."
  - "Filtrar por arquitectura clave-valor."
  - "Seleccionar Redis como el estándar para caché y estructuras simples."
explicacion: "Redis es una base de datos en memoria de estructura de datos, utilizada como base de datos, caché y broker de mensajes."
```

### 7 — Protocolo para Transferencia de Archivos
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["protocolos", "ftp"]
enunciado: "¿Cuál es el protocolo estándar diseñado específicamente para la transferencia de archivos entre cliente y servidor en una red?"
tipo: "mc"
opciones_explicitas:
  - "HTTP"
  - "FTP"
  - "SMTP"
  - "SSH"
respuesta: "FTP"
pasos:
  - "Revisar las funciones de los protocolos listados."
  - "HTTP es para hipertexto/web."
  - "SMTP es para correo."
  - "SSH es para acceso remoto seguro."
  - "FTP es File Transfer Protocol."
explicacion: "FTP (File Transfer Protocol) es el estándar para la transferencia de archivos."
```

### 8 — Patrón Singleton en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["patron", "singleton", "diseño"]
enunciado: "En el patrón de diseño Singleton aplicado a servicios de backend (como un gestor de conexiones a BD), ¿cuál es la garantía principal que ofrece?"
tipo: "mc"
opciones_explicitas:
  - "Permite crear múltiples instancias concurrentes."
  - "Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella."
  - "Evita el uso de variables estáticas."
  - "Hace que la clase sea inmutable."
respuesta: "Garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella."
pasos:
  - "Definir Singleton: restricción a una sola instancia."
  - "Verificar que las otras opciones contradicen o no definen el patrón."
  - "Confirmar la unicidad y acceso global."
explicacion: "El patrón Singleton restringe la instanciación de una clase a un único objeto."
```

### 9 — Código de Estado para Error Interno del Servidor
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "errores"]
enunciado: "Completa el código de estado HTTP que indica que el servidor ha encontrado una condición inesperada que le impide cumplir con la petición."
tipo: "completar"
respuesta: "500"
respuestas_validas:
  - "500"
  - "500 Internal Server Error"
  - "500 error"
pasos:
  - "Identificar códigos de error 5xx."
  - "Diferenciar 500 (genérico interno) de 502, 503, 504."
  - "Seleccionar 500 como el estándar para fallos genéricos del servidor."
explicacion: "El código 500 Internal Server Error es la respuesta genérica cuando no se identifica el tipo de error exacto."
```

### 10 — Arquitectura de Microservicios
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["microservicios", "arquitectura"]
enunciado: "¿Cuál es una característica definitoria de la arquitectura de microservicios frente a un monolito?"
tipo: "mc"
opciones_explicitas:
  - "Todas las funcionalidades están en un único código fuente desplegable."
  - "Cada servicio se desarrolla, despliega y escala de forma independiente."
  - "Los servicios comparten la misma base de datos directamente."
  - "No requiere comunicación de red entre componentes."
respuesta: "Cada servicio se desarrolla, despliega y escala de forma independiente."
pasos:
  - "Comparar monolito vs microservicios."
  - "Identificar la independencia como la clave de los microservicios."
  - "Descartar opciones que describen un monolito o acoplamiento fuerte."
explicacion: "La independencia de despliegue y escala es la ventaja principal de los microservicios."
```

### 11 — ORM en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["orm", "database"]
enunciado: "Completa el acrónimo ORM que representa la técnica de programación para convertir datos entre sistemas de tipos incompatibles (objetos en código y tablas en BD)."
tipo: "completar"
respuesta: "ORM"
respuestas_validas:
  - "ORM"
  - "orm"
  - "O R M"
  - "Object Relational Mapping"
pasos:
  - "Identificar la técnica de mapeo objeto-relacional."
  - "Recordar el acrónimo inglés: Object-Relational Mapping."
  - "Escribir el acrónimo."
explicacion: "ORM (Object-Relational Mapping) facilita la interacción entre objetos de software y bases de datos relacionales."
```

### 12 — Seguridad: SQL Injection
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["seguridad", "sql-injection"]
enunciado: "¿Qué técnica de seguridad se utiliza para prevenir la inyección SQL al construir consultas dinámicas?"
tipo: "mc"
opciones_explicitas:
  - "Concatenación de strings"
  - "Queries preparadas (Prepared Statements)"
  - "Almacenamiento en caché"
  - "Compresión de datos"
respuesta: "Queries preparadas (Prepared Statements)"
pasos:
  - "Analizar cómo se construyen las consultas SQL."
  - "Identificar que la concatenación es vulnerable."
  - "Confirmar que las queries preparadas separan código de datos."
explicacion: "Las queries preparadas (o parametrizadas) evitan la inyección SQL al tratar los inputs exclusivamente como datos, no como código ejecutable."
```

### 13 — Código de Estado para No Encontrado
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que devuelve el servidor cuando no puede encontrar el recurso solicitado en la URI."
tipo: "completar"
respuesta: "404"
respuestas_validas:
  - "404"
  - "404 Not Found"
  - "404 error"
pasos:
  - "Recordar códigos de error 4xx."
  - "Diferenciar 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found)."
  - "Seleccionar 404."
explicacion: "El código 404 Not Found indica que el recurso existe en el servidor pero no se puede encontrar en la ruta solicitada."
```

### 14 — Patrón Observer en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["patron", "observer", "eventos"]
enunciado: "En un sistema backend que usa el patrón Observer, ¿qué ocurre cuando un objeto (sujeto) cambia su estado?"
tipo: "mc"
opciones_explicitas:
  - "El sistema se cierra automáticamente."
  - "Todos los objetos dependientes (observadores) son notificados y actualizados."
  - "Se borra la base de datos."
  - "Se envía un correo al administrador."
respuesta: "Todos los objetos dependientes (observadores) son notificados y actualizados."
pasos:
  - "Definir patrón Observer: publicación-suscripción."
  - "Identificar que el cambio de estado dispara notificaciones."
  - "Confirmar la actualización de dependientes."
explicacion: "El patrón Observer define una dependencia uno-a-muchos donde los cambios en el sujeto notifican a los observadores."
```

### 15 — Código de Estado para Bad Request
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que indica que el servidor no puede o no quiere procesar la solicitud debido a un error del cliente (sintaxis inválida)."
tipo: "completar"
respuesta: "400"
respuestas_validas:
  - "400"
  - "400 Bad Request"
  - "400 error"
pasos:
  - "Identificar códigos de error 4xx."
  - "Seleccionar 400 como el estándar para errores de sintaxis del cliente."
  - "Diferenciar de 401 (auth) y 403 (permisos)."
explicacion: "El código 400 Bad Request se usa cuando la solicitud está mal formada sintácticamente."
```

### 16 — Cache de Nivel de Aplicación
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["cache", "rendimiento"]
enunciado: "¿Cuál es la principal ventaja de implementar un cache de nivel de aplicación (como Memcached o Redis) en el backend?"
tipo: "mc"
opciones_explicitas:
  - "Eliminar la necesidad de una base de datos."
  - "Reducir la latencia y la carga en la base de datos almacenando datos frecuentes en memoria."
  - "Aumentar la seguridad de las contraseñas."
  - "Gestionar la interfaz de usuario."
respuesta: "Reducir la latencia y la carga en la base de datos almacenando datos frecuentes en memoria."
pasos:
  - "Analizar la función del caché: almacenamiento temporal rápido."
  - "Identificar que reduce llamadas a BD."
  - "Confirmar que mejora el rendimiento (latencia)."
explicacion: "El cache en memoria acelera el acceso a datos repetitivos y reduce la presión sobre la base de datos persistente."
```

### 17 — Código de Estado para Unauthorized
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que devuelve el servidor cuando la petición requiere autenticación válida que falta o es inválida."
tipo: "completar"
respuesta: "401"
respuestas_validas:
  - "401"
  - "401 Unauthorized"
  - "401 error"
pasos:
  - "Identificar códigos de error 4xx."
  - "Seleccionar 401 para falta de autenticación."
  - "Diferenciar de 403 (prohibido aunque esté autenticado)."
explicacion: "El código 401 Unauthorized indica que la autenticación falló o no se proporcionó."
```

### 18 — Patrón Strategy en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["patron", "strategy", "diseño"]
enunciado: "En el patrón de diseño Strategy aplicado al backend, ¿qué permite hacer este enfoque?"
tipo: "mc"
opciones_explicitas:
  - "Definir una familia de algoritmos, encapsularlos y hacerlos intercambiables."
  - "Crear una sola clase con todos los métodos posibles."
  - "Evitar el uso de interfaces."
  - "Garantizar que solo haya una instancia de la clase."
respuesta: "Definir una familia de algoritmos, encapsularlos y hacerlos intercambiables."
pasos:
  - "Definir patrón Strategy: algoritmos intercambiables."
  - "Identificar que permite cambiar el comportamiento en tiempo de ejecución."
  - "Confirmar la encapsulación y sustitución."
explicacion: "El patrón Strategy define una familia de algoritmos, los encapsula y los hace intercambiables, permitiendo que el algoritmo varíe independientemente de los clientes que lo usan."
```

### 19 — Código de Estado para Forbidden
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que devuelve el servidor cuando el cliente está autenticado pero no tiene permiso para acceder al recurso."
tipo: "completar"
respuesta: "403"
respuestas_validas:
  - "403"
  - "403 Forbidden"
  - "403 error"
pasos:
  - "Identificar códigos de error 4xx."
  - "Seleccionar 403 para prohibición de acceso."
  - "Diferenciar de 401 (no autenticado) y 404 (no encontrado)."
explicacion: "El código 403 Forbidden indica que el servidor entiende la petición pero se niega a autorizarla."
```

### 20 — Patrón Factory en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["patron", "factory", "diseño"]
enunciado: "¿Cuál es el propósito principal del patrón Factory en la creación de objetos en el backend?"
tipo: "mc"
opciones_explicitas:
  - "Garantizar una única instancia de una clase."
  - "Definir una interfaz para crear objetos, pero delegar la instancia a las subclases o un método factory."
  - "Notificar cambios a observadores."
  - "Almacenar datos en caché."
respuesta: "Definir una interfaz para crear objetos, pero delegar la instancia a las subclases o un método factory."
pasos:
  - "Definir patrón Factory: creación de objetos."
  - "Identificar que desacopla la creación de la lógica de negocio."
  - "Confirmar que delega la instanciación."
explicacion: "El patrón Factory proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán."
```

### 21 — Código de Estado para Bad Gateway
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que devuelve un servidor proxy/gateway cuando recibe una respuesta inválida de un servidor upstream."
tipo: "completar"
respuesta: "502"
respuestas_validas:
  - "502"
  - "502 Bad Gateway"
  - "502 error"
pasos:
  - "Identificar códigos de error 5xx."
  - "Seleccionar 502 para error de gateway."
  - "Diferenciar de 500 (interno), 503 (indisponible), 504 (timeout)."
explicacion: "El código 502 Bad Gateway indica que el servidor, al actuar como gateway o proxy, recibió una respuesta inválida del servidor upstream."
```

### 22 — Patrón Decorator en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["patron", "decorator", "diseño"]
enunciado: "En el patrón Decorator aplicado al backend, ¿qué funcionalidad añade sin modificar la clase original?"
tipo: "mc"
opciones_explicitas:
  - "Elimina la necesidad de la clase original."
  - "Añade responsabilidades a un objeto de forma dinámica, envolviéndolo."
  - "Crea una única instancia de la clase."
  - "Notifica a todos los observadores."
respuesta: "Añade responsabilidades a un objeto de forma dinámica, envolviéndolo."
pasos:
  - "Definir patrón Decorator: envoltura dinámica."
  - "Identificar que añade comportamiento sin herencia."
  - "Confirmar que la clase original no se modifica."
explicacion: "El patrón Decorator permite añadir responsabilidades a un objeto dinámicamente, proporcionando una alternativa flexible a la subclasificación para extender la funcionalidad."
```

### 23 — Código de Estado para Service Unavailable
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que devuelve el servidor cuando está temporalmente incapaz de manejar la solicitud, usualmente por sobrecarga o mantenimiento."
tipo: "completar"
respuesta: "503"
respuestas_validas:
  - "503"
  - "503 Service Unavailable"
  - "503 error"
pasos:
  - "Identificar códigos de error 5xx."
  - "Seleccionar 503 para indisponibilidad temporal."
  - "Diferenciar de 502 (gateway), 504 (timeout)."
explicacion: "El código 503 Service Unavailable indica que el servidor no está listo para manejar la solicitud, a menudo por sobrecarga o mantenimiento."
```

### 24 — Patrón Adapter en Backend
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["patron", "adapter", "diseño"]
enunciado: "¿Cuál es el propósito principal del patrón Adapter en la integración de sistemas backend?"
tipo: "mc"
opciones_explicitas:
  - "Crear una única instancia de una clase."
  - "Permitir que interfaces incompatibles trabajen juntas, actuando como un intermediario."
  - "Notificar cambios a observadores."
  - "Almacenar datos en caché."
respuesta: "Permitir que interfaces incompatibles trabajen juntas, actuando como un intermediario."
pasos:
  - "Definir patrón Adapter: conversión de interfaz."
  - "Identificar que convierte la interfaz de una clase en otra esperada por el cliente."
  - "Confirmar que permite la interoperabilidad."
explicacion: "El patrón Adapter convierte la interfaz de una clase en otra interfaz que el cliente espera, permitiendo que clases con interfaces incompatibles trabajen juntas."
```

### 25 — Código de Estado para Gateway Timeout
```yaml
metadata:
  materia: "informatica-ramas"
  tema: "backend-arquitectura-de-servidores"
  nivel: "avanzado"
  tags: ["http", "status-codes"]
enunciado: "Completa el código de estado HTTP que devuelve un servidor proxy/gateway cuando no recibe una respuesta a tiempo de un servidor upstream."
tipo: "completar"
respuesta: "504"
respuestas_validas:
  - "504"
  - "504 Gateway Timeout"
  - "504 error"
pasos:
  - "Identificar códigos de error 5xx."
  - "Seleccionar 504 para timeout de gateway."
  - "Diferenciar de 500 (interno), 502 (inválido), 503 (indisponible)."
explicacion: "El código 504 Gateway Timeout indica que el servidor, al actuar como gateway o proxy, no recibió una respuesta a tiempo del servidor upstream."
```