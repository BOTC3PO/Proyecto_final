### 1 — Validación de entrada nula en API
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["api", "null", "input-validation"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Al implementar pruebas de casos negativos para un endpoint REST que acepta un campo de texto obligatorio, ¿es una práctica estándar enviar `null` (JSON null) en lugar de una cadena vacía para verificar que el servidor rechace la solicitud correctamente?"
pasos:
  - "Identificar el campo obligatorio en la especificación del API."
  - "Construir la carga útil (payload) con el valor null para ese campo."
  - "Enviar la solicitud y verificar que el código de estado sea 400 Bad Request o similar, y que el mensaje de error indique la falta de valor."
explicacion: "Los casos negativos deben cubrir no solo valores incorrectos, sino también la ausencia total de datos (null) cuando se espera una cadena, para asegurar que el backend no cause un error de tipo o un crash inesperado."
```

### 2 — Completar flag de timeout en cURL
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["curl", "timeout", "network"]
respuesta: "--max-time"
tipo: completar
respuestas_validas:
  - "--max-time"
  - "--connect-timeout"
enunciado:
  - "Para simular un caso negativo donde una API tarda más de 10 segundos en responder y se desea verificar que el cliente de prueba maneje el timeout correctamente, ¿qué flag se debe pasar al comando `curl` para establecer ese límite?"
pasos:
  - "Analizar el comportamiento esperado del cliente ante latencia alta."
  - "Seleccionar la herramienta de línea de comandos adecuada para la prueba."
  - "Aplicar el parámetro de tiempo máximo para forzar el corte de la conexión."
explicacion: "`--max-time` establece el tiempo total máximo permitido para la operación, mientras que `--connect-timeout` solo afecta la fase de conexión. Para probar el manejo de respuestas lentas, `--max-time` es más preciso si se quiere simular la espera completa."
```

### 3 — Manejo de excepciones en bucle de reintentos
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["python", "exception", "retry"]
opciones_explicitas:
  - "Debe fallar silenciosamente sin registrar nada."
  - "Debe registrar la excepción y continuar o finalizar según la política de reintentos."
  - "Debe reiniciar el servidor automáticamente."
  - "Debe convertir la excepción en un valor nulo."
respuesta: "Debe registrar la excepción y continuar o finalizar según la política de reintentos."
tipo: mc
enunciado:
  - "En un script de automatización que implementa un patrón de reintento (retry pattern) para manejar fallas transitorias, ¿cuál es el comportamiento correcto al capturar una excepción de red en el bloque `except`?"
pasos:
  - "Definir la estrategia de reintentos (número de intentos, backoff)."
  - "Implementar el bloque de captura de errores."
  - "Verificar que el log muestre el fallo para depuración futura."
explicacion: "Ignorar errores o reiniciar servidores es una mala práctica. La captura debe permitir el registro del estado actual para diagnóstico y decidir si se reintentan o se abandona la tarea."
```

### 4 — Validación de límites numéricos enteros
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["input-validation", "integer", "overflow"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Al probar un campo que acepta un número entero de 32 bits, enviar un valor mayor a `2147483647` (`INT_MAX`) debe resultar en un rechazo del servidor o en un desbordamiento (overflow) que genere un error, dependiendo de la implementación."
pasos:
  - "Determinar el tipo de dato esperado en el backend."
  - "Calcular el límite superior del tipo de dato (ej. 32-bit signed integer)."
  - "Enviar un valor excedente y verificar el manejo del error."
explicacion: "Los casos negativos de límites (boundary value analysis) son cruciales para evitar desbordamientos de búfer o lógicas erróneas al convertir tipos de datos primitivos."
```

### 5 — Completar selector CSS para atributo vacío
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["css", "selector", "attribute"]
respuesta: "[href='']"
tipo: completar
respuestas_validas:
  - "[href='']"
  - "[href=\"\"]"
enunciado:
  - "En una prueba de interfaz web, se necesita identificar un enlace que tenga el atributo `href` presente pero vacío (cadena vacía) para verificar que la aplicación lo deshabilita o muestra un aviso. ¿Qué selector CSS es válido para esto?"
pasos:
  - "Analizar el DOM del elemento objetivo."
  - "Construir el selector que coincida con el atributo y su valor específico."
  - "Verificar que el selector no capture enlaces con espacios o valores nulos."
explicacion: "El selector `[href='']` coincide específicamente con atributos cuya cadena de valor es vacía, diferenciándolo de atributos que no existen o tienen espacios."
```

### 6 — Detección de fugas de memoria en UI
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["memory-leak", "ui", "debugging"]
opciones_explicitas:
  - "Observar si el consumo de memoria aumenta indefinidamente al abrir y cerrar el mismo modal repetidamente."
  - "Verificar si el modal se cierra inmediatamente sin interacción del usuario."
  - "Comprobar si el modal se abre en color rojo."
  - "Medir el tiempo de carga de la primera imagen del modal."
respuesta: "Observar si el consumo de memoria aumenta indefinidamente al abrir y cerrar el mismo modal repetidamente."
tipo: mc
enunciado:
  - "¿Cuál es la técnica adecuada para detectar una posible fuga de memoria asociada a la gestión de eventos en un componente de interfaz de usuario durante una prueba negativa de estabilidad?"
pasos:
  - "Configurar el monitor de memoria del navegador o herramienta de profiling."
  - "Ejecutar el ciclo de vida del componente (crear, destruir, crear, destruir)."
  - "Analizar el gráfico de uso de memoria en busca de tendencias ascendentes no liberadas."
explicacion: "Una fuga de memoria se manifiesta como un crecimiento continuo del uso de memoria que no se recupera tras la destrucción del objeto, lo cual se detecta visualmente en herramientas de profiling."
```

### 7 — Validación de inyección SQL básica
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["security", "sql-injection", "input"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Enviar el string `' OR '1'='1` en un campo de usuario que no utiliza parametrización de consultas es un caso negativo crítico para verificar la vulnerabilidad a inyección SQL."
pasos:
  - "Identificar puntos de entrada de datos del usuario hacia la base de datos."
  - "Insertar payloads comunes de inyección."
  - "Verificar si la aplicación ejecuta la consulta maliciosa o la escapa correctamente."
explicacion: "Este es un ataque clásico de inyección SQL que busca alterar la lógica de la consulta. Los casos negativos de seguridad deben probar explícitamente estos vectores de ataque."
```

### 8 — Completar código de estado HTTP para recursos no encontrados
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["http", "status-code", "rest"]
respuesta: "404"
tipo: completar
respuestas_validas:
  - "404"
  - "404 Not Found"
enunciado:
  - "Al probar un caso negativo donde se solicita la eliminación de un recurso que ya no existe en la base de datos, ¿qué código de estado HTTP debería devolver una API REST bien diseñada para indicar que el recurso objetivo no fue encontrado?"
pasos:
  - "Eliminar el recurso vía DELETE exitoso previamente."
  - "Intentar eliminar el mismo recurso nuevamente."
  - "Verificar que la respuesta contenga el código 404."
explicacion: "El código 404 indica que el servidor no puede encontrar el recurso solicitado. Es la respuesta correcta para operaciones sobre entidades inexistentes, a diferencia de 410 (Gone) si se sabe que fue eliminado permanentemente y no se reinstalará."
```

### 9 — Manejo de archivos binarios corruptos
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["file-upload", "binary", "corruption"]
opciones_explicitas:
  - "El sistema debe rechazar el archivo y mostrar un error de formato inválido."
  - "El sistema debe convertir el archivo a texto plano automáticamente."
  - "El sistema debe ignorar el archivo y continuar el proceso."
  - "El sistema debe guardar el archivo tal cual sin validación."
respuesta: "El sistema debe rechazar el archivo y mostrar un error de formato inválido."
tipo: mc
enunciado:
  - "En una prueba de carga de archivos, se sube un archivo con la extensión `.pdf` pero cuyo contenido es una imagen PNG corrupta. ¿Cuál es el comportamiento esperado de un validador de tipos de archivo robusto?"
pasos:
  - "Crear un archivo con extensión falsa y contenido incompatible."
  - "Subirlo mediante la interfaz de carga."
  - "Verificar que el backend valide el 'magic number' o el tipo MIME real, no solo la extensión."
explicacion: "La validación por extensión es insuficiente. Los casos negativos deben probar que el sistema detecta la discrepancia entre la extensión y el contenido binario real para prevenir ejecución de código malicioso o corrupción."
```

### 10 — Validación de caracteres Unicode especiales
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["unicode", "encoding", "internationalization"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Enviar caracteres Unicode de control (como U+0000 NUL) en un campo de texto es un caso negativo válido para verificar que la aplicación maneja correctamente la codificación y no falla al procesar strings."
pasos:
  - "Identificar los rangos de caracteres permitidos por el sistema."
  - "Incluir caracteres de control o no imprimibles en la entrada."
  - "Verificar que el sistema los escape, los rechace o los maneje sin crash."
explicacion: "Los caracteres de control pueden causar problemas de serialización, almacenamiento o renderizado. Las pruebas de internacionalización (i18n) deben incluir casos de bordes con caracteres especiales."
```

### 11 — Completar comando para verificar puertos abiertos
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["network", "port", "diagnostic"]
respuesta: "telnet"
tipo: completar
respuestas_validas:
  - "telnet"
  - "nc"
  - "netcat"
enunciado:
  - "Para verificar en un entorno de prueba si un servicio específico está escuchando en un puerto cerrado o bloqueado por firewall (caso negativo de conectividad), ¿qué comando de línea de comandos clásico se usa para intentar establecer una conexión TCP?"
pasos:
  - "Identificar el puerto objetivo que debería estar cerrado."
  - "Ejecutar el intento de conexión desde la máquina cliente."
  - "Observar si la conexión se timeorea o es rechazada inmediatamente."
explicacion: "`telnet` o `nc` (netcat) permiten probar la conectividad de nivel de transporte. Si el puerto está cerrado, se recibe un 'Connection refused' o un timeout, confirmando el bloqueo."
```

### 12 — Detección de race conditions en actualizaciones
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["concurrency", "race-condition", "database"]
opciones_explicitas:
  - "Enviar dos solicitudes de actualización simultáneas del mismo recurso y verificar la consistencia final."
  - "Enviar una solicitud con datos inválidos."
  - "Apagar el servidor durante la solicitud."
  - "Cambiar la resolución de DNS."
respuesta: "Enviar dos solicitudes de actualización simultáneas del mismo recurso y verificar la consistencia final."
tipo: mc
enunciado:
  - "¿Cuál es el enfoque correcto para probar un caso negativo de concurrencia (race condition) en un sistema de gestión de inventario donde dos usuarios intentan reducir la misma cantidad de stock al mismo tiempo?"
pasos:
  - "Leer el stock actual."
  - "Lanzar dos peticiones paralelas para restar 1 unidad."
  - "Verificar que el stock final sea correcto y no negativo, y que no se hayan procesado las dos restas independientemente si la lógica es atómica."
explicacion: "Las race conditions ocurren cuando la ejecución depende del orden de temporización. La prueba negativa consiste en forzar la concurrencia para ver si el sistema protege la integridad de los datos."
```

### 13 — Validación de longitud de cadena mínima
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["input-validation", "string", "length"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Si un campo requiere una contraseña de al menos 8 caracteres, enviar una cadena de 7 caracteres es un caso negativo válido para verificar la validación del lado del cliente y del servidor."
pasos:
  - "Definir la regla de longitud mínima."
  - "Crear un string con longitud `min - 1`."
  - "Enviar la solicitud y verificar el rechazo."
explicacion: "La validación de longitud es un requisito de seguridad básico. Los casos negativos deben probar los límites justos por debajo del mínimo permitido."
```

### 14 — Completar header HTTP para forzar caché
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["http", "cache", "headers"]
respuesta: "Cache-Control: no-cache"
tipo: completar
respuestas_validas:
  - "Cache-Control: no-cache"
  - "Pragma: no-cache"
enunciado:
  - "Al probar la actualización de un recurso en una aplicación web, a veces es necesario evitar que el navegador devuelva una versión en caché (lo que podría ocultar bugs de actualización). ¿Qué valor del header `Cache-Control` se debe usar para solicitar al navegador que no use la copia en caché?"
pasos:
  - "Identificar la respuesta que contiene datos dinámicos."
  - "Configurar la petición de prueba con el header adecuado."
  - "Verificar que se reciban los datos actualizados directamente del servidor."
explicacion: "`Cache-Control: no-cache` obliga al navegador a pedirle al servidor una validación antes de usar la copia en caché, asegurando que se pruebe la lógica de actualización real."
```

### 15 — Manejo de errores de serialización JSON
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["json", "parsing", "error-handling"]
opciones_explicitas:
  - "Verificar que el servidor devuelva un 400 Bad Request con detalles del error de sintaxis."
  - "Verificar que el servidor devuelva un 200 OK con datos vacíos."
  - "Verificar que el servidor devuelva un 500 Internal Server Error sin detalles."
  - "Verificar que el servidor cierre la conexión TCP."
respuesta: "Verificar que el servidor devuelva un 400 Bad Request con detalles del error de sintaxis."
tipo: mc
enunciado:
  - "Al enviar un payload JSON mal formado (ej. comillas simples donde van dobles, o comas finales) a una API REST, ¿cuál es la respuesta negativa esperada según las buenas prácticas?"
pasos:
  - "Construir un JSON inválido."
  - "Enviar la solicitud."
  - "Inspeccionar el código de estado y el cuerpo de la respuesta."
explicacion: "Un 400 Bad Request es la respuesta estándar para errores de sintaxis del cliente. Devolver 500 sugiere un error interno del servidor, lo cual es engañoso para el desarrollador que integra la API."
```

### 16 — Validación de permisos de directorio
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["linux", "permissions", "file-system"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Al probar la subida de archivos en un servidor Linux, cambiar los permisos del directorio de destino a `777` (lectura, escritura y ejecución para todos) es un caso negativo de seguridad que debe identificarse y corregirse."
pasos:
  - "Inspeccionar los permisos del directorio de upload."
  - "Simular un atacante intentando escribir scripts ejecutables."
  - "Verificar que los permisos sean estrictos (ej. 755 o 750)."
explicacion: "Los permisos 777 permiten que cualquier usuario del sistema escriba y ejecute código en el directorio, lo que es un riesgo crítico de seguridad. Las pruebas de QA deben auditar esto."
```

### 17 — Completar función de mock en Jest
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["jest", "mock", "unit-testing"]
respuesta: "mockRejectedValue"
tipo: completar
respuestas_validas:
  - "mockRejectedValue"
  - "mockRejectedValues"
enunciado:
  - "En una prueba unitaria con Jest, si se desea simular que una función asíncrona (promise) falla lanzando una excepción, ¿qué método del objeto mock se debe invocar después de definir el mock?"
pasos:
  - "Crear el mock de la función dependiente."
  - "Configurar el comportamiento de rechazo de la promesa."
  - "Esperar que el código consumidor maneje el error correctamente."
explicacion: "`mockRejectedValue` es el método específico de Jest para simular el estado `rejected` de una Promise, permitiendo probar los bloques `catch` o `try/catch`."
```

### 18 — Detección de errores de redondeo
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["floating-point", "precision", "finance"]
opciones_explicitas:
  - "Verificar que la suma de 0.1 + 0.2 sea exactamente 0.3 sin errores de punto flotante."
  - "Verificar que la suma sea 0.30000000000000004."
  - "Verificar que el sistema lance un error de división por cero."
  - "Verificar que el sistema ignore los decimales."
respuesta: "Verificar que la suma de 0.1 + 0.2 sea exactamente 0.3 sin errores de punto flotante."
tipo: mc
enunciado:
  - "En un sistema financiero, ¿cuál es el caso negativo crítico a probar respecto a la precisión de números de punto flotante?"
pasos:
  - "Realizar operaciones aritméticas con decimales comunes."
  - "Comparar el resultado computacional con el valor matemático esperado."
  - "Asegurar que se use aritmética de precisión fija (BigInt o librerías decimales) si es necesario."
explicacion: "Los floats IEEE 754 tienen errores de representación (0.1 + 0.2 != 0.3). Los casos negativos deben verificar que el sistema maneje esto correctamente (redondeo o tipo decimal) para evitar pérdidas de dinero."
```

### 19 — Validación de caracteres especiales en URLs
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["url", "encoding", "xss"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Enviar caracteres no escapados como `<`, `>`, `&` o espacios en una URL query parameter es un caso negativo para probar la vulnerabilidad a XSS (Cross-Site Scripting) o la correcta codificación URL."
pasos:
  - "Construir una URL con caracteres reservados sin codificar."
  - "Acceder a la URL desde el navegador."
  - "Verificar si el navegador o el servidor los codifica automáticamente o bloquea la solicitud."
explicacion: "Los caracteres especiales deben estar codificados (ej. `%3C` para `<`) para evitar que se interpreten como HTML/JS. Las pruebas de seguridad verifican que el sistema no renderice estos caracteres como código ejecutable."
```

### 20 — Completar flag de verbose en Git
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["git", "debugging", "logs"]
respuesta: "-v"
tipo: completar
respuestas_validas:
  - "-v"
  - "--verbose"
enunciado:
  - "Al depurar un caso negativo donde un comando de Git (como `git push` o `git merge`) falla silenciosamente o con un mensaje genérico, ¿qué flag se añade para obtener salida detallada del proceso?"
pasos:
  - "Identificar el comando Git que falla."
  - "Añadir el flag de verbosidad al comando."
  - "Leer la salida estándar para ver los pasos internos y el punto de fallo."
explicacion: "El flag `-v` o `--verbose` hace que las herramientas de Git impriman información detallada sobre las operaciones internas, útil para diagnosticar fallos de red, permisos o conflictos."
```

### 21 — Manejo de timeouts en Selenium
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["selenium", "wait", "timeout"]
opciones_explicitas:
  - "Usar `WebDriverWait` con un tiempo de espera explícito para el elemento."
  - "Usar `Thread.sleep()` con un valor fijo alto."
  - "Ignorar el error y continuar con el siguiente paso."
  - "Reiniciar el navegador automáticamente."
respuesta: "Usar `WebDriverWait` con un tiempo de espera explícito para el elemento."
tipo: mc
enunciado:
  - "Al probar un caso negativo donde un botón tarda mucho en habilitarse tras una acción, ¿cuál es la práctica recomendada para esperar la condición sin causar falsos positivos por tiempos fijos?"
pasos:
  - "Definir la condición de espera (ej. `elementToBeClickable`)."
  - "Configurar el tiempo máximo de espera."
  - "Ejecutar la prueba y verificar que el script espere dinámicamente."
explicacion: "`Thread.sleep()` es rígido y lento. `WebDriverWait` (implicito o explícito) permite que el script continúe tan pronto como la condición se cumple, haciendo las pruebas más robustas y rápidas."
```

### 22 — Validación de fechas futuras
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["date", "validation", "business-logic"]
respuesta: verdadero
tipo: vf
enunciado:
  - "En un formulario de reserva de citas, enviar una fecha de finalización anterior a la fecha de inicio es un caso negativo válido para verificar la lógica de negocio que impide intervalos de tiempo inválidos."
pasos:
  - "Seleccionar una fecha de inicio."
  - "Seleccionar una fecha de fin anterior a la de inicio."
  - "Enviar el formulario y verificar que el sistema muestre un error de validación."
explicacion: "La lógica de negocio debe impedir relaciones temporales imposibles. Las pruebas de casos negativos deben cubrir estos escenarios de datos inconsistentes proporcionados por el usuario."
```

### 23 — Completar comando para listar conexiones activas
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["network", "connections", "diagnostic"]
respuesta: "netstat"
tipo: completar
respuestas_validas:
  - "netstat"
  - "ss"
enunciado:
  - "Para diagnosticar si un servicio está escuchando en el puerto correcto y si hay conexiones en estado `TIME_WAIT` o `CLOSE_WAIT` tras probar un caso negativo de cierre de conexión, ¿qué comando se usa en Linux para listar las estadísticas de red?"
pasos:
  - "Ejecutar el comando antes y después de la prueba."
  - "Filtrar por el puerto de interés."
  - "Analizar los estados de las conexiones para detectar fugas o bloqueos."
explicacion: "`netstat` o `ss` muestran el estado de las conexiones TCP/IP. Los estados `CLOSE_WAIT` indican que la aplicación no ha cerrado localmente la conexión, un bug común."
```

### 24 — Detección de errores de concurrencia en caché
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["cache", "redis", "race-condition"]
opciones_explicitas:
  - "Verificar que múltiples hilos lean el mismo valor de caché mientras se actualiza la fuente de datos."
  - "Verificar que el caché se vacíe completamente al escribir."
  - "Verificar que el caché use compresión."
  - "Verificar que el caché tenga una clave única para cada usuario."
respuesta: "Verificar que múltiples hilos lean el mismo valor de caché mientras se actualiza la fuente de datos."
tipo: mc
enunciado:
  - "¿Cuál es un caso negativo crítico a probar en un sistema de caché distribuido (ej. Redis) para evitar inconsistencias de datos?"
pasos:
  - "Simular lecturas concurrentes de un dato que está siendo actualizado."
  - "Verificar que no se lean valores parciales o desactualizados."
  - "Usar mecanismos de locking o versionado si es necesario."
explicacion: "El 'cache stampede' o lecturas inconsistentes ocurren cuando muchos hilos piden un dato que acaba de expirar o estar siendo regenerado, sobrecargando la base de datos o devolviendo datos viejos."
```

### 25 — Validación de caracteres nulos en XML
```
metadata:
  materia: "qa-testing"
  tema: "casos-negativos"
  nivel: "intermedio"
  tags: ["xml", "parsing", "null-char"]
respuesta: verdadero
tipo: vf
enunciado:
  - "Incluir caracteres nulos (0x00) en un documento XML es un caso negativo válido, ya que el estándar XML prohíbe explícitamente los caracteres de control C0 (excepto tab, LF, CR) y los procesadores deben rechazarlos."
pasos:
  - "Crear un XML con un nodo `<data>` conteniendo un carácter null."
  - "Intentar parsear el documento."
  - "Verificar que el analizador lance un error de sintaxis."
explicacion: "Los caracteres nulos pueden causar truncamiento de strings o vulnerabilidades de buffer en lenguajes como C/C++. El estándar XML 1.0 los excluye, por lo que su presencia es un error de validación."
```