### 1 — Validación de estado HTTP en API REST
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["api", "http", "status-codes"]
tipo: vf
enunciado:
  "Al realizar una petición POST exitosa a un endpoint de creación de recurso, el código de estado HTTP 201 Created indica que la solicitud se ha comprendido y se ha cumplido."
respuesta: verdadero
pasos:
  - "Verificar la especificación HTTP/1.1 para el método POST."
  - "Confirmar que 201 es el código estándar para recursos creados."
  - "Diferenciar de 200 OK que puede usarse en actualizaciones."
explicacion: El código 201 se utiliza específicamente cuando una solicitud crea un nuevo recurso, diferenciándose del 200 que indica éxito genérico.
```

### 2 — Completar estructura de aserción en Jest
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["jest", "javascript", "assertions"]
tipo: completar
enunciado:
  "En Jest, para verificar que una función `calculateTotal` devuelve exactamente el número 150, se debe usar el método: expect(calculateTotal()).____(150);"
respuesta: "toBe"
respuestas_validas:
  - "toBe"
  - "toBeCloseTo"
pasos:
  - "Identificar que se requiere igualdad estricta para números primitivos."
  - "Seleccionar el matcher de Jest correspondiente."
  - "Evitar 'toEqual' si se busca identidad de valor estricta sin objetos."
explicacion: `toBe` usa `Object.is` para igualdad estricta, ideal para números y booleanos. `toEqual` hace comparación profunda, útil para objetos.
```

### 3 — Manejo de nulos en input de formulario
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["ui", "input", "edge-case"]
tipo: mc
enunciado:
  "Al probar un campo de texto obligatorio que acepta solo letras, ¿cuál es el caso borde más crítico para validar la robustez del frontend?"
opciones_explicitas:
  - "Ingresar espacios en blanco."
  - "Ingresar caracteres especiales como '@' o '#'. "
  - "Dejar el campo vacío."
  - "Ingresar una palabra larga de 100 caracteres."
respuesta: "Ingresar caracteres especiales como '@' o '#'. "
pasos:
  - "Analizar qué valores violan la restricción de 'solo letras'."
  - "Determinar si el sistema filtra o rechaza al enviar."
  - "Validar que el mensaje de error sea claro."
explicacion: Los espacios y el vacío son casos comunes, pero los caracteres especiales prueban la validación de regex o sanitización contra inyección o errores de parseo.
```

### 4 — Condición de carrera en tests paralelos
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["testing", "race-condition", "database"]
tipo: vf
enunciado:
  "En un entorno de pruebas integradas con base de datos, ejecutar tests en paralelo sin aislamiento de transacciones puede causar fallos intermitentes por contaminación de datos."
respuesta: verdadero
pasos:
  - "Considerar el acceso concurrente a la misma tabla."
  - "Evaluar el riesgo de que un test borre datos creados por otro."
  - "Confirmar que esto es un caso borde de infraestructura de testing."
explicacion: La falta de aislamiento es un problema clásico de integración, no un bug de código, pero resulta en falsos negativos.
```

### 5 — Completar configuración de timeout en Cypress
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["cypress", "timeout", "configuration"]
tipo: completar
enunciado:
  "Para aumentar el tiempo de espera máximo de un comando de cy.visit() en Cypress sin afectar globalmente la suite, se usa: cy.visit('/url', { timeout: ____ });"
respuesta: "50000"
respuestas_validas:
  - "50000"
  - "30000"
  - "60000"
pasos:
  - "Recordar que el timeout por defecto suele ser 30s (30000ms)."
  - "Establecer un valor mayor para recursos pesados."
  - "Asegurar que el valor sea un entero positivo en milisegundos."
explicacion: El timeout define cuánto espera Cypress antes de fallar. Ajustarlo localmente evita flaky tests en cargas lentas.
```

### 6 — Validación de fecha límite (Edge Case)
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["date", "validation", "business-logic"]
tipo: mc
enunciado:
  "Al validar un formulario de reserva que no permite fechas en el pasado, ¿cuál es el caso borde técnico más delicado?"
opciones_explicitas:
  - "Ingresar una fecha hace 10 años."
  - "Ingresar la fecha actual a las 23:59:59."
  - "Ingresar la fecha actual a las 00:00:00."
  - "Ingresar una fecha futura."
respuesta: "Ingresar la fecha actual a las 00:00:00."
pasos:
  - "Analizar la comparación de timestamps vs fechas."
  - "Considerar la zona horaria del servidor vs cliente."
  - "Determinar si 'hoy' es válido o inválido según la regla de negocio."
explicacion: La transición exacta entre 'pasado' y 'futuro' (medianoche) es propensa a errores de comparación de fechas/horas.
```

