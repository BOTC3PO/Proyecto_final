### 1 — Definición de alcance exploratorio
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["alcance", "cartografia"]
enunciado: >
  En la fase inicial del testing exploratorio, la {{tactica}} permite al tester
  generar mapas mentales o diagramas de flujo de las funcionalidades a probar,
  sirviendo como guía para la ejecución pero sin ser un script rígido.
tipo: completar
respuesta: "cartografia"
respuestas_validas:
  - "cartografia"
  - "cartografía"
  - "mapa mental"
  - "mapa-mental"
  - "mental-map"
explicacion: >
  La cartografía (o creación de mapas mentales) es una táctica clave para
  estructurar el pensamiento del tester antes y durante la exploración,
  identificando caminos lógicos y dependencias sin escribir un plan de prueba
  detallado paso a paso.
```

### 2 — Ventaja principal del enfoque
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["beneficios", "contexto"]
enunciado: >
  A diferencia de las pruebas de caja blanca o los scripts automatizados rígidos,
  la principal ventaja del testing exploratorio radica en su capacidad para
  adaptarse rápidamente a:
tipo: mc
respuesta: "la retroalimentación inmediata y el contexto del sistema"
opciones_explicitas:
  - "la cobertura del 100% de la línea de código"
  - "la retroalimentación inmediata y el contexto del sistema"
  - "la generación automática de reportes de defectos"
  - "la eliminación de la necesidad de documentación"
explicacion: >
  El testing exploratorio combina el diseño de pruebas y la ejecución simultáneamente,
  permitiendo al tester ajustar su estrategia en tiempo real basándose en lo que
  observa en el sistema, lo cual es imposible con scripts predefinidos.
```

### 3 — Registro de sesiones
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["registro", "session-based"]
enunciado: >
  Para que el testing exploratorio sea reproducible y auditable en un entorno
  profesional, se utiliza la técnica SBTE. ¿Qué significan las siglas S, B y
  E en este contexto?
tipo: completar
respuesta: "Session-Based Test Management"
respuestas_validas:
  - "Session-Based Test Management"
  - "gestión basada en sesiones de prueba"
  - "SBTM"
explicacion: >
  SBTE (Session-Based Test Management) es el marco de trabajo estándar para
  estructurar sesiones de testing exploratorio con objetivos claros, tiempos
  definidos y registros de trabajo para garantizar la trazabilidad.
```

### 4 — Identificación de defectos ocultos
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["detectar", "errores"]
enunciado: >
  Verdadero o Falso: El testing exploratorio es menos efectivo que las pruebas
  de regresión automatizada para detectar defectos en flujos de datos masivos
  y repetitivos.
tipo: vf
respuesta: verdadero
explicacion: >
  Es verdadero. Los scripts automatizados son superiores en eficiencia y precisión
  para ejecutar miles de iteraciones con datos específicos. El exploratorio brilla
  en la creatividad y la detección de errores lógicos o de UX, no en la repetición
  masiva.
```

### 5 — Táctica de "Chaos"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "chaos"]
enunciado: >
  Un tester decide intencionalmente cerrar y reabrir la aplicación, cambiar la
  zona horaria del sistema operativo y desconectar la red intermitentemente
  durante la sesión para ver cómo reacciona el frontend. ¿Qué táctica está
  aplicando?
tipo: mc
respuesta: "Chaos Testing"
opciones_explicitas:
  - "Boundary Value Analysis"
  - "Equivalence Partitioning"
  - "Chaos Testing"
  - "State Transition Testing"
explicacion: >
  El Chaos Testing en el contexto de QA exploratorio implica introducir fallos o
  condiciones inestables deliberadamente para evaluar la resiliencia y el manejo
  de errores de la aplicación.
```

### 6 — Objeto de la sesión
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["objetivos", "charter"]
enunciado: >
  En la técnica SBTE, el documento que define el objetivo, el alcance y las
  reglas de una sesión de testing exploratorio se denomina:
tipo: completar
respuesta: "charter"
respuestas_validas:
  - "charter"
  - "test charter"
  - "plancha de pruebas"
  - "guia de sesion"
  - "charter de prueba"
explicacion: >
  El Charter (o plancha) es el elemento central de la gestión basada en sesiones.
  Proporciona dirección al tester sin ser un script detallado, permitiendo la
  libertad de exploración dentro de un marco definido.
```

