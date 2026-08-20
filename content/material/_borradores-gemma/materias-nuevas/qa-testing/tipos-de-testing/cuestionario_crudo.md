### 1 — Definición de Testing de Humo
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["smoke-testing", "definicion"]
enunciado: "El testing de humo (smoke testing) se utiliza para verificar que los cambios recientes no han roto las funcionalidades críticas de inmediato tras un despliegue."
respuesta: verdadero
pasos:
  - "Identificar que el objetivo es la estabilidad básica post-despliegue."
  - "Confirmar que no requiere pruebas exhaustivas de todas las rutas."
explicacion: El smoke testing es una verificación rápida y superficial para asegurar que la build es estable y no tiene errores críticos que impidan pruebas más detalladas.
```

### 2 — Completar: Comando de Verificación de Humo en Docker
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["docker", "smoke-testing", "completar"]
enunciado: "Para verificar si un contenedor Docker ha iniciado correctamente y está escuchando en el puerto 8080, se suele usar el comando `curl` o `wget` contra `http://localhost:8080/health`. ¿Cuál es la opción de `curl` que permite que el comando falle silenciosamente si el servicio no responde inmediatamente, útil en scripts de espera?"
respuesta: "--fail"
respuestas_validas:
  - "--fail"
  - "-f"
pasos:
  - "Reconocer que se necesita un flag para manejar errores HTTP 4xx/5xx como fallos de shell."
  - "Seleccionar el flag estándar de curl para este propósito."
explicacion: El flag `--fail` hace que curl no guarde el contenido en caso de error HTTP, permitiendo que el script detecte el fallo mediante el código de salida.
```

### 3 — MC: Objetivo del Testing de Regresión
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["regression-testing", "mc"]
enunciado: "¿Cuál es el objetivo principal del testing de regresión?"
opciones_explicitas:
  - "Verificar que nuevas funcionalidades funcionan por primera vez."
  - "Asegurar que cambios recientes no han roto funcionalidades existentes que antes funcionaban."
  - "Evaluar el rendimiento del sistema bajo carga máxima."
  - "Validar la experiencia de usuario con clientes reales."
respuesta: "Asegurar que cambios recientes no han roto funcionalidades existentes que antes funcionaban."
pasos:
  - "Analizar cada opción."
  - "Identificar que la definición clave de regresión es la aparición de errores en código que ya estaba estable."
explicacion: El testing de regresión busca garantizar la estabilidad del software existente al introducir cambios, ya sean correcciones o nuevas características.
```

### 4 — VF: Testing de Estrés vs. Carga
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["performance-testing", "diferencias", "vf"]
enunciado: "El testing de estrés (stress testing) y el testing de carga (load testing) son técnicas idénticas que miden exactamente lo mismo: el comportamiento del sistema bajo condiciones normales de uso."
respuesta: falso
pasos:
  - "Distinguir entre condiciones 'normales' (carga) y condiciones 'extremas' (estrés)."
  - "Confirmar que el estrés busca el punto de ruptura, no el comportamiento normal."
explicacion: El testing de carga mide el comportamiento bajo carga esperada, mientras que el testing de estrés somete al sistema a cargas más allá de sus límites normales para ver cómo se comporta y si se recupera.
```

### 5 — Completar: Flag de Ejecución de Pruebas Unitarias en Jest
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["jest", "unit-testing", "completar"]
enunciado: "En Jest, para ejecutar solo las pruebas que han fallado en la ejecución anterior (útil en flujos de desarrollo continuo), se utiliza el flag `--only-failed`. ¿Cuál es la abreviatura corta de este flag?"
respuesta: "-o"
respuestas_validas:
  - "-o"
  - "--only-failed"
pasos:
  - "Recordar la sintaxis de línea de comandos de Jest."
  - "Identificar la abreviatura común para `--only-failed`."
explicacion: El flag `-o` es la abreviatura oficial de Jest para ejecutar solo las pruebas que fallaron en la pasada anterior.
```

### 6 — MC: Tipo de Testing para Seguridad Perimetral
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["security-testing", "mc"]
enunciado: "¿Qué tipo de testing se enfoca específicamente en identificar vulnerabilidades como inyección SQL, XSS y configuraciones erróneas en la infraestructura?"
opciones_explicitas:
  - "Testing de Interfaz de Usuario (UI Testing)"
  - "Testing de Seguridad (Security Testing)"
  - "Testing de Compatibilidad"
  - "Testing de Instalación"
