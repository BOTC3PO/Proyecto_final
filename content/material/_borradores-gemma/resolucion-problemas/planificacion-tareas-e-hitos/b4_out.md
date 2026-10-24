### 1 — Hitos vs Tareas
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["gestion_proyectos", "conceptos_base"]

respuesta: "hitos"
tipo: "mc"
opciones_explicitas: ["tareas", "hitos", "recursos", "riesgos"]

enunciado: "Mientras que las tareas son acciones que consumen tiempo y esfuerzo para avanzar en un proyecto, los ___ son puntos de control que marcan la finalización de un entregable o una fase importante."

explicacion: |
  Las tareas tienen una duración (comienzo y fin), mientras que los hitos representan un momento específico en el tiempo (duración cero) que indica un logro significativo.
```

### 2 — Duración de actividades
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "basico"
  tags: ["planificacion", "tiempo"]

respuesta: falso
tipo: "vf"

enunciado: "En un cronograma de proyecto, un hito se define técnicamente como una actividad con una duración establecida de al menos 24 horas."

explicacion: |
  Falso. Por definición, un hito es un evento sin duración (duración = 0) que sirve para marcar un progreso, no es una tarea de trabajo.
```

### 3 — Secuencia de planificación
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "secuencia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Definir requisitos", "Diseño de arquitectura", "Desarrollo de código", "Hito: Prototipo aprobado"],
    ["Compra de materiales", "Preparación de terreno", "Construcción de cimientos", "Hito: Estructura completada"]
  ]

respuesta: ["Definir requisitos", "Diseño de arquitectura", "Desarrollo de código", "Hito: Prototipo aprobado"]
tipo: "ordenar"
opciones_explicitas: ["Definir requisitos", "Diseño de arquitectura", "Desarrollo de código", "Hito: Prototipo aprobado", "Compra de materiales", "Preparación de terreno", "Construcción de cimientos", "Hito: Estructura completada"]

enunciado: "Ordena cronológicamente la secuencia de planificación para el escenario seleccionado:"

pasos:
  - "Identifica la secuencia lógica de tareas que conduce al hito."

explicacion: |
  Un proyecto se organiza mediante una secuencia lógica de tareas que culminan en un hito, el cual valida que la fase anterior ha concluido con éxito.
```

### 4 — Identificación de hitos
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "intermedio"
  tags: ["analisis", "gestion"]

variables:
  item_idx: uno_de([0, 1])
  datos: [
    ["Instalar software", "Hito: Sistema operativo listo"],
    ["Pintar la pared", "Hito: Habitación terminada"]
  ]

respuesta: "Hito: sistema operativo listo"
tipo: "completar"
respuestas_validas: ["Hito: sistema operativo listo", "Hito: Habitación terminada"]

enunciado: "Analiza el primer caso: La acción es 'Instalar software'. El evento de control resultante es: ___"

explicacion: |
  El hito es la culminación o el resultado del conjunto de tareas; en este caso, la disponibilidad del sistema operativo.
```

### 5 — Diferencia estructural
```
metadata:
  materia: "resolucion-problemas"
  tema: "planificacion_tareas_e_hitos"
  nivel: "avanzado"
  tags: ["metodologia", "control"]

respuesta: "un hito no tiene duración"
tipo: "completar"
respuestas_validas: ["un hito no tiene duración", "una tarea tiene duración"]

enunciado: "La diferencia fundamental en la gestión de tiempos es que una tarea implica un proceso de ejecución, mientras que ___."

explicacion: |
  La distinción clave es la dimensión temporal: las tareas ocupan un intervalo de tiempo, los hitos son puntos de referencia instantáneos.
```