### 7 — Aserción de contenido en JSON
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["api", "json", "assertion"]
tipo: vf
enunciado:
  "Al validar una respuesta JSON, usar `toEqual` en Jest para comparar objetos con propiedades en orden diferente siempre fallará porque JSON es orden-sensible."
respuesta: falso
pasos:
  - "Recordar cómo Jest compara objetos."
  - "Verificar si Jest ignora el orden de las claves."
  - "Confirmar que la igualdad de valor no depende del orden de serialización."
explicacion: Jest compara el valor de las propiedades, no el orden de las claves. JSON como string sí es orden-sensible, pero como objeto no.
```

### 8 — Completar selector CSS en Selenium
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["selenium", "css", "locator"]
tipo: completar
enunciado:
  "Para encontrar un elemento con ID 'btn-submit' usando Selenium WebDriver en Python, se usa: driver.find_element(By.____, 'btn-submit')"
respuesta: "ID"
respuestas_validas:
  - "ID"
  - "By.ID"
pasos:
  - "Identificar la clase By en Selenium."
  - "Seleccionar el tipo de localizador por identificador único."
  - "Evitar usar 'name' o 'css selector' por eficiencia."
explicacion: `By.ID` es el localizador más rápido y específico si el atributo id está presente y es único.
```

### 9 — Manejo de archivos vacíos
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["file-upload", "edge-case", "io"]
tipo: mc
enunciado:
  "Al probar una funcionalidad de carga de archivos CSV, ¿cuál es el caso borde que prueba la robustez del parser del backend?"
opciones_explicitas:
  - "Cargar un archivo de 500MB."
  - "Cargar un archivo con extensión .txt renombrado a .csv."
  - "Cargar un archivo vacío (0 bytes)."
  - "Cargar un archivo con caracteres UTF-8."
respuesta: "Cargar un archivo vacío (0 bytes)."
pasos:
  - "Evaluar cómo el backend maneja streams vacíos."
  - "Verificar si se lanza un error de parseo o se acepta como lista vacía."
  - "Confirmar el comportamiento esperado por el negocio."
explicacion: Los archivos vacíos pueden causar NullPointerExceptions o errores de índice si no se validan antes del parseo.
```

### 10 — Variable no definida en script de test
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["javascript", "error", "debugging"]
tipo: vf
enunciado:
  "En JavaScript, acceder a una variable que no ha sido declarada en el scope actual lanza un ReferenceError en tiempo de ejecución."
respuesta: verdadero
pasos:
  - "Diferenciar entre `undefined` (valor) y `ReferenceError` (variable no declarada)."
  - "Confirmar que el motor JS detiene la ejecución o captura el error."
  - "Validar que esto es un caso borde de código defectuoso."
explicacion: `ReferenceError` ocurre al intentar leer una variable no declarada, a diferencia de `undefined` que es un valor asignado.
```

### 11 — Completar aserción de excepción en Pytest
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["pytest", "python", "exception"]
tipo: completar
enunciado:
  "En Pytest, para asegurar que una función `divide(a, b)` lanza una excepción `ZeroDivisionError` al dividir por cero, se usa: with pytest.raises(____): divide(10, 0)"
respuesta: "ZeroDivisionError"
respuestas_validas:
  - "ZeroDivisionError"
  - "Exception"
pasos:
  - "Identificar el tipo de excepción nativa de Python para división por cero."
  - "Usar el contexto manager `pytest.raises`."
  - "Asegurar que el tipo coincida exactamente con el lanzado."
explicacion: `pytest.raises` captura la excepción específica; usar `Exception` genérico puede ocultar errores de tipo incorrecto.
```

### 12 — Prueba de red intermitente
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["network", "resilience", "edge-case"]
tipo: mc
enunciado:
  "Al probar una app offline-first, ¿cuál es el caso borde más crítico para validar la sincronización?"
opciones_explicitas:
  - "Perder conexión durante la escritura de datos locales."
  - "Tener conexión WiFi estable."
  - "Cambiar de idioma de la app."
  - "Cerrar y abrir la app rápidamente."
respuesta: "Perder conexión durante la escritura de datos locales."
pasos:
  - "Simular la caída de red justo antes de enviar al servidor."
  - "Verificar que los datos persisten en local."
  - "Comprobar la cola de sincronización al recuperar conexión."
explicacion: La pérdida de conexión durante la escritura es el punto de fallo principal para la integridad de datos en apps offline.
```