respuesta: "Testing de Seguridad (Security Testing)"
pasos:
  - "Clasificar las amenazas mencionadas (SQLi, XSS)."
  - "Asociarlas con el dominio de seguridad informática."
explicacion: El testing de seguridad evalúa la capacidad del sistema para protegerse contra accesos no autorizados y amenazas externas.
```

### 7 — VF: Pruebas de Aceptación del Usuario (UAT)
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["uat", "vf"]
enunciado: "Las pruebas de aceptación del usuario (UAT) suelen ser realizadas exclusivamente por el equipo de QA interno antes de cualquier otra validación."
respuesta: falso
pasos:
  - "Identificar quién realiza la UAT: el cliente o usuario final, no solo QA."
  - "Confirmar que es la última etapa antes de la entrega."
explicacion: La UAT es realizada por el cliente o usuarios finales para validar que el sistema cumple con sus requisitos de negocio, no solo por QA.
```

### 8 — Completar: Herramienta de Mocking en Python
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["python", "mocking", "completar"]
enunciado: "En Python, para sustituir una dependencia externa por un objeto simulado durante las pruebas unitarias, se utiliza el módulo estándar `______`."
respuesta: "unittest.mock"
respuestas_validas:
  - "unittest.mock"
  - "mock"
pasos:
  - "Recordar el módulo de la biblioteca estándar de Python para simulaciones."
  - "Escribir el nombre completo del módulo."
explicacion: `unittest.mock` es el módulo estándar de Python para crear objetos simulados (mocks) y spies.
```

### 9 — MC: Pruebas Exploratorias
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["exploratory-testing", "mc"]
enunciado: "¿Qué característica define mejor al testing exploratorio?"
opciones_explicitas:
  - "Se basa estrictamente en casos de prueba escritos de antemano sin desviaciones."
  - "Combina el aprendizaje, diseño de pruebas y ejecución de pruebas en tiempo real."
  - "Automatiza el 100% de la cobertura sin intervención humana."
  - "Solo se realiza después de la fase de desarrollo completa."
respuesta: "Combina el aprendizaje, diseño de pruebas y ejecución de pruebas en tiempo real."
pasos:
  - "Definir el concepto de testing exploratorio."
  - "Identificar su naturaleza dinámica y no scriptada."
explicacion: El testing exploratorio es un enfoque donde el tester diseña y ejecuta pruebas simultáneamente, aprendiendo del sistema a medida que prueba.
```

### 10 — VF: Pruebas de Integración
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["integration-testing", "vf"]
enunciado: "El testing de integración se centra en verificar el funcionamiento interno de una única función o método aislado del resto del sistema."
respuesta: falso
pasos:
  - "Distinguir entre prueba de unidad (aislada) y prueba de integración (interacción)."
  - "Confirmar que la integración trata sobre módulos trabajando juntos."
explicacion: El testing de integración verifica la interacción entre módulos o servicios, no el funcionamiento interno aislado de una unidad (eso es unit testing).
```

### 11 — Completar: Patrón de Pruebas de Carga en JMeter
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["jmeter", "load-testing", "completar"]
enunciado: "En Apache JMeter, para simular un aumento gradual de usuarios concurrentes hasta un límite máximo, se utiliza un elemento de tipo `______` dentro del Thread Group."
respuesta: "Constant Throughput Timer"
respuestas_validas:
  - "Constant Throughput Timer"
  - "Constant Timer"
  - "Step Timer"
  - "Gaussian Random Timer"
explicacion: Aunque hay varias formas, los timers como `Constant Throughput Timer` o configuraciones específicas del Thread Group (como Ramp-Up) controlan la tasa de carga. *Nota: Para ser más preciso en VBLang básico, usaremos un concepto más simple.*

Corrección de contexto para VBLang básico:
enunciado: "En JMeter, el elemento que define cuántos usuarios virtuales (threads) se ejecutarán simultáneamente se llama `______`."
respuesta: "Thread Group"
respuestas_validas:
  - "Thread Group"
  - "thread group"
pasos:
  - "Identificar el contenedor principal de la carga en JMeter."
  - "Nombrarlo correctamente."
explicacion: El Thread Group es el elemento fundamental que configura el número de hilos (usuarios) y la frecuencia de ejecución.
```

