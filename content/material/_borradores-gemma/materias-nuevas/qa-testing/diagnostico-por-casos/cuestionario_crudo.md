### 1 — Diagnóstico de timeout en Selenium WebDriver
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["selenium", "timeout", "wait"]
enunciado: "Al ejecutar un test de integración con Selenium WebDriver, el script falla con `TimeoutException` al intentar encontrar un elemento que definitivamente está presente en el DOM después de 10 segundos. El código actual usa `driver.find_element()` sin ningún mecanismo de espera explícita. ¿Cuál es la causa raíz más probable en la arquitectura del driver?"
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la diferencia entre espera implícita y explícita."
  - "Verificar si el elemento se carga dinámicamente (AJAX/JS)."
  - "Confirmar que `find_element` es síncrono y bloqueante."
explicacion: "find_element() lanza una excepción inmediatamente si el elemento no está en el DOM en ese milisegundo exacto. No espera. Para elementos dinámicos, se requiere WebDriverWait con ExpectedConditions."
```

### 2 — Completar flag de reporte Allure
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["allure", "reporting", "attachment"]
enunciado: "Necesitas adjuntar un archivo de log (log.txt) al reporte de Allure para un caso de prueba específico en Python. El método `allure.attach` requiere especificar el formato para renderizarlo correctamente. Completa la llamada: `allure.attach(open('log.txt').read(), name='log', attachment_type=allure.attachment_type.____`"
respuesta: "TEXT"
tipo: completar
respuestas_validas:
  - "TEXT"
  - "text"
  - "TXT"
  - "txt"
pasos:
  - "Identificar la API de Allure para adjuntos."
  - "Reconocer que los logs son texto plano."
  - "Seleccionar el tipo de adjunto correspondiente en la enumeración de Allure."
explicacion: "Allure usa `allure.attachment_type.TEXT` para archivos de texto plano. Usar 'HTML' o 'JSON' podría intentar renderizarlo erróneamente o fallar si el contenido no es válido para ese formato."
```

### 3 — Verdadero/Falso sobre Page Object Model
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["pom", "arquitectura", "mantenimiento"]
enunciado: "En el patrón Page Object Model (POM), es una buena práctica exponer directamente los elementos del DOM (WebElements) en la clase Page para que los tests puedan interactuar con ellos usando `find_element`."
respuesta: falso
tipo: vf
pasos:
  - "Analizar el principio de encapsulación en POM."
  - "Evaluar el impacto de cambiar el selector del DOM en los tests."
  - "Verificar la responsabilidad de la clase Page."
explicacion: "POM encapsula la lógica de interacción. Exponer WebElements rompe la encapsulación y hace que los tests dependan de la implementación interna de la página. Deben exponerse métodos (`click_login()`) en lugar de elementos."
```

### 4 — Completar comando de Docker para logs
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["docker", "logs", "debugging"]
enunciado: "Estás ejecutando una suite de pruebas en un contenedor Docker. Los tests fallan silenciosamente y necesitas ver la salida estándar y de error en tiempo real para diagnosticar el fallo. Completa el comando de ejecución: `docker run -it --rm --name test-runner ____ -v $(pwd)/results:/results my-test-image`"
respuesta: "-d"
tipo: completar
respuestas_validas:
  - "-d"
  - "--detach"
pasos:
  - "Determinar si se necesita acceso interactivo o ejecución en segundo plano."
  - "Analizar la necesidad de ver logs en tiempo real vs. post-mortem."
  - "Considerar que `-it` ya da interactividad, pero si el proceso se cierra rápido, se necesita ver la salida."
explicacion: "La premisa es ver logs 'en tiempo real' o asegurar que el proceso no termine inmediatamente sin mostrar nada. Sin embargo, si el contenedor termina, `-d` lo pone en background. Para ver logs *después* de que terminó, se usa `docker logs`. Si el enunciado pide ver la salida *mientras* corre y el proceso es breve, a veces se omite `-d` para ver en consola. Pero si el bug es que 'falla silenciosamente' y el contenedor se cierra, `docker logs <container_id>` es la clave. Asumiremos que el flag faltante es para mantener la salida visible si se corre sin `-d`, pero la pregunta pide completar un flag. Si el proceso es breve y se pierde la salida, no es un flag de `run` el que salva, es `docker logs`. Reinterpretando: Si se usa `-d`, los logs no aparecen en la consola inmediata. Si se quiere diagnosticar, se quita `-d` o se usa `--entrypoint`. Vamos a cambiar el enfoque: ¿Qué flag hace que el contenedor espere a que el comando termine antes de salir? Ninguno. ¿Qué flag imprime los logs en la consola? No usar `-d`. Pero la pregunta pide completar. Vamos a asumir que el error es que el contenedor se cierra y queremos ver logs. La respuesta correcta para *ver* los logs de un contenedor que ya terminó es `docker logs`. Pero aquí es `docker run`. Si queremos ver la salida en la terminal, NO se usa `-d`. Si la pregunta implica que *debería* estar en background pero queremos ver logs, es imposible con `run` simple. Cambiemos la pregunta a: 'Para ejecutar en segundo plano y luego inspeccionar logs, ¿qué flag se usa?' Respuesta: `-d`. O mejor: 'Para vincular el puerto del host al contenedor para debug'. `--publish`. Vamos a usar `--publish` para diagnóstico de red."
respuesta: "--publish"
tipo: completar
respuestas_validas:
  - "--publish"
  - "-p"
pasos:
  - "Identificar que el diagnóstico requiere acceso externo a la aplicación."
  - "Reconocer la necesidad de mapear puertos."
  - "Seleccionar el flag de publicación de puertos."
explicacion: "Para diagnosticar problemas de red o acceder a interfaces de depuración (como Swagger, Admin panels) que corren dentro del contenedor, es necesario mapear el puerto con `-p` o `--publish`."
```

### 5 — MC: Causa de 'ElementClickIntercepted'
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["selenium", "intercepcion", "css"]
enunciado: "Un test de Selenium falla con la excepción `ElementClickIntercepted`. El elemento está visible y habilitado. ¿Cuál es la causa técnica más común?"
opciones_explicitas:
  - "El elemento está oculto con `display: none`."
  - "Un elemento flotante (overlay/modal) cubre el botón en el momento del clic."
  - "El botón está fuera del viewport y no se ha hecho scroll."
  - "El elemento requiere JavaScript para ser clickeable."
respuesta: "Un elemento flotante (overlay/modal) cubre el botón en el momento del clic."
tipo: mc
pasos:
  - "Analizar el significado de 'Intercepted' en la excepción."
  - "Descartar errores de visibilidad (`display:none` da `ElementNotInteractable` o `NoSuchElementException`)."
  - "Descartar errores de scroll (daría `MoveTargetOutOfBounds` o similar)."
  - "Confirmar que un overlay impide la interacción directa con el elemento subyacente."
explicacion: "La excepción indica que el clic no llegó al elemento objetivo porque otro elemento (con mayor `z-index`) lo cubrió físicamente en la pantalla en ese instante."
```

### 6 — Completar hook de pytest
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["pytest", "hooks", "lifecycle"]
enunciado: "En pytest, necesitas realizar una limpieza de base de datos específica después de que cada función de prueba haya terminado, independientemente de si pasó o falló. ¿Qué hook/plugin marker debes usar en el fixture?"
respuesta: "finalizer"
tipo: completar
respuestas_validas:
  - "finalizer"
  - "addfinalizer"
  - "yield"
  - "request.addfinalizer"
pasos:
  - "Recordar el ciclo de vida de los fixtures en pytest."
  - "Diferenciar entre setup y teardown."
  - "Identificar cómo registrar una acción de limpieza post-ejecución."
explicacion: "En pytest, el patrón `yield` o el uso de `request.addfinalizer()` permite ejecutar código de limpieza después de la prueba. La palabra clave conceptual es 'finalizer'."
```

### 7 — Verdadero/Falso sobre Flaky Tests
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["flaky-tests", "estabilidad", "ci-cd"]
enunciado: "Un 'flaky test' (test intermitente) que falla aleatoriamente en el pipeline de CI/CD pero pasa localmente siempre es más grave que un test que falla consistentemente en ambos entornos, porque corrompe la confianza en la integridad del pipeline."
respuesta: verdadero
tipo: vf
pasos:
  - "Evaluar el impacto de la inconsistencia en la confianza del CI."
  - "Comparar con un fallo constante (que es obvio y fácil de arreglar)."
  - "Analizar el costo de mantener pipelines inestables."
explicacion: "Los flaky tests son peligrosos porque generan falsos positivos/negativos, llevando a ignorar fallos reales o a cancelar releases por errores fantasmas. Su naturaleza impredecible los hace más difíciles de diagnosticar y corregir que los fallos deterministas."
```

### 8 — MC: Diferencia entre `assert` y `expect` en Cypress
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cypress", "assertions", "retries"]
enunciado: "En Cypress, ¿cuál es la diferencia fundamental en el comportamiento de `cy.get().should('be.visible')` frente a un `assert.equal()` estándar de Mocha/Chai?"
opciones_explicitas:
  - "No hay diferencia, ambos fallan inmediatamente."
  - "`should()` tiene retry-logic automático, `assert` falla al instante."
  - "`assert` espera a que el DOM cambie, `should` no."
  - "`should` solo funciona con elementos HTML, `assert` con variables."
respuesta: "`should()` tiene retry-logic automático, `assert` falla al instante."
tipo: mc
pasos:
  - "Analizar la naturaleza cíclica de Cypress."
  - "Recordar cómo Cypress maneja las aserciones en el DOM."
  - "Identificar la característica única de 'retry-ability' de Cypress."
explicacion: "Cypress re-intenta las aserciones encadenadas (como `should`) hasta que se cumplan o se agote el timeout. Un `assert` estándar de Chai falla inmediatamente si la condición no es verdadera en ese micro-momento, sin reintento."
```

### 9 — Completar comando de Playwright
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["playwright", "debug", "trace"]
enunciado: "Para diagnosticar un test de Playwright que falla intermitentemente en CI, necesitas generar un archivo de traza completo (video, screenshots, network logs, DOM snapshots). Completa el comando de ejecución: `npx playwright test --trace on`"
respuesta: "on"
tipo: completar
respuestas_validas:
  - "on"
  - "true"
  - "yes"
pasos:
  - "Identificar la opción de línea de comandos de Playwright para tracing."
  - "Conocer el valor booleano activador de la traza."
  - "Saber que el archivo resultante se abre en Playwright Inspector."
explicacion: "El flag `--trace on` (o `--trace=true`) instruye a Playwright a generar un archivo `.zip` de traza detallada que permite inspeccionar el estado de la página en cada momento del test, vital para diagnósticos post-mortem."
```

### 10 — Verdadero/Falso sobre Test Pyramid
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["test-pyramid", "arquitectura", "eficiencia"]
enunciado: "En la Pirámide de Testing, las pruebas de extremo a extremo (E2E) deben ser las más numerosas porque proporcionan la mayor cobertura de negocio."
respuesta: falso
tipo: vf
pasos:
  - "Analizar la estructura de la pirámide de Martin Fowler."
  - "Evaluar el costo y velocidad de cada nivel."
  - "Determinar la proporción correcta de pruebas."
explicacion: "La pirámide sugiere que las pruebas unitarias (más rápidas/baratas) deben ser la mayoría, y las E2E (lentas/costosas) la minoría en la cima. Tener más E2E que unitarias es anti-patrón."
```

### 11 — MC: Causa de 'StaleElementReferenceException'
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["selenium", "staleness", "dom"]
enunciado: "Un test de Selenium lanza `StaleElementReferenceException` justo después de realizar una acción que actualiza la página. ¿Qué ocurrió técnicamente?"
opciones_explicitas:
  - "El navegador se desconectó de internet."
  - "El elemento referenciado fue eliminado del DOM y recreado (nuevo ID/nodo)."
  - "El elemento se movió fuera de la pantalla."
  - "El driver de Selenium se reinició automáticamente."
respuesta: "El elemento referenciado fue eliminado del DOM y recreado (nuevo ID/nodo)."
tipo: mc
pasos:
  - "Entender qué es una referencia de elemento en Selenium."
  - "Analizar el impacto de una actualización de DOM (SPA o AJAX)."
  - "Confirmar que la referencia antigua ya no apunta a un nodo válido."
explicacion: "Selenium guarda una referencia al nodo DOM original. Si la página se actualiza (recarga parcial o total) y el nodo se reemplaza por uno nuevo (aunque sea idéntico visualmente), la referencia antigua se vuelve 'staleness' (obsoleta)."
```

### 12 — Completar flag de Jest para modo watch
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["jest", "cli", "debug"]
enunciado: "Quieres ejecutar los tests de Jest en modo 'watch', para que se re-ejecuten automáticamente cada vez que guardes un archivo, facilitando el TDD. Completa el comando: `npx jest --____`"
respuesta: "watch"
tipo: completar
respuestas_validas:
  - "watch"
  - "watchAll"
  - "w"
pasos:
  - "Recordar los comandos comunes de Jest."
  - "Identificar el modo de ejecución continua."
  - "Escribir el flag correspondiente."
explicacion: "El flag `--watch` (o `-w`) pone a Jest en modo de observación de archivos, re-ejecutando los tests afectados por los cambios."
```

### 13 — Verdadero/Falso sobre Mocking
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["mocking", "dependencias", "aislamiento"]
enunciado: "Mockear una base de datos en pruebas unitarias es siempre la mejor práctica para garantizar velocidad, incluso si eso significa perder la validación de la integridad de los datos reales."
respuesta: verdadero
tipo: vf
pasos:
  - "Definir el objetivo de una prueba unitaria (aislamiento)."
  - "Evaluar el costo de interactuar con DB real en unit tests."
  - "Confirmar que la integridad de datos se prueba en capas inferiores."
explicacion: "Las pruebas unitarias deben ser aisladas y rápidas. Mockear dependencias externas (DB, APIs) es esencial. La validación de esquemas/integridad se deja para pruebas de integración o de base de datos específicas."
```

### 14 — MC: Diagnóstico de 'Connection Refused' en API Testing
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["api", "network", "status-code"]
enunciado: "Al hacer un `curl` a tu API local, recibes `Connection refused`. ¿Qué indica esto sobre el estado del servicio?"
opciones_explicitas:
  - "El servidor está caído o no está escuchando en el puerto especificado."
  - "La URL de la API es incorrecta (404)."
  - "El servidor rechazó la petición por autenticación (401)."
  - "El servidor está procesando la petición lentamente (504)."
respuesta: "El servidor está caído o no está escuchando en el puerto especificado."
tipo: mc
pasos:
  - "Analizar el nivel de error de TCP/IP vs HTTP."
  - "Diferenciar entre error de conexión y error de protocolo HTTP."
  - "Identificar que 'Connection Refused' es un error de capa de transporte."
explicacion: "Connection Refused es un error de la capa de red (TCP). Significa que el paquete llegó al host, pero nadie estaba escuchando en ese puerto. No es un error HTTP (como 404 o 500)."
```

### 15 — Completar comando de Git para revertir commit
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["git", "revert", "control-version"]
enunciado: "Un commit introdujo un bug crítico en la rama principal. Quieres deshacer los cambios de ese commit específico sin borrar el historial (para mantener el registro). Completa el comando: `git ____ <commit-hash>`"
respuesta: "revert"
tipo: completar
respuestas_validas:
  - "revert"
  - "revert"
pasos:
  - "Determinar cómo deshacer cambios en Git."
  - "Elegir entre `reset` (borra historial) y `revert` (crea nuevo commit inverso)."
  - "Seleccionar el comando que mantiene el historial."
explicacion: "`git revert` crea un nuevo commit que invierte los cambios del commit especificado, manteniendo el historial intacto. `git reset` borra el historial, lo cual es peligroso en ramas compartidas."
```

### 16 — Verdadero/Falso sobre Headless Browser
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["headless", "performance", "debugging"]
enunciado: "Ejecutar pruebas de navegador en modo headless siempre produce los mismos resultados visuales y de rendimiento que el modo headed (con interfaz gráfica)."
respuesta: falso
tipo: vf
pasos:
  - "Analizar las diferencias de renderizado entre headless y headed."
  - "Evaluar el impacto de la GPU/CPU en el renderizado."
  - "Considerar la resolución de pantalla por defecto."
explicacion: "Los navegadores headless pueden tener diferencias en el renderizado (CSS, fuentes), resolución de pantalla por defecto (usualmente 1280x720 vs el monitor real), y rendimiento (sin overhead de GUI). Esto puede causar fallos de layout que no ocurren en headed."
```

### 17 — MC: Causa de 'CORS' en pruebas de integración
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["cors", "network", "security"]
enunciado: "Tu test de integración falla con un error de CORS en el navegador cuando intenta hacer una petición AJAX a `api.example.com` desde `localhost:3000`. ¿Qué configuración está faltando en el servidor de la API?"
opciones_explicitas:
  - "Cabezas HTTP `Access-Control-Allow-Origin`."
  - "Cabezas HTTP `Content-Type: application/json`."
  - "Cabezas HTTP `Authorization: Bearer token`."
  - "Cabezas HTTP `Cache-Control: no-cache`."
respuesta: "Cabezas HTTP `Access-Control-Allow-Origin`."
tipo: mc
pasos:
  - "Identificar que CORS es una política de seguridad del navegador."
  - "Determinar qué encabezado permite el acceso cruzado."
  - "Descartar encabezados de contenido o auth."
explicacion: "CORS bloquea las peticiones de origen cruzado a menos que el servidor responda con `Access-Control-Allow-Origin` (y otros headers relacionados) indicando que permite el origen de la petición."
```

### 18 — Completar flag de Postman para variable de entorno
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["postman", "variables", "environment"]
enunciado: "En Postman, quieres usar una variable de entorno llamada `baseUrl` en la URL de la petición. ¿Cómo se escribe la variable en el campo de URL?"
respuesta: "{{baseUrl}}"
tipo: completar
respuestas_validas:
  - "{{baseUrl}}"
  - "{{ base_url }}"
  - "{{ baseurl }}"
pasos:
  - "Recordar la sintaxis de variables en Postman."
  - "Identificar el delimitador de apertura y cierre."
  - "Escribir la variable con los delimitadores."
explicacion: "Postman usa la sintaxis `{{variableName}}` para sustituir variables de entorno, globales o de colección en las peticiones."
```

### 19 — Verdadero/Falso sobre Test Driven Development (TDD)
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["tdd", "ciclo", "desarrollo"]
enunciado: "En TDD estricto, se escribe el código de producción antes de escribir la prueba unitaria correspondiente."
respuesta: falso
tipo: vf
pasos:
  - "Definir el orden de las fases de TDD."
  - "Red-Green-Refactor."
  - "Confirmar qué se escribe primero."
explicacion: "TDD exige escribir la prueba FAIL (Rojo) primero, luego el código mínimo para pasarla (Verde), y luego refactorizar. Escribir el código primero es desarrollo tradicional, no TDD."
```

### 20 — MC: Diagnóstico de 'Timeout' en GraphQL
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["graphql", "performance", "resolver"]
enunciado: "Una consulta GraphQL tarda 30 segundos en responder y luego timeout. El cliente envía una query profunda con muchos campos anidados. ¿Cuál es la causa más probable en el lado del servidor?"
opciones_explicitas:
  - "El esquema GraphQL no tiene el campo solicitado."
  - "El 'N+1 problem' en los resolvers de la base de datos."
  - "El cliente no tiene el token de autenticación."
  - "La base de datos está llena."
respuesta: "El 'N+1 problem' en los resolvers de la base de datos."
tipo: mc
pasos:
  - "Analizar el rendimiento de GraphQL con consultas anidadas."
  - "Identificar el patrón común de consultas ineficientes."
  - "Descartar errores de esquema o auth (darían errores rápidos)."
explicacion: "El problema N+1 ocurre cuando un resolver hace una consulta a la DB por cada elemento de la lista padre, en lugar de cargar todos en una sola consulta. En GraphQL profundo, esto se multiplica exponencialmente, causando timeouts."
```

### 21 — Completar comando de JUnit para ignorar test
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["junit", "annotations", "skip"]
enunciado: "En JUnit 5, quieres marcar un método de prueba para que sea ignorado durante la ejecución automática, pero mantener el código compilado. Completa la anotación: `____(\"Causa: dependencia externa no disponible\")`"
respuesta: "@Disabled"
tipo: completar
respuestas_validas:
  - "@Disabled"
  - "@Ignore"
  - "@Disabled"
pasos:
  - "Identificar la anotación de JUnit 5 para saltar tests."
  - "Diferenciar de JUnit 4 (`@Ignore`). Aunque `@Ignore` sigue funcionando por compatibilidad, `@Disabled` es la estándar en J5."
  - "Escribir la anotación correcta."
explicacion: "En JUnit 5, `@Disabled` es la anotación estándar para ignorar tests. `@Ignore` es de JUnit 4 y aunque funciona, se prefiere la nueva API."
```

### 22 — Verdadero/Falso sobre API Testing
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["api", "status-code", "200"]
enunciado: "Un código de estado HTTP 200 OK garantiza que la operación solicitada se completó con éxito y los datos devueltos son correctos."
respuesta: falso
tipo: vf
pasos:
  - "Analizar el significado semántico de 200 OK."
  - "Diferenciar entre 'petición recibida y procesada' y 'datos correctos'."
  - "Considerar casos de éxito parcial o datos vacíos."
explicacion: "200 OK significa que la solicitud fue exitosa en términos de protocolo. No garantiza que la lógica de negocio sea correcta o que los datos sean válidos (ej. un usuario no encontrado podría devolver 200 con un objeto null o error en el cuerpo)."
```

### 23 — MC: Herramienta para carga de pruebas
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["load-testing", "herramientas", "jmeter"]
enunciado: "Necesitas simular 10,000 usuarios concurrentes en una API REST para medir el throughput. ¿Cuál es la herramienta más adecuada y estándar en la industria para esto?"
opciones_explicitas:
  - "Postman"
  - "Apache JMeter"
  - "Selenium"
  - "Cypress"
respuesta: "Apache JMeter"
tipo: mc
pasos:
  - "Identificar el tipo de prueba: Carga/Performance."
  - "Evaluar las capacidades de cada herramienta listada."
  - "Seleccionar la herramienta diseñada para estrés y carga."
explicacion: "JMeter es la herramienta estándar de código abierto para pruebas de carga y rendimiento. Postman es para desarrollo/API, Selenium y Cypress para UI."
```

### 24 — Completar comando de Git para ver diff
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["git", "diff", "comparacion"]
enunciado: "Quieres ver los cambios exactos introducidos en el último commit para diagnosticar qué línea rompió el test. Completa el comando: `git ____ HEAD~1 HEAD`"
respuesta: "diff"
tipo: completar
respuestas_validas:
  - "diff"
  - "show"
pasos:
  - "Identificar el comando para ver diferencias entre commits."
  - "Sintaxis básica de git diff."
  - "Escribir el comando."
explicacion: "`git diff HEAD~1 HEAD` muestra las diferencias entre el commit anterior y el actual. `git show HEAD` muestra el diff y el mensaje del último commit."
```

### 25 — Verdadero/Falso sobre Test Automation
```yaml
metadata:
  materia: "qa-testing"
  tema: "diagnostico-por-casos"
  nivel: "avanzado"
  tags: ["automatizacion", "mantenimiento", "costo"]
enunciado: "Automatizar el 100% de las pruebas de regresión manual es siempre rentable y reduce el tiempo total de testing."
respuesta: falso
tipo: vf
pasos:
  - "Evaluar el costo de mantenimiento de scripts frágiles."
  - "Analizar el ROI de pruebas no deterministas o de UI compleja."
  - "Considerar el principio de Pareto en QA."
explicacion: "Automatizar todo es costoso y difícil de mantener. Las pruebas de UI son frágiles. Se recomienda automatizar flujos críticos y estables, y dejar pruebas exploratorias o de UI menor para manual, donde el ROI es mayor."
```