### 13 — Aserción de cadena vacía
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["string", "validation", "jest"]
tipo: vf
enunciado:
  "En Jest, `expect('').toBe('')` es la forma recomendada de verificar que una cadena está vacía, en lugar de `expect('').toBeFalsy()`."
respuesta: verdadero
pasos:
  - "Evaluar la precisión de `toBe` vs `toBeFalsy`."
  - "Considerar que `toBeFalsy` también acepta `null`, `undefined`, `0`."
  - "Confirmar que `toBe` es más específico para strings vacíos."
explicacion: `toBeFalsy` es demasiado permisivo; `toBe('')` asegura que el valor es exactamente una cadena vacía, no otro falsy.
```

### 14 — Completar configuración de retries en Playwright
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["playwright", "retries", "configuration"]
tipo: completar
enunciado:
  "Para configurar que un test en Playwright intente ejecutarse 3 veces antes de fallar definitivamente, se añade en `playwright.config.js`: retries: ____"
respuesta: "3"
respuestas_validas:
  - "3"
  - "2"
  - "4"
pasos:
  - "Identificar la propiedad de configuración global de retries."
  - "Establecer un número entero positivo."
  - "Evitar usar valores altos que enmascaren bugs reales."
explicacion: Los retries ayudan a mitigar la inestabilidad de la UI, pero deben usarse con moderación para no ocultar fallos intermitentes reales.
```

### 15 — Validación de rango numérico
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["input", "range", "validation"]
tipo: mc
enunciado:
  "Al validar un campo de 'Edad' que debe estar entre 18 y 99, ¿cuál es el caso borde más probable de error lógico?"
opciones_explicitas:
  - "Ingresar 17."
  - "Ingresar 100."
  - "Ingresar 18.5."
  - "Ingresar 'dieciocho' en texto."
respuesta: "Ingresar 18.5."
pasos:
  - "Analizar si el campo acepta decimales."
  - "Verificar si la validación es estrictamente entera."
  - "Confirmar si 18.5 debe ser truncado o rechazado."
explicacion: Las edades decimales son un caso borde común si la validación no especifica tipo entero, pudiendo causar errores de tipo en el backend.
```

### 16 — Aserción de longitud de array
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["array", "jest", "assertion"]
tipo: vf
enunciado:
  "En Jest, `expect(array).toHaveLength(0)` es equivalente a `expect(array).toEqual([])` para verificar que un array está vacío."
respuesta: falso
pasos:
  - "Diferenciar entre verificar la propiedad `length` y el contenido."
  - "Considerar objetos que tienen `length` pero no son arrays (ej. `arguments`)."
  - "Confirmar que `toHaveLength` es más específico para arrays."
explicacion: `toHaveLength` verifica la propiedad `length`, útil para objetos tipo-array-like. `toEqual([])` verifica que el valor sea exactamente un array vacío.
```

### 17 — Completar mock en Jest
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["jest", "mock", "spy"]
tipo: completar
enunciado:
  "Para crear un mock de una función `fetchData` que devuelve una promesa resuelta con 'data', se usa: jest.fn().____({ data });"
respuesta: "mockResolvedValue"
respuestas_validas:
  - "mockResolvedValue"
  - "mockReturnValue"
pasos:
  - "Identificar que la función devuelve una promesa."
  - "Seleccionar el método de mock para promesas."
  - "Evitar `mockReturnValue` que devuelve la promesa directamente, no su resultado."
explicacion: `mockResolvedValue` resuelve la promesa mockeada con el valor dado, simulando un éxito asíncrono.
```

### 18 — Prueba de accesibilidad
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["a11y", "axe-core", "edge-case"]
tipo: mc
enunciado:
  "Al probar accesibilidad, ¿cuál es el caso borde que suele fallar en lectores de pantalla?"
opciones_explicitas:
  - "Imágenes con atributo `alt` vacío."
  - "Botones sin texto visible pero con `aria-label`."
  - "Enlaces con `href` vacío."
  - "Textos en color gris claro sobre fondo blanco."
respuesta: "Imágenes con atributo `alt` vacío."
pasos:
  - "Evaluar el impacto de `alt=''` en lectores de pantalla."
  - "Determinar si la imagen es decorativa o informativa."
  - "Confirmar si la ausencia de alt causa lectura de nombre de archivo."
explicacion: `alt=''` oculta la imagen a lectores de pantalla (decorativa), pero si falta, el lector lee el nombre del archivo, confundiendo al usuario.
```

### 19 — Aserción de tipo en TypeScript
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["typescript", "type-checking", "runtime"]
tipo: vf
enunciado:
  "En JavaScript/TypeScript, `typeof null` devuelve 'null'."
