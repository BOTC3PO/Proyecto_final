### 1 — Definición de QA
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["definicion", "qa"]
tipo: "vf"
enunciado: "El aseguramiento de la calidad (QA) consiste exclusivamente en encontrar bugs antes de que el software llegue al usuario final."
respuesta: falso
pasos:
  - "Leer la afirmación sobre QA."
  - "Identificar que QA incluye procesos preventivos y de mejora, no solo detección de errores."
  - "Determinar que la afirmación es reduccionista y omite la naturaleza preventiva de QA."
explicacion: "QA es un conjunto de actividades que garantizan que los procesos de desarrollo sean adecuados para producir software de calidad. No se limita solo a encontrar bugs (que es Testing/QC), sino que incluye prevención, estándares y mejora de procesos."
```

### 2 — Diferencia entre QA y QC
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["qa-vs-qc", "procesos"]
tipo: "completar"
enunciado: "Mientras que el QA se enfoca en los ______ para prevenir defectos, el QC se enfoca en el ______ para identificarlos."
respuesta: "procesos"
respuestas_validas:
  - "procesos"
  - "proceso"
  - "procedimientos"
  - "procedimiento"
pasos:
  - "Analizar la distinción clásica entre prevención y detección."
  - "Completar el primer hueco con el elemento que se mejora (procesos)."
  - "Completar el segundo hueco con el elemento que se verifica (producto/software)."
explicacion: "El QA mejora los procesos de desarrollo para prevenir defectos. El QC (Control de Calidad) verifica el producto final (software) para identificar defectos existentes."
```

### 3 — Objetivo del Testing
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["objetivo", "testing"]
tipo: "mc"
enunciado: "¿Cuál es el objetivo principal de realizar pruebas de software?"
opciones_explicitas:
  - "Demostrar que el software no tiene errores."
  - "Ejecutar el software para verificar que cumple con los requisitos esperados."
  - "Crear documentación técnica para los desarrolladores."
  - "Reemplazar la fase de desarrollo."
respuesta: "Ejecutar el software para verificar que cumple con los requisitos esperados."
pasos:
  - "Evaluar cada opción contra la definición estándar de testing."
  - "Descartar 'demostrar que no tiene errores' (imposible probar exhaustivamente)."
  - "Seleccionar la opción que describe la verificación de requisitos."
explicacion: "Segun Glenford Myers, el objetivo del testing es ejecutar un programa con la intención de encontrar errores, o más ampliamente, verificar que el comportamiento del software se alinea con los requisitos especificados."
```

### 4 — Tipos de Pruebas por Visibilidad
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["caja-negra", "caja-blanca"]
tipo: "completar"
enunciado: "Las pruebas de caja ______ se realizan sin conocer el código interno del sistema, basándose solo en especificaciones funcionales."
respuesta: "negra"
respuestas_validas:
  - "negra"
  - "black-box"
  - "black box"
  - "caja negra"
pasos:
  - "Identificar la técnica que ignora la estructura interna."
  - "Completar el término que describe esta visión externa."
explicacion: "La prueba de caja negra trata al sistema como una caja cerrada; el tester solo conoce entradas y salidas, sin importar cómo funciona internamente."
```

### 5 — Nivel de Pruebas: Unitarias
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["unitarias", "nivel"]
tipo: "vf"
enunciado: "Las pruebas unitarias suelen ser escritas y mantenidas por los desarrolladores de software."
respuesta: verdadero
pasos:
  - "Recordar quién tiene acceso directo al código fuente."
  - "Confirmar que la responsabilidad de probar componentes individuales recae en el desarrollador."
explicacion: "Las pruebas unitarias validan unidades individuales de código (funciones, clases) y, por naturaleza, son responsabilidad del desarrollador que las escribe."
```

### 6 — Pruebas de Integración
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["integracion", "interfaz"]
tipo: "completar"
enunciado: "Las pruebas de ______ verifican que los diferentes módulos o componentes del sistema interactúen correctamente entre sí."
respuesta: "integración"
respuestas_validas:
  - "integración"
  - "integration"
  - "integración"
  - "integration test"
pasos:
  - "Identificar el nivel donde los módulos se conectan."
  - "Completar el nombre del nivel de prueba."
explicacion: "Las pruebas de integración se centran en las interfaces y la transferencia de datos entre módulos combinados, asegurando que funcionen como un grupo."
```

