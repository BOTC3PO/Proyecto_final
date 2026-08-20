### 1 — Definición de Planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["conceptos_basicos", "gestion"]

tipo: mc
opciones_explicitas: ["El proceso de tomar decisiones anticipadas para alcanzar objetivos", "La ejecución de tareas diarias sin un orden previo", "El análisis de los resultados obtenidos tras una crisis", "La asignación de recursos basada en la intuición"]

enunciado: "La planificación administrativa se define como ___________."

explicacion: |
  La planificación es la función administrativa que consiste en establecer metas y elegir los medios para alcanzarlas, actuando de forma anticipada.
```

### 2 — Elementos de la Planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["elementos", "objetivos"]

tipo: completar
respuestas_validas: ["objetivos", "estrategias", "recursos"]

enunciado: "Para que una planificación sea efectiva, debe definir claramente los ___________ que se desean alcanzar, las ___________ para lograrlos y los ___________ necesarios para llevar a cabo las acciones."

explicacion: |
  La planificación requiere de objetivos (el qué), estrategias (el cómo) y recursos (con qué).
```

### 3 — La importancia del "Cuándo"
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "basico"
  tags: ["temporalidad", "cronograma"]

tipo: vf
enunciado: "La planificación implica determinar el momento exacto (cuándo) en que deben ejecutarse las acciones para asegurar la eficiencia operativa."

respuesta: verdadero

explicacion: |
  La dimensión temporal es fundamental; sin un cronograma o tiempos definidos, la planificación carece de control y seguimiento.
```

### 4 — Fases del Proceso Administrativo
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["proceso_administrativo", "orden"]

tipo: ordenar
opciones_explicitas: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

enunciado: "Ordene cronológicamente las etapas lógicas de un proceso de planificación administrativa:"

respuesta: ["Establecer objetivos", "Analizar la situación actual", "Desarrollar planes de acción", "Implementar y controlar"]

explicacion: |
  Aunque los modelos varían, la lógica administrativa requiere primero saber a dónde ir (objetivos), dónde estamos (diagnóstico), cómo llegaremos (planes) y cómo nos aseguramos de haber llegado (control).
```

### 5 — Escalas de la Planificación
```
metadata:
  materia: "economia"
  tema: "planificacion_administrativa"
  nivel: "intermedio"
  tags: ["niveles", "estrategia"]

variables:
  idx: uno_de([0, 1])
  datos: [["estratégica", "largo plazo"], ["operativa", "corto plazo"]]

tipo: mc
opciones_explicitas: ["Estratégica", "Operativa", "Táctica"]

enunciado: "La planificación que se realiza a nivel de alta dirección, enfocándose en la organización como un todo y con un horizonte de {datos[idx][0]}, es la planificación ___________."

explicacion: |
  La planificación estratégica es global y de largo plazo, mientras que la operativa es específica y de corto plazo.
```