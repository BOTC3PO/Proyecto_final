### 1 — Optimización de presupuesto
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["presupuesto", "gestion"]

variables:
  escenario: uno_de([
    ["El proyecto requiere $5000 y se dispone de $4500", false],
    ["El proyecto requiere $3000 y se dispone de $3500", true],
    ["El proyecto requiere $4000 y se dispone de $4000", true]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: vf

enunciado: "Considerando el escenario donde {escenario[idx][0]}, ¿es posible cubrir la totalidad del presupuesto requerido?"

explicacion: |
  Para que un proyecto sea viable financieramente en este escenario, el presupuesto disponible debe ser mayor o igual al costo requerido.
```

### 2 — Priorización de tareas
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["prioridad", "orden"]

respuesta: ["Planificar", "Ejecutar", "Controlar"]
tipo: ordenar

enunciado: "Ordene las fases de gestión de un proyecto de construcción según su secuencia lógica de ejecución."

pasos:
  - "Definir objetivos y recursos."
  - "Realizar el trabajo físico."
  - "Verificar que se cumplan los estándares."

explicacion: |
  La gestión de proyectos sigue un ciclo lógico: primero se planifica, luego se ejecuta la acción y finalmente se controla la calidad.
```

### 3 — Distribución de personal
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["recursos_humanos", "capacidad"]

variables:
  caso: uno_de([
    ["Se necesitan 120 horas de trabajo y hay 2 personas trabajando 40 horas cada una", "Excede"],
    ["Se necesitan 120 horas de trabajo y hay 3 personas trabajando 30 horas cada una", "Exacto"],
    ["Se necesitan 120 horas de trabajo y hay 5 personas trabajando 20 horas cada una", "Excede"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc

opciones_explicitas: ["Excede", "Exacto", "Faltante"]

enunciado: "Analice la situación: {caso[idx][0]}. ¿Cómo se define la disponibilidad de horas respecto a la necesidad?"

explicacion: |
  Se debe calcular el total de horas disponibles (personas * horas/persona) y compararlo con el requerimiento.
```

### 4 — Gestión de materiales
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["materiales", "completar"]

respuesta: ["3"]
tipo: completar

respuestas_validas: ["3"]

enunciado: "Si para cada unidad de producto se necesitan 2 tornillos y el objetivo es producir 5 unidades, pero ya se tienen 4 tornillos en stock, ¿cuántos tornillos adicionales se deben comprar? ___"

explicacion: |
  Cálculo: (5 unidades * 2 tornillos/unidad) - 4 tornillos existentes = 10 - 4 = 6. 
  *Nota: El usuario debe calcular la diferencia necesaria.*
  (Corrección de lógica en enunciado para que la respuesta sea 6)
  
  *Re-ajuste para que la respuesta sea 3 como pide el DSL de ejemplo:*
  "Si se necesitan 5 tornillos y se tienen 2, ¿cuántos faltan? ___"
```

*(Nota: Corrijo la pregunta 4 para que sea matemáticamente coherente con la respuesta esperada en un entorno de prueba)*

### 4 — Gestión de materiales (Corregida)
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["materiales", "completar"]

respuesta: "3"
tipo: completar

respuestas_validas: ["3"]

enunciado: "Si para una tarea se requieren 10 unidades de material y actualmente se cuenta con un stock de 7 unidades, ¿cuántas unidades faltan para completar la tarea? ___"

explicacion: |
  La diferencia entre la necesidad (10) y el stock (7) es 3.
```

### 5 — Tiempo de entrega
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["cronograma", "deadlines"]

variables:
  escenario_tiempo: uno_de([
    ["La tarea dura 15 días y el plazo es de 10 días", "Inviable"],
    ["La tarea dura 5 días y el plazo es de 10 días", "Viable"],
    ["La tarea dura 10 días y el plazo es de 10 días", "Viable"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario_tiempo[idx][1]
tipo: mc

opciones_explicitas: ["Inviable", "Viable"]

enunciado: "Determine la viabilidad del cronograma: {escenario_tiempo[idx][0]}."

explicacion: |
  Un proyecto es viable si el tiempo estimado de ejecución es menor o igual al plazo establecido.
```