### 7 — Pruebas de Sistema
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["sistema", "completo"]
tipo: "mc"
enunciado: "¿En qué nivel de prueba se valida el comportamiento completo del sistema desplegado en un entorno similar al de producción?"
opciones_explicitas:
  - "Pruebas Unitarias"
  - "Pruebas de Integración"
  - "Pruebas de Sistema"
  - "Pruebas de Aceptación"
respuesta: "Pruebas de Sistema"
pasos:
  - "Analizar el alcance: 'comportamiento completo del sistema'."
  - "Descartar niveles anteriores que son parciales."
  - "Seleccionar el nivel que valida el sistema como un todo."
explicacion: "Las pruebas de sistema validan el sistema completo e integrado contra los requisitos especificados, verificando su funcionamiento global."
```

### 8 — Pruebas de Aceptación (UAT)
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["uac", "usuario"]
tipo: "vf"
enunciado: "Las pruebas de aceptación del usuario (UAT) generalmente son realizadas por el equipo de QA interno antes de cualquier prueba de sistema."
respuesta: falso
pasos:
  - "Identificar quién realiza la UAC (usuario final o representante)."
  - "Verificar cuándo ocurre (después de las pruebas de sistema)."
  - "Concluir que la afirmación es incorrecta en orden y responsable."
explicacion: "La UAC es la última fase antes del lanzamiento y la realiza el cliente o usuario final para validar que el software cumple sus necesidades de negocio, no el equipo QA interno."
```

### 9 — Pruebas Regresivas
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["regresion", "regresivas"]
tipo: "completar"
enunciado: "Las pruebas ______ se ejecutan después de modificar el software para asegurar que los cambios no introdujeron nuevos errores en funcionalidades existentes."
respuesta: "regresivas"
respuestas_validas:
  - "regresivas"
  - "regresion"
  - "de regresión"
  - "regression"
pasos:
  - "Identificar el tipo de prueba asociada a cambios y mantenimiento."
  - "Completar el término que indica 'volver atrás' en la verificación."
explicacion: "Las pruebas de regresión garantizan que las nuevas modificaciones no afecten negativamente el comportamiento previo del sistema."
```

### 10 — Pruebas de Humo (Smoke Testing)
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["humo", "build"]
tipo: "mc"
enunciado: "¿Qué tipo de pruebas se realizan primero para verificar que las funciones críticas del sistema básico operan correctamente en un nuevo build?"
opciones_explicitas:
  - "Pruebas de Estrés"
  - "Pruebas de Humo"
  - "Pruebas de Regresión"
  - "Pruebas de Seguridad"
respuesta: "Pruebas de Humo"
pasos:
  - "Analizar el propósito: verificación rápida de estabilidad básica."
  - "Identificar la metáfora 'humo' que indica si el sistema 'enciende' o no."
  - "Seleccionar la opción correcta."
explicacion: "Las pruebas de humo (o build verification) son superficiales y rápidas, diseñadas para decidir si un build es lo suficientemente estable para pruebas más profundas."
```

### 11 — Pruebas de Humo vs. Sanity
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["humo", "sanity"]
tipo: "vf"
enunciado: "Las pruebas de humo y las pruebas de sanidad son técnicamente idénticas en alcance y profundidad."
respuesta: falso
pasos:
  - "Comparar el alcance: humo es amplio/superficial, sanidad es estrecho/focalizado."
  - "Determinar que no son idénticas."
explicacion: "Aunque similares, las de humo verifican la estabilidad general del sistema, mientras que las de sanidad son un subconjunto más estrecho y focalizado tras cambios específicos."
```

### 12 — Pruebas de Estrés
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["estres", "no-funcional"]
tipo: "completar"
enunciado: "Las pruebas de ______ evalúan la estabilidad del sistema y su comportamiento bajo condiciones extremas o carga pesada."
respuesta: "estrés"
respuestas_validas:
  - "estrés"
  - "stress"
  - "carga"
  - "presión"
pasos:
  - "Identificar el tipo de prueba no funcional relacionada con límites."
  - "Completar el término que indica sobrecarga."
explicacion: "Las pruebas de estrés someten al sistema a condiciones límite para ver cómo se degrada y si se recupera correctamente."
```

### 13 — Pruebas de Usabilidad
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["usabilidad", "ux"]
tipo: "mc"
enunciado: "¿Qué aspecto del software evalúan principalmente las pruebas de usabilidad?"
opciones_explicitas:
  - "La velocidad del procesador."
  - "La facilidad con la que un usuario puede aprender y operar el sistema."
  - "La seguridad de la base de datos."
  - "La compatibilidad con navegadores antiguos."