respuesta: falso
pasos:
  - "Recordar el comportamiento histórico de `typeof`."
  - "Verificar la salida real de `typeof null`."
  - "Confirmar que devuelve 'object' por un bug inicial de JS."
explicacion: `typeof null` devuelve 'object' debido a un bug histórico en JavaScript que nunca se corrigió por compatibilidad.
```

### 20 — Completar aserción de propiedad en objeto
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["object", "jest", "assertion"]
tipo: completar
enunciado:
  "Para verificar que un objeto `user` tiene la propiedad 'email' definida (aunque sea null), se usa: expect(user).toHaveProperty(____);"
respuesta: "'email'"
respuestas_validas:
  - "'email'"
  - '"email"'
  - "email"
pasos:
  - "Identificar la propiedad a verificar."
  - "Usar `toHaveProperty` para verificar existencia."
  - "Asegurar que el nombre de la propiedad sea una cadena."
explicacion: `toHaveProperty` verifica la existencia de la clave, independientemente de su valor (incluyendo `undefined` o `null`).
```

### 21 — Prueba de carga con datos duplicados
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["database", "duplicates", "validation"]
tipo: mc
enunciado:
  "Al probar un endpoint de registro de usuarios, ¿cuál es el caso borde más crítico para la integridad de la base de datos?"
opciones_explicitas:
  - "Registrar un usuario con email único."
  - "Registrar un usuario con email ya existente."
  - "Registrar un usuario sin contraseña."
  - "Registrar un usuario con contraseña corta."
respuesta: "Registrar un usuario con email ya existente."
pasos:
  - "Simular la creación de un registro duplicado."
  - "Verificar si la BD permite duplicados o lanza error."
  - "Confirmar si la API devuelve 409 Conflict."
explicacion: Los duplicados violan restricciones de unicidad y son un caso borde común que debe manejarse con errores claros.
```

### 22 — Aserción de número en rango
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["number", "jest", "assertion"]
tipo: vf
enunciado:
  "En Jest, `expect(5).toBeGreaterThan(4)` y `expect(5).toBeGreaterThanOrEqual(5)` son ambas verdaderas."
respuesta: verdadero
pasos:
  - "Evaluar la condición de mayor que estricto."
  - "Evaluar la condición de mayor o igual."
  - "Confirmar que 5 cumple ambas condiciones."
explicacion: 5 es mayor que 4 y también es igual a 5, por lo que ambas aserciones son lógicamente correctas.
```

### 23 — Completar aserción de error personalizado
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["error", "jest", "assertion"]
tipo: completar
enunciado:
  "Para verificar que una función lanza un error con el mensaje específico 'User not found', se usa: expect(() => func()).toThrowError(____);"
respuesta: "'User not found'"
respuestas_validas:
  - "'User not found'"
  - '"User not found"'
  - "/User not found/"
pasos:
  - "Identificar el mensaje exacto del error."
  - "Usar `toThrowError` para validar el mensaje."
  - "Asegurar que el mensaje coincida exactamente o por regex."
explicacion: `toThrowError` permite validar el mensaje de error, asegurando que el sistema informe correctamente el fallo.
```

### 24 — Prueba de zoom en UI móvil
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["mobile", "ui", "responsive"]
tipo: mc
enunciado:
  "Al probar una app móvil, ¿cuál es el caso borde de visualización más crítico?"
opciones_explicitas:
  - "Ver la app en modo oscuro."
  - "Ver la app con el zoom del sistema al 200%."
  - "Ver la app en pantalla completa."
  - "Ver la app con el teclado virtual abierto."
respuesta: "Ver la app con el zoom del sistema al 200%."
pasos:
  - "Simular la accesibilidad de texto grande."
  - "Verificar si los elementos se superponen o quedan ocultos."
  - "Confirmar la usabilidad bajo zoom extremo."
explicacion: El zoom del sistema afecta a toda la UI; los casos borde de superposición de elementos son comunes y críticos para la usabilidad.
```

### 25 — Aserción de valor nulo en JSON
```
metadata:
  materia: "qa-testing"
  tema: "caso-feliz-y-casos-borde"
  nivel: "intermedio"
  tags: ["json", "null", "assertion"]
tipo: vf
enunciado:
  "En Jest, `expect(null).toBeNull()` es preferible a `expect(null).toBe(undefined)` para verificar nulos."
respuesta: verdadero
pasos:
  - "Diferenciar entre `null` y `undefined`."
  - "Verificar que `toBeUndefined` falla con `null`."
  - "Confirmar que `toBeNull` es específico para el valor null."
explicacion: `null` y `undefined` son valores distintos en JavaScript; usar el matcher correcto asegura la precisión de la prueba.
```