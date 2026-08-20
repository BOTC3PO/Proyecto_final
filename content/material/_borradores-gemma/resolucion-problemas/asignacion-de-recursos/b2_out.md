### 1 — Optimización de presupuesto de marketing
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["presupuesto", "recursos"]

variables:
  escenario: uno_de([
    ["Redes Sociales", 500, 10],
    ["Publicidad TV", 2000, 2],
    ["Influencers", 1200, 5]
  ])

enunciado: "Se tiene un presupuesto total de $3000. Si decidimos invertir en {escenario[0]} (${escenario[1]}) y en {escenario[2]} (${escenario[2][1]}), ¿cuánto dinero nos queda disponible para otros gastos?"

respuesta: escenario[1] + escenario[2][1]
tipo: input
tolerancia_abs: 0

explicacion: |
  El cálculo es: $3000 - ($500 + $1200) = $1300.
```

### 2 — Priorización de tareas de desarrollo
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["priorizacion", "gestion_proyectos"]

opciones_explicitas: ["Diseño de UI", "Desarrollo Backend", "Pruebas QA", "Despliegue"]

respuesta: ["Diseño de UI", "Desarrollo Backend", "Pruebas QA", "Despliegue"]
tipo: ordenar

enunciado: "Ordena las etapas de un ciclo de vida de desarrollo de software estándar para una asignación de recursos eficiente."

explicacion: |
  Para optimizar recursos, primero se define la interfaz (UI), luego la lógica (Backend), se valida (QA) y finalmente se lanza (Despliegue).
```

### 3 — Disponibilidad de personal
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["personal", "capacidad"]

variables:
  equipo: uno_de([
    ["Equipo A", 3, 40],
    ["Equipo B", 5, 40],
    ["Equipo C", 2, 40]
  ])

enunciado: "El {equipo[0]} tiene {equipo[1]} personas. Si cada persona trabaja {equipo[2]} horas por semana, ¿cuántas horas totales de trabajo puede cubrir el equipo?"

respuesta: equipo[1] * equipo[2]
tipo: input
tolerancia_abs: 0

explicacion: |
  El total de horas es el número de personas multiplicado por las horas individuales: {equipo[1]} * {equipo[2]}.
```

### 4 — Análisis de viabilidad de materiales
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["materiales", "logistica"]

variables:
  material_necesario: 150
  material_en_stock: uno_de([100, 150, 200])

enunciado: "Para completar la tarea X se requieren {material_necesario} unidades de material. Si actualmente tenemos {material_en_stock} unidades en stock, ¿es suficiente el material para cubrir la demanda?"

respuesta: material_en_stock >= material_necesario
tipo: vf

explicacion: |
  Si el stock es mayor o igual al necesario, la respuesta es verdadero.
```

### 5 — Distribución de tiempo por tarea
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["cronograma", "tiempo"]

variables:
  tareas: [
    ["Tarea 1", 5],
    ["Tarea 2", 12],
    ["Tarea 3", 8]
  ]

enunciado: "Si el proyecto tiene una duración máxima de 25 horas y ya hemos asignado {tareas[0][1]} horas a la Tarea 1 y {tareas[1][1]} horas a la Tarea 2, ¿cuántas horas quedan disponibles para la Tarea 3 sin exceder el límite?"

respuesta: tareas[2][1]
tipo: completar

respuestas_validas: ["8"]

explicacion: |
  El tiempo restante es: 25 - (5 + 12) = 8 horas. Como la Tarea 3 requiere exactamente 8 horas, el presupuesto de tiempo es exacto.
```