respuesta: "La facilidad con la que un usuario puede aprender y operar el sistema."
pasos:
  - "Analizar el término 'usabilidad'."
  - "Seleccionar la opción relacionada con la experiencia del usuario y la facilidad de uso."
explicacion: "La usabilidad se centra en la experiencia del usuario (UX), evaluando si el sistema es intuitivo, eficiente y satisfactorio de usar."
```

### 14 — Pruebas de Compatibilidad
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["compatibilidad", "cross-browser"]
tipo: "vf"
enunciado: "Las pruebas de compatibilidad aseguran que el software funcione correctamente en diferentes dispositivos, navegadores o sistemas operativos."
respuesta: verdadero
pasos:
  - "Verificar la definición de compatibilidad en el contexto de software."
  - "Confirmar que abarca múltiples entornos de ejecución."
explicacion: "Estas pruebas garantizan que el comportamiento sea consistente independientemente del entorno (SO, navegador, hardware) donde se ejecute."
```

### 15 — Pruebas de Seguridad
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["seguridad", "vulnerabilidades"]
tipo: "completar"
enunciado: "Las pruebas de ______ buscan identificar vulnerabilidades que permitirían accesos no autorizados o manipulaciones de datos."
respuesta: "seguridad"
respuestas_validas:
  - "seguridad"
  - "security"
  - "penetration"
  - "pentest"
pasos:
  - "Identificar el tipo de prueba relacionada con amenazas y protección."
  - "Completar el término correspondiente."
explicacion: "Las pruebas de seguridad validan que el sistema proteja los datos y recursos contra accesos malintencionados."
```

### 16 — Pruebas de Recuperación
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["recuperacion", "backup"]
tipo: "mc"
enunciado: "¿Qué tipo de prueba verifica la capacidad del sistema para recuperarse de fallos de hardware o desastres?"
opciones_explicitas:
  - "Pruebas de Recuperación"
  - "Pruebas de Regresión"
  - "Pruebas de Interfaz"
  - "Pruebas de Humo"
respuesta: "Pruebas de Recuperación"
pasos:
  - "Analizar el contexto: 'recuperarse de fallos'."
  - "Seleccionar la opción que describe la resiliencia y restauración."
explicacion: "Las pruebas de recuperación validan los mecanismos de backup y restauración para asegurar que el sistema vuelva a un estado operativo tras un fallo."
```

### 17 — Pruebas de Interfaz (UI)
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["ui", "frontend"]
tipo: "vf"
enunciado: "Las pruebas de interfaz de usuario (UI) se centran exclusivamente en la lógica de negocio del servidor y no en la presentación visual."
respuesta: falso
pasos:
  - "Analizar el alcance de las pruebas UI."
  - "Confirmar que se enfocan en la interacción visual y el flujo del usuario."
  - "Descartar la afirmación que las limita al servidor."
explicacion: "Las pruebas UI validan la presentación, la navegación y la interacción directa del usuario con la interfaz gráfica."
```

### 18 — Pruebas de Acceptance Criteria
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["criterios", "aceptacion"]
tipo: "completar"
enunciado: "Los ______ de aceptación son las condiciones específicas que un software debe cumplir para ser aceptado por un usuario, cliente o otro sistema estakeholder."
respuesta: "criterios"
respuestas_validas:
  - "criterios"
  - "criteria"
  - "requisitos"
  - "condiciones"
pasos:
  - "Identificar el término estándar en gestión de requisitos."
  - "Completar el hueco con la palabra clave."
explicacion: "Los criterios de aceptación definen los límites de la funcionalidad y son la base para las pruebas de aceptación."
```

### 19 — Pruebas Exploratorias
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["exploratorias", "libre"]
tipo: "mc"
enunciado: "¿Qué característica distingue a las pruebas exploratorias de las pruebas scripteadas?"
opciones_explicitas:
  - "Se realizan sin casos de prueba predefinidos."
  - "Se ejecutan automáticamente mediante código."
  - "Solo se usan en la fase de producción."
  - "No requieren conocimientos del tester."
respuesta: "Se realizan sin casos de prueba predefinidos."
pasos:
  - "Analizar la definición de pruebas exploratorias."
  - "Identificar la ausencia de guiones o scripts previos como clave."
  - "Seleccionar la opción correcta."