### 7 — Análisis de decisiones
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["diseño", "decision"]
enunciado: >
  Si un tester está explorando un formulario de login y decide probar primero
  con credenciales válidas, luego inválidas, y finalmente intentar inyección SQL,
  está aplicando una estrategia basada en:
tipo: mc
respuesta: "el modelo de riesgo y la intuición del tester"
opciones_explicitas:
  - "una matriz de requisitos estricta"
  - "el modelo de riesgo y la intuición del tester"
  - "una lista de verificación predefinida"
  - "la cobertura de código"
explicacion: >
  El testing exploratorio depende en gran medida de la experiencia, la intuición
  y el análisis de riesgo del tester para decidir qué caminos probar, en lugar de
  seguir una secuencia fija dictada por la documentación.
```

### 8 — Herramienta de captura
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["herramientas", "logging"]
enunciado: >
  Durante una sesión de testing exploratorio, es crucial capturar eventos,
  errores y acciones. ¿Cuál es la práctica recomendada para registrar estos
  datos sin interruir el flujo de pensamiento del tester?
tipo: mc
respuesta: "usar un log de eventos en tiempo real o grabación de pantalla"
opciones_explicitas:
  - "escribir un informe detallado al finalizar la sesión"
  - "usar un log de eventos en tiempo real o grabación de pantalla"
  - "no registrar nada, confiando en la memoria"
  - "enviar un email al desarrollador por cada clic"
explicacion: >
  El registro en tiempo real (logs, capturas, video) es vital porque permite
  reconstruir el paso a paso del defecto encontrado más tarde, algo imposible
  si solo se anotan notas vagas al final.
```

### 9 — Cobertura de caminos
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["cobertura", "caminos"]
enunciado: >
  Verdadero o Falso: El objetivo principal del testing exploratorio es alcanzar
  el 100% de cobertura de sentencias (statement coverage) del código fuente.
tipo: vf
respuesta: falso
explicacion: >
  Falso. El testing exploratorio no está diseñado para medir cobertura de código
  técnica. Su objetivo es descubrir defectos funcionales, de usabilidad y de
  integración mediante la interacción humana inteligente, no la medición estática.
```

### 10 — Táctica de "Reverse"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "reverse"]
enunciado: >
  Un tester decide iniciar la sesión de prueba desde la pantalla de "Olvidé mi
  contraseña" en lugar de la pantalla de inicio de sesión principal, para evaluar
  el flujo de recuperación. ¿Qué enfoque está utilizando?
tipo: mc
respuesta: "Testing desde el final hacia el inicio (Reverse Testing)"
opciones_explicitas:
  - "Boundary Value Analysis"
  - "Testing desde el final hacia el inicio (Reverse Testing)"
  - "Equivalence Partitioning"
  - "Exploración aleatoria pura"
explicacion: >
  Iniciar por puntos no convencionales o secundarios (como recuperación de
  contraseña) ayuda a descubrir flujos que a menudo se pasan por alto en los
  tests estándar de "happy path".
```

### 11 — Debriefing
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["post-sesion", "debrief"]
enunciado: >
  Al finalizar una sesión de testing exploratorio, el tester debe realizar un
  {{proceso}} para resumir lo encontrado, los defectos reportados y las áreas
  no cubiertas.
tipo: completar
respuesta: "debriefing"
respuestas_validas:
  - "debriefing"
  - "resumen"
  - "informe de sesion"
  - "post-mortem"
  - "revision"
explicacion: >
  El debriefing es la fase crítica de cierre donde se transforma la actividad
  exploratoria en información accionable para el equipo de desarrollo y QA.
```

### 12 — Limitación de la automatización
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["limitaciones", "humano"]
enunciado: >
  ¿Cuál de las siguientes es una limitación inherente del testing exploratorio
  frente a las pruebas automatizadas?
tipo: mc
respuesta: "La dificultad de la reproducibilidad exacta sin registros detallados"
opciones_explicitas:
  - "La incapacidad de detectar errores de sintaxis"
  - "La dificultad de la reproducibilidad exacta sin registros detallados"
  - "El alto costo de las herramientas de software"
  - "La imposibilidad de probar interfaces gráficas"
explicacion: >
  Sin un registro preciso (logs, video, clicks), es difícil reproducir un defecto
  encontrado de forma exploratoria, ya que la ejecución no fue determinista ni
  predefinida.
```

