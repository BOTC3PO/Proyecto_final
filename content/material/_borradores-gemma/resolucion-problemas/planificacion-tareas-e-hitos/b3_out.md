### 1 — Tarea vs Hito
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_basicos", "planificacion"]

respuesta: "hito"
tipo: completar
respuestas_validas: ["hito", "hito"]

enunciado: "En la gestión de proyectos, una actividad que requiere esfuerzo y tiempo para ser completada se denomina tarea, mientras que un punto de control que marca un evento significativo o la finalización de una fase se denomina ___."

explicacion: |
  Las tareas son acciones con duración (ej. "Escribir el código"), mientras que los hitos son puntos en el tiempo sin duración propia que marcan progreso (ej. "Diseño aprobado").
```

### 2 — Duración de los hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un hito debe tener una duración asignada en el cronograma para poder ser medido?"

explicacion: |
  Falso. Por definición, un hito es un evento instantáneo (duración cero) que sirve para marcar el fin de una etapa o un logro importante.
```

### 3 — Identificación de errores en cronogramas
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["gestion_de_errores", "cronograma"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Escenario A: El hito 'Entrega de prototipo' tiene una duración de 5 días.", "Escenario B: El hito 'Aprobación de presupuesto' es una tarea de 2 horas."]

enunciado: "Analiza el escenario seleccionado: {escenario[escenario_idx][0]}. ¿Cuál es el error de planificación cometido?"

explicacion: |
  Los hitos representan momentos en el tiempo, no procesos. Si tienen duración, se están tratando erróneamente como tareas en lugar de puntos de control.
```

### 4 — Secuencia lógica de proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["secuencia", "logica"]

respuesta: ["Definir requerimientos", "Diseño de arquitectura", "Desarrollo de módulos", "Pruebas de integración", "Lanzamiento del producto"]
tipo: ordenar
opciones_explicitas: ["Definir requerimientos", "Diseño de arquitectura", "Desarrollo de módulos", "Pruebas de integración", "Lanzamiento del producto"]

enunciado: "Ordena las siguientes fases de un proyecto de software de forma lógica, desde la concepción hasta la entrega final:"

explicacion: |
  La planificación requiere una secuencia lógica donde los hitos (como el lanzamiento) ocurren solo después de haber completado las tareas de desarrollo y pruebas.
```

### 5 — Relación entre tareas e hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["relaciones", "dependencias"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: caso[caso_idx][1]
tipo: mc
opciones_explicitas: ["La tarea es un subconjunto de un hito.", "El hito es el resultado de la finalización de una o más tareas.", "Un hito siempre contiene múltiples tareas dentro de sí mismo.", "Las tareas y los hitos son conceptos intercambiables."]

enunciado: "Considerando el caso: {caso[caso_idx][0]}. ¿Cuál es la relación correcta entre estos elementos?"

explicacion: |
  Un hito actúa como un marcador de posición que se alcanza cuando las tareas que lo preceden han sido completadas con éxito.
```