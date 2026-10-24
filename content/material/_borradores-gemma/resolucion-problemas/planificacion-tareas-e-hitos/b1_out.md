### 1 — Hitos vs Tareas
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos", "vocabulario"]

respuesta: "hitos"
tipo: completar
respuestas_validas: ["hitos"]

enunciado: "Mientras que las tareas son actividades que consumen tiempo y recursos, los ___ son puntos de control específicos que marcan la finalización de una fase importante."

explicacion: |
  Los hitos (milestones) no tienen duración propia; representan un momento en el tiempo que valida el progreso de un proyecto.
```

### 2 — Duración de un Hito
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Un hito en la gestión de proyectos se define como una actividad que requiere una duración de al menos 24 horas para completarse."

explicacion: |
  Falso. Los hitos son eventos de duración cero; son puntos de referencia, no tareas con duración.
```

### 3 — Orden de la Planificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["secuencia"]

respuesta: ["Definir objetivos", "Listar tareas", "Asignar recursos", "Establecer hitos"]
tipo: ordenar
opciones_explicitas: ["Definir objetivos", "Listar tareas", "Asignar recursos", "Establecer hitos"]

enunciado: "Ordena cronológicamente los pasos lógicos para iniciar la planificación de un proyecto:"

explicacion: |
  Primero se debe saber qué se quiere lograr (objetivos), luego qué hay que hacer (tareas), con qué se hará (recursos) y finalmente qué puntos de control marcarán el éxito (hitos).
```

### 4 — Característica de las Tareas
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "C"
tipo: mc
opciones_explicitas: ["A) Un punto de control sin duración", "B) El resultado final de un proyecto", "C) Una unidad de trabajo con inicio y fin definidos"]

enunciado: "¿Cuál de las siguientes opciones describe mejor una 'tarea' en un cronograma?"

explicacion: |
  Una tarea es una acción concreta que requiere un esfuerzo y un tiempo determinado para ser ejecutada.
```

### 5 — Relación entre Tareas e Hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["logica"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["La tarea 'Diseño de plano' termina, marcando el hito 'Aprobación de diseño'.", "Aprobación de diseño"],
    ["La tarea 'Instalación eléctrica' termina, marcando el hito 'Red eléctrica lista'.", "Red eléctrica lista"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Aprobación de diseño", "Red eléctrica lista", "Ninguna de las anteriores"]

enunciado: "En el escenario seleccionado, ¿cuál es el hito resultante de la finalización de la tarea mencionada?"

explicacion: |
  Los hitos suelen ser el resultado natural de haber completado un conjunto de tareas críticas.
```