### 13 — Táctica de "Spike"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "spike"]
enunciado: >
  Un tester dedica los primeros 30 minutos de su sesión a navegar libremente por
  la aplicación nueva sin un objetivo específico, solo para familiarizarse con
  la UI. ¿Qué tipo de actividad es esta?
tipo: mc
respuesta: "Spike de aprendizaje"
opciones_explicitas:
  - "Prueba de carga"
  - "Spike de aprendizaje"
  - "Prueba de integración"
  - "Prueba de humo"
explicacion: >
  Un "Spike" es una actividad de investigación o aprendizaje breve para ganar
  contexto antes de comenzar pruebas más profundas, común en el inicio de una
  nueva fase de testing.
```

### 14 — Definición de "Tester"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["rol", "tester"]
enunciado: >
  En el contexto del testing exploratorio, el tester actúa principalmente como:
tipo: mc
respuesta: "un investigador que formula hipótesis y las valida"
opciones_explicitas:
  - "un ejecutor de scripts predefinidos"
  - "un investigador que formula hipótesis y las valida"
  - "un validador de requisitos estáticos"
  - "un administrador de bases de datos"
explicacion: >
  El tester exploratorio es un profesional que utiliza su mente para investigar
  el producto, formulando hipótesis sobre cómo podría fallar y probándolas
  dinámicamente.
```

### 15 — Gestión del tiempo
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["gestion", "tiempo"]
enunciado: >
  En SBTE, ¿cuál es la duración típica recomendada para una sesión de testing
  exploratorio enfocada para mantener la concentración y la calidad del registro?
tipo: mc
respuesta: "entre 45 y 90 minutos"
opciones_explicitas:
  - "menos de 10 minutos"
  - "entre 45 y 90 minutos"
  - "más de 4 horas continuas"
  - "exactamente 24 horas"
explicacion: >
  Sesiones de 45-90 minutos son óptimas: lo suficientemente largas para profundizar
  en un área, pero lo suficientemente cortas para mantener la atención plena y
  el registro detallado.
```

### 16 — Táctica de "Risk-Based"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "riesgo"]
enunciado: >
  Si un tester decide dedicar la mayor parte de su sesión a probar el módulo de
  pagos debido a su alta criticidad y complejidad reciente, está aplicando:
tipo: mc
respuesta: "Testing basado en riesgos"
opciones_explicitas:
  - "Testing aleatorio"
  - "Testing basado en riesgos"
  - "Testing de usabilidad"
  - "Prueba de rendimiento"
explicacion: >
  El Testing basado en riesgos prioriza las áreas con mayor probabilidad o impacto
  de fallo, optimizando el tiempo del tester explorador.
```

### 17 — Reproducibilidad de defectos
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["calidad", "defectos"]
enunciado: >
  Verdadero o Falso: Un defecto encontrado mediante testing exploratorio es
  automáticamente menos importante que uno encontrado en pruebas de sistema
  planificadas.
tipo: vf
respuesta: falso
explicacion: >
  Falso. La importancia del defecto depende de su severidad e impacto en el usuario,
  no de cómo fue descubierto. El exploratorio a menudo encuentra errores críticos
  que los tests planificados pasan por alto.
```

### 18 — Táctica de "Pair Testing"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "pair"]
enunciado: >
  Dos testers trabajan juntos en una sola máquina: uno conduce la exploración y
  el otro toma notas y registra eventos en tiempo real. ¿Cómo se llama esta
  técnica?
tipo: mc
respuesta: "Pair Testing"
opciones_explicitas:
  - "Mob Testing"
  - "Pair Testing"
  - "Exploración individual"
  - "Prueba de integración"
explicacion: >
  El Pair Testing combina la perspectiva del conductor (explorador) con la
  atención al detalle del pasajero (registrador), mejorando la calidad de los
  hallazgos.
```

### 19 — Análisis de datos
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "datos"]
enunciado: >
  Un tester prueba la entrada de datos en un campo numérico ingresando valores
  extremadamente grandes, negativos, caracteres especiales y vacíos para ver
  cómo se valida. ¿Qué técnica está utilizando implícitamente?
tipo: mc
respuesta: "Análisis de valores límite y particionado de equivalencia"
opciones_explicitas:
  - "Prueba de regresión"
  - "Análisis de valores límite y particionado de equivalencia"
  - "Prueba de aceptación del usuario"
  - "Prueba de seguridad"