explicacion: "Las pruebas exploratorias combinan el aprendizaje, diseño de pruebas y ejecución simultáneamente, sin depender de guiones predefinidos."
```

### 20 — Pruebas de Configuración
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["configuracion", "entorno"]
tipo: "vf"
enunciado: "Las pruebas de configuración verifican que el software funcione correctamente en la variedad de configuraciones de hardware y software soportadas."
respuesta: verdadero
pasos:
  - "Verificar el objetivo de las pruebas de configuración."
  - "Confirmar que abarcan diferentes entornos soportados."
explicacion: "Estas pruebas aseguran que el software sea robusto ante las distintas combinaciones de entorno en las que los usuarios podrían instalarlo."
```

### 21 — Pruebas de Instalación
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["instalacion", "desinstalacion"]
tipo: "completar"
enunciado: "Las pruebas de ______ aseguran que el proceso de instalación, actualización y desinstalación del software funcione sin errores."
respuesta: "instalación"
respuestas_validas:
  - "instalación"
  - "installation"
  - "setup"
  - "despliegue"
pasos:
  - "Identificar el ciclo de vida del despliegue."
  - "Completar el término relacionado con la puesta en marcha."
explicacion: "Estas pruebas validan la integridad del proceso de despliegue, asegurando que el usuario pueda instalar y usar el software correctamente."
```

### 22 — Pruebas de Compatibilidad Ascendente
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["ascendente", "versiones"]
tipo: "mc"
enunciado: "¿Qué verifica la compatibilidad ascendente (forward compatibility)?"
opciones_explicitas:
  - "Que el software actual funcione en versiones antiguas."
  - "Que los datos creados en la versión actual puedan ser leídos por versiones futuras."
  - "Que el software funcione en diferentes navegadores."
  - "Que el sistema no colapse bajo carga."
respuesta: "Que los datos creados en la versión actual puedan ser leídos por versiones futuras."
pasos:
  - "Analizar el término 'ascendente' en el contexto de versiones."
  - "Identificar que se refiere a la interacción con el futuro (nuevas versiones)."
  - "Seleccionar la opción correcta."
explicacion: "La compatibilidad ascendente asegura que la versión actual sea compatible con versiones posteriores del sistema o formatos de datos."
```

### 23 — Pruebas de Compatibilidad Descendente
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["descendente", "legacy"]
tipo: "vf"
enunciado: "La compatibilidad descendente (backward compatibility) asegura que una nueva versión del software pueda trabajar con datos o configuraciones de versiones anteriores."
respuesta: verdadero
pasos:
  - "Verificar la definición de compatibilidad hacia atrás."
  - "Confirmar que protege la inversión en datos antiguos."
explicacion: "Es crucial para la retención de usuarios, permitiendo que nuevas versiones lean y procesen información generada por versiones viejas."
```

### 24 — Pruebas de Rendimiento
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["rendimiento", "velocidad"]
tipo: "completar"
enunciado: "Las pruebas de ______ miden la velocidad, tiempo de respuesta y consumo de recursos del sistema bajo una carga específica."
respuesta: "rendimiento"
respuestas_validas:
  - "rendimiento"
  - "performance"
  - "velocidad"
  - "eficiencia"
pasos:
  - "Identificar la métrica clave: velocidad y recursos."
  - "Completar el término estándar de QA."
explicacion: "Las pruebas de rendimiento validan que el sistema cumpla con los tiempos de respuesta y capacidad de procesamiento requeridos."
```

### 25 — Pruebas de Regresión Automática
```yaml
metadata:
  materia: "qa-testing"
  tema: "que-es-testear"
  nivel: "basico"
  tags: ["automatizacion", "regresion"]
tipo: "mc"
enunciado: "¿Por qué son las pruebas de regresión candidatas ideales para la automatización?"
opciones_explicitas:
  - "Porque son nuevas y nunca se han ejecutado antes."
  - "Porque son repetitivas, estables y requieren ejecución frecuente."
  - "Porque requieren creatividad y exploración humana."
  - "Porque solo se ejecutan una vez al año."
respuesta: "Porque son repetitivas, estables y requieren ejecución frecuente."
pasos:
  - "Analizar la naturaleza de las pruebas de regresión."
  - "Identificar que su repetitividad las hace eficientes de automatizar."
  - "Seleccionar la opción que justifica la automatización."
explicacion: "La automatización de regresión es eficiente porque estas pruebas son estables, se ejecutan a menudo y su ejecución manual es tediosa y propensa a errores."
```