### 12 — MC: Pruebas de Compatibilidad
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["compatibility-testing", "mc"]
enunciado: "¿Qué tipo de testing asegura que una aplicación web funcione correctamente en diferentes navegadores y versiones?"
opciones_explicitas:
  - "Testing de Rendimiento"
  - "Testing de Compatibilidad"
  - "Testing de Seguridad"
  - "Testing de Humo"
respuesta: "Testing de Compatibilidad"
pasos:
  - "Analizar el requisito: funcionamiento en múltiples entornos."
  - "Asociar con el tipo de testing correspondiente."
explicacion: El testing de compatibilidad verifica la interoperabilidad del software con distintos hardware, SO, navegadores, etc.
```

### 13 — VF: Pruebas de Caja Blanca
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["black-box-white-box", "vf"]
enunciado: "En el testing de caja blanca (white-box testing), el tester no necesita conocer la estructura interna, el código o la implementación del sistema."
respuesta: falso
pasos:
  - "Definir caja blanca: requiere conocimiento interno."
  - "Definir caja negra: no requiere conocimiento interno."
explicacion: El testing de caja blanca requiere que el tester conozca el código fuente y la lógica interna para diseñar las pruebas.
```

### 14 — Completar: Assert en AssertJ
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["java", "assertj", "completar"]
enunciado: "En AssertJ, para verificar que una colección contiene un elemento específico, se utiliza el método `______(expectedElement)` sobre el objeto de aserción."
respuesta: "contains"
respuestas_validas:
  - "contains"
  - "toContain"
  - "isIn"
explicacion: El método principal en AssertJ para verificar la presencia de un elemento en una colección es `contains()`.
```

### 15 — MC: Pruebas de Usabilidad
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["usability-testing", "mc"]
enunciado: "¿Qué aspecto evalúa principalmente el testing de usabilidad?"
opciones_explicitas:
  - "La velocidad de respuesta del servidor."
  - "La facilidad con la que un usuario puede aprender y utilizar el sistema."
  - "La seguridad de las contraseñas."
  - "La cobertura de código fuente."
respuesta: "La facilidad con la que un usuario puede aprender y utilizar el sistema."
pasos:
  - "Definir usabilidad: experiencia del usuario."
  - "Descartar aspectos técnicos como rendimiento o seguridad."
explicacion: La usabilidad se centra en la experiencia del usuario (UX), incluyendo eficiencia, satisfacción y facilidad de aprendizaje.
```

### 16 — VF: Pruebas de Instalación
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["installation-testing", "vf"]
enunciado: "El testing de instalación verifica que el software se pueda instalar, actualizar y desinstalar correctamente en diversos entornos."
respuesta: verdadero
pasos:
  - "Definir el alcance del testing de instalación."
  - "Confirmar que cubre ciclo de vida del despliegue."
explicacion: Este tipo de testing asegura que los procesos de instalación, actualización y desinstalación funcionen sin errores.
```

### 17 — Completar: Framework de E2E en Node.js
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["e2e", "nodejs", "completar"]
enunciado: "Un framework popular para pruebas end-to-end (E2E) en aplicaciones web modernas, que utiliza TypeScript y tiene comandos como `cy.visit()`, es `______`."
respuesta: "Cypress"
respuestas_validas:
  - "cypress"
  - "Cypress"
  - "cypress.io"
pasos:
  - "Identificar el framework basado en `cy.visit()`."
  - "Nombrarlo correctamente."
explicacion: Cypress es un framework de pruebas E2E que utiliza el namespace `cy` para interactuar con el navegador.
```

### 18 — MC: Pruebas de Recuperación ante Desastres
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["disaster-recovery", "mc"]
enunciado: "¿Qué tipo de testing valida la capacidad de un sistema para recuperarse de fallos críticos como cortes de energía o fallos de hardware?"
opciones_explicitas:
  - "Testing de Rendimiento"
  - "Testing de Recuperación (Recovery Testing)"
  - "Testing de Interfaz"
  - "Testing de Regresión"
respuesta: "Testing de Recuperación (Recovery Testing)"
pasos:
  - "Analizar el escenario: fallo crítico y recuperación."
  - "Seleccionar el tipo de testing asociado a la resiliencia."
