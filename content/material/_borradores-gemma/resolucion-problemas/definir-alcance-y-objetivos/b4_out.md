### 1 — Alcance vs. Objetivos
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "gestion_proyectos"]

respuesta: "objetivos"
tipo: "completar"
respuestas_validas: ["objetivos", "el objetivo"]

enunciado: "Mientras que el alcance define los límites y entregables de un proyecto, los ___ definen el propósito y los resultados que se desean alcanzar."

explicacion: |
  El alcance delimita el 'qué' y el 'hasta dónde' (fronteras), mientras que los objetivos definen el 'para qué' (metas/resultados).
```

### 2 — El límite del alcance
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["exclusiones", "gestion_riesgos"]

variables:
  escenario: uno_de([
    ["Incluir soporte técnico 24/7", "Excluir mantenimiento preventivo"],
    ["Desarrollar la app móvil", "Excluir la versión web"],
    ["Instalar el software", "Excluir la capacitación de usuarios"]
  ])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["escenario[0]", "escenario[1]", "escenario[2]"]

enunciado: "En la gestión de proyectos, definir lo que NO está incluido en el alcance es tan crítico como definir lo que sí está. Si un proyecto tiene como límite definido el desarrollo de una aplicación móvil, ¿cuál de los siguientes ejemplos representa una exclusión clara del alcance?"

pasos:
  - "Identificar el entregable principal definido en el enunciado."
  - "Buscar la opción que represente una tarea o producto fuera de ese entregable."

explicacion: |
  Definir las exclusiones (out-of-scope) ayuda a prevenir el 'scope creep' (corrimiento del alcance) y gestiona las expectativas del cliente.
```

### 3 — Características de los objetivos
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["metodologia_smart"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Un objetivo de proyecto debe ser medible y tener un tiempo determinado para diferenciarse de un deseo general?"

explicacion: |
  Efectivamente, un objetivo mal definido (sin métrica o tiempo) es solo una intención, mientras que un objetivo bien definido permite evaluar el éxito del proyecto.
```

### 4 — Jerarquía de la planificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["secuencia_logica"]

respuesta: ["objetivos", "alcance", "entregables", "tareas"]
tipo: "ordenar"
opciones_explicitas: ["objetivos", "alcance", "entregables", "tareas"]

enunciado: "Ordena lógicamente los elementos de planificación, desde la intención estratégica hasta la ejecución operativa:"

explicacion: |
  Primero se establece el propósito (objetivos), luego se delimita el trabajo (alcance), luego se definen los productos finales (entregables) y finalmente las acciones concretas (tareas).
```

### 5 — El impacto del alcance mal definido
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["riesgos", "gestion_proyectos"]

variables:
  caso: uno_de([
    ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"],
    ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"],
    ["aumentar el presupuesto", "retrasar la fecha de entrega", "reducir la calidad"]
  ])

respuesta: caso[1]
tipo: "mc"
opciones_explicitas: ["caso[0]", "caso[1]", "caso[2]"]

enunciado: "Cuando el alcance no se define correctamente y se permiten cambios constantes sin control (scope creep), ¿cuál es la consecuencia más directa en el cronograma del proyecto?"

explicacion: |
  El descontrol en el alcance consume más horas de las previstas, lo que impacta directamente en el cumplimiento de los plazos (retraso).
```