explicacion: >
  Aunque se haga de forma exploratoria, el tester está aplicando mentalmente las
  técnicas de particionado de equivalencia y valores límite para cubrir los
  casos fronterizos y de error.
```

### 20 — Rol del desarrollador
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["colaboracion", "dev"]
enunciado: >
  En un equipo ágil, ¿cuál es el rol ideal del desarrollador durante el testing
  exploratorio del tester?
tipo: mc
respuesta: "Disponible para aclarar dudas y reproducir defectos reportados"
opciones_explicitas:
  - "Escribir los casos de prueba por adelantado"
  - "Disponible para aclarar dudas y reproducir defectos reportados"
  - "Observar pasivamente sin interactuar"
  - "Corregir todos los bugs en tiempo real durante la sesión"
explicacion: >
  La colaboración cercana es clave. El desarrollador ayuda a entender la lógica
  interna para que el tester pueda explorar más efectivamente y a verificar los
  defectos rápidamente.
```

### 21 — Táctica de "Time-Boxed"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "time-boxed"]
enunciado: >
  Si se asignan exactamente 60 minutos para probar el módulo de búsqueda, y
  al terminar se debe cambiar a otro módulo, se está utilizando:
tipo: mc
respuesta: "Time-Boxing"
opciones_explicitas:
  - "Feature Toggling"
  - "Time-Boxing"
  - "Code Review"
  - "Continuous Integration"
explicacion: >
  El Time-Boxing limita el tiempo dedicado a una tarea para evitar el perfeccionismo
  excesivo y asegurar que se cubran múltiples áreas en el tiempo disponible.
```

### 22 — Calidad del reporte
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["reportes", "calidad"]
enunciado: >
  ¿Qué elemento es CRÍTICO en el reporte de una sesión de testing exploratorio
  para que sea útil para los desarrolladores?
tipo: mc
respuesta: "Pasos claros para reproducir el defecto"
opciones_explicitas:
  - "La opinión subjetiva del tester sobre la UI"
  - "Pasos claros para reproducir el defecto"
  - "La fecha de nacimiento del tester"
  - "El nombre del navegador usado"
explicacion: >
  Sin pasos reproducibles, un defecto encontrado es difícil de verificar y corregir.
  La claridad en la reproducción es la máxima prioridad en el reporte.
```

### 23 — Táctica de "Comparison"
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["tacticas", "comparacion"]
enunciado: >
  Un tester compara el comportamiento de la aplicación actual con la versión
  anterior para identificar regresiones visuales o funcionales durante su
  exploración. ¿Qué táctica está usando?
tipo: mc
respuesta: "Prueba de comparación"
opciones_explicitas:
  - "Prueba de humo"
  - "Prueba de comparación"
  - "Prueba de carga"
  - "Prueba de aceptación"
explicacion: >
  La prueba de comparación utiliza la versión previa como referencia para detectar
  cambios no deseados, aprovechando la memoria y la experiencia del tester.
```

### 24 — Entorno de pruebas
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["entorno", "config"]
enunciado: >
  Verdadero o Falso: El testing exploratorio debe realizarse siempre en un
  entorno de producción para obtener los datos más reales.
tipo: vf
respuesta: falso
explicacion: >
  Falso. Debe realizarse en un entorno de prueba (staging/QA) que sea lo más
  parecido posible a producción, pero seguro para manipular datos y forzar errores
  sin afectar a usuarios reales.
```

### 25 — Evaluación de la sesión
```yaml
metadata:
  materia: "qa-testing"
  tema: "testing-exploratorio"
  nivel: "avanzado"
  tags: ["evaluacion", "metrica"]
enunciado: >
  ¿Cuál es la métrica más adecuada para evaluar la efectividad de una sesión
  de testing exploratorio?
tipo: mc
respuesta: "Número de defectos válidos y hallazgos de calidad encontrados"
opciones_explicitas:
  - "Porcentaje de casos de prueba ejecutados"
  - "Número de defectos válidos y hallazgos de calidad encontrados"
  - "Tiempo total de codificación"
  - "Número de líneas de código modificadas"
explicacion: >
  Dado que no hay casos de prueba predefinidos, la efectividad se mide por el
  valor aportado: defectos encontrados, riesgos mitigados y conocimiento ganado.
```