explicacion: El testing de recuperación verifica que el sistema pueda restaurar su estado y funcionalidad tras un fallo.
```

### 19 — VF: Pruebas de Humo en Desarrollo Ágil
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["agile", "smoke-testing", "vf"]
enunciado: "En metodologías ágiles, el testing de humo se realiza únicamente al final del proyecto, antes de la entrega final al cliente."
respuesta: falso
pasos:
  - "Considerar la naturaleza iterativa de Agile."
  - "Entender que las builds son frecuentes."
explicacion: En Agile, el smoke testing se realiza con frecuencia, a menudo tras cada integración o build, para detectar errores rápidamente.
```

### 20 — Completar: Herramienta de Pruebas de API
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["api-testing", "tools", "completar"]
enunciado: "Una herramienta popular de código abierto para probar APIs que permite enviar solicitudes HTTP y visualizar respuestas JSON es `______`."
respuesta: "Postman"
respuestas_validas:
  - "postman"
  - "Postman"
  - "Insomnia"
  - "Insomnia Rest Client"
explicacion: Postman e Insomnia son las herramientas estándar para el testing manual y automatizado de APIs.
```

### 21 — MC: Pruebas de Confiabilidad
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["reliability-testing", "mc"]
enunciado: "¿Qué mide principalmente el testing de confiabilidad (reliability testing)?"
opciones_explicitas:
  - "La cantidad de bugs encontrados en la primera semana."
  - "La capacidad del sistema para funcionar sin fallos durante un período específico bajo condiciones específicas."
  - "La velocidad de carga de las páginas."
  - "La compatibilidad con móviles."
respuesta: "La capacidad del sistema para funcionar sin fallos durante un período específico bajo condiciones específicas."
pasos:
  - "Definir confiabilidad: estabilidad en el tiempo."
  - "Distinguir de rendimiento o compatibilidad."
explicacion: La confiabilidad mide la probabilidad de que el sistema opere correctamente sin fallos durante un tiempo determinado.
```

### 22 — VF: Pruebas de Interfaz de Usuario (UI)
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["ui-testing", "vf"]
enunciado: "El testing de interfaz de usuario (UI testing) se enfoca exclusivamente en la lógica de negocio del backend y las bases de datos."
respuesta: falso
pasos:
  - "Definir UI testing: capa visual y interacción."
  - "Descartar backend como foco principal."
explicacion: El UI testing verifica la interacción visual, los flujos de usuario y la presentación en la interfaz, no la lógica interna del backend.
```

### 23 — Completar: Aserción de Igualdad en JUnit
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["junit", "assertions", "completar"]
enunciado: "En JUnit 5, para verificar que dos objetos son iguales (usando `equals()`), se utiliza el método estático `Assertions.______(expected, actual)`."
respuesta: "assertEquals"
respuestas_validas:
  - "assertEquals"
  - "assertEqual"
  - "assert_equals"
explicacion: El método estándar en JUnit 5 para comparar valores de igualdad es `assertEquals`.
```

### 24 — MC: Pruebas de Seguridad Penetration
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["penetration-testing", "mc"]
enunciado: "¿Qué tipo de testing simula un ataque real de un hacker malicioso para encontrar vulnerabilidades explotables?"
opciones_explicitas:
  - "Testing de Humo"
  - "Penetration Testing (Pentesting)"
  - "Testing de Usabilidad"
  - "Testing de Regresión"
respuesta: "Penetration Testing (Pentesting)"
pasos:
  - "Identificar la simulación de ataque activo."
  - "Asociar con Pentesting."
explicacion: El pentesting es una evaluación activa de seguridad que simula ataques reales para descubrir vulnerabilidades.
```

### 25 — VF: Pruebas de Configuración
```
metadata:
  materia: "qa-testing"
  tema: "tipos-de-testing"
  nivel: "basico"
  tags: ["configuration-testing", "vf"]
enunciado: "El testing de configuración verifica que el software funciona correctamente bajo diferentes configuraciones de hardware y software."
respuesta: verdadero
pasos:
  - "Definir testing de configuración: variedad de entornos."
  - "Confirmar que es un tipo de testing de compatibilidad."
explicacion: Este testing asegura que las variaciones en el entorno del cliente (SO, drivers, memoria) no afecten negativamente al software.
```