### 1 — Diferencia entre Asignación y Programación
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["planificacion", "conceptos"]

enunciado: "Mientras que la asignación de recursos se enfoca en 'quién' o 'con qué' se realiza una tarea, la programación de tareas se enfoca principalmente en el ___."

pasos:
  - "Identificar la dimensión temporal de la planificación."

respuestas_validas: ["cuándo"]
tipo: completar

explicacion: |
  La asignación de recursos determina la distribución de activos (personas, dinero, materiales), mientras que la programación (scheduling) determina el orden y el momento temporal en que se ejecutan las actividades.
```

### 2 — Asignación de Recursos vs. Gestión de Capacidad
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["capacidad", "recursos"]

variables:
  es_capacidad_limitada: true

enunciado: "En la gestión de proyectos, la asignación de recursos se diferencia de la gestión de capacidad en que la asignación se ocupa de la distribución específica, mientras que la gestión de capacidad se ocupa de la disponibilidad total de recursos. ¿Es verdadero que la asignación de recursos puede ignorar la capacidad máxima disponible sin causar conflictos?"

respuestas_validas: [falso]
tipo: vf

explicacion: |
  Si se asignan más recursos de los que la capacidad total permite, se produce una sobreasignación (overallocation), lo que genera conflictos de calendario y retrasos.
```

### 3 — El concepto de "Carga de Trabajo" vs "Duración"
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["estimacion", "duracion"]

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Una tarea requiere 10 horas de trabajo de un programador", "10"],
    ["Una tarea requiere 2 días de trabajo de un operario", "2"]
  ])

enunciado: "En la asignación de recursos, es vital distinguir entre la duración de una tarea y la carga de trabajo. Si una tarea tiene una duración de {escenario[0]}, la carga de trabajo total es de {escenario[1]} unidades de esfuerzo."

respuestas_validas: ["10", "2"]
tipo: completar

explicacion: |
  La duración es el tiempo transcurrido (calendario), mientras que la carga de trabajo es el esfuerzo total requerido (horas-hombre/días-hombre).
```

### 4 — Priorización de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["priorizacion", "optimizacion"]

enunciado: "Al realizar la asignación de recursos, se debe distinguir entre recursos renovables y no renovables. ¿Cuál de las siguientes opciones describe mejor a un recurso no renovable?"

opciones_explicitas: ["Un presupuesto de dinero fijo", "Un equipo de trabajo", "Una máquina de uso continuo", "El tiempo de un empleado"]
tipo: mc

explicacion: |
  Los recursos renovables (como el personal) pueden volver a estar disponibles tras completar una tarea. Los no renovables (como el presupuesto) se consumen y no se recuperan.
```

### 5 — Secuencia de la Planificación de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["proceso", "flujo"]

enunciado: "Para realizar una asignación de recursos efectiva en un proyecto complejo, se deben seguir estos pasos en el orden correcto:"

opciones_explicitas: ["Identificar tareas", "Estimar recursos necesarios", "Asignar recursos a las tareas", "Monitorear la utilización"]
tipo: ordenar

explicacion: |
  Primero se define el alcance (tareas), luego se sabe qué se necesita (estimación), después se asigna el recurso (asignación) y finalmente se controla que no haya sobreasignación (